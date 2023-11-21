"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[324],{

/***/ 2574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   _H: () => (/* binding */ PersistentStorages),
/* harmony export */   uU: () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* unused harmony export BackupAccountType */
/* harmony import */ var _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _kv_storage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93871);
/* harmony import */ var _kv_storage_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41646);



const indexedDBProxy = (0,_kv_storage_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X)();
const inMemoryBackend = (0,_kv_storage_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_kv_storage_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createKVStorageHost */ .rc)(indexedDBProxy, _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_kv_storage_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createKVStorageHost */ .rc)(inMemoryBackend, _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    Web3: createInMemoryKVStorage('web3', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: '',
        schema: 1,
        chainId: 1,
        pluginID: ''
    })
};
/**
 * @deprecated Will be removed in 2.23
 */ const ApplicationEntryUnlistedListKey = 'application_entry_unlisted_list';
const APPLICATION_ENTRY_UNLISTED = 'APPLICATION_ENTRY_UNLISTED';
var BackupAccountType;
(function(BackupAccountType) {
    BackupAccountType["Email"] = 'email';
    BackupAccountType["Phone"] = 'phone';
})(BackupAccountType || (BackupAccountType = {}));
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {}),
    Web3: createPersistentKVStorage('web3', {}),
    Settings: createPersistentKVStorage('settings', {
        debugging: false,
        backupConfig: {
            backupPassword: '',
            email: '',
            phone: '',
            localBackupAt: '',
            cloudBackupAt: '',
            cloudBackupMethod: null
        }
    }),
    /**
     * @deprecated Will be removed in 2.23
     */ ApplicationEntryUnListedList: createPersistentKVStorage(ApplicationEntryUnlistedListKey, {
        current: {
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.RedPacket]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.FileService]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.CrossChainBridge]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.MaskBox]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Savings]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Avatar]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Trader]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Tips]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Transak]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.Pets]: false,
            [_types_PluginID_js__WEBPACK_IMPORTED_MODULE_3__/* .PluginID */ .P.GoPlusSecurity]: false
        }
    }),
    ApplicationEntryUnListed: createPersistentKVStorage(APPLICATION_ENTRY_UNLISTED, {
        data: []
    })
};
// TODO remove in 2.23
async function migrateUnlistedEntries() {
    await Promise.allSettled([
        PersistentStorages.ApplicationEntryUnListedList.storage.current.initializedPromise,
        PersistentStorages.ApplicationEntryUnListed.storage.data.initializedPromise
    ]);
    const legacyData = PersistentStorages.ApplicationEntryUnListedList.storage.current.value;
    const newData = PersistentStorages.ApplicationEntryUnListed.storage.data.value;
    const pairs = Array.from(Object.entries(legacyData));
    const unlisted = pairs.filter((x)=>x[1]);
    if (unlisted.length && !newData.length) {
        const legacyList = unlisted.map((x)=>x[0]);
        await PersistentStorages.ApplicationEntryUnListed.storage.data.setValue(legacyList);
        await PersistentStorages.ApplicationEntryUnListedList.storage.current.setValue({});
    }
}
migrateUnlistedEntries();


/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bm: () => (/* binding */ resolveNextIDIdentityToProfile),
/* harmony export */   Im: () => (/* binding */ resolveNetworkToNextIDPlatform),
/* harmony export */   SS: () => (/* binding */ createBindingProofFromProfileQuery)
/* harmony export */ });
/* unused harmony export resolveNextIDPlatformToNetwork */
/* harmony import */ var _masknet_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50508);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95766);



const NextIDPlatformToNetwork = {
    [_types_js__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Ethereum]: undefined,
    [_types_js__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.GitHub]: undefined,
    [_types_js__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Keybase]: undefined,
    [_types_js__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Twitter]: _Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter
};
function resolveNextIDPlatformToNetwork(key) {
    return NextIDPlatformToNetwork[key];
}
const NetworkToNextIDPlatform = {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.App]: undefined,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: _types_js__WEBPACK_IMPORTED_MODULE_0__/* .NextIDPlatform */ .V.Twitter
};
function resolveNetworkToNextIDPlatform(key) {
    return NetworkToNextIDPlatform[key];
}
function resolveNextIDIdentityToProfile(nextIDIdentity, platform) {
    const network = resolveNextIDPlatformToNetwork(platform);
    if (!network) return;
    return _masknet_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .W.of(network, nextIDIdentity).expect(`${network} and ${nextIDIdentity} should compose a valid ProfileIdentifier`);
}
function createBindingProofFromProfileQuery(platform, identity, name, link, source, relatedList) {
    return {
        platform,
        source,
        identity,
        name,
        created_at: '',
        last_checked_at: '',
        is_valid: true,
        relatedList,
        link
    };
}


/***/ }),

/***/ 68422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LP: () => (/* binding */ EnhanceableSiteList),
/* harmony export */   Me: () => (/* binding */ getExtensionId),
/* harmony export */   NA: () => (/* binding */ isEthereumInjected),
/* harmony export */   Po: () => (/* binding */ isExtensionSiteType),
/* harmony export */   UX: () => (/* binding */ isInPageEthereumInjected),
/* harmony export */   gD: () => (/* binding */ ExtensionSiteList),
/* harmony export */   pZ: () => (/* binding */ getEnhanceableSiteType),
/* harmony export */   sv: () => (/* binding */ getSiteType),
/* harmony export */   ub: () => (/* binding */ getAgentType),
/* harmony export */   wO: () => (/* binding */ getExtensionSiteType)
/* harmony export */ });
/* unused harmony export isEnhanceableSiteType */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);
/* harmony import */ var _helpers_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38506);




const matchEnhanceableSiteHost = {
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: /localhost/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.App]:  true ? /^(app\.mask\.io|app-(beta|stage|test)\.mask\.io|[\w-]*\.?maskbook\.pages\.dev)$/i : 0,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: /facebook\.com/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: /twitter\.com/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: /minds\.com/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: /instagram\.com/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: /opensea\.io/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: /mirror\.xyz/i
};
const matchExtensionSitePathname = {
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .ExtensionSite */ .v.Dashboard]: /dashboard\.html/i,
    [_types_js__WEBPACK_IMPORTED_MODULE_1__/* .ExtensionSite */ .v.Popup]: /popups\.html/i
};
const EnhanceableSiteList = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types_js__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J).map((x)=>x.value);
const ExtensionSiteList = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types_js__WEBPACK_IMPORTED_MODULE_1__/* .ExtensionSite */ .v).map((x)=>x.value);
function getEnhanceableSiteType(url) {
    const target = (0,_helpers_parseURL_js__WEBPACK_IMPORTED_MODULE_2__/* .parseURL */ .L)(url)?.host ?? location.host;
    for (const [type, regexp] of Object.entries(matchEnhanceableSiteHost)){
        if (target.match(regexp)) return type;
        continue;
    }
    return;
}
function getExtensionSiteType(url) {
    const target = (0,_helpers_parseURL_js__WEBPACK_IMPORTED_MODULE_2__/* .parseURL */ .L)(url)?.pathname ?? location.pathname;
    for (const [type, regexp] of Object.entries(matchExtensionSitePathname)){
        if (target.match(regexp)) return type;
        continue;
    }
    return;
}
function getSiteType(url) {
    return getEnhanceableSiteType(url) ?? getExtensionSiteType(url);
}
function getAgentType() {
    if (_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_edge) return 'edge';
    if (_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_opera) return 'opera';
    if (_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_firefox) return 'firefox';
    if (_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_chromium) return 'chromium';
    return 'unknown';
}
function isEnhanceableSiteType() {
    return !!getEnhanceableSiteType();
}
function isExtensionSiteType() {
    return !!getExtensionSiteType();
}
/**
 * The metamask browser provider is available in the page.
 * @returns
 */ function isEthereumInjected(name = 'ethereum') {
    if (typeof window === 'undefined') return false;
    return typeof Reflect.get(window, name) !== 'undefined';
}
/**
 * The metamask browser provider (for extension's content page) is available in the page.
 * @returns
 */ function isInPageEthereumInjected() {
    return !isExtensionSiteType() && !_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_firefox;
}
function getExtensionId() {
    try {
        if (_Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_chromium || _Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_opera || _Sniffings_index_js__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_edge) {
            // @ts-expect-error this package should not access browser global. It makes this package non-portable.
            return browser.runtime.getURL('').match(/chrome-extension:\/\/([a-z]{32})/)?.[1] ?? '';
        }
    } catch  {}
    // in case browser does not exist
    return;
}


/***/ }),

/***/ 88494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yd: () => (/* binding */ CoinMarketCap)
});

// UNUSED EXPORTS: getCoinInfo, getLatestMarketPairs, getQuotesInfo

// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(11796);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Days.ts
var Days = __webpack_require__(89087);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isValidChainId.ts
var isValidChainId = __webpack_require__(37049);
;// CONCATENATED MODULE: ./packages/web3-providers/src/CoinMarketCap/constants.ts
// proxy: https://web-api.coinmarketcap.com/v1
const CMC_BASE_URL = 'https://coinmarketcap-agent.r2d2.to/v1';
const CMC_STATIC_BASE_URL = 'https://s2.coinmarketcap.com/static';
// the bitcoin ledger started at 03 Jan 2009
const BTC_FIRST_LEGER_DATE = new Date('2009-01-03T00:00:00.000Z');
const THIRD_PARTY_V1_BASE_URL = 'https://3rdparty-apis.coinmarketcap.com/v1';

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/primitives.ts
var primitives = __webpack_require__(47469);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
;// CONCATENATED MODULE: ./packages/web3-providers/src/CoinMarketCap/helpers.ts



const NETWORK_NAME_MAP = {
    Ethereum: types/* ChainId */.a_.Mainnet,
    'BNB Smart Chain (BEP20)': types/* ChainId */.a_.BSC,
    Polygon: types/* ChainId */.a_.Matic,
    'Avalanche C-Chain': types/* ChainId */.a_.Avalanche,
    Moonbeam: types/* ChainId */.a_.Moonbeam,
    Optimism: types/* ChainId */.a_.Optimism
};
const NATIVE_TOKEN_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
function resolveCoinMarketCapChainId(name) {
    return NETWORK_NAME_MAP[name];
}
function resolveCoinMarketCapAddress(address) {
    return (0,isSameAddress/* isSameAddress */.W)(NATIVE_TOKEN_ADDRESS, address) ? primitives/* ZERO_ADDRESS */.r : address;
}
function fetchFromCoinMarketCap(request, init) {
    return (0,fetchJSON/* fetchSquashedJSON */.Vn)(request, init);
}

// EXTERNAL MODULE: ./packages/web3-providers/src/Fuse/apis/Coin.ts
var Coin = __webpack_require__(76836);
// EXTERNAL MODULE: ./packages/web3-providers/src/Trending/helpers.ts
var helpers = __webpack_require__(67876);
// EXTERNAL MODULE: ./packages/web3-providers/src/Trending/constants.ts
var constants = __webpack_require__(35523);
;// CONCATENATED MODULE: ./packages/web3-providers/src/CoinMarketCap/apis/TrendingAPI.ts









