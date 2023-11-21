"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5333],{

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


/***/ }),

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useMatchXS)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37004);

function useMatchXS() {
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)((theme)=>theme.breakpoints.down('sm'));
}


/***/ }),

/***/ 88020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useRowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useRowSize() {
    const [rowSize, setRowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(54);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        try {
            const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
            setRowSize(fontSize * 4);
        } catch  {
            setRowSize(60);
        }
    }, []);
    return rowSize;
}


/***/ }),

/***/ 58894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 87792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ DotLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);


const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        loading: {
            display: 'flex',
            columnGap: 4,
            '@keyframes dotLoading': {
                to: {
                    opacity: 0.1
                }
            },
            '& > div': {
                animation: 'dotLoading 0.6s infinite alternate'
            },
            '& > div:nth-child(2)': {
                animationDelay: '0.2s'
            },
            '& > div:nth-child(3)': {
                animationDelay: '0.4s'
            }
        },
        dot: {
            width: 3,
            height: 3,
            backgroundColor: theme.palette.maskColor.main
        }
    }));
function DotLoading() {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.loading,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.dot
            })
        ]
    });
}


/***/ }),

/***/ 14584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ FungibleTokenList)
});

// UNUSED EXPORTS: TokenListMode

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-window@1.8.9_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(77288);
// EXTERNAL MODULE: ./node_modules/.pnpm/fuse.js@6.6.2_patch_hash=b2o4qvyfvxmpo7347sqko6h22a/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(32180);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/theme/src/Components/SearchableList/EmptyResult.tsx



function EmptyResult() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.EmptySimple, {
                size: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: "No results"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/theme/src/Components/SearchableList/SearchableList.tsx










/** The list data should be render */ /** The identity of list data item for remove duplicates item */ /** The key of list item for search */ /** Renderer for each list item */ /** The props to react-window */ /** The callback when clicked someone list item */ /** The hook when search */ /** Props for search box */ /** Show search bar */ /**
 * This component is used to provide a searchable list in Mask design.
 *
 * @example
 * interface IListDate { name: string }
 * const ListItem = ({ name }: IListDate) => <div>{ name }</div>
 * const onSelect = () => {}
 *
 * return (
 *      <SearchableList<IListDate>
 *           onSelect={onSelect}
 *           data={ListData}
 *           searchKey={['name']}
 *           itemRender={ListItem}
 *      />
 * )
 */ function SearchableList({ itemKey, data, onSelect, onSearch, disableSearch, searchKey, itemRender, FixedSizeListProps = {}, SearchFieldProps, ...props }) {
    const [keyword, setKeyword] = (0,react.useState)('');
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { height = 300, itemSize, ...rest } = FixedSizeListProps;
    const { InputProps, ...textFieldPropsRest } = SearchFieldProps ?? {};
    // #region create searched data
    const readyToRenderData = (0,react.useMemo)(()=>{
        if (!keyword) return data;
        const fuse = new fuse_esm/* default */.Z(data, {
            shouldSort: true,
            isCaseSensitive: false,
            threshold: 0.45,
            minMatchCharLength: 1,
            keys: searchKey ?? Object.keys(data.length > 0 ? data[0] : [])
        });
        const filtered = fuse.search(keyword).map((x)=>x.item);
        return itemKey ? (0,uniqBy/* default */.Z)(filtered, (x)=>x[itemKey]) : filtered;
    }, [
        keyword,
        JSON.stringify(data)
    ]);
    // #endregion
    const handleChange = (e)=>{
        const value = e.currentTarget.value;
        setKeyword(value);
        onSearch?.(value);
        if (!value) handleClear();
    };
    const handleClear = ()=>{
        setKeyword('');
        onSearch?.('');
    };
    const getItemKey = (0,react.useCallback)((index, data)=>{
        if (!itemKey) return index.toString();
        return data.dataSet[index][itemKey];
    }, [
        itemKey
    ]);
    const windowHeight = !!textFieldPropsRest.error && typeof height === 'number' ? height - 28 : height;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            !disableSearch && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.searchInput,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                        value: keyword,
                        placeholder: "Search",
                        autoFocus: true,
                        fullWidth: true,
                        InputProps: {
                            style: {
                                height: 40
                            },
                            inputProps: {
                                style: {
                                    paddingLeft: 4
                                }
                            },
                            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {
                                size: 18
                            }),
                            endAdornment: keyword ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {
                                size: 18,
                                onClick: handleClear,
                                color: textFieldPropsRest.error ? theme.palette.maskColor.danger : undefined
                            }) : null,
                            ...InputProps
                        },
                        onChange: handleChange,
                        ...textFieldPropsRest
                    }),
                    textFieldPropsRest.error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        mt: 0.5,
                        children: textFieldPropsRest.helperText
                    }) : null
                ]
            }),
            readyToRenderData.length === 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                height: windowHeight,
                justifyContent: "center",
                alignContent: "center",
                marginTop: "18px",
                marginBottom: "48px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyResult, {})
            }),
            readyToRenderData.length !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.listBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                    className: classes.list,
                    width: "100%",
                    height: windowHeight,
                    overscanCount: 25,
                    itemSize: itemSize ?? 100,
                    itemData: {
                        dataSet: readyToRenderData,
                        onSelect
                    },
                    itemKey: (index, data)=>getItemKey(index, data),
                    itemCount: readyToRenderData.length,
                    ...rest,
                    children: itemRender
                })
            })
        ]
    });
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            overflow: 'visible'
        },
        listBox: {
            '& > div::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 0
            },
            '& > div::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            },
            '& > div > div': {
                position: 'relative',
                margin: 'auto'
            }
        },
        list: {
            scrollbarWidth: 'thin'
        },
        error: {
            backgroundColor: theme.palette.maskColor.bottom,
            fontSize: 14,
            color: theme.palette.maskColor.danger
        }
    }));

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(61811);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleTokensFromTokenList.ts



function useFungibleTokensFromTokenList(pluginID, options) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: options?.chainId
    });
    const Hub = (0,useWeb3Hub/* useWeb3Hub */.h)(pluginID, {
        chainId,
        ...options
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        return Hub.getFungibleTokensFromTokenList(chainId, {
            chainId
        });
    }, [
        chainId,
        Hub
    ]);
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(35681);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useTrustedFungibleTokens.ts
var useTrustedFungibleTokens = __webpack_require__(92750);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBlockedFungibleTokens.ts
var useBlockedFungibleTokens = __webpack_require__(87085);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useFungibleTokensBalance.ts



function useFungibleTokensBalance(pluginID, listOfAddress, options) {
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, options);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!listOfAddress?.length) return constants/* EMPTY_OBJECT */.Nu;
        return Web3.getFungibleTokensBalance(listOfAddress);
    }, [
        listOfAddress?.join(','),
        Web3
    ]);
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAddressType.ts
var useAddressType = __webpack_require__(29063);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleToken.ts
var useFungibleToken = __webpack_require__(54246);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/type.ts
var type = __webpack_require__(45889);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/Switch.js
var Switch = __webpack_require__(14722);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/switchClasses.js
var switchClasses = __webpack_require__(95070);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingSwitch/index.tsx

