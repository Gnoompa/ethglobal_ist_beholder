"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5185],{

/***/ 39907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useActivatedPlugin)
/* harmony export */ });
/* harmony import */ var _manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86766);
/* harmony import */ var _manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94685);


function useActivatedPlugin(pluginID, minimalModeEqualsTo) {
    const pluginSiteAdaptor = (0,_manager_site_adaptor_js__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginSiteAdaptor */ .o7)(pluginID, minimalModeEqualsTo);
    const pluginExtensionPage = (0,_manager_extension_page_js__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginExtensionPage */ .d2)(pluginID);
    return pluginSiteAdaptor ?? pluginExtensionPage ?? null;
}


/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useGoPlusLabsTrans)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
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
function useGoPlusLabsTrans() /**
      * `Check Security`
      */ /**
      * `Powered by Go+`
      */ /**
      * `Powered by`
      */ /**
      * `Go+`
      */ /**
      * `High Risk`
      */ /**
      * `Low Risk`
      */ /**
      * `Confirm swap risk`
      */ /**
      * `Medium Risk`
      */ /**
      * `Search`
      */ /**
      * `Please enter token contract address.`
      */ /**
      * `Token info`
      */ /**
      * `More Details`
      */ /**
      * `Security Detection`
      */ /**
      * `{{quantity}} Risky factors`
      */ /**
      * `{{quantity}} Attention factors`
      */ /**
      * `{{quantity}} Risky factor`
      */ /**
      * `{{quantity}} Attention factor`
      */ /**
      * `Contract source code not verified`
      */ /**
      * `This token contract has not been verified. We cannot check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud users of their assets`
      */ /**
      * `Functions that can suspend trading`
      */ /**
      * `If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk). `
      */ /**
      * `Token Name`
      */ /**
      * `Token Contract Address`
      */ /**
      * `Contract Creator`
      */ /**
      * `Contract Owner`
      */ /**
      * `Total Supply`
      */ /**
      * `Market Cap`
      */ /**
      * `Note: Scams detections might not be 100% guaranteed.`
      */ /**
      * `Results not found now. it might be chain network error, on-chain data abnormal or the token address is not covered now. please check as followings:`
      */ /**
      * `1. Make sure network is working;`
      */ /**
      * `2. Make sure the chain network or token address is correct;`
      */ /**
      * `3. Token address is not covered now, it might take more than 60s to get contract information again. Please try it later.`
      */ /**
      * `This token has no risky or attention factors.`
      */ /**
      * `Contract source code verified`
      */ /**
      * `This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.`
      */ /**
      * `Contract source code not verified`
      */ /**
      * `This token contract has not been verified. We cannot check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud users of their assets.`
      */ /**
      * `Proxy contract`
      */ /**
      * `This contract is an Admin Upgradeability Proxy. The proxy contract means the contract owner can modifiy the function of the token and could possibly effect the price.There is possibly a way for the team to Rug or Scam. Please confirm the details with the project team before buying.`
      */ /**
      * `No proxy`
      */ /**
      * `There is no proxy in the contract. The proxy contract means contract owner can modifiy the function of the token and possibly effect the price.`
      */ /**
      * `Mint function`
      */ /**
      * `The contract may contain additional issuance functions, which could maybe generate a large number of tokens, resulting in significant fluctuations in token prices. It is recommended to confirm with the project team whether it complies with the token issuance instructions.`
      */ /**
      * `No mint function`
      */ /**
      * `Mint function is transparent or non-existent. Hidden mint functions may increase the amount of tokens in circulation and effect the price of the token.`
      */ /**
      * `Functions with retrievable ownership`
      */ /**
      * `If this function exists, it is possible for the project owner to regain ownership even after relinquishing it`
      */ /**
      * `No function found that retrieves ownership`
      */ /**
      * `If this function exists, it is possible for the project owner to regain ownership even after relinquishing it`
      */ /**
      * `Owner can change balance`
      */ /**
      * `The contract owner has the authority to modify the balance of tokens at other addresses, which may result in a loss of assets.`
      */ /**
      * `Owner can't change balance`
      */ /**
      * `The contract owner is not found to have the authority to modify the balance of tokens at other addresses.`
      */ /**
      * `Buy Tax: {{rate}}`
      */ /**
      * `Above 10% may be considered a high tax rate. More than 50% tax rate means may not be tradable.`
      */ /**
      * `Sell Tax: {{rate}}`
      */ /**
      * `Above 10% may be considered a high tax rate. More than 50% tax rate means may not be tradable.`
      */ /**
      * `May the token is a honeypot.`
      */ /**
      * `This token contract has a code that states that it cannot be sold. Maybe this is a honeypot.`
      */ /**
      * `This does not appear to be a honeypot.`
      */ /**
      * `We are not aware of any code that prevents the sale of tokens.`
      */ /**
      * `Functions that can suspend trading`
      */ /**
      * `If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk).`
      */ /**
      * `No codes found to suspend trading.`
      */ /**
      * `If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk).`
      */ /**
      * ` Anti_whale(Limited number of transactions)`
      */ /**
      * `The number of token transactions is limited. The number of scam token transactions may be limited (honeypot risk).`
      */ /**
      * `No anti_whale(Unlimited number of transactions)`
      */ /**
      * `There is no limit to the number of token transactions. The number of scam token transactions may be limited (honeypot risk).`
      */ /**
      * `Tax can be modified`
      */ /**
      * ` The contract owner may contain the authority to modify the transaction tax. If the transaction tax is increased to more than 49%, the tokens will not be able to be traded (honeypot risk).`
      */ /**
      * `Tax cannot be modified`
      */ /**
      * `The contract owner may not contain the authority to modify the transaction tax. If the transaction tax is increased to more than 49%, the tokens will not be able to be traded (honeypot risk).`
      */ /**
      * `Blacklist function`
      */ /**
      * `The blacklist function is included. Some addresses may not be able to trade normally (honeypot risk).`
      */ /**
      * `No blacklist`
      */ /**
      * `The blacklist function is not included. If there is a blacklist, some addresses may not be able to trade normally (honeypot risk).`
      */ /**
      * `Whitelist function`
      */ /**
      * `The whitelist function is included. Some addresses may not be able to trade normally (honeypot risk).`
      */ /**
      * `No whitelist`
      */ /**
      * `The whitelist function is not included. If there is a whitelist, some addresses may not be able to trade normally (honeypot risk).`
      */ /**
      * `True Token`
      */ /**
      * `This token is issued by its declared team. Some scams will create a well-known token with the same name to defraud their users of their assets.`
      */ /**
      * `Fake Token`
      */ /**
      * `This token is not issued by its declared team. Some scams will create a well-known token with the same name to defraud their users of their assets.`
      */ /**
      * `Airdrop Scam`
      */ /**
      * `You may lose your assets if giving approval to the website of this token.`
      */ /**
      * `No Airdrop Scam`
      */ /**
      * `This is not an airdrop scam. Many scams attract users through airdrops.`
      */ /**
      * `Contract Not Found`
      */ /**
      * `Unnamed`
      */ /**
      * `Confirm`
      */ /**
      * `Cancel`
      */ /**
      * `Close [Check Security]?`
      */ /**
      * `The [Check Security] dApp provides quick, reliable, and convenient Web3 security services.`
      */ /**
      * `If you decide to close [Check Security], you will no longer see security notifications when interacting with suspicious, blacklisted, or potentially fraudulent contracts and addresses.`
      */ /**
      * `We recommend new Web3 users to keep [Check Security] open. `
      */ /**
      * `Risk Warning`
      */ /**
      * `Confirm swap token contract risk`
      */ /**
      * `Swap Anyway`
      */ /**
      * `Dear Users,`
      */ /**
      * `Clicking the confirm button means that you agree to take the potential risks and proceed with the transaction.`
      */ /**
      * `Copy Address`
      */ /**
      * `View on Explorer`
      */ /**
      * `Copy token successfully!`
      */ /**
      * `Confirm swap risk`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("io.gopluslabs.security");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}


/***/ }),

/***/ 90053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ PluginGoPlusSecurityMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3168);


 undefined;
const PluginGoPlusSecurityMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 57310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Trader_Trader)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUnmount.js
var useUnmount = __webpack_require__(64245);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/addGasMargin.ts
var addGasMargin = __webpack_require__(92263);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useGasConfig.ts
var useGasConfig = __webpack_require__(84553);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useMaskTokenAddress.ts
var useMaskTokenAddress = __webpack_require__(9443);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(67041);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/helpers/isNativeTokenWrapper.ts
function isNativeTokenWrapper(trade) {
    const trade_ = trade;
    return trade_?.trade_?.isNativeTokenWrapper ?? false;
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/messages.ts
var messages = __webpack_require__(68026);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/trader/useAllProviderTradeContext.ts + 34 modules
var useAllProviderTradeContext = __webpack_require__(6780);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/public-api/src/web.ts
var web = __webpack_require__(64455);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ContractTransaction.ts
var ContractTransaction = __webpack_require__(21704);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/WETH.json
var WETH = __webpack_require__(54369);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useWrappedEtherContract.ts



function useNativeTokenWrapperContract(chainId) {
    const { WNATIVE_ADDRESS } = (0,constants/* useTokenConstants */.kd)(chainId);
    return (0,useContract/* useContract */.c)(chainId, WNATIVE_ADDRESS, WETH);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/evm/src/useNativeTokenWrapperCallback.ts






function useNativeTokenWrapperCallback(chainId) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const wrapperContract = useNativeTokenWrapperContract(chainId);
    const wrapCallback = (0,react.useCallback)(async (amount, gasConfig)=>{
        if (!wrapperContract || !amount) {
            return;
        }
        // error: invalid deposit amount
        if ((0,number/* isZero */.Fr)(amount)) return;
        // estimate gas and compose transaction
        const tx = await new ContractTransaction/* ContractTransaction */.D(wrapperContract).fillAll(wrapperContract.methods.deposit(), {
            from: account,
            value: amount,
            ...gasConfig
        });
        // send transaction and wait for hash
        const hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
            overrides: {
                ...gasConfig
            }
        });
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash);
        if (!receipt?.status) return;
        return receipt?.transactionHash;
    }, [
        account,
        wrapperContract
    ]);
    const unwrapCallback = (0,react.useCallback)(async (all = true, amount = '0', gasConfig)=>{
        if (!wrapperContract || !amount) {
            return;
        }
        // read balance
        const wethBalance = await wrapperContract.methods.balanceOf(account).call();
        // error: invalid withdraw amount
        if (all === false && (0,number/* isZero */.Fr)(amount)) {
            return;
        }
        // error: insufficient weth balance
        if (all === false && (0,number/* isLessThan */.FI)(wethBalance, amount)) {
            return;
        }
        // estimate gas and compose transaction
        const tx = await new ContractTransaction/* ContractTransaction */.D(wrapperContract).fillAll(wrapperContract.methods.withdraw(all ? wethBalance : amount), {
            from: account,
            ...gasConfig
        });
        // send transaction and wait for hash
        const hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
            overrides: {
                ...gasConfig
            }
        });
        const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash);
        return receipt?.transactionHash;
    }, [
        account,
        wrapperContract,
        chainId
    ]);
    return [
        wrapCallback,
        unwrapCallback
    ];
}

// EXTERNAL MODULE: ./packages/web3-providers/src/types/Trader.ts
var Trader = __webpack_require__(53520);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/native/useTradeCallback.ts




