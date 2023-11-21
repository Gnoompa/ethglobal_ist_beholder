(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5560],{

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

/***/ 35586:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugins/Savings/src/base.ts + 7 modules
var base = __webpack_require__(23999);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/chunk.js
var chunk = __webpack_require__(45357);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokens.ts
var useFungibleTokens = __webpack_require__(49616);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useTabs.tsx
var useTabs = __webpack_require__(16941);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/plugins/Trader/src/trader/useAllProviderTradeContext.ts + 34 modules
var useAllProviderTradeContext = __webpack_require__(6780);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/AaveProtocolDataProvider.json
const AaveProtocolDataProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"addressesProvider","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ADDRESSES_PROVIDER","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllATokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllReservesTokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveConfigurationData","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"liquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"liquidationBonus","type":"uint256"},{"internalType":"uint256","name":"reserveFactor","type":"uint256"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"},{"internalType":"bool","name":"borrowingEnabled","type":"bool"},{"internalType":"bool","name":"stableBorrowRateEnabled","type":"bool"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isFrozen","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"internalType":"uint256","name":"availableLiquidity","type":"uint256"},{"internalType":"uint256","name":"totalStableDebt","type":"uint256"},{"internalType":"uint256","name":"totalVariableDebt","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"averageStableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveTokensAddresses","outputs":[{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"getUserReserveData","outputs":[{"internalType":"uint256","name":"currentATokenBalance","type":"uint256"},{"internalType":"uint256","name":"currentStableDebt","type":"uint256"},{"internalType":"uint256","name":"currentVariableDebt","type":"uint256"},{"internalType":"uint256","name":"principalStableDebt","type":"uint256"},{"internalType":"uint256","name":"scaledVariableDebt","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint40","name":"stableRateLastUpdated","type":"uint40"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./packages/plugins/Savings/src/types.ts
var TabType;
(function(TabType) {
    TabType["Deposit"] = 'deposit';
    TabType["Withdraw"] = 'withdraw';
})(TabType || (TabType = {}));
var ProtocolType/**
     * combine a bare token and a staked token with being a pair
     */ ;
(function(ProtocolType) {
    ProtocolType[ProtocolType["Lido"] = 0] = "Lido";
    ProtocolType[ProtocolType["AAVE"] = 1] = "AAVE";
})(ProtocolType || (ProtocolType = {}));

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/plugins/Savings/src/constants.ts
var src_constants = __webpack_require__(35068);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/IconURL.tsx

const ProviderIconURLs = {
    [ProtocolType.Lido]: new URL(/* asset import */ __webpack_require__(46372), __webpack_require__.b).toString(),
    [ProtocolType.AAVE]: new URL(/* asset import */ __webpack_require__(69535), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/AaveLendingPool.json
var AaveLendingPool = __webpack_require__(37775);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/AaveLendingPoolAddressProvider.json
const AaveLendingPoolAddressProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"hasProxy","type":"bool"}],"name":"AddressSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ConfigurationAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"EmergencyAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolCollateralManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolConfiguratorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingRateOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newMarketId","type":"string"}],"name":"MarketIdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PriceOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProxyCreated","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolCollateralManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolConfigurator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingRateOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"implementationAddress","type":"address"}],"name":"setAddressAsProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"emergencyAdmin","type":"address"}],"name":"setEmergencyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"setLendingPoolCollateralManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"configurator","type":"address"}],"name":"setLendingPoolConfiguratorImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"setLendingPoolImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lendingRateOracle","type":"address"}],"name":"setLendingRateOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"name":"setMarketId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"setPoolAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"priceOracle","type":"address"}],"name":"setPriceOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ./packages/web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(95528);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/createContract.ts
var createContract = __webpack_require__(95739);
;// CONCATENATED MODULE: ./packages/plugins/Savings/src/protocols/AAVEProtocol.ts








class AAVEProtocol {
    pair;
    static DEFAULT_APR = '0.17';
    _balance;
    constructor(pair){
        this.pair = pair;
        this._balance = number/* ZERO */.xE;
    }
    get type() {
        return ProtocolType.AAVE;
    }
    get balance() {
        return this._balance;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async getApr(chainId, web3) {
        try {
            const subgraphUrl = (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_SUBGRAPHS');
            if (!subgraphUrl) {
                return '0.00';
            }
            const body = JSON.stringify({
                query: /* GraphQL */ `
                    query GET_APR($address: String, $pool: String) {
                        reserves(where: { underlyingAsset: $address, pool: $pool }) {
                            id
                            name
                            underlyingAsset
                            liquidityRate
                        }
                    }
                `,
                variables: {
                    address: this.bareToken.address,
                    pool: '0xb53c1a33016b2dc2ff3653530bff1848a515c8c5'
                }
            });
            const response = await (0,fetchJSON/* fetchJSON */.ZV)(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const liquidityRate = +response.data.reserves[0].liquidityRate;
            const RAY = (0,number/* pow10 */.wA)(27);
            // 10 to the power 27
            // APY and APR are returned here as decimals, multiply by 100 to get the percents
            return new bignumber/* BigNumber */.O(liquidityRate).times(100).div(RAY).toFixed(2);
        } catch (error) {
            console.error('AAVE: Apr Error:', error);
            return AAVEProtocol.DEFAULT_APR;
        }
    }
    async getBalance(chainId, web3, account) {
        try {
            const subgraphUrl = (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_SUBGRAPHS');
            if (!subgraphUrl) {
                return number/* ZERO */.xE;
            }
            const body = JSON.stringify({
                query: /* GraphQL */ `
                    query GET_BALANCE($address: String, $pool: String) {
                        reserves(where: { underlyingAsset: $address, pool: $pool }) {
                            id
                            aToken {
                                id
                            }
                        }
                    }
                `,
                variables: {
                    address: this.bareToken.address,
                    pool: '0xb53c1a33016b2dc2ff3653530bff1848a515c8c5'
                }
            });
            const response = await (0,fetchJSON/* fetchJSON */.ZV)(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const aTokenId = response.data.reserves[0].aToken.id;
            const contract = (0,createContract/* createContract */.O)(web3, aTokenId, ERC20);
            return new bignumber/* BigNumber */.O(await contract?.methods.balanceOf(account).call() ?? '0');
        } catch (error) {
            console.error('AAVE BALANCE ERROR:', error);
            return number/* ZERO */.xE;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
            const gasEstimate = await operation?.estimateGas({
                from: account
            });
            return new bignumber/* BigNumber */.O(gasEstimate || 0);
        } catch (error) {
            console.error('AAVE deposit estimate ERROR:', error);
            return number/* ZERO */.xE;
        }
    }
    async createDepositTokenOperation(account, chainId, web3, value) {
        const aaveLPoolAddress = (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS');
        const lPoolAddressProviderContract = (0,createContract/* createContract */.O)(web3, aaveLPoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        const contract = (0,createContract/* createContract */.O)(web3, poolAddress, AaveLendingPool);
        return contract?.methods.deposit(this.bareToken.address, new bignumber/* BigNumber */.O(value).toFixed(), account, '0');
    }
    async deposit(account, chainId, web3, value) {
        const gasEstimate = await this.depositEstimate(account, chainId, web3, value);
        const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
        if (!operation) {
            throw new Error("Can't create deposit operation");
        }
        return new Promise((resolve, reject)=>{
            operation.send({
                from: account,
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType */.iE.ERROR, reject).once(types/* TransactionEventType */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            });
        });
    }
    async withdrawEstimate(account, chainId, web3, value) {
        try {
            const lPoolAddressProviderContract = (0,createContract/* createContract */.O)(web3, (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS'), AaveLendingPoolAddressProvider_namespaceObject);
            const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
            const contract = (0,createContract/* createContract */.O)(web3, poolAddress, AaveLendingPool);
            const gasEstimate = await contract?.methods.withdraw(this.bareToken.address, new bignumber/* BigNumber */.O(value).toFixed(), account).estimateGas({
                from: account
            });
            return new bignumber/* BigNumber */.O(gasEstimate || 0);
        } catch (error) {
            return number/* ZERO */.xE;
        }
    }
    async withdraw(account, chainId, web3, value) {
        const lPoolAddressProviderContract = (0,createContract/* createContract */.O)(web3, (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS'), AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        const gasEstimate = await this.withdrawEstimate(account, chainId, web3, value);
        const contract = (0,createContract/* createContract */.O)(web3, poolAddress, AaveLendingPool);
        return new Promise((resolve, reject)=>contract?.methods.withdraw(this.bareToken.address, new bignumber/* BigNumber */.O(value).toFixed(), account).send({
                from: account,
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType */.iE.ERROR, reject).once(types/* TransactionEventType */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            }));
    }
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useWeb3.ts



function useWeb3(pluginID, options) {
    const { account, chainId, providerType } = (0,useContext/* useChainContext */.ql)();
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        account,
        chainId,
        providerType,
        ...options
    });
    const web3 = (0,react.useMemo)(()=>{
        return Web3.getWeb3();
    }, [
        Web3
    ]);
    return web3 || null;
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/hooks/index.ts





function useApr(protocol, enabled) {
    const isAAve = protocol instanceof AAVEProtocol;
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: types/* ChainId */.a_.Mainnet
    });
    const web3 = useWeb3(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'savings',
            'apr',
            chainId,
            isAAve ? protocol.bareToken.address : 'lido'
        ],
        enabled: enabled && !!web3,
        queryFn: ()=>protocol.getApr(chainId, web3)
    });
}
function useBalance(protocol, enabled) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const web3 = useWeb3(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'savings',
            'balance',
            chainId,
            protocol.bareToken.address,
            account
        ],
        enabled: enabled && !!web3,
        queryFn: ()=>protocol.getBalance(chainId, web3, account)
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/locales/i18n_generated.ts
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
function useSavingsTrans() /**
      * `Savings`
      */ /**
      * `Asset`
      */ /**
      * `APR`
      */ /**
      * `Wallet`
      */ /**
      * `Operation`
      */ /**
      * `Amount`
      */ /**
      * `Deposit`
      */ /**
      * `Swap {{token}}`
      */ /**
      * `Withdraw {{token}}`
      */ /**
      * `Withdraw`
      */ /**
      * `Processing Deposit`
      */ /**
      * `Processing Withdrawal`
      */ /**
      * `No deposit protocols found.`
      */ /**
      * `Loading`
      */ /**
      * `Enter an amount`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Input amount is below the minimum amount`
      */ /**
      * `realMaskNetwork`
      */ /**
      * `masknetwork`
      */ /**
      * `Done`
      */ /**
      * `Failed`
      */ /**
      * `Hi friends, I just deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.`
      */ /**
      * `Hi friends, I just withdrew my deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.savings");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/SavingsTable/SavingsRow.tsx













const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        tableRow: {
            display: 'flex',
            background: theme.palette.maskColor.bg,
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1),
            '&:last-child': {
                marginBottom: 0
            }
        },
        tableCell: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            fontSize: '14px'
        },
        logoWrap: {
            position: 'relative',
            margin: '0 20px 0 0'
        },
        logo: {
            width: '32px',
            height: '32px'
        },
        logoMini: {
            height: '16px',
            position: 'absolute',
            bottom: 0,
            right: '-5px'
        },
        protocolLabel: {}
    }));
const SavingsRow = /*#__PURE__*/ (0,react.memo)(function SavingsRow({ protocol, isDeposit, onWithdraw, onDeposit }) {
    const t = useSavingsTrans();
    const { classes } = useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    const { data: apr = '0.00', isFetching: isFetchingApr } = useApr(protocol, isDeposit && seen);
    const { data: balance = number/* ZERO */.xE, isSuccess } = useBalance(protocol, !isDeposit || seen);
    if (!isDeposit && isSuccess && balance.isZero()) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        spacing: 0,
        className: classes.tableRow,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 4,
                className: classes.tableCell,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.logoWrap,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                name: protocol.bareToken.name,
                                address: protocol.bareToken.address,
                                className: classes.logo,
                                chainId: chainId
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: ProviderIconURLs[protocol.type],
                                className: classes.logoMini
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            className: classes.protocolLabel,
                            children: protocol.bareToken.symbol
                        })
                    })
                ]
            }),
            isDeposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 2,
                className: classes.tableCell,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    children: isFetchingApr && apr === '0.00' ? '--' : `${apr}%`
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: isDeposit ? 3 : 5,
                className: classes.tableCell,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenBalance, {
                    isDeposit: isDeposit,
                    protocol: protocol,
                    protocolBalance: balance
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                className: classes.tableCell,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    color: "primary",
                    disabled: !isDeposit ? (0,number/* isZero */.Fr)(balance) : false,
                    onClick: ()=>{
                        if (!isDeposit && protocol.type === ProtocolType.Lido) {
                            onWithdraw?.(protocol);
                            return;
                        }
                        onDeposit?.(protocol);
                    },
                    children: isDeposit ? t.plugin_savings_deposit() : t.plugin_savings_withdraw()
                })
            })
        ]
    });
});
function FungibleTokenBalance({ protocol, isDeposit, protocolBalance }) {
    const { data: tokenBalance = '0' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, isDeposit ? protocol.bareToken.address : '', {
        chainId: protocol.bareToken.chainId
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
            value: isDeposit ? tokenBalance : protocolBalance,
            decimals: protocol.bareToken.decimals,
            significant: 6,
            minimumBalance: (0,number/* rightShift */.pu)(10, protocol.bareToken.decimals - 6),
            formatter: formatBalance/* formatBalance */.a
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/SavingsTable/index.tsx











const SavingsTable_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        containerWrap: {
            fontFamily: theme.typography.fontFamily
        },
        tableContainer: {},
        tableHeader: {
            display: 'flex',
            background: theme.palette.maskColor.bg,
            borderRadius: theme.spacing(1),
            margin: '0 0 15px 0'
        },
        tableCell: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            fontSize: '14px'
        },
        placeholder: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            width: '100%'
        },
        loading: {
            color: theme.palette.text.primary,
            lineHeight: '18px',
            marginTop: 12
        },
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
        },
        empty: {
            color: theme.palette.secondaryDivider
        }
    }));