// #regin get quote info
async function getQuotesInfo(id, currency) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('convert', currency);
    try {
        return await fetchFromCoinMarketCap(`${THIRD_PARTY_V1_BASE_URL}/cryptocurrency/widget?${params.toString()}`, {
            cache: 'default'
        });
    } catch  {
        return {
            data: null
        };
    }
}
// #endregion
// #region get coin info
async function getCoinInfo(id) {
    const params = new URLSearchParams('aux=urls,logo,description,tags,platform,date_added,notice,status');
    params.append('id', id);
    const response = await fetchFromCoinMarketCap(/** id, coin-info pair */ `${CMC_BASE_URL}/cryptocurrency/info?${params.toString()}`, {
        cache: 'default'
    });
    return {
        data: response.data[id],
        status: response.status
    };
}
// #endregion
// #region latest market pairs
async function getLatestMarketPairs(id, currency) {
    const params = new URLSearchParams('aux=num_market_pairs,market_url,price_quote,effective_liquidity,market_score,market_reputation&limit=40&sort=cmc_rank&start=1');
    params.append('convert', currency);
    params.append('id', id);
    try {
        return await fetchFromCoinMarketCap(`${CMC_BASE_URL}/cryptocurrency/market-pairs/latest?${params.toString()}`, {
            cache: 'default'
        });
    } catch  {
        return {
            data: {
                id,
                market_pairs: [],
                num_market_pairs: 0
            }
        };
    }
}
// #endregion
class CoinMarketCapTrendingAPI {
    async getHistorical(id, currency, startDate, endDate, interval) {
        const params = new URLSearchParams('format=chart_crypto_details');
        params.append('convert', currency);
        params.append('id', id);
        params.append('interval', interval);
        params.append('time_end', (0,getUnixTime/* default */.Z)(endDate).toString());
        params.append('time_start', (0,getUnixTime/* default */.Z)(startDate).toString());
        const response = await fetchFromCoinMarketCap(`${CMC_BASE_URL}/cryptocurrency/quotes/historical?${params.toString()}`, {
            cache: 'default'
        });
        return response.data;
    }
    async getAllCoins() {
        const response = await fetchFromCoinMarketCap(`${CMC_BASE_URL}/cryptocurrency/map?aux=status,platform&listing_status=active,untracked&sort=cmc_rank`, {
            cache: 'force-cache'
        });
        if (!response.data) return [];
        return response.data.filter((x)=>x.status === 'active').map((x)=>({
                id: String(x.id),
                name: x.name,
                symbol: x.symbol,
                type: specs/* TokenType */.iv.Fungible,
                contract_address: x.platform?.token_address,
                market_cap_rank: x.rank
            }));
    }
    async getCoinsByKeyword(chainId, keyword) {
        return Coin/* FuseCoin */.q.create(await this.getAllCoins()).search(keyword).map((x)=>x.item).filter((y)=>y.market_cap_rank && y.market_cap_rank < constants/* VALID_TOP_RANK */.r4).slice(0, constants/* COIN_RECOMMENDATION_SIZE */.Qx);
    }
    getCoinInfoByAddress(address) {
        throw new Error('To be implemented.');
    }
    async getCoinTrending(chainId, id, currency) {
        const currencyName = currency.name.toUpperCase();
        const [coinInfoRes, { data: quotesInfo }, { data: market }] = await Promise.all([
            getCoinInfo(id),
            getQuotesInfo(id, currencyName),
            getLatestMarketPairs(id, currencyName)
        ]);
        if (!coinInfoRes) return;
        const { data: coinInfo, status } = coinInfoRes;
        const contracts = coinInfo.contract_address.sort((a, b)=>a.platform.coin.id === String(id) && b.platform.coin.id !== String(id) ? -1 : 1).map((x)=>({
                chainId: resolveCoinMarketCapChainId(x.platform.name),
                address: resolveCoinMarketCapAddress(x.contract_address),
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                icon_url: `${CMC_STATIC_BASE_URL}/img/coins/64x64/${x.platform.coin.id}.png`
            })).filter((x)=>(0,isValidChainId/* isValidChainId */.J)(x.chainId));
        const currentContract = contracts[0];
        const trending = {
            lastUpdated: status.timestamp,
            platform: coinInfo.platform,
            contracts,
            coin: {
                id,
                chainId: currentContract?.chainId,
                name: coinInfo.name,
                symbol: coinInfo.symbol,
                type: specs/* TokenType */.iv.Fungible,
                is_mirrored: (0,helpers/* isMirroredKeyword */.Bk)(coinInfo.symbol),
                announcement_urls: coinInfo.urls.announcement?.filter(Boolean),
                tech_docs_urls: coinInfo.urls.technical_doc?.filter(Boolean),
                message_board_urls: coinInfo.urls.message_board?.filter(Boolean),
                source_code_urls: coinInfo.urls.source_code?.filter(Boolean),
                community_urls: (0,helpers/* getCommunityLink */.DF)([
                    ...coinInfo.urls.twitter ?? [],
                    ...coinInfo.urls.reddit ?? [],
                    ...coinInfo.urls.chat ?? []
                ].filter(Boolean)),
                home_urls: coinInfo.urls.website?.filter(Boolean),
                blockchain_urls: [
                    `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                    ...coinInfo.urls.explorer ?? []
                ].filter(Boolean),
                tags: coinInfo.tags ?? void 0,
                image_url: `${CMC_STATIC_BASE_URL}/img/coins/64x64/${id}.png`,
                platform_url: `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                twitter_url: coinInfo.urls.twitter?.find((x)=>x.includes('twitter')),
                telegram_url: coinInfo.urls.chat?.find((x)=>x.includes('telegram')),
                market_cap_rank: quotesInfo?.[id]?.cmc_rank,
                description: coinInfo.description,
                contract_address: currentContract?.address ?? coinInfo.platform?.token_address
            },
            currency,
            dataProvider: specs/* SourceType */.PO.CoinMarketCap,
            tickers: market.market_pairs.map((pair)=>({
                    logo_url: `${CMC_STATIC_BASE_URL}/img/exchanges/32x32/${pair.exchange.id}.png`,
                    trade_url: pair.market_url,
                    market_name: pair.exchange.name,
                    market_reputation: pair.market_reputation,
                    base_name: pair.market_pair_base.exchange_symbol,
                    target_name: pair.market_pair_quote.exchange_symbol,
                    price: pair.market_pair_base.currency_id === market.id ? pair.quote[currencyName].price : pair.quote[currencyName].price_quote,
                    volume: pair.quote[currencyName].volume_24h,
                    score: String(pair.market_score),
                    updated: new Date(pair.quote[currencyName].last_updated)
                })).sort((a, z)=>{
                if (a.market_reputation !== z.market_reputation) return z.market_reputation - a.market_reputation;
                // reputation from high to low
                if (a.price.toFixed(2) !== z.price.toFixed(2)) return z.price - a.price;
                // price from high to low
                return z.volume - a.volume;
            })
        };
        // volume from high to low
        const quotesInfo_ = quotesInfo?.[id];
        if (quotesInfo_) trending.market = {
            circulating_supply: quotesInfo_.total_supply ?? void 0,
            total_supply: quotesInfo_.total_supply ?? void 0,
            max_supply: quotesInfo_.max_supply ?? void 0,
            market_cap: quotesInfo_.quote[currencyName].market_cap,
            current_price: quotesInfo_.quote[currencyName].price.toString(),
            total_volume: quotesInfo_.quote[currencyName].volume_24h,
            price_change_percentage_1h: quotesInfo_.quote[currencyName].percent_change_1h,
            price_change_24h: quotesInfo_.quote[currencyName].percent_change_24h,
            price_change_percentage_1h_in_currency: quotesInfo_.quote[currencyName].percent_change_1h,
            price_change_percentage_24h_in_currency: quotesInfo_.quote[currencyName].percent_change_24h,
            price_change_percentage_7d_in_currency: quotesInfo_.quote[currencyName].percent_change_7d
        };
        return trending;
    }
    async getCoinPriceStats(chainId, coinId, currency, days) {
        const interval = (()=>{
            if (days === 0) return '1d';
            // max
            if (days > 365) return '1d';
            // 1y
            if (days > 90) return '2h';
            // 3m
            if (days > 30) return '1h';
            // 1m
            if (days > 7) return '15m';
            // 1w
            return '5m';
        })();
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);
        const stats = await this.getHistorical(coinId, currency.name.toUpperCase(), days === Days/* Days */.h.MAX ? BTC_FIRST_LEGER_DATE : startDate, endDate, interval);
        if (stats.is_active === 0) return [];
        return Object.entries(stats).map(([date, x])=>[
                new Date(date).getTime(),
                x[currency.name.toUpperCase()][0]
            ]);
    }
    getCoinMarketInfo(symbol) {
        throw new Error('Method not implemented.');
    }
}
const CoinMarketCap = new CoinMarketCapTrendingAPI();


/***/ }),

/***/ 91428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CryptoScamDB)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);


const BASE_URL = 'https://scam.mask.r2d2.to/cryptoscam-db';
class CryptoScamDB {
    static bloomFilter;
    static async getBloomFilter() {
        if (this.bloomFilter) return this.bloomFilter;
        const filter = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchSquashedJSON */ .Vn)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(BASE_URL, 'filter/config.json'));
        const { ScalableBloomFilter } = await Promise.all(/* import() */[__webpack_require__.e(2135), __webpack_require__.e(8132), __webpack_require__.e(5215), __webpack_require__.e(5643), __webpack_require__.e(8685), __webpack_require__.e(7913), __webpack_require__.e(6452)]).then(__webpack_require__.t.bind(__webpack_require__, 38943, 23));
        this.bloomFilter = ScalableBloomFilter.fromJSON(filter);
        return this.bloomFilter;
    }
    static async getScamWarning(link) {
        const filter = await this.getBloomFilter();
        if (!filter) return;
        try {
            const url = new URL(link);
            if (!filter.has(url.host)) return;
            const result = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchSquashedJSON */ .Vn)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(BASE_URL, `${url.host}.json`));
            if (!result) return;
            const scamURL = new URL(result.url);
            if ((!url.pathname || url.pathname === '/') && (!scamURL.pathname || scamURL.pathname === '/')) return result;
            if (url.pathname.toLowerCase() === scamURL.pathname.toLowerCase() && url.search.toLowerCase() === scamURL.search.toLowerCase()) {
                return result;
            }
            return;
        } catch  {
            return;
        }
    }
    static async getScamWarnings(links) {
        const requests = links.map((x)=>{
            if (x.startsWith('https://') || x.startsWith('http://')) return x;
            return `http://${x}`;
        }).map((x)=>this.getScamWarning(x));
        const result = await Promise.allSettled(requests);
        return result.map((x)=>x.status === 'fulfilled' ? x.value : undefined).filter((x)=>!!x);
    }
}


/***/ }),

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ FiatCurrencyRate)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62649);
/* harmony import */ var _entry_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);


const BASE_URL = 'https://nftapi.firefly.land/exchange-rates?base=USD';
class FiatCurrencyRate {
    static async getRate(type) {
        if (!type || type === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CurrencyType */ .V2.USD) return 1;
        const result = await (0,_entry_helpers_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchJSON */ .ZV)(BASE_URL);
        return result.rates[type.toUpperCase()];
    }
    static async getRates() {
        const result = await (0,_entry_helpers_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchJSON */ .ZV)(BASE_URL);
        return result.rates;
    }
}


/***/ }),

/***/ 36541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GoPlusLabs),
/* harmony export */   x: () => (/* binding */ GoPlusAuthorization)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72601);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26235);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8610);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81755);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10149);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33026);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37049);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74765);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23302);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99501);
/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96907);
/* harmony import */ var _helpers_getAllMaskDappContractInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85944);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11834);











function checkInWhitelist(chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet, address) {
    const { WHITE_LISTS } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .getGoPlusLabsConstants */ .k$)(chainId);
    return WHITE_LISTS?.some((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .W)(x, address));
}
class GoPlusAuthorizationAPI {
    async getSupportChainIds() {
        return [
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.BSC
        ];
    }
    async getNonFungibleTokenSpenders(chainId, addresses) {
        const supportedChainIds = await this.getSupportChainIds();
        if (!supportedChainIds.includes(chainId)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        const maskDappContractInfoList = (0,_helpers_getAllMaskDappContractInfo_js__WEBPACK_IMPORTED_MODULE_4__/* .getAllMaskDappContractInfo */ .i)(chainId, 'nft');
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v2/nft721_approval_security/:chainId', {
            chainId,
            addresses
        }));
        const nft1155Response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v2/nft1155_approval_security/:chainId', {
            chainId,
            addresses
        }));
        if (!response.result?.length && !nft1155Response.result?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        return [
            ...response.result,
            ...nft1155Response.result
        ].reduce((acc, cur)=>{
            return acc.concat(cur.approved_list.map((rawSpender)=>{
                const maskDappContractInfo = maskDappContractInfoList.find((y)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .W)(y.address, rawSpender.approved_contract));
                if (maskDappContractInfo) {
                    return {
                        isMaskDapp: true,
                        address: rawSpender.approved_contract,
                        amount: '1',
                        name: maskDappContractInfo.name,
                        logo: maskDappContractInfo.logo,
                        contract: {
                            address: cur.nft_address,
                            name: cur.nft_name
                        }
                    };
                }
                return {
                    isMaskDapp: false,
                    address: rawSpender.approved_contract,
                    amount: '1',
                    name: rawSpender.address_info.tag,
                    logo: undefined,
                    contract: {
                        address: cur.nft_address,
                        name: cur.nft_name
                    }
                };
            }));
        }, []).sort((a, b)=>{
            if (a.isMaskDapp && !b.isMaskDapp) return -1;
            if (!a.isMaskDapp && b.isMaskDapp) return 1;
            return Number(b.amount) - Number(a.amount);
        });
    }
    async getFungibleTokenSpenders(chainId, addresses) {
        const supportedChainIds = await this.getSupportChainIds();
        if (!supportedChainIds.includes(chainId)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        const maskDappContractInfoList = (0,_helpers_getAllMaskDappContractInfo_js__WEBPACK_IMPORTED_MODULE_4__/* .getAllMaskDappContractInfo */ .i)(chainId, 'token');
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v2/token_approval_security/:chainId', {
            chainId,
            addresses
        }));
        if (!response?.result?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        return response.result.reduce((acc, cur)=>{
            const tokenInfo = {
                address: cur.token_address,
                symbol: cur.token_symbol,
                name: cur.token_name
            };
            return acc.concat(cur.approved_list.map((rawSpender)=>{
                const spender = {
                    name: rawSpender.address_info.tag,
                    address: rawSpender.approved_contract,
                    amount: rawSpender.approved_amount === 'Unlimited' ? _constants_js__WEBPACK_IMPORTED_MODULE_6__/* .INFINITE_VALUE */ .h : new bignumber_js__WEBPACK_IMPORTED_MODULE_1__/* .BigNumber */ .O(rawSpender.approved_amount).toNumber(),
                    tokenInfo
                };
                const maskDappContractInfo = maskDappContractInfoList.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .W)(x.address, spender.address));
                if (maskDappContractInfo) {
                    return {
                        ...spender,
                        name: maskDappContractInfo.name,
                        logo: maskDappContractInfo.logo,
                        isMaskDapp: true
                    };
                }
                return {
                    ...spender,
                    isMaskDapp: false
                };
            }));
        }, []).sort((a, b)=>{
            if (a.isMaskDapp && !b.isMaskDapp) return -1;
            if (!a.isMaskDapp && b.isMaskDapp) return 1;
            return 0;
        });
    }
}
class GoPlusLabs {
    static async getTokenSecurity(chainId, addresses) {
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v1/token_security/:id', {
            id: chainId,
            contract_addresses: (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(addresses, (x)=>x.toLowerCase()).join(',')
        }));
        if (response.code !== 1) return;
        return createTokenSecurity(chainId, response.result);
    }
    static async getAddressSecurity(chainId, address) {
        if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .isValidChainId */ .J)(chainId)) return;
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v1/address_security/:address', {
            address,
            chain_id: chainId
        }));
        if (response.code !== 1) return;
        return response.result;
    }
    static async getSupportedChain() {
        const { code, result } = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_5__/* .fetchJSON */ .ZV)((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_6__/* .GO_PLUS_LABS_ROOT_URL */ .T, 'api/v1/supported_chains'));
        if (code !== 1) return [];
        return result.map((x)=>({
                chainId: (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(x.id) ?? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
                name: x.name
            }));
    }
}
const GoPlusAuthorization = new GoPlusAuthorizationAPI();
function createTokenSecurity(chainId, response = {}) {
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(response) || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .isValidChainId */ .J)(chainId)) return;
    const entity = (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(Object.entries(response));
    if (!entity) return;
    const tokenSecurity = {
        ...entity[1],
        contract: entity[0],
        chainId
    };
    const is_high_risk = isHighRisk(tokenSecurity);
    const makeMessageList = getMessageList(tokenSecurity);
    const risk_item_quantity = makeMessageList.filter((x)=>x.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High).length;
    const warn_item_quantity = makeMessageList.filter((x)=>x.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.Medium).length;
    const inWhitelist = checkInWhitelist(chainId, tokenSecurity.contract);
    return {
        ...tokenSecurity,
        is_high_risk: inWhitelist ? false : is_high_risk,
        risk_item_quantity: inWhitelist ? 0 : risk_item_quantity,
        warn_item_quantity: inWhitelist ? 0 : warn_item_quantity,
        message_list: makeMessageList
    };
}
const isHighRisk = (tokenSecurity)=>{
    if (!tokenSecurity) return false;
    return tokenSecurity.trust_list === '1' ? false : _rules_js__WEBPACK_IMPORTED_MODULE_15__/* .SecurityMessages */ .b.filter((x)=>x.condition(tokenSecurity) && x.level !== _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.Safe && !x.shouldHide(tokenSecurity) && x.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High).sort((a, z)=>{
        if (a.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High) return -1;
        if (z.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High) return 1;
        return 0;
    }).length > 0;
};
const getMessageList = (tokenSecurity)=>tokenSecurity.trust_list === '1' ? [] : _rules_js__WEBPACK_IMPORTED_MODULE_15__/* .SecurityMessages */ .b.filter((x)=>x.condition(tokenSecurity) && x.level !== _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.Safe && !x.shouldHide(tokenSecurity)).sort((a, z)=>{
        if (a.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High) return -1;
        if (z.level === _types_js__WEBPACK_IMPORTED_MODULE_14__/* .SecurityMessageLevel */ .L.High) return 1;
        return 0;
    });