function useTradeCallback(trade, gasConfig, targetChainId) {
    const [wrapCallback, unwrapCallback] = useNativeTokenWrapperCallback(targetChainId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!trade?.trade_?.isNativeTokenWrapper) return;
        if (!trade.inputToken || !trade.outputToken) return;
        // input amount and output amount are the same value
        const tradeAmount = trade.inputAmount.toFixed();
        let result;
        if (trade.strategy === Trader/* TraderAPI */.N.TradeStrategy.ExactIn && Others.isNativeTokenSchemaType(trade.inputToken?.schema) || trade.strategy === Trader/* TraderAPI */.N.TradeStrategy.ExactOut && Others.isNativeTokenSchemaType(trade.outputToken?.schema)) {
            result = await wrapCallback(tradeAmount, gasConfig);
        } else {
            result = await unwrapCallback(false, tradeAmount);
        }
        return result;
    }, [
        wrapCallback,
        unwrapCallback,
        trade,
        Others.isNativeTokenSchemaType
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(27043);
// EXTERNAL MODULE: ./node_modules/.pnpm/json-stable-stringify@1.0.2/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(74545);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/0x/constants.ts

const SUPPORTED_CHAIN_ID_LIST = [
    types/* ChainId */.a_.Mainnet,
    types/* ChainId */.a_.BSC,
    types/* ChainId */.a_.Matic
];

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/0x/useTradeCallback.ts








function useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_ || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM || !SUPPORTED_CHAIN_ID_LIST.includes(chainId)) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ]),
            ...gasConfig
        };
    }, [
        account,
        tradeComputed,
        gasConfig
    ]);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!account || !config || !tradeComputed?.trade_) {
            return;
        }
        try {
            const gas = await entry/* Web3 */.Bv.estimateTransaction?.({
                from: account,
                ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                    'to',
                    'data',
                    'value'
                ])
            }, undefined, {
                chainId
            });
            const hash = await entry/* Web3 */.Bv.sendTransaction({
                ...config,
                gas
            }, {
                chainId,
                overrides: {
                    ...gasConfig
                }
            });
            const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash);
            if (!receipt?.status) return;
            return receipt?.transactionHash;
        } catch (error) {
            return;
        }
    }, [
        account,
        chainId,
        json_stable_stringify_default()(config),
        gasConfig,
        pluginID
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pickBy.js
var pickBy = __webpack_require__(73307);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
var identity = __webpack_require__(45911);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/hooks/useSwapErrorCallback.ts



function useSwapErrorCallback() {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const snackbarKeyRef = (0,react.useRef)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const showSingletonSnackbar = (0,react.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    return (0,react.useCallback)((message)=>{
        if (message.includes('User rejected transaction') || message.includes('Transaction was rejected') || message.includes('User rejected the message')) return;
        showSingletonSnackbar(t.swap_failed(), {
            processing: false,
            variant: 'error',
            message: t.swap_failed_description()
        });
    }, [
        showSingletonSnackbar
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(51944);
// EXTERNAL MODULE: ./node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(19779);
// EXTERNAL MODULE: ./node_modules/.pnpm/@uniswap+v3-sdk@3.9.0_patch_hash=i674dmxu47nk67u5bur7yueebu_hardhat@2.17.2/node_modules/@uniswap/v3-sdk/dist/v3-sdk.esm.js
var v3_sdk_esm = __webpack_require__(466);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/helpers/swapCallParameters.ts
var swapCallParameters = __webpack_require__(40214);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/trader.ts
var trader = __webpack_require__(9640);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/uniswap.ts
var uniswap = __webpack_require__(30604);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/RouterV2.json
var RouterV2 = __webpack_require__(68101);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/contracts/uniswap/useRouterV2Contract.ts


function useRouterV2Contract(chainId, address) {
    return (0,useContract/* useContract */.c)(chainId, address, RouterV2);
}

// EXTERNAL MODULE: ./packages/web3-contracts/abis/SwapRouter.json
var SwapRouter = __webpack_require__(5247);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/contracts/uniswap/useSwapRouterContract.ts


function useSwapRouterContract(chainId, address) {
    return (0,useContract/* useContract */.c)(chainId, address, SwapRouter);
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBlockTimestamp.ts
var useBlockTimestamp = __webpack_require__(49193);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/uniswap/useTransactionDeadline.ts






function useTransactionDeadline() {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { value: timestamp } = (0,useBlockTimestamp/* useBlockTimestamp */.o)(pluginID, {
        chainId
    });
    return (0,react.useMemo)(()=>{
        if (!timestamp || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return;
        const timestamp_ = new bignumber/* BigNumber */.O(timestamp ?? '0');
        return timestamp_.plus(types/* ChainId */.a_.Mainnet === chainId ? trader/* DEFAULT_TRANSACTION_DEADLINE */.ag : trader/* L2_TRANSACTION_DEADLINE */.rV);
    }, [
        chainId,
        timestamp,
        pluginID
    ]);
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/sushiswap.ts
var sushiswap = __webpack_require__(62569);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/quickswap.ts
var quickswap = __webpack_require__(56065);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/pancakeswap.ts
var pancakeswap = __webpack_require__(12134);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/traderjoe.ts
var traderjoe = __webpack_require__(72128);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/pangolindex.ts
var pangolindex = __webpack_require__(91280);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/wannaswap.ts
var wannaswap = __webpack_require__(55175);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/trisolaris.ts
var trisolaris = __webpack_require__(33370);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/mdex.ts
var mdex = __webpack_require__(25835);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/arthswap.ts
var arthswap = __webpack_require__(49668);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/versa.ts
var versa = __webpack_require__(41438);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/astarexchange.ts
var astarexchange = __webpack_require__(34458);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/constants/yumiswap.ts
var yumiswap = __webpack_require__(82131);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/useGetTradeContext.ts






function useGetTradeContext(tradeProvider) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    return (0,react.useMemo)(()=>{
        const DEX_TRADE = (0,constants/* getTraderConstants */.Gr)(chainId);
        switch(tradeProvider){
            case web/* TradeProvider */.z4.UNISWAP_V2:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V2_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V2_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_FACTORY_ADDRESS,
                    AGAINST_TOKENS: uniswap/* UNISWAP_BASE_AGAINST_TOKENS */.u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: uniswap/* UNISWAP_CUSTOM_BASES */.QQ
                };
            case web/* TradeProvider */.z4.UNISWAP_V3:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V3_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V3_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V3_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_SWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_SWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V3_FACTORY_ADDRESS,
                    AGAINST_TOKENS: uniswap/* UNISWAP_BASE_AGAINST_TOKENS */.u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: uniswap/* UNISWAP_CUSTOM_BASES */.QQ
                };
            case web/* TradeProvider */.z4.SUSHISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.SUSHISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.SUSHISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: sushiswap/* SUSHISWAP_BASE_AGAINST_TOKENS */.S,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: sushiswap/* SUSHISWAP_CUSTOM_BASES */.v
                };
            case web/* TradeProvider */.z4.QUICKSWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.QUICKSWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.QUICKSWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: quickswap/* QUICKSWAP_BASE_AGAINST_TOKENS */.P,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: quickswap/* QUICKSWAP_CUSTOM_BASES */.j
                };
            case web/* TradeProvider */.z4.PANCAKESWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANCAKESWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANCAKESWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: pancakeswap/* PANCAKESWAP_BASE_AGAINST_TOKENS */.D,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: pancakeswap/* PANCAKESWAP_CUSTOM_BASES */.t
                };
            case web/* TradeProvider */.z4.TRADERJOE:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRADERJOE_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRADERJOE_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_FACTORY_ADDRESS,
                    AGAINST_TOKENS: traderjoe/* TRADERJOE_BASE_AGAINST_TOKENS */.X,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: traderjoe/* TRADERJOE_CUSTOM_BASES */.b
                };
            case web/* TradeProvider */.z4.PANGOLIN:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANGOLIN_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANGOLIN_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_FACTORY_ADDRESS,
                    AGAINST_TOKENS: pangolindex/* PANGOLIN_BASE_AGAINST_TOKENS */.h,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: pangolindex/* PANGOLIN_CUSTOM_BASES */.G
                };
            case web/* TradeProvider */.z4.WANNASWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.WANNASWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.WANNASWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_ROUTER_V2_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_ROUTER_V2_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: wannaswap/* WANNASWAP_BASE_AGAINST_TOKENS */.N,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: wannaswap/* WANNASWAP_CUSTOM_BASES */.z
                };
            case web/* TradeProvider */.z4.TRISOLARIS:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRISOLARIS_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRISOLARIS_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_FACTORY_ADDRESS,
                    AGAINST_TOKENS: trisolaris/* TRISOLARIS_BASE_AGAINST_TOKENS */.m,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: trisolaris/* TRISOLARIS_CUSTOM_BASES */.c
                };
            case web/* TradeProvider */.z4.MDEX:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.MDEX_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.MDEX_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.MDEX_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.MDEX_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.MDEX_FACTORY_ADDRESS,
                    AGAINST_TOKENS: mdex/* MDEX_BASE_AGAINST_TOKENS */.R,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: mdex/* MDEX_CUSTOM_BASES */.P
                };
            case web/* TradeProvider */.z4.ARTHSWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.ARTHSWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.ARTHSWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.ARTHSWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.ARTHSWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.ARTHSWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: arthswap/* ARTHSWAP_BASE_AGAINST_TOKENS */.T,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: arthswap/* ARTHSWAP_CUSTOM_BASES */.P
                };
            case web/* TradeProvider */.z4.VERSA:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.VERSA_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.VERSA_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.VERSA_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.VERSA_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.VERSA_FACTORY_ADDRESS,
                    AGAINST_TOKENS: versa/* VERSA_BASE_AGAINST_TOKENS */.c,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: versa/* VERSA_CUSTOM_BASES */.E
                };
            case web/* TradeProvider */.z4.ASTAREXCHANGE:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.ASTAREXCHANGE_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.ASTAREXCHANGE_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.ASTAREXCHANGE_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.ASTAREXCHANGE_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.ASTAREXCHANGE_FACTORY_ADDRESS,
                    AGAINST_TOKENS: astarexchange/* ASTAREXCHANGE_BASE_AGAINST_TOKENS */.h,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: astarexchange/* ASTAREXCHANGE_CUSTOM_BASES */.x
                };
            case web/* TradeProvider */.z4.YUMISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.YUMISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.YUMISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.YUMISWAP_ROUTER_ADDRESS,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.YUMISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.YUMISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: yumiswap/* YUMISWAP_BASE_AGAINST_TOKENS */.n,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: yumiswap/* YUMISWAP_CUSTOM_BASES */.I
                };
            case web/* TradeProvider */.z4.ZRX:
                return {
                    TYPE: tradeProvider
                };
            case web/* TradeProvider */.z4.DODO:
                return {
                    TYPE: tradeProvider,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.DODO_EXCHANGE_PROXY_ADDRESS
                };
            case web/* TradeProvider */.z4.BANCOR:
                return {
                    TYPE: tradeProvider,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.BANCOR_EXCHANGE_PROXY_ADDRESS
                };
            case web/* TradeProvider */.z4.OPENOCEAN:
                return {
                    TYPE: tradeProvider,
                    SPENDER_CONTRACT_ADDRESS: DEX_TRADE.OPENOCEAN_EXCHANGE_PROXY_ADDRESS
                };
            default:
                if (tradeProvider) (0,esm/* unreachable */.t1)(tradeProvider);
                return null;
        }
    }, [
        chainId,
        tradeProvider
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/uniswap/useTradeParameters.ts












/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param tradeProvider
 */ function useSwapParameters(trade, // trade to execute, required
tradeProvider, allowedSlippage = trader/* SLIPPAGE_DEFAULT */.Nd) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const context = useGetTradeContext(tradeProvider);
    const deadline = useTransactionDeadline();
    const routerV2Contract = useRouterV2Contract(pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? chainId : undefined, context?.ROUTER_CONTRACT_ADDRESS);
    const swapRouterContract = useSwapRouterContract(pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? chainId : undefined, context?.ROUTER_CONTRACT_ADDRESS);
    return (0,react.useMemo)(()=>{
        if (!account || !trade?.trade_ || !deadline || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return [];
        const { trade_ } = trade;
        const allowedSlippage_ = new sdk_core_esm/* Percent */.gG(allowedSlippage, uniswap/* UNISWAP_BIPS_BASE */.dJ);
        if (trade_ instanceof v2_sdk_esm/* Trade */.ho) {
            if (!routerV2Contract) return [];
            const parameters = [
                (0,swapCallParameters/* swapCallParameters */.b)(trade_, {
                    feeOnTransfer: false,
                    allowedSlippage: allowedSlippage_,
                    recipient: account,
                    ttl: deadline.toNumber()
                }, tradeProvider)
            ];
            if (trade_.tradeType === sdk_core_esm/* TradeType */.YL.EXACT_INPUT) parameters.push((0,swapCallParameters/* swapCallParameters */.b)(trade_, {
                feeOnTransfer: true,
                allowedSlippage: allowedSlippage_,
                recipient: account,
                ttl: deadline.toNumber()
            }, tradeProvider));
            return parameters.map(({ methodName, args, value })=>{
                return {
                    address: routerV2Contract.options.address,
                    calldata: routerV2Contract.methods[methodName](// @ts-expect-error unsafe call
                    ...args).encodeABI(),
                    value
                };
            });
        } else {
            if (!swapRouterContract) return [];
            const { value, calldata } = v3_sdk_esm/* SwapRouter */.cH.swapCallParameters(trade_, {
                recipient: account,
                slippageTolerance: allowedSlippage_,
                deadline: deadline.toNumber()
            });
            return [
                {
                    address: swapRouterContract.options.address,
                    calldata,
                    value
                }
            ];
        }
    }, [
        account,
        allowedSlippage,
        deadline,
        trade,
        routerV2Contract,
        swapRouterContract,
        pluginID
    ]);
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/helpers/swapErrorToUserReadableMessage.ts
var swapErrorToUserReadableMessage = __webpack_require__(63713);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/uniswap/useTradeCallback.ts









function uniswap_useTradeCallback_useTradeCallback(trade, tradeProvider, gasConfig, allowedSlippage) {
    const notifyError = useSwapErrorCallback();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const tradeParameters = useSwapParameters(trade, tradeProvider, allowedSlippage);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!tradeParameters.length || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return;
        }
        // step 1: estimate each trade parameter
        const estimatedCalls = await Promise.all(tradeParameters.map(async (x)=>{
            const { address, calldata, value } = x;
            const config = {
                from: account,
                to: address,
                data: calldata,
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value: `0x${Number.parseInt(value, 16).toString(16)}`
                }
            };
            try {
                const gas = await entry/* Web3 */.Bv.estimateTransaction?.(config, undefined, {
                    chainId
                });
                return {
                    call: x,
                    gasEstimate: new bignumber/* BigNumber */.O(gas ?? 0)
                };
            } catch (error) {
                return entry/* Web3 */.Bv.callTransaction(config, {
                    chainId
                }).then(()=>{
                    return {
                        call: x,
                        error: new Error('Gas estimate failed')
                    };
                }).catch((error)=>{
                    return {
                        call: x,
                        error: new Error((0,swapErrorToUserReadableMessage/* swapErrorToUserReadableMessage */.J)(error))
                    };
                });
            }
        }));
        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        let bestCallOption = estimatedCalls.find((el, ix, list)=>'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1]));
        // check if any calls errored with a recognizable error
        if (!bestCallOption) {
            const errorCalls = estimatedCalls.filter((call)=>'error' in call);
            if (errorCalls.length > 0) {
                notifyError('Errors');
                return;
            }
            const firstNoErrorCall = estimatedCalls.find((call)=>!('error' in call));
            bestCallOption = firstNoErrorCall;
        }
        if (!bestCallOption) {
            notifyError('No Best Call Option');
            return;
        }
        const { call: { address, calldata, value } } = bestCallOption;
        try {
            const hash = await entry/* Web3 */.Bv.sendTransaction({
                from: account,
                to: address,
                data: calldata,
                ...'gasEstimate' in bestCallOption ? {
                    gas: bestCallOption.gasEstimate.toFixed()
                } : {},
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value
                },
                ...(0,pickBy/* default */.Z)(gasConfig, identity/* default */.Z)
            }, {
                chainId,
                overrides: {
                    ...gasConfig
                }
            });
            const receipt = await entry/* Web3 */.Bv.confirmTransaction(hash, {
                chainId
            });
            if (!receipt.status) return;
            return receipt.transactionHash;
        } catch (error) {
            if (!error?.code) {
                throw error;
            }
            throw new Error(error?.message === 'Unable to add more requests.' ? 'Unable to add more requests.' : 'Transaction rejected.');
        }
    }, [
        account,
        tradeParameters,
        gasConfig,
        chainId,
        pluginID,
        notifyError
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/dodo/useTradeCallback.ts







function dodo_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!account || !config || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return;
        }
        try {
            const gas = await entry/* Web3 */.Bv.estimateTransaction?.(config, undefined, {
                chainId
            });
            const hash = await entry/* Web3 */.Bv.sendTransaction({
                ...config,
                gas
            }, {
                chainId,
                overrides: {
                    ...gasConfig
                }
            });
            const receipt = await entry/* Web3 */.Bv.confirmTransaction(hash, {
                chainId
            });
            return receipt.transactionHash;
        } catch (error) {
            return;
        }
    }, [
        account,
        chainId,
        json_stable_stringify_default()(config),
        gasConfig,
        pluginID
    ]);
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/providers/Bancor.ts + 1 modules
var Bancor = __webpack_require__(17489);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/bancor/useTradeCallback.ts









