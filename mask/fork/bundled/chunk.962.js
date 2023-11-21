"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[962],{

/***/ 83629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ AssetPreviewer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _Image_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93301);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        fallbackImage: {
            height: 64,
            width: 64
        },
        icon: {
            position: 'absolute',
            top: theme.spacing(0.5),
            left: theme.spacing(0.5)
        }
    }));
function AssetPreviewer(props) {
    const { fallbackImage, url, icon } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                classes: {
                    fallbackImage: classes.fallbackImage,
                    container: classes.container
                },
                width: "100%",
                height: "100%",
                style: {
                    objectFit: 'cover'
                },
                src: url,
                fallback: fallbackImage
            }),
            icon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: icon
            }) : null
        ]
    });
}


/***/ }),

/***/ 97583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ AssetsProvider),
  o: () => (/* binding */ useUserAssets)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sum.js
var sum = __webpack_require__(15337);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/take.js
var take = __webpack_require__(8435);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/chunk.js
var chunk = __webpack_require__(45357);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Pageable/index.ts
var Pageable = __webpack_require__(38645);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/assetsReducer.ts



function createAssetsState() {
    return {
        assets: constants/* EMPTY_LIST */.rP,
        loading: false,
        finished: false
    };
}
const initialAssetsState = {
    assetsMap: {},
    verifiedMap: {}
};
/**
 * To distinguish assets among multiple accounts, we combine account and collection id as store-id.
 *
 */ function assetsReducer(state, action) {
    switch(action.type){
        case 'SET_LOADING_STATUS':
            return (0,immer/* produce */.Uy)(state, (draft)=>{
                const { loading, finished, id, account } = action;
                const storeId = `${account}.${id}`;
                if (!draft.assetsMap[storeId]) draft.assetsMap[storeId] = createAssetsState();
                if (typeof loading !== 'undefined') {
                    draft.assetsMap[storeId].loading = loading;
                }
                if (typeof finished !== 'undefined') {
                    draft.assetsMap[storeId].finished = finished;
                }
            });
        case 'APPEND_ASSETS':
            return (0,immer/* produce */.Uy)(state, (draft)=>{
                const { id, account, assets } = action;
                const storeId = `${account}.${id}`;
                if (!draft.assetsMap[storeId]) draft.assetsMap[storeId] = createAssetsState();
                draft.assetsMap[storeId].assets = assets.length ? (0,uniqBy/* default */.Z)([
                    ...draft.assetsMap[storeId].assets,
                    ...assets
                ], (x)=>`${x.id}.${x.tokenId}`) : draft.assetsMap[storeId].assets ?? constants/* EMPTY_LIST */.rP;
            });
        case 'SET_VERIFIED':
            return (0,immer/* produce */.Uy)(state, (draft)=>{
                const { id, verifiedBy } = action;
                draft.verifiedMap[id] = verifiedBy;
            });
    }
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/ChainRuntimeProvider.tsx
var ChainRuntimeProvider = __webpack_require__(86259);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionsProvider.tsx
var CollectionsProvider = __webpack_require__(68344);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/AssetsProvider.tsx








/** Get verified-by marketplaces */ /** All collectibles get hidden */ const AssetsContext = /*#__PURE__*/ (0,react.createContext)({
    assetsMapRef: {
        current: {}
    },
    getAssets: ()=>({
            loading: false,
            finished: false,
            assets: []
        }),
    getBLockedTokenIds: ()=>constants/* EMPTY_LIST */.rP,
    getVerifiedBy: ()=>constants/* EMPTY_LIST */.rP,
    loadAssets: ()=>Promise.resolve(),
    loadVerifiedBy: ()=>Promise.resolve(),
    isAllHidden: false,
    isEmpty: false
});
/** Min merged collection chunk size */ const CHUNK_SIZE = 8;
const getAssetsTotal = (map)=>(0,sum/* default */.Z)(Object.values(map).map((x)=>x.assets.length));
/** blocked ids in format of `${chainid}.${address}.${tokenId}` */ const AssetsProvider = /*#__PURE__*/ (0,react.memo)(function AssetsProvider({ children, blockedIds = constants/* EMPTY_LIST */.rP }) {
    const [{ assetsMap, verifiedMap }, dispatch] = (0,react.useReducer)(assetsReducer, initialAssetsState);
    const indicatorMapRef = (0,react.useRef)(new Map());
    const { pluginID, account } = (0,ChainRuntimeProvider/* useChainRuntime */.M)();
    const blockedTokenIdsMap = (0,react.useMemo)(()=>{
        if (!blockedIds.length) return constants/* EMPTY_OBJECT */.Nu;
        return blockedIds.reduce((map, id)=>{
            const [chainId, address, tokenId] = id.split('.');
            const collectionKey = [
                chainId,
                address
            ].join('.');
            const list = map[collectionKey] ?? [];
            list.push(tokenId);
            map[collectionKey] = list;
            return map;
        }, {});
    }, [
        blockedIds
    ]);
    // A mapping that contains listing assets only
    const listingAssetsMap = (0,react.useMemo)(()=>{
        if (!blockedIds.length) return assetsMap;
        const listingMap = {
            ...assetsMap
        };
        let updated = false;
        for(const storeId in assetsMap){
            const originalAssets = assetsMap[storeId].assets;
            const newAssets = originalAssets.filter((x)=>{
                const assetId = `${x.chainId}.${x.address}.${x.tokenId}`.toLowerCase();
                return !blockedIds.includes(assetId);
            });
            if (newAssets.length !== originalAssets.length) {
                listingMap[storeId] = {
                    ...listingMap[storeId],
                    assets: newAssets
                };
                updated = true;
            }
        }
        // Update accordingly
        return updated ? listingMap : assetsMap;
    }, [
        assetsMap,
        blockedIds
    ]);
    const assetsMapRef = (0,react.useRef)({});
    const listingAssetsMapRef = (0,react.useRef)({});
    const verifiedMapRef = (0,react.useRef)({});
    const blockedTokenIdsMapRef = (0,react.useRef)({});
    (0,react.useEffect)(()=>{
        assetsMapRef.current = assetsMap;
        verifiedMapRef.current = verifiedMap;
        listingAssetsMapRef.current = listingAssetsMap;
        blockedTokenIdsMapRef.current = blockedTokenIdsMap;
    });
    const { collections } = CollectionsProvider/* CollectionsContext */.M.useContainer();
    const isEmpty = (0,react.useMemo)(()=>{
        // Collections assets are lazy loading, can't judge if not all collections been load
        if (Object.keys(assetsMap).length < collections.length || Object.values(assetsMap).some((x)=>x.loading)) return false;
        // Spam score of some collections might be OK, but NFTs of them might be treated as spam #MF-5091
        return getAssetsTotal(assetsMap) === 0;
    }, [
        assetsMap,
        collections.length
    ]);
    const isAllHidden = (0,react.useMemo)(()=>{
        // Collections assets are lazy loading, can't judge if not all collections been load
        if (Object.keys(assetsMap).length < collections.length) return false;
        if (!blockedIds.length || getAssetsTotal(assetsMap) === 0) return false;
        return getAssetsTotal(listingAssetsMap) === 0;
    }, [
        assetsMap,
        listingAssetsMap,
        !blockedIds.length,
        collections.length
    ]);
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID);
    // We load merged collections with iterators
    const assetsLoaderIterators = (0,react.useRef)(new Map());
    const loadAssetsViaHub = (0,react.useCallback)(async (collection, collectionId)=>{
        if (!collection.id) return;
        const { id, chainId } = collection;
        const stateKey = `${id}.${chainId}`;
        const storeId = `${account}.${stateKey}`;
        const realId = collectionId ?? id;
        const assetsState = assetsMapRef.current[storeId];
        // Fetch less in collection list, and more every time in expanded collection.
        // Also expand size if for id chunk, since there might be more assets than chunk size
        const size = assetsState?.assets.length || collectionId ? 20 : 4;
        const indicator = !collectionId && indicatorMapRef.current.get(storeId) || (0,Pageable/* createIndicator */.sz)();
        dispatch({
            type: 'SET_LOADING_STATUS',
            account,
            id: stateKey,
            loading: true
        });
        const pageable = await Hub.getNonFungibleAssetsByCollectionAndOwner(realId, account, {
            indicator,
            size,
            chainId
        });
        if (false) {}
        if (pageable.nextIndicator) {
            indicatorMapRef.current.set(storeId, pageable.nextIndicator);
        }
        dispatch({
            type: 'APPEND_ASSETS',
            id: stateKey,
            account,
            assets: pageable.data
        });
        // If collectionId is set, that means we are loading part of a merged collection.
        // And we will let the merged collection's iterator decide if it has ended
        const finished = !collectionId && !pageable.nextIndicator;
        dispatch({
            type: 'SET_LOADING_STATUS',
            id: stateKey,
            account,
            finished,
            loading: false
        });
        return pageable.data;
    }, [
        Hub,
        account
    ]);
    const loadAssets = (0,react.useCallback)(async (collection)=>{
        if (!collection.id) return;
        const { id, chainId } = collection;
        const stateKey = `${id}.${chainId}`;
        const storeId = `${account}.${stateKey}`;
        const assetsState = assetsMapRef.current[storeId];
        if (assetsState?.finished || assetsState?.loading) return;
        const allIds = id.split(',');
        let assets;
        if (allIds.length <= CHUNK_SIZE) {
            assets = await loadAssetsViaHub(collection);
        } else {
            async function* generate(collection) {
                const chunks = [
                    (0,take/* default */.Z)(allIds, 4),
                    ...(0,chunk/* default */.Z)(allIds.slice(4), CHUNK_SIZE)
                ].map((x)=>x.join(','));
                for (const idChunk of chunks){
                    // TODO We assume that each individual collection in merged-collection has at most 2 assets
                    yield await loadAssetsViaHub(collection, idChunk);
                }
            }
            const iterator = assetsLoaderIterators.current.get(stateKey) || generate(collection);
            assetsLoaderIterators.current.set(stateKey, iterator);
            const result = await iterator.next();
            if (result.done) {
                dispatch({
                    type: 'SET_LOADING_STATUS',
                    id: stateKey,
                    account,
                    finished: true,
                    loading: false
                });
                return;
            }
            assets = result.value;
        }
        // If assets just fetched are all blocked, load another page.
        const blockedMapKey = [
            collection.chainId,
            collection.address
        ].join('.').toLowerCase();
        const blockedList = blockedTokenIdsMapRef.current[blockedMapKey];
        if (!blockedList?.length || !assets?.length) return;
        const listings = assets.filter((x)=>!blockedList.includes(x.tokenId));
        if (!listings.length) await loadAssetsViaHub(collection);
    }, [
        loadAssetsViaHub,
        account
    ]);
    const loadVerifiedBy = (0,react.useCallback)(async (id)=>{
        const verifiedState = verifiedMapRef.current[id];
        if (!Hub?.getNonFungibleCollectionVerifiedBy || verifiedState || !id) return;
        const verifiedBy = await Hub.getNonFungibleCollectionVerifiedBy(id.split(',')[0]);
        dispatch({
            type: 'SET_VERIFIED',
            id,
            verifiedBy
        });
    }, [
        Hub?.getNonFungibleCollectionVerifiedBy
    ]);
    const getAssets = (0,react.useCallback)((collection)=>{
        const key = `${account}.${collection.id}.${collection.chainId}`;
        return listingAssetsMap[key] ?? createAssetsState();
    }, [
        listingAssetsMap,
        account
    ]);
    const getBLockedTokenIds = (0,react.useCallback)((collection)=>{
        if (!blockedIds.length) return constants/* EMPTY_LIST */.rP;
        const key = `${collection.chainId}.${collection.address}`.toLowerCase();
        return blockedTokenIdsMap[key] ?? constants/* EMPTY_LIST */.rP;
    }, [
        blockedTokenIdsMap,
        blockedIds
    ]);
    const getVerifiedBy = (0,react.useCallback)((id)=>verifiedMap[id] ?? constants/* EMPTY_LIST */.rP, [
        verifiedMap
    ]);
    const contextValue = (0,react.useMemo)(()=>{
        return {
            isAllHidden,
            isEmpty,
            getAssets,
            getBLockedTokenIds,
            getVerifiedBy,
            loadAssets,
            loadVerifiedBy,
            assetsMapRef: listingAssetsMapRef
        };
    }, [
        getAssets,
        getBLockedTokenIds,
        getVerifiedBy,
        loadAssets,
        loadVerifiedBy,
        isAllHidden,
        isEmpty
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsContext.Provider, {
        value: contextValue,
        children: children
    });
});
function useUserAssets() {
    return (0,react.useContext)(AssetsContext);
}


/***/ }),