const SettingSwitch = (0,styled/* default */.ZP)(Switch/* default */.Z)(({ size, disabled })=>{
    const isSmall = size === 'small';
    const base = isSmall ? 16 : 24;
    return {
        [`&.${switchClasses/* default */.Z.root}`]: {
            width: base * 3,
            height: base * 2,
            padding: '5px 3px'
        },
        [`& .${switchClasses/* default */.Z.thumb}`]: {
            width: base,
            height: base
        },
        [`& .${switchClasses/* default */.Z.checked}`]: {
            color: 'white !important',
            [`&.${switchClasses/* default */.Z.switchBase}`]: {
                transform: `translateX(${isSmall ? 20 : 28}px)`
            },
            [`&+.${switchClasses/* default */.Z.track}`]: {
                opacity: '1 !important',
                backgroundColor: `${disabled ? 'rgba(61, 194, 51, 0.5)' : '#3DC233'} !important`
            }
        },
        [`& .${switchClasses/* default */.Z.track}`]: {
            borderRadius: 12
        },
        [`& .${switchClasses/* default */.Z.switchBase}`]: {
            top: isSmall ? 4 : 3,
            transform: `translateX(${isSmall ? 4 : 2}px)`
        }
    };
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/useTokenBlocked.ts



const useTokenBlocked = (address)=>{
    const blockedFungibleTokens = (0,useBlockedFungibleTokens/* useBlockedFungibleTokens */.v)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined);
    return !!blockedFungibleTokens?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
};
const useTokenTrusted = (address, chainId)=>{
    const trustedFungibleTokens = (0,useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, undefined, chainId);
    return !!trustedFungibleTokens?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
};

// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedBalance.tsx
var FormattedBalance = __webpack_require__(22103);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/DotLoading/index.tsx
var DotLoading = __webpack_require__(87792);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/FungibleTokenItem.tsx
















const FungibleTokenItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        list: {
            maxHeight: '100%',
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(0.5),
            borderRadius: theme.spacing(1),
            backdropFilter: 'blur(16px)',
            '&:hover': {
                background: theme.palette.maskColor.bg
            }
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'flex',
            gap: theme.spacing(0.5),
            alignItems: 'center',
            lineHeight: '20px',
            color: theme.palette.maskColor.second
        },
        nameText: {
            maxWidth: 400,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        symbol: {
            lineHeight: '20px',
            fontSize: 16
        },
        balance: {
            fontSize: 16,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        importButton: {
            borderRadius: 99
        },
        action: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        switch: {
            position: 'relative',
            left: theme.spacing(1)
        },
        link: {
            color: theme.palette.maskColor.second
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${theme.palette.common.white}`,
            borderRadius: '50%'
        },
        dotLoadingWrapper: {
            display: 'flex',
            flexDirection: 'column-reverse',
            height: 15
        }
    }));
const getFungibleTokenItem = (getSource, isSelected, mode, addOrRemoveTokenToLocal, trustOrBlockTokenToLocal, isHiddenChainIcon, isCustomToken)=>{
    return /*#__PURE__*/ (0,react.memo)(({ data, index, style })=>{
        const t = (0,i18n_generated/* useSharedTrans */.j)();
        const { classes } = FungibleTokenItem_useStyles();
        const Others = (0,useWeb3Others/* useWeb3Others */.v)();
        const token = data.dataSet[index];
        const onSelect = data.onSelect;
        const { chainId, address, name, symbol, decimals, logoURL, balance } = token;
        const isBlocked = useTokenBlocked(address);
        const isTrust = useTokenTrusted(address, token.chainId);
        const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
        const network = (0,useNetwork/* useNetwork */.L)(pluginID, chainId);
        const { source, selected } = (0,react.useMemo)(()=>{
            return {
                source: getSource(address),
                selected: isSelected(address)
            };
        }, [
            address,
            getSource,
            isSelected
        ]);
        const [{ loading: onAddOrRemoveTokenToLocalLoading }, onAddOrRemoveTokenToLocal] = (0,useAsyncFn/* default */.Z)(async (event, strategy)=>{
            event.stopPropagation();
            if (token) await addOrRemoveTokenToLocal(token, strategy);
        }, [
            token,
            addOrRemoveTokenToLocal
        ]);
        const [{ loading: onTrustOrBlockTokenToLocalLoading }, onTrustOrBlockTokenToLocal] = (0,useAsyncFn/* default */.Z)(async (event)=>{
            event.stopPropagation();
            if (token) await trustOrBlockTokenToLocal(token, event.target.checked ? 'trust' : 'block');
        }, [
            token,
            trustOrBlockTokenToLocal
        ]);
        const explorerLink = (0,react.useMemo)(()=>{
            return Others.explorerResolver.fungibleTokenLink(token.chainId, token.address);
        }, [
            token.address,
            token.chainId,
            Others.explorerResolver.fungibleTokenLink
        ]);
        const action = (0,react.useMemo)(()=>{
            if (mode === type/* TokenListMode */.K.Manage) {
                if (source === 'personal') return /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TrashLine, {
                    onClick: (e)=>onAddOrRemoveTokenToLocal(e, 'remove'),
                    size: 24
                });
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        color: "primary",
                        disabled: onAddOrRemoveTokenToLocalLoading,
                        loading: onAddOrRemoveTokenToLocalLoading,
                        className: classes.importButton,
                        onClick: (e)=>onAddOrRemoveTokenToLocal(e, 'add'),
                        children: t.import()
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingSwitch, {
                        disabled: source === 'official-native' && mode === type/* TokenListMode */.K.Manage || onTrustOrBlockTokenToLocalLoading,
                        classes: {
                            root: classes.switch
                        },
                        onChange: async (event)=>{
                            event.stopPropagation();
                            event.preventDefault();
                            await onTrustOrBlockTokenToLocal(event);
                        },
                        size: "small",
                        checked: !isBlocked
                    })
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.balance,
                children: balance === undefined ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                    size: 24
                }) : balance === '' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                    value: balance,
                    decimals: decimals,
                    significant: 6,
                    formatter: formatBalance/* formatBalance */.a
                })
            });
        }, [
            balance,
            decimals,
            isBlocked,
            source,
            mode,
            isTrust
        ]);
        const { data: tokenBalance, isLoading: isLoadingTokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, isCustomToken ? address : '', {
            chainId
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: style,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                title: address,
                button: true,
                className: `${classes.list} dashboard token-list`,
                onClick: mode === type/* TokenListMode */.K.List ? ()=>onSelect(token) : undefined,
                disabled: !!(selected && mode === type/* TokenListMode */.K.List),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                                    className: classes.icon,
                                    chainId: chainId,
                                    address: address,
                                    name: name,
                                    logoURL: logoURL
                                }),
                                isHiddenChainIcon || !network?.iconUrl ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                                    pluginID: pluginID,
                                    chainId: chainId,
                                    className: classes.badgeIcon,
                                    size: 16
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                        classes: {
                            primary: classes.text
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                component: "span",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.symbol,
                                        children: symbol
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: `${classes.name} dashboard token-list-symbol`,
                                        children: isCustomToken ? isLoadingTokenBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.dotLoadingWrapper,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DotLoading/* DotLoading */.k, {})
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedBalance/* FormattedBalance */.B, {
                                            value: tokenBalance,
                                            decimals: decimals,
                                            significant: 6,
                                            formatter: formatBalance/* formatBalance */.a
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.nameText,
                                                    children: name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    onClick: (event)=>event.stopPropagation(),
                                                    href: explorerLink,
                                                    style: {
                                                        width: 18,
                                                        height: 18
                                                    },
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.PopupLink, {
                                                        size: 18,
                                                        className: classes.link
                                                    })
                                                }),
                                                token.isCustomToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: t.added_by_user()
                                                }) : null
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.action,
                                sx: {
                                    fontSize: 16
                                },
                                color: "textSecondary",
                                component: "span",
                                children: action
                            })
                        ]
                    })
                ]
            }, address)
        });
    });
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/ManageTokenListBar.tsx






const ManageTokenListBar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: theme.spacing(2.25, 0),
            margin: theme.spacing(2, -2, -2, -2),
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(16px)',
            borderRadius: theme.spacing(0, 0, 1.5, 1.5)
        },
        target: {
            cursor: 'pointer',
            fontWeight: 700
        }
    }));
const ManageTokenListBar = /*#__PURE__*/ (0,react.memo)(({ onClick })=>{
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = ManageTokenListBar_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        className: classes.root,
        direction: "row",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            className: classes.target,
            display: "inline-flex",
            gap: 2,
            direction: "row",
            onClick: onClick,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Edit2, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.erc20_manage_token_list()
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/FungibleTokenList/index.tsx














const SEARCH_KEYS = [
    'address',
    'symbol',
    'name'
];
const FungibleTokenList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { enableMange })=>({
        channel: {
            position: enableMange ? 'relative' : 'unset'
        },
        bar: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
        }
    }));
function FungibleTokenList(props) {
    const { tokens = constants/* EMPTY_LIST */.rP, whitelist: includeTokens, blacklist: excludeTokens = constants/* EMPTY_LIST */.rP, onSelect, onSearchError, FixedSizeListProps, selectedTokens = constants/* EMPTY_LIST */.rP, enableManage = false, isHiddenChainIcon = true, setMode, mode = type/* TokenListMode */.K.List } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = FungibleTokenList_useStyles({
        enableMange: mode === type/* TokenListMode */.K.List && enableManage
    }, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)(props.pluginID);
    const account = (0,useAccount/* useAccount */.m)(pluginID);
    const chainId = (0,useChainId/* useChainId */.x)(pluginID, props.chainId);
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    const { value: fungibleTokens = constants/* EMPTY_LIST */.rP } = useFungibleTokensFromTokenList(pluginID, {
        chainId
    });
    const { data: fungibleAssets = constants/* EMPTY_LIST */.rP } = (0,useFungibleAssets/* useFungibleAssets */.C)(pluginID, undefined, {
        chainId
    });
    const trustedFungibleTokens = (0,useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y)(pluginID, undefined, chainId);
    const blockedFungibleTokens = (0,useBlockedFungibleTokens/* useBlockedFungibleTokens */.v)(pluginID);
    const nativeToken = (0,react.useMemo)(()=>Others.chainResolver.nativeCurrency(chainId), [
        chainId
    ]);
    const filteredFungibleTokens = (0,react.useMemo)(()=>{
        const allFungibleTokens = (0,uniqBy/* default */.Z)([
            ...nativeToken ? [
                nativeToken
            ] : [],
            ...tokens,
            ...fungibleTokens,
            ...trustedFungibleTokens
        ], (x)=>x.address.toLowerCase());
        const blockedTokenAddresses = blockedFungibleTokens.map((x)=>x.address);
        return allFungibleTokens.filter((token)=>{
            const checkSameAddress = (addr)=>addr.toLowerCase() === token.address.toLowerCase();
            const isIncluded = !includeTokens || includeTokens.some(checkSameAddress);
            const isExcluded = excludeTokens.length ? excludeTokens.some(checkSameAddress) : false;
            const isBlocked = blockedTokenAddresses.some(checkSameAddress);
            return isIncluded && !isExcluded && !isBlocked;
        });
    }, [
        nativeToken,
        tokens,
        fungibleTokens,
        trustedFungibleTokens,
        includeTokens,
        excludeTokens,
        blockedFungibleTokens
    ]);
    const { value: fungibleTokensBalance = constants/* EMPTY_OBJECT */.Nu } = useFungibleTokensBalance(pluginID, filteredFungibleTokens.map((x)=>x.address), {
        account,
        chainId
    });
    // To avoid SearchableList re-render, reduce the dep
    const sortedFungibleTokensForManage = (0,react.useMemo)(()=>{
        if (mode === type/* TokenListMode */.K.List) return constants/* EMPTY_LIST */.rP;
        const isTrustedToken = (0,isSameAddress/* currySameAddress */.D)(trustedFungibleTokens.map((x)=>x.address));
        return (0,uniqBy/* default */.Z)([
            ...nativeToken ? [
                nativeToken
            ] : [],
            ...fungibleTokens,
            ...trustedFungibleTokens
        ], (x)=>x.address.toLowerCase()).sort((a, z)=>{
            // trusted token
            if (isTrustedToken(a.address)) return -1;
            if (isTrustedToken(z.address)) return 1;
            const isNativeTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, Others.getNativeTokenAddress(a.chainId));
            if (isNativeTokenA) return -1;
            const isNativeTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, Others.getNativeTokenAddress(z.chainId));
            if (isNativeTokenZ) return 1;
            // mask token with position value
            const isMaskTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, Others.getMaskTokenAddress(a.chainId));
            if (isMaskTokenA) return -1;
            const isMaskTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, Others.getMaskTokenAddress(z.chainId));
            if (isMaskTokenZ) return 1;
            if (z.rank && (!a.rank || a.rank - z.rank > 0)) return 1;
            if (a.rank && (!z.rank || z.rank - a.rank > 0)) return -1;
            // alphabet
            if (a.name !== z.name) return a.name < z.name ? -1 : 1;
            return 0;
        });
    }, [
        chainId,
        trustedFungibleTokens,
        fungibleTokens,
        nativeToken,
        mode
    ]);
    const sortedFungibleTokensForList = (0,react.useMemo)(()=>{
        if (mode === type/* TokenListMode */.K.Manage) return constants/* EMPTY_LIST */.rP;
        const fungibleAssetsTable = Object.fromEntries(fungibleAssets.filter((x)=>x.chainId === chainId).map((x)=>[
                x.address,
                x
            ]));
        const isTrustedToken = (0,isSameAddress/* currySameAddress */.D)(trustedFungibleTokens.map((x)=>x.address));
        const getTokenValue = (address)=>{
            const value = fungibleAssetsTable[address]?.value?.[specs/* CurrencyType */.V2.USD];
            return value ? (0,number/* toZero */.ux)(value) : number/* ZERO */.xE;
        };
        const { getNativeTokenAddress, getMaskTokenAddress } = Others;
        return filteredFungibleTokens.map((x)=>({
                ...x,
                // To avoid reduce re-render, merge balance into token, when value is `undefined` to represent loading
                balance: fungibleTokensBalance[x.address]
            })).sort((a, z)=>{
            // the currently selected chain id
            if (a.chainId !== z.chainId) {
                if (a.chainId === chainId) return -1;
                if (z.chainId === chainId) return 1;
            }
            // native token
            const isNativeTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, getNativeTokenAddress(a.chainId));
            if (isNativeTokenA) return -1;
            const isNativeTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, getNativeTokenAddress(z.chainId));
            if (isNativeTokenZ) return 1;
            // mask token with position value
            const aUSD = getTokenValue(a.address);
            const isMaskTokenA = (0,isSameAddress/* isSameAddress */.W)(a.address, getMaskTokenAddress(a.chainId));
            if (aUSD.isPositive() && isMaskTokenA) return -1;
            const zUSD = getTokenValue(z.address);
            const isMaskTokenZ = (0,isSameAddress/* isSameAddress */.W)(z.address, getMaskTokenAddress(z.chainId));
            if (zUSD.isPositive() && isMaskTokenZ) return 1;
            // token value
            if (!aUSD.isEqualTo(zUSD)) return zUSD.gt(aUSD) ? 1 : -1;
            const aBalance = (0,number/* leftShift */.w5)(fungibleTokensBalance[a.address] ?? '0', a.decimals);
            const zBalance = (0,number/* leftShift */.w5)(fungibleTokensBalance[z.address] ?? '0', z.decimals);
            // token balance
            if (!aBalance.isEqualTo(zBalance)) return zBalance.gt(aBalance) ? 1 : -1;
            // trusted token
            if (isTrustedToken(a.address)) return -1;
            if (isTrustedToken(z.address)) return 1;
            // mask token with position value
            if (isMaskTokenA) return -1;
            if (isMaskTokenZ) return 1;
            if (z.rank && (!a.rank || a.rank - z.rank > 0)) return 1;
            if (a.rank && (!z.rank || z.rank - a.rank > 0)) return -1;
            // alphabet
            if (a.name !== z.name) return a.name < z.name ? -1 : 1;
            return 0;
        });
    }, [
        mode,
        chainId,
        fungibleAssets,
        trustedFungibleTokens,
        filteredFungibleTokens,
        fungibleTokensBalance
    ]);
    // #region add token by address
    const [keyword, setKeyword] = (0,react.useState)('');
    const { value: addressType } = (0,useAddressType/* useAddressType */.t)(pluginID, !Others.isValidAddress?.(keyword ?? '') ? '' : keyword, {
        chainId
    });
    const isAddressNotContract = addressType !== types/* AddressType */.DL.Contract && Others.isValidAddress(keyword);
    const searchedTokenAddress = (0,react.useMemo)(()=>{
        if (!keyword) return;
        return Others.isValidAddress(keyword) && !sortedFungibleTokensForList.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, keyword)) ? keyword : '';
    }, [
        keyword,
        sortedFungibleTokensForList
    ]);
    const searchError = keyword.match(/^0x.+/i) && !Others.isValidAddress(keyword) ? t.erc20_search_wrong_address() : '';
    (0,react.useEffect)(()=>{
        onSearchError?.(!!searchError);
    }, [
        searchError,
        !searchError
    ]);
    const { data: searchedToken } = (0,useFungibleToken/* useFungibleToken */.c)(pluginID, searchedTokenAddress, undefined, {
        chainId
    });
    const isCustomToken = (0,react.useMemo)(()=>!sortedFungibleTokensForManage.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, searchedToken?.address) && searchedToken?.chainId === x.chainId) && Boolean(searchedToken), [
        sortedFungibleTokensForManage,
        searchedToken
    ]);
    const { data: tokenBalance = '' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, searchedToken?.address, {
        chainId,
        account
    });
    // #endregion
    const itemRender = (0,react.useMemo)(()=>{
        return getFungibleTokenItem((address)=>{
            if ((0,isSameAddress/* isSameAddress */.W)(nativeToken?.address, address)) return 'official-native';
            const inOfficialList = fungibleTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
            if (inOfficialList) return 'official';
            const inPersonaList = trustedFungibleTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
            if (inPersonaList) return 'personal';
            return 'external';
        }, (address)=>selectedTokens.some((x)=>(0,isSameAddress/* isSameAddress */.W)(x, address)), mode, async (token, strategy)=>{
            if (strategy === 'add') await Token?.addToken?.(account, token);
            if (strategy === 'remove') await Token?.removeToken?.(account, token);
        }, async (token, strategy)=>{
            if (strategy === 'trust') await Token?.trustToken?.(account, token);
            if (strategy === 'block') await Token?.blockToken?.(account, token);
        }, isHiddenChainIcon, isCustomToken);
    }, [
        nativeToken?.address,
        selectedTokens,
        mode,
        trustedFungibleTokens,
        fungibleTokens,
        isCustomToken,
        isHiddenChainIcon
    ]);
    const SearchFieldProps = (0,react.useMemo)(()=>({
            placeholder: t.erc20_token_list_placeholder(),
            helperText: searchError,
            error: !!searchError,
            ...props.SearchTextFieldProps
        }), [
        searchError,
        JSON.stringify(props.SearchTextFieldProps)
    ]);
    const [, startTransition] = (0,react.useTransition)();
    const handleSelect = (0,react.useCallback)((token)=>startTransition(()=>onSelect?.(token)), [
        onSelect
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        className: classes.channel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchableList, {
                onSelect: handleSelect,
                onSearch: setKeyword,
                data: isAddressNotContract ? constants/* EMPTY_LIST */.rP : searchedToken && (0,isSameAddress/* isSameAddress */.W)(searchedToken.address, searchedTokenAddress) ? // balance field work for case: user search someone token by contract and whitelist is empty.
                [
                    {
                        ...searchedToken,
                        balance: tokenBalance,
                        isCustomToken
                    }
                ] : mode === type/* TokenListMode */.K.List ? sortedFungibleTokensForList : sortedFungibleTokensForManage,
                searchKey: SEARCH_KEYS,
                disableSearch: !!props.disableSearch,
                itemKey: "address",
                classes: {
                    listBox: classes.listBox,
                    searchInput: classes.searchInput
                },
                itemRender: itemRender,
                FixedSizeListProps: FixedSizeListProps,
                SearchFieldProps: SearchFieldProps
            }),
            mode === type/* TokenListMode */.K.List && enableManage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.bar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ManageTokenListBar, {
                    onClick: ()=>setMode?.(type/* TokenListMode */.K.Manage)
                })
            }) : null
        ]
    });
}
FungibleTokenList.displayName = 'FungibleTokenList';


/***/ }),

/***/ 45889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TokenListMode)
/* harmony export */ });
var TokenListMode;
(function(TokenListMode) {
    TokenListMode["List"] = 'list';
    TokenListMode["Manage"] = 'manage';
})(TokenListMode || (TokenListMode = {}));


/***/ }),

/***/ 176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SettingsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54225);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8772);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81128);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98705);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42938);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);
/* harmony import */ var _types_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14821);






const DEFAULT_SLIPPAGE_TOLERANCE = 0.5;
const DEFAULT_SLIPPAGE_TOLERANCES = [
    0.5,
    1,
    2,
    5
];
const IN_MEMORY_CACHE = {
    lastSelectedGasOptionType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL,
    lastSelectedGasSettingsType: _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic
};
function useSettingsContext(initial) {
    const t = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .useSharedTrans */ .j)();
    const { pluginID } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)(initial?.pluginID);
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useChainContext */ .ql)({
        chainId: initial?.chainId
    });
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3Others */ .v)(pluginID);
    const [transactionOptions, setTransactionOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial?.transaction);
    const [slippageTolerance, setSlippageTolerance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial?.slippageTolerance ?? DEFAULT_SLIPPAGE_TOLERANCE);
    const networkSignature = `${pluginID}_${chainId}`;
    const transactionSignature = Others.getTransactionSignature(chainId, transactionOptions) ?? '';
    const needToResetByNetwork = !!IN_MEMORY_CACHE?.lastNetworkSignature && IN_MEMORY_CACHE.lastNetworkSignature !== networkSignature;
    const needToResetByTransaction = !!IN_MEMORY_CACHE?.lastTransactionSignature && IN_MEMORY_CACHE.lastTransactionSignature !== transactionSignature;
    const [gasSettingsType, setGasSettingsType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(needToResetByNetwork || needToResetByTransaction ? _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic : IN_MEMORY_CACHE.lastSelectedGasSettingsType);
    const [gasOptionType, setGasOptionType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(needToResetByNetwork || needToResetByTransaction ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL : IN_MEMORY_CACHE.lastSelectedGasOptionType);
    const { data: gasOptions, isLoading: gasOptionsLoading, error: gasOptionsError, refetch: gasOptionRetry } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useGasOptions */ .o)(pluginID, {
        chainId
    });
    const onClearInMemoryCache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        delete IN_MEMORY_CACHE.lastNetworkSignature;
        delete IN_MEMORY_CACHE.lastTransactionSignature;
        IN_MEMORY_CACHE.lastSelectedGasOptionType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL;
        IN_MEMORY_CACHE.lastSelectedGasSettingsType = _types_index_js__WEBPACK_IMPORTED_MODULE_2__/* .GasSettingsType */ .g.Basic;
    }, []);
    const onResetAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setSlippageTolerance(1);
        setGasOptionType(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL);
        setTransactionOptions(undefined);
        gasOptionRetry();
        onClearInMemoryCache();
    }, [
        gasOptionRetry,
        onClearInMemoryCache
    ]);
    (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_7__/* .useSingleBlockBeatRetry */ .gm)(pluginID, async ()=>{
        if (initial?.disableGasPrice) return;
        gasOptionRetry();
    });
    // sync in-memory cache
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        IN_MEMORY_CACHE.lastNetworkSignature = networkSignature;
        IN_MEMORY_CACHE.lastTransactionSignature = transactionSignature;
        IN_MEMORY_CACHE.lastSelectedGasOptionType = gasOptionType;
        IN_MEMORY_CACHE.lastSelectedGasSettingsType = gasSettingsType;
    }, [
        gasOptionType,
        gasSettingsType,
        networkSignature,
        transactionSignature
    ]);
    return {
        DEFAULT_SLIPPAGE_TOLERANCE,
        DEFAULT_SLIPPAGE_TOLERANCES,
        GAS_OPTION_NAMES: {
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.FAST]: t.gas_settings_gas_option_type_fast(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL]: t.gas_settings_gas_option_type_normal(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.SLOW]: t.gas_settings_gas_option_type_slow(),
            [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.CUSTOM]: ''
        },
        pluginID,
        chainId,
        transaction: initial?.transaction,
        transactionOptions,
        setTransactionOptions,
        slippageTolerance,
        setSlippageTolerance,
        gasOptionType,
        setGasOptionType,
        gasSettingsType,
        setGasSettingsType,
        gasOptions,
        gasOptionsLoading,
        gasOptionsError,
        gasOptionRetry,
        resetAll: onResetAll
    };
}
const SettingsContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_8__/* .createContainer */ .f)(useSettingsContext);


/***/ }),

/***/ 14821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ GasSettingsType)
/* harmony export */ });
var GasSettingsType;
(function(GasSettingsType) {
    GasSettingsType["Basic"] = "Basic";
    GasSettingsType["Advanced"] = "Advanced";
})(GasSettingsType || (GasSettingsType = {}));


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

/***/ 40025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ WalletStatusBox)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/theme/src/Theme/colors.ts
var colors = __webpack_require__(38060);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useBalance.ts
var useBalance = __webpack_require__(75607);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/wallet/FormattedAddress.tsx
var FormattedAddress = __webpack_require__(86244);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(60574);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useClearTransactionsCallback.ts



function useClearTransactionsCallback(pluginID) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,react.useCallback)(async ()=>{
        if (!account) return;
        return Transaction?.clearTransactions?.(chainId, account);
    }, [
        chainId,
        account,
        Transaction
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRemoveTransaction.ts



function useRemoveTransactionCallback(pluginID) {
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { Transaction } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,react.useCallback)(async (id)=>{
        if (!account) return;
        await Transaction?.removeTransaction?.(chainId, account, id);
    }, [
        chainId,
        account,
        Transaction
    ]);
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js + 1 modules
var values = __webpack_require__(77393);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(27043);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(84973);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/filter.js + 1 modules
var filter = __webpack_require__(3311);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./packages/web3-constants/evm/aave.json
var aave = __webpack_require__(25828);
// EXTERNAL MODULE: ./packages/web3-constants/evm/artblocks.json
var artblocks = __webpack_require__(978);
// EXTERNAL MODULE: ./packages/web3-constants/evm/gitcoin.json
var gitcoin = __webpack_require__(72071);
// EXTERNAL MODULE: ./packages/web3-constants/evm/lido.json
var lido = __webpack_require__(3278);
// EXTERNAL MODULE: ./packages/web3-constants/evm/mask-box.json
var mask_box = __webpack_require__(1353);
// EXTERNAL MODULE: ./packages/web3-constants/evm/nft-red-packet.json
var nft_red_packet = __webpack_require__(62337);
// EXTERNAL MODULE: ./packages/web3-constants/evm/red-packet.json
var red_packet = __webpack_require__(19684);
// EXTERNAL MODULE: ./packages/web3-constants/evm/trader.json
var trader = __webpack_require__(25189);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/getContractOwnerDomain.ts









const collect = (data, fields)=>{
    const groupedByFields = (0,values/* default */.Z)((0,pick/* default */.Z)(data, fields));
    const listOfAddresses = groupedByFields.map((v)=>(0,values/* default */.Z)(v));
    const listOfAddress = (0,flatten/* default */.Z)(listOfAddresses);
    const collected = (0,filter/* default */.Z)((0,uniq/* default */.Z)(listOfAddress), Boolean);
    return collected.map((addr)=>addr.toLowerCase());
};
const domainAddressMap = {
    'uniswap.org': collect(trader, [
        'UNISWAP_V2_ROUTER_ADDRESS',
        'UNISWAP_V2_FACTORY_ADDRESS',
        'UNISWAP_SWAP_ROUTER_ADDRESS',
        'UNISWAP_V3_FACTORY_ADDRESS',
        'UNISWAP_V3_QUOTER_ADDRESS'
    ]),
    'defikingdoms.com': collect(trader, [
        'DEFIKINGDOMS_ROUTER_ADDRESS',
        'DEFIKINGDOMS_FACTORY_ADDRESS'
    ]),
    'app.openswap.one': collect(trader, [
        'OPENSWAP_ROUTER_ADDRESS',
        'OPENSWAP_FACTORY_ADDRESS'
    ]),
    'viper.exchange': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'viperswap.one': collect(trader, [
        'VENOMSWAP_ROUTER_ADDRESS',
        'VENOMSWAP_FACTORY_ADDRESS'
    ]),
    'www.sushi.com': collect(trader, [
        'SUSHISWAP_ROUTER_ADDRESS',
        'SUSHISWAP_FACTORY_ADDRESS'
    ]),
    'quickswap.exchange': collect(trader, [
        'QUICKSWAP_ROUTER_ADDRESS',
        'QUICKSWAP_FACTORY_ADDRESS'
    ]),
    'pancakeswap.finance': collect(trader, [
        'PANCAKESWAP_ROUTER_ADDRESS',
        'PANCAKESWAP_FACTORY_ADDRESS'
    ]),
    'dodoex.io': collect(trader, [
        'DODO_EXCHANGE_PROXY_ADDRESS'
    ]),
    'www.bancor.network': collect(trader, [
        'BANCOR_EXCHANGE_PROXY_ADDRESS'
    ]),
    'traderjoexyz.com': collect(trader, [
        'TRADERJOE_ROUTER_ADDRESS',
        'TRADERJOE_FACTORY_ADDRESS'
    ]),
    'openocean.finance': collect(trader, [
        'OPENOCEAN_EXCHANGE_PROXY_ADDRESS'
    ]),
    'pangolin.exchange': collect(trader, [
        'PANGOLIN_ROUTER_ADDRESS',
        'PANGOLIN_FACTORY_ADDRESS'
    ]),
    'wannaswap.finance': collect(trader, [
        'WANNASWAP_ROUTER_V2_ADDRESS',
        'WANNASWAP_ROUTER_ADDRESS',
        'WANNASWAP_FACTORY_ADDRESS'
    ]),
    'yumiswap.com': collect(trader, [
        'YUMISWAP_ROUTER_ADDRESS',
        'YUMISWAP_FACTORY_ADDRESS'
    ]),
    'www.trisolaris.io': collect(trader, [
        'TRISOLARIS_ROUTER_ADDRESS',
        'TRISOLARIS_FACTORY_ADDRESS'
    ]),
    'mdex.com': collect(trader, [
        'MDEX_ROUTER_ADDRESS',
        'MDEX_FACTORY_ADDRESS'
    ]),
    'aave.com': collect(aave, [
        'AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS'
    ]),
    'www.artblocks.io': collect(artblocks, [
        'GEN_ART_721_MINTER'
    ]),
    'gitcoin.co': collect(gitcoin, [
        'GITCOIN_ETH_ADDRESS',
        'BULK_CHECKOUT_ADDRESS'
    ]),
    'lido.fi': collect(lido, [
        'LIDO_stETH_ADDRESS',
        'LIDO_REFERRAL_ADDRESS'
    ]),
    'mask.io': [
        ...collect(red_packet, [
            'HAPPY_RED_PACKET_ADDRESS_V1',
            'HAPPY_RED_PACKET_ADDRESS_V2',
            'HAPPY_RED_PACKET_ADDRESS_V3',
            'HAPPY_RED_PACKET_ADDRESS_V4'
        ]),
        ...collect(nft_red_packet, [
            'RED_PACKET_NFT_ADDRESS'
        ]),
        ...collect(mask_box, [
            'MASK_BOX_CONTRACT_ADDRESS'
        ])
    ]
};
// Not very common usage, no need to create a map of address-to-domain
function getContractOwnerDomain(address) {
    if (!address) return address;
    const addr = address.toLowerCase();
    const pair = Object.entries(domainAddressMap).find(([, addresses])=>{
        return addresses.includes(addr);
    });
    return pair ? pair[0] : addr;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/TransactionList.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        list: {
            borderRadius: 8,
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            padding: 0
        },
        listItem: {
            height: 52,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1, 1),
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.background.default
            }
        },
        transaction: {
            width: '100%'
        },
        methodName: {
            fontWeight: 500,
            textTransform: 'capitalize',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        timestamp: {
            lineHeight: '18px'
        },
        cell: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            boxSizing: 'border-box'
        },
        linkText: {
            lineHeight: '18px'
        },
        link: {
            display: 'flex'
        },
        linkIcon: {
            // TODO: replace with theme color
            color: theme.palette.mode === 'dark' ? '#F5F5F5' : '#07101B',
            width: 17.5,
            height: 17.5,
            marginLeft: theme.spacing(0.5)
        },
        clear: {
            color: vars/* MaskColorVar */.Z.blue,
            cursor: 'pointer'
        }
    }));
const statusTextColorMap = {
    [specs.TransactionStatusType.NOT_DEPEND]: '#FFB915',
    [specs.TransactionStatusType.SUCCEED]: '#60DFAB',
    [specs.TransactionStatusType.FAILED]: '#FF5F5F'
};
function Transaction({ chainId, transaction: tx, onClear = noop/* default */.Z, ...rest }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, theme } = useStyles();
    const statusTextMap = {
        [specs.TransactionStatusType.NOT_DEPEND]: t.recent_transaction_pending(),
        [specs.TransactionStatusType.SUCCEED]: t.recent_transaction_success(),
        [specs.TransactionStatusType.FAILED]: t.recent_transaction_failed()
    };
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { TransactionFormatter, TransactionWatcher } = (0,useWeb3State/* useWeb3State */.d)();
    const address = (tx._tx.to || '').toLowerCase();
    const { value: functionName } = (0,useAsync/* default */.Z)(async ()=>{
        const formattedTransaction = await TransactionFormatter?.formatTransaction(chainId, tx._tx);
        return formattedTransaction?.title ?? 'Contract Interaction';
    }, [
        TransactionFormatter
    ]);
    const handleClear = (0,react.useCallback)(()=>{
        onClear(tx);
    }, [
        onClear,
        tx
    ]);
    const domainOrAddress = (0,react.useMemo)(()=>getContractOwnerDomain(address), [
        address
    ]);
    const [txStatus, setTxStatus] = (0,react.useState)(tx.status);
    (0,react.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('progress', (chainId, id, status, transaction)=>{
            setTxStatus(status);
        });
        return ()=>{
            off?.();
        };
    }, [
        tx.id,
        TransactionWatcher
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                textAlign: "left",
                md: 4,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    overflow: "hidden",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.methodName,
                            title: functionName || '',
                            variant: "body1",
                            fontWeight: 500,
                            children: functionName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.timestamp,
                            variant: "body1",
                            color: theme.palette.text.secondary,
                            children: (0,format/* default */.Z)(tx.createdAt, 'yyyy.MM.dd HH:mm')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                flexGrow: 1,
                md: 4,
                justifyContent: "right",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.linkText,
                        children: address && (0,isSameAddress/* isSameAddress */.W)(domainOrAddress, address) ? Others.formatAddress(address, 4) : domainOrAddress || address
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.link,
                        href: Others.explorerResolver.transactionLink?.(chainId, tx.id),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                            className: classes.linkIcon
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 400,
                    justifyContent: "center",
                    color: statusTextColorMap[txStatus],
                    fontSize: 14,
                    children: statusTextMap[txStatus]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                className: classes.cell,
                md: 2,
                justifyContent: "right",
                children: txStatus === specs.TransactionStatusType.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 300,
                    className: classes.clear,
                    onClick: handleClear,
                    children: t.wallet_status_pending_clear()
                }) : null
            })
        ]
    });
}
const TransactionList = /*#__PURE__*/ (0,react.forwardRef)(({ className, transactions, onClear = noop/* default */.Z, ...rest }, ref)=>{
    const { classes, cx } = useStyles();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    if (!transactions.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: cx(classes.list, className),
        ...rest,
        ref: ref,
        children: transactions.map((tx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transaction, {
                    className: classes.transaction,
                    transaction: tx,
                    chainId: chainId,
                    onClear: onClear
                })
            }, tx.id))
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/usePendingTransactions.tsx








const usePendingTransactions_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        summaryWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: theme.spacing(1, 1)
        },
        pendingSummary: {
            cursor: 'default',
            color: theme.palette.maskColor.warn
        },
        clearAll: {
            cursor: 'pointer',
            color: theme.palette.mode === 'light' ? vars/* MaskColorVar */.Z.blue : theme.palette.common.white
        },
        hide: {
            display: 'none'
        }
    }));
function usePendingTransactions() {
    const { classes, cx } = usePendingTransactions_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    // #region recent pending transactions
    const pendingTransactions = (0,useRecentTransactions/* useRecentTransactions */.S)(undefined, specs.TransactionStatusType.NOT_DEPEND);
    // frozenTxes would not be reactive to pendingTransactions,
    // it would be recreated then the list shows up.
    const [meltedTxHashes, setMeltedTxHashes] = (0,react.useState)([]);
    const clearRecentTxes = useClearTransactionsCallback();
    const removeRecentTx = useRemoveTransactionCallback();
    const transactions = pendingTransactions.slice(0, 5).filter((tx)=>!meltedTxHashes.includes(tx.id));
    // #endregion
    const summary = pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: classes.summaryWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(pendingTransactions.length ? '' : classes.hide),
                children: pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.pendingSummary,
                    variant: "body2",
                    mr: 1,
                    fontWeight: 700,
                    children: t.wallet_status_pending({
                        count: pendingTransactions.length
                    })
                }) : null
            }),
            pendingTransactions.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.clearAll,
                onClick: clearRecentTxes,
                fontWeight: 700,
                children: t.wallet_status_pending_clear_all()
            }) : null
        ]
    }) : null;
    const transactionList = transactions.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionList, {
        transactions: transactions,
        onClear: (tx)=>{
            setMeltedTxHashes((list)=>[
                    ...list,
                    tx.id
                ]);
            removeRecentTx(tx.id);
        }
    }) : null;
    return {
        summary,
        transactionList
    };
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletStatusBox/index.tsx











const WalletStatusBox_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { contentBackground, disableChange, withinRiskWarningDialog, textColor })=>({
        currentAccount: {
            padding: theme.spacing(0, 1.5),
            marginBottom: withinRiskWarningDialog ? '7px' : theme.spacing(2),
            display: 'flex',
            background: contentBackground ?? (Sniffings/* Sniffings */.Y.is_dashboard_page ? (0,vars/* getMaskColor */.n)(theme).primaryBackground2 : theme.palette.background.default),
            borderRadius: 8,
            alignItems: 'center',
            height: disableChange ? 60 : 82
        },
        dashboardBackground: {
            background: theme.palette.background.default
        },
        accountInfo: {
            fontSize: 16,
            flexGrow: 1,
            marginLeft: theme.spacing(1.5)
        },
        accountName: {
            color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.dark : textColor,
            fontWeight: 700,
            marginRight: 5,
            lineHeight: '18px'
        },
        balance: {
            color: !Sniffings/* Sniffings */.Y.is_dashboard_page ? theme.palette.maskColor.dark : textColor,
            paddingTop: 2,
            lineHeight: '18px'
        },
        infoRow: {
            display: 'flex',
            alignItems: 'center'
        },
        actionButton: {
            fontSize: 12,
            color: 'white',
            backgroundColor: theme.palette.maskColor.dark,
            marginLeft: theme.spacing(1),
            padding: theme.spacing(1, 2),
            '&:hover': {
                backgroundColor: theme.palette.maskColor.dark
            }
        },
        link: {
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        connectButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        icon: {
            width: 17.5,
            height: 17.5,
            marginRight: theme.spacing(0.5)
        },
        copyIcon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? textColor : theme.palette.maskColor.dark
        },
        linkIcon: {
            color: Sniffings/* Sniffings */.Y.is_dashboard_page ? textColor : theme.palette.maskColor?.dark
        },
        statusBox: {
            position: 'relative'
        }
    }));
function WalletStatusBox(props) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes, cx } = WalletStatusBox_useStyles({
        contentBackground: providerDescriptor?.backgroundGradient ?? theme.palette.maskColor.publicBg,
        disableChange: props.disableChange,
        withinRiskWarningDialog: props.withinRiskWarningDialog,
        textColor: providerDescriptor?.type === types/* ProviderType */.lP.MaskWallet ? theme.palette.maskColor.dark : theme.palette.text.primary
    });
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { data: balance = '0', isLoading: loadingBalance } = (0,useBalance/* useBalance */.K)();
    const { data: nativeToken, isLoading: loadingNativeToken } = (0,useNativeToken/* useNativeToken */.u)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)();
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(undefined, account);
    const { summary: pendingSummary, transactionList } = usePendingTransactions();
    if (!Others.isValidAddress(account)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: classes.connectButtonWrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: cx(classes.actionButton),
                color: "primary",
                variant: "contained",
                size: "small",
                onClick: ()=>modals/* SelectProviderModal */.ge.open(),
                children: t.plugin_wallet_on_connect()
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: cx(classes.statusBox, classes.currentAccount, Sniffings/* Sniffings */.Y.is_dashboard_page ? classes.dashboardBackground : ''),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        size: 30,
                        badgeSize: 12,
                        mainIcon: providerDescriptor?.icon,
                        badgeIcon: chainIdValid ? networkDescriptor?.icon : undefined
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.accountInfo,
                        children: [
                            types/* ProviderType */.lP.MaskWallet === providerDescriptor?.type ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accountName,
                                children: wallet?.name
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.infoRow,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.accountName,
                                        children: domain ? Others.formatDomainName(domain) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormattedAddress/* FormattedAddress */.K, {
                                            address: account,
                                            size: 4,
                                            formatter: Others.formatAddress
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                                        theme: Theme_theme/* MaskLightTheme */.C,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                            className: cx(classes.icon, classes.copyIcon),
                                            color: colors/* MaskColors */.m.light.maskColor.dark,
                                            size: 17.5,
                                            text: account
                                        })
                                    }),
                                    chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.link,
                                        href: Others.explorerResolver.addressLink(chainId, account) ?? '',
                                        target: "_blank",
                                        title: t.plugin_wallet_view_on_explorer(),
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            className: cx(classes.icon, classes.linkIcon)
                                        })
                                    }) : null
                                ]
                            }),
                            props.withinRiskWarningDialog ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.infoRow,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    children: loadingNativeToken || loadingBalance ? '-' : `${(0,formatBalance/* formatBalance */.a)(balance, nativeToken?.decimals, 3)} ${nativeToken?.symbol}`
                                })
                            })
                        ]
                    }),
                    !props.disableChange && /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: cx(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: async ()=>{
                                    props.closeDialog?.();
                                    // TODO: remove this after global dialog be implement
                                    await (0,esm/* delay */.gw)(500);
                                    modals/* WalletStatusModal */.L9.close();
                                    await Web3.disconnect();
                                },
                                children: t.plugin_wallet_disconnect()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: cx(classes.actionButton),
                                variant: "contained",
                                size: "small",
                                onClick: ()=>{
                                    modals/* SelectProviderModal */.ge.open();
                                    props.closeDialog?.();
                                },
                                children: t.wallet_status_button_change()
                            })
                        ]
                    })
                ]
            }),
            props.showPendingTransaction ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    pendingSummary,
                    transactionList
                ]
            }) : null
        ]
    });
}


/***/ }),

/***/ 86457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ConnectWalletModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82897);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24002);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54677);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(837);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15256);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65174);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(90138);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8772);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98748);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72385);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(24770);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23935);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(20419);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(90097);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84305);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20701);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96732);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81128);
/* harmony import */ var _contexts_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80922);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme, props)=>({
        dialog: {
            minHeight: 'auto !important',
            [`.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.paper}`]: {
                minHeight: 'unset !important'
            }
        },
        dialogContent: {
            padding: theme.spacing(2)
        },
        cardContent: {
            padding: theme.spacing('22px', '12px'),
            borderRadius: 8,
            background: props.contentBackground ?? theme.palette.background.default
        },
        tipContent: {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginTop: 12,
            backgroundColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .MaskColorVar */ .Z.warningBackground,
            padding: '13px 12px',
            borderRadius: 8
        },
        tipContentText: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .MaskColorVar */ .Z.warning,
            fontSize: 13,
            marginLeft: 8.5
        },
        tipLink: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .MaskColorVar */ .Z.warning,
            textDecoration: 'underline'
        },
        connectWith: {
            fontSize: '14px',
            color: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Sniffings */ .Y.is_dashboard_page ? '#07101B' : theme.palette.maskColor.dark,
            fontWeight: 700
        },
        error: {
            paddingRight: theme.spacing(1)
        },
        progressIcon: {
            fontSize: 14,
            color: theme.palette.common.white
        },
        progress: {
            color: theme.palette.common.black
        },
        warningTriangleIcon: {
            fontSize: 20
        },
        retryButton: {
            fontSize: 12,
            backgroundColor: theme.palette.maskColor.publicMain,
            color: theme.palette.maskColor.white,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.publicMain,
                color: theme.palette.maskColor.white
            }
        }
    }));
const ConnectWalletModal = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const t = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_7__/* .useSharedTrans */ .j)();
    const connectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { pluginID, providerType, networkType } = connectionRef.current ?? {};
    const providerDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_8__/* .useProviderDescriptor */ .f)(pluginID, providerType);
    const networkDescriptor = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkDescriptor */ .V)(pluginID, networkType);
    const { classes } = useStyles({
        contentBackground: providerDescriptor?.backgroundGradient
    });
    const Web3 = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_10__/* .useWeb3Connection */ .T)(pluginID, {
        providerType
    });
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_11__/* .useWeb3Others */ .v)(pluginID);
    const [{ loading, value: connected, error }, onConnect] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(async ()=>{
        if (!connectionRef.current) throw new Error('Failed to connect to provider.');
        const { pluginID, providerType, networkType } = connectionRef.current;
        const chainId = Others.networkResolver.networkChainId(networkType);
        if (!chainId) throw new Error('Failed to connect to provider.');
        try {
            const account = await Web3.connect({
                chainId,
                providerType
            });
            if (!account) throw new Error('Failed to build connection.');
        } catch (err) {
            throw new Error(err instanceof Error ? err.message : 'Failed to connect to provider.');
        }
        const site = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .getSiteType */ .sv)();
        if (pluginID && site) {
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .pluginIDsSettings */ .Mo.value = {
                ..._masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .pluginIDsSettings */ .Mo.value,
                [site]: pluginID
            };
        }
        return true;
    }, [
        connectionRef.current,
        Others,
        Web3
    ]);
    const [open, dispatch] = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_15__/* .useSingletonModal */ .g)(ref, {
        async onOpen (props) {
            connectionRef.current = {
                pluginID: props.pluginID ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .NetworkPluginID */ .F.PLUGIN_EVM,
                networkType: props.networkType,
                providerType: props.providerType
            };
            const connected = await onConnect();
            if (connected === true) dispatch?.close(true);
        }
    });
    if (!open) return null;
    if (!pluginID || !providerType || !networkType) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_index_js__WEBPACK_IMPORTED_MODULE_17__/* .InjectedDialog */ .F, {
        title: t.plugin_wallet_dialog_title(),
        open: open,
        onClose: ()=>dispatch?.close(false),
        maxWidth: "sm",
        className: classes.dialog,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
            className: classes.dialogContent,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    elevation: 0,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        className: `${classes.cardContent} dashboard-style`,
                        elevation: 0,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_22__/* .WalletIcon */ .o, {
                                    size: 30,
                                    badgeSize: 12,
                                    mainIcon: providerDescriptor?.icon,
                                    badgeIcon: networkDescriptor?.icon
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                    display: "flex",
                                    flex: 1,
                                    flexDirection: "column",
                                    sx: {
                                        marginLeft: 2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                            className: classes.connectWith,
                                            children: [
                                                loading ? t.plugin_wallet_connect_to() : connected ? t.plugin_wallet_connected_to() : t.plugin_wallet_connect_to(),
                                                ' ',
                                                Others.providerResolver.providerName(providerType)
                                            ]
                                        }),
                                        loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_24__/* .LoadingBase */ .S, {
                                                    className: classes.progressIcon,
                                                    size: 14,
                                                    sx: {
                                                        marginRight: 1
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                    variant: "body2",
                                                    className: classes.progress,
                                                    children: t.initializing()
                                                })
                                            ]
                                        }) : null,
                                        !loading && error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                            className: classes.error,
                                            color: "red",
                                            variant: "body2",
                                            children: error.message?.includes('Already processing eth_requestAccounts') || error.message?.includes("Request of type 'wallet_requestPermissions' already pending for origin") ? t.plugin_wallet_metamask_error_already_request() : error.message ?? 'Something went wrong.'
                                        }) : null
                                    ]
                                }),
                                !connected && error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_25__/* .ActionButton */ .K, {
                                    loading: loading,
                                    color: "primary",
                                    onClick: onConnect,
                                    disabled: loading,
                                    className: classes.retryButton,
                                    children: t.plugin_wallet_connect_to_retry()
                                }) : null
                            ]
                        })
                    })
                }),
                providerDescriptor?.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_26__/* .ProviderType */ .lP.WalletConnect ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                    className: classes.tipContent,
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_27__.WarningTriangle, {
                            className: classes.warningTriangleIcon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            className: classes.tipContentText,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .Trans */ .cC, {
                                i18nKey: "plugin_wallet_connect_tip",
                                components: {
                                    providerLink: Others.providerResolver.providerHomeLink(providerType) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        className: classes.tipLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: Others.providerResolver.providerHomeLink(providerType)
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {})
                                },
                                values: {
                                    providerName: Others.providerResolver.providerName(providerType),
                                    providerShortenLink: Others.providerResolver.providerShortenLink(providerType)
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
});


/***/ }),

/***/ 19612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ SelectGasSettingsModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SettingsBoard/Context.tsx
var Context = __webpack_require__(176);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatCurrency.ts
var formatCurrency = __webpack_require__(48245);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Divider/Divider.js
var Divider = __webpack_require__(31673);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceStrict/index.js
var formatDistanceStrict = __webpack_require__(18521);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(27383);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/index.js + 5 modules
var en_US = __webpack_require__(23441);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/ja/index.js + 5 modules
var ja = __webpack_require__(65777);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/zh-TW/index.js + 5 modules
var zh_TW = __webpack_require__(94941);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/zh-CN/index.js + 6 modules
var zh_CN = __webpack_require__(2135);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/ko/index.js + 5 modules
var ko = __webpack_require__(43685);
// EXTERNAL MODULE: ./packages/public-api/src/web.ts
var web = __webpack_require__(64455);
;// CONCATENATED MODULE: ./packages/web3-shared/base/src/helpers/getLocale.ts


function getLocale(lang) {
    if (lang === web/* SupportedLanguages */.iu.enUS) return en_US/* default */.Z;
    if (lang === web/* SupportedLanguages */.iu.jaJP) return ja/* default */.Z;
    if (lang === web/* SupportedLanguages */.iu.zhTW) return zh_TW/* default */.Z;
    if (lang === web/* SupportedLanguages */.iu.zhCN) return zh_CN/* default */.Z;
    if (lang === web/* SupportedLanguages */.iu.koKR) return ko/* default */.Z;
    return en_US/* default */.Z;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/CheckCircle.js


/* harmony default export */ const CheckCircle = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(6184);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/GasOption.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontWeight: 700,
            padding: theme.spacing(2.5, 0)
        },
        type: {
            fontWeight: 700,
            color: theme.palette.text.primary,
            margin: theme.spacing(0, 0.5, 0, 1),
            fontSize: 16
        },
        estimate: {
            flex: 1,
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: 16
        },
        amount: {
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: 16
        }
    };
});
function GasOption(props) {
    const { type, option, lang, checked = false, onClick } = props;
    const { classes } = useStyles();
    const theme = (0,useTheme/* default */.Z)();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { GAS_OPTION_NAMES } = Context/* SettingsContext */.J.useContainer();
    const now = (0,react.useMemo)(()=>{
        return new Date();
    }, [
        option
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        style: {
            color: checked ? theme.palette.maskColor.primary : theme.palette.maskColor.line
        },
        onClick: onClick,
        children: [
            checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle, {
                color: "inherit"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {
                color: "inherit"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.type,
                children: GAS_OPTION_NAMES[type]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.estimate,
                children: t.gas_settings_gas_option_estimate_distance({
                    distance: (0,formatDistanceStrict/* default */.Z)((0,addSeconds/* default */.Z)(now, option.estimatedSeconds), now, {
                        addSuffix: true,
                        locale: getLocale(lang)
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.amount,
                children: t.gas_settings_gas_option_amount_in_gwei({
                    amount: (0,formatCurrency/* formatCurrency */.x)((0,formatter/* formatWeiToGwei */.f1)(option.suggestedMaxFeePerGas), '')
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/GasOptionSelector.tsx








const GasOptionSelector_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            boxShadow: `0px 0px 20px 0px ${theme.palette.mode === 'dark' ? '#FFFFFF1F' : '#0000000D'}`,
            backdropFilter: 'blur(16px)',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            marginTop: theme.spacing(2)
        },
        content: {
            padding: theme.spacing(0.5, 2)
        },
        skeleton: {
            height: 201.5,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        rectangle: {
            borderRadius: 16
        }
    };
});
function GasOptionSelector(props) {
    const { chainId, options, onChange } = props;
    const { classes } = GasOptionSelector_useStyles();
    const { gasOptionType, setGasOptionType } = Context/* SettingsContext */.J.useContainer();
    const isEIP1559 = entry/* Others */.ej.chainResolver.isFeatureSupported(chainId, 'EIP1559');
    const onClick = (0,react.useCallback)((type, option)=>{
        setGasOptionType(type);
        onChange?.(isEIP1559 ? {
            maxFeePerGas: option.suggestedMaxFeePerGas,
            maxPriorityFeePerGas: option.suggestedMaxPriorityFeePerGas
        } : {
            gasPrice: option.suggestedMaxFeePerGas
        });
    }, [
        isEIP1559,
        onChange
    ]);
    (0,react.useEffect)(()=>{
        if (!options) return;
        onClick(gasOptionType, options[gasOptionType]);
    }, [
        gasOptionType,
        options
    ]);
    if (!options) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.skeleton,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.rectangle,
                    height: 62,
                    variant: "rectangular"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.rectangle,
                    height: 62,
                    variant: "rectangular"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.rectangle,
                    height: 62,
                    variant: "rectangular"
                })
            ]
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.content,
            children: Object.entries(options).map(([type, option], i)=>{
                const type_ = type;
                if (type === specs/* GasOptionType */.Qd.CUSTOM) return;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                        i === 0 ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(GasOption, {
                            type: type_,
                            option: option,
                            checked: type_ === gasOptionType,
                            onClick: ()=>onClick(type_, option)
                        })
                    ]
                }, type);
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/Section.tsx



const Section_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {},
        title: {
            fontWeight: 700,
            margin: theme.spacing(3, 0, 2)
        }
    };
});
function Section(props) {
    const { title, additions, children } = props;
    const { classes } = Section_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: title
                    }),
                    additions ?? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                ]
            }),
            children
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(83407);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(77821);
;// CONCATENATED MODULE: ./packages/theme/src/Components/Alert/index.tsx




const Alert_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(2),
            padding: 11,
            borderRadius: 4
        },
        message: {
            fontSize: 14,
            fontWeight: 400,
            padding: 0
        },
        icon: {
            width: 22,
            height: 22,
            padding: 0
        },
        action: {
            padding: 0
        },
        standardWarning: {
            color: theme.palette.maskColor.warn,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.warn, 0.1)
        },
        standardError: {
            color: theme.palette.maskColor.danger,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.danger, 0.1)
        }
    }));
const MaskAlert = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { children, ...rest } = props;
    const { classes } = Alert_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
        ...rest,
        ref: ref,
        classes: {
            root: classes.root,
            message: classes.message,
            icon: classes.icon,
            action: classes.action,
            standardWarning: classes.standardWarning,
            standardError: classes.standardError,
            ...rest.classes
        },
        children: children
    });
});

// EXTERNAL MODULE: ./packages/theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@3.1.1_react-hook-form@7.45.2/node_modules/@hookform/resolvers/zod/dist/zod.mjs + 1 modules
var zod = __webpack_require__(28181);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/hooks/useGasSchema.ts





const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
function useGasSchema(chainId, transaction, gasOptions) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t.gas_settings_error_gas_limit_absence()).refine((gasLimit)=>(0,number/* isGreaterThanOrEqualTo */.KH)(gasLimit, transaction?.gas ?? 21000), t.gas_settings_error_gas_limit_too_low()),
            gasPrice: lib.z.string().min(1, t.gas_settings_error_gas_price_absence()).refine(number/* isPositive */.xP, t.gas_settings_error_gas_price_positive()).refine((value)=>(0,number/* isGreaterThanOrEqualTo */.KH)((0,formatter/* formatGweiToWei */.nU)(value), gasOptions?.slow?.suggestedMaxFeePerGas ?? 0), t.gas_settings_error_gas_price_too_low()).refine((value)=>(0,number/* isLessThan */.FI)((0,formatter/* formatGweiToWei */.nU)(value), (0,number/* multipliedBy */.$q)(gasOptions?.fast?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER)), t.gas_settings_error_gas_price_too_high()),
            maxPriorityFeePerGas: lib.z.string().min(1, t.gas_settings_error_max_priority_fee_absence()).refine(number/* isPositive */.xP, t.gas_settings_error_max_priority_gas_fee_positive()).refine((value)=>(0,number/* isGreaterThanOrEqualTo */.KH)((0,formatter/* formatGweiToWei */.nU)(value), gasOptions?.slow?.suggestedMaxPriorityFeePerGas ?? 0), t.gas_settings_error_max_priority_gas_fee_too_low()).refine((value)=>(0,number/* isLessThan */.FI)((0,formatter/* formatGweiToWei */.nU)(value), (0,number/* multipliedBy */.$q)(gasOptions?.fast?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER)), t.gas_settings_error_max_priority_gas_fee_too_high()),
            maxFeePerGas: lib.z.string().min(1, t.gas_settings_error_max_fee_absence()).refine((value)=>(0,number/* isGreaterThanOrEqualTo */.KH)((0,formatter/* formatGweiToWei */.nU)(value), gasOptions?.slow?.suggestedMaxFeePerGas ?? 0), t.gas_settings_error_max_fee_too_low()).refine((value)=>(0,number/* isLessThan */.FI)((0,formatter/* formatGweiToWei */.nU)(value), (0,number/* multipliedBy */.$q)(gasOptions?.fast?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER)), t.gas_settings_error_max_fee_too_high())
        }).refine((data)=>(0,number/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas), {
            message: t.gas_settings_error_max_priority_gas_fee_imbalance(),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        t,
        transaction?.gas,
        gasOptions
    ]);
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/GasForm.tsx















function getDefaultValues(transaction, gasOptions) {
    return {
        gasLimit: transaction.gas ?? '21000',
        gasPrice: (0,formatter/* formatWeiToGwei */.f1)(transaction.gasPrice || gasOptions.normal.suggestedMaxFeePerGas).toString(),
        maxPriorityFeePerGas: (0,formatter/* formatWeiToGwei */.f1)(transaction.maxPriorityFeePerGas || gasOptions.normal.suggestedMaxPriorityFeePerGas).toString(),
        maxFeePerGas: (0,formatter/* formatWeiToGwei */.f1)(transaction.maxFeePerGas || gasOptions.normal.suggestedMaxFeePerGas).toString()
    };
}
const GasForm_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        unit: {
            color: theme.palette.maskColor.third
        },
        caption: {
            color: theme.palette.maskColor.second,
            fontWeight: 700,
            margin: theme.spacing(1, 0, 1.5)
        },
        alertIcon: {
            color: `${theme.palette.maskColor.main} !important`,
            width: 22,
            height: 22,
            padding: 0
        },
        alertMessage: {
            color: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 400,
            padding: 0
        },
        alertStandardSuccess: {
            backgroundColor: theme.palette.maskColor.bg
        }
    };
});
function GasForm(props) {
    const { defaultGasLimit, chainId, transaction, transactionOptions, gasOptions, onChange, maxPriorityFeePerGasByUser, setMaxPriorityFeePerGasByUser } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = GasForm_useStyles();
    const isEIP1559 = entry/* Others */.ej.chainResolver.isFeatureSupported(chainId, 'EIP1559');
    const baseFeePerGas = gasOptions[specs/* GasOptionType */.Qd.FAST].baseFeePerGas ?? '0';
    const schema = useGasSchema(chainId, transaction, gasOptions);
    const transactionComputed = {
        ...transaction,
        ...transactionOptions
    };
    const methods = (0,index_esm/* useForm */.cI)({
        shouldUnregister: false,
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: getDefaultValues(transactionComputed, gasOptions)
    });
    const { errors } = methods.formState;
    const [gasLimit, gasPrice, maxFeePerGas, maxPriorityFeePerGas] = methods.watch([
        'gasLimit',
        'gasPrice',
        'maxFeePerGas',
        'maxPriorityFeePerGas'
    ]);
    const [gasPriceByUser, setGasPriceByUser] = (0,react.useState)();
    const [maxFeePerGasByUser, setMaxFeePerGasByUser] = (0,react.useState)();
    const errorCenter = (0,react.useMemo)(()=>{
        return isEIP1559 ? errors.gasLimit?.message ?? '' : '';
    }, [
        isEIP1559,
        errors.gasLimit?.message
    ]);
    const errorBottom = (0,react.useMemo)(()=>{
        return (isEIP1559 ? undefined : errors.gasPrice?.message) ?? (isEIP1559 ? undefined : errors.gasLimit?.message) ?? (isEIP1559 ? errors.maxFeePerGas?.message : undefined) ?? (isEIP1559 ? errors.maxPriorityFeePerGas?.message : undefined) ?? '';
    }, [
        isEIP1559,
        errors.gasPrice?.message,
        errors.gasLimit?.message,
        errors.maxFeePerGas?.message,
        errors.maxPriorityFeePerGas?.message
    ]);
    // #region set the default max priority gas fee and max fee
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!gasOptions) return;
        if (!gasPriceByUser) {
            methods.setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxFeePerGas).toString());
        }
        if (!maxFeePerGasByUser) {
            methods.setValue('maxFeePerGas', (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxFeePerGas).toString());
        }
        if (!maxPriorityFeePerGasByUser) {
            methods.setValue('maxPriorityFeePerGas', (0,formatter/* formatWeiToGwei */.f1)(gasOptions.normal.suggestedMaxPriorityFeePerGas).toString());
        }
    }, [
        gasOptions,
        gasPriceByUser,
        maxFeePerGasByUser,
        maxPriorityFeePerGasByUser,
        methods.setValue
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        const payload = isEIP1559 ? {
            gas: gasLimit,
            maxFeePerGas: (0,formatter/* formatGweiToWei */.nU)(maxFeePerGas).toString(),
            maxPriorityFeePerGas: (0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGas).toString()
        } : {
            gasPrice: (0,formatter/* formatGweiToWei */.nU)(gasPrice).toString()
        };
        onChange?.(!errorCenter && !errorBottom ? payload : undefined);
    }, [
        errorCenter,
        errorBottom,
        isEIP1559,
        gasLimit,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasOptions
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(index_esm/* FormProvider */.RV, {
        ...methods,
        children: [
            isEIP1559 && (0,number/* isPositive */.xP)(baseFeePerGas) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                classes: {
                    icon: classes.alertIcon,
                    message: classes.alertMessage,
                    standardSuccess: classes.alertStandardSuccess
                },
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Info, {}),
                children: t.gas_settings_info_gas_fee({
                    fee: (0,formatCurrency/* formatCurrency */.x)((0,formatter/* formatWeiToGwei */.f1)(baseFeePerGas), '')
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                spacing: 2,
                children: [
                    isEIP1559 ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                    ...field,
                                    InputProps: {
                                        inputProps: {
                                            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                        },
                                        type: 'number',
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.unit,
                                            children: t.gwei()
                                        })
                                    },
                                    value: (0,number/* isZero */.Fr)(gasPriceByUser ?? 0) ? gasPrice : gasPriceByUser,
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.caption,
                                        children: t.gas_settings_label_gas_price()
                                    }),
                                    error: !!errors.gasPrice?.message,
                                    onChange: (ev)=>{
                                        setGasPriceByUser(ev.target.value);
                                        methods.setValue('gasPrice', ev.target.value);
                                        methods.trigger();
                                    },
                                    fullWidth: true
                                }),
                            name: "gasPrice"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        xs: isEIP1559 ? 12 : 6,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                        ...field,
                                        InputProps: {
                                            inputProps: {
                                                pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                            },
                                            type: 'number'
                                        },
                                        disabled: props.disableGasLimit,
                                        value: (0,number/* isZero */.Fr)(gasLimit) ? defaultGasLimit : new bignumber/* BigNumber */.O(gasLimit).toString(),
                                        label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            children: t.gas_settings_label_gas_limit()
                                        }),
                                        fullWidth: true,
                                        error: !!errors.gasLimit?.message
                                    }),
                                name: "gasLimit"
                            }),
                            errorCenter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleWarning, {}),
                                severity: "error",
                                children: errorCenter
                            }) : null
                        ]
                    })
                ]
            }),
            isEIP1559 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                    ...field,
                                    InputProps: {
                                        inputProps: {
                                            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                        },
                                        type: 'number',
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.unit,
                                            children: t.gwei()
                                        })
                                    },
                                    value: (0,number/* isZero */.Fr)(maxPriorityFeePerGasByUser ?? 0) ? maxPriorityFeePerGas : maxPriorityFeePerGasByUser,
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.caption,
                                        children: t.gas_settings_label_max_priority_fee()
                                    }),
                                    error: !!errors.maxPriorityFeePerGas?.message,
                                    onChange: (ev)=>{
                                        setMaxPriorityFeePerGasByUser(ev.target.value);
                                        methods.setValue('maxPriorityFeePerGas', ev.target.value);
                                        methods.trigger();
                                    },
                                    fullWidth: true
                                }),
                            name: "maxPriorityFeePerGas"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                    ...field,
                                    InputProps: {
                                        inputProps: {
                                            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                        },
                                        type: 'number',
                                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.unit,
                                            children: t.gwei()
                                        })
                                    },
                                    value: (0,number/* isZero */.Fr)(maxFeePerGasByUser ?? 0) ? maxFeePerGas : maxFeePerGasByUser,
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.caption,
                                        children: t.gas_settings_label_max_fee()
                                    }),
                                    error: !!errors.maxFeePerGas?.message,
                                    onChange: (ev)=>{
                                        setMaxFeePerGasByUser(ev.target.value);
                                        methods.setValue('maxFeePerGas', ev.target.value);
                                        methods.trigger();
                                    },
                                    fullWidth: true
                                }),
                            name: "maxFeePerGas"
                        })
                    })
                ]
            }) : null,
            errorBottom ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CircleWarning, {}),
                severity: "error",
                children: errorBottom
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/SettingsBoard/types/index.ts
var types = __webpack_require__(14821);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/GasSection.tsx















const GasSection_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {},
        tabs: {
            overflow: 'visible',
            backgroundColor: theme.palette.maskColor.input
        },
        additions: {
            fontWeight: 700
        },
        label: {
            color: theme.palette.maskColor.second,
            fontWeight: 700
        },
        price: {
            fontWeight: 700
        },
        tab: {
            color: theme.palette.maskColor.second,
            '&[aria-selected="true"]': {
                color: theme.palette.maskColor.main
            }
        }
    };
});
function GasSection(props) {
    const { activeTab, setActiveTab, disableGasLimit } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = GasSection_useStyles();
    const { pluginID, chainId, transaction, transactionOptions, setTransactionOptions, gasOptions, gasOptionType, GAS_OPTION_NAMES } = Context/* SettingsContext */.J.useContainer();
    const [maxPriorityFeePerGasByUser, setMaxPriorityFeePerGasByUser] = (0,react.useState)('0');
    // EVM only
    if (pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return null;
    const isEIP1559 = entry/* Others */.ej.chainResolver.isFeatureSupported(chainId, 'EIP1559');
    const suggestedMaxFeePerGas = gasOptions?.[gasOptionType ?? specs/* GasOptionType */.Qd.NORMAL].suggestedMaxFeePerGas;
    const suggestedMaxPriorityFeePerGas = gasOptions?.[gasOptionType ?? specs/* GasOptionType */.Qd.NORMAL].suggestedMaxPriorityFeePerGas;
    const baseFeePerGas = gasOptions?.[specs/* GasOptionType */.Qd.FAST].baseFeePerGas ?? '0';
    const priorityFee = !(0,number/* isZero */.Fr)(maxPriorityFeePerGasByUser) ? (0,formatter/* formatGweiToWei */.nU)(maxPriorityFeePerGasByUser) : (transaction?.maxPriorityFeePerGas);
    const gasPrice = transactionOptions?.gasPrice;
    const customPrice = (0,formatCurrency/* formatCurrency */.x)(activeTab === types/* GasSettingsType */.g.Basic ? (0,formatter/* formatWeiToGwei */.f1)(suggestedMaxFeePerGas ?? 0) : (0,formatter/* formatWeiToGwei */.f1)(isEIP1559 ? (0,number/* plus */.PD)(baseFeePerGas, priorityFee ?? suggestedMaxPriorityFeePerGas ?? 0) : gasPrice ?? suggestedMaxFeePerGas ?? 0), '');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Section, {
            title: t.gas_settings_label_gas_price(),
            additions: gasOptionType ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.additions,
                component: "span",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.label,
                        children: activeTab === types/* GasSettingsType */.g.Basic ? GAS_OPTION_NAMES[gasOptionType] : t.gas_settings_custom()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.price,
                        children: ` ${customPrice} Gwei`
                    })
                ]
            }) : null,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
                    value: activeTab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                        classes: {
                            root: classes.tabs
                        },
                        variant: "round",
                        "aria-label": "Gas Tabs",
                        onChange: (event, tab)=>setActiveTab(tab),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                label: t.gas_settings_tab_basic(),
                                value: types/* GasSettingsType */.g.Basic
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                className: classes.tab,
                                label: t.gas_settings_tab_advanced(),
                                value: types/* GasSettingsType */.g.Advanced
                            })
                        ]
                    })
                }),
                activeTab === types/* GasSettingsType */.g.Basic ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasOptionSelector, {
                    chainId: chainId,
                    options: gasOptions,
                    onChange: (transactionOptions)=>{
                        setTransactionOptions(transactionOptions);
                    }
                }) : gasOptions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasForm, {
                    defaultGasLimit: customPrice,
                    disableGasLimit: disableGasLimit,
                    chainId: chainId,
                    transaction: transaction,
                    transactionOptions: transactionOptions,
                    gasOptions: gasOptions,
                    onChange: (transactionOptions)=>{
                        setTransactionOptions(transactionOptions);
                    },
                    maxPriorityFeePerGasByUser: maxPriorityFeePerGasByUser,
                    setMaxPriorityFeePerGasByUser: setMaxPriorityFeePerGasByUser
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Paper/Paper.js
var Paper = __webpack_require__(15256);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/RadioChip.tsx



const RadioChip_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            flex: 1,
            backgroundImage: 'none',
            boxShadow: 'none',
            padding: 0,
            maxWidth: 100,
            '&:hover': {
                backgroundColor: 'transparent !important'
            }
        },
        button: {
            flex: 1,
            fontSize: 16,
            '& span': {
                display: 'none'
            }
        }
    };
});
function RadioChip(props) {
    const { classes } = RadioChip_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
        className: classes.root,
        ...props,
        disableRipple: true,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classes.button,
            disableRipple: true,
            variant: "text",
            children: props.label
        }),
        checkedIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classes.button,
            disableRipple: true,
            variant: "contained",
            color: "info",
            children: props.label
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/hooks/useSlippageToleranceSchema.ts




function useSlippageToleranceSchema() {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    return (0,react.useMemo)(()=>{
        return lib.z.object({
            customSlippageTolerance: lib.z.string().refine((value)=>{
                return (0,number/* isGreaterThan */.T1)(value, 0) && (0,number/* isLessThanOrEqualTo */.PW)(value, 50);
            }, t.gas_settings_error_custom_slippage_tolerance_invalid())
        });
    }, [
        t
    ]);
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/SlippageToleranceForm.tsx












const SlippageToleranceForm_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            boxShadow: `0px 0px 20px 0px ${theme.palette.mode === 'dark' ? '#FFFFFF1F' : '#0000000D'}`,
            backdropFilter: 'blur(16px)',
            marginTop: theme.spacing(1),
            padding: theme.spacing(2),
            justifyContent: 'space-between'
        },
        textfield: {
            flex: 1,
            maxWidth: 100
        }
    };
});
function SlippageToleranceForm(props) {
    const { slippageTolerance, slippageTolerances, onChange } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = SlippageToleranceForm_useStyles();
    const schema = useSlippageToleranceSchema();
    const [tolerance, setTolerance] = (0,react.useState)(slippageTolerance);
    const methods = (0,index_esm/* useForm */.cI)({
        shouldUnregister: false,
        mode: 'onChange',
        resolver: (0,zod/* zodResolver */.F)(schema),
        defaultValues: {
            customSlippageTolerance: ''
        }
    });
    const [customSlippageTolerance] = methods.watch([
        'customSlippageTolerance'
    ]);
    const error = (0,react.useMemo)(()=>{
        return methods.formState.errors.customSlippageTolerance?.message;
    }, [
        methods.formState.errors.customSlippageTolerance?.message
    ]);
    (0,react.useEffect)(()=>{
        onChange?.({
            customSlippageTolerance: !error ? tolerance.toString() : '0'
        });
    }, [
        tolerance,
        error
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(index_esm/* FormProvider */.RV, {
        ...methods,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                className: classes.root,
                children: [
                    slippageTolerances.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RadioChip, {
                            label: `${x}%`,
                            checked: (0,number/* isZero */.Fr)(customSlippageTolerance || '0') && tolerance === x,
                            onClick: ()=>{
                                methods.setValue('customSlippageTolerance', '');
                                methods.clearErrors('customSlippageTolerance');
                                setTolerance(x);
                                onChange?.({
                                    customSlippageTolerance: x.toString()
                                });
                            }
                        }, x)),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.textfield,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                            render: ({ field })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* MaskTextField */.F, {
                                    ...field,
                                    placeholder: t.gas_settings_custom(),
                                    InputProps: {
                                        type: 'number',
                                        inputProps: {
                                            pattern: constants/* NUMERIC_INPUT_REGEXP_PATTERN */.Ek
                                        }
                                    },
                                    value: customSlippageTolerance,
                                    error: !!methods.formState.errors.customSlippageTolerance?.message,
                                    onChange: (ev)=>{
                                        const v = Number.parseFloat(ev.target.value);
                                        const tolerance = Math.min(50, Number.isNaN(v) ? 0 : v);
                                        setTolerance(tolerance);
                                        methods.setValue('customSlippageTolerance', ev.target.value === '' ? '' : tolerance.toString(), {
                                            shouldValidate: true
                                        });
                                    }
                                }),
                            name: "customSlippageTolerance"
                        })
                    })
                ]
            }),
            error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Warning, {}),
                severity: "error",
                children: error
            }) : tolerance < slippageTolerances[0] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.WarningTriangle, {
                    color: "warning"
                }),
                severity: "warning",
                children: t.gas_settings_alert_low_slippage_tolerance()
            }) : tolerance > slippageTolerances.at(-1) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert, {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Warning, {}),
                severity: "error",
                children: t.gas_settings_alert_high_slippage_tolerance({
                    percentage: tolerance.toString()
                })
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/SlippageToleranceSection.tsx








const SlippageToleranceSection_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {},
        additions: {
            fontWeight: 700
        },
        percentage: {}
    };
});
function SlippageToleranceSection() {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = SlippageToleranceSection_useStyles();
    const { DEFAULT_SLIPPAGE_TOLERANCES, slippageTolerance, setSlippageTolerance } = Context/* SettingsContext */.J.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Section, {
            title: t.gas_settings_section_title_slippage_tolerance(),
            additions: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.additions,
                component: "span",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: classes.percentage,
                    children: [
                        (0,formatBalance/* formatBalance */.a)((0,number/* multipliedBy */.$q)(slippageTolerance, 100), 2, 2),
                        "%"
                    ]
                })
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SlippageToleranceForm, {
                slippageTolerance: slippageTolerance,
                slippageTolerances: DEFAULT_SLIPPAGE_TOLERANCES,
                onChange: (data)=>{
                    setSlippageTolerance(data ? Number.parseFloat(data.customSlippageTolerance) : 0);
                }
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/SettingsBoard/index.tsx






const SettingsBoard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        root: {}
    };
});
function SettingsBoard(props) {
    const { disableGasPrice = false, disableSlippageTolerance = false, onChange, disableGasLimit } = props;
    const { classes } = SettingsBoard_useStyles();
    const { transaction, transactionOptions, slippageTolerance, gasSettingsType, setGasSettingsType } = Context/* SettingsContext */.J.useContainer();
    (0,react.useEffect)(()=>{
        onChange?.({
            transaction: transaction ? {
                ...transaction,
                ...transactionOptions
            } : undefined,
            slippageTolerance: slippageTolerance * 100
        });
    }, // convert to bips
    [
        JSON.stringify(transaction),
        JSON.stringify(transactionOptions),
        slippageTolerance,
        onChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            disableGasPrice ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSection, {
                activeTab: gasSettingsType,
                setActiveTab: setGasSettingsType,
                disableGasLimit: disableGasLimit
            }),
            disableSlippageTolerance ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(SlippageToleranceSection, {})
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectAdvancedSettingsDialog/SelectGasSettingsDialog.tsx










const SelectGasSettingsDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { compact })=>({
        root: {
            width: 600,
            minHeight: compact ? 480 : 620
        },
        content: {
            padding: theme.spacing(3, 2),
            paddingTop: 0
        }
    }));
function SelectGasSettingsDialog({ open, pluginID, chainId, slippageTolerance, transaction, disableGasPrice, disableSlippageTolerance, disableGasLimit, onClose, title }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = SelectGasSettingsDialog_useStyles({
        compact: disableSlippageTolerance ?? true
    });
    const { pluginID: pluginID_ } = (0,useContext/* useNetworkContext */.gK)(pluginID);
    const { chainId: chainId_ } = (0,useContext/* useChainContext */.ql)({
        chainId
    });
    const [settings, setSettings] = (0,react.useState)(null);
    const initialState = (0,react.useMemo)(()=>({
            pluginID: pluginID_,
            chainId: chainId_,
            slippageTolerance,
            transaction
        }), [
        pluginID_,
        chainId_,
        slippageTolerance,
        transaction
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: classes.root
        },
        open: open,
        titleBarIconStyle: Sniffings/* Sniffings */.Y.is_dashboard_page ? 'close' : 'back',
        onClose: ()=>onClose(settings),
        title: title ?? t.gas_settings_title(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            classes: {
                root: classes.content
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Context/* SettingsContext */.J.Provider, {
                initialState: initialState,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsBoard, {
                    disableGasLimit: disableGasLimit,
                    disableGasPrice: disableGasPrice,
                    disableSlippageTolerance: disableSlippageTolerance,
                    onChange: setSettings
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectAdvancedSettingsDialog/index.tsx





const SelectGasSettingsModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [pluginID, setPluginID] = (0,react.useState)();
    const [chainId, setChainId] = (0,react.useState)();
    const [slippageTolerance, setSlippageTolerance] = (0,react.useState)();
    const [transaction, setTransaction] = (0,react.useState)();
    const [title, setTitle] = (0,react.useState)();
    const [disableGasPrice, setDisableGasPrice] = (0,react.useState)();
    const [disableSlippageTolerance, setDisableSlippageTolerance] = (0,react.useState)();
    const [disableGasLimit, setDisableGasLimit] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setPluginID(props.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
            setChainId(props.chainId);
            setSlippageTolerance(props.slippageTolerance);
            setTransaction(props.transaction);
            setTitle(props.title);
            setDisableGasPrice(props.disableGasPrice);
            setDisableSlippageTolerance(props.disableSlippageTolerance);
            setDisableGasLimit(props.disableGasLimit);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectGasSettingsDialog, {
        open: true,
        onClose: (settings)=>dispatch?.close({
                settings
            }),
        pluginID: pluginID,
        chainId: chainId,
        slippageTolerance: slippageTolerance,
        transaction: transaction,
        title: title,
        disableGasPrice: disableGasPrice,
        disableSlippageTolerance: disableSlippageTolerance,
        disableGasLimit: disableGasLimit
    });
});


/***/ }),

/***/ 2947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ SelectFungibleTokenModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Input/inputClasses.js
var inputClasses = __webpack_require__(2989);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(37004);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(34093);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/types.ts
var types = __webpack_require__(77953);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRowSize.ts
var useRowSize = __webpack_require__(88020);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/type.ts
var type = __webpack_require__(45889);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/base/BaseSharedUIProvider.tsx
var BaseSharedUIProvider = __webpack_require__(14580);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenList/index.tsx + 8 modules
var FungibleTokenList = __webpack_require__(14584);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectFungibleTokenModal/SelectFungibleTokenDialog.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { compact })=>({
        content: {
            ...compact ? {
                minWidth: 552
            } : {},
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        search: {
            backgroundColor: Sniffings/* Sniffings */.Y.is_dashboard_page ? 'transparent !important' : theme.palette.maskColor.input,
            border: `solid 1px ${vars/* MaskColorVar */.Z.twitterBorderLine}`,
            [`&.${inputClasses/* default */.Z.focused}`]: {
                background: theme.palette.maskColor.bottom
            }
        },
        wrapper: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(6)
        }
    }));
function SelectFungibleTokenDialog({ open, pluginID, chainId, disableSearchBar, disableNativeToken, tokens, whitelist, blacklist = constants/* EMPTY_LIST */.rP, selectedTokens = constants/* EMPTY_LIST */.rP, title, enableManage = true, onClose }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { networkIdentifier } = (0,BaseSharedUIProvider/* useBaseUIRuntime */.uD)();
    const compact = networkIdentifier === types/* EnhanceableSite */.J.Minds;
    const { pluginID: currentPluginID } = (0,useContext/* useNetworkContext */.gK)(pluginID);
    const { classes } = useStyles({
        compact
    });
    const isMdScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.down('md'));
    const rowSize = (0,useRowSize/* useRowSize */.g)();
    const [mode, setMode] = (0,react.useState)(type/* TokenListMode */.K.List);
    const nativeTokenAddress = (0,useNativeTokenAddress/* useNativeTokenAddress */.Z)(currentPluginID);
    const FixedSizeListProps = (0,react.useMemo)(()=>({
            itemSize: rowSize + 18.5,
            height: isMdScreen ? 300 : 428,
            className: classes.wrapper
        }), [
        rowSize,
        isMdScreen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        titleBarIconStyle: Sniffings/* Sniffings */.Y.is_dashboard_page ? 'close' : 'back',
        open: open,
        onClose: ()=>{
            mode === type/* TokenListMode */.K.List ? onClose(null) : setMode(type/* TokenListMode */.K.List);
        },
        title: title ? title : mode === type/* TokenListMode */.K.Manage ? t.manage_token_list() : t.select_token(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            classes: {
                root: classes.content
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenList/* FungibleTokenList */.C, {
                mode: mode,
                setMode: setMode,
                pluginID: currentPluginID,
                chainId: chainId,
                tokens: tokens ?? constants/* EMPTY_LIST */.rP,
                whitelist: whitelist,
                enableManage: enableManage,
                blacklist: disableNativeToken && nativeTokenAddress ? [
                    nativeTokenAddress,
                    ...blacklist
                ] : blacklist,
                disableSearch: disableSearchBar,
                selectedTokens: selectedTokens,
                onSelect: onClose,
                FixedSizeListProps: FixedSizeListProps,
                SearchTextFieldProps: {
                    InputProps: {
                        classes: {
                            root: classes.search
                        }
                    }
                },
                isHiddenChainIcon: false
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectFungibleTokenModal/index.tsx




const SelectFungibleTokenModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [enableManage, setEnableManage] = (0,react.useState)();
    const [pluginID, setPluginID] = (0,react.useState)();
    const [chainId, setChainId] = (0,react.useState)();
    const [keyword, setKeyword] = (0,react.useState)();
    const [whitelist, setWhitelist] = (0,react.useState)();
    const [title, setTitle] = (0,react.useState)();
    const [blacklist, setBlacklist] = (0,react.useState)();
    const [tokens, setTokens] = (0,react.useState)();
    const [disableSearchBar, setDisableSearchBar] = (0,react.useState)();
    const [selectedTokens, setSelectedTokens] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setEnableManage(props.enableManage);
            setPluginID(props.pluginID);
            setChainId(props.chainId);
            setKeyword(props.keyword);
            setWhitelist(props.whitelist);
            setTitle(props.title);
            setBlacklist(props.blacklist);
            setTokens(props.tokens);
            setDisableSearchBar(props.disableNativeToken);
            setSelectedTokens(props.selectedTokens);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectFungibleTokenDialog, {
        open: true,
        enableManage: enableManage,
        pluginID: pluginID,
        chainId: chainId,
        keyword: keyword,
        whitelist: whitelist,
        title: title,
        blacklist: blacklist,
        tokens: tokens,
        disableSearchBar: disableSearchBar,
        selectedTokens: selectedTokens,
        onClose: (token)=>dispatch?.close(token)
    });
});


/***/ }),

/***/ 18049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ SelectProviderModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(82161);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(51527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/descriptors.ts + 1 modules
var descriptors = __webpack_require__(3187);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/constants/descriptors.ts
var constants_descriptors = __webpack_require__(93221);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/types.ts
var src_types = __webpack_require__(97834);
// EXTERNAL MODULE: ./packages/web3-shared/flow/src/constants/descriptors.ts
var src_constants_descriptors = __webpack_require__(81545);
// EXTERNAL MODULE: ./packages/web3-shared/flow/src/types.ts
var flow_src_types = __webpack_require__(59190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 2 modules
var ButtonBase = __webpack_require__(62621);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ProviderIcon/index.tsx



const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1),
            '&:hover': {
                background: theme.palette.maskColor.bg,
                '& p': {
                    fontWeight: 700,
                    color: theme.palette.text.primary
                }
            }
        },
        icon: {
            width: 36,
            height: 36,
            marginBottom: 4
        },
        name: {
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1)
        }
    }));
function ProviderIcon({ icon, name, onClick, iconFilterColor, className, ButtonBaseProps }) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: cx(classes.root, className),
        elevation: 0,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBase/* default */.Z, {
            className: `${classes.content} dashboard-style`,
            ...ButtonBaseProps,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: icon,
                    className: classes.icon,
                    style: iconFilterColor ? {
                        filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
                        backdropFilter: 'blur(16px)'
                    } : {}
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    children: name
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(37004);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(54458);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(2912);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/DialogDismissIconUI/index.tsx



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/extension-page.ts
var extension_page = __webpack_require__(86766);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectProviderModal/PluginProviderRender.tsx














const PluginProviderRender_descriptors = {
    [PluginID/* NetworkPluginID */.F.PLUGIN_EVM]: descriptors/* NETWORK_DESCRIPTORS */.qQ,
    [PluginID/* NetworkPluginID */.F.PLUGIN_FLOW]: src_constants_descriptors/* NETWORK_DESCRIPTORS */.qQ,
    [PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA]: constants_descriptors/* NETWORK_DESCRIPTORS */.qQ
};
const PluginProviderRender_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2),
            counterReset: 'steps 0'
        },
        section: {
            flexGrow: 1,
            marginTop: 21,
            counterIncrement: 'steps 1',
            '&:first-of-type': {
                marginTop: 0
            }
        },
        wallets: {
            width: '100%',
            display: 'grid',
            padding: 0,
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '12px 12px',
            [smallQuery]: {
                gridAutoRows: '110px',
                gridTemplateColumns: 'repeat(2, 1fr)'
            }
        },
        walletItem: {
            padding: 0,
            height: 122,
            width: '100%',
            display: 'block',
            '& > div': {
                borderRadius: 8
            }
        },
        disabledWalletItem: {
            pointerEvents: 'none'
        },
        providerIcon: {
            height: '100%',
            fontSize: 36,
            display: 'flex',
            backgroundColor: theme.palette.maskColor.bottom,
            '&:hover': {
                background: theme.palette.maskColor.bg
            }
        },
        dialogTitle: {
            fontSize: 18,
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            textAlign: 'center'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary,
            padding: 0,
            width: 24,
            height: 24,
            '& > svg': {
                fontSize: 24
            }
        },
        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: '12px 12px'
        },
        listItem: {
            padding: theme.spacing(1.5),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: 12,
            borderRadius: 12
        },
        listItemText: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        },
        dialogPaper: {
            margin: 0,
            maxWidth: 400,
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0px 0px 20px rgba(0, 0, 0, 0.05)'
        }
    };
});
const PluginProviderRender = /*#__PURE__*/ (0,react.memo)(function PluginProviderRender({ providers, onProviderIconClicked, requiredSupportChainIds, requiredSupportPluginID }) {
    const { classes, cx } = PluginProviderRender_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const plugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const extensionPagePlugins = (0,extension_page/* useActivatedPluginsExtensionPage */.fb)();
    const [selectChainDialogOpen, setSelectChainDialogOpen] = (0,react.useState)(false);
    const fortmaticProviderDescriptor = providers.find((x)=>x.type === types/* ProviderType */.lP.Fortmatic);
    const [, handleClick] = (0,useAsyncFn/* default */.Z)(async (provider, expectedChainId)=>{
        if (provider.type === types/* ProviderType */.lP.Fortmatic && !expectedChainId) {
            setSelectChainDialogOpen(true);
            return;
        }
        const target = (0,entry/* getAllPluginsWeb3State */.uQ)()[provider.providerAdaptorPluginID];
        // note: unsafe cast, we cannot ensure provider.type is the isReady implementation we intended to call
        const isReady = target?.Provider?.isReady(provider.type);
        const downloadLink = entry/* OthersAll */.Zy.use(provider.providerAdaptorPluginID)?.providerResolver.providerDownloadLink(provider.type);
        if (!isReady) {
            if (downloadLink) (0,open_window/* openWindow */.x)(downloadLink);
            return;
        }
        const chainId = expectedChainId ?? types/* ChainId */.a_.Mainnet;
        // use the currently connected network (if known to mask). otherwise, use the default mainnet
        const networkDescriptor = PluginProviderRender_descriptors[provider.providerAdaptorPluginID].find((x)=>x.chainId === chainId);
        if (!networkDescriptor) return;
        onProviderIconClicked(networkDescriptor, provider, isReady, downloadLink);
    }, [
        plugins,
        extensionPagePlugins
    ]);
    const getTips = (0,react.useCallback)((provider)=>{
        if (provider === src_types/* ProviderType */.lP.Phantom) {
            return t.plugin_wallet_solana_tips();
        } else if (provider === flow_src_types/* ProviderType */.lP.Blocto) {
            return t.plugin_wallet_blocto_tips();
        } else if (provider === types/* ProviderType */.lP.Fortmatic) {
            return t.plugin_wallet_fortmatic_tips();
        }
        return t.plugin_wallet_support_chains_tips();
    }, []);
    const getDisabled = (0,react.useCallback)((provider)=>{
        if (requiredSupportPluginID && provider.providerAdaptorPluginID !== requiredSupportPluginID) return true;
        if (requiredSupportChainIds?.some((x)=>!provider.enableRequirements?.supportedChainIds?.includes(x))) return true;
        return false;
    }, [
        requiredSupportChainIds,
        requiredSupportPluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    className: classes.section,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        className: classes.wallets,
                        children: providers.filter((z)=>{
                            const siteType = (0,Site/* getSiteType */.sv)();
                            if (!siteType) return false;
                            return [
                                ...z.enableRequirements?.supportedEnhanceableSites ?? [],
                                ...z.enableRequirements?.supportedExtensionSites ?? []
                            ].includes(siteType);
                        }).map((provider)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                                title: getDisabled(provider) ? '' : getTips(provider.type),
                                arrow: true,
                                placement: "top",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: cx(classes.walletItem, getDisabled(provider) ? classes.disabledWalletItem : ''),
                                    disabled: getDisabled(provider),
                                    onClick: ()=>{
                                        if (provider.type === types/* ProviderType */.lP.WalletConnect) {
                                            handleClick(provider, types/* ChainId */.a_.Mainnet);
                                        } else {
                                            handleClick(provider);
                                        }
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                        className: classes.providerIcon,
                                        icon: provider.icon,
                                        name: provider.name,
                                        iconFilterColor: provider.iconFilterColor
                                    })
                                })
                            }, provider.ID))
                    })
                })
            }),
            (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
                    container: container,
                    open: selectChainDialogOpen,
                    classes: {
                        paper: classes.dialogPaper
                    },
                    onClose: ()=>setSelectChainDialogOpen(false),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            sx: {
                                whiteSpace: 'nowrap',
                                display: 'grid',
                                alignItems: 'center',
                                gridTemplateColumns: '50px auto 50px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    className: classes.dialogCloseButton,
                                    onClick: ()=>setSelectChainDialogOpen(false),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.dialogTitle,
                                    children: t.plugin_wallet_choose_network()
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                            sx: {
                                minWidth: 352
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                                className: classes.list,
                                children: descriptors/* NETWORK_DESCRIPTORS */.qQ.filter((x)=>[
                                        types/* ChainId */.a_.Mainnet,
                                        types/* ChainId */.a_.BSC
                                    ].includes(x.chainId)).map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                                        className: classes.listItem,
                                        onClick: ()=>{
                                            if (!fortmaticProviderDescriptor) return;
                                            handleClick(fortmaticProviderDescriptor, x.chainId);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                                                icon: x.icon,
                                                size: 30,
                                                iconFilterColor: x.iconColor ? (0,colorManipulator/* alpha */.Fq)(x.iconColor, 0.2) : undefined
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.listItemText,
                                                children: x.name
                                            })
                                        ]
                                    }, x.chainId))
                            })
                        })
                    ]
                }))
        ]
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectProviderModal/SelectProvider.tsx











const SelectProvider_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            padding: theme.spacing(0),
            scrollbarWidth: 'none',
            minHeight: 430,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const SelectProvider = /*#__PURE__*/ (0,react.memo)(function SelectProvider(props) {
    const { open, requiredSupportPluginID, requiredSupportChainIds, onConnect, onClose, createWallet } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = SelectProvider_useStyles();
    const onProviderIconClicked = (0,react.useCallback)(async (network, provider, isReady, downloadLink)=>{
        if (!isReady) {
            if (downloadLink) (0,open_window/* openWindow */.x)(downloadLink);
            return;
        }
        // Create wallet first if no wallets yet.
        if (provider.type === types/* ProviderType */.lP.MaskWallet && !entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet].subscription.wallets.getCurrentValue().length) {
            createWallet();
            return;
        }
        onClose();
        await (0,esm/* delay */.gw)(500);
        const connected = await modals/* ConnectWalletModal */.Bp.openAndWaitForClose({
            pluginID: network.networkSupporterPluginID,
            networkType: network.type,
            providerType: provider.type
        });
        if (connected) onConnect?.();
        else onClose();
    }, [
        onConnect,
        onClose
    ]);
    const providers = (0,react.useMemo)(()=>{
        if (Sniffings/* Sniffings */.Y.is_dashboard_page) return (0,entry/* getRegisteredWeb3Providers */.i8)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
        if (requiredSupportPluginID) return (0,entry/* getRegisteredWeb3Providers */.i8)(requiredSupportPluginID);
        return (0,esm/* getEnumAsArray */.Yl)(PluginID/* NetworkPluginID */.F).flatMap((x)=>(0,entry/* getRegisteredWeb3Providers */.i8)(x.value));
    }, [
        requiredSupportPluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t.plugin_wallet_select_provider_dialog_title(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginProviderRender, {
                providers: providers,
                onProviderIconClicked: onProviderIconClicked,
                requiredSupportChainIds: requiredSupportChainIds,
                requiredSupportPluginID: requiredSupportPluginID
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/SelectProviderModal/index.tsx




const SelectProviderModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [requiredSupportPluginID, setRequiredSupportPluginID] = (0,react.useState)();
    const [requiredSupportChainIds, setRequiredSupportChainIds] = (0,react.useState)();
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setRequiredSupportChainIds(props?.requiredSupportChainIds);
            setRequiredSupportPluginID(props?.requiredSupportPluginID);
        },
        onClose (props) {
            setRequiredSupportChainIds(undefined);
            setRequiredSupportPluginID(undefined);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProvider, {
        open: true,
        createWallet: props.createWallet,
        requiredSupportPluginID: requiredSupportPluginID,
        requiredSupportChainIds: requiredSupportChainIds,
        onConnect: ()=>dispatch?.close(true),
        onClose: ()=>dispatch?.close(false)
    });
});


/***/ }),

/***/ 95265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ WalletRiskWarningModal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBox/index.tsx + 5 modules
var WalletStatusBox = __webpack_require__(40025);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ActionButton/index.tsx
var components_ActionButton = __webpack_require__(58894);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(5081);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletRiskWarningModal/WalletRiskWarning.tsx










const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        paper: {
            color: (0,vars/* getMaskColor */.n)(theme).redMain,
            paddingBottom: 0,
            paddingLeft: 16,
            paddingRight: 16,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            }
        },
        buttons: {
            padding: `${theme.spacing(2)} !important`,
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)'
        },
        button: {
            borderRadius: Sniffings/* Sniffings */.Y.is_dashboard_page ? 9999 : undefined,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                marginBottom: theme.spacing(2)
            }
        },
        cancel: {},
        title: {
            margin: theme.spacing(2, 0),
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '28.8px',
            color: theme.palette.maskColor.danger
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        article: {
            lineHeight: '18px',
            fontWeight: 400,
            marginBottom: theme.spacing(2),
            color: theme.palette.maskColor.danger
        }
    }));
function WalletRiskWarning({ account, open, pluginID, onClose }) {
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = useStyles();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const isMobile = (0,useMatchXS/* useMatchXS */.I)();
    const { RiskWarning } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const onConfirm = (0,react.useCallback)(async ()=>{
        try {
            if (!account) {
                showSnackbar(t.wallet_risk_warning_no_select_wallet(), {
                    variant: 'error',
                    preventDuplicate: true
                });
                return;
            }
            await RiskWarning?.approve?.(account);
            onClose();
        } catch  {}
    }, // do nothing
    [
        showSnackbar,
        account,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        title: isMobile ? undefined : t.wallet_risk_warning_dialog_title(),
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.paper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.icon,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Warning, {
                            size: 90,
                            sx: {
                                filter: 'drop-shadow(0px 6px 12px rgba(255, 53, 69, 0.2))'
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        align: "center",
                        variant: "h4",
                        children: t.wallet_risk_warning_dialog_title()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.article,
                        variant: "body2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                            ns: "shared",
                            i18nKey: "wallet_risk_warning_content",
                            components: {
                                br: /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {})
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.article,
                        children: t.wallet_risk_warning_confirm_tips()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {
                        disableChange: true,
                        withinRiskWarningDialog: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: cx(classes.button, classes.cancel),
                        fullWidth: true,
                        variant: "outlined",
                        color: "secondary",
                        onClick: onClose,
                        children: t.cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_ActionButton/* ActionButtonPromise */.Z, {
                        className: classes.button,
                        fullWidth: true,
                        disabled: !account,
                        init: t.confirm(),
                        waiting: t.wallet_risk_confirm_confirming(),
                        failed: t.wallet_risk_confirm_failed(),
                        executor: onConfirm,
                        completeIcon: null,
                        failIcon: null,
                        failedOnClick: "use executor",
                        complete: t.done()
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/modals/WalletRiskWarningModal/index.tsx





const WalletRiskWarningModal = /*#__PURE__*/ (0,react.forwardRef)(function WalletRiskWarningModal(props, ref) {
    const [account, setAccount] = (0,react.useState)('');
    const [pluginID, setPluginID] = (0,react.useState)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen (props) {
            setAccount(props.account);
            setPluginID(props.pluginID);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRiskWarning, {
        account: account,
        pluginID: pluginID,
        open: true,
        onClose: ()=>dispatch?.close()
    });
});


/***/ }),

/***/ 22103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 22596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 29063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useAddressType)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useAddressType(pluginID, address, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getAddressType(address, options);
    }, [
        address,
        Web3,
        options?.chainId
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

/***/ 39256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ useNativeTokenPrice)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34093);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);




function useNativeTokenPrice(pluginID, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, options);
    const nativeTokenAddress = (0,_useNativeTokenAddress_js__WEBPACK_IMPORTED_MODULE_2__/* .useNativeTokenAddress */ .Z)(pluginID, options);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: !!nativeTokenAddress,
        queryKey: [
            'native-token',
            'price',
            pluginID,
            chainId,
            nativeTokenAddress,
            options
        ],
        queryFn: async ()=>Hub.getFungibleTokenPrice(chainId, nativeTokenAddress, {
                chainId
            })
    });
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

/***/ 60574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 93573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check'));

/***/ }),

/***/ 99948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error'));

/***/ }),

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked'));

/***/ }),

/***/ 65587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 94973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ })

}]);
//# sourceMappingURL=5333.js.map