function SavingsTable({ tab, protocols, setSelectedProtocol, loadingProtocols }) {
    const t = useSavingsTrans();
    const { classes } = SavingsTable_useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const handleWithdraw = (0,react.useCallback)((protocol)=>{
        const [ETH, sETH] = src_constants/* LDO_PAIRS */.k[0];
        CrossIsolationEvents/* CrossIsolationMessages */.W.events.swapDialogEvent.sendToLocal({
            open: true,
            traderProps: {
                defaultInputCoin: sETH,
                defaultOutputCoin: ETH,
                chainId: types/* ChainId */.a_.Mainnet
            }
        });
    }, []);
    const isDeposit = tab === TabType.Deposit;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.containerWrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 0,
                className: classes.tableHeader,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t.plugin_savings_asset()
                        })
                    }),
                    isDeposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 2,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "body1",
                            children: [
                                " ",
                                t.plugin_savings_apr()
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: isDeposit ? 3 : 5,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t.plugin_savings_wallet()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t.plugin_savings_operation()
                        })
                    })
                ]
            }),
            loadingProtocols ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.placeholder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleLoading, {
                        size: 36,
                        className: classes.animated
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.loading,
                        children: t.popups_loading()
                    })
                ]
            }) : protocols.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tableContainer,
                children: protocols.map((protocol, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsRow, {
                        protocol: protocol,
                        isDeposit: isDeposit,
                        onWithdraw: handleWithdraw,
                        onDeposit: setSelectedProtocol
                    }, index))
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.placeholder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                        size: 36,
                        className: classes.empty
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: "14px",
                        mt: 1.5,
                        color: theme.palette.maskColor.second,
                        children: t.plugin_savings_no_protocol()
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(65295);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useOpenShareTxDialog.tsx
var useOpenShareTxDialog = __webpack_require__(1496);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ActionButton/index.tsx
var ActionButton = __webpack_require__(58894);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx + 1 modules
var FungibleTokenInput = __webpack_require__(93558);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedCurrency.tsx
var FormattedCurrency = __webpack_require__(34134);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(16281);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/SavingsForm.tsx


















const SavingsForm_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        containerWrap: {
            padding: 0,
            fontFamily: theme.typography.fontFamily
        },
        inputWrap: {
            position: 'relative',
            width: '100%',
            margin: theme.spacing(1.25, 0)
        },
        tokenValueUSD: {
            padding: '0 0 10px 0'
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 0 15px 0'
        },
        infoRowLeft: {
            display: 'flex',
            alignItems: 'center'
        },
        infoRowRight: {
            fontWeight: 'bold'
        },
        rowImage: {
            width: '24px',
            height: '24px',
            margin: '0 5px 0 0'
        },
        button: {
            width: '100%'
        },
        connectWallet: {
            marginTop: 0
        },
        gasFee: {
            padding: '0 0 0 5px',
            fontSize: 11,
            opacity: 0.5
        }
    }));