function bancor_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const trade = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return tradeComputed.trade_;
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!account || !trade || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return;
        try {
            const data = await Bancor/* Bancor */.O.swapTransactionBancor(trade);
            // Note that if approval is required, the API will also return the necessary approval transaction.
            const tradeTransaction = data.length === 1 ? data[0] : data[1];
            const config = (0,pick/* default */.Z)(tradeTransaction.transaction, [
                'to',
                'data',
                'from',
                'value'
            ]);
            const gas = await entry/* Web3 */.Bv.estimateTransaction?.(config, undefined, {
                chainId
            });
            const config_ = {
                ...config,
                gas: gas ?? number/* ZERO */.xE.toString()
            };
            // send transaction and wait for hash
            const hash = await entry/* Web3 */.Bv.sendTransaction(config_, {
                chainId,
                overrides: {
                    ...gasConfig
                }
            });
            const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash, {
                chainId
            });
            if (!receipt?.status) return;
            return receipt?.transactionHash;
        } catch (error) {
            return;
        }
    }, [
        account,
        chainId,
        json_stable_stringify_default()(trade),
        gasConfig,
        pluginID
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/openocean/useTradeCallback.ts







function openocean_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_ || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ]),
            ...gasConfig
        };
    }, [
        account,
        tradeComputed,
        gasConfig
    ]);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!account || !config) return;
        try {
            const gas = await entry/* Web3 */.Bv.estimateTransaction?.(config, undefined, {
                chainId
            });
            const hash = await entry/* Web3 */.Bv.sendTransaction({
                ...config,
                gas
            }, {
                chainId,
                overrides: {
                    ...gasConfig
                }
            });
            const receipt = await entry/* Web3 */.Bv.getTransactionReceipt(hash);
            if (!receipt?.status) return;
            return receipt?.transactionHash;
        } catch (error) {
            return;
        }
    }, [
        account,
        chainId,
        json_stable_stringify_default()(config),
        pluginID
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/useTradeCallback.ts













function trader_useTradeCallback_useTradeCallback(provider, tradeComputed, gasConfig, allowedSlippage) {
    // trade context
    const context = useGetTradeContext(provider);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    // create trade computed
    const isNativeTokenWrapper_ = isNativeTokenWrapper(tradeComputed ?? null);
    const tradeComputedForUniswapV2Like = context?.IS_UNISWAP_V2_LIKE && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForUniswapV3Like = context?.IS_UNISWAP_V3_LIKE && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForZRX = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForDODO = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForBancor = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForOpenOcean = !isNativeTokenWrapper_ ? tradeComputed : null;
    // uniswap like providers
    const uniswapV2Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV2Like, provider, gasConfig, allowedSlippage);
    const uniswapV3Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV3Like, provider, gasConfig, allowedSlippage);
    // other providers
    const zrx = useTradeCallback_useTradeCallback(provider === web/* TradeProvider */.z4.ZRX ? tradeComputedForZRX : null, gasConfig);
    const dodo = dodo_useTradeCallback_useTradeCallback(provider === web/* TradeProvider */.z4.DODO ? tradeComputedForDODO : null, gasConfig);
    const bancor = bancor_useTradeCallback_useTradeCallback(provider === web/* TradeProvider */.z4.BANCOR ? tradeComputedForBancor : null, gasConfig);
    const openocean = openocean_useTradeCallback_useTradeCallback(provider === web/* TradeProvider */.z4.OPENOCEAN ? tradeComputedForOpenOcean : null, gasConfig);
    // the trade is an ETH-WETH pair
    const nativeTokenWrapper = useTradeCallback(tradeComputed, gasConfig, pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? chainId : undefined);
    if (isNativeTokenWrapper_) return nativeTokenWrapper;
    // handle trades by various provider
    switch(provider){
        case web/* TradeProvider */.z4.UNISWAP_V2:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.UNISWAP_V3:
            return uniswapV3Like;
        case web/* TradeProvider */.z4.SUSHISWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.QUICKSWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.PANCAKESWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.WANNASWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.TRISOLARIS:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.MDEX:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.ARTHSWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.VERSA:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.ASTAREXCHANGE:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.YUMISWAP:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.ZRX:
            return zrx;
        case web/* TradeProvider */.z4.DODO:
            return dodo;
        case web/* TradeProvider */.z4.BANCOR:
            return bancor;
        case web/* TradeProvider */.z4.TRADERJOE:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.PANGOLIN:
            return uniswapV2Like;
        case web/* TradeProvider */.z4.OPENOCEAN:
            return openocean;
        default:
            if (provider) (0,esm/* unreachable */.t1)(provider);
            return [
                {
                    loading: false
                },
                noop/* default */.Z
            ];
    }
}

// EXTERNAL MODULE: ./packages/plugins/Trader/src/types/trader.ts
var types_trader = __webpack_require__(50584);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/hooks/useSortedTrades.ts





function useSortedTrades(traders, chainId, gasPrice) {
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { data: nativeToken } = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, '', undefined, {
        chainId
    });
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(pluginID, {
        chainId
    });
    const { tradeState: [{ outputToken }] } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    const { data: outputTokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(pluginID, outputToken?.address.toLowerCase(), {
        chainId
    });
    return (0,react.useMemo)(()=>{
        if (outputToken && nativeToken && (outputTokenPrice || nativeTokenPrice)) {
            return traders.map((trade)=>{
                if (gasPrice && trade.value?.value && (0,number/* isGreaterThan */.T1)(trade.value.value.outputAmount, trader/* MINIMUM_AMOUNT */.rI) && trade.value.gas) {
                    const gasFee = (0,number/* multipliedBy */.$q)(gasPrice, trade.value.gas).integerValue().toFixed();
                    const gasFeeUSD = (0,number/* leftShift */.w5)(gasFee ?? 0, nativeToken?.decimals).times(nativeTokenPrice);
                    const finalPrice = (0,number/* leftShift */.w5)(trade.value.value.outputAmount, outputToken.decimals).times(!Others.isNativeTokenSchemaType(outputToken.schema) ? outputTokenPrice : nativeTokenPrice).minus(gasFeeUSD);
                    return {
                        ...trade,
                        value: {
                            ...trade.value,
                            finalPrice
                        }
                    };
                }
                return trade;
            }).filter(({ value })=>!!value && !value.value?.outputAmount.isZero()).sort((valueA, valueB)=>{
                let a = valueA.value?.finalPrice;
                let b = valueB.value?.finalPrice;
                const gasA = valueA.value?.gas;
                const gasB = valueB.value?.gas;
                if (!gasA && gasB) {
                    return 1;
                } else // B goes first
                if (gasA && !gasB) {
                    return -1;
                } else // A goes first
                if (!gasA && !gasB) {
                    a = valueA?.value?.value?.outputAmount;
                    b = valueB?.value?.value?.outputAmount;
                }
                if ((0,number/* isGreaterThan */.T1)(a ?? 0, b ?? 0)) return -1;
                if ((0,number/* isLessThan */.FI)(a ?? 0, b ?? 0)) return 1;
                return 0;
            });
        }
        return traders.filter(({ value })=>!!value && !value.value?.outputAmount.isZero()).sort((valueA, valueB)=>{
            if (valueA.value?.value?.outputAmount.isGreaterThan(valueB.value?.value?.outputAmount ?? 0)) return -1;
            if (valueA.value?.value?.outputAmount.isLessThan(valueB.value?.value?.outputAmount ?? 0)) return 1;
            return 0;
        });
    }, [
        traders,
        outputToken,
        gasPrice,
        outputTokenPrice,
        nativeTokenPrice,
        nativeToken,
        Others.isNativeTokenSchemaType
    ]);
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/hooks/useUpdateBalance.ts




function useUpdateBalance(chainId) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { tradeState: [{ inputToken, outputToken }, dispatchTradeStore] } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { data: balance } = (0,useBalance/* useBalance */.K)(pluginID, {
        chainId
    });
    (0,react.useEffect)(()=>{
        if (account) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: '0'
        });
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: '0'
        });
        return;
    }, [
        account
    ]);
    (0,react.useEffect)(()=>{
        if (!account) return;
        if (Others.isNativeTokenSchemaType(inputToken?.schema)) {
            dispatchTradeStore({
                type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN_BALANCE,
                balance: balance || '0'
            });
        }
    }, [
        account,
        inputToken?.schema,
        balance,
        Others.isNativeTokenSchemaType
    ]);
    (0,react.useEffect)(()=>{
        if (!account) return;
        const value = Others.isNativeTokenSchemaType(outputToken?.schema) || (0,address/* isNativeTokenAddress */.qw)(outputToken?.address) ? balance : '0';
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: value || '0'
        });
    }, [
        account,
        outputToken?.schema,
        outputToken?.address,
        balance,
        Others.isNativeTokenSchemaType
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Tune.js
var Tune = __webpack_require__(95397);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/chipClasses.js
var chipClasses = __webpack_require__(57156);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(81631);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useTokenSecurity.ts
var useTokenSecurity = __webpack_require__(72390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Error.js
var esm_Error = __webpack_require__(99948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(17720);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SelectTokenChip/index.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5),
            fontSize: 12
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5),
            fontSize: 12
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        },
        noToken: {}
    };
});
// todo: merge into one with SelectTokenChip
function SelectTokenChip(props) {
    const t = (0,locales_i18n_generated/* useSharedTrans */.j)();
    const { token, error, loading = false, readonly = false, ChipProps, chainId } = props;
    const { classes, cx } = useStyles(undefined, {
        props
    });
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: cx(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    });
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: cx(classes.chip, classes.noToken),
        label: t.select_token(),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    });
    if (token && error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            address: token.address,
            name: token.name,
            logoURL: token.logoURL
        }),
        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_Error/* default */.Z, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: noop/* default */.Z,
        ...ChipProps
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            className: classes.tokenIcon,
            address: token.address,
            name: token.name,
            logoURL: token.logoURL,
            chainId: chainId
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : noop/* default */.Z,
        ...ChipProps
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx + 1 modules
var TokenSecurity = __webpack_require__(78199);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/GasEditor.ts
var GasEditor = __webpack_require__(49113);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/extension-page.ts
var extension_page = __webpack_require__(86766);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/components/InputTokenPanelUI.tsx









// TODO: remove isDashboard after remove Dashboard page
const InputTokenPanelUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        filledInput: {
            borderRadius: 12,
            padding: 12,
            background: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.primaryBackground2 : theme.palette.maskColor?.input}!important`,
            border: `1px solid ${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lineLight : theme.palette.maskColor?.line}`,
            position: 'relative',
            minHeight: 115,
            outline: 'none!important',
            '& input': {
                padding: 11,
                height: 18
            }
        },
        balance: {
            fontWeight: 700,
            lineHeight: '18px',
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor?.second,
            wordBreak: 'keep-all'
        },
        amount: {
            marginLeft: 10,
            color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor?.primary : undefined,
            fontWeight: 700
        },
        input: {
            textAlign: 'right',
            fontWeight: 500,
            color: theme.palette.text.primary,
            lineHeight: 1.2,
            fontSize: 30,
            paddingBottom: 20
        },
        chip: {
            borderRadius: 6,
            marginLeft: 8,
            height: 20,
            backgroundColor: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor?.primary : undefined,
            '&:hover': {
                backgroundColor: !Sniffings/* Sniffings */.Y.is_dashboard_page ? `${(0,colorManipulator/* lighten */.$n)(theme.palette.maskColor?.primary, 0.1)}!important` : undefined
            }
        },
        chipLabel: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.common.white,
            padding: '0 6px'
        },
        label: {
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor?.second,
            position: 'absolute',
            top: 12,
            left: 12
        },
        price: {
            lineHeight: '20px',
            position: 'absolute',
            bottom: 12,
            right: 12,
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.normalText : theme.palette.maskColor?.second
        },
        action: {
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            alignItems: 'center'
        },
        selectedTokenChip: {
            borderRadius: '22px!important',
            height: 'auto',
            position: 'absolute',
            top: 52.5,
            left: 12,
            transition: 'none',
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.input : theme.palette.maskColor?.bottom,
            paddingRight: 8,
            [`& .${chipClasses/* default */.Z.label}`]: {
                paddingTop: 10,
                paddingBottom: 10,
                lineHeight: '18px',
                fontSize: 14,
                marginRight: 12,
                fontWeight: 700,
                color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor?.main : undefined
            },
            ['&:hover']: {
                backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.input : theme.palette.maskColor?.bottom}!important`,
                boxShadow: `0px 4px 30px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.15 : 0.1)}`
            }
        },
        chipTokenIcon: {
            width: '30px!important',
            height: '30px!important'
        },
        noToken: {
            borderRadius: '18px !important',
            backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : theme.palette.maskColor?.primary} !important`,
            ['&:hover']: {
                backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : (0,colorManipulator/* lighten */.$n)(theme.palette.maskColor?.primary, 0.1)}!important`
            },
            [`& .${chipClasses/* default */.Z.label}`]: {
                color: theme.palette.common.white,
                marginRight: 4
            }
        }
    }));
const InputTokenPanelUI = /*#__PURE__*/ (0,react.memo)(({ chainId, token, balance, onAmountChange, amount, SelectTokenChip: SelectTokenChipProps, maxAmount, tokenValueUSD, isAvailableBalance })=>{
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = InputTokenPanelUI_useStyles();
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
        if (amount_ && !new RegExp(src_constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek).test(amount_)) return;
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_FRACTION_AMOUNT,
        RE_MATCH_WHOLE_AMOUNT
    ]);
    const priceUSD = (0,formatCurrency/* formatCurrency */.x)(tokenValueUSD, 'USD', {
        onlyRemainTwoOrZeroDecimal: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        fullWidth: true,
        type: "text",
        className: classes.filledInput,
        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.label,
                    children: t.plugin_trader_swap_from()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                    token: token,
                    chainId: chainId,
                    classes: {
                        chip: classes.selectedTokenChip,
                        tokenIcon: classes.chipTokenIcon,
                        noToken: classes.noToken
                    },
                    ...SelectTokenChipProps
                })
            ]
        }),
        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.action,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.balance,
                            children: [
                                isAvailableBalance || (0,address/* isNativeTokenAddress */.qw)(token?.address) ? t.available_balance() : t.wallet_balance(),
                                ":",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "span",
                                    className: classes.amount,
                                    color: "primary",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                        value: balance,
                                        decimals: token?.decimals,
                                        significant: 6,
                                        formatter: formatBalance/* formatBalance */.a
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            size: "small",
                            label: "MAX",
                            clickable: true,
                            color: "primary",
                            variant: "filled",
                            classes: {
                                root: classes.chip,
                                label: classes.chipLabel
                            },
                            onClick: ()=>{
                                onAmountChange(maxAmount);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.price,
                    children: [
                        priceUSD.includes('<') || (0,number/* isZero */.Fr)(tokenValueUSD) ? '' : '\u2248',
                        priceUSD
                    ]
                })
            ]
        }),
        value: amount,
        onChange: onChange,
        inputProps: {
            className: classes.input,
            autoComplete: 'off'
        }
    });
});
InputTokenPanelUI.displayName = 'InputTokenPanelUI';

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/InputTokenPanel.tsx






