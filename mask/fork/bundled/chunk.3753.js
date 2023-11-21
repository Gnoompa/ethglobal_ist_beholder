(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[3753],{

/***/ 10513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18802);







const isCyberConnectUrl = (x)=>!!x.match(/app\.cyberconnect\.me\/.+\/(0x[\dA-Fa-f]{40}|\w+.eth)/);
function Renderer({ url }) {
    usePluginWrapper(true);
    return /*#__PURE__*/ _jsx(ThemeProvider, {
        theme: MaskLightTheme,
        children: /*#__PURE__*/ _jsx(Profile, {
            url: url
        })
    });
}
const site = {
    ..._base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u,
    init (signal) {},
    // DecryptedInspector: function Component(props): JSX.Element | null {
    //     const link = useMemo(() => {
    //         const x = extractTextFromTypedMessage(props.message)
    //         if (x.isNone()) return null
    //         return parseURLs(x.value).find(isCyberConnectUrl)
    //     }, [props.message])
    //     if (!link) return null
    //     return <Renderer url={link} />
    // },
    PostActions: function Component() {
        // const link = usePostInfoDetails.mentionedLinks().find(isCyberConnectUrl)
        // if (!link) return null
        console.log('behold init');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: "test beholder"
        });
    },
    PostInspector: function Component() {
        // const link = usePostInfoDetails.mentionedLinks().find(isCyberConnectUrl)
        // if (!link) return null
        console.log('behold init');
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: "test beholder"
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: _base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u.ID,
            category: 'dapp',
            marketListSortingPriority: 17,
            description: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
                i18nKey: "__plugin_description",
                defaults: "Decentralized social graph protocol for user-centric Web3.",
                ns: _base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u.ID
            }),
            name: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .cC, {
                i18nKey: "__plugin_name",
                fallback: "CyberConnect",
                ns: _base_js__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u.ID
            }),
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.CyberConnect, {
                size: 36
            }),
            tutorialLink: 'https://cyberconnect.me/'
        }
    ],
    wrapperProps: {
        // icon: (
        //     <Icons.CyberConnect
        //         variant="light"
        //         style={{ width: 24, height: 24, filter: 'drop-shadow(0px 6px 12px rgba(27, 144, 238, 0.2))' }}
        //     />
        // ),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (site);


/***/ }),

/***/ 48653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4697);
/* harmony import */ var void_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(void_elements__WEBPACK_IMPORTED_MODULE_0__);
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements__WEBPACK_IMPORTED_MODULE_0___default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);


/***/ }),

/***/ 4697:
/***/ ((module) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ })

}]);
//# sourceMappingURL=chunk.3753.js.map