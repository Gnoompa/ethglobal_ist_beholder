(function () {
    'use strict';

    function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class r extends Error{constructor(r,t,n,i){super(t),e(this,"name",void 0),e(this,"code",void 0),e(this,"stack",void 0),this.name=r,this.code=n,this.stack=i;}}let t={},n={},i=[{},{},t,n],o=(e,r)=>{let t=i.indexOf(e);return r.message+=`Error ${t}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#`+t,r},l={__proto__:null,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},a="DOMException:",s=(e,t,n,i)=>{try{let o=u();if(e.startsWith(a)&&o){let r=e.slice(a.length);return new o(t,r)}if(!(e in l))return new r(e,t,n,i);{let r=new l[e](t);return r.stack=i,r.code=n,r}}catch(r){return Error(`E${n} ${e}: ${t}
${i}`)}},c=e=>(e+"").replace(/^.+\n.+\n/,""),u=()=>{try{return DOMException}catch(e){}},f=e=>"string"==typeof e,y=e=>"boolean"==typeof e,p=e=>"function"==typeof e,d=e=>"object"==typeof e&&null!==e,h="Error",g=void 0,m=e=>Promise.resolve(e),b=Array.isArray,w=()=>"() => replay()",E=(e,r,t,n)=>{let i={jsonrpc:"2.0",id:e,method:r,params:t,remoteStack:n};return z(i,"id"),N(i,"remoteStack"),i},P=(e,r)=>{let t={jsonrpc:"2.0",id:e,result:r};return z(t,"id"),t},$=(e,r,t,n)=>{e===g&&(e=null),Number.isNaN(r=Math.floor(r))&&(r=-1);let i={jsonrpc:"2.0",id:e,error:{code:r,message:t,data:n}};return z(i.error,"data"),i},k=(e,r)=>{let t=j({},e,r),n=t.error;return n.code=-32700,n.message="Parse error",t},O=e=>$(e,-32600,"Invalid Request"),S=e=>$(e,-32601,"Method not found"),j=(e,r,t)=>{let{id:n}=e,{code:i,message:o,data:l}=t(r,e);return $(n,i,o,l)},v=(e="",r=-1)=>t=>{let n=x("",()=>t.message),i=x(h,(e=t.constructor)=>p(e)&&e.name),o=u();o&&t instanceof o&&(i=a+t.name),(f(t)||"number"==typeof t||y(t)||"bigint"==typeof t)&&(i=h,n=t+"");let l=e?{stack:e,type:i}:{type:i};return {code:r,message:n,data:l}},_=e=>{if(!d(e)||!("jsonrpc"in e)||"2.0"!==e.jsonrpc)return !1;if("params"in e){let r=e.params;if(!b(r)&&!d(r))return !1}return !0},x=(e,r)=>{try{let t=r();if(t===g)return e;return t+""}catch(r){return e}},z=(e,r)=>{e[r]===g&&delete e[r];},N=(e,r)=>{e[r]||delete e[r];},M=(e=[g,g],r,t="null")=>({serialization(n){if(t&&d(n)&&"result"in n&&n.result===g){let e={...n};e.result=null,"keep"===t&&(e.undef=!0),n=e;}return JSON.stringify(n,e[0],r)},deserialization(r){let t=JSON.parse(r,e[1]);return d(t)&&"result"in t&&null===t.result&&"undef"in t&&!0===t.undef&&(t.result=g,delete t.undef),t}}),C="AsyncCall/",R=Symbol.for(C+"ignored"),W=Symbol.for(C+"notify"),D=Symbol.for(C+"batch");let q=()=>Math.random().toString(36).slice(2),F=e=>void 0===e||e,U=e=>{if("all"===e)return [!0,!0,!0,!0,!0,!0];if(!y(e)){let{beCalled:r,localError:t,remoteError:n,type:i,requestReplay:o,sendLocalStack:l}=e;return [F(r),F(t),F(n),"basic"!==i,o,l]}return e?[!0,!0,!0,!0]:[]},B=e=>{if(!y(e)){let{methodNotFound:r,unknownMessage:t}=e;return [r,t]}return [e,e]};function G(e,r){let i,l,a,u,y=!0,$=async()=>{try{i=await e;}catch(e){l=e,ei("AsyncCall failed to start",e);}finally{y=!1;}},x=e=>(a=e,K(e)&&e.setup(e=>ey(e).then(ep),e=>{let r=eh(e);return !!_(r)||m(r).then(_)}),H(e)&&e.on&&e.on(r=>ey(r).then(ep).then(r=>r&&e.send(r))),e),{serializer:z,key:N="rpc",strict:A=!0,log:M=!0,parameterStructures:C="by-position",preferLocalImplementation:J=!1,idGenerator:T=q,mapError:I,logger:F,channel:G,thenable:L}=r;e instanceof Promise?$():(i=e,y=!1);let[Q,V]=B(A),[X,Y,Z,ee,er,et]=U(M),{log:en,error:ei=en,debug:eo=en,groupCollapsed:el=en,groupEnd:ea=en,warn:es=en}=F||console,ec=new Map,eu=async e=>{if(y)await $();else if(l)return eg(l,"",e);let r="";try{let{params:t,method:n,id:o,remoteStack:l}=e,a=n.startsWith("rpc.")?Symbol.for(n):n,s=i&&i[a];if(!p(s)){if(Q)return S(o);Y&&eo("Missing method",a,e);return}let u=b(t)?t:[t];r=c(Error().stack);let f=new Promise(e=>e(s.apply(i,u)));if(X){if(ee){let e=[`${N}.%c${n}%c(${u.map(()=>"%o").join(", ")}%c)
%o %c@${o}`,"color: #d2c057","",...u,"",f,"color: gray; font-style: italic;"];if(er){let r=()=>{debugger;return s.apply(i,u)};r.toString=w,e.push(r);}l?(el(...e),en(l),ea()):en(...e);}else en(`${N}.${n}(${[...u].toString()}) @${o}`);}let y=await f;if(y===R)return;return P(o,y)}catch(t){return eg(t,r,e)}},ef=async e=>{let r="",t="",n=0,i=h;if("error"in e){let o=e.error;r=o.message,n=o.code;let l=o.data;t=d(l)&&"stack"in l&&f(l.stack)?l.stack:"<remote stack not available>",i=d(l)&&"type"in l&&f(l.type)?l.type:h,Z&&(ee?ei(`${i}: ${r}(${n}) %c@${e.id}
%c${t}`,"color: gray",""):ei(`${i}: ${r}(${n}) @${e.id}
${t}`));}let{id:o}=e;if(null===o||o===g||!ec.has(o))return;let[l,a,c=""]=ec.get(o);ec.delete(o),"error"in e?a(s(i,r,n,t+"\n    аt AsyncCall (rpc) \n"+c)):l(e.result);},ey=async e=>{let r;let t=g;try{if(r=await eh(e),_(r))return t=await ew(r);if(b(r)&&r.every(_)&&0!==r.length)return Promise.all(r.map(ew));if(!V)return g;{let e=r.id;return e===g&&(e=null),O(e)}}catch(e){return Y&&ei(e,r,t),k(e,I||v(e&&e.stack))}},ep=async e=>{if(e){if(!b(e))return ed(e);{let r=e.filter(e=>e&&"id"in e);if(0===r.length)return;return ed(r)}}},ed=z?e=>z.serialization(e):Object,eh=z?e=>z.deserialization(e):Object;G instanceof Promise?u=G.then(x):x(G);let eg=(e,r,t)=>(d(e)&&"stack"in e&&(e.stack=r.split("\n").reduce((e,r)=>e.replace(r+"\n",""),""+e.stack)),Y&&ei(e),j(t,e,I||v(et?e.stack:g))),em=async(e,r=!1)=>{r&&(e=[...e]);let t=await ed(e);return (a||await u).send(t)},eb=(e,r)=>{for(let t of e)if("id"in t){let e=ec.get(t.id);e&&e[1](r);}},ew=async e=>{if("method"in e){let r=eu(e);if("id"in e)return r;try{await r;}catch(e){}return g}return ef(e)},eE=(e,r,n,l=!1)=>new Promise((a,s)=>{let u=g;if(e===D&&(u=r.shift(),e=r.shift()),"symbol"==typeof e){let r=Symbol.keyFor(e)||e.description;if(r){if(r.startsWith("rpc."))e=r;else throw TypeError("Not start with rpc.")}}else if(e.startsWith("rpc."))throw o(t,TypeError());if(J&&!y&&f(e)){let t=i&&i[e];if(p(t))return a(t(...r))}let h=T();n=c(n);let m="by-name"===C&&1===r.length&&d(r[0])?r[0]:r,b=E(l?g:h,e,m,et?n:g);if(u?(u.push(b),u.r||(u.r=[()=>em(u,!0),e=>eb(u,e)])):em(b).catch(s),l)return a();ec.set(h,[a,s,n]);}),eP=(e,r)=>{let t={[r]:(...e)=>eE(r,e,Error().stack)}[r],n={[r]:(...e)=>eE(r,e,Error().stack,!0)}[r];return t[W]=n[W]=n,f(r)&&Object.defineProperty(e$,r,{value:t,configurable:!0}),t},e$={__proto__:new Proxy({},{get:eP})};return !1===L?e$.then=g:L===g&&Object.defineProperty(e$,"then",{configurable:!0,get(){es(o(n,TypeError("RPC used as Promise: ")));}}),new Proxy(e$,{getPrototypeOf:()=>null,setPrototypeOf:(e,r)=>null===r,getOwnPropertyDescriptor:(e,r)=>(r in e$||eP(e,r),Object.getOwnPropertyDescriptor(e$,r))})}let H=e=>"send"in e&&p(e.send),K=e=>"setup"in e&&p(e.setup);

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

    const serializer = M([
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

    const self = {
        request_init: null
    };
    const readyPromise = new Promise((resolve)=>{
        self.request_init = async (init)=>resolve(init);
    });
    const contentScript = G(self, {
        channel: createMaskSDKChannel('user'),
        serializer,
        log: false
    });

    var img = "data:image/svg+xml,%3csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m60 120a60 60 0 1 0 0-120 60 60 0 0 0 0 120z' fill='%231c68f3'/%3e%3cpath clip-rule='evenodd' d='m96 46v20h-62.58a27.21 27.21 0 0 0 50.95 6h11.63v16.8a7.2 7.2 0 0 1 -7.2 7.2h-57.6a7.2 7.2 0 0 1 -7.2-7.2v-42.8zm-18.53 26a21.18 21.18 0 0 1 -35.03 0zm-32.87-21.2a11.2 11.2 0 0 0 -11.09 9.6h6.14a5.2 5.2 0 0 1 9.9 0h6.14a11.2 11.2 0 0 0 -11.09-9.6zm30.8 0a11.2 11.2 0 0 0 -11.09 9.6h6.14a5.2 5.2 0 0 1 9.9 0h6.14a11.2 11.2 0 0 0 -11.09-9.6zm13.4-26.8a7.2 7.2 0 0 1 7.2 7.2v8.8h-72v-8.8a7.2 7.2 0 0 1 7.2-7.2z' fill='white' fill-rule='evenodd'/%3e%3c/svg%3e";
      var image = img;

    class EthereumEventEmitter extends EventTarget {
        #mapping = new WeakMap();
        #getMappedFunction(listener) {
            if (typeof listener !== 'function') return undefined;
            if (!this.#mapping.has(listener)) {
                const mapped = (event)=>{
                    listener(event.detail);
                };
                this.#mapping.set(listener, mapped);
                return mapped;
            }
            return this.#mapping.get(listener);
        }
        on(eventName, listener) {
            if (typeof eventName === 'symbol') return this;
            const f = this.#getMappedFunction(listener);
            if (!f) return this;
            super.addEventListener(eventName, f);
            return this;
        }
        removeListener(eventName, listener) {
            if (typeof eventName === 'symbol') return this;
            super.removeEventListener(eventName, this.#getMappedFunction(listener));
            return this;
        }
    }
    class MaskProvider extends EthereumEventEmitter {
        async request(param) {
            return contentScript.eth_request(param);
        }
    }
    const ethereum = new MaskProvider();
    {
        const detail = {
            info: {
                uuid: 'f113ee3f-49e3-4576-8f77-c3991d82af41',
                name: 'Mask Wallet',
                rdns: 'io.mask',
                icon: String(image)
            },
            provider: ethereum
        };
        Object.freeze(detail);
        Object.freeze(detail.info);
        const event = new CustomEvent('eip6963:announceProvider', {
            detail
        });
        window.dispatchEvent(event);
        window.addEventListener('eip6963:requestProvider', ()=>window.dispatchEvent(event));
    }

    document.currentScript?.remove();
    const promise = readyPromise.then((init)=>{
        const MaskSDK = {
            sdkVersion: 0,
            ethereum
        };
        if (init.debuggerMode) MaskSDK.reload = ()=>contentScript.reload();
        Object.assign(globalThis, {
            Mask: MaskSDK
        });
        return MaskSDK;
    });
    if (!('Mask' in globalThis)) Object.assign(globalThis, {
        Mask: promise
    });

})();