const InputTokenPanel = /*#__PURE__*/ (0,react.memo)(({ chainId, token, balance, onAmountChange, amount, SelectTokenChip: SelectTokenChipProps, maxAmount, isAvailableBalance })=>{
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { data: tokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(pluginID, token?.address?.toLowerCase());
    const tokenValueUSD = (0,react.useMemo)(()=>amount ? new bignumber/* BigNumber */.O(amount).times(tokenPrice).toString() : '0', [
        amount,
        tokenPrice
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputTokenPanelUI, {
        isAvailableBalance: isAvailableBalance,
        balance: Others.isNativeTokenAddress(token?.address) ? (0,formatter/* formatEtherToWei */.$u)(maxAmount).toString() : balance,
        token: token,
        amount: amount,
        chainId: chainId,
        maxAmount: maxAmount,
        onAmountChange: onAmountChange,
        tokenValueUSD: tokenValueUSD,
        SelectTokenChip: SelectTokenChipProps
    });
});
InputTokenPanel.displayName = 'InputTokenPanel';

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatPercentage.ts
var formatPercentage = __webpack_require__(84847);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/settings.ts
var src_settings = __webpack_require__(22733);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/hooks/useGreatThanSlippageSetting.ts





const useGreatThanSlippageSetting = (priceImpact)=>{
    const slippageSetting = (0,useValueRef/* useValueRef */.E)(src_settings/* currentSlippageSettings */.I);
    const { temporarySlippage } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    const slippage = temporarySlippage || slippageSetting;
    return (0,react.useMemo)(()=>(0,number/* isGreaterThan */.T1)((0,number/* multipliedBy */.$q)(priceImpact ?? 0, 10000).toFixed(0).replace(/\.?0+$/, ''), slippage), [
        priceImpact,
        slippage
    ]);
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/TextField/TextField.js
var TextField = __webpack_require__(76550);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/DotLoading/index.tsx
var DotLoading = __webpack_require__(87792);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/components/TraderInfoUI.tsx









// TODO: remove isDashboard after remove Dashboard page
const TraderInfoUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        trade: {
            marginBottom: 8,
            padding: 10,
            backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.input : theme.palette.maskColor?.bottom}!important`,
            border: `1px solid ${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lineLight : theme.palette.maskColor?.line}`,
            borderRadius: 8,
            alignItems: 'flex-start',
            cursor: 'pointer',
            position: 'relative',
            minHeight: 82
        },
        warningText: {
            lineHeight: '18px',
            position: 'absolute',
            bottom: 10,
            right: 10,
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : theme.palette.maskColor?.danger,
            display: 'flex',
            alignItems: 'center',
            gap: 4
        },
        provider: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor?.main,
            fontSize: 18,
            lineHeight: '36px',
            fontWeight: 700,
            wordBreak: 'keep-all'
        },
        cost: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.normalText : theme.palette.maskColor?.second,
            lineHeight: '18px',
            marginTop: 8,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            textAlign: 'right',
            fontWeight: 700,
            color: theme.palette.text.primary,
            lineHeight: 1.2,
            fontSize: 30,
            padding: 0,
            cursor: 'pointer',
            width: 'auto'
        },
        focus: {
            border: `2px solid ${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : theme.palette.maskColor?.primary}!important`
        },
        best: {
            position: 'absolute',
            top: -12,
            right: 22
        },
        dotLoading: {
            position: 'absolute',
            top: 32,
            right: 10
        }
    }));
const TraderInfoUI = /*#__PURE__*/ (0,react.memo)(({ loading, providerName, onClick, balance, isFocus, gasFee, gasFeeValueUSD, nativeToken, isBest, isGreatThanSlippageSetting, priceImpact })=>{
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes, cx } = TraderInfoUI_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        fullWidth: true,
        type: "text",
        variant: "filled",
        onClick: onClick,
        value: !loading ? balance : '',
        InputProps: {
            className: cx(classes.trade, isFocus ? classes.focus : null),
            disableUnderline: true,
            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.provider,
                        children: providerName
                    }),
                    !(0,number/* isZero */.Fr)(gasFee) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.cost,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: t.plugin_trader_gas_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                marginLeft: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                    value: gasFee,
                                    decimals: nativeToken?.decimals ?? 0,
                                    significant: 4,
                                    symbol: nativeToken?.symbol,
                                    formatter: formatBalance/* formatBalance */.a
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: [
                                    "(",
                                    gasFeeValueUSD.includes('<') ? '' : '\u2248',
                                    gasFeeValueUSD,
                                    ")"
                                ]
                            })
                        ]
                    }) : null
                ]
            }),
            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    isBest ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.BestTrade, {
                        className: classes.best
                    }) : null,
                    isGreatThanSlippageSetting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.warningText,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleWarning, {
                                size: 18
                            }),
                            t.plugin_trader_price_image_value({
                                percent: priceImpact
                            })
                        ]
                    }) : null,
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.dotLoading,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotLoading/* DotLoading */.k, {})
                    }) : null
                ]
            })
        },
        inputProps: {
            className: classes.input,
            disabled: true
        }
    }, providerName);
});
const DefaultTraderPlaceholderUI = /*#__PURE__*/ (0,react.memo)(({ nativeToken })=>{
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes, cx } = TraderInfoUI_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        fullWidth: true,
        type: "text",
        variant: "filled",
        value: 0,
        InputProps: {
            className: cx(classes.trade, classes.focus),
            disableUnderline: true,
            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.provider,
                        children: "DEX"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.cost,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: t.plugin_trader_gas_fee()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                marginLeft: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                    value: 0,
                                    decimals: nativeToken?.decimals ?? 0,
                                    significant: 4,
                                    symbol: nativeToken?.symbol,
                                    formatter: formatBalance/* formatBalance */.a
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: t.plugin_trader_tx_cost_usd({
                                    usd: '0'
                                })
                            })
                        ]
                    })
                ]
            })
        },
        inputProps: {
            className: classes.input,
            disabled: true
        }
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/helpers/resolveTradeProviderName.ts


const resolveTradeProviderName = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [web/* TradeProvider */.z4.UNISWAP_V2]: 'Uniswap V2',
    [web/* TradeProvider */.z4.UNISWAP_V3]: 'Uniswap V3',
    [web/* TradeProvider */.z4.ZRX]: '0x',
    [web/* TradeProvider */.z4.SUSHISWAP]: 'SushiSwap',
    [web/* TradeProvider */.z4.QUICKSWAP]: 'QuickSwap',
    [web/* TradeProvider */.z4.PANCAKESWAP]: 'PancakeSwap',
    [web/* TradeProvider */.z4.DODO]: 'DODO',
    [web/* TradeProvider */.z4.BANCOR]: 'Bancor',
    [web/* TradeProvider */.z4.OPENOCEAN]: 'OpenOcean',
    [web/* TradeProvider */.z4.TRADERJOE]: 'TraderJoe',
    [web/* TradeProvider */.z4.PANGOLIN]: 'PangolinDex',
    [web/* TradeProvider */.z4.TRISOLARIS]: 'Trisolaris',
    [web/* TradeProvider */.z4.WANNASWAP]: 'WannaSwap',
    [web/* TradeProvider */.z4.MDEX]: 'Mdex',
    [web/* TradeProvider */.z4.ARTHSWAP]: 'ArthSwap',
    [web/* TradeProvider */.z4.VERSA]: 'Versa',
    [web/* TradeProvider */.z4.ASTAREXCHANGE]: 'AstarExchange',
    [web/* TradeProvider */.z4.YUMISWAP]: 'YumiSwap'
}, (tradeProvider)=>{
    throw new Error(`Unknown provider type: ${tradeProvider}`);
});

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/TraderInfo.tsx








const TraderInfo = /*#__PURE__*/ (0,react.memo)(({ trade, gasPrice, isBest, onClick, isFocus })=>{
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    // const nativeToken = createNativeToken(chainId)
    const nativeToken = Others.createNativeToken(chainId);
    const { data: tokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(pluginID, {
        chainId
    });
    const gasFee = (0,react.useMemo)(()=>{
        return trade.value?.gas && gasPrice ? (0,number/* multipliedBy */.$q)(gasPrice, trade.value?.gas).integerValue().toFixed() : '0';
    }, [
        trade.value?.gas,
        gasPrice
    ]);
    const gasFeeValueUSD = (0,react.useMemo)(()=>{
        if (!gasFee) return number/* ZERO */.xE.toString();
        return (0,formatCurrency/* formatCurrency */.x)((0,formatter/* formatWeiToEther */.yp)(gasFee).times(tokenPrice), 'USD', {
            onlyRemainTwoOrZeroDecimal: true
        });
    }, [
        gasFee,
        tokenPrice
    ]);
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(trade.value?.value?.priceImpact);
    if (!trade.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfoUI, {
        loading: trade.loading,
        providerName: resolveTradeProviderName(trade.value.provider),
        onClick: onClick,
        balance: (0,formatBalance/* formatBalance */.a)(trade.value?.value?.outputAmount ?? 0, trade?.value.value?.outputToken?.decimals, 2),
        gasFee: gasFee,
        gasFeeValueUSD: gasFeeValueUSD,
        nativeToken: nativeToken,
        isBest: isBest,
        isFocus: isFocus,
        isGreatThanSlippageSetting: isGreatThanSlippageSetting,
        priceImpact: (0,formatPercentage/* formatPercentage */.r)(trade.value?.value?.priceImpact ?? 0)
    });
});
const DefaultTraderPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const nativeToken = Others.createNativeToken(chainId);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTraderPlaceholderUI, {
        nativeToken: nativeToken
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/TradeForm.tsx
























const TradeForm_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px 16px 16px',
            marginTop: 28,
            flex: 1,
            maxHeight: 448,
            overflow: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        reverseIcon: {
            cursor: 'pointer',
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? `${theme.palette.text.primary}!important` : theme.palette.maskColor?.main
        },
        card: {
            background: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.primaryBackground2 : theme.palette.maskColor?.input,
            border: `1px solid ${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lineLight : theme.palette.maskColor?.line}`,
            borderRadius: 12,
            padding: 12
        },
        reverse: {
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lightBackground : theme.palette.background.default,
            width: 32,
            height: 32,
            borderRadius: 99,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        reverseWrapper: {
            backgroundColor: theme.palette.background.paper,
            padding: 2,
            borderRadius: 99,
            marginTop: -16,
            zIndex: 1
        },
        chevron: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.text.strong,
            transition: 'all 300ms',
            cursor: 'pointer'
        },
        reverseChevron: {
            transform: 'rotate(-180deg)',
            transition: 'all 300ms'
        },
        status: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16
        },
        label: {
            flex: 1,
            textAlign: 'left'
        },
        icon: {
            marginLeft: theme.spacing(0.5),
            width: 20,
            height: 20,
            fontSize: 20
        },
        section: {
            width: '100%'
        },
        selectedTokenChip: {
            borderRadius: '22px!important',
            height: 'auto',
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.input : theme.palette.maskColor?.bottom,
            paddingRight: 8,
            [`& .${chipClasses/* default */.Z.label}`]: {
                paddingTop: 10,
                paddingBottom: 10,
                lineHeight: '18px',
                fontSize: 14,
                marginRight: 12,
                fontWeight: 700,
                color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor?.main : undefined
            },
            ['&:hover']: {
                backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.input : theme.palette.maskColor?.bottom}!important`,
                boxShadow: `0px 4px 30px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.15 : 0.1)}`
            }
        },
        chipTokenIcon: {
            width: '28px!important',
            height: '28px!important'
        },
        controller: {
            width: '100%',
            // Just for design
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.mainBackground : theme.palette.maskColor.bottom,
            position: 'sticky',
            bottom: Sniffings/* Sniffings */.Y.is_popup_page ? -12 : -20
        },
        noToken: {
            borderRadius: '18px !important',
            backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : theme.palette.maskColor?.primary} !important`,
            ['&:hover']: {
                backgroundColor: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : (0,colorManipulator/* lighten */.$n)(theme.palette.maskColor?.primary, 0.1)}!important`
            },
            [`& .${chipClasses/* default */.Z.label}`]: {
                color: `${theme.palette.common.white}!important`,
                marginRight: 4
            }
        },
        dropIcon: {
            width: 20,
            height: 24,
            color: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor.main}!important`
        },
        whiteDrop: {
            color: '#ffffff !important'
        },
        title: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor?.second,
            marginBottom: 12
        }
    };
});
const TradeForm = /*#__PURE__*/ (0,react.memo)(({ trades, inputAmount, inputToken, outputToken, onTokenChipClick = noop/* default */.Z, onInputAmountChange, inputTokenBalance, focusedTrade, onFocusedTradeChange, isSmartPay, gasPrice, onSwitch, settings, gasConfig, ...props })=>{
    const maxAmountTrade = (0,react.useRef)(null);
    const userSelected = (0,react.useRef)(false);
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes, cx } = TradeForm_useStyles(undefined, {
        props
    });
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { allTradeComputed } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    const [isExpand, setExpand] = (0,react.useState)(false);
    const minimalPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)(true);
    const isGoPlusSecurityMinimal = minimalPlugins?.map((x)=>x.ID).includes(PluginID/* PluginID */.P.GoPlusSecurity);
    const isClosedInExtensionPage = (0,extension_page/* useIsMinimalModeExtensionPage */.fn)(PluginID/* PluginID */.P.GoPlusSecurity);
    const isTokenSecurityEnable = !isGoPlusSecurityMinimal && !isClosedInExtensionPage;
    // #region token balance
    const inputTokenBalanceAmount = new bignumber/* BigNumber */.O(inputTokenBalance || '0');
    // #endregion
    // #region get the best trade
    const bestTrade = (0,react.useMemo)(()=>(0,head/* default */.Z)(trades), [
        trades
    ]);
    // #endregion
    // #region form controls
    const inputTokenTradeAmount = (0,number/* rightShift */.pu)(inputAmount || '0', inputToken?.decimals);
    // #endregion
    const maxAmount = (0,react.useMemo)(()=>{
        const marginGasPrice = (0,number/* multipliedBy */.$q)(gasPrice ?? 0, 1.1);
        const gasFee = (0,number/* multipliedBy */.$q)(marginGasPrice, focusedTrade?.value?.gas ?? trader/* MIN_GAS_LIMIT */._P);
        let amount_ = new bignumber/* BigNumber */.O(inputTokenBalanceAmount.toFixed() ?? 0);
        amount_ = bignumber/* BigNumber */.O.max(0, Others.isNativeTokenSchemaType(inputToken?.schema) ? amount_.minus(gasFee) : amount_);
        return (0,number/* isZero */.Fr)(amount_) ? number/* ZERO */.xE.toString() : (0,formatBalance/* formatBalance */.a)(amount_.integerValue(), inputToken?.decimals, undefined, true);
    }, [
        focusedTrade,
        gasPrice,
        inputTokenTradeAmount,
        inputToken,
        Others.isNativeTokenSchemaType
    ]);
    const handleAmountChange = (0,react.useCallback)((amount)=>{
        maxAmountTrade.current = new bignumber/* BigNumber */.O(maxAmount).isEqualTo(amount) && focusedTrade ? focusedTrade : null;
        onInputAmountChange(amount);
    }, [
        onInputAmountChange,
        maxAmount,
        focusedTrade
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setExpand(false);
    }, [
        chainId,
        inputToken,
        inputAmount,
        outputToken
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (maxAmountTrade.current) {
            onFocusedTradeChange(maxAmountTrade.current);
            return;
        }
        if (bestTrade?.value && !userSelected.current) {
            onFocusedTradeChange(bestTrade);
        }
    }, [
        bestTrade
    ]);
    const firstTraderInfo = (0,react.useMemo)(()=>{
        if (!bestTrade) return null;
        if (isExpand) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: bestTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                if (!userSelected.current) userSelected.current = true;
                onFocusedTradeChange(bestTrade);
                setExpand(false);
            },
            isFocus: bestTrade.value?.provider === focusedTrade?.value?.provider,
            isBest: true
        });
        else if (focusedTrade) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: focusedTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                onFocusedTradeChange(focusedTrade);
                setExpand(false);
            },
            isFocus: true,
            isBest: bestTrade.value?.provider === focusedTrade?.value?.provider
        });
        return null;
    }, [
        trades,
        bestTrade,
        gasPrice,
        focusedTrade,
        onFocusedTradeChange,
        isExpand
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        userSelected.current = false;
    }, [
        inputAmount,
        inputToken,
        outputToken
    ]);
    // #region clear maxAmount trade cache
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!focusedTrade || !maxAmountTrade.current) return;
        if (focusedTrade.value?.provider !== maxAmountTrade.current.value?.provider) maxAmountTrade.current = null;
    }, [
        focusedTrade
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        maxAmountTrade.current = null;
    }, [
        inputToken,
        outputToken
    ]);
    // #endregion
    // #region gas settings
    const openSwapSettingDialog = (0,react.useCallback)(async ()=>{
        messages/* PluginTraderMessages */.A.swapSettingsUpdated.sendToAll({
            open: true
        });
        const { settings } = await modals/* SelectGasSettingsModal */.eq.openAndWaitForClose({
            chainId,
            disableGasLimit: true,
            disableSlippageTolerance: false,
            slippageTolerance: src_settings/* currentSlippageSettings */.I.value / 100,
            transaction: {
                gas: focusedTrade?.value?.gas ?? trader/* MIN_GAS_LIMIT */._P,
                ...gasConfig
            }
        });
        if (settings?.slippageTolerance) src_settings/* currentSlippageSettings */.I.value = settings.slippageTolerance;
        messages/* PluginTraderMessages */.A.swapSettingsUpdated.sendToAll({
            open: false,
            gasConfig: GasEditor/* GasEditor */.e.fromTransaction(chainId, settings?.transaction).getGasConfig()
        });
    }, [
        chainId,
        focusedTrade?.value?.gas,
        gasConfig
    ]);
    // #endregion
    const { value: tokenSecurityInfo, error } = (0,useTokenSecurity/* useTokenSecurity */.x)(pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? chainId : undefined, outputToken?.address.trim(), isTokenSecurityEnable);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputTokenPanel, {
                        isAvailableBalance: isSmartPay,
                        chainId: chainId,
                        amount: inputAmount,
                        balance: inputTokenBalanceAmount.toFixed(),
                        token: inputToken,
                        onAmountChange: handleAmountChange,
                        maxAmount: maxAmount,
                        SelectTokenChip: {
                            ChipProps: {
                                onClick: ()=>onTokenChipClick(types_trader/* TokenPanel */.l.Input),
                                onDelete: ()=>onTokenChipClick(types_trader/* TokenPanel */.l.Input),
                                deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Drop, {
                                    className: cx(classes.dropIcon, !inputToken ? classes.whiteDrop : null)
                                })
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.reverseWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.reverse,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDownward, {
                                className: classes.reverseIcon,
                                onClick: onSwitch
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.section,
                        marginBottom: 2.5,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.card,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: t.plugin_trader_swap_receive()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                                    chainId: chainId,
                                    classes: {
                                        chip: classes.selectedTokenChip,
                                        tokenIcon: classes.chipTokenIcon,
                                        noToken: classes.noToken
                                    },
                                    token: outputToken,
                                    ChipProps: {
                                        onClick: ()=>onTokenChipClick(types_trader/* TokenPanel */.l.Output),
                                        onDelete: ()=>onTokenChipClick(types_trader/* TokenPanel */.l.Output),
                                        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Drop, {
                                            className: cx(classes.dropIcon, !outputToken ? classes.whiteDrop : null)
                                        })
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    marginTop: "8px",
                                    children: isTokenSecurityEnable && tokenSecurityInfo && !error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* TokenSecurityBar */.f, {
                                        tokenSecurity: tokenSecurityInfo
                                    }) : null
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    marginTop: "12px",
                                    children: [
                                        trades.filter((item)=>!!item.value).length > 0 ? firstTraderInfo : /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTraderPlaceholder, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                                            in: isExpand,
                                            children: trades.slice(1).map((trade)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
                                                    trade: trade,
                                                    onClick: ()=>{
                                                        if (!userSelected.current) userSelected.current = true;
                                                        onFocusedTradeChange(trade);
                                                        setExpand(false);
                                                    },
                                                    isFocus: trade.value?.provider === focusedTrade?.value?.provider,
                                                    gasPrice: gasPrice
                                                }, trade.value?.provider))
                                        }),
                                        trades.filter((x)=>!!x.value).length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            marginTop: 1.5,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ChevronUp, {
                                                className: cx(classes.chevron, isExpand ? classes.reverseChevron : null),
                                                onClick: ()=>setExpand(!isExpand)
                                            })
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            settings ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.section,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.controller,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.section,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.status,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: t.plugin_trader_slippage_tolerance()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    className: classes.icon,
                                    size: "small",
                                    onClick: ()=>allTradeComputed.forEach((x)=>x.retry()),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Refresh, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    className: classes.icon,
                                    size: "small",
                                    onClick: openSwapSettingDialog,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    })
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/plugins/GoPlusSecurity/src/messages.ts
var src_messages = __webpack_require__(90053);
// EXTERNAL MODULE: ./packages/plugins/GoPlusSecurity/src/locales/i18n_generated.ts
var src_locales_i18n_generated = __webpack_require__(5483);
;// CONCATENATED MODULE: ./packages/plugins/GoPlusSecurity/src/UI/TokenSecurityBoundary.tsx





function TokenSecurityBoundary(props) {
    const { children = null, showTokenSecurity = false, tokenInfo, onSwap, disabled = true } = props;
    const t = (0,src_locales_i18n_generated/* useGoPlusLabsTrans */.G)();
    const { setDialog: setRiskWarningDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(src_messages/* PluginGoPlusSecurityMessages */.C.tokenRiskWarningDialogEvent, ({ swap })=>{
        if (swap) onSwap();
    });
    if (showTokenSecurity) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        color: "error",
        fullWidth: true,
        variant: "contained",
        disabled: disabled,
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                token: tokenInfo,
                swap: false
            });
        },
        children: t.confirm_swap_risk()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/primitives.ts
var primitives = __webpack_require__(47469);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/trader/useTradeApproveComputed.ts







// Only Support EVM ERC20
function useTradeApproveComputed(trade, provider, token) {
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const context = useGetTradeContext(provider);
    return (0,react.useMemo)(()=>{
        return {
            approveToken: pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM && token?.schema === types/* SchemaType */.XQ.ERC20 ? token : null,
            approveAmount: trade ? trade.inputAmount : number/* ZERO */.xE,
            approveAddress: (()=>{
                if (context?.TYPE === web/* TradeProvider */.z4.ZRX) return trade?.trade_ ? trade.trade_.allowanceTarget : '';
                if (context?.TYPE === web/* TradeProvider */.z4.OPENOCEAN) return trade?.trade_ ? (trade?.trade_).to : context?.SPENDER_CONTRACT_ADDRESS;
                return context?.SPENDER_CONTRACT_ADDRESS ?? '';
            })()
        };
    }, [
        chainId,
        trade,
        token,
        context
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/TraderStateBar.tsx




















const TraderStateBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        button: {
            borderRadius: 8
        },
        disabledButton: {
            borderRadius: 8
        },
        stateBar: {
            position: 'sticky',
            bottom: 0,
            boxShadow: `0px 0px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.12 : 0.05)}`
        },
        unlockContainer: {
            margin: 0,
            width: '100%',
            ['& > div']: {
                padding: '0px !important'
            }
        }
    }));
function TraderStateBar({ trades, focusedTrade, inputToken, outputToken, inputAmount, inputTokenBalance, gasPrice, onSwap, refresh }) {
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = TraderStateBar_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { pluginID: actualPluginID } = (0,useContext/* useEnvironmentContext */.Ux)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { isSwapping } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    // #region if `isPopupPage` be true, click the plugin status bar need to  open popup window
    const openSelectWalletPopup = (0,react.useCallback)(()=>{
        (0,context/* openPopupWindow */.lU)?.(Routes/* PopupRoutes */.mZ.SelectWallet, {
            chainId
        });
    }, [
        chainId
    ]);
    // #endregion
    // #region approve token
    const { approveToken, approveAmount, approveAddress } = useTradeApproveComputed(focusedTrade?.value?.value ?? null, focusedTrade?.value?.provider, inputToken);
    // #endregion
    const minimalPlugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)(true);
    const isGoPlusMinimal = minimalPlugins?.map((x)=>x.ID).includes(PluginID/* PluginID */.P.GoPlusSecurity);
    const isClosedInExtensionPage = (0,extension_page/* useIsMinimalModeExtensionPage */.fn)(PluginID/* PluginID */.P.GoPlusSecurity);
    const isTokenSecurityEnable = !isGoPlusMinimal && !isClosedInExtensionPage;
    const { value: tokenSecurityInfo } = (0,useTokenSecurity/* useTokenSecurity */.x)(pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? chainId : undefined, outputToken?.address.trim(), isTokenSecurityEnable);
    const isRisky = tokenSecurityInfo?.is_high_risk;
    // #region form controls
    const inputTokenTradeAmount = (0,number/* rightShift */.pu)(inputAmount || '0', inputToken?.decimals);
    // #endregion
    // #region token balance
    const inputTokenBalanceAmount = new bignumber/* BigNumber */.O(inputTokenBalance || '0');
    // #endregion
    const maxAmount = (0,react.useMemo)(()=>{
        const marginGasPrice = (0,number/* multipliedBy */.$q)(gasPrice ?? 0, 1.1);
        const gasFee = (0,number/* multipliedBy */.$q)(marginGasPrice, focusedTrade?.value?.gas ?? trader/* MIN_GAS_LIMIT */._P);
        let amount_ = new bignumber/* BigNumber */.O(inputTokenBalanceAmount.toFixed() ?? 0);
        amount_ = Others.isNativeTokenSchemaType(inputToken?.schema) ? amount_.minus(gasFee) : amount_;
        return (0,number/* leftShift */.w5)(bignumber/* BigNumber */.O.max(0, amount_), inputToken?.decimals).toFixed(5);
    }, [
        focusedTrade,
        gasPrice,
        inputTokenTradeAmount,
        inputToken,
        Others.isNativeTokenSchemaType
    ]);
    // #region UI logic
    // validate form return a message if an error exists
    const validationMessage = (0,react.useMemo)(()=>{
        if (inputTokenTradeAmount.isZero()) return t.plugin_trader_error_amount_absence();
        if ((0,number/* isLessThan */.FI)(inputAmount, trader/* MINIMUM_AMOUNT */.rI)) return t.plugin_trade_error_input_amount_less_minimum_amount();
        if (!inputToken || !outputToken) return t.plugin_trader_error_amount_absence();
        if (!trades.length) return t.plugin_trader_error_insufficient_lp();
        if (inputTokenBalanceAmount.isLessThan(inputTokenTradeAmount) || Others.isNativeTokenSchemaType(inputToken.schema) && (0,formatter/* formatWeiToEther */.yp)(inputTokenTradeAmount).isGreaterThan(maxAmount)) return t.plugin_trader_error_insufficient_balance({
            symbol: inputToken?.symbol
        });
        if (focusedTrade?.value && !focusedTrade.value.value?.outputAmount) return t.plugin_trader_no_enough_liquidity();
        return '';
    }, [
        inputAmount,
        focusedTrade,
        trades,
        inputToken,
        outputToken,
        inputTokenBalanceAmount.toFixed(),
        inputTokenTradeAmount.toFixed(),
        maxAmount,
        Others.isNativeTokenSchemaType
    ]);
    // #endregion
    // #region native wrap message
    const nativeWrapMessage = (0,react.useMemo)(()=>{
        if (focusedTrade?.value) {
            if (isNativeTokenWrapper(focusedTrade.value.value)) {
                const trade_ = focusedTrade.value.value;
                return trade_?.trade_?.isWrap ? t.plugin_trader_wrap() : t.plugin_trader_unwrap();
            }
            return t.plugin_trader_swap_amount_symbol();
        } else {
            return t.plugin_trader_no_trade();
        }
    }, [
        focusedTrade,
        outputToken
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.stateBar,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
            actualPluginID: actualPluginID,
            onClick: Sniffings/* Sniffings */.Y.is_popup_page ? openSelectWalletPopup : undefined,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                offChain: true,
                expectedChainId: chainId,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    spender: approveAddress,
                    amount: approveAmount.toFixed(),
                    classes: {
                        container: classes.unlockContainer
                    },
                    contractName: focusedTrade?.value?.provider ? resolveTradeProviderName(focusedTrade.value?.provider) : '',
                    infiniteUnlockContent: t.plugin_trader_unlock_symbol({
                        symbol: approveToken?.symbol || ''
                    }),
                    token: !isNativeTokenWrapper(focusedTrade?.value?.value ?? null) && approveToken?.schema === types/* SchemaType */.XQ.ERC20 && !!approveAmount.toNumber() ? approveToken : undefined,
                    ActionButtonProps: {
                        color: 'primary',
                        style: {
                            borderRadius: 8
                        },
                        size: 'medium'
                    },
                    callback: refresh,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                        expectedChainId: chainId,
                        expectedPluginID: pluginID,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurityBoundary, {
                            tokenInfo: {
                                name: tokenSecurityInfo?.token_name ?? '--',
                                chainId: tokenSecurityInfo?.chainId ?? types/* ChainId */.a_.Mainnet,
                                contract: tokenSecurityInfo?.contract ?? primitives/* ZERO_ADDRESS */.r
                            },
                            disabled: focusedTrade?.loading || !focusedTrade?.value || !!validationMessage || isSwapping,
                            onSwap: onSwap,
                            showTokenSecurity: !!(isTokenSecurityEnable && isRisky),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                fullWidth: true,
                                loading: isSwapping,
                                variant: "contained",
                                disabled: focusedTrade?.loading || !focusedTrade?.value || !!validationMessage || isSwapping,
                                classes: {
                                    root: classes.button,
                                    disabled: classes.disabledButton
                                },
                                color: "primary",
                                onClick: onSwap,
                                children: validationMessage || nativeWrapMessage
                            })
                        })
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowDownward.js


/* harmony default export */ const ArrowDownward = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = __webpack_require__(1638);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(77821);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js
var tinycolor = __webpack_require__(89204);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/components/ConfirmDialogUI.tsx












const ConfirmDialogUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        section: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '16px 0',
            '& > p': {
                fontSize: 14,
                lineHeight: '18px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center'
            }
        },
        title: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor?.second
        },
        description: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor?.main
        },
        card: {
            borderRadius: 12,
            padding: 12,
            background: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.primaryBackground2 : theme.palette.maskColor?.input}!important`,
            border: `1px solid ${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lineLight : theme.palette.maskColor?.line}`,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 10,
            ['& > div']: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        },
        label: {
            fontWeight: 700,
            lineHeight: '18px',
            color: theme.palette.maskColor?.second
        },
        symbol: {
            display: 'flex',
            alignItems: 'center',
            columnGap: 8,
            fontWeight: 700,
            lineHeight: '18px'
        },
        amount: {
            fontSize: 30,
            lineHeight: 1.2,
            fontWeight: 700,
            color: theme.palette.maskColor?.main
        },
        tokenIcon: {
            width: 30,
            height: 30
        },
        reverseWrapper: {
            display: 'flex',
            justifyContent: 'center'
        },
        reverse: {
            marginTop: -8,
            border: `2px solid ${theme.palette.maskColor?.bottom}`,
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.lightBackground : theme.palette.background.default,
            width: 32,
            height: 32,
            borderRadius: 99,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        reverseIcon: {
            stroke: Sniffings/* Sniffings */.Y.is_dashboard_page ? `${theme.palette.text.primary}!important` : theme.palette.maskColor?.main
        },
        alert: {
            marginTop: 12,
            fontSize: 14,
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            padding: 12,
            borderRadius: 4
        },
        warning: {
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.warning.main : (0,tinycolor/* default */.Z)(theme.palette.maskColor?.warn).setAlpha(0.1).toRgbString(),
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.warning.main : theme.palette.maskColor?.warn
        },
        info: {
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.background.default : theme.palette.maskColor?.bg,
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.text.primary : theme.palette.maskColor?.main
        },
        error: {
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : (0,tinycolor/* default */.Z)(theme.palette.maskColor?.danger).setAlpha(0.1).toRgbString(),
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.common.white : theme.palette.maskColor?.danger
        },
        action: {
            marginRight: 0,
            padding: 0,
            minWidth: 88
        },
        infoIcon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.twitterInfo : theme.palette.maskColor?.main
        },
        content: {
            padding: 16,
            minHeight: 458,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        actions: {
            padding: 0,
            position: 'sticky',
            bottom: 0,
            boxShadow: `0px 0px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.12 : 0.05)}`
        },
        danger: {
            color: `${Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : theme.palette.maskColor?.danger}!important`
        },
        edit: {
            lineHeight: '18px',
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.primary.main : theme.palette.maskColor?.primary,
            marginRight: 4,
            fontWeight: 700,
            cursor: 'pointer'
        },
        alertMessage: {
            padding: 0
        },
        alertIcon: {
            padding: 0
        },
        dialog: {
            [`.${dialogTitleClasses/* default */.Z.root}`]: {
                // 'row !important' is not assignable to FlexDirection
                flexDirection: 'row !important',
                '& > p': {
                    justifyContent: 'center !important'
                }
            }
        }
    }));