/***/ 86259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ useChainRuntime),
/* harmony export */   z: () => (/* binding */ ChainRuntimeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59190);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89601);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89762);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97834);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72889);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);








const ChainRuntimeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    account: '',
    setChainId: lodash_es__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    networks: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP
});
//  https://docs.simplehash.com/reference/chains
const SimpleHashSupportedChains = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Mainnet,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.BSC,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Base,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Matic,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Arbitrum,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Optimism,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Avalanche,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.xDai,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .ChainId */ .a_.Scroll
    ],
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: [
        _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_6__/* .ChainId */ .a_.Mainnet
    ],
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: [
        _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_7__/* .ChainId */ .a_.Mainnet
    ]
};
const ChainRuntimeProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ChainRuntimeProvider({ pluginID, account, defaultChainId, children }) {
    const [chainId, setChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const allNetworks = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useNetworks */ .e)(pluginID, true);
    const networks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const supported = SimpleHashSupportedChains[pluginID];
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(allNetworks.filter((x)=>(x.network === 'mainnet' || x.isCustomized) && supported.includes(x.chainId)), (x)=>supported.indexOf(x.chainId));
    }, [
        allNetworks,
        pluginID
    ]);
    const currentChainId = chainId ?? defaultChainId ?? (networks.length === 1 ? networks[0].chainId : chainId);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            pluginID,
            account,
            defaultChainId,
            chainId: currentChainId,
            setChainId,
            networks
        }), [
        pluginID,
        account,
        defaultChainId,
        currentChainId,
        networks
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ChainRuntimeContext.Provider, {
        value: value,
        children: children
    });
});
function useChainRuntime() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChainRuntimeContext);
}