/***/ }),

/***/ 96907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ SecurityMessages)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26235);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99501);


const percentageToNumber = (value)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((value ?? '').replace('%', '')) * 100;
const isUnset = (name)=>(info)=>info[name] === undefined;
const SecurityMessages = [
    // open source
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_open_source === '1',
        titleKey: 'risk_contract_source_code_verified_title',
        messageKey: 'risk_contract_source_code_verified_body',
        shouldHide: isUnset('is_open_source')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>info.is_open_source === '0',
        titleKey: 'risk_contract_source_code_not_verified_title',
        messageKey: 'risk_contract_source_code_not_verified_body',
        shouldHide: isUnset('is_open_source')
    },
    // proxy
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.is_proxy === '1',
        titleKey: 'risk_proxy_contract_title',
        messageKey: 'risk_proxy_contract_body',
        shouldHide: isUnset('is_proxy')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_proxy === '0',
        titleKey: 'risk_no_proxy_title',
        messageKey: 'risk_no_proxy_body',
        shouldHide: isUnset('is_proxy')
    },
    // mint
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_mintable === '0',
        titleKey: 'risk_no_mint_function_title',
        messageKey: 'risk_no_mint_function_body',
        shouldHide: isUnset('is_mintable')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.is_mintable === '1',
        titleKey: 'risk_mint_function_title',
        messageKey: 'risk_mint_function_body',
        shouldHide: isUnset('is_mintable')
    },
    // owner change balance
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.owner_change_balance === '0',
        titleKey: 'risk_owner_can_not_change_balance_title',
        messageKey: 'risk_owner_can_not_change_balance_body',
        shouldHide: isUnset('owner_change_balance')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.owner_change_balance === '1',
        titleKey: 'risk_owner_change_balance_title',
        messageKey: 'risk_owner_change_balance_body',
        shouldHide: isUnset('owner_change_balance')
    },
    // can take back ownership
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.can_take_back_ownership === '0',
        titleKey: 'risk_no_can_take_back_ownership_title',
        messageKey: 'risk_no_can_take_back_ownership_body',
        shouldHide: isUnset('can_take_back_ownership')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Contract,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.can_take_back_ownership === '1',
        titleKey: 'risk_can_take_back_ownership_title',
        messageKey: 'risk_can_take_back_ownership_body',
        shouldHide: isUnset('can_take_back_ownership')
    },
    // buy tax
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>percentageToNumber(info.buy_tax) < 10,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('buy_tax')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>percentageToNumber(info.buy_tax) >= 10 && percentageToNumber(info.buy_tax) < 50,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('buy_tax')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>percentageToNumber(info.buy_tax) >= 50,
        titleKey: 'risk_buy_tax_title',
        messageKey: 'risk_buy_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.buy_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('buy_tax')
    },
    // sell tax
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>percentageToNumber(info.sell_tax) < 10,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('sell_tax')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>percentageToNumber(info.sell_tax) >= 10 && percentageToNumber(info.sell_tax) < 50,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('sell_tax')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>percentageToNumber(info.sell_tax) >= 50,
        titleKey: 'risk_sell_tax_title',
        messageKey: 'risk_sell_tax_body',
        i18nParams: (info)=>({
                rate: `${percentageToNumber(info.sell_tax)}%`,
                quantity: ''
            }),
        shouldHide: isUnset('sell_tax')
    },
    // honeypot
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_honeypot === '0',
        titleKey: 'risk_is_not_honeypot_title',
        messageKey: 'risk_is_not_honeypot_body',
        shouldHide: isUnset('is_honeypot')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>info.is_honeypot === '1',
        titleKey: 'risk_is_honeypot_title',
        messageKey: 'risk_is_honeypot_body',
        shouldHide: isUnset('is_honeypot')
    },
    // transfer_pausable
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.transfer_pausable === '0',
        titleKey: 'risk_no_code_transfer_pausable_title',
        messageKey: 'risk_no_code_transfer_pausable_title',
        shouldHide: isUnset('transfer_pausable')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.transfer_pausable === '1',
        titleKey: 'risk_transfer_pausable_title',
        messageKey: 'risk_transfer_pausable_body',
        shouldHide: isUnset('transfer_pausable')
    },
    // anti whale
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_anti_whale === '0',
        titleKey: 'risk_is_no_anti_whale_title',
        messageKey: 'risk_is_no_anti_whale_body',
        shouldHide: isUnset('is_anti_whale')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.is_anti_whale === '1',
        titleKey: 'risk_is_anti_whale_title',
        messageKey: 'risk_is_anti_whale_body',
        shouldHide: isUnset('is_anti_whale')
    },
    // slippage modifiable
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.slippage_modifiable === '0',
        titleKey: 'risk_not_slippage_modifiable_title',
        messageKey: 'risk_not_slippage_modifiable_body',
        shouldHide: isUnset('slippage_modifiable')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.slippage_modifiable === '1',
        titleKey: 'risk_slippage_modifiable_title',
        messageKey: 'risk_slippage_modifiable_body',
        shouldHide: isUnset('slippage_modifiable')
    },
    // black list
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_blacklisted === '0',
        titleKey: 'risk_not_is_blacklisted_title',
        messageKey: 'risk_not_is_blacklisted_body',
        shouldHide: isUnset('is_blacklisted')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.is_blacklisted === '1',
        titleKey: 'risk_is_blacklisted_title',
        messageKey: 'risk_is_blacklisted_body',
        shouldHide: isUnset('is_blacklisted')
    },
    // white list
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_whitelisted === '0',
        titleKey: 'risk_not_is_whitelisted_title',
        messageKey: 'risk_not_is_whitelisted_body',
        shouldHide: isUnset('is_whitelisted')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Transaction,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Medium,
        condition: (info)=>info.is_whitelisted === '1',
        titleKey: 'risk_is_whitelisted_title',
        messageKey: 'risk_is_whitelisted_body',
        shouldHide: isUnset('is_whitelisted')
    },
    // true token
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Info,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_true_token === '1',
        titleKey: 'risk_is_true_token_title',
        messageKey: 'risk_is_true_token_body',
        shouldHide: isUnset('is_true_token')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Info,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>info.is_true_token === '0',
        titleKey: 'risk_not_is_true_token_title',
        messageKey: 'risk_not_is_true_token_body',
        shouldHide: isUnset('is_true_token')
    },
    // Airdrop scam
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Info,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.Safe,
        condition: (info)=>info.is_airdrop_scam === '0',
        titleKey: 'risk_is_airdrop_scam_title',
        messageKey: 'risk_is_airdrop_scam_body',
        shouldHide: isUnset('is_airdrop_scam')
    },
    {
        type: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityType */ .a.Info,
        level: _types_js__WEBPACK_IMPORTED_MODULE_1__/* .SecurityMessageLevel */ .L.High,
        condition: (info)=>info.is_airdrop_scam === '1',
        titleKey: 'risk_not_is_airdrop_scam_title',
        messageKey: 'risk_not_is_airdrop_scam_body',
        shouldHide: isUnset('is_airdrop_scam')
    }
];


/***/ }),

/***/ 99501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ SecurityMessageLevel),
/* harmony export */   a: () => (/* binding */ SecurityType)
/* harmony export */ });
var SecurityMessageLevel;
(function(SecurityMessageLevel) {
    SecurityMessageLevel["High"] = "High";
    SecurityMessageLevel["Medium"] = "Medium";
    SecurityMessageLevel["Safe"] = "Safe";
})(SecurityMessageLevel || (SecurityMessageLevel = {}));
var SecurityType;
(function(SecurityType) {
    SecurityType["Contract"] = 'contract-security';
    SecurityType["Transaction"] = 'transaction-security';
    SecurityType["Info"] = 'info-security';
})(SecurityType || (SecurityType = {}));


/***/ }),

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ Lido)
});

// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Lido/constants.ts

const LIDO_STETH_APR_API = (0,resolver/* resolveCrossOriginURL */.nX)('https://stake.lido.fi/api/sma-steth-apr');

;// CONCATENATED MODULE: ./packages/web3-providers/src/Lido/index.ts


class Lido {
    static async getStEthAPR() {
        const apr = await (0,fetchJSON/* fetchJSON */.ZV)(LIDO_STETH_APR_API, {
            mode: 'cors'
        });
        return apr.toString();
    }
}


/***/ }),

/***/ 94114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ NFTScanTrending_EVM)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72845);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54169);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62649);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37049);
/* harmony import */ var _Trending_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35523);
/* harmony import */ var _helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68208);
/* harmony import */ var _helpers_getContractSymbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95794);
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55859);
/* harmony import */ var _LooksRare_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33215);
/* harmony import */ var _OpenSea_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65680);
/* harmony import */ var _helpers_getPaymentToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34936);