function SavingsFormDialog({ chainId, protocol, tab, onClose }) {
    const t = useSavingsTrans();
    const { classes } = SavingsForm_useStyles();
    const isDeposit = tab === TabType.Deposit;
    const { account, chainId: currentChainId } = (0,useContext/* useChainContext */.ql)();
    const [inputAmount, setInputAmount] = (0,react.useState)('');
    const [estimatedGas, setEstimatedGas] = (0,react.useState)(number/* ZERO */.xE);
    const { data: nativeToken } = (0,useNativeToken/* useNativeToken */.u)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { data: nativeTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, nativeToken?.address, {
        chainId
    });
    // #region form variables
    const { data: inputTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, protocol.bareToken.address, {
        chainId
    });
    const tokenAmount = (0,react.useMemo)(()=>new bignumber/* BigNumber */.O((0,number/* rightShift */.pu)(inputAmount || '0', protocol.bareToken.decimals)), [
        inputAmount,
        protocol.bareToken.decimals
    ]);
    const { data: apr = '0.00' } = useApr(protocol, true);
    const { data: balance = number/* ZERO */.xE } = useBalance(protocol, true);
    const balanceAsBN = (0,react.useMemo)(()=>isDeposit ? new bignumber/* BigNumber */.O(inputTokenBalance || '0') : balance, [
        isDeposit,
        balance,
        inputTokenBalance
    ]);
    const balanceGasMinus = entry/* Others */.ej.isNativeTokenAddress(protocol.bareToken.address) ? balanceAsBN.minus(estimatedGas) : balanceAsBN;
    const needsSwap = protocol.type === ProtocolType.Lido && !isDeposit;
    const { loading } = (0,useAsync/* default */.Z)(async ()=>{
        if ((0,number/* isLessThanOrEqualTo */.PW)(tokenAmount, 0)) return;
        try {
            setEstimatedGas(isDeposit ? await protocol.depositEstimate(account, chainId, entry/* Web3 */.Bv.getWeb3({
                chainId
            }), tokenAmount) : await protocol.withdrawEstimate(account, chainId, entry/* Web3 */.Bv.getWeb3({
                chainId
            }), tokenAmount));
        } catch  {
            // do nothing
            console.error('Failed to estimate gas');
        }
    }, [
        chainId,
        isDeposit,
        protocol,
        tokenAmount
    ]);
    // #endregion
    // #region form validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (needsSwap) return '';
        if (tokenAmount.isZero() || !inputAmount) return t.plugin_trader_error_amount_absence();
        if ((0,number/* isLessThan */.FI)(tokenAmount, 0)) return t.plugin_trade_error_input_amount_less_minimum_amount();
        if ((0,number/* isLessThan */.FI)(balanceGasMinus, tokenAmount)) {
            return t.plugin_trader_error_insufficient_balance({
                symbol: isDeposit ? protocol.bareToken.symbol : protocol.stakeToken.symbol
            });
        }
        return '';
    }, [
        inputAmount,
        tokenAmount,
        nativeTokenBalance,
        balanceGasMinus,
        isDeposit
    ]);
    const { data: tokenPrice = 0 } = (0,useFungibleTokenPrice/* useFungibleTokenPrice */.O)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, !(0,address/* isNativeTokenAddress */.qw)(protocol.bareToken.address) ? protocol.bareToken.address : nativeToken?.address, {
        chainId
    });
    const tokenValueUSD = (0,react.useMemo)(()=>inputAmount ? new bignumber/* BigNumber */.O(inputAmount).times(tokenPrice).toFixed(2) : '0', [
        inputAmount,
        tokenPrice
    ]);
    // #endregion
    const { value: approvalData } = (0,useAsync/* default */.Z)(async ()=>{
        const aavePoolAddress = (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS');
        if (!aavePoolAddress) return;
        const lPoolAddressProviderContract = entry/* Contract */.CH.getWeb3Contract(aavePoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const token = protocol.bareToken;
        return {
            approveToken: token.schema === types/* SchemaType */.XQ.ERC20 ? token : undefined,
            approveAmount: new bignumber/* BigNumber */.O(inputAmount).shiftedBy(token.decimals),
            approveAddress: await lPoolAddressProviderContract?.methods.getLendingPool().call()
        };
    }, [
        chainId,
        protocol.bareToken,
        inputAmount
    ]);
    const openShareTxDialog = (0,useOpenShareTxDialog/* useOpenShareTxDialog */.z)();
    const promote = {
        amount: inputAmount,
        symbol: protocol.bareToken.symbol,
        chain: entry/* ChainResolver */.iv.chainName(chainId) ?? '',
        account: Sniffings/* Sniffings */.Y.is_twitter_page ? t.twitter_account() : t.facebook_account()
    };
    const shareText = isDeposit ? t.promote_savings(promote) : t.promote_withdraw(promote);
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    const [, executor] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const methodName = isDeposit ? 'deposit' : 'withdraw';
        if (chainId !== currentChainId) await entry/* Web3 */.Bv.switchChain?.(chainId);
        const hash = await protocol[methodName](account, chainId, entry/* Web3 */.Bv.getWeb3({
            chainId
        }), tokenAmount);
        if (typeof hash !== 'string') {
            throw new Error('Failed to deposit token.');
        } else {
            queryClient.invalidateQueries([
                'savings',
                'balance',
                chainId,
                protocol.bareToken.address,
                account
            ]);
        }
        await openShareTxDialog({
            hash,
            onShare () {
                (0,context/* share */.BN)?.(shareText);
            }
        });
    }, [
        isDeposit,
        protocol,
        account,
        chainId,
        tokenAmount,
        openShareTxDialog,
        currentChainId
    ]);
    const buttonDom = (0,react.useMemo)(()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
            expectedChainId: chainId,
            ActionButtonProps: {
                color: 'primary',
                classes: {
                    root: classes.button
                }
            },
            classes: {
                connectWallet: classes.connectWallet,
                button: classes.button
            },
            children: isDeposit ? inputTokenBalance && !(0,number/* isZero */.Fr)(inputTokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                amount: approvalData?.approveAmount.toFixed() ?? '',
                token: approvalData?.approveToken,
                spender: approvalData?.approveAddress,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Z, {
                    className: classes.button,
                    init: validationMessage || t.plugin_savings_deposit() + ' ' + protocol.bareToken.symbol,
                    waiting: t.plugin_savings_process_deposit(),
                    failed: t.failed(),
                    failedOnClick: "use executor",
                    complete: t.done(),
                    disabled: validationMessage !== '' && !needsSwap,
                    noUpdateEffect: true,
                    executor: executor
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Z, {
                className: classes.button,
                init: validationMessage || t.plugin_savings_deposit() + ' ' + protocol.bareToken.symbol,
                waiting: t.plugin_savings_process_deposit(),
                failed: t.failed(),
                failedOnClick: "use executor",
                complete: t.done(),
                disabled: validationMessage !== '' && !needsSwap,
                noUpdateEffect: true,
                executor: executor
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Z, {
                init: needsSwap ? t.plugin_savings_swap_token({
                    token: protocol.bareToken.symbol
                }) : validationMessage || t.plugin_savings_withdraw_token({
                    token: protocol.stakeToken.symbol
                }),
                waiting: t.plugin_savings_process_withdraw(),
                failed: t.failed(),
                failedOnClick: "use executor",
                className: classes.button,
                complete: t.done(),
                disabled: validationMessage !== '',
                noUpdateEffect: true,
                executor: executor
            })
        });
    }, [
        executor,
        validationMessage,
        needsSwap,
        protocol,
        isDeposit,
        approvalData,
        chainId,
        inputTokenBalance
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: isDeposit ? t.plugin_savings_deposit() : t.plugin_savings_withdraw(),
        open: true,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.containerWrap,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    style: {
                        padding: '0 15px'
                    },
                    children: [
                        needsSwap ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.inputWrap,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInput/* FungibleTokenInput */.C, {
                                        amount: inputAmount,
                                        maxAmount: balanceGasMinus.toString(),
                                        balance: balanceAsBN.toString(),
                                        label: t.plugin_savings_amount(),
                                        token: protocol.bareToken,
                                        onAmountChange: setInputAmount
                                    })
                                }),
                                loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    textAlign: "right",
                                    className: classes.tokenValueUSD,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                                        width: 16,
                                        height: 16
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    textAlign: "right",
                                    className: classes.tokenValueUSD,
                                    children: [
                                        "≈ ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedCurrency/* FormattedCurrency */.b, {
                                            value: tokenValueUSD,
                                            formatter: formatCurrency/* formatCurrency */.x
                                        }),
                                        (0,number/* isPositive */.xP)(estimatedGas) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: classes.gasFee,
                                            children: [
                                                "+ ",
                                                (0,formatBalance/* formatBalance */.a)(estimatedGas, 18),
                                                " ETH"
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.infoRow,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    component: "div",
                                    className: classes.infoRowLeft,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                            className: classes.rowImage,
                                            address: protocol.bareToken.address,
                                            logoURL: protocol.bareToken.logoURL,
                                            chainId: protocol.bareToken.chainId,
                                            name: protocol.bareToken.name
                                        }),
                                        protocol.bareToken.name,
                                        " ",
                                        t.plugin_savings_apr(),
                                        "%"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    className: classes.infoRowRight,
                                    children: [
                                        apr,
                                        "%"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                style: {
                    padding: 0,
                    position: 'sticky',
                    bottom: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                    children: buttonDom
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/primitives.ts
var primitives = __webpack_require__(47469);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/Lido.json
var Lido = __webpack_require__(10390);
;// CONCATENATED MODULE: ./packages/plugins/Savings/src/protocols/LDOProtocol.ts






class LidoProtocol {
    pair;
    type;
    constructor(pair){
        this.pair = pair;
        this.type = ProtocolType.Lido;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async getApr(chainId, web3) {
        try {
            return entry/* Lido */.k4.getStEthAPR();
        } catch  {
            // the default APR is 5.30%
            return '5.30';
        }
    }
    async getBalance(chainId, web3, account) {
        try {
            const contract = (0,createContract/* createContract */.O)(web3, (0,constants_constants/* getLidoConstant */.AM)(chainId, 'LIDO_stETH_ADDRESS'), Lido);
            return new bignumber/* BigNumber */.O(await contract?.methods.balanceOf(account).call() ?? 0);
        } catch  {}
        return number/* ZERO */.xE;
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const contract = (0,createContract/* createContract */.O)(web3, (0,constants_constants/* getLidoConstant */.AM)(chainId, 'LIDO_stETH_ADDRESS'), Lido);
            const gasEstimate = await contract?.methods.submit((0,constants_constants/* getLidoConstant */.AM)(chainId, 'LIDO_REFERRAL_ADDRESS') || primitives/* ZERO_ADDRESS */.r).estimateGas({
                from: account,
                // it's a BigNumber so it's ok
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                value: value.toString()
            });
            return new bignumber/* BigNumber */.O(gasEstimate || 0);
        } catch (error) {
            console.error('LDO `depositEstimate()` Error', error);
            return new bignumber/* BigNumber */.O(0);
        }
    }
    async deposit(account, chainId, web3, value) {
        const gasEstimate = await this.depositEstimate(account, chainId, web3, value);
        return new Promise((resolve, reject)=>{
            const contract = (0,createContract/* createContract */.O)(web3, (0,constants_constants/* getLidoConstant */.AM)(chainId, 'LIDO_stETH_ADDRESS'), Lido);
            return contract?.methods.submit((0,constants_constants/* getLidoConstant */.AM)(chainId, 'LIDO_REFERRAL_ADDRESS') || primitives/* ZERO_ADDRESS */.r).send({
                from: account,
                // it's a BigNumber so it's ok
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                value: value.toString(),
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType */.iE.ERROR, reject).once(types/* TransactionEventType */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            });
        });
    }
    async withdrawEstimate(account, chainId, web3, value) {
        return number/* ZERO */.xE;
    }
    async withdraw(account, chainId, web3, value) {
        /*
         * @TODO: Implement withdraw when stETH Beacon Chain allows for withdraws
         *
         * Review: https://github.com/lidofinance/lido-dao when ETH 2.0 is implemented.
         *
         * For now, just redirect to swap plugin
         *
         * await contract.methods
         *     .withdraw(inputTokenTradeAmount, '0x0000000000000000000000000000000000000000')
         *     .send({
         *         from: account,
         *         gasLimit: 2100000,
         *     })
         */ return '0x';
    }
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/SavingsDialog.tsx





















const SavingsDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        abstractTabWrapper: {
            width: '100%',
            paddingBottom: theme.spacing(2),
            position: 'sticky',
            top: 0,
            zIndex: 2
        },
        tableTabWrapper: {
            padding: theme.spacing(1, 2)
        },
        content: {
            padding: 0,
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        dialogRoot: {
            height: 620,
            minWidth: 400,
            width: 600,
            boxShadow: 'none',
            backgroundImage: 'none',
            maxWidth: 'none'
        }
    }));
const chains = [
    types/* ChainId */.a_.Mainnet
];
function SavingsDialog({ open, onClose }) {
    const t = useSavingsTrans();
    const { classes } = SavingsDialog_useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: types/* ChainId */.a_.Mainnet
    });
    const [selectedProtocol, setSelectedProtocol] = (0,react.useState)(null);
    const { data: aaveTokens, isLoading: loadingAAve } = (0,useQuery/* useQuery */.a)({
        enabled: open && chainId === types/* ChainId */.a_.Mainnet,
        queryKey: [
            'savings',
            'aave',
            'tokens',
            chainId
        ],
        queryFn: async ()=>{
            const address = (0,constants_constants/* getAaveConstant */.rd)(chainId, 'AAVE_PROTOCOL_DATA_PROVIDER_CONTRACT_ADDRESS');
            if (!address) return constants/* EMPTY_LIST */.rP;
            const protocolDataContract = entry/* Contract */.CH.getWeb3Contract(address, AaveProtocolDataProvider_namespaceObject, {
                chainId
            });
            const [tokens, aTokens] = await Promise.all([
                protocolDataContract?.methods.getAllReservesTokens().call(),
                protocolDataContract?.methods.getAllATokens().call()
            ]);
            if (!tokens) return constants/* EMPTY_LIST */.rP;
            return tokens.map((token)=>{
                return [
                    token[1],
                    aTokens?.find((f)=>f[0].toUpperCase() === `a${token[0]}`.toUpperCase())?.[1]
                ];
            });
        },
        staleTime: 300_000
    });
    const { value: detailedAaveTokens = constants/* EMPTY_LIST */.rP, loading: loadingAAveDetails } = (0,useFungibleTokens/* useFungibleTokens */.n)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, (0,compact/* default */.Z)((0,flatten/* default */.Z)(aaveTokens ?? [])), {
        chainId
    });
    const loadingProtocols = loadingAAve || loadingAAveDetails || !detailedAaveTokens.length;
    const protocols = (0,react.useMemo)(()=>[
            ...src_constants/* LDO_PAIRS */.k.filter((x)=>x[0].chainId === chainId).map((pair)=>new LidoProtocol(pair)),
            ...(0,chunk/* default */.Z)(detailedAaveTokens, 2).map((pair)=>new AAVEProtocol(pair))
        ], [
        chainId,
        detailedAaveTokens
    ]);
    const [currentTab, onChange, tabs] = (0,useTabs/* useTabs */.Y)(TabType.Deposit, TabType.Withdraw);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
        value: {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            chainId: types/* ChainId */.a_.Mainnet
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(useAllProviderTradeContext/* AllProviderTradeContext */.TX.Provider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* ChainContextProvider */.on, {
                    value: {
                        chainId
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
                            open: open,
                            classes: {
                                paper: classes.dialogRoot
                            },
                            title: t.plugin_savings(),
                            onClose: ()=>{
                                onClose?.();
                                setSelectedProtocol(null);
                            },
                            titleTabs: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                                variant: "base",
                                onChange: onChange,
                                "aria-label": "Savings",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t.plugin_savings_deposit(),
                                        value: tabs.deposit
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t.plugin_savings_withdraw(),
                                        value: tabs.withdraw
                                    })
                                ]
                            }),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                                    className: classes.content,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.abstractTabWrapper,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                                                requireChains: true,
                                                chains: chains.filter(Boolean),
                                                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.tableTabWrapper,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                                    style: {
                                                        padding: '8px 0 0 0'
                                                    },
                                                    value: tabs.deposit,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                        loadingProtocols: loadingProtocols,
                                                        tab: TabType.Deposit,
                                                        protocols: protocols,
                                                        setSelectedProtocol: setSelectedProtocol
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                                    style: {
                                                        padding: '8px 0 0 0'
                                                    },
                                                    value: tabs.withdraw,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                        loadingProtocols: loadingProtocols,
                                                        tab: TabType.Withdraw,
                                                        protocols: protocols,
                                                        setSelectedProtocol: setSelectedProtocol
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                                    style: {
                                        padding: 0,
                                        position: 'sticky',
                                        bottom: 0
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {})
                                })
                            ]
                        })
                    })
                }),
                selectedProtocol ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RevokeChainContextProvider */.fw, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsFormDialog, {
                        tab: currentTab,
                        chainId: chainId,
                        protocol: selectedProtocol,
                        onClose: ()=>setSelectedProtocol(null)
                    })
                }) : null
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Savings/src/SiteAdaptor/index.tsx