const ConfirmDialogUI = /*#__PURE__*/ (0,react.memo)(({ open, onClose, trade, currentSlippage, inputTokenPrice, nativeToken, inputToken, outputToken, outputTokenPrice, gasFee, gasFeeUSD, openSettingDialog, isGreatThanSlippageSetting, onConfirm, loading })=>{
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes, cx } = ConfirmDialogUI_useStyles();
    const [cacheTrade, setCacheTrade] = (0,react.useState)();
    const [priceUpdated, setPriceUpdated] = (0,react.useState)(false);
    const [priceReversed, setPriceReversed] = (0,react.useState)(false);
    // #region detect price changing
    const [executionPrice, setExecutionPrice] = (0,react.useState)(cacheTrade?.executionPrice);
    (0,react.useEffect)(()=>{
        if (open) setExecutionPrice(undefined);
    }, [
        open
    ]);
    // #endregion
    const staled = !!(executionPrice && !executionPrice.isEqualTo(cacheTrade?.executionPrice ?? 0));
    const alertTip = (0,react.useMemo)(()=>{
        if (currentSlippage < trader/* MIN_SLIPPAGE */.JB && !isGreatThanSlippageSetting) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            classes: {
                message: classes.alertMessage,
                icon: classes.alertIcon
            },
            className: cx(classes.alert, classes.warning),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WarningTriangle, {}),
            severity: "warning",
            children: t.plugin_trader_price_impact_warning_tips()
        });
        else if (currentSlippage > trader/* MAX_SLIPPAGE */.j2 && !isGreatThanSlippageSetting) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                classes: {
                    message: classes.alertMessage,
                    icon: classes.alertIcon
                },
                className: cx(classes.alert, classes.warning),
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WarningTriangle, {}),
                severity: "warning",
                children: t.plugin_trader_confirm_tips()
            });
        } else if (isGreatThanSlippageSetting && cacheTrade?.priceImpact) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                classes: {
                    message: classes.alertMessage,
                    icon: classes.alertIcon
                },
                className: cx(classes.alert, classes.error),
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleWarning, {
                    className: classes.danger
                }),
                severity: "error",
                children: t.plugin_trader_price_impact_too_high_tips({
                    impact: (0,formatPercentage/* formatPercentage */.r)(cacheTrade?.priceImpact)
                })
            });
        }
        return null;
    }, [
        currentSlippage,
        isGreatThanSlippageSetting,
        cacheTrade?.priceImpact
    ]);
    const onAccept = (0,react.useCallback)(()=>{
        setPriceUpdated(false);
        setCacheTrade(trade);
        setExecutionPrice(trade.executionPrice);
    }, [
        trade
    ]);
    // #region update cache trade and price updated state
    (0,useUpdateEffect/* default */.Z)(()=>{
        // when dialog has been closed, reset state
        if (!open) {
            setPriceUpdated(false);
            setCacheTrade(undefined);
            return;
        }
        if (!cacheTrade) {
            setCacheTrade(trade);
        } else // when output amount or minimum received has been changed
        if (!priceUpdated && !cacheTrade.outputAmount.isEqualTo(trade.outputAmount)) {
            setPriceUpdated(true);
        }
    }, [
        open,
        trade,
        cacheTrade,
        priceUpdated
    ]);
    // #endregion
    if (!cacheTrade) return null;
    const { inputAmount, outputAmount } = cacheTrade;
    const swapUsdPrice = (0,formatCurrency/* formatCurrency */.x)(inputAmount.shiftedBy(-inputToken.decimals).times(inputTokenPrice), 'USD', {
        onlyRemainTwoOrZeroDecimal: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t.plugin_trader_confirm_swap(),
        className: classes.dialog,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.card,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: t.plugin_trader_swap_from()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: [
                                            swapUsdPrice.includes('<') ? '' : '\u2248',
                                            swapUsdPrice
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        component: "div",
                                        className: classes.symbol,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                                className: classes.tokenIcon,
                                                address: inputToken.address,
                                                name: inputToken.name,
                                                symbol: inputToken.symbol,
                                                logoURL: inputToken.logoURL
                                            }),
                                            inputToken.symbol
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.amount,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                            value: inputAmount.toFixed() ?? '0',
                                            decimals: inputToken.decimals,
                                            significant: 6,
                                            formatter: formatBalance/* formatBalance */.a
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.reverseWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.reverse,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward, {
                                className: classes.reverseIcon
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.card,
                        mt: -1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: t.plugin_trader_swap_receive()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.label,
                                        children: [
                                            swapUsdPrice.includes('<') ? '' : '\u2248',
                                            swapUsdPrice
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        component: "div",
                                        className: classes.symbol,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                                className: classes.tokenIcon,
                                                chainId: outputToken.chainId,
                                                address: outputToken.address,
                                                name: outputToken.name,
                                                symbol: outputToken.symbol,
                                                logoURL: outputToken.logoURL
                                            }),
                                            outputToken.symbol
                                        ]
                                    }),
                                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DotLoading/* DotLoading */.k, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.amount,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                            value: outputAmount.toFixed() ?? '0',
                                            decimals: outputToken.decimals,
                                            significant: 6,
                                            formatter: formatBalance/* formatBalance */.a
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.plugin_trader_tab_price()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.description,
                                children: [
                                    priceReversed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "1 ",
                                                    outputToken.symbol
                                                ]
                                            }),
                                            ' = ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                children: (0,formatBalance/* formatBalance */.a)(inputAmount.dividedBy(outputAmount).shiftedBy(outputToken.decimals - inputToken.decimals).shiftedBy(inputToken.decimals).integerValue(), inputToken.decimals, 6)
                                            }),
                                            inputToken.symbol
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    "1 ",
                                                    inputToken.symbol
                                                ]
                                            }),
                                            ' = ',
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    (0,formatBalance/* formatBalance */.a)(outputAmount.dividedBy(inputAmount).shiftedBy(inputToken.decimals - outputToken.decimals).shiftedBy(outputToken.decimals).integerValue(), outputToken.decimals, 6),
                                                    ' ',
                                                    outputToken.symbol
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Retweet, {
                                        style: {
                                            marginLeft: 4,
                                            cursor: 'pointer'
                                        },
                                        onClick: ()=>setPriceReversed((x)=>!x)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.plugin_trader_confirm_slippage_tolerance()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.description,
                                children: [
                                    openSettingDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "span",
                                        className: classes.edit,
                                        onClick: openSettingDialog,
                                        children: t.edit()
                                    }) : null,
                                    currentSlippage / 100,
                                    "%"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.plugin_trader_price_impact()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: isGreatThanSlippageSetting ? classes.danger : classes.description,
                                children: cacheTrade?.priceImpact?.isLessThan(trader/* ONE_BIPS */.IS) ? '<0.01%' : (0,formatPercentage/* formatPercentage */.r)(cacheTrade.priceImpact)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.plugin_trader_confirm_minimum_received()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.description,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                    value: cacheTrade.minimumReceived,
                                    decimals: outputToken.decimals,
                                    significant: 6,
                                    symbol: outputToken.symbol,
                                    formatter: formatBalance/* formatBalance */.a
                                })
                            })
                        ]
                    }),
                    !(0,number/* isZero */.Fr)(gasFee) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t.plugin_trader_gas()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.description,
                                children: [
                                    openSettingDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "span",
                                        className: classes.edit,
                                        onClick: openSettingDialog,
                                        children: t.edit()
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                        value: gasFee,
                                        decimals: nativeToken?.decimals ?? 0,
                                        significant: 4,
                                        symbol: nativeToken?.symbol,
                                        formatter: formatBalance/* formatBalance */.a
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "(",
                                            gasFeeUSD.includes('<') ? '' : '\u2248',
                                            gasFeeUSD,
                                            ")"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    priceUpdated ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                        classes: {
                            action: classes.action,
                            message: classes.alertMessage,
                            icon: classes.alertIcon
                        },
                        className: cx(classes.alert, classes.info),
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Info, {
                            className: classes.infoIcon
                        }),
                        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "roundedOutlined",
                            size: "small",
                            color: "info",
                            fullWidth: true,
                            onClick: onAccept,
                            children: t.plugin_trader_update()
                        }),
                        children: t.plugin_trader_price_updated()
                    }) : alertTip
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: staled || priceUpdated,
                        fullWidth: true,
                        onClick: onConfirm,
                        children: t.plugin_trader_confirm_swap()
                    })
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/dialogClasses.js
var dialogClasses = __webpack_require__(54677);
;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/components/PriceImpactDialogUI.tsx









const PriceImpactDialogUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialog: {
            [`.${dialogClasses/* default */.Z.paper}`]: {
                width: '420px!important'
            },
            [`.${dialogTitleClasses/* default */.Z.root}`]: {
                // 'row !important' is not assignable to FlexDirection
                flexDirection: 'row !important',
                '& > p': {
                    justifyContent: 'center !important'
                }
            }
        },
        content: {
            minHeight: 278,
            padding: '38px 16px 120px 16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        icon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : theme.palette.maskColor?.danger,
            width: 90,
            height: 90
        },
        title: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : theme.palette.maskColor?.danger,
            fontSize: 24,
            lineHeight: 1.2,
            fontWeight: 700,
            marginTop: 16
        },
        description: {
            marginTop: 56,
            color: theme.palette.maskColor?.second,
            fontSize: 16,
            lineHeight: '20px',
            '& > span': {
                color: Sniffings/* Sniffings */.Y.is_dashboard_page ? vars/* MaskColorVar */.Z.redMain : theme.palette.maskColor?.danger
            }
        },
        actions: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 16,
            padding: 16,
            position: 'sticky',
            bottom: 0,
            boxShadow: `0px 0px 20px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.shadowBottom, theme.palette.mode === 'dark' ? 0.12 : 0.05)}`,
            '& > *': {
                margin: '0px !important'
            }
        }
    }));