class NFTScanTrendingAPI_EVM {
    async getCollection(chainId, id) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/v2/collections/:address', {
            address: id,
            contract_address: id
        });
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        return response?.data;
    }
    async searchNFTCollection(chainId, keyword) {
        if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainId */ .J)(chainId)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        const path = '/api/v2/collections/filters';
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path, {
            method: 'POST',
            body: JSON.stringify({
                name: keyword,
                symbol: keyword,
                sort_direction: 'desc',
                sort_field: 'floor_price',
                name_fuzzy_search: true
            })
        });
        return response?.data ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
    }
    async getCollectionOverview(chainId, id) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/v2/statistics/collection/:address', {
            address: id
        });
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        if (!response?.data) return;
        return response.data;
    }
    async getAssetsBatch(chainId, list) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/v2/assets/batch', {});
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path, {
            method: 'POST',
            body: JSON.stringify({
                contract_address_with_token_id_list: list
            })
        });
        if (!response?.data) return;
        return response.data.map((x)=>(0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .createNonFungibleAsset */ .HN)(chainId, x));
    }
    async getCoinActivities(chainId, id, cursor) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/v2/transactions/:contract', {
            contract: id,
            cursor,
            limit: 50
        });
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        if (!response?.data?.content) return;
        const batchQueryList = response?.data?.content.map((x)=>({
                contract_address: x.contract_address,
                token_id: x.token_id ?? ''
            }));
        const assetsBatchResponse = await this.getAssetsBatch(chainId, batchQueryList);
        return {
            cursor: response.data.next,
            content: response.data.content.map((x)=>{
                const asset = assetsBatchResponse?.find((y)=>y.tokenId === x.token_id);
                return {
                    ...x,
                    imageURL: asset?.metadata?.imageURL ?? '',
                    transaction_link: `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId)}/${x.hash}`,
                    trade_token: (0,_helpers_getPaymentToken_js__WEBPACK_IMPORTED_MODULE_6__/* .getPaymentToken */ .W)(chainId, {
                        symbol: x.trade_symbol
                    })
                };
            })
        };
    }
    async getCollectionTrending(chainId, address, range) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/v2/statistics/collection/trending/:address', {
            address,
            time: range
        });
        const response = await (0,_helpers_EVM_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        return response?.data ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
    }
    getAllCoins() {
        return Promise.resolve(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP);
    }
    async getCoinsByKeyword(chainId, keyword) {
        if (!keyword || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainId */ .J)(chainId)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
        const nfts = await this.searchNFTCollection(chainId, keyword);
        const coins = nfts.map((nft)=>({
                id: nft.contract_address,
                name: nft.name,
                symbol: nft.symbol,
                type: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .TokenType */ .iv.NonFungible,
                address: nft.contract_address,
                contract_address: nft.contract_address,
                image_url: nft.logo_url
            }));
        return coins.slice(0, _Trending_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .COIN_RECOMMENDATION_SIZE */ .Qx);
    }
    getCoinInfoByAddress(address) {
        throw new Error('To be implemented.');
    }
    async getCoinPriceStats(chainId, coinId, currency, days) {
        const range = (0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .resolveNFTScanRange */ .xo)(days);
        const records = await this.getCollectionTrending(chainId, coinId, range);
        return records.map((x)=>[
                x.begin_timestamp,
                x.average_price
            ]);
    }
    async getCoinTrending(chainId, /** address as id */ id, currency) {
        const collection = await this.getCollection(chainId, id);
        if (!collection) {
            throw new Error(`NFTSCAN: Can not find token by id ${id}`);
        }
        const address = collection.contract_address;
        const [symbol, openseaStats, looksrareStats] = await Promise.all([
            (0,_helpers_getContractSymbol_js__WEBPACK_IMPORTED_MODULE_9__/* .getContractSymbol */ .l)(chainId, id),
            _OpenSea_index_js__WEBPACK_IMPORTED_MODULE_10__/* .OpenSea */ .N.getStats(address).catch(()=>null),
            _LooksRare_index_js__WEBPACK_IMPORTED_MODULE_11__/* .LooksRare */ .X.getStats(address).catch(()=>null)
        ]);
        const tickers = (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)([
            openseaStats ? {
                logo_url: _masknet_icons__WEBPACK_IMPORTED_MODULE_13__/* .open_sea_url */ .Khl().toString(),
                // TODO
                trade_url: `https://opensea.io/assets/ethereum/${address}`,
                market_name: _helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .NonFungibleMarketplace */ .vo.OpenSea,
                volume_24h: openseaStats.volume24h,
                floor_price: openseaStats.floorPrice,
                price_symbol: collection.price_symbol,
                sales_24: openseaStats.count24h
            } : null,
            looksrareStats ? {
                logo_url: _masknet_icons__WEBPACK_IMPORTED_MODULE_13__/* .looks_rare_url */ .bGE().toString(),
                trade_url: `https://looksrare.org/collections/${address}`,
                market_name: _helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .NonFungibleMarketplace */ .vo.LooksRare,
                volume_24h: looksrareStats.volume24h,
                floor_price: looksrareStats.floorPrice,
                price_symbol: collection.price_symbol,
                sales_24: looksrareStats.count24h
            } : null
        ]);
        return {
            lastUpdated: new Date().toJSON(),
            dataProvider: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .SourceType */ .PO.NFTScan,
            contracts: [
                {
                    chainId,
                    address,
                    pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM
                }
            ],
            currency,
            coin: {
                id,
                name: collection.name,
                symbol,
                address,
                contract_address: address,
                type: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .TokenType */ .iv.NonFungible,
                description: collection.description,
                image_url: collection.logo_url,
                home_urls: (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)([
                    collection.website ? collection.website : `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId)}/${address}`
                ]),
                nftscan_url: `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId)}/${address}`,
                community_urls: [
                    {
                        type: 'twitter',
                        link: collection.twitter && (collection.twitter.startsWith('https://twitter.com/') ? collection.twitter : `https://twitter.com/${collection.twitter}`)
                    },
                    {
                        type: 'facebook',
                        // TODO format of facebook url is unknown
                        link: null
                    },
                    {
                        type: 'discord',
                        link: collection.discord
                    },
                    {
                        type: 'instagram',
                        link: collection.instagram && (collection.instagram.startsWith('https://instagram.com/') ? collection.instagram : `https://www.instagram.com/${collection.instagram}`)
                    },
                    {
                        type: 'medium',
                        link: collection.medium && (collection.medium.startsWith('https://instagram.com/@') ? collection.medium : `https://medium.com/@${collection.medium}`)
                    },
                    {
                        type: 'reddit',
                        link: collection.reddit
                    },
                    {
                        type: 'telegram',
                        link: collection.telegram
                    },
                    {
                        type: 'youtube',
                        link: collection.youtube
                    },
                    {
                        type: 'github',
                        link: collection.github
                    }
                ].filter((x)=>x.link)
            },
            market: {
                total_supply: collection.items_total,
                current_price: collection.floor_price ? collection.floor_price.toString() : openseaStats?.floorPrice.toString() ?? '',
                floor_price: collection.floor_price?.toString(),
                owners_count: collection.owners_total,
                price_symbol: collection.price_symbol || 'ETH',
                royalty: collection.royalty?.toString()
            },
            tickers
        };
    }
    getCoinMarketInfo(symbol) {
        throw new Error('Method not implemented.');
    }
}
const NFTScanTrending_EVM = new NFTScanTrendingAPI_EVM();


/***/ }),

/***/ 3487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NFTScanTrending_Solana)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72845);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62649);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55859);
/* harmony import */ var _helpers_Solana_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91549);






class NFTScanTrendingAPI_Solana {
    async getCollection(chainId, id) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/sol/collections/:collection', {
            collection: id
        });
        const response = await (0,_helpers_Solana_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        return response?.data;
    }
    async getCollectionOverview(chainId, id) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/sol/statistics/ranking/trade', {});
        const response = await (0,_helpers_Solana_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        if (!response?.data) return;
        return response.data.find((x)=>x.collection === id);
    }
    async getCoinActivities(chainId, id, cursor) {
        const path = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)('/api/sol/transactions/collection/:collection', {
            collection: id,
            cursor,
            limit: 50
        });
        const response = await (0,_helpers_Solana_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchFromNFTScanV2 */ .kB)(chainId, path);
        if (!response?.data?.content) return;
        return {
            cursor: response.data.next,
            content: response.data.content.map((x)=>{
                return {
                    ...x,
                    imageURL: '',
                    transaction_link: `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA, chainId)}/${x.hash}`
                };
            })
        };
    }
    getAllCoins() {
        throw new Error('To be implemented.');
    }
    async getCoinsByKeyword(chainId, keyword) {
        throw new Error('To be implemented.');
    }
    getCoinInfoByAddress(address) {
        throw new Error('To be implemented.');
    }
    async getCoinPriceStats(chainId, coinId, currency, days) {
        throw new Error('Method not implemented.');
    }
    async getCoinTrending(chainId, /** address as id */ id, currency) {
        const collection = await this.getCollection(chainId, id);
        if (!collection) throw new Error(`NFTSCAN: Can not find token by id ${id}`);
        const address = collection.contract_address;
        return {
            lastUpdated: new Date().toJSON(),
            dataProvider: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SourceType */ .PO.NFTScan,
            contracts: [
                {
                    chainId,
                    address,
                    pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA
                }
            ],
            currency,
            coin: {
                id: collection.name,
                name: collection.name,
                symbol: '',
                address,
                contract_address: address,
                type: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .TokenType */ .iv.NonFungible,
                description: collection.description,
                image_url: collection.logo_url,
                home_urls: (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)([
                    collection.website ? collection.website : `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA, chainId)}/${address}`
                ]),
                nftscan_url: `${(0,_helpers_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .resolveNFTScanHostName */ .gr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_SOLANA, chainId)}/${address}`,
                community_urls: [
                    {
                        type: 'twitter',
                        link: collection.twitter && (collection.twitter.startsWith('https://twitter.com/') ? collection.twitter : `https://twitter.com/${collection.twitter}`)
                    },
                    {
                        type: 'facebook',
                        // TODO format of facebook url is unknown
                        link: null
                    },
                    {
                        type: 'discord',
                        link: collection.discord
                    },
                    {
                        type: 'instagram',
                        link: collection.instagram && (collection.instagram.startsWith('https://instagram.com/') ? collection.instagram : `https://www.instagram.com/${collection.instagram}`)
                    },
                    {
                        type: 'medium',
                        link: collection.medium && (collection.medium.startsWith('https://instagram.com/@') ? collection.medium : `https://medium.com/@${collection.medium}`)
                    },
                    {
                        type: 'reddit',
                        link: collection.reddit
                    },
                    {
                        type: 'telegram',
                        link: collection.telegram
                    },
                    {
                        type: 'youtube',
                        link: collection.youtube
                    },
                    {
                        type: 'github',
                        link: collection.github
                    }
                ].filter((x)=>x.link)
            },
            market: {
                total_supply: collection.items_total,
                current_price: collection.floor_price.toString(),
                floor_price: collection.floor_price.toString(),
                highest_price: undefined,
                owners_count: collection.owners_total,
                price_symbol: collection.price_symbol || 'SOL',
                royalty: collection.royalty?.toString(),
                total_24h: undefined,
                volume_24h: undefined,
                average_volume_24h: undefined,
                volume_all: undefined
            },
            tickers: []
        };
    }
    getCoinMarketInfo(symbol) {
        throw new Error('Method not implemented.');
    }
}
const NFTScanTrending_Solana = new NFTScanTrendingAPI_Solana();


/***/ }),

/***/ 55859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gr: () => (/* binding */ resolveNFTScanHostName),
/* harmony export */   vo: () => (/* binding */ NonFungibleMarketplace),
/* harmony export */   xo: () => (/* binding */ resolveNFTScanRange)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74170);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89087);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);


function resolveNFTScanHostName(pluginId, chainId) {
    if (pluginId === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return 'https://solana.nftscan.com';
    switch(chainId){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet:
            return 'https://www.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Matic:
            return 'https://polygon.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.BSC:
            return 'https://bnb.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Arbitrum:
            return 'https://arbitrum.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Avalanche:
            return 'https://avax.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Optimism:
            return 'https://optimism.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.xDai:
            return 'https://gnosis.nftscan.com';
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Moonbeam:
            return 'https://moonbeam.nftscan.com';
        default:
            return '';
    }
}
const resolveNFTScanRange = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.MAX]: 'all',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.ONE_DAY]: '1d',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.ONE_WEEK]: '7d',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.ONE_MONTH]: '30d',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.THREE_MONTHS]: '90d',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Days */ .h.ONE_YEAR]: '1y'
}, // NFTScan will discard range unrecognized range
()=>'1d');
var NonFungibleMarketplace;
(function(NonFungibleMarketplace) {
    NonFungibleMarketplace["OpenSea"] = "OpenSea";
    NonFungibleMarketplace["LooksRare"] = "LooksRare";
})(NonFungibleMarketplace || (NonFungibleMarketplace = {}));


/***/ }),

/***/ 89524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ NFTSpam)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11834);


/** @example "2023-08-10T19:25:54Z" */ /** @example "2023-08-10T19:25:54Z" */ /**
 * If not provided, the default status and source are both set to "all"
 */ const ENDPOINT = 'http://nfttransferlb-152229038.us-east-1.elb.amazonaws.com/v1/nfts/report/spam';
const PAGE_SIZE = 10;
class NFTSpam {
    static async report(params) {
        const res = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchJSON */ .ZV)(ENDPOINT, {
            method: 'post',
            body: JSON.stringify(params)
        });
        return res;
    }
    static async getReports(params, indicator) {
        const url = (0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(ENDPOINT, {
            params,
            page: params.page ?? indicator?.index,
            page_size: params.page_size ?? PAGE_SIZE
        });
        return (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_1__/* .fetchJSON */ .ZV)(url);
    }
}


/***/ }),

/***/ 98773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Snapshot)
/* harmony export */ });
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11834);

async function fetchFromGraphql(query) {
    const { data } = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchCachedJSON */ .MP)(`https://cors-next.r2d2.to/?https://hub.snapshot.org/graphql?query=${encodeURIComponent(query)}`, {
        cache: 'default'
    });
    return data;
}
class Snapshot {
    static async getProposalListBySpace(spaceId, strategyName) {
        const queryProposal = `
            query {
                proposals (
                    first: 1000,
                    skip: 0,
                    where: {
                        space_in: ["${spaceId}"],
                        state: "all"
                    },
                    orderBy: "created",
                    orderDirection: desc
                ) {
                id
                title
                body
                choices
                start
                end
                snapshot
                state
                scores
                votes
                scores_state
                strategies {
                    network
                    params
                }
                scores_by_strategy
                scores_total
                scores_updated
                author
                space {
                    id
                    name
                }
                }
            }
        `;
        const { proposals } = await fetchFromGraphql(queryProposal);
        return proposals.map((proposal)=>{
            const validStrategy = proposal.strategies.find((x)=>{
                return !x.params.symbol?.includes('delegated');
            });
            const choicesWithScore = proposal.choices.map((x, i)=>({
                    choice: x,
                    score: proposal.scores[i]
                })).sort((a, b)=>(b.score ?? 0) - (a.score ?? 0));
            return {
                ...proposal,
                strategyName: validStrategy?.params.symbol ?? strategyName ?? proposal.space?.name,
                choicesWithScore
            };
        });
    }
    static async getSpace(spaceId) {
        const querySpace = `
            query {
                space(id: "${spaceId}") {
                    members
                    symbol
                    followersCount
                }
            }
        `;
        const { space } = await fetchFromGraphql(querySpace);
        return space;
    }
    static async getCurrentAccountVote(proposalId, totalVotes, account) {
        const allSettled = await Promise.allSettled(Array.from(Array(Math.ceil(totalVotes / 1000))).map(async (x, i)=>{
            const queryCurrentAccountVote = `
                    query {
                        votes (
                            first: 1000
                            skip: ${i * 1000}
                            where: {
                                proposal: "${proposalId}",
                                voter:"${account}"
                            }
                            orderBy: "created",
                            orderDirection: desc
                        ) {
                            choice
                        }
                    }
                `;
            const { votes } = await fetchFromGraphql(queryCurrentAccountVote);
            return votes[0];
        }));
        const result = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : undefined).filter(Boolean);
        return result.length ? result[0] : undefined;
    }
    static async getFollowingSpaceIdList(account) {
        if (!account) return [];
        const query = `
            query {
                follows(
                    first: 1000,
                    where: {
                        follower: "${account}"
                    }
                ) {
                    space {
                        id
                    }
                }
            }
        `;
        const { follows } = await fetchFromGraphql(query);
        return follows.map((x)=>x.space.id);
    }
}


/***/ }),

/***/ 94348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TheGraphRedPacket)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66894);
/* harmony import */ var _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66979);
/* harmony import */ var _helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11834);