const site = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Savings, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                i18nKey: "plugin_savings",
                ns: PluginID/* PluginID */.P.Savings
            });
            const iconFilterColor = 'rgba(255, 83, 146, 0.3)';
            return {
                ApplicationEntryID: base/* base */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true);
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                                ...EntryComponentProps,
                                title: name,
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler) : clickHandler
                            }),
                            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsDialog, {
                                open: true,
                                onClose: ()=>setOpen(false)
                            }) : null
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 10,
                icon,
                name,
                iconFilterColor
            };
        })()
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 83220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useEverSeen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58778);


function useEverSeen() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [seen, setSeen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const nullRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const entry = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(seen ? nullRef : ref, {});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (entry?.isIntersecting) setSeen(true);
    }, [
        entry?.isIntersecting
    ]);
    return [
        seen,
        ref
    ];
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

/***/ 58894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ActionButtonPromise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27027);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90097);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23615);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93573);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99948);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62167);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13700);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82903);







const circle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    color: "inherit",
    size: 18
});
function ActionButtonPromise(props) {
    const { classes, cx } = useStyles();
    const { executor, complete, failed, waiting, init, completeOnClick, waitingOnClick, failedOnClick, onComplete, noUpdateEffect, completeIcon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), failIcon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), waitingIcon = circle, failedButtonStyle, ...b } = props;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('init');
    const completeClass = cx(classes.success, b.className);
    const failClass = cx(classes.failed, b.className);
    const run = ()=>{
        setState('wait');
        executor().then((status)=>{
            setState(status ?? 'complete');
            onComplete?.();
        }, (error)=>{
            if (error.message.includes('Switch Chain Error')) setState('init');
            else setState('fail');
        });
    };
    const cancel = ()=>{
        const p = waitingOnClick?.();
        p && setState(p);
    };
    const completeClick = completeOnClick === 'use executor' ? run : completeOnClick;
    const failClick = failedOnClick === 'use executor' ? run : failedOnClick;
    (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(()=>{
        if (!noUpdateEffect) {
            setState((prev)=>prev === 'init' ? prev : 'init');
        }
    }, [
        executor,
        noUpdateEffect
    ]);
    if (state === 'wait') return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .ActionButton */ .K, {
        ...b,
        loading: true,
        disabled: !waitingOnClick,
        children: waiting,
        onClick: cancel
    });
    if (state === 'complete') return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .ActionButton */ .K, {
        ...b,
        disabled: !completeClick,
        startIcon: completeIcon,
        children: complete,
        className: completeClass,
        onClick: completeClick
    });
    if (state === 'fail') return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .ActionButton */ .K, {
        ...b,
        disabled: !failClick,
        startIcon: failIcon,
        children: failed,
        className: failedButtonStyle || failClass,
        onClick: failClick
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .ActionButton */ .K, {
        ...b,
        children: init,
        onClick: run
    });
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .makeStyles */ .Z)()({
    success: {
        color: '#fff',
        backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z[500],
        '&:hover': {
            backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z[700]
        }
    },
    failed: {
        backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[500],
        color: '#fff',
        '&:hover': {
            backgroundColor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z[700]
        }
    }
});


