"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5594],{

/***/ 77081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _I: () => (/* binding */ deleteFile),
/* harmony export */   gQ: () => (/* binding */ renameFile),
/* harmony export */   kF: () => (/* binding */ setupDatabase),
/* harmony export */   oq: () => (/* binding */ setFileInfo),
/* harmony export */   ww: () => (/* binding */ getAllFiles)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6964);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83598);


let Database;
function setupDatabase(_) {
    Database = _;
}
let migrationDone = false;
async function migrationV1() {
    if (!Database) return;
    if (migrationDone) return;
    for await (const x of Database.iterate_mutate('arweave')){
        for (const file of (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__/* .migrateFileInfoV1 */ .zb)(x.value)){
            await Database.add({
                ...file,
                createdAt: typeof file.createdAt !== 'number' ? new Date(file.createdAt).getTime() : file.createdAt
            });
        }
        await x.delete();
    }
    migrationDone = true;
}
async function getAllFiles() {
    await migrationV1();
    const files = [];
    for await (const { value } of Database.iterate('file')){
        files.push(value);
    }
    return files.sort((a, b)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(new Date(a.createdAt), new Date(b.createdAt)));
}
async function setFileInfo(info) {
    await migrationV1();
    return Database.add(info);
}
async function renameFile(id, newName) {
    const file = await Database.get('file', id);
    if (!file) throw new Error("File to rename doesn't exist");
    await Database.remove('file', id);
    Database.add({
        ...file,
        name: newName
    });
}
async function deleteFile(id) {
    await Database.remove('file', id);
}


/***/ }),

/***/ 5594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95210);
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77081);