/***/ }),

/***/ 92763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/RadioIndicator/index.tsx
var RadioIndicator = __webpack_require__(24500);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/theme/src/Components/CheckBoxIndicator/index.tsx



const CheckBoxIndicator = /*#__PURE__*/ (0,react.memo)(function CheckBoxIndicator({ checked, unCheckedButtonColor, checkedButtonColor, ...rest }) {
    return checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Checkbox, {
        ...rest,
        color: checkedButtonColor
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckboxBlank, {
        ...rest,
        color: unCheckedButtonColor
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/resolveImageURL.ts
var resolveImageURL = __webpack_require__(81438);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleCard.tsx






const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            position: 'relative',
            display: 'block',
            cursor: 'pointer'
        },
        card: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            width: '100%',
            height: '100%'
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 30,
            height: 30
        },
        fallbackLensImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: '100%',
            height: '100%'
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%'
        },
        indicator: {
            padding: 0,
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1
        }
    }));
/** disable inspect NFT details */ const CollectibleCard = /*#__PURE__*/ (0,react.memo)(({ className, pluginID, asset, disableNetworkIcon, disableInspect, isSelected, useRadio, showUnCheckedIndicator, ...rest })=>{
    const { classes, cx } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const icon = pluginID && !disableNetworkIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
        pluginID: pluginID,
        chainId: asset.chainId
    }) : null;
    const { metadata } = asset;
    const url = metadata?.previewImageURL || metadata?.imageURL || metadata?.mediaURL;
    const fallbackImage = (0,resolveImageURL/* resolveImageURL */.y)(undefined, asset.metadata?.name, asset.collection?.name, asset.contract?.address);
    const Indicator = useRadio ? RadioIndicator/* RadioIndicator */.F : CheckBoxIndicator;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classes.card,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                    classes: {
                        fallbackImage: fallbackImage ? classes.fallbackLensImage : classes.fallbackImage
                    },
                    url: url,
                    icon: icon,
                    fallbackImage: fallbackImage
                })
            }),
            isSelected || showUnCheckedIndicator ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Indicator, {
                size: 20,
                checked: isSelected,
                className: classes.indicator,
                checkedButtonColor: theme.palette.maskColor.primary,
                unCheckedButtonColor: theme.palette.maskColor.secondaryLine
            }) : null
        ]
    });
});
CollectibleCard.displayName = 'CollectibleCard';


/***/ }),

/***/ 68156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ CollectibleItem),
/* harmony export */   X: () => (/* binding */ CollectibleItemSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60625);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42097);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63623);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40346);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65327);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6764);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94715);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _CollectibleCard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92763);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8311);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, _, refs)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            overflow: 'visible',
            zIndex: 0,
            willChange: 'opacity'
        },
        withAction: {
            '&:hover': {
                transform: 'translateY(19px)',
                transitionDuration: '150ms',
                [`.${refs.action}`]: {
                    marginTop: 8,
                    opacity: 1
                },
                [`.${refs.collectibleCard}`]: {
                    transform: 'translateY(-38px)'
                },
                [`.${refs.info}`]: {
                    transform: 'translateY(-38px)'
                }
            }
        },
        ease: {
            transition: 'all 300ms ease'
        },
        fadeIn: {
            '@keyframes fade-in': {
                '0%': {
                    opacity: 0
                }
            },
            animation: 'fade-in 500ms ease-in-out',
            '@media (prefers-reduced-motion: reduce)': {
                animation: 'none'
            }
        },
        collectibleCard: {
            width: '100%',
            aspectRatio: '1/1'
        },
        info: {
            padding: 6,
            overflow: 'auto',
            boxSizing: 'border-box',
            width: '100%'
        },
        nameRow: {
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto'
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            color: theme.palette.maskColor.second
        },
        identity: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        action: {
            width: '100%',
            padding: theme.spacing(0, 1),
            boxSizing: 'border-box',
            textAlign: 'center',
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 6
        },
        actionButton: {
            borderRadius: 28,
            backgroundColor: theme.palette.maskColor.primary,
            color: '#fff',
            '&:hover': {
                backgroundColor: theme.palette.maskColor.primary
            }
        }
    }));