class TheGraphRedPacket {
    static async getHistories(chainId, senderAddress, contractAddress) {
        if (!senderAddress || !contractAddress) return;
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchJSON */ .ZV)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .REDPACKET_API_URL */ .Ul, {
            method: 'POST',
            body: JSON.stringify({
                query: `{
                    redPackets(where: { creator_address: "${senderAddress}" }) {
                          creator {
                              address
                          }
                          message
                          block_number,
                          creation_time,
                          duration,
                          shares,
                          name,
                          token {
                              address
                          },
                          total,
                          txid,
                          is_random
                          id,
                      }
                  }`
            })
        });
        if (!response?.data?.redPackets?.length) return;
        return response.data.redPackets.map((x)=>({
                contract_address: contractAddress,
                txid: x.txid,
                id: x.id,
                chainId,
                shares: Number(x.shares),
                total: x.total,
                duration: Number(x.duration) * 1000,
                block_number: Number(x.block_number),
                contract_version: 4,
                network: _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainResolver */ .iv.networkType(chainId),
                token_address: x.token.address,
                sender: {
                    address: senderAddress,
                    name: x.name,
                    message: x.message
                },
                rpid: '',
                creation_time: Number(x.creation_time),
                total_remaining: '',
                password: '',
                is_random: x.is_random
            }));
    }
    static async getNFTHistories(chainId, senderAddress, contractAddress) {
        if (!senderAddress || !contractAddress) return;
        const response = await (0,_helpers_fetchJSON_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchJSON */ .ZV)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .NFT_REDPACKET_API_URL */ .vX, {
            method: 'POST',
            body: JSON.stringify({
                query: `{
                    nftredPackets(where: { creator_address: "${senderAddress}" }) {
                        id
                        txid
                        shares
                        token_ids
                        token_contract {
                            address
                        }
                        duration
                        creation_time
                        creator {
                            address
                        }
                        name
                        message
                        id
                    }
                }`
            })
        });
        if (!response?.data?.nftredPackets?.length) return;
        return response.data.nftredPackets.map((x)=>({
                id: x.id,
                chainId,
                contract_address: contractAddress,
                txid: x.txid,
                contract_version: 1,
                shares: x.shares,
                network: _Web3_EVM_apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainResolver */ .iv.networkType(chainId),
                token_address: x.token_contract.address,
                sender: {
                    address: x.creator.address,
                    name: x.name,
                    message: x.message
                },
                duration: x.duration * 1000,
                token_ids: x.token_ids,
                // #region Retrieve at NFT History List Item.
                rpid: '',
                creation_time: 0,
                // #endregion
                // #region Retrieve from database
                password: ''
            }));
    }
} // #endregion


/***/ }),

/***/ 66894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T5: () => (/* binding */ API_URL),
/* harmony export */   Ul: () => (/* binding */ REDPACKET_API_URL),
/* harmony export */   vX: () => (/* binding */ NFT_REDPACKET_API_URL)
/* harmony export */ });
const API_URL = 'https://api.thegraph.com/subgraphs/name/ensdomains/ens';
const REDPACKET_API_URL = 'https://api.thegraph.com/subgraphs/name/dimensiondev/mask-red-packet-polygon';
const NFT_REDPACKET_API_URL = 'https://api.thegraph.com/subgraphs/name/dimensiondev/mask-nft-red-packet-polygon';


/***/ }),

/***/ 35523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jm: () => (/* binding */ CURRENCIES_MAP),
/* harmony export */   Qx: () => (/* binding */ COIN_RECOMMENDATION_SIZE),
/* harmony export */   r4: () => (/* binding */ VALID_TOP_RANK)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97834);



// the size of coins to recommend when users search a keyword
const COIN_RECOMMENDATION_SIZE = 10;
// all coins stay after the valid top rank will be ignored.
const VALID_TOP_RANK = 5000;
const CURRENCIES_MAP = {
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.CoinGecko]: [
        {
            id: 'usd',
            name: 'USD',
            symbol: '$',
            description: 'Unite State Dollar'
        }
    ],
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.CoinMarketCap]: [
        {
            id: '2781',
            name: 'USD',
            symbol: '$',
            description: 'Unite State Dollar'
        }
    ],
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.NFTScan]: [
        {
            id: 'eth',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet,
            name: '\u039E',
            symbol: '\u039E',
            description: 'Ethereum'
        },
        {
            id: 'Matic',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Matic,
            name: 'Matic',
            symbol: 'Matic',
            description: 'Matic'
        },
        {
            id: 'matic',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.BSC,
            name: 'BNB',
            symbol: 'BNB',
            description: 'BNB'
        },
        {
            id: 'arbitrum',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Arbitrum,
            name: 'Arbitrum',
            symbol: 'Arbitrum',
            description: 'Arbitrum'
        },
        {
            id: 'solana',
            chainId: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
            name: '\u25CE',
            symbol: '\u25CE',
            description: 'Solana'
        },
        {
            id: 'optimism',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Optimism,
            name: 'Optimism',
            symbol: 'Optimism',
            description: 'Optimism'
        },
        {
            id: 'avalanche',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Avalanche,
            name: 'Avalanche',
            symbol: 'Avalanche',
            description: 'Avalanche'
        },
        {
            id: 'moonbeam',
            chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Moonbeam,
            name: 'Moonbeam',
            symbol: 'Moonbeam',
            description: 'Moonbeam'
        }
    ],
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.UniswapInfo]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.X2Y2]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Chainbase]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Zerion]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Rarible]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.OpenSea]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Alchemy_EVM]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.LooksRare]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Zora]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Gem]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.GoPlus]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Rabby]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Approval]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.R2D2]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.DeBank]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Flow]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Solana]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.RSS3]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Alchemy_FLOW]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.MagicEden]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Element]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Solsea]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Solanart]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.RaritySniper]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.TraitSniper]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.CF]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.OKX]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Uniswap]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.NFTX]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.Etherscan]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.CryptoPunks]: undefined,
    [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .SourceType */ .PO.SimpleHash]: undefined
};


/***/ }),

/***/ 67876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ isMirroredKeyword),
/* harmony export */   DF: () => (/* binding */ getCommunityLink),
/* harmony export */   zC: () => (/* binding */ getCurrency)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35523);
/* harmony import */ var _mirrored_tokens_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45397);



function isMirroredKeyword(symbol) {
    return _mirrored_tokens_json__WEBPACK_IMPORTED_MODULE_0__.map((x)=>x.symbol).some((x)=>x.toUpperCase() === symbol.toUpperCase());
}
function getCommunityLink(links) {
    return links.map((x)=>{
        if (x.includes('twitter')) return {
            type: 'twitter',
            link: x
        };
        if (x.includes('t.me')) return {
            type: 'telegram',
            link: x
        };
        if (x.includes('facebook')) return {
            type: 'facebook',
            link: x
        };
        if (x.includes('discord')) return {
            type: 'discord',
            link: x
        };
        if (x.includes('reddit')) return {
            type: 'reddit',
            link: x
        };
        return {
            type: 'other',
            link: x
        };
    });
}
function getCurrency(chainId, dataProvider) {
    if (!dataProvider) return undefined;
    const currencies = _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .CURRENCIES_MAP */ .Jm[dataProvider];
    if (!currencies) return;
    return chainId && dataProvider === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .SourceType */ .PO.NFTScan ? currencies.find((x)=>x.chainId === chainId) : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .CURRENCIES_MAP */ .Jm[dataProvider]?.[0];
}


/***/ }),

/***/ 50247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ Web3Bio)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/index.ts
var NextID = __webpack_require__(3765);
// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3Bio/constants.ts
const WEB3_BIO_ROOT_URL = 'https://cors-next.r2d2.to?https://web3.bio/api/profile';

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3Bio/index.ts




class Web3Bio {
    static fetchFromWeb3Bio(request, init) {
        return (0,fetchJSON/* fetchCachedJSON */.MP)(request, init);
    }
    static async queryProfilesByAddress(address) {
        const { links = constants/* EMPTY_LIST */.rP } = await this.fetchFromWeb3Bio((0,dist/* default */.ZP)(WEB3_BIO_ROOT_URL, '/ens/:address', {
            address
        }));
        const BindingProofs = Object.entries(links).map((x)=>{
            const platform = x[0];
            if (!Object.values(types/* NextIDPlatform */.V).includes(platform)) return;
            const { handle, link } = x[1];
            return (0,NextID/* createBindingProofFromProfileQuery */.SS)(platform, handle, handle, link);
        }).filter(Boolean);
        return BindingProofs;
    }
}


/***/ }),

/***/ 46854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AA: () => (/* binding */ USDT),
/* harmony export */   Dn: () => (/* binding */ APE),
/* harmony export */   FX: () => (/* binding */ WNATIVE),
/* harmony export */   HL: () => (/* binding */ WNATIVE_ONLY),
/* harmony export */   Hh: () => (/* binding */ fUSDT),
/* harmony export */   J6: () => (/* binding */ maUSDC),
/* harmony export */   Lq: () => (/* binding */ DAIe),
/* harmony export */   MI: () => (/* binding */ WBTCe),
/* harmony export */   ML: () => (/* binding */ WBTC),
/* harmony export */   OP: () => (/* binding */ OP),
/* harmony export */   PX: () => (/* binding */ CUSD),
/* harmony export */   Th: () => (/* binding */ CEUR),
/* harmony export */   Xm: () => (/* binding */ xYUMI),
/* harmony export */   YX: () => (/* binding */ RARI),
/* harmony export */   _$: () => (/* binding */ YUMI),
/* harmony export */   _S: () => (/* binding */ STETH),
/* harmony export */   _c: () => (/* binding */ USDTe),
/* harmony export */   bi: () => (/* binding */ UST),
/* harmony export */   c0: () => (/* binding */ ETHER),
/* harmony export */   eJ: () => (/* binding */ TATR),
/* harmony export */   gn: () => (/* binding */ USDC),
/* harmony export */   h1: () => (/* binding */ DAI),
/* harmony export */   ik: () => (/* binding */ HUSD),
/* harmony export */   k: () => (/* binding */ VERSA),
/* harmony export */   lB: () => (/* binding */ WANNA),
/* harmony export */   lK: () => (/* binding */ NFTX),
/* harmony export */   lz: () => (/* binding */ BUSD),
/* harmony export */   nB: () => (/* binding */ BTCB),
/* harmony export */   s5: () => (/* binding */ AMPL),
/* harmony export */   tB: () => (/* binding */ USDCe),
/* harmony export */   uj: () => (/* binding */ RUNE),
/* harmony export */   xZ: () => (/* binding */ QUICK),
/* harmony export */   yI: () => (/* binding */ PNG)
/* harmony export */ });
/* unused harmony exports COMP, MKR, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YFI, CAKE, JOE, VIPER, OPENX, JEWEL */
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24770);
/* harmony import */ var _helpers_token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48289);
/* harmony import */ var _descriptors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3187);



const APE = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('APE_ADDRESS', 'ApeCoin', 'APE', 18);
const USDC = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USC Coin', 'USDC', 6);
const USDCe = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('USDC_ADDRESS', 'USD Coin', 'USDCe', 6);
const USDT = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const USDTe = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('USDT_ADDRESS', 'Tether USD', 'USDT.e', 6);
const fUSDT = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('fUSDT_ADDRESS', 'Frapped USDT', 'fUSDT', 6);
const HUSD = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const DAI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const DAIe = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI.e', 18);
const AMPL = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const TATR = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('TART_ADDRESS', 'TATR tech', 'TATR', 18);
const ETHER = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WANNA = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('WANNA_ADDRESS', 'Wannaswap', 'WANNA', 18);
const WBTC = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const WBTCe = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTCe', 18);
const IGG = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const RUNE = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
const CUSD = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('cUSD_ADDRESS', 'Celo Dollar', 'cUSD', 18);
const CEUR = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('cEUR_ADDRESS', 'Celo Euro', 'cEUR', 18);
const JOE = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('JOE_ADDRESS', 'JoeToken', 'JOE', 18);
const PNG = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('PNG_ADDRESS', 'Pangolin', 'PNG', 18);
const VERSA = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('VERSA_ADDRESS', 'Versa Finance', 'VERSA', 18);
const VIPER = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('VIPER_ADDRESS', 'Viper', 'VIPER', 18);
const OPENX = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('OPENX_ADDRESS', 'OpenSwap Token', 'OpenX', 18);
const JEWEL = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('JEWEL_ADDRESS', 'Jewels', 'JEWEL', 18);
const YUMI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('YUMI_ADDRESS', 'YumiSwap Token', 'YUMI', 18);
const xYUMI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('xYUMI_ADDRESS', 'Yumi Staking Token', 'xYUMI', 18);
const OP = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('OP_ADDRESS', 'Optimism', 'OP', 18);
const RARI = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('RARI_ADDRESS', 'Rarible', 'RARI', 18);
const getNativeCurrency = (chainId)=>{
    return _descriptors_js__WEBPACK_IMPORTED_MODULE_1__/* .CHAIN_DESCRIPTORS */ .Q_.find((x)=>x.chainId === chainId)?.nativeCurrency;
};
const WNATIVE = (0,_helpers_token_js__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vs)('WNATIVE_ADDRESS', (chainId)=>`Wrapped ${getNativeCurrency(chainId)?.name ?? 'Ether'}`, (chainId)=>`W${getNativeCurrency(chainId)?.symbol ?? 'ETH'}`, 18);
const WNATIVE_ONLY = {
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Ropsten]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Ropsten]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Rinkeby]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Rinkeby]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Kovan]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Kovan]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Gorli]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Gorli]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.BSC]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.BSC]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.BSCT]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.BSCT]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Matic]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Matic]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mumbai]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mumbai]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Arbitrum]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Arbitrum]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Arbitrum_Rinkeby]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Arbitrum_Rinkeby]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.xDai]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.xDai]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Avalanche]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Avalanche]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Avalanche_Fuji]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Avalanche_Fuji]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Celo]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Celo]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Fantom]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Fantom]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Aurora]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Aurora]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Aurora_Testnet]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Aurora_Testnet]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Optimism]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Optimism]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Optimism_Goerli]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Optimism_Goerli]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Astar]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Astar]
    ],
    [_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Scroll]: [
        WNATIVE[_types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Scroll]
    ]
};


