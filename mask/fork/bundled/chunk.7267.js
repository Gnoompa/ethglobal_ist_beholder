"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7267],{

/***/ 27267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  startMaskSDK: () => (/* binding */ startMaskSDK)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/base.min.mjs
var base_min = __webpack_require__(87334);
;// CONCATENATED MODULE: ./packages/mask-sdk/shared/error.ts
// data?: unknown
class MaskEthereumProviderRpcError extends Error {
    constructor(code, message, options = {}){
        const { cause = undefined } = options;
        super(message, {
            cause
        });
        this.code = code;
        // this.data = data
        delete this.stack;
    }
    code;
    data;
}
var ErrorCode;
(function(ErrorCode) {
    ErrorCode[ErrorCode["ParseError"] = -32700] = "ParseError";
    ErrorCode[ErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    ErrorCode[ErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    ErrorCode[ErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    ErrorCode[ErrorCode["InternalError"] = -32603] = "InternalError";
})(ErrorCode || (ErrorCode = {}));
var ErrorMessages;
(function(ErrorMessages) {
    ErrorMessages["FirstArgumentIsNotObject"] = 'Expected a single, non-array, object argument.';
    ErrorMessages["FirstArgumentMethodFieldInvalid"] = "'args.method' must be a non-empty string.";
    ErrorMessages["UnknownMethod"] = 'The method "$" does not exist / is not available.';
    ErrorMessages[// ParamsIsNotObjectOrArray = "'args.params' must be an object or array if provided.",
    "ParamsIsNotArray"] = "'args.params' must be an array if provided.";
    ErrorMessages["InvalidMethodParams"] = 'Invalid method parameter(s).';
    ErrorMessages["wallet_requestPermissions_Empty"] = 'Permissions request for origin "$" contains no permissions.';
    ErrorMessages["wallet_requestPermissions_Unknown"] = 'Permissions request for origin "$" contains invalid requested permission(s).';
})(ErrorMessages || (ErrorMessages = {}));

;// CONCATENATED MODULE: ./packages/mask-sdk/shared/serializer.ts


const serializer = (0,base_min/* JSONSerialization */.mT)([
    (key, value)=>{
        if (value === undefined) return {
            $type: 'undefined'
        };
        if (value instanceof ArrayBuffer) return ArrayBufferEncode(value);
        if (value instanceof Uint8Array) return U8ArrayEncode(value);
        if (value instanceof Map) return MapEncode(value);
        if (value instanceof MaskEthereumProviderRpcError) return MaskEthereumProviderRpcErrorEncode(value);
        return value;
    },
    (key, value)=>{
        if (typeof value === 'object' && value !== null && '$type' in value) {
            if (value.$type === 'undefined') return undefined;
            return ArrayBufferDecode(value) || U8ArrayDecode(value) || MapDecode(value) || MaskEthereumProviderRpcErrorDecode(value);
        }
        return value;
    }
]);
const [ArrayBufferEncode, ArrayBufferDecode] = createClassSerializer(ArrayBuffer, (e)=>[
        ...new Uint8Array(e)
    ], (e)=>new Uint8Array(e).buffer);
const [U8ArrayEncode, U8ArrayDecode] = createClassSerializer(Uint8Array, (e)=>[
        ...e
    ], (e)=>new Uint8Array(e));
const [MapEncode, MapDecode] = createClassSerializer(Map, (e)=>[
        ...e.entries()
    ].map((value)=>[
            serializer.serialization(value[0]),
            serializer.serialization(value[1])
        ]), (e)=>new Map(e.map(([k, v])=>[
            serializer.deserialization(k),
            serializer.deserialization(v)
        ])));
const [MaskEthereumProviderRpcErrorEncode, MaskEthereumProviderRpcErrorDecode] = createClassSerializer(MaskEthereumProviderRpcError, (e)=>[
        serializer.serialization(e.cause),
        Number(e.code),
        serializer.serialization(e.data),
        String(e.message)
    ], ([cause, code, data, message])=>{
    return new MaskEthereumProviderRpcError(Number(code), String(message), {
        cause: serializer.deserialization(cause)
    });
});
// data: serializer.deserialization(data),
function createClassSerializer(clz, encode, decode) {
    return [
        (v)=>{
            return {
                $type: clz.name,
                value: encode(v)
            };
        },
        (v)=>{
            if (v.$type === clz.name) return decode(v.value);
            return undefined;
        }
    ];
}

;// CONCATENATED MODULE: ./packages/mask-sdk/shared/channel.ts
const EVENT_UserScript = '@masknet/sdk-raw/us';
const EVENT_ContentScript = '@masknet/sdk-raw/cs';
function createMaskSDKChannel(side) {
    const thisSide = side === 'content' ? EVENT_ContentScript : EVENT_UserScript;
    const otherSide = side === 'content' ? EVENT_UserScript : EVENT_ContentScript;
    return {
        on (callback) {
            const f = (e)=>{
                if (e instanceof CustomEvent) callback(e.detail);
            };
            globalThis.addEventListener(thisSide, f);
            return ()=>document.removeEventListener(thisSide, f);
        },
        send (data) {
            globalThis.dispatchEvent(new CustomEvent(otherSide, {
                detail: data
            }));
        }
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(56499);
;// CONCATENATED MODULE: ./packages/mask-sdk/server/index.ts




function createMaskSDKServer(api, signal) {
    // TODO: support AbortSignal
    return (0,full/* AsyncCall */.LE)(api, {
        serializer: serializer,
        channel: createMaskSDKChannel('content'),
        log: false,
        thenable: false,
        mapError (error) {
            return {
                code: error.code,
                message: error.message,
                data: error
            };
        }
    });
}

// EXTERNAL MODULE: ./packages/mask/utils-pure/hmr.ts
var hmr = __webpack_require__(28780);
;// CONCATENATED MODULE: ./packages/mask/entry-sdk/hmr-sdk.ts


const { signal } = (0,hmr/* hmr */.f)(/* unsupported import.meta.webpackHot */ undefined);
try {
    if (false) {}
} catch  {}

// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isReadonlyMethodType.ts
var isReadonlyMethodType = __webpack_require__(37911);
;// CONCATENATED MODULE: ./packages/mask/entry-sdk/bridge/eth.ts



const readonlyMethods = {};
for (const method of isReadonlyMethodType/* readonlyMethodType */.n){
    readonlyMethods[method] = async (params)=>{
        return service/* default */.ZP.Wallet.send({
            jsonrpc: '2.0',
            method,
            params
        });
    };
}
// Reference:
// https://ethereum.github.io/execution-apis/api-documentation/
// https://docs.metamask.io/wallet/reference/eth_subscribe/
const methods = {
    ...readonlyMethods,
    // https://eips.ethereum.org/EIPS/eip-2255
    wallet_getPermissions () {
        return service/* default */.ZP.Wallet.EIP2255_wallet_getPermissions(location.origin);
    },
    async wallet_requestPermissions (request) {
        if (typeof request !== 'object' || request === null) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidParams, ErrorMessages.InvalidMethodParams);
        if (Object.keys(request).length === 0) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidParams, ErrorMessages.wallet_requestPermissions_Empty.replaceAll('$', location.origin));
        for(const key in request){
            if (typeof key !== 'string' || typeof request[key] !== 'object' || request[key] === null) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidParams, ErrorMessages.wallet_requestPermissions_Unknown.replaceAll('$', location.origin));
        }
        return service/* default */.ZP.Wallet.EIP2255_wallet_requestPermissions(location.origin, request);
    }
};
Object.setPrototypeOf(methods, null);
async function eth_request(request) {
    if (typeof request !== 'object' || request === null) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidRequest, ErrorMessages.FirstArgumentIsNotObject);
    const { method } = request;
    if (typeof method !== 'string' || !method) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidRequest, ErrorMessages.FirstArgumentMethodFieldInvalid);
    if (!(method in methods)) throw new MaskEthereumProviderRpcError(ErrorCode.MethodNotFound, ErrorMessages.UnknownMethod.replaceAll('$', method));
    const { params } = request;
    if (params !== undefined && !Array.isArray(params)) throw new MaskEthereumProviderRpcError(ErrorCode.InvalidRequest, ErrorMessages.ParamsIsNotArray);
    const f = Reflect.get(methods, method);
    return f(...params);
}

;// CONCATENATED MODULE: ./packages/mask/entry-sdk/bridge/index.ts


const maskSDKServer = {
    eth_request: eth_request,
    async reload () {
        if (true) return;
        await service/* default */.ZP.SiteAdaptor.attachMaskSDKToCurrentActivePage('once');
    }
};

;// CONCATENATED MODULE: ./packages/mask/entry-sdk/hmr-bridge.ts

const hmr_sdkServer = {
    ...maskSDKServer
};
if (false) {}

;// CONCATENATED MODULE: ./packages/mask/entry-sdk/index.ts



async function startMaskSDK() {
    const maskSDK = createMaskSDKServer(hmr_sdkServer);
    // TODO: listen to SNSContext connected status
    return maskSDK.request_init({
        debuggerMode: "production" === 'development'
    });
}


/***/ }),

/***/ 28780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ hmr)
/* harmony export */ });
function hmr(hot) {
    const ac = new AbortController();
    hot?.dispose(()=>ac.abort());
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback(), {
                    once: true
                });
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=chunk.7267.js.map