/** @default true */ const CollectibleItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { className, asset, pluginID, disableNetworkIcon, disableName, disableAction = true, actionLabel, verifiedBy = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP, onActionClick, onItemClick, isSelected, showUnCheckedIndicator, ...rest } = props;
    const t = (0,_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useSharedTrans */ .j)();
    const { classes, cx } = useStyles();
    const name = asset.collection?.name ?? '';
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useBoundedPopperProps */ .g)();
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        onItemClick?.(asset);
    }, [
        onItemClick,
        asset
    ]);
    const assetName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!asset.collection) return;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isLensCollect */ .C)(asset.collection.name)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .isLensFollower */ .a)(asset.collection.name)) return asset.collection.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isLens */ .s)(asset.metadata?.name)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isXnsContractAddress */ .ob)(asset.address)) return asset.metadata?.name;
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isENSContractAddress */ .o2)(asset.address) || (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isENSNameWrapperContractAddress */ .FY)(asset.address)) return asset.metadata?.name;
        if (disableName && asset.tokenId) return `#${asset.tokenId}`;
        return asset.metadata?.name || (asset.tokenId ? `#${asset.tokenId}` : '') || asset.collection.name;
    }, [
        asset,
        disableName
    ]);
    const [nameOverflow, nameRef] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .useDetectOverflow */ .s)();
    const [identityOverflow, identityRef] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_10__/* .useDetectOverflow */ .s)();
    const tooltip = nameOverflow || identityOverflow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        component: "div",
        children: [
            disableName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: name
            }),
            assetName
        ]
    }) : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ShadowRootTooltip */ .p, {
        PopperProps: popperProps,
        title: tooltip,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: cx(classes.card, classes.fadeIn, className, disableAction ? null : classes.withAction),
            ...rest,
            ref: ref,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectibleCard_js__WEBPACK_IMPORTED_MODULE_13__/* .CollectibleCard */ .Z, {
                    className: cx(classes.collectibleCard, classes.ease),
                    pluginID: pluginID,
                    asset: asset,
                    disableNetworkIcon: disableNetworkIcon,
                    onClick: handleClick,
                    isSelected: isSelected,
                    showUnCheckedIndicator: showUnCheckedIndicator
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: cx(classes.info, classes.ease),
                    children: [
                        disableName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classes.nameRow,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    ref: nameRef,
                                    className: classes.name,
                                    variant: "body2",
                                    children: name || assetName
                                }),
                                verifiedBy.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_12__/* .ShadowRootTooltip */ .p, {
                                    title: t.verified_by({
                                        marketplace: verifiedBy.join(', ')
                                    }),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__.Verification, {
                                        size: 16
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            ref: identityRef,
                            className: classes.identity,
                            variant: "body2",
                            component: "div",
                            children: assetName
                        })
                    ]
                }),
                disableAction ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: cx(classes.action, classes.ease),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        fullWidth: true,
                        variant: "text",
                        className: classes.actionButton,
                        size: "small",
                        onClick: ()=>onActionClick?.(asset),
                        children: actionLabel
                    })
                })
            ]
        })
    });
}));
CollectibleItem.displayName = 'collectibleItem';
const CollectibleItemSkeleton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function CollectibleItemSkeleton({ className, omitInfo, omitName, ...rest }, ref) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: cx(classes.card, className),
        ...rest,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.collectibleCard,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    animation: "wave",
                    variant: "rectangular",
                    sx: {
                        borderRadius: '8px'
                    },
                    height: "100%"
                })
            }),
            omitInfo ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.info,
                children: [
                    omitName ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.name,
                        variant: "body2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            animation: "wave",
                            variant: "text",
                            width: "80%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: classes.identity,
                        variant: "body2",
                        component: "div",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            animation: "wave",
                            variant: "text",
                            width: '40%'
                        })
                    })
                ]
            })
        ]
    });
}));


/***/ }),

/***/ 25199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ CollectionList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/utils/isSameNFT.ts
var isSameNFT = __webpack_require__(61402);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(35713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleItem.tsx
var CollectibleItem = __webpack_require__(68156);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useBoundedPopperProps.ts
var useBoundedPopperProps = __webpack_require__(86999);
// EXTERNAL MODULE: ./packages/theme/src/hooks/useDetectOverflow.ts
var useDetectOverflow = __webpack_require__(60625);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectibleCard.tsx + 1 modules
var CollectibleCard = __webpack_require__(92763);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/useCompactDetection.ts

// TODO we can't use @container query inside shadow DOM, so we check if it's
// compact manually.
function useCompactDetection() {
    const containerRef = (0,react.useRef)(null);
    const [compact, setCompact] = (0,react.useState)(false);
    (0,react.useLayoutEffect)(()=>{
        if (!containerRef.current) return;
        setCompact(containerRef.current?.offsetWidth < 100);
    }, []);
    return {
        compact,
        containerRef
    };
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/Collection.tsx













const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { compact })=>({
        folder: {
            overflow: 'auto',
            cursor: 'pointer',
            container: 'folder',
            backgroundColor: theme.palette.maskColor.bg,
            borderRadius: 8
        },
        grid: {
            display: 'grid',
            overflow: 'auto',
            gridTemplate: 'repeat(2, 1fr) / repeat(2, 1fr)',
            // TODO Unfortunately, we can't use @container query in shadow DOM yet.
            gridGap: theme.spacing(compact ? 0.5 : 1),
            padding: theme.spacing(compact ? 0.5 : 1),
            aspectRatio: '1 / 1',
            cursor: 'pointer'
        },
        info: {
            alignSelf: 'stretch',
            padding: 6
        },
        nameRow: {
            display: 'flex',
            alignItems: 'center',
            overflow: 'auto'
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            color: theme.palette.maskColor.second
        },
        tokenId: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: theme.spacing(2),
            minHeight: theme.spacing(2),
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        collectibleCard: {
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: 8,
            backgroundColor: 'transparent',
            overflow: 'hidden'
        },
        extraCount: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.maskColor.main,
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            fontSize: 14
        }
    }));