/***/ }),

/***/ 24770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DL: () => (/* binding */ AddressType),
/* harmony export */   W8: () => (/* binding */ EthereumMethodType),
/* harmony export */   XQ: () => (/* binding */ SchemaType),
/* harmony export */   a_: () => (/* binding */ ChainId),
/* harmony export */   iE: () => (/* binding */ TransactionEventType),
/* harmony export */   lP: () => (/* binding */ ProviderType),
/* harmony export */   td: () => (/* binding */ NetworkType)
/* harmony export */ });
var // Learn more at: https://eips.ethereum.org/EIPS/eip-3085
// Learn more about ethereum ChainId https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md
ChainId;
(function(ChainId) {
    ChainId[ChainId[// Mainnet
    "Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Gorli"] = 5] = "Gorli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId[// Base
    "Base"] = 8453] = "Base";
    ChainId[ChainId["Base_Goerli"] = 84531] = "Base_Goerli";
    ChainId[ChainId[// BSC
    "BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCT"] = 97] = "BSCT";
    ChainId[ChainId[// Matic
    "Matic"] = 137] = "Matic";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId[// Arbitrum
    "Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["Arbitrum_Rinkeby"] = 421611] = "Arbitrum_Rinkeby";
    ChainId[ChainId["Arbitrum_Nova"] = 42170] = "Arbitrum_Nova";
    ChainId[ChainId[// xDai
    "xDai"] = 100] = "xDai";
    ChainId[ChainId[// Avalanche
    "Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["Avalanche_Fuji"] = 43113] = "Avalanche_Fuji";
    ChainId[ChainId[// Celo
    "Celo"] = 42220] = "Celo";
    ChainId[ChainId[// Fantom
    "Fantom"] = 250] = "Fantom";
    ChainId[ChainId[// Aurora
    "Aurora"] = 1313161554] = "Aurora";
    ChainId[ChainId["Aurora_Testnet"] = 1313161555] = "Aurora_Testnet";
    ChainId[ChainId[// Fuse
    "Fuse"] = 122] = "Fuse";
    ChainId[ChainId[// Boba
    "Boba"] = 288] = "Boba";
    ChainId[ChainId[// Metis
    "Metis"] = 1088] = "Metis";
    ChainId[ChainId[// Optimism
    "Optimism"] = 10] = "Optimism";
    ChainId[ChainId["Optimism_Kovan"] = 69] = "Optimism_Kovan";
    ChainId[ChainId["Optimism_Goerli"] = 420] = "Optimism_Goerli";
    ChainId[ChainId[// Conflux
    "Conflux"] = 1030] = "Conflux";
    ChainId[ChainId[// Astar
    "Astar"] = 592] = "Astar";
    ChainId[ChainId["Scroll"] = 534352] = "Scroll";
    ChainId[ChainId["ZKSync_Alpha_Testnet"] = 280] = "ZKSync_Alpha_Testnet";
    ChainId[ChainId["Crossbell"] = 3737] = "Crossbell";
    ChainId[ChainId["Moonbeam"] = 1284] = "Moonbeam";
    ChainId[ChainId["Pulse"] = 369] = "Pulse";
    ChainId[ChainId["Klaytn"] = 8217] = "Klaytn";
    ChainId[ChainId["Harmony"] = 1666600000] = "Harmony";
    ChainId[ChainId["Moonriver"] = 1285] = "Moonriver";
    ChainId[ChainId["Cronos"] = 25] = "Cronos";
    ChainId[ChainId["Brise"] = 32520] = "Brise";
    ChainId[ChainId["Canto"] = 7700] = "Canto";
    ChainId[ChainId["DFK"] = 53935] = "DFK";
    ChainId[ChainId["Doge"] = 2000] = "Doge";
    ChainId[ChainId["Evmos"] = 9001] = "Evmos";
    ChainId[ChainId["HuobiEco"] = 128] = "HuobiEco";
    ChainId[ChainId["IoTex"] = 4689] = "IoTex";
    ChainId[ChainId["Kava"] = 2222] = "Kava";
    ChainId[ChainId["Kcc"] = 321] = "Kcc";
    ChainId[ChainId["Milkomeda"] = 2001] = "Milkomeda";
    ChainId[ChainId["OKXChain"] = 66] = "OKXChain";
    ChainId[ChainId["Palm"] = 11297108109] = "Palm";
    ChainId[ChainId["RSK"] = 30] = "RSK";
    ChainId[ChainId["SmartBitcoinCash"] = 10000] = "SmartBitcoinCash";
    ChainId[ChainId["Shiden"] = 336] = "Shiden";
    ChainId[ChainId["SongbirdCanary"] = 19] = "SongbirdCanary";
    ChainId[ChainId["Step"] = 1234] = "Step";
    ChainId[ChainId["Telos"] = 40] = "Telos";
    ChainId[ChainId["Wanchain"] = 888] = "Wanchain";
    ChainId[ChainId[/** BitTorrent Chain Mainnet */ "BitTorrent"] = 199] = "BitTorrent";
    ChainId[ChainId[// For any chains not supported yet.
    "Invalid"] = 0] = "Invalid";
})(ChainId || (ChainId = {}));
var AddressType;
(function(AddressType) {
    AddressType[AddressType["ExternalOwned"] = 1] = "ExternalOwned";
    AddressType[AddressType["Contract"] = 2] = "Contract";
})(AddressType || (AddressType = {}));
var SchemaType;
(function(SchemaType) {
    SchemaType[SchemaType["Native"] = 1] = "Native";
    SchemaType[SchemaType["ERC20"] = 2] = "ERC20";
    SchemaType[SchemaType["ERC721"] = 3] = "ERC721";
    SchemaType[SchemaType["ERC1155"] = 4] = "ERC1155";
    SchemaType[SchemaType["SBT"] = 5] = "SBT";
})(SchemaType || (SchemaType = {}));
var // eip1559 only
// note: for prior 1559 it means gasPrice
// Learn more for a full list of supported JSON RPC methods
// https://eth.wiki/json-rpc/API#json-rpc-methods
EthereumMethodType;
(function(EthereumMethodType) {
    EthereumMethodType["WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumMethodType["WATCH_ASSET_LEGACY"] = 'metamask_watchAsset';
    EthereumMethodType["PERSONAL_SIGN"] = 'personal_sign';
    EthereumMethodType[// https://eips.ethereum.org/EIPS/eip-3085
    "WALLET_ADD_ETHEREUM_CHAIN"] = 'wallet_addEthereumChain';
    EthereumMethodType[// https://eips.ethereum.org/EIPS/eip-3326
    "WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumMethodType["ETH_CHAIN_ID"] = 'eth_chainId';
    EthereumMethodType["ETH_ACCOUNTS"] = 'eth_accounts';
    EthereumMethodType["ETH_REQUEST_ACCOUNTS"] = 'eth_requestAccounts';
    EthereumMethodType["ETH_SEND_TRANSACTION"] = 'eth_sendTransaction';
    EthereumMethodType["ETH_SEND_RAW_TRANSACTION"] = 'eth_sendRawTransaction';
    EthereumMethodType["ETH_GET_CODE"] = 'eth_getCode';
    EthereumMethodType["ETH_GAS_PRICE"] = 'eth_gasPrice';
    EthereumMethodType["ETH_GET_BLOCK_BY_NUMBER"] = 'eth_getBlockByNumber';
    EthereumMethodType["ETH_GET_BLOCK_BY_HASH"] = 'eth_getBlockByHash';
    EthereumMethodType["ETH_BLOCK_NUMBER"] = 'eth_blockNumber';
    EthereumMethodType["ETH_GET_BALANCE"] = 'eth_getBalance';
    EthereumMethodType["ETH_GET_TRANSACTION_BY_HASH"] = 'eth_getTransactionByHash';
    EthereumMethodType["ETH_GET_TRANSACTION_RECEIPT"] = 'eth_getTransactionReceipt';
    EthereumMethodType["ETH_GET_TRANSACTION_COUNT"] = 'eth_getTransactionCount';
    EthereumMethodType["ETH_GET_FILTER_CHANGES"] = 'eth_getFilterChanges';
    EthereumMethodType["ETH_NEW_PENDING_TRANSACTION_FILTER"] = 'eth_newPendingTransactionFilter';
    EthereumMethodType["ETH_ESTIMATE_GAS"] = 'eth_estimateGas';
    EthereumMethodType["ETH_CALL"] = 'eth_call';
    EthereumMethodType["ETH_SIGN"] = 'eth_sign';
    EthereumMethodType["ETH_DECRYPT"] = 'eth_decrypt';
    EthereumMethodType["ETH_SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumMethodType["ETH_SIGN_TRANSACTION"] = 'eth_signTransaction';
    EthereumMethodType["ETH_GET_LOGS"] = 'eth_getLogs';
    EthereumMethodType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
    EthereumMethodType[// EIP-4337
    "ETH_SEND_USER_OPERATION"] = 'eth_sendUserOperation';
    EthereumMethodType["ETH_CALL_USER_OPERATION"] = 'eth_callUserOperation';
    EthereumMethodType["ETH_SUPPORTED_CHAIN_IDS"] = 'eth_supportedChainIds';
    EthereumMethodType["ETH_SUPPORTED_ENTRY_POINTS"] = 'eth_supportedEntryPoints';
    EthereumMethodType["MASK_DEPLOY"] = 'mask_deploy';
    EthereumMethodType["MASK_FUND"] = 'mask_fund';
    EthereumMethodType[// only for mask
    "MASK_LOGIN"] = "MASK_LOGIN";
    EthereumMethodType["MASK_LOGOUT"] = "MASK_LOGOUT";
    EthereumMethodType["MASK_WALLETS"] = "MASK_WALLETS";
    EthereumMethodType["MASK_ADD_WALLET"] = "MASK_ADD_WALLET";
    EthereumMethodType["MASK_UPDATE_WALLET"] = "MASK_UPDATE_WALLET";
    EthereumMethodType["MASK_RENAME_WALLET"] = "MASK_RENAME_WALLET";
    EthereumMethodType["MASK_REMOVE_WALLET"] = "MASK_REMOVE_WALLET";
    EthereumMethodType["MASK_UPDATE_WALLETS"] = "MASK_UPDATE_WALLETS";
    EthereumMethodType["MASK_REMOVE_WALLETS"] = "MASK_REMOVE_WALLETS";
    EthereumMethodType["MASK_RESET_ALL_WALLETS"] = "MASK_RESET_ALL_WALLETS";
    EthereumMethodType["MASK_REPLACE_TRANSACTION"] = 'mask_replaceTransaction';
})(EthereumMethodType || (EthereumMethodType = {}));
var TransactionEventType;
(function(TransactionEventType) {
    TransactionEventType["TRANSACTION_HASH"] = 'transactionHash';
    TransactionEventType["RECEIPT"] = 'receipt';
    TransactionEventType["CONFIRMATION"] = 'confirmation';
    TransactionEventType["ERROR"] = 'error';
})(TransactionEventType || (TransactionEventType = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Base"] = "Base";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimism"] = "Optimism";
    NetworkType["Conflux"] = "Conflux";
    NetworkType["Astar"] = "Astar";
    NetworkType["Scroll"] = "Scroll";
    NetworkType["Moonbeam"] = "Moonbeam";
    NetworkType["CustomNetwork"] = "CustomNetwork";
})(NetworkType || (NetworkType = {}));
var ProviderType/**
 * EIP-1193 compatible provider
 */ // CELO
// address of the ERC20 contract to use to pay for gas and the gateway fee
// coinbase address of the full serving the light client's transactions
// value paid to the gateway fee recipient, denominated in the fee currency
// popups control
;
(function(ProviderType) {
    ProviderType["None"] = "None";
    ProviderType["Browser"] = "Browser";
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["Coinbase"] = "Coinbase";
    ProviderType["OKX"] = "OKX";
    ProviderType["Opera"] = "Opera";
    ProviderType["Clover"] = "Clover";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));


/***/ }),

/***/ 32329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ getAddress),
/* harmony export */   hB: () => (/* binding */ getCreate2Address)
/* harmony export */ });
/* unused harmony exports isAddress, getIcapAddress, getContractAddress */
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87737);
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79771);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76950);
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43288);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76851);







