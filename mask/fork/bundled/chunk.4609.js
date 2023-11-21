"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4609],{

/***/ 4609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  addRedPacket: () => (/* binding */ addRedPacket),
  addRedPacketNft: () => (/* reexport */ addRedPacketNft),
  getNftRedPacketHistory: () => (/* binding */ getNftRedPacketHistory),
  getRedPacketHistoryFromDatabase: () => (/* binding */ getRedPacketHistoryFromDatabase),
  getRedPacketNft: () => (/* reexport */ getRedPacketNft),
  updateRedPacketNft: () => (/* reexport */ updateRedPacketNft)
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/plugins/RedPacket/src/Worker/database.ts
var database = __webpack_require__(88611);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 1 modules
var omit = __webpack_require__(17711);
;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/Worker/databaseForNft.ts


async function getRedPacketNft(id) {
    const record = await database/* RedPacketDatabase */.Uy.get('red-packet-nft', id);
    return record ? RedPacketNftRecordOutDB(record) : undefined;
}
async function addRedPacketNft(record) {
    return database/* RedPacketDatabase */.Uy.add(RedPacketNftRecordIntoDB(record));
}
async function updateRedPacketNft(newRecord) {
    if (!newRecord.id) {
        return;
    }
    const record = await database/* RedPacketDatabase */.Uy.get('red-packet-nft', newRecord.id);
    if (record) {
        await database/* RedPacketDatabase */.Uy.remove('red-packet-nft', newRecord.id);
    }
    await database/* RedPacketDatabase */.Uy.add(newRecord);
}
function RedPacketNftRecordOutDB(x) {
    const record = x;
    return (0,omit/* default */.Z)(record, [
        'type'
    ]);
}
function RedPacketNftRecordIntoDB(x) {
    const record = x;
    record.type = 'red-packet-nft';
    return record;
}

;// CONCATENATED MODULE: ./packages/plugins/RedPacket/src/Worker/services.ts




async function addRedPacket(record, chainId) {
    await database/* addRedPacket */.np(record);
}
async function getRedPacketHistoryFromDatabase(redpacketsFromChain) {
    // #region Inject password from database
    const redpacketsFromDatabase = await database/* getAllRedpackets */.cb(redpacketsFromChain.map((x)=>x.txid));
    return redpacketsFromChain.map((x)=>{
        const record = redpacketsFromDatabase.find((y)=>y.id === x.txid);
        if (!record) return x;
        return {
            ...x,
            password: record.password
        };
    });
}
// #endregion
async function getNftRedPacketHistory(histories) {
    let historiesWithPassword = constants/* EMPTY_LIST */.rP;
    for (const history of histories){
        const record = await getRedPacketNft(history.txid);
        historiesWithPassword = historiesWithPassword.concat({
            ...history,
            password: record?.password || ''
        });
    }
    return historiesWithPassword;
}


/***/ })

}]);
//# sourceMappingURL=chunk.4609.js.map