/** set collection expanded */ /** Invoke when component first renders */ /**
 * Props inherited from div on take effect when rendering as a folder
 */ const Collection = /*#__PURE__*/ (0,react.memo)(({ className, collection, pluginID, assets = constants/* EMPTY_LIST */.rP, blockedTokenIds = constants/* EMPTY_LIST */.rP, loading, finished, verifiedBy, expanded, onExpand, onInitialRender, disableAction, onActionClick, onItemClick, selectedAsset, ...rest })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { compact, containerRef } = useCompactDetection();
    const popperProps = (0,useBoundedPopperProps/* useBoundedPopperProps */.g)();
    const { classes, cx } = useStyles({
        compact
    });
    (0,react.useLayoutEffect)(()=>{
        onInitialRender?.(collection);
    }, []);
    const [nameOverflow, nameRef] = (0,useDetectOverflow/* useDetectOverflow */.s)();
    // blockedTokenIds are offline data, we can only presume they all
    // belongs to user until finish loading
    const count = (0,react.useMemo)(()=>{
        if (!blockedTokenIds.length) return collection.balance;
        return finished ? assets.length : collection.balance - blockedTokenIds.length;
    }, [
        collection.balance,
        assets.length,
        blockedTokenIds.length,
        finished
    ]);
    if (loading && !assets.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionSkeleton, {
            id: collection.id,
            count: count,
            expanded: expanded
        });
    }
    const hasExtra = count > 4 && !expanded;
    const assetsSlice = hasExtra ? assets.slice(0, 3) : assets;
    if (collection.balance <= 2 || !loading && assets.length < 2 || expanded) {
        const renderAssets = assetsSlice.map((asset)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItem */.G, {
                className: className,
                asset: asset,
                pluginID: pluginID,
                disableName: expanded,
                actionLabel: t.send(),
                disableAction: disableAction,
                onActionClick: onActionClick,
                onItemClick: onItemClick,
                verifiedBy: verifiedBy,
                isSelected: (0,isSameNFT/* isSameNFT */.m)(pluginID, asset, selectedAsset)
            }, `${asset.chainId}.${asset.address}.${asset.tokenId}`));
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: renderAssets
        });
    }
    const renderAssets = assetsSlice.map((asset)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard/* CollectibleCard */.Z, {
            className: classes.collectibleCard,
            asset: asset,
            pluginID: pluginID,
            disableNetworkIcon: true
        }, `${collection.id}.${asset.address}.${asset.tokenId}`));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
        PopperProps: popperProps,
        title: nameOverflow ? collection.name : undefined,
        placement: "top",
        disableInteractive: true,
        arrow: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cx(className, classes.folder),
            ...rest,
            onClick: ()=>{
                onExpand?.(collection.id);
            },
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.grid,
                    children: [
                        renderAssets,
                        hasExtra ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "div",
                            className: classes.extraCount,
                            children: count > 1002 ? '>999' : `+${count - 3}`
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.info,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.nameRow,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    ref: nameRef,
                                    className: classes.name,
                                    variant: "body2",
                                    children: collection.name
                                }),
                                verifiedBy?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                    disableInteractive: true,
                                    title: t.verified_by({
                                        marketplace: verifiedBy.join(', ')
                                    }),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {
                                        size: 16
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tokenId,
                            variant: "body2",
                            component: "div",
                            children: collection?.symbol || ''
                        })
                    ]
                })
            ]
        })
    });
});
Collection.displayName = 'Collection';
/** Render variants according to count */ const CollectionSkeleton = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)(function CollectionSkeleton({ className, count, id, expanded, ...rest }, ref) {
    const { compact, containerRef } = useCompactDetection();
    const { classes, cx } = useStyles({
        compact
    });
    // We render up to 4 skeletons unless it's expanded.
    const renderCount = expanded ? count : Math.min(4, count);
    const asFolder = renderCount > 2 && !expanded;
    const skeletons = (0,range/* default */.Z)(renderCount).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItemSkeleton */.X, {
            omitInfo: asFolder,
            ref: i === 0 ? ref : undefined
        }, `${id}.${i}`));
    const forkedContainerRef = (0,useForkRef/* default */.Z)(containerRef, ref);
    if (asFolder) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(className, classes.folder),
        ref: forkedContainerRef,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.grid,
                children: skeletons
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.info,
                children: [
                    expanded ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        color: "textPrimary",
                        variant: "body2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "text",
                            width: "80%"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tokenId,
                        variant: "body2",
                        component: "div",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "text",
                            width: "40%"
                        })
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: skeletons
    });
}));
const LazyCollection = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { className, collection } = props;
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    if (seen) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Collection, {
        ...props,
        ref: undefined
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionSkeleton, {
        className: className,
        id: collection.id,
        count: collection.balance,
        ref: ref
    });
});
LazyCollection.displayName = 'LazyCollection';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/LoadingSkeleton.tsx




function LoadingSkeleton({ className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: className,
        children: [
            (0,range/* default */.Z)(4).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionSkeleton, {
                    id: `ske-${i}`,
                    count: 4
                }, `ske-${i}`)),
            (0,range/* default */.Z)(12).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItemSkeleton */.X, {}, i))
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/AssetsProvider.tsx + 1 modules
var AssetsProvider = __webpack_require__(97583);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SelectNetworkSidebar/index.tsx
var SelectNetworkSidebar = __webpack_require__(65333);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionsProvider.tsx
var CollectionsProvider = __webpack_require__(68344);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetsManagement/ChainRuntimeProvider.tsx
var ChainRuntimeProvider = __webpack_require__(86259);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useReportSpam.tsx
var useReportSpam = __webpack_require__(29128);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenSecurity/index.tsx + 1 modules
var TokenSecurity = __webpack_require__(78199);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionHeader.tsx