const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
function getChecksumAddress(address) {
    if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .isHexString */ .A7)(address, 20)) {
        logger.throwArgumentError("invalid address", "address", address);
    }
    address = address.toLowerCase();
    const chars = address.substring(2).split("");
    const expanded = new Uint8Array(40);
    for (let i = 0; i < 40; i++) {
        expanded[i] = chars[i].charCodeAt(0);
    }
    const hashed = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .arrayify */ .lE)((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)(expanded));
    for (let i = 0; i < 40; i += 2) {
        if ((hashed[i >> 1] >> 4) >= 8) {
            chars[i] = chars[i].toUpperCase();
        }
        if ((hashed[i >> 1] & 0x0f) >= 8) {
            chars[i + 1] = chars[i + 1].toUpperCase();
        }
    }
    return "0x" + chars.join("");
}
// Shims for environments that are missing some required constants and functions
const MAX_SAFE_INTEGER = 0x1fffffffffffff;
function log10(x) {
    if (Math.log10) {
        return Math.log10(x);
    }
    return Math.log(x) / Math.LN10;
}
// See: https://en.wikipedia.org/wiki/International_Bank_Account_Number
// Create lookup table
const ibanLookup = {};
for (let i = 0; i < 10; i++) {
    ibanLookup[String(i)] = String(i);
}
for (let i = 0; i < 26; i++) {
    ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
}
// How many decimal digits can we process? (for 64-bit float, this is 15)
const safeDigits = Math.floor(log10(MAX_SAFE_INTEGER));
function ibanChecksum(address) {
    address = address.toUpperCase();
    address = address.substring(4) + address.substring(0, 2) + "00";
    let expanded = address.split("").map((c) => { return ibanLookup[c]; }).join("");
    // Javascript can handle integers safely up to 15 (decimal) digits
    while (expanded.length >= safeDigits) {
        let block = expanded.substring(0, safeDigits);
        expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
    }
    let checksum = String(98 - (parseInt(expanded, 10) % 97));
    while (checksum.length < 2) {
        checksum = "0" + checksum;
    }
    return checksum;
}
;
function getAddress(address) {
    let result = null;
    if (typeof (address) !== "string") {
        logger.throwArgumentError("invalid address", "address", address);
    }
    if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        // Missing the 0x prefix
        if (address.substring(0, 2) !== "0x") {
            address = "0x" + address;
        }
        result = getChecksumAddress(address);
        // It is a checksummed address with a bad checksum
        if (address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && result !== address) {
            logger.throwArgumentError("bad address checksum", "address", address);
        }
        // Maybe ICAP? (we only support direct mode)
    }
    else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        // It is an ICAP address with a bad checksum
        if (address.substring(2, 4) !== ibanChecksum(address)) {
            logger.throwArgumentError("bad icap checksum", "address", address);
        }
        result = (0,_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__/* ._base36To16 */ .g$)(address.substring(4));
        while (result.length < 40) {
            result = "0" + result;
        }
        result = getChecksumAddress("0x" + result);
    }
    else {
        logger.throwArgumentError("invalid address", "address", address);
    }
    return result;
}
function isAddress(address) {
    try {
        getAddress(address);
        return true;
    }
    catch (error) { }
    return false;
}
function getIcapAddress(address) {
    let base36 = _base16To36(getAddress(address).substring(2)).toUpperCase();
    while (base36.length < 30) {
        base36 = "0" + base36;
    }
    return "XE" + ibanChecksum("XE00" + base36) + base36;
}
// http://ethereum.stackexchange.com/questions/760/how-is-the-address-of-an-ethereum-contract-computed
function getContractAddress(transaction) {
    let from = null;
    try {
        from = getAddress(transaction.from);
    }
    catch (error) {
        logger.throwArgumentError("missing from address", "transaction", transaction);
    }
    const nonce = stripZeros(arrayify(BigNumber.from(transaction.nonce).toHexString()));
    return getAddress(hexDataSlice(keccak256(encode([from, nonce])), 12));
}
function getCreate2Address(from, salt, initCodeHash) {
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .hexDataLength */ .E1)(salt) !== 32) {
        logger.throwArgumentError("salt must be 32 bytes", "salt", salt);
    }
    if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .hexDataLength */ .E1)(initCodeHash) !== 32) {
        logger.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", initCodeHash);
    }
    return getAddress((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .hexDataSlice */ .p3)((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .zo)(["0xff", getAddress(from), salt, initCodeHash])), 12));
}


/***/ }),

/***/ 87737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $m: () => (/* binding */ hexZeroPad),
/* harmony export */   A7: () => (/* binding */ isHexString),
/* harmony export */   Bu: () => (/* binding */ zeroPad),
/* harmony export */   Dv: () => (/* binding */ hexlify),
/* harmony export */   E1: () => (/* binding */ hexDataLength),
/* harmony export */   G1: () => (/* binding */ stripZeros),
/* harmony export */   N: () => (/* binding */ splitSignature),
/* harmony export */   Zq: () => (/* binding */ isBytesLike),
/* harmony export */   _t: () => (/* binding */ isBytes),
/* harmony export */   lE: () => (/* binding */ arrayify),
/* harmony export */   p3: () => (/* binding */ hexDataSlice),
/* harmony export */   xs: () => (/* binding */ hexConcat),
/* harmony export */   zo: () => (/* binding */ concat)
/* harmony export */ });
/* unused harmony exports hexValue, hexStripZeros, joinSignature */
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43288);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15271);



const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
///////////////////////////////
function isHexable(value) {
    return !!(value.toHexString);
}
function addSlice(array) {
    if (array.slice) {
        return array;
    }
    array.slice = function () {
        const args = Array.prototype.slice.call(arguments);
        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
    };
    return array;
}
function isBytesLike(value) {
    return ((isHexString(value) && !(value.length % 2)) || isBytes(value));
}
function isInteger(value) {
    return (typeof (value) === "number" && value == value && (value % 1) === 0);
}
function isBytes(value) {
    if (value == null) {
        return false;
    }
    if (value.constructor === Uint8Array) {
        return true;
    }
    if (typeof (value) === "string") {
        return false;
    }
    if (!isInteger(value.length) || value.length < 0) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        const v = value[i];
        if (!isInteger(v) || v < 0 || v >= 256) {
            return false;
        }
    }
    return true;
}
function arrayify(value, options) {
    if (!options) {
        options = {};
    }
    if (typeof (value) === "number") {
        logger.checkSafeUint53(value, "invalid arrayify value");
        const result = [];
        while (value) {
            result.unshift(value & 0xff);
            value = parseInt(String(value / 256));
        }
        if (result.length === 0) {
            result.push(0);
        }
        return addSlice(new Uint8Array(result));
    }
    if (options.allowMissingPrefix && typeof (value) === "string" && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (isHexable(value)) {
        value = value.toHexString();
    }
    if (isHexString(value)) {
        let hex = value.substring(2);
        if (hex.length % 2) {
            if (options.hexPad === "left") {
                hex = "0" + hex;
            }
            else if (options.hexPad === "right") {
                hex += "0";
            }
            else {
                logger.throwArgumentError("hex data is odd-length", "value", value);
            }
        }
        const result = [];
        for (let i = 0; i < hex.length; i += 2) {
            result.push(parseInt(hex.substring(i, i + 2), 16));
        }
        return addSlice(new Uint8Array(result));
    }
    if (isBytes(value)) {
        return addSlice(new Uint8Array(value));
    }
    return logger.throwArgumentError("invalid arrayify value", "value", value);
}
function concat(items) {
    const objects = items.map(item => arrayify(item));
    const length = objects.reduce((accum, item) => (accum + item.length), 0);
    const result = new Uint8Array(length);
    objects.reduce((offset, object) => {
        result.set(object, offset);
        return offset + object.length;
    }, 0);
    return addSlice(result);
}
function stripZeros(value) {
    let result = arrayify(value);
    if (result.length === 0) {
        return result;
    }
    // Find the first non-zero entry
    let start = 0;
    while (start < result.length && result[start] === 0) {
        start++;
    }
    // If we started with zeros, strip them
    if (start) {
        result = result.slice(start);
    }
    return result;
}
function zeroPad(value, length) {
    value = arrayify(value);
    if (value.length > length) {
        logger.throwArgumentError("value out of range", "value", arguments[0]);
    }
    const result = new Uint8Array(length);
    result.set(value, length - value.length);
    return addSlice(result);
}
function isHexString(value, length) {
    if (typeof (value) !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && value.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}
const HexCharacters = "0123456789abcdef";
function hexlify(value, options) {
    if (!options) {
        options = {};
    }
    if (typeof (value) === "number") {
        logger.checkSafeUint53(value, "invalid hexlify value");
        let hex = "";
        while (value) {
            hex = HexCharacters[value & 0xf] + hex;
            value = Math.floor(value / 16);
        }
        if (hex.length) {
            if (hex.length % 2) {
                hex = "0" + hex;
            }
            return "0x" + hex;
        }
        return "0x00";
    }
    if (typeof (value) === "bigint") {
        value = value.toString(16);
        if (value.length % 2) {
            return ("0x0" + value);
        }
        return "0x" + value;
    }
    if (options.allowMissingPrefix && typeof (value) === "string" && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (isHexable(value)) {
        return value.toHexString();
    }
    if (isHexString(value)) {
        if (value.length % 2) {
            if (options.hexPad === "left") {
                value = "0x0" + value.substring(2);
            }
            else if (options.hexPad === "right") {
                value += "0";
            }
            else {
                logger.throwArgumentError("hex data is odd-length", "value", value);
            }
        }
        return value.toLowerCase();
    }
    if (isBytes(value)) {
        let result = "0x";
        for (let i = 0; i < value.length; i++) {
            let v = value[i];
            result += HexCharacters[(v & 0xf0) >> 4] + HexCharacters[v & 0x0f];
        }
        return result;
    }
    return logger.throwArgumentError("invalid hexlify value", "value", value);
}
/*
function unoddify(value: BytesLike | Hexable | number): BytesLike | Hexable | number {
    if (typeof(value) === "string" && value.length % 2 && value.substring(0, 2) === "0x") {
        return "0x0" + value.substring(2);
    }
    return value;
}
*/
function hexDataLength(data) {
    if (typeof (data) !== "string") {
        data = hexlify(data);
    }
    else if (!isHexString(data) || (data.length % 2)) {
        return null;
    }
    return (data.length - 2) / 2;
}
function hexDataSlice(data, offset, endOffset) {
    if (typeof (data) !== "string") {
        data = hexlify(data);
    }
    else if (!isHexString(data) || (data.length % 2)) {
        logger.throwArgumentError("invalid hexData", "value", data);
    }
    offset = 2 + 2 * offset;
    if (endOffset != null) {
        return "0x" + data.substring(offset, 2 + 2 * endOffset);
    }
    return "0x" + data.substring(offset);
}
function hexConcat(items) {
    let result = "0x";
    items.forEach((item) => {
        result += hexlify(item).substring(2);
    });
    return result;
}
function hexValue(value) {
    const trimmed = hexStripZeros(hexlify(value, { hexPad: "left" }));
    if (trimmed === "0x") {
        return "0x0";
    }
    return trimmed;
}
function hexStripZeros(value) {
    if (typeof (value) !== "string") {
        value = hexlify(value);
    }
    if (!isHexString(value)) {
        logger.throwArgumentError("invalid hex string", "value", value);
    }
    value = value.substring(2);
    let offset = 0;
    while (offset < value.length && value[offset] === "0") {
        offset++;
    }
    return "0x" + value.substring(offset);
}
function hexZeroPad(value, length) {
    if (typeof (value) !== "string") {
        value = hexlify(value);
    }
    else if (!isHexString(value)) {
        logger.throwArgumentError("invalid hex string", "value", value);
    }
    if (value.length > 2 * length + 2) {
        logger.throwArgumentError("value out of range", "value", arguments[1]);
    }
    while (value.length < 2 * length + 2) {
        value = "0x0" + value.substring(2);
    }
    return value;
}
function splitSignature(signature) {
    const result = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (isBytesLike(signature)) {
        let bytes = arrayify(signature);
        // Get the r, s and v
        if (bytes.length === 64) {
            // EIP-2098; pull the v from the top bit of s and clear it
            result.v = 27 + (bytes[32] >> 7);
            bytes[32] &= 0x7f;
            result.r = hexlify(bytes.slice(0, 32));
            result.s = hexlify(bytes.slice(32, 64));
        }
        else if (bytes.length === 65) {
            result.r = hexlify(bytes.slice(0, 32));
            result.s = hexlify(bytes.slice(32, 64));
            result.v = bytes[64];
        }
        else {
            logger.throwArgumentError("invalid signature string", "signature", signature);
        }
        // Allow a recid to be used as the v
        if (result.v < 27) {
            if (result.v === 0 || result.v === 1) {
                result.v += 27;
            }
            else {
                logger.throwArgumentError("signature invalid v byte", "signature", signature);
            }
        }
        // Compute recoveryParam from v
        result.recoveryParam = 1 - (result.v % 2);
        // Compute _vs from recoveryParam and s
        if (result.recoveryParam) {
            bytes[32] |= 0x80;
        }
        result._vs = hexlify(bytes.slice(32, 64));
    }
    else {
        result.r = signature.r;
        result.s = signature.s;
        result.v = signature.v;
        result.recoveryParam = signature.recoveryParam;
        result._vs = signature._vs;
        // If the _vs is available, use it to populate missing s, v and recoveryParam
        // and verify non-missing s, v and recoveryParam
        if (result._vs != null) {
            const vs = zeroPad(arrayify(result._vs), 32);
            result._vs = hexlify(vs);
            // Set or check the recid
            const recoveryParam = ((vs[0] >= 128) ? 1 : 0);
            if (result.recoveryParam == null) {
                result.recoveryParam = recoveryParam;
            }
            else if (result.recoveryParam !== recoveryParam) {
                logger.throwArgumentError("signature recoveryParam mismatch _vs", "signature", signature);
            }
            // Set or check the s
            vs[0] &= 0x7f;
            const s = hexlify(vs);
            if (result.s == null) {
                result.s = s;
            }
            else if (result.s !== s) {
                logger.throwArgumentError("signature v mismatch _vs", "signature", signature);
            }
        }
        // Use recid and v to populate each other
        if (result.recoveryParam == null) {
            if (result.v == null) {
                logger.throwArgumentError("signature missing v and recoveryParam", "signature", signature);
            }
            else if (result.v === 0 || result.v === 1) {
                result.recoveryParam = result.v;
            }
            else {
                result.recoveryParam = 1 - (result.v % 2);
            }
        }
        else {
            if (result.v == null) {
                result.v = 27 + result.recoveryParam;
            }
            else {
                const recId = (result.v === 0 || result.v === 1) ? result.v : (1 - (result.v % 2));
                if (result.recoveryParam !== recId) {
                    logger.throwArgumentError("signature recoveryParam mismatch v", "signature", signature);
                }
            }
        }
        if (result.r == null || !isHexString(result.r)) {
            logger.throwArgumentError("signature missing or invalid r", "signature", signature);
        }
        else {
            result.r = hexZeroPad(result.r, 32);
        }
        if (result.s == null || !isHexString(result.s)) {
            logger.throwArgumentError("signature missing or invalid s", "signature", signature);
        }
        else {
            result.s = hexZeroPad(result.s, 32);
        }
        const vs = arrayify(result.s);
        if (vs[0] >= 128) {
            logger.throwArgumentError("signature s out of range", "signature", signature);
        }
        if (result.recoveryParam) {
            vs[0] |= 0x80;
        }
        const _vs = hexlify(vs);
        if (result._vs) {
            if (!isHexString(result._vs)) {
                logger.throwArgumentError("signature invalid _vs", "signature", signature);
            }
            result._vs = hexZeroPad(result._vs, 32);
        }
        // Set or check the _vs
        if (result._vs == null) {
            result._vs = _vs;
        }
        else if (result._vs !== _vs) {
            logger.throwArgumentError("signature _vs mismatch v and s", "signature", signature);
        }
    }
    result.yParityAndS = result._vs;
    result.compact = result.r + result.yParityAndS.substring(2);
    return result;
}
function joinSignature(signature) {
    signature = splitSignature(signature);
    return hexlify(concat([
        signature.r,
        signature.s,
        (signature.recoveryParam ? "0x1c" : "0x1b")
    ]));
}


/***/ }),

/***/ 67745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dk: () => (/* binding */ Description),
/* harmony export */   tu: () => (/* binding */ getStatic),
/* harmony export */   uj: () => (/* binding */ checkProperties),
/* harmony export */   zG: () => (/* binding */ defineReadOnly)
/* harmony export */ });
/* unused harmony exports resolveProperties, shallowCopy, deepCopy */
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43288);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35426);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .Yd(_version__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            let value = null;
            try {
                value = object[keys[i]];
            }
            catch (error) {
                // If accessing a value triggers an error, it is a getter
                // designed to do so (e.g. Result) and is therefore "frozen"
                continue;
            }
            if (!_isFrozen(value)) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}