/***/ }),

/***/ 98662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34278);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        copy: {
            '&:hover': {
                color: theme.palette.maskColor.main
            }
        }
    }));
/** defaults to 'Copied' */ /** stop event propagation and prevent default */ const CopyButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CopyButton({ text, title, successText, size, color, scoped = true, className, ...props }) {
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props
    });
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (ev)=>{
        if (scoped) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        copyToClipboard(text);
        setCopied(true);
        setActive(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(setActive, 1500, false);
    }, [
        text,
        scoped
    ]);
    const tooltipTitle = copied ? successText ?? t.copied() : title ?? t.copy();
    const iconProps = {
        size,
        color
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootTooltip */ .p, {
        open: active,
        title: tooltipTitle,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            underline: "none",
            component: "button",
            onClick: handleCopy,
            color: "inherit",
            ...props,
            fontSize: 0,
            className: cx(classes.root, className),
            children: active ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Check, {
                ...iconProps,
                color: theme.palette.maskColor.success
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__.Copy, {
                ...iconProps,
                className: classes.copy
            })
        })
    });
});


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

/***/ 59312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17735);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82903);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3350);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98170);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81128);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16941);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22596);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65587);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60475);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7387);
/* harmony import */ var _WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98748);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24770);










const NetworkTab = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkTab({ chains, pluginID, onChange, requireChains, ...rest }) {
    const { pluginID: networkPluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkContext */ .gK)(pluginID);
    const { chainId, setChainId, setNetworkType } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const networks = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkDescriptors */ .p)(networkPluginID);
    const wallet = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .O)();
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Others */ .v)();
    const { value: smartPaySupportChainId } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .SmartPayBundler */ .Pp.getSupportedChainId(), []);
    const supportedChains = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!wallet?.owner || requireChains) return chains;
        return chains.filter((x)=>x === smartPaySupportChainId);
    }, [
        smartPaySupportChainId,
        wallet,
        chains,
        requireChains
    ]);
    const usedNetworks = networks.filter((x)=>supportedChains.find((c)=>c === x.chainId));
    const networkIds = usedNetworks.map((x)=>x.chainId.toString());
    const isValidChainId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chains.includes(chainId), [
        chains,
        chainId
    ]);
    const [tab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_8__/* .useTabs */ .Y)(!isValidChainId ? networkIds[0] : chainId?.toString() ?? networkIds[0], ...networkIds);
    (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(()=>{
        setTab((prev)=>{
            if (isValidChainId && chainId && prev !== chainId?.toString()) return chainId.toString();
            return prev;
        });
        if (!isValidChainId) setChainId(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .ChainId */ .a_.Mainnet);
    }, [
        chainId,
        isValidChainId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP, {
        value: tab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .MaskTabList */ .C, {
            ...rest,
            variant: "flexible",
            onChange: (_, v)=>{
                const chainId = Number.parseInt(v, 10);
                const networkType = Others.chainResolver.networkType(chainId);
                setChainId?.(chainId);
                if (networkType) setNetworkType?.(networkType);
                onChange?.(chainId);
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletIcon_index_js__WEBPACK_IMPORTED_MODULE_15__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: tab === x.chainId.toString() ? 700 : 400,
                                children: x.shortName ?? x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
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

/***/ 34134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ FormattedCurrency)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18121);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76010);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);




function FormattedCurrency({ value = 0, sign, options, // it's a BigNumber so it's ok
// eslint-disable-next-line @typescript-eslint/no-base-to-string
formatter = (value, sign)=>`${sign} ${value}`.trim() }) {
    const currentSign = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useCurrencyType */ .P)();
    const { data: currentFiatCurrencyRate } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useFiatCurrencyRate */ .P)();
    const rate = options?.fiatCurrencyRate ?? (sign === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD ? 1 : currentFiatCurrencyRate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: formatter(value, rate === 1 ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType */ .V2.USD : sign ?? currentSign, {
            ...options,
            fiatCurrencyRate: rate
        })
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

/***/ 22596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ MaskTabList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonGroup/ButtonGroup.js
var ButtonGroup = __webpack_require__(8952);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/BaseTab.tsx



const BaseTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 36,
        lineHeight: '18px',
        boxShadow: activated ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(1.5)} ${theme.spacing(1.5)} 0px 0px !important`,
        color: activated ? theme.palette.maskColor.main : theme.palette.maskColor.secondaryDark,
        fontSize: 16,
        fontWeight: 'bold',
        '&:hover': {
            boxShadow: activated ? '0 0 20px rgba(0, 0, 0, 0.05)' : 'none',
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        },
        // If there is only single one tab.
        '&:first-of-type:last-of-type': {
            maxWidth: '25%'
        }
    }));
const BaseTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BaseTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: (e)=>handleClick(e),
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/FlexibleTab.tsx



const FlexibleTabTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flexShrink: 0,
        flexGrow: 0,
        padding: theme.spacing(1.25, 1.5),
        height: 38,
        lineHeight: '16px',
        minWidth: theme.spacing(3),
        background: activated ? theme.palette.maskColor.input : 'transparent',
        borderRadius: `${theme.spacing(1)} !important`,
        color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold !important',
        '&:hover': {
            background: activated ? theme.palette.maskColor.input : 'transparent',
            color: activated ? theme.palette.maskColor.highlight ?? '#1C68F3' : theme.palette.text.primary,
            boxShadow: 'none'
        }
    }));
const FlexibleTab = /*#__PURE__*/ (0,react.memo)((props)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const { isVisitable, ...rest } = props;
    const ref = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!activated) return;
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!visitable) onChange?.({}, String(value), visitable);
    }, []);
    const handleClick = (event)=>{
        const visitable = isVisitable(ref.current?.getBoundingClientRect().top ?? 0, ref.current?.getBoundingClientRect().right ?? 0);
        if (!activated && onChange) onChange(event, String(value), visitable);
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleTabTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...rest,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackIosNew.js


/* harmony default export */ const ArrowBackIosNew = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
}), 'ArrowBackIosNew'));
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useWindowSize.js + 1 modules
var useWindowSize = __webpack_require__(58758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useClickAway.js
var useClickAway = __webpack_require__(47824);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/RoundTab.tsx



const RoundTabWrap = (0,styled/* default */.ZP)(Button/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'activated'
})(({ theme, activated })=>({
        flex: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        height: 34,
        lineHeight: '16px',
        background: activated ? theme.palette.maskColor.bottom : 'transparent',
        borderRadius: `${theme.spacing(2)} !important`,
        color: activated ? theme.palette.text.primary : theme.palette.text.secondary,
        fontSize: 14,
        fontWeight: 'bold',
        boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
        '&:hover': {
            boxShadow: activated ? ' 0px 2px 5px 1px rgba(0, 0, 0, 0.05);' : 'none',
            color: theme.palette.text.primary,
            background: activated ? theme.palette.maskColor.bottom : 'transparent'
        }
    }));
const RoundTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange, onClick, value } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoundTabWrap, {
        activated: activated,
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
});

;// CONCATENATED MODULE: ./packages/theme/src/Components/Tabs/index.tsx









const defaultTabSize = 38;
const ArrowButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme })=>({
        position: 'absolute',
        top: 0,
        right: 0,
        padding: theme.spacing(1.5),
        height: defaultTabSize,
        width: defaultTabSize,
        minWidth: `${defaultTabSize}px !important`,
        background: theme.palette.background.input,
        '&:hover': {
            background: theme.palette.background.input
        }
    }));
const ArrowBackIosNewIconWrap = (0,styled/* default */.ZP)(ArrowBackIosNew)(({ theme })=>({
        color: theme.palette.text.primary,
        width: 16,
        borderRadius: '0 8px 8px 0'
    }));
const FlexibleButtonGroupPanel = (0,styled/* default */.ZP)(Box/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'isOpen'
})(({ theme, isOpen = false })=>({
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        padding: theme.spacing(1.5),
        maxWidth: 'calc(100% - 24px)',
        width: 'calc(100% - 24px)',
        boxShadow: isOpen ? `0px 0px 20px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}` : 'none',
        backdropFilter: 'blur(20px)',
        background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
        boxSizing: 'content-box'
    }));
const ButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant'
})(({ theme, maskVariant = 'base' })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflowY: 'clip',
        flex: 1,
        gap: theme.spacing(1),
        ...maskVariant === 'round' ? {
            padding: theme.spacing(0.5),
            background: theme.palette.maskColor.input,
            borderRadius: 18
        } : maskVariant === 'flexible' ? {
            background: 'transparent',
            borderRadius: 0
        } : {
            marginTop: theme.spacing(-1),
            paddingTop: theme.spacing(1),
            background: 'transparent',
            borderRadius: 0
        }
    }));
const FlexButtonGroupWrap = (0,styled/* default */.ZP)(ButtonGroup/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== 'maskVariant' && prop !== 'isOpen' && prop !== 'isOverflow'
})(({ theme, maskVariant = 'base', isOpen = false, isOverflow = false })=>({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexWrap: isOpen ? 'wrap' : 'nowrap',
        overflow: 'hidden',
        flex: 1,
        maxWidth: '100%',
        paddingRight: isOpen ? defaultTabSize : 0,
        gap: maskVariant !== 'base' ? theme.spacing(1) : 0,
        borderRadius: 0,
        background: !isOpen && isOverflow ? theme.palette.mode === 'light' ? `linear-gradient(270deg, rgba(255,255,255,1) ${defaultTabSize}px, rgba(223, 229, 244, 0.8) ${defaultTabSize}px, rgba(244, 247, 254, 0) 72px)` : `linear-gradient(270deg, transparent ${defaultTabSize}px, rgba(49, 49, 49, 0.8) ${defaultTabSize}px, rgba(23, 23, 23, 0) 72px)` : 'transparent'
    }));
const tabMapping = {
    flexible: FlexibleTab,
    round: RoundTab,
    base: BaseTab
};
/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTabs('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <MaskTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </MaskTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const MaskTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    const classes = props.classes;
    const [open, handleToggle] = (0,react.useState)(false);
    const [isTabsOverflow, setIsTabsOverflow] = (0,react.useState)(false);
    const [firstId, setFirstTabId] = (0,react.useState)(context?.value);
    const innerRef = (0,react.useRef)(null);
    const anchorRef = (0,react.useRef)(null);
    const flexPanelRef = (0,react.useRef)(null);
    const { width } = (0,useWindowSize/* default */.Z)();
    if (context === null) throw new TypeError('No TabContext provided');
    const { onChange, variant = 'base', hideArrowButton, ...rest } = props;
    (0,react.useImperativeHandle)(ref, ()=>innerRef?.current);
    // #region hide tab should up to first when chick
    (0,react.useEffect)(()=>{
        if (!innerRef?.current) return;
        const current = innerRef.current;
        setIsTabsOverflow(current.scrollWidth >= current.clientWidth + defaultTabSize);
    }, [
        innerRef?.current,
        width
    ]);
    // #endregion
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) throw new TypeError('Invalided Children');
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            className: child.props.className,
            onChange: (event, value, visitable)=>{
                handleToggle(false);
                props.onChange(event, value);
                if (variant === 'flexible' && !visitable) {
                    setFirstTabId(value);
                }
            }
        };
        if (child.type !== Tab/* default */.Z) return child;
        if (variant === 'flexible') {
            Object.assign(extra, {
                // if move tab to first in flexible tabs
                isVisitable: (top, right)=>{
                    const anchor = anchorRef.current?.getBoundingClientRect();
                    return right <= (anchor?.right ?? 0) - defaultTabSize && top - (anchor?.top ?? 0) < defaultTabSize;
                }
            });
        }
        const C = tabMapping[variant];
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(C, {
            value: child.props.value,
            ...extra,
            children: child.props.label
        });
    });
    // #region hide tab should up to first when chick
    const flexibleTabs = (0,react.useMemo)(()=>{
        if (variant !== 'flexible') return null;
        return children?.sort((a, b)=>{
            if (a.props.value === firstId) return -1;
            if (b.props.value === firstId) return 1;
            return 0;
        });
    }, [
        firstId,
        children
    ]);
    // #endregion
    // #region Should close panel when click other area
    (0,useClickAway/* default */.Z)(flexPanelRef, (event)=>{
        if (variant !== 'flexible') return;
        const { left, right, top, bottom } = innerRef.current?.getBoundingClientRect() ?? {
            right: 0,
            left: 0,
            top: 0,
            bottom: 0
        };
        const pointerX = event.x ?? 0;
        const pointerY = event.y ?? 0;
        if (pointerX > right || pointerX < left || pointerY < top || pointerY > bottom) handleToggle(false);
    });
    // #endregion
    if (variant === 'flexible') {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            position: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
                    maskVariant: variant,
                    ref: anchorRef,
                    style: {
                        visibility: 'hidden',
                        height: defaultTabSize
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FlexibleButtonGroupPanel, {
                    isOpen: !!(open && isTabsOverflow),
                    ref: flexPanelRef,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlexButtonGroupWrap, {
                        maskVariant: variant,
                        isOpen: open,
                        isOverflow: !!(isTabsOverflow && !hideArrowButton),
                        ...rest,
                        ref: innerRef,
                        role: "tablist",
                        children: [
                            flexibleTabs,
                            (isTabsOverflow || open) && !hideArrowButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowButtonWrap, {
                                className: classes?.arrowButton,
                                variant: "text",
                                size: "small",
                                "aria-controls": open ? 'split-button-menu' : undefined,
                                "aria-expanded": open ? 'true' : undefined,
                                "aria-label": "select tabs list",
                                "aria-haspopup": "menu",
                                onClick: ()=>handleToggle(!open),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIosNewIconWrap, {
                                    sx: {
                                        transform: open ? 'rotate(90deg)' : 'rotate(270deg)'
                                    }
                                })
                            }) : null
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupWrap, {
        maskVariant: variant,
        ...rest,
        ref: innerRef,
        role: "tablist",
        children: children
    });
});
MaskTabList.displayName = 'MaskTabList';


/***/ }),

/***/ 16941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTab);
    const [, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useTransition)();
    const tabRecords = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>tabRecords[t] = t);
    const isCurrentTabAvailable = [
        defaultTab,
        ...possibleTabs
    ].includes(currentTab);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isCurrentTabAvailable) {
            setTab(defaultTab);
        }
    }, [
        isCurrentTabAvailable,
        defaultTab
    ]);
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, value)=>{
        startTransition(()=>setTab(value));
    }, []);
    return [
        currentTab,
        onChange,
        tabRecords,
        setTab
    ];
}


/***/ }),

/***/ 18121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useCurrencyType)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);



function useCurrencyType(pluginID) {
    const { Settings } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Settings?.currencyType ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .UNDEFINED */ .i_);
}


/***/ }),

/***/ 76010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ useFiatCurrencyRate)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27043);
/* harmony import */ var _useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18121);





function useFiatCurrencyRate() {
    const fiatCurrencyType = (0,_useCurrencyType_js__WEBPACK_IMPORTED_MODULE_1__/* .useCurrencyType */ .P)();
    const currencyType = fiatCurrencyType?.toUpperCase() || _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD;
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        queryKey: [
            '@@fiat-currency-rates'
        ],
        queryFn: async ()=>{
            const allRates = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .FiatCurrencyRate */ .PN.getRates();
            // Pick what we need only to reduce memory cost.
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(allRates, Object.keys(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2));
        },
        select: (data)=>data[currencyType]
    });
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

/***/ 16281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useFungibleTokenPrice)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useFungibleTokenPrice(pluginID, address, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        enabled: !!chainId && !!address,
        queryKey: [
            'fungible',
            'token-price',
            pluginID,
            chainId,
            address,
            options
        ],
        queryFn: async ()=>{
            return Hub.getFungibleTokenPrice(chainId, address.toLowerCase());
        }
    });
}


/***/ }),

/***/ 49616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useFungibleTokens)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);



function useFungibleTokens(pluginID, listOfAddress, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!listOfAddress?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP;
        return Promise.all(listOfAddress.map((x)=>Web3.getFungibleToken(x)));
    }, [
        Web3,
        listOfAddress?.join(',')
    ]);
}


/***/ }),

/***/ 24637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useNativeToken)
/* harmony export */ });
/* harmony import */ var _useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54246);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34093);


function useNativeToken(pluginID, options) {
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_0__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_useFungibleToken_js__WEBPACK_IMPORTED_MODULE_1__/* .useFungibleToken */ .c)(pluginID, nativeTokenAddress, undefined, options);
}


/***/ }),

/***/ 34093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useNativeTokenAddress)
/* harmony export */ });
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);
/* harmony import */ var _useNetwork_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70858);


function useNativeTokenAddress(pluginID, options) {
    const network = (0,_useNetwork_js__WEBPACK_IMPORTED_MODULE_0__/* .useNetwork */ .L)(pluginID);
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    if (network?.isCustomized) {
        return network.nativeCurrency.address;
    }
    return Others.getNativeTokenAddress(options?.chainId);
}


/***/ }),

/***/ 70858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNetwork)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72889);





function useNetwork(pluginID, chainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworks */ .e)(pluginID);
    const networkID = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networkID ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_STRING */ .v6);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId) return networks.find((x)=>x.chainId === chainId);
        return networks.find((x)=>x.ID === networkID);
    }, [
        chainId,
        networkID,
        networks
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

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 84305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared provider descriptor
 * @param expectedPluginID
 * @param expectedProviderTypeOrID
 * @returns
 */ function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { providerType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Providers */ .i8)(pluginID).find((x)=>[
            x.type,
            x.ID
        ].includes(expectedProviderTypeOrID ?? providerType ?? ''));
}


/***/ }),

/***/ 60574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useRecentTransactions(pluginID, status) {
    const { Transaction } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const transactions = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Transaction?.transactions ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (status ? transactions.filter((x)=>status === x.status) : transactions).map((x)=>({
                ...x,
                _tx: x.candidates[x.indexId]
            }));
    }, [
        status,
        transactions
    ]);
}


/***/ }),

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useReverseAddress)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83977);


function useReverseAddress(pluginID, address, domainOnly) {
    const { NameService } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .d)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'reverse',
            address,
            domainOnly
        ],
        enabled: !!NameService?.reverse,
        queryFn: async ()=>{
            if (!address) return null;
            return await NameService?.reverse?.(address, domainOnly) || null;
        }
    });
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

/***/ 48245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ formatCurrency)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29763);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);



const BOUNDARIES = {
    zeroDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, 0),
    twoDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -2),
    sixDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -6),
    eightDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -8),
    twelveDecimalBoundary: (0,_number_js__WEBPACK_IMPORTED_MODULE_1__/* .scale10 */ .SI)(1, -12),
    zeroDecimalExp: 0,
    twoDecimalExp: 2,
    sixDecimalExp: 6,
    eightDecimalExp: 8,
    twelveDecimalExp: 12
};
const DIGITAL_CURRENCY_SYMBOLS = {
    BTC: '\u20BF',
    ETH: '\u039E',
    SOL: '\u25CE',
    BNB: 'BNB',
    POLYGON: 'MATIC',
    WETH: 'WETH',
    AVAX: 'AVAX',
    GLMR: 'GLMR',
    MATIC: 'MATIC'
};
const digitalCurrencyModifier = (parts, symbol, isDigitalCurrency)=>{
    if (!isDigitalCurrency) return parts;
    const [currencyPart, ...rest] = parts;
    if (symbol) return [
        ...rest,
        {
            ...currencyPart,
            value: symbol
        }
    ];
    return parts;
};
const formatCurrencySymbol = (symbol, isLead)=>{
    return isLead || symbol.length === 0 ? symbol : ` ${symbol}`;
};
const fiatCurrencyResultModifier = (result, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, onlyRemainTwoOrZeroDecimal)=>{
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.HKD) return result.replaceAll('$', 'HK$');
    if (currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY && onlyRemainTwoOrZeroDecimal) return result.startsWith('¥') ? '¥' + Number(result.replaceAll(/¥|,/g, '')).toFixed() : result;
    return result;
};
// https://mask.atlassian.net/wiki/spaces/MASK/pages/122916438/Token
function formatCurrency(inputValue, currency = _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.USD, options) {
    const { onlyRemainTwoOrZeroDecimal = false, fiatCurrencyRate = 1, customDecimalConfig } = options ?? {};
    const bn = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O(inputValue).multipliedBy(fiatCurrencyRate);
    const integerValue = bn.integerValue(1);
    const decimalValue = bn.plus(integerValue.negated());
    const isMoreThanOrEqualToOne = bn.isGreaterThanOrEqualTo(1);
    const { sixDecimalBoundary, zeroDecimalBoundary, twoDecimalBoundary, twelveDecimalBoundary, eightDecimalBoundary, zeroDecimalExp, sixDecimalExp, twoDecimalExp, twelveDecimalExp } = BOUNDARIES;
    const assetValueBoundary = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalBoundary : twoDecimalBoundary;
    const assetValueDecimalExp = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? zeroDecimalExp : twoDecimalExp;
    const zeroValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '0' : '0.00';
    const minimumValue = currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? '1' : '0.01';
    const symbol = currency ? DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()] : '';
    let formatter;
    let isIntlCurrencyValid = !DIGITAL_CURRENCY_SYMBOLS[currency.toUpperCase()];
    try {
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: isIntlCurrencyValid ? currency === _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.JPY ? _index_js__WEBPACK_IMPORTED_MODULE_2__/* .CurrencyType */ .V2.CNY : currency : 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    } catch  {
        isIntlCurrencyValid = false;
        formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol'
        });
    }
    const isDigitalCurrency = !!(!isIntlCurrencyValid && symbol);
    const digitalCurrencyModifierValues = digitalCurrencyModifier(formatter.formatToParts(bn.isZero() ? 0 : bn.lt(sixDecimalBoundary) ? sixDecimalBoundary.toNumber() : bn.toNumber()), symbol, isDigitalCurrency);
    let result = '';
    if (bn.lt(customDecimalConfig?.boundary ?? onlyRemainTwoOrZeroDecimal ? assetValueBoundary : sixDecimalBoundary) || bn.isZero()) {
        const isLessThanAssetValueDecimalBoundary = bn.lt(assetValueBoundary);
        const isLessThanTwelveDecimalBoundary = bn.lt(twelveDecimalBoundary);
        const isLessThanCustomDecimalBoundary = customDecimalConfig?.boundary ? bn.lt(customDecimalConfig?.boundary) : false;
        const isGreatThanEightDecimalBoundary = bn.gte(eightDecimalBoundary);
        const value = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    if (customDecimalConfig) {
                        return bn.isZero() ? zeroValue : isLessThanCustomDecimalBoundary ? customDecimalConfig.boundary.toFixed() : bn.toFixed(customDecimalConfig.decimalExp).replace(/0+$/, '');
                    }
                    return bn.isZero() ? zeroValue : onlyRemainTwoOrZeroDecimal ? minimumValue : isLessThanTwelveDecimalBoundary ? sixDecimalBoundary.toFixed() : isGreatThanEightDecimalBoundary ? bn.decimalPlaces(10).toFixed(twelveDecimalExp).replace(/0+$/, '') : bn.toFixed(twelveDecimalExp).replace(/0+$/, '');
                default:
                    return '';
            }
        }).join('');
        result = `${(isLessThanTwelveDecimalBoundary || onlyRemainTwoOrZeroDecimal && isLessThanAssetValueDecimalBoundary) && !bn.isZero() ? '< ' : ''}${value}`;
    } else if (isMoreThanOrEqualToOne) {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    } else {
        result = digitalCurrencyModifierValues.map(({ type, value }, i)=>{
            switch(type){
                case 'currency':
                    return formatCurrencySymbol(symbol ?? value, i === 0);
                case 'fraction':
                    const dec = decimalValue.toFormat(customDecimalConfig?.decimalExp ?? (onlyRemainTwoOrZeroDecimal ? assetValueDecimalExp : sixDecimalExp)).replace(/\d\./, '');
                    return onlyRemainTwoOrZeroDecimal ? dec.replace(/(\d\d)(0+)$/, '$1') : dec.replace(/(0+)$/, '');
                case 'integer':
                    // When there is a carry
                    if (bn.gt('0.99') && onlyRemainTwoOrZeroDecimal) return '1';
                    return '0';
                case 'literal':
                    return '';
                default:
                    return value;
            }
        }).join('');
    }
    return fiatCurrencyResultModifier(result, currency, onlyRemainTwoOrZeroDecimal);
}


/***/ }),

/***/ 93573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check'));

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

/***/ 99948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error'));

/***/ }),

/***/ 65587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ TabContext),
/* harmony export */   _i: () => (/* binding */ useTabContext),
/* harmony export */   pQ: () => (/* binding */ getTabId),
/* harmony export */   uU: () => (/* binding */ getPanelId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);


/**
 * @type {React.Context<{ idPrefix: string; value: string } | null>}
 */


const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

function useUniquePrefix() {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setId(`mui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

