"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5815],{

/***/ 15815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getMaskBoxMetadata: () => (/* reexport */ getMaskBoxMetadata),
  getMerkleProof: () => (/* reexport */ merkleProof/* getMerkleProof */.g)
});

// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/apis/storage.ts

async function getMaskBoxMetadata(boxId, creator) {
    const stringStorage = entry/* Web3Storage */.xk.createFireflyStorage('MaskBox', creator);
    return stringStorage.get(boxId);
}

// EXTERNAL MODULE: ./packages/plugins/MaskBox/src/apis/merkleProof.ts
var merkleProof = __webpack_require__(70918);
;// CONCATENATED MODULE: ./packages/plugins/MaskBox/src/apis/index.ts




/***/ }),

/***/ 70918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getMerkleProof)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78757);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60330);


async function getMerkleProof(leaf, root) {
    try {
        const response = await fetch((0,urlcat__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .MERKLE_PROOF_ENDPOINT */ .m, {
            leaf,
            root: root.replace(/^0x/, '')
        }));
        return await response.json();
    } catch (err) {
        throw new Error(Reflect.get(Object(err), 'message'));
    }
}


/***/ })

}]);
//# sourceMappingURL=chunk.5815.js.map