const PriceImpactDialogUI = /*#__PURE__*/ (0,react.memo)(({ open, onClose, lostToken, lostValue, priceImpact, symbol, onConfirm })=>{
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const { classes } = PriceImpactDialogUI_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t.impact_warning(),
        className: classes.dialog,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleWarning, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t.risk_warning()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(i18n_generated/* TraderTrans */.v.risk_warning_description, {
                            components: {
                                span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                            },
                            values: {
                                impact: (0,formatPercentage/* formatPercentage */.r)(priceImpact ?? 0),
                                lostSymbol: `${lostToken.replace('<', '&lt;')} ${symbol}`,
                                lostValue: `${lostValue.replace('<', '&lt;')} USD`
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        onClick: onClose,
                        children: t.adjust_order()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        color: "error",
                        onClick: onConfirm,
                        children: t.make_trade_anyway()
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/ConfirmDialog.tsx

















const PERCENT_DENOMINATOR = 10000;
function ConfirmDialog(props) {
    const { inputToken, outputToken, gas = trader/* MIN_GAS_LIMIT */._P, gasPrice, trade, onConfirm, gasConfig } = props;
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { setTemporarySlippage } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    const [priceImpactDialogOpen, setPriceImpactDialogOpen] = (0,react.useState)(false);
    const currentSlippage = (0,useValueRef/* useValueRef */.E)(src_settings/* currentSlippageSettings */.I);
    const nativeToken = Others.createNativeToken(chainId);
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(pluginID);
    const { data: inputTokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(pluginID, inputToken.address);
    const { data: outputTokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(pluginID, outputToken.address);
    const gasFee = (0,react.useMemo)(()=>{
        return gas && gasPrice ? (0,number/* multipliedBy */.$q)(gasPrice, gas).integerValue().toFixed() : '0';
    }, [
        gas,
        gasPrice
    ]);
    const gasFeeUSD = (0,react.useMemo)(()=>{
        if (!gasFee) return '0';
        return (0,formatCurrency/* formatCurrency */.x)((0,formatter/* formatWeiToEther */.yp)(gasFee).times(nativeTokenPrice), 'USD', {
            onlyRemainTwoOrZeroDecimal: true
        });
    }, [
        gasFee,
        nativeTokenPrice
    ]);
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(trade?.priceImpact);
    const lostTokenValue = (0,number/* multipliedBy */.$q)(trade.inputAmount, trade.priceImpact).toFixed(0);
    // #region price impact dialog
    const lostToken = (0,formatBalance/* formatBalance */.a)(lostTokenValue, trade.inputToken?.decimals ?? 0, 6);
    const lostValue = (0,formatCurrency/* formatCurrency */.x)((0,number/* multipliedBy */.$q)(inputTokenPrice ?? 0, (0,number/* leftShift */.w5)(lostTokenValue, trade.inputToken?.decimals ?? 0)), '', {
        onlyRemainTwoOrZeroDecimal: true
    });
    const handleOpenPriceImpactDialog = (0,react.useCallback)(()=>{
        setPriceImpactDialogOpen(true);
        props.onClose();
    }, [
        props.onClose
    ]);
    const handlePriceImpactDialogConfirm = (0,react.useCallback)(()=>{
        if (!trade.priceImpact) return;
        setTemporarySlippage(new bignumber/* BigNumber */.O(trade?.priceImpact.multipliedBy(PERCENT_DENOMINATOR).toFixed(0)).toNumber());
        onConfirm();
        setPriceImpactDialogOpen(false);
    }, [
        trade
    ]);
    const onPriceImpactDialogClose = (0,react.useCallback)(()=>{
        setPriceImpactDialogOpen(false);
    }, []);
    // #endregion
    const [, openSettingDialog] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const { settings } = await modals/* SelectGasSettingsModal */.eq.openAndWaitForClose({
            chainId,
            disableGasLimit: true,
            disableSlippageTolerance: false,
            slippageTolerance: src_settings/* currentSlippageSettings */.I.value / 100,
            transaction: {
                gas,
                ...gasConfig
            }
        });
        if (settings?.slippageTolerance) src_settings/* currentSlippageSettings */.I.value = settings.slippageTolerance;
        messages/* PluginTraderMessages */.A.swapSettingsUpdated.sendToLocal({
            open: false,
            gasConfig: GasEditor/* GasEditor */.e.fromTransaction(chainId, settings?.transaction).getGasConfig()
        });
    }, [
        chainId,
        src_settings/* currentSlippageSettings */.I.value,
        gas,
        gasConfig
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialogUI, {
                ...props,
                currentSlippage: currentSlippage,
                gasFee: gasFee,
                gasFeeUSD: gasFeeUSD,
                nativeToken: nativeToken,
                inputTokenPrice: inputTokenPrice,
                outputTokenPrice: outputTokenPrice,
                openSettingDialog: pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? openSettingDialog : undefined,
                isGreatThanSlippageSetting: isGreatThanSlippageSetting,
                onConfirm: isGreatThanSlippageSetting ? handleOpenPriceImpactDialog : onConfirm
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceImpactDialogUI, {
                open: priceImpactDialogOpen,
                onClose: onPriceImpactDialogClose,
                onConfirm: handlePriceImpactDialogConfirm,
                lostToken: lostToken,
                symbol: inputToken.symbol,
                lostValue: lostValue,
                priceImpact: trade.priceImpact
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Trader/src/SiteAdaptor/trader/Trader.tsx


























const Trader_Trader = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const theme = (0,useTheme/* default */.Z)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { defaultOutputCoin, chainId: targetChainId, defaultInputCoin, settings = false, share } = props;
    const t = (0,i18n_generated/* useTraderTrans */.u)();
    const [focusedTrade, setFocusTrade] = (0,react.useState)();
    const { chainId, account, setChainId } = (0,useContext/* useChainContext */.ql)({
        chainId: targetChainId
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const traderDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.Trader, 'any');
    const chainIdList = traderDefinition?.enableRequirement?.web3?.[PluginID/* NetworkPluginID */.F.PLUGIN_EVM]?.supportedChainIds ?? [];
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)(pluginID, chainId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    // #region trade state
    const { setIsSwapping, tradeState: [{ inputToken, outputToken, inputTokenBalance, inputAmount }, dispatchTradeStore], allTradeComputed, setTemporarySlippage, openConfirmDialog, setOpenConfirmDialog } = useAllProviderTradeContext/* AllProviderTradeContext */.TX.useContainer();
    // #endregion
    // #region gas config and gas price
    const { gasPrice, gasConfig, setGasConfig } = (0,useGasConfig/* useGasConfig */.c)(chainId);
    // #endregion
    (0,react.useImperativeHandle)(ref, ()=>({
            gasConfig,
            focusedTrade: focusedTrade?.value,
            refresh: ()=>{
                allTradeComputed.map((x)=>x.retry());
            }
        }), [
        allTradeComputed,
        focusedTrade?.value,
        gasConfig
    ]);
    (0,react.useEffect)(()=>{
        if (!chainIdValid || !chainIdList.includes(chainId)) setChainId(types/* ChainId */.a_.Mainnet);
    }, [
        chainIdValid,
        chainIdList,
        chainId
    ]);
    // #region if chain id be changed, update input token be native token
    (0,react.useEffect)(()=>{
        if (!chainIdValid) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN,
            token: Others.createNativeToken(chainId)
        });
    }, [
        chainId,
        chainIdValid,
        Others.createNativeToken
    ]);
    // #endregion
    const updateTradingCoin = (0,react.useCallback)((type, coin)=>{
        if (!coin?.address) return;
        dispatchTradeStore({
            type,
            token: coin
        });
    }, []);
    (0,react.useEffect)(()=>{
        updateTradingCoin(useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN, defaultInputCoin);
    }, [
        updateTradingCoin,
        defaultInputCoin
    ]);
    (0,react.useEffect)(()=>{
        updateTradingCoin(useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN, defaultOutputCoin);
    }, [
        updateTradingCoin,
        defaultOutputCoin
    ]);
    const onInputAmountChange = (0,react.useCallback)((amount)=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_AMOUNT,
            amount
        });
    }, []);
    // #region update balance
    const { data: inputTokenBalance_, isLoading: loadingInputTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, inputToken?.address ?? '', {
        chainId
    });
    const { data: outputTokenBalance_, isLoading: loadingOutputTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, outputToken?.address ?? '', {
        chainId
    });
    (0,react.useEffect)(()=>{
        if (!inputTokenBalance_ || loadingInputTokenBalance || !inputToken) {
            return;
        }
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: inputTokenBalance_
        });
    }, [
        inputTokenBalance_,
        loadingInputTokenBalance,
        inputToken
    ]);
    (0,react.useEffect)(()=>{
        if (!outputTokenBalance_ || loadingOutputTokenBalance || outputToken) {
            return;
        }
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: outputTokenBalance_
        });
    }, [
        outputTokenBalance_,
        loadingOutputTokenBalance,
        outputToken
    ]);
    // #region select token
    const excludeTokens = [
        inputToken,
        outputToken
    ].filter(Boolean).map((x)=>x?.address);
    const onTokenChipClick = (0,react.useCallback)(async (panelType)=>{
        if (!account) {
            modals/* SelectProviderModal */.ge.open();
            return;
        }
        const picked = await modals/* SelectFungibleTokenModal */.gw.openAndWaitForClose({
            chainId,
            disableNativeToken: false,
            selectedTokens: excludeTokens
        });
        if (!picked) return;
        dispatchTradeStore({
            type: panelType === types_trader/* TokenPanel */.l.Input ? useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_TOKEN : useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN,
            token: picked,
            balance: '0'
        });
    }, [
        excludeTokens.join(','),
        chainId,
        account
    ]);
    // #endregion
    // #region blocking (swap)
    const [{ loading: isTrading }, tradeCallback] = trader_useTradeCallback_useTradeCallback(focusedTrade?.value?.provider, focusedTrade?.value?.value, gasConfig);
    (0,react.useEffect)(()=>{
        setIsSwapping(isTrading);
    }, [
        isTrading
    ]);
    const shareText = (0,react.useMemo)(()=>{
        const isTwitter = Sniffings/* Sniffings */.Y.is_twitter_page;
        const isFacebook = Sniffings/* Sniffings */.Y.is_facebook_page;
        const cashTag = isTwitter ? '$' : '';
        return focusedTrade?.value && inputToken && outputToken ? t.share_text({
            input_amount: (0,formatBalance/* formatBalance */.a)(focusedTrade.value.value?.inputAmount, inputToken.decimals, 6),
            input_symbol: `${cashTag}${inputToken.symbol}`,
            output_amount: (0,formatBalance/* formatBalance */.a)(focusedTrade.value.value?.outputAmount, outputToken.decimals, 6),
            output_symbol: `${cashTag}${outputToken.symbol}`,
            account_promote: t.account_promote({
                context: isTwitter ? 'twitter' : isFacebook ? 'facebook' : 'default'
            })
        }) : '';
    }, [
        focusedTrade?.value,
        inputToken,
        outputToken,
        t
    ]);
    const onConfirm = (0,react.useCallback)(async ()=>{
        setOpenConfirmDialog(false);
        await (0,esm/* delay */.gw)(100);
        const hash = await tradeCallback();
        setTemporarySlippage(undefined);
        if (typeof hash !== 'string') return;
        const result = await entry/* Web3 */.Bv.confirmTransaction(hash);
        if (!result.status) return;
        const confirmed = await modals/* ConfirmModal */.sm.openAndWaitForClose({
            title: t.swap(),
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.FillSuccess, {
                        size: 90,
                        style: {
                            borderRadius: 99
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 20,
                        lineHeight: "24px",
                        fontWeight: 700,
                        color: theme.palette.maskColor.success,
                        marginTop: "20px",
                        children: t.congratulations()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 16,
                        lineHeight: "20px",
                        fontWeight: 700,
                        mt: 5,
                        children: t.swap_successfully_description({
                            input: `${(0,formatBalance/* formatBalance */.a)(focusedTrade?.value?.value?.inputAmount, focusedTrade?.value?.value?.inputToken?.decimals)} ${focusedTrade?.value?.value?.inputToken?.symbol}`,
                            output: `${(0,formatBalance/* formatBalance */.a)(focusedTrade?.value?.value?.outputAmount, focusedTrade?.value?.value?.outputToken?.decimals)} ${focusedTrade?.value?.value?.outputToken?.symbol}`
                        })
                    })
                ]
            }),
            confirmLabel: t.share(),
            maxWidthOfContent: 420
        });
        if (confirmed) share?.(shareText);
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_INPUT_AMOUNT,
            amount: ''
        });
    }, [
        tradeCallback,
        shareText,
        focusedTrade
    ]);
    const onConfirmDialogClose = (0,react.useCallback)(()=>{
        setOpenConfirmDialog(false);
    }, []);
    // #endregion
    // #region the click handler of switch arrow
    const onSwitchToken = (0,react.useCallback)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.SWITCH_TOKEN,
            inputToken: outputToken,
            outputToken: inputToken,
            inputBalance: outputToken ? outputTokenBalance_ ?? '0' : '0',
            outputBalance: inputTokenBalance_ ?? '0'
        });
    }, [
        dispatchTradeStore,
        inputToken,
        outputToken,
        inputAmount,
        inputTokenBalance_,
        outputTokenBalance_
    ]);
    // #region swap callback
    const onSwap = (0,react.useCallback)(()=>{
        // no need to open the confirmation dialog if it (un)wraps the native token
        if (focusedTrade?.value && isNativeTokenWrapper(focusedTrade.value.value)) tradeCallback();
        else setOpenConfirmDialog(true);
    }, [
        focusedTrade,
        tradeCallback
    ]);
    // #endregion
    // #region The trades sort by best price (Estimate received * price - Gas fee * native token price)
    const sortedAllTradeComputed = useSortedTrades(allTradeComputed, chainId, gasPrice);
    // #endregion
    // Query the balance of native tokens on target chain
    useUpdateBalance(chainId);
    // #endregion
    // #region reset focused trade when chainId, inputToken, outputToken, inputAmount be changed
    (0,useUpdateEffect/* default */.Z)(()=>{
        setFocusTrade(undefined);
    }, [
        targetChainId,
        inputToken,
        outputToken,
        inputAmount
    ]);
    // #endregion
    // #region if chain id be changed, reset the chain id on context, and reset gas config
    (0,react.useEffect)(()=>{
        if (!Others.isValidChainId(chainId)) return;
        setGasConfig(undefined);
    }, [
        chainId,
        Others
    ]);
    // #endregion
    // #region if target chain id be changed, reset output token
    (0,useUpdateEffect/* default */.Z)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN,
            token: undefined
        });
    }, [
        targetChainId
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        return messages/* PluginTraderMessages */.A.swapSettingsUpdated.on((event)=>{
            if (event.open) return;
            if (event.gasConfig) {
                setGasConfig(event.gasConfig);
            }
        });
    }, []);
    (0,useUnmount/* default */.Z)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType */.AF.UPDATE_OUTPUT_TOKEN,
            token: undefined
        });
    });
    // #region if trade has been changed, update the focused trade
    (0,useUpdateEffect/* default */.Z)(()=>{
        setFocusTrade((prev)=>{
            const target = allTradeComputed.find((x)=>prev?.value?.provider === x.value?.provider);
            return target ?? prev;
        });
    }, [
        allTradeComputed
    ]);
    // #endregion
    // #region hack for smartPay, will be removed
    const maskTokenAddress = (0,useMaskTokenAddress/* useMaskTokenAddress */.z)();
    const { value: smartPayConfig } = (0,useAsync/* default */.Z)(async ()=>{
        const smartPayChainId = await entry/* SmartPayBundler */.Pp.getSupportedChainId();
        const depositPaymaster = new entry/* DepositPaymaster */.hv(smartPayChainId);
        const ratio = await depositPaymaster.getRatio();
        return {
            ratio,
            smartPayChainId
        };
    }, []);
    const actualBalance = (0,react.useMemo)(()=>{
        if (!wallet?.owner || chainId !== smartPayConfig?.smartPayChainId || !(0,isSameAddress/* isSameAddress */.W)(inputToken?.address, maskTokenAddress)) return inputTokenBalance;
        return (0,number/* toFixed */.FH)(bignumber/* BigNumber */.O.max((0,number/* minus */.h9)(inputTokenBalance, new bignumber/* BigNumber */.O(gasConfig.maxFeePerGas).multipliedBy(focusedTrade?.value?.gas && !(0,number/* isZero */.Fr)(focusedTrade?.value?.gas) ? (0,addGasMargin/* addGasMargin */.b)(focusedTrade?.value.gas) : '150000').integerValue().multipliedBy(smartPayConfig?.ratio ?? 1)), 0), 0);
    }, [
        gasConfig,
        wallet,
        inputToken?.address,
        maskTokenAddress,
        smartPayConfig,
        chainId,
        inputTokenBalance,
        focusedTrade
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeForm, {
                isSmartPay: !!wallet?.owner && chainId === smartPayConfig?.smartPayChainId && (0,isSameAddress/* isSameAddress */.W)(inputToken?.address, maskTokenAddress),
                settings: settings,
                classes: props.classes,
                trades: sortedAllTradeComputed,
                inputToken: inputToken,
                outputToken: outputToken,
                inputTokenBalance: actualBalance,
                inputAmount: inputAmount,
                onInputAmountChange: onInputAmountChange,
                onTokenChipClick: onTokenChipClick,
                focusedTrade: focusedTrade,
                onFocusedTradeChange: (trade)=>setFocusTrade(trade),
                gasPrice: gasPrice,
                gasConfig: gasConfig,
                onSwitch: onSwitchToken
            }),
            focusedTrade?.value?.value && !isNativeTokenWrapper(focusedTrade.value.value) && inputToken && outputToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                open: openConfirmDialog,
                trade: focusedTrade.value.value,
                loading: focusedTrade.loading,
                gas: focusedTrade.value.gas,
                gasPrice: gasPrice,
                gasConfig: gasConfig,
                inputToken: inputToken,
                outputToken: outputToken,
                onConfirm: onConfirm,
                onClose: onConfirmDialogClose
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderStateBar, {
                trades: sortedAllTradeComputed,
                inputToken: inputToken,
                outputToken: outputToken,
                inputTokenBalance: actualBalance,
                inputAmount: inputAmount,
                focusedTrade: focusedTrade,
                gasPrice: gasPrice,
                onSwap: onSwap,
                refresh: ()=>allTradeComputed.map((x)=>x.retry())
            })
        ]
    });
});
Trader_Trader.displayName = 'Trader';


/***/ }),