/***/ }),

/***/ 5385:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.server_context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),aa=Symbol.for("react.debug_trace_mode"),ba=Symbol.for("react.offscreen"),ca=
Symbol.for("react.cache"),B=Symbol.for("react.default_value"),C=Symbol.iterator;function da(a){if(null===a||"object"!==typeof a)return null;a=C&&a[C]||a["@@iterator"];return"function"===typeof a?a:null}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,F={};function G(a,b,c){this.props=a;this.context=b;this.refs=F;this.updater=c||D}G.prototype.isReactComponent={};
G.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,c){this.props=a;this.context=b;this.refs=F;this.updater=c||D}var J=I.prototype=new H;
J.constructor=I;E(J,G.prototype);J.isPureReactComponent=!0;var K=Array.isArray,L=Object.prototype.hasOwnProperty,M={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};
function O(a,b,c){var d,e={},f=null,g=null;if(null!=b)for(d in void 0!==b.ref&&(g=b.ref),void 0!==b.key&&(f=""+b.key),b)L.call(b,d)&&!N.hasOwnProperty(d)&&(e[d]=b[d]);var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){for(var k=Array(h),m=0;m<h;m++)k[m]=arguments[m+2];e.children=k}if(a&&a.defaultProps)for(d in h=a.defaultProps,h)void 0===e[d]&&(e[d]=h[d]);return{$$typeof:l,type:a,key:f,ref:g,props:e,_owner:M.current}}
function ea(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function P(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(c){return b[c]})}var Q=/\/+/g;function R(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function S(a,b,c,d,e){var f=typeof a;if("undefined"===f||"boolean"===f)a=null;var g=!1;if(null===a)g=!0;else switch(f){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case l:case n:g=!0}}if(g)return g=a,e=e(g),a=""===d?"."+R(g,0):d,K(e)?(c="",null!=a&&(c=a.replace(Q,"$&/")+"/"),S(e,b,c,"",function(m){return m})):null!=e&&(P(e)&&(e=ea(e,c+(!e.key||g&&g.key===e.key?"":(""+e.key).replace(Q,"$&/")+"/")+a)),b.push(e)),1;g=0;d=""===d?".":d+":";if(K(a))for(var h=0;h<a.length;h++){f=
a[h];var k=d+R(f,h);g+=S(f,b,c,k,e)}else if(k=da(a),"function"===typeof k)for(a=k.call(a),h=0;!(f=a.next()).done;)f=f.value,k=d+R(f,h++),g+=S(f,b,c,k,e);else if("object"===f)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return g}
function T(a,b,c){if(null==a)return a;var d=[],e=0;S(a,d,"","",function(f){return b.call(c,f,e++)});return d}function fa(a){if(-1===a._status){var b=a._result;b=b();b.then(function(c){if(0===a._status||-1===a._status)a._status=1,a._result=c},function(c){if(0===a._status||-1===a._status)a._status=2,a._result=c});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}var U={current:null};function ha(){return new WeakMap}
function V(){return{s:0,v:void 0,o:null,p:null}}var W={current:null},X={transition:null},Y={ReactCurrentDispatcher:W,ReactCurrentCache:U,ReactCurrentBatchConfig:X,ReactCurrentOwner:M,ContextRegistry:{}},Z=Y.ContextRegistry;
exports.Children={map:T,forEach:function(a,b,c){T(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;T(a,function(){b++});return b},toArray:function(a){return T(a,function(b){return b})||[]},only:function(a){if(!P(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=G;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=I;exports.StrictMode=q;exports.Suspense=x;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;
exports.cache=function(a){return function(){var b=U.current;if(!b)return a.apply(null,arguments);var c=b.getCacheForType(ha);b=c.get(a);void 0===b&&(b=V(),c.set(a,b));c=0;for(var d=arguments.length;c<d;c++){var e=arguments[c];if("function"===typeof e||"object"===typeof e&&null!==e){var f=b.o;null===f&&(b.o=f=new WeakMap);b=f.get(e);void 0===b&&(b=V(),f.set(e,b))}else f=b.p,null===f&&(b.p=f=new Map),b=f.get(e),void 0===b&&(b=V(),f.set(e,b))}if(1===b.s)return b.v;if(2===b.s)throw b.v;try{var g=a.apply(null,
arguments);c=b;c.s=1;return c.v=g}catch(h){throw g=b,g.s=2,g.v=h,h;}}};
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=E({},a.props),e=a.key,f=a.ref,g=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,g=M.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var h=a.type.defaultProps;for(k in b)L.call(b,k)&&!N.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==h?h[k]:b[k])}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){h=Array(k);
for(var m=0;m<k;m++)h[m]=arguments[m+2];d.children=h}return{$$typeof:l,type:a.type,key:e,ref:f,props:d,_owner:g}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=O;exports.createFactory=function(a){var b=O.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.createServerContext=function(a,b){var c=!0;if(!Z[a]){c=!1;var d={$$typeof:v,_currentValue:b,_currentValue2:b,_defaultValue:b,_threadCount:0,Provider:null,Consumer:null,_globalName:a};d.Provider={$$typeof:t,_context:d};Z[a]=d}d=Z[a];if(d._defaultValue===B)d._defaultValue=b,d._currentValue===B&&(d._currentValue=b),d._currentValue2===B&&(d._currentValue2=b);else if(c)throw Error("ServerContext: "+a+" already defined");return d};exports.experimental_useEffectEvent=function(a){return W.current.useEffectEvent(a)};
exports.experimental_useOptimistic=function(a,b){return W.current.useOptimistic(a,b)};exports.forwardRef=function(a){return{$$typeof:w,render:a}};exports.isValidElement=P;exports.lazy=function(a){return{$$typeof:A,_payload:{_status:-1,_result:a},_init:fa}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=X.transition;X.transition={};try{a()}finally{X.transition=b}};exports.unstable_Cache=ca;
exports.unstable_DebugTracingMode=aa;exports.unstable_Offscreen=ba;exports.unstable_SuspenseList=y;exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};exports.unstable_getCacheForType=function(a){var b=U.current;return b?b.getCacheForType(a):a()};
exports.unstable_getCacheSignal=function(){var a=U.current;return a?a.getCacheSignal():(a=new AbortController,a.abort(Error("This CacheSignal was requested outside React which means that it is immediately aborted.")),a.signal)};exports.unstable_useCacheRefresh=function(){return W.current.useCacheRefresh()};exports.unstable_useMemoCache=function(a){return W.current.useMemoCache(a)};exports.use=function(a){return W.current.use(a)};exports.useCallback=function(a,b){return W.current.useCallback(a,b)};
exports.useContext=function(a){return W.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return W.current.useDeferredValue(a)};exports.useEffect=function(a,b){return W.current.useEffect(a,b)};exports.useId=function(){return W.current.useId()};exports.useImperativeHandle=function(a,b,c){return W.current.useImperativeHandle(a,b,c)};exports.useInsertionEffect=function(a,b){return W.current.useInsertionEffect(a,b)};
exports.useLayoutEffect=function(a,b){return W.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return W.current.useMemo(a,b)};exports.useReducer=function(a,b,c){return W.current.useReducer(a,b,c)};exports.useRef=function(a){return W.current.useRef(a)};exports.useState=function(a){return W.current.useState(a)};exports.useSyncExternalStore=function(a,b,c){return W.current.useSyncExternalStore(a,b,c)};exports.useTransition=function(){return W.current.useTransition()};exports.version="18.3.0-experimental-0a360642d-20230711";


/***/ }),

/***/ 51298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ safeUnreachable),
/* harmony export */   t: () => (/* binding */ unreachable)
/* harmony export */ });
function unreachable(value) {
    console.error('Unhandled value: ', value);
    throw new Error('Unreachable case:' + value);
}
function safeUnreachable(value) {
    console.error('Unhandled value: ', value);
}


/***/ }),

/***/ 78757:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IO: () => (/* binding */ query),
/* harmony export */   ZP: () => (/* binding */ urlcat)
/* harmony export */ });
/* unused harmony exports configure, join, subst */
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38130);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/index.ts

function urlcat(baseUrlOrTemplate, pathTemplateOrParams, maybeParams = {}, config = {}) {
  if (typeof pathTemplateOrParams === "string") {
    const baseUrl = baseUrlOrTemplate;
    const pathTemplate = pathTemplateOrParams;
    const params = maybeParams;
    return urlcatImpl(pathTemplate, params, baseUrl, config);
  } else {
    const baseTemplate = baseUrlOrTemplate;
    const params = pathTemplateOrParams;
    return urlcatImpl(baseTemplate, params, void 0, config);
  }
}
function configure(rootConfig) {
  return (baseUrlOrTemplate, pathTemplateOrParams, maybeParams = {}, config = {}) => urlcat(baseUrlOrTemplate, pathTemplateOrParams, maybeParams, __spreadValues(__spreadValues({}, rootConfig), config));
}
function joinFullUrl(renderedPath, baseUrl, pathAndQuery) {
  if (renderedPath.length) {
    return join(baseUrl, "/", pathAndQuery);
  } else {
    return join(baseUrl, "?", pathAndQuery);
  }
}
function urlcatImpl(pathTemplate, params, baseUrl, config) {
  const { renderedPath, remainingParams } = path(pathTemplate, params);
  const cleanParams = removeNullOrUndef(remainingParams);
  const renderedQuery = query(cleanParams, config);
  const pathAndQuery = join(renderedPath, "?", renderedQuery);
  return baseUrl ? joinFullUrl(renderedPath, baseUrl, pathAndQuery) : pathAndQuery;
}
function query(params, config) {
  var _a, _b;
  if (Object.keys(params).length < 1) {
    return "";
  }
  const qsConfiguration = {
    format: (_b = (_a = config == null ? void 0 : config.objectFormat) == null ? void 0 : _a.format) != null ? _b : "RFC1738",
    arrayFormat: config == null ? void 0 : config.arrayFormat
  };
  return qs__WEBPACK_IMPORTED_MODULE_0__.stringify(params, qsConfiguration);
}
function subst(template, params) {
  const { renderedPath } = path(template, params);
  return renderedPath;
}
function path(template, params) {
  const remainingParams = __spreadValues({}, params);
  const renderedPath = template.replace(/:[_A-Za-z]+[_A-Za-z0-9]*/g, (p) => {
    const key = p.slice(1);
    validatePathParam(params, key);
    delete remainingParams[key];
    return encodeURIComponent(params[key]);
  });
  return { renderedPath, remainingParams };
}
function validatePathParam(params, key) {
  const allowedTypes = ["boolean", "string", "number"];
  if (!Object.prototype.hasOwnProperty.call(params, key)) {
    throw new Error(`Missing value for path parameter ${key}.`);
  }
  if (!allowedTypes.includes(typeof params[key])) {
    throw new TypeError(
      `Path parameter ${key} cannot be of type ${typeof params[key]}. Allowed types are: ${allowedTypes.join(", ")}.`
    );
  }
  if (typeof params[key] === "string" && params[key].trim() === "") {
    throw new Error(`Path parameter ${key} cannot be an empty string.`);
  }
}
function join(part1, separator, part2) {
  const p1 = part1.endsWith(separator) ? part1.slice(0, -separator.length) : part1;
  const p2 = part2.startsWith(separator) ? part2.slice(separator.length) : part2;
  return p1 === "" || p2 === "" ? p1 + p2 : p1 + separator + p2;
}
function removeNullOrUndef(params) {
  return Object.keys(params).filter((k) => notNullOrUndefined(params[k])).reduce((result, k) => {
    result[k] = params[k];
    return result;
  }, {});
}
function notNullOrUndefined(v) {
  return v !== void 0 && v !== null;
}



/***/ })

}]);
//# sourceMappingURL=324.js.map