const worker = {
    ..._base_js__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal, context) {
        context.startService(Promise.all(/* import() */[__webpack_require__.e(3147), __webpack_require__.e(3742), __webpack_require__.e(5756), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(7372), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(5655), __webpack_require__.e(7100), __webpack_require__.e(1006), __webpack_require__.e(6220), __webpack_require__.e(9836)]).then(__webpack_require__.bind(__webpack_require__, 60893)).then(({ upload, ...rest })=>rest));
        context.startGeneratorService(Promise.all(/* import() */[__webpack_require__.e(3147), __webpack_require__.e(3742), __webpack_require__.e(5756), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(7372), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(5655), __webpack_require__.e(7100), __webpack_require__.e(1006), __webpack_require__.e(6220), __webpack_require__.e(9836)]).then(__webpack_require__.bind(__webpack_require__, 60893)).then(({ upload })=>({
                upload
            })));
        (0,_database_js__WEBPACK_IMPORTED_MODULE_2__/* .setupDatabase */ .kF)(context.getDatabaseStorage());
    },
    backup: {
        onBackup: async ()=>{
            const files = await (0,_database_js__WEBPACK_IMPORTED_MODULE_2__/* .getAllFiles */ .ww)();
            const result = files?.length ? new ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Some(files) : ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
            return result;
        },
        onRestore: async (files)=>{
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Result.wrap(()=>{
                files.map(async (file)=>{
                    await (0,_database_js__WEBPACK_IMPORTED_MODULE_2__/* .setFileInfo */ .oq)(file);
                });
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 83598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uR: () => (/* binding */ digest),
  Sv: () => (/* binding */ downloadFile),
  R9: () => (/* binding */ getFileInfoMetadata),
  sM: () => (/* binding */ makeFileKey),
  Gd: () => (/* binding */ makeFileKeySigned),
  zb: () => (/* binding */ migrateFileInfoV1)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(70358);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(55906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/bom/open-window.ts
var open_window = __webpack_require__(38096);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Metadata/index.ts
var Metadata = __webpack_require__(33845);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/constants.ts
var constants = __webpack_require__(65977);
// EXTERNAL MODULE: ./packages/plugins/FileService/src/types.ts
var types = __webpack_require__(73354);
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave","ipfs"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/schema-v3.json
const schema_v3_namespaceObject = JSON.parse('{"type":"array","items":[{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave","ipfs"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":["number","string"],"title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}]}');
;// CONCATENATED MODULE: ./packages/plugins/FileService/src/helpers.ts












// Note: if the latest version has been changed, please update packages/mask/content-script/components/CompositionDialog/useSubmit.ts
const reader_v1 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
const reader_v3 = (0,Metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_3 */.ep, schema_v3_namespaceObject);
function getFileInfoMetadata(meta) {
    const v3 = reader_v3(meta);
    if (v3.isOk()) return v3;
    const v2 = reader_v2(meta).map((info)=>[
            info
        ]);
    if (v2.isOk()) return v2;
    return reader_v1(meta).map(migrateFileInfoV1);
}
function migrateFileInfoV1(info) {
    return [
        {
            ...info,
            type: 'file',
            provider: 'arweave'
        }
    ];
}
async function makeFileKeySigned(fileKey) {
    if ((0,isNil/* default */.Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,esm/* encodeText */.YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(esm/* encodeArrayBuffer */.ll);
}
const resolveGatewayAPI = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [types/* Provider */.z.Arweave]: 'https://arweave.net',
    [types/* Provider */.z.IPFS]: 'https://mask.infura-ipfs.io/ipfs'
}, ()=>'Unknown provider');
function makeFileKey(length = 16) {
    let key = '';
    // cspell:disable-next-line
    const table = 'ABDEFGHJKMNPQRTWXYadefhijkmnprstuvwxyz03478';
    for(let i = 0; i < length; i += 1){
        key += table.charAt(Math.floor(Math.random() * table.length));
    }
    return key;
}
function downloadFile(file) {
    const gateway = resolveGatewayAPI(file.provider);
    let link = (0,dist/* default */.ZP)(gateway, '/:txId', {
        txId: file.landingTxID
    });
    if ((0,isAfter/* default */.Z)(new Date(2022, 8, 1), new Date(file.createdAt))) {
        link = (0,dist/* default */.ZP)(constants/* RECOVERY_PAGE */.nH, {
            url: encodeURIComponent(link)
        });
    }
    (0,open_window/* openWindow */.x)(file.key ? `${link}#${file.key}` : link);
}
async function digestFile(file) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, '0'));
    return hashHex;
}
async function digestMessage(message) {
    const buffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
async function digest(file, extraData) {
    const fileDigest = await digestFile(file);
    const dataDigest = await digestMessage(JSON.stringify(extraData));
    return digestMessage(JSON.stringify([
        fileDigest,
        dataDigest
    ]));
}


/***/ }),

/***/ 73354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Provider)
/* harmony export */ });
var Provider/**
     * Before v3, it's checksum of the file.
     * Since v3, it's digest(file, [provider, useCDN, encrypted])
     */ /**
     * Before v3, it's Date
     * Since v3, it's number
     */ /** Doesn't exist in uploading file info */ /** Doesn't exist in uploading file info */ ;
(function(Provider) {
    Provider["Arweave"] = 'arweave';
    Provider["IPFS"] = 'ipfs';
})(Provider || (Provider = {}));


/***/ }),

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

/***/ 33845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   mC: () => (/* binding */ createRenderWithMetadata),
/* harmony export */   r1: () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, renderWithMetadataUntyped */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42582);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35268);
}



const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key);
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (!meta.has(key)) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.isErr()) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.error);
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
        }
    }
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err)(validator.getLastErrors());
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.isOk()) return render(message.value);
        return null;
    };
}
let immer_setup = false;
function editTypedMessageMeta(typedMessage, edit) {
    if (!immer_setup) {
        (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
        immer_setup = true;
    }
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .produce */ .Uy)(typedMessage, (e)=>{
        if (!e.meta) e.meta = new Map();
        edit(e.meta);
        if (e.meta.size === 0) e.meta = undefined;
    });
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.isOk()) return render(message.value);
    return null;
}


/***/ })

}]);
//# sourceMappingURL=chunk.5594.js.map