/***/ 67041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useTraderTrans),
/* harmony export */   v: () => (/* binding */ TraderTrans)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
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
function useTraderTrans() /**
      * `Instantly token exchange on Twitter. Install Mask.io to explore “better server” on Multi-chain Dex.`
      */ /**
      * ``
      */ /**
      * `Follow @$t(mask:twitter_account) to swap cryptocurrencies on Twitter`
      */ /**
      * `Follow @$t(mask:facebook_account) to swap cryptocurrencies on Facebook`
      */ /**
      * `I just swapped {{input_amount}} {{input_symbol}} for {{output_amount}} {{output_symbol}}. {{account_promote}}
    $t(mask:hash_tag)`
      */ /**
      * `Price Impact Warning`
      */ /**
      * `Risk Warning`
      */ /**
      * `Adjust order`
      */ /**
      * `Make Trade Anyway`
      */ /**
      * `Swap Failed`
      */ /**
      * `Network or Dex provider errors`
      */ /**
      * `Swap`
      */ /**
      * `Congratulations!`
      */ /**
      * `Swap {{input}} for {{output}}`
      */ /**
      * `Confirm this transaction in your wallet`
      */ /**
      * `Transaction Submitted`
      */ /**
      * `Transaction Confirmed`
      */ /**
      * `Transaction Succeed`
      */ /**
      * `Transaction Failed`
      */ /**
      * `Successfully swapped Token`
      */ /**
      * `Successfully added NFTs`
      */ /**
      * `Swap Token`
      */ /**
      * `Share`
      */ /**
      * `Fail to load trending info from  `
      */ /**
      * `Switch to {{provider}}`
      */ /**
      * `Pop-up trading widget allows you to instantly view prices of the hottest Crypto/Stock and trade, also invest in the best performing managers.`
      */ /**
      * `Tutorial`
      */ /**
      * `What's LBP?`
      */ /**
      * `Solid blue line illustrates the historical price of {{symbol}} on the {{symbol}}'s LBP. The price could continue to go down if no one buys. Please make your investment decision wisely.`
      */ /**
      * `No pools found.`
      */ /**
      * `I understand`
      */ /**
      * `View on Etherscan`
      */ /**
      * `Token Safety Alert`
      */ /**
      * `Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.`
      */ /**
      * `Total Supply`
      */ /**
      * `Circulating Supply`
      */ /**
      * `Accept`
      */ /**
      * `24 Hour Trading Vol`
      */ /**
      * `Market Cap`
      */ /**
      * `Risk Warning`
      */ /**
      * `Confirm swap token contract risk`
      */ /**
      * `Swap Anyway`
      */ /**
      * `Dear Users,`
      */ /**
      * `Clicking the confirm button means that you agree to take the potential risks and proceed with the transaction.`
      */ /**
      * `The price has expired.`
      */ /**
      * `Market Statistic`
      */ /**
      * `Floor Price`
      */ /**
      * `Trending`
      */ /**
      * `Highest Price`
      */ /**
      * `Total Volume`
      */ /**
      * `24H Average Price`
      */ /**
      * `24H Traded Volume`
      */ /**
      * `24H sale`
      */ /**
      * `Marketplace`
      */ /**
      * `Items`
      */ /**
      * `Owners`
      */ /**
      * `Sales (24h)`
      */ /**
      * `Rank #{{rank}}`
      */ /**
      * `Info`
      */ /**
      * `Website`
      */ /**
      * `Community`
      */ /**
      * `Contract`
      */ /**
      * `Load failed`
      */ /**
      * `Swap`
      */ /**
      * `Wrap`
      */ /**
      * `You sell`
      */ /**
      * `You buy`
      */ /**
      * `Unwrap`
      */ /**
      * `Buy`
      */ /**
      * `No Data`
      */ /**
      * `General`
      */ /**
      * `Price`
      */ /**
      * `Exchange`
      */ /**
      * `Activities`
      */ /**
      * `NFTs`
      */ /**
      * `Swap`
      */ /**
      * `Exchange`
      */ /**
      * `Pair`
      */ /**
      * `Price`
      */ /**
      * `Volume (24h)`
      */ /**
      * `NFT`
      */ /**
      * `Method`
      */ /**
      * `Updated`
      */ /**
      * `Value`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Time`
      */ /**
      * `Enter an amount`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Insufficient liquidity for this trade`
      */ /**
      * `Input amount is below the minimum amount`
      */ /**
      * `Advanced Settings:`
      */ /**
      * `Gas fee`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `You must give the {{provider}} Smart contracts permission to use your {{symbol}}.You only have to do this once per token.`
      */ /**
      * `Swap`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Slippage tolerance`
      */ /**
      * `(${{usd}})`
      */ /**
      * `Minimum Received`
      */ /**
      * `Setting the max price slippage too high may cause the minimum amount returned lower than the amount desired.`
      */ /**
      * `Transaction with extremely low slippage tolerance might be reverted because of very small market movement.`
      */ /**
      * `High Price impact！More than {{impact}} drop！`
      */ /**
      * `Confirm Swap`
      */ /**
      * `Update`
      */ /**
      * `Price Impact`
      */ /**
      * `Price Impact (-{{percent}})`
      */ /**
      * `You may receive 10% less with this level of slippage tolerance.`
      */ /**
      * `Confirm Price Impact {{percent}}`
      */ /**
      * `Max Slippage`
      */ /**
      * `Instant`
      */ /**
      * `High`
      */ /**
      * `Medium`
      */ /**
      * `Standard`
      */ /**
      * `Fast`
      */ /**
      * `Custom`
      */ /**
      * `(${{usd}})`
      */ /**
      * `({{usd}})`
      */ /**
      * `({{usd}})`
      */ /**
      * `{{option}} ({{value}}) Gwei`
      */ /**
      * `No enough liquidity`
      */ /**
      * `Please select a trade`
      */ /**
      * `Swapping Risk`
      */ /**
      * `Transaction cost`
      */ /**
      * `Loading`
      */ /**
      * `Done`
      */ /**
      * `Download`
      */ /**
      * `Failed`
      */ /**
      * `Buy Now`
      */ /**
      * `No Enough Gas Fees`
      */ /**
      * `Open`
      */ /**
      * `Settings`
      */ /**
      * `Powered by`
      */ /**
      * `Available Balance`
      */ /**
      * `Balance`
      */ /**
      * `Edit`
      */ /**
      * - account_promote$default: ``
    
      * - account_promote$twitter: `Follow @$t(mask:twitter_account) to swap cryptocurrencies on Twitter`
    
      * - account_promote$facebook: `Follow @$t(mask:facebook_account) to swap cryptocurrencies on Facebook`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("com.maskbook.trader");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
            i18nKey,
            ns: "com.maskbook.trader",
            shouldUnescape: true,
            ...props
        });
}
const TraderTrans = /**
      * `The amount you want to trade will cause the price to drop by <span>{{impact}}</span> comparing to the current market price. As a result, you might lose <span>{{lostSymbol}}</span>  or <span>{{- lostValue}}</span>.`
      */ /*#__PURE__*/ createProxy(createComponent);


/***/ }),

/***/ 68026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 50584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ContentTab),
/* harmony export */   l: () => (/* binding */ TokenPanel)
/* harmony export */ });
var ContentTab;
(function(ContentTab) {
    ContentTab["Market"] = 'market';
    ContentTab["Price"] = 'price';
    ContentTab["Exchange"] = 'exchange';
    ContentTab["Swap"] = 'swap';
    ContentTab["NFTItems"] = 'nft-items';
})(ContentTab || (ContentTab = {}));
var TokenPanel;
(function(TokenPanel) {
    TokenPanel[TokenPanel["Input"] = 0] = "Input";
    TokenPanel[TokenPanel["Output"] = 1] = "Output";
})(TokenPanel || (TokenPanel = {}));


/***/ }),

/***/ 11017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60307);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    // create an uuid for every hook
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        }), [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 14414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 78199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ NFTSpamBadge),
  f: () => (/* binding */ TokenSecurityBar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenSecurity/Common.tsx


var SecurityMessageLevel;
(function(SecurityMessageLevel) {
    SecurityMessageLevel["High"] = "High";
    SecurityMessageLevel["Medium"] = "Medium";
    SecurityMessageLevel["Safe"] = "Safe";
})(SecurityMessageLevel || (SecurityMessageLevel = {}));
const DefineMapping = {
    [SecurityMessageLevel.High]: {
        titleColor: '#FF5F5F',
        bgColor: 'rgba(255, 53, 69, 0.1)',
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SecurityRisk, {
                size: size ?? 24
            })
    },
    [SecurityMessageLevel.Medium]: {
        titleColor: '#FFB100',
        bgColor: 'rgba(255, 177, 0, 0.1)',
        // TODO: Merge duplicate icon in a another PR.
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.SecurityWarning, {
                size: size ?? 24,
                color: "#FFB915"
            })
    },
    [SecurityMessageLevel.Safe]: {
        titleColor: '#60DFAB',
        bgColor: 'rgba(119, 224, 181, 0.1)',
        icon: (size)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Success, {
                size: size ?? 24
            })
    }
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx







const TokenSecurityBar = /*#__PURE__*/ (0,react.memo)(({ tokenSecurity })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { warn_item_quantity: attentionFactors = 0, risk_item_quantity: riskyFactors = 0 } = tokenSecurity;
    const handleOpenDialog = ()=>{
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.checkSecurityDialogEvent.sendToLocal({
            open: true,
            searchHidden: true,
            tokenAddress: tokenSecurity.contract,
            chainId: tokenSecurity.chainId
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        spacing: 1.5,
        children: [
            riskyFactors !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                borderRadius: "4px",
                padding: "4px 8px",
                bgcolor: DefineMapping[SecurityMessageLevel.High].bgColor,
                spacing: 0.5,
                children: [
                    DefineMapping[SecurityMessageLevel.High].icon(14),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: "12px",
                        color: DefineMapping[SecurityMessageLevel.High].titleColor,
                        children: riskyFactors > 1 ? t.risky_items({
                            quantity: riskyFactors.toString()
                        }) : t.risky_item({
                            quantity: riskyFactors.toString()
                        })
                    })
                ]
            }),
            attentionFactors !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                borderRadius: "4px",
                padding: "4px 8px",
                bgcolor: DefineMapping[SecurityMessageLevel.Medium].bgColor,
                spacing: 0.5,
                children: [
                    DefineMapping[SecurityMessageLevel.Medium].icon(14),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: "12px",
                        color: DefineMapping[SecurityMessageLevel.Medium].titleColor,
                        children: attentionFactors > 1 ? t.attention_items({
                            quantity: attentionFactors.toString()
                        }) : t.attention_item({
                            quantity: attentionFactors.toString()
                        })
                    })
                ]
            }),
            (attentionFactors !== 0 || riskyFactors !== 0) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                borderRadius: "4px",
                padding: "4px 8px",
                bgcolor: "rgba(28, 104, 243, 0.1)",
                sx: {
                    cursor: 'pointer'
                },
                onClick: handleOpenDialog,
                spacing: 0.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: "12px",
                        color: "#1C68F3",
                        children: t.more()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                        size: 14,
                        color: "#1C68F3"
                    })
                ]
            })
        ]
    });
});
const NFTSpamBadge = /*#__PURE__*/ (0,react.memo)(function NFTSpamBadge(props) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        borderRadius: "4px",
        padding: "4px 8px",
        bgcolor: DefineMapping[SecurityMessageLevel.High].bgColor,
        spacing: 0.5,
        ...props,
        children: [
            DefineMapping[SecurityMessageLevel.High].icon(14),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                component: "span",
                fontSize: "12px",
                color: DefineMapping[SecurityMessageLevel.High].titleColor,
                children: t.spam()
            })
        ]
    });
});


/***/ }),

/***/ 72390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useTokenSecurity)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47469);




const useTokenSecurity = (chainId, address, isTokenSecurityEnable = true)=>{
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!isTokenSecurityEnable || !chainId) return;
        if (!address || (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .W)(address, _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ZERO_ADDRESS */ .r)) return;
        return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .GoPlusLabs */ .e.getTokenSecurity(chainId, [
            address
        ]);
    }, [
        chainId,
        address,
        isTokenSecurityEnable
    ]);
};


/***/ }),

/***/ 49193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useBlockTimestamp)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96732);



function useBlockTimestamp(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Connection */ .T)(pluginID, {
        chainId,
        ...options
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return Web3.getBlockTimestamp();
    }, [
        Web3
    ]);
}


/***/ }),

/***/ 9443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ useMaskTokenAddress)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useMaskTokenAddress(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return Others?.getMaskTokenAddress?.(options?.chainId ?? chainId);
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 84553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useGasConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49113);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98705);



function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { data: gasOptions } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useGasOptions */ .o)();
    const editor = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .GasEditor */ .e.fromGasOptions(chainId, gasOptions);
    return {
        gasPrice: editor.getGasPrice(),
        gasConfig: gasConfig || editor.getGasConfig(),
        setGasConfig
    };
}


/***/ }),

/***/ 92263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ addGasMargin)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);

function addGasMargin(value, scale = 3000) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(value).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(10000).plus(scale)).dividedToIntegerBy(10000);
}


/***/ }),

/***/ 49113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GasEditor)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84976);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);
/* harmony import */ var _helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41487);
/* harmony import */ var _constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3187);




class GasEditor {
    chainId;
    config;
    constructor(chainId, config){
        this.chainId = chainId;
        this.config = config;
    }
    get isEIP1559() {
        return !!_constants_descriptors_js__WEBPACK_IMPORTED_MODULE_1__/* .CHAIN_DESCRIPTORS */ .Q_.find((x)=>x.chainId === this.chainId)?.features?.includes('EIP1559');
    }
    get EIP1559GasOptionConfig() {
        return this.config;
    }
    get priorEIP1559GasOptionConfig() {
        return this.config;
    }
    getGasFee(gas) {
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .multipliedBy */ .$q)(this.getGasPrice(), gas);
    }
    getGasFeeInUSD(gas, price) {
        return (0,_helpers_formatter_js__WEBPACK_IMPORTED_MODULE_3__/* .formatWeiToEther */ .yp)(this.getGasFee(gas)).multipliedBy(price);
    }
    getGasPrice() {
        return this.EIP1559GasOptionConfig.maxFeePerGas || this.priorEIP1559GasOptionConfig.gasPrice || '0';
    }
    getGasConfig(fallback) {
        if (this.isEIP1559) {
            const config = fallback;
            return {
                gasPrice: undefined,
                maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxFeePerGas || '0'),
                maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.maxPriorityFeePerGas) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(config?.maxPriorityFeePerGas || '1'),
                gasCurrency: this.EIP1559GasOptionConfig?.gasCurrency || fallback?.gasCurrency,
                gas: this.EIP1559GasOptionConfig.gas && !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(this.EIP1559GasOptionConfig.gas) ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.EIP1559GasOptionConfig.gas) : undefined,
                gasOptionType: this.config.gasOptionType ?? config?.gasOptionType
            };
        }
        const priorConfig = fallback;
        return {
            gasPrice: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(this.priorEIP1559GasOptionConfig.gasPrice) || (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(priorConfig?.gasPrice || '0'),
            maxFeePerGas: undefined,
            maxPriorityFeePerGas: undefined,
            gasOptionType: this.config.gasOptionType ?? priorConfig?.gasOptionType
        };
    }
    static fromConfig(chainId, gasConfig = {}) {
        return new GasEditor(chainId, gasConfig);
    }
    static fromGasPrice(chainId, gasPrice = '0') {
        return new GasEditor(chainId, {
            gasPrice,
            maxFeePerGas: gasPrice,
            maxPriorityFeePerGas: gasPrice
        });
    }
    static fromTransaction(chainId, transaction) {
        return new GasEditor(chainId, {
            gas: transaction?.gas,
            gasPrice: transaction?.gasPrice,
            maxFeePerGas: transaction?.maxFeePerGas,
            maxPriorityFeePerGas: transaction?.maxPriorityFeePerGas
        });
    }
    static fromGasOption(chainId, gasOption) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOption?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
    static fromGasOptions(chainId, gasOptions, gasOptionType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .GasOptionType */ .Qd.NORMAL) {
        return new GasEditor(chainId, {
            gasPrice: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxFeePerGas ?? 0, 0),
            maxPriorityFeePerGas: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(gasOptions?.[gasOptionType]?.suggestedMaxPriorityFeePerGas ?? 0, 0)
        });
    }
}


/***/ }),

/***/ 95397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
}), 'Tune'));

/***/ })

}]);
//# sourceMappingURL=chunk.5185.js.map