const CollectionHeader_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        collectionHeader: {
            display: 'flex',
            color: theme.palette.maskColor.main
        },
        info: {
            display: 'flex',
            alignItems: 'center',
            marginRight: 'auto'
        },
        icon: {
            width: 24,
            height: 24,
            borderRadius: '100%',
            objectFit: 'cover'
        },
        backButton: {
            padding: theme.spacing(1, 0),
            width: 40,
            minWidth: 40,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 32,
            color: theme.palette.maskColor.main,
            backgroundColor: theme.palette.maskColor.thirdMain,
            marginLeft: theme.spacing(1)
        }
    };
});
const CollectionHeader = /*#__PURE__*/ (0,react.memo)(function CollectionHeader({ className, onResetCollection, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = CollectionHeader_useStyles();
    const { getVerifiedBy } = (0,AssetsProvider/* useUserAssets */.o)();
    const { currentCollectionId, currentCollection } = CollectionsProvider/* CollectionsContext */.M.useContainer();
    const { isReporting, isSpam, promptReport } = (0,useReportSpam/* useReportSpam */.v)({
        address: currentCollection?.address,
        chainId: currentCollection?.chainId,
        collectionId: currentCollection?.id
    });
    if (!currentCollection) return null;
    const currentVerifiedBy = currentCollectionId ? getVerifiedBy(currentCollectionId) : [];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.collectionHeader, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.info,
                children: [
                    currentCollection.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        className: classes.icon,
                        size: 24,
                        src: currentCollection.iconURL
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        mx: 1,
                        children: currentCollection.name
                    }),
                    currentVerifiedBy.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                        title: t.verified_by({
                            marketplace: currentVerifiedBy.join(', ')
                        }),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Verification, {
                            size: 16
                        })
                    }) : null,
                    isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSecurity/* NFTSpamBadge */.k, {}) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "text",
                className: classes.backButton,
                onClick: ()=>onResetCollection?.(undefined),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Undo, {
                    size: 16
                })
            }),
            !isSpam ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "text",
                className: classes.backButton,
                onClick: promptReport,
                children: isReporting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    size: 16
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flag, {
                    size: 16
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/AssetsManagement/CollectionList.tsx


















const CollectionList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { columns = 4, gap = 1.5 })=>{
    const gapIsNumber = typeof gap === 'number';
    return {
        container: {
            boxSizing: 'border-box',
            overflow: 'auto',
            flex: 1
        },
        columns: {
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'auto',
            flexDirection: 'row',
            display: 'flex',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        sidebar: {
            paddingTop: gapIsNumber ? theme.spacing(gap) : gap,
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(0.25)
        },
        main: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: '100%',
            boxSizing: 'border-box',
            overflow: 'auto',
            // For profile-card footer
            paddingBottom: 48,
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            paddingTop: gapIsNumber ? theme.spacing(gap) : gap
        },
        emptyMain: {
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center'
        },
        grid: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: typeof columns === 'string' ? columns : `repeat(${columns}, 1fr)`,
            gridGap: gapIsNumber ? theme.spacing(gap) : gap,
            padding: gapIsNumber ? theme.spacing(0, gap, 0) : `0 ${gap} 0`,
            paddingLeft: theme.spacing(1),
            boxSizing: 'border-box'
        },
        collectionHeader: {
            margin: theme.spacing(0, gap, 1.5)
        }
    };
});
function getTopOffset() {
    if (Sniffings/* Sniffings */.Y.is_twitter_page) {
        // 53, height of the sticky bar of Twitter,
        // 96, height of the header of web3 tab
        return 53 + 96;
    }
    // TODO Other sites
    return 0;
}
/** User customized assets, will be rendered as flatten */ /** Pending user customized assets, used to render loading skeletons */ const CollectionList = /*#__PURE__*/ (0,react.memo)(function CollectionList({ className, gridProps = constants/* EMPTY_OBJECT */.Nu, disableSidebar, disableAction, selectedAsset, additionalAssets, pendingAdditionalAssetCount = 0, disableWindowScroll, scrollElementRef, emptyText, onActionClick, onItemClick, onChainChange, onCollectionChange, from, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = CollectionList_useStyles(gridProps, {
        props: rest
    });
    const { pluginID, account, chainId, setChainId, networks } = (0,ChainRuntimeProvider/* useChainRuntime */.M)();
    const { collections, currentCollection, setCurrentCollectionId, loading, error, retry } = CollectionsProvider/* CollectionsContext */.M.useContainer();
    const handleChainChange = (0,react.useCallback)((chainId)=>{
        setChainId(chainId);
        onChainChange?.(chainId);
        setCurrentCollectionId(undefined);
        onCollectionChange?.(undefined);
        if (from === 'profileCard') providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryTimelineHoverUserNftSwitchChain);
        if (from === 'web3Profile') providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryProfileUserNftsSwitchChain);
    }, [
        onChainChange
    ]);
    const containerRef = (0,react.useRef)(null);
    const mainColumnRef = (0,react.useRef)(null);
    const forkedMainColumnRef = (0,useForkRef/* default */.Z)(mainColumnRef, scrollElementRef);
    const scrollToTop = (0,react.useCallback)(()=>{
        if (disableWindowScroll) {
            mainColumnRef.current?.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const offset = getTopOffset();
            if (Math.abs(rect.top - offset) < 50) return;
            const top = rect.top + window.scrollY - offset;
            window.scroll({
                top,
                behavior: 'smooth'
            });
        }
    }, [
        disableWindowScroll
    ]);
    const handleCollectionChange = (0,react.useCallback)((id)=>{
        setCurrentCollectionId(id);
        onCollectionChange?.(id);
        if (!id) return;
        scrollToTop();
    }, [
        onCollectionChange,
        scrollToTop
    ]);
    const { assetsMapRef, getAssets, getBLockedTokenIds, getVerifiedBy, loadAssets, loadVerifiedBy, isAllHidden, isEmpty } = (0,AssetsProvider/* useUserAssets */.o)();
    const additional = (0,react.useMemo)(()=>{
        if (!additionalAssets?.length) return constants/* EMPTY_LIST */.rP;
        const collectionAddresses = (0,compact/* default */.Z)(collections.map((x)=>x.address?.toLowerCase()));
        // If it's in our collections, no need to treat it as additional one
        return additionalAssets.filter((x)=>!collectionAddresses.includes(x.address.toLowerCase()));
    }, [
        additionalAssets,
        account,
        collections
    ]);
    const handleInitialRender = (0,react.useCallback)((collection)=>{
        const id = collection.id;
        const assetsState = assetsMapRef.current[`${account}.${id}`];
        // To reduce requests, check if has been initialized
        if (assetsState?.assets.length || assetsState?.loading) return;
        loadVerifiedBy(id);
        loadAssets(collection);
    }, [
        loadAssets,
        loadVerifiedBy,
        account
    ]);
    const sidebar = disableSidebar ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNetworkSidebar/* SelectNetworkSidebar */.C, {
        chainId: chainId,
        className: classes.sidebar,
        onChainChange: handleChainChange,
        pluginID: pluginID,
        networks: networks
    });
    if (!collections.length && loading && !error && account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.container, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.columns,
            children: [
                sidebar,
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.main,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSkeleton, {
                        className: classes.grid
                    })
                })
            ]
        })
    });
    if (!collections.length && error && account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.container, className),
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            mt: "200px",
            color: (theme)=>theme.palette.maskColor.main,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                retry: retry
            })
        })
    });
    if (!loading && !collections.length || !account || isAllHidden || isEmpty) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: cx(classes.container, className),
            ...rest,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.columns,
                children: [
                    sidebar,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: cx(classes.main, classes.emptyMain),
                        display: "flex",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                            flexGrow: 1,
                            children: emptyText ?? t.no_NFTs_found()
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.container, className),
        ref: containerRef,
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.columns,
            children: [
                sidebar,
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.main,
                    ref: forkedMainColumnRef,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionHeader, {
                            className: classes.collectionHeader,
                            onResetCollection: handleCollectionChange
                        }),
                        currentCollection ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandedCollection, {
                            gridProps: gridProps,
                            pluginID: pluginID,
                            collection: currentCollection,
                            assets: getAssets(currentCollection).assets,
                            verifiedBy: getVerifiedBy(currentCollection.id),
                            loading: getAssets(currentCollection).loading,
                            finished: getAssets(currentCollection).finished,
                            emptyText: emptyText,
                            onInitialRender: handleInitialRender,
                            disableAction: disableAction,
                            onActionClick: onActionClick,
                            selectedAsset: selectedAsset,
                            onItemClick: onItemClick
                        }, currentCollection.id) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.grid,
                            children: [
                                pendingAdditionalAssetCount > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionSkeleton, {
                                    id: "additional-assets",
                                    count: pendingAdditionalAssetCount,
                                    expanded: true
                                }) : null,
                                additional.map((asset)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItem */.G, {
                                        className: className,
                                        asset: asset,
                                        pluginID: pluginID,
                                        disableName: true,
                                        actionLabel: t.send(),
                                        disableAction: disableAction,
                                        isSelected: (0,isSameNFT/* isSameNFT */.m)(pluginID, asset, selectedAsset),
                                        onActionClick: onActionClick,
                                        onItemClick: onItemClick
                                    }, `additional.${asset.chainId}.${asset.address}.${asset.tokenId}`)),
                                collections.map((collection)=>{
                                    const assetsState = getAssets(collection);
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(LazyCollection, {
                                        pluginID: pluginID,
                                        collection: collection,
                                        assets: assetsState.assets,
                                        verifiedBy: getVerifiedBy(collection.id),
                                        loading: assetsState.loading,
                                        finished: assetsState.finished,
                                        blockedTokenIds: getBLockedTokenIds(collection),
                                        selectedAsset: selectedAsset,
                                        onExpand: handleCollectionChange,
                                        onInitialRender: handleInitialRender,
                                        disableAction: disableAction,
                                        onActionClick: onActionClick,
                                        onItemClick: onItemClick
                                    }, `${collection.chainId}.${collection.id}`);
                                })
                            ]
                        }),
                        error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                            hint: false,
                            retry: retry
                        }) : null
                    ]
                })
            ]
        })
    });
});
/** An ExpandedCollection tiles collectable cards */ const ExpandedCollection = /*#__PURE__*/ (0,react.memo)(function ExpandedCollection({ gridProps = constants/* EMPTY_OBJECT */.Nu, emptyText, ...collectionProps }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { loadAssets, getAssets } = (0,AssetsProvider/* useUserAssets */.o)();
    const { classes, theme } = CollectionList_useStyles(gridProps);
    const { collection, assets } = collectionProps;
    const { finished, loading } = getAssets(collection);
    if (finished && !assets.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        flexGrow: 1,
        children: emptyText ?? t.no_NFTs_found()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                width: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.grid,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Collection, {
                            ...collectionProps,
                            expanded: true,
                            ref: undefined
                        }),
                        loading ? (0,range/* default */.Z)(20).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem/* CollectibleItemSkeleton */.X, {
                                omitName: true
                            }, i)) : null
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                callback: ()=>{
                    loadAssets(collection);
                },
                children: finished ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    color: theme.palette.maskColor.main
                })
            }, assets.length)
        ]
    });
});