function TabContext(props) {
  const {
    children,
    value
  } = props;
  const idPrefix = useUniquePrefix();
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      idPrefix,
      value
    };
  }, [idPrefix, value]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
    value: context,
    children: children
  });
}
 false ? 0 : void 0;
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
}
function getPanelId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const {
    idPrefix
  } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

/***/ }),

/***/ 80234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

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

/***/ 79847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(26572);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 26572:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
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

/***/ 69535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/11e5f9f76a85bb488b8b.png";

/***/ }),

/***/ 46372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/edc90629c16816d25432.png";

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


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createContainer),
/* harmony export */   u: () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ }),

/***/ 37775:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRateMode","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRate","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"premium","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"FlashLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collateralAsset","type":"address"},{"indexed":true,"internalType":"address","name":"debtAsset","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"debtToCover","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidatedCollateralAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"LiquidationCall","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"RebalanceStableBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"repayer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Repay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"}],"name":"ReserveDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralDisabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FLASHLOAN_PREMIUM_TOTAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LENDINGPOOL_REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NUMBER_RESERVES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STABLE_RATE_BORROW_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"interestRateMode","type":"uint256"},{"internalType":"uint16","name":"referralCode","type":"uint16"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"balanceFromBefore","type":"uint256"},{"internalType":"uint256","name":"balanceToBefore","type":"uint256"}],"name":"finalizeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiverAddress","type":"address"},{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"modes","type":"uint256[]"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"bytes","name":"params","type":"bytes"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddressesProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"configuration","type":"tuple"},{"internalType":"uint128","name":"liquidityIndex","type":"uint128"},{"internalType":"uint128","name":"variableBorrowIndex","type":"uint128"},{"internalType":"uint128","name":"currentLiquidityRate","type":"uint128"},{"internalType":"uint128","name":"currentVariableBorrowRate","type":"uint128"},{"internalType":"uint128","name":"currentStableBorrowRate","type":"uint128"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"},{"internalType":"uint8","name":"id","type":"uint8"}],"internalType":"struct DataTypes.ReserveData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedVariableDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReservesList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAccountData","outputs":[{"internalType":"uint256","name":"totalCollateralETH","type":"uint256"},{"internalType":"uint256","name":"totalDebtETH","type":"uint256"},{"internalType":"uint256","name":"availableBorrowsETH","type":"uint256"},{"internalType":"uint256","name":"currentLiquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"healthFactor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.UserConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtAddress","type":"address"},{"internalType":"address","name":"variableDebtAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"}],"name":"initReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"provider","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"collateralAsset","type":"address"},{"internalType":"address","name":"debtAsset","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"debtToCover","type":"uint256"},{"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"liquidationCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"rebalanceStableBorrowRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rateMode","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"configuration","type":"uint256"}],"name":"setConfiguration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"rateStrategyAddress","type":"address"}],"name":"setReserveInterestRateStrategyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"useAsCollateral","type":"bool"}],"name":"setUserUseReserveAsCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"swapBorrowRateMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 10390:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositContract","type":"address"},{"name":"_oracle","type":"address"},{"name":"_operators","type":"address"},{"name":"_treasury","type":"address"},{"name":"_insuranceFund","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInsuranceFund","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"getSharesByPooledEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalPooledEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PAUSE_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTreasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_ORACLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_WITHDRAWAL_KEY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBufferedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SIGNATURE_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawalCredentials","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFeeDistribution","outputs":[{"name":"treasuryFeeBasisPoints","type":"uint16"},{"name":"insuranceFeeBasisPoints","type":"uint16"},{"name":"operatorsFeeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sharesAmount","type":"uint256"}],"name":"getPooledEthByShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16"},{"name":"_insuranceFeeBasisPoints","type":"uint16"},{"name":"_operatorsFeeBasisPoints","type":"uint16"}],"name":"setFeeDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_feeBasisPoints","type":"uint16"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_maxDeposits","type":"uint256"}],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_FEE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SET_TREASURY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_CREDENTIALS_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PUBKEY_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_pubkeyHash","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDepositContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBeaconStat","outputs":[{"name":"depositedValidators","type":"uint256"},{"name":"beaconValidators","type":"uint256"},{"name":"beaconBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_insuranceFund","type":"address"}],"name":"setInsuranceFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"feeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_INSURANCE_FUND","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalCredentials","type":"bytes32"}],"name":"setWithdrawalCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_sharesAmount","type":"uint256"}],"name":"burnShares","outputs":[{"name":"newTotalShares","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_beaconValidators","type":"uint256"},{"name":"_beaconBalance","type":"uint256"}],"name":"pushBeacon","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"sharesOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"},{"anonymous":false,"inputs":[],"name":"Stopped","type":"event"},{"anonymous":false,"inputs":[],"name":"Resumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint16"}],"name":"FeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"treasuryFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"insuranceFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"operatorsFeeBasisPoints","type":"uint16"}],"name":"FeeDistributionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawalCredentials","type":"bytes32"}],"name":"WithdrawalCredentialsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"referral","type":"address"}],"name":"Submitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unbuffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"},{"indexed":false,"name":"sentFromBuffer","type":"uint256"},{"indexed":true,"name":"pubkeyHash","type":"bytes32"},{"indexed":false,"name":"etherAmount","type":"uint256"}],"name":"Withdrawal","type":"event"}]');

/***/ })

}]);
//# sourceMappingURL=chunk.5560.js.map