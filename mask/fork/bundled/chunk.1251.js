"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[1251],{

/***/ 49546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ BottomController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            position: 'fixed',
            bottom: 0,
            background: theme.palette.maskColor.secondaryBottom,
            padding: theme.spacing(2),
            boxShadow: theme.palette.maskColor.bottomBg,
            backdropFilter: 'blur(8px)',
            left: 0,
            right: 0,
            display: 'flex',
            columnGap: theme.spacing(2)
        }
    }));
const BottomController = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function BottomController({ children }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.container,
        children: children
    });
});


/***/ }),

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

/***/ 98875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ SignRequestInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94036);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78130);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        },
        title: {
            fontSize: 24,
            fontWeight: 700,
            textAlign: 'center'
        },
        source: {
            padding: theme.spacing(1.25),
            border: `1px solid ${theme.palette.maskColor.line}`,
            marginTop: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            rowGap: theme.spacing(1.25),
            borderRadius: 8
        },
        sourceText: {
            fontSize: 12,
            fontWeight: 700,
            color: theme.palette.maskColor.second
        },
        messageTitle: {
            fontSize: 14,
            fontWeight: 700,
            marginTop: theme.spacing(3)
        },
        message: {
            fontSize: 12,
            marginTop: theme.spacing(1.5),
            color: theme.palette.maskColor.second,
            wordBreak: 'break-all',
            maxHeight: 260,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const SignRequestInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SignRequestInfo({ message, source }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useMaskSharedTrans */ .b)();
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.title,
                children: t.popups_wallet_signature_request_title()
            }),
            source ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.source,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fontSize: 16,
                        fontWeight: 700,
                        children: t.popups_wallet_request_source()
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: classes.sourceText,
                        children: source
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.messageTitle,
                children: t.popups_wallet_sign_message()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.message,
                children: message
            })
        ]
    });
});


/***/ }),

/***/ 85129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useHasPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4643);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40514);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);




function useHasPassword() {
    const { data: hasPassword, isLoading, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)([
        '@@has-password'
    ], _services__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.Wallet.hasPassword, {
        networkMode: 'always'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refetch();
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .CrossIsolationMessages */ .W.events.passwordStatusUpdated.on(()=>refetch());
    }, []);
    return {
        hasPassword,
        isLoading
    };
}


/***/ }),

/***/ 96440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useParamTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43270);


function useParamTab(defaultTab) {
    const [params, setParams] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__/* .useSearchParams */ .lr)();
    const tab = params.get('tab') || defaultTab;
    const handleTabChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_, tab)=>{
        setParams((params)=>{
            params.set('tab', tab);
            return params.toString();
        }, {
            replace: true
        });
    }, [
        setParams
    ]);
    return [
        tab,
        handleTabChange
    ];
}


/***/ }),

/***/ 15799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ useVerifiedWallets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95766);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29763);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);



function useVerifiedWallets(proofs) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!proofs?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        return proofs.filter((x)=>x.platform === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NextIDPlatform */ .V.Ethereum).sort((a, z)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isGreaterThan */ .T1)(a.last_checked_at, z.last_checked_at) ? -1 : 1);
    }, [
        proofs
    ]);
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

/***/ 5480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96732);



function useNativeTokenBalance(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return Web3.getNativeTokenBalance();
    }, [
        account,
        Web3
    ]);
}


/***/ }),

/***/ 6249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ useUpdateEffect)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useFirstMountState/index.js

/**
 * Returns a boolean that is `true` only on first render.
 */
function useFirstMountState() {
    const isFirstMount = (0,react.useRef)(true);
    (0,react.useEffect)(() => {
        isFirstMount.current = false;
    }, []);
    return isFirstMount.current;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/util/const.js
const noop = () => { };
const isBrowser = typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    typeof document !== 'undefined';
/**
 * You should only be reaching for this function when you're attempting to prevent multiple
 * redefinitions of the same function. In-place strict equality checks are more performant.
 */
const isStrictEqual = (prev, next) => prev === next;
const truthyAndArrayPredicate = (conditions) => conditions.every(Boolean);
const truthyOrArrayPredicate = (conditions) => conditions.some(Boolean);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@react-hookz+web@23.1.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/@react-hookz/web/esm/useUpdateEffect/index.js



/**
 * Effect hook that ignores the first render (not invoked on mount).
 *
 * @param effect Effector to run on updates
 * @param deps Dependencies list, as for `useEffect` hook
 */
function useUpdateEffect(effect, deps) {
    const isFirstMount = useFirstMountState();
    (0,react.useEffect)(isFirstMount ? noop : effect, deps);
}


/***/ }),

/***/ 23023:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QRCode = void 0;
var isEqual = __webpack_require__(66790);
var qrGenerator = __webpack_require__(32850);
var React = __webpack_require__(78996);
var ReactDOM = __webpack_require__(32704);
var QRCode = /** @class */ (function (_super) {
    __extends(QRCode, _super);
    function QRCode(props) {
        var _this = _super.call(this, props) || this;
        _this.canvas = React.createRef();
        return _this;
    }
    QRCode.utf16to8 = function (str) {
        var out = '', i, c;
        var len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            }
            else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
            else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    };
    /**
     * Draw a rounded square in the canvas
     */
    QRCode.prototype.drawRoundedSquare = function (lineWidth, x, y, size, color, radii, fill, ctx) {
        ctx.lineWidth = lineWidth;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        // Adjust coordinates so that the outside of the stroke is aligned to the edges
        y += lineWidth / 2;
        x += lineWidth / 2;
        size -= lineWidth;
        if (!Array.isArray(radii)) {
            radii = [radii, radii, radii, radii];
        }
        // Radius should not be greater than half the size or less than zero
        radii = radii.map(function (r) {
            r = Math.min(r, size / 2);
            return (r < 0) ? 0 : r;
        });
        var rTopLeft = radii[0] || 0;
        var rTopRight = radii[1] || 0;
        var rBottomRight = radii[2] || 0;
        var rBottomLeft = radii[3] || 0;
        ctx.beginPath();
        ctx.moveTo(x + rTopLeft, y);
        ctx.lineTo(x + size - rTopRight, y);
        if (rTopRight)
            ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);
        ctx.lineTo(x + size, y + size - rBottomRight);
        if (rBottomRight)
            ctx.quadraticCurveTo(x + size, y + size, x + size - rBottomRight, y + size);
        ctx.lineTo(x + rBottomLeft, y + size);
        if (rBottomLeft)
            ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);
        ctx.lineTo(x, y + rTopLeft);
        if (rTopLeft)
            ctx.quadraticCurveTo(x, y, x + rTopLeft, y);
        ctx.closePath();
        ctx.stroke();
        if (fill) {
            ctx.fill();
        }
    };
    /**
     * Draw a single positional pattern eye.
     */
    QRCode.prototype.drawPositioningPattern = function (ctx, cellSize, offset, row, col, color, radii) {
        if (radii === void 0) { radii = [0, 0, 0, 0]; }
        var lineWidth = Math.ceil(cellSize);
        var radiiOuter;
        var radiiInner;
        if (typeof radii !== 'number' && !Array.isArray(radii)) {
            radiiOuter = radii.outer || 0;
            radiiInner = radii.inner || 0;
        }
        else {
            radiiOuter = radii;
            radiiInner = radiiOuter;
        }
        var colorOuter;
        var colorInner;
        if (typeof color !== 'string') {
            colorOuter = color.outer;
            colorInner = color.inner;
        }
        else {
            colorOuter = color;
            colorInner = color;
        }
        var y = (row * cellSize) + offset;
        var x = (col * cellSize) + offset;
        var size = cellSize * 7;
        // Outer box
        this.drawRoundedSquare(lineWidth, x, y, size, colorOuter, radiiOuter, false, ctx);
        // Inner box
        size = cellSize * 3;
        y += cellSize * 2;
        x += cellSize * 2;
        this.drawRoundedSquare(lineWidth, x, y, size, colorInner, radiiInner, true, ctx);
    };
    ;
    /**
     * Is this dot inside a positional pattern zone.
     */
    QRCode.prototype.isInPositioninZone = function (col, row, zones) {
        return zones.some(function (zone) { return (row >= zone.row && row <= zone.row + 7 &&
            col >= zone.col && col <= zone.col + 7); });
    };
    QRCode.prototype.transformPixelLengthIntoNumberOfCells = function (pixelLength, cellSize) {
        return pixelLength / cellSize;
    };
    QRCode.prototype.isCoordinateInImage = function (col, row, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage) {
        if (logoImage) {
            var numberOfCellsMargin = 2;
            var firstRowOfLogo = this.transformPixelLengthIntoNumberOfCells(dxLogo, cellSize);
            var firstColumnOfLogo = this.transformPixelLengthIntoNumberOfCells(dyLogo, cellSize);
            var logoWidthInCells = this.transformPixelLengthIntoNumberOfCells(dWidthLogo, cellSize) - 1;
            var logoHeightInCells = this.transformPixelLengthIntoNumberOfCells(dHeightLogo, cellSize) - 1;
            return row >= firstRowOfLogo - numberOfCellsMargin && row <= firstRowOfLogo + logoWidthInCells + numberOfCellsMargin // check rows
                && col >= firstColumnOfLogo - numberOfCellsMargin && col <= firstColumnOfLogo + logoHeightInCells + numberOfCellsMargin; // check cols
        }
        else {
            return false;
        }
    };
    QRCode.prototype.shouldComponentUpdate = function (nextProps) {
        return !isEqual(this.props, nextProps);
    };
    QRCode.prototype.componentDidMount = function () {
        this.update();
    };
    QRCode.prototype.componentDidUpdate = function () {
        this.update();
    };
    QRCode.prototype.update = function () {
        var _a = this.props, value = _a.value, ecLevel = _a.ecLevel, enableCORS = _a.enableCORS, bgColor = _a.bgColor, fgColor = _a.fgColor, logoImage = _a.logoImage, logoOpacity = _a.logoOpacity, logoOnLoad = _a.logoOnLoad, removeQrCodeBehindLogo = _a.removeQrCodeBehindLogo, qrStyle = _a.qrStyle, eyeRadius = _a.eyeRadius, eyeColor = _a.eyeColor, logoPaddingStyle = _a.logoPaddingStyle;
        // just make sure that these params are passed as numbers
        var size = +this.props.size;
        var quietZone = +this.props.quietZone;
        var logoWidth = this.props.logoWidth ? +this.props.logoWidth : 0;
        var logoHeight = this.props.logoHeight ? +this.props.logoHeight : 0;
        var logoPadding = this.props.logoPadding ? +this.props.logoPadding : 0;
        var qrCode = qrGenerator(0, ecLevel);
        qrCode.addData(QRCode.utf16to8(value));
        qrCode.make();
        var canvas = ReactDOM.findDOMNode(this.canvas.current);
        var ctx = canvas.getContext('2d');
        var canvasSize = size + (2 * quietZone);
        var length = qrCode.getModuleCount();
        var cellSize = size / length;
        var scale = (window.devicePixelRatio || 1);
        canvas.height = canvas.width = canvasSize * scale;
        ctx.scale(scale, scale);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        var offset = quietZone;
        var positioningZones = [
            { row: 0, col: 0 },
            { row: 0, col: length - 7 },
            { row: length - 7, col: 0 },
        ];
        ctx.strokeStyle = fgColor;
        if (qrStyle === 'dots') {
            ctx.fillStyle = fgColor;
            var radius = cellSize / 2;
            for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones)) {
                        ctx.beginPath();
                        ctx.arc(Math.round(col * cellSize) + radius + offset, Math.round(row * cellSize) + radius + offset, (radius / 100) * 75, 0, 2 * Math.PI, false);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
        }
        else {
            for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones)) {
                        ctx.fillStyle = fgColor;
                        var w = (Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize));
                        var h = (Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize));
                        ctx.fillRect(Math.round(col * cellSize) + offset, Math.round(row * cellSize) + offset, w, h);
                    }
                }
            }
        }
        // Draw positioning patterns
        for (var i = 0; i < 3; i++) {
            var _b = positioningZones[i], row = _b.row, col = _b.col;
            var radii = eyeRadius;
            var color = void 0;
            if (Array.isArray(radii)) {
                radii = radii[i];
            }
            if (typeof radii == 'number') {
                radii = [radii, radii, radii, radii];
            }
            if (!eyeColor) { // if not specified, eye color is the same as foreground, 
                color = fgColor;
            }
            else {
                if (Array.isArray(eyeColor)) { // if array, we pass the single color
                    color = eyeColor[i];
                }
                else {
                    color = eyeColor;
                }
            }
            this.drawPositioningPattern(ctx, cellSize, offset, row, col, color, radii);
        }
        if (logoImage) {
            var image_1 = new Image();
            if (enableCORS) {
                image_1.crossOrigin = 'Anonymous';
            }
            image_1.onload = function () {
                ctx.save();
                var dWidthLogo = logoWidth || size * 0.2;
                var dHeightLogo = logoHeight || dWidthLogo;
                var dxLogo = ((size - dWidthLogo) / 2);
                var dyLogo = ((size - dHeightLogo) / 2);
                if (removeQrCodeBehindLogo || logoPadding) {
                    ctx.beginPath();
                    ctx.strokeStyle = bgColor;
                    ctx.fillStyle = bgColor;
                    var dWidthLogoPadding = dWidthLogo + (2 * logoPadding);
                    var dHeightLogoPadding = dHeightLogo + (2 * logoPadding);
                    var dxLogoPadding = dxLogo + offset - logoPadding;
                    var dyLogoPadding = dyLogo + offset - logoPadding;
                    if (logoPaddingStyle === 'circle') {
                        var dxCenterLogoPadding = dxLogoPadding + (dWidthLogoPadding / 2);
                        var dyCenterLogoPadding = dyLogoPadding + (dHeightLogoPadding / 2);
                        ctx.ellipse(dxCenterLogoPadding, dyCenterLogoPadding, dWidthLogoPadding / 2, dHeightLogoPadding / 2, 0, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.fill();
                    }
                    else {
                        ctx.fillRect(dxLogoPadding, dyLogoPadding, dWidthLogoPadding, dHeightLogoPadding);
                    }
                }
                ctx.globalAlpha = logoOpacity;
                ctx.drawImage(image_1, dxLogo + offset, dyLogo + offset, dWidthLogo, dHeightLogo);
                ctx.restore();
                if (logoOnLoad) {
                    logoOnLoad();
                }
            };
            image_1.src = logoImage;
        }
    };
    QRCode.prototype.render = function () {
        var _a;
        var qrSize = +this.props.size + (2 * +this.props.quietZone);
        return React.createElement('canvas', {
            id: (_a = this.props.id) !== null && _a !== void 0 ? _a : 'react-qrcode-logo',
            height: qrSize,
            width: qrSize,
            style: { height: qrSize + 'px', width: qrSize + 'px' },
            ref: this.canvas
        });
    };
    QRCode.defaultProps = {
        value: 'https://reactjs.org/',
        ecLevel: 'M',
        enableCORS: false,
        size: 150,
        quietZone: 10,
        bgColor: '#FFFFFF',
        fgColor: '#000000',
        logoOpacity: 1,
        qrStyle: 'squares',
        eyeRadius: [0, 0, 0],
        logoPaddingStyle: 'square'
    };
    return QRCode;
}(React.Component));
exports.QRCode = QRCode;


/***/ }),

/***/ 31369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useQueries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61941);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41026);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65295);
/* harmony import */ var _isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87167);
/* harmony import */ var _QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13110);
/* harmony import */ var _suspense_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29143);
'use client';









function useQueries({
  queries,
  context
}) {
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useQueryClient */ .NL)({
    context
  });
  const isRestoring = (0,_isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useIsRestoring */ .S)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useQueryErrorResetBoundary */ ._)();
  const defaultedQueries = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => queries.map(options => {
    const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure the results are already in fetching state before subscribing or updating options

    defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic';
    return defaultedOptions;
  }), [queries, queryClient, isRestoring]);
  defaultedQueries.forEach(query => {
    (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .ensureStaleTime */ .Fb)(query);
    (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .ensurePreventErrorBoundaryRetry */ .pf)(query, errorResetBoundary);
  });
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useClearResetErrorBoundary */ .JN)(errorResetBoundary);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__/* .QueriesObserver */ .y(queryClient, defaultedQueries));
  const optimisticResult = observer.getOptimisticResult(defaultedQueries);
  (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => isRestoring ? () => undefined : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_8__/* .notifyManager */ .V.batchCalls(onStoreChange)), [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setQueries(defaultedQueries, {
      listeners: false
    });
  }, [defaultedQueries, observer]);
  const shouldAtLeastOneSuspend = optimisticResult.some((result, index) => (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .shouldSuspend */ .SB)(defaultedQueries[index], result, isRestoring));
  const suspensePromises = shouldAtLeastOneSuspend ? optimisticResult.flatMap((result, index) => {
    const options = defaultedQueries[index];
    const queryObserver = observer.getObservers()[index];

    if (options && queryObserver) {
      if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .shouldSuspend */ .SB)(options, result, isRestoring)) {
        return (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .fetchOptimistic */ .j8)(options, queryObserver, errorResetBoundary);
      } else if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .willFetch */ .Z$)(result, isRestoring)) {
        void (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_4__/* .fetchOptimistic */ .j8)(options, queryObserver, errorResetBoundary);
      }
    }

    return [];
  }) : [];

  if (suspensePromises.length > 0) {
    throw Promise.all(suspensePromises);
  }

  const observerQueries = observer.getQueries();
  const firstSingleResultWhichShouldThrow = optimisticResult.find((result, index) => {
    var _defaultedQueries$ind, _defaultedQueries$ind2;

    return (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_5__/* .getHasError */ .KJ)({
      result,
      errorResetBoundary,
      useErrorBoundary: (_defaultedQueries$ind = (_defaultedQueries$ind2 = defaultedQueries[index]) == null ? void 0 : _defaultedQueries$ind2.useErrorBoundary) != null ? _defaultedQueries$ind : false,
      query: observerQueries[index]
    });
  });

  if (firstSingleResultWhichShouldThrow != null && firstSingleResultWhichShouldThrow.error) {
    throw firstSingleResultWhichShouldThrow.error;
  }

  return optimisticResult;
}


//# sourceMappingURL=useQueries.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.1251.js.map