/***/ }),

/***/ 68344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CollectionsProvider),
/* harmony export */   M: () => (/* binding */ CollectionsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26896);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62649);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63623);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(42097);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35268);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15337);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54225);
/* harmony import */ var _ChainRuntimeProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86259);










function useCollections(defaultCollectionId) {
    const { pluginID, chainId, account } = (0,_ChainRuntimeProvider_js__WEBPACK_IMPORTED_MODULE_2__/* .useChainRuntime */ .M)();
    const [currentCollectionId = defaultCollectionId, setCurrentCollectionId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { data: rawCollections = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP, isLoading: loading, error, refetch: retry } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNonFungibleCollections */ .e)(pluginID, {
        account,
        allChains: true,
        sourceType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SourceType */ .PO.SimpleHash
    });
    const merged = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return (0,immer__WEBPACK_IMPORTED_MODULE_6__/* .produce */ .Uy)(rawCollections, (draft)=>{
            const mergeBy = (name, filterFn)=>{
                const matchedCollections = draft.filter(filterFn);
                if (matchedCollections.length <= 2) return;
                const [theFirst, ...rest] = matchedCollections;
                // Merge ids, update name, total up the balance
                theFirst.id = matchedCollections.map((x)=>x.id).join(',');
                theFirst.name = name;
                theFirst.balance = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(matchedCollections.map((x)=>x.balance || 0));
                // Remove the rest
                draft.splice(0, draft.length, ...draft.filter((x)=>!rest.includes(x)));
            };
            mergeBy('Lens Followers', (x)=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_8__/* .isLensFollower */ .a)(x.name));
            mergeBy('Lens Collects', (x)=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isLensCollect */ .C)(x.name));
        });
    }, [
        rawCollections
    ]);
    const collections = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>chainId ? merged.filter((x)=>x.chainId === chainId) : merged, [
        merged,
        chainId
    ]);
    const currentCollection = currentCollectionId ? merged.find((x)=>x.id === currentCollectionId) : undefined;
    return {
        collections,
        currentCollection,
        currentCollectionId,
        setCurrentCollectionId,
        loading,
        error,
        retry
    };
}
const CollectionsContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_10__/* .createContainer */ .f)(useCollections);
const CollectionsProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CollectionsProvider({ defaultCollectionId, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectionsContext.Provider, {
        initialState: defaultCollectionId,
        children: children
    });
});


/***/ }),

/***/ 45258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ UserAssetsProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29752);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47830);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74765);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _AssetsProvider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97583);
/* harmony import */ var _ChainRuntimeProvider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86259);
/* harmony import */ var _CollectionsProvider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68344);








const UserAssetsProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function UserAssetsProvider({ pluginID, account, defaultChainId, defaultCollectionId, children }) {
    const systemAccount = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const blockedTokens = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useBlockedNonFungibleTokens */ .E)(pluginID);
    const blockedIds = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .W)(systemAccount, account)) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY_LIST */ .rP;
        return blockedTokens.map((x)=>x.id);
    }, [
        blockedTokens,
        systemAccount,
        account
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChainRuntimeProvider_js__WEBPACK_IMPORTED_MODULE_6__/* .ChainRuntimeProvider */ .z, {
        pluginID: pluginID,
        defaultChainId: defaultChainId,
        account: account,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectionsProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .CollectionsProvider */ .C, {
            defaultCollectionId: defaultCollectionId,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AssetsProvider_js__WEBPACK_IMPORTED_MODULE_8__/* .AssetsProvider */ .N, {
                blockedIds: blockedIds,
                children: children
            })
        })
    });
});


/***/ }),

/***/ 96310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ElementAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _react_hookz_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47642);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);




const ElementAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ callback, children, ...rest })=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersection = (0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_2__/* .useIntersectionObserver */ .S)(elementRef, {
        rootMargin: '200px'
    });
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(callback);
    callbackRef.current = callback;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!intersection?.isIntersecting) return;
        callbackRef.current(intersection);
    }, [
        intersection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pt: 1,
        ref: elementRef,
        justifyContent: "center",
        alignItems: "center",
        direction: "row",
        ...rest,
        children: children
    });
});
ElementAnchor.displayName = 'ElementAnchor';


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

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43204);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { size, rounded }, refs)=>({
        optimistic: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            width: size ?? '100%',
            height: size ?? '100%',
            position: 'relative',
            borderRadius: rounded ? '50%' : undefined,
            overflow: rounded ? 'hidden' : undefined
        },
        image: {
            display: 'block'
        },
        failImage: {
            width: 30,
            height: 30
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        failed: {
            [`&.${refs.center}`]: {
                background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)' : 'linear-gradient(180deg, #202020 0%, #181818 100%)'
            }
        }
    }));
const MASK_DARK_FALLBACK = new URL(/* asset import */ __webpack_require__(44365), __webpack_require__.b).href;
const MASK_LIGHT_FALLBACK = new URL(/* asset import */ __webpack_require__(34656), __webpack_require__.b).href;
function Image({ fallback, size, rounded, disableSpinner, classes: extraClasses, onClick, containerProps, ...rest }) {
    const { classes, cx } = useStyles({
        size,
        rounded
    }, {
        props: {
            classes: extraClasses
        }
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (rest.src && !failed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.optimistic, containerProps?.className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                className: classes.image,
                width: size,
                height: size,
                ...rest,
                src: rest.src,
                onError: ()=>setFailed(true)
            })
        });
    }
    if (fallback && !(fallback instanceof URL) && typeof fallback !== 'string') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
            children: fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...containerProps,
        className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            loading: "lazy",
            decoding: "async",
            width: size,
            height: size,
            ...rest,
            src: fallback?.toString() ?? (theme.palette.mode === 'dark' ? MASK_DARK_FALLBACK : MASK_LIGHT_FALLBACK),
            className: cx(classes.image, classes.failImage, classes.fallbackImage)
        })
    });
}


/***/ }),

/***/ 82124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ RetryHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);




const RetryHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ retry, hint = true, ButtonProps })=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        height: hint ? '100%' : '100px',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            gap: 2.75,
            children: [
                hint ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    children: t.load_failed()
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...ButtonProps,
                    size: "small",
                    style: {
                        borderRadius: 16
                    },
                    onClick: ()=>retry?.(),
                    children: t.load_retry()
                })
            ]
        })
    });
});
RetryHint.displayName = 'RetryHint';


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

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 29128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useReportSpam)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8330);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82897);
/* harmony import */ var _UI_modals_modals_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25127);
/* harmony import */ var _locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);








/**
 * collectionId is more accurate
 */ function useReportSpam({ address, chainId, collectionId }) {
    const t = (0,_locales_i18n_generated_js__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { data: collectionByAddress } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !collectionId,
        queryKey: [
            'simple-hash',
            'collection',
            chainId,
            address
        ],
        queryFn: async ()=>{
            if (!address || !chainId) return null;
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SimpleHashEVM */ .fe.getCollectionByContractAddress(address, {
                chainId
            });
        }
    });
    const { data: collectionById } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled: !!collectionId,
        queryKey: [
            'simple-hash',
            'collection',
            collectionId
        ],
        queryFn: async ()=>{
            if (!collectionId) return null;
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SimpleHashEVM */ .fe.getSimpleHashCollection(collectionId);
        }
    });
    const collection = collectionById || collectionByAddress;
    const colId = collectionId || collection?.collection_id;
    const [state, reportSpam] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!colId) return;
        const res = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NFTSpam */ .bO.report({
            collection_id: colId,
            source: 'mask-network',
            status: 'reporting'
        });
        return res.code === 200;
    }, [
        colId
    ]);
    const { showSnackbar } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .useCustomSnackbar */ .Ii)();
    const promptReport = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        const confirmed = await _UI_modals_modals_js__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmDialog */ .QH.openAndWaitForClose({
            title: t.report_nft(),
            message: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    wordBreak: 'keep-all'
                },
                children: t.confirm_to_report_nft({
                    name: collection?.name || 'this NFT'
                })
            }),
            confirmVariant: 'warning'
        });
        if (!confirmed || !colId) return;
        const result = await reportSpam();
        showSnackbar(t.report_spam(), {
            variant: result ? 'success' : 'error',
            message: result ? t.report_spam_success() : t.report_spam_fail()
        });
    }, [
        colId,
        reportSpam,
        collection?.name
    ]);
    const isSpam = !!collection && collection.spam_score !== null && collection?.spam_score > _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .SPAM_SCORE */ .Rk;
    return {
        isReporting: state.loading,
        isSpam,
        collection,
        promptReport
    };
}


/***/ }),

/***/ 61402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isSameNFT)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74765);


function isSameNFT(pluginID, a, b) {
    if (pluginID === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA) return a.tokenId === b?.tokenId && a.id === b.id;
    if (!a.contract) return false;
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .W)(a.contract.address, b?.contract?.address) && a.contract?.chainId === b?.contract?.chainId && a.tokenId === b?.tokenId;
}


/***/ }),

/***/ 47830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useBlockedNonFungibleTokens)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useBlockedNonFungibleTokens(pluginID, schemaType) {
    const { Token } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const nfts = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Token?.blockedNonFungibleTokens ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nfts.length && schemaType ? nfts.filter((x)=>x.schema === schemaType) : nfts;
    }, [
        schemaType,
        nfts
    ]);
}


/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNonFungibleCollections)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67830);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38645);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNonFungibleCollections(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'non-fungible-collections',
            pluginID,
            account,
            options
        ],
        enabled: !!account,
        queryFn: async ()=>{
            if (!account) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .asyncIteratorToArray */ .S)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .pageableToIterator */ .T1)(async (indicator)=>{
                return Hub.getNonFungibleCollectionsByOwner(account, {
                    indicator,
                    size: 50,
                    networkPluginId: pluginID,
                    ...options
                });
            }));
        }
    });
}


/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ })

}]);
//# sourceMappingURL=chunk.962.js.map