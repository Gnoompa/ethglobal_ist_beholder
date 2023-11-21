"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8008],{

/***/ 88611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uy: () => (/* binding */ RedPacketDatabase),
/* harmony export */   cb: () => (/* binding */ getAllRedpackets),
/* harmony export */   kF: () => (/* binding */ setupDatabase),
/* harmony export */   np: () => (/* binding */ addRedPacket)
/* harmony export */ });
/* unused harmony export getRedPacket */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17711);

let RedPacketDatabase;
function setupDatabase(x) {
    RedPacketDatabase = x;
}
async function getAllRedpackets(ids) {
    const records = [];
    for await (const record of RedPacketDatabase.iterate('red-packet')){
        if (ids.includes(record.value.id)) records.push(RedPacketRecordOutDB(record.value));
    }
    return records;
}
async function getRedPacket(id) {
    const record = await RedPacketDatabase.get('red-packet', id);
    return record ? RedPacketRecordOutDB(record) : undefined;
}
async function addRedPacket(record) {
    return RedPacketDatabase.add(RedPacketRecordIntoDB(record));
}
function RedPacketRecordIntoDB(x) {
    const record = x;
    record.type = 'red-packet';
    return record;
}
function RedPacketRecordOutDB(x) {
    const record = x;
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(record, [
        'type'
    ]);
}


/***/ }),

/***/ 68008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71188);
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88611);


const worker = {
    ..._base_js__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        context.startService(__webpack_require__.e(/* import() */ 4609).then(__webpack_require__.bind(__webpack_require__, 4609)));
        (0,_database_js__WEBPACK_IMPORTED_MODULE_1__/* .setupDatabase */ .kF)(context.getDatabaseStorage());
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ })

}]);
//# sourceMappingURL=chunk.8008.js.map