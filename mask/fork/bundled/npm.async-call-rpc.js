"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3693],{

/***/ 87334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mT: () => (/* binding */ M)
/* harmony export */ });
/* unused harmony exports AsyncCall, NoSerialization, batch, notify */
function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class r extends (/* unused pure expression or super */ null && (Error)){constructor(r,t,n,i){super(t),e(this,"name",void 0),e(this,"code",void 0),e(this,"stack",void 0),this.name=r,this.code=n,this.stack=i}}let t={},n={},i=[{},{},t,n],o=(e,r)=>{let t=i.indexOf(e);return r.message+=`Error ${t}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#`+t,r},l={__proto__:null,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},a="DOMException:",s=(e,t,n,i)=>{try{let o=u();if(e.startsWith(a)&&o){let r=e.slice(a.length);return new o(t,r)}if(!(e in l))return new r(e,t,n,i);{let r=new l[e](t);return r.stack=i,r.code=n,r}}catch(r){return Error(`E${n} ${e}: ${t}
${i}`)}},c=e=>(e+"").replace(/^.+\n.+\n/,""),u=()=>{try{return DOMException}catch(e){}},f=e=>"string"==typeof e,y=e=>"boolean"==typeof e,p=e=>"function"==typeof e,d=e=>"object"==typeof e&&null!==e,h="Error",g=void 0,m=e=>Promise.resolve(e),b=Array.isArray,w=()=>"() => replay()",E=(e,r,t,n)=>{let i={jsonrpc:"2.0",id:e,method:r,params:t,remoteStack:n};return z(i,"id"),N(i,"remoteStack"),i},P=(e,r)=>{let t={jsonrpc:"2.0",id:e,result:r};return z(t,"id"),t},$=(e,r,t,n)=>{e===g&&(e=null),Number.isNaN(r=Math.floor(r))&&(r=-1);let i={jsonrpc:"2.0",id:e,error:{code:r,message:t,data:n}};return z(i.error,"data"),i},k=(e,r)=>{let t=j({},e,r),n=t.error;return n.code=-32700,n.message="Parse error",t},O=e=>$(e,-32600,"Invalid Request"),S=e=>$(e,-32601,"Method not found"),j=(e,r,t)=>{let{id:n}=e,{code:i,message:o,data:l}=t(r,e);return $(n,i,o,l)},v=(e="",r=-1)=>t=>{let n=x("",()=>t.message),i=x(h,(e=t.constructor)=>p(e)&&e.name),o=u();o&&t instanceof o&&(i=a+t.name),(f(t)||"number"==typeof t||y(t)||"bigint"==typeof t)&&(i=h,n=t+"");let l=e?{stack:e,type:i}:{type:i};return{code:r,message:n,data:l}},_=e=>{if(!d(e)||!("jsonrpc"in e)||"2.0"!==e.jsonrpc)return!1;if("params"in e){let r=e.params;if(!b(r)&&!d(r))return!1}return!0},x=(e,r)=>{try{let t=r();if(t===g)return e;return t+""}catch(r){return e}},z=(e,r)=>{e[r]===g&&delete e[r]},N=(e,r)=>{e[r]||delete e[r]},A={serialization:e=>e,deserialization:e=>e},M=(e=[g,g],r,t="null")=>({serialization(n){if(t&&d(n)&&"result"in n&&n.result===g){let e={...n};e.result=null,"keep"===t&&(e.undef=!0),n=e}return JSON.stringify(n,e[0],r)},deserialization(r){let t=JSON.parse(r,e[1]);return d(t)&&"result"in t&&null===t.result&&"undef"in t&&!0===t.undef&&(t.result=g,delete t.undef),t}}),C="AsyncCall/",R=Symbol.for(C+"ignored"),W=Symbol.for(C+"notify"),D=Symbol.for(C+"batch");function J(e){return p(e)?e[W]:new Proxy(e,{get:T})}let T=(e,r)=>e[r][W];function I(e){let r=[],t=new Proxy({},{get(t,i){let o=(...t)=>e[D](r,i,...t);return o[W]=(...t)=>e[D][W](r,i,...t),o[W][W]=o[W],f(i)&&Object.defineProperty(n,i,{value:o,configurable:!0}),o}}),n={__proto__:t};return[new Proxy(n,{getPrototypeOf:()=>null,setPrototypeOf:(e,r)=>null===r}),()=>{r.length&&r.r[0](),r.length=0},(e=Error("Aborted"))=>{r.length&&r.r[1](e),r.length=0}]}let q=()=>Math.random().toString(36).slice(2),F=e=>void 0===e||e,U=e=>{if("all"===e)return[!0,!0,!0,!0,!0,!0];if(!y(e)){let{beCalled:r,localError:t,remoteError:n,type:i,requestReplay:o,sendLocalStack:l}=e;return[F(r),F(t),F(n),"basic"!==i,o,l]}return e?[!0,!0,!0,!0]:[]},B=e=>{if(!y(e)){let{methodNotFound:r,unknownMessage:t}=e;return[r,t]}return[e,e]};function G(e,r){let i,l,a,u,y=!0,$=async()=>{try{i=await e}catch(e){l=e,ei("AsyncCall failed to start",e)}finally{y=!1}},x=e=>(a=e,K(e)&&e.setup(e=>ey(e).then(ep),e=>{let r=eh(e);return!!_(r)||m(r).then(_)}),H(e)&&e.on&&e.on(r=>ey(r).then(ep).then(r=>r&&e.send(r))),e),{serializer:z,key:N="rpc",strict:A=!0,log:M=!0,parameterStructures:C="by-position",preferLocalImplementation:J=!1,idGenerator:T=q,mapError:I,logger:F,channel:G,thenable:L}=r;e instanceof Promise?$():(i=e,y=!1);let[Q,V]=B(A),[X,Y,Z,ee,er,et]=U(M),{log:en,error:ei=en,debug:eo=en,groupCollapsed:el=en,groupEnd:ea=en,warn:es=en}=F||console,ec=new Map,eu=async e=>{if(y)await $();else if(l)return eg(l,"",e);let r="";try{let{params:t,method:n,id:o,remoteStack:l}=e,a=n.startsWith("rpc.")?Symbol.for(n):n,s=i&&i[a];if(!p(s)){if(Q)return S(o);Y&&eo("Missing method",a,e);return}let u=b(t)?t:[t];r=c(Error().stack);let f=new Promise(e=>e(s.apply(i,u)));if(X){if(ee){let e=[`${N}.%c${n}%c(${u.map(()=>"%o").join(", ")}%c)
%o %c@${o}`,"color: #d2c057","",...u,"",f,"color: gray; font-style: italic;"];if(er){let r=()=>{debugger;return s.apply(i,u)};r.toString=w,e.push(r)}l?(el(...e),en(l),ea()):en(...e)}else en(`${N}.${n}(${[...u].toString()}) @${o}`)}let y=await f;if(y===R)return;return P(o,y)}catch(t){return eg(t,r,e)}},ef=async e=>{let r="",t="",n=0,i=h;if("error"in e){let o=e.error;r=o.message,n=o.code;let l=o.data;t=d(l)&&"stack"in l&&f(l.stack)?l.stack:"<remote stack not available>",i=d(l)&&"type"in l&&f(l.type)?l.type:h,Z&&(ee?ei(`${i}: ${r}(${n}) %c@${e.id}
%c${t}`,"color: gray",""):ei(`${i}: ${r}(${n}) @${e.id}
${t}`))}let{id:o}=e;if(null===o||o===g||!ec.has(o))return;let[l,a,c=""]=ec.get(o);ec.delete(o),"error"in e?a(s(i,r,n,t+"\n    аt AsyncCall (rpc) \n"+c)):l(e.result)},ey=async e=>{let r;let t=g;try{if(r=await eh(e),_(r))return t=await ew(r);if(b(r)&&r.every(_)&&0!==r.length)return Promise.all(r.map(ew));if(!V)return g;{let e=r.id;return e===g&&(e=null),O(e)}}catch(e){return Y&&ei(e,r,t),k(e,I||v(e&&e.stack))}},ep=async e=>{if(e){if(!b(e))return ed(e);{let r=e.filter(e=>e&&"id"in e);if(0===r.length)return;return ed(r)}}},ed=z?e=>z.serialization(e):Object,eh=z?e=>z.deserialization(e):Object;G instanceof Promise?u=G.then(x):x(G);let eg=(e,r,t)=>(d(e)&&"stack"in e&&(e.stack=r.split("\n").reduce((e,r)=>e.replace(r+"\n",""),""+e.stack)),Y&&ei(e),j(t,e,I||v(et?e.stack:g))),em=async(e,r=!1)=>{r&&(e=[...e]);let t=await ed(e);return(a||await u).send(t)},eb=(e,r)=>{for(let t of e)if("id"in t){let e=ec.get(t.id);e&&e[1](r)}},ew=async e=>{if("method"in e){let r=eu(e);if("id"in e)return r;try{await r}catch(e){}return g}return ef(e)},eE=(e,r,n,l=!1)=>new Promise((a,s)=>{let u=g;if(e===D&&(u=r.shift(),e=r.shift()),"symbol"==typeof e){let r=Symbol.keyFor(e)||e.description;if(r){if(r.startsWith("rpc."))e=r;else throw TypeError("Not start with rpc.")}}else if(e.startsWith("rpc."))throw o(t,TypeError());if(J&&!y&&f(e)){let t=i&&i[e];if(p(t))return a(t(...r))}let h=T();n=c(n);let m="by-name"===C&&1===r.length&&d(r[0])?r[0]:r,b=E(l?g:h,e,m,et?n:g);if(u?(u.push(b),u.r||(u.r=[()=>em(u,!0),e=>eb(u,e)])):em(b).catch(s),l)return a();ec.set(h,[a,s,n])}),eP=(e,r)=>{let t={[r]:(...e)=>eE(r,e,Error().stack)}[r],n={[r]:(...e)=>eE(r,e,Error().stack,!0)}[r];return t[W]=n[W]=n,f(r)&&Object.defineProperty(e$,r,{value:t,configurable:!0}),t},e$={__proto__:new Proxy({},{get:eP})};return!1===L?e$.then=g:L===g&&Object.defineProperty(e$,"then",{configurable:!0,get(){es(o(n,TypeError("RPC used as Promise: ")))}}),new Proxy(e$,{getPrototypeOf:()=>null,setPrototypeOf:(e,r)=>null===r,getOwnPropertyDescriptor:(e,r)=>(r in e$||eP(e,r),Object.getOwnPropertyDescriptor(e$,r))})}let H=e=>"send"in e&&p(e.send),K=e=>"setup"in e&&p(e.setup);
//# sourceMappingURL=base.min.mjs.map


/***/ }),

/***/ 56499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ AsyncCall),
/* harmony export */   dC: () => (/* binding */ batch),
/* harmony export */   h4: () => (/* binding */ notify),
/* harmony export */   rc: () => (/* binding */ AsyncGeneratorCall)
/* harmony export */ });
/* unused harmony exports JSONSerialization, NoSerialization */
/// <reference types="./full.d.ts" />
function _define_property$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class CustomError extends Error {
    constructor(name, message, code, stack){
        super(message);
        _define_property$1(this, "name", void 0);
        _define_property$1(this, "code", void 0);
        _define_property$1(this, "stack", void 0);
        this.name = name;
        this.code = code;
        this.stack = stack;
    }
}
const Err_Cannot_find_a_running_iterator_with_given_ID = {};
const Err_Only_string_can_be_the_RPC_method_name = {};
const Err_Cannot_call_method_starts_with_rpc_dot_directly = {};
const Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options = {};
const Messages = [
    Err_Cannot_find_a_running_iterator_with_given_ID,
    Err_Only_string_can_be_the_RPC_method_name,
    Err_Cannot_call_method_starts_with_rpc_dot_directly,
    Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options
];
// https://github.com/Jack-Works/async-call-rpc/wiki/Error-messages
const makeHostedMessage = (id, error)=>{
    const n = Messages.indexOf(id);
    error.message += `Error ${n}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#` + n;
    return error;
};
// ! side effect
/** These Error is defined in ECMAScript spec */ const errors = {
    // @ts-expect-error
    __proto__: null,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError
};
const DOMExceptionHeader = 'DOMException:';
/**
 * AsyncCall support somehow transfer ECMAScript Error
 */ const RecoverError = (type, message, code, stack)=>{
    try {
        const E = globalDOMException();
        if (type.startsWith(DOMExceptionHeader) && E) {
            const name = type.slice(DOMExceptionHeader.length);
            return new E(message, name);
        } else if (type in errors) {
            const e = new errors[type](message);
            e.stack = stack;
            // @ts-expect-error
            e.code = code;
            return e;
        } else {
            return new CustomError(type, message, code, stack);
        }
    } catch (e) {
        return new Error(`E${code} ${type}: ${message}\n${stack}`);
    }
};
const removeStackHeader = (stack)=>String(stack).replace(/^.+\n.+\n/, '');
// ! side effect
const globalDOMException = ()=>{
    try {
        // @ts-expect-error
        return DOMException;
    } catch (e) {}
};

const isString = (x)=>typeof x === 'string';
const isBoolean = (x)=>typeof x === 'boolean';
const isFunction = (x)=>typeof x === 'function';
const isObject = (params)=>typeof params === 'object' && params !== null;
const ERROR = 'Error';
const undefined$1 = void 0;
const Object_setPrototypeOf = Object.setPrototypeOf;
const Promise_resolve = (x)=>Promise.resolve(x);
const isArray = Array.isArray;
const replayFunction = ()=>'() => replay()';

const jsonrpc = '2.0';
const Request = (id, method, params, remoteStack)=>{
    const x = {
        jsonrpc,
        id,
        method,
        params,
        remoteStack
    };
    deleteUndefined(x, 'id');
    deleteFalsy(x, 'remoteStack');
    return x;
};
const SuccessResponse = (id, result)=>{
    const x = {
        jsonrpc,
        id,
        result
    };
    deleteUndefined(x, 'id');
    return x;
};
const ErrorResponse = (id, code, message, data)=>{
    if (id === undefined$1) id = null;
    code = Math.floor(code);
    if (Number.isNaN(code)) code = -1;
    const x = {
        jsonrpc,
        id,
        error: {
            code,
            message,
            data
        }
    };
    deleteUndefined(x.error, 'data');
    return x;
};
// Pre defined error in section 5.1
// ! side effect
const ErrorResponseParseError = (e, mapper)=>{
    const obj = ErrorResponseMapped({}, e, mapper);
    const o = obj.error;
    o.code = -32700;
    o.message = 'Parse error';
    return obj;
};
// Not using.
// InvalidParams -32602 'Invalid params'
// InternalError -32603 'Internal error'
const ErrorResponseInvalidRequest = (id)=>ErrorResponse(id, -32600, 'Invalid Request');
const ErrorResponseMethodNotFound = (id)=>ErrorResponse(id, -32601, 'Method not found');
const ErrorResponseMapped = (request, e, mapper)=>{
    const { id  } = request;
    const { code , message , data  } = mapper(e, request);
    return ErrorResponse(id, code, message, data);
};
const defaultErrorMapper = (stack = '', code = -1)=>(e)=>{
        let message = toString('', ()=>e.message);
        let type = toString(ERROR, (ctor = e.constructor)=>isFunction(ctor) && ctor.name);
        const E = globalDOMException();
        if (E && e instanceof E) type = DOMExceptionHeader + e.name;
        if (isString(e) || typeof e === 'number' || isBoolean(e) || typeof e === 'bigint') {
            type = ERROR;
            message = String(e);
        }
        const data = stack ? {
            stack,
            type
        } : {
            type
        };
        return {
            code,
            message,
            data
        };
    };
const isJSONRPCObject = (data)=>{
    if (!isObject(data)) return false;
    if (!('jsonrpc' in data)) return false;
    if (data.jsonrpc !== jsonrpc) return false;
    if ('params' in data) {
        const params = data.params;
        if (!isArray(params) && !isObject(params)) return false;
    }
    return true;
};
const toString = (_default, val)=>{
    try {
        const v = val();
        if (v === undefined$1) return _default;
        return String(v);
    } catch (e) {
        return _default;
    }
};
const deleteUndefined = (x, key)=>{
    if (x[key] === undefined$1) delete x[key];
};
const deleteFalsy = (x, key)=>{
    if (!x[key]) delete x[key];
};

//#region Serialization
/**
 * Serialization implementation that do nothing
 * @remarks {@link Serialization}
 * @public
 * @deprecated Will be removed in next major version
 */ const NoSerialization = {
    serialization (from) {
        return from;
    },
    deserialization (serialized) {
        return serialized;
    }
};
/**
 * Create a serialization by JSON.parse/stringify
 *
 * @param replacerAndReceiver - Replacer and receiver of JSON.parse/stringify
 * @param space - Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @param undefinedKeepingBehavior - How to keep "undefined" in result of SuccessResponse?
 *
 * If it is not handled properly, JSON.stringify will emit an invalid JSON RPC object.
 *
 * Options:
 * - `"null"`(**default**): convert it to null.
 * - `"keep"`: try to keep it by additional property "undef".
 * - `false`: Don't keep it, let it break.
 * @remarks {@link Serialization}
 * @public
 */ const JSONSerialization = (replacerAndReceiver = [
    undefined$1,
    undefined$1
], space, undefinedKeepingBehavior = 'null')=>({
        serialization (from) {
            if (undefinedKeepingBehavior && isObject(from) && 'result' in from && from.result === undefined$1) {
                const alt = {
                    ...from
                };
                alt.result = null;
                if (undefinedKeepingBehavior === 'keep') alt.undef = true;
                from = alt;
            }
            return JSON.stringify(from, replacerAndReceiver[0], space);
        },
        deserialization (serialized) {
            const result = JSON.parse(serialized, replacerAndReceiver[1]);
            if (isObject(result) && 'result' in result && result.result === null && 'undef' in result && result.undef === true) {
                result.result = undefined$1;
                delete result.undef;
            }
            return result;
        }
    } //#endregion
    );

const i$1 = 'AsyncCall/';
// ! side effect
const AsyncCallIgnoreResponse = Symbol.for(i$1 + 'ignored');
const AsyncCallNotify = Symbol.for(i$1 + 'notify');
const AsyncCallBatch = Symbol.for(i$1 + 'batch');

/**
 * Wrap the AsyncCall instance to send notification.
 * @param instanceOrFnOnInstance - The AsyncCall instance or function on the AsyncCall instance
 * @example
 * const notifyOnly = notify(AsyncCall(...))
 * @public
 */ function notify(instanceOrFnOnInstance) {
    if (isFunction(instanceOrFnOnInstance)) return instanceOrFnOnInstance[AsyncCallNotify];
    return new Proxy(instanceOrFnOnInstance, {
        get: notifyTrap
    });
}
const notifyTrap = (target, p)=>{
    return target[p][AsyncCallNotify];
};

/**
 * Wrap the AsyncCall instance to use batch call.
 * @param asyncCallInstance - The AsyncCall instance
 * @example
 * const [batched, send, drop] = batch(AsyncCall(...))
 * batched.call1() // pending
 * batched.call2() // pending
 * send() // send all pending requests
 * drop() // drop all pending requests
 * @returns It will return a tuple.
 *
 * The first item is the batched version of AsyncCall instance passed in.
 *
 * The second item is a function to send all pending requests.
 *
 * The third item is a function to drop and reject all pending requests.
 * @public
 */ function batch(asyncCallInstance) {
    const queue = [];
    const getTrap = new Proxy({}, {
        get (_, p) {
            // @ts-expect-error
            const f = (...args)=>asyncCallInstance[AsyncCallBatch](queue, p, ...args);
            // @ts-expect-error
            f[AsyncCallNotify] = (...args)=>// @ts-expect-error
                asyncCallInstance[AsyncCallBatch][AsyncCallNotify](queue, p, ...args);
            // @ts-expect-error
            f[AsyncCallNotify][AsyncCallNotify] = f[AsyncCallNotify];
            isString(p) && Object.defineProperty(methodContainer, p, {
                value: f,
                configurable: true
            });
            return f;
        }
    });
    const methodContainer = {
        __proto__: getTrap
    };
    return [
        new Proxy(methodContainer, {
            getPrototypeOf: ()=>null,
            setPrototypeOf: (_, value)=>value === null
        }),
        ()=>{
            queue.length && queue.r[0]();
            queue.length = 0;
        },
        (error = new Error('Aborted'))=>{
            queue.length && queue.r[1](error);
            queue.length = 0;
        }
    ];
}

const generateRandomID = ()=>Math.random().toString(36).slice(2);

const undefinedToTrue = (x)=>x === void 0 ? true : x;
const normalizeLogOptions = (log)=>{
    if (log === 'all') return [
        true,
        true,
        true,
        true,
        true,
        true
    ];
    if (!isBoolean(log)) {
        const { beCalled , localError , remoteError , type , requestReplay , sendLocalStack  } = log;
        return [
            undefinedToTrue(beCalled),
            undefinedToTrue(localError),
            undefinedToTrue(remoteError),
            type !== 'basic',
            requestReplay,
            sendLocalStack
        ];
    }
    if (log) return [
        true,
        true,
        true,
        true
    ];
    return [];
};
const normalizeStrictOptions = (strict)=>{
    if (!isBoolean(strict)) {
        const { methodNotFound , unknownMessage  } = strict;
        return [
            methodNotFound,
            unknownMessage
        ];
    }
    return [
        strict,
        strict
    ];
};

/**
 * Create a RPC server & client.
 *
 * @remarks
 * See {@link AsyncCallOptions}
 *
 * thisSideImplementation can be a Promise so you can write:
 *
 * ```ts
 * export const service = AsyncCall(typeof window === 'object' ? {} : import('./backend/service.js'), {})
 * ```
 *
 * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server. Can be a Promise.
 * @param options - {@link AsyncCallOptions}
 * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, it will be converted to the async version.
 * @returns Same as the `OtherSideImplementedFunctions` type parameter, but every function in that interface becomes async and non-function value is removed. Method called "then" are also removed.
 * @public
 */ function AsyncCall(thisSideImplementation, options) {
    let isThisSideImplementationPending = true;
    let resolvedThisSideImplementationValue;
    let rejectedThisSideImplementation;
    let resolvedChannel;
    let channelPromise;
    // This promise should never fail
    const awaitThisSideImplementation = async ()=>{
        try {
            resolvedThisSideImplementationValue = await thisSideImplementation;
        } catch (e) {
            rejectedThisSideImplementation = e;
            console_error('AsyncCall failed to start', e);
        } finally{
            isThisSideImplementationPending = false;
        }
    };
    const onChannelResolved = (channel)=>{
        resolvedChannel = channel;
        if (isCallbackBasedChannel(channel)) {
            channel.setup((data)=>rawMessageReceiver(data).then(rawMessageSender), (data)=>{
                const _ = deserialization(data);
                if (isJSONRPCObject(_)) return true;
                return Promise_resolve(_).then(isJSONRPCObject);
            });
        }
        if (isEventBasedChannel(channel)) {
            const m = channel;
            m.on && m.on((_)=>rawMessageReceiver(_).then(rawMessageSender).then((x)=>x && m.send(x)));
        }
        return channel;
    };
    const { serializer , key: logKey = 'rpc' , strict =true , log =true , parameterStructures ='by-position' , preferLocalImplementation =false , idGenerator =generateRandomID , mapError , logger , channel , thenable  } = options;
    if (thisSideImplementation instanceof Promise) awaitThisSideImplementation();
    else {
        resolvedThisSideImplementationValue = thisSideImplementation;
        isThisSideImplementationPending = false;
    }
    const [banMethodNotFound, banUnknownMessage] = normalizeStrictOptions(strict);
    const [log_beCalled, log_localError, log_remoteError, log_pretty, log_requestReplay, log_sendLocalStack] = normalizeLogOptions(log);
    const { log: console_log , error: console_error = console_log , debug: console_debug = console_log , groupCollapsed: console_groupCollapsed = console_log , groupEnd: console_groupEnd = console_log , warn: console_warn = console_log  } = logger || console;
    const requestContext = new Map();
    const onRequest = async (data)=>{
        if (isThisSideImplementationPending) await awaitThisSideImplementation();
        else {
            // not pending
            if (rejectedThisSideImplementation) return makeErrorObject(rejectedThisSideImplementation, '', data);
        }
        let frameworkStack = '';
        try {
            const { params , method , id: req_id , remoteStack  } = data;
            // ? We're mapping any method starts with 'rpc.' to a Symbol.for
            const key = method.startsWith('rpc.') ? Symbol.for(method) : method;
            const executor = resolvedThisSideImplementationValue && resolvedThisSideImplementationValue[key];
            if (!isFunction(executor)) {
                if (!banMethodNotFound) {
                    if (log_localError) console_debug('Missing method', key, data);
                    return;
                } else return ErrorResponseMethodNotFound(req_id);
            }
            const args = isArray(params) ? params : [
                params
            ];
            frameworkStack = removeStackHeader(new Error().stack);
            const promise = new Promise((resolve)=>resolve(executor.apply(resolvedThisSideImplementationValue, args)));
            if (log_beCalled) {
                if (log_pretty) {
                    const logArgs = [
                        `${logKey}.%c${method}%c(${args.map(()=>'%o').join(', ')}%c)\n%o %c@${req_id}`,
                        'color: #d2c057',
                        '',
                        ...args,
                        '',
                        promise,
                        'color: gray; font-style: italic;'
                    ];
                    if (log_requestReplay) {
                        // This function will be logged to the console so it must be 1 line
                        // prettier-ignore
                        const replay = ()=>{
                            debugger;
                            return executor.apply(resolvedThisSideImplementationValue, args);
                        };
                        replay.toString = replayFunction;
                        logArgs.push(replay);
                    }
                    if (remoteStack) {
                        console_groupCollapsed(...logArgs);
                        console_log(remoteStack);
                        console_groupEnd();
                    } else console_log(...logArgs);
                } else console_log(`${logKey}.${method}(${[
                    ...args
                ].toString()}) @${req_id}`);
            }
            const result = await promise;
            if (result === AsyncCallIgnoreResponse) return;
            return SuccessResponse(req_id, result);
        } catch (e) {
            return makeErrorObject(e, frameworkStack, data);
        }
    };
    const onResponse = async (data)=>{
        let errorMessage = '', remoteErrorStack = '', errorCode = 0, errorType = ERROR;
        if ('error' in data) {
            const e = data.error;
            errorMessage = e.message;
            errorCode = e.code;
            const detail = e.data;
            if (isObject(detail) && 'stack' in detail && isString(detail.stack)) remoteErrorStack = detail.stack;
            else remoteErrorStack = '<remote stack not available>';
            if (isObject(detail) && 'type' in detail && isString(detail.type)) errorType = detail.type;
            else errorType = ERROR;
            if (log_remoteError) log_pretty ? console_error(`${errorType}: ${errorMessage}(${errorCode}) %c@${data.id}\n%c${remoteErrorStack}`, 'color: gray', '') : console_error(`${errorType}: ${errorMessage}(${errorCode}) @${data.id}\n${remoteErrorStack}`);
        }
        const { id  } = data;
        if (id === null || id === undefined$1 || !requestContext.has(id)) return;
        const [resolve, reject, localErrorStack = ''] = requestContext.get(id);
        requestContext.delete(id);
        if ('error' in data) {
            reject(RecoverError(errorType, errorMessage, errorCode, // ? We use \u0430 which looks like "a" to prevent browser think "at AsyncCall" is a real stack
            remoteErrorStack + '\n    \u0430t AsyncCall (rpc) \n' + localErrorStack));
        } else {
            resolve(data.result);
        }
        return;
    };
    const rawMessageReceiver = async (_)=>{
        let data;
        let result = undefined$1;
        try {
            data = await deserialization(_);
            if (isJSONRPCObject(data)) {
                return result = await handleSingleMessage(data);
            } else if (isArray(data) && data.every(isJSONRPCObject) && data.length !== 0) {
                return Promise.all(data.map(handleSingleMessage));
            } else {
                if (banUnknownMessage) {
                    let id = data.id;
                    if (id === undefined$1) id = null;
                    return ErrorResponseInvalidRequest(id);
                } else {
                    // ? Ignore this message. The message channel maybe also used to transfer other message too.
                    return undefined$1;
                }
            }
        } catch (e) {
            if (log_localError) console_error(e, data, result);
            // todo: should check before access e.stack
            return ErrorResponseParseError(e, mapError || defaultErrorMapper(e && e.stack));
        }
    };
    const rawMessageSender = async (res)=>{
        if (!res) return;
        if (isArray(res)) {
            const reply = res.filter((x)=>x && 'id' in x);
            if (reply.length === 0) return;
            return serialization(reply);
        } else {
            return serialization(res);
        }
    };
    const serialization = serializer ? (x)=>serializer.serialization(x) : Object;
    const deserialization = serializer ? (x)=>serializer.deserialization(x) : Object;
    if (channel instanceof Promise) channelPromise = channel.then(onChannelResolved);
    else onChannelResolved(channel);
    const makeErrorObject = (e, frameworkStack, data)=>{
        if (isObject(e) && 'stack' in e) e.stack = frameworkStack.split('\n').reduce((stack, fstack)=>stack.replace(fstack + '\n', ''), '' + e.stack);
        if (log_localError) console_error(e);
        return ErrorResponseMapped(data, e, mapError || defaultErrorMapper(log_sendLocalStack ? e.stack : undefined$1));
    };
    const sendPayload = async (payload, removeQueueR = false)=>{
        if (removeQueueR) payload = [
            ...payload
        ];
        const data = await serialization(payload);
        return (resolvedChannel || await channelPromise).send(data);
    };
    const rejectsQueue = (queue, error)=>{
        for (const x of queue){
            if ('id' in x) {
                const ctx = requestContext.get(x.id);
                ctx && ctx[1](error);
            }
        }
    };
    const handleSingleMessage = async (data)=>{
        if ('method' in data) {
            const r = onRequest(data);
            if ('id' in data) return r;
            try {
                await r;
            } catch (e) {}
            return undefined$1 // Does not care about return result for notifications
            ;
        }
        return onResponse(data);
    };
    const call = (method, args, stack, notify = false)=>{
        return new Promise((resolve, reject)=>{
            let queue = undefined$1;
            if (method === AsyncCallBatch) {
                queue = args.shift();
                method = args.shift();
            }
            if (typeof method === 'symbol') {
                const RPCInternalMethod = Symbol.keyFor(method) || method.description;
                if (RPCInternalMethod) {
                    if (RPCInternalMethod.startsWith('rpc.')) method = RPCInternalMethod;
                    else throw new TypeError('Not start with rpc.');
                }
            } else if (method.startsWith('rpc.')) {
                throw makeHostedMessage(Err_Cannot_call_method_starts_with_rpc_dot_directly, new TypeError());
            }
            if (preferLocalImplementation && !isThisSideImplementationPending && isString(method)) {
                const localImpl = resolvedThisSideImplementationValue && resolvedThisSideImplementationValue[method];
                if (isFunction(localImpl)) return resolve(localImpl(...args));
            }
            const id = idGenerator();
            stack = removeStackHeader(stack);
            const param = parameterStructures === 'by-name' && args.length === 1 && isObject(args[0]) ? args[0] : args;
            const request = Request(notify ? undefined$1 : id, method, param, log_sendLocalStack ? stack : undefined$1);
            if (queue) {
                queue.push(request);
                if (!queue.r) queue.r = [
                    ()=>sendPayload(queue, true),
                    (e)=>rejectsQueue(queue, e)
                ];
            } else sendPayload(request).catch(reject);
            if (notify) return resolve();
            requestContext.set(id, [
                resolve,
                reject,
                stack
            ]);
        });
    };
    const getTrap = (_, method)=>{
        const f = {
            // This function will be logged to the console so it must be 1 line
            [method]: (..._)=>call(method, _, new Error().stack)
        }[method];
        const f2 = {
            [method]: (..._)=>call(method, _, new Error().stack, true)
        }[method];
        // @ts-expect-error
        f[AsyncCallNotify] = f2[AsyncCallNotify] = f2;
        isString(method) && Object.defineProperty(methodContainer, method, {
            value: f,
            configurable: true
        });
        return f;
    };
    const methodContainer = {
        __proto__: new Proxy({}, {
            get: getTrap
        })
    };
    if (thenable === false) methodContainer.then = undefined$1;
    else if (thenable === undefined$1) {
        Object.defineProperty(methodContainer, 'then', {
            configurable: true,
            get () {
                console_warn(makeHostedMessage(Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options, new TypeError('RPC used as Promise: ')));
            }
        });
    }
    return new Proxy(methodContainer, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, value)=>value === null,
        // some library will treat this object as a normal object and run algorithm steps in https://tc39.es/ecma262/#sec-ordinaryget
        getOwnPropertyDescriptor (_, method) {
            if (!(method in methodContainer)) getTrap(_, method) // trigger [[Get]]
            ;
            return Object.getOwnPropertyDescriptor(methodContainer, method);
        }
    });
}
const isEventBasedChannel = (x)=>'send' in x && isFunction(x.send);
const isCallbackBasedChannel = (x)=>'setup' in x && isFunction(x.setup);

/**
 * See the document at https://github.com/Jack-Works/async-call/
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
const i = 'rpc.async-iterator.';
// ! side effect
const AsyncIteratorStart = Symbol.for(i + 'start');
const AsyncIteratorNext = Symbol.for(i + 'next');
const AsyncIteratorReturn = Symbol.for(i + 'return');
const AsyncIteratorThrow = Symbol.for(i + 'throw');
/**
 * The async generator version of the AsyncCall
 * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server.
 * @param options - {@link AsyncCallOptions}
 * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, AsyncCall will convert it to the Promised type.
 * @remarks
 * Warning: Due to technical limitation, AsyncGeneratorCall will leak memory. Use it at your own risk.
 *
 * To use AsyncGeneratorCall, the server and the client MUST support the following JSON RPC internal methods which is pre ECMAScript async generator semantics:
 *
 * - `rpc.async-iterator.start`
 *
 * - `rpc.async-iterator.next`
 *
 * - `rpc.async-iterator.return`
 *
 * - `rpc.async-iterator.throw`
 *
 * @example
 * ```ts
 * const server = {
 *      async *generator() {
 *          let last = 0
 *          while (true) yield last++
 *      },
 * }
 * type Server = typeof server
 * const serverRPC = AsyncGeneratorCall<Server>({}, { channel })
 * async function main() {
 *      for await (const x of serverRPC.generator()) {
 *          console.log('Server yielded number', x)
 *      }
 * }
 * ```
 * @public
 */ function AsyncGeneratorCall(thisSideImplementation, options) {
    const iterators = new Map();
    var _options_strict;
    const [methodNotFound] = normalizeStrictOptions((_options_strict = options.strict) !== null && _options_strict !== void 0 ? _options_strict : true);
    const { idGenerator =generateRandomID  } = options;
    const findIterator = (id, next)=>{
        const it = iterators.get(id);
        if (!it) {
            if (methodNotFound) throw makeHostedMessage(Err_Cannot_find_a_running_iterator_with_given_ID, new Error(`Iterator ${id}, `));
            else return AsyncCallIgnoreResponse;
        }
        const result = next(it);
        isFinished(result, ()=>iterators.delete(id));
        return result;
    };
    const server = {
        async [AsyncIteratorStart] (method, args) {
            const iteratorGenerator = (await thisSideImplementation)[method];
            if (!isFunction(iteratorGenerator)) {
                if (methodNotFound) throw new TypeError(method + ' is not a function');
                else return AsyncCallIgnoreResponse;
            }
            const iterator = iteratorGenerator(...args);
            const id = idGenerator();
            iterators.set(id, iterator);
            return id;
        },
        [AsyncIteratorNext] (id, val) {
            return findIterator(id, (it)=>it.next(val));
        },
        [AsyncIteratorReturn] (id, val) {
            return findIterator(id, (it)=>isFunction(it.return) && it.return(val));
        },
        [AsyncIteratorThrow] (id, val) {
            return findIterator(id, (it)=>isFunction(it.throw) && it.throw(val));
        }
    };
    const remote = AsyncCall(server, options);
    const getTrap = (_, method)=>{
        if (!isString(method)) throw makeHostedMessage(Err_Only_string_can_be_the_RPC_method_name, new TypeError(''));
        const f = {
            [method]: (..._)=>{
                const id = remote[AsyncIteratorStart](method, _);
                return new _AsyncGenerator(remote, id);
            }
        }[method];
        Object.defineProperty(methodContainer, method, {
            value: f,
            configurable: true
        });
        return f;
    };
    const methodContainer = {
        __proto__: new Proxy({}, {
            get: getTrap
        })
    };
    return new Proxy(methodContainer, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, val)=>val === null,
        // some library will treat this object as a normal object and run algorithm steps in https://tc39.es/ecma262/#sec-ordinaryget
        getOwnPropertyDescriptor (_, method) {
            if (!(method in methodContainer)) getTrap(_, method) // trigger [[Get]]
            ;
            return Object.getOwnPropertyDescriptor(methodContainer, method);
        }
    });
}
class _AsyncGenerator {
    async return(val) {
        if (this.d) return makeIteratorResult(true, val);
        return this.c(this.r[AsyncIteratorReturn](await this.i, val));
    }
    async next(val) {
        if (this.d) return makeIteratorResult(true);
        return this.c(this.r[AsyncIteratorNext](await this.i, val));
    }
    async throw(val) {
        if (!this.d) return this.c(this.r[AsyncIteratorThrow](await this.i, val));
        throw val;
    }
    /**
     * @param r Remote Implementation
     * @param i id
     */ constructor(r, i){
        _define_property(this, "r", void 0);
        _define_property(this, "i", void 0);
        /** done? */ _define_property(this, "d", void 0);
        /** check */ _define_property(this, "c", void 0);
        this.r = r;
        this.i = i;
        this.d = false;
        this.c = async (val)=>{
            await isFinished(val, ()=>this.d = true);
            return val;
        };
    }
}
// ! side effect
const EmptyAsyncGenerator = async function*() {};
const AsyncGeneratorConstructor = EmptyAsyncGenerator.constructor;
const AsyncGeneratorConstructorPrototype = AsyncGeneratorConstructor.prototype;
Object_setPrototypeOf(_AsyncGenerator, AsyncGeneratorConstructorPrototype);
const AsyncGeneratorPrototype = Object.getPrototypeOf(EmptyAsyncGenerator());
Object_setPrototypeOf(_AsyncGenerator.prototype, AsyncGeneratorPrototype);
const isFinished = async (result, cb)=>{
    try {
        const x = await result;
        x && x.done && cb();
    } catch (e) {}
};
const makeIteratorResult = (done, value = undefined)=>({
        done,
        value
    });


//# sourceMappingURL=full.mjs.map


/***/ })

}]);
//# sourceMappingURL=npm.async-call-rpc.js.map