(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5801],{

/***/ 94724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $G: () => (/* binding */ isEC_JsonWebKey)
/* harmony export */ });
/* unused harmony exports isAESJsonWebKey, isEC_Public_JsonWebKey, isEC_Private_JsonWebKey */
// Create nominal typing interfaces for different JsonWebKey type
// So they will no longer assignable to each other
function isAESJsonWebKey(x) {
    if (typeof x !== 'object' || x === null) return false;
    const { alg, k, key_ops, kty } = x;
    if (!alg || !k || !Array.isArray(key_ops) || kty !== 'oct') return false;
    return true;
}
function isEC_JsonWebKey(o) {
    if (typeof o !== 'object' || o === null) return false;
    const { crv, key_ops, kty, x, y } = o;
    if (!crv || !Array.isArray(key_ops) || !kty || !x || !y) return false;
    return true;
}
function isEC_Public_JsonWebKey(o) {
    if (!isEC_JsonWebKey(o)) return false;
    return !o.d;
}
function isEC_Private_JsonWebKey(o) {
    if (!isEC_JsonWebKey(o)) return false;
    return !!o.d;
} /** Ghost property, don't use it! */ 


/***/ }),

/***/ 17688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J$: () => (/* binding */ decompressK256Key),
/* harmony export */   b2: () => (/* binding */ compressK256Key)
/* harmony export */ });
/* unused harmony exports compressK256Point, decompressK256Point, compressK256KeyRaw, decompressK256Raw, isK256Point, isK256PrivateKey */
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85907);


/**
 * Compress x & y into a single x
 */ async function compressK256Point(x, y) {
    const { isPoint, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    const xb = new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.FromBase64Url(x));
    const yb = new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.FromBase64Url(y));
    const point = new Uint8Array((0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(new Uint8Array([
        0x04
    ]), xb, yb));
    if (isPoint(point)) {
        return pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1.');
    }
}
/**
 * Decompress x into x & y
 */ async function decompressK256Point(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    const uncompressed = isPointCompressed(point) ? pointCompress(point, false) : point;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.ToBase64Url(x),
        y: pvtsutils__WEBPACK_IMPORTED_MODULE_1__/* .Convert */ .ep.ToBase64Url(y)
    };
}
async function compressK256KeyRaw(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    if (isPointCompressed(point)) return point;
    return pointCompress(point, true);
}
async function decompressK256Raw(point) {
    const { isPoint, isPointCompressed, pointCompress } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1.');
    if (!isPointCompressed(point)) return point;
    return pointCompress(point, false);
}
async function compressK256Key(key) {
    const arr = await compressK256Point(key.x, key.y);
    return (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(arr);
}
async function decompressK256Key(compressedPublic) {
    const arr = (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(compressedPublic);
    const key = await decompressK256Point(new Uint8Array(arr));
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    return jwk;
}
async function isK256Point(x) {
    const { isPoint } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    return isPoint(x);
}
async function isK256PrivateKey(d) {
    const { isPrivate } = await __webpack_require__.e(/* import() */ 4280).then(__webpack_require__.bind(__webpack_require__, 24280));
    return isPrivate(d);
}


/***/ }),

/***/ 63966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EncryptError)
/* harmony export */ });
/* unused harmony export EncryptErrorReasons */
var /** Payload version to use. */ /** Current author who started the encryption. */ /** Public key of the current author. */ /** Network of the encryption */ /** The message to be encrypted. */ /** Encryption target. */ /**
     * This is only used in v38.
     *
     * Note: Due to historical reason (misconfiguration), some user may not have localKey.
     *
     * Throw in this case.
     */ /**
     * Derive a group of AES key by ECDH(selfPriv, targetPub).
     *
     * Host should derive a new AES-GCM key for each private key they have access to.
     *
     * If the provided key cannot derive AES with any key (e.g. The given key is ED25519 but there is only P-256 private keys)
     * please throw an error.
     *
     * Error from this function will become a fatal error.
     * This is only used in v38 or older
     *
     * @param publicKey The public key used in ECDH
     */ /**
     * Fill the arr with random values.
     * This should be only provided in the test environment to create a deterministic result.
     */ /**
     * Generate a new AES Key.
     * This should be only provided in the test environment to create a deterministic result.
     */ /**
     * Generate a pair of new EC key used for ECDH.
     * This should be only provided in the test environment to create a deterministic result.
     */ /** Additional information that need to be send to the internet in order to allow recipients to decrypt */ /** This is used in v38. */ /** This feature is supported since v37. */ EncryptErrorReasons;
(function(EncryptErrorReasons) {
    EncryptErrorReasons["ComplexTypedMessageNotSupportedInPayload38"] = '[@masknet/encryption] Complex TypedMessage is not supported in payload v38.';
    EncryptErrorReasons["PublicKeyNotFound"] = '[@masknet/encryption] Target public key not found.';
    EncryptErrorReasons["AESKeyUsageError"] = "[@masknet/encryption] AES key generated by IO doesn't have the correct usages or extractable property.";
})(EncryptErrorReasons || (EncryptErrorReasons = {}));
class EncryptError extends Error {
    message;
    static Reasons = EncryptErrorReasons;
    constructor(message, cause){
        super(message, {
            cause
        });
        this.message = message;
    }
}


/***/ }),

/***/ 51573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _flags_buildInfo_js__WEBPACK_IMPORTED_MODULE_2__.OB),
/* harmony export */   v: () => (/* binding */ Flags)
/* harmony export */ });
/* harmony import */ var _flags_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76102);
/* harmony import */ var _libs_RemoteFlags_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24935);
/* harmony import */ var _flags_buildInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15393);


const flags = new _libs_RemoteFlags_js__WEBPACK_IMPORTED_MODULE_0__/* .RemoteFlags */ .C('https://mask-flags.r2d2.to/', _flags_index_js__WEBPACK_IMPORTED_MODULE_1__/* .flags */ .i);
// fetch each time starts the app, updates will be enabled
flags.fetchAndActive();
const Flags = flags.accessor;



/***/ }),

/***/ 19993:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _masknet_flags_build_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15393);
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96643);


await Promise.allSettled([
    _telemetry_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    (0,_masknet_flags_build_info__WEBPACK_IMPORTED_MODULE_1__/* .setupBuildInfo */ .tH)()
]);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 23331:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10149);

// Run this file multiple times should be safe
 undefined;
// #region BigNumber to Number
Object.defineProperty(bignumber_js__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber */ .O.prototype, '__debug__amount__', {
    get () {
        return this.toNumber();
    },
    configurable: true
}) // #endregion
;


/***/ }),

/***/ 59637:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4643);

 undefined;
const { fetch: original_fetch } = globalThis;
function contentFetch(input, init) {
    const request = new Request(input, init);
    if (canAccessAsContent(request.url)) {
        if (navigator.userAgent.includes('Firefox') && browser.runtime.getManifest().manifest_version === 2 && typeof content === 'object') {
            return content.fetch(request, init);
        } else {
            return original_fetch(request, init);
        }
    }
    const signal = init?.signal;
    if (init) delete init.signal;
    return _services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.Helper.fetchGlobal(request, init).then((response)=>{
        signal?.throwIfAborted();
        return response;
    });
}
const extensionOrigin = (()=>{
    try {
        return new URL(browser.runtime.getURL('')).origin;
    } catch  {
        return null;
    }
})();
function fetchingTwitterResource(target) {
    return location.origin.endsWith('twitter.com') && (target.origin.endsWith('twitter.com') || target.origin.endsWith('twimg.com'));
}
function fetchingInsResource(target) {
    return location.origin.endsWith('instagram.com') && target.origin.match(/(fbcdn\.net|cdninstagram\.com)$/);
}
function canAccessAsContent(url) {
    const target = new URL(url, location.href);
    if (fetchingTwitterResource(target) || fetchingInsResource(target)) return true;
    // eg: https://maskbook-backup-server-staging.s3.ap-east-1.amazonaws.com/backups/xxx.zip
    // The content-length needs to be used in the client request in order to realize the progress of the download.
    if (target.origin.includes('maskbook-backup')) return true;
    if (isHostName(location, 'mirror.xyz') && isHostName(target, 'mirror-api.com')) return true;
    if (extensionOrigin === target.origin) return true;
    return target.origin === location.origin;
}
function isHostName(url, domain) {
    // either example.com or *.example.com
    return url.hostname === domain || url.hostname.endsWith('.' + domain);
}
globalThis.fetch = contentFetch;


/***/ }),

/***/ 96403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/shared/src/locales/languages.ts + 6 modules
var languages = __webpack_require__(3043);
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/instance.ts
var instance = __webpack_require__(50139);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"error_boundary_crash_title":"{{subject}} has an error","error_boundary_try_to_recover":"Try to recover","error_boundary_report_github":"Report on GitHub","error_boundary_report_email":"Report by Email"}');
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/ja-JP.json
const ja_JP_namespaceObject = {};
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/ko-KR.json
const ko_KR_namespaceObject = {};
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"error_boundary_crash_title":"crwdns14624:0{{subject}}crwdne14624:0","error_boundary_try_to_recover":"crwdns14626:0crwdne14626:0","error_boundary_report_github":"crwdns14628:0crwdne14628:0","error_boundary_report_email":"crwdns14630:0crwdne14630:0"}');
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/zh-CN.json
const zh_CN_namespaceObject = JSON.parse('{"error_boundary_crash_title":"{{subject}} 发生错误","error_boundary_try_to_recover":"尝试恢复","error_boundary_report_github":"在 GitHub 上报告","error_boundary_report_email":"通过电子邮件报告"}');
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/zh-TW.json
const zh_TW_namespaceObject = {};
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(59429);
;// CONCATENATED MODULE: ./packages/shared-base-ui/src/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages_languages = {
    en: en_US_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};

const addShareBaseI18N = (0,register_ns/* createI18NBundle */.C)('shareBase', languages_languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/en-US.json
const shared_ui_locales_en_US_namespaceObject = JSON.parse('{"promote":"🎭🎭🎭 Tired of plaintext? Try to send encrypted messages to your friends. Install Mask.io to send your first encrypted tweet.","promote_red_packet":"Hi friends, I just created {{token}} Lucky Drop. Download Mask.io to claim.","promote_file_service":"📃📃📃 Try to permanently use decentralized file storage on {{sns}}. Install Mask.io to upload and share first permanent decentralized file, powered by mainstream decentralized storage solutions.","promote_savings":"Hi friends, I just deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.","promote_withdraw":"Hi friends, I just withdrew my deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.","promote_collectible":"Display collectibles in variable NFT marketplaces, make an offer directly on social media. Install Mask.io to try to browse NFTs directly on {{sns}}.","promote_snapshot":"Want to actively participate in proposal vote and move projects forward? Install Mask.io to vote proposals directly on {{sns}}.","database_backup":"Backup Database","database_overwrite":"Overwrite Database with backup","database_clear":"Clear Database","debug_new_bug_issue":"New bug issue","debug_metadata_title":"Add new metadata or replace existing metadata","debug_metadata_put_metadata":"Put metadata","edit":"Edit","clear":"Clear","connect":"Connect","back":"Back","more":"More","remove":"Remove","to":"To","add":"Add","approve":"Approve","address":"Address","amount":"Amount","coming_soon":"Coming soon","max":"Max","data":"Data","redpacket_a_token":"a token","redpacket_an_nft":"an NFT","available_balance":"Available Balance","available_amount":"{{- amount}} available","failed_to_transfer_token":"Failed to transfer token: {{- message}}","failed_to_transfer_nft":"Network error or execute smart contract failed.","operation":"Operation","gas_limit":"Gas Limit","gas_price":"Gas Price","value":"value","balance":"Balance","gwei":"Gwei","redirect_to":"Redirect to","welcome_back":"Welcome Back","sign":"Sign","load_failed":"Load failed","web3_profile_card_name":"Web3 Profile Card","powered_by":"Powered by","powered_by_whom":"Powered by <span>{{whom}}</span>","reload":"Reload","rename":"Rename","contacts":"Contacts","currency":"Currency","load":"Load","load_all":"Load All","no_data":"No Data","tip":"Tip","tags":"Tags","price":"Price","floor_price":"Floor price","default":"Default","contract":"Contract","plugins":"Plugins","signing":"Signing ...","network":"Network","backup":"Backup","password":"Password","reenter":"Re-enter","copy":"Copy","or":"Or","send":"Send","transfer_to":"To","added_by_user":"Added by user","congratulations":"Congratulations","token_standard":"Token Standard","persona_required":"Persona required.","initializing":"Initializing...","redirect_alert":"If your browser does not redirect, please <terms>click here</terms>.","typed_message_text_alert":"Only TypedMessageText is supported currently.","badge_renderer_provided_by_plugin":"Provided by plugin","add_assets":"Add Assets","add_nft_contract_search_hint":"Search NFT collection name, symbol or contract address","applications":"Applications","application_settings":"APP Settings","connect_persona":"Connect Persona","not_current_account":"Not your current account.","request_to_switch_account":"Please switch to <bold>@{{- account}}</bold> to continue the account verification progress.","request_to_login":"Please sign up or login {{- siteName}} to connect Mask Network.","connected_already":"<bold>@{{- account}}</bold> connected already.","switch_for_more_connections":"Switch accounts and try more connections.","send_post_successfully":"Sent verification post successfully.<br/> <br/>You could check the verification result on Mask Pop-up after few minutes. If failed, try sending verification post again.","connect_successfully":"Connected successfully. <br/><br/>Trying exploring more features powered by Mask Network.","application_tooltip_hint_sns_persona_unmatched":"Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.","application_tooltip_hint_verify":"Please verify your social account","application_tooltip_hint_create_persona":"Please create your persona and use it","application_tooltip_hint_connect_persona":"Please connect your persona","application_tooltip_hint_connect_wallet":"Please connect your wallet","application_settings_tab_app_list":"APP list","application_settings_tab_plug_in_switch":"Plug-in switch","application_settings_tab_plug_app-list-listed":"Listed","application_settings_tab_plug_app-list-unlisted":"Unlisted","application_settings_tab_plug_app-listed-placeholder":"Click the application icon to hide in the APP list.","application_display_tab_plug_app-unlisted-placeholder":"Click the setting icon to list it on the App board.","application_settings_tab_plug_app-unlisted-placeholder":"Click the application icon to list it on the App board.","persona_load_failed":"Load failed","additional_post_box__encrypted_post_pre":"Decrypt this post with #mask_io! $t(promote) {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_sns_official_account":"$t(promote_red_packet) Follow @{{account}} for Web3 updates and insights. \\n\\n🧧🧧🧧 Try sending Lucky Drop to your friends with Mask.io. \\n\\n{{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"$t(promote_red_packet) \\n\\n🧧🧧🧧 Try sending Lucky Drop to your friends with Mask.io. \\n\\n{{encrypted}}","additional_post_box__encrypted_post_pre_file_service_sns_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"This image is encrypted with #mask_io. \\n{{random}}\\n\\nInstall Mask.io to send your first encrypted tweet.","auto_paste_failed_dialog_title":"Paste manually","auto_paste_failed_dialog_content":"Please copy the following text and image (if there is any) and publish it.","auto_paste_failed_dialog_image_caption":"Open in a new tab","auto_paste_failed_snackbar":"Do you need to paste encrypted content manually?","auto_paste_failed_snackbar_action":"Show me how","auto_paste_failed_snackbar_action_close":"Close","connect_your_wallet":"Connect your wallet","connected_wallet_settings":"Connected wallets settings","compose_encrypt_method_text":"Text","compose_encrypt_method_text_sub_title":"Use text encryption","compose_encrypt_method_image":"Image","compose_encrypt_method_image_sub_title":"Encrypt messages in images","compose_no_local_key":"No local key","compose_encrypt_visible_to_all":"All","compose_encrypt_visible_to_all_sub":"Everyone","compose_encrypt_visible_to_private":"Private","compose_encrypt_visible_to_private_sub":"Just Me","compose_shared_friends_one":"1 friend","compose_shared_friends_other":"{{count}} friends","compose_encrypt_visible_to_share":"Share with","compose_encrypt_visible_to_share_sub":"Just Selected Contacts","compose_encrypt_share_dialog_empty":"No Persona-based encryption friends locally, please try searching.","copy_success":"Copy wallet address successfully!","automation_request_click_post_button":"Please click the “Post” button to open the compose dialog.","ok":"OK","start":"Start","cancel":"Cancel","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","hash_tag":"#mask_io","comment_box__placeholder":"Add an encrypted comment…","confirm":"Confirm","copy_text":"Copy text","loading_failed":"Loading failed","try_again":"Try Again","copy_image":"Copy image","copy_success_of_wallet_addr":"Copy wallet address successfully!","copy_success_of_text":"Copy text successfully!","copy_success_of_image":"Copy image successfully!","copy_success_of_token_addr":"Copy token successfully!","connecting":"Connecting…","collectibles_name":"Collectibles","select_an_nft":"Select an NFT","create":"Create","copied":"Copied","daily":"Daily","dashboard_no_collectible_found":"No collectible found.","no_NFTs_found":"No NFTs found.","dashboard_collectible_menu_all":"All ({{count}})","days":"Every {{days}} days","decrypted_postbox_only_visible_to_yourself":"Only visible to yourself","decrypted_postbox_visible_to_all":"All Mask plug-in users","decrypted_postbox_decrypting":"Mask decrypting…","decrypted_postbox_decoding":"Mask decoding…","decrypted_postbox_decrypting_finding_person_key":"Mask is looking for the public key of the author…","decrypted_postbox_decrypting_finding_post_key":"Mask is getting the key to decrypt. If you see this for a long time, this post might not be shared to you.","decrypted_postbox_author_mismatch":"Originally posted by {{name}}","decrypted_postbox_title":"Decrypted by Mask Network","dismiss":"Dismiss","delete":"Delete","delete_wallet":"Delete Wallet","hide_token":"Hide Token","hide_token_hint":"You can add <strong>{{token}}</strong> back in the future by going to \\"Add Token\\" in the wallet panel.","done":"Done","download":"Download","failed":"Failed","buy_now":"Buy Now","no_enough_gas_fees":"No Enough Gas Fees","gas_fee":"Gas Fee","insufficient_funds_for_gas":"Insufficient funds for gas.","open":"Open","settings":"Settings","do_not_see_your_nft":"Don\'t see your NFT?","import_nft":"Import NFT","setup_guide_post_content":"Post content:","setup_guide_verify_tip":"We will need to verify your Twitter account and record it on the NextID. Please post it for validation.","setup_guide_login":"Please sign up or log in to connect Mask Network.","setup_guide_find_username_text":"Link your profile to your persona.","setup_guide_connect_auto":"Connect","setup_guide_connect_failed":"Re-Connect","setup_guide_verify":"Verify","setup_guide_verify_should_change_profile":"Inconsistent Account","setup_guide_verify_dismiss":"Don\'t show again.","setup_guide_verify_checking":"Checking","setup_guide_verify_post_not_found":"No verification post found","setup_guide_connected_title":"Verify Account","setup_guide_connected_description":"Account successfully connected to persona","setup_guide_verifying":"Verifying","setup_guide_verifying_failed":"Re-Verify","user_guide_tip_connected":"You have connected to this account successfully.","user_guide_tip_need_verify_on_next_id":"Mask Network requires you to post a verification tweet to access Next.ID-based products.","setup_guide_say_hello_content":"Hello Mask world. This is my first encrypted message. Install https://mask.io to send me encrypted post. ","setup_guide_say_hello_follow":"Follow {{account}} to explore Web3.","setup_guide_pin_tip":"Don\'t forget to pin Mask Network in your browser toolbar to access Web3 easily.","setup_guide_pin_tip_step_click_left":"Click on ","setup_guide_pin_tip_step_click_right":" at top right of your browser.","setup_guide_pin_tip_step_find_left":"Find Mask Network in the list of extensions and click the ","setup_guide_pin_tip_step_find_right":" button.","setup_guide_pin_tip_successfully":"Pinned successfully.","user_guide_tip_1":"Explore multi-chain dApps.","user_guide_tip_2":"Connect and switch between your wallets.","user_guide_tip_3":"Browse the Web3 footprints of your Twitter friends, enjoy the freedom of Web3.","user_guide_tip_4":"Click here to have a quick start.","plugin_avatar_setup_share_title":"NFT PFP","plugin_avatar_setup_pfp_share":"I just set my NFT PFP using Mask Extension for free! To browse other\'s unique NFT collections and Web3 activities on Twitter, download the most powerful tool mask.io.","plugin_avatar_setup_success":"Set NFT PFP successfully.","plugin_avatar_asset":"Cannot found asset.","plugin_avatar_web3_error":"Web3 error","plugin_avatar_chain_error":"Chain does not match.","plugin_avatar_input_token_address":"Input Contract Address","plugin_avatar_input_token_id":"Token ID","mask_network":"Mask Network","import":"Import","no_search_result":"No result","set_nft_profile_photo":"Set NFT Photo","use_nft":"Use NFT","loading":"Loading","unlock":"Unlock","persona":"Persona","wallet":"Wallet","dashboard":"Dashboard","welcome_to_mask":"Welcome to Mask Network","welcome_description_congrats":"Congrats, you are in Web3!","welcome_description_content":"Explore the hottest NFTs, DAOs, ","welcome_description_content_second":"crypto trends with Mask Network.","browser_action_enter_dashboard":"Enter Dashboard","pending":"Pending...","beta_sup":"<sup>(beta)<sup>","post_dialog__button":"Encrypt","post_dialog__placeholder":"Tell selective friends what\'s happening...","post_dialog__title":"Encrypted Post","post_dialog_visible_to":"Visible To","post_dialog_encryption_method":"Encryption Method","post_dialog_enable_paste_auto":"Enable auto paste","post_dialog_share_with_input_placeholder":"eg: Twitter accounts, Persona public keys, wallet addresses or ENS","post_modal_hint__button":"Compose encrypted post","hide":"Hide","reset":"Reset","editor":"Editor","retry":"Retry","go_wrong":"Something went wrong.","search_box_placeholder":"Type here to search","select_all":"Select All","nonce":"Nonce","none":"N/A","select_none":"Select None","all_friends":"All Friends","select_specific_friends_dialog__title":"Share with","select_friends_dialog_persona_connect_one":"The Persona is connected to account","select_friends_dialog_persona_connect_other":"The Persona is connected to accounts","service_decryption_failed":"Decryption failed.","service_username_invalid":"Invalid Username","speed_up":"Speed Up","save":"Save","skip":"Skip","next":"Next","try":"Try","share":"Share","share_to":"Share ","sharing":"Sharing","transfer":"Transfer","export":"Export","confirm_swap_risk":"Confirm swap risk","wallet_load_retry":"Failed to load {{symbol}}. Click to retry.","name":"Name","wallet_rename":"Rename Wallet","wallet_loading_nft_contract":"Loading NFT contract...","wallet_search_contract_no_result":"No results or contract address does not meet the query criteria.","wallet_search_no_result":"No results","wallet_confirm_with_password":"Confirm with password","wallet_airdrop_nft_unclaimed_title":"NFT Airdrop Unclaimed:","view_on_explorer":"View on Explorer","recent_transaction_pending":"Pending","recent_transaction_cancelled":"Cancelled","wallet_balance":"Balance","wallet_available_balance":"Available Balance","wallet_new":"New Wallet","wallet_status_button_change":"Change","wallet_status_button_change_to_evm":"Change to EVM wallet","wallet_status_button_copy_address":"Copy Address","wallets_transfer_contact_wallet_name_already_exist":"The wallet name already exists.","wallet_transfer_account":"Transfer Account","wallet_transfer_receiving_account":"Receiving Account","wallet_transfer_to_address":"To Address","wallet_transfer_send":"Send","wallet_transfer_placeholder":"Ens or Address(0x)","wallet_transfer_title":"Transfer","wallet_transfer_my_wallets_title":"My Wallets","wallet_transfer_my_contacts_title":"Contacts","wallets_transfer_warning_contract_address":"This address is a contract address.","wallets_transfer_error_address_absence":"Enter recipient address","wallets_transfer_error_address_scam":"This address may be a scam address.","wallets_transfer_error_invalid_address":"Incorrect wallet address.","wallets_transfer_error_invalid_domain":"This ENS does not exist or not be resolved.","wallet_transfer_error_no_ens_support":"Network does not support ENS.","wallet_transfer_error_amount_absence":"Enter an amount","wallet_transfer_error_address_absence":"Enter recipient address","wallet_transfer_error_same_address_with_current_account":"This receiving address is the same as the sending address. Please check again.","wallet_transfer_error_is_contract_address":"The receiving address is contract address. Please check again.","wallet_transfer_error_invalid_address":"Invalid recipient address","wallet_transfer_error_no_address_has_been_set_name":"The address of the receiver is invalid.","wallet_transfer_error_no_support_ens":"Network does not support ENS.","wallet_transfer_error_insufficient_balance":"Insufficient {{symbol}} balance","wallet_transfer_error_gas_price_absence":"Enter a gas price","wallet_transfer_error_gas_limit_absence":"Enter a gas limit","wallet_transfer_error_max_fee_absence":"Enter a max fee","wallet_transfer_error_max_priority_fee_absence":"Enter a max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee is too low for network conditions.","wallet_transfer_error_max_fee_too_high":"Max fee is higher than necessary","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee must be greater than 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max priority fee is too low for network conditions","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee is higher than necessary. You may pay more than needed.","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee cannot be lower than max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"Transfer between my accounts","weekly":"Weekly","relative_time_days_ago_one":"{{count}} day ago","relative_time_days_ago_other":"{{count}} days ago","relative_time_hours_ago_one":"{{count}} hour ago","relative_time_hours_ago_other":"{{count}} hours ago","relative_time_minutes_ago_one":"{{count}} minute ago","relative_time_minutes_ago_other":"{{count}} minutes ago","relative_time_months_ago_one":"{{count}} month ago","relative_time_months_ago_other":"{{count}} months ago","relative_time_seconds_ago_one":"{{count}} second ago","relative_time_seconds_ago_other":"{{count}} seconds ago","relative_time_years_ago_one":"{{count}} year ago","relative_time_years_ago_other":"{{count}} years ago","relative_time_days_other":"{{count}} days","relative_time_days_one":"{{count}} day","relative_time_hours_other":"{{count}} hours","relative_time_hours_one":"{{count}} hour","relative_time_minutes_other":"{{count}} minutes","relative_time_minutes_one":"{{count}} minute","relative_time_months_one":"{{count}} month","relative_time_months_other":"{{count}} months","relative_time_seconds_one":"{{count}} second","relative_time_seconds_other":"{{count}} seconds","relative_time_years_one":"{{count}} year","relative_time_years_other":"{{count}} years","plugin_wallet_snackbar_wait_for_confirming":"Confirm this transaction in your wallet","plugin_wallet_snackbar_hash":"Transaction Submitted","plugin_wallet_snackbar_confirmed":"Transaction Confirmed","plugin_wallet_snackbar_success":"Transaction Succeed","plugin_wallet_snackbar_failed":"Transaction Failed","plugin_wallet_snackbar_swap_successful":"Successfully swapped Token","plugin_wallet_snackbar_swap_token":"Swap Token","plugin_wallet_connect_to":"Connect to","plugin_wallet_connect_to_retry":"Try Again","plugin_wallet_connected_to":"Connected to","plugin_wallet_metamask_error_already_request":"You\'ve opened the popup, please confirm.","plugin_wallet_connect_tip":"Please make sure that your {{providerName}} wallet is provided by the official <providerLink>{{providerShortenLink}}</providerLink>.","plugin_wallet_disconnect":"Disconnect","plugin_wallet_dialog_title":"Wallet Account","plugin_wallet_select_a_nft_contract":"Select an NFT Contract","plugin_wallet_select_a_nft_owner":"Select an NFT Contract Owner","plugin_wallet_select_a_nft_operator":"Select an NFT Contract Operator","plugin_wallet_fail_to_load_nft_contract":"Click to retry","plugin_wallet_nft_approving_all":"Unlocking {{symbol}}...","plugin_wallet_approve_all_nft":"Unlock {{symbol}}","plugin_wallet_approve_all_nft_successfully":"Unlock {{symbol}} successfully","plugin_wallet_confirm_risk_warning":"Confirm Risk Warning","plugin_wallet_no_gas_fee":"No Gas Fee","plugin_wallet_update_gas_fee":"Updating Gas Fee…","plugin_wallet_connect_a_wallet":"Connect Wallet","plugin_wallet_invalid_network":"Invalid Network","plugin_wallet_select_a_wallet":"Select a Wallet","plugin_wallet_transaction":"Transaction","plugin_wallet_transaction_wait_for_confirmation":"Waiting for confirmation…","plugin_wallet_transaction_submitted":"Your transaction was submitted!","plugin_wallet_transaction_confirmed":"Your transaction was confirmed!","plugin_wallet_transaction_reverted":"Transaction was reverted!","plugin_wallet_transaction_rejected":"Transaction was rejected!","plugin_wallet_transaction_underpriced":"Transaction underpriced.","plugin_wallet_transaction_server_error":"Transaction was failed due to an internal JSON-RPC server error.","plugin_wallet_view_on_explorer":"View on Explorer","plugin_wallet_on_create":"Create Wallet","plugin_wallet_on_connect":"Connect Wallet","plugin_wallet_pending_transactions_one":"{{count}} Pending","plugin_wallet_pending_transactions_other":"{{count}} Pendings","plugin_wallet_import_wallet":"Import Wallet","plugin_wallet_token_unlock":"Exact Unlock","plugin_wallet_token_infinite_unlock":"Unlock {{symbol}}","plugin_wallet_token_exact_unlock_tips":"You must give the {{provider}} smart contract permission to use your part of {{symbol}}. ","plugin_wallet_token_infinite_unlock_tips":"You must give the {{provider}} smart contract permission to use your {{symbol}}. You only have to do this once per token.","plugin_wallet_connect_safari_metamask":"Connect to MetaMask","plugin_wallet_connect_safari_rainbow":"Connect to Rainbow","plugin_wallet_connect_safari_trust":"Connect to Trust","plugin_wallet_connect_safari_im_token":"Connect to imToken","plugin_wallet_on_connect_in_firefox":"Connect","plugin_wallet_return_mobile_wallet_options":"Return to Mobile Wallet Options","plugin_wallet_view_qr_code":"View QR Code","plugin_wallet_switch_network":"Switch to {{network}}","plugin_wallet_switch_network_under_going":"Switching to {{network}}","plugin_wallet_connect_tips":"You\'re connected to a WalletConnect wallet. Please switch network in that wallet, or switch to another wallet.","plugin_wallet_not_support_network":"This network is not supported yet.","plugin_wallet_connect_network":"Change to {{network}}","plugin_wallet_not_available_on":"Not available on {{network}} Network.","plugin_wallet_connect_wallet":"Connect Wallet","plugin_wallet_name_placeholder":"Enter 1-12 characters","plugin_wallet_cancel_sign":"Signature canceled.","plugin_web3_profile_recommend_feature_description":"Optimize your social profile by customizing the display of Web3 features.","plugin_nft_avatar_recommend_feature_description":"Set your NFT as profile picture with exclusive aura.","application_hint":"Socialize and show off your NFTs. People can bid, buy and view your valuable NFTs without leaving Twitter.","plugin_goPlusSecurity_description":"Provide you with fast, reliable and convenient security services.","plugin_red_packet_create":"Create your Lucky Drop.","plugin_red_packet_claimed":"Claimed","plugin_red_packet_claim":"Claim","plugin_red_packet_claim_title":"Claim Lucky Drop","plugin_red_packet_claim_notification":"Claim your Lucky Drop.","plugin_red_packet_claim_success":"Claim Lucky Drop with {{- tokenAmountDescription}} successfully.","plugin_red_packet_claim_success_without_detail":"Claim Lucky Drop successfully.","plugin_red_packet_claim_fail":"Failed to claim Lucky Drop.","plugin_red_packet_create_with_token":"Create your Lucky Drop.","plugin_red_packet_create_with_token_title":"Create Lucky Drop","plugin_red_packet_create_with_token_success":"Create Lucky drop with {{- tokenAmountDescription}} successfully.","plugin_red_packet_create_with_token_fail":"Failed to create Lucky Drop.","plugin_red_packet_refund_with_token":"Refund your expired Lucky Drop.","plugin_red_packet_refund_with_token_title":"Refund Lucky drop","plugin_red_packet_refund_with_token_success":"Refund Lucky Drop with {{- tokenAmountDescription}} successfully.","plugin_red_packet_refund_with_token_success_without_detail":"Refund Lucky Drop successfully.","plugin_red_packet_refund_with_token_fail":"Failed to refund Lucky Drop.","plugin_nft_red_packet_create_title":"Create NFT Lucky Drop","plugin_nft_red_packet_create":"Create your NFT Lucky Drop.","plugin_nft_red_packet_create_success":"Create {{symbol}} NFT Lucky Drop successfully.","plugin_nft_red_packet_create_success_without_detail":"Create NFT Lucky Drop successfully.","plugin_nft_red_packet_claim":"Claim your NFT Lucky Drop","plugin_nft_red_packet_claim_success":"Claim 1 {{symbol}} NFT Lucky Drop successfully.","plugin_nft_red_packet_claim_success_without_detail":"Claim 1 NFT Lucky Drop successfully.","plugin_nft_red_packet_claim_title":"Claim NFT Lucky Drop","plugin_red_packet_nft_account_name":"Wallet account","plugin_gitcoin_select_a_token":"Select a token","plugin_gitcoin_insufficient_balance":"Insufficient {{symbol}} balance","plugin_trader_fail_to_load":"Fail to load trending info from  ","plugin_trader_switch_provider":"Switch to {{provider}}","plugin_trader_swap_description":"Pop-up trading widget allows you to instantly view prices of the hottest Crypto/Stock and trade, also invest in the best performing managers.","plugin_trader_tutorial":"Tutorial","plugin_trader_what_is_lbp":"What\'s LBP?","plugin_trader_lbp_intro":"Solid blue line illustrates the historical price of {{symbol}} on the {{symbol}}\'s LBP. The price could continue to go down if no one buys. Please make your investment decision wisely.","plugin_trader_no_pools_found":"No pools found.","plugin_trader_safety_agree":"I understand","plugin_trader_view_on_etherscan":"View on Etherscan","plugin_trader_safety_alert_title":"Token Safety Alert","plugin_trader_safety_alert":"Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.","plugin_trader_total_supply":"Total Supply","plugin_trader_circulating_supply":"Circulating Supply","plugin_trader_accept":"Accept","plugin_trader_volume_24":"24 Hour Trading Vol","plugin_trader_market_cap":"Market Cap","plugin_trader_risk_warning_short":"Risk Warning","plugin_trader_risk_warning":"Confirm swap token contract risk","plugin_trader_make_risk_trade":"Swap Anyway","plugin_trader_dear_user":"Dear Users,","plugin_trader_user_warning":"Clicking the confirm button means that you agree to take the potential risks and proceed with the transaction.","plugin_trader_price_updated":"The price has expired.","plugin_trader_market_statistic":"Market Statistic","plugin_trader_floor_price":"Floor Price","plugin_trader_trending":"Trending","plugin_trader_highest_price":"Highest Price","plugin_trader_total_volume":"Total Volume","plugin_trader_one_day_average_price":"24H Average Price","plugin_trader_one_day_traded_volume":"24H Traded Volume","plugin_trader_one_day_sale":"24H sale","plugin_trader_marketplace":"Marketplace","plugin_trader_total_assets":"Items","plugin_trader_owners_count":"Owners","plugin_trader_sales":"Sales (24h)","plugin_trader_rank":"Rank #{{rank}}","plugin_trader_info":"Info","plugin_trader_website":"Website","plugin_trader_community":"Community","plugin_savings":"Savings","plugin_savings_asset":"Asset","plugin_savings_apr":"APR","plugin_savings_wallet":"Wallet","plugin_savings_operation":"Operation","plugin_savings_amount":"Amount","plugin_savings_deposit":"Deposit","plugin_savings_swap_token":"Swap {{token}}","plugin_savings_withdraw_token":"Withdraw {{token}}","plugin_savings_withdraw":"Withdraw","plugin_savings_process_deposit":"Processing Deposit","plugin_savings_process_withdraw":"Processing Withdrawal","plugin_savings_no_protocol":"No deposit protocols found.","plugin_trader_swap":"Swap","plugin_trader_wrap":"Wrap","plugin_trader_swap_from":"You sell","plugin_trader_swap_receive":"You buy","plugin_trader_unwrap":"Unwrap","plugin_trader_buy":"Buy","plugin_trader_no_data":"No Data","plugin_trader_tab_market":"General","plugin_trader_tab_price":"Price","plugin_trader_tab_exchange":"Exchange","plugin_trader_tab_activities":"Activities","plugin_trader_nft_items":"NFTs","plugin_trader_table_nft":"NFT","plugin_trader_table_method":"Method","plugin_trader_table_value":"Value","plugin_trader_table_from":"From","plugin_trader_table_to":"To","plugin_trader_table_time":"Time","plugin_trader_error_amount_absence":"Enter an amount","plugin_trader_error_insufficient_balance":"Insufficient {{symbol}} balance","plugin_trader_error_insufficient_lp":"Insufficient liquidity for this trade","plugin_trade_error_input_amount_less_minimum_amount":"Input amount is below the minimum amount","plugin_trader_slippage_tolerance":"Advanced Settings:","plugin_trader_gas_fee":"Gas fee","plugin_trader_unlock_symbol":"Unlock {{symbol}}","plugin_trader_unlock_tips":"You must give the {{provider}} Smart contracts permission to use your {{symbol}}.You only have to do this once per token.","plugin_trader_swap_amount_symbol":"Swap","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_slippage_tolerance":"Slippage tolerance","plugin_trader_confirm_tx_cost":"(${{usd}})","plugin_trader_confirm_minimum_received":"Minimum Received","plugin_trader_confirm_tips":"Setting the max price slippage too high may cause the minimum amount returned lower than the amount desired.","plugin_trader_price_impact_warning_tips":"Transaction with extremely low slippage tolerance might be reverted because of very small market movement.","plugin_trader_price_impact_too_high_tips":"High Price impact！More than {{impact}} drop！","plugin_trader_confirm_swap":"Confirm Swap","plugin_trader_update":"Update","plugin_trader_price_impact":"Price Impact","plugin_trader_price_image_value":"Price Impact (-{{percent}})","plugin_trader_slippage_warning":"You may receive 10% less with this level of slippage tolerance.","plugin_trader_confirm_price_impact":"Confirm Price Impact {{percent}}","plugin_trader_max_slippage":"Max Slippage","plugin_trader_gas_setting_instant":"Instant","plugin_trader_gas_setting_high":"High","plugin_trader_gas_setting_medium":"Medium","plugin_trader_gas_setting_standard":"Standard","plugin_trader_gas_setting_fast":"Fast","plugin_trader_gas_setting_custom":"Custom","plugin_trader_tx_cost_usd":"(${{usd}})","plugin_trader_tx_cost_usd_new":"({{usd}})","plugin_trader_tx_cost_very_small":"({{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"No enough liquidity","plugin_trader_no_trade":"Please select a trade","plugin_trader_swap_risk":"Swapping Risk","plugin_trader_gas":"Transaction cost","plugin_poll_display_name":"Plugin: Poll","plugin_poll_question_hint":"Ask a question…","plugin_poll_options_hint":"choice","plugin_poll_length":"Poll length","plugin_poll_length_days":"Days","plugin_poll_length_hours":"Hours","plugin_poll_length_minutes":"Minutes","plugin_poll_length_unknown":"Unknown","plugin_poll_create_new":"Create New","plugin_poll_select_existing":"Past","plugin_poll_send_poll":"Send Poll","plugin_poll_status_closed":"Closed","plugin_poll_status_voting":"Voting","plugin_poll_status_voted":"Voted.","plugin_poll_deadline":"{{time}} left until vote ends","plugin_collectibles_name":"Collectibles","plugin_collectibles_description":"Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.","plugin_infra_descriptor_nft_approve_title":"{{action}} NFT contract","plugin_infra_descriptor_nft_approve":"{{action}} {{symbol}} NFT contract.","plugin_infra_descriptor_nft_approve_success":"{{action}} {{symbol}} NFT contract successfully.","plugin_infra_descriptor_nft_revoke_success":"{{action}} {{symbol}} approval successfully.","plugin_infra_descriptor_nft_approve_fail":"Failed to {{action}} NFT contract.","plugin_infra_descriptor_nft_transfer_title":"Transfer NFT","plugin_infra_descriptor_nft_transfer_fail":"Failed to transfer NFT.","plugin_infra_descriptor_nft_transfer_success":"Transfer {{symbol}} NFT successfully.","plugin_infra_descriptor_nft_transfer":"Transfer {{symbol}} NFT.","plugin_infra_descriptor_token_revoke":"Revoke the approval for {{symbol}}.","plugin_infra_descriptor_token_transfer_title":"Transfer Token","plugin_infra_descriptor_token_transfer":"Send {{- tokenAmountDescription}}.","plugin_infra_descriptor_token_transfer_fail":"Failed to send token.","plugin_infra_descriptor_token_transfer_success":"Send {{- tokenAmountDescription}} successfully.","plugin_infra_descriptor_token_revoke_title":"Revoke Token","plugin_infra_descriptor_token_revoke_success":"Revoke the approval successfully.","plugin_infra_descriptor_token_revoke_fail":"Failed to revoke token contract.","plugin_infra_descriptor_token_approve_title":"Unlock Token","plugin_infra_descriptor_token_approve":"Unlock {{- tokenAmountDescription}}","plugin_infra_descriptor_token_approve_success":"Unlock {{- tokenAmountDescription}} successfully","plugin_infra_descriptor_token_revoke_but_set_positive_cap":"You\'ve approved {{- tokenAmountDescription}} for {{spender}}. If you want to revoke that token, please keep custom spending cap amount as 0 and try it again.","plugin_infra_descriptor_token_approve_but_set_zero_cap":"You didn\'t approve {{symbol}} successfully. Please do not set spending cap as 0 and try it again.","plugin_infra_descriptor_token_fail":"Failed to unlock token contract.","plugin_infra_descriptor_token_deposit_title":"Deposit token","plugin_infra_descriptor_token_deposit":"Deposit {{- tokenAmountDescription}} for savings.","plugin_infra_descriptor_token_deposit_success":"Deposit {{- tokenAmountDescription}} successfully.","plugin_infra_descriptor_token_deposit_fail":"Failed to deposit {{symbol}}.","plugin_infra_descriptor_token_withdraw_title":"Withdraw token","plugin_infra_descriptor_token_withdraw":"Withdraw {{- tokenAmountDescription}} for savings.","plugin_infra_descriptor_token_withdraw_success":"Withdraw {{- tokenAmountDescription}} successfully.","plugin_infra_descriptor_token_withdraw_fail":"Failed to withdraw {{symbol}}.","plugin_infra_descriptor_mask_box_purchase_title":"Purchase Maskbox NFT","plugin_infra_descriptor_mask_box_purchase_success":"Purchase Maskbox NFT with {{- tokenAmountDescription}} successfully.","plugin_infra_descriptor_mask_box_purchase":"Purchase Maskbox NFT.","plugin_infra_descriptor_mask_box_purchase_fail":"Failed to purchase Maskbox NFT.","plugin_infra_descriptor_gitcoin_donate_title":"Donate","plugin_infra_descriptor_gitcoin_donate":"You have donated {{- amount}} {{symbol}}","plugin_infra_descriptor_gitcoin_submitted":"Transaction submitted.","plugin_infra_descriptor_gitcoin_donate_success":"You have donated {{- amount}} {{symbol}}","plugin_infra_descriptor_gitcoin_donate_fail":"Transaction failed","plugin_snapshot_info_title":"Information","plugin_snapshot_info_strategy":"Strategie(s)","plugin_snapshot_info_author":"Author","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"Start date","plugin_snapshot_info_end":"End date","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_info_dao":"DAO","plugin_snapshot_description":"Display Snapshot proposals on the Twitter page of the respective project or protocol.","plugin_snapshot_result_title":"Results","plugin_snapshot_votes_title":"Votes","plugin_snapshot_votes_yourself":"You","plugin_snapshot_no_power":"No power","plugin_snapshot_vote_success":"Voted successfully.","plugin_snapshot_vote_failed":"Please try again if you failed to vote.","plugin_snapshot_vote":"Vote","plugin_snapshot_vote_choice":"Option(s)","plugin_snapshot_vote_power":"Your voting power","plugin_snapshot_vote_title":"Cast your vote","plugin_snapshot_my_vote":"My vote","plugin_snapshot_space_info_followers_count":"{{followersCount}} members","plugin_snapshot_proposal_not_start":"Starts in {{date}}","plugin_snapshot_proposal_started":"Ends in {{date}} ","plugin_snapshot_proposal_ended":"Ended {{date}}","plugin_snapshot_proposal_no_results":"Oops, we can\'t find any results.","plugin_snapshot_space":"Space","plugin_snapshot_space_join":"Join","plugin_snapshot_space_view":"View","plugin_snapshot_proposal":"Proposal","plugin_snapshot_progress":"Progress","plugin_snapshot_load_failed":"Loading fails due to Snapshot API service breakdown.","plugin_snapshot_vote_confirm_dialog_title":"Vote Overview","plugin_snapshot_vote_confirm_dialog_choice":"Are you sure you want to vote \\"{{- choiceText}}\\"?","plugin_snapshot_vote_confirm_dialog_warning":"This action cannot be undone.","plugin_snapshot_current_result_title":"Current results","plugin_snapshot_download_report":"Download report","plugin_pets_name":"Non-F Friends","plugin_pets_description":"Discover the infinite possibilities of #NFTs.","wallet_verify_persona_sign":"Persona Sign","wallet_verify_has_bound":"The wallet has already been bound to {{currentPersona}}. Please switch to another wallet.","wallet_verify_persona_name":"{{- personaName}} Sign","wallet_verify_empty_alert":"Please connect your wallet first.","wallet_verify_persona_sign_intro":"Sign seamlessly with your persona to ensure data validity.","waller_verify_wallet_sign_intro":"After two simple steps, you will own, view, and utilize your digital identities through the<br/>services of Next.ID. You can disconnect them easily at any time.","popups_welcome_to_mask_network":"Welcome to Mask Network","popups_persona_description":"Encrypt your social media posts & messages. Make selective friends to decrypt.","popups_add_wallet":"Add Wallet","popups_add_wallet_description":"Keep your transactions and assets safe with Mask Wallet.","popups_add_persona_description":"Use Persona to encrypt and decrypt social media posts & messages.","popups_create_a_new_wallet_title":"Create a New Wallet","popups_generate_a_new_wallet_address":"Generate a new wallet address","popups_generate_a_new_persona":"Generate a new persona","popups_import_wallet":"Import Wallet","popups_import_wallets":"Import Wallets","popups_import_wallets_description":"Support mnemonic phrase, private key or keystone file.","popups_import_persona_description":"Support Identity code, private key, local backups or cloud backups to access your personal data.","popups_lock_wallet":"Lock Wallet","popups_wallet_settings":"Wallet Settings","popups_verify_persona_sign_success":"Persona signed successfully","popups_verify_persona_sign_failed":"Persona signed failed","popups_verify_wallet_sign_success":"Wallet signed successfully","popups_verify_wallet_sign_failed":"Wallet signed failed","popups_profile_photo":"Profile Photo","popups_public_key":"Public Key","popups_create_persona":"Create Persona","popups_restore_and_login":"Restore or Login","popups_name":"Name","popups_connect_social_tips":"Connect your social platform accounts.","popups_save_successfully":"Save successfully","popups_save_failed":"Save failed","popups_display_web3_address_tips":"Display the following address on your Web3 profile page and use it to receive tips.","popups_verify_account_tips":"After connecting and verifying your persona, you can set up associated address for displaying your web3 footprints or receiving tips.","popups_other_social_accounts_tips":"Other social networking platforms, such as <strong>Instagram,</strong> <strong>Facebook,</strong> and <strong>Minds,</strong> do not have a verified relationship like Twitter\'s Next.ID verified connection. <br /> <br /> When connecting a persona with an account on these platforms, they only support sending encrypted posts.","popups_empty_wallet_proofs_tips":"No associated wallet. <strong>Add Wallet.</strong>","popups_social_account":"Social Account","popups_connected_wallets":"Connected Wallet","popups_change_owner":"Change Owner","popups_wallet_connected_status$connected":"Connected","popups_wallet_connected_status$unconnected":"Not Connected","popups_loading":"Loading","popups_connect_your_web2_social_accounts":"Connect your social media accounts","popups_connect_social_account":"Connect Social Account","popups_disconnect_success":" Disconnect successfully. ","popups_disconnect_failed":"Disconnect failed.","popups_new_disconnect_warning_alert":"Twitter account @<strong>{{account}}</strong> has not been verified by Next.ID. Please switch to @<strong>{{account}}</strong> to proceed on Twitter.","popups_disconnect_other_warning_alert":"Performing this action will have impact on sending encrypted messages by this Persona.","popups_verify_account":"Verify Account","popups_disconnect_wallet_tip":"Are you sure to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?","popups_add_and_verify_wallet":"Add and verify Wallet","popups_add_derive":"Add Derive","popups_rename":"Rename","popups_speed_up_transaction":"Speed up transaction","popups_cancel_transaction":"Cancel Transaction","popups_import_the_wallet":"Import the wallet","popups_delete_wallet":"Disconnect Wallet","popups_release_bind_wallet_title":"Disconnect Wallet?","popups_release_bind_wallet_tips":"Are you sure to disconnect {{personaName}} from wallet <strong>{{identity}}</strong>？","popups_create_wallet":"Create Wallet","popups_back_up_the_wallet":"Back up the wallet","popups_recovery_wallet":"Wallet Recovered","popups_wallet_setting":"Wallet Settings","popups_wallet_settings_change_network":"Change Network","popups_wallet_settings_auto_unlock_time":"Auto-lock Time","popups_wallet_settings_auto_unlock_time_mins":"{{time}} Mins","popups_wallet_settings_auto-unlock_time_hour_one":"{{count}} Hour","popups_wallet_settings_auto-unlock_time_hour_other":"{{count}} Hours","popups_wallet_settings_auto_unlock_time_title":"Auto-lock","popups_wallet_settings_change_payment_password":"Change Payment Password","popups_wallet_settings_show_private_key":"Show Private Key","popups_wallet_settings_backup_wallet":"Backup Wallet","popups_wallet_settings_enter_payment_password":"Enter Payment Password","popups_wallet_settings_export_private_key_title":"Click on the down-arrow icon to see the private key.","popups_wallet_settings_rename_tips":"Wallet name must between 3 to 18 characters.","popups_wallet_settings_name_exists":"The wallet name already exists.","popups_wallet_settings_remove_wallet":"Remove Wallet","remove_wallet_title":"Remove Wallet?","remove_wallet_message":"Current wallet (<bold>{{wallet}}</bold>) is the management account of SmartPay wallet (<bold>{{other_wallets}}</bold>).<br/>Deleting the current wallet will result in the deletion of the SmartPay wallet simultaneously.","popups_wallet_settings_are_you_sure_remove_wallet":"Are you sure to remove this wallet?","popups_wallet_settings_address_exists":"The wallet address already exists.","popups_wallet_settings_auto_lock_tips":"Please set up the amount of time before we automatically lock your wallet.","popups_wallet_settings_minutes":"Minutes","popups_wallet_settings_auto_lock_number_only":"This field is number required.","popups_wallet_settings_current_management_account":"Current Management Account","popups_wallet_settings_local_persona_or_wallet_only":"Local persona or wallet only","popups_wallet_connected_sites":"Connected sites","popups_wallet_connected_sites_description":"Wallet name is connected to these sites, they can view your account address.","popups_wallet_disconnect_confirm":"Are your sure you want to disconnect? You may lose site functionality.","popups_wallet_disconnect_all":"Disconnect all accounts","popups_wallet_disconnect_site_success":"Unconnected successfully.","popups_gas_fee_settings":"Gas fee settings","popups_assets":"Assets","popups_send":"Send","popups_set_the_payment_password":"Set the payment password","popups_set_the_payment_password_title":"Set Payment Password","popups_log_out":"Log out","popups_following_permissions":"The plugin ({{pluginName}}) (hosted on {{pluginURL}}) is going to request the following permissions:","popups_permissions":"Permissions","popups_sites":"Sites","popups_mask_requests_permission":"Mask needs the following permissions","popups_grant":"Grant","popups_no_wallets_found":"No Mask wallet found.","popups_no_persona_found":"No persona found","popups_permission_request":"Permission request","popups_permission_request_content":"To continue, Mask Network needs permission to access the following URL:","popups_permission_request_content2":"This gives Mask Network the necessary abilities to provide the requested function properly.","popups_welcome":"Welcome","popups_wallet_token":"Tokens","popups_wallet_collectible":"NFTs","popups_wallet_collectible_added_successfully":"Successfully added","popups_wallet_dialog_legacy_wallet_tip":"Detected legacy wallets, please click confirm to restore them all.","popups_wallet_set_payment_password":"Set the payment password","popups_wallet_create_payment_password":"Create Password","popups_wallet_payment_password":"Payment Password","popups_wallet_set_up_payment_password":"Set up payment password","popups_wallet_old_payment_password":"Old Payment Password","popups_wallet_new_payment_password":"New Payment Password","popups_wallet_confirm_password":"Confirm Password","popups_wallet_new_password_not_match":"The new passwords don\'t match","popups_wallet_create_payment_password_tip":"At least 6 characters","popups_wallet_set_payment_password_successfully":"Set payment password successfully.","popups_wallet_term_of_service_agree_part_1":"By proceeding you agree to the","popups_wallet_term_of_service_agree_part_2":"<agreement>Service Agreement</agreement> and <policy>Privacy Policy</policy>","popups_wallet_reset_tips":"Forgot payment password?","popups_wallet_payment_password_tip":"The Payment password must be a combination of 2 categories out of numbers, letters, and special characters with a length of 8-20 characters.","create_wallet_incorrect_payment_password":"Incorrect Payment Password.","popups_wallet_start_up_tip":"Connect to your wallet, create a new wallet or recover an existing wallet using a seed phrase.","popups_wallet_name_placeholder":"Enter 1-12 characters","popups_wallet_name_mnemonic":"Mnemonic","popups_wallet_name_json_file":"Json File","popups_wallet_name_private_key":"Private Key","popups_wallet_name_keystore":"Keystore","popups_wallet_name_mnemonic_placeholder":"Enter 12 or 24 mnemonic words.","popups_wallet_name_origin_password":"Original Password","popups_wallet_tab_assets":"Tokens","popups_wallet_tab_collectibles":"NFTs","popups_wallet_tab_activity":"Activities","popups_wallet_derivation_path":"Derivation path ({{- path }})","popups_wallet_transfer_to":"To","popups_wallet_next":"Next","popups_wallet_backup_wallet":"Back up the wallet","popups_wallet_backup_json_file":"JSON File","popups_wallet_backup_private_key":"Private Key","popups_wallet_reset_wallet":"Reset Wallet","popups_wallet_reset_wallet_description_1":"Payment password stored locally and you could try many times to unlock your wallet.","popups_wallet_reset_wallet_description_2":"If you forget payment password, you can enter \'RESET\' to reset your wallet. <strong>Remember, this action will erase all your previous wallets.</strong>","popups_wallet_reset_wallet_description_3":"Note: If you using the mnemonic phrase from your last import, you can recover the wallet derived from that mnemonic phrase.","popups_wallet_backup_json_file_confirm_password_tip":"This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.","popups_wallet_backup_private_key_tip":"Please don’t show anyone your private key. The private key can be used in any wallet that supports EVM-compatible chains without decryption.","popups_wallet_backup_input_password":"Please enter your backup password.","popups_wallet_logout_input_payment_password":"Please enter your payment password.","popups_wallet_backup_json_file_drag_tip":"Drag your file into here…","popups_wallet_backup_json_file_click_tip":"Click or drag your file here","popups_wallet_backup_mnemonic_title":"Write down mnemonic words","popups_wallet_backup_mnemonic_tips":"Please write down the following words in correct order. Keep it safe and do not share with anyone!","popups_wallet_backup_mnemonic_view_tips":"Tap to view the mnemonic words <br /> Make sure no one is looking at your screen","popups_wallet_backup_mnemonic_hidden":"hide Mnemonic words","popups_wallet_backup_private_key_view_tips":"Tap to view the private key <br /> Make sure no one is looking at your screen","popups_wallet_backup_copy_private_key":"Copy private key","popups_wallet_enter_your_wallet_name":"Enter your wallet name","popups_wallet_delete_tip":"Are you sure you want to delete this wallet? Your wallet cannot be recovered without seed phrase.","popups_smart_pay_delete_tip":"This wallet {{management}} is management account of SmartPay Wallet {{addresses}}. You cannot use SmartPay wallet to interact with blockchain after deleting it.","popups_smart_pay_delete_tip_confirm":"Are you sure you want to delete this wallet?","popups_wallet_confirm_payment_password":"Confirm with payment password","popups_wallet_token_buy":"Buy","popups_wallet_token_send":"Send","popups_wallet_token_swap":"Swap","popups_wallet_disconnect_failed":"Wallet disconnect failed","popups_wallet_view_on_explorer":"View on Explorer","popups_wallet_gas_fee_settings":"Gas fee settings","popups_wallet_gas_fee_settings_description":"Gas fees are the fees for paying ethereum miners. The miners prefer to pack transactions with higher gas fees. Transactions with low gas fees might fail, and the paid gas fees won’t be returned.","popups_wallet_gas_fee_settings_low":"Low","popups_wallet_gas_fee_settings_medium":"Medium","popups_wallet_gas_fee_settings_high":"High","popups_wallet_gas_fee_settings_instant":"Instant","popups_wallet_gas_fee_settings_custom":"Custom","popups_wallet_gas_fee":"Gas Fee","popups_wallet_gas_price_too_low":"Gas price is too low and will cause the transaction to fail","popups_wallet_invalid_gas_limit":"Gas limit must be > 21,000 and < 15M.","popups_wallet_priority_fee_is_zero":"Priority fee should be greater than 0. ","popups_wallet_priority_fee_is_too_high":"Max priority fee is too high for network conditions.","popups_wallet_priority_fee_is_too_low":"Max priority fee is too low for network conditions.","popups_wallet_max_fee_is_too_low":"Max fee should be greater than base fee of {{minimum}} Gwei. ","popups_wallet_gas_price_estimate_second":"Likely in < {{seconds}} seconds","popups_wallet_gas_price_current_base_fee":"Current base fee is {{baseFee}} Gwei","popups_wallet_gas_max_priority_fee_too_low":"Max priority fee is too low for network conditions.","popups_wallet_gas_fee_settings_usd":" ≈ <span>{{usd}}</span>","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"Max Priority Fee","popups_wallet_gas_fee_settings_max_fee":"Max Fee","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit must be at least {{limit}}","popups_wallet_multiple_requests":"Multiple transaction requests {{index}} / {{total}}","popups_wallet_reject_all_requests":"Reject {{total}} Transactions","popups_wallet_view_full_detail_transaction":"View full transaction details","popups_wallet_transaction_function_name":"Function: {{name}}","popups_wallet_speed_up_transaction_tips":"Spend more transaction fees to cancel the previous transaction.","popups_wallet_cancel_transaction_tips":"Spend more transaction fees to cancel the previous transaction.","popups_wallet_signature_request_title":"Signature Request","popups_wallet_signature_request":"Signature request","popups_wallet_signature_request_message":"Message","popups_wallet_contract_interaction":"Contract Interaction","popups_wallet_token_unlock_permission":"Token unlock permission","popups_wallet_token_infinite_unlock":"Infinite unlock","popups_wallet_contract_interaction_transfer":"Transfer","popups_wallet_contract_interaction_gas_fee":"Gas fee","popups_wallet_contract_interaction_edit":"Edit","popups_wallet_contract_interaction_total":"Total","popups_wallet_password_not_match":"The two entered passwords are inconsistent.","popups_wallet_password_length_error":"Payment password must be 6 to 20 characters in length.","popups_wallet_password_change_successful":"Change payment password successfully.","popups_wallet_unlock_wallet":"Unlock Wallet","popups_wallet_unlock_error_password":"Incorrect password","popups_wallet_persona_log_out_error_payment_password":"Incorrect payment password.","popups_wallet_activity_to_address":"To: {{address}}","popups_wallet_transfer_error_tip":"Network connection failure or contract error, send transaction failure.","popups_wallet_transactions_pending":"Pending...","popups_wallet_re_send":"Re-Send","popups_wallet_choose_token":"Choose Token","popups_wallet_gas_price":"Gas Price","popups_wallet_done":"Done","popups_wallet_recovered":"Wallet recovered","popups_wallet_no_transactions":"You have no transactions","popups_wallet_more_expand":"Show tokens with value less than $1","popups_wallet_more_collapse":"Hide tokens with value less than $1","popups_wallet_change_owner":"Change Owner","popups_wallet_current_managed_accounts":"Current Management Accounts","popups_wallet_set_a_new_manage_account":"Set a New Management Account","popups_wallet_wallets":"Wallets","popups_missing_parameter_caption":"Please close this page.","popups_persona_connect_to":"Connect to {{type}}","popups_persona_to_be_verified":"To be verified","popups_persona_disconnect":"Disconnect","popups_persona_disconnect_confirmation":"Disconnect confirmation","popups_new_persona_disconnect_confirmation":"Confirm disconnect?","popups_disconnect_persona":"Disconnect Social Account?","popups_new_persona_disconnect_confirmation_description":"This twitter verification relationship with Persona will not be recorded in Next.ID.<br /> <br/> Performing this action will impact these Persona-related features:<br /> <li>Send the encrypted message.</li> <li>‘Browser your Web3’ features.</li><br/>","popups_persona_disconnect_confirmation_description":"This persona verification record will no longer show up in your verification profile page. Your\\n Mask friends can no longer send encrypted message to you by this persona or check your Web3\\n products.","popups_persona_disconnect_tips":"Do you want to remove the verified association between the Twitter account @<strong>{{- identity}}</strong> and {{- personaName}}?","popups_wallet_disconnect_tips":"Are you sure to remove the connected wallet <strong>{{wallet}}</strong>?","popups_persona":"Persona","popups_twitter_id":"Twitter ID","popups_persona_logout":"Log out","popups_persona_disconnect_tip":"After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.","popups_persona_disconnect_manage_wallet_warning":"Please note: This Persona {{persona}} is the management account of SmartPay wallet <span>{{addresses}}</span>. You cannot use SmartPay wallet to interact with blockchain after logging out persona.","popups_persona_persona_name_exists":"The persona name already exists.","popups_persona_sign_request_title":"Signature request","popups_persona_sign_request_message":"message","popups_password_do_not_match":"Incorrect password","popups_backup_password":"Backup Password","popups_rename_error_tip":"Maximum length is {{length}} characters long.","popups_select_wallet_to_verify_tips":"Connect Mask Network Account using your wallet.","popups_wait_for_provider_connect_title":"Waiting for {{providerType}}","popups_wait_for_provider_connect_tips":"Connecting your {{providerType}} wallet","popups_wait_for_provider_connect_timeout":"Wallet request timed out","popups_cancel_connect_provider":"Connecting operation cancelled in third-party wallet.","popups_not_connected_third_party_wallet_title":"Not connected","popups_not_connected_third_party_wallet_tips":"Not found your {{providerType}} wallet","popups_not_connected_third_party_wallet_description":"Please install your metamask wallet and set up your first wallet.","popups_choose_another_wallet":"Choose another wallet","popups_verify_wallet_description":"Adding your wallets will allow you to own, view, and utilize your digital identities via Next.ID service. Note that you will be required to sign and authenticate the transaction to prove ownership of your wallet.","popups_verify_wallet_bounded_tips":"This wallet is connected to current persona {{persona}}.","popups_verify_wallet_sign_success_tips":"You have successfully signed with your wallet.","popups_verify_wallet_sign_fail_tips":"Sorry, signature failed! Please try signing again.","popups_verify_wallet_bind_fail_tips":"Failed to add the wallet, please try again.","popups_verify_wallet_congratulation_tips":"Connecting {{persona}} with {{wallet}} successfully.","popups_switch_Wallet":"Switch Wallet","popups_encrypted_friends":"Contacts","popups_encrypted_friends_search_placeholder":"Search Next.ID, Twitter, Lens, ENS or Address","popups_encrypted_friends_search_no_result":"No search results","popups_encrypted_friends_no_friends":"No encrypted contacts, you can try searching.","popups_encrypted_friends_add_friends":"Add","popups_encrypted_friends_no_associated_accounts":"No associated accounts","popups_encrypted_friends_deleted_successfully":"Deleted successfully","popups_encrypted_friends_added_successfully":"Added successfully","popups_select_wallet":"Select Wallet","popups_switch_persona":"Switch Persona","popups_recovery":"Recovery","popups_next_id":"Next.ID","popups_wallet_group_title":"Wallet Group #{{index}}","popups_wallet_imported_group_title":"Imported Wallets","popups_backup_persona":"Backup Persona","popups_persona_rename_tips":"Persona name must between 1 to 24 characters.","popups_backup_password_rules":"Password should contain uppercase and lowercase letters, special characters and numbers.","popups_backup_password_rules_tips":"Backup password must be 8-20 characters, including uppercase, lowercase, special characters and numbers.","popups_backup_password_tips":"Please set up backup password to export private key.","popups_backup_password_inconsistency":"The two entered passwords are inconsistent.","popups_backup_password_incorrect":"Incorrect backup password.","popups_backup_password_invalid":"Please enter backup password to export persona private key.","popups_backup_password_set_successfully":"Backup password set successfully","popups_export_private_key_tips":"This export is only for exporting private key. We do not export any other data. If you need more data, please go to Settings: <a> Global Backup </a>","popups_export_json_file_tips":"This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.","popups_export_keystore_tips":"This JSON file is encrypted with your current payment password. The same password is required for decryption when importing this wallet.","popups_log_out_tips":"After logging out, your associated social accounts will no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.","popups_log_out_with_smart_pay_tips_one":"Please note: This Persona {{persona}} is the management account of above listed SmartPay wallet. You cannot use SmartPay wallet to interact with blockchain after logging out persona.","popups_log_out_with_smart_pay_tips_other":"Please note: This Persona {{persona}} is the management account of above listed SmartPay wallets. You cannot use SmartPay wallet to interact with blockchain after logging out persona.","popups_log_out_successfully":"Logout successfully","popups_log_out_failed":"Logout failed","popups_profile_photo_image":"Image","popups_profile_photo_nfts":"NFTs","popups_profile_photo_drag_file":"Drag & Drop your file here","popups_profile_photo_size_limit":"Siez limit: 10 MB","popups_profile_photo_browser_file":"Browser File","popups_select_and_connect_wallet":"Select and Connect to your wallet","popups_set_avatar_successfully":"Avatar set successfully","popups_set_avatar_failed":"Failed to set Avatar.","popups_wallet_request_source":"Request Source","popups_wallet_sign_message":"Sign Messsage","popups_wallet_unlock_erc20_title":"Give permission to access <br /> your {{symbol}}?","popups_wallet_unlock_erc20_tips":"By granting permission, you are allowing the following <br /> contract to access your funds","popups_wallet_unlock_erc20_placeholder":"Enter Max spend limit","popups_wallet_unlock_erc20_requested_by":"Spend limit requested by","popups_wallet_unlock_erc20_balance_tips":"This allows the third party to spend {{amount}} {{symbol}} from your current balance.","popups_wallet_unlock_erc20_balance_too_high_tips":"This allows the third party to spend all your token balance until it reaches the cap or you revoke the spending cap. If this is not intended, consider setting a lower spending cap.","popups_wallet_unlock_erc20_revoke_tips":"The approval for this contract will be revoked in the event of using 0 as the default input.","popups_wallet_unlock_erc20_approve_amount":"Approve amount","popups_wallet_unlock_erc20_granted_to":"Granted to","popups_wallet_unlock_erc721_title":"Give permission to access <br /> your {{symbol}}?","popups_wallet_unlock_erc721_tips":"By granting permission, you are allowing the following <br /> contract to access your NFTs","popups_wallet_rpc_error":"There was a network or RPC provider error, please try again later!","popups_wallet_gas_price_should_greater_than_zero":"Gas price should be greater than 0","popups_settings_general":"General","popups_settings_basic_setting":"Basic setting","popups_settings_language":"Language","popups_settings_appearance":"Appearance","popups_settings_supported_sites":"Supported Sites","popups_settings_backup_and_recovery":"Backup & Recovery","popups_settings_data_correlation":"Data correlation","popups_settings_cloud_backup":"Cloud Backup","popups_settings_local_backup":"Local Backup","popups_settings_restore_database":"Restore Database","popups_settings_restore_database_description":"Restore from a previous database backup","popups_settings_backup_password":"Backup Password","popups_settings_support":"Support","popups_settings_feedback":"Feedback","popups_settings_faq":"FAQ&Tutorial","popups_settings_website":"Website","popups_settings_about":"About","popups_settings_version":"Version","popups_settings_service_agreement":"Service Agreement","popups_settings_primary_policy":"Privacy Policy","popups_settings_language_auto":"Follow System","popups_settings_appearance_default":"Follow System","popups_settings_appearance_light":"Light","popups_settings_appearance_dark":"Dark","popups_settings_select_language":"Select language","popups_settings_supported_sites_description":"Manage the permissions of the Mask Network plugin to inject into websites. Once turned off, the use of the plugin on this site will no longer be supported.","popups_settings_supported_website_one":"<strong>{{count}}<strong> Website","popups_settings_supported_website_other":"<strong>{{count}}<strong> Websites","popups_settings_change_backup_password":"Change Backup Password","popups_settings_new_backup_password":"New password","popups_settings_new_backup_password_error_tips":"New password cannot be the same as your current password.","popups_settings_backup_password_invalid":"Lack of number, letter or special character.","popups_settings_set_backup_password_tips":"Please set the backup password to back up","popups_settings_no_backup":"No back up","popups_settings_backup_on":"Backup on {{time}}","popups_settings_local_backup_exist":"You\'ve backedup.","popups_settings_cloud_backup_exist":"You\'ve backedup with email/phone number.","popups_settings_not_set":"Not set","nft_wallet_label":"Wallet","plugin_profile_no_wallets":"Connect your wallet here.<br/>This section will be shown to your encrypted friends.<br/>The display content includes digital art, donations, badges<br/>and other public information on chain.","nft_input_address_label":"Please input contract address","nft_input_tokenid_label":"Please input token ID","nft_owner_hint":"The contract address is incorrect or the collection does not belong to you","nft_add_dialog_title":"Add Collectible","nft_add_button_label":"Add","nft_add_button_label_checking":"Checking","nft_list_title":"NFT Avatar Setting","nft_wallet_change":"Change","nft_button_add_collectible":"Add Collectible","nft_avatar":"NFT PFP","web3_tab_hint":"No address found.","plugin_artblocks_not_active":"This project is no more active","plugin_artblocks_completed":"Completed","plugin_artblocks_paused":"Paused","plugin_artblocks_collection":"Collection","plugin_artblocks_details":"Details","plugin_artblocks_created_by":"Created by","plugin_artblocks_purchase":"Purchase","plugin_artblocks_purchasing":"Purchasing....","plugin_artblocks_legal_text":"By checking this box, I agree to ArtBlocks\'s <terms>Terms of Service</terms>.","plugin_artblocks_check_tos_document":"Please check ToS document","plugin_artblocks_price_per_mint":"Price per mint","plugin_artblocks_price_row":"Price:","plugin_artblocks_minted_row":"Minted:","plugin_artblocks_license_row":"License:","plugin_artblocks_library_row":"Library:","plugin_artblocks_website":"Website","plugin_artblocks_infos":"Infos","plugin_artblocks_chain":"Chain","plugin_artblocks_blockchain_row":"Blockchain:","plugin_artblocks_contract_row":"Contract:","plugin_artblocks_smt_wrong":"Something went wrong!","popups_wallet_disconnect_success":"Wallet disconnect successfully","plugin_artblocks_share":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{- price}} {{symbol}}. Install @realMaskNetwork to get yours.","plugin_artblocks_share_no_official_account":"I just purchased a beautiful piece of art from \'{{name}}\' collection for {{- price}} {{symbol}}. Welcome to join.","plugin_tips_disconnect_introduction":"Are you going to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?","plugin_tips_not_evm_alert":"The tips feature currently supports only EVM chains. Support for other chains will be added in the future.","plugin_artblocks_description":"Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.","plugin_artblocks_name":"Artblocks","plugin_ens_description":"Optimize the display of search results about ENS in social media.","plugin_ens_name":"ENS","nft_button_set_avatar":"Set NFT Avatar","plugin_mask_box_name":"MaskBox","plugin_mask_box_description":"Professional multi-chain decentralized platform for launching NFT mystery boxes.","plugin_transak_name":"Fiat On-Ramp","plugin_transak_description":"Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.","popups_wallet_unsupported_network":"Unsupported network type","plugin_default_title":"Default","plugin_provider_by":"Provided by","plugin_enable":"Enable plugin","show_wallet_setting_button":"Go to Settings","web3_profile_no_social_address_list":"Can’t find a valid user address data source.","plugin_avatar_feature_general_user_name":"General user","plugin_avatar_feature_general_user_description":"View user’s Web3 footprints, including NFTs, social media posts and other transaction activities based on public data source.","plugin_avatar_feature_token_name":"Token","plugin_avatar_feature_token_description":"View real-time crypto prices, market cap, trading volume, etc.","plugin_avatar_feature_nft_name":"NFT collection ","plugin_avatar_feature_nft_description":"Stay on top of NFT trending information, hot projects, notable transactions, etc.","plugin_web3_profile_feature_general_user_name":"General user","plugin_web3_profile_feature_general_user_description":"View user’s Web3 footprints, including NFTs, social media posts and other transaction activities based on public data source.","plugin_web3_profile_feature_nft_name":"NFT collection ","plugin_web3_profile_feature_nft_description":"Stay on top of NFT trending information, hot projects, notable transactions, etc.","decentralized_search_name":"DSearch","decentralized_search_description":"Optimize search results with token names, NFT collections, ENS domains or wallet addresses.","decentralized_search_feature_token_name":"Token","decentralized_search_feature_token_description":"Get optimized search results when you look for a token.","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"Search with the name of an NFT collection or its symbol to get optimized results.","decentralized_search_feature_wallet_name":"ENS or Wallet Address","decentralized_search_feature_wallet_description":"Search with an ENS domain or wallet address to get optimized results.","applications_create_persona_hint":"Please create a Persona and verify your account to use this function.","applications_create_persona_title":"Persona","applications_create_persona_action":"Create persona","plugin_collectible_insufficient_balance":"Insufficient balance","persona_boundary_create_persona":"Create Persona","persona_boundary_connect_persona":"Connect Persona","persona_boundary_verify_persona":"Verify your Twitter ID","plugin_wallet_qr_code_with_wallet_connect":"Scan QR code with a WalletConnect-compatible wallet","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_select_provider_dialog_title":"Connect Wallet","recent_transaction_success":"Success","recent_transaction_failed":"Failed","wallet_status_pending_clear":"Clear","wallet_status_pending_one":"{{count}} Pending","wallet_status_pending_other":"{{count}} Pendings","wallet_status_pending_clear_all":"Clear All","wallet_risk_warning_no_select_wallet":"Not select wallet yet.","wallet_risk_warning_dialog_title":"Risk Warning","wallet_risk_warning_content":"Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.","wallet_risk_warning_confirm_tips":"Clicking the confirm button means that you agree to bear the above possible risks.","wallet_risk_confirm_confirming":"Confirming","wallet_risk_confirm_failed":"Confirm Failed","wallet_name_length_error":"String must contain at least 1 character(s)","add_collectibles_token_id_placeholder":"Token ID separated by comma, e.g. 1223,1224,","plugin_wallet_solana_tips":"Phantom only supports the Solana chain.","plugin_wallet_blocto_tips":"Blocto only supports the Flow chain.","plugin_wallet_fortmatic_tips":"Fortmatic only supports the ETH and BNB chain.","plugin_wallet_support_chains_tips":"Only supports EVM chains, ETH, BNB chain, Polygon, Arb, Op, etc.","plugin_wallet_connect_fortmatic":"Connect Fortmatic","plugin_wallet_choose_network":"Choose Network","plugin_disabled_tip":"You need to open the DAPP to view the specific content.","manage_network":"Manage Network","network_management_add_network":"Add Network","network_name":"Network Name","rpc_url":"RPC URL","chain_id":"Chain ID","optional_currency_symbol":"Currency Symbol (Optional)","optional_block_explorer_url":"Block Explorer URL","account_already_exists":"This wallet name already exists.","network_already_exists":"This network name already exists","incorrect_rpc_url":"Invalid RPC URL.","incorrect_explorer_url":"Invalid Block Explorer URL.","rpc_url_is_used_by":"This RPC URL is currently used by the {{- name}} network","chain_id_is_used_by":"This Chain ID is currently used by the {{- name}} network. ","failed_to_fetch_chain_id":"Could not fetch chain ID. Is your RPC URL correct?","rpc_return_different_chain_id":"The RPC URL you have entered returned a different chain ID ({{chain_id}}). Please update the Chain ID to match the RPC URL of the network you are trying to add.","rpc_return_different_symbol":"The network with chain ID {{chain_id}} may use a different currency symbol ({{symbol}}) than the one you have entered. Please check.","rpc_requires_https":"URLs require the appropriate HTTPS prefix.","failed_to_save_network":"Failed to save network","incorrect_chain_id":"Incorrect Chain Id","invalid_number":"Invalid number","saved_network_successfully":"Saved network successfully","adding_network_successfully":"Adding network successfully","deleted_network_successfully":"Network successfully deleted.","hided_token_successfully":"Successfully hidden.","not_enough_data_to_present":"Not enough data to present.","wallet_send":"Send","wallet_receive":"Receive","wallet_swap":"Swap","wallet_add_contact":"Add Contact","wallet_add_contact_successfully":"Add contact successfully.","wallet_edit_contact":"Edit Contact","wallet_edit_contact_successfully":"Edit contact successfully.","wallet_delete_contact":"Delete Contact","wallet_delete_contact_successfully":"Delete contact successfully.","wallet_name":"Name your wallet","wallet_account":"Wallet Account","wallet_imported":"Imported","scan_address_to_payment":"Scan QR code to receive payment","wallet_connect":"WalletConnect","wallet_connect_tips":"Scan QR code with WalleConnecnt-compatible wallet","empty":"Empty","hide_token_symbol":"Hide {{- symbol}}","hide_token_description":"Confirm to hide {{- symbol}}?  You can redisplay it by re-adding this token at any time.","scam_tx":"Scam tx","to_address":"to {{address}}","other_address":"from <addr>{{address}}</addr>","other_address$from":"from <addr>{{address}}</addr>","other_address$to":"to <addr>{{address}}</addr>","transaction_status":"status","transaction_failed":"Failed","transaction_success":"Success","transaction_pending":"Pending","transaction_base":"Base","transaction_from":"From","transaction_to":"To","transaction_link":"Link","transaction_hash":"Transaction Hash","transaction_gas_limit":"Gas Limit (Units)","transaction_gas_used":"Gas Used (Units)","transaction_gas_price":"Gas Price (GWEI)","transaction_priority_fee":"Priority Fee (GWEI)","transaction_max_fee":"Max Fee (GWEI)","transaction_fee":"Transaction Fee","activity_log":"Activity Log","transaction_confirmed_at":"The transaction was confirmed at {{- datetime}}","transaction_completed_at":"The transaction was complete and has been recorded on blockchain at {{- datetime}}","collectible_title":"Collectible","collectible_description":"Description","collectible_properties":"Properties","collectible_last_sale_price":"Properties","about_collection":"Abount {{- name}}","hide_collectible":"Hide {{-name}}","hide_collectible_description":"Confirm to hide {{- name}}? You can redisplay it by re-adding this NFT at any time.","add_new_address_to_an_existing_group":"Add new address to an existing group","or_create_a_new_wallet_group":"Or create a new wallet group"}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/ja-JP.json
const shared_ui_locales_ja_JP_namespaceObject = JSON.parse('{"promote":"🎭🎭🎭 平文に飽きた？暗号化されたメッセージを友達に送ってみよう。Mask.ioをインストールして、最初の暗号化されたツイートを送信してみましょう。","promote_red_packet":"🧧:🧧:🧧 トークンやNFTを使って友達にLucky Dropを送り、今すぐ喜びを分かち合ってみてください。Mask.ioをインストールして、最初のLucky Dropを送信してみましょう。","promote_file_service":"📃📃📃 {{sns}}の分散ファイルストレージを永久に使用してみてください。Mask をインストールして、 主流の分散型ストレージソリューションを搭載した、最初の永久的な分散型ファイルをアップロードして共有しましょう。","promote_savings":"こんにちは、 {{- amount}} {{symbol}} を {{chain}}に入金しました。@{{account}} をフォローしてより多くのステーキングプロジェクトを見つけてください。","promote_withdraw":"こんにちは、 {{- amount}} {{symbol}} の預金を {{chain}} に引き出しました。@{{account}} をフォローしてより多くのステーキングプロジェクトを見つけてください。","promote_collectible":"変額NFTマーケットプレイスで収集品を表示し、ソーシャルメディア上で直接オファーを作成します。 Mask.ioをインストールして、{{sns}}上で直接NFTを閲覧してみましょう。","promote_snapshot":"提案票に積極的に参加し、プロジェクトを前進させたいですか？ {{sns}}に直接投票するには、Mask.ioをインストールしてください。","database_backup":"データベースのバックアップ","database_overwrite":"データベースをバックアップで上書きする","database_clear":"データベースを消去","debug_new_bug_issue":"新たなバグ問題","debug_metadata_title":"新しいメタデータを追加または既存のメタデータを置き換え","debug_metadata_put_metadata":"メタデータを追加","edit":"編集","clear":"消去","connect":"接続","back":"戻る","more":"その他","remove":"削除","to":"宛先：","add":"追加","approve":"承認","address":"アドレス","amount":"金額","coming_soon":"近日公開","max":"最大","data":"データ","redpacket_a_token":"トークン","redpacket_an_nft":"NFT","available_balance":"利用可能な残高","available_amount":"{{- amount}} 利用可能です","failed_to_transfer_token":"トークンを転送できませんでした: {{- message}}","failed_to_transfer_nft":"ネットワークエラーまたはスマートコントラクトを実行できませんでした。","operation":"操作","gas_limit":"ガス制限","gas_price":"ガス価格","value":"価値","balance":"残高","gwei":"Gwei（グワイ）","redirect_to":"リダイレクト先","welcome_back":"おかえりなさい","sign":"サイン","load_failed":"読み込み失敗","web3_profile_card_name":"Web3 プロフィールカード","powered_by":"以下により提供されています","powered_by_whom":"<span>{{whom}}</span>による提供","reload":"再度読み込み","rename":"名前変更","contacts":"連絡先","currency":"通貨","load":"読み込み","load_all":"すべて読み込む","no_data":"データなし","tip":"チップ","tags":"タグ","price":"価格","floor_price":"フロア価格","default":"デフォルト","contract":"コントラクト","plugins":"プラグイン","signing":"署名中...","network":"ネットワーク","backup":"バックアップ","password":"パスワード","reenter":"再入力","copy":"コピー","or":"または","send":"送信","transfer_to":"宛先：","added_by_user":"ユーザーが追加しました","congratulations":"おめでとうございます！","token_standard":"トークンスタンダード","persona_required":"ペルソナが必要","initializing":"初期化中...","redirect_alert":"ブラウザがリダイレクトされない場合は、 <terms>こちら</terms>をクリックしてください。","typed_message_text_alert":"現在、TypedMessageTextのみ対応しています。","badge_renderer_provided_by_plugin":"プラグインにより提供","add_assets":"資産を追加","add_nft_contract_search_hint":"NFT コレクション名、シンボルまたはコントラクトのアドレスを検索","applications":"アプリケーション","application_settings":"アプリ設定","application_tooltip_hint_sns_persona_unmatched":"Twitter ID 認証済みのペルソナ({{currentSNSConnectedPersonaPublicKey}}) は、現在のペルソナ({{currentPersonaPublicKey}})と一致しません。ペルソナ({{currentSNSConnectedPersonaPublicKey}})に切り替えて、再度お試し下さい。","application_tooltip_hint_verify":"ソーシャルアカウントを確認してください","application_tooltip_hint_create_persona":"ペルソナを作成し、使用してください","application_tooltip_hint_connect_persona":"あなたのペルソナに接続してください","application_tooltip_hint_connect_wallet":"ウォレットを接続してください","application_settings_tab_app_list":"アプリ一覧","application_settings_tab_plug_in_switch":"プラグイン・スイッチ","application_settings_tab_plug_app-list-listed":"リストされました","application_settings_tab_plug_app-list-unlisted":"未掲載","application_settings_tab_plug_app-listed-placeholder":"アプリアイコンをクリックして、アプリ一覧で非表示にします。","application_display_tab_plug_app-unlisted-placeholder":"設定のアイコンをクリックして、アプリボードに表示します。","application_settings_tab_plug_app-unlisted-placeholder":"アプリのアイコンをクリックして、アプリボードに表示します。","persona_load_failed":"読み込み失敗","additional_post_box__encrypted_post_pre":"#mask_io で復号しましょう！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_sns_official_account":"こんにちは、#mask_io @{{account}} でラッキードロップを獲得しましょう。 \\n\\n$t(promote_red_packet)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"こんにちは、#mask_io @{{account}} でラッキードロップを獲得しましょう。 \\n\\n$t(promote_red_packet)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service_sns_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"この投稿は #mask_io によって暗号化されています。 📪🔑 mask.io をインストールして復号しましょう！ ([I:b]) {{random}}","auto_paste_failed_dialog_title":"手動でペーストする","auto_paste_failed_dialog_content":"以下の文字列と画像（存在すれば）をコピーし、公開しましょう。","auto_paste_failed_dialog_image_caption":"新しいタブで開く","auto_paste_failed_snackbar":"Mask が自動で投稿を作成できませんでした。手動でペーストしてください。","auto_paste_failed_snackbar_action":"方法を確認","auto_paste_failed_snackbar_action_close":"閉じる","connect_your_wallet":"ウォレットを接続します","connected_wallet_settings":"接続済みウォレットの設定","compose_encrypt_method_text":"テキスト","compose_encrypt_method_text_sub_title":"テキスト暗号化を使用する","compose_encrypt_method_image":"画像","compose_encrypt_method_image_sub_title":"画像内のメッセージを暗号化","compose_no_local_key":"ローカル・キーはありません","compose_encrypt_visible_to_all":"全て","compose_encrypt_visible_to_all_sub":"全員","compose_encrypt_visible_to_private":"プライベート","compose_encrypt_visible_to_private_sub":"自分のみ","compose_shared_friends_one":"1人の友人","compose_shared_friends_other":"{{count}} 人の友達","compose_encrypt_visible_to_share":"と共有","compose_encrypt_visible_to_share_sub":"選択された連絡先のみ","compose_encrypt_share_dialog_empty":"暗号化された友達がいないので、検索してみてください。","copy_success":"ウォレットアドレスをコピーしました！","automation_request_click_post_button":"[公開] ボタンをクリックして編集ダイアログを開きます。","ok":"OK","start":"スタート","cancel":"取り消す","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","hash_tag":"#mask_io","comment_box__placeholder":"コメントを暗号化するには…","confirm":"確認する","copy_text":"テキストをコピー","loading_failed":"読み込みに失敗しました","try_again":"再試行","copy_image":"画像をコピー","copy_success_of_wallet_addr":"ウォレットのコピーに成功しました","copy_success_of_text":"テキストのコピーに成功しました","copy_success_of_image":"画像のコピーに成功しました","copy_success_of_token_addr":"トークンをコピーしました！","connecting":"接続中…","collectibles_name":"コレクション","select_an_nft":"一つのNFT を選択します","create":"作成","copied":"コピーしました","daily":"日次","dashboard_no_collectible_found":"コレクションが見つかりません","no_NFTs_found":"NFTが見つかりません。","dashboard_collectible_menu_all":"すべて ({{count}})","days":"{{days}} 日ごと","decrypted_postbox_only_visible_to_yourself":"自分にのみ表示されます","decrypted_postbox_visible_to_all":"すべてのマスクプラグインユーザー","decrypted_postbox_decrypting":"Mask が復号しています。","decrypted_postbox_decoding":"Mask が解読しています。","decrypted_postbox_decrypting_finding_person_key":"Mask は公開鍵を探しています…","decrypted_postbox_decrypting_finding_post_key":"Mask はこの投稿を復号するために ポストキーを取得しています…","decrypted_postbox_author_mismatch":"最初の作者は {{name}}","decrypted_postbox_title":"Mask で暗号化されています:","dismiss":"戻る","delete":"削除","delete_wallet":"ウォレットを削除する","hide_token":"トークンを隠す","hide_token_hint":"将来的には、ウォレットパネルで「トークンを追加」を選択することで、再び <strong>{{token}}</strong> を追加することができます。","done":"完了です！","download":"ダウンロード","failed":"失敗しました","buy_now":"今すぐ購入","no_enough_gas_fees":"ガス料金が足りません","gas_fee":"ガス料金","insufficient_funds_for_gas":"手数料付けるには残高が足りません","open":"オープン","settings":"設定","do_not_see_your_nft":"NFTが見つかりませんか？","import_nft":"NFT をインポート","setup_guide_login":"マスクネットワークに接続するには、サインアップまたはログインしてください。","setup_guide_find_username_text":"Mask のペルソナと接続するためにユーザー名が必要です。<br /> 正しいものを入力してください。","setup_guide_connect_auto":"接続する","setup_guide_connect_failed":"失敗しました… もう一度お試しください。","setup_guide_verify":"認証する","setup_guide_verify_should_change_profile":"不整合なアカウント","setup_guide_verify_dismiss":"次回から表示しない。","setup_guide_verify_checking":"確認中","setup_guide_verify_post_not_found":"認証の投稿が見つかりません","setup_guide_connected_title":"接続と検証が完了しました。","setup_guide_connected_description":"ソーシャルメディアで Web3 dApps の機能を探索してみてください。","setup_guide_verifying":"認証中","setup_guide_verifying_failed":"再認証","user_guide_tip_connected":"このアカウントに接続しました。","user_guide_tip_need_verify_on_next_id":"Mask Networkでは、Next.IDベースの製品にアクセスするために確認ツイートを投稿する必要があります。","setup_guide_say_hello_content":"Mask world、こんにちは。これは私の初の暗号化されたメッセージです。\\nhttps://mask.io をインストールし、暗号化された投稿を送ってくれます。","setup_guide_say_hello_follow":"{{account}} をフォローしてWeb3を探索しましょう。","setup_guide_pin_tip":"Web3に簡単にアクセスするには、ブラウザのツールバーにMask Networkを固定することを忘れないでください.","setup_guide_pin_tip_step_click_left":"クリック ","setup_guide_pin_tip_step_click_right":" ブラウザの右上にあります。","setup_guide_pin_tip_step_find_left":"拡張機能の一覧からMask Networkを検索し、 ","setup_guide_pin_tip_step_find_right":"ボタン","setup_guide_pin_tip_successfully":"ピン留めが完了しました","user_guide_tip_1":"複数チェーンのdAppを探索します。","user_guide_tip_2":"ウォレットを接続して切り替えます。","user_guide_tip_3":"あなたのTwitterの友人のWeb3の足跡を閲覧し、Web3の自由を楽しみましょう。","user_guide_tip_4":"ここをクリックしてクイックスタートを切りましょう。","plugin_avatar_setup_share_title":"NFT PFP","plugin_avatar_setup_pfp_share":"Mask Extensionを無料で使用して、NFT PFPを設定しました！ Twitterで他のユニークなNFTコレクションやWeb3アクティビティを閲覧するには、最も強力なツールmask.ioをダウンロードしてください。","plugin_avatar_setup_success":"NFT PFPを正常に設定しました。","plugin_avatar_asset":"資産が見つかりません。","plugin_avatar_web3_error":"Web3 エラー","plugin_avatar_chain_error":"チェーンが一致しません。","plugin_avatar_input_token_address":"コントラクトアドレスを入力","plugin_avatar_input_token_id":"トークンID","mask_network":"Mask Network","import":"インポート","no_search_result":"該当なし","set_nft_profile_photo":"NFT 写真を設定","use_nft":"NFT を使用する","loading":"読み込み中...","unlock":"ロック解除","persona":"ペルソナ","wallet":"ウォレット","dashboard":"ダッシュボード","welcome_to_mask":"Mask Networkへようこそ","welcome_description_congrats":"おめでとうございます、あなたはWeb3にいます！","welcome_description_content":"最もホットなNFT、DAOを探索します","welcome_description_content_second":"Mask Networkによる暗号トレンド。","browser_action_enter_dashboard":"ダッシュボードに入る","pending":"保留中...","beta_sup":"<sup>(ベータ版)<sup>","post_dialog__button":"完了","post_dialog__placeholder":"ここにテキストを持ってきます","post_dialog__title":"Mask: 作成","post_dialog_visible_to":"表示対象:","post_dialog_encryption_method":"暗号化方法","post_dialog_enable_paste_auto":"自動ペーストを有効にする","post_dialog_share_with_input_placeholder":"例：Twitterアカウント、ペルソナ公開鍵、ウォレットアドレス","post_modal_hint__button":"投稿を暗号化","hide":"隠す","reset":"リセットする","editor":"編集者","retry":"再試行","go_wrong":"問題が発生しました","search_box_placeholder":"ここに打って検索","select_all":"全て選ぶ","nonce":"ノンス","none":"なし","select_none":"何も選んでいません。","all_friends":"すべての友達","select_specific_friends_dialog__title":"特定の連絡先を選ぶ","select_friends_dialog_persona_connect_one":"ペルソナはアカウントに接続されています","select_friends_dialog_persona_connect_other":"ペルソナはアカウントに接続されています","service_decryption_failed":"復号に失敗","service_username_invalid":"無効なユーザー名","speed_up":"速度アップ","save":"保存","skip":"スキップ","next":"次へ","try":"試してみる","share":"共有","share_to":"共有先","sharing":"共有する","transfer":"転送","export":"エクスポート","confirm_swap_risk":"スワップリスクを確認する","wallet_load_retry":"{{symbol}}の読み込みに失敗しました。クリックして再試行してください。","wallet_rename":"ウォレット名を変更","wallet_loading_nft_contract":"NFT コントラクトを読み込み中...","wallet_search_contract_no_result":"検索結果またはコントラクトアドレスがクエリ条件に一致しません。","wallet_search_no_result":"該当結果なし","wallet_confirm_with_password":"パスワードを入力して確認","wallet_airdrop_nft_unclaimed_title":"NFT のエアドロップを受け取っていない：","view_on_explorer":"エクスプローラーで表示","recent_transaction_pending":"保留中","recent_transaction_cancelled":"キャンセルされました","wallet_balance":"残高","wallet_available_balance":"利用可能な残高","wallet_new":"新規ウォレット名","wallet_status_button_change":"変更","wallet_status_button_change_to_evm":"EVMウォレットに変更","wallet_status_button_copy_address":"アドレスをコピー","wallets_transfer_contact_wallet_name_already_exist":"すでに同じ名前が存在します。","wallet_transfer_account":"振込先","wallet_transfer_receiving_account":"受取アカウント","wallet_transfer_to_address":"宛先のアドレス","wallet_transfer_send":"送る","wallet_transfer_placeholder":"Ens または Address(0x)","wallet_transfer_title":"転送","wallet_transfer_my_wallets_title":"私のウォレット","wallet_transfer_my_contacts_title":"連絡先","wallets_transfer_warning_contract_address":"このアドレスはコントラクトアドレスです。","wallets_transfer_error_address_absence":"送金先アドレスを入力してください","wallets_transfer_error_address_scam":"このアドレスは詐欺の可能性があります。","wallets_transfer_error_invalid_address":"ウォレットアドレスが正しくありません。","wallets_transfer_error_invalid_domain":"この ENS は存在しないか利用できない。","wallet_transfer_error_no_ens_support":"ネットワークが ENS を対応していません。","wallet_transfer_error_amount_absence":"量を入力","wallet_transfer_error_address_absence":"受け手のアドレスを入力","wallet_transfer_error_same_address_with_current_account":"受け取りアドレスは送金アドレスと同じです。もう一度確認してください。","wallet_transfer_error_is_contract_address":"受け取りアドレスはコントラクトアドレスと同じです。もう一度確認してください。","wallet_transfer_error_invalid_address":"無効な受け手のアドレス","wallet_transfer_error_no_address_has_been_set_name":"受け取りのアドレスが無効です。","wallet_transfer_error_no_support_ens":"ネットワークが ENS を対応していません。","wallet_transfer_error_insufficient_balance":"{{symbol}} の残高が足りません","wallet_transfer_error_gas_price_absence":"ガス価格を入力してください","wallet_transfer_error_gas_limit_absence":"ガスの制限を入力してください","wallet_transfer_error_max_fee_absence":"最大手数料を入力してください","wallet_transfer_error_max_priority_fee_absence":"最大優先料金を入力してください","wallet_transfer_error_max_fee_too_low":"最大手数料がネットワーク状況に対して低すぎます。","wallet_transfer_error_max_fee_too_high":"最大手数料が必要以上です","wallet_transfer_error_max_priority_gas_fee_positive":"最大優先手数料は0GWEIより大きくなければなりません","wallet_transfer_error_max_priority_gas_fee_too_low":"最大優先料金がネットワーク状況に対して低すぎます。","wallet_transfer_error_max_priority_gas_fee_too_high":"最大優先料金は必要以上に高いです。必要以上に支払うになります。","wallet_transfer_error_max_priority_gas_fee_imbalance":"最大手数料は最大優先手数料より低くすることはできません","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"自分のアカウント間で転送する","weekly":"毎週","relative_time_days_ago_one":"{{count}}日前","relative_time_days_ago_other":"{{count}}日前","relative_time_hours_ago_one":"{{count}} 時間前","relative_time_hours_ago_other":"{{count}}時間前","relative_time_minutes_ago_one":"{{count}}分前","relative_time_minutes_ago_other":"{{count}}分前","relative_time_months_ago_one":"{{count}}月前","relative_time_months_ago_other":"{{count}}月前","relative_time_seconds_ago_one":"{{count}}秒前","relative_time_seconds_ago_other":"{{count}}秒前","relative_time_years_ago_one":"{{count}}年前","relative_time_years_ago_other":"{{count}}年前","relative_time_days_other":"{{$count}} 日","relative_time_days_one":"{{count}} 日","relative_time_hours_other":"{{count}} 時間","relative_time_hours_one":"{{count}} 時間","relative_time_minutes_other":"{{count}} 分","relative_time_minutes_one":"{{count}} 分","relative_time_months_one":"{{count}} 分","relative_time_months_other":"{{count}} ヶ月","relative_time_seconds_one":"{{count}} 秒","relative_time_seconds_other":"{{count}} 秒","relative_time_years_one":"{{count}} 年","relative_time_years_other":"{{count}} 年","plugin_wallet_snackbar_wait_for_confirming":"ウォレットでこの取引を確認する","plugin_wallet_snackbar_hash":"取引が送信されました","plugin_wallet_snackbar_confirmed":"取引が確認されました","plugin_wallet_snackbar_success":"取引が成功しました","plugin_wallet_snackbar_failed":"取引が失敗しました","plugin_wallet_snackbar_swap_successful":"トークンを成功にスワップしました","plugin_wallet_snackbar_swap_token":"トークンをスワップしました。","plugin_wallet_metamask_error_already_request":"ポップアップが開いています。確認してください。","plugin_wallet_connect_tip":"{{providerName}} ウォレットが公式 <providerLink>{{providerShortenLink}}</providerLink>によって提供されていることを確認してください。","plugin_wallet_disconnect":"接続解除","plugin_wallet_dialog_title":"ウォレットアカウント","plugin_wallet_select_a_nft_contract":"NFT コントラクトを選択してください","plugin_wallet_select_a_nft_owner":"NFT コントラクト所有者を選択","plugin_wallet_select_a_nft_operator":"NFT コントラクトのオペレーターを選択","plugin_wallet_fail_to_load_nft_contract":"タップして再試行してください","plugin_wallet_nft_approving_all":"{{symbol}} のロックを解除中...","plugin_wallet_approve_all_nft":"{{symbol}} のロックを解除","plugin_wallet_approve_all_nft_successfully":"{{symbol}} のロックを解除しました","plugin_wallet_confirm_risk_warning":"リスク警告を確認する","plugin_wallet_no_gas_fee":"ガス代が不足しています","plugin_wallet_update_gas_fee":"ガス代を更新中…","plugin_wallet_connect_a_wallet":"ウォレットと接続","plugin_wallet_invalid_network":"無効のネットワーク","plugin_wallet_select_a_wallet":"ウォレットを選択","plugin_wallet_transaction":"取引","plugin_wallet_transaction_wait_for_confirmation":"確認を待っています","plugin_wallet_transaction_submitted":"取引は送信されました。","plugin_wallet_transaction_confirmed":"取引は成功しました。","plugin_wallet_transaction_reverted":"取引は元に戻されました。","plugin_wallet_transaction_rejected":"取引は拒否されました。","plugin_wallet_transaction_underpriced":"低価格でトランザクションしました。","plugin_wallet_transaction_server_error":"取引は内部の JSON-RPC サーバーのエラーにより失敗しました。","plugin_wallet_view_on_explorer":"Explorer で見る","plugin_wallet_on_create":"ウォレットを作成","plugin_wallet_on_connect":"ウォレットに接続しています","plugin_wallet_pending_transactions_one":"{{count}} 保留中","plugin_wallet_pending_transactions_other":"{{count}} 保留中","plugin_wallet_import_wallet":"ウォレットをインポート","plugin_wallet_token_unlock":"確かにアンロックする","plugin_wallet_token_infinite_unlock":"永遠にアンロックする","plugin_wallet_token_exact_unlock_tips":"{{provider}} の一部を使用するには、 {{symbol}}スマートコントラクトの許可を与える必要があります。 ","plugin_wallet_token_infinite_unlock_tips":"{{provider}} スマートコントラクトに自分の{{symbol}}を使用する許可を与える必要があります。トークンごとに1回だけこれを行う必要があります。","plugin_wallet_connect_safari_metamask":"MetaMask に接続する","plugin_wallet_connect_safari_rainbow":"Rainbow に接続する","plugin_wallet_connect_safari_trust":"Trust に接続する","plugin_wallet_connect_safari_im_token":"imToken に接続する","plugin_wallet_on_connect_in_firefox":"接続する","plugin_wallet_return_mobile_wallet_options":"モバイルウォレットのオプションに戻る","plugin_wallet_view_qr_code":"QR コードを表示する","plugin_wallet_switch_network":"{{network}} に切り替え","plugin_wallet_switch_network_under_going":"{{network}} に切り替え","plugin_wallet_connect_tips":"WalletConnect ウォレットに接続しています。そのウォレットのネットワークを切り替えるか、別のウォレットに切り替えてください。","plugin_wallet_not_support_network":"このネットワークはまだ対応されていません。","plugin_wallet_connect_network":"{{network}} に切り替え","plugin_wallet_not_available_on":"{{network}} ネットワークでは利用できません。","plugin_wallet_connect_wallet":"ウォレットを接続","plugin_wallet_name_placeholder":"1〜12文字を入力してください","plugin_wallet_cancel_sign":"署名がキャンセルされました。","plugin_web3_profile_recommend_feature_description":"Web3機能の表示をカスタマイズして、ソーシャルプロフィールを最適化します。","plugin_nft_avatar_recommend_feature_description":"NFTをプロファイル画像として、排他的なオーラで設定します。","application_hint":"ソーシャルにあなたのNFTをアピール。Twitterを離れることなく、NFTを入札、購入、閲覧ができます。","plugin_goPlusSecurity_description":"高速で信頼性の高い便利なセキュリティサービスを提供します。","plugin_red_packet_create":"ラッキードロップを作成します。","plugin_red_packet_claimed":"受取成功","plugin_red_packet_claim":"受取る","plugin_red_packet_claim_title":"ラッキードロップを受け取る","plugin_red_packet_claim_notification":"ラッキードロップを受け取る.","plugin_red_packet_claim_success":"{{- tokenAmountDescription}} でラッキードロップを受け取ります。","plugin_red_packet_claim_success_without_detail":"ラッキードロップを受け取りました。","plugin_red_packet_claim_fail":"ラッキードロップを受け取ることができません。","plugin_red_packet_create_with_token":"{{symbol}} で投げ銭を作成する","plugin_red_packet_create_with_token_title":"ラッキードロップを作成します。","plugin_red_packet_create_with_token_success":"{{- tokenAmountDescription}} でラッキードロップを作成しました。","plugin_red_packet_create_with_token_fail":"ラッキードロップの作成に失敗しました。","plugin_red_packet_refund_with_token":"期限切れのラッキードロップを返金します。","plugin_red_packet_refund_with_token_title":"返金ラッキードロップ","plugin_red_packet_refund_with_token_success":"{{- tokenAmountDescription}} でラッキードロップを返金します。","plugin_red_packet_refund_with_token_success_without_detail":"ラッキードロップを返金しました。","plugin_red_packet_refund_with_token_fail":"ラッキードロップの返金に失敗しました。","plugin_nft_red_packet_create_title":"NFTラッキードロップを作成します。","plugin_nft_red_packet_create":"NFTラッキードロップを作成します。","plugin_nft_red_packet_create_success":"{{symbol}} NFTラッキードロップを正常に作成しました。","plugin_nft_red_packet_create_success_without_detail":"NFTラッキードロップを正常に作成しました。","plugin_nft_red_packet_claim":"ラッキードロップを受け取る","plugin_nft_red_packet_claim_success":" {{symbol}} NFT Lucky Drop１を正常に受け取りました。","plugin_nft_red_packet_claim_success_without_detail":"NFT Lucky Drop１を正常に受け取りました。","plugin_nft_red_packet_claim_title":"NFT Lucky Dropを受け取りました。","plugin_red_packet_nft_account_name":"ウォレットアカウント","plugin_gitcoin_select_a_token":"トークンを選択する","plugin_gitcoin_insufficient_balance":"{{symbol}} の残高が足りません","plugin_trader_fail_to_load":"トレンド情報の読み込みに失敗しました  ","plugin_trader_switch_provider":"{{provider}} に切り替え","plugin_trader_swap_description":"ポップアップ取引ウィジェットを使用すると、最もホットなCrypto/Stockの価格を即座に表示することができ、最高のパフォーマンスを発揮するマネージャーに投資することもできます。","plugin_trader_tutorial":"チュートリアル","plugin_trader_what_is_lbp":"LBPとは？","plugin_trader_lbp_intro":"ソリッドブルーラインは、 {{symbol}} のLBP上の {{symbol}}の履歴価格を示しています。 誰も買わない場合、価格は下がり続ける可能性があります。賢明な投資判断を下してください。","plugin_trader_no_pools_found":"プールが見つかりません","plugin_trader_safety_agree":"理解しました","plugin_trader_view_on_etherscan":"Etherscan で表示","plugin_trader_safety_alert_title":"トークン安全の警告","plugin_trader_safety_alert":"既存のトークンの偽バージョンや、トークンを持たないプロジェクトを代表すると主張するトークンを作成することも含め、誰でもイーサリアム上であらゆるERC20トークンを作成し、名前を付けることができます。Etherscan と同様に、このサイトはトークンの完全性とは無関係にすべての ERC20 トークンの分析を自動的に追跡します。ERC20 トークンを利用する前に、ご自身で調査してください。","plugin_trader_total_supply":"総供給量","plugin_trader_circulating_supply":"流通供給量","plugin_trader_accept":"同意","plugin_trader_volume_24":"24時間取引Vol","plugin_trader_market_cap":"時価総額","plugin_trader_risk_warning_short":"リスク警告","plugin_trader_risk_warning":"スワップトークンコントラクトのリスクを確認","plugin_trader_make_risk_trade":"とにかくスワップ","plugin_trader_dear_user":"ユーザーの皆様","plugin_trader_user_warning":"確認ボタンをクリックすると、潜在的なリスクを取ることに同意し、取引を進めることになります。","plugin_trader_price_updated":"価格の有効期限が切れました。","plugin_trader_market_statistic":"マーケット統計","plugin_trader_floor_price":"フロア価格","plugin_trader_trending":"トレンド","plugin_trader_highest_price":"値段の高い順","plugin_trader_total_volume":"合計量","plugin_trader_one_day_average_price":"24時間平均価格","plugin_trader_one_day_traded_volume":"24時間の取引量","plugin_trader_one_day_sale":"24時間売上","plugin_trader_marketplace":"マーケットプレイス","plugin_trader_total_assets":"アイテム","plugin_trader_owners_count":"所有者","plugin_trader_sales":"売上（24時間）","plugin_trader_rank":"ランク{{rank}}","plugin_trader_info":"情報","plugin_trader_website":"ウェブサイト","plugin_trader_community":"コミュニティー","plugin_savings":"普通預金","plugin_savings_asset":"資産","plugin_savings_apr":"4月","plugin_savings_wallet":"ウォレット","plugin_savings_operation":"オペレーション","plugin_savings_amount":"量","plugin_savings_deposit":"入金","plugin_savings_swap_token":"{{token}} をスワップ","plugin_savings_withdraw_token":"{{token}} を引き出し","plugin_savings_withdraw":"出金","plugin_savings_process_deposit":"入金処理中","plugin_savings_process_withdraw":"出金処理中","plugin_savings_no_protocol":"入金プロトコルが見つかりません。","plugin_trader_swap":"スワップ","plugin_trader_wrap":"ラップ","plugin_trader_swap_from":"売却する","plugin_trader_swap_receive":"購入する","plugin_trader_unwrap":"アンラップ","plugin_trader_buy":"購入","plugin_trader_no_data":"データなし","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"価格","plugin_trader_tab_exchange":"取引所","plugin_trader_tab_activities":"アクティビティ","plugin_trader_nft_items":"NFTs","plugin_trader_table_nft":"NFT","plugin_trader_table_method":"方法","plugin_trader_table_value":"価値","plugin_trader_table_from":"から","plugin_trader_table_to":"宛先","plugin_trader_table_time":"時刻","plugin_trader_error_amount_absence":"量を入力してください。","plugin_trader_error_insufficient_balance":"{{symbol}} の残高が足りません","plugin_trader_error_insufficient_lp":"流動性が足りません","plugin_trade_error_input_amount_less_minimum_amount":"入力量は最小量を下回っています","plugin_trader_slippage_tolerance":"スリッページの許容範囲：","plugin_trader_gas_fee":"ガス料金","plugin_trader_unlock_symbol":"{{symbol}} のロックを解除","plugin_trader_unlock_tips":"{{provider}} を使用するには、 {{symbol}}スマートコントラクトの許可を与える必要があります。トークンごとに1回だけ行う必要があります。","plugin_trader_swap_amount_symbol":"スワップ","plugin_trader_confirm_from":"から","plugin_trader_confirm_to":"まで","plugin_trader_confirm_slippage_tolerance":"スリッページの許容範囲","plugin_trader_confirm_tx_cost":"(${{usd}})","plugin_trader_confirm_minimum_received":"最少受取り額:","plugin_trader_confirm_tips":"最大価格スリッページを高く設定し過ぎると、最小返還額が希望額より低くなる可能性があります。","plugin_trader_price_impact_warning_tips":"スリッページ許容度が極端に低い取引は、ごくわずかな相場の動きで差し戻される可能性があります。","plugin_trader_price_impact_too_high_tips":"高い価格のインパクト！ {{impact}} 以上のドロップ！","plugin_trader_confirm_swap":"スワップの確認","plugin_trader_update":"アップデート","plugin_trader_price_impact":"価格へのインパクト","plugin_trader_price_image_value":"価格へのインパクト (-{{percent}})","plugin_trader_slippage_warning":"このスリッページ許容範囲では、10%少なく受け取る可能性があります。","plugin_trader_confirm_price_impact":"価格へのインパクトを確認 {{percent}}","plugin_trader_max_slippage":"最大スリップページ","plugin_trader_gas_setting_instant":"インスタント","plugin_trader_gas_setting_high":"高い","plugin_trader_gas_setting_medium":"中間","plugin_trader_gas_setting_standard":"標準","plugin_trader_gas_setting_fast":"高速","plugin_trader_gas_setting_custom":"カスタム","plugin_trader_tx_cost_usd":"(${{usd}})","plugin_trader_tx_cost_usd_new":"({{usd}})","plugin_trader_tx_cost_very_small":"({{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流動性が不足しています","plugin_trader_no_trade":"取引を選択してください","plugin_trader_swap_risk":"スワップリスク","plugin_trader_gas":"取引費用","plugin_poll_display_name":"プラグイン: 投票","plugin_poll_question_hint":"質問を入力してください...","plugin_poll_options_hint":"オプション","plugin_poll_length":"投票期限","plugin_poll_length_days":"日","plugin_poll_length_hours":"時間","plugin_poll_length_minutes":"分","plugin_poll_length_unknown":"知らない","plugin_poll_create_new":"新しい投票を作成","plugin_poll_select_existing":"既存の投票を選択","plugin_poll_send_poll":"投票を作成","plugin_poll_status_closed":"投票は終了しました","plugin_poll_status_voting":"投票しています","plugin_poll_status_voted":"投票した.","plugin_poll_deadline":"{{time}} で終了","plugin_collectibles_name":"コレクション","plugin_collectibles_description":"OpenSeaとRaribleのコレクションの具体的な情報を表示し、ソーシャルメディアで直接オファーします。","plugin_infra_descriptor_nft_approve_title":"{{action}} NFT コントラクト","plugin_infra_descriptor_nft_approve_success":"{{action}} {{symbol}} NFT のコントラクトが正常になりました。","plugin_infra_descriptor_nft_revoke_success":"{{action}} {{symbol}} の承認に成功しました。","plugin_infra_descriptor_nft_approve_fail":"{{action}} NFT コントラクトに失敗しました。","plugin_infra_descriptor_nft_transfer_title":"NFTを転送する","plugin_infra_descriptor_nft_transfer_fail":"トークンを転送できませんでした.","plugin_infra_descriptor_nft_transfer_success":"{{symbol}} NFT の転送に成功しました。","plugin_infra_descriptor_nft_transfer":"{{symbol}} NFTを転送。","plugin_infra_descriptor_token_revoke":"{{symbol}} の承認を取り消します。","plugin_infra_descriptor_token_transfer_title":"トークンを転送する","plugin_infra_descriptor_token_transfer":"{{- tokenAmountDescription}} を送信する。","plugin_infra_descriptor_token_transfer_fail":"トークンを送信できませんでした。","plugin_infra_descriptor_token_transfer_success":"{{- tokenAmountDescription}} を送信しました。","plugin_infra_descriptor_token_revoke_title":"トークンを取り消す","plugin_infra_descriptor_token_revoke_success":"承認を取り消しました。","plugin_infra_descriptor_token_revoke_fail":"トークンコントラクトの取り消しに失敗しました。","plugin_infra_descriptor_token_approve_title":"トークンのロック解除","plugin_infra_descriptor_token_approve":"{{- tokenAmountDescription}} のロックを解除","plugin_infra_descriptor_token_approve_success":"{{- tokenAmountDescription}} のロックを解除しました","plugin_infra_descriptor_token_revoke_but_set_positive_cap":" {{spender}}の{{- tokenAmountDescription}} を承認しました。トークンを取り消したい場合は、カスタム支出上限金額を 0 にしてからもう一度お試しください。","plugin_infra_descriptor_token_approve_but_set_zero_cap":"{{symbol}} は正常に承認されませんでした。支出上限を 0 に設定せず、もう一度お試しください。","plugin_infra_descriptor_token_fail":"トークンコントラクトのロック解除に失敗しました。","plugin_infra_descriptor_token_deposit_title":"入金トークン","plugin_infra_descriptor_token_deposit":"貯蓄のための預金 {{- tokenAmountDescription}}。","plugin_infra_descriptor_token_deposit_success":"入金 {{- tokenAmountDescription}} に成功しました。","plugin_infra_descriptor_token_deposit_fail":"{{symbol}} の入金に失敗しました。","plugin_infra_descriptor_token_withdraw_title":"トークンを出金する","plugin_infra_descriptor_token_withdraw":"貯蓄のために {{- tokenAmountDescription}} を出金します。","plugin_infra_descriptor_token_withdraw_success":"出金 {{- tokenAmountDescription}} に成功しました。","plugin_infra_descriptor_token_withdraw_fail":"{{symbol}} の出金に失敗しました。","plugin_infra_descriptor_mask_box_purchase_title":"Maskbox NFT を購入","plugin_infra_descriptor_mask_box_purchase_success":"{{- tokenAmountDescription}} でMaskbox NFT を購入しました。","plugin_infra_descriptor_mask_box_purchase":"Maskbox NFT を購入.","plugin_infra_descriptor_mask_box_purchase_fail":"Maskbox NFTの購入に失敗しました。","plugin_infra_descriptor_gitcoin_donate_title":"寄付する","plugin_infra_descriptor_gitcoin_donate":"あなたは {{- amount}} {{symbol}} を寄付しました","plugin_infra_descriptor_gitcoin_submitted":"取引は提出されました","plugin_infra_descriptor_gitcoin_donate_success":"あなたは {{- amount}} {{symbol}} を寄付しました","plugin_infra_descriptor_gitcoin_donate_fail":"取引失敗","plugin_snapshot_info_title":"情報","plugin_snapshot_info_strategy":"戦略家","plugin_snapshot_info_author":"著者","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"開始日","plugin_snapshot_info_end":"終了日","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_info_dao":"DAO","plugin_snapshot_description":"各プロジェクトやプロトコルのTwitterページにSnapshotのプロポーザルを表示する。","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_votes_yourself":"あなた","plugin_snapshot_no_power":"投票権がありません","plugin_snapshot_vote_success":"投票されています！","plugin_snapshot_vote_failed":"投票に失敗した場合はもう一度お試しください。","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選択","plugin_snapshot_vote_power":"あなたの投票力","plugin_snapshot_vote_title":"投票する","plugin_snapshot_my_vote":"自分の投票","plugin_snapshot_space_info_followers_count":"{{followersCount}} メンバー","plugin_snapshot_proposal_not_start":"開始時刻 {{date}}","plugin_snapshot_proposal_started":"終了時刻 {{date}} ","plugin_snapshot_proposal_ended":"{{date}} に終了","plugin_snapshot_proposal_no_results":"おっと、結果が見つかりません","plugin_snapshot_space":"スペース","plugin_snapshot_space_join":"参加","plugin_snapshot_space_view":"表示","plugin_snapshot_proposal":"提案","plugin_snapshot_progress":"進捗状況","plugin_snapshot_load_failed":"Snapshot APIサービスの故障のため、読み込みに失敗します。","plugin_snapshot_vote_confirm_dialog_title":"投票の確認","plugin_snapshot_vote_confirm_dialog_choice":"本当に 「{{ choiceText }}」 に投票しますか？","plugin_snapshot_vote_confirm_dialog_warning":"このアクションは元に戻すことはできません。","plugin_snapshot_current_result_title":"現在の結果","plugin_snapshot_download_report":"レポートをダウンロードする","plugin_pets_name":"非F 友達","plugin_pets_description":"#NFTの無限の可能性を発見してください。","wallet_verify_persona_sign":"ペルソナサイン","wallet_verify_has_bound":"ウォレットは既に {{currentPersona}}にバインドされています。別のウォレットに切り替えてください。","wallet_verify_persona_name":"{{- personaName}} のサイン","wallet_verify_empty_alert":"まずウォレットに接続してください。","wallet_verify_persona_sign_intro":"データの有効性を確保するために、ペルソナとシームレスにサインインします。","waller_verify_wallet_sign_intro":"簡単な2ステップで、<br/>Next.IDのサービスを通じて、デジタルIDを所有、閲覧、活用することができます。いつでも簡単に取り外すことができます。","popups_welcome_to_mask_network":"Mask Networkへようこそ","popups_persona_description":"ソーシャルメディアの投稿とメッセージを暗号化します。選択した友達を復号させます。","popups_add_wallet":"ウォレットを追加","popups_add_wallet_description":"Maskウォレットで取引と資産を安全に保管してください。","popups_add_persona_description":"ペルソナを使用してソーシャルメディアの投稿とメッセージを暗号化して復号化します。","popups_create_a_new_wallet_title":"新しいウォレットを作成する","popups_generate_a_new_wallet_address":"新しいウォレットアドレスを生成する","popups_generate_a_new_persona":"新しいペルソナを作成","popups_import_wallet":"ウォレットをインポート","popups_import_wallets":"ウォレットをインポート","popups_import_wallets_description":"ニーモニックフレーズ、秘密キー、キーストーンファイルを対応します。","popups_import_persona_description":"個人データにアクセスするために、IDコード、秘密鍵、ローカルバックアップ、またはクラウドバックアップを対応します。","popups_lock_wallet":"ウォレットをロックする","popups_wallet_settings":"ウォレットの設定","popups_verify_persona_sign_success":"ペルソナが正常に署名されました","popups_verify_persona_sign_failed":"ペルソナに署名できませんでした","popups_verify_wallet_sign_success":"ウォレットの署名に成功しました","popups_verify_wallet_sign_failed":"ウォレットに署名できませんでした","popups_profile_photo":"プロフィール写真","popups_public_key":"公開鍵","popups_create_persona":"ペルソナを作成","popups_restore_and_login":"復元またはログイン","popups_name":"名前","popups_connect_social_tips":"ソーシャルプラットフォームのアカウントに接続します。","popups_save_successfully":"正常に保存されました","popups_save_failed":"保存できませんでした","popups_display_web3_address_tips":"Web3プロフィールページに以下のアドレスを表示し、ヒントを受け取るために使用してください。","popups_verify_account_tips":"あなたのペルソナを接続し、確認した後、あなたのweb3 の足跡を表示するか、またはヒントを受け取るための関連付けられた住所をセットアップすることができる。","popups_other_social_accounts_tips":"Instagram、Facebook、Mindsなどの他のソーシャルネットワーキングプラットフォームには、TwitterのNext.ID認証接続のような認証関係はありません。\\nこれらのプラットフォームでペルソナをアカウントに接続する場合、暗号化された投稿の送信のみがサポートされます。","popups_empty_wallet_proofs_tips":"関連するウォレットがありません。 <strong>ウォレットを追加します。</strong>","popups_social_account":"ソーシャルアカウント","popups_connected_wallets":"接続されたウォレット","popups_change_owner":"所有者変更","popups_wallet_connected_status$connected":"接続されました","popups_wallet_connected_status$unconnected":"接続されていません","popups_loading":"読み込み中","popups_connect_your_web2_social_accounts":"ソーシャルメディアのアカウントに接続","popups_wallet_settings_change_network":"ネットワークを変更","popups_wallet_settings_auto_unlock_time":"自動ロック時間","popups_wallet_settings_auto_unlock_time_mins":"{{time}} 分","popups_wallet_settings_auto-unlock_time_hour_one":"{{count}} 時間","popups_wallet_settings_auto-unlock_time_hour_other":"{{count}} 時間","popups_wallet_settings_auto_unlock_time_title":"自動ロック","popups_wallet_settings_change_payment_password":"支払いパスワードを変更する","popups_wallet_settings_show_private_key":"秘密キーを表示する","popups_wallet_settings_backup_wallet":"ウォレットをバックアップする","popups_wallet_settings_enter_payment_password":"支払いパスワードを入力する","popups_wallet_settings_export_private_key_title":"下矢印のアイコンをクリックすると、秘密キーが表示される。","popups_wallet_settings_rename_tips":"ウォレット名は3文字以上18文字以内で入力してください。","popups_wallet_settings_name_exists":"すでに同じ名前が存在します。","popups_wallet_settings_remove_wallet":"ウォレットを削除","remove_wallet_title":"ウォレットを削除しますか?","popups_welcome":"ようこそ！","popups_wallet_token":"トークン","popups_wallet_collectible":"NFTs","popups_wallet_collectible_added_successfully":"正常に追加されました","popups_wallet_dialog_legacy_wallet_tip":"レガシーウォレットが検出されました。確認をクリックしてすべて復元してください。","popups_wallet_set_payment_password":"支払いパスワードの設定","popups_wallet_create_payment_password":"パスワードを作成","popups_wallet_payment_password":"決済パスワード","popups_wallet_set_up_payment_password":"支払いパスワードを設定","popups_wallet_old_payment_password":"以前の決済パスワード","popups_wallet_new_payment_password":"新しい決済パスワード","popups_wallet_confirm_password":"パスワードの確認","popups_wallet_new_password_not_match":"新しいパスワードが一致しません","popups_wallet_create_payment_password_tip":"6 文字以上","popups_wallet_set_payment_password_successfully":"支払いパスワードを正常に設定しました","popups_wallet_term_of_service_agree_part_1":"続行することで、以下に同意します。","popups_wallet_term_of_service_agree_part_2":"<agreement>サービス契約</agreement> および <policy>プライバシーポリシー</policy>","popups_wallet_reset_tips":"パスワードを忘れましたか？","popups_wallet_payment_password_tip":"決済パスワードは、数字、文字、特殊文字の2つのカテゴリの組み合わせで、8〜20文字の長さが必要です。","create_wallet_incorrect_payment_password":"現在のパスワードが正しくありません。","popups_wallet_start_up_tip":"ウォレットに接続し、新しいウォレットを作成するか、シードフレーズを使用して既存のウォレットを復元します。","popups_wallet_name_placeholder":"1〜12文字を入力してください","popups_wallet_name_mnemonic":"ニーモニック","popups_wallet_name_json_file":"Jsonファイル","popups_wallet_name_private_key":"秘密鍵","popups_wallet_name_keystore":"キーストア：","popups_wallet_name_mnemonic_placeholder":"12 または 24 のニーモニックワードを入力します。","popups_wallet_name_origin_password":"元のパスワード","popups_wallet_tab_assets":"トークン","popups_wallet_tab_collectibles":"NFTs","popups_wallet_tab_activity":"アクティビティ","popups_wallet_derivation_path":"派生パス ({{- path }})","popups_wallet_transfer_to":"宛先","popups_wallet_next":"次","popups_wallet_backup_wallet":"ウォレットをバックアップする","popups_wallet_backup_json_file":"JSONファイル","popups_wallet_backup_private_key":"秘密鍵","popups_wallet_reset_wallet":"ウォレットをリセットする","popups_wallet_reset_wallet_description_1":"お支払いパスワードはローカルに保存され、ウォレットのロックを解除するために何度も試すことができます。","popups_wallet_reset_wallet_description_2":"支払いパスワードを忘れた場合、ウォレットをリセットするために「リセット」を入力することができます。 <strong>覚えておいてください。この操作は以前のすべてのウォレットを消去します。</strong>","popups_wallet_reset_wallet_description_3":"注：前回のインポートで使用したニーモニックフレーズを使用している場合、そのニーモニックフレーズに由来するウォレットを復元することができます。","popups_wallet_backup_json_file_confirm_password_tip":"このファイルは暗号化され、現在のパスワードで保存されています。 ウォレットをインポートするには、このファイルを復号するために現在のパスワードが必要です。","popups_wallet_backup_private_key_tip":"秘密鍵は誰にも見せないでください。秘密鍵は、EVM互換チェーンに対応しているウォレットであれば、復号化せずに使用することができます。","popups_wallet_backup_input_password":"バックアップパスワードを入力してください。","popups_wallet_logout_input_payment_password":"支払いパスワードを入力してください。","popups_wallet_backup_json_file_drag_tip":"ファイルをここにドラッグしてください","popups_wallet_backup_json_file_click_tip":"ここにファイルをクリックまたはドラッグしてください","popups_wallet_backup_mnemonic_title":"ニーモニックワードを書き留めてください","popups_wallet_backup_mnemonic_tips":"以下の単語を正しい順序で書き留めてください。安全に保管し、誰とも共有しないでください！","popups_wallet_backup_mnemonic_view_tips":"タップしてニーモニックワードを表示します。誰もあなたの画面を見ていないことを確認してください","wallet_name":"ウォレット名"}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/ko-KR.json
const shared_ui_locales_ko_KR_namespaceObject = JSON.parse('{"promote":"🎭🎭🎭 일반 택스트가 지루해요? Mask.io 설치하여 암호화된 트윗을 친구에게 보내 보세요!","promote_red_packet":"🧧🧧🧧 Mask.io 설치하여 행운 드랍으로 친구에게 토큰이나 NFT를 보내세요!","promote_file_service":"📃📃📃 Mask.io 설치하여 {{sns}}에서 영구적인 탈중앙화 파일 스토리지를 이용하세요.","promote_savings":"안녕하세요, 방금 {{chain}} 에서 {{- amount}} {{symbol}} 입금했어요! @{{account}} 팔로우하여 더 많은 스테이킹 프로젝트를 찾아보세요!","promote_withdraw":"안녕하세요, 방금 {{chain}} 에서 {{- amount}} {{symbol}} 출금했어요! @{{account}} 팔로우하여 더 많은 스테이킹 프로젝트를 찾아보세요!","promote_collectible":"Mask.io 설치하여 {{sns}}에서 NFT를 훑어보세요! 다양한 NFT 시장의 수집품을 전시하고, 소셜미디어에서 직접 오버할 수 있습니다.","promote_snapshot":"Mask.io 설치하여 {{sns}}에서 프로젝트의 발전을 위한 프로포절 투표를 해 보세요!","database_backup":"데이터베이스 백업","database_overwrite":"백업으로 데이터베이스를 덮어쓰기","database_clear":"데이터베이스 지우기","debug_new_bug_issue":"새 버그 문제","debug_metadata_title":"메타데이터를 추가하거나 현존 메타데이터를 교체하기","debug_metadata_put_metadata":"메타데이터 넣기","edit":"편집","clear":"지우기","connect":"연결","back":"뒤로","more":"더 보기","remove":"삭제","to":"To","add":"추가","approve":"승인","address":"주소","amount":"금액","coming_soon":"Coming soon","max":"최대치","data":"데이터","available_balance":"사용 가능한 잔액","available_amount":"{{- amount}} 이용가능","failed_to_transfer_token":"토큰 전송 실패: {{- message}}","failed_to_transfer_nft":"네트워크나 컨트랙트 오류","operation":"조작","gas_limit":"가스 한도","gas_price":"가스 가격","value":"값","balance":"잔액","gwei":"Gwei","redirect_to":"리다이렉트","welcome_back":"환영합니다","sign":"사인","load_failed":"로딩 실패","web3_profile_card_name":"웹3 프로필 카드","powered_by":"기술 지원","powered_by_whom":"<span>{{whom}}</span>에 의해 구동됨","reload":"다시 로드","rename":"이름 변경","contacts":"연락처","currency":"통화","load":"로드","load_all":"모두 로드하기","no_data":"데이터 없음","tip":"팁","tags":"태그","price":"가격","floor_price":"최저 가격","default":"디폴트","contract":"컨트랙트","plugins":"플러그인","signing":"진행중...","network":"네트워크","backup":"백업","password":"비밀번호","reenter":"다시 입력","copy":"복사","or":"또는","send":"발송","transfer_to":"To","added_by_user":"사용자별추가","congratulations":"축하합니다","token_standard":"토큰 표준","persona_required":"페르소나가 필요합니다.","initializing":"초기화 중...","redirect_alert":"브라우저가 리다이렉트하지 않으면 <terms>여기 클릭</terms>","typed_message_text_alert":"현재 TypedMessageText만 지원합니다.","badge_renderer_provided_by_plugin":"플러그인으로 제공","add_assets":"자산 추가","add_nft_contract_search_hint":"NFT 컨트렉트 이름이나 주소를 검색하기","applications":"어플리케이션","application_settings":"앱 설정","application_tooltip_hint_sns_persona_unmatched":"트위터 ID 검증한 페르소나 ({{currentSNSConnectedPersonaPublicKey}}) 가 이용 중인 페르소나({{currentPersonaPublicKey}}) 와 불일치합니다. 페르소나({{currentSNSConnectedPersonaPublicKey}}) 로 바꾸고 다시 시도하세요.","application_tooltip_hint_verify":"소셜 계정을 검증하세요.","application_tooltip_hint_create_persona":"페르소나를 생성하고 이용하세요.","application_tooltip_hint_connect_persona":"페르소나를 연결하세요.","application_tooltip_hint_connect_wallet":"월렛을 연결하세요","application_settings_tab_app_list":"앱 리스트","application_settings_tab_plug_in_switch":"플러그인 전환","application_settings_tab_plug_app-list-listed":"Listed","application_settings_tab_plug_app-list-unlisted":"Unlisted","application_settings_tab_plug_app-listed-placeholder":"애프리케이션 아이콘을 클릭하여 앱 리스트에 숨깁니다.","application_display_tab_plug_app-unlisted-placeholder":"설정 아이콘을 클릭하여 앱 보드에 나열합니다.","application_settings_tab_plug_app-unlisted-placeholder":"애프리케이션 아이콘을 클릭하여 앱 보드에 나열합니다.","persona_load_failed":"로딩 실패","additional_post_box__encrypted_post_pre":"#mask_io로 이 게시물을 해독하기. {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_sns_official_account":"#mask_io로 행운 드랍을 수령해 보세요. @{{account}} \\n\\n$t(promote_red_packet)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"#mask_io {{encrypted}} 덧붙이고 레드 패킷을 수령하세요.","additional_post_box__encrypted_post_pre_file_service_sns_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"암호화된 이미지입니다. 📪🔑 mask.io 설치하고 해독하세요. {{random}}","auto_paste_failed_dialog_title":"수동으로 붙여넣기","auto_paste_failed_dialog_content":"아래의 문자와 이미지(있으면)를 복사하고 공유하세요","auto_paste_failed_dialog_image_caption":"새로운 탭에서 열기","auto_paste_failed_snackbar":"암호화된 내용을 수동으로 붙여넣으세요?","auto_paste_failed_snackbar_action":"방법을 알려주세요.","auto_paste_failed_snackbar_action_close":"닫기","connect_your_wallet":"월렛 연결","connected_wallet_settings":"웰렛 설정 연결","compose_encrypt_method_text":"텍스트","compose_encrypt_method_text_sub_title":"텍스 암호화 이용","compose_encrypt_method_image":"이미지","compose_encrypt_method_image_sub_title":"이미지로 메시지 암호화","compose_no_local_key":"로컬 키 없음","compose_encrypt_visible_to_all":"전체","compose_encrypt_visible_to_all_sub":"공개","compose_encrypt_visible_to_private":"비공개","compose_encrypt_visible_to_private_sub":"나만 보기","compose_shared_friends_one":"친구 한 명","compose_shared_friends_other":"{{count}} 친구","compose_encrypt_visible_to_share":"공유 대상:","compose_encrypt_visible_to_share_sub":"선정된 연락처에게만 공유","compose_encrypt_share_dialog_empty":"암호화 친구가 없습니다. 검색해 보세요.","copy_success":"월렛 주소 복사 성공","automation_request_click_post_button":"“포스트” 버튼을 눌러 대화 작성을 오픈하세요.","ok":"확인","start":"시작","cancel":"취소","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","hash_tag":"#mask_io","comment_box__placeholder":"암호화된 코멘트 추가","confirm":"확인","copy_text":"문자 복사","loading_failed":"로딩 실패","try_again":"다시 시도","copy_image":"이미지 복사","copy_success_of_wallet_addr":"지갑 주소 복사 성공","copy_success_of_text":"문자 복사 성공","copy_success_of_image":"이미지 복사 성공","copy_success_of_token_addr":"토큰 복사 성공","connecting":"연결 중","collectibles_name":"수집품","select_an_nft":"NFT 선택","create":"만들기","copied":"복사됨","daily":"일일","dashboard_no_collectible_found":"수집품이 없습니다.","no_NFTs_found":"NFT가 없습니다.","dashboard_collectible_menu_all":"모든({{count}})","days":"{{days}} 일마다","decrypted_postbox_only_visible_to_yourself":"나에게만 보이기","decrypted_postbox_visible_to_all":"모두 Mask 플러그인 사용자","decrypted_postbox_decrypting":"Mask 해독 중","decrypted_postbox_decoding":"Mask 디코딩 중","decrypted_postbox_decrypting_finding_person_key":"Mask가 상대방의 공개 키를 찾고 있습니다...","decrypted_postbox_decrypting_finding_post_key":"Mask가 이 게시글의 키를 검색하고 있습니다.","decrypted_postbox_author_mismatch":"{{name}}님이 이 글을 처음 게시했습니다.","decrypted_postbox_title":"Mask로 해독되었습니다:","dismiss":"확인","delete":"삭제","delete_wallet":"월렛 삭제","hide_token":"토큰 숨기기","hide_token_hint":"대시보드에서 「토큰 추가」 로 <strong>{{token}}</strong> 다시 추가할 수 있습니다.","done":"닫기","download":"다운로드","failed":"실패","buy_now":"바로 매수하기","no_enough_gas_fees":"가스비 부족","gas_fee":"가스비","insufficient_funds_for_gas":"자산이나 가스비가 부족합니다.","open":"열기","settings":"설정","do_not_see_your_nft":"NFT를 보셨나요?","import_nft":"NFT 불러오기","setup_guide_login":"가입하거나 로그인하고 Mask Network를 연결하세요.","setup_guide_find_username_text":"프로필과 페르소나를 연결시키려면 아이디가 필요합니다.","setup_guide_connect_auto":"연결","setup_guide_connect_failed":"실패했습니다... 다시 시도해 보세요.","setup_guide_verify":"인증","setup_guide_verify_should_change_profile":"불일치 계정","setup_guide_verify_dismiss":"다시 표시하지 않음","setup_guide_verify_checking":"확인 중","setup_guide_verify_post_not_found":"인증 게시글을 찾을 수 없습니다.","setup_guide_connected_title":"인증 및 연결 성공","setup_guide_connected_description":"소결 미디어에서 웹3 앱을 탐색해 보세요.","setup_guide_verifying":"인증 중","setup_guide_verifying_failed":"다시 인증","user_guide_tip_connected":"해당 계정에 성공적으로 연결되었습니다.","user_guide_tip_need_verify_on_next_id":"Next.ID를 기반한 제품을 연결하기 위해 인증 트윗을 발송해야 합니다.","setup_guide_say_hello_content":"연녕 Mask! 이것은 나의 첫 암호화된 메시지입니다. https://mask.io로 Mask를 설치하여 암호화 게시물을 보내 보세요! ","setup_guide_say_hello_follow":"{{account}} 팔로유하여 웹3를 탐색해 보세요.","setup_guide_pin_tip":"웹3에 쉽게 접근하려면 브라우저 툴바에 Mask Network를 고정해야 합니다.","setup_guide_pin_tip_step_click_left":"클릭 ","setup_guide_pin_tip_step_click_right":" 브라우저 오른쪽 상단에 있습니다.","setup_guide_pin_tip_step_find_left":"확장 프로그램 리스트에서 Mask Network를 찾아 보세요. ","setup_guide_pin_tip_step_find_right":" 버튼","setup_guide_pin_tip_successfully":"고정됩니다.","user_guide_tip_1":"클릭하여 메인 기능을 확인하세요.","user_guide_tip_2":"여기서 월렛을 연결하세요. 여기서 네트워크나 월렛을 바꿀 수 있습니다.","user_guide_tip_3":"트위터 친구의 웹3 발자국 브라우저하고 웹3의 자유를 즐깁니다.","user_guide_tip_4":"퀵 스타트","plugin_avatar_setup_share_title":"NFT PFP","plugin_avatar_setup_pfp_share":"Mask 확장 프로그램을 이용하여 NFT PFP를 무료로 설정했어요! mask.io를 설치하여 다른 독특한 NFT 컬렉션이나 웹3 활동을 탐색해 보세요.","plugin_avatar_setup_success":"NFT PFP가 설정되었습니다.","plugin_avatar_asset":"에셋은 찾을 수 없습니다.","plugin_avatar_web3_error":"웹3 에러","plugin_avatar_chain_error":"체인이 일치하지 않습니다.","plugin_avatar_input_token_address":"컨트랙트 주소 입력","plugin_avatar_input_token_id":"토큰 ID","mask_network":"Mask Network","import":"불러오기","no_search_result":"결과 없음","set_nft_profile_photo":"NFT 사진 설정","use_nft":"NFT 이용","loading":"로딩 중","unlock":"언락","persona":"페르소나","wallet":"월렛","dashboard":"대시보드","welcome_to_mask":"환영합니다","welcome_description_congrats":"웹3 세계에 들어가기를 축하합니다!","welcome_description_content":"가장 핫한 NFTs, DAOs 찾아보기 ","welcome_description_content_second":"Mask Network로 크립토 시세 파악","browser_action_enter_dashboard":"대시보드로 들어가기","pending":"대기 중…","beta_sup":"<sup>(beta)<sup>","post_dialog__button":"끝내기","post_dialog__placeholder":"여기서 텍스트 치기...","post_dialog__title":"Mask: 편집","post_dialog_visible_to":"공개 대상","post_dialog_encryption_method":"암호화 방식","post_dialog_enable_paste_auto":"자동 붙이기 지원","post_dialog_share_with_input_placeholder":"eg:트위터 계정, 페르소나 공개 키, 월렛 주소","post_modal_hint__button":"암호화된 메시지를 편집하기","hide":"숨기기","reset":"초기화","editor":"에디터","retry":"다시 시도","go_wrong":"오류가 발생합니다.","search_box_placeholder":"여기서 검색하기","select_all":"전체 선택","nonce":"Nonce","none":"N/A","select_none":"전체 선택 취소","all_friends":"모든 친구들","select_specific_friends_dialog__title":"지정 연락처 선택","select_friends_dialog_persona_connect_one":"해당 페르소나는 이미 계정에 연결되었습니다.","select_friends_dialog_persona_connect_other":"해당 페르소나는 이미 여러 계정에 연결되었습니다.","service_decryption_failed":"해독 실패","service_username_invalid":"무효한 아이디입니다","speed_up":"가속하기","save":"저장","skip":"넘어가기","next":"다음","try":"시도","share":"공유","share_to":"...에게 공유하기","sharing":"공유 중","transfer":"이체","export":"내보내기","confirm_swap_risk":"스왑 리스크 확인","wallet_load_retry":"{{symbol}} 로드 실패. 다시 시도하세요.","wallet_rename":"월렛 이름 바꾸기","wallet_loading_nft_contract":"NFT 컨트렉트 로딩...","wallet_search_contract_no_result":"검색 포준에 맞추는 결과나 컨트렉트 주소가 없습니다.","wallet_search_no_result":"결과 없음.","wallet_confirm_with_password":"비밀번호로 확인","wallet_airdrop_nft_unclaimed_title":"수령하지 않는 NFT 에어드랍:","view_on_explorer":"Explorer에서 보기","recent_transaction_pending":"대기중","recent_transaction_cancelled":"취소됨","wallet_balance":"잔액","wallet_available_balance":"이용 가능 잔액","wallet_new":"새로운 월렛","wallet_status_button_change":"바꾸기","wallet_status_button_change_to_evm":"EVM 월렛으로 변경하기","wallet_status_button_copy_address":"주소 복사","wallets_transfer_contact_wallet_name_already_exist":"이미 존재된 이름입니다.","wallet_transfer_account":"발송 계정","wallet_transfer_receiving_account":"받는 계정","wallet_transfer_to_address":"주소","wallet_transfer_send":"보내기","wallet_transfer_placeholder":"Ens 나 주소(0x)","wallet_transfer_title":"전송","wallet_transfer_my_wallets_title":"나의 월렛","wallet_transfer_my_contacts_title":"연락처","wallets_transfer_warning_contract_address":"이 주소는 연락처 주소입니다.","wallets_transfer_error_address_absence":"받는 주소 입력","wallets_transfer_error_address_scam":"이 주소는 사기 주소일 수 있습니다.","wallets_transfer_error_invalid_address":"잘못된 월렛 주소.","wallets_transfer_error_invalid_domain":"해당 ENS가 존재하지 않습니다.","wallet_transfer_error_no_ens_support":"네트워크는 ENS를 지원하지 않습니다.","wallet_transfer_error_amount_absence":"금액 입력","wallet_transfer_error_address_absence":"받는 주소 입력","wallet_transfer_error_same_address_with_current_account":"받는 주소는 발송 주소와 동일한 주소입니다. 다시 확인해 주세요.","wallet_transfer_error_is_contract_address":"받는 주소는 컨트랙트 주소입니다. 다시 확인해 주세요.","wallet_transfer_error_invalid_address":"무효한 받는 주소","wallet_transfer_error_no_address_has_been_set_name":"수신자의 주소가 잘못되었습니다.","wallet_transfer_error_no_support_ens":"네트워크는 ENS를 지원하지 않습니다.","wallet_transfer_error_insufficient_balance":"{{symbol}} 잔액 부족","wallet_transfer_error_gas_price_absence":"가스비 입력","wallet_transfer_error_gas_limit_absence":"기스비 한도 입력","wallet_transfer_error_max_fee_absence":"최대 가스비 입력","wallet_transfer_error_max_priority_fee_absence":"최대 우선 가스비 입력","wallet_transfer_error_max_fee_too_low":"현재 네트워크 컨디션에서 최대 가스비가 너무 낮습니다.","wallet_transfer_error_max_fee_too_high":"최대 가스비는 필요한 것보다 높습니다.","wallet_transfer_error_max_priority_gas_fee_positive":"최대 우선 가스비는 0 GWEI보다 높아야 합니다","wallet_transfer_error_max_priority_gas_fee_too_low":"현재 네트워크 컨디션에서 최대 우선 가스비가 부족합니다","wallet_transfer_error_max_priority_gas_fee_too_high":"최대 우선 가스비가 필요한 것보다 높아서 필요 이상으로 지불할 수 있습니다.","wallet_transfer_error_max_priority_gas_fee_imbalance":"최대 기스비는 최대 우선 가스비보다 낮을 수 없습니다","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"나의 계정간 송금하기","weekly":"주간","relative_time_days_ago_one":"{{count}} 일 전","relative_time_days_ago_other":"{{count}} 일 전","relative_time_hours_ago_one":"{{count}} 시간 전","relative_time_hours_ago_other":"{{count}} 시간 전","relative_time_minutes_ago_one":"{{count}} 분 전","relative_time_minutes_ago_other":"{{count}} 분 전","relative_time_months_ago_one":"{{count}} 월 전","relative_time_months_ago_other":"{{count}} 월 전","relative_time_seconds_ago_one":"{{count}} 초 전","relative_time_seconds_ago_other":"{{count}} 초 전","relative_time_years_ago_one":"{{count}} 년 전","relative_time_years_ago_other":"{{count}} 년 전","relative_time_days_other":"{{count}} 일","relative_time_days_one":"{{count}} 일","relative_time_hours_other":"{{count}} 시간","relative_time_hours_one":"{{count}} 시간","relative_time_minutes_other":"{{count}} 분","relative_time_minutes_one":"{{count}} 분","relative_time_months_one":"{{count}} 개월","relative_time_months_other":"{{count}} 개월","relative_time_seconds_one":"{{count}} 초","relative_time_seconds_other":"{{count}} 초","relative_time_years_one":"{{count}} 년","relative_time_years_other":"{{count}} 년","plugin_wallet_snackbar_wait_for_confirming":"이 거래를 월렛에서 확인하세요","plugin_wallet_snackbar_hash":"거래 제출 완료","plugin_wallet_snackbar_confirmed":"거래 확인 완료","plugin_wallet_snackbar_success":"거래 성공","plugin_wallet_snackbar_failed":"거래 실패","plugin_wallet_snackbar_swap_successful":"토큰 스왑 성공","plugin_wallet_snackbar_swap_token":"토큰 스왑","plugin_wallet_metamask_error_already_request":"팝업을 열었습니다. 확인하시길 바랍니다.","plugin_wallet_connect_tip":"{{providerName}} 월렛은 오피셜 <providerLink>{{providerShortenLink}}</providerLink> 제공하는 월렛인지 확인하세요.","plugin_wallet_disconnect":"연결 해제","plugin_wallet_dialog_title":"월렛 계정","plugin_wallet_select_a_nft_contract":"NFT 컨트렉트를 선택하세요.","plugin_wallet_select_a_nft_owner":"NFT 컨트렉트 소유자를 선택하세요.","plugin_wallet_select_a_nft_operator":"NFT 컨트렉트 오퍼레이터","plugin_wallet_fail_to_load_nft_contract":"NFT 컨트렉트 로드 실패. 다시 시도하세요.","plugin_wallet_nft_approving_all":"모든 NFT 승인 중...","plugin_wallet_approve_all_nft":"모든 NFT 승인되었습니다.","plugin_wallet_approve_all_nft_successfully":"모든 NFT는 성공적으로 승인되었습니다","plugin_wallet_confirm_risk_warning":"리스크 경고 확인","plugin_wallet_no_gas_fee":"가스비가 없습니다","plugin_wallet_update_gas_fee":"가스비 업데이트 중...","plugin_wallet_connect_a_wallet":"월렛을 연결하기","plugin_wallet_invalid_network":"잘못된 네트워크","plugin_wallet_select_a_wallet":"월렛 선택","plugin_wallet_transaction":"거래","plugin_wallet_transaction_wait_for_confirmation":"확인 중","plugin_wallet_transaction_submitted":"해당 거래는 이미 제출되었습니다.","plugin_wallet_transaction_confirmed":"해당 거래는 이미 확인되었습니다.","plugin_wallet_transaction_reverted":"해당 거래는 이미 복구되었습니다.","plugin_wallet_transaction_rejected":"해당 거래는 이미 거부되었습니다.","plugin_wallet_transaction_underpriced":"낮은 가격 거래","plugin_wallet_transaction_server_error":"JSON-RPC 오류 때문에 거래가 실패했습니다.","plugin_wallet_view_on_explorer":"Explorer에서 보기","plugin_wallet_on_create":"월렛 만들기","plugin_wallet_on_connect":"월렛 연결하기","plugin_wallet_pending_transactions_one":"{{count}} 대기 중","plugin_wallet_pending_transactions_other":"{{count}} 대기 중","plugin_wallet_import_wallet":"월렛 불러오기","plugin_wallet_token_unlock":"정확 언락","plugin_wallet_token_infinite_unlock":"무한 언락","plugin_wallet_token_exact_unlock_tips":"{{provider}} 에게 {{symbol}} 이용할 수 있는 스마트 컨트랙트 권한을 줘야 합니다. ","plugin_wallet_token_infinite_unlock_tips":"{{provider}} 에게 {{symbol}} 이용할 수 있는 스마트 컨트랙트 권한을 줘야 합니다. 다른 토큰을 이용할 때 이 작업을 다시 해야 합니다.","plugin_wallet_connect_safari_metamask":"MetaMask 연결하기","plugin_wallet_connect_safari_rainbow":"Rainbow 연결하기","plugin_wallet_connect_safari_trust":"Trust 연결하기","plugin_wallet_connect_safari_im_token":"imToken 연결하기","plugin_wallet_on_connect_in_firefox":"연결","plugin_wallet_return_mobile_wallet_options":"모바일 월렛 옵션으로 돌아가기","plugin_wallet_view_qr_code":"QR 코드 보기","plugin_wallet_switch_network":"{{network}} 네트워크로 바꾸기","plugin_wallet_switch_network_under_going":"{{network}} 네트워크로 바꾸는 중...","plugin_wallet_connect_tips":"모바일 앱 월렛에서 같은 네트워크로 바꾸세요.","plugin_wallet_not_support_network":"해당 네트워크가 아직 지원하지 않습니다.","plugin_wallet_connect_network":"{{network}}로 바꾸기","plugin_wallet_not_available_on":"{{network}} 에서는 사용할 수 없습니다.","plugin_wallet_connect_wallet":"월렛 연결","plugin_wallet_name_placeholder":"1-12 자 입력하세요","plugin_wallet_cancel_sign":"서명이 실패되었습니다.","plugin_web3_profile_recommend_feature_description":"웹3 기능의 표시를 사용자 정의하여 소셜 프로필을 최적화합니다.","plugin_nft_avatar_recommend_feature_description":"독특한 아우라가 다는 NFT 프로필 사진을 설정하세요","application_hint":"NFT로 소셜합니다. 사람들은 Twitter를 떠나지 않고도 NFT를 비딩, 구매, 확인을 할 수 있습니다.","plugin_goPlusSecurity_description":"빠르고 안정적이며 편리한 보안 서비스 제공합니다.","plugin_red_packet_create":"행운 드랍 만들기","plugin_red_packet_claimed":"수령됨","plugin_red_packet_claim":"수령","plugin_red_packet_claim_title":"행운 드랍 수령","plugin_red_packet_claim_notification":"행운 드랍 수령","plugin_red_packet_claim_success":"{{- tokenAmountDescription}} 행운 드랍을 성공적으로 수령됩니다.","plugin_red_packet_claim_success_without_detail":"행운 드랍을 성공적으로 수령됩니다.","plugin_red_packet_claim_fail":"행운 드랍을 수령 실패","plugin_red_packet_create_with_token":"{{symbol}} 으로 빨간 백 만드는 중","plugin_red_packet_create_with_token_title":"행운 드랍 생성","plugin_red_packet_create_with_token_success":"{{- tokenAmountDescription}} 로 행운 드랍 생성 성공","plugin_red_packet_create_with_token_fail":"행운 드랍을 생성 실패","plugin_red_packet_refund_with_token":"만료된 행운 드롭을 리펀하세요.","plugin_red_packet_refund_with_token_title":"행운 드랍 리펀","plugin_red_packet_refund_with_token_success":"{{- tokenAmountDescription}} 로 행운 드랍 리펀 성공","plugin_red_packet_refund_with_token_success_without_detail":"행운 드랍 리펀 성공","plugin_red_packet_refund_with_token_fail":"행운 드랍 리펀 실패","plugin_nft_red_packet_create_title":"NFT 행운 드랍 만들기","plugin_nft_red_packet_create":"NFT 행운 드랍 만들기","plugin_nft_red_packet_create_success":"{{symbol}} NFT 행운 드랍 생성 성공","plugin_nft_red_packet_create_success_without_detail":"NFT 행운 드랍 생성 성공","plugin_nft_red_packet_claim":"NFT 행운 드랍 수령","plugin_nft_red_packet_claim_success":"{{symbol}} NFT 행운 드랍 수령 성공","plugin_nft_red_packet_claim_success_without_detail":"NFT 행운 드랍 하나 수령 성공","plugin_nft_red_packet_claim_title":"NFT 행운 드랍 수령","plugin_red_packet_nft_account_name":"지갑 계정","plugin_gitcoin_select_a_token":"토큰 선택","plugin_gitcoin_insufficient_balance":"{{symbol}} 잔액 부족","plugin_trader_fail_to_load":"시세 정보 로드 실패  ","plugin_trader_switch_provider":"{{provider}} 로 전환","plugin_trader_swap_description":"팝업 트레이딩 기능으로 인기 크립토의 가격을 바로 확인하고 거래할 수 있습니다. 또한 최저의 성과를 내는 매니저에게 투자할 수 있습니다.","plugin_trader_tutorial":"튜토리얼","plugin_trader_what_is_lbp":"LBP가 무엇입니까?","plugin_trader_lbp_intro":"실드 블루 라인은 {{symbol}}의 LBP에서 {{symbol}}의 역사 가격을 보여줍니다. 아무도 사지 않으면 가격이 계속 내려갈 수도 있다. 현명하게 투자 결정을 내리세요.","plugin_trader_no_pools_found":"풀이 없습니다.","plugin_trader_safety_agree":"동의합니다.","plugin_trader_view_on_etherscan":"Etherscan에서 보기","plugin_trader_safety_alert_title":"토큰 안정성 알림","plugin_trader_safety_alert":"누구나 ERC20 토큰을 만들고 이름을 지을 수 있다. 토큰이 없는 프로젝트를 대표한다고 주장하는 토큰과 현존 토큰의 가짜 버전을 만드는 경우도 많습니다. Etherscan과 마찬가지로 이 사이트는 모든 ERC20 토큰에 대한 분석을 자동으로 추적합니다. ERC20 토큰과 상호 작용하기 전에 미리 잘 조사하시길 바랍니다.","plugin_trader_total_supply":"총 공급량","plugin_trader_circulating_supply":"유통량","plugin_trader_accept":"동의","plugin_trader_volume_24":"거래량 (24시간)","plugin_trader_market_cap":"시가 총액","plugin_trader_risk_warning_short":"리스크 경고","plugin_trader_risk_warning":"스왑 토큰 컨트렉트 리스크 확인","plugin_trader_make_risk_trade":"계속 스왑","plugin_trader_dear_user":"안녕하세요 유저님,","plugin_trader_user_warning":"확인 버튼을 클릭하면 잠재적 위험을 감수하고 거래를 진행하는 데 동의한다는 말입니다.","plugin_trader_price_updated":"가격은 업데이트뒤었습니다","plugin_trader_market_statistic":"마켓 통계","plugin_trader_floor_price":"바닥 가격","plugin_trader_trending":"추세","plugin_trader_highest_price":"최고 가격","plugin_trader_total_volume":"총 거래량","plugin_trader_one_day_average_price":"24H 평균 가격","plugin_trader_one_day_traded_volume":"24H 거래액","plugin_trader_one_day_sale":"24H 판매","plugin_trader_marketplace":"마켓플레이스","plugin_trader_total_assets":"아이템","plugin_trader_owners_count":"소유자","plugin_trader_sales":"판매(24h)","plugin_trader_rank":"랭크 #{{rank}}","plugin_trader_info":"정보","plugin_trader_website":"웹사이트","plugin_trader_community":"커뮤니티","plugin_savings":"저금","plugin_savings_asset":"자산","plugin_savings_apr":"APR","plugin_savings_wallet":"월렛","plugin_savings_operation":"진행","plugin_savings_amount":"금액","plugin_savings_deposit":"입금","plugin_savings_swap_token":"스왑 {{token}}","plugin_savings_withdraw_token":"출금 {{token}}","plugin_savings_withdraw":"철회","plugin_savings_process_deposit":"입금 진행","plugin_savings_process_withdraw":"철회 진행","plugin_savings_no_protocol":"입금 프로토컬 찾지 않습니다.","plugin_trader_swap":"스왑","plugin_trader_wrap":"랩","plugin_trader_swap_from":"From","plugin_trader_swap_receive":"구매","plugin_trader_unwrap":"언랩","plugin_trader_buy":"구매","plugin_trader_no_data":"데이터 없음","plugin_trader_tab_market":"일반","plugin_trader_tab_price":"가격","plugin_trader_tab_exchange":"교환","plugin_trader_tab_activities":"활동","plugin_trader_nft_items":"NFTs","plugin_trader_table_nft":"NFT","plugin_trader_table_method":"방법","plugin_trader_table_value":"값","plugin_trader_table_from":"보낸 사람","plugin_trader_table_to":"받는 사람","plugin_trader_table_time":"시간","plugin_trader_error_amount_absence":"수액 입력","plugin_trader_error_insufficient_balance":"{{symbol}}잔액 부족","plugin_trader_error_insufficient_lp":"유동성 부족","plugin_trade_error_input_amount_less_minimum_amount":"입력 금액은 최소 금액 이하입니다.","plugin_trader_slippage_tolerance":"슬리피지 톨러런스:","plugin_trader_gas_fee":"기스비","plugin_trader_unlock_symbol":"{{symbol}} 언락","plugin_trader_unlock_tips":"{{provider}}에게 {{symbol}} 이용할 수 있는 스마트 컨트랙트 권한을 줘야 합니다. 토큰당 이 작업을 한번만 수행하면 됩니다.","plugin_trader_swap_amount_symbol":"스왑 {{amount}} {{symbol}} ","plugin_trader_confirm_from":"From","plugin_trader_confirm_to":"To","plugin_trader_confirm_slippage_tolerance":"슬리피지 허용 범위","plugin_trader_confirm_tx_cost":"(${{usd}})","plugin_trader_confirm_minimum_received":"촤소 받는 수액","plugin_trader_confirm_tips":"최대 가격 슬리피지를 너무 낮게 설정하면 가격 변동으로 인해 거래가 실패할 수 있습니다.","plugin_trader_price_impact_warning_tips":"슬리피지 허용 범위 나무 낮으면 거래가 실패할 수 있습니다.","plugin_trader_price_impact_too_high_tips":"가격 파동이 높습니다. {{impact}}보다 높습니다.","plugin_trader_confirm_swap":"스왑 확인","plugin_trader_update":"업데이트","plugin_trader_price_impact":"가격 파동","plugin_trader_price_image_value":"가격 파동 (-{{percent}})","plugin_trader_slippage_warning":"현재 슬리피지 허용 범위 안에 10% 적게 받을 수 있습니다.","plugin_trader_confirm_price_impact":"가격 파동 {{percent}} 확인","plugin_trader_max_slippage":"최대 슬리피지","plugin_trader_gas_setting_instant":"즉시","plugin_trader_gas_setting_high":"높음","plugin_trader_gas_setting_medium":"보통","plugin_trader_gas_setting_standard":"표준","plugin_trader_gas_setting_fast":"빠름","plugin_trader_gas_setting_custom":"커스텀","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_tx_cost_usd_new":"({{usd}})","plugin_trader_tx_cost_very_small":"({{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"유동성 부족","plugin_trader_no_trade":"거래를 선택하세요","plugin_trader_swap_risk":"스왑 리스크","plugin_trader_gas":"GAS","plugin_poll_display_name":"플러그인: 투표","plugin_poll_question_hint":"질문하기","plugin_poll_options_hint":"항목","plugin_poll_length":"투표 시간","plugin_poll_length_days":"일","plugin_poll_length_hours":"시간","plugin_poll_length_minutes":"분","plugin_poll_length_unknown":"미지","plugin_poll_create_new":"새로운 투표 만들기","plugin_poll_select_existing":"기존 투표 선택","plugin_poll_send_poll":"투표 보내기","plugin_poll_status_closed":"종료됨","plugin_poll_status_voting":"투표 중","plugin_poll_status_voted":"투표 완료","plugin_poll_deadline":"{{time}} 남은 시간","plugin_collectibles_name":"수집품","plugin_collectibles_description":"OpenSea 및 Rarible에서 수집품의 정보를 전시하고 소셜 미디어에서 오버합니다.","plugin_infra_descriptor_nft_approve_title":"{{action}} NFT 컨트랙트","plugin_infra_descriptor_nft_approve":"{{action}} {{symbol}} NFT 컨트랙트","plugin_infra_descriptor_nft_approve_success":"{{action}} {{symbol}} NFT 컨트랙트 성공","plugin_infra_descriptor_nft_revoke_success":"{{action}} {{symbol}} 승인 성공","plugin_infra_descriptor_nft_approve_fail":"{{action}} NFT 컨트랙트 실패","plugin_infra_descriptor_nft_transfer_title":"NFT 전송","plugin_infra_descriptor_nft_transfer_fail":"NFT 전송 실패","plugin_infra_descriptor_nft_transfer_success":"{{symbol}} NFT 전송 성공","plugin_infra_descriptor_nft_transfer":"{{symbol}} NFT 전송","plugin_infra_descriptor_token_revoke":"{{symbol}}에 대한 승인 취소","plugin_infra_descriptor_token_transfer_title":"토큰 전송","plugin_infra_descriptor_token_transfer":"{{- tokenAmountDescription}} 발송","plugin_infra_descriptor_token_transfer_fail":"토큰 발송 실패","plugin_infra_descriptor_token_transfer_success":"{{- tokenAmountDescription}} 발송 성공","plugin_infra_descriptor_token_revoke_title":"토큰 취소","plugin_infra_descriptor_token_revoke_success":"승인 취소 성공","plugin_infra_descriptor_token_revoke_fail":"토큰 컨트렉트 승인 취소 실패","plugin_infra_descriptor_token_approve_title":"토큰 언락","plugin_infra_descriptor_token_approve":"{{- tokenAmountDescription}} 언락","plugin_infra_descriptor_token_approve_success":"{{- tokenAmountDescription}} 언락 성공","plugin_infra_descriptor_token_revoke_but_set_positive_cap":"{{spender}} 에 대해 {{- tokenAmountDescription}} 을(를) 승인했습니다. 해당 토큰을 취소하려면 맞춤형 지출 한도 금액을 0으로 유지한 후 다시 시도하세요.","plugin_infra_descriptor_token_approve_but_set_zero_cap":"{{symbol}} 승인하지 않습니다. 지출 한도 0으로 설치하지 마시고 다시 시도하세요.","plugin_infra_descriptor_token_fail":"토큰 컨트렉트 언락 실패","plugin_infra_descriptor_token_deposit_title":"토큰 입금","plugin_infra_descriptor_token_deposit":"{{- tokenAmountDescription}} 입금","plugin_infra_descriptor_token_deposit_success":"{{- tokenAmountDescription}} 입금 성공","plugin_infra_descriptor_token_deposit_fail":"{{symbol}} 입금 실패","plugin_infra_descriptor_token_withdraw_title":"토큰 출금","plugin_infra_descriptor_token_withdraw":"{{- tokenAmountDescription}} 출금","plugin_infra_descriptor_token_withdraw_success":"{{- tokenAmountDescription}} 출금 성공","plugin_infra_descriptor_token_withdraw_fail":"{{symbol}} 출금 실패","plugin_infra_descriptor_mask_box_purchase_title":"Maskbox NFT 구매","plugin_infra_descriptor_mask_box_purchase_success":"{{- tokenAmountDescription}}로 Maskbox NFT 구매 성공","plugin_infra_descriptor_mask_box_purchase":"Maskbox NFT 구매","plugin_infra_descriptor_mask_box_purchase_fail":"Maskbox NFT 구매 실패","plugin_infra_descriptor_gitcoin_donate_title":"기증","plugin_infra_descriptor_gitcoin_donate":"{{- amount}}{{symbol}} 기증 완료","plugin_infra_descriptor_gitcoin_submitted":"거래 제출 완료","plugin_infra_descriptor_gitcoin_donate_success":"{{- amount}}{{symbol}} 기증 완료","plugin_infra_descriptor_gitcoin_donate_fail":"거래 실패","plugin_snapshot_info_title":"정보","plugin_snapshot_info_strategy":"전략","plugin_snapshot_info_author":"저자","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"시작 날짜","plugin_snapshot_info_end":"종료 날짜","plugin_snapshot_info_snapshot":"스냅숏","plugin_snapshot_info_dao":"DAO","plugin_snapshot_description":"소셜 미디어에서 직접 제안을 표시하고 투표하기","plugin_snapshot_result_title":"결과","plugin_snapshot_votes_title":"투표","plugin_snapshot_votes_yourself":"You","plugin_snapshot_no_power":"파워없음","plugin_snapshot_vote_success":"투표가 시작되었습니다.","plugin_snapshot_vote_failed":"투표가 실패하면 다시 시도하세요.","plugin_snapshot_vote":"투표","plugin_snapshot_vote_choice":"선택","plugin_snapshot_vote_power":"투표 파워","plugin_snapshot_vote_title":"투표하세요.","plugin_snapshot_my_vote":"나의 투표","plugin_snapshot_space_info_followers_count":"{{followersCount}} 맴버","plugin_snapshot_proposal_not_start":"시작 시간 {{date}}","plugin_snapshot_proposal_started":"종료 시간 {{date}} ","plugin_snapshot_proposal_ended":"{{date}} 종료됨","plugin_snapshot_proposal_no_results":"일치하는 결과가 없습니다.","plugin_snapshot_space":"스페이스","plugin_snapshot_space_join":"참가","plugin_snapshot_space_view":"살펴보기","plugin_snapshot_proposal":"프로포절","plugin_snapshot_progress":"진행","plugin_snapshot_load_failed":"Snapshot API 시비스 고장으로 인해 로딩 실패","plugin_snapshot_vote_confirm_dialog_title":"투표 확인","plugin_snapshot_vote_confirm_dialog_choice":" 「{{ choiceText }}」 투표하시겠습니까?","plugin_snapshot_vote_confirm_dialog_warning":"이 조작은 취소할 수 없습니다.","plugin_snapshot_current_result_title":"현재 결과","plugin_snapshot_download_report":"다운로드 리포트","plugin_pets_name":"Non-F 친구","plugin_pets_description":"#NFT 무한한 가능성을 탐색합니다.","wallet_verify_persona_sign":"페르소나 사인","wallet_verify_has_bound":"이 월렛은 이미 {{currentPersona}} 연동되어 있습니다. 다른 월렛으로 변경하세요.","wallet_verify_persona_name":"{{personaName}} 사인","wallet_verify_empty_alert":"월렛을 연결하세요.","wallet_verify_persona_sign_intro":"데이터 유효성을 보장하기 위해 페로소나로 사인하세요.","waller_verify_wallet_sign_intro":"두 가지 간단한 단계를 거치면 Next의 <br/> 서비스를 통해 디지털 ID를 소유, 확인 및 활용할 수 있습니다. 언제든지 쉽게 연결을 끓을 수 있습니다.","popups_welcome_to_mask_network":"환영합니다","popups_persona_description":"소셜 미디어 게시물과 메시지를 암호화합니다.","popups_add_wallet":"월렛 추가","popups_add_wallet_description":"Mask Wallet으로 거래 및 자산을 안정하게 보관합니다.","popups_add_persona_description":"페르소나로 소셜 미디어 게시글 맟 메시지를 암호화하거나 복호화합니다.","popups_create_a_new_wallet_title":"새로운 월렛 만들기","popups_generate_a_new_wallet_address":"새로운 월렛 주소 생성","popups_generate_a_new_persona":"새로운 페르소나 생성","popups_import_wallet":"월렛 불러오기","popups_import_wallets":"월렛 불러오기","popups_import_wallets_description":"니모닉 문구, 개인키 및 키스토어 파일을 지원합니다.","popups_import_persona_description":"아이디 코드, 개인키, 로컬 백업이나 클라우드 백업으로 개인 데이터 접근을 지원합니다.","popups_lock_wallet":"로컬 월렛","popups_wallet_settings":"월렛 설정","popups_verify_persona_sign_success":"페르소나 사인 성공","popups_verify_persona_sign_failed":"페르소나 사인 실패","popups_verify_wallet_sign_success":"월렛 사인 성공","popups_verify_wallet_sign_failed":"월렛 사인 실패","popups_profile_photo":"프로필 사진","popups_public_key":"공개 키","popups_create_persona":"페르소나 만들기","popups_restore_and_login":"등록 또는 로그인","popups_name":"이름","popups_connect_social_tips":"소셜 미디어 계정을 연결하기","popups_save_successfully":"저장 성공","popups_save_failed":"저장 실패","popups_display_web3_address_tips":"웹3 프로필 페이지에 다음 주소를 표시하고 팁을 받는 데 사용합니다.","popups_verify_account_tips":"자신의 페르소나를 연결하고 확인한 후, 웹3 풋프린트를 표시하거나 팁을 받기 위한 관련 주소를 설정할 수 있습니다.","popups_other_social_accounts_tips":"<strong>Instagram,</strong> <strong>Facebook,</strong>및 <strong>Minds,</strong>과 같은 다른 소셜 네트워킹 플랫폼은 Twitter의 Next.ID 인증 연결과 같은 검증된 관계가 없습니다. <br /> <br /> 이러한 플랫폼에서 계정과 페르소나를 연결할 때 암호화된 게시물 전송만 지원합니다.","popups_empty_wallet_proofs_tips":"관련된 월렛이 없습니다. <strong> 월렛 추가.</strong>","popups_social_account":"소셜 계정","popups_connected_wallets":"연결된 월렛","popups_change_owner":"소유자 변경","popups_wallet_connected_status$connected":"연결됨","popups_wallet_connected_status$unconnected":"연결되지 않음","popups_loading":"로딩 중","popups_connect_your_web2_social_accounts":"소셜 미디어 계정을 연결하기","popups_connect_social_account":"소셜 계정 연결","popups_disconnect_success":" 연결 해제 성공 ","popups_disconnect_failed":"연결 해제 실패","popups_new_disconnect_warning_alert":"트위터 계정 @<strong>{{account}}</strong>을 Next.ID에 의해 확인하지 않습니다. 트위터에서 @<strong>{{account}}</strong>로 변경하세요.","popups_disconnect_other_warning_alert":"이 조작을 하면 이 페르소나가 암호화된 메시지를 보내는 데 영향을 미칩니다.","popups_verify_account":"계정 인증","popups_disconnect_wallet_tip":"월렛 <strong>{{address}}<strong/>에서 {{persona}} 의 연결을 해제하시겠습니까?","popups_add_and_verify_wallet":"월렛 추가 및 인증","popups_add_derive":"Add Derive","popups_rename":"이름 변경","popups_speed_up_transaction":"거래 속도 향상","popups_cancel_transaction":"거래 취소","popups_import_the_wallet":"월렛 불러오기","popups_delete_wallet":"월렛 연결 해제","popups_release_bind_wallet_title":"월렛 연결을 해제하시겠습니까?","popups_release_bind_wallet_tips":"월렛 <strong>{{identity}}</strong>에서 {{personaName}} 의 연결을 해제하시겠습니까？","popups_create_wallet":"월렛 만들기","popups_back_up_the_wallet":"월렛 백업","popups_recovery_wallet":"월렛 복구","popups_wallet_setting":"월렛 설정","popups_wallet_settings_change_network":"네트워크 전환","popups_wallet_settings_auto_unlock_time":"Auto-lock 시간","popups_wallet_settings_auto_unlock_time_mins":"{{time}} 분","popups_wallet_settings_auto-unlock_time_hour_one":"{{count}} 시간","popups_wallet_settings_auto-unlock_time_hour_other":"{{count}} 시간","popups_wallet_settings_auto_unlock_time_title":"Auto-lock","popups_wallet_settings_change_payment_password":"결제 비밀번호 변경","popups_wallet_settings_show_private_key":"개인 키 보기","popups_wallet_settings_backup_wallet":"지갑 백업","popups_wallet_settings_enter_payment_password":"결제 비밀번호 입력","popups_wallet_settings_export_private_key_title":"월렛을 선택하여 개인 키를 내보내기","popups_wallet_settings_rename_tips":"월렛 이름은 3~18자 이내로 입력해주세요.","popups_wallet_settings_name_exists":"이미 존재된 월렛 이름입니다.","popups_wallet_settings_remove_wallet":"월렛 삭제","remove_wallet_title":"월렛을 삭제하시겠습니까?","remove_wallet_message":"현재 월렛은 (<bold>{{wallet}}</bold>) SmartPay의 관리자 (<bold>{{other_wallets}}</bold>) 월렛입니다.<br/> 이 월렛을 삭제하면 SmartPay 월렛도 같이 삭제될 수 있습니다.","popups_wallet_settings_are_you_sure_remove_wallet":"이 월렛을 삭제하시겠습니까?","popups_wallet_settings_address_exists":"이 월렛 주소가 이미 존재합니다.","popups_wallet_settings_auto_lock_tips":"월렛이 자동으로 잠기기 전까지의 시간을 설정해 주시기 바랍니다.","popups_wallet_settings_minutes":"분","popups_wallet_settings_auto_lock_number_only":"이 부분은 숫자가 필요합니다.","popups_wallet_settings_current_management_account":"현재 관리자 계정","popups_wallet_settings_local_persona_or_wallet_only":"로컬 페르소나나 월렛만 가능합니다.","popups_wallet_connected_sites":"연결된 사이트","popups_wallet_connected_sites_description":"월렛 이름은 이미 웹사이트에 연결됩니다. 연결된 웹사이트는 회원님의 계정 주소를 확인할 수 있습니다.","popups_wallet_disconnect_confirm":"연결을 끊으시겠습니까? 사이트 기능을 사용할 수 없을 수 있습니다.","popups_wallet_disconnect_all":"모두 계정 연결 해제","popups_wallet_disconnect_site_success":"연결 해제 성공","popups_gas_fee_settings":"기스비 설정","popups_assets":"자산","popups_send":"발송","popups_set_the_payment_password":"결재 비밀번호 설정","popups_set_the_payment_password_title":"결제 비밀번호 설정","popups_log_out":"로그아웃","popups_following_permissions":"플러그인 ({{pluginName}})( {{pluginURL}} 에 호스팅됩니다) 아래의 권한을 요청합니다.","popups_permissions":"사용 권한","popups_sites":"사이트","popups_mask_requests_permission":"Mask가 아래 권한을 요청합니다.","popups_grant":"그랜트","popups_no_wallets_found":"월렛에서 Mask가 없습니다.","popups_no_persona_found":"페르소나가 없습니다","popups_permission_request":"권한 요청","popups_permission_request_content":"계속하려면 Mask Network가 다음의 URL 접근 권한이 필요합니다:","popups_permission_request_content2":"이것은 마스크 네트워크에 요청된 기능을 올바르게 제공하는 데 필요한 기능을 제공합니다.","popups_welcome":"환영합니다","popups_wallet_token":"토큰","popups_wallet_collectible":"NFTs","popups_wallet_collectible_added_successfully":"추가 성공","popups_wallet_dialog_legacy_wallet_tip":"기존 월렛이 탐지되었습니다. 모두 복구하려면 확인을 클릭하세요.","popups_wallet_set_payment_password":"결제 비밀번호 설정","popups_wallet_create_payment_password":"비밀번호 생성","popups_wallet_payment_password":"결제 비밀번호","popups_wallet_set_up_payment_password":"결제 비밀번호 설정","popups_wallet_old_payment_password":"지난 결제 비밀번호","popups_wallet_new_payment_password":"새로운 결제 비밀번호","popups_wallet_confirm_password":"비밀번호 확인","popups_wallet_new_password_not_match":"새로운 비밀번호가 일치하지 않습니다","popups_wallet_create_payment_password_tip":"최소 8 글자 이상 이용하세요","popups_wallet_set_payment_password_successfully":"결제 비밀번호 설정 성공","popups_wallet_term_of_service_agree_part_1":"계속하면 다음을 동의합니다:","popups_wallet_term_of_service_agree_part_2":"<agreement>서비스 약관</agreement>과 <policy>개인정보처리방침</policy>을 동의합니다","popups_wallet_reset_tips":"결제 비밀번호를 잊었습니까?","popups_wallet_payment_password_tip":"결제 암호는 8-20자 사이여야 하여 숫자, 문자 및 특수 문자 중 2 가지가 포함되어야 합니다.","create_wallet_incorrect_payment_password":"잘못된 결제 비밀번호","popups_wallet_start_up_tip":"월렛 연결. 새로운 월렛을 만들거나 시드 문구로 기존 월렛을 복구하세요.","popups_wallet_name_placeholder":"1-12 자 입력하세요","popups_wallet_name_mnemonic":"니모닉","popups_wallet_name_json_file":"Json 파일","popups_wallet_name_private_key":"개인 키","popups_wallet_name_keystore":"키스토어","popups_wallet_name_mnemonic_placeholder":"12나 24 글자의 니모닉 단어를 입력하세요.","popups_wallet_name_origin_password":"기존 비밀번호","popups_wallet_tab_assets":"자산","popups_wallet_tab_collectibles":"NFTs","popups_wallet_tab_activity":"활동","popups_wallet_derivation_path":"파생 경로 ({{ path }})","popups_wallet_transfer_to":"To","popups_wallet_next":"다음","popups_wallet_backup_wallet":"월렛 백업","popups_wallet_backup_json_file":"JSON 파일","popups_wallet_backup_private_key":"개인 키","popups_wallet_reset_wallet":"월렛 리셋","popups_wallet_reset_wallet_description_1":"결제 비밀번호는 로컬에 저장되어 있으며 월렛 잠금을 해제하기 위해 여러 번 시도할 수 있습니다.","popups_wallet_reset_wallet_description_2":"결제 비밀번호를 잊어버린 경우 \'RESET\'을 입력하여 지갑을 재설정할 수 있습니다. <strong>이 작업을 수행하면 이전 월렛이 모두 지워질건데 주의하시길 바랍니다.</strong>","popups_wallet_reset_wallet_description_3":"참고: 마지막 불러오기에서 니모닉 문구를 사용하면 해당 니모닉 문구에서 파생된 월렛을 복구할 수 있습니다.","popups_wallet_backup_json_file_confirm_password_tip":"이 파일은 현재의 비밀번호로 암호화되어 저장되었습니다. 월렛을 불러올 때 이 파일 해독을 위해 현재의 비밀번호가 필요합니다.","popups_wallet_backup_private_key_tip":"다른 사람에게 개인 키를 보여주면 안됩니다. 개인 키은 EVM 호환 체인을 지원하는 모든 월렛에서 해독없이 사용할 수 있습니다.","popups_wallet_backup_input_password":"비밀번호 입력","popups_wallet_logout_input_payment_password":"현재 비밀번호를 입력하세요.","popups_wallet_backup_json_file_drag_tip":"파일은 여기서 끌어들이세요.","popups_wallet_backup_json_file_click_tip":"클릭 또는 파일을 여기로 끌어들이세요","popups_wallet_backup_mnemonic_title":"니모닉 단어를 적어두세요","popups_wallet_backup_mnemonic_tips":"다음 단어를 정확한 순서로 적어주세요. 안전하게 보관하고 다른 사람과 공유하지 마세요!","popups_wallet_backup_mnemonic_view_tips":"탭하고 니모닉 단어를 볼 수 있습니다. <br /> 화면을 보는 사람이 없는지 확인합니다.","popups_wallet_backup_mnemonic_hidden":"니모닉 단어 숨기기","popups_wallet_backup_private_key_view_tips":"탭하고 개인키를 볼 수 있습니다. <br /> 화면을 보는 사람이 없는지 확인합니다.","popups_wallet_backup_copy_private_key":"개인 키 복사","popups_wallet_enter_your_wallet_name":"월렛 이름 입력","popups_wallet_delete_tip":"이 월렛을 삭제하시겠습니까? 시드 문구가 없으면 월렛을 복구할 수 없습니다.","popups_smart_pay_delete_tip":"이 월렛 {{management}}은 SmartPay 월렛 {{addresses}}의 관리자 계정입니다. 삭제되면 SmartPay 월렛을 통해 블록체인과 상호작용할 수 없습니다.","popups_smart_pay_delete_tip_confirm":"이 월렛을 삭제하시겠습니까?","popups_wallet_confirm_payment_password":"지불 비밀번호로 확인하세요.","popups_wallet_token_buy":"구매","popups_wallet_token_send":"발송","popups_wallet_token_swap":"스왑","popups_wallet_disconnect_failed":"월렛 연결 해제 실패","popups_wallet_view_on_explorer":"Explorer에서 보기","popups_wallet_gas_fee_settings":"기스비 설정","popups_wallet_gas_fee_settings_description":"기스비는 이더리움의 마이너에게 지불하는 겁니다. 마이너가 더 높은 가스비로 거래를 포장하기를 선호합니다. 낮은 가스비로 거래가 실패될 수 있고 지불된 가스비 반환될 수 없습니다.","popups_wallet_gas_fee_settings_low":"낮음","popups_wallet_gas_fee_settings_medium":"보통","popups_wallet_gas_fee_settings_high":"높음","popups_wallet_gas_fee_settings_instant":"즉시","popups_wallet_gas_fee_settings_custom":"커스텀","popups_wallet_gas_fee":"가스비","popups_wallet_gas_price_too_low":"가스 가격이 너무 낮으면 거래가 실패할 수 있습니다.","popups_wallet_invalid_gas_limit":"가스 한도는 21,000 이상 15M 이하이어야 합니다.","popups_wallet_priority_fee_is_zero":"우선 기스비는 0보다 높아야 합니다. ","popups_wallet_priority_fee_is_too_high":"현재 네트워크 컨디션에 대한 최대 가스비가 너무 높습니다.","popups_wallet_priority_fee_is_too_low":"네트워크 컨디션에 대한 최대 우선 가스비는 매우 낮습니다.","popups_wallet_max_fee_is_too_low":"최대 가스비는 기초 가스비 {{minimum}} Gwei에 비해 높아야 합니다. ","popups_wallet_gas_price_estimate_second":"< {{seconds}} 초","popups_wallet_gas_price_current_base_fee":"현재 기초 기스비는 {{baseFee}} Gwei","popups_wallet_gas_max_priority_fee_too_low":"네트워크 컨디션에 대한 최대 우선 가스비는 매우 낮습니다.","popups_wallet_gas_fee_settings_usd":" ≈ ${{usd}}","popups_wallet_gas_fee_settings_gas_limit":"가스 한도","popups_wallet_gas_fee_settings_max_priority_fee":"최대 우선 가스비","popups_wallet_gas_fee_settings_max_fee":"최대 가스비","popups_wallet_gas_fee_settings_min_gas_limit_tips":"최소한 가스비는 {{limit}} 입니다","popups_wallet_multiple_requests":"멀티 거래 요청 {{index}} / {{total}}","popups_wallet_reject_all_requests":"{{total}} 거래 거부","popups_wallet_view_full_detail_transaction":"거래 세부 내역 보기","popups_wallet_transaction_function_name":"Function: {{name}}","popups_wallet_speed_up_transaction_tips":"더 많은 기스비를 지불하여 지난 거래를 최소합니다.","popups_wallet_cancel_transaction_tips":"더 많은 기스비를 지불하여 지난 거래를 최소합니다.","popups_wallet_signature_request_title":"시그너쳐 요청","popups_wallet_signature_request":"서명","popups_wallet_signature_request_message":"메시지","popups_wallet_contract_interaction":"컨트렉트 인터액션","popups_wallet_token_unlock_permission":"토큰 언락 권한","popups_wallet_token_infinite_unlock":"무한 언락","popups_wallet_contract_interaction_transfer":"전송","popups_wallet_contract_interaction_gas_fee":"기스비","popups_wallet_contract_interaction_edit":"수정","popups_wallet_contract_interaction_total":"총액","popups_wallet_password_not_match":"비밀번호가 일치하지 않습니다.","popups_wallet_password_length_error":"비밀번호 길이가 잘못되었습니다.","popups_wallet_password_change_successful":"결제 비밀번호 변경 성공","popups_wallet_unlock_wallet":"월렛 언락","popups_wallet_unlock_error_password":"잘못된 비밀번호","popups_wallet_persona_log_out_error_payment_password":"잘못된 결제 비밀번호","popups_wallet_activity_to_address":"받는 주소: {{address}}","popups_wallet_transfer_error_tip":"네트워크 연결 실패나 컨트렉트 오류때문에 발송 거래가 실패되었습니다.","popups_wallet_transactions_pending":"대기중...","popups_wallet_re_send":"다시 보내기","popups_wallet_choose_token":"토큰 선택","popups_wallet_gas_price":"가스 가격","popups_wallet_done":"완료","popups_wallet_recovered":"월렛 복구됨","popups_wallet_no_transactions":"거래 내역이 없습니다","popups_wallet_more_expand":"잔액 $1 미만인 토큰 표시","popups_wallet_more_collapse":"잔액 $1 미만인 토큰 숨기기","popups_wallet_change_owner":"소유자 변경","popups_wallet_current_managed_accounts":"현재 관리자 계정","popups_wallet_set_a_new_manage_account":"새로운 관리자 계정 설정","popups_wallet_wallets":"월렛","popups_missing_parameter_caption":"이 페이지를 닫아세요.","popups_persona_connect_to":"{{type}} 에 연결하기","popups_persona_to_be_verified":"인증 대기중","popups_persona_disconnect":"연결 해제","popups_persona_disconnect_confirmation":"연결 해제 확인","popups_new_persona_disconnect_confirmation":"연결 해제를 확인하시겠습니까?","popups_disconnect_persona":"소셜 계정 연결 해제","popups_new_persona_disconnect_confirmation_description":"페르소나와의 트위터의 인증 관계는 Next.ID에 기록되지 않습니다.<br /> <br /> 이 작업을 수행하면 다음과 같은 페르소나 관련 기능에 영향을 미칩니다.<br /> <li> 암호화된 메시지를 보내기.</li> <li> \'웹3 브라우저\' 기능.</li><br/>","popups_persona_disconnect_confirmation_description":"이 페르소나 인증 기록은 더 이상 인증 프로필 페이지에 표시되지 않습니다.\\n 마스크 친구는 더 이상 이 페로소나로 암호화된 메시지를 사용자에게 보내거나\\n 웹3 제품을 확인할 수 없습니다.","popups_persona_disconnect_tips":"트위터 계정 @<strong>{{- identity}}</strong> 및 {{- personaName}} 간의 확인된 연결을 제거하시겠습니까?","popups_wallet_disconnect_tips":"연결된 월렛 <strong>{{wallet}}</strong> 제거하시겠습니까?","popups_persona":"페르소나","popups_twitter_id":"트위터 ID","popups_persona_logout":"로그아웃","popups_persona_disconnect_tip":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 해독할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","popups_persona_disconnect_manage_wallet_warning":"주의: 이 페르소나 {{persona}} 는 SmartPay 월렛 <span>{{addresses}}</span>의 관리자 계정입니다. 페르소나를 로그아웃한 후에 SmartPay 월렛을 사용하여 블록체인과 상호작용할 수 없습니다.","popups_persona_persona_name_exists":"이미 존재된 페르소나입니다","popups_persona_sign_request_title":"시그너쳐 요청","popups_persona_sign_request_message":"메시지","popups_password_do_not_match":"잘못된 백업 비밀번호","popups_backup_password":"백업 비밀번호","popups_rename_error_tip":"최대 길이는 {{length}} 자입니다.","popups_select_wallet_to_verify_tips":"Mask Network 계정을 연결하여 월렛을 사용합니다.","popups_wait_for_provider_connect_title":"{{providerType}} 기다리는 중","popups_wait_for_provider_connect_tips":"{{providerType}} 월렛 연결 중","popups_wait_for_provider_connect_timeout":"월렛 요청 시간 초과","popups_cancel_connect_provider":"연결 작업은 제3자 월렛에서 최소되었습니다.","popups_not_connected_third_party_wallet_title":"연결되지 않았습니다","popups_not_connected_third_party_wallet_tips":"{{providerType}} 월렛 찾지 못합니다.","popups_not_connected_third_party_wallet_description":"Metamask 월렛을 설치하고 첫 월렛을 설정하세요.","popups_choose_another_wallet":"다른 월렛을 선택하세요","popups_verify_wallet_description":"월렛을 추가하면 Next.ID 서비스를 통해 디지털 ID를 소유, 열람 및 활용할 수 있습니다. 월렛 소유권을 증명하기 위해 거래에 서명하고 인증해야 합니다.","popups_verify_wallet_bounded_tips":"이 월렛은 현재 페르소나 {{persona}} 에 연결됩니다.","popups_verify_wallet_sign_success_tips":"월렛 사인 성공","popups_verify_wallet_sign_fail_tips":"사인 살패, 다시 시도하기","popups_verify_wallet_bind_fail_tips":"월렛 추가 실패, 다시 시도하기","popups_verify_wallet_congratulation_tips":"{{persona}} 및 {{wallet}} 연결 성공","popups_switch_Wallet":"월렛 변경","popups_encrypted_friends":"연락처","popups_encrypted_friends_search_placeholder":"Next.ID 검색, Twitter, Lens, ENS, 주소","popups_encrypted_friends_search_no_result":"검색 결과가 없습니다.","popups_encrypted_friends_no_friends":"암호화된 연락처가 없습니다. 검색해 보세요.","popups_encrypted_friends_add_friends":"추가","popups_encrypted_friends_no_associated_accounts":"관련 계정 없음","popups_encrypted_friends_deleted_successfully":"삭제 성공","popups_encrypted_friends_added_successfully":"추가 완료","popups_select_wallet":"월렛 선택","popups_switch_persona":"페르소나 전환","popups_recovery":"복구","popups_next_id":"Next.ID","popups_wallet_group_title":"월렛 그룹 #{{index}}","popups_wallet_imported_group_title":"월렛 불러오기","popups_backup_persona":"페르소나 백업","popups_persona_rename_tips":"페르소나 이름은 1~24자 이내로 입력해주세요.","popups_backup_password_rules":"비밀번호에는 대문자와 소문자, 특수 문자 및 숫자가 포함되어야 합니다.","popups_backup_password_rules_tips":"백업 비밀번호는 대문자, 소문자, 특수 문자 및 숫자를 포함하여 8-20자여야 합니다.","popups_backup_password_tips":"백업 비밀번호를 설정하고 개인키를 내보낼 수 있습니다.","popups_backup_password_inconsistency":"입력한 두 개의 암호가 일치하지 않습니다.","popups_backup_password_incorrect":"잘못된 비밀번호.","popups_backup_password_invalid":"백업 비밀번호를 입력하고 페르소나 개인키를 내보낼 수 있습니다.","popups_backup_password_set_successfully":"백업 비밀번호가 설정되었습니다.","popups_export_private_key_tips":"개인키만 수출이 가능합니다. 다른 데이터 수출할 수 없습니다. 더 많은 데이터를 확인하려면 설정으로 들어가세요: <a>Global Backup </a>","popups_export_json_file_tips":"이 파일은 현재의 비밀번호로 암호화되어 저장되었습니다. 월렛을 불러올 때 이 파일 해독을 위해 현재의 비밀번호가 필요합니다.","popups_export_keystore_tips":"이 JSON 파일은 현재 결제 비밀번호로 암호화되어 있습니다. 이 월렛을 불러올 때 복호화에 동일한 비밀번호가 필요합니다.","popups_log_out_tips":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 복호화할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","popups_log_out_with_smart_pay_tips_one":"주의: 이 페르소나 {{persona}} 는 SmartPay 월렛의 관리자 계정입니다. 페르소나를 로그아웃한 후에 SmartPay 월렛을 사용하여 블록체인과 상호작용할 수 없습니다.","popups_log_out_with_smart_pay_tips_other":"주의: 이 페르소나 {{persona}} 는 위에 있는 SmartPay 월렛들의 관리자 계정입니다. 페르소나를 로그아웃한 후에 SmartPay 월렛을 사용하여 블록체인과 상호작용할 수 없습니다.","popups_log_out_successfully":"로그아웃 성공","popups_log_out_failed":"로그아웃 실패","popups_profile_photo_image":"이미지","popups_profile_photo_nfts":"NFTs","popups_profile_photo_drag_file":"파일을 끌어서 여기에 놓으세요","popups_profile_photo_size_limit":"사이즈 한계: 10 MB","popups_profile_photo_browser_file":"브라우저 파일","popups_select_and_connect_wallet":"월렛 선택 및 연결","popups_set_avatar_successfully":"아바타 설정 성공","popups_set_avatar_failed":"아바타 설정 실패","popups_wallet_request_source":"소스 요청","popups_wallet_sign_message":"사인 메시지","popups_wallet_unlock_erc20_title":"회원님의 {{symbol}} 에 <br /> 액세스할 수 있는 권한을 부여하시겠습니까?","popups_wallet_unlock_erc20_tips":"권한 승인을 통해 다음의 컨트랙트에 따라<br /> 자산을 접근할 수 있습니다.","popups_wallet_unlock_erc20_placeholder":"최대 지불 제한 입력","popups_wallet_unlock_erc20_requested_by":"지불 제한을 요청하는 이용자:","popups_wallet_unlock_erc20_balance_tips":"이것은 제3자가 현재 잔액에서 {{amount}} {{symbol}} 을 사용하기를 허용합니다.","popups_wallet_unlock_erc20_balance_too_high_tips":"이를 통해 제3자가 한도액에 도달하거나 사용자가 지출 한도액을 취소할 때까지 토큰 잔액을 모두 사용할 수 있습니다. 만약 이것이 의도된 것이 아니라면, 지출 한도액을 낮추는 것을 고려하시길 바랍니다.","popups_wallet_unlock_erc20_revoke_tips":"기본 입력은 0으로 사용하는 경우 본 계약에 대한 승인이 취소됩니다.","popups_wallet_unlock_erc20_approve_amount":"금액 승인","popups_wallet_unlock_erc20_granted_to":"허용한 대상:","popups_wallet_unlock_erc721_title":"회원님의 {{symbol}} 에 <br /> 액세스할 수 있는 권한을 부여하시겠습니까?","popups_wallet_unlock_erc721_tips":"권한 승인을 통해 다음의 컨트랙트에 따라<br /> NFT를 접근할 수 있습니다.","popups_wallet_rpc_error":"네트워크나 RPC 제공자 오류입니다. 다시 시도하세요!","popups_wallet_gas_price_should_greater_than_zero":"가스 가격은 0보다 높어야합니다.","popups_settings_general":"일반","popups_settings_basic_setting":"기본 설정","popups_settings_language":"언어","popups_settings_appearance":"화면","popups_settings_supported_sites":"지원되는 사이트","popups_settings_backup_and_recovery":"백업 맟 복구","popups_settings_data_correlation":"데이터 수정","popups_settings_cloud_backup":"클라우드 백업","popups_settings_local_backup":"로컬 백업","popups_settings_restore_database":"데이터베이스 복원","popups_settings_restore_database_description":"이전의 데이터베이스 백업에서 복원하기","popups_settings_backup_password":"백업 비밀번호","popups_settings_support":"지원","popups_settings_feedback":"피드백","popups_settings_faq":"FAQ&투토리얼","popups_settings_website":"웹사이트","popups_settings_about":"알아보기","popups_settings_version":"버전","popups_settings_service_agreement":"서비스 약관","popups_settings_primary_policy":"개인정보처리방침","popups_settings_language_auto":"시스템에 따라 설정","popups_settings_appearance_default":"시스템에 따라 설정","popups_settings_appearance_light":"라이트","popups_settings_appearance_dark":"다크","popups_settings_select_language":"언어 선택","popups_settings_supported_sites_description":"Mask Network 플러그인이 웹 사이트에 주입할 수 있는 권한을 관리합니다. 이 플러그인을 끄면 이 사이트에서 더 이상 사용할 수 없습니다.","popups_settings_supported_website_one":"<strong>{{count}}<strong> 웹사이트","popups_settings_supported_website_other":"<strong>{{count}}<strong> 웹사이트","popups_settings_change_backup_password":"백업 비밀번호 변경","popups_settings_new_backup_password":"새로운 비밀번호","popups_settings_new_backup_password_error_tips":"새 비밀번호는 현재 비밀번호와 같을 수 없습니다.","popups_settings_backup_password_invalid":"숫자, 문자 또는 특수 문자가 부족합니다.","popups_settings_set_backup_password_tips":"백업 비밀번호를 설정하세요.","popups_settings_no_backup":"백업 없음","popups_settings_backup_on":"백업 시간 {{time}}","popups_settings_local_backup_exist":"이미 백업되었습니다.","popups_settings_cloud_backup_exist":"이메일/전화번호로 백업하였습니다.","popups_settings_not_set":"설정되지 않음","nft_wallet_label":"월렛","plugin_profile_no_wallets":"월렛 연결합니다. <br/>이 섹션은 암호화된 친구에게 표시됩니다.<br/>전시 내용에는 디지털 아트, 기부, 배지<br/>와 다른 온체인 공개 정보가 포함됩니다.","nft_input_address_label":"컨트랙트 주소 추가","nft_input_tokenid_label":"토큰 ID 입력","nft_owner_hint":"컨트랙트 조소가 잘못되거나 월렛에 해당 수집품이 없습니다.","nft_add_dialog_title":"수집품 추가","nft_add_button_label":"추가","nft_add_button_label_checking":"확인 중","nft_list_title":"NFT 아바타 설정","nft_wallet_change":"변경","nft_button_add_collectible":"수집품 추가","nft_avatar":"NFT PFP","web3_tab_hint":"주소를 찾을 수 없음","plugin_artblocks_not_active":"활성화되지 않는 프로젝트입니다.","plugin_artblocks_completed":"완료됨","plugin_artblocks_paused":"일시 정지","plugin_artblocks_collection":"수집품","plugin_artblocks_details":"디테일","plugin_artblocks_created_by":"제작자","plugin_artblocks_purchase":"구매","plugin_artblocks_purchasing":"구매 진행 중","plugin_artblocks_legal_text":"이 박스를 체크하면 ArtBlocks의 <terms>서비스 약관</terms>을 동의합니다.","plugin_artblocks_check_tos_document":"ToS 파일을 확인하세요","plugin_artblocks_price_per_mint":"민팅 가격(1 NFT)","plugin_artblocks_price_row":"가격:","plugin_artblocks_minted_row":"민팅 완료","plugin_artblocks_license_row":"라이센스:","plugin_artblocks_library_row":"라이브러리:","plugin_artblocks_website":"웹사이트","plugin_artblocks_infos":"정보","plugin_artblocks_chain":"체인","plugin_artblocks_blockchain_row":"불록체인:","plugin_artblocks_contract_row":"컨트랙트:","plugin_artblocks_smt_wrong":"오류가 발생합니다.","popups_wallet_disconnect_success":"월렛 연결 해제 성공","plugin_artblocks_share":"\'{{name}}\' 컬렉션에서 {{- price}} {{symbol}} 가격로 아름다운 예술품을 구매했습니다. @realMaskNetwork 설치하여 NFT를 구매해 보세요.","plugin_artblocks_share_no_official_account":"\'{{name}}\' 컬렉션에서 {{- price}} {{symbol}} 가격로 아름다운 예술품을 구매했습니다.","plugin_tips_disconnect_introduction":"월렛 <strong>{{address}}<strong/>에서 {{persona}} 의 연결을 해제하시겠습니까?","plugin_tips_not_evm_alert":"현재 팁 기능은 EVM 체인에서만 이용할 수 있습니다. 다른 체인은 앞으로 추가할 예정입니다.","plugin_artblocks_description":"Artblocks는 마음에 드는 스타일을 골라 작업비를 지불하고 무작위로 생성된 콘텐츠 버전이 알고리즘에 의해 생성돼 이더리움 계정으로 전송를 지원하는 겁니다.","plugin_artblocks_name":"Artblocks","plugin_ens_description":"소셜 미디어에서 ENS 검색 결과 전시를 최저화합니다.","plugin_ens_name":"ENS","nft_button_set_avatar":"NFT 아바타 설정","plugin_mask_box_name":"MaskBox","plugin_mask_box_description":"NFT 미스터리박스를 론칭하는 멀티체인 탈중앙화 플랫폼","plugin_transak_name":"Fiat On-Ramp","plugin_transak_description":"Fit On-Ramp 애그리게이터. Transak 지원을 통해 60개 이상의 국가에서 암호화폐를 구매할 수 있습니다.","popups_wallet_unsupported_network":"지원되지 않는 네트워크","plugin_default_title":"디폴트","plugin_provider_by":"제공자","plugin_enable":"플러그인 활성화","show_wallet_setting_button":"설정으로 가기","web3_profile_no_social_address_list":"인증된 사용자 주소 데이터 소스를 찾을 수 없습니다.","plugin_avatar_feature_general_user_name":"일반 사용자","plugin_avatar_feature_general_user_description":"공개 데이터 소스를 기반으로 NFT, 소셜 미디어 게시물 및 기타 거래 활동을 포함한 사용자의 Web3 발자국을 확인합니다.","plugin_avatar_feature_token_name":"토큰","plugin_avatar_feature_token_description":"실시간 암호화폐 가격, 시가총액, 거래량 등 확인합니다.","plugin_avatar_feature_nft_name":"NFT 컬렉션 ","plugin_avatar_feature_nft_description":"NFT 추세 정보, 핫 프로젝트, 주목할 만한 거래 등을 파악합니다.","plugin_web3_profile_feature_general_user_name":"일반 사용자","plugin_web3_profile_feature_general_user_description":"공개 데이터 소스를 기반으로 NFT, 소셜 미디어 게시물 및 기타 거래 활동을 포함한 사용자의 Web3 발자국을 확인합니다.","plugin_web3_profile_feature_nft_name":"NFT 컬렉션 ","plugin_web3_profile_feature_nft_description":"NFT 추세 정보, 핫 프로젝트, 주목할 만한 거래 등을 파악합니다.","decentralized_search_name":"DSearch","decentralized_search_description":"토큰 이름, NFT 컬렉션, ENS 도메인 또는 월렛 주소를 사용하여 검색 결과를 최적화합니다.","decentralized_search_feature_token_name":"토큰","decentralized_search_feature_token_description":"토큰을 찾을 때 최적화된 검색 결과를 가져옵니다.","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"최적화된 결과를 얻으려면 NFT 컬렉션 이름 또는 해당 심벌을 사용하여 검색하세요.","decentralized_search_feature_wallet_name":"ENS나 월렛 주소","decentralized_search_feature_wallet_description":"최적화된 결과를 얻으려면 ENS 도메인 또는 지갑 주소로 검색하세요.","applications_create_persona_hint":"이 기능을 사용하려면 페르소나를 만들고 계정을 확인하세요.","applications_create_persona_title":"페르소나","applications_create_persona_action":"페르소나 만들기","plugin_collectible_insufficient_balance":"잔액 부족","persona_boundary_create_persona":"페르소나 만들기","persona_boundary_connect_persona":"페로소나 연결하기","persona_boundary_verify_persona":"트위터 ID 인증","plugin_wallet_qr_code_with_wallet_connect":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스칸하세요.","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_select_provider_dialog_title":"월렛 연결","recent_transaction_success":"성공","recent_transaction_failed":"실패","wallet_status_pending_clear":"지우기","wallet_status_pending_one":"{{count}} 대기 중","wallet_status_pending_other":"{{count}} 대기 중","wallet_status_pending_clear_all":"모두 지우기","wallet_risk_warning_no_select_wallet":"월렛 아직 선택하지 않습니다.","wallet_risk_warning_dialog_title":"리스크 경고","wallet_risk_warning_content":"사용자 여러분께, <br/><br/>Mask Network에서 월렛 관련 플러그인을 사용할 경우, 다음과 같은 사용 위험을 확인해 주시기 바랍니다:<br/><br/>Mask Network는 비상업적인 무료 서비스를 제공합니다. 플러그인은 커뮤니티 회원 및 기타 제3자 디앱 팀에서 제공합니다. 탈중앙화된 네트워크의 자유 및 기타 불확실한 위험 요소로 인해 사용자는 월렛 니모닉 단어, 개인 키 등 민감한 정보를 적절하게 보호해야 합니다. 블록체인 컨트랙트 상호 작용 시 주의하시기 바랍니다. 제3자 디앱(플러그인) 으로 인한 위험은 제3자 디앱 자체에서 부담합니다.","wallet_risk_warning_confirm_tips":"확인 버튼을 클릭하면 위와 같이 발생할 수 있는 위험을 부담하는 것에 동의한다는 의미합니다.","wallet_risk_confirm_confirming":"확인 중","wallet_risk_confirm_failed":"확인 실패","wallet_name_length_error":"문자열에는 1자 이상의 문자가 포함되어야 합니다","add_collectibles_token_id_placeholder":"토큰 ID는 쉼표로 분리됩니다. 예시: 1223,1224,","plugin_wallet_solana_tips":"Phantom은 Solana에만 지원합니다.","plugin_wallet_blocto_tips":"Blocto는 Flow에만 지원합니다.","plugin_wallet_fortmatic_tips":"Fortmatic는 ETH 및 BNB에만 지원합니다.","plugin_wallet_support_chains_tips":"EVM 체인만 지원합니다. ETH, BNB chain, Polygon, Arb, Op 등.","plugin_wallet_connect_fortmatic":"Fortmatic 연결","plugin_wallet_choose_network":"네트워크 선택","plugin_disabled_tip":"특정 콘텐츠를 보려면 DAPP을 열어야 합니다.","manage_network":"네트워크 관리","network_management_add_network":"네트워크 추가","network_name":"네트워크 이름","rpc_url":"RPC URL","chain_id":"체인 ID","optional_currency_symbol":"통화 기호(옵션)","optional_block_explorer_url":"Block Explorer URL","account_already_exists":"이미 존재된 월렛 이름입니다.","network_already_exists":"이미 존재된 네트워크입니다","incorrect_rpc_url":"무효한 RPC URL","incorrect_explorer_url":"무효한 Block Explorer URL.","rpc_url_is_used_by":"이 RPC URL는 {{- name}} 네트워크에서 사용되고 있습니다.","chain_id_is_used_by":"이 체인 ID는 현재 {{- name}} 네트워크에서 사용되고 있습니다. ","failed_to_fetch_chain_id":"체인 ID를 가져올 수 없습니다. RPC URL이 맞는지 확인하시길 바랍니다.","rpc_return_different_chain_id":"입력한 RPC URL에서 다른 체인 ID ({{chain_id}}) 를 반환했습니다. 추가하려는 네트워크의 RPC URL과 일치하도록 체인 ID를 업데이트하세요.","rpc_return_different_symbol":"체인ID {{chain_id}} 의 네트워크는 입력하신 네트워크와 다른 통화기호({{symbol}}) 를 사용할 수 있습니다. 확인하시길 바랍니다.","rpc_requires_https":"URL에는 적절한 HTTPS 접두사가 필요합니다.","failed_to_save_network":"네트워크 저장 실패","incorrect_chain_id":"잘못된 체인 ID","invalid_number":"잘못된 번호","saved_network_successfully":"네트워크 저장 성공","adding_network_successfully":"네트워크 추가 성공","deleted_network_successfully":"네트워크 삭제 성공","hided_token_successfully":"이미 숨겼습니다.","not_enough_data_to_present":"제시할 데이터가 부족합니다.","wallet_send":"발송","wallet_receive":"받기","wallet_swap":"스왑","wallet_add_contact":"연락처 추가","wallet_add_contact_successfully":"연락처 추가 성공","wallet_edit_contact":"연락처 편집","wallet_edit_contact_successfully":"연락처 편집 성공","wallet_delete_contact":"연락처 삭제","wallet_delete_contact_successfully":"연락처 삭제 성공","wallet_name":"월렛 이름","wallet_account":"월렛 계정","wallet_imported":"불러오기 완료됨","scan_address_to_payment":"QR 코드 스캔하여 결제하기","wallet_connect":"WalletConnect","wallet_connect_tips":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스캔하세요.","empty":"비어 있음","hide_token_symbol":"{{- symbol}} 숨기기","hide_token_description":"{{- symbol}} 숨기시겠습니까? 토큰을 다시 추가하면 표시할 수 있습니다.","scam_tx":"사기 거래","to_address":"받는 주소: {{address}}","other_address":"발송 주소: <addr>{{address}}</addr>","other_address$from":"발송 주소: <addr>{{address}}</addr>","other_address$to":"받는 주소: <addr>{{address}}</addr>","transaction_status":"상태","transaction_failed":"실패","transaction_success":"성공","transaction_pending":"대기중","transaction_base":"베이스","transaction_from":"From","transaction_to":"To","transaction_link":"링크","transaction_hash":"Transaction Hash","transaction_gas_limit":"가스 한도(Units)","transaction_gas_used":"이용된 가스(Units)","transaction_gas_price":"가스 가격(GWEI)","transaction_priority_fee":"우선 비용(GWEI)","transaction_max_fee":"최대 요금(GWEI)","transaction_fee":"거래 수수료","activity_log":"Activity Log","transaction_confirmed_at":"{{- datetime}} 에 거래가 확인되었습니다","transaction_completed_at":"거래가 완료되어 {{- datetime}} 에 블록체인에 기록되었습니다.","collectible_title":"수집품","collectible_description":"설명","collectible_properties":"속성","collectible_last_sale_price":"속성","about_collection":"{{- name}} 정보","hide_collectible":"{{-name}} 숨기기","hide_collectible_description":"{{- name}} 숨기시겠습니까? NFT 다시 추가하면 표시할 수 있습니다.","add_new_address_to_an_existing_group":"현존 그룹에 새로운 주소 추가","or_create_a_new_wallet_group":"혹은 새로운 월렛 그룹을 만듭니다."}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/qya-AA.json
const shared_ui_locales_qya_AA_namespaceObject = JSON.parse('{"promote":"crwdns17218:0crwdne17218:0","promote_red_packet":"crwdns16898:0{{token}}crwdne16898:0","promote_file_service":"crwdns16904:0{{sns}}crwdne16904:0","promote_savings":"crwdns16906:0{{- amount}}crwdnd16906:0{{symbol}}crwdnd16906:0{{chain}}crwdnd16906:0{{account}}crwdne16906:0","promote_withdraw":"crwdns18584:0{{- amount}}crwdnd18584:0{{symbol}}crwdnd18584:0{{chain}}crwdnd18584:0{{account}}crwdne18584:0","promote_collectible":"crwdns16908:0{{sns}}crwdne16908:0","promote_snapshot":"crwdns16910:0{{sns}}crwdne16910:0","database_backup":"crwdns10051:0crwdne10051:0","database_overwrite":"crwdns10053:0crwdne10053:0","database_clear":"crwdns10055:0crwdne10055:0","debug_new_bug_issue":"crwdns10057:0crwdne10057:0","debug_metadata_title":"crwdns10059:0crwdne10059:0","debug_metadata_put_metadata":"crwdns10061:0crwdne10061:0","edit":"crwdns10063:0crwdne10063:0","clear":"crwdns10065:0crwdne10065:0","connect":"crwdns16576:0crwdne16576:0","back":"crwdns16578:0crwdne16578:0","more":"crwdns10067:0crwdne10067:0","remove":"crwdns22051:0crwdne22051:0","to":"crwdns22173:0crwdne22173:0","add":"crwdns19823:0crwdne19823:0","approve":"crwdns10069:0crwdne10069:0","address":"crwdns10071:0crwdne10071:0","amount":"crwdns18588:0crwdne18588:0","coming_soon":"crwdns22149:0crwdne22149:0","max":"crwdns21905:0crwdne21905:0","data":"crwdns21987:0crwdne21987:0","redpacket_a_token":"crwdns22457:0crwdne22457:0","redpacket_an_nft":"crwdns22459:0crwdne22459:0","available_balance":"crwdns19861:0crwdne19861:0","available_amount":"crwdns21907:0{{- amount}}crwdne21907:0","failed_to_transfer_token":"crwdns22155:0{{- message}}crwdne22155:0","failed_to_transfer_nft":"crwdns22165:0crwdne22165:0","operation":"crwdns10075:0crwdne10075:0","gas_limit":"crwdns10077:0crwdne10077:0","gas_price":"crwdns10079:0crwdne10079:0","value":"crwdns22019:0crwdne22019:0","balance":"crwdns22021:0crwdne22021:0","gwei":"crwdns21885:0crwdne21885:0","redirect_to":"crwdns10081:0crwdne10081:0","welcome_back":"crwdns21629:0crwdne21629:0","sign":"crwdns10085:0crwdne10085:0","load_failed":"crwdns18590:0crwdne18590:0","web3_profile_card_name":"crwdns19473:0crwdne19473:0","powered_by":"crwdns18266:0crwdne18266:0","powered_by_whom":"crwdns18592:0{{whom}}crwdne18592:0","reload":"crwdns10087:0crwdne10087:0","rename":"crwdns22053:0crwdne22053:0","contacts":"crwdns22055:0crwdne22055:0","currency":"crwdns22057:0crwdne22057:0","load":"crwdns10089:0crwdne10089:0","load_all":"crwdns10093:0crwdne10093:0","no_data":"crwdns10097:0crwdne10097:0","tip":"crwdns10105:0crwdne10105:0","tags":"crwdns10107:0crwdne10107:0","price":"crwdns18560:0crwdne18560:0","floor_price":"crwdns21763:0crwdne21763:0","default":"crwdns17664:0crwdne17664:0","contract":"crwdns10109:0crwdne10109:0","plugins":"crwdns16580:0crwdne16580:0","signing":"crwdns21579:0crwdne21579:0","network":"crwdns21793:0crwdne21793:0","backup":"crwdns21795:0crwdne21795:0","password":"crwdns21797:0crwdne21797:0","reenter":"crwdns21799:0crwdne21799:0","copy":"crwdns21801:0crwdne21801:0","or":"crwdns21803:0crwdne21803:0","send":"crwdns21765:0crwdne21765:0","transfer_to":"crwdns21909:0crwdne21909:0","added_by_user":"crwdns22213:0crwdne22213:0","congratulations":"crwdns21581:0crwdne21581:0","token_standard":"crwdns18562:0crwdne18562:0","persona_required":"crwdns16582:0crwdne16582:0","initializing":"crwdns10111:0crwdne10111:0","redirect_alert":"crwdns10113:0crwdne10113:0","typed_message_text_alert":"crwdns10117:0crwdne10117:0","badge_renderer_provided_by_plugin":"crwdns10119:0crwdne10119:0","add_assets":"crwdns21783:0crwdne21783:0","add_nft_contract_search_hint":"crwdns8123:0crwdne8123:0","applications":"crwdns9513:0crwdne9513:0","application_settings":"crwdns16220:0crwdne16220:0","connect_persona":"crwdns22480:0crwdne22480:0","not_current_account":"crwdns22482:0crwdne22482:0","request_to_switch_account":"crwdns22484:0{{- account}}crwdne22484:0","request_to_login":"crwdns22486:0{{- siteName}}crwdne22486:0","connected_already":"crwdns22488:0{{- account}}crwdne22488:0","switch_for_more_connections":"crwdns22490:0crwdne22490:0","send_post_successfully":"crwdns22492:0crwdne22492:0","connect_successfully":"crwdns22500:0crwdne22500:0","application_tooltip_hint_sns_persona_unmatched":"crwdns16532:0{{currentSNSConnectedPersonaPublicKey}}crwdnd16532:0{{currentPersonaPublicKey}}crwdnd16532:0{{currentSNSConnectedPersonaPublicKey}}crwdne16532:0","application_tooltip_hint_verify":"crwdns16534:0crwdne16534:0","application_tooltip_hint_create_persona":"crwdns16536:0crwdne16536:0","application_tooltip_hint_connect_persona":"crwdns16538:0crwdne16538:0","application_tooltip_hint_connect_wallet":"crwdns16540:0crwdne16540:0","application_settings_tab_app_list":"crwdns16222:0crwdne16222:0","application_settings_tab_plug_in_switch":"crwdns16224:0crwdne16224:0","application_settings_tab_plug_app-list-listed":"crwdns18332:0crwdne18332:0","application_settings_tab_plug_app-list-unlisted":"crwdns16226:0crwdne16226:0","application_settings_tab_plug_app-listed-placeholder":"crwdns16228:0crwdne16228:0","application_display_tab_plug_app-unlisted-placeholder":"crwdns17254:0crwdne17254:0","application_settings_tab_plug_app-unlisted-placeholder":"crwdns16230:0crwdne16230:0","persona_load_failed":"crwdns18600:0crwdne18600:0","additional_post_box__encrypted_post_pre":"crwdns3991:0$t(promote)crwdnd3991:0{{encrypted}}crwdne3991:0","additional_post_box__encrypted_post_pre_red_packet_sns_official_account":"crwdns19497:0$t(promote_red_packet)crwdnd19497:0{{account}}crwdnd19497:0{{encrypted}}crwdne19497:0","additional_post_box__encrypted_post_pre_red_packet":"crwdns3995:0$t(promote_red_packet)crwdnd3995:0{{encrypted}}crwdne3995:0","additional_post_box__encrypted_post_pre_file_service_sns_official_account":"crwdns19501:0$t(promote_file_service)crwdnd19501:0{{encrypted}}crwdne19501:0","additional_post_box__encrypted_post_pre_file_service":"crwdns16918:0$t(promote_file_service)crwdnd16918:0{{encrypted}}crwdne16918:0","additional_post_box__steganography_post_pre":"crwdns3997:0{{random}}crwdne3997:0","auto_paste_failed_dialog_title":"crwdns3999:0crwdne3999:0","auto_paste_failed_dialog_content":"crwdns4001:0crwdne4001:0","auto_paste_failed_dialog_image_caption":"crwdns4003:0crwdne4003:0","auto_paste_failed_snackbar":"crwdns4005:0crwdne4005:0","auto_paste_failed_snackbar_action":"crwdns4007:0crwdne4007:0","auto_paste_failed_snackbar_action_close":"crwdns9363:0crwdne9363:0","connect_your_wallet":"crwdns18204:0crwdne18204:0","connected_wallet_settings":"crwdns18206:0crwdne18206:0","compose_encrypt_method_text":"crwdns16584:0crwdne16584:0","compose_encrypt_method_text_sub_title":"crwdns16586:0crwdne16586:0","compose_encrypt_method_image":"crwdns16588:0crwdne16588:0","compose_encrypt_method_image_sub_title":"crwdns16590:0crwdne16590:0","compose_no_local_key":"crwdns16592:0crwdne16592:0","compose_encrypt_visible_to_all":"crwdns16594:0crwdne16594:0","compose_encrypt_visible_to_all_sub":"crwdns16596:0crwdne16596:0","compose_encrypt_visible_to_private":"crwdns16598:0crwdne16598:0","compose_encrypt_visible_to_private_sub":"crwdns16600:0crwdne16600:0","compose_shared_friends_one":"crwdns16690:0crwdne16690:0","compose_shared_friends_other":"crwdns16692:0{{count}}crwdne16692:0","compose_encrypt_visible_to_share":"crwdns16606:0crwdne16606:0","compose_encrypt_visible_to_share_sub":"crwdns16608:0crwdne16608:0","compose_encrypt_share_dialog_empty":"crwdns16610:0crwdne16610:0","copy_success":"crwdns18208:0crwdne18208:0","automation_request_click_post_button":"crwdns4009:0crwdne4009:0","ok":"crwdns12997:0crwdne12997:0","start":"crwdns12999:0crwdne12999:0","cancel":"crwdns4025:0crwdne4025:0","twitter_account":"crwdns9171:0crwdne9171:0","facebook_account":"crwdns9173:0crwdne9173:0","hash_tag":"crwdns17258:0crwdne17258:0","comment_box__placeholder":"crwdns4027:0crwdne4027:0","confirm":"crwdns4029:0crwdne4029:0","copy_text":"crwdns4031:0crwdne4031:0","loading_failed":"crwdns8127:0crwdne8127:0","try_again":"crwdns8125:0crwdne8125:0","copy_image":"crwdns4033:0crwdne4033:0","copy_success_of_wallet_addr":"crwdns4035:0crwdne4035:0","copy_success_of_text":"crwdns4037:0crwdne4037:0","copy_success_of_image":"crwdns4039:0crwdne4039:0","copy_success_of_token_addr":"crwdns17724:0crwdne17724:0","connecting":"crwdns4043:0crwdne4043:0","collectibles_name":"crwdns16232:0crwdne16232:0","select_an_nft":"crwdns17246:0crwdne17246:0","create":"crwdns4047:0crwdne4047:0","copied":"crwdns9361:0crwdne9361:0","daily":"crwdns4057:0crwdne4057:0","dashboard_no_collectible_found":"crwdns4105:0crwdne4105:0","no_NFTs_found":"crwdns18268:0crwdne18268:0","dashboard_collectible_menu_all":"crwdns14532:0{{count}}crwdne14532:0","days":"crwdns4107:0{{days}}crwdne4107:0","decrypted_postbox_only_visible_to_yourself":"crwdns20209:0crwdne20209:0","decrypted_postbox_visible_to_all":"crwdns20211:0crwdne20211:0","decrypted_postbox_decrypting":"crwdns4111:0crwdne4111:0","decrypted_postbox_decoding":"crwdns4113:0crwdne4113:0","decrypted_postbox_decrypting_finding_person_key":"crwdns4115:0crwdne4115:0","decrypted_postbox_decrypting_finding_post_key":"crwdns4117:0crwdne4117:0","decrypted_postbox_author_mismatch":"crwdns4119:0{{name}}crwdne4119:0","decrypted_postbox_title":"crwdns4121:0crwdne4121:0","dismiss":"crwdns4123:0crwdne4123:0","delete":"crwdns4127:0crwdne4127:0","delete_wallet":"crwdns4135:0crwdne4135:0","hide_token":"crwdns4139:0crwdne4139:0","hide_token_hint":"crwdns4141:0{{token}}crwdne4141:0","done":"crwdns4145:0crwdne4145:0","download":"crwdns4147:0crwdne4147:0","failed":"crwdns9389:0crwdne9389:0","buy_now":"crwdns4169:0crwdne4169:0","no_enough_gas_fees":"crwdns19863:0crwdne19863:0","gas_fee":"crwdns21911:0crwdne21911:0","insufficient_funds_for_gas":"crwdns22135:0crwdne22135:0","open":"crwdns19345:0crwdne19345:0","settings":"crwdns18604:0crwdne18604:0","do_not_see_your_nft":"crwdns21881:0crwdne21881:0","import_nft":"crwdns21883:0crwdne21883:0","setup_guide_post_content":"crwdns22494:0crwdne22494:0","setup_guide_verify_tip":"crwdns22496:0crwdne22496:0","setup_guide_login":"crwdns13001:0crwdne13001:0","setup_guide_find_username_text":"crwdns4175:0crwdne4175:0","setup_guide_connect_auto":"crwdns4177:0crwdne4177:0","setup_guide_connect_failed":"crwdns4179:0crwdne4179:0","setup_guide_verify":"crwdns14586:0crwdne14586:0","setup_guide_verify_should_change_profile":"crwdns14798:0crwdne14798:0","setup_guide_verify_dismiss":"crwdns14588:0crwdne14588:0","setup_guide_verify_checking":"crwdns14590:0crwdne14590:0","setup_guide_verify_post_not_found":"crwdns14592:0crwdne14592:0","setup_guide_connected_title":"crwdns18606:0crwdne18606:0","setup_guide_connected_description":"crwdns18608:0crwdne18608:0","setup_guide_verifying":"crwdns14594:0crwdne14594:0","setup_guide_verifying_failed":"crwdns14596:0crwdne14596:0","user_guide_tip_connected":"crwdns9081:0crwdne9081:0","user_guide_tip_need_verify_on_next_id":"crwdns14598:0crwdne14598:0","setup_guide_say_hello_content":"crwdns13003:0crwdne13003:0","setup_guide_say_hello_follow":"crwdns13167:0{{account}}crwdne13167:0","setup_guide_pin_tip":"crwdns14600:0crwdne14600:0","setup_guide_pin_tip_step_click_left":"crwdns14602:0crwdne14602:0","setup_guide_pin_tip_step_click_right":"crwdns14604:0crwdne14604:0","setup_guide_pin_tip_step_find_left":"crwdns14606:0crwdne14606:0","setup_guide_pin_tip_step_find_right":"crwdns14608:0crwdne14608:0","setup_guide_pin_tip_successfully":"crwdns14610:0crwdne14610:0","user_guide_tip_1":"crwdns9059:0crwdne9059:0","user_guide_tip_2":"crwdns9061:0crwdne9061:0","user_guide_tip_3":"crwdns13019:0crwdne13019:0","user_guide_tip_4":"crwdns16572:0crwdne16572:0","plugin_avatar_setup_share_title":"crwdns16920:0crwdne16920:0","plugin_avatar_setup_pfp_share":"crwdns16922:0crwdne16922:0","plugin_avatar_setup_success":"crwdns16924:0crwdne16924:0","plugin_avatar_asset":"crwdns17220:0crwdne17220:0","plugin_avatar_web3_error":"crwdns17222:0crwdne17222:0","plugin_avatar_chain_error":"crwdns17224:0crwdne17224:0","plugin_avatar_input_token_address":"crwdns17226:0crwdne17226:0","plugin_avatar_input_token_id":"crwdns17228:0crwdne17228:0","mask_network":"crwdns10321:0crwdne10321:0","import":"crwdns4193:0crwdne4193:0","no_search_result":"crwdns4217:0crwdne4217:0","set_nft_profile_photo":"crwdns14582:0crwdne14582:0","use_nft":"crwdns14584:0crwdne14584:0","loading":"crwdns8031:0crwdne8031:0","unlock":"crwdns8033:0crwdne8033:0","persona":"crwdns18610:0crwdne18610:0","wallet":"crwdns16298:0crwdne16298:0","dashboard":"crwdns16300:0crwdne16300:0","welcome_to_mask":"crwdns16302:0crwdne16302:0","welcome_description_congrats":"crwdns16304:0crwdne16304:0","welcome_description_content":"crwdns16306:0crwdne16306:0","welcome_description_content_second":"crwdns16308:0crwdne16308:0","browser_action_enter_dashboard":"crwdns4247:0crwdne4247:0","pending":"crwdns9391:0crwdne9391:0","beta_sup":"crwdns10125:0crwdne10125:0","post_dialog__button":"crwdns4257:0crwdne4257:0","post_dialog__placeholder":"crwdns4265:0crwdne4265:0","post_dialog__title":"crwdns4275:0crwdne4275:0","post_dialog_visible_to":"crwdns16612:0crwdne16612:0","post_dialog_encryption_method":"crwdns16614:0crwdne16614:0","post_dialog_enable_paste_auto":"crwdns10129:0crwdne10129:0","post_dialog_share_with_input_placeholder":"crwdns16616:0crwdne16616:0","post_modal_hint__button":"crwdns4277:0crwdne4277:0","hide":"crwdns4293:0crwdne4293:0","reset":"crwdns4301:0crwdne4301:0","editor":"crwdns10131:0crwdne10131:0","retry":"crwdns4303:0crwdne4303:0","go_wrong":"crwdns10133:0crwdne10133:0","search_box_placeholder":"crwdns4331:0crwdne4331:0","select_all":"crwdns4333:0crwdne4333:0","nonce":"crwdns21729:0crwdne21729:0","none":"crwdns21767:0crwdne21767:0","select_none":"crwdns4335:0crwdne4335:0","all_friends":"crwdns4337:0crwdne4337:0","select_specific_friends_dialog__title":"crwdns4341:0crwdne4341:0","select_friends_dialog_persona_connect_one":"crwdns20391:0crwdne20391:0","select_friends_dialog_persona_connect_other":"crwdns20393:0crwdne20393:0","service_decryption_failed":"crwdns4343:0crwdne4343:0","service_username_invalid":"crwdns4359:0crwdne4359:0","speed_up":"crwdns9393:0crwdne9393:0","save":"crwdns10439:0crwdne10439:0","skip":"crwdns4463:0crwdne4463:0","next":"crwdns9067:0crwdne9067:0","try":"crwdns9083:0crwdne9083:0","share":"crwdns4465:0crwdne4465:0","share_to":"crwdns4467:0crwdne4467:0","sharing":"crwdns4469:0crwdne4469:0","transfer":"crwdns4471:0crwdne4471:0","export":"crwdns9305:0crwdne9305:0","confirm_swap_risk":"crwdns18464:0crwdne18464:0","wallet_load_retry":"crwdns10135:0{{symbol}}crwdne10135:0","name":"crwdns22538:0crwdne22538:0","wallet_rename":"crwdns4489:0crwdne4489:0","wallet_loading_nft_contract":"crwdns8135:0crwdne8135:0","wallet_search_contract_no_result":"crwdns8137:0crwdne8137:0","wallet_search_no_result":"crwdns8139:0crwdne8139:0","wallet_confirm_with_password":"crwdns10141:0crwdne10141:0","wallet_airdrop_nft_unclaimed_title":"crwdns8093:0crwdne8093:0","view_on_explorer":"crwdns18612:0crwdne18612:0","recent_transaction_pending":"crwdns16388:0crwdne16388:0","recent_transaction_cancelled":"crwdns16394:0crwdne16394:0","wallet_balance":"crwdns4505:0crwdne4505:0","wallet_available_balance":"crwdns19903:0crwdne19903:0","wallet_new":"crwdns4511:0crwdne4511:0","wallet_status_button_change":"crwdns4519:0crwdne4519:0","wallet_status_button_change_to_evm":"crwdns18126:0crwdne18126:0","wallet_status_button_copy_address":"crwdns4523:0crwdne4523:0","wallets_transfer_contact_wallet_name_already_exist":"crwdns21681:0crwdne21681:0","wallet_transfer_account":"crwdns10191:0crwdne10191:0","wallet_transfer_receiving_account":"crwdns10193:0crwdne10193:0","wallet_transfer_to_address":"crwdns4529:0crwdne4529:0","wallet_transfer_send":"crwdns4539:0crwdne4539:0","wallet_transfer_placeholder":"crwdns21683:0crwdne21683:0","wallet_transfer_title":"crwdns4541:0crwdne4541:0","wallet_transfer_my_wallets_title":"crwdns21685:0crwdne21685:0","wallet_transfer_my_contacts_title":"crwdns21687:0crwdne21687:0","wallets_transfer_warning_contract_address":"crwdns22121:0crwdne22121:0","wallets_transfer_error_address_absence":"crwdns21689:0crwdne21689:0","wallets_transfer_error_address_scam":"crwdns22123:0crwdne22123:0","wallets_transfer_error_invalid_address":"crwdns21691:0crwdne21691:0","wallets_transfer_error_invalid_domain":"crwdns22125:0crwdne22125:0","wallet_transfer_error_no_ens_support":"crwdns21693:0crwdne21693:0","wallet_transfer_error_amount_absence":"crwdns4543:0crwdne4543:0","wallet_transfer_error_address_absence":"crwdns4545:0crwdne4545:0","wallet_transfer_error_same_address_with_current_account":"crwdns11863:0crwdne11863:0","wallet_transfer_error_is_contract_address":"crwdns11865:0crwdne11865:0","wallet_transfer_error_invalid_address":"crwdns4547:0crwdne4547:0","wallet_transfer_error_no_address_has_been_set_name":"crwdns10435:0crwdne10435:0","wallet_transfer_error_no_support_ens":"crwdns10437:0crwdne10437:0","wallet_transfer_error_insufficient_balance":"crwdns7961:0{{symbol}}crwdne7961:0","wallet_transfer_error_gas_price_absence":"crwdns9051:0crwdne9051:0","wallet_transfer_error_gas_limit_absence":"crwdns9053:0crwdne9053:0","wallet_transfer_error_max_fee_absence":"crwdns9055:0crwdne9055:0","wallet_transfer_error_max_priority_fee_absence":"crwdns9057:0crwdne9057:0","wallet_transfer_error_max_fee_too_low":"crwdns8043:0crwdne8043:0","wallet_transfer_error_max_fee_too_high":"crwdns8045:0crwdne8045:0","wallet_transfer_error_max_priority_gas_fee_positive":"crwdns8047:0crwdne8047:0","wallet_transfer_error_max_priority_gas_fee_too_low":"crwdns8049:0crwdne8049:0","wallet_transfer_error_max_priority_gas_fee_too_high":"crwdns8051:0crwdne8051:0","wallet_transfer_error_max_priority_gas_fee_imbalance":"crwdns8053:0crwdne8053:0","wallet_transfer_gwei":"crwdns8055:0crwdne8055:0","wallet_transfer_between_my_accounts":"crwdns10195:0crwdne10195:0","weekly":"crwdns4567:0crwdne4567:0","relative_time_days_ago_one":"crwdns20049:0{{count}}crwdne20049:0","relative_time_days_ago_other":"crwdns20051:0{{count}}crwdne20051:0","relative_time_hours_ago_one":"crwdns20053:0{{count}}crwdne20053:0","relative_time_hours_ago_other":"crwdns20055:0{{count}}crwdne20055:0","relative_time_minutes_ago_one":"crwdns20057:0{{count}}crwdne20057:0","relative_time_minutes_ago_other":"crwdns20059:0{{count}}crwdne20059:0","relative_time_months_ago_one":"crwdns20061:0{{count}}crwdne20061:0","relative_time_months_ago_other":"crwdns20063:0{{count}}crwdne20063:0","relative_time_seconds_ago_one":"crwdns20065:0{{count}}crwdne20065:0","relative_time_seconds_ago_other":"crwdns20067:0{{count}}crwdne20067:0","relative_time_years_ago_one":"crwdns20069:0{{count}}crwdne20069:0","relative_time_years_ago_other":"crwdns20071:0{{count}}crwdne20071:0","relative_time_days_other":"crwdns20073:0{{count}}crwdne20073:0","relative_time_days_one":"crwdns20075:0{{count}}crwdne20075:0","relative_time_hours_other":"crwdns20077:0{{count}}crwdne20077:0","relative_time_hours_one":"crwdns20079:0{{count}}crwdne20079:0","relative_time_minutes_other":"crwdns20081:0{{count}}crwdne20081:0","relative_time_minutes_one":"crwdns20083:0{{count}}crwdne20083:0","relative_time_months_one":"crwdns20085:0{{count}}crwdne20085:0","relative_time_months_other":"crwdns20087:0{{count}}crwdne20087:0","relative_time_seconds_one":"crwdns20089:0{{count}}crwdne20089:0","relative_time_seconds_other":"crwdns20091:0{{count}}crwdne20091:0","relative_time_years_one":"crwdns20093:0{{count}}crwdne20093:0","relative_time_years_other":"crwdns20095:0{{count}}crwdne20095:0","plugin_wallet_snackbar_wait_for_confirming":"crwdns10629:0crwdne10629:0","plugin_wallet_snackbar_hash":"crwdns10631:0crwdne10631:0","plugin_wallet_snackbar_confirmed":"crwdns10633:0crwdne10633:0","plugin_wallet_snackbar_success":"crwdns10635:0crwdne10635:0","plugin_wallet_snackbar_failed":"crwdns10637:0crwdne10637:0","plugin_wallet_snackbar_swap_successful":"crwdns10639:0crwdne10639:0","plugin_wallet_snackbar_swap_token":"crwdns10641:0crwdne10641:0","plugin_wallet_connect_to":"crwdns22504:0crwdne22504:0","plugin_wallet_connect_to_retry":"crwdns22506:0crwdne22506:0","plugin_wallet_connected_to":"crwdns22508:0crwdne22508:0","plugin_wallet_metamask_error_already_request":"crwdns12987:0crwdne12987:0","plugin_wallet_connect_tip":"crwdns12989:0{{providerName}}crwdnd12989:0{{providerShortenLink}}crwdne12989:0","plugin_wallet_disconnect":"crwdns17214:0crwdne17214:0","plugin_wallet_dialog_title":"crwdns17216:0crwdne17216:0","plugin_wallet_select_a_nft_contract":"crwdns7923:0crwdne7923:0","plugin_wallet_select_a_nft_owner":"crwdns7925:0crwdne7925:0","plugin_wallet_select_a_nft_operator":"crwdns7927:0crwdne7927:0","plugin_wallet_fail_to_load_nft_contract":"crwdns7929:0crwdne7929:0","plugin_wallet_nft_approving_all":"crwdns7931:0{{symbol}}crwdne7931:0","plugin_wallet_approve_all_nft":"crwdns7933:0{{symbol}}crwdne7933:0","plugin_wallet_approve_all_nft_successfully":"crwdns7935:0{{symbol}}crwdne7935:0","plugin_wallet_confirm_risk_warning":"crwdns4593:0crwdne4593:0","plugin_wallet_no_gas_fee":"crwdns4595:0crwdne4595:0","plugin_wallet_update_gas_fee":"crwdns4597:0crwdne4597:0","plugin_wallet_connect_a_wallet":"crwdns4591:0crwdne4591:0","plugin_wallet_invalid_network":"crwdns4599:0crwdne4599:0","plugin_wallet_select_a_wallet":"crwdns4601:0crwdne4601:0","plugin_wallet_transaction":"crwdns4603:0crwdne4603:0","plugin_wallet_transaction_wait_for_confirmation":"crwdns4605:0crwdne4605:0","plugin_wallet_transaction_submitted":"crwdns4607:0crwdne4607:0","plugin_wallet_transaction_confirmed":"crwdns4609:0crwdne4609:0","plugin_wallet_transaction_reverted":"crwdns4611:0crwdne4611:0","plugin_wallet_transaction_rejected":"crwdns4613:0crwdne4613:0","plugin_wallet_transaction_underpriced":"crwdns11871:0crwdne11871:0","plugin_wallet_transaction_server_error":"crwdns4615:0crwdne4615:0","plugin_wallet_view_on_explorer":"crwdns4617:0crwdne4617:0","plugin_wallet_on_create":"crwdns4627:0crwdne4627:0","plugin_wallet_on_connect":"crwdns4629:0crwdne4629:0","plugin_wallet_pending_transactions_one":"crwdns18184:0{{count}}crwdne18184:0","plugin_wallet_pending_transactions_other":"crwdns18186:0{{count}}crwdne18186:0","plugin_wallet_import_wallet":"crwdns4641:0crwdne4641:0","plugin_wallet_token_unlock":"crwdns4667:0crwdne4667:0","plugin_wallet_token_infinite_unlock":"crwdns4669:0{{symbol}}crwdne4669:0","plugin_wallet_token_exact_unlock_tips":"crwdns17548:0{{provider}}crwdnd17548:0{{symbol}}crwdne17548:0","plugin_wallet_token_infinite_unlock_tips":"crwdns17550:0{{provider}}crwdnd17550:0{{symbol}}crwdne17550:0","plugin_wallet_connect_safari_metamask":"crwdns4673:0crwdne4673:0","plugin_wallet_connect_safari_rainbow":"crwdns4675:0crwdne4675:0","plugin_wallet_connect_safari_trust":"crwdns4677:0crwdne4677:0","plugin_wallet_connect_safari_im_token":"crwdns4679:0crwdne4679:0","plugin_wallet_on_connect_in_firefox":"crwdns4681:0crwdne4681:0","plugin_wallet_return_mobile_wallet_options":"crwdns4683:0crwdne4683:0","plugin_wallet_view_qr_code":"crwdns4685:0crwdne4685:0","plugin_wallet_switch_network":"crwdns4687:0{{network}}crwdne4687:0","plugin_wallet_switch_network_under_going":"crwdns4689:0{{network}}crwdne4689:0","plugin_wallet_connect_tips":"crwdns16620:0crwdne16620:0","plugin_wallet_not_support_network":"crwdns17552:0crwdne17552:0","plugin_wallet_connect_network":"crwdns16622:0{{network}}crwdne16622:0","plugin_wallet_not_available_on":"crwdns7913:0{{network}}crwdne7913:0","plugin_wallet_connect_wallet":"crwdns4693:0crwdne4693:0","plugin_wallet_name_placeholder":"crwdns4705:0crwdne4705:0","plugin_wallet_cancel_sign":"crwdns4709:0crwdne4709:0","plugin_web3_profile_recommend_feature_description":"crwdns18116:0crwdne18116:0","plugin_nft_avatar_recommend_feature_description":"crwdns16626:0crwdne16626:0","application_hint":"crwdns16628:0crwdne16628:0","plugin_goPlusSecurity_description":"crwdns17726:0crwdne17726:0","plugin_red_packet_create":"crwdns11873:0crwdne11873:0","plugin_red_packet_claimed":"crwdns16926:0crwdne16926:0","plugin_red_packet_claim":"crwdns16954:0crwdne16954:0","plugin_red_packet_claim_title":"crwdns18352:0crwdne18352:0","plugin_red_packet_claim_notification":"crwdns18188:0crwdne18188:0","plugin_red_packet_claim_success":"crwdns18354:0{{- tokenAmountDescription}}crwdne18354:0","plugin_red_packet_claim_success_without_detail":"crwdns18356:0crwdne18356:0","plugin_red_packet_claim_fail":"crwdns18358:0crwdne18358:0","plugin_red_packet_create_with_token":"crwdns4775:0crwdne4775:0","plugin_red_packet_create_with_token_title":"crwdns18360:0crwdne18360:0","plugin_red_packet_create_with_token_success":"crwdns18362:0{{- tokenAmountDescription}}crwdne18362:0","plugin_red_packet_create_with_token_fail":"crwdns18364:0crwdne18364:0","plugin_red_packet_refund_with_token":"crwdns18366:0crwdne18366:0","plugin_red_packet_refund_with_token_title":"crwdns18368:0crwdne18368:0","plugin_red_packet_refund_with_token_success":"crwdns18370:0{{- tokenAmountDescription}}crwdne18370:0","plugin_red_packet_refund_with_token_success_without_detail":"crwdns18372:0crwdne18372:0","plugin_red_packet_refund_with_token_fail":"crwdns18374:0crwdne18374:0","plugin_nft_red_packet_create_title":"crwdns18376:0crwdne18376:0","plugin_nft_red_packet_create":"crwdns11875:0crwdne11875:0","plugin_nft_red_packet_create_success":"crwdns18378:0{{symbol}}crwdne18378:0","plugin_nft_red_packet_create_success_without_detail":"crwdns18380:0crwdne18380:0","plugin_nft_red_packet_claim":"crwdns18190:0crwdne18190:0","plugin_nft_red_packet_claim_success":"crwdns18382:0{{symbol}}crwdne18382:0","plugin_nft_red_packet_claim_success_without_detail":"crwdns18384:0crwdne18384:0","plugin_nft_red_packet_claim_title":"crwdns18386:0crwdne18386:0","plugin_red_packet_nft_account_name":"crwdns8159:0crwdne8159:0","plugin_gitcoin_select_a_token":"crwdns4793:0crwdne4793:0","plugin_gitcoin_insufficient_balance":"crwdns4799:0{{symbol}}crwdne4799:0","plugin_trader_fail_to_load":"crwdns10207:0crwdne10207:0","plugin_trader_switch_provider":"crwdns18614:0{{provider}}crwdne18614:0","plugin_trader_swap_description":"crwdns16242:0crwdne16242:0","plugin_trader_tutorial":"crwdns10211:0crwdne10211:0","plugin_trader_what_is_lbp":"crwdns10213:0crwdne10213:0","plugin_trader_lbp_intro":"crwdns10215:0{{symbol}}crwdnd10215:0{{symbol}}crwdne10215:0","plugin_trader_no_pools_found":"crwdns10217:0crwdne10217:0","plugin_trader_safety_agree":"crwdns10219:0crwdne10219:0","plugin_trader_view_on_etherscan":"crwdns10221:0crwdne10221:0","plugin_trader_safety_alert_title":"crwdns10223:0crwdne10223:0","plugin_trader_safety_alert":"crwdns10225:0crwdne10225:0","plugin_trader_total_supply":"crwdns10227:0crwdne10227:0","plugin_trader_circulating_supply":"crwdns10229:0crwdne10229:0","plugin_trader_accept":"crwdns13025:0crwdne13025:0","plugin_trader_volume_24":"crwdns10231:0crwdne10231:0","plugin_trader_market_cap":"crwdns10233:0crwdne10233:0","plugin_trader_risk_warning_short":"crwdns17728:0crwdne17728:0","plugin_trader_risk_warning":"crwdns17730:0crwdne17730:0","plugin_trader_make_risk_trade":"crwdns17732:0crwdne17732:0","plugin_trader_dear_user":"crwdns17734:0crwdne17734:0","plugin_trader_user_warning":"crwdns17736:0crwdne17736:0","plugin_trader_price_updated":"crwdns10237:0crwdne10237:0","plugin_trader_market_statistic":"crwdns18128:0crwdne18128:0","plugin_trader_floor_price":"crwdns18130:0crwdne18130:0","plugin_trader_trending":"crwdns19347:0crwdne19347:0","plugin_trader_highest_price":"crwdns19349:0crwdne19349:0","plugin_trader_total_volume":"crwdns19351:0crwdne19351:0","plugin_trader_one_day_average_price":"crwdns19353:0crwdne19353:0","plugin_trader_one_day_traded_volume":"crwdns19355:0crwdne19355:0","plugin_trader_one_day_sale":"crwdns19357:0crwdne19357:0","plugin_trader_marketplace":"crwdns18132:0crwdne18132:0","plugin_trader_total_assets":"crwdns18134:0crwdne18134:0","plugin_trader_owners_count":"crwdns18136:0crwdne18136:0","plugin_trader_sales":"crwdns18138:0crwdne18138:0","plugin_trader_rank":"crwdns17668:0{{rank}}crwdne17668:0","plugin_trader_info":"crwdns17670:0crwdne17670:0","plugin_trader_website":"crwdns19883:0crwdne19883:0","plugin_trader_community":"crwdns17672:0crwdne17672:0","plugin_savings":"crwdns13250:0crwdne13250:0","plugin_savings_asset":"crwdns14804:0crwdne14804:0","plugin_savings_apr":"crwdns13256:0crwdne13256:0","plugin_savings_wallet":"crwdns13258:0crwdne13258:0","plugin_savings_operation":"crwdns13260:0crwdne13260:0","plugin_savings_amount":"crwdns13262:0crwdne13262:0","plugin_savings_deposit":"crwdns13264:0crwdne13264:0","plugin_savings_swap_token":"crwdns19937:0{{token}}crwdne19937:0","plugin_savings_withdraw_token":"crwdns19939:0{{token}}crwdne19939:0","plugin_savings_withdraw":"crwdns13266:0crwdne13266:0","plugin_savings_process_deposit":"crwdns13268:0crwdne13268:0","plugin_savings_process_withdraw":"crwdns13270:0crwdne13270:0","plugin_savings_no_protocol":"crwdns20149:0crwdne20149:0","plugin_trader_swap":"crwdns4881:0crwdne4881:0","plugin_trader_wrap":"crwdns4883:0crwdne4883:0","plugin_trader_swap_from":"crwdns10441:0crwdne10441:0","plugin_trader_swap_receive":"crwdns17696:0crwdne17696:0","plugin_trader_unwrap":"crwdns4885:0crwdne4885:0","plugin_trader_buy":"crwdns4887:0crwdne4887:0","plugin_trader_no_data":"crwdns4889:0crwdne4889:0","plugin_trader_tab_market":"crwdns4891:0crwdne4891:0","plugin_trader_tab_price":"crwdns4893:0crwdne4893:0","plugin_trader_tab_exchange":"crwdns4895:0crwdne4895:0","plugin_trader_tab_activities":"crwdns19359:0crwdne19359:0","plugin_trader_nft_items":"crwdns18140:0crwdne18140:0","plugin_trader_table_nft":"crwdns19361:0crwdne19361:0","plugin_trader_table_method":"crwdns19363:0crwdne19363:0","plugin_trader_table_value":"crwdns19365:0crwdne19365:0","plugin_trader_table_from":"crwdns19367:0crwdne19367:0","plugin_trader_table_to":"crwdns19369:0crwdne19369:0","plugin_trader_table_time":"crwdns19371:0crwdne19371:0","plugin_trader_error_amount_absence":"crwdns4915:0crwdne4915:0","plugin_trader_error_insufficient_balance":"crwdns4917:0{{symbol}}crwdne4917:0","plugin_trader_error_insufficient_lp":"crwdns4919:0crwdne4919:0","plugin_trade_error_input_amount_less_minimum_amount":"crwdns4923:0crwdne4923:0","plugin_trader_slippage_tolerance":"crwdns7917:0crwdne7917:0","plugin_trader_gas_fee":"crwdns10445:0crwdne10445:0","plugin_trader_unlock_symbol":"crwdns10447:0{{symbol}}crwdne10447:0","plugin_trader_unlock_tips":"crwdns10449:0{{provider}}crwdnd10449:0{{symbol}}crwdne10449:0","plugin_trader_swap_amount_symbol":"crwdns10451:0crwdne10451:0","plugin_trader_confirm_from":"crwdns10453:0crwdne10453:0","plugin_trader_confirm_to":"crwdns10455:0crwdne10455:0","plugin_trader_confirm_slippage_tolerance":"crwdns17698:0crwdne17698:0","plugin_trader_confirm_tx_cost":"crwdns17700:0{{usd}}crwdne17700:0","plugin_trader_confirm_minimum_received":"crwdns10459:0crwdne10459:0","plugin_trader_confirm_tips":"crwdns10461:0crwdne10461:0","plugin_trader_price_impact_warning_tips":"crwdns13021:0crwdne13021:0","plugin_trader_price_impact_too_high_tips":"crwdns17702:0{{impact}}crwdne17702:0","plugin_trader_confirm_swap":"crwdns13023:0crwdne13023:0","plugin_trader_update":"crwdns17704:0crwdne17704:0","plugin_trader_price_impact":"crwdns13027:0crwdne13027:0","plugin_trader_price_image_value":"crwdns13029:0{{percent}}crwdne13029:0","plugin_trader_slippage_warning":"crwdns13031:0crwdne13031:0","plugin_trader_confirm_price_impact":"crwdns13033:0{{percent}}crwdne13033:0","plugin_trader_max_slippage":"crwdns10463:0crwdne10463:0","plugin_trader_gas_setting_instant":"crwdns10465:0crwdne10465:0","plugin_trader_gas_setting_high":"crwdns10467:0crwdne10467:0","plugin_trader_gas_setting_medium":"crwdns10469:0crwdne10469:0","plugin_trader_gas_setting_standard":"crwdns10471:0crwdne10471:0","plugin_trader_gas_setting_fast":"crwdns10473:0crwdne10473:0","plugin_trader_gas_setting_custom":"crwdns10475:0crwdne10475:0","plugin_trader_tx_cost_usd":"crwdns10477:0{{usd}}crwdne10477:0","plugin_trader_tx_cost_usd_new":"crwdns19065:0{{usd}}crwdne19065:0","plugin_trader_tx_cost_very_small":"crwdns16490:0{{usd}}crwdne16490:0","plugin_trader_gas_option":"crwdns10479:0{{option}}crwdnd10479:0{{value}}crwdne10479:0","plugin_trader_no_enough_liquidity":"crwdns10481:0crwdne10481:0","plugin_trader_no_trade":"crwdns10483:0crwdne10483:0","plugin_trader_swap_risk":"crwdns17738:0crwdne17738:0","plugin_trader_gas":"crwdns10485:0crwdne10485:0","plugin_poll_display_name":"crwdns4941:0crwdne4941:0","plugin_poll_question_hint":"crwdns4943:0crwdne4943:0","plugin_poll_options_hint":"crwdns4945:0crwdne4945:0","plugin_poll_length":"crwdns4947:0crwdne4947:0","plugin_poll_length_days":"crwdns4949:0crwdne4949:0","plugin_poll_length_hours":"crwdns4951:0crwdne4951:0","plugin_poll_length_minutes":"crwdns4953:0crwdne4953:0","plugin_poll_length_unknown":"crwdns4955:0crwdne4955:0","plugin_poll_create_new":"crwdns4957:0crwdne4957:0","plugin_poll_select_existing":"crwdns4959:0crwdne4959:0","plugin_poll_send_poll":"crwdns4961:0crwdne4961:0","plugin_poll_status_closed":"crwdns4963:0crwdne4963:0","plugin_poll_status_voting":"crwdns4965:0crwdne4965:0","plugin_poll_status_voted":"crwdns4967:0crwdne4967:0","plugin_poll_deadline":"crwdns4969:0{{time}}crwdne4969:0","plugin_collectibles_name":"crwdns19789:0crwdne19789:0","plugin_collectibles_description":"crwdns19791:0crwdne19791:0","plugin_infra_descriptor_nft_approve_title":"crwdns18388:0{{action}}crwdne18388:0","plugin_infra_descriptor_nft_approve":"crwdns18390:0{{action}}crwdnd18390:0{{symbol}}crwdne18390:0","plugin_infra_descriptor_nft_approve_success":"crwdns18392:0{{action}}crwdnd18392:0{{symbol}}crwdne18392:0","plugin_infra_descriptor_nft_revoke_success":"crwdns18394:0{{action}}crwdnd18394:0{{symbol}}crwdne18394:0","plugin_infra_descriptor_nft_approve_fail":"crwdns18396:0{{action}}crwdne18396:0","plugin_infra_descriptor_nft_transfer_title":"crwdns18398:0crwdne18398:0","plugin_infra_descriptor_nft_transfer_fail":"crwdns18400:0crwdne18400:0","plugin_infra_descriptor_nft_transfer_success":"crwdns18402:0{{symbol}}crwdne18402:0","plugin_infra_descriptor_nft_transfer":"crwdns18404:0{{symbol}}crwdne18404:0","plugin_infra_descriptor_token_revoke":"crwdns18406:0{{symbol}}crwdne18406:0","plugin_infra_descriptor_token_transfer_title":"crwdns18408:0crwdne18408:0","plugin_infra_descriptor_token_transfer":"crwdns18410:0{{- tokenAmountDescription}}crwdne18410:0","plugin_infra_descriptor_token_transfer_fail":"crwdns18412:0crwdne18412:0","plugin_infra_descriptor_token_transfer_success":"crwdns18414:0{{- tokenAmountDescription}}crwdne18414:0","plugin_infra_descriptor_token_revoke_title":"crwdns18416:0crwdne18416:0","plugin_infra_descriptor_token_revoke_success":"crwdns18418:0crwdne18418:0","plugin_infra_descriptor_token_revoke_fail":"crwdns18420:0crwdne18420:0","plugin_infra_descriptor_token_approve_title":"crwdns18422:0crwdne18422:0","plugin_infra_descriptor_token_approve":"crwdns18424:0{{- tokenAmountDescription}}crwdne18424:0","plugin_infra_descriptor_token_approve_success":"crwdns18426:0{{- tokenAmountDescription}}crwdne18426:0","plugin_infra_descriptor_token_revoke_but_set_positive_cap":"crwdns20007:0{{- tokenAmountDescription}}crwdnd20007:0{{spender}}crwdne20007:0","plugin_infra_descriptor_token_approve_but_set_zero_cap":"crwdns20009:0{{symbol}}crwdne20009:0","plugin_infra_descriptor_token_fail":"crwdns18428:0crwdne18428:0","plugin_infra_descriptor_token_deposit_title":"crwdns18616:0crwdne18616:0","plugin_infra_descriptor_token_deposit":"crwdns18618:0{{- tokenAmountDescription}}crwdne18618:0","plugin_infra_descriptor_token_deposit_success":"crwdns18620:0{{- tokenAmountDescription}}crwdne18620:0","plugin_infra_descriptor_token_deposit_fail":"crwdns18622:0{{symbol}}crwdne18622:0","plugin_infra_descriptor_token_withdraw_title":"crwdns18624:0crwdne18624:0","plugin_infra_descriptor_token_withdraw":"crwdns18626:0{{- tokenAmountDescription}}crwdne18626:0","plugin_infra_descriptor_token_withdraw_success":"crwdns18628:0{{- tokenAmountDescription}}crwdne18628:0","plugin_infra_descriptor_token_withdraw_fail":"crwdns18630:0{{symbol}}crwdne18630:0","plugin_infra_descriptor_mask_box_purchase_title":"crwdns18454:0crwdne18454:0","plugin_infra_descriptor_mask_box_purchase_success":"crwdns18456:0{{- tokenAmountDescription}}crwdne18456:0","plugin_infra_descriptor_mask_box_purchase":"crwdns18458:0crwdne18458:0","plugin_infra_descriptor_mask_box_purchase_fail":"crwdns18460:0crwdne18460:0","plugin_infra_descriptor_gitcoin_donate_title":"crwdns19827:0crwdne19827:0","plugin_infra_descriptor_gitcoin_donate":"crwdns19829:0{{- amount}}crwdnd19829:0{{symbol}}crwdne19829:0","plugin_infra_descriptor_gitcoin_submitted":"crwdns19831:0crwdne19831:0","plugin_infra_descriptor_gitcoin_donate_success":"crwdns19833:0{{- amount}}crwdnd19833:0{{symbol}}crwdne19833:0","plugin_infra_descriptor_gitcoin_donate_fail":"crwdns19835:0crwdne19835:0","plugin_snapshot_info_title":"crwdns5353:0crwdne5353:0","plugin_snapshot_info_strategy":"crwdns5355:0crwdne5355:0","plugin_snapshot_info_author":"crwdns5357:0crwdne5357:0","plugin_snapshot_info_ipfs":"crwdns5359:0crwdne5359:0","plugin_snapshot_info_start":"crwdns5361:0crwdne5361:0","plugin_snapshot_info_end":"crwdns5363:0crwdne5363:0","plugin_snapshot_info_snapshot":"crwdns5365:0crwdne5365:0","plugin_snapshot_info_dao":"crwdns20097:0crwdne20097:0","plugin_snapshot_description":"crwdns16252:0crwdne16252:0","plugin_snapshot_result_title":"crwdns5367:0crwdne5367:0","plugin_snapshot_votes_title":"crwdns5369:0crwdne5369:0","plugin_snapshot_votes_yourself":"crwdns19485:0crwdne19485:0","plugin_snapshot_no_power":"crwdns5371:0crwdne5371:0","plugin_snapshot_vote_success":"crwdns5373:0crwdne5373:0","plugin_snapshot_vote_failed":"crwdns18646:0crwdne18646:0","plugin_snapshot_vote":"crwdns5375:0crwdne5375:0","plugin_snapshot_vote_choice":"crwdns5377:0crwdne5377:0","plugin_snapshot_vote_power":"crwdns5379:0crwdne5379:0","plugin_snapshot_vote_title":"crwdns5381:0crwdne5381:0","plugin_snapshot_my_vote":"crwdns20033:0crwdne20033:0","plugin_snapshot_space_info_followers_count":"crwdns20035:0{{followersCount}}crwdne20035:0","plugin_snapshot_proposal_not_start":"crwdns20037:0{{date}}crwdne20037:0","plugin_snapshot_proposal_started":"crwdns20039:0{{date}}crwdne20039:0","plugin_snapshot_proposal_ended":"crwdns20041:0{{date}}crwdne20041:0","plugin_snapshot_proposal_no_results":"crwdns20043:0crwdne20043:0","plugin_snapshot_space":"crwdns20045:0crwdne20045:0","plugin_snapshot_space_join":"crwdns20047:0crwdne20047:0","plugin_snapshot_space_view":"crwdns20167:0crwdne20167:0","plugin_snapshot_proposal":"crwdns18648:0crwdne18648:0","plugin_snapshot_progress":"crwdns18650:0crwdne18650:0","plugin_snapshot_load_failed":"crwdns18652:0crwdne18652:0","plugin_snapshot_vote_confirm_dialog_title":"crwdns5383:0crwdne5383:0","plugin_snapshot_vote_confirm_dialog_choice":"crwdns5385:0{{- choiceText}}crwdne5385:0","plugin_snapshot_vote_confirm_dialog_warning":"crwdns5387:0crwdne5387:0","plugin_snapshot_current_result_title":"crwdns5389:0crwdne5389:0","plugin_snapshot_download_report":"crwdns5391:0crwdne5391:0","plugin_pets_name":"crwdns16260:0crwdne16260:0","plugin_pets_description":"crwdns16262:0crwdne16262:0","wallet_verify_persona_sign":"crwdns16310:0crwdne16310:0","wallet_verify_has_bound":"crwdns16312:0{{currentPersona}}crwdne16312:0","wallet_verify_persona_name":"crwdns16314:0{{- personaName}}crwdne16314:0","wallet_verify_empty_alert":"crwdns16408:0crwdne16408:0","wallet_verify_persona_sign_intro":"crwdns16316:0crwdne16316:0","waller_verify_wallet_sign_intro":"crwdns16318:0crwdne16318:0","popups_welcome_to_mask_network":"crwdns20605:0crwdne20605:0","popups_persona_description":"crwdns20607:0crwdne20607:0","popups_add_wallet":"crwdns16320:0crwdne16320:0","popups_add_wallet_description":"crwdns21851:0crwdne21851:0","popups_add_persona_description":"crwdns22025:0crwdne22025:0","popups_create_a_new_wallet_title":"crwdns21631:0crwdne21631:0","popups_generate_a_new_wallet_address":"crwdns21633:0crwdne21633:0","popups_generate_a_new_persona":"crwdns22027:0crwdne22027:0","popups_import_wallet":"crwdns21337:0crwdne21337:0","popups_import_wallets":"crwdns21635:0crwdne21635:0","popups_import_wallets_description":"crwdns21637:0crwdne21637:0","popups_import_persona_description":"crwdns22029:0crwdne22029:0","popups_lock_wallet":"crwdns21339:0crwdne21339:0","popups_wallet_settings":"crwdns21341:0crwdne21341:0","popups_verify_persona_sign_success":"crwdns16564:0crwdne16564:0","popups_verify_persona_sign_failed":"crwdns16566:0crwdne16566:0","popups_verify_wallet_sign_success":"crwdns16568:0crwdne16568:0","popups_verify_wallet_sign_failed":"crwdns16570:0crwdne16570:0","popups_profile_photo":"crwdns16322:0crwdne16322:0","popups_public_key":"crwdns16324:0crwdne16324:0","popups_create_persona":"crwdns16402:0crwdne16402:0","popups_restore_and_login":"crwdns16404:0crwdne16404:0","popups_name":"crwdns16326:0crwdne16326:0","popups_connect_social_tips":"crwdns20609:0crwdne20609:0","popups_save_successfully":"crwdns20611:0crwdne20611:0","popups_save_failed":"crwdns20613:0crwdne20613:0","popups_display_web3_address_tips":"crwdns20615:0crwdne20615:0","popups_verify_account_tips":"crwdns20617:0crwdne20617:0","popups_other_social_accounts_tips":"crwdns20619:0crwdne20619:0","popups_empty_wallet_proofs_tips":"crwdns20621:0crwdne20621:0","popups_social_account":"crwdns16328:0crwdne16328:0","popups_connected_wallets":"crwdns16330:0crwdne16330:0","popups_change_owner":"crwdns19335:0crwdne19335:0","popups_wallet_connected_status$connected":"crwdns18260:0crwdne18260:0","popups_wallet_connected_status$unconnected":"crwdns18262:0crwdne18262:0","popups_loading":"crwdns16332:0crwdne16332:0","popups_connect_your_web2_social_accounts":"crwdns16338:0crwdne16338:0","popups_connect_social_account":"crwdns16340:0crwdne16340:0","popups_disconnect_success":"crwdns16342:0crwdne16342:0","popups_disconnect_failed":"crwdns16344:0crwdne16344:0","popups_new_disconnect_warning_alert":"crwdns18656:0{{account}}crwdnd18656:0{{account}}crwdne18656:0","popups_disconnect_other_warning_alert":"crwdns18658:0crwdne18658:0","popups_verify_account":"crwdns16350:0crwdne16350:0","popups_disconnect_wallet_tip":"crwdns16352:0{{persona}}crwdnd16352:0{{address}}crwdne16352:0","popups_add_and_verify_wallet":"crwdns16354:0crwdne16354:0","popups_add_derive":"crwdns16356:0crwdne16356:0","popups_rename":"crwdns16358:0crwdne16358:0","popups_speed_up_transaction":"crwdns16360:0crwdne16360:0","popups_cancel_transaction":"crwdns16362:0crwdne16362:0","popups_import_the_wallet":"crwdns16364:0crwdne16364:0","popups_delete_wallet":"crwdns16366:0crwdne16366:0","popups_release_bind_wallet_title":"crwdns21583:0crwdne21583:0","popups_release_bind_wallet_tips":"crwdns21585:0{{personaName}}crwdnd21585:0{{identity}}crwdne21585:0","popups_create_wallet":"crwdns16368:0crwdne16368:0","popups_back_up_the_wallet":"crwdns16370:0crwdne16370:0","popups_recovery_wallet":"crwdns16372:0crwdne16372:0","popups_wallet_setting":"crwdns16374:0crwdne16374:0","popups_wallet_settings_change_network":"crwdns22059:0crwdne22059:0","popups_wallet_settings_auto_unlock_time":"crwdns22061:0crwdne22061:0","popups_wallet_settings_auto_unlock_time_mins":"crwdns22063:0{{time}}crwdne22063:0","popups_wallet_settings_auto-unlock_time_hour_one":"crwdns22209:0{{count}}crwdne22209:0","popups_wallet_settings_auto-unlock_time_hour_other":"crwdns22211:0{{count}}crwdne22211:0","popups_wallet_settings_auto_unlock_time_title":"crwdns22065:0crwdne22065:0","popups_wallet_settings_change_payment_password":"crwdns22067:0crwdne22067:0","popups_wallet_settings_show_private_key":"crwdns22069:0crwdne22069:0","popups_wallet_settings_backup_wallet":"crwdns22233:0crwdne22233:0","popups_wallet_settings_enter_payment_password":"crwdns22235:0crwdne22235:0","popups_wallet_settings_export_private_key_title":"crwdns22237:0crwdne22237:0","popups_wallet_settings_rename_tips":"crwdns22071:0crwdne22071:0","popups_wallet_settings_name_exists":"crwdns22073:0crwdne22073:0","popups_wallet_settings_remove_wallet":"crwdns22075:0crwdne22075:0","remove_wallet_title":"crwdns22261:0crwdne22261:0","remove_wallet_message":"crwdns22259:0{{wallet}}crwdnd22259:0{{other_wallets}}crwdne22259:0","popups_wallet_settings_are_you_sure_remove_wallet":"crwdns22077:0crwdne22077:0","popups_wallet_settings_address_exists":"crwdns22079:0crwdne22079:0","popups_wallet_settings_auto_lock_tips":"crwdns22081:0crwdne22081:0","popups_wallet_settings_minutes":"crwdns22083:0crwdne22083:0","popups_wallet_settings_auto_lock_number_only":"crwdns22085:0crwdne22085:0","popups_wallet_settings_current_management_account":"crwdns22087:0crwdne22087:0","popups_wallet_settings_local_persona_or_wallet_only":"crwdns22089:0crwdne22089:0","popups_wallet_connected_sites":"crwdns22223:0crwdne22223:0","popups_wallet_connected_sites_description":"crwdns22225:0crwdne22225:0","popups_wallet_disconnect_confirm":"crwdns22227:0crwdne22227:0","popups_wallet_disconnect_all":"crwdns22229:0crwdne22229:0","popups_wallet_disconnect_site_success":"crwdns22231:0crwdne22231:0","popups_gas_fee_settings":"crwdns16376:0crwdne16376:0","popups_assets":"crwdns16378:0crwdne16378:0","popups_send":"crwdns16380:0crwdne16380:0","popups_set_the_payment_password":"crwdns16382:0crwdne16382:0","popups_set_the_payment_password_title":"crwdns21639:0crwdne21639:0","popups_log_out":"crwdns16384:0crwdne16384:0","popups_following_permissions":"crwdns10271:0{{pluginName}}crwdnd10271:0{{pluginURL}}crwdne10271:0","popups_permissions":"crwdns10281:0crwdne10281:0","popups_sites":"crwdns10283:0crwdne10283:0","popups_mask_requests_permission":"crwdns10285:0crwdne10285:0","popups_grant":"crwdns10287:0crwdne10287:0","popups_no_wallets_found":"crwdns19503:0crwdne19503:0","popups_no_persona_found":"crwdns19505:0crwdne19505:0","popups_permission_request":"crwdns10289:0crwdne10289:0","popups_permission_request_content":"crwdns10291:0crwdne10291:0","popups_permission_request_content2":"crwdns10293:0crwdne10293:0","popups_welcome":"crwdns7757:0crwdne7757:0","popups_wallet_token":"crwdns7759:0crwdne7759:0","popups_wallet_collectible":"crwdns21785:0crwdne21785:0","popups_wallet_collectible_added_successfully":"crwdns22137:0crwdne22137:0","popups_wallet_dialog_legacy_wallet_tip":"crwdns9463:0crwdne9463:0","popups_wallet_set_payment_password":"crwdns9307:0crwdne9307:0","popups_wallet_create_payment_password":"crwdns19301:0crwdne19301:0","popups_wallet_payment_password":"crwdns9309:0crwdne9309:0","popups_wallet_set_up_payment_password":"crwdns9311:0crwdne9311:0","popups_wallet_old_payment_password":"crwdns22091:0crwdne22091:0","popups_wallet_new_payment_password":"crwdns22093:0crwdne22093:0","popups_wallet_confirm_password":"crwdns22095:0crwdne22095:0","popups_wallet_new_password_not_match":"crwdns22097:0crwdne22097:0","popups_wallet_create_payment_password_tip":"crwdns19303:0crwdne19303:0","popups_wallet_set_payment_password_successfully":"crwdns22157:0crwdne22157:0","popups_wallet_term_of_service_agree_part_1":"crwdns21641:0crwdne21641:0","popups_wallet_term_of_service_agree_part_2":"crwdns21643:0crwdne21643:0","popups_wallet_reset_tips":"crwdns21645:0crwdne21645:0","popups_wallet_payment_password_tip":"crwdns9313:0crwdne9313:0","create_wallet_incorrect_payment_password":"crwdns22099:0crwdne22099:0","popups_wallet_start_up_tip":"crwdns7763:0crwdne7763:0","popups_wallet_name_placeholder":"crwdns7777:0crwdne7777:0","popups_wallet_name_mnemonic":"crwdns10751:0crwdne10751:0","popups_wallet_name_json_file":"crwdns10753:0crwdne10753:0","popups_wallet_name_private_key":"crwdns10755:0crwdne10755:0","popups_wallet_name_keystore":"crwdns22449:0crwdne22449:0","popups_wallet_name_mnemonic_placeholder":"crwdns10757:0crwdne10757:0","popups_wallet_name_origin_password":"crwdns10759:0crwdne10759:0","popups_wallet_tab_assets":"crwdns7781:0crwdne7781:0","popups_wallet_tab_collectibles":"crwdns21625:0crwdne21625:0","popups_wallet_tab_activity":"crwdns7783:0crwdne7783:0","popups_wallet_derivation_path":"crwdns7785:0{{- path }}crwdne7785:0","popups_wallet_transfer_to":"crwdns21695:0crwdne21695:0","popups_wallet_next":"crwdns7789:0crwdne7789:0","popups_wallet_backup_wallet":"crwdns7797:0crwdne7797:0","popups_wallet_backup_json_file":"crwdns7799:0crwdne7799:0","popups_wallet_backup_private_key":"crwdns7801:0crwdne7801:0","popups_wallet_reset_wallet":"crwdns21647:0crwdne21647:0","popups_wallet_reset_wallet_description_1":"crwdns21853:0crwdne21853:0","popups_wallet_reset_wallet_description_2":"crwdns21855:0crwdne21855:0","popups_wallet_reset_wallet_description_3":"crwdns21857:0crwdne21857:0","popups_wallet_backup_json_file_confirm_password_tip":"crwdns7803:0crwdne7803:0","popups_wallet_backup_private_key_tip":"crwdns7805:0crwdne7805:0","popups_wallet_backup_input_password":"crwdns7807:0crwdne7807:0","popups_wallet_logout_input_payment_password":"crwdns22169:0crwdne22169:0","popups_wallet_backup_json_file_drag_tip":"crwdns7809:0crwdne7809:0","popups_wallet_backup_json_file_click_tip":"crwdns7811:0crwdne7811:0","popups_wallet_backup_mnemonic_title":"crwdns22239:0crwdne22239:0","popups_wallet_backup_mnemonic_tips":"crwdns22241:0crwdne22241:0","popups_wallet_backup_mnemonic_view_tips":"crwdns22243:0crwdne22243:0","popups_wallet_backup_mnemonic_hidden":"crwdns22245:0crwdne22245:0","popups_wallet_backup_private_key_view_tips":"crwdns22247:0crwdne22247:0","popups_wallet_backup_copy_private_key":"crwdns22249:0crwdne22249:0","popups_wallet_enter_your_wallet_name":"crwdns7813:0crwdne7813:0","popups_wallet_delete_tip":"crwdns7815:0crwdne7815:0","popups_smart_pay_delete_tip":"crwdns19825:0{{management}}crwdnd19825:0{{addresses}}crwdne19825:0","popups_smart_pay_delete_tip_confirm":"crwdns19853:0crwdne19853:0","popups_wallet_confirm_payment_password":"crwdns7817:0crwdne7817:0","popups_wallet_token_buy":"crwdns7819:0crwdne7819:0","popups_wallet_token_send":"crwdns7821:0crwdne7821:0","popups_wallet_token_swap":"crwdns7823:0crwdne7823:0","popups_wallet_disconnect_failed":"crwdns16336:0crwdne16336:0","popups_wallet_view_on_explorer":"crwdns8057:0crwdne8057:0","popups_wallet_gas_fee_settings":"crwdns7837:0crwdne7837:0","popups_wallet_gas_fee_settings_description":"crwdns7839:0crwdne7839:0","popups_wallet_gas_fee_settings_low":"crwdns7841:0crwdne7841:0","popups_wallet_gas_fee_settings_medium":"crwdns7843:0crwdne7843:0","popups_wallet_gas_fee_settings_high":"crwdns7845:0crwdne7845:0","popups_wallet_gas_fee_settings_instant":"crwdns21887:0crwdne21887:0","popups_wallet_gas_fee_settings_custom":"crwdns21889:0crwdne21889:0","popups_wallet_gas_fee":"crwdns21891:0crwdne21891:0","popups_wallet_gas_price_too_low":"crwdns21893:0crwdne21893:0","popups_wallet_invalid_gas_limit":"crwdns22039:0crwdne22039:0","popups_wallet_priority_fee_is_zero":"crwdns22041:0crwdne22041:0","popups_wallet_priority_fee_is_too_high":"crwdns22043:0crwdne22043:0","popups_wallet_priority_fee_is_too_low":"crwdns22045:0crwdne22045:0","popups_wallet_max_fee_is_too_low":"crwdns22047:0{{minimum}}crwdne22047:0","popups_wallet_gas_price_estimate_second":"crwdns21895:0{{seconds}}crwdne21895:0","popups_wallet_gas_price_current_base_fee":"crwdns21897:0{{baseFee}}crwdne21897:0","popups_wallet_gas_max_priority_fee_too_low":"crwdns21899:0crwdne21899:0","popups_wallet_gas_fee_settings_usd":"crwdns7847:0{{usd}}crwdne7847:0","popups_wallet_gas_fee_settings_gas_limit":"crwdns7855:0crwdne7855:0","popups_wallet_gas_fee_settings_max_priority_fee":"crwdns7857:0crwdne7857:0","popups_wallet_gas_fee_settings_max_fee":"crwdns7859:0crwdne7859:0","popups_wallet_gas_fee_settings_min_gas_limit_tips":"crwdns8993:0{{limit}}crwdne8993:0","popups_wallet_multiple_requests":"crwdns21989:0{{index}}crwdnd21989:0{{total}}crwdne21989:0","popups_wallet_reject_all_requests":"crwdns21991:0{{total}}crwdne21991:0","popups_wallet_view_full_detail_transaction":"crwdns21993:0crwdne21993:0","popups_wallet_transaction_function_name":"crwdns21995:0{{name}}crwdne21995:0","popups_wallet_speed_up_transaction_tips":"crwdns21901:0crwdne21901:0","popups_wallet_cancel_transaction_tips":"crwdns21903:0crwdne21903:0","popups_wallet_signature_request_title":"crwdns16386:0crwdne16386:0","popups_wallet_signature_request":"crwdns7861:0crwdne7861:0","popups_wallet_signature_request_message":"crwdns8059:0crwdne8059:0","popups_wallet_contract_interaction":"crwdns8061:0crwdne8061:0","popups_wallet_token_unlock_permission":"crwdns13035:0crwdne13035:0","popups_wallet_token_infinite_unlock":"crwdns13037:0crwdne13037:0","popups_wallet_contract_interaction_transfer":"crwdns8065:0crwdne8065:0","popups_wallet_contract_interaction_gas_fee":"crwdns8067:0crwdne8067:0","popups_wallet_contract_interaction_edit":"crwdns8069:0crwdne8069:0","popups_wallet_contract_interaction_total":"crwdns8071:0crwdne8071:0","popups_wallet_password_not_match":"crwdns18660:0crwdne18660:0","popups_wallet_password_length_error":"crwdns9319:0crwdne9319:0","popups_wallet_password_change_successful":"crwdns22101:0crwdne22101:0","popups_wallet_unlock_wallet":"crwdns8073:0crwdne8073:0","popups_wallet_unlock_error_password":"crwdns8075:0crwdne8075:0","popups_wallet_persona_log_out_error_payment_password":"crwdns22141:0crwdne22141:0","popups_wallet_activity_to_address":"crwdns8211:0{{address}}crwdne8211:0","popups_wallet_transfer_error_tip":"crwdns8997:0crwdne8997:0","popups_wallet_transactions_pending":"crwdns9005:0crwdne9005:0","popups_wallet_re_send":"crwdns8999:0crwdne8999:0","popups_wallet_choose_token":"crwdns9001:0crwdne9001:0","popups_wallet_gas_price":"crwdns9003:0crwdne9003:0","popups_wallet_done":"crwdns9321:0crwdne9321:0","popups_wallet_recovered":"crwdns9323:0crwdne9323:0","popups_wallet_no_transactions":"crwdns9325:0crwdne9325:0","popups_wallet_more_expand":"crwdns18534:0crwdne18534:0","popups_wallet_more_collapse":"crwdns18532:0crwdne18532:0","popups_wallet_change_owner":"crwdns19453:0crwdne19453:0","popups_wallet_current_managed_accounts":"crwdns19455:0crwdne19455:0","popups_wallet_set_a_new_manage_account":"crwdns19457:0crwdne19457:0","popups_wallet_wallets":"crwdns19461:0crwdne19461:0","popups_missing_parameter_caption":"crwdns7827:0crwdne7827:0","popups_persona_connect_to":"crwdns8973:0{{type}}crwdne8973:0","popups_persona_to_be_verified":"crwdns14716:0crwdne14716:0","popups_persona_disconnect":"crwdns8975:0crwdne8975:0","popups_persona_disconnect_confirmation":"crwdns14718:0crwdne14718:0","popups_new_persona_disconnect_confirmation":"crwdns18662:0crwdne18662:0","popups_disconnect_persona":"crwdns21719:0crwdne21719:0","popups_new_persona_disconnect_confirmation_description":"crwdns18664:0crwdne18664:0","popups_persona_disconnect_confirmation_description":"crwdns14720:0crwdne14720:0","popups_persona_disconnect_tips":"crwdns20623:0{{- identity}}crwdnd20623:0{{- personaName}}crwdne20623:0","popups_wallet_disconnect_tips":"crwdns21727:0{{wallet}}crwdne21727:0","popups_persona":"crwdns14722:0crwdne14722:0","popups_twitter_id":"crwdns14724:0crwdne14724:0","popups_persona_logout":"crwdns8977:0crwdne8977:0","popups_persona_disconnect_tip":"crwdns8979:0crwdne8979:0","popups_persona_disconnect_manage_wallet_warning":"crwdns19463:0{{persona}}crwdnd19463:0{{addresses}}crwdne19463:0","popups_persona_persona_name_exists":"crwdns8981:0crwdne8981:0","popups_persona_sign_request_title":"crwdns13137:0crwdne13137:0","popups_persona_sign_request_message":"crwdns13139:0crwdne13139:0","popups_password_do_not_match":"crwdns8983:0crwdne8983:0","popups_backup_password":"crwdns8985:0crwdne8985:0","popups_rename_error_tip":"crwdns8987:0{{length}}crwdne8987:0","popups_select_wallet_to_verify_tips":"crwdns21587:0crwdne21587:0","popups_wait_for_provider_connect_title":"crwdns21589:0{{providerType}}crwdne21589:0","popups_wait_for_provider_connect_tips":"crwdns21591:0{{providerType}}crwdne21591:0","popups_wait_for_provider_connect_timeout":"crwdns21593:0crwdne21593:0","popups_cancel_connect_provider":"crwdns21595:0crwdne21595:0","popups_not_connected_third_party_wallet_title":"crwdns21597:0crwdne21597:0","popups_not_connected_third_party_wallet_tips":"crwdns21599:0{{providerType}}crwdne21599:0","popups_not_connected_third_party_wallet_description":"crwdns21601:0crwdne21601:0","popups_choose_another_wallet":"crwdns21603:0crwdne21603:0","popups_verify_wallet_description":"crwdns21605:0crwdne21605:0","popups_verify_wallet_bounded_tips":"crwdns21607:0{{persona}}crwdne21607:0","popups_verify_wallet_sign_success_tips":"crwdns21609:0crwdne21609:0","popups_verify_wallet_sign_fail_tips":"crwdns21611:0crwdne21611:0","popups_verify_wallet_bind_fail_tips":"crwdns21613:0crwdne21613:0","popups_verify_wallet_congratulation_tips":"crwdns21615:0{{persona}}crwdnd21615:0{{wallet}}crwdne21615:0","popups_switch_Wallet":"crwdns21617:0crwdne21617:0","popups_encrypted_friends":"crwdns22105:0crwdne22105:0","popups_encrypted_friends_search_placeholder":"crwdns22107:0crwdne22107:0","popups_encrypted_friends_search_no_result":"crwdns22109:0crwdne22109:0","popups_encrypted_friends_no_friends":"crwdns22111:0crwdne22111:0","popups_encrypted_friends_add_friends":"crwdns22113:0crwdne22113:0","popups_encrypted_friends_no_associated_accounts":"crwdns22163:0crwdne22163:0","popups_encrypted_friends_deleted_successfully":"crwdns22191:0crwdne22191:0","popups_encrypted_friends_added_successfully":"crwdns22193:0crwdne22193:0","popups_select_wallet":"crwdns21997:0crwdne21997:0","popups_switch_persona":"crwdns21805:0crwdne21805:0","popups_recovery":"crwdns21807:0crwdne21807:0","popups_next_id":"crwdns21809:0crwdne21809:0","popups_wallet_group_title":"crwdns22251:0{{index}}crwdne22251:0","popups_wallet_imported_group_title":"crwdns22253:0crwdne22253:0","popups_backup_persona":"crwdns22031:0crwdne22031:0","popups_persona_rename_tips":"crwdns21813:0crwdne21813:0","popups_backup_password_rules":"crwdns21815:0crwdne21815:0","popups_backup_password_rules_tips":"crwdns22143:0crwdne22143:0","popups_backup_password_tips":"crwdns21817:0crwdne21817:0","popups_backup_password_inconsistency":"crwdns21819:0crwdne21819:0","popups_backup_password_incorrect":"crwdns22145:0crwdne22145:0","popups_backup_password_invalid":"crwdns22159:0crwdne22159:0","popups_backup_password_set_successfully":"crwdns21821:0crwdne21821:0","popups_export_private_key_tips":"crwdns21823:0crwdne21823:0","popups_export_json_file_tips":"crwdns22103:0crwdne22103:0","popups_export_keystore_tips":"crwdns22451:0crwdne22451:0","popups_log_out_tips":"crwdns21825:0crwdne21825:0","popups_log_out_with_smart_pay_tips_one":"crwdns22151:0{{persona}}crwdne22151:0","popups_log_out_with_smart_pay_tips_other":"crwdns22153:0{{persona}}crwdne22153:0","popups_log_out_successfully":"crwdns21829:0crwdne21829:0","popups_log_out_failed":"crwdns21831:0crwdne21831:0","popups_profile_photo_image":"crwdns21833:0crwdne21833:0","popups_profile_photo_nfts":"crwdns21835:0crwdne21835:0","popups_profile_photo_drag_file":"crwdns21837:0crwdne21837:0","popups_profile_photo_size_limit":"crwdns21839:0crwdne21839:0","popups_profile_photo_browser_file":"crwdns21841:0crwdne21841:0","popups_select_and_connect_wallet":"crwdns21843:0crwdne21843:0","popups_set_avatar_successfully":"crwdns21845:0crwdne21845:0","popups_set_avatar_failed":"crwdns21847:0crwdne21847:0","popups_wallet_request_source":"crwdns21999:0crwdne21999:0","popups_wallet_sign_message":"crwdns22001:0crwdne22001:0","popups_wallet_unlock_erc20_title":"crwdns22003:0{{symbol}}crwdne22003:0","popups_wallet_unlock_erc20_tips":"crwdns22005:0crwdne22005:0","popups_wallet_unlock_erc20_placeholder":"crwdns22007:0crwdne22007:0","popups_wallet_unlock_erc20_requested_by":"crwdns22009:0crwdne22009:0","popups_wallet_unlock_erc20_balance_tips":"crwdns22011:0{{amount}}crwdnd22011:0{{symbol}}crwdne22011:0","popups_wallet_unlock_erc20_balance_too_high_tips":"crwdns22013:0crwdne22013:0","popups_wallet_unlock_erc20_revoke_tips":"crwdns22131:0crwdne22131:0","popups_wallet_unlock_erc20_approve_amount":"crwdns22015:0crwdne22015:0","popups_wallet_unlock_erc20_granted_to":"crwdns22017:0crwdne22017:0","popups_wallet_unlock_erc721_title":"crwdns22175:0{{symbol}}crwdne22175:0","popups_wallet_unlock_erc721_tips":"crwdns22177:0crwdne22177:0","popups_wallet_rpc_error":"crwdns22023:0crwdne22023:0","popups_wallet_gas_price_should_greater_than_zero":"crwdns22049:0crwdne22049:0","popups_settings_general":"crwdns22263:0crwdne22263:0","popups_settings_basic_setting":"crwdns22265:0crwdne22265:0","popups_settings_language":"crwdns22267:0crwdne22267:0","popups_settings_appearance":"crwdns22269:0crwdne22269:0","popups_settings_supported_sites":"crwdns22271:0crwdne22271:0","popups_settings_backup_and_recovery":"crwdns22273:0crwdne22273:0","popups_settings_data_correlation":"crwdns22275:0crwdne22275:0","popups_settings_cloud_backup":"crwdns22277:0crwdne22277:0","popups_settings_local_backup":"crwdns22279:0crwdne22279:0","popups_settings_restore_database":"crwdns22281:0crwdne22281:0","popups_settings_restore_database_description":"crwdns22283:0crwdne22283:0","popups_settings_backup_password":"crwdns22285:0crwdne22285:0","popups_settings_support":"crwdns22287:0crwdne22287:0","popups_settings_feedback":"crwdns22289:0crwdne22289:0","popups_settings_faq":"crwdns22291:0crwdne22291:0","popups_settings_website":"crwdns22293:0crwdne22293:0","popups_settings_about":"crwdns22295:0crwdne22295:0","popups_settings_version":"crwdns22297:0crwdne22297:0","popups_settings_service_agreement":"crwdns22299:0crwdne22299:0","popups_settings_primary_policy":"crwdns22301:0crwdne22301:0","popups_settings_language_auto":"crwdns22303:0crwdne22303:0","popups_settings_appearance_default":"crwdns22305:0crwdne22305:0","popups_settings_appearance_light":"crwdns22307:0crwdne22307:0","popups_settings_appearance_dark":"crwdns22309:0crwdne22309:0","popups_settings_select_language":"crwdns22311:0crwdne22311:0","popups_settings_supported_sites_description":"crwdns22313:0crwdne22313:0","popups_settings_supported_website_one":"crwdns22315:0{{count}}crwdne22315:0","popups_settings_supported_website_other":"crwdns22317:0{{count}}crwdne22317:0","popups_settings_change_backup_password":"crwdns22429:0crwdne22429:0","popups_settings_new_backup_password":"crwdns22321:0crwdne22321:0","popups_settings_new_backup_password_error_tips":"crwdns22323:0crwdne22323:0","popups_settings_backup_password_invalid":"crwdns22325:0crwdne22325:0","popups_settings_set_backup_password_tips":"crwdns22431:0crwdne22431:0","popups_settings_no_backup":"crwdns22433:0crwdne22433:0","popups_settings_backup_on":"crwdns22435:0{{time}}crwdne22435:0","popups_settings_local_backup_exist":"crwdns22437:0crwdne22437:0","popups_settings_cloud_backup_exist":"crwdns22439:0crwdne22439:0","popups_settings_not_set":"crwdns22441:0crwdne22441:0","nft_wallet_label":"crwdns9205:0crwdne9205:0","plugin_profile_no_wallets":"crwdns9327:0crwdne9327:0","nft_input_address_label":"crwdns9193:0crwdne9193:0","nft_input_tokenid_label":"crwdns9195:0crwdne9195:0","nft_owner_hint":"crwdns9197:0crwdne9197:0","nft_add_dialog_title":"crwdns9199:0crwdne9199:0","nft_add_button_label":"crwdns9201:0crwdne9201:0","nft_add_button_label_checking":"crwdns17298:0crwdne17298:0","nft_list_title":"crwdns9203:0crwdne9203:0","nft_wallet_change":"crwdns9207:0crwdne9207:0","nft_button_add_collectible":"crwdns9209:0crwdne9209:0","nft_avatar":"crwdns9211:0crwdne9211:0","web3_tab_hint":"crwdns14544:0crwdne14544:0","plugin_artblocks_not_active":"crwdns14480:0crwdne14480:0","plugin_artblocks_completed":"crwdns14482:0crwdne14482:0","plugin_artblocks_paused":"crwdns14484:0crwdne14484:0","plugin_artblocks_collection":"crwdns14486:0crwdne14486:0","plugin_artblocks_details":"crwdns14488:0crwdne14488:0","plugin_artblocks_created_by":"crwdns14490:0crwdne14490:0","plugin_artblocks_purchase":"crwdns14492:0crwdne14492:0","plugin_artblocks_purchasing":"crwdns14494:0crwdne14494:0","plugin_artblocks_legal_text":"crwdns14496:0crwdne14496:0","plugin_artblocks_check_tos_document":"crwdns14498:0crwdne14498:0","plugin_artblocks_price_per_mint":"crwdns14500:0crwdne14500:0","plugin_artblocks_price_row":"crwdns14502:0crwdne14502:0","plugin_artblocks_minted_row":"crwdns14504:0crwdne14504:0","plugin_artblocks_license_row":"crwdns14506:0crwdne14506:0","plugin_artblocks_library_row":"crwdns14508:0crwdne14508:0","plugin_artblocks_website":"crwdns14510:0crwdne14510:0","plugin_artblocks_infos":"crwdns14512:0crwdne14512:0","plugin_artblocks_chain":"crwdns14514:0crwdne14514:0","plugin_artblocks_blockchain_row":"crwdns14516:0crwdne14516:0","plugin_artblocks_contract_row":"crwdns14518:0crwdne14518:0","plugin_artblocks_smt_wrong":"crwdns14520:0crwdne14520:0","popups_wallet_disconnect_success":"crwdns16334:0crwdne16334:0","plugin_artblocks_share":"crwdns14522:0{{name}}crwdnd14522:0{{- price}}crwdnd14522:0{{symbol}}crwdne14522:0","plugin_artblocks_share_no_official_account":"crwdns14524:0{{name}}crwdnd14524:0{{- price}}crwdnd14524:0{{symbol}}crwdne14524:0","plugin_tips_disconnect_introduction":"crwdns16410:0{{persona}}crwdnd16410:0{{address}}crwdne16410:0","plugin_tips_not_evm_alert":"crwdns16414:0crwdne16414:0","plugin_artblocks_description":"crwdns16264:0crwdne16264:0","plugin_artblocks_name":"crwdns16266:0crwdne16266:0","plugin_ens_description":"crwdns18668:0crwdne18668:0","plugin_ens_name":"crwdns18670:0crwdne18670:0","nft_button_set_avatar":"crwdns9191:0crwdne9191:0","plugin_mask_box_name":"crwdns16276:0crwdne16276:0","plugin_mask_box_description":"crwdns16278:0crwdne16278:0","plugin_transak_name":"crwdns16280:0crwdne16280:0","plugin_transak_description":"crwdns16282:0crwdne16282:0","popups_wallet_unsupported_network":"crwdns8995:0crwdne8995:0","plugin_default_title":"crwdns16634:0crwdne16634:0","plugin_provider_by":"crwdns16636:0crwdne16636:0","plugin_enable":"crwdns19817:0crwdne19817:0","show_wallet_setting_button":"crwdns18674:0crwdne18674:0","web3_profile_no_social_address_list":"crwdns18676:0crwdne18676:0","plugin_avatar_feature_general_user_name":"crwdns19103:0crwdne19103:0","plugin_avatar_feature_general_user_description":"crwdns19105:0crwdne19105:0","plugin_avatar_feature_token_name":"crwdns19107:0crwdne19107:0","plugin_avatar_feature_token_description":"crwdns19109:0crwdne19109:0","plugin_avatar_feature_nft_name":"crwdns19111:0crwdne19111:0","plugin_avatar_feature_nft_description":"crwdns19113:0crwdne19113:0","plugin_web3_profile_feature_general_user_name":"crwdns19119:0crwdne19119:0","plugin_web3_profile_feature_general_user_description":"crwdns19121:0crwdne19121:0","plugin_web3_profile_feature_nft_name":"crwdns19123:0crwdne19123:0","plugin_web3_profile_feature_nft_description":"crwdns19125:0crwdne19125:0","decentralized_search_name":"crwdns19419:0crwdne19419:0","decentralized_search_description":"crwdns19421:0crwdne19421:0","decentralized_search_feature_token_name":"crwdns19423:0crwdne19423:0","decentralized_search_feature_token_description":"crwdns19425:0crwdne19425:0","decentralized_search_feature_nft_name":"crwdns19427:0crwdne19427:0","decentralized_search_feature_nft_description":"crwdns19429:0crwdne19429:0","decentralized_search_feature_wallet_name":"crwdns19431:0crwdne19431:0","decentralized_search_feature_wallet_description":"crwdns19433:0crwdne19433:0","applications_create_persona_hint":"crwdns18514:0crwdne18514:0","applications_create_persona_title":"crwdns18512:0crwdne18512:0","applications_create_persona_action":"crwdns18516:0crwdne18516:0","plugin_collectible_insufficient_balance":"crwdns7963:0crwdne7963:0","persona_boundary_create_persona":"crwdns18594:0crwdne18594:0","persona_boundary_connect_persona":"crwdns18596:0crwdne18596:0","persona_boundary_verify_persona":"crwdns18598:0crwdne18598:0","plugin_wallet_qr_code_with_wallet_connect":"crwdns20327:0crwdne20327:0","plugin_wallet_connect_dialog_title":"crwdns20329:0crwdne20329:0","plugin_wallet_select_provider_dialog_title":"crwdns20331:0crwdne20331:0","recent_transaction_success":"crwdns20333:0crwdne20333:0","recent_transaction_failed":"crwdns20335:0crwdne20335:0","wallet_status_pending_clear":"crwdns20337:0crwdne20337:0","wallet_status_pending_one":"crwdns20339:0{{count}}crwdne20339:0","wallet_status_pending_other":"crwdns20341:0{{count}}crwdne20341:0","wallet_status_pending_clear_all":"crwdns20343:0crwdne20343:0","wallet_risk_warning_no_select_wallet":"crwdns20345:0crwdne20345:0","wallet_risk_warning_dialog_title":"crwdns20347:0crwdne20347:0","wallet_risk_warning_content":"crwdns20349:0crwdne20349:0","wallet_risk_warning_confirm_tips":"crwdns20351:0crwdne20351:0","wallet_risk_confirm_confirming":"crwdns20353:0crwdne20353:0","wallet_risk_confirm_failed":"crwdns20355:0crwdne20355:0","wallet_name_length_error":"crwdns21717:0crwdne21717:0","add_collectibles_token_id_placeholder":"crwdns20357:0crwdne20357:0","plugin_wallet_solana_tips":"crwdns20359:0crwdne20359:0","plugin_wallet_blocto_tips":"crwdns20361:0crwdne20361:0","plugin_wallet_fortmatic_tips":"crwdns20363:0crwdne20363:0","plugin_wallet_support_chains_tips":"crwdns20365:0crwdne20365:0","plugin_wallet_connect_fortmatic":"crwdns20367:0crwdne20367:0","plugin_wallet_choose_network":"crwdns20369:0crwdne20369:0","plugin_disabled_tip":"crwdns19815:0crwdne19815:0","manage_network":"crwdns22195:0crwdne22195:0","network_management_add_network":"crwdns21345:0crwdne21345:0","network_name":"crwdns21347:0crwdne21347:0","rpc_url":"crwdns21571:0crwdne21571:0","chain_id":"crwdns21351:0crwdne21351:0","optional_currency_symbol":"crwdns21353:0crwdne21353:0","optional_block_explorer_url":"crwdns21355:0crwdne21355:0","account_already_exists":"crwdns21573:0crwdne21573:0","network_already_exists":"crwdns21619:0crwdne21619:0","incorrect_rpc_url":"crwdns21357:0crwdne21357:0","incorrect_explorer_url":"crwdns21359:0crwdne21359:0","rpc_url_is_used_by":"crwdns22119:0{{- name}}crwdne22119:0","chain_id_is_used_by":"crwdns22127:0{{- name}}crwdne22127:0","failed_to_fetch_chain_id":"crwdns21361:0crwdne21361:0","rpc_return_different_chain_id":"crwdns21363:0{{chain_id}}crwdne21363:0","rpc_return_different_symbol":"crwdns21365:0{{chain_id}}crwdnd21365:0{{symbol}}crwdne21365:0","rpc_requires_https":"crwdns21367:0crwdne21367:0","failed_to_save_network":"crwdns21369:0crwdne21369:0","incorrect_chain_id":"crwdns21371:0crwdne21371:0","invalid_number":"crwdns22129:0crwdne22129:0","saved_network_successfully":"crwdns21575:0crwdne21575:0","adding_network_successfully":"crwdns21577:0crwdne21577:0","deleted_network_successfully":"crwdns21621:0crwdne21621:0","hided_token_successfully":"crwdns21627:0crwdne21627:0","not_enough_data_to_present":"crwdns21659:0crwdne21659:0","wallet_send":"crwdns21375:0crwdne21375:0","wallet_receive":"crwdns21377:0crwdne21377:0","wallet_swap":"crwdns21379:0crwdne21379:0","wallet_add_contact":"crwdns21697:0crwdne21697:0","wallet_add_contact_successfully":"crwdns22179:0crwdne22179:0","wallet_edit_contact":"crwdns21699:0crwdne21699:0","wallet_edit_contact_successfully":"crwdns22181:0crwdne22181:0","wallet_delete_contact":"crwdns21701:0crwdne21701:0","wallet_delete_contact_successfully":"crwdns22183:0crwdne22183:0","wallet_name":"crwdns4487:0crwdne4487:0","wallet_account":"crwdns21381:0crwdne21381:0","wallet_imported":"crwdns21383:0crwdne21383:0","scan_address_to_payment":"crwdns21385:0crwdne21385:0","wallet_connect":"crwdns21669:0crwdne21669:0","wallet_connect_tips":"crwdns21671:0crwdne21671:0","empty":"crwdns21545:0crwdne21545:0","hide_token_symbol":"crwdns21547:0{{- symbol}}crwdne21547:0","hide_token_description":"crwdns21549:0{{- symbol}}crwdne21549:0","scam_tx":"crwdns22133:0crwdne22133:0","to_address":"crwdns21731:0{{address}}crwdne21731:0","other_address":"crwdns22185:0{{address}}crwdne22185:0","other_address$from":"crwdns22187:0{{address}}crwdne22187:0","other_address$to":"crwdns22189:0{{address}}crwdne22189:0","transaction_status":"crwdns21733:0crwdne21733:0","transaction_failed":"crwdns21735:0crwdne21735:0","transaction_success":"crwdns21737:0crwdne21737:0","transaction_pending":"crwdns21739:0crwdne21739:0","transaction_base":"crwdns21741:0crwdne21741:0","transaction_from":"crwdns21743:0crwdne21743:0","transaction_to":"crwdns21745:0crwdne21745:0","transaction_link":"crwdns21747:0crwdne21747:0","transaction_hash":"crwdns21749:0crwdne21749:0","transaction_gas_limit":"crwdns21751:0crwdne21751:0","transaction_gas_used":"crwdns21753:0crwdne21753:0","transaction_gas_price":"crwdns21755:0crwdne21755:0","transaction_priority_fee":"crwdns21757:0crwdne21757:0","transaction_max_fee":"crwdns21759:0crwdne21759:0","transaction_fee":"crwdns21761:0crwdne21761:0","activity_log":"crwdns22033:0crwdne22033:0","transaction_confirmed_at":"crwdns22035:0{{- datetime}}crwdne22035:0","transaction_completed_at":"crwdns22037:0{{- datetime}}crwdne22037:0","collectible_title":"crwdns21769:0crwdne21769:0","collectible_description":"crwdns21771:0crwdne21771:0","collectible_properties":"crwdns21773:0crwdne21773:0","collectible_last_sale_price":"crwdns21775:0crwdne21775:0","about_collection":"crwdns21777:0{{- name}}crwdne21777:0","hide_collectible":"crwdns21779:0{{-name}}crwdne21779:0","hide_collectible_description":"crwdns21781:0{{- name}}crwdne21781:0","add_new_address_to_an_existing_group":"crwdns22255:0crwdne22255:0","or_create_a_new_wallet_group":"crwdns22257:0crwdne22257:0"}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/zh-CN.json
const shared_ui_locales_zh_CN_namespaceObject = JSON.parse('{"promote":":performancing_arts::performancing_arts::performancing_arts: 是否早已厌倦了纯文字信息？您可以尝试发送加密信息给朋友。安装Mask.io来发送您第一个加密推文吧。","promote_red_packet":"亲爱的朋友，我刚刚创建了{{token}}红包。下载 Mask.io 来领取。","promote_file_service":"📃📃📃 尝试在推特上使用永久的、去中心化的文件存储功能。安装 Mask.io 上传并分享你的第一份永久的去中心化存储文件，由主流去中心化存储方案提供技术支持。","promote_savings":"Hi朋友们，我刚刚在 {{chain}} 上质押了 {{amount}} {{symbol}} 。关注@{{account}} 来查找更多的质押项目。","promote_withdraw":"Hi朋友们，我刚刚在 {{chain}} 上质押了 {{- amount}} {{symbol}} 。关注@{{account}} 来查找更多的质押项目。","promote_collectible":"在社交媒体上展示收藏品在 OpenSea 等多个平台上的具体信息，和提供报价及竞标功能。请安装 Mask.io 来尝试直接在 Twitter 上浏览NFT。","promote_snapshot":"是否想积极地参与提案并推动项目进展？安装 Mask.io ，直接在 Twitter 上为提案进行投票。","database_backup":"备份数据库","database_overwrite":"使用备份覆盖数据库","database_clear":"清空数据库","debug_new_bug_issue":"新问题","debug_metadata_title":"添加新元数据或替换现有元数据","debug_metadata_put_metadata":"放入元数据","edit":"编辑","clear":"清空","connect":"连接","back":"返回","more":"更多","remove":"移除","to":"至","add":"添加","approve":"授权","address":"地址","amount":"金额","coming_soon":"即将上线","max":"最大","data":"数据","redpacket_a_token":"代币","redpacket_an_nft":"NFT","available_balance":"可用余额","available_amount":"{{- amount}} 可用","failed_to_transfer_token":"发送 Token 失败: {{- message}}","failed_to_transfer_nft":"网络错误或执行智能合同失败。","operation":"操作","gas_limit":"Gas 限制","gas_price":"Gas 价格","value":"价值","balance":"余额","gwei":"Gwei","redirect_to":"跳转至","welcome_back":"欢迎回来","sign":"签名","load_failed":"加载失败","web3_profile_card_name":"Web3 名片","powered_by":"技术支持：","powered_by_whom":"由 <span>{{whom}} 提供支持</span>","reload":"重新加载","rename":"重命名","contacts":"联系人","currency":"货币","load":"加载","load_all":"加载全部","no_data":"暂无数据","tip":"小费","tags":"标签","price":"价格","floor_price":"地板价","default":"默认","contract":"合约","plugins":"插件","signing":"正在签名...","network":"网络","backup":"备份","password":"密码","reenter":"重新输入","copy":"复制","or":"或","send":"发送","transfer_to":"至","added_by_user":"由用户添加","congratulations":"恭喜您！","token_standard":"代币标准","persona_required":"必须拥有身份","initializing":"初始化中...","redirect_alert":"如果您的浏览器没有重新跳转，请 <terms>点击这里</terms>。","typed_message_text_alert":"当前只支持输入消息文本。","badge_renderer_provided_by_plugin":"插件提供：","add_assets":"添加资产","add_nft_contract_search_hint":"搜索 NFT 合约名称或地址","applications":"应用程序","application_settings":"应用设置","connect_persona":"连接身份","not_current_account":"不是您当前的帐户。","request_to_switch_account":"请切换到账号<bold>@{{- account}}</bold> 后继续账号验证流程。","request_to_login":"请注册或登录 {{- siteName}} 以连接Mask Network。","connected_already":"<bold>@{{- account}}</bold> 已经链接。","switch_for_more_connections":"切换帐户并尝试连接。","send_post_successfully":"成功发送验证推文。<br/> <br/> 几分钟后您可以在Mask Pop-up 上检查验证结果。如果失败，可以重新尝试发送验证推文。","connect_successfully":"链接成功。 <br/><br/> 尝试使用 Mask 插件来探索更多功能。","application_tooltip_hint_sns_persona_unmatched":"当前Twitter ID已验证的身份({{currentSNSConnectedPersonaPublicKey}}) 与您当前的身份({{currentPersonaPublicKey}}) 不一致。请切换至身份({{currentSNSConnectedPersonaPublicKey}}) 再重新尝试。","application_tooltip_hint_verify":"请验证您的社交账户","application_tooltip_hint_create_persona":"请创建您的身份","application_tooltip_hint_connect_persona":"请连接您的身份","application_tooltip_hint_connect_wallet":"请连接您的钱包","application_settings_tab_app_list":"应用列表","application_settings_tab_plug_in_switch":"插件开关","application_settings_tab_plug_app-list-listed":"显示","application_settings_tab_plug_app-list-unlisted":"隐藏","application_settings_tab_plug_app-listed-placeholder":"点击应用图标将会在应用列表中隐藏。","application_display_tab_plug_app-unlisted-placeholder":"点击设置图标进入设置页面，在应用面板上设置显示应用。","application_settings_tab_plug_app-unlisted-placeholder":"点击应用图标将会在应用列表中显示。","persona_load_failed":"加载失败","additional_post_box__encrypted_post_pre":"安装 #mask_io 解密此贴文 ！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet_sns_official_account":"使用 #mask_io 来领取这个红包！@{{account}} \\n\\n$t(promote_red_packet)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"使用 #mask_io 来认领这个红包！@{{encrypted}}","additional_post_box__encrypted_post_pre_file_service_sns_official_account":"$t(promote_file_service)\\n {{encrypted}}","additional_post_box__encrypted_post_pre_file_service":"$t(promote_file_service) {{encrypted}}","additional_post_box__steganography_post_pre":"此图片使用#mask_io加密。📪🔑 安装mask.io解密它。 {{random}}","auto_paste_failed_dialog_title":"手动粘贴","auto_paste_failed_dialog_content":"请复制下面的文本和图片(如果有的话)再进行发布。","auto_paste_failed_dialog_image_caption":"在新分页中打开","auto_paste_failed_snackbar":"您需要手动粘贴加密内容吗？","auto_paste_failed_snackbar_action":"教我怎么做","auto_paste_failed_snackbar_action_close":"关闭","connect_your_wallet":"连接您的钱包","connected_wallet_settings":"设置已连接钱包","compose_encrypt_method_text":"文本","compose_encrypt_method_text_sub_title":"使用文本加密","compose_encrypt_method_image":"图片","compose_encrypt_method_image_sub_title":"使用图片加密信息","compose_no_local_key":"缺失本地密钥","compose_encrypt_visible_to_all":"所有人","compose_encrypt_visible_to_all_sub":"任何用户可见","compose_encrypt_visible_to_private":"私密","compose_encrypt_visible_to_private_sub":"仅自己可见","compose_shared_friends_one":"1个好友","compose_shared_friends_other":"{{count}} 个好友","compose_encrypt_visible_to_share":"分享与","compose_encrypt_visible_to_share_sub":"仅选定的联系人可见","compose_encrypt_share_dialog_empty":"没有任何加密好友，您可以尝试搜索。","copy_success":"复制钱包地址成功！","automation_request_click_post_button":"请点击“Post”按钮打开贴文发送框。","ok":"好的","start":"开始","cancel":"取消","twitter_account":"realMaskNetwork","facebook_account":"masknetwork","hash_tag":"#mask_io","comment_box__placeholder":"添加加密评论…","confirm":"确认","copy_text":"复制文本","loading_failed":"加载失败","try_again":"再试一次","copy_image":"复制图片","copy_success_of_wallet_addr":"复制钱包地址成功！","copy_success_of_text":"复制文本成功!","copy_success_of_image":"复制图片成功!","copy_success_of_token_addr":"代币复制成功！","connecting":"正在连接…","collectibles_name":"收藏品","select_an_nft":"请选择一个 NFT","create":"创建","copied":"已复制","daily":"每日","dashboard_no_collectible_found":"未找到任何 NFT。","no_NFTs_found":"没有找到任何NFT。","dashboard_collectible_menu_all":"全部 ({{count}})","days":"每隔 {{days}} 天","decrypted_postbox_only_visible_to_yourself":"只对您可见","decrypted_postbox_visible_to_all":"所有 Mask 插件用户","decrypted_postbox_decrypting":"Mask正在解密中…","decrypted_postbox_decoding":"Mask正在解码中…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在寻找作者的公钥…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在获取贴文密钥以解密此贴文…","decrypted_postbox_author_mismatch":"最初发布于 {{name}}","decrypted_postbox_title":"由Mask解密：","dismiss":"忽略","delete":"删除","delete_wallet":"删除钱包","hide_token":"隐藏代币","hide_token_hint":"您将来可以通过钱包页面中的“添加代币”重新添加 <strong>{{token}}</strong> 。","done":"完成","download":"下载","failed":"失败","buy_now":"立即购买","no_enough_gas_fees":"没有足够的 Gas 费","gas_fee":"Gas Fee","insufficient_funds_for_gas":"Gas 不足。","open":"打开","settings":"设置","do_not_see_your_nft":"找不到您的NFT？","import_nft":"导入 NFT","setup_guide_post_content":"发布内容：","setup_guide_verify_tip":"我们需要验证您的Twitter帐户并在 NextID 上记录。请发送此推特以进行验。","setup_guide_login":"请注册或登录以连接Mask Network。","setup_guide_find_username_text":"Mask需要用户名来连接您的身份。<br /> 请确保正确无误。","setup_guide_connect_auto":"连接","setup_guide_connect_failed":"失败。请再试一次。","setup_guide_verify":"验证","setup_guide_verify_should_change_profile":"账户不一致","setup_guide_verify_dismiss":"不再提醒","setup_guide_verify_checking":"正在检查","setup_guide_verify_post_not_found":"未找到任何验证贴文","setup_guide_connected_title":"连接并验证成功。","setup_guide_connected_description":"尝试探索社交媒体上的 Web3 dApps 功能。","setup_guide_verifying":"正在验证","setup_guide_verifying_failed":"重新验证","user_guide_tip_connected":"您已成功连接到此帐户。","user_guide_tip_need_verify_on_next_id":"Mask Network要求您发布一个验证推文来访问基于Next.ID的产品。","setup_guide_say_hello_content":"你好，Mask世界。这是我发的第一条加密信息。安装 https://mask.io 来给我发送加密贴文吧。 ","setup_guide_say_hello_follow":"关注 {{account}} 来探索Web3 。","setup_guide_pin_tip":"请不要忘记在您的浏览器工具栏中固定Mask Network插件以便轻松访问 Web3。","setup_guide_pin_tip_step_click_left":"点击 ","setup_guide_pin_tip_step_click_right":" 在您的浏览器右上方。","setup_guide_pin_tip_step_find_left":"在扩展列表中查找Mask Network并点击 ","setup_guide_pin_tip_step_find_right":" 按钮。","setup_guide_pin_tip_successfully":"固定成功。","user_guide_tip_1":"点击这里快速访问主要功能。","user_guide_tip_2":"点击这里连接您的钱包。您可以在此选择网络或更改您的钱包。","user_guide_tip_3":"点击这里快速开始。","user_guide_tip_4":"点击这里快速开始。","plugin_avatar_setup_share_title":"NFT 头像","plugin_avatar_setup_pfp_share":"我刚刚使用了 Mask 插件免费设置好我的 NFT 头像！ 快快下载功能强大的 Mask.io ，在 Twitter 上浏览别人独特的 NFT 和 Web3 活动吧！","plugin_avatar_setup_success":"NFT 头像设置成功。","plugin_avatar_asset":"找不到任何资产。","plugin_avatar_web3_error":"错误","plugin_avatar_chain_error":"网络不匹配。","plugin_avatar_input_token_address":"输入合约地址","plugin_avatar_input_token_id":"Token ID","mask_network":"Mask Network","import":"导入","no_search_result":"没有任何结果。","set_nft_profile_photo":"设置 NFT 头像","use_nft":"设置 NFT 头像","loading":"加载中","unlock":"解锁","persona":"身份","wallet":"钱包","dashboard":"控制面板","welcome_to_mask":"欢迎来到 Mask Network！","welcome_description_congrats":"恭喜，您已身处Web3世界！","welcome_description_content":"探索现在最热门的NFT, DAOs, ","welcome_description_content_second":"加密趋势在Mask Network。","browser_action_enter_dashboard":"进入控制面板","pending":"待定中...","beta_sup":"<sup>(测试版)<sup>","post_dialog__button":"加密","post_dialog__placeholder":"文本在此处…","post_dialog__title":"加密贴文","post_dialog_visible_to":"可见范围","post_dialog_encryption_method":"加密方式","post_dialog_enable_paste_auto":"启用自动粘贴","post_dialog_share_with_input_placeholder":"例如：Twitter账户、身份公钥、钱包地址","post_modal_hint__button":"编辑加密贴文","hide":"隐藏","reset":"重置","editor":"编辑器","retry":"重试","go_wrong":"出现了一些问题。","search_box_placeholder":"输入要搜索的内容","select_all":"全选","nonce":"Nonce","none":"没有","select_none":"全不选","all_friends":"全部好友","select_specific_friends_dialog__title":"选择特定联系人","select_friends_dialog_persona_connect_one":"Persona 已连接到帐户","select_friends_dialog_persona_connect_other":"Persona 已连接到帐户","service_decryption_failed":"解密失败","service_username_invalid":"无效的用户名","speed_up":"加速","save":"保存","skip":"跳过","next":"下一步","try":"试一下","share":"分享","share_to":"分享到...","sharing":"分享中","transfer":"转账","export":"导出","confirm_swap_risk":"确认兑换风险","wallet_load_retry":"加载 {{symbol}} 失败，请点击重试。","wallet_rename":"重新命名钱包","wallet_loading_nft_contract":"正在加载 NFT 合约...","wallet_search_contract_no_result":"没有结果或合同地址不符合查询标准。","wallet_search_no_result":"没有任何结果。","wallet_confirm_with_password":"使用密码确认","wallet_airdrop_nft_unclaimed_title":"未认领的 NFT Airdrop：","view_on_explorer":"在区块链浏览器查看","recent_transaction_pending":"待定","recent_transaction_cancelled":"已取消","wallet_balance":"余额","wallet_available_balance":"可用余额","wallet_new":"新建钱包","wallet_status_button_change":"切换","wallet_status_button_change_to_evm":"更改至EVM钱包","wallet_status_button_copy_address":"复制地址","wallets_transfer_contact_wallet_name_already_exist":"该钱包名称已经存在。","wallet_transfer_account":"转账账户","wallet_transfer_receiving_account":"收款账户","wallet_transfer_to_address":"发送到地址","wallet_transfer_send":"发送","wallet_transfer_placeholder":"Ens或地址(0x)","wallet_transfer_title":"转账","wallet_transfer_my_wallets_title":"钱包","wallet_transfer_my_contacts_title":"联系人","wallets_transfer_warning_contract_address":"此地址是合同地址。","wallets_transfer_error_address_absence":"输入收款人地址","wallets_transfer_error_address_scam":"此地址可能是欺诈地址。","wallets_transfer_error_invalid_address":"无效钱包地址。","wallets_transfer_error_invalid_domain":"此ENS不存在或未被解析。","wallet_transfer_error_no_ens_support":"网络不支持 ENS。","wallet_transfer_error_amount_absence":"输入数额","wallet_transfer_error_address_absence":"输入收款人地址","wallet_transfer_error_same_address_with_current_account":"此接收地址与发送地址相同，请重新检查。","wallet_transfer_error_is_contract_address":"此接收地址为合约地址，请重新检查。","wallet_transfer_error_invalid_address":"收款人地址无效","wallet_transfer_error_no_address_has_been_set_name":"接收人地址无效。","wallet_transfer_error_no_support_ens":"网络不支持 ENS。","wallet_transfer_error_insufficient_balance":"{{symbol}} 余额不足","wallet_transfer_error_gas_price_absence":"输入 Gas 价格","wallet_transfer_error_gas_limit_absence":"输入Gas Limit","wallet_transfer_error_max_fee_absence":"请输入Max fee","wallet_transfer_error_max_priority_fee_absence":"请输入Max priority fee","wallet_transfer_error_max_fee_too_low":"Max fee 在当前网络环境下过低","wallet_transfer_error_max_fee_too_high":"Max fee 高于必要值","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee必须大于 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max pirority fee 在当前网络环境下过低","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee过高。您或许支付了超过需要的费用。","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee 不能低于 Max priority fee","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"我的账户之间转账","weekly":"每周","relative_time_days_ago_one":"{{count}} 天前","relative_time_days_ago_other":"{{count}} 天前","relative_time_hours_ago_one":"{{count}} 小时前","relative_time_hours_ago_other":"{{count}} 小时前","relative_time_minutes_ago_one":"{{count}} 分钟前","relative_time_minutes_ago_other":"{{count}} 分钟前","relative_time_months_ago_one":"{{count}} 个月前","relative_time_months_ago_other":"{{count}} 个月前","relative_time_seconds_ago_one":"{{count}} 秒前","relative_time_seconds_ago_other":"{{count}} 秒前","relative_time_years_ago_one":"{{count}} 年前","relative_time_years_ago_other":"{{count}} 年前","relative_time_days_other":"{{count}} 天","relative_time_days_one":"{{count}} 天","relative_time_hours_other":"{{count}} 小时","relative_time_hours_one":"{{count}} 小时","relative_time_minutes_other":"{{count}} 分钟","relative_time_minutes_one":"{{count}} 分钟","relative_time_months_one":"{{count}} 个月","relative_time_months_other":"{{count}} 个月","relative_time_seconds_one":"{{count}} 秒","relative_time_seconds_other":"{{count}} 秒","relative_time_years_one":"{{count}} 年","relative_time_years_other":"{{count}} 年","plugin_wallet_snackbar_wait_for_confirming":"请在您的钱包中确认这笔交易","plugin_wallet_snackbar_hash":"交易已提交","plugin_wallet_snackbar_confirmed":"交易已确认","plugin_wallet_snackbar_success":"交易成功","plugin_wallet_snackbar_failed":"交易失败","plugin_wallet_snackbar_swap_successful":"已成功兑换代币","plugin_wallet_snackbar_swap_token":"兑换代币","plugin_wallet_connect_to":"连接到","plugin_wallet_connect_to_retry":"请重试","plugin_wallet_connected_to":"已连接到","plugin_wallet_metamask_error_already_request":"您已打开弹出窗口，请确认。","plugin_wallet_connect_tip":"请确保您的 {{providerName}} 钱包是由官方 <providerLink>{{providerShortenLink}}</providerLink> 提供的。","plugin_wallet_disconnect":"断开","plugin_wallet_dialog_title":"钱包账户","plugin_wallet_select_a_nft_contract":"选择 NFT 合约","plugin_wallet_select_a_nft_owner":"选择 NFT 合约拥有者","plugin_wallet_select_a_nft_operator":"选择 NFT 合约操作员","plugin_wallet_fail_to_load_nft_contract":"加载 NFT 合约失败。请点击重试。","plugin_wallet_nft_approving_all":"正在解锁 {{symbol}}...","plugin_wallet_approve_all_nft":"解锁 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解锁 {{symbol}} 成功","plugin_wallet_confirm_risk_warning":"确认风险提示","plugin_wallet_no_gas_fee":"不够Gas费用","plugin_wallet_update_gas_fee":"Gas费用更新中…","plugin_wallet_connect_a_wallet":"连接钱包","plugin_wallet_invalid_network":"网络无效","plugin_wallet_select_a_wallet":"选择一个钱包","plugin_wallet_transaction":"交易记录","plugin_wallet_transaction_wait_for_confirmation":"等待确认中…","plugin_wallet_transaction_submitted":"您的交易已提交！","plugin_wallet_transaction_confirmed":"您的交易已确认！","plugin_wallet_transaction_reverted":"您的交易已被回退！","plugin_wallet_transaction_rejected":"您的交易已拒绝。","plugin_wallet_transaction_underpriced":"交易价格过低。","plugin_wallet_transaction_server_error":"由于JSON-RPC服务器内部出错，交易失败。","plugin_wallet_view_on_explorer":"区块链浏览器查看","plugin_wallet_on_create":"创建钱包","plugin_wallet_on_connect":"连接钱包","plugin_wallet_pending_transactions_one":"{{count}} 个待定","plugin_wallet_pending_transactions_other":"{{count}} 个待定","plugin_wallet_import_wallet":"导入钱包","plugin_wallet_token_unlock":"精确解锁","plugin_wallet_token_infinite_unlock":"无限解锁","plugin_wallet_token_exact_unlock_tips":"您必须授予 {{provider}} 智能合约权限才能使用您的 {{symbol}}。 ","plugin_wallet_token_infinite_unlock_tips":"您必须授予 {{provider}} 智能合约权限才能使用您的 {{symbol}} 。每个代币只需要授权一次。","plugin_wallet_connect_safari_metamask":"连接到 MetaMask","plugin_wallet_connect_safari_rainbow":"连接到 Rainbow","plugin_wallet_connect_safari_trust":"连接到 Trust","plugin_wallet_connect_safari_im_token":"连接到 imToken","plugin_wallet_on_connect_in_firefox":"连接","plugin_wallet_return_mobile_wallet_options":"返回到移动钱包选项","plugin_wallet_view_qr_code":"查看二维码","plugin_wallet_switch_network":"切换到 {{network}} 网络","plugin_wallet_switch_network_under_going":"正在切换到 {{network}} 网络…","plugin_wallet_connect_tips":"请在您当前连接的移动应\\n用程序钱包切换到此网络。","plugin_wallet_not_support_network":"此网络尚未支持。","plugin_wallet_connect_network":"更改为 {{network}} 钱包","plugin_wallet_not_available_on":"在 {{network}} 网络上不可用。","plugin_wallet_connect_wallet":"连接钱包","plugin_wallet_name_placeholder":"输入1-12 个字符","plugin_wallet_cancel_sign":"签名已取消。","plugin_web3_profile_recommend_feature_description":"在 Twitter 上选择和展示您的 Web3 足迹。","plugin_nft_avatar_recommend_feature_description":"将您的 NFT 设置为独特的个人头像。","application_hint":"在社交网络上展示您的 NFT。人们可以在Twitter上出价、购买或查看您珍贵的 NFT。","plugin_goPlusSecurity_description":"为您提供迅速、可靠和方便的安全服务。","plugin_red_packet_create":"创建一个红包","plugin_red_packet_claimed":"已认领","plugin_red_packet_claim":"认领","plugin_red_packet_claim_title":"认领红包","plugin_red_packet_claim_notification":"认领一个红包","plugin_red_packet_claim_success":"成功认领 {{tokenAmountDescription}} 红包。","plugin_red_packet_claim_success_without_detail":"认领红包成功。","plugin_red_packet_claim_fail":"认领红包失败","plugin_red_packet_create_with_token":"创建您的红包。","plugin_red_packet_create_with_token_title":"创建红包","plugin_red_packet_create_with_token_success":"成功创建 {{tokenAmountDescription}} 红包。","plugin_red_packet_create_with_token_fail":"创建红包失败。","plugin_red_packet_refund_with_token":"退还您过期的红包。","plugin_red_packet_refund_with_token_title":"红包退还","plugin_red_packet_refund_with_token_success":"{{tokenAmountDescription}} 红包退还成功。","plugin_red_packet_refund_with_token_success_without_detail":"红包退还成功。","plugin_red_packet_refund_with_token_fail":"红包退还失败。","plugin_nft_red_packet_create_title":"创建NFT红包","plugin_nft_red_packet_create":"创建一个NFT红包","plugin_nft_red_packet_create_success":"成功创建 {{symbol}} NFT 红包.","plugin_nft_red_packet_create_success_without_detail":"创建 NFT 红包成功。","plugin_nft_red_packet_claim":"认领一个 NFT 红包","plugin_nft_red_packet_claim_success":"认领一个 {{symbol}} NFT 红包成功.","plugin_nft_red_packet_claim_success_without_detail":"认领一个 NFT 红包成功.","plugin_nft_red_packet_claim_title":"认领NFT 红包","plugin_red_packet_nft_account_name":"钱包账户","plugin_gitcoin_select_a_token":"选择代币","plugin_gitcoin_insufficient_balance":"{{symbol}} 余额不足","plugin_trader_fail_to_load":"无法加载趋势信息自  ","plugin_trader_switch_provider":"切换到 {{provider}}","plugin_trader_swap_description":"弹窗式交易小部件允许您即时查看最热门的加密货币并交易","plugin_trader_tutorial":"教程","plugin_trader_what_is_lbp":"什么是LBP？","plugin_trader_lbp_intro":"蓝色实线表示在{{symbol}}\'s LBP上的{{symbol}} 的历史价格。如果没有人购买，价格可能会继续下降。请理性进行投资决策。","plugin_trader_no_pools_found":"未找到池。","plugin_trader_safety_agree":"我已知悉","plugin_trader_view_on_etherscan":"在 Etherscan 上查看","plugin_trader_safety_alert_title":"代币安全警告","plugin_trader_safety_alert":"任何人都可以在Etherum上创建和命名任何ERC20代币， 包括创建假冒的现有代币和假冒是已声称没有发行代币的项目方发行的代币。 与以太坊相似，这个网站自动跟踪所有ERC20代币，不受密码完整性的影响。 请在与任何ERC20 令牌交互之前进行您自己的研究。","plugin_trader_total_supply":"总供应量","plugin_trader_circulating_supply":"流通总量","plugin_trader_accept":"同意","plugin_trader_volume_24":"交易量 (24h)","plugin_trader_market_cap":"市值","plugin_trader_risk_warning_short":"风险提示","plugin_trader_risk_warning":"确认兑换代币合约风险","plugin_trader_make_risk_trade":"仍要兑换","plugin_trader_dear_user":"尊敬的用户，","plugin_trader_user_warning":"点击确认按钮意味着您同意承担潜在的风险并选择继续进行交易。","plugin_trader_price_updated":"价格已更新","plugin_trader_market_statistic":"市场数据统计","plugin_trader_floor_price":"地板价","plugin_trader_trending":"趋势","plugin_trader_highest_price":"最高价格","plugin_trader_total_volume":"成交量","plugin_trader_one_day_average_price":"平均价格","plugin_trader_one_day_traded_volume":"24H 交易量","plugin_trader_one_day_sale":"24小时销售","plugin_trader_marketplace":"市场","plugin_trader_total_assets":"总资产","plugin_trader_owners_count":"拥有者","plugin_trader_sales":"交易量（24h）","plugin_trader_rank":"排名 # {{rank}}","plugin_trader_info":"信息资料","plugin_trader_website":"网站","plugin_trader_community":"社区","plugin_savings":"储蓄","plugin_savings_asset":"资产","plugin_savings_apr":"年利率","plugin_savings_wallet":"钱包","plugin_savings_operation":"操作","plugin_savings_amount":"数额","plugin_savings_deposit":"存入","plugin_savings_swap_token":"兑换 {{token}}","plugin_savings_withdraw_token":"提取 {{token}}","plugin_savings_withdraw":"取出","plugin_savings_process_deposit":"存入操作处理中","plugin_savings_process_withdraw":"取出操作处理中","plugin_savings_no_protocol":"未找到存款协议。","plugin_trader_swap":"兑换","plugin_trader_wrap":"包装","plugin_trader_swap_from":"您卖出","plugin_trader_swap_receive":"您买入","plugin_trader_unwrap":"去包装","plugin_trader_buy":"买入","plugin_trader_no_data":"暂无数据","plugin_trader_tab_market":"概况","plugin_trader_tab_price":"价格","plugin_trader_tab_exchange":"交易","plugin_trader_tab_activities":"活动","plugin_trader_nft_items":"NFTs","plugin_trader_table_nft":"NFT","plugin_trader_table_method":"操作","plugin_trader_table_value":"价值","plugin_trader_table_from":"从","plugin_trader_table_to":"至","plugin_trader_table_time":"时间","plugin_trader_error_amount_absence":"输入数额","plugin_trader_error_insufficient_balance":"{{symbol}} 余额不足","plugin_trader_error_insufficient_lp":"该交易的流动性不足","plugin_trade_error_input_amount_less_minimum_amount":"提交兑换的数额低于最低数额","plugin_trader_slippage_tolerance":"更多设置：","plugin_trader_gas_fee":"Gas 费用","plugin_trader_unlock_symbol":"解锁 {{symbol}}","plugin_trader_unlock_tips":"您必须授予 {{provider}} 智能合约使用您的 {{symbol}} 的权限。每个代币只需要授权一次。","plugin_trader_swap_amount_symbol":"兑换","plugin_trader_confirm_from":"从","plugin_trader_confirm_to":"至","plugin_trader_confirm_slippage_tolerance":"滑点容许值","plugin_trader_confirm_tx_cost":"(${{usd}})","plugin_trader_confirm_minimum_received":"收到的最低数额","plugin_trader_confirm_tips":"最大价格滑点设置过低可能会导致因价格波动而交易失败","plugin_trader_price_impact_warning_tips":"最大价格滑点设置过高可能会导致最低返回数额低于期望数额。","plugin_trader_price_impact_too_high_tips":"价格影响高！超过 {{impact}} 影响！","plugin_trader_confirm_swap":"确认兑换","plugin_trader_update":"更新","plugin_trader_price_impact":"价格影响","plugin_trader_price_image_value":"价格影响({{percent}})","plugin_trader_slippage_warning":"在当前滑点设置下，您可能会少接收10%的期待值。","plugin_trader_confirm_price_impact":"确认价格影响 {{percent}}","plugin_trader_max_slippage":"最大滑点","plugin_trader_gas_setting_instant":"即时","plugin_trader_gas_setting_high":"高速","plugin_trader_gas_setting_medium":"中等","plugin_trader_gas_setting_standard":"标准","plugin_trader_gas_setting_fast":"快速","plugin_trader_gas_setting_custom":"自定义","plugin_trader_tx_cost_usd":"(~${{usd}})","plugin_trader_tx_cost_usd_new":"(~{{usd}})","plugin_trader_tx_cost_very_small":"({{usd}})","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流动性不足","plugin_trader_no_trade":"请选择一个交易","plugin_trader_swap_risk":"兑换风险","plugin_trader_gas":"交易费用","plugin_poll_display_name":"投票","plugin_poll_question_hint":"询问...","plugin_poll_options_hint":"选项","plugin_poll_length":"投票时长","plugin_poll_length_days":"天","plugin_poll_length_hours":"小时","plugin_poll_length_minutes":"分钟","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"创建新的","plugin_poll_select_existing":"历史","plugin_poll_send_poll":"发送投票","plugin_poll_status_closed":"已关闭","plugin_poll_status_voting":"正在投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距离投票结束还有{{time}}","plugin_collectibles_name":"NFT","plugin_collectibles_description":"直接在社交媒体上展示在 OpenSea 和 Rarible 上的收藏品的具体信息，并提供报价及竞价功能。","plugin_infra_descriptor_nft_approve_title":"{{action}} NFT 合约","plugin_infra_descriptor_nft_approve":"{{action}} {{symbol}} NFT 合约。","plugin_infra_descriptor_nft_approve_success":"{{action}} {{symbol}} NFT 合约成功。","plugin_infra_descriptor_nft_revoke_success":"{{action}} {{symbol}} 授权成功。","plugin_infra_descriptor_nft_approve_fail":"{{action}} NFT 合约失败。","plugin_infra_descriptor_nft_transfer_title":"发送 NFT 小费","plugin_infra_descriptor_nft_transfer_fail":"发送 NFT 小费失败。","plugin_infra_descriptor_nft_transfer_success":"成功发送 {{symbol}} NFT 小费。","plugin_infra_descriptor_nft_transfer":"发送 {{symbol}} NFT 小费给您的好友 。","plugin_infra_descriptor_token_revoke":"撤销对 {{symbol}} 的授权。","plugin_infra_descriptor_token_transfer_title":"发送代币","plugin_infra_descriptor_token_transfer":"发送 {{symbol}} 小费给您的好友 。","plugin_infra_descriptor_token_transfer_fail":"发送 Token 失败。","plugin_infra_descriptor_token_transfer_success":"成功发送 {{tokenAmountDescription}} 小费给您的好友 。","plugin_infra_descriptor_token_revoke_title":"撤销代币授权","plugin_infra_descriptor_token_revoke_success":"撤销授权成功。","plugin_infra_descriptor_token_revoke_fail":"撤销代币授权失败。","plugin_infra_descriptor_token_approve_title":"解锁代币","plugin_infra_descriptor_token_approve":"解锁 {{tokenAmountDescription}}","plugin_infra_descriptor_token_approve_success":"解锁 {{tokenAmountDescription}} 成功","plugin_infra_descriptor_token_revoke_but_set_positive_cap":"您已经授权了{{spender}} 的 {{- tokenAmountDescription}} 。如果您想要撤销该Token，请将自定义支出上限保持为 0 并再试一次。","plugin_infra_descriptor_token_approve_but_set_zero_cap":"您没有成功授权 {{symbol}} 。请不要设置支出上限为 0，然后再试一次。","plugin_infra_descriptor_token_fail":"解锁代币合约失败。","plugin_infra_descriptor_token_deposit_title":"存入代币","plugin_infra_descriptor_token_deposit":"存款 {{tokenAmountDescription}} 。","plugin_infra_descriptor_token_deposit_success":"存款 {{tokenAmountDescription}} 成功。","plugin_infra_descriptor_token_deposit_fail":"存款失败 {{symbol}}。","plugin_infra_descriptor_token_withdraw_title":"提取 Token","plugin_infra_descriptor_token_withdraw":"提取 {{tokenAmountDescription}} 。","plugin_infra_descriptor_token_withdraw_success":"提取 {{tokenAmountDescription}} 成功。","plugin_infra_descriptor_token_withdraw_fail":"提取 {{symbol}} 失败。","plugin_infra_descriptor_mask_box_purchase_title":"购买Maskbox NFT","plugin_infra_descriptor_mask_box_purchase_success":"使用 {{tokenAmountDescription}} 成功购买Maskbox NFT。","plugin_infra_descriptor_mask_box_purchase":"购买Maskbox NFT。","plugin_infra_descriptor_mask_box_purchase_fail":"购买Maskbox NFT失败。","plugin_infra_descriptor_gitcoin_donate_title":"捐赠","plugin_infra_descriptor_gitcoin_donate":"您捐赠了 {{- amount}} {{symbol}}","plugin_infra_descriptor_gitcoin_submitted":"交易已提交。","plugin_infra_descriptor_gitcoin_donate_success":"您捐赠了 {{- amount}} {{symbol}}","plugin_infra_descriptor_gitcoin_donate_fail":"交易失败","plugin_snapshot_info_title":"相关信息","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_ipfs":"IPFS","plugin_snapshot_info_start":"开始日期","plugin_snapshot_info_end":"结束日期","plugin_snapshot_info_snapshot":"Snapshot","plugin_snapshot_info_dao":"DAO","plugin_snapshot_description":"直接在社交媒体上展示和投票支持提案。","plugin_snapshot_result_title":"结果","plugin_snapshot_votes_title":"投票","plugin_snapshot_votes_yourself":"您","plugin_snapshot_no_power":"没有投票权","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote_failed":"如果您未投票，请再试一次。","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"选项","plugin_snapshot_vote_power":"您的投票权","plugin_snapshot_vote_title":"投出您的票","plugin_snapshot_my_vote":"我的投票","plugin_snapshot_space_info_followers_count":"{{followersCount}} 位成员","plugin_snapshot_proposal_not_start":"开始时间 {{date}}","plugin_snapshot_proposal_started":"结束时间 {{date}} ","plugin_snapshot_proposal_ended":"结束时间 {{date}}","plugin_snapshot_proposal_no_results":"对不起，我们没有找到任何结果。","plugin_snapshot_space":"空间","plugin_snapshot_space_join":"加入","plugin_snapshot_space_view":"查看","plugin_snapshot_proposal":"提案","plugin_snapshot_progress":"进度","plugin_snapshot_load_failed":"Snapshot API 服务故障导致加载失败。","plugin_snapshot_vote_confirm_dialog_title":"确认投票","plugin_snapshot_vote_confirm_dialog_choice":"您确定要投票给 \\"{{ choiceText }}\\" 吗？","plugin_snapshot_vote_confirm_dialog_warning":"此操作不可撤销。","plugin_snapshot_current_result_title":"当前结果","plugin_snapshot_download_report":"下载报告","plugin_pets_name":"小宠物","plugin_pets_description":"发现 #NFT 的无限可能性。","wallet_verify_persona_sign":"身份签名","wallet_verify_has_bound":"此钱包已绑定。请切换钱包。","wallet_verify_persona_name":"{{personaName}} 签名","wallet_verify_empty_alert":"请连接您的钱包。","wallet_verify_persona_sign_intro":"使用您的身份静默签名以确保数据的有效性。","waller_verify_wallet_sign_intro":"经过这两个简单的步骤后，您将通过 Next.ID 服务拥有、查看和使用您的数字身份。您随时可以在Popup轻松地断开数字身份的连接。","popups_welcome_to_mask_network":"欢迎来到 Mask Network！","popups_persona_description":"加密您的社交媒体帖子和消息。请选择好友解密。","popups_add_wallet":"添加钱包","popups_add_wallet_description":"使用 Mask 钱包来保证您的交易和资产安全。","popups_add_persona_description":"使用 Persona 来加密和解密社交媒体帖子和消息。","popups_create_a_new_wallet_title":"创建新钱包","popups_generate_a_new_wallet_address":"生成一个新的钱包地址","popups_generate_a_new_persona":"创建一个新的身份","popups_import_wallet":"导入钱包","popups_import_wallets":"导入钱包","popups_import_wallets_description":"支持助记词、私钥或 keystone 文件。","popups_import_persona_description":"支持身份代码、私钥、本地备份或云备份以访问您的个人数据。","popups_lock_wallet":"锁定钱包","popups_wallet_settings":"钱包设置","popups_verify_persona_sign_success":"身份签名成功","popups_verify_persona_sign_failed":"身份签名失败","popups_verify_wallet_sign_success":"钱包签名成功","popups_verify_wallet_sign_failed":"钱包签名失败","popups_profile_photo":"个人头像","popups_public_key":"公钥","popups_create_persona":"创建身份","popups_restore_and_login":"恢复身份","popups_name":"名称","popups_connect_social_tips":"连接您的社交媒体帐户。","popups_save_successfully":"保存成功","popups_save_failed":"保存失败","popups_display_web3_address_tips":"在您的 Web3 个人资料页面上显示以下地址并使用它来接收打赏。","popups_verify_account_tips":"在连接和验证您的身份后，您可以设置相关的地址来显示您的 web3 足迹或接收打赏。","popups_other_social_accounts_tips":"其他社交网络平台，如 <strong>Instagram,</strong> <strong>Facebook，</strong> 和 <strong>Minds,</strong> 没有像Twitter 中 Next.ID 这样的验证关系。 <br /> <br /> 当和这些平台上的帐户连接时，只支持发送加密文章。","popups_empty_wallet_proofs_tips":"没有关联的钱包。 <strong>添加钱包。</strong>","popups_social_account":"社交账户","popups_connected_wallets":"已连接的钱包","popups_change_owner":"更改管理账户","popups_wallet_connected_status$connected":"已连接","popups_wallet_connected_status$unconnected":"未连接","popups_loading":"加载中","popups_connect_your_web2_social_accounts":"连接您的社交媒体帐户","popups_connect_social_account":"连接社交账户","popups_disconnect_success":" 断开连接成功。 ","popups_disconnect_failed":"断开连接失败。","popups_new_disconnect_warning_alert":"Twitter账户 @<strong>{{account}}</strong> 尚未通过Next.ID验证。请切换到 @<strong>{{account}}</strong> 以继续。","popups_disconnect_other_warning_alert":"执行此操作将会影响使用角色发送加密消息。","popups_verify_account":"验证账户","popups_disconnect_wallet_tip":"您确定要断开 {{persona}} 与钱包 <strong>{{address}}<strong/> 的连接吗？","popups_add_and_verify_wallet":"添加并验证钱包","popups_add_derive":"添加派生钱包","popups_rename":"重命名","popups_speed_up_transaction":"加速交易","popups_cancel_transaction":"取消交易","popups_import_the_wallet":"导入钱包","popups_delete_wallet":"断开钱包","popups_release_bind_wallet_title":"断开钱包?","popups_release_bind_wallet_tips":"您确定要断开 {{personaName}} 与钱包 <strong>{{identity}}</strong> 的连接吗？","popups_create_wallet":"创建钱包","popups_back_up_the_wallet":"备份钱包","popups_recovery_wallet":"恢复的钱包","popups_wallet_setting":"钱包设置","popups_wallet_settings_change_network":"更改网络","popups_wallet_settings_auto_unlock_time":"自动锁定时间","popups_wallet_settings_auto_unlock_time_mins":"{{time}} 分钟","popups_wallet_settings_auto-unlock_time_hour_one":"{{count}} 小时","popups_wallet_settings_auto-unlock_time_hour_other":"{{count}} 小时","popups_wallet_settings_auto_unlock_time_title":"自动锁定","popups_wallet_settings_change_payment_password":"修改支付密码","popups_wallet_settings_show_private_key":"显示账户私钥","popups_wallet_settings_backup_wallet":"备份钱包","popups_wallet_settings_enter_payment_password":"输入支付密码","popups_wallet_settings_export_private_key_title":"选择要导出私钥的钱包","popups_wallet_settings_rename_tips":"文件名必须介于 3 到 20 个字符之间。","popups_wallet_settings_name_exists":"该钱包名称已经存在。","popups_wallet_settings_remove_wallet":"移除钱包","remove_wallet_title":"移除钱包?","remove_wallet_message":"该钱包 (<bold>{{wallet}}</bold>) 是 SmartPay 钱包 (<bold>{{other_wallets}}</bold>) 的管理账户。<br/>\\n删除该钱包会同时删除 SmartPay 钱包。","popups_wallet_settings_are_you_sure_remove_wallet":"您确定要删除此钱包吗？","popups_wallet_settings_address_exists":"该钱包地址已经存在。","popups_wallet_settings_auto_lock_tips":"请在自动锁定您的钱包之前设置时间。","popups_wallet_settings_minutes":"分钟","popups_wallet_settings_auto_lock_number_only":"此字段必须是数字。","popups_wallet_settings_current_management_account":"当前的管理账户","popups_wallet_settings_local_persona_or_wallet_only":"仅限本地身份或钱包","popups_wallet_connected_sites":"已连接的网站","popups_wallet_connected_sites_description":"钱包已连接到这些站点，它们可以查看您的帐户地址。","popups_wallet_disconnect_confirm":"您确定要断开连接吗？您可能会失去网站功能。","popups_wallet_disconnect_all":"断开所有社交账户","popups_wallet_disconnect_site_success":"断开连接成功。","popups_gas_fee_settings":"Gas 费用设置","popups_assets":"资产","popups_send":"发送","popups_set_the_payment_password":"设置支付密码","popups_set_the_payment_password_title":"设置支付密码","popups_log_out":"登出","popups_following_permissions":"插件 ({{pluginName}}) (托管于{{pluginURL}}) 将请求以下权限：","popups_permissions":"许可权限","popups_sites":"站点","popups_mask_requests_permission":"Mask Network需要以下权限","popups_grant":"授权","popups_no_wallets_found":"未发现 Mask 钱包","popups_no_persona_found":"未找到身份","popups_permission_request":"请求授权","popups_permission_request_content":"为继续后续操作，Mask Network需要获取权限以访问以下URL：","popups_permission_request_content2":"这给Mask Network提供了被请求功能的必要能力。","popups_welcome":"欢迎","popups_wallet_token":"代币","popups_wallet_collectible":"NFTs","popups_wallet_collectible_added_successfully":"添加成功","popups_wallet_dialog_legacy_wallet_tip":"已检测到旧钱包，请点击确认以恢复所有钱包。","popups_wallet_set_payment_password":"设置支付密码","popups_wallet_create_payment_password":"设置密码","popups_wallet_payment_password":"支付密码","popups_wallet_set_up_payment_password":"设置支付密码","popups_wallet_old_payment_password":"原支付密码","popups_wallet_new_payment_password":"新支付密码","popups_wallet_confirm_password":"确认密码","popups_wallet_new_password_not_match":"新密码不匹配","popups_wallet_create_payment_password_tip":"至少6个字符","popups_wallet_set_payment_password_successfully":"设置支付密码成功。","popups_wallet_term_of_service_agree_part_1":"继续执行表示您同意","popups_wallet_term_of_service_agree_part_2":"<agreement>服务协议</agreement> 和 <policy>隐私政策</policy>","popups_wallet_reset_tips":"设置支付密码?","popups_wallet_payment_password_tip":"支付密码必须是数字、大小写字母和特殊字符中的2个类别的组合，长度为 8-20 个字符。","create_wallet_incorrect_payment_password":"支付密码错误。","popups_wallet_start_up_tip":"请连接到您的钱包，可选择创建一个新钱包或使用助记词恢复一个旧钱包。","popups_wallet_name_placeholder":"输入1-12 个字符","popups_wallet_name_mnemonic":"助记词","popups_wallet_name_json_file":"Json文件","popups_wallet_name_private_key":"私钥","popups_wallet_name_keystore":"密钥库","popups_wallet_name_mnemonic_placeholder":"请输入以空格分隔的助记词","popups_wallet_name_origin_password":"原密码","popups_wallet_tab_assets":"资产","popups_wallet_tab_collectibles":"NFTs","popups_wallet_tab_activity":"交易动态","popups_wallet_derivation_path":"派生路径 ({{ path }})","popups_wallet_transfer_to":"至","popups_wallet_next":"下一步","popups_wallet_backup_wallet":"备份钱包","popups_wallet_backup_json_file":"JSON 文件","popups_wallet_backup_private_key":"私钥","popups_wallet_reset_wallet":"重置钱包","popups_wallet_reset_wallet_description_1":"支付本地密码存储，您可以多次尝试解锁您的钱包。","popups_wallet_reset_wallet_description_2":"如果您忘记支付密码，您可以点击重置按钮就行重新设定。<strong>请记住，此行为会清除您之前所有的钱包。</strong>","popups_wallet_reset_wallet_description_3":"注意：如果您使用最后一次导入中的助记词，您可以恢复来自该助记词句的钱包。","popups_wallet_backup_json_file_confirm_password_tip":"此文件已使用您当前的支付密码加密保存。 导入钱包时请使用当前支付密码解密此文件。","popups_wallet_backup_private_key_tip":"请不要向任何人暴露您的私钥。私钥不需要解密即可在任何支持EVM兼容的链上钱包中使用。","popups_wallet_backup_input_password":"输入您的密码","popups_wallet_logout_input_payment_password":"请输入密码。","popups_wallet_backup_json_file_drag_tip":"将您的文件拖动到这里…","popups_wallet_backup_json_file_click_tip":"点击选择或拖放文件到这里","popups_wallet_backup_mnemonic_title":"写下助记词","popups_wallet_backup_mnemonic_tips":"请按正确顺序写下以下单词。保证安全，不与任何人分享！","popups_wallet_backup_mnemonic_view_tips":"点击查看助记词 <br /> 请确保没有人看到您的屏幕","popups_wallet_backup_mnemonic_hidden":"隐藏助记词","popups_wallet_backup_private_key_view_tips":"点击查看私钥 <br /> 请确认没有人正在看你的屏幕","popups_wallet_backup_copy_private_key":"复制私钥","popups_wallet_enter_your_wallet_name":"输入钱包名称","popups_wallet_delete_tip":"您确定要删除这个钱包吗？如果没有助记词或私钥，您的钱包将无法恢复。","popups_smart_pay_delete_tip":"该钱包 {{management}} 是 SmartPay 钱包 {{addresses}} 的管理账户, 删除后将无法使用 SmartPay 钱包进行任何交易。","popups_smart_pay_delete_tip_confirm":"您确定要删除此钱包吗？","popups_wallet_confirm_payment_password":"使用支付密码确认","popups_wallet_token_buy":"购买","popups_wallet_token_send":"发送","popups_wallet_token_swap":"兑换","popups_wallet_disconnect_failed":"钱包断开连接失败","popups_wallet_view_on_explorer":"在区块链浏览器查看","popups_wallet_gas_fee_settings":"Gas 费用设置","popups_wallet_gas_fee_settings_description":"Gas是向以太坊矿工支付的费用，矿工们偏向以较高的Gas费用进行交易。 Gas费用过低的交易可能会失败，支付的Gas费用将不会退回。","popups_wallet_gas_fee_settings_low":"低","popups_wallet_gas_fee_settings_medium":"中","popups_wallet_gas_fee_settings_high":"高","popups_wallet_gas_fee_settings_instant":"即时","popups_wallet_gas_fee_settings_custom":"自定义","popups_wallet_gas_fee":"Gas 费","popups_wallet_gas_price_too_low":"Gas 加个过低有几率会导致交易失败。","popups_wallet_invalid_gas_limit":"Gas 限制必须大于21,000和< 15M。","popups_wallet_priority_fee_is_zero":"优先费必须大于0。 ","popups_wallet_priority_fee_is_too_high":"最大优先费用在当前网络环境下过高。","popups_wallet_priority_fee_is_too_low":"最大优先费用在当前网络环境下过低。","popups_wallet_max_fee_is_too_low":"最大费用必须大于最小的基本费{{minimum}} Gwei。 ","popups_wallet_gas_price_estimate_second":"可能<{{seconds}} 秒","popups_wallet_gas_price_current_base_fee":"当前基础手续费是 {{baseFee}} Gwei","popups_wallet_gas_max_priority_fee_too_low":"最大优先费用在当前网络环境下过低。","popups_wallet_gas_fee_settings_usd":" ≈ <span>{{usd}}</span>","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","popups_wallet_gas_fee_settings_max_priority_fee":"最大优先费","popups_wallet_gas_fee_settings_max_fee":"最大费用","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit 必须至少 {{limit}}","popups_wallet_multiple_requests":"多笔交易请求 {{index}}/ {{total}}","popups_wallet_reject_all_requests":"拒绝 {{total}} 笔交易","popups_wallet_view_full_detail_transaction":"查看交易详情","popups_wallet_transaction_function_name":"功能：{{name}}","popups_wallet_speed_up_transaction_tips":"花费更多的交易费用来取消以前的交易。","popups_wallet_cancel_transaction_tips":"花费更多的交易费用来取消以前的交易。","popups_wallet_signature_request_title":"签名请求","popups_wallet_signature_request":"签名请求","popups_wallet_signature_request_message":"信息","popups_wallet_contract_interaction":"合约交互","popups_wallet_token_unlock_permission":"代币解锁权限","popups_wallet_token_infinite_unlock":"无限解锁","popups_wallet_contract_interaction_transfer":"转账","popups_wallet_contract_interaction_gas_fee":"Gas 费用","popups_wallet_contract_interaction_edit":"编辑","popups_wallet_contract_interaction_total":"总共","popups_wallet_password_not_match":"密码不一致。","popups_wallet_password_length_error":"密码长度不符合要求。","popups_wallet_password_change_successful":"设置支付密码成功。","popups_wallet_unlock_wallet":"解锁钱包","popups_wallet_unlock_error_password":"密码不正确","popups_wallet_persona_log_out_error_payment_password":"支付密码错误。","popups_wallet_activity_to_address":"至: {{address}}","popups_wallet_transfer_error_tip":"网络连接失败或合约交互错误导致发送交易失败。","popups_wallet_transactions_pending":"待定中...","popups_wallet_re_send":"重新发送","popups_wallet_choose_token":"选择代币","popups_wallet_gas_price":"Gas 价格","popups_wallet_done":"完成","popups_wallet_recovered":"恢复的钱包","popups_wallet_no_transactions":"你没有任何交易。","popups_wallet_more_expand":"显示价值小于$1 的代币","popups_wallet_more_collapse":"隐藏价值小于 $1 的代币","popups_wallet_change_owner":"更改管理账户","popups_wallet_current_managed_accounts":"当前的管理账户","popups_wallet_set_a_new_manage_account":"设置新的管理账户","popups_wallet_wallets":"钱包","popups_missing_parameter_caption":"请关闭此页面。","popups_persona_connect_to":"连接到 {{type}}","popups_persona_to_be_verified":"待验证","popups_persona_disconnect":"断开连接","popups_persona_disconnect_confirmation":"确认断开连接","popups_new_persona_disconnect_confirmation":"确认断开连接？","popups_disconnect_persona":"断开社交账户?","popups_new_persona_disconnect_confirmation_description":"这种与 Persona 的 twitter 验证关系将不会在Next.ID中记录。<br /> <br/> 执行此操作将影响这些与身份相关的功能：<br /> <li>发送加密消息。</li> <li>“浏览您的 Web3”功能</li><br/>","popups_persona_disconnect_confirmation_description":"您的验证关系即将解除。您的 Mask 朋友将无法继续发送点对点加密信息至您的身份或者查看您的 Web3 相关信息。","popups_persona_disconnect_tips":"您想移除已经验证过的 Twitter账号@<strong>{{identity}}</strong> 和身份 {{personaName}} 的绑定关系吗？","popups_wallet_disconnect_tips":"您是否确认去除关联钱包<strong>{{wallet}}</strong>？","popups_persona":"身份","popups_twitter_id":"Twitter ID","popups_persona_logout":"登出","popups_persona_disconnect_tip":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份助记词，身份私钥，本地或云端备份进行恢复。","popups_persona_disconnect_manage_wallet_warning":"请注意: \\n该身份 {{persona}} 是您 SmartPay 钱包 <span>{{addresses}}</span> 的管理账户。 如果退出身份账户, 您将无法使用 SmartPay 钱包进行任何交易。","popups_persona_persona_name_exists":"此身份名称已存在","popups_persona_sign_request_title":"签名请求","popups_persona_sign_request_message":"信息","popups_password_do_not_match":"备份密码不正确","popups_backup_password":"备份密码","popups_rename_error_tip":"最大长度为 {{length}} 个字符。","popups_select_wallet_to_verify_tips":"使用您的钱包连接Mask Network账户。","popups_wait_for_provider_connect_title":"等待 {{providerType}}","popups_wait_for_provider_connect_tips":"正在链接您的{{providerType}} 钱包","popups_wait_for_provider_connect_timeout":"钱包请求超时","popups_cancel_connect_provider":"第三方钱包中取消了连接操作。","popups_not_connected_third_party_wallet_title":"未连接","popups_not_connected_third_party_wallet_tips":"没有发现您的{{providerType}} 钱包","popups_not_connected_third_party_wallet_description":"请安装您的 metamask 钱包并设置您的第一个钱包。","popups_choose_another_wallet":"切换钱包","popups_verify_wallet_description":"添加您的钱包将允许您通过Next.ID服务拥有、查看和使用您的数字身份。 请注意，您必须签名并认证交易，以证明您的钱包的所有权。","popups_verify_wallet_bounded_tips":"钱包已经链接到当前的身份{{persona}}。","popups_verify_wallet_sign_success_tips":"您已成功使用钱包签名。","popups_verify_wallet_sign_fail_tips":"对不起，签名失败！请再试一次。","popups_verify_wallet_bind_fail_tips":"添加钱包失败，请重试。","popups_verify_wallet_congratulation_tips":"使用钱包{{wallet}} 链接{{persona}} 成功。","popups_switch_Wallet":"切换钱包","popups_encrypted_friends":"通讯录加密","popups_encrypted_friends_search_placeholder":"搜索 Next.ID、Twitter、Lens、ENS 或 地址","popups_encrypted_friends_search_no_result":"找不到搜索结果。","popups_encrypted_friends_no_friends":"没有任何加密好友，您可以尝试搜索。","popups_encrypted_friends_add_friends":"添加","popups_encrypted_friends_no_associated_accounts":"无关联账号","popups_encrypted_friends_deleted_successfully":"成功删除","popups_encrypted_friends_added_successfully":"添加成功","popups_select_wallet":"选择钱包","popups_switch_persona":"切换 Persona","popups_recovery":"恢复","popups_next_id":"Next.ID","popups_wallet_group_title":"钱包组 #{{index}}","popups_wallet_imported_group_title":"导入钱包","popups_backup_persona":"备份身份","popups_persona_rename_tips":"身份名称必须介于 1 到 24 个字符之间。","popups_backup_password_rules":"密码应该包含大写字母和小写字母，特殊字符和数字。 ","popups_backup_password_rules_tips":"备份密码必须是 8-20 个字符，包括大写、小写、特殊字符和数字。","popups_backup_password_tips":"请在导出私钥之前设置您的备份密码。","popups_backup_password_inconsistency":"新密码两次输入不一致","popups_backup_password_incorrect":"密码不正确。","popups_backup_password_invalid":"请输入导出个人私钥的备份密码。","popups_backup_password_set_successfully":"备份密码设置成功。","popups_export_private_key_tips":"此导出仅用于导出私钥。我们不导出任何其他数据。如果您需要导入更多数据，请前往设置： <a> 全局备份 </a>","popups_export_json_file_tips":"此文件已加密并以您当前的密码存储。 使用当前密码导入钱包时解密此文件。","popups_export_keystore_tips":"此 JSON 文件使用您当前的支付密码加密。导入此钱包时解密需要相同的密码。","popups_log_out_tips":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份助记词，身份私钥，本地或云端备份进行恢复。","popups_log_out_with_smart_pay_tips_one":"请注意: \\n该身份 {{persona}} 是您 SmartPay 钱包的管理账户。 如果退出身份账户, 您将无法使用 SmartPay 钱包进行任何交易。","popups_log_out_with_smart_pay_tips_other":"请注意: \\n该身份 {{persona}} 是您 SmartPay 钱包的管理账户。 如果退出身份账户, 您将无法使用 SmartPay 钱包进行任何交易。","popups_log_out_successfully":"退出成功","popups_log_out_failed":"登出失败","popups_profile_photo_image":"图片","popups_profile_photo_nfts":"NFTs","popups_profile_photo_drag_file":"将您的文件拖放到此处","popups_profile_photo_size_limit":"大小限制：10 MB","popups_profile_photo_browser_file":"浏览文件","popups_select_and_connect_wallet":"选择并连接到你的钱包","popups_set_avatar_successfully":"新头像设置成功","popups_set_avatar_failed":"加载头像失败。","popups_wallet_request_source":"请求源","popups_wallet_sign_message":"消息签名","popups_wallet_unlock_erc20_title":"给予权限来访问 <br /> 您的{{symbol}}？","popups_wallet_unlock_erc20_tips":"通过授予权限，您正在允许以下 <br /> 合约来获取您的资金","popups_wallet_unlock_erc20_placeholder":"输入最大支出限额","popups_wallet_unlock_erc20_requested_by":"支出限额请求者","popups_wallet_unlock_erc20_balance_tips":"允许第三方来使用钱包中的额度 {{amount}} {{symbol}}","popups_wallet_unlock_erc20_balance_too_high_tips":"这允许第三方使用您所有的代币余额，直到达到上限或您取消支出上限为止。 如果不打算这样做，则考虑设定较低的支出上限。","popups_wallet_unlock_erc20_revoke_tips":"如果使用0作为默认输入，此合同的批准将被撤销。","popups_wallet_unlock_erc20_approve_amount":"已批准的金额","popups_wallet_unlock_erc20_granted_to":"已授权","popups_wallet_unlock_erc721_title":"给予权限来访问 <br /> 您的{{symbol}}？","popups_wallet_unlock_erc721_tips":"通过授予权限，您允许以下 <br /> 合同访问您的 NFTs","popups_wallet_rpc_error":"网络或RPC提供方出现错误，请稍后再试 ！","popups_wallet_gas_price_should_greater_than_zero":"Gas 价格必须大于 0。","popups_settings_general":"常规","popups_settings_basic_setting":"基础设置","popups_settings_language":"语言","popups_settings_appearance":"外观","popups_settings_supported_sites":"所支持的网站","popups_settings_backup_and_recovery":"备份恢复","popups_settings_data_correlation":"数据关联","popups_settings_cloud_backup":"云端备份","popups_settings_local_backup":"本地备份","popups_settings_restore_database":"恢复数据库","popups_settings_restore_database_description":"从以前的数据库备份恢复","popups_settings_backup_password":"备份密码","popups_settings_support":"支持","popups_settings_feedback":"问题反馈","popups_settings_faq":"FAQ&Tutorial","popups_settings_website":"网站","popups_settings_about":"关于","popups_settings_version":"版本","popups_settings_service_agreement":"服务协议","popups_settings_primary_policy":"隐私政策","popups_settings_language_auto":"跟随系统","popups_settings_appearance_default":"跟随系统","popups_settings_appearance_light":"浅色","popups_settings_appearance_dark":"深色","popups_settings_select_language":"选择语言","popups_settings_supported_sites_description":"管理 Mask 网络插件注入网站的权限。 关闭后，将不再支持使用此站点上的插件。","popups_settings_supported_website_one":"<strong>{{count}}<strong> 网站","popups_settings_supported_website_other":"<strong>{{count}}<strong> 网站","popups_settings_change_backup_password":"修改备份密码","popups_settings_new_backup_password":"新密码","popups_settings_new_backup_password_error_tips":"新密码与当前密码不可相同。","popups_settings_backup_password_invalid":"缺少数字、字母或特殊字符。","popups_settings_set_backup_password_tips":"请设置备份密码","popups_settings_no_backup":"没有备份","popups_settings_backup_on":"在 {{time}} 备份","popups_settings_local_backup_exist":"您已备份。","popups_settings_cloud_backup_exist":"您已经用电子邮件/电话号码备份成功。","popups_settings_not_set":"未设置","nft_wallet_label":"钱包","plugin_profile_no_wallets":"在此连接您的钱包。<br/>此部分将显示给您的加密朋友。<br/>显示内容包括数字艺术、捐赠、徽章<br/>和其他链上的公开信息。","nft_input_address_label":"请输入合约地址","nft_input_tokenid_label":"请输入Token ID","nft_owner_hint":"此 NFT 不存在或不属于您。","nft_add_dialog_title":"添加收藏品","nft_add_button_label":"添加","nft_add_button_label_checking":"检查中","nft_list_title":"NFT 头像","nft_wallet_change":"更改","nft_button_add_collectible":"添加收藏品","nft_avatar":"NFT 头像","web3_tab_hint":"未发现任何地址。","plugin_artblocks_not_active":"此项目已不再生效","plugin_artblocks_completed":"已完成","plugin_artblocks_paused":"已暂停","plugin_artblocks_collection":"NFT 系列","plugin_artblocks_details":"详情","plugin_artblocks_created_by":"创建者","plugin_artblocks_purchase":"购买","plugin_artblocks_purchasing":"购买中...","plugin_artblocks_legal_text":"通过勾选此框，代表我同意ArtBlocks的 <terms>服务条款</terms>。","plugin_artblocks_check_tos_document":"请检查 ToS 文档","plugin_artblocks_price_per_mint":"每份铸造的价格","plugin_artblocks_price_row":"价格：","plugin_artblocks_minted_row":"已铸造：","plugin_artblocks_license_row":"许可证：","plugin_artblocks_library_row":"照片库：","plugin_artblocks_website":"网址","plugin_artblocks_infos":"信息资料","plugin_artblocks_chain":"链","plugin_artblocks_blockchain_row":"区块链：","plugin_artblocks_contract_row":"合约：","plugin_artblocks_smt_wrong":"发生未知错误。","popups_wallet_disconnect_success":"钱包断开连接成功","plugin_artblocks_share":"我刚刚从{{name}} 使用{{price}} {{symbol}} 购买了一件美丽的艺术品。安装@realMaskNetwork来获取您的作品。","plugin_artblocks_share_no_official_account":"我刚刚从{{name}} 使用{{price}} {{symbol}} 购买了一件美丽的艺术品。欢迎加入！","plugin_tips_disconnect_introduction":"您确定要断开 {{persona}} 与钱包 <strong>{{address}}<strong/> 的连接吗？","plugin_tips_not_evm_alert":"小费功能目前仅支持 EVM 链。将来会添加对其他链的支持。","plugin_artblocks_description":"Artblocks 依托算法生成内容技术，给用户提供随心铸造 Nft 的体验。","plugin_artblocks_name":"Artblocks","plugin_ens_description":"优化在社交媒体中 ENS 的搜索结果。","plugin_ens_name":"ENS","nft_button_set_avatar":"设置 NFT 头像","plugin_mask_box_name":"Mask盲盒","plugin_mask_box_description":"支持多链的去中心化NFT盲盒发布平台。","plugin_transak_name":"法币入金","plugin_transak_description":"法币入金可支持在60多个国家内购买代币。","popups_wallet_unsupported_network":"不支持的网络类型","plugin_default_title":"默认","plugin_provider_by":"提供方：","plugin_enable":"开启插件","show_wallet_setting_button":"前往设置","web3_profile_no_social_address_list":"找不到有效的用户地址数据源。","plugin_avatar_feature_general_user_name":"普通用户","plugin_avatar_feature_general_user_description":"查看用户的 Web3 足迹，包括NFT 、社交媒体帖子和基于公共数据源的其他交易活动。","plugin_avatar_feature_token_name":"Token","plugin_avatar_feature_token_description":"查看实时加密价格、市场上限、交易量等。","plugin_avatar_feature_nft_name":"NFT 集合 ","plugin_avatar_feature_nft_description":"对于NFT热门信息，热点项目，值得注意的交易等保持关注。","plugin_web3_profile_feature_general_user_name":"普通用户","plugin_web3_profile_feature_general_user_description":"查看用户的 Web3 足迹，包括NFT 、社交媒体帖子和基于公共数据源的其他交易活动。","plugin_web3_profile_feature_nft_name":"NFT 集合 ","plugin_web3_profile_feature_nft_description":"对于NFT热门信息，热点项目，值得注意的交易等保持关注。","decentralized_search_name":"DSearch","decentralized_search_description":"使用 Token 名称、 NFT 收藏品、 ENS 域名或钱包地址优化搜索结果。","decentralized_search_feature_token_name":"Token","decentralized_search_feature_token_description":"当您寻查找 Token 时，获取优化的搜索结果。","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"使用 NFT 集合的名称或符号搜索以获得最佳结果。","decentralized_search_feature_wallet_name":"ENS 或钱包地址","decentralized_search_feature_wallet_description":"使用ENS域名或钱包地址搜索以获得最优结果。","applications_create_persona_hint":"使用此功能需要先创建一个身份并验证您的社交媒体账号。","applications_create_persona_title":"身份","applications_create_persona_action":"创建身份","plugin_collectible_insufficient_balance":"余额不足","persona_boundary_create_persona":"创建身份","persona_boundary_connect_persona":"连接身份","persona_boundary_verify_persona":"验证您的Twitter ID","plugin_wallet_qr_code_with_wallet_connect":"使用WalletConnect兼容的钱包扫描二维码","plugin_wallet_connect_dialog_title":"WalletConnect","plugin_wallet_select_provider_dialog_title":"连接钱包","recent_transaction_success":"成功","recent_transaction_failed":"失败","wallet_status_pending_clear":"清除","wallet_status_pending_one":"{{count}} 个待定","wallet_status_pending_other":"{{count}} 个待定","wallet_status_pending_clear_all":"全部清除","wallet_risk_warning_no_select_wallet":"尚未选择钱包。","wallet_risk_warning_dialog_title":"风险提示","wallet_risk_warning_content":"亲爱的用户，<br/><br/>当再使用Mask Network中任何与钱包相关的插件时，请确认以下使用风险：<br/><br/>Mask Network提供非商业性免费服务。 该插件由社区成员和其他优秀的第三方去中心化应用团队提供。 由于去中心化网络的自由性和其他不确定的风险因素， 用户被要求适当地保护他们的敏感信息，例如钱包助记词和私钥。 请谨慎进行任何区块链合同交互。任何第三方去中心化应用(插件) 造成的风险都由第三方去中心化应用自身承担。 点击确认按钮意味着您同意承担上述风险。","wallet_risk_warning_confirm_tips":"点击确认按钮意味着您同意承担上述风险。","wallet_risk_confirm_confirming":"确认中","wallet_risk_confirm_failed":"确认失败","wallet_name_length_error":"至少包含一个字符","add_collectibles_token_id_placeholder":"Token ID 用逗号分隔，例如：1223,1224,","plugin_wallet_solana_tips":"Phantom 只支持Solana 链。","plugin_wallet_blocto_tips":"Blocto 只支持 Flow 链。","plugin_wallet_fortmatic_tips":"Formatic 仅支持 ETH 和 BNB 链。","plugin_wallet_support_chains_tips":"仅支持 EVM 链、ETH、BNB 、Polygon、Arb、Op等。","plugin_wallet_connect_fortmatic":"连接 Fortmatic","plugin_wallet_choose_network":"选择网络","plugin_disabled_tip":"您需要打开 DAPP 才能查看特定内容。","manage_network":"管理网络","network_management_add_network":"添加网络","network_name":"网络名称","rpc_url":"RPC URL","chain_id":"Chain ID","optional_currency_symbol":"货币符号(可选)","optional_block_explorer_url":"区块浏览器（可选）","account_already_exists":"此帐户已存在","network_already_exists":"此网络名称已存在","incorrect_rpc_url":"无效 RPC URL 。","incorrect_explorer_url":"无效的块浏览器URL。","rpc_url_is_used_by":"RPC URL已经被{{- name}} 网络使用","chain_id_is_used_by":"这个Chain ID目前已被 {{- name}} 网络使用。","failed_to_fetch_chain_id":"无法获取链 ID。您的 RPC URL 正确吗？","rpc_return_different_chain_id":"您输入的 RPC URL 返回了一个不同的链 ID({{chain_id}})。请更新 RPC URL 来匹配你所要添加的网络的链 ID。","rpc_return_different_symbol":"您所输入的货币符号和当前网络链条{{chain_id}} 所支持货币符号 ({{symbol}}) 不匹配。请检查。","rpc_requires_https":"URL要求合适的 HTTPS 前缀。","failed_to_save_network":"无法保存网络","incorrect_chain_id":"不正确的链号","invalid_number":"数字无效","saved_network_successfully":"保存网络成功","adding_network_successfully":"添加网络成功","deleted_network_successfully":"网络删除成功","hided_token_successfully":"成功隐藏。","not_enough_data_to_present":"没有足够可显示的数据","wallet_send":"发送","wallet_receive":"接收","wallet_swap":"兑换","wallet_add_contact":"添加联系人","wallet_add_contact_successfully":"添加联系人成功。","wallet_edit_contact":"编辑联系人","wallet_edit_contact_successfully":"编辑联系人成功。","wallet_delete_contact":"删除联系人","wallet_delete_contact_successfully":"删除联系人成功。","wallet_name":"钱包名称","wallet_account":"钱包账户","wallet_imported":"已导入","scan_address_to_payment":"扫描二维码以接收付款","wallet_connect":"WalletConnect","wallet_connect_tips":"使用WalletConnect兼容的钱包扫描二维码","empty":"空的","hide_token_symbol":"隐藏 {{- symbol}}","hide_token_description":"确认隐藏{{- symbol}}？您可以在任何时候通过添加来重新展示这个NFT。","scam_tx":"Scam tx","to_address":"至: {{address}}","other_address":"从 <addr>{{address}}</addr>","other_address$from":"从 <addr>{{address}}</addr>","other_address$to":"至 <addr>{{address}}</addr>","transaction_status":"状态","transaction_failed":"失败","transaction_success":"成功","transaction_pending":"确认中","transaction_base":"基础信息","transaction_from":"从","transaction_to":"发送至","transaction_link":"交易记录","transaction_hash":"交易哈希","transaction_gas_limit":"Gas 限制(Gwei)","transaction_gas_used":"所用 Gas (单位)","transaction_gas_price":"Gas 价格 (gwei)","transaction_priority_fee":"优先费用 (GWEI)","transaction_max_fee":"最大手续费 (GWEI)","transaction_fee":"交易费","activity_log":"活动日志","transaction_confirmed_at":"交易在{{- datetime}} 被确认","transaction_completed_at":"交易已经完成并已经已经在{{- datetime}} 被区块链记录。","collectible_title":"收藏品","collectible_description":"描述","collectible_properties":"属性","collectible_last_sale_price":"属性","about_collection":"关于 {{- name}}","hide_collectible":"隐藏 {{-name}}","hide_collectible_description":"确认隐藏{{- name}}？您可以在任何时候通过添加来重新展示这个NFT。","add_new_address_to_an_existing_group":"向现有组添加新地址","or_create_a_new_wallet_group":"或者创建一个新的钱包组"}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/zh-TW.json
const shared_ui_locales_zh_TW_namespaceObject = JSON.parse('{"database_backup":"備份資料庫","database_clear":"清除資料庫","edit":"編輯","clear":"清除","more":"更多","approve":"同意","address":"地址","gas_price":"礦工費","redirect_to":"跳轉至","sign":"簽署","reload":"重新讀取","load":"加載","no_data":"查無數據","tags":"標記","contract":"合約","initializing":"初始化中...","redirect_alert":"如果你的瀏覽器沒有跳轉， <terms>請點擊此處</terms>.","add_nft_contract_search_hint":"檢索NFT合約名稱或地址","applications":"應用","additional_post_box__encrypted_post_pre":"使用 #mask_io 解密這篇貼文！ {{encrypted}}","additional_post_box__encrypted_post_pre_red_packet":"用 #mask_io 開啟紅包 {{encrypted}}","additional_post_box__steganography_post_pre":"這張圖片是使用 #mask_io 加密。 📪🔑 安裝 mask.io 解密。 {{random}}","auto_paste_failed_dialog_title":"手動貼上","auto_paste_failed_dialog_content":"請複製下方文章或圖片 (如果有的話) 然後發佈它","auto_paste_failed_dialog_image_caption":"在新分頁中開啟","auto_paste_failed_snackbar":"您需要手動貼上加密的內容嗎?","auto_paste_failed_snackbar_action":"告訴我怎麼做","auto_paste_failed_snackbar_action_close":"關閉","automation_request_click_post_button":"請按「發文」按鈕以開啟發文對話框","ok":"確認","cancel":"取消","comment_box__placeholder":"添加加密留言…","confirm":"確認","copy_text":"複製文字","loading_failed":"讀取失敗","try_again":"再試一次","copy_image":"複製圖片","copy_success_of_wallet_addr":"複製錢包地址成功！","copy_success_of_text":"複製文字成功！","copy_success_of_image":"圖片複製成功！","connecting":"正在連接…","create":"建立","copied":"已複製","dashboard_no_collectible_found":"找不到收藏品","decrypted_postbox_decrypting":"Mask 正在解密…","decrypted_postbox_decoding":"Mask 正在解碼…","decrypted_postbox_decrypting_finding_person_key":"Mask 正在尋找這個作者的公鑰…","decrypted_postbox_decrypting_finding_post_key":"Mask 正在取得貼文金鑰以解密此貼文…","decrypted_postbox_author_mismatch":"最初由 {{name}} 發佈","decrypted_postbox_title":"已由 Mask 解密：","dismiss":"取消","delete":"刪除","delete_wallet":"刪除錢包","hide_token":"隱藏代幣","hide_token_hint":"您可以在將來新增 <strong>{{token}}</strong> 藉由到錢包面板中的「新增代幣」。","done":"完成！","download":"下載","failed":"失敗","buy_now":"立即購買","setup_guide_find_username_text":"Mask 需要使用者名稱將您的個人資料連接到您的角色。<br/>請確保它是正確的。","setup_guide_connect_auto":"連線","setup_guide_connect_failed":"連線失敗… 請再試一次。","user_guide_tip_connected":"已成功連接此帳號","import":"導入","no_search_result":"沒有結果","unlock":"解鎖","browser_action_enter_dashboard":"進入儀錶板","post_dialog__button":"完成","post_dialog__placeholder":"在這裡輸入文字…","post_dialog__title":"Mask: 發表貼文","post_modal_hint__button":"發表加密貼文","hide":"隱藏","reset":"重設","editor":"編輯器","retry":"重試","go_wrong":"出錯了","search_box_placeholder":"在這裡輸入以搜尋","select_all":"選擇全部","select_none":"取消選擇全部","select_specific_friends_dialog__title":"選擇特定聯絡人","service_decryption_failed":"解密失敗。","service_username_invalid":"錯誤的使用者名稱","speed_up":"加速","save":"存檔","skip":"跳過","next":"下一個","try":"試一下","share":"分享","share_to":"分享至…","sharing":"分享中","transfer":"傳送","export":"導出","wallet_rename":"重新命名錢包","wallet_loading_nft_contract":"加載NFT合約中...","wallet_search_no_result":"無結果","wallet_confirm_with_password":"確認密碼","wallet_airdrop_nft_unclaimed_title":"尚未認領的NFT空投","wallet_balance":"餘額","wallet_new":"新錢包","wallet_status_button_change":"更改","wallet_status_button_copy_address":"複製地址","wallet_transfer_receiving_account":"接收地址","wallet_transfer_to_address":"接收地址","wallet_transfer_send":"發送","wallet_transfer_title":"傳送","wallet_transfer_error_amount_absence":"輸入一個金額","wallet_transfer_error_address_absence":"輸入接收人地址","wallet_transfer_error_invalid_address":"錯誤的接收人地址","wallet_transfer_error_no_address_has_been_set_name":"接收者地址無效","wallet_transfer_error_no_support_ens":"ENS網路不被支持","wallet_transfer_error_gas_price_absence":"輸入礦工費","wallet_transfer_error_gas_limit_absence":"輸入礦工費上限","wallet_transfer_error_max_fee_absence":"輸入總交易費用","wallet_transfer_error_max_priority_fee_absence":"輸入優先交易費用","wallet_transfer_error_max_priority_gas_fee_imbalance":"總交易費用不能低於優先交易費用","wallet_transfer_gwei":"GWEI","wallet_transfer_between_my_accounts":"在我的帳戶間轉帳","plugin_wallet_select_a_nft_contract":"選擇一份NFT合約","plugin_wallet_select_a_nft_owner":"選擇一位NFT合約擁有者","plugin_wallet_select_a_nft_operator":"選擇一位NFT合約執行者","plugin_wallet_fail_to_load_nft_contract":"加載NFT合約失敗。點擊重試。","plugin_wallet_nft_approving_all":"解鎖 {{symbol}} 中...","plugin_wallet_approve_all_nft":"解鎖 {{symbol}}","plugin_wallet_approve_all_nft_successfully":"解鎖 {{symbol}} 成功","plugin_wallet_confirm_risk_warning":"風險警告確認","plugin_wallet_no_gas_fee":"沒有 Gas 費用","plugin_wallet_update_gas_fee":"正在更新 Gas 費用…","plugin_wallet_connect_a_wallet":"連接到錢包","plugin_wallet_invalid_network":"錯誤的網路","plugin_wallet_select_a_wallet":"選擇一個錢包","plugin_wallet_transaction":"交易","plugin_wallet_transaction_wait_for_confirmation":"等待確認中…","plugin_wallet_transaction_submitted":"你的交易已經被送出！","plugin_wallet_transaction_confirmed":"你的交易已經被確認！","plugin_wallet_transaction_reverted":"交易被復原！","plugin_wallet_transaction_rejected":"交易被拒絕！","plugin_wallet_transaction_server_error":"交易由於內部 JSON-RPC 伺服器錯誤而失敗。","plugin_wallet_view_on_explorer":"在區塊鏈瀏覽器上查看","plugin_wallet_on_create":"建立錢包","plugin_wallet_on_connect":"連接錢包","plugin_wallet_import_wallet":"匯入錢包","plugin_wallet_token_unlock":"特定數量解鎖","plugin_wallet_token_infinite_unlock":"無限解鎖","plugin_wallet_connect_safari_metamask":"連接到 MetaMask","plugin_wallet_connect_safari_rainbow":"連接到 Rainbow","plugin_wallet_connect_safari_trust":"連接到 Trust","plugin_wallet_connect_safari_im_token":"連接到 imToken","plugin_wallet_on_connect_in_firefox":"連接","plugin_wallet_return_mobile_wallet_options":"回到手機錢包選項","plugin_wallet_view_qr_code":"顯示 QR Code","plugin_wallet_switch_network":"切換至 {{network}}","plugin_wallet_switch_network_under_going":"切換至 {{network}} 中","plugin_wallet_not_available_on":"{{network}} 不可用","plugin_wallet_connect_wallet":"連接錢包","plugin_red_packet_create_with_token":"使用 {{symbol}} 建立紅包","plugin_gitcoin_select_a_token":"選擇一個代幣","plugin_gitcoin_insufficient_balance":"{{symbol}} 餘額不足","plugin_trader_tutorial":"新手教學","plugin_trader_safety_agree":"我瞭解","plugin_trader_total_supply":"供應總量","plugin_trader_market_cap":"市值","plugin_trader_swap":"交換","plugin_trader_wrap":"包裹","plugin_trader_swap_from":"來自","plugin_trader_unwrap":"展開","plugin_trader_buy":"購買","plugin_trader_no_data":"沒有資料","plugin_trader_tab_market":"一般","plugin_trader_tab_price":"價格","plugin_trader_tab_exchange":"交易所","plugin_trader_error_amount_absence":"輸入一個金額","plugin_trader_error_insufficient_balance":"{{symbol}} 餘額不足","plugin_trader_error_insufficient_lp":"本次交易流動性不足","plugin_trade_error_input_amount_less_minimum_amount":"輸入金額低於最小值","plugin_trader_slippage_tolerance":"滑動容許值：","plugin_trader_gas_fee":"礦工費","plugin_trader_unlock_tips":"你必須授予 {{provider}} 智能合約權限去使用你的 {{symbol}} 。 每個代幣只需授權一次。","plugin_trader_gas_option":"{{option}} ({{value}}) Gwei","plugin_trader_no_enough_liquidity":"流通性不足","plugin_trader_gas":"礦工費","plugin_poll_display_name":"插件：投票","plugin_poll_question_hint":"提出一個問題…","plugin_poll_options_hint":"選擇","plugin_poll_length":"投票長度","plugin_poll_length_days":"天","plugin_poll_length_hours":"小時","plugin_poll_length_minutes":"分鐘","plugin_poll_length_unknown":"未知","plugin_poll_create_new":"建立新的","plugin_poll_select_existing":"選擇現有的","plugin_poll_send_poll":"送出投票","plugin_poll_status_closed":"已關閉","plugin_poll_status_voting":"投票中","plugin_poll_status_voted":"已投票。","plugin_poll_deadline":"距離投票結束還有 {{time}}","plugin_snapshot_info_title":"資訊","plugin_snapshot_info_strategy":"策略","plugin_snapshot_info_author":"作者","plugin_snapshot_info_start":"開始日期","plugin_snapshot_info_end":"結束日期","plugin_snapshot_info_snapshot":"快照","plugin_snapshot_result_title":"結果","plugin_snapshot_votes_title":"投票","plugin_snapshot_no_power":"沒有權力","plugin_snapshot_vote_success":"投票成功！","plugin_snapshot_vote":"投票","plugin_snapshot_vote_choice":"選擇","plugin_snapshot_vote_power":"你的投票權力","plugin_snapshot_vote_title":"投下你的一票","plugin_snapshot_vote_confirm_dialog_title":"確認投票","plugin_snapshot_vote_confirm_dialog_choice":"你確定要投票給 「{{ choiceText }}」 嗎?","plugin_snapshot_vote_confirm_dialog_warning":"這項操作無法復原。","plugin_snapshot_current_result_title":"目前的結果","plugin_snapshot_download_report":"下載報告","plugin_collectible_insufficient_balance":"餘額不足","wallet_name":"錢包名稱"}');
;// CONCATENATED MODULE: ./packages/mask/shared-ui/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const locales_languages_languages = {
    en: shared_ui_locales_en_US_namespaceObject,
    ja: shared_ui_locales_ja_JP_namespaceObject,
    ko: shared_ui_locales_ko_KR_namespaceObject,
    qy: shared_ui_locales_qya_AA_namespaceObject,
    'zh-CN': shared_ui_locales_zh_CN_namespaceObject,
    zh: shared_ui_locales_zh_TW_namespaceObject
};

const addMaskI18N = (0,register_ns/* createI18NBundle */.C)('mask', locales_languages_languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ./packages/mask/shared-ui/initialization/locales.ts





es/* initReactI18next */.Db.init(instance/* i18NextInstance */.BV);
addMaskI18N(instance/* i18NextInstance */.BV);
(0,languages/* addSharedI18N */.z)(instance/* i18NextInstance */.BV);
addShareBaseI18N(instance/* i18NextInstance */.BV);

// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/createSettings.ts
var createSettings = __webpack_require__(6938);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
;// CONCATENATED MODULE: ./packages/mask/shared-ui/initialization/storage.ts


const memory = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return service/* default */.ZP.Settings.__kv_storage_read__('memory', ...args);
    },
    async setValue (...args) {
        await service/* default */.ZP.Settings.__kv_storage_write__('memory', ...args);
    }
};
const indexedDB = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return service/* default */.ZP.Settings.__kv_storage_read__('indexedDB', ...args);
    },
    async setValue (...args) {
        await service/* default */.ZP.Settings.__kv_storage_write__('indexedDB', ...args);
    }
};
(0,KVStorage/* setupMaskKVStorageBackend */.$e)(indexedDB, memory);
(0,createSettings/* setupLegacySettingsAtNonBackground */.zm)(service/* default */.ZP.Settings.getLegacySettingsInitialValue);

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/Telemetry/index.ts
var Telemetry = __webpack_require__(60530);
;// CONCATENATED MODULE: ./packages/mask/shared-ui/initialization/telemetry-update.ts

Messages/* MaskMessages */.q.events.telemetryIDReset.on((id)=>Telemetry/* TelemetryID */.w.value = id);

// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/mask/shared-ui/initUIContext.ts
var initUIContext = __webpack_require__(9485);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
;// CONCATENATED MODULE: ./packages/mask/shared-ui/initialization/walletSetup.ts






(0,entry/* initWallet */.y2)({
    addWallet: service/* default */.ZP.Wallet.addWallet,
    signWithPersona: (a, b, c, d)=>service/* default */.ZP.Identity.signWithPersona(a, b, c, location.origin, d),
    closeWalletConnectDialog: ()=>{
        if (Sniffings/* Sniffings */.Y.is_popup_page) {
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.popupWalletConnectEvent.sendToAll({
                open: false
            });
            return;
        }
        modals/* WalletConnectQRCodeModal */.SK.close();
    },
    openPopupWindow: service/* default */.ZP.Helper.openPopupWindow,
    openWalletConnectDialog: async (uri)=>{
        if (Sniffings/* Sniffings */.Y.is_popup_page) {
            const [promise, resolve, reject] = (0,esm/* defer */.PQ)();
            const callback = ({ open })=>!open ? resolve(true) : undefined;
            (0,esm/* delay */.gw)(5000).then(()=>reject(new Error('timeout')));
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.popupWalletConnectEvent.on(callback);
            CrossIsolationEvents/* CrossIsolationMessages */.W.events.popupWalletConnectEvent.sendToAll({
                uri,
                open: true
            });
            await promise.finally(()=>CrossIsolationEvents/* CrossIsolationMessages */.W.events.popupWalletConnectEvent.off(callback));
        } else {
            await modals/* WalletConnectQRCodeModal */.SK.openAndWaitForClose({
                uri
            });
        }
    },
    send: service/* default */.ZP.Wallet.send,
    selectMaskWalletAccount: service/* default */.ZP.Wallet.selectMaskAccount,
    grantEIP2255Permission: service/* default */.ZP.Wallet.grantEIP2255Permission,
    disconnectAllWalletsFromOrigin: service/* default */.ZP.Wallet.disconnectAllWalletsFromOrigin,
    wallets: (0,subscription/* createSubscriptionFromAsync */.Fd)(()=>service/* default */.ZP.Wallet.getWallets(), constants/* EMPTY_LIST */.rP, CrossIsolationEvents/* CrossIsolationMessages */.W.events.walletsUpdated.on),
    hasPaymentPassword: service/* default */.ZP.Wallet.hasPassword,
    MaskWalletContext: {
        allPersonas: initUIContext/* allPersonas */.d,
        resetAllWallets: service/* default */.ZP.Wallet.resetAllWallets,
        removeWallet: service/* default */.ZP.Wallet.removeWallet,
        renameWallet: service/* default */.ZP.Wallet.renameWallet
    }
});

;// CONCATENATED MODULE: ./packages/mask/shared-ui/initialization/post-async-setup.ts






/***/ }),

/***/ 96643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_base_src_Telemetry_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60530);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4643);


const timeStart = Date.now();
const task = _services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.Helper.getTelemetryID().then((id)=>{
    _shared_base_src_Telemetry_index_js__WEBPACK_IMPORTED_MODULE_1__/* .TelemetryID */ .w.value = id;
    const timeEnd = Date.now();
    if (timeEnd - timeStart > 500) {
        console.warn(`Services.Helper.getTelemetryID took ${timeEnd - timeStart}ms.`);
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);


/***/ }),

/***/ 91115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ PopupsHistory)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97011);

function __create__(creator) {
    const run = ()=>{
        if (false) {}
        return creator();
    };
    return run();
}
const PopupsHistory = __create__(()=>{
    if (location.href.includes('popups.html')) return (0,history__WEBPACK_IMPORTED_MODULE_0__/* .createHashHistory */ .q_)();
    return;
});


/***/ }),

/***/ 6938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PY: () => (/* binding */ createBulkSettings),
/* harmony export */   TI: () => (/* binding */ createGlobalSettings),
/* harmony export */   zm: () => (/* binding */ setupLegacySettingsAtNonBackground)
/* harmony export */ });
/* unused harmony exports setupLegacySettingsAtBackground, createNSSettingsJSON */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65734);
/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);



let getValue = async ()=>{
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.None;
};
function setupLegacySettingsAtBackground(getStorage, setStorage) {
    getValue = getStorage;
    MaskMessages.events.legacySettings_set.on(async (payload)=>{
        const { key, value } = payload;
        await setStorage(key, value);
        MaskMessages.events.legacySettings_broadcast.sendToAll({
            key,
            value
        });
    });
}
function setupLegacySettingsAtNonBackground(getStorage) {
    getValue = getStorage;
}
function setupValueRef(settings, key) {
    let duringInitialValueSet = false;
    let duringBroadcastSet = false;
    Promise.resolve().then(()=>getValue(key)).then((value)=>{
        duringInitialValueSet = true;
        if (value.isSome()) settings.value = value.value;
        else if (settings instanceof _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td) settings.nowReady?.();
    }).finally(()=>duringInitialValueSet = false);
    _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_broadcast.on((payload)=>{
        if (key !== payload.key) return;
        duringBroadcastSet = true;
        settings.value = payload.value;
        duringBroadcastSet = false;
    });
    settings.addListener((newVal)=>{
        if (duringInitialValueSet || duringBroadcastSet) return;
        _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_set.sendToAll({
            key,
            value: newVal
        });
    });
    return settings;
}
/** @deprecated */ function createNSSettingsJSON(ns, key, value) {
    const settings = new ValueRefJSON(value);
    setupValueRef(settings, `${ns}+${key}`);
    return settings;
}
/** @deprecated */ function createGlobalSettings(key, value, comparer) {
    const settings = new _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td(value, comparer);
    setupValueRef(settings, `settings+${key}`);
    return settings;
}
/** @deprecated */ function createBulkSettings(settingsKey, defaultValue, comparer) {
    const item = {
        __proto__: null
    };
    _Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_bulkDiscoverNS.on((ns)=>{
        if (ns.startsWith('plugin:') || settingsKey === 'pluginsEnabled') return;
        setup(ns);
    });
    function setup(ns) {
        if (ns in item) return false;
        const settings = new _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td(defaultValue, comparer);
        setupValueRef(settings, `${ns}+${settingsKey}`);
        item[ns] = settings;
        return true;
    }
    return new Proxy(item, {
        get (target, ns) {
            if (typeof ns !== 'string') return undefined;
            // if we're the first one to access this property, notify all others to create this property too.
            if (setup(ns)) {
                target[ns].readyPromise.then(()=>_Messages_index_js__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages */ .q.events.legacySettings_bulkDiscoverNS.sendToAll(ns));
            }
            return target[ns];
        }
    });
}


/***/ }),

/***/ 26424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H_: () => (/* binding */ fromHex),
/* harmony export */   NC: () => (/* binding */ toHex),
/* harmony export */   s3: () => (/* binding */ toBase64)
/* harmony export */ });
/* unused harmony exports fromBase64URL, toBase64URL */
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85907);

function fromBase64URL(x) {
    return new Uint8Array(Convert.FromBase64Url(x));
}
function toBase64URL(x) {
    return Convert.ToBase64Url(x);
}
function toBase64(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.ToBase64(x);
}
function toHex(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.ToHex(x);
}
function fromHex(x) {
    if (x.startsWith('0x')) x = x.slice(2);
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert */ .ep.FromHex(x));
}


/***/ }),

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ addSharedI18N)
});

// UNUSED EXPORTS: languages

;// CONCATENATED MODULE: ./packages/shared/src/locales/en-US.json
const en_US_namespaceObject = JSON.parse('{"send":"Send","search_area":"Search Area","approve":"Approve","operation":"Operation","approve_mask":"Approve MASK?","approve_mask_description":"To interact with Polygon network, MATIC tokens are required to pay as gas fees. SmartPay allow users to pay gas fee on Polygon network with MASK token.","approve_mask_question":"Do you want to set MASK token as gas fee?","authorization_descriptions":"Mask Network requires you to authorize the following websites before using it.","create_persona_hint":"Please create a Persona and verify your account to use this function.","create_persona_title":"Persona","create_persona_action":"Create persona","congratulations":"Congratulations!","coming_soon":"Coming soon","domain_request":"Domain Request","available_balance":"Available Balance","snackbar_done":"Done","added_by_user":"Added by user","all":"All","retry":"Retry","gwei":"Gwei","import":"Import","select_an_nft":"Select an NFT","wallet_balance":"Balance","wallet_balance_eth":"Balance({{symbol}})","balance":"Balance","decentralized_search_name":"DSearch","web3_profile_card_name":"Web3 Profile Card","profile_card_name":"Web3 Profile","unlock":"Unlock","select_token":"Select","select_a_token":"Select a token","select_collectibles":"Select Collectibles","no_collectible_found":"No collectible found.","manage_token_list":"Manage Token List","mobile_number":"Mobile Number","token_list_loading":"Loading","erc20_token_list_placeholder":"Name or Contract address e.g. USDC or 0x234...","erc20_search_wrong_address":"Incorrect contract address.","erc20_manage_token_list":"Manage Token Lists","address_viewer_address_name_address":"Address","dialog_dismiss":"Dismiss","dialog_confirm":"Confirm","dialog_share":"Share","dialog_confirm_label":"Confirm","share_dialog_transaction":"Transaction","share_dialog_view_on_explorer":"View on Explorer","share_dialog_transaction_confirmed":"Your transaction was confirmed!","load_failed":"Load failed","load_retry":"Reload","loading":"Loading","no_results":"No results","powered_by":"Powered by","copy":"Copy","copied":"Copied!","go_plus":"GO+","rss3":"RSS3","mask_network":"Mask Network","search":"Search","check_security":"Check Security","search_input_placeholder":"Please enter token contract address.","token_info":"Token info","more_details":"More Details","more":"More","details":"Details","unnamed":"Unnamed","contributions":"Contributions","description":"Description","day_one":"day","day_other":"days","hour_one":"hour","hour_other":"hours","ago":"ago","properties":"Properties","security_detection":"Security Detection","risky_items":"{{quantity}} Risky items","attention_items":"{{quantity}} Attention items","risky_item":"{{quantity}} Risky item","attention_item":"{{quantity}} Attention item","change":"Change","edit":"Edit","connect_your_wallet":"Connect your wallet","connected_wallet_settings":"Connected wallets settings","wallet_settings":"Wallet Settings","pending":"Pending...","gas_settings_title":"Advanced Settings","gas_settings_gas_option_type_slow":"Medium","gas_settings_gas_option_type_normal":"High","gas_settings_gas_option_type_fast":"Instant","gas_settings_gas_option_estimate_distance":"~ {{distance}}","gas_settings_gas_option_amount_in_gwei":"up to {{- amount}} Gwei","gas_settings_section_title_slippage_tolerance":"Slippage Tolerance","gas_settings_custom":"Custom","gas_settings_tab_basic":"Basic","gas_settings_tab_advanced":"Advanced","gas_settings_label_gas_fee":"Gas Fee","gas_settings_label_transaction_cost":"Transaction cost","gas_settings_label_gas_price":"Gas Price","gas_settings_label_gas_limit":"Gas Limit","gas_settings_label_max_priority_fee":"Max Priority Fee","gas_settings_label_max_fee":"Max Fee","gas_settings_info_gas_fee":"Current base fee is {{fee}} Gwei","gas_settings_alert_low_slippage_tolerance":"Transaction with extremely low slippage tolerance might be reverted because of very small market movement.","gas_settings_alert_high_slippage_tolerance":"You may have {{percentage}}% less received with this level of slippage tolerance.","gas_settings_error_custom_slippage_tolerance_invalid":"Invalid slippage tolerance.","gas_settings_error_gas_price_absence":"Enter a gas price","gas_settings_error_gas_price_positive":"Gas price must be greater than 0 Gwei.","gas_settings_error_gas_price_too_low":"Gas price is too low for network conditions.","gas_settings_error_gas_price_too_high":"Gas price is higher than necessary. You may pay more than needed.","gas_settings_error_gas_limit_absence":"Enter a gas limit","gas_settings_error_gas_limit_too_low":"Gas limit too low will cause the transaction to fail.","gas_settings_error_max_fee_absence":"Enter a max fee","gas_settings_error_max_priority_fee_absence":"Enter a max priority fee","gas_settings_error_max_fee_too_low":"Max fee is too low for network conditions.","gas_settings_error_max_fee_too_high":"Max fee is higher than necessary.","gas_settings_error_max_priority_gas_fee_positive":"Max priority fee must be greater than 0 Gwei.","gas_settings_error_max_priority_gas_fee_too_low":"Max priority fee is too low for network conditions.","gas_settings_error_max_priority_gas_fee_too_high":"Max priority fee is higher than necessary. You may pay more than needed.","gas_settings_error_max_priority_gas_fee_imbalance":"Max fee cannot be lower than max priority fee.","gas_usd_price":" ≈ {{-usd}}","plugin_default_title":"Default","plugin_provider_by":"Provided by","plugin_card_frame_default_title":"Web3 Profile","plugin_card_frame_default_provided_by":"Powered by","plugin_card_frame_default_provided_by_value":"Mask Network","plugin_card_frame_loading":"Loading....","plugin_wallet_connect_a_wallet":"Connect Wallet","plugin_wallet_confirm_risk_warning":"Confirm Risk Warning","plugin_wallet_update_gas_fee":"Updating Gas Fee…","plugin_wallet_no_gas_fee":"No Gas Fee","plugin_wallet_invalid_network":"Invalid Network","plugin_wallet_wrong_network":"Wrong Network","plugin_wallet_unsupported_network":"Unsupported Network","plugin_wallet_switch_network_title":"Switch Network","plugin_wallet_unsupported_chain":"{{network}} network is not added in the wallet. Please add and try it again.","plugin_wallet_switch_chain_failed":"Network error or user cancels the process.","plugin_wallet_switch_network":"Switch to {{network}}","plugin_wallet_not_support_network":"This network is not supported yet.","plugin_wallet_switch_network_under_going":"Switching to {{network}}","plugin_wallet_connect_tips":"Please switch to this network in the mobile\\napplication wallet you are connected to.","plugin_wallet_connect_network":"Change to {{network}}","plugin_wallet_not_available_on":"Not available on {{network}} Network.","plugin_wallet_token_infinite_unlock_tips":"You must give the {{provider}} smart contract permission to use your {{symbol}}. You only have to do this once per token.","plugin_wallet_token_infinite_unlock":"Unlock {{symbol}}","plugin_wallet_select_a_nft_contract":"Select an NFT Contract","plugin_wallet_select_a_nft_owner":"Select an NFT Contract Owner","plugin_wallet_select_a_nft_operator":"Select an NFT Contract Operator","plugin_wallet_approve_all_nft":"Unlock {{symbol}}","plugin_wallet_nft_approving_all":"Unlocking {{symbol}}...","plugin_wallet_approve_all_nft_successfully":"Unlock {{symbol}} successfully","plugin_wallet_fail_to_load_nft_contract":"Click to retry","plugin_wallet_change_wallet":"Change Wallet","wallet_connect_qr_code_dialog_title":"WalletConnect","wallet_connect_qr_code_dialog_content":"Scan QR code with a WalletConnect-compatible wallet","save":"Save","cancel":"Cancel","add_wallet":"Add Wallet","wallet_transfer_error_amount_absence":"Enter an amount","wallet_load_retry":"Failed to load {{symbol}}. Click to retry.","wallet_setting_hint":"Toggle the button to manage wallet display settings.","wallet_status_button_change_to_evm":"Change to EVM wallet","wallet_status_button_change":"Change","add_wallet_tips":"Please add wallets to receive tips","add_wallet_web3_profile":"No connected wallet, please add wallet.","save_successfully":"Save successfully","save_failed":"Save failed","wallet_set_up_successfully":"Web3 Profile Wallet set up successfully.","wallet_set_up_failed":"Web3 Profile Wallet setup failed, please try again.","setting_alert_title":"Toggle the button to manage wallet display settings.","recent_transaction_pending":"Pending","account_icon_tooltips":"Data source is retrieved from {{source}}.","account_icon_tooltips_only":"","account_icon_tooltips$twitter":"Data source is retrieved from Twitter profile and {{source}}.","account_icon_tooltips_only$twitter":"Data source is retrieved from Twitter profile.","account_icon_tooltips$facebook":"Data source is retrieved from Facebook profile and {{source}}.","account_icon_tooltips_only$facebook":"Data source is retrieved from Facebook profile","account_icon_tooltips$next_id":"Data source is retrieved from NEXT.ID.","account_icon_tooltips_only$next_id":"Data source is retrieved from NEXT.ID.","account_icon_merged_tooltip$normal":"Data source is retrieved from ","account_icon_merged_tooltip$twitter":"Data source is retrieved from Twitter profile and ","account_icon_merged_tooltip$facebook":"Data source is retrieved from Facebook profile and ","account_icon_merged_tooltip$next_id":"Data source is retrieved from NEXT.ID and ","wallet_status_button_copy_address":"Copy Address","copy_success_of_wallet_addr":"Copy wallet address successfully!","persona_boundary_create_persona":"Create Persona","persona_boundary_connect_persona":"Connect Persona","persona_boundary_verify_persona":"Verify your Twitter ID","applications_create_persona_title":"Persona","applications_create_persona_hint":"Please create a Persona and verify your account to use this function.","applications_create_persona_action":"Create persona","lens_follow":"Follow","lens_following":"Following","view":"View","verified_by":"Verified by {{ marketplace }}","no_NFTs_found":"No NFTs found.","add_collectibles":"Add NFTs","collectible_contract_require":"The collectible address is required","collectible_contract_invalid":"Incorrect contract address.","collectible_token_id_require":"The collectible token id is required","collectible_token_id_invalid":"Incorrect collectible token id","collection_not_belong_to_you":"The contract address is incorrect or the collection does not belong to you.","collectible_search_placeholder":"Name or Contract address eg.PUNK or 0x234...","add_collectibles_address_placeholder":"Input contract address","add_collectibles_token_id_placeholder":"Token ID separated by conma, e.g. 1223,1224,","plugin_wallet_solana_tips":"Phantom only supports the Solana chain.","plugin_wallet_blocto_tips":"Blocto only supports the Flow chain.","plugin_wallet_fortmatic_tips":"Fortmatic only supports the ETH and BNB chain.","plugin_wallet_support_chains_tips":"Only supports EVM chains, ETH, BNB chain, Polygon, Arb, Op, etc.","plugin_wallet_connect_fortmatic":"Connect Fortmatic","plugin_wallet_choose_network":"Choose Network","plugin_wallet_select_provider_dialog_title":"Connect Wallet","plugin_wallet_view_on_explorer":"View on Explorer","plugin_wallet_disconnect":"Disconnect","plugin_wallet_dialog_title":"Wallet Account","recent_transaction_success":"Success","recent_transaction_failed":"Failed","wallet_status_pending_clear":"Clear","wallet_status_pending_one":"{{count}} Pending","wallet_status_pending_other":"{{count}} Pendings","wallet_status_pending_clear_all":"Clear All","wallet_risk_warning_no_select_wallet":"Not select wallet yet.","wallet_risk_warning_dialog_title":"Risk Warning","wallet_risk_warning_content":"Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.","wallet_risk_warning_confirm_tips":"Clicking the confirm button means that you agree to bear the above possible risks.","confirm":"Confirm","done":"Done","wallet_risk_confirm_confirming":"Confirming","wallet_risk_confirm_failed":"Confirm Failed","plugin_wallet_snackbar_wait_for_confirming":"Confirm this transaction in your wallet","plugin_wallet_snackbar_confirmed":"Transaction Confirmed","plugin_wallet_snackbar_failed":"Transaction Failed","popups_wallet_gas_fee_settings_low":"Low","popups_wallet_gas_fee_settings_medium":"Medium","popups_wallet_gas_fee_settings_high":"High","wallet_transfer_error_gas_limit_absence":"Enter a gas limit","popups_wallet_gas_fee_settings_usd":" ≈ <span>{{usd}}</span>","wallet_transfer_gwei":"GWEI","popups_wallet_gas_fee_settings_max_fee":"Max fee","popups_wallet_gas_fee_settings_max_priority_fee":"Max priority fee","popups_wallet_gas_fee_settings_gas_limit":"Gas Limit","wallet_transfer_error_max_fee_too_low":"Max fee is too low for network conditions.","wallet_transfer_error_max_fee_too_high":"Max fee is higher than necessary","wallet_transfer_error_max_priority_gas_fee_positive":"Max priority fee must be greater than 0 GWEI","wallet_transfer_error_max_priority_gas_fee_too_low":"Max priority fee is too low for network conditions","wallet_transfer_error_max_priority_gas_fee_too_high":"Max priority fee is higher than necessary. You may pay more than needed.","wallet_transfer_error_max_priority_gas_fee_imbalance":"Max fee cannot be lower than max priority fee","wallet_transfer_error_max_priority_fee_absence":"Enter a max priority fee","wallet_transfer_error_max_fee_absence":"Enter a max fee","popups_wallet_gas_price":"Gas Price","wallet_transfer_error_gas_price_absence":"Enter a gas price","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas limit must be at least {{limit}}","popups_wallet_gas_fee_settings":"Gas fee settings","plugin_wallet_connect_to":"Connect to","plugin_wallet_connect_to_retry":"Try Again","plugin_wallet_connected_to":"Connected to","initializing":"Initializing...","plugin_wallet_metamask_error_already_request":"You\'ve opened the popup, please confirm.","applications":"Applications","application_settings":"APP Settings","application_tooltip_hint_sns_persona_unmatched":"Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.","application_tooltip_hint_verify":"Please verify your social account","application_tooltip_hint_create_persona":"Please create your persona and use it","application_tooltip_hint_persona_accessing_dapp":"Please create a persona for accessing Dapps.","application_tooltip_hint_connect_persona":"Please connect your persona","application_tooltip_hint_connect_wallet":"Please connect your wallet","application_settings_tab_app_list":"APP list","application_settings_tab_plug_in_switch":"Plug-in switch","application_settings_tab_plug_app_list_listed":"Listed","application_settings_tab_plug_app_list_unlisted":"Unlisted","application_settings_tab_plug_app_listed_placeholder":"Click the application icon to hide in the APP list.","application_display_tab_plug_app_unlisted_placeholder":"Click the setting icon to list it on the App board.","application_settings_tab_plug_app_unlisted_placeholder":"Click the application icon to list it on the App board.","decentralized_search_description":"Optimize search results with token names, NFT collections, ENS domains or wallet addresses.","decentralized_search_feature_token_name":"Token","decentralized_search_feature_token_description":"Get optimized search results when you look for a token.","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"Search with the name of an NFT collection or its symbol to get optimized results.","decentralized_search_feature_wallet_name":"ENS or Wallet Address","decentralized_search_feature_wallet_description":"Search with an ENS domain or wallet address to get optimized results.","claim_nft_successful":"Claimed 1 {{name}} successfully.","claim_token_successful":"You claimed {{- amount}} {{name}}.","lucky_drop":"Lucky Drop","share":"Share","ok":"OK","plugin_wallet_on_connect":"Connect Wallet","upload_error$single":"The input is not a single file.","upload_error$oversized":"The file is too large; limit is {{limit}}.","upload_file_title$failed":"Failed to upload file","upload_file_message$failed":"Exceeded the maximum file size of 10MB.","upload_drag_n_drop":"Drag & Drop your file here","upload_size_limit":"Size limit: 10 MB","upload_or":"or","upload_browse_files":"Browse File","reload":"Reload","persona_load_failed":"Load failed","applications_persona_title":"Persona","applications_persona_copy":"Copy Success","applications_persona_connect":"Connect {{-nickname}}","applications_persona_connect_hint":"Please connect {{-nickname}} before using dApps.","applications_persona_verify":"Verify {{-nickname}}","applications_persona_verify_hint":"Please verify current persona with social media account before using dApps.","applications_persona_verify_connect":"Connect and Verify {{-nickname}}","enable_plugin_boundary":"Enable plugin","enable_plugin_boundary_description":"This function has been turned off in the App settings. Enable plug-ins to fully access.","applications_persona_verify_connect_hint":"Please connect {{-nickname}} and send proof post before using dApps.","usdc_price_statistic":"Price Statistic","market_cap":"Market Cap","trader_circulating_supply":"Circulating Supply","volume_24":"24 Hour Trading Vol","total_supply":"Total Supply","circulating_supply":"Circulating Supply","info":"Info","contract":"Contract","community":"Community","website":"Website","show_wallet_setting_intro":"Please select the wallet to activate the function after saving the settings.","show_wallet_setting_button":"Go to Settings","web3_profile_no_social_address_list":"Can’t find a valid user address data source.","badge_renderer_provided_by_plugin":"Provided by plugin","post_dialog__button":"Encrypt","post_dialog__placeholder":"Tell selective friends what\'s happening...","post_dialog__title":"Encrypted Post","post_dialog_visible_to":"Visible To","post_dialog_encryption_method":"Encryption Method","post_dialog_enable_paste_auto":"Enable auto paste","post_dialog_share_with_input_placeholder":"eg: Twitter accounts, Persona public keys, wallet addresses or ENS","plugins":"Plugins","compose_encrypt_method_text":"Text","compose_encrypt_method_text_sub_title":"Use text encryption","compose_encrypt_method_image":"Image","compose_encrypt_method_image_sub_title":"Encrypt messages in images","compose_no_local_key":"No local key","compose_encrypt_visible_to_all":"All","compose_encrypt_visible_to_all_sub":"Everyone","compose_encrypt_visible_to_private":"Private","compose_encrypt_visible_to_private_sub":"Just Me","compose_shared_friends_one":"1 friend","compose_shared_friends_other":"{{count}} friends","compose_encrypt_visible_to_share":"Share with","compose_encrypt_visible_to_share_sub":"Just Selected Contacts","compose_encrypt_share_dialog_empty":"No Persona-based encryption friends locally, please try searching.","persona_required":"Persona required.","create":"Create","connect":"Connect","reset":"Reset","editor":"Editor","typed_message_text_alert":"Only TypedMessageText is supported currently.","share_to_social_networks":"Share to Social Networks","report_nft":"Report NFT Scam Contract?","confirm_to_report_nft":"Are you sure to report {{name}}? After approving, this NFT will be marked as spam.","spam":"Spam","report_spam":"Report Spam","report_spam_success":"Successfully reported.","report_spam_fail":"Failed to report spam."}');
;// CONCATENATED MODULE: ./packages/shared/src/locales/ja-JP.json
const ja_JP_namespaceObject = JSON.parse('{"send":"送信","search_area":"捜索エリア","approve":"承認します","operation":"操作","approve_mask":"MASKを承認しますか？","approve_mask_description":"Polygonのネットワークを利用するには、MATICトークンがガス料金として支払う必要があります。SmartPayを使用すると、MASKトークンを使ってPolygonネットワーク上でガス料金を支払うことができます。","approve_mask_question":"MASKトークンをガス料金を支払いに設定しますか？","authorization_descriptions":"Mask Networkは、利用する前に次のウェブサイトを承認する必要があります。","create_persona_hint":"本機能を利用するには、ペルソナを作成し、アカウントを認証してください。","create_persona_title":"ペルソナ","create_persona_action":"ペルソナを作成","congratulations":"おめでとうございます！","coming_soon":"近日公開","domain_request":"ドメインリクエスト","available_balance":"利用可能な残高","snackbar_done":"完了","added_by_user":"ユーザーによって追加","all":"全て","retry":"再試行","gwei":"Gwei（グワイ）","import":"インポート","select_an_nft":"NFT を選択します","wallet_balance":"残高","wallet_balance_eth":"残高({{symbol}})","balance":"残高","decentralized_search_name":"DSearch","web3_profile_card_name":"Web3 プロフィールカード","profile_card_name":"Web3 プロフィール","unlock":"ロック解除","select_token":"選択","select_a_token":"トークンを選択します","select_collectibles":"コレクティブを選択","no_collectible_found":"コレクションが見つかりません.","manage_token_list":"トークンリストを管理","mobile_number":"携帯番号","token_list_loading":"読み込み中","erc20_token_list_placeholder":"名前またはコントラクトアドレス (USDC または 0x234...","erc20_search_wrong_address":"有効なトークンアドレスを入力してください","erc20_manage_token_list":"トークンリストを管理","address_viewer_address_name_address":"アドレス","dialog_dismiss":"解除","dialog_confirm":"確認","dialog_share":"シェア","dialog_confirm_label":"確認","share_dialog_transaction":"トランザクション","share_dialog_view_on_explorer":"エクスプローラーで表示","share_dialog_transaction_confirmed":"トランザクションが確認されました！","load_failed":"読み込みに失敗しました","load_retry":"再読み込み","loading":"読み込み中","no_results":"該当なし","powered_by":"以下により提供されています","copy":"コピー","copied":"コピーしました","go_plus":"GO+","rss3":"RSS3","mask_network":"Mask Network","search":"検索","check_security":"セキュリティを確認","search_input_placeholder":"トークンコントラクトのアドレスを入力してください。","token_info":"トークン情報","more_details":"詳細情報","more":"その他","details":"詳細","unnamed":"名前なし","contributions":"貢献","description":"説明","day_one":"日","day_other":"日","hour_one":"時間","hour_other":"時間","ago":"前","properties":"プロパティ","security_detection":"セキュリティ検出","risky_items":"{{quantity}} リスクアイテム","attention_items":"{{quantity}} 注目アイテム","risky_item":"{{quantity}} リスクアイテム","attention_item":"{{quantity}} 注目アイテム","change":"変更","edit":"編集","connect_your_wallet":"ウォレットを接続します","connected_wallet_settings":"接続されたウォレットの設定","wallet_settings":"ウォレット設定","pending":"保留中...","gas_settings_title":"詳細設定","gas_settings_gas_option_type_slow":"中","gas_settings_gas_option_type_normal":"高","gas_settings_gas_option_type_fast":"インスタント","gas_settings_gas_option_estimate_distance":"~ {{distance}}","gas_settings_gas_option_amount_in_gwei":"最大 {{- amount}} Gweiまで","gas_settings_section_title_slippage_tolerance":"スリッページの許容範囲","gas_settings_custom":"カスタム","gas_settings_tab_basic":"基本","gas_settings_tab_advanced":"詳細","gas_settings_label_gas_fee":"ガス料金","gas_settings_label_transaction_cost":"取引費用","gas_settings_label_gas_price":"ガス価格","gas_settings_label_gas_limit":"ガス制限","gas_settings_label_max_priority_fee":"最大優先料金","gas_settings_label_max_fee":"最大料金","gas_settings_info_gas_fee":"現在の基本手数料は {{fee}} Gweiです","gas_settings_alert_low_slippage_tolerance":"スリッページの許容範囲が極端に小さい取引は、ごくわずかな相場の動きで元に戻ってしまうことがあります。","gas_settings_alert_high_slippage_tolerance":"このスリッページ許容範囲で受領率が {{percentage}}% 低くなる可能性があります。","gas_settings_error_custom_slippage_tolerance_invalid":"無効なスリッページの許容範囲です。","gas_settings_error_gas_price_absence":"ガス価格を入力","gas_settings_error_gas_price_positive":"ガス価格は0Gwei以上でなければなりません。","gas_settings_error_gas_price_too_low":"ガス価格がネットワーク状況に対して低すぎます。","gas_settings_error_gas_price_too_high":"ガスの価格は必要以上に高いです。必要以上に支払うになります。","gas_settings_error_gas_limit_absence":"ガスの制限を入力してください","gas_settings_error_gas_limit_too_low":"ガス制限が低すぎると、トランザクションが失敗する原因になります","gas_settings_error_max_fee_absence":"最大手数料を入力してください","gas_settings_error_max_priority_fee_absence":"最大優先料金を入力してください","gas_settings_error_max_fee_too_low":"最大手数料がネットワーク状況に対して低すぎます。","gas_settings_error_max_fee_too_high":"最大手数料は必要以上に高いです。","gas_settings_error_max_priority_gas_fee_positive":"最大優先料金は0Gweiより大きくなければなりません。","gas_settings_error_max_priority_gas_fee_too_low":"最大優先料金がネットワーク状況に対して低すぎます。","gas_settings_error_max_priority_gas_fee_too_high":"最大優先料金は必要以上に高いです。必要以上に支払うになります。","gas_settings_error_max_priority_gas_fee_imbalance":"最大手数料は、最大優先手数料よりも低くすることはできません。","gas_usd_price":" ≈ {{-usd}}","plugin_default_title":"デフォルト","plugin_provider_by":"提供元","plugin_card_frame_default_title":"Web3 プロフィール","plugin_card_frame_default_provided_by":"以下により提供されています","plugin_card_frame_default_provided_by_value":"Mask Network","plugin_card_frame_loading":"読み込み中...","plugin_wallet_connect_a_wallet":"ウォレットを接続","plugin_wallet_confirm_risk_warning":"リスク警告の確認","plugin_wallet_update_gas_fee":"ガス代を更新中…","plugin_wallet_no_gas_fee":"ガス代なし","plugin_wallet_invalid_network":"無効のネットワーク","plugin_wallet_wrong_network":"ネットワークが間違っています","plugin_wallet_unsupported_network":"対応していないネットワーク","plugin_wallet_switch_network_title":"ネットワークを切り替え","plugin_wallet_unsupported_chain":"このネットワークは現在のウォレットでは対応されていません。","plugin_wallet_switch_chain_failed":"ネットワークエラーまたはユーザーがプロセスをキャンセルします。","plugin_wallet_switch_network":"{{network}} に切り替え","plugin_wallet_not_support_network":"{network} はまだサポートされていません.","plugin_wallet_switch_network_under_going":"{{network}} に切り替え","plugin_wallet_connect_tips":"接続しているモバイル\\nアプリケーション・ウォレットでこのネットワークに切り替えてください。","plugin_wallet_connect_network":"{{network}} に切り替え","plugin_wallet_not_available_on":"{{network}} ネットワークでは利用できません。","plugin_wallet_token_infinite_unlock_tips":"{{provider}} スマートコントラクトに自分の{{symbol}}を使用する許可を与える必要があります。これは1つのトークンにつき1回だけ行う必要があります。","plugin_wallet_token_infinite_unlock":"{{symbol}} のロックを解除","plugin_wallet_select_a_nft_contract":"NFT コントラクトを選択","plugin_wallet_select_a_nft_owner":"NFT コントラクト所有者を選択","plugin_wallet_select_a_nft_operator":"NFT コントラクトのオペレーターを選択","plugin_wallet_approve_all_nft":"{{symbol}} のロックを解除","plugin_wallet_nft_approving_all":"{{symbol}} のロックを解除中...","plugin_wallet_approve_all_nft_successfully":"{{symbol}} のロックを解除しました","plugin_wallet_fail_to_load_nft_contract":"クリックして再試行","plugin_wallet_change_wallet":"ウォレットを変更","wallet_connect_qr_code_dialog_title":"ウォレット接続","wallet_connect_qr_code_dialog_content":"WalletConnect対応ウォレットでQRコードスキャン","save":"保存","cancel":"キャンセル","add_wallet":"ウォレットを追加","wallet_transfer_error_amount_absence":"金額を入力します","wallet_load_retry":"{{symbol}}の読み込みに失敗しました。クリックして再試行してください。","wallet_setting_hint":"ボタンを切り替えてウォレットの表示設定を管理します。","wallet_status_button_change_to_evm":"EVMウォレットへ変更","wallet_status_button_change":"変更","add_wallet_tips":"チップを受け取るためにウォレットを追加してください","add_wallet_web3_profile":"接続されているウォレットがありません。ウォレットを追加してください","save_successfully":"正常に保存されました","save_failed":"保存できませんでした","wallet_set_up_successfully":"Web3プロファイルウォレットは正常にセットアップしました。","wallet_set_up_failed":"Web3 プロフィールウォレットのセットアップに失敗しました。もう一度やり直してください。","setting_alert_title":"ボタンを切り替えてウォレットの表示設定を管理します。","recent_transaction_pending":"保留中","account_icon_tooltips":"データソースは {{source}} から取得されます。","account_icon_tooltips$twitter":"データソースは Twitter プロファイルと {{source}} から取得されます。","account_icon_tooltips_only$twitter":"データソースはTwitterプロファイルから取得されます。","account_icon_tooltips$facebook":"データソースは、Facebookのプロファイルと {{source}}から取得されます。","account_icon_tooltips_only$facebook":"データソースは Facebook のプロファイルから取得されます","account_icon_tooltips$next_id":"データソースは NEXT.ID から取得されます。","account_icon_tooltips_only$next_id":"データソースは NEXT.ID から取得されます。","wallet_status_button_copy_address":"アドレスをコピー","copy_success_of_wallet_addr":"ウォレットアドレスをコピーしました！","persona_boundary_create_persona":"ペルソナを作成","persona_boundary_connect_persona":"ペルソナを接続","persona_boundary_verify_persona":"Twitter IDの認証","applications_create_persona_title":"ペルソナ","applications_create_persona_hint":"本機能を利用するには、ペルソナを作成し、アカウントを認証してください。","applications_create_persona_action":"ペルソナを作成","lens_follow":"フォロー","lens_following":"フォロー中","view":"表示","verified_by":"{{ marketplace }} によって検証されました","no_NFTs_found":"NFTが見つかりません。","add_collectibles":"コレクティブルを追加","collectible_contract_require":"受取可能なアドレスが必要です","collectible_contract_invalid":"不正なコントラクトアドレス","collectible_token_id_require":"受取可能なトークンIDが必要です","collectible_token_id_invalid":"不正な受取トークンID","collection_not_belong_to_you":"コントラクトアドレスが正しくないか、コレクションはあなたに属していません。","collectible_search_placeholder":"名前またはコントラクトアドレス。例：PUNK or 0x234...","add_collectibles_address_placeholder":"コントラクトアドレスを入力","add_collectibles_token_id_placeholder":"トークンIDはカンマで区切られています。例: 1223,1224","plugin_wallet_solana_tips":"Phantom は Solana チェーンのみを対応します。","plugin_wallet_blocto_tips":"Blocto は Flow チェーンのみを対応します。","plugin_wallet_fortmatic_tips":"FortmaticはETHとBNBチェーンのみを対応しています。","plugin_wallet_support_chains_tips":"EVMチェーン、ETH、BNBチェーン、Polygon、Arb、Opなどに対応しています。","plugin_wallet_connect_fortmatic":"Fortmaticに接続","plugin_wallet_choose_network":"ネットワークを選択","plugin_wallet_select_provider_dialog_title":"ウォレットを接続","plugin_wallet_view_on_explorer":"エクスプローラーで表示","plugin_wallet_disconnect":"接続解除","plugin_wallet_dialog_title":"ウォレットアカウント","recent_transaction_success":"完了","recent_transaction_failed":"失敗しました","wallet_status_pending_clear":"クリア","wallet_status_pending_one":"{{count}} 保留中","wallet_status_pending_other":"{{count}} 保留中","wallet_status_pending_clear_all":"すべて消去","wallet_risk_warning_no_select_wallet":"ウォレットを選択していません","wallet_risk_warning_dialog_title":"リスク警告","wallet_risk_warning_content":"ユーザーの皆様へ<br/><br/>Mask Networkのウォレット関連プラグインをご利用の際は、以下の利用リスクをご確認ください。<br/><br/>Mask Networkは、非商用の無料サービスを提供しています。プラグインは、コミュニティメンバーやその他の優れたDAppチームによって提供されています。分散型ネットワークの自由度やその他の不安定なリスク要因のため、ユーザーはウォレットのニーモニックワードや秘密鍵などの機密情報を適切に保護することが求められます。ブロックチェーン契約のやり取りを行う際には、十分に注意してください。サードパーティ製のDApps（プラグイン）によるリスクは、サードパーティ製のDApps自身が負うことになります。確認ボタンをクリックすることは、上記の起こりうるリスクを負担することに同意することになります。","wallet_risk_warning_confirm_tips":"確認ボタンをクリックすると、上記のリスクを負うことに同意することになります。","confirm":"確認","done":"完了","wallet_risk_confirm_confirming":"確認中","wallet_risk_confirm_failed":"確認に失敗しました","plugin_wallet_snackbar_wait_for_confirming":"ウォレットで取引を確認する","plugin_wallet_snackbar_confirmed":"取引が確認されました","plugin_wallet_snackbar_failed":"取引が失敗しました","popups_wallet_gas_fee_settings_low":"低い","popups_wallet_gas_fee_settings_medium":"中","popups_wallet_gas_fee_settings_high":"高","wallet_transfer_error_gas_limit_absence":"ガスの上限を入力してください","popups_wallet_gas_fee_settings_usd":" ≈ <span>{{usd}}</span>","wallet_transfer_gwei":"GWEI","popups_wallet_gas_fee_settings_max_fee":"最大料金","popups_wallet_gas_fee_settings_max_priority_fee":"最大優先手数料","popups_wallet_gas_fee_settings_gas_limit":"ガス制限","wallet_transfer_error_max_fee_too_low":"最大手数料がネットワーク状況に対して低すぎます。","wallet_transfer_error_max_fee_too_high":"最大手数料が必要以上です","wallet_transfer_error_max_priority_gas_fee_positive":"最大優先手数料は0GWEIより大きくなければなりません","wallet_transfer_error_max_priority_gas_fee_too_low":"最大優先料金がネットワーク状況に対して低すぎます。","wallet_transfer_error_max_priority_gas_fee_too_high":"最大優先料金は必要以上に高いです。必要以上に支払うになります。","wallet_transfer_error_max_priority_gas_fee_imbalance":"最大手数料は最大優先手数料より低くすることはできません","wallet_transfer_error_max_priority_fee_absence":"最大優先料金を入力してください","wallet_transfer_error_max_fee_absence":"最大手数料を入力してください","popups_wallet_gas_price":"ガス価格","wallet_transfer_error_gas_price_absence":"ガス価格を入力","popups_wallet_gas_fee_settings_min_gas_limit_tips":"ガス限界は少なくとも {{limit}}でなければなりません","popups_wallet_gas_fee_settings":"ガス料金の設定","initializing":"初期化中...","plugin_wallet_metamask_error_already_request":"ポップアップを開いています。確認してください。","applications":"アプリケーション","application_settings":"アプリ設定","application_tooltip_hint_sns_persona_unmatched":"Twitter ID 認証済みのペルソナ({{currentSNSConnectedPersonaPublicKey}}) は、現在のペルソナ({{currentPersonaPublicKey}})と一致しません。ペルソナ({{currentSNSConnectedPersonaPublicKey}})に切り替えて、再度お試し下さい。","application_tooltip_hint_verify":"ソーシャルアカウントを確認してください","application_tooltip_hint_create_persona":"ペルソナを作成して使用してください","application_tooltip_hint_persona_accessing_dapp":"Dappsにアクセスするペルソナを作成してください。","application_tooltip_hint_connect_persona":"あなたのペルソナに接続してください","application_tooltip_hint_connect_wallet":"ウォレットに接続してください","application_settings_tab_app_list":"アプリ一覧","application_settings_tab_plug_in_switch":"プラグイン・スイッチ","application_settings_tab_plug_app_list_listed":"リストされました","application_settings_tab_plug_app_list_unlisted":"未掲載","application_settings_tab_plug_app_listed_placeholder":"アプリアイコンをクリックして、アプリ一覧で非表示にします。","application_display_tab_plug_app_unlisted_placeholder":"設定アイコンをクリックしてアプリボードに表示します。","application_settings_tab_plug_app_unlisted_placeholder":"アプリのアイコンをクリックして、アプリボードに表示します。","decentralized_search_description":"トークン名、NFTコレクション、ENSドメイン、またはウォレットアドレスで検索結果を最適化します。","decentralized_search_feature_token_name":"トークン","decentralized_search_feature_token_description":"トークンを探すときに最適化された検索結果を取得します。","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"NFT コレクションまたはそのシンボルの名前で検索し、最適化された結果を得ます。","decentralized_search_feature_wallet_name":"ENSまたはウォレットアドレス","decentralized_search_feature_wallet_description":"ENSドメインまたはウォレットアドレスで検索すると、最適化された結果が得られます。","claim_nft_successful":"1 {{name}} を正常に請求しました。","claim_token_successful":"あなたは {{- amount}} {{name}} を獲得しました","lucky_drop":"ラッキードロップ","share":"シェア","ok":"OK","plugin_wallet_on_connect":"ウォレットを接続","upload_error$single":"入力は単一ファイルではありません。","upload_error$oversized":"ファイルが大きすぎます。上限は {{limit}} です。","upload_file_title$failed":"ファイルのアップロードに失敗しました","upload_file_message$failed":"最大ファイルサイズの10MBを超えました。","upload_drag_n_drop":"ここにファイルをドラッグ&ドロップしてください","upload_size_limit":"サイズ制限：10 MB","upload_or":"または","upload_browse_files":"ファイルを開く","reload":"再度読み込み","persona_load_failed":"読み込み失敗","applications_persona_title":"ペルソナ","applications_persona_copy":"コピー完了","applications_persona_connect":"{{-nickname}} に接続","applications_persona_connect_hint":"dAppsを使用する前に、 {{-nickname}} に接続してください。","applications_persona_verify":"{{-nickname}} の認証","applications_persona_verify_hint":"dAppsを使用する前に、ソーシャルメディアアカウントで現在のペルソナを確認してください。","applications_persona_verify_connect":"{{-nickname}} に接続して認証します","enable_plugin_boundary":"プラグインを有効化する","enable_plugin_boundary_description":"この機能はアプリ設定でオフになっています。プラグインに完全にアクセスできるようにしてください。","applications_persona_verify_connect_hint":"dAppsを利用する前に{{-nickname}}を接続し、プルーフポストを送信してください。","usdc_price_statistic":"価格統計","market_cap":"時価総額","trader_circulating_supply":"流通供給量","volume_24":"24時間取引Vol","total_supply":"総供給量","circulating_supply":"流通供給量","info":"情報","contract":"コントラクト","community":"コミュニティー","website":"ウェブサイト","show_wallet_setting_intro":"設定を保存した後、ウォレットを選択して機能を有効にしてください。","show_wallet_setting_button":"設定に進む","web3_profile_no_social_address_list":"有効なユーザーアドレスのデータソースが見つかりません。","badge_renderer_provided_by_plugin":"プラグインにより提供","post_dialog__button":"暗号化","post_dialog__placeholder":"選択的な友達に何が起きているのか伝えてください...","post_dialog__title":"暗号化された投稿","post_dialog_visible_to":"表示対象:","post_dialog_encryption_method":"暗号化方法","post_dialog_enable_paste_auto":"自動ペーストを有効にする","post_dialog_share_with_input_placeholder":"例：Twitterアカウント、ペルソナ公開鍵、ウォレットアドレス、またはENS","plugins":"プラグイン","compose_encrypt_method_text":"テキスト","compose_encrypt_method_text_sub_title":"テキスト暗号化を使用する","compose_encrypt_method_image":"画像","compose_encrypt_method_image_sub_title":"画像内のメッセージを暗号化","compose_no_local_key":"ローカルキーがありません","compose_encrypt_visible_to_all":"全て","compose_encrypt_visible_to_all_sub":"全員","compose_encrypt_visible_to_private":"プライベート","compose_encrypt_visible_to_private_sub":"自分のみ","compose_shared_friends_one":"1人の友達","compose_shared_friends_other":"{{count}} の友達","compose_encrypt_visible_to_share":"と共有","compose_encrypt_visible_to_share_sub":"選択した連絡先のみ","compose_encrypt_share_dialog_empty":"パーソナルベースの暗号化の友達はローカルにいません。検索してみてください。","persona_required":"ペルソナが必要です。","create":"作成","connect":"接続する","reset":"リセット","editor":"編集者","typed_message_text_alert":"現在、TypedMessageTextのみ対応しています。","share_to_social_networks":"ソーシャル ネットワークに共有"}');
;// CONCATENATED MODULE: ./packages/shared/src/locales/ko-KR.json
const ko_KR_namespaceObject = JSON.parse('{"send":"발송","search_area":"지역 찾기","approve":"승인","operation":"진행","approve_mask":"MASK 승인","approve_mask_description":"Polygon 네트워크와 상호작용하기 위해서는 MATIC 토큰을 사용하여 가스비로 결제해야 하며, SmartPay를 통해 Polygon 네트워크에서 MASK 토큰으로 가스 요금을 결제할 수 있습니다.","approve_mask_question":"MASK 토큰을 가스비로 설정하시겠습니까?","authorization_descriptions":"Mask Network를 사용하기 전에 다음 웹 사이트를 승인해야 합니다.","create_persona_hint":"이 기능을 사용하려면 페르소나를 만들고 계정을 확인하세요.","create_persona_title":"페르소나","create_persona_action":"페르소나 만들기","congratulations":"축하합니다!","coming_soon":"Coming soon","domain_request":"도메인 요청","available_balance":"사용 가능한 잔액","snackbar_done":"완료","added_by_user":"사용자별 추가","all":"전체","retry":"다시 시도","gwei":"Gwei","import":"불러오기","select_an_nft":"NFT 선택","wallet_balance":"잔액","wallet_balance_eth":"잔액 ({{symbol}})","balance":"잔액","decentralized_search_name":"DSearch","web3_profile_card_name":"웹3 프로필 카드","profile_card_name":"웹3 프로필","unlock":"언락","select_token":"토큰 선택","select_a_token":"토큰 선택","select_collectibles":"컬렉션 선택하기","no_collectible_found":"수집품이 없습니다.","manage_token_list":"토큰 목록 관리","mobile_number":"휴대폰 번호","token_list_loading":"로딩 중","erc20_token_list_placeholder":"토큰 이름이나 컨트렉트 주소","erc20_search_wrong_address":"잘못된 컨트렉트 주소","erc20_manage_token_list":"토큰 목록 관리","address_viewer_address_name_address":"주소","dialog_dismiss":"확인","dialog_confirm":"확인","dialog_share":"공유","dialog_confirm_label":"확인","share_dialog_transaction":"거래","share_dialog_view_on_explorer":"Explorer에서 보기","share_dialog_transaction_confirmed":"해당 거래는 이미 확인되었습니다.","load_failed":"로딩 실패","load_retry":"다시 로드","loading":"로딩 중","no_results":"결과 없음","powered_by":"Powered by","copy":"복사","copied":"복사됨","go_plus":"GO+"}');
;// CONCATENATED MODULE: ./packages/shared/src/locales/qya-AA.json
const qya_AA_namespaceObject = JSON.parse('{"send":"crwdns20015:0crwdne20015:0","search_area":"crwdns22445:0crwdne22445:0","approve":"crwdns18766:0crwdne18766:0","operation":"crwdns21541:0crwdne21541:0","approve_mask":"crwdns19467:0crwdne19467:0","approve_mask_description":"crwdns19469:0crwdne19469:0","approve_mask_question":"crwdns19471:0crwdne19471:0","authorization_descriptions":"crwdns18768:0crwdne18768:0","create_persona_hint":"crwdns19305:0crwdne19305:0","create_persona_title":"crwdns19307:0crwdne19307:0","create_persona_action":"crwdns19309:0crwdne19309:0","congratulations":"crwdns19851:0crwdne19851:0","coming_soon":"crwdns19867:0crwdne19867:0","domain_request":"crwdns18770:0crwdne18770:0","available_balance":"crwdns18772:0crwdne18772:0","snackbar_done":"crwdns1977:0crwdne1977:0","added_by_user":"crwdns22215:0crwdne22215:0","all":"crwdns21787:0crwdne21787:0","retry":"crwdns18864:0crwdne18864:0","gwei":"crwdns20373:0crwdne20373:0","import":"crwdns8001:0crwdne8001:0","select_an_nft":"crwdns18904:0crwdne18904:0","wallet_balance":"crwdns18906:0crwdne18906:0","wallet_balance_eth":"crwdns21543:0{{symbol}}crwdne21543:0","balance":"crwdns8023:0crwdne8023:0","decentralized_search_name":"crwdns19373:0crwdne19373:0","web3_profile_card_name":"crwdns19449:0crwdne19449:0","profile_card_name":"crwdns19379:0crwdne19379:0","unlock":"crwdns19869:0crwdne19869:0","select_token":"crwdns8025:0crwdne8025:0","select_a_token":"crwdns18774:0crwdne18774:0","select_collectibles":"crwdns20221:0crwdne20221:0","no_collectible_found":"crwdns21913:0crwdne21913:0","manage_token_list":"crwdns18556:0crwdne18556:0","mobile_number":"crwdns22447:0crwdne22447:0","token_list_loading":"crwdns18776:0crwdne18776:0","erc20_token_list_placeholder":"crwdns9007:0crwdne9007:0","erc20_search_wrong_address":"crwdns18520:0crwdne18520:0","erc20_manage_token_list":"crwdns18522:0crwdne18522:0","address_viewer_address_name_address":"crwdns10803:0crwdne10803:0","dialog_dismiss":"crwdns14952:0crwdne14952:0","dialog_confirm":"crwdns16694:0crwdne16694:0","dialog_share":"crwdns16696:0crwdne16696:0","dialog_confirm_label":"crwdns16698:0crwdne16698:0","share_dialog_transaction":"crwdns16700:0crwdne16700:0","share_dialog_view_on_explorer":"crwdns16702:0crwdne16702:0","share_dialog_transaction_confirmed":"crwdns16704:0crwdne16704:0","load_failed":"crwdns17242:0crwdne17242:0","load_retry":"crwdns17244:0crwdne17244:0","loading":"crwdns19075:0crwdne19075:0","no_results":"crwdns20223:0crwdne20223:0","powered_by":"crwdns17746:0crwdne17746:0","copy":"crwdns21623:0crwdne21623:0","copied":"crwdns18350:0crwdne18350:0","go_plus":"crwdns17748:0crwdne17748:0","rss3":"crwdns18310:0crwdne18310:0","mask_network":"crwdns18312:0crwdne18312:0","search":"crwdns17756:0crwdne17756:0","check_security":"crwdns17758:0crwdne17758:0","search_input_placeholder":"crwdns17760:0crwdne17760:0","token_info":"crwdns17762:0crwdne17762:0","more_details":"crwdns17764:0crwdne17764:0","more":"crwdns17766:0crwdne17766:0","details":"crwdns18314:0crwdne18314:0","unnamed":"crwdns17768:0crwdne17768:0","contributions":"crwdns18316:0crwdne18316:0","description":"crwdns18318:0crwdne18318:0","day_one":"crwdns18320:0crwdne18320:0","day_other":"crwdns18322:0crwdne18322:0","hour_one":"crwdns18324:0crwdne18324:0","hour_other":"crwdns18326:0crwdne18326:0","ago":"crwdns18328:0crwdne18328:0","properties":"crwdns18330:0crwdne18330:0","security_detection":"crwdns17770:0crwdne17770:0","risky_items":"crwdns17772:0{{quantity}}crwdne17772:0","attention_items":"crwdns17774:0{{quantity}}crwdne17774:0","risky_item":"crwdns17776:0{{quantity}}crwdne17776:0","attention_item":"crwdns17778:0{{quantity}}crwdne17778:0","change":"crwdns17568:0crwdne17568:0","edit":"crwdns20377:0crwdne20377:0","connect_your_wallet":"crwdns17570:0crwdne17570:0","connected_wallet_settings":"crwdns18842:0crwdne18842:0","wallet_settings":"crwdns17572:0crwdne17572:0","pending":"crwdns17574:0crwdne17574:0","gas_settings_title":"crwdns17576:0crwdne17576:0","gas_settings_gas_option_type_slow":"crwdns17582:0crwdne17582:0","gas_settings_gas_option_type_normal":"crwdns17584:0crwdne17584:0","gas_settings_gas_option_type_fast":"crwdns17586:0crwdne17586:0","gas_settings_gas_option_estimate_distance":"crwdns18000:0{{distance}}crwdne18000:0","gas_settings_gas_option_amount_in_gwei":"crwdns17590:0{{- amount}}crwdne17590:0","gas_settings_section_title_slippage_tolerance":"crwdns17594:0crwdne17594:0","gas_settings_custom":"crwdns17596:0crwdne17596:0","gas_settings_tab_basic":"crwdns17598:0crwdne17598:0","gas_settings_tab_advanced":"crwdns17600:0crwdne17600:0","gas_settings_label_gas_fee":"crwdns18784:0crwdne18784:0","gas_settings_label_transaction_cost":"crwdns20379:0crwdne20379:0","gas_settings_label_gas_price":"crwdns17602:0crwdne17602:0","gas_settings_label_gas_limit":"crwdns17604:0crwdne17604:0","gas_settings_label_max_priority_fee":"crwdns17606:0crwdne17606:0","gas_settings_label_max_fee":"crwdns17608:0crwdne17608:0","gas_settings_info_gas_fee":"crwdns17610:0{{fee}}crwdne17610:0","gas_settings_alert_low_slippage_tolerance":"crwdns17620:0crwdne17620:0","gas_settings_alert_high_slippage_tolerance":"crwdns17622:0{{percentage}}crwdne17622:0","gas_settings_error_custom_slippage_tolerance_invalid":"crwdns17624:0crwdne17624:0","gas_settings_error_gas_price_absence":"crwdns17642:0crwdne17642:0","gas_settings_error_gas_price_positive":"crwdns18002:0crwdne18002:0","gas_settings_error_gas_price_too_low":"crwdns18004:0crwdne18004:0","gas_settings_error_gas_price_too_high":"crwdns18006:0crwdne18006:0","gas_settings_error_gas_limit_absence":"crwdns17644:0crwdne17644:0","gas_settings_error_gas_limit_too_low":"crwdns18008:0crwdne18008:0","gas_settings_error_max_fee_absence":"crwdns17648:0crwdne17648:0","gas_settings_error_max_priority_fee_absence":"crwdns17650:0crwdne17650:0","gas_settings_error_max_fee_too_low":"crwdns17652:0crwdne17652:0","gas_settings_error_max_fee_too_high":"crwdns17654:0crwdne17654:0","gas_settings_error_max_priority_gas_fee_positive":"crwdns17656:0crwdne17656:0","gas_settings_error_max_priority_gas_fee_too_low":"crwdns17658:0crwdne17658:0","gas_settings_error_max_priority_gas_fee_too_high":"crwdns17660:0crwdne17660:0","gas_settings_error_max_priority_gas_fee_imbalance":"crwdns17662:0crwdne17662:0","gas_usd_price":"crwdns18786:0{{-usd}}crwdne18786:0","plugin_default_title":"crwdns18788:0crwdne18788:0","plugin_provider_by":"crwdns18792:0crwdne18792:0","plugin_card_frame_default_title":"crwdns18794:0crwdne18794:0","plugin_card_frame_default_provided_by":"crwdns18796:0crwdne18796:0","plugin_card_frame_default_provided_by_value":"crwdns18798:0crwdne18798:0","plugin_card_frame_loading":"crwdns18800:0crwdne18800:0","plugin_wallet_connect_a_wallet":"crwdns18844:0crwdne18844:0","plugin_wallet_confirm_risk_warning":"crwdns18908:0crwdne18908:0","plugin_wallet_update_gas_fee":"crwdns18910:0crwdne18910:0","plugin_wallet_no_gas_fee":"crwdns18912:0crwdne18912:0","plugin_wallet_invalid_network":"crwdns18914:0crwdne18914:0","plugin_wallet_wrong_network":"crwdns18900:0crwdne18900:0","plugin_wallet_unsupported_network":"crwdns19987:0crwdne19987:0","plugin_wallet_switch_network_title":"crwdns20261:0crwdne20261:0","plugin_wallet_unsupported_chain":"crwdns19989:0{{network}}crwdne19989:0","plugin_wallet_switch_chain_failed":"crwdns20267:0crwdne20267:0","plugin_wallet_switch_network":"crwdns18866:0{{network}}crwdne18866:0","plugin_wallet_not_support_network":"crwdns18868:0crwdne18868:0","plugin_wallet_switch_network_under_going":"crwdns18870:0{{network}}crwdne18870:0","plugin_wallet_connect_tips":"crwdns18872:0crwdne18872:0","plugin_wallet_connect_network":"crwdns18876:0{{network}}crwdne18876:0","plugin_wallet_not_available_on":"crwdns18874:0{{network}}crwdne18874:0","plugin_wallet_token_infinite_unlock_tips":"crwdns18916:0{{provider}}crwdnd18916:0{{symbol}}crwdne18916:0","plugin_wallet_token_infinite_unlock":"crwdns18918:0{{symbol}}crwdne18918:0","plugin_wallet_select_a_nft_contract":"crwdns18920:0crwdne18920:0","plugin_wallet_select_a_nft_owner":"crwdns18922:0crwdne18922:0","plugin_wallet_select_a_nft_operator":"crwdns18924:0crwdne18924:0","plugin_wallet_approve_all_nft":"crwdns18926:0{{symbol}}crwdne18926:0","plugin_wallet_nft_approving_all":"crwdns18928:0{{symbol}}crwdne18928:0","plugin_wallet_approve_all_nft_successfully":"crwdns18930:0{{symbol}}crwdne18930:0","plugin_wallet_fail_to_load_nft_contract":"crwdns18932:0crwdne18932:0","plugin_wallet_change_wallet":"crwdns19965:0crwdne19965:0","wallet_connect_qr_code_dialog_title":"crwdns20263:0crwdne20263:0","wallet_connect_qr_code_dialog_content":"crwdns20265:0crwdne20265:0","save":"crwdns18802:0crwdne18802:0","cancel":"crwdns18804:0crwdne18804:0","add_wallet":"crwdns18806:0crwdne18806:0","wallet_transfer_error_amount_absence":"crwdns18934:0crwdne18934:0","wallet_load_retry":"crwdns18936:0{{symbol}}crwdne18936:0","wallet_setting_hint":"crwdns18808:0crwdne18808:0","wallet_status_button_change_to_evm":"crwdns18880:0crwdne18880:0","wallet_status_button_change":"crwdns18846:0crwdne18846:0","add_wallet_tips":"crwdns18810:0crwdne18810:0","add_wallet_web3_profile":"crwdns18812:0crwdne18812:0","save_successfully":"crwdns18814:0crwdne18814:0","save_failed":"crwdns18816:0crwdne18816:0","wallet_set_up_successfully":"crwdns18818:0crwdne18818:0","wallet_set_up_failed":"crwdns18820:0crwdne18820:0","setting_alert_title":"crwdns18822:0crwdne18822:0","recent_transaction_pending":"crwdns18848:0crwdne18848:0","account_icon_tooltips":"crwdns18884:0{{source}}crwdne18884:0","account_icon_tooltips_only":"crwdns18886:0crwdne18886:0","account_icon_tooltips$twitter":"crwdns18888:0{{source}}crwdne18888:0","account_icon_tooltips_only$twitter":"crwdns18890:0crwdne18890:0","account_icon_tooltips$facebook":"crwdns18892:0{{source}}crwdne18892:0","account_icon_tooltips_only$facebook":"crwdns18894:0crwdne18894:0","account_icon_tooltips$next_id":"crwdns18896:0crwdne18896:0","account_icon_tooltips_only$next_id":"crwdns18898:0crwdne18898:0","account_icon_merged_tooltip$normal":"crwdns22540:0crwdne22540:0","account_icon_merged_tooltip$twitter":"crwdns22542:0crwdne22542:0","account_icon_merged_tooltip$facebook":"crwdns22544:0crwdne22544:0","account_icon_merged_tooltip$next_id":"crwdns22546:0crwdne22546:0","wallet_status_button_copy_address":"crwdns19327:0crwdne19327:0","copy_success_of_wallet_addr":"crwdns19329:0crwdne19329:0","persona_boundary_create_persona":"crwdns19745:0crwdne19745:0","persona_boundary_connect_persona":"crwdns19747:0crwdne19747:0","persona_boundary_verify_persona":"crwdns19749:0crwdne19749:0","applications_create_persona_title":"crwdns19751:0crwdne19751:0","applications_create_persona_hint":"crwdns19753:0crwdne19753:0","applications_create_persona_action":"crwdns19755:0crwdne19755:0","lens_follow":"crwdns19945:0crwdne19945:0","lens_following":"crwdns20185:0crwdne20185:0","view":"crwdns20187:0crwdne20187:0","verified_by":"crwdns20017:0{{ marketplace }}crwdne20017:0","no_NFTs_found":"crwdns20019:0crwdne20019:0","add_collectibles":"crwdns20225:0crwdne20225:0","collectible_contract_require":"crwdns20227:0crwdne20227:0","collectible_contract_invalid":"crwdns20229:0crwdne20229:0","collectible_token_id_require":"crwdns20231:0crwdne20231:0","collectible_token_id_invalid":"crwdns20273:0crwdne20273:0","collection_not_belong_to_you":"crwdns20233:0crwdne20233:0","collectible_search_placeholder":"crwdns20235:0crwdne20235:0","add_collectibles_address_placeholder":"crwdns20237:0crwdne20237:0","add_collectibles_token_id_placeholder":"crwdns20239:0crwdne20239:0","plugin_wallet_solana_tips":"crwdns20277:0crwdne20277:0","plugin_wallet_blocto_tips":"crwdns20279:0crwdne20279:0","plugin_wallet_fortmatic_tips":"crwdns20281:0crwdne20281:0","plugin_wallet_support_chains_tips":"crwdns20283:0crwdne20283:0","plugin_wallet_connect_fortmatic":"crwdns20285:0crwdne20285:0","plugin_wallet_choose_network":"crwdns20287:0crwdne20287:0","plugin_wallet_select_provider_dialog_title":"crwdns20289:0crwdne20289:0","plugin_wallet_view_on_explorer":"crwdns20291:0crwdne20291:0","plugin_wallet_disconnect":"crwdns20293:0crwdne20293:0","plugin_wallet_dialog_title":"crwdns20295:0crwdne20295:0","recent_transaction_success":"crwdns20297:0crwdne20297:0","recent_transaction_failed":"crwdns20299:0crwdne20299:0","wallet_status_pending_clear":"crwdns20301:0crwdne20301:0","wallet_status_pending_one":"crwdns20303:0{{count}}crwdne20303:0","wallet_status_pending_other":"crwdns20305:0{{count}}crwdne20305:0","wallet_status_pending_clear_all":"crwdns20307:0crwdne20307:0","wallet_risk_warning_no_select_wallet":"crwdns20311:0crwdne20311:0","wallet_risk_warning_dialog_title":"crwdns20313:0crwdne20313:0","wallet_risk_warning_content":"crwdns20315:0crwdne20315:0","wallet_risk_warning_confirm_tips":"crwdns20317:0crwdne20317:0","confirm":"crwdns20319:0crwdne20319:0","done":"crwdns20321:0crwdne20321:0","wallet_risk_confirm_confirming":"crwdns20323:0crwdne20323:0","wallet_risk_confirm_failed":"crwdns20325:0crwdne20325:0","plugin_wallet_snackbar_wait_for_confirming":"crwdns20451:0crwdne20451:0","plugin_wallet_snackbar_confirmed":"crwdns20453:0crwdne20453:0","plugin_wallet_snackbar_failed":"crwdns20455:0crwdne20455:0","popups_wallet_gas_fee_settings_low":"crwdns20395:0crwdne20395:0","popups_wallet_gas_fee_settings_medium":"crwdns20397:0crwdne20397:0","popups_wallet_gas_fee_settings_high":"crwdns20399:0crwdne20399:0","wallet_transfer_error_gas_limit_absence":"crwdns20401:0crwdne20401:0","popups_wallet_gas_fee_settings_usd":"crwdns20403:0{{usd}}crwdne20403:0","wallet_transfer_gwei":"crwdns20405:0crwdne20405:0","popups_wallet_gas_fee_settings_max_fee":"crwdns20407:0crwdne20407:0","popups_wallet_gas_fee_settings_max_priority_fee":"crwdns20409:0crwdne20409:0","popups_wallet_gas_fee_settings_gas_limit":"crwdns20411:0crwdne20411:0","wallet_transfer_error_max_fee_too_low":"crwdns20413:0crwdne20413:0","wallet_transfer_error_max_fee_too_high":"crwdns20415:0crwdne20415:0","wallet_transfer_error_max_priority_gas_fee_positive":"crwdns20417:0crwdne20417:0","wallet_transfer_error_max_priority_gas_fee_too_low":"crwdns20419:0crwdne20419:0","wallet_transfer_error_max_priority_gas_fee_too_high":"crwdns20421:0crwdne20421:0","wallet_transfer_error_max_priority_gas_fee_imbalance":"crwdns20423:0crwdne20423:0","wallet_transfer_error_max_priority_fee_absence":"crwdns20425:0crwdne20425:0","wallet_transfer_error_max_fee_absence":"crwdns20427:0crwdne20427:0","popups_wallet_gas_price":"crwdns20429:0crwdne20429:0","wallet_transfer_error_gas_price_absence":"crwdns20431:0crwdne20431:0","popups_wallet_gas_fee_settings_min_gas_limit_tips":"crwdns20433:0{{limit}}crwdne20433:0","popups_wallet_gas_fee_settings":"crwdns20435:0crwdne20435:0","plugin_wallet_connect_to":"crwdns22510:0crwdne22510:0","plugin_wallet_connect_to_retry":"crwdns22512:0crwdne22512:0","plugin_wallet_connected_to":"crwdns22514:0crwdne22514:0","initializing":"crwdns20387:0crwdne20387:0","plugin_wallet_metamask_error_already_request":"crwdns20389:0crwdne20389:0","applications":"crwdns20505:0crwdne20505:0","application_settings":"crwdns20507:0crwdne20507:0","application_tooltip_hint_sns_persona_unmatched":"crwdns20509:0{{currentSNSConnectedPersonaPublicKey}}crwdnd20509:0{{currentPersonaPublicKey}}crwdnd20509:0{{currentSNSConnectedPersonaPublicKey}}crwdne20509:0","application_tooltip_hint_verify":"crwdns20511:0crwdne20511:0","application_tooltip_hint_create_persona":"crwdns20513:0crwdne20513:0","application_tooltip_hint_persona_accessing_dapp":"crwdns20625:0crwdne20625:0","application_tooltip_hint_connect_persona":"crwdns20515:0crwdne20515:0","application_tooltip_hint_connect_wallet":"crwdns20517:0crwdne20517:0","application_settings_tab_app_list":"crwdns20519:0crwdne20519:0","application_settings_tab_plug_in_switch":"crwdns20521:0crwdne20521:0","application_settings_tab_plug_app_list_listed":"crwdns20523:0crwdne20523:0","application_settings_tab_plug_app_list_unlisted":"crwdns20525:0crwdne20525:0","application_settings_tab_plug_app_listed_placeholder":"crwdns20527:0crwdne20527:0","application_display_tab_plug_app_unlisted_placeholder":"crwdns20529:0crwdne20529:0","application_settings_tab_plug_app_unlisted_placeholder":"crwdns20531:0crwdne20531:0","decentralized_search_description":"crwdns20533:0crwdne20533:0","decentralized_search_feature_token_name":"crwdns20535:0crwdne20535:0","decentralized_search_feature_token_description":"crwdns20537:0crwdne20537:0","decentralized_search_feature_nft_name":"crwdns20539:0crwdne20539:0","decentralized_search_feature_nft_description":"crwdns20541:0crwdne20541:0","decentralized_search_feature_wallet_name":"crwdns20543:0crwdne20543:0","decentralized_search_feature_wallet_description":"crwdns20545:0crwdne20545:0","claim_nft_successful":"crwdns20551:0{{name}}crwdne20551:0","claim_token_successful":"crwdns20553:0{{- amount}}crwdnd20553:0{{name}}crwdne20553:0","lucky_drop":"crwdns20555:0crwdne20555:0","share":"crwdns20557:0crwdne20557:0","ok":"crwdns20559:0crwdne20559:0","plugin_wallet_on_connect":"crwdns20309:0crwdne20309:0","upload_error$single":"crwdns20589:0crwdne20589:0","upload_error$oversized":"crwdns20591:0{{limit}}crwdne20591:0","upload_file_title$failed":"crwdns20593:0crwdne20593:0","upload_file_message$failed":"crwdns20595:0crwdne20595:0","upload_drag_n_drop":"crwdns20597:0crwdne20597:0","upload_size_limit":"crwdns20599:0crwdne20599:0","upload_or":"crwdns20601:0crwdne20601:0","upload_browse_files":"crwdns20603:0crwdne20603:0","reload":"crwdns20745:0crwdne20745:0","persona_load_failed":"crwdns20747:0crwdne20747:0","applications_persona_title":"crwdns20749:0crwdne20749:0","applications_persona_copy":"crwdns20751:0crwdne20751:0","applications_persona_connect":"crwdns20753:0{{-nickname}}crwdne20753:0","applications_persona_connect_hint":"crwdns20755:0{{-nickname}}crwdne20755:0","applications_persona_verify":"crwdns20757:0{{-nickname}}crwdne20757:0","applications_persona_verify_hint":"crwdns20759:0crwdne20759:0","applications_persona_verify_connect":"crwdns20761:0{{-nickname}}crwdne20761:0","enable_plugin_boundary":"crwdns20765:0crwdne20765:0","enable_plugin_boundary_description":"crwdns20767:0crwdne20767:0","applications_persona_verify_connect_hint":"crwdns20763:0{{-nickname}}crwdne20763:0","usdc_price_statistic":"crwdns21551:0crwdne21551:0","market_cap":"crwdns21553:0crwdne21553:0","trader_circulating_supply":"crwdns21555:0crwdne21555:0","volume_24":"crwdns21557:0crwdne21557:0","total_supply":"crwdns21559:0crwdne21559:0","circulating_supply":"crwdns21561:0crwdne21561:0","info":"crwdns21563:0crwdne21563:0","contract":"crwdns21565:0crwdne21565:0","community":"crwdns21567:0crwdne21567:0","website":"crwdns21569:0crwdne21569:0","show_wallet_setting_intro":"crwdns21721:0crwdne21721:0","show_wallet_setting_button":"crwdns21723:0crwdne21723:0","web3_profile_no_social_address_list":"crwdns21725:0crwdne21725:0","badge_renderer_provided_by_plugin":"crwdns21929:0crwdne21929:0","post_dialog__button":"crwdns21931:0crwdne21931:0","post_dialog__placeholder":"crwdns21933:0crwdne21933:0","post_dialog__title":"crwdns21935:0crwdne21935:0","post_dialog_visible_to":"crwdns21937:0crwdne21937:0","post_dialog_encryption_method":"crwdns21939:0crwdne21939:0","post_dialog_enable_paste_auto":"crwdns21941:0crwdne21941:0","post_dialog_share_with_input_placeholder":"crwdns21943:0crwdne21943:0","plugins":"crwdns21945:0crwdne21945:0","compose_encrypt_method_text":"crwdns21947:0crwdne21947:0","compose_encrypt_method_text_sub_title":"crwdns21949:0crwdne21949:0","compose_encrypt_method_image":"crwdns21951:0crwdne21951:0","compose_encrypt_method_image_sub_title":"crwdns21953:0crwdne21953:0","compose_no_local_key":"crwdns21955:0crwdne21955:0","compose_encrypt_visible_to_all":"crwdns21957:0crwdne21957:0","compose_encrypt_visible_to_all_sub":"crwdns21959:0crwdne21959:0","compose_encrypt_visible_to_private":"crwdns21961:0crwdne21961:0","compose_encrypt_visible_to_private_sub":"crwdns21963:0crwdne21963:0","compose_shared_friends_one":"crwdns21965:0crwdne21965:0","compose_shared_friends_other":"crwdns21967:0{{count}}crwdne21967:0","compose_encrypt_visible_to_share":"crwdns21969:0crwdne21969:0","compose_encrypt_visible_to_share_sub":"crwdns21971:0crwdne21971:0","compose_encrypt_share_dialog_empty":"crwdns21973:0crwdne21973:0","persona_required":"crwdns21975:0crwdne21975:0","create":"crwdns21977:0crwdne21977:0","connect":"crwdns21979:0crwdne21979:0","reset":"crwdns21981:0crwdne21981:0","editor":"crwdns21983:0crwdne21983:0","typed_message_text_alert":"crwdns21985:0crwdne21985:0","share_to_social_networks":"crwdns22147:0crwdne22147:0","report_nft":"crwdns22526:0crwdne22526:0","confirm_to_report_nft":"crwdns22528:0{{name}}crwdne22528:0","spam":"crwdns22530:0crwdne22530:0","report_spam":"crwdns22532:0crwdne22532:0","report_spam_success":"crwdns22534:0crwdne22534:0","report_spam_fail":"crwdns22536:0crwdne22536:0"}');
;// CONCATENATED MODULE: ./packages/shared/src/locales/zh-CN.json
const zh_CN_namespaceObject = JSON.parse('{"send":"发送","search_area":"探索范围","approve":"授权","operation":"操作","approve_mask":"授权MASK?","approve_mask_description":"MATIC 代币用于支付与 Polygon Network 交互时支付的网络费用。 SmartPay 钱包允许用户在与 Polygon Network 网络交互时使用 MASK 代币。","approve_mask_question":"您想设置 MASK 代币用于支付网络费吗?","authorization_descriptions":"Mask Network 需要您在使用前授权以下网站。","create_persona_hint":"使用此功能需要先创建一个身份并验证您的社交媒体账号。","create_persona_title":"身份","create_persona_action":"创建身份","congratulations":"恭喜！","coming_soon":"即将上线","domain_request":"域名请求","available_balance":"可用余额","snackbar_done":"完成","added_by_user":"由用户添加","all":"所有","retry":"重试","gwei":"Gwei","import":"导入","select_an_nft":"请选择一个 NFT","wallet_balance":"余额","wallet_balance_eth":"余额 ({{symbol}})","balance":"余额","decentralized_search_name":"DSearch","web3_profile_card_name":"Web3 名片","profile_card_name":"Web3 名片","unlock":"解锁","select_token":"选择代币","select_a_token":"选择代币","select_collectibles":"选择收藏品","no_collectible_found":"未找到任何 NFT。","manage_token_list":"编辑代币列表","mobile_number":"手机号码","token_list_loading":"加载中","erc20_token_list_placeholder":"代币代号名称或合约地址","erc20_search_wrong_address":"请输入有效的代币合约地址","erc20_manage_token_list":"编辑代币列表","address_viewer_address_name_address":"地址","dialog_dismiss":"关闭","dialog_confirm":"确定","dialog_share":"分享","dialog_confirm_label":"确定","share_dialog_transaction":"交易记录","share_dialog_view_on_explorer":"在区块链浏览器查看","share_dialog_transaction_confirmed":"您的交易已确认！","load_failed":"加载失败","load_retry":"重新加载","loading":"加载中","no_results":"没有任何结果。","powered_by":"技术支持：","copy":"复制","copied":"已复制","go_plus":"GO+","rss3":"RSS3","mask_network":"Mask Network","search":"搜索","check_security":"安全检查","search_input_placeholder":"请输入合约地址.","token_info":"代币信息","more_details":"更多详情","more":"更多","details":"详情","unnamed":"未命名","contributions":"贡献者","description":"介绍","day_one":"天","day_other":"天","hour_one":"小时","hour_other":"小时","ago":"前","properties":"属性","security_detection":"安全检测","risky_items":"{{quantity}} 个有风险的因素","attention_items":"{{quantity}} 个需要关注的因素","risky_item":"{{quantity}} 个有风险的因素","attention_item":"{{quantity}} 个需要关注的因素","change":"切换","edit":"编辑","connect_your_wallet":"连接您的钱包","connected_wallet_settings":"已连接的钱包设置","wallet_settings":"设置钱包","pending":"待定中...","gas_settings_title":"高阶设置","gas_settings_gas_option_type_slow":"中等","gas_settings_gas_option_type_normal":"高速","gas_settings_gas_option_type_fast":"即时","gas_settings_gas_option_estimate_distance":"~ {{distance}}","gas_settings_gas_option_amount_in_gwei":"最多 {{amount}} Gwei","gas_settings_section_title_slippage_tolerance":"滑点容许值","gas_settings_custom":"自定义","gas_settings_tab_basic":"基础","gas_settings_tab_advanced":"高阶","gas_settings_label_gas_fee":"Gas 费","gas_settings_label_transaction_cost":"交易费用","gas_settings_label_gas_price":"Gas 价格","gas_settings_label_gas_limit":"Gas 限制","gas_settings_label_max_priority_fee":"最大优先费","gas_settings_label_max_fee":"最大手续费","gas_settings_info_gas_fee":"当前基础手续费是 {{fee}} Gwei","gas_settings_alert_low_slippage_tolerance":"若设置的滑点过低，在流动性极低的情况下交易可能会被退回。","gas_settings_alert_high_slippage_tolerance":"在当前滑点设置下，您可能会少接收 {{percentage}} %的期待数额。","gas_settings_error_custom_slippage_tolerance_invalid":"无效的滑点容许值","gas_settings_error_gas_price_absence":"请输入Gas Price","gas_settings_error_gas_price_positive":"Gas Price 必须大于 0 Gwei。","gas_settings_error_gas_price_too_low":"Gas price 在当前网络环境下过低。","gas_settings_error_gas_price_too_high":"Gas price过高。您或许支付了超过需要的费用。","gas_settings_error_gas_limit_absence":"输入Gas Limit","gas_settings_error_gas_limit_too_low":"Gas Limit过低有几率会导致交易失败。","gas_settings_error_max_fee_absence":"输入最大手续费","gas_settings_error_max_priority_fee_absence":"请输入最大优先级费用","gas_settings_error_max_fee_too_low":"最大手续费在当前网络环境下过低。","gas_settings_error_max_fee_too_high":"最大手续费高于必要值。","gas_settings_error_max_priority_gas_fee_positive":"最大优先费用必须大于 0 Gwei。","gas_settings_error_max_priority_gas_fee_too_low":"最大优先费用在当前网络环境下过低。","gas_settings_error_max_priority_gas_fee_too_high":"最大优先费用过高。您或许支付了超过需要的费用。","gas_settings_error_max_priority_gas_fee_imbalance":"最大手续费不能低于最大优先级费用。","gas_usd_price":" ≈ {{- usd}}","plugin_default_title":"默认","plugin_provider_by":"Provided by","plugin_card_frame_default_title":"Web3 名片","plugin_card_frame_default_provided_by":"Powered by","plugin_card_frame_default_provided_by_value":"Mask Network","plugin_card_frame_loading":"加载中....","plugin_wallet_connect_a_wallet":"连接钱包","plugin_wallet_confirm_risk_warning":"确认风险提示","plugin_wallet_update_gas_fee":"Gas费用更新中…","plugin_wallet_no_gas_fee":"Gas费用不足","plugin_wallet_invalid_network":"网络无效","plugin_wallet_wrong_network":"网络错误","plugin_wallet_unsupported_network":"不支持的网络","plugin_wallet_switch_network_title":"切换网络","plugin_wallet_unsupported_chain":"当前钱包不支持该网络。","plugin_wallet_switch_chain_failed":"网络错误或用户取消进程。","plugin_wallet_switch_network":"切换到 {{network}}","plugin_wallet_not_support_network":"此网络尚未支持。","plugin_wallet_switch_network_under_going":"切换到 {{network}}","plugin_wallet_connect_tips":"请在您所连接的手机\\n应用程序钱包中切换到此网络。","plugin_wallet_connect_network":"切换到 {{network}}","plugin_wallet_not_available_on":"在 {{network}} 网络上不可用。","plugin_wallet_token_infinite_unlock_tips":"您必须授予 {{provider}} 智能合约权限才能使用您的 {{symbol}} 。每个代币只需要授权一次。","plugin_wallet_token_infinite_unlock":"解锁 {{symbol}}","plugin_wallet_select_a_nft_contract":"选择 NFT 合约","plugin_wallet_select_a_nft_owner":"选择 NFT 合约持有者","plugin_wallet_select_a_nft_operator":"选择 NFT 合约持有者","plugin_wallet_approve_all_nft":"解锁 {{symbol}}","plugin_wallet_nft_approving_all":"正在解锁 {{symbol}}...","plugin_wallet_approve_all_nft_successfully":"解锁 {{symbol}} 成功","plugin_wallet_fail_to_load_nft_contract":"点击重试","plugin_wallet_change_wallet":"更换钱包","wallet_connect_qr_code_dialog_title":"WalletConnect","wallet_connect_qr_code_dialog_content":"使用WalletConnect兼容的钱包扫描二维码","save":"保存","cancel":"取消","add_wallet":"添加钱包","wallet_transfer_error_amount_absence":"输入金额","wallet_load_retry":"加载 {{symbol}} 失败，请点击重试。","wallet_setting_hint":"点击开关按钮来显示或隐藏钱包。","wallet_status_button_change_to_evm":"切换至 EVM 钱包","wallet_status_button_change":"切换","add_wallet_tips":"请设置钱包来接收小费。","add_wallet_web3_profile":"没有已连接的钱包，请添加钱包。","save_successfully":"保存成功","save_failed":"保存失败","wallet_set_up_successfully":"Web3 名片钱包设置成功。","wallet_set_up_failed":"小费钱包设置失败，请重试。","setting_alert_title":"点击开关按钮来显示或隐藏钱包。","recent_transaction_pending":"确认中","account_icon_tooltips":"数据来源于{{source}} 。","account_icon_tooltips$twitter":"数据来源于 Twitter 个人资料和 {{source}} 。","account_icon_tooltips_only$twitter":"数据来源于 Twitter 个人资料。","account_icon_tooltips$facebook":"数据来源于 Facebook 个人资料和 {{source}} 。","account_icon_tooltips_only$facebook":"数据来源于 Facebook 个人资料 。","account_icon_tooltips$next_id":"数据来源于 NEXT.ID 。","account_icon_tooltips_only$next_id":"数据来源于 NEXT.ID 。","wallet_status_button_copy_address":"复制地址","copy_success_of_wallet_addr":"复制钱包地址成功！","persona_boundary_create_persona":"创建身份","persona_boundary_connect_persona":"连接身份","persona_boundary_verify_persona":"验证您的Twitter ID","applications_create_persona_title":"身份","applications_create_persona_hint":"使用此功能需要先创建一个身份并验证您的社交媒体账号。","applications_create_persona_action":"创建身份","lens_follow":"关注","lens_following":"已关注","view":"查看","verified_by":"由 {{ marketplace }} 验证","no_NFTs_found":"没有找到任何NFT。","add_collectibles":"添加 NFT","collectible_contract_require":"NFT 地址为必填项","collectible_contract_invalid":"合约地址不正确","collectible_token_id_require":"NFT id 为必填项","collectible_token_id_invalid":"不正确的 NFT id","collection_not_belong_to_you":"合约地址不正确或此 NFT 不属于您。","collectible_search_placeholder":"名称或合同地址 eg.PUNK 或 0x234...","add_collectibles_address_placeholder":"输入合约地址","add_collectibles_token_id_placeholder":"Token ID 用逗号分隔，例如：1223,1224,","plugin_wallet_solana_tips":"Phantom 只支持Solana 链。","plugin_wallet_blocto_tips":"Blocto 只支持 Flow 链。","plugin_wallet_fortmatic_tips":"Formatic 仅支持 ETH 和 BNB 链。","plugin_wallet_support_chains_tips":"仅支持 EVM 链、ETH、BNB 、Polygon、Arb、Op等。","plugin_wallet_connect_fortmatic":"连接 Fortmatic","plugin_wallet_choose_network":"选择网络","plugin_wallet_select_provider_dialog_title":"连接钱包","plugin_wallet_view_on_explorer":"区块链浏览器查看","plugin_wallet_disconnect":"断开连接","plugin_wallet_dialog_title":"钱包账户","recent_transaction_success":"成功","recent_transaction_failed":"失败","wallet_status_pending_clear":"清除","wallet_status_pending_one":"{{count}} 个待定","wallet_status_pending_other":"{{count}} 个待定","wallet_status_pending_clear_all":"全部清除","wallet_risk_warning_no_select_wallet":"尚未选择钱包。","wallet_risk_warning_dialog_title":"风险提示","wallet_risk_warning_content":"亲爱的用户，<br/><br/>当再使用Mask Network中任何与钱包相关的插件时，请确认以下使用风险：<br/><br/>Mask Network提供非商业性免费服务。 该插件由社区成员和其他优秀的第三方去中心化应用团队提供。 由于去中心化网络的自由性和其他不确定的风险因素， 用户被要求适当地保护他们的敏感信息，例如钱包助记词和私钥。 请谨慎进行任何区块链合同交互。任何第三方去中心化应用(插件) 造成的风险都由第三方去中心化应用自身承担。 点击确认按钮意味着您同意承担上述风险。","wallet_risk_warning_confirm_tips":"点击确认按钮意味着您同意承担上述风险。","confirm":"确定","done":"完成","wallet_risk_confirm_confirming":"确认中","wallet_risk_confirm_failed":"确认失败","plugin_wallet_snackbar_wait_for_confirming":"请在您的钱包中确认这笔交易","plugin_wallet_snackbar_confirmed":"交易已确认","plugin_wallet_snackbar_failed":"交易失败","popups_wallet_gas_fee_settings_low":"低","popups_wallet_gas_fee_settings_medium":"中","popups_wallet_gas_fee_settings_high":"高","wallet_transfer_error_gas_limit_absence":"输入Gas Limit","popups_wallet_gas_fee_settings_usd":" ≈ <span>{{usd}}</span>","wallet_transfer_gwei":"GWEI","popups_wallet_gas_fee_settings_max_fee":"最大费用","popups_wallet_gas_fee_settings_max_priority_fee":"最大优先费","popups_wallet_gas_fee_settings_gas_limit":"Gas 限制","wallet_transfer_error_max_fee_too_low":"最大手续费在当前网络环境下过低。","wallet_transfer_error_max_fee_too_high":"最大手续费高于必要值。","wallet_transfer_error_max_priority_gas_fee_positive":"最大优先费用必须大于 0 Gwei。","wallet_transfer_error_max_priority_gas_fee_too_low":"最大优先费用在当前网络环境下过低。","wallet_transfer_error_max_priority_gas_fee_too_high":"最大优先费用过高。您或许支付了超过需要的费用。","wallet_transfer_error_max_priority_gas_fee_imbalance":"最大手续费不能低于最大优先级费用。","wallet_transfer_error_max_priority_fee_absence":"请输入最大优先级费用","wallet_transfer_error_max_fee_absence":"输入最大手续费","popups_wallet_gas_price":"Gas Price","wallet_transfer_error_gas_price_absence":"请输入Gas Price","popups_wallet_gas_fee_settings_min_gas_limit_tips":"Gas 限制至少 {{limit}}","popups_wallet_gas_fee_settings":"Gas 费用设置","plugin_wallet_connect_to":"连接到","plugin_wallet_connect_to_retry":"请重试","plugin_wallet_connected_to":"已连接到","initializing":"初始化中...","plugin_wallet_metamask_error_already_request":"您已打开弹出窗口，请确认。","applications":"应用程序","application_settings":"应用设置","application_tooltip_hint_sns_persona_unmatched":"当前Twitter ID已验证的身份({{currentSNSConnectedPersonaPublicKey}}) 与您当前的身份({{currentPersonaPublicKey}}) 不一致。请切换至身份({{currentSNSConnectedPersonaPublicKey}}) 再重新尝试。","application_tooltip_hint_verify":"请验证您的社交账户","application_tooltip_hint_create_persona":"请创建您的身份","application_tooltip_hint_persona_accessing_dapp":"请创建一个身份访问 Dapps。","application_tooltip_hint_connect_persona":"请连接您的身份","application_tooltip_hint_connect_wallet":"请连接您的钱包","application_settings_tab_app_list":"应用列表","application_settings_tab_plug_in_switch":"插件开关","application_settings_tab_plug_app_list_listed":"显示","application_settings_tab_plug_app_list_unlisted":"隐藏","application_settings_tab_plug_app_listed_placeholder":"点击应用图标将会在应用列表中隐藏。","application_display_tab_plug_app_unlisted_placeholder":"单击设置图标以在应用板上列出它。","application_settings_tab_plug_app_unlisted_placeholder":"点击应用图标将会在应用列表中显示。","decentralized_search_description":"使用 Token 名称、 NFT 收藏品、 ENS 域名或钱包地址优化搜索结果。","decentralized_search_feature_token_name":"Token","decentralized_search_feature_token_description":"当您查询代币时，获取优化后的搜索结果。","decentralized_search_feature_nft_name":"NFTs","decentralized_search_feature_nft_description":"使用 NFT 集合的名称或符号搜索以获得最佳结果。","decentralized_search_feature_wallet_name":"ENS 或钱包地址","decentralized_search_feature_wallet_description":"使用ENS域名或钱包地址搜索以获得最优结果。","claim_nft_successful":"成功领取了 1 {{name}}。","claim_token_successful":"你领取了{{- amount}} {{name}}。","lucky_drop":"红包","share":"分享","ok":"确定","plugin_wallet_on_connect":"连接钱包","upload_error$single":"不是单个文件。","upload_error$oversized":"文件太大，限制为 {{limit}}。","upload_file_title$failed":"上传文件失败","upload_file_message$failed":"超过 10MB 的最大文件限制。","upload_drag_n_drop":"将您的文件拖放到此处","upload_size_limit":"大小限制：10 MB","upload_or":"或者","upload_browse_files":"浏览文件","reload":"重新加载","persona_load_failed":"加载失败","applications_persona_title":"身份","applications_persona_copy":"复制成功","applications_persona_connect":"连接到 {{-nickname}}","applications_persona_connect_hint":"请在使用 dApp之前连接到 {{-nickname}} 。","applications_persona_verify":"验证 {{-nickname}}","applications_persona_verify_hint":"请在使用 dApp之前验证当前使用社交媒体账号的身份。","applications_persona_verify_connect":"连接到 {{-nickname}} 并进行验证","enable_plugin_boundary":"开启插件","enable_plugin_boundary_description":"此功能已在应用设置中被关闭。启用插件以完全访问。","applications_persona_verify_connect_hint":"请在使用 dApp之前连接到 {{-nickname}} 并发送验证推文。","usdc_price_statistic":"价格统计数据","market_cap":"市值","trader_circulating_supply":"流通总量","volume_24":"24h 交易总额","total_supply":"总供应量","circulating_supply":"流通总量","info":"信息资料","contract":"合约","community":"社区","website":"网站","show_wallet_setting_intro":"请选择钱包以在保存设置后激活功能。","show_wallet_setting_button":"前往设置","web3_profile_no_social_address_list":"找不到有效的用户地址数据源。","badge_renderer_provided_by_plugin":"插件提供：","post_dialog__button":"加密","post_dialog__placeholder":"告诉朋友发生了什么...","post_dialog__title":"加密贴文","post_dialog_visible_to":"可见范围","post_dialog_encryption_method":"加密方式","post_dialog_enable_paste_auto":"启用自动粘贴","post_dialog_share_with_input_placeholder":"例如：Twitter账户、身份公钥、钱包地址或者ENS","plugins":"插件","compose_encrypt_method_text":"文本","compose_encrypt_method_text_sub_title":"使用文本加密","compose_encrypt_method_image":"图片","compose_encrypt_method_image_sub_title":"使用图片加密信息","compose_no_local_key":"缺失本地密钥","compose_encrypt_visible_to_all":"所有人","compose_encrypt_visible_to_all_sub":"任何人","compose_encrypt_visible_to_private":"私密","compose_encrypt_visible_to_private_sub":"仅自己可见","compose_shared_friends_one":"1个好友","compose_shared_friends_other":"{{count}} 个好友","compose_encrypt_visible_to_share":"分享到","compose_encrypt_visible_to_share_sub":"仅选定的联系人可见","compose_encrypt_share_dialog_empty":"本地没有基于Person的加密朋友，请尝试搜索。","persona_required":"必须拥有身份","create":"创建","connect":"连接","reset":"重置","editor":"编辑器","typed_message_text_alert":"当前只支持输入消息文本。","share_to_social_networks":"分享到社交网络"}');
;// CONCATENATED MODULE: ./packages/shared/src/locales/zh-TW.json
const zh_TW_namespaceObject = JSON.parse('{"snackbar_done":"完成","import":"導入","balance":"餘額","select_token":"選擇一種代幣","erc20_token_list_placeholder":"代幣名稱或合約地址"}');
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(59429);
;// CONCATENATED MODULE: ./packages/shared/src/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: en_US_namespaceObject,
    ja: ja_JP_namespaceObject,
    ko: ko_KR_namespaceObject,
    qy: qya_AA_namespaceObject,
    'zh-CN': zh_CN_namespaceObject,
    zh: zh_TW_namespaceObject
};

const addSharedI18N = (0,register_ns/* createI18NBundle */.C)('shared', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 55949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bv: () => (/* binding */ getRegisteredWeb3Chains),
/* harmony export */   Rm: () => (/* binding */ getRegisteredWeb3Networks),
/* harmony export */   TQ: () => (/* binding */ getActivatedPluginWeb3State),
/* harmony export */   i8: () => (/* binding */ getRegisteredWeb3Providers),
/* harmony export */   uQ: () => (/* binding */ getAllPluginsWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45025);



const all = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .evm */ .oN,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .flow */ .ls,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .solana */ .Zj
};
/**
 * Get Web3 providers, for example, WalletConnect, MetaMask, etc.
 * @param ID Network name
 */ function getRegisteredWeb3Providers(ID) {
    return all[ID].provider;
}
/**
 * Get Web3 Networks, for example, mainnet, testnet, Optimism, etc.
 * @param ID Network name
 */ function getRegisteredWeb3Networks(ID) {
    return all[ID].network;
}
function getRegisteredWeb3Chains(ID) {
    return all[ID].chain;
}
function getAllPluginsWeb3State() {
    return {
        [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .evm */ .oN.state,
        [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .flow */ .ls.state,
        [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _registry_js__WEBPACK_IMPORTED_MODULE_1__/* .solana */ .Zj.state
    };
}
function getActivatedPluginWeb3State(pluginID) {
    return all[pluginID].state;
}


/***/ }),

/***/ 29836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ initWallet)
/* harmony export */ });
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);

async function initWallet(io) {
    await Promise.all([
        Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39850)).then((mod)=>mod.createEVMState(io).then((state)=>_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .evm */ .oN.state = state)),
        Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88245)).then((mod)=>mod.createFlowState(io).then((state)=>_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .flow */ .ls.state = state)),
        Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21984)).then((mod)=>mod.createSolanaState(io).then((state)=>_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .solana */ .Zj.state = state))
    ]);
}


/***/ }),

/***/ 81113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AddressBookState)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);

class AddressBookState {
    context;
    options;
    storage;
    contacts;
    constructor(context, options){
        this.context = context;
        this.options = options;
        this.storage = null;
        const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PersistentStorages */ ._H.Web3.createSubScope(`${this.options.pluginID}_AddressBookV2`, {
            value: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP
        });
        this.storage = storage.value;
        this.contacts = this.storage.subscription;
    }
    get ready() {
        return this.storage.initialized;
    }
    get readyPromise() {
        return this.storage.initializedPromise;
    }
    async addContact({ address, name }) {
        if (!this.options.isValidAddress(address)) throw new Error(`Invalid address: ${address}`);
        await this.storage.setValue(this.storage.value.concat({
            name,
            address
        }));
    }
    async removeContact(address) {
        if (!this.options.isValidAddress(address)) throw new Error(`Invalid address: ${address}`);
        await this.storage.setValue(this.storage.value.filter((x)=>!this.options.isSameAddress(x.address, address)));
    }
    async renameContact({ address, name }) {
        if (!this.options.isValidAddress(address)) throw new Error(`Invalid address: ${address}`);
        await this.storage.setValue(this.storage.value.map((x)=>{
            if (this.options.isSameAddress(x.address, address)) {
                return {
                    address,
                    name
                };
            }
            return x;
        }));
    }
}


/***/ }),

/***/ 97627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ IdentityServiceState)
/* harmony export */ });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7191);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60275);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72845);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81755);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(405);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45569);



class IdentityServiceState {
    cache = new lru_cache__WEBPACK_IMPORTED_MODULE_0__/* .LRUCache */ .z({
        max: 20,
        ttl: Number.MAX_SAFE_INTEGER
    });
    getIdentityID(identity) {
        if (!identity.identifier) return '';
        return [
            '1',
            // version
            identity.identifier.network,
            identity.identifier.userId,
            identity.bio,
            identity.homepage,
            identity.publicKey ?? ''
        ].join('_');
    }
    getFromCache(identity) {
        return this.cache.get(this.getIdentityID(identity));
    }
    getFromRemote(identity) {
        throw new Error('Method not implemented.');
    }
    async lookup(identity) {
        const ID = this.getIdentityID(identity);
        if (!ID) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        const fromCache = this.getFromCache(identity);
        if (fromCache && !identity.isOwner) return fromCache;
        const fromRemote = this.getFromRemote(identity);
        if (!identity.isOwner) {
            this.cache.set(ID, fromRemote);
        }
        return fromRemote;
    }
    __mergeSocialAddressesAll__(socialAddresses) {
        const accountGroups = (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(socialAddresses, (x)=>`${x.pluginID}_${x.address.toLowerCase()}`);
        const domainAddressTypes = [
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.ENS,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.SPACE_ID,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.ARBID,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.Lens,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.RSS3,
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .SocialAddressType */ .b.SOL
        ];
        return Object.entries(accountGroups).map(([, accounts])=>{
            const domainLabels = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(domainAddressTypes.map((x)=>accounts.find((y)=>y.type === x)?.label));
            const theFirstAccount = accounts[0];
            return {
                pluginID: theFirstAccount.pluginID,
                address: theFirstAccount.address,
                label: (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(domainLabels) || theFirstAccount.label,
                // The supportedChainIds support all chains by default. If not set value, should keep it.
                supportedChainIds: accounts.find((x)=>!x.chainId) ? undefined : (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(accounts.map((x)=>x.chainId))),
                supportedAddressTypes: (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(accounts.map((x)=>x.type))
            };
        });
    }
}


/***/ }),

/***/ 49374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ NetworkState)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60307);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17711);
/* harmony import */ var _Manager_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55949);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28129);




class NetworkState {
    context;
    options;
    /** default network can't be removed */ DEFAULT_NETWORK_ID;
    storage;
    networkID;
    network;
    networks;
    constructor(context, options){
        this.context = context;
        this.options = options;
        this.DEFAULT_NETWORK_ID = '1_ETH';
        this.storage = null;
        const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PersistentStorages */ ._H.Web3.createSubScope(`${this.options.pluginID}_Network`, {
            networkID: this.DEFAULT_NETWORK_ID,
            networks: {}
        });
        this.storage = storage;
        this.networkID = this.storage.networkID.subscription;
        this.networks = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mapSubscription */ .S3)(this.storage.networks.subscription, (storage)=>{
            // Newest to oldest
            const customizedNetworks = Object.values(storage).sort((a, z)=>z.createdAt.getTime() - a.createdAt.getTime());
            const registeredChains = (0,_Manager_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getRegisteredWeb3Chains */ .Bv)(this.options.pluginID);
            const registeredNetworks = (0,_Manager_index_js__WEBPACK_IMPORTED_MODULE_2__/* .getRegisteredWeb3Networks */ .Rm)(this.options.pluginID);
            return [
                ...registeredNetworks.filter((x)=>x.isMainnet).map((x)=>registeredChains.find((y)=>y.chainId === x.chainId)),
                ...customizedNetworks.map((x)=>({
                        ...x,
                        isCustomized: true
                    }))
            ];
        });
        this.network = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mergeSubscription */ .EB)(this.storage.networkID.subscription, this.storage.networks.subscription), ([networkID, networks])=>networks[networkID]);
    }
    get ready() {
        return this.storage.networkID.initialized && this.storage.networks.initialized;
    }
    get readyPromise() {
        return Promise.all([
            this.storage.networkID.initializedPromise,
            this.storage.networks.initializedPromise
        ]).then(()=>{});
    }
    assertNetwork(id) {
        const network = this.networks.getCurrentValue().find((x)=>x.ID === id);
        if (!network) throw new Error('Not a valid network ID.');
        return network;
    }
    async validateNetwork(network) {
        return true;
    }
    async pingNetwork(network) {
        return true;
    }
    async addNetwork(network) {
        const valid = await this.validateNetwork(network);
        if (!valid) throw new Error('Not a valid network.');
        const ID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
        const now = new Date();
        await this.storage.networks.setValue({
            ...this.storage.networks.value,
            [ID]: {
                ...network,
                ID,
                createdAt: now,
                updatedAt: now
            }
        });
    }
    async switchNetwork(id) {
        const network = this.assertNetwork(id);
        const valid = await this.pingNetwork(network);
        if (!valid) throw new Error('Cannot build connection with the network at this time, please try again later.');
        await this.storage.networkID.setValue(id);
    }
    async updateNetwork(id, updates) {
        const network = this.assertNetwork(id);
        await this.storage.networks.setValue({
            ...this.storage.networks.value,
            [id]: {
                ...network,
                ...updates,
                updatedAt: new Date()
            }
        });
    }
    async removeNetwork(id) {
        this.assertNetwork(id);
        // If remove current network, reset to default network
        if (id === this.networkID?.getCurrentValue()) {
            await this.switchNetwork(this.DEFAULT_NETWORK_ID);
        }
        await Promise.all([
            this.storage.networks.setValue((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this.storage.networks.value, id)),
            this.networkID?.getCurrentValue() === id ? await this.storage.networkID.setValue('') : Promise.resolve()
        ]);
    }
}


/***/ }),

/***/ 86039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ProviderState)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81755);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66651);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68422);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28129);



class ProviderState {
    context;
    site;
    account;
    chainId;
    networkType;
    providerType;
    constructor(context){
        this.context = context;
        this.site = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getSiteType */ .sv)();
        this.signWithPersona = context.signWithPersona;
    }
    signWithPersona;
    static createStorage(pluginID, defaultChainId, defaultProviderType) {
        const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .InMemoryStorages */ .uU.Web3.createSubScope(`${pluginID}_${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getSiteType */ .sv)() ?? 'Provider'}`, {
            account: {
                account: '',
                chainId: defaultChainId
            },
            providerType: defaultProviderType
        });
        return storage;
    }
    get ready() {
        return this.storage.account.initialized && this.storage.providerType.initialized;
    }
    get readyPromise() {
        return Promise.all([
            this.storage.account.initializedPromise,
            this.storage.providerType.initializedPromise
        ]).then(()=>{});
    }
    async setup() {
        await this.readyPromise;
        this.setupSubscriptions();
        this.setupProviders();
    }
    setupSubscriptions() {
        if (!this.site) return;
        this.chainId = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>account.chainId);
        this.account = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>account.account);
        this.networkType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>this.getNetworkTypeFromChainId(account.chainId));
        this.providerType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .mapSubscription */ .S3)(this.storage.providerType.subscription, (provider)=>provider);
    }
    setupProviders() {
        const providers = Object.entries(this.providers);
        providers.map(async ([providerType, provider])=>{
            try {
                await provider.readyPromise;
                if (!provider.ready) return;
            } catch  {
                return;
            }
            provider.emitter.on('chainId', async (chainId)=>{
                await this.setAccount(providerType, {
                    chainId: Number.parseInt(chainId, 16)
                });
            });
            provider.emitter.on('connect', async ({ account })=>{
                if (!this.isValidAddress(account)) return;
                // provider should update before account, otherwise account failed to update
                await this.setProvider(providerType);
                await this.setAccount(providerType, {
                    account
                });
            });
            provider.emitter.on('accounts', async (accounts)=>{
                const account = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(accounts);
                if (account && this.isValidAddress(account)) await this.setAccount(providerType, {
                    account
                });
            });
            provider.emitter.on('disconnect', async ()=>{
                await this.setAccount(providerType, {
                    account: '',
                    chainId: this.getDefaultChainId()
                });
                if (!this.site) return;
                await this.storage.providerType.setValue(this.getDefaultProviderType());
            });
            try {
                await provider.setup(this.context);
            } catch  {}
        });
    }
    // ignore setup errors
    async setAccount(providerType, account) {
        if (this.storage.providerType.value !== providerType) return;
        if (!this.site) return;
        const account_ = this.storage.account.value;
        const accountCopied = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(account);
        if (accountCopied.account !== '' && !this.isValidAddress(accountCopied.account)) delete accountCopied.account;
        if (accountCopied.chainId && !this.isValidChainId(accountCopied.chainId)) {
            accountCopied.chainId = this.getInvalidChainId();
        }
        const needToUpdateAccount = accountCopied.account === '' || !this.isSameAddress(account_.account, account.account);
        const needToUpdateChainId = accountCopied.chainId && account_.chainId !== accountCopied.chainId;
        if (needToUpdateAccount || needToUpdateChainId) {
            await this.storage.account.setValue({
                ...account_,
                ...accountCopied
            });
        }
    }
    async setProvider(providerType) {
        if (!this.site) return;
        if (this.storage.providerType.value !== providerType) {
            await this.storage.providerType.setValue(providerType);
        }
    }
    isReady(providerType) {
        return this.providers[providerType].ready;
    }
    untilReady(providerType) {
        return this.providers[providerType].readyPromise;
    }
    async connect(providerType, chainId, address, owner, silent) {
        const provider = this.providers[providerType];
        // compose the connection result
        const result = await provider.connect(chainId, address, owner, silent);
        // failed to connect provider
        if (!result.account) throw new Error('Failed to connect provider.');
        // switch the sub-network to the expected one
        if (chainId !== result.chainId && providerType !== 'WalletConnect') {
            await Promise.race([
                (async ()=>{
                    await (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .delay */ .gw)(30 * /* seconds */ 1000);
                    /* milliseconds */ throw new Error(`Timeout of switching chain to ${chainId}.`);
                })(),
                provider.switchChain(chainId)
            ]);
            result.chainId = chainId;
        }
        // update local storage
        await this.setProvider(providerType);
        await this.setAccount(providerType, result);
        provider.emitter.emit('connect', result);
        return result;
    }
    async disconnect(providerType) {
        const provider = this.providers[providerType];
        await provider.disconnect();
        // update local storage
        await this.setAccount(providerType, {
            account: ''
        });
        provider.emitter.emit('disconnect', providerType);
    }
}


/***/ }),

/***/ 49547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ SettingsState)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28129);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62649);


class SettingsState {
    options;
    storage;
    allowTestnet;
    currencyType;
    gasOptionType;
    fungibleAssetSourceType;
    nonFungibleAssetSourceType;
    constructor(context, options){
        this.options = options;
        this.storage = null;
        const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .InMemoryStorages */ .uU.Web3.createSubScope(`${this.options.pluginID}_Settings`, {
            currencyType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CurrencyType */ .V2.USD,
            gasOptionType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GasOptionType */ .Qd.NORMAL,
            fungibleAssetSourceType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.DeBank,
            nonFungibleAssetSourceType: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .SourceType */ .PO.OpenSea
        });
        this.storage = storage;
        this.allowTestnet = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createConstantSubscription */ .qY)("production" === 'development');
        this.currencyType = this.storage.currencyType.subscription;
        this.gasOptionType = this.storage.gasOptionType.subscription;
        this.fungibleAssetSourceType = this.storage.fungibleAssetSourceType.subscription;
        this.nonFungibleAssetSourceType = this.storage.nonFungibleAssetSourceType.subscription;
    }
    get ready() {
        return this.storage.currencyType.initialized && this.storage.gasOptionType.initialized && this.storage.fungibleAssetSourceType.initialized && this.storage.nonFungibleAssetSourceType.initialized;
    }
    get readyPromise() {
        return Promise.all([
            this.storage.currencyType.initializedPromise,
            this.storage.gasOptionType.initializedPromise,
            this.storage.fungibleAssetSourceType.initializedPromise,
            this.storage.nonFungibleAssetSourceType.initializedPromise
        ]).then(()=>{});
    }
    async setDefaultCurrencyType(currencyType) {
        await this.storage.currencyType.setValue(currencyType);
    }
}


/***/ }),

/***/ 47346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ TransactionState)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2574);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28129);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62649);


// address
class TransactionState {
    context;
    chainIds;
    subscriptions;
    options;
    static MAX_RECORD_SIZE = 20;
    storage;
    transactions;
    constructor(context, chainIds, subscriptions, options){
        this.context = context;
        this.chainIds = chainIds;
        this.subscriptions = subscriptions;
        this.options = options;
        this.storage = null;
        const { storage } = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PersistentStorages */ ._H.Web3.createSubScope(`${this.options.pluginID}_Transaction`, {
            value: Object.fromEntries(chainIds.map((x)=>[
                    x,
                    {}
                ]))
        });
        this.storage = storage.value;
        if (this.subscriptions.chainId && this.subscriptions.account) {
            this.transactions = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mergeSubscription */ .EB)(this.subscriptions.chainId, this.subscriptions.account, this.storage.subscription), ([chainId, account, transactionStorage])=>{
                if (!this.options.isValidChainId(chainId)) return [];
                return transactionStorage[chainId]?.[this.options.formatAddress(account)] ?? [];
            });
        }
    }
    get ready() {
        return this.storage.initialized;
    }
    get readyPromise() {
        return this.storage.initializedPromise;
    }
    async getTransaction(chainId, address, id) {
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        for (const recentTransaction of all[chainId]?.[address_] ?? []){
            for (const [id_, transaction] of Object.entries(recentTransaction.candidates)){
                if (id_ === id) return transaction;
            }
        }
        return;
    }
    async addTransaction(chainId, address, id, transaction) {
        const now = new Date();
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        // to ensure that the transaction doesn't exist
        const transaction_ = all[chainId]?.[address_]?.find((x)=>Object.keys(x.candidates).includes(id));
        if (transaction_) return;
        const transactions = [
            // new records go first then we will remove it last
            {
                id,
                indexId: id,
                chainId,
                draftedAt: transaction.draftedAt,
                createdAt: now,
                updatedAt: now,
                status: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__.TransactionStatusType.NOT_DEPEND,
                candidates: {
                    [id]: transaction
                }
            },
            ...all[chainId]?.[address_] ?? []
        ];
        await this.storage.setValue({
            ...all,
            [chainId]: {
                ...all[chainId],
                [address_]: transactions.slice(0, TransactionState.MAX_RECORD_SIZE)
            }
        });
    }
    async replaceTransaction(chainId, address, id, newId, transaction) {
        const now = new Date();
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        // to ensure that the transaction exists
        const transaction_ = all[chainId]?.[address_]?.find((x)=>Object.keys(x.candidates).includes(id));
        if (!transaction_) return;
        const transactions = (all[chainId]?.[address_] ?? []).map((x)=>Object.keys(x.candidates).includes(id) ? {
                ...x,
                indexId: newId,
                candidates: {
                    ...x.candidates,
                    [newId]: transaction
                },
                updatedAt: now
            } : x);
        await this.storage.setValue({
            ...all,
            [chainId]: {
                ...all[chainId],
                [address_]: transactions
            }
        });
    }
    async updateTransaction(chainId, address, id, status) {
        const now = new Date();
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        // to ensure that the transaction exists
        const transaction_ = all[chainId]?.[address_]?.find((x)=>Object.keys(x.candidates).includes(id));
        if (!transaction_) return;
        const transactions = (all[chainId]?.[address_] ?? []).map((x)=>Object.keys(x.candidates).includes(id) ? {
                ...x,
                indexId: id,
                status,
                updatedAt: now
            } : x);
        await this.storage.setValue({
            ...all,
            [chainId]: {
                ...all[chainId],
                [address_]: transactions
            }
        });
    }
    async removeTransaction(chainId, address, id) {
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        await this.storage.setValue({
            ...all,
            [chainId]: {
                ...all[chainId],
                [address_]: all[chainId]?.[address_]?.filter((x)=>!Object.keys(x.candidates).includes(id))
            }
        });
    }
    async getTransactions(chainId, address) {
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        return all[chainId]?.[address_] ?? [];
    }
    async clearTransactions(chainId, address) {
        const all = this.storage.value;
        const address_ = this.options.formatAddress(address);
        await this.storage.setValue({
            ...all,
            [chainId]: {
                ...all[chainId],
                [address_]: []
            }
        });
    }
}


/***/ }),

/***/ 39850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Web3StateRef: () => (/* binding */ Web3StateRef),
/* harmony export */   createEVMState: () => (/* binding */ createEVMState)
/* harmony export */ });
/* harmony import */ var _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61518);
/* harmony import */ var _state_RiskWarning_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18515);
/* harmony import */ var _state_Token_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41676);
/* harmony import */ var _state_Transaction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71450);
/* harmony import */ var _state_NameService_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52202);
/* harmony import */ var _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48702);
/* harmony import */ var _state_Settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90021);
/* harmony import */ var _state_TransactionFormatter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40290);
/* harmony import */ var _state_TransactionWatcher_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40306);
/* harmony import */ var _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82150);
/* harmony import */ var _state_BalanceNotifier_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57921);
/* harmony import */ var _state_BlockNumberNotifier_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33085);
/* harmony import */ var _state_Message_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14962);
/* harmony import */ var _state_Network_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29968);
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);















const Web3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .evm */ .oN.state;
    }
};
async function createEVMState(context) {
    const Provider_ = await _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__/* .Provider */ .z.new(context);
    const Transaction_ = new _state_Transaction_js__WEBPACK_IMPORTED_MODULE_2__/* .Transaction */ .Y(context, {
        chainId: Provider_.chainId,
        account: Provider_.account
    });
    return {
        Settings: new _state_Settings_js__WEBPACK_IMPORTED_MODULE_3__/* .Settings */ .Z(context),
        Provider: Provider_,
        BalanceNotifier: new _state_BalanceNotifier_js__WEBPACK_IMPORTED_MODULE_4__/* .BalanceNotifier */ .s(),
        BlockNumberNotifier: new _state_BlockNumberNotifier_js__WEBPACK_IMPORTED_MODULE_5__/* .BlockNumberNotifier */ .n(),
        Network: new _state_Network_js__WEBPACK_IMPORTED_MODULE_6__/* .Network */ .Z(context),
        AddressBook: new _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_7__/* .AddressBook */ .o(context),
        IdentityService: new _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_8__/* .IdentityService */ .P(context),
        NameService: new _state_NameService_js__WEBPACK_IMPORTED_MODULE_9__/* .NameService */ .o(context),
        RiskWarning: new _state_RiskWarning_js__WEBPACK_IMPORTED_MODULE_10__/* .RiskWarning */ .q(context, {
            account: Provider_.account
        }),
        Message: new _state_Message_js__WEBPACK_IMPORTED_MODULE_11__/* .Message */ .v(context),
        Token: new _state_Token_js__WEBPACK_IMPORTED_MODULE_12__/* .Token */ .W(context, {
            account: Provider_.account,
            chainId: Provider_.chainId
        }),
        Transaction: Transaction_,
        TransactionFormatter: new _state_TransactionFormatter_js__WEBPACK_IMPORTED_MODULE_13__/* .TransactionFormatter */ .$(context),
        TransactionWatcher: new _state_TransactionWatcher_js__WEBPACK_IMPORTED_MODULE_14__/* .TransactionWatcher */ .F(context, {
            chainId: Provider_.chainId,
            transactions: Transaction_.transactions
        })
    };
}


/***/ }),

/***/ 61518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ AddressBook)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65327);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41487);
/* harmony import */ var _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81113);




class AddressBook extends _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__/* .AddressBookState */ .C {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_EVM,
            isValidAddress: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At,
            isSameAddress: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W,
            formatAddress: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .formatEthereumAddress */ .j8
        });
    }
}


/***/ }),

/***/ 57921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ BalanceNotifier)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(93441);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/BalanceNotifier.ts

class BalanceNotifierState {
    emitter = new dist/* Emitter */.Q5();
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/BalanceNotifier.ts

class BalanceNotifier extends BalanceNotifierState {
}


/***/ }),

/***/ 33085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ BlockNumberNotifier)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(93441);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/BlockNumberNotifier.ts

class BlockNumberNotifierState {
    emitter = new dist/* Emitter */.Q5();
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/BlockNumberNotifier.ts

class BlockNumberNotifier extends BlockNumberNotifierState {
}


/***/ }),

/***/ 82150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ IdentityService)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/createLookupTableResolver.ts
var createLookupTableResolver = __webpack_require__(74170);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/Base/state/Identity.ts
var Identity = __webpack_require__(97627);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ConnectionReadonlyAPI.ts + 2 modules
var ConnectionReadonlyAPI = __webpack_require__(3543);
;// CONCATENATED MODULE: ./packages/web3-providers/src/types/MaskX.ts
var MaskX_BaseAPI; // internal uuid
 // an EVM EOA
 // data source
 // timestamp in milliseconds
 // timestamp in milliseconds
(function(MaskX_BaseAPI) {
    let PlatformType;
    (function(PlatformType) {
        PlatformType["Ethereum"] = 'eth';
        PlatformType["Twitter"] = 'twitter';
    })(PlatformType = MaskX_BaseAPI.PlatformType || (MaskX_BaseAPI.PlatformType = {}));
    let SourceType;
    (function(SourceType) {
        SourceType["CyberConnect"] = 'cyber';
        SourceType["Firefly"] = 'firefly';
        SourceType["OpenSea"] = 'opensea';
        SourceType["Sybil"] = 'sybil';
        SourceType["Uniswap"] = 'uniswap';
        SourceType["Leaderboard"] = 'ethLeaderboard';
        SourceType["RSS3"] = 'rss3';
        SourceType["HandWriting"] = 'hand_writing';
        SourceType["TwitterHexagon"] = 'twitter_hexagon';
    })(SourceType = MaskX_BaseAPI.SourceType || (MaskX_BaseAPI.SourceType = {}));
})(MaskX_BaseAPI || (MaskX_BaseAPI = {}));

// EXTERNAL MODULE: ./packages/web3-providers/src/ARBID/index.ts
var ARBID = __webpack_require__(92524);
// EXTERNAL MODULE: ./packages/web3-providers/src/ENS/index.ts + 3 modules
var ENS = __webpack_require__(68513);
// EXTERNAL MODULE: ./packages/web3-providers/src/Firefly/index.ts
var Firefly = __webpack_require__(87904);
// EXTERNAL MODULE: ./packages/web3-providers/src/Lens/index.ts + 1 modules
var Lens = __webpack_require__(58291);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/web3-providers/src/MaskX/constants.ts
/* cspell:disable-next-line */ const MASK_X_ROOT_URL = 'https://a8fq5hs9nk.execute-api.us-east-1.amazonaws.com/';
const MASK_X_DEFAULT_PAGINATION = {
    size: 20,
    page: 1
};

// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/web3-providers/src/MaskX/index.ts





class MaskX_API {
    async fetchFromMaskX(pathname) {
        return (0,fetchJSON/* fetchCachedJSON */.MP)((0,dist/* default */.ZP)(MASK_X_ROOT_URL, pathname));
    }
    getOptions({ size = 20, page = 1 } = MASK_X_DEFAULT_PAGINATION) {
        return {
            size,
            page
        };
    }
    async getRNSIdentity(identity) {
        const handle = identity.sns_handle.toLowerCase();
        if (handle.endsWith('.rss3')) {
            return {
                ...identity,
                sns_handle: handle
            };
        }
        return identity;
    }
    async getResponse(response) {
        const allSettled = await Promise.allSettled(response.records.map(async (x)=>{
            switch(x.source){
                case MaskX_BaseAPI.SourceType.RSS3:
                    return this.getRNSIdentity(x);
                default:
                    return x;
            }
        }));
        return {
            ...response,
            records: (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : undefined))
        };
    }
    async getIdentitiesExact(handle, platform, initial = {
        size: 20,
        page: 1
    }) {
        const response = await this.fetchFromMaskX((0,dist/* default */.ZP)('/prod/identity', {
            identity: handle,
            platform,
            ...this.getOptions(initial)
        }));
        return this.getResponse(response);
    }
    async getIdentitiesFuzzy(handle, platform, initial = {
        size: 20,
        page: 1
    }) {
        const response = await this.fetchFromMaskX((0,dist/* default */.ZP)('/prod/identity/search', {
            identity: handle,
            platform,
            ...this.getOptions(initial)
        }));
        return this.getResponse(response);
    }
    async getAllIdentities(initial = {
        size: 20,
        page: 1
    }) {
        const response = await this.fetchFromMaskX((0,dist/* default */.ZP)('/prod/identity/all', this.getOptions(initial)));
        return this.getResponse(response);
    }
}
const MaskX = new MaskX_API();

// EXTERNAL MODULE: ./packages/web3-providers/src/NextID/proof.ts + 2 modules
var proof = __webpack_require__(63544);
// EXTERNAL MODULE: ./packages/web3-providers/src/RSS3/apis/RSS3API.ts + 1 modules
var RSS3API = __webpack_require__(23516);
// EXTERNAL MODULE: ./packages/web3-providers/src/SpaceID/index.ts
var SpaceID = __webpack_require__(60531);
// EXTERNAL MODULE: ./packages/web3-providers/src/Twitter/index.ts + 12 modules
var Twitter = __webpack_require__(26854);
// EXTERNAL MODULE: ./packages/web3-providers/src/NextID/kv.ts
var kv = __webpack_require__(93293);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/IdentityService.ts
















const ENS_RE = /[^\s()[\]]{1,256}\.(eth|kred|xyz|luxe)\b/gi;
const SID_RE = /[^\s()[\]]{1,256}\.bnb\b/gi;
const ARBID_RE = /[^\s()[\]]{1,256}\.arb\b/gi;
const ADDRESS_FULL = /0x\w{40,}/i;
const CROSSBELL_HANDLE_RE = /[\w.]+\.csb/gi;
const LENS_RE = /[^\s()[\]]{1,256}\.lens\b/i;
const LENS_URL_RE = /https?:\/\/.+\/(\w+\.lens)/;
function getENSNames(userId, nickname, bio) {
    return [
        userId.match(ENS_RE),
        nickname.match(ENS_RE),
        bio.match(ENS_RE)
    ].flatMap((result)=>result ?? []);
}
function getLensNames(nickname, bio, homepage) {
    const homepageNames = homepage.match(LENS_URL_RE)?.[1];
    const names = [
        nickname.match(LENS_RE),
        bio.match(LENS_RE)
    ].map((result)=>result?.[0] ?? '');
    return [
        ...names,
        homepageNames
    ].filter(Boolean);
}
function getARBIDNames(userId, nickname, bio) {
    return [
        userId.match(ARBID_RE),
        nickname.match(ARBID_RE),
        bio.match(ARBID_RE)
    ].flatMap((result)=>result ?? []);
}
function getSIDNames(userId, nickname, bio) {
    return [
        userId.match(SID_RE),
        nickname.match(SID_RE),
        bio.match(SID_RE)
    ].flatMap((result)=>result || []).map((x)=>x.toLowerCase());
}
function getCrossBellHandles(nickname, bio) {
    return [
        nickname.match(CROSSBELL_HANDLE_RE),
        bio.match(CROSSBELL_HANDLE_RE)
    ].flatMap((result)=>result || []).map((x)=>x.toLowerCase());
}
function getAddress(text) {
    const [matched] = text.match(ADDRESS_FULL) ?? [];
    if (matched && (0,helpers_address/* isValidAddress */.At)(matched)) return matched;
    return;
}
function getNextIDPlatform() {
    if (Sniffings/* Sniffings */.Y.is_twitter_page) return types/* NextIDPlatform */.V.Twitter;
    return;
}
async function getWalletAddressesFromNextID({ identifier, publicKey }) {
    if (!identifier?.userId) return constants/* EMPTY_LIST */.rP;
    const platform = getNextIDPlatform();
    if (!platform) return constants/* EMPTY_LIST */.rP;
    const latestActivatedBinding = await proof/* NextIDProof */.q.queryLatestBindingByPlatform(platform, identifier.userId, publicKey);
    if (!latestActivatedBinding) return constants/* EMPTY_LIST */.rP;
    return latestActivatedBinding.proofs.filter((x)=>x.platform === types/* NextIDPlatform */.V.Ethereum && (0,helpers_address/* isValidAddress */.At)(x.identity));
}
const resolveMaskXAddressType = (0,createLookupTableResolver/* createLookupTableResolver */.F)({
    [MaskX_BaseAPI.SourceType.CyberConnect]: SocialIdentity/* SocialAddressType */.b.CyberConnect,
    [MaskX_BaseAPI.SourceType.Firefly]: SocialIdentity/* SocialAddressType */.b.Firefly,
    [MaskX_BaseAPI.SourceType.HandWriting]: SocialIdentity/* SocialAddressType */.b.Firefly,
    [MaskX_BaseAPI.SourceType.Leaderboard]: SocialIdentity/* SocialAddressType */.b.Leaderboard,
    [MaskX_BaseAPI.SourceType.OpenSea]: SocialIdentity/* SocialAddressType */.b.OpenSea,
    [MaskX_BaseAPI.SourceType.Sybil]: SocialIdentity/* SocialAddressType */.b.Sybil,
    [MaskX_BaseAPI.SourceType.Uniswap]: SocialIdentity/* SocialAddressType */.b.Sybil,
    [MaskX_BaseAPI.SourceType.RSS3]: SocialIdentity/* SocialAddressType */.b.RSS3,
    [MaskX_BaseAPI.SourceType.TwitterHexagon]: SocialIdentity/* SocialAddressType */.b.TwitterBlue
}, (x)=>{
    throw new Error(`Unknown source type: ${x}`);
});
class IdentityService extends Identity/* IdentityServiceState */.O {
    context;
    Web3;
    constructor(context){
        super();
        this.context = context;
        this.Web3 = new ConnectionReadonlyAPI/* ConnectionReadonlyAPI */.S();
    }
    createSocialAddress(type, address, label = '', chainId, updatedAt, createdAt, verified) {
        if ((0,helpers_address/* isValidAddress */.At)(address) && !(0,helpers_address/* isZeroAddress */.uO)(address)) {
            return {
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                chainId,
                type,
                label,
                address,
                updatedAt,
                createdAt,
                verified
            };
        }
        return;
    }
    /** Read a social address from bio. */ async getSocialAddressFromBio({ bio = '' }) {
        const address = getAddress(bio);
        if (!address) return;
        return this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Address, address);
    }
    /** Read a social address from bio when it contains a csb handle. */ async getSocialAddressFromCrossbell({ nickname = '', bio = '' }) {
        const handles = getCrossBellHandles(nickname, bio);
        if (!handles.length) return;
        const allSettled = await Promise.allSettled(handles.map(async (handle)=>{
            const info = await RSS3API/* RSS3 */.S.getNameInfo(handle);
            if (!info?.crossbell) return;
            return this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Crossbell, info.address, info.crossbell);
        }));
        return (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    /** Read a social address from avatar NextID storage. */ async getSocialAddressFromAvatarNextID({ identifier, publicKey }) {
        const userId = identifier?.userId;
        if (!userId || !publicKey) return;
        const response = await kv/* NextIDStorageProvider */.H.getByIdentity(publicKey, types/* NextIDPlatform */.V.Twitter, userId.toLowerCase(), PluginID/* PluginID */.P.Avatar);
        if (!response.isOk() || !response.value.ownerAddress) return;
        return this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Mask, response.value.ownerAddress);
    }
    /** Read a social address from NextID. */ async getSocialAddressesFromNextID(identity) {
        const listOfAddress = await getWalletAddressesFromNextID(identity);
        return (0,compact/* default */.Z)(listOfAddress.map((x)=>this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.NEXT_ID, x.identity, '', undefined, x.latest_checked_at, x.created_at)));
    }
    /** Read a social address from nickname, bio if them contain a ENS. */ async getSocialAddressFromENS({ identifier, nickname = '', bio = '' }) {
        const names = getENSNames(identifier?.userId ?? '', nickname, bio);
        if (!names.length) return;
        const allSettled = await Promise.allSettled(names.map(async (name)=>{
            const address = await ENS/* ENS */.n.lookup(name);
            if (!address) return;
            return [
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.ENS, address, name),
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Address, address, name)
            ];
        }));
        return (0,compact/* default */.Z)(allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    async getSocialAddressFromARBID({ identifier, nickname = '', bio = '' }) {
        const names = getARBIDNames(identifier?.userId ?? '', nickname, bio);
        if (!names.length) return;
        const allSettled = await Promise.allSettled(names.map(async (name)=>{
            const address = await ARBID/* ARBID */.R.lookup(name);
            if (!address) return;
            return [
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.ARBID, address, name, src_types/* ChainId */.a_.Arbitrum),
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Address, address, name, src_types/* ChainId */.a_.Arbitrum)
            ];
        }));
        return (0,compact/* default */.Z)(allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    async getSocialAddressFromSpaceID({ identifier, nickname = '', bio = '' }) {
        const names = getSIDNames(identifier?.userId ?? '', nickname, bio);
        if (!names.length) return;
        const allSettled = await Promise.allSettled(names.map(async (name)=>{
            const address = await SpaceID/* SpaceID */.i.lookup(name);
            if (!address) return;
            return [
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.SPACE_ID, address, name, src_types/* ChainId */.a_.BSC),
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Address, address, name, src_types/* ChainId */.a_.BSC)
            ];
        }));
        return (0,compact/* default */.Z)(allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    async getSocialAddressFromLens({ nickname = '', bio = '', homepage = '' }) {
        const names = getLensNames(nickname, bio, homepage);
        if (!names.length) return;
        const allSettled = await Promise.allSettled(names.map(async (name)=>{
            const profile = await Lens/* Lens */.R.getProfileByHandle(name);
            if (!profile) return;
            return [
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Lens, profile.ownedBy, name),
                this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.Address, profile.ownedBy, name)
            ];
        }));
        return (0,compact/* default */.Z)(allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    /** Read a social address from Twitter Blue. */ async getSocialAddressFromTwitterBlue({ identifier }) {
        const userId = identifier?.userId;
        if (!userId) return;
        const response = await Twitter/* Twitter */.t.getUserNftContainer(userId);
        if (!response) return;
        const ownerAddress = await this.Web3.getNonFungibleTokenOwner(response.address, response.token_id, undefined, {
            chainId: src_types/* ChainId */.a_.Mainnet
        });
        if (!ownerAddress || !(0,helpers_address/* isValidAddress */.At)(ownerAddress)) return;
        return this.createSocialAddress(SocialIdentity/* SocialAddressType */.b.TwitterBlue, ownerAddress, undefined, undefined, undefined, undefined, true);
    }
    /** Read social addresses from MaskX */ async getSocialAddressesFromMaskX({ identifier }) {
        const userId = identifier?.userId;
        if (!userId) return;
        const response = await MaskX.getIdentitiesExact(userId, MaskX_BaseAPI.PlatformType.Twitter);
        const results = response.records.filter((x)=>{
            if (!(0,helpers_address/* isValidAddress */.At)(x.web3_addr) || !x.is_verified) return false;
            try {
                // detect if a valid data source
                resolveMaskXAddressType(x.source);
                return true;
            } catch  {
                return false;
            }
        });
        const allSettled = await Promise.allSettled(results.map(async (y)=>{
            try {
                const name = await ENS/* ENS */.n.reverse(y.web3_addr);
                return this.createSocialAddress(resolveMaskXAddressType(y.source), y.web3_addr, name);
            } catch  {
                return this.createSocialAddress(resolveMaskXAddressType(y.source), y.web3_addr);
            }
        }));
        return (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : undefined));
    }
    async getFromRemote(identity, includes) {
        const socialAddressFromMaskX = this.getSocialAddressesFromMaskX(identity);
        const socialAddressFromNextID = this.getSocialAddressesFromNextID(identity);
        const allSettled = await Promise.allSettled([
            this.getSocialAddressFromBio(identity),
            this.getSocialAddressFromENS(identity),
            this.getSocialAddressFromSpaceID(identity),
            this.getSocialAddressFromARBID(identity),
            this.getSocialAddressFromAvatarNextID(identity),
            this.getSocialAddressFromCrossbell(identity),
            this.getSocialAddressFromTwitterBlue(identity),
            socialAddressFromNextID,
            socialAddressFromMaskX,
            this.getSocialAddressFromLens(identity)
        ]);
        const identities_ = (0,compact/* default */.Z)(allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []));
        const identities = (0,uniqBy/* default */.Z)(identities_, (x)=>[
                x.type,
                x.label,
                x.address.toLowerCase()
            ].join('_'));
        const identitiesFromNextID = await socialAddressFromNextID;
        const handle = identity.identifier?.userId;
        const verifiedResult = await Promise.allSettled((0,uniqBy/* default */.Z)(identities, (x)=>x.address.toLowerCase()).map(async (x)=>{
            const address = x.address.toLowerCase();
            if (x.verified) return address;
            const isReliable = await Firefly/* Firefly */.E.verifyTwitterHandleByAddress(address, handle);
            return isReliable ? address : null;
        }));
        const trustedAddresses = (0,compact/* default */.Z)(verifiedResult.map((x)=>x.status === 'fulfilled' ? x.value : null));
        return identities.filter((x)=>trustedAddresses.includes(x.address.toLowerCase()) || x.type === SocialIdentity/* SocialAddressType */.b.Address).concat(identitiesFromNextID);
    }
}


/***/ }),

/***/ 14962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ Message)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omitBy.js + 1 modules
var omitBy = __webpack_require__(72802);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/Histories/Popups.ts
var Popups = __webpack_require__(91115);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/PayloadEditor.ts + 1 modules
var PayloadEditor = __webpack_require__(61227);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/createJsonRpcPayload.ts
var createJsonRpcPayload = __webpack_require__(83135);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ErrorEditor.ts
var ErrorEditor = __webpack_require__(40225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@walletconnect+utils@2.7.3/node_modules/@walletconnect/utils/dist/index.es.js
var index_es = __webpack_require__(97609);
// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(60307);
// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/Message.ts



class MessageState {
    context;
    options;
    storage;
    messages;
    constructor(context, options){
        this.context = context;
        this.options = options;
        this.storage = null;
        const { storage } = KVStorage/* PersistentStorages */._H.Web3.createSubScope(`${this.options.pluginID}_Message`, {
            messages: {}
        });
        this.storage = storage;
        this.messages = (0,subscription/* mapSubscription */.S3)(this.storage.messages.subscription, (storage)=>{
            return Object.values(storage).filter((x)=>x.state === specs/* MessageStateType */.Rq.NOT_DEPEND).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime());
        });
    }
    get ready() {
        return this.storage.messages.initialized;
    }
    get readyPromise() {
        return this.storage.messages.initializedPromise;
    }
    assertMessage(id) {
        const message = this.storage.messages.value[id];
        if (!message) throw new Error('Invalid message ID');
        return message;
    }
    async validateMessage(message) {
        return true;
    }
    async waitForApprovingRequest(id) {
        return new Promise((resolve, reject)=>{
            const observe = ()=>{
                const message = this.storage.messages.value[id];
                if (message) {
                    // not a state to be resolved
                    if (message.state === specs/* MessageStateType */.Rq.NOT_DEPEND) return;
                    if (message.state === specs/* MessageStateType */.Rq.APPROVED) resolve(message);
                    else reject(new Error('User rejected the message.'));
                } else {
                    reject(new Error('Invalid request ID'));
                }
                unsubscribe();
            };
            const unsubscribe = this.storage.messages.subscription.subscribe(observe);
            observe();
        });
    }
    async applyRequest(message) {
        await this.validateMessage(message);
        const ID = (0,v4/* default */.Z)();
        const now = new Date();
        const message_ = {
            ...message,
            ID,
            state: specs/* MessageStateType */.Rq.NOT_DEPEND,
            createdAt: now,
            updatedAt: now
        };
        await this.storage.messages.setValue(Object.fromEntries([
            ...Object.entries(this.storage.messages.value).filter(// remove those resolved messages
            ([_, message])=>message.state === specs/* MessageStateType */.Rq.NOT_DEPEND),
            [
                ID,
                message_
            ]
        ]));
        return message_;
    }
    async applyAndWaitResponse(message) {
        const { ID } = await this.applyRequest(message);
        const reasonableMessage = await this.waitForApprovingRequest(ID);
        if (!reasonableMessage.response) throw new Error('Invalid response');
        return reasonableMessage;
    }
    async updateMessage(id, updates) {
        const message = this.assertMessage(id);
        await this.storage.messages.setValue({
            ...this.storage.messages.value,
            [id]: {
                ...message,
                ...updates,
                updatedAt: new Date()
            }
        });
    }
    async approveRequest(id, updates) {
        const message = this.assertMessage(id);
        await this.updateMessage(id, {
            request: {
                ...message.request,
                ...updates
            },
            state: specs/* MessageStateType */.Rq.APPROVED
        });
    }
    async denyRequest(id) {
        await this.updateMessage(id, {
            state: specs/* MessageStateType */.Rq.DENIED
        });
    }
    async denyAllRequests() {
        await this.storage.messages.setValue(Object.fromEntries(Object.entries(this.storage.messages.value).map(([id, message])=>[
                id,
                {
                    ...message,
                    state: message.state === specs/* MessageStateType */.Rq.NOT_DEPEND ? specs/* MessageStateType */.Rq.DENIED : message.state
                }
            ])));
    }
}

// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ConnectionReadonlyAPI.ts + 2 modules
var ConnectionReadonlyAPI = __webpack_require__(3543);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/Message.ts








class Message extends MessageState {
    Web3 = new ConnectionReadonlyAPI/* ConnectionReadonlyAPI */.S();
    constructor(context){
        super(context, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
        });
    }
    resolveRequest(request, updates) {
        return {
            arguments: updates?.arguments ? {
                ...request.arguments,
                ...updates.arguments
            } : request.arguments,
            options: updates?.options ? {
                ...request.options,
                ...updates.options
            } : request.options
        };
    }
    async updateRequest(request_, updates) {
        const request = this.resolveRequest(request_, updates);
        const { method, chainId, config } = PayloadEditor/* PayloadEditor */._.fromMethod(request.arguments.method, request.arguments.params);
        if (method !== types/* EthereumMethodType */.W8.ETH_SEND_TRANSACTION) return request;
        // recheck the nonce and update it if needed before sending with the transaction
        if (config.from && typeof config.nonce !== 'undefined') {
            const nonce = await this.Web3.getTransactionNonce(config.from, {
                chainId
            });
            if (nonce > config.nonce) {
                request.arguments.params = [
                    {
                        ...config,
                        nonce
                    }
                ];
            }
        }
        return request;
    }
    async waitForApprovingRequest(id) {
        const { request } = this.assertMessage(id);
        if (request.options.silent) {
            await this.approveRequest(id);
        } else {
            // TODO: make this for Mask Wallet only
            const hasPassword = await this.context.hasPaymentPassword();
            const route = !hasPassword ? Routes/* PopupRoutes */.mZ.SetPaymentPassword : Routes/* PopupRoutes */.mZ.ContractInteraction;
            const fromState = route !== Routes/* PopupRoutes */.mZ.ContractInteraction ? {
                from: Routes/* PopupRoutes */.mZ.ContractInteraction
            } : constants/* EMPTY_OBJECT */.Nu;
            if (Sniffings/* Sniffings */.Y.is_popup_page && !location.hash.includes('/swap')) {
                Popups/* PopupsHistory */.j.push((0,dist/* default */.ZP)(Routes/* PopupRoutes */.mZ.Wallet, fromState));
            } else {
                // open the popups window and wait for approval from the user.
                await this.context.openPopupWindow(route, {
                    source: location.origin,
                    ...fromState
                });
            }
        }
        return super.waitForApprovingRequest(id);
    }
    async approveRequest(id, updates) {
        const { request: request_ } = this.assertMessage(id);
        const request = await this.updateRequest(request_, updates);
        const response = await this.context.send((0,createJsonRpcPayload/* createJsonRpcPayload */.B)(0, request.arguments), (0,omitBy/* default */.Z)(request.options, index_es/* isUndefined */.o8));
        const error = ErrorEditor/* ErrorEditor */.Q.from(null, response);
        if (error.presence) return;
        await this.updateMessage(id, {
            request,
            response,
            state: specs/* MessageStateType */.Rq.APPROVED
        });
        // deny all requests after approving one
        await this.denyAllRequests();
        return response;
    }
}


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: () => (/* binding */ NameService_NameService)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/shared-base/src/types/NameService.ts
var NameService = __webpack_require__(91461);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/attemptUntil.ts
var attemptUntil = __webpack_require__(92358);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/NameService.ts



class NameServiceState {
    context;
    options;
    storage;
    constructor(context, options){
        this.context = context;
        this.options = options;
        this.storage = null;
        const { storage } = KVStorage/* InMemoryStorages */.uU.Web3.createSubScope(`${this.options.pluginID}_NameServiceV2`, {
            value: Object.fromEntries((0,esm/* getEnumAsArray */.Yl)(NameService/* NameServiceID */.S).map((x)=>[
                    x.value,
                    {}
                ]))
        });
        this.storage = storage.value;
    }
    get ready() {
        return this.storage.initialized;
    }
    get readyPromise() {
        return this.storage.initializedPromise;
    }
    async addName(id, address, name) {
        if (!this.options.isValidAddress(address)) return;
        const all = this.storage.value;
        const formattedAddress = this.options.formatAddress(address);
        await this.storage.setValue({
            ...all,
            [id]: {
                ...all[id],
                [formattedAddress]: name,
                [name]: formattedAddress
            }
        });
    }
    async addAddress(id, name, address) {
        if (!this.options.isValidAddress(address)) return;
        const all = this.storage.value;
        const formattedAddress = this.options.formatAddress(address);
        await this.storage.setValue({
            ...all,
            [id]: {
                ...all[id],
                [name]: formattedAddress,
                [formattedAddress]: name
            }
        });
    }
    async lookup(name) {
        if (!name) return;
        const callbacks = this.createResolvers().map((resolver)=>{
            return async ()=>{
                const address = this.storage.value[resolver.id][name] || await resolver.lookup?.(name);
                if (address && this.options.isValidAddress(address)) {
                    const formattedAddress = this.options.formatAddress(address);
                    await this.addAddress(resolver.id, name, formattedAddress);
                    return formattedAddress;
                }
                return;
            };
        });
        return (0,attemptUntil/* attemptUntil */.C)(callbacks, undefined, ()=>false);
    }
    async reverse(address, domainOnly) {
        if (!this.options.isValidAddress(address)) return;
        const callbacks = this.createResolvers(domainOnly).map((resolver)=>{
            return async ()=>{
                let name = this.storage.value[resolver.id][this.options.formatAddress(address)];
                if (!name) name = await resolver.reverse?.(address);
                if (name) {
                    await this.addName(resolver.id, address, name);
                    return name;
                }
                return;
            };
        });
        return (0,attemptUntil/* attemptUntil */.C)(callbacks, undefined, (result)=>!result);
    }
    async safeReverse(address, domainOnly) {
        try {
            return await this.reverse(address, domainOnly);
        } catch  {}
        return;
    }
    createResolvers(domainOnly) {
        throw new Error('Method not implemented.');
    }
}

// EXTERNAL MODULE: ./packages/web3-providers/src/ENS/index.ts + 3 modules
var ENS = __webpack_require__(68513);
// EXTERNAL MODULE: ./packages/web3-providers/src/SpaceID/index.ts
var SpaceID = __webpack_require__(60531);
// EXTERNAL MODULE: ./packages/web3-providers/src/Lens/index.ts + 1 modules
var Lens = __webpack_require__(58291);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/NameService.ts






class NameService_NameService extends NameServiceState {
    constructor(context){
        super(context, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            isValidName: (x)=>x !== '0x',
            isValidAddress: (x)=>(0,address/* isValidAddress */.At)(x) && !(0,address/* isZeroAddress */.uO)(x),
            formatAddress: formatter/* formatEthereumAddress */.j8
        });
    }
    createResolvers(domainOnly) {
        if (domainOnly) return [
            ENS/* ENS */.n,
            SpaceID/* SpaceID */.i
        ];
        return [
            ENS/* ENS */.n,
            SpaceID/* SpaceID */.i,
            Lens/* Lens */.R
        ];
    }
}


/***/ }),

/***/ 29968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Network)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/Base/state/Network.ts
var state_Network = __webpack_require__(49374);
// EXTERNAL MODULE: ./node_modules/.pnpm/zod@3.22.2/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(82738);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameURL.ts
var isSameURL = __webpack_require__(76423);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/schemas/ChainDescriptor.ts


function createSchema(descriptors) {
    return lib.z.object({
        type: lib.z.string(),
        chainId: lib.z.number().int().gt(0, {
            message: 'Incorrect chain Id.'
        }),
        coinMarketCapChainId: lib.z.string().optional(),
        coinGeckoChainId: lib.z.string().optional(),
        coinGeckoPlatformId: lib.z.string().optional(),
        name: lib.z.string().trim().nonempty(),
        color: lib.z.string().optional(),
        fullName: lib.z.string().trim().optional(),
        shortName: lib.z.string().trim().optional(),
        network: lib.z.union([
            lib.z.literal('mainnet'),
            lib.z.literal('testnet')
        ]),
        nativeCurrency: lib.z.object({
            name: lib.z.string(),
            symbol: lib.z.string(),
            decimals: lib.z.number()
        }),
        rpcUrl: lib.z.string().trim().url('Invalid URL').refine((rpc)=>rpc.startsWith('https://'), 'Required HTTPs URL'),
        iconUrl: lib.z.string().trim().optional(),
        explorerUrl: lib.z.object({
            url: lib.z.union([
                lib.z.string().url(),
                lib.z.literal('')
            ]),
            parameters: lib.z.record(lib.z.union([
                lib.z.string(),
                lib.z.number(),
                lib.z.boolean()
            ])).optional()
        }),
        features: lib.z.array(lib.z.string()).optional(),
        isCustomized: lib.z.boolean()
    }).// Validate duplication of rpcUrl
    superRefine(async (schema, context)=>{
        const conflict = descriptors.find((x)=>(0,isSameURL/* isSameURL */.U)(x.rpcUrl, schema.rpcUrl));
        if (conflict) {
            context.addIssue({
                code: lib.z.ZodIssueCode.custom,
                path: [
                    'rpcUrl'
                ],
                message: `The rpcUrl is already used by ${conflict.name} network.`
            });
        }
    });
}

// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchChainId.ts
var fetchChainId = __webpack_require__(6475);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/Network.ts




class Network extends state_Network/* NetworkState */.G {
    constructor(context){
        super(context, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM
        });
    }
    async validateNetwork(network) {
        const schema = createSchema(this.networks?.getCurrentValue() ?? []);
        const result = await schema.safeParseAsync(network);
        return result.success;
    }
    async pingNetwork(network) {
        if (!network.isCustomized) return true;
        const chainId = await (0,fetchChainId/* fetchChainId */.R)(network.rpcUrl);
        return network.chainId === chainId;
    }
}


/***/ }),

/***/ 48702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28129);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65327);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37049);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35138);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24770);
/* harmony import */ var _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66979);
/* harmony import */ var _providers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66402);
/* harmony import */ var _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86039);






class Provider extends _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A {
    providers = _providers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Providers */ .C;
    isValidAddress = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At;
    isValidChainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .isValidChainId */ .J;
    isSameAddress = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .W;
    getInvalidChainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getInvalidChainId */ .p6;
    getDefaultNetworkType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getDefaultNetworkType */ .H2;
    getDefaultProviderType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getDefaultProviderType */ .Xo;
    getDefaultChainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getDefaultChainId */ .tA;
    getNetworkTypeFromChainId(chainId) {
        return _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_6__/* .ChainResolver */ .iv.networkType(chainId) ?? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .td.Ethereum;
    }
    constructor(io){
        super(io);
    }
    storage = _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A.createStorage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID */ .F.PLUGIN_EVM, (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getDefaultChainId */ .tA)(), (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getDefaultProviderType */ .Xo)());
    static async new(io) {
        const provider = new this(io);
        await provider.setup();
        return provider;
    }
    async setupSubscriptions() {
        this.chainId = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>account.chainId);
        this.account = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>account.account);
        this.networkType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mapSubscription */ .S3)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mergeSubscription */ .EB)(this.storage.account.subscription), ([account])=>{
            return this.getNetworkTypeFromChainId(account.chainId);
        });
        this.providerType = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .mapSubscription */ .S3)(this.storage.providerType.subscription, (provider)=>provider);
    }
    async connect(providerType, chainId, address, owner, silent) {
        // Disconnect WalletConnect, prevents its session lasting too long.
        if (providerType !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType */ .lP.WalletConnect && this.providers[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType */ .lP.WalletConnect].connected) {
            try {
                await super.disconnect(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ProviderType */ .lP.WalletConnect);
            } catch  {}
        }
        // do nothing
        return super.connect(providerType, chainId, address, owner, silent);
    }
}


/***/ }),

/***/ 18515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ RiskWarning)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/RiskWarning.ts

class RiskWarningState {
    context;
    subscriptions;
    options;
    storage;
    approved;
    constructor(context, subscriptions, options){
        this.context = context;
        this.subscriptions = subscriptions;
        this.options = options;
        this.storage = null;
        const { storage } = KVStorage/* InMemoryStorages */.uU.Web3.createSubScope(`${this.options.pluginID}_RiskWarning`, {
            value: {}
        });
        this.storage = storage.value;
        if (this.subscriptions.account) {
            this.approved = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.account, this.storage.subscription), ([account, storage])=>storage[this.options.formatAddress(account)]);
        }
    }
    get ready() {
        return this.storage.initialized;
    }
    get readyPromise() {
        return this.storage.initializedPromise;
    }
    async isApproved(address) {
        return Reflect.has(this.storage.value, this.options.formatAddress(address));
    }
    async approve(address, pluginID) {
        await this.storage.setValue({
            ...this.storage.value,
            [this.options.formatAddress(address)]: true
        });
    }
    async revoke(address, pluginID) {
        await this.storage.setValue({
            ...this.storage.value,
            [this.options.formatAddress(address)]: false
        });
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/RiskWarning/index.ts
const BASE_URL_MAP = {
    production: 'https://backup.mask.io/api',
    development: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api',
    test: 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api'
};
const BASE_URL = BASE_URL_MAP["production"];
class RiskWarningAPI {
    async approve(address, pluginID = '') {
        await fetch(`${BASE_URL}/v1/risk_warning/confirm`, {
            method: 'POST',
            body: JSON.stringify({
                address,
                plugin_id: pluginID
            })
        });
    }
}
const RiskWarning_RiskWarning = new RiskWarningAPI();

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/RiskWarning.ts




class RiskWarning extends RiskWarningState {
    constructor(context, subscription){
        super(context, subscription, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            formatAddress: formatter/* formatEthereumAddress */.j8
        });
    }
    async approve(address, pluginID) {
        await RiskWarning_RiskWarning.approve(address, pluginID);
        await super.approve(address);
    }
}


/***/ }),

/***/ 90021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49547);


class Settings extends _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__/* .SettingsState */ .$ {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_EVM
        });
    }
}


/***/ }),

/***/ 41676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ Token)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isValidChainId.ts
var isValidChainId = __webpack_require__(37049);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./packages/shared-base/src/KVStorage/index.ts
var KVStorage = __webpack_require__(2574);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/shared-base/src/helpers/safeEmptyList.ts

function safeEmptyList(list) {
    if (!list?.length) return constants/* EMPTY_LIST */.rP;
    return list;
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/Token.ts




/** For non-fungible token, we store `${chainId}.${address}.${tokenId}` as token id */ /** account as key */ class TokenState {
    context;
    defaultValue;
    subscriptions;
    options;
    storage;
    trustedFungibleTokens;
    trustedNonFungibleTokens;
    blockedFungibleTokens;
    blockedNonFungibleTokens;
    credibleFungibleTokens;
    credibleNonFungibleTokens;
    nonFungibleCollectionMap;
    get ready() {
        const { storage } = this;
        return storage.fungibleTokenList.initialized && storage.nonFungibleTokenList.initialized && storage.fungibleTokenBlockedBy.initialized && storage.nonFungibleTokenBlockedBy.initialized && storage.credibleFungibleTokenList.initialized && storage.credibleNonFungibleTokenList.initialized && storage.nonFungibleCollectionMap.initialized;
    }
    get readyPromise() {
        const { storage } = this;
        return Promise.all([
            storage.fungibleTokenList.initializedPromise,
            storage.nonFungibleTokenList.initializedPromise,
            storage.fungibleTokenBlockedBy.initializedPromise,
            storage.nonFungibleTokenBlockedBy.initializedPromise,
            storage.credibleFungibleTokenList.initializedPromise,
            storage.credibleNonFungibleTokenList.initializedPromise,
            storage.nonFungibleCollectionMap.initialized
        ]).then(()=>{});
    }
    constructor(context, defaultValue, subscriptions, options){
        this.context = context;
        this.defaultValue = defaultValue;
        this.subscriptions = subscriptions;
        this.options = options;
        this.storage = null;
        const { storage } = KVStorage/* PersistentStorages */._H.Web3.createSubScope(`${this.options.pluginID}_Token`, defaultValue);
        this.storage = storage;
        if (this.subscriptions.account) {
            this.trustedFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.account, storage.fungibleTokenList.subscription, storage.fungibleTokenBlockedBy.subscription), ([account, tokens, blockedBy])=>{
                const key = account.toLowerCase();
                return safeEmptyList(tokens[key]?.filter((x)=>!blockedBy[key]?.includes(x.address)));
            });
            this.trustedNonFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.account, storage.nonFungibleTokenList.subscription, storage.nonFungibleTokenBlockedBy.subscription), ([account, tokens, blockedBy])=>{
                const key = account.toLowerCase();
                return safeEmptyList(tokens[key]?.filter((x)=>!blockedBy[key]?.includes(x.address)));
            });
            this.blockedFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.account, storage.fungibleTokenList.subscription, storage.fungibleTokenBlockedBy.subscription), ([account, tokens, blockedBy])=>{
                const key = account.toLowerCase();
                return safeEmptyList(tokens[key]?.filter((x)=>blockedBy[key]?.includes(x.id)));
            });
            this.blockedNonFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.account, storage.nonFungibleTokenList.subscription, storage.nonFungibleTokenBlockedBy.subscription), ([account, tokens, blockedBy])=>{
                const key = account.toLowerCase();
                return safeEmptyList(tokens[key]?.filter((x)=>blockedBy[key]?.includes(x.id)));
            });
            if (this.subscriptions.chainId) {
                this.credibleFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.chainId, storage.credibleFungibleTokenList.subscription), ([chainId, tokens])=>safeEmptyList(tokens[chainId]));
                this.credibleNonFungibleTokens = (0,subscription/* mapSubscription */.S3)((0,subscription/* mergeSubscription */.EB)(this.subscriptions.chainId, storage.credibleNonFungibleTokenList.subscription), ([chainId, tokens])=>safeEmptyList(tokens[chainId]));
            }
        }
        this.nonFungibleCollectionMap = storage.nonFungibleCollectionMap.subscription;
    }
    // add or remove by contract address from user
    async addOrRemoveToken(account, token, strategy) {
        if (!token.id) throw new Error('Token id is required');
        const key = account.toLowerCase();
        const tokens = token.type === specs/* TokenType */.iv.Fungible ? this.storage.fungibleTokenList.value : this.storage.nonFungibleTokenList.value;
        const id = token.id.toLowerCase();
        const oldList = tokens[key] ?? [];
        const newList = strategy === 'add' ? (0,uniqBy/* default */.Z)([
            {
                ...token,
                id
            },
            ...oldList
        ], (x)=>x.id) : oldList.filter((x)=>x.id !== id);
        const updatedValue = {
            ...tokens,
            [key]: newList
        };
        if (token.type === specs/* TokenType */.iv.Fungible) {
            await this.storage.fungibleTokenList.setValue(updatedValue);
        } else {
            await this.storage.nonFungibleTokenList.setValue(updatedValue);
        }
    }
    // trust or block exist token in token list
    async blockOrUnblockToken(account, token, strategy) {
        if (!token.id) throw new Error('Token id is required');
        const key = account.toLowerCase();
        const blocked = token.type === specs/* TokenType */.iv.Fungible ? this.storage.fungibleTokenBlockedBy.value : this.storage.nonFungibleTokenBlockedBy.value;
        const oldList = blocked[key] ?? [];
        const id = token.id.toLowerCase();
        const blockedUpdated = {
            ...blocked,
            [key]: strategy === 'trust' ? oldList.filter((x)=>x.toLowerCase() !== id) : (0,uniqBy/* default */.Z)([
                id,
                ...oldList
            ], (x)=>x.toLowerCase())
        };
        if (token.type === specs/* TokenType */.iv.Fungible) {
            await this.storage.fungibleTokenBlockedBy.setValue(blockedUpdated);
        } else {
            await this.storage.nonFungibleTokenBlockedBy.setValue(blockedUpdated);
        }
    }
    async addToken(address, token) {
        this.addOrRemoveToken(address, token, 'add');
    }
    async removeToken(address, token) {
        this.addOrRemoveToken(address, token, 'remove');
    }
    async trustToken(address, token) {
        this.addOrRemoveToken(address, token, 'remove');
        this.blockOrUnblockToken(address, token, 'trust');
    }
    async blockToken(address, token) {
        this.blockOrUnblockToken(address, token, 'block');
        this.addOrRemoveToken(address, token, 'add');
    }
    async addNonFungibleTokens(owner, contract, tokenIds) {
        const key = owner.toLowerCase();
        const { nonFungibleCollectionMap: collectionMap, nonFungibleTokenBlockedBy: blockedBy } = this.storage;
        const list = collectionMap.value[key] || [];
        const newList = (0,immer/* produce */.Uy)(list, (draft)=>{
            const index = draft.findIndex((x)=>x.contract.chainId === contract.chainId && (0,isSameAddress/* isSameAddress */.W)(x.contract.address, contract.address));
            const oldRecord = draft[index];
            if (oldRecord) {
                // Just override the original record
                Object.assign(draft[index], {
                    contract,
                    tokenIds: (0,uniq/* default */.Z)([
                        ...oldRecord.tokenIds,
                        ...tokenIds
                    ])
                });
            } else {
                draft.push({
                    contract,
                    tokenIds
                });
            }
        });
        await collectionMap.setValue({
            ...collectionMap.value,
            [key]: newList
        });
        // Also remove from block ids
        const ids = tokenIds.map((x)=>`${contract.chainId}.${contract.address.toLowerCase()}.${x}`);
        const blockIds = blockedBy.value[key];
        if (!blockIds?.length) return;
        await blockedBy.setValue({
            ...blockedBy.value,
            [key]: blockIds.filter((x)=>!ids.includes(x))
        });
    }
    async removeNonFungibleTokens(owner, contract, tokenIds) {
        const key = owner.toLowerCase();
        const { nonFungibleCollectionMap: collectionMap, nonFungibleTokenBlockedBy: blockedBy } = this.storage;
        const list = collectionMap.value[key] || [];
        const newList = (0,immer/* produce */.Uy)(list, (draft)=>{
            const index = draft.findIndex((x)=>x.contract.chainId === contract.chainId && (0,isSameAddress/* isSameAddress */.W)(x.contract.address, contract.address));
            const record = draft[index];
            if (record) {
                // Just override the original record
                Object.assign(draft[index], {
                    contract: record.contract,
                    tokenIds: record.tokenIds.filter((tokenId)=>!tokenIds.includes(tokenId))
                });
            }
        });
        await collectionMap.setValue({
            ...collectionMap.value,
            [key]: newList
        });
        // Also remove from block ids
        const ids = tokenIds.map((x)=>`${contract.chainId}.${contract.address.toLowerCase()}.${x}`);
        const blockIds = blockedBy.value[key];
        if (!blockIds?.length) return;
        await blockedBy.setValue({
            ...blockedBy.value,
            [key]: blockIds.filter((x)=>!ids.includes(x))
        });
    }
}

// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/HubAPI.ts
var HubAPI = __webpack_require__(60300);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ResolverAPI.ts
var ResolverAPI = __webpack_require__(66979);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/Token.ts







class Token extends TokenState {
    Hub = new HubAPI/* HubAPI */.K().create();
    constructor(context, subscriptions){
        const defaultValue = {
            fungibleTokenList: {},
            credibleFungibleTokenList: {},
            nonFungibleTokenList: {},
            credibleNonFungibleTokenList: {},
            fungibleTokenBlockedBy: {},
            nonFungibleTokenBlockedBy: {},
            nonFungibleCollectionMap: {}
        };
        super(context, defaultValue, subscriptions, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            isValidAddress: address/* isValidAddress */.At,
            isSameAddress: isSameAddress/* isSameAddress */.W,
            formatAddress: formatter/* formatEthereumAddress */.j8
        });
    }
    async getStoredFungibleTokens(chainId) {
        const storedTokensMap = this.storage.credibleFungibleTokenList.value;
        const storedTokens = storedTokensMap[chainId];
        if (storedTokens) return storedTokens;
        return queryClient/* queryClient */.E.fetchQuery([
            'evm',
            'get-fungible-token-list',
            chainId
        ], async ()=>{
            const fungibleTokenList = await this.Hub.getFungibleTokensFromTokenList(chainId);
            // No need to wait for storage
            this.storage.credibleFungibleTokenList.setValue({
                ...storedTokensMap,
                [chainId]: fungibleTokenList.length ? fungibleTokenList : [
                    ResolverAPI/* ChainResolver */.iv.nativeCurrency(chainId)
                ]
            });
            return fungibleTokenList;
        });
    }
    async createFungibleToken(chainId, address, token) {
        if (!(0,isValidChainId/* isValidChainId */.J)(chainId) || !address) return;
        const fungibleTokens = await this.getStoredFungibleTokens(chainId);
        const credibleToken = fungibleTokens.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
        return credibleToken ?? token;
    }
    async createNonFungibleToken(chainId, address, token) {
        if (!(0,isValidChainId/* isValidChainId */.J)(chainId) || !address) return;
        const nonFungibleTokenListFromStorage = this.storage.credibleNonFungibleTokenList.value;
        const nonFungibleTokenListByChainFromStorage = nonFungibleTokenListFromStorage?.[chainId];
        if (!nonFungibleTokenListByChainFromStorage) {
            const nonFungibleTokenList = await this.Hub.getNonFungibleTokensFromTokenList(chainId, {
                chainId
            });
            await this.storage.credibleNonFungibleTokenList.setValue({
                ...nonFungibleTokenListFromStorage,
                [chainId]: nonFungibleTokenList
            });
            const credibleToken = nonFungibleTokenList?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
            return credibleToken ?? token;
        }
        const credibleToken = nonFungibleTokenListByChainFromStorage.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, address));
        return credibleToken ?? token;
    }
}


/***/ }),

/***/ 71450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33026);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41487);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37049);
/* harmony import */ var _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47346);



class Transaction extends _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .TransactionState */ .g {
    constructor(context, subscriptions){
        super(context, _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainIdList */ .rY, subscriptions, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM,
            formatAddress: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .formatEthereumAddress */ .j8,
            isValidChainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isValidChainId */ .J
        });
    }
}


/***/ }),

/***/ 40290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ TransactionFormatter)
});

// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/AccountTransaction.ts
var AccountTransaction = __webpack_require__(17448);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/abiCoder.ts
var abiCoder = __webpack_require__(1853);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/BulkCheckout.json
var BulkCheckout = __webpack_require__(40098);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/NftRedPacket.json
var NftRedPacket = __webpack_require__(80847);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/HappyRedPacketV4.json
var HappyRedPacketV4 = __webpack_require__(74122);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(95528);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/ERC721.json
var ERC721 = __webpack_require__(78770);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/RouterV2.json
var RouterV2 = __webpack_require__(68101);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/SwapRouter.json
var SwapRouter = __webpack_require__(5247);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/MaskBox.json
var MaskBox = __webpack_require__(12244);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/DODORouteProxy.json
const DODORouteProxy_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"fromTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"uint256[]","name":"totalWeight","type":"uint256[]"},{"internalType":"uint256[]","name":"splitNumber","type":"uint256[]"},{"internalType":"address[]","name":"midToken","type":"address[]"},{"internalType":"address[]","name":"assetFrom","type":"address[]"},{"internalType":"bytes[]","name":"sequence","type":"bytes[]"},{"internalType":"uint256","name":"deadLine","type":"uint256"}],"name":"dodoMutliSwap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"fromToken","type":"address"},{"internalType":"address","name":"toToken","type":"address"},{"internalType":"uint256","name":"fromTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"address[]","name":"mixAdapters","type":"address[]"},{"internalType":"address[]","name":"mixPairs","type":"address[]"},{"internalType":"address[]","name":"assetTo","type":"address[]"},{"internalType":"uint256","name":"directions","type":"uint256"},{"internalType":"bytes[]","name":"moreInfos","type":"bytes[]"},{"internalType":"uint256","name":"deadLine","type":"uint256"}],"name":"mixSwap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"uint256[]","name":"totalWeight","type":"uint256[]"},{"internalType":"uint256[]","name":"splitNumber","type":"uint256[]"},{"internalType":"address[]","name":"midToken","type":"address[]"},{"internalType":"address[]","name":"assetFrom","type":"address[]"},{"internalType":"bytes[]","name":"sequence","type":"bytes[]"},{"internalType":"uint256","name":"deadLine","type":"uint256"}],"name":"dodoMutliSwap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"fromToken","type":"address"},{"internalType":"uint256","name":"fromTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"address[]","name":"dodoPairs","type":"address[]"},{"internalType":"uint256","name":"directions","type":"uint256"},{"internalType":"bool","name":"isIncentive","type":"bool"},{"internalType":"uint256","name":"deadLine","type":"uint256"}],"name":"dodoSwapV2TokenToETH","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"}]');
// EXTERNAL MODULE: ./packages/web3-contracts/abis/WETH.json
var WETH = __webpack_require__(54369);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/BancorNetwork.json
const BancorNetwork_namespaceObject = JSON.parse('[{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_beneficiary","type":"address"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convertByPath","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]');
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/OpenOceanExchangeV2.json
const OpenOceanExchangeV2_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"srcToken","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"dstToken","type":"address"},{"indexed":false,"internalType":"address","name":"dstReceiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"spentAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"returnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"guaranteedAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Swapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOpenOceanCaller","name":"caller","type":"address"},{"components":[{"internalType":"contract IERC20","name":"srcToken","type":"address"},{"internalType":"contract IERC20","name":"dstToken","type":"address"},{"internalType":"address","name":"srcReceiver","type":"address"},{"internalType":"address","name":"dstReceiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturnAmount","type":"uint256"},{"internalType":"uint256","name":"guaranteedAmount","type":"uint256"},{"internalType":"uint256","name":"flags","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bytes","name":"permit","type":"bytes"}],"internalType":"struct OpenOceanExchange.SwapDescription","name":"desc","type":"tuple"},{"components":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct IOpenOceanCaller.CallDescription[]","name":"calls","type":"tuple[]"}],"name":"swap","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/ZeroXSwap.json
const ZeroXSwap_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"quoteSigner","type":"address"}],"name":"QuoteSignerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"taker","type":"address"},{"indexed":false,"internalType":"address","name":"inputToken","type":"address"},{"indexed":false,"internalType":"address","name":"outputToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"inputTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"outputTokenAmount","type":"uint256"}],"name":"TransformedERC20","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"transformerDeployer","type":"address"}],"name":"TransformerDeployerUpdated","type":"event"},{"inputs":[],"name":"FEATURE_NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEATURE_VERSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"taker","type":"address"},{"internalType":"contract IERC20TokenV06","name":"inputToken","type":"address"},{"internalType":"contract IERC20TokenV06","name":"outputToken","type":"address"},{"internalType":"uint256","name":"inputTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minOutputTokenAmount","type":"uint256"},{"components":[{"internalType":"uint32","name":"deploymentNonce","type":"uint32"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ITransformERC20Feature.Transformation[]","name":"transformations","type":"tuple[]"},{"internalType":"bool","name":"useSelfBalance","type":"bool"},{"internalType":"address payable","name":"recipient","type":"address"}],"internalType":"struct ITransformERC20Feature.TransformERC20Args","name":"args","type":"tuple"}],"name":"_transformERC20","outputs":[{"internalType":"uint256","name":"outputTokenAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"createTransformWallet","outputs":[{"internalType":"contract IFlashWallet","name":"wallet","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getQuoteSigner","outputs":[{"internalType":"address","name":"signer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransformWallet","outputs":[{"internalType":"contract IFlashWallet","name":"wallet","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransformerDeployer","outputs":[{"internalType":"address","name":"deployer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"transformerDeployer","type":"address"}],"name":"migrate","outputs":[{"internalType":"bytes4","name":"success","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"quoteSigner","type":"address"}],"name":"setQuoteSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"transformerDeployer","type":"address"}],"name":"setTransformerDeployer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20TokenV06","name":"inputToken","type":"address"},{"internalType":"contract IERC20TokenV06","name":"outputToken","type":"address"},{"internalType":"uint256","name":"inputTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minOutputTokenAmount","type":"uint256"},{"components":[{"internalType":"uint32","name":"deploymentNonce","type":"uint32"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ITransformERC20Feature.Transformation[]","name":"transformations","type":"tuple[]"}],"name":"transformERC20","outputs":[{"internalType":"uint256","name":"outputTokenAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"contract IERC20TokenV06","name":"inputToken","type":"address"},{"internalType":"contract IERC20TokenV06","name":"outputToken","type":"address"},{"internalType":"uint256","name":"inputTokenAmount","type":"uint256"},{"internalType":"uint256","name":"minOutputTokenAmount","type":"uint256"},{"components":[{"internalType":"uint32","name":"deploymentNonce","type":"uint32"},{"internalType":"bytes","name":"data","type":"bytes"}],"internalType":"struct ITransformERC20Feature.Transformation[]","name":"transformations","type":"tuple[]"}],"name":"transformERC20Staging","outputs":[{"internalType":"uint256","name":"outputTokenAmount","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"sellAmount","type":"uint256"},{"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"internalType":"bool","name":"isSushi","type":"bool"}],"name":"sellToUniswap","stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"sellAmount","type":"uint256"},{"internalType":"uint256","name":"minBuyAmount","type":"uint256"},{"internalType":"uint8","name":"fork","type":"uint8"}],"name":"sellToPancakeSwap","stateMutability":"payable","type":"function"}]');
// EXTERNAL MODULE: ./packages/web3-contracts/abis/Lido.json
var Lido = __webpack_require__(10390);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/AaveLendingPool.json
var AaveLendingPool = __webpack_require__(37775);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/SmartPayEntryPoint.json
const SmartPayEntryPoint_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_create2factory","type":"address"},{"internalType":"uint256","name":"_paymasterStake","type":"uint256"},{"internalType":"uint32","name":"_unstakeDelaySec","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"opIndex","type":"uint256"},{"internalType":"address","name":"paymaster","type":"address"},{"internalType":"string","name":"reason","type":"string"}],"name":"FailedOp","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalDeposit","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalStaked","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawTime","type":"uint256"}],"name":"StakeLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawTime","type":"uint256"}],"name":"StakeUnlocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"withdrawAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"StakeWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"requestId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"paymaster","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"actualGasCost","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"actualGasPrice","type":"uint256"},{"indexed":false,"internalType":"bool","name":"success","type":"bool"}],"name":"UserOperationEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"requestId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"revertReason","type":"bytes"}],"name":"UserOperationRevertReason","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"withdrawAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint32","name":"_unstakeDelaySec","type":"uint32"}],"name":"addStake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"create2factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositTo","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"deposits","outputs":[{"internalType":"uint112","name":"deposit","type":"uint112"},{"internalType":"bool","name":"staked","type":"bool"},{"internalType":"uint112","name":"stake","type":"uint112"},{"internalType":"uint32","name":"unstakeDelaySec","type":"uint32"},{"internalType":"uint64","name":"withdrawTime","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getDepositInfo","outputs":[{"components":[{"internalType":"uint112","name":"deposit","type":"uint112"},{"internalType":"bool","name":"staked","type":"bool"},{"internalType":"uint112","name":"stake","type":"uint112"},{"internalType":"uint32","name":"unstakeDelaySec","type":"uint32"},{"internalType":"uint64","name":"withdrawTime","type":"uint64"}],"internalType":"struct StakeManager.DepositInfo","name":"info","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint256","name":"callGas","type":"uint256"},{"internalType":"uint256","name":"verificationGas","type":"uint256"},{"internalType":"uint256","name":"preVerificationGas","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"address","name":"paymaster","type":"address"},{"internalType":"bytes","name":"paymasterData","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct UserOperation","name":"userOp","type":"tuple"}],"name":"getRequestId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"getSenderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"getSenderStorage","outputs":[{"internalType":"uint256[]","name":"senderStorageCells","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint256","name":"callGas","type":"uint256"},{"internalType":"uint256","name":"verificationGas","type":"uint256"},{"internalType":"uint256","name":"preVerificationGas","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"address","name":"paymaster","type":"address"},{"internalType":"bytes","name":"paymasterData","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct UserOperation[]","name":"ops","type":"tuple[]"},{"internalType":"address payable","name":"beneficiary","type":"address"}],"name":"handleOps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint256","name":"callGas","type":"uint256"},{"internalType":"uint256","name":"verificationGas","type":"uint256"},{"internalType":"uint256","name":"preVerificationGas","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"address","name":"paymaster","type":"address"},{"internalType":"bytes","name":"paymasterData","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct UserOperation","name":"op","type":"tuple"},{"components":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"prefund","type":"uint256"},{"internalType":"enum EntryPoint.PaymentMode","name":"paymentMode","type":"uint8"},{"internalType":"uint256","name":"contextOffset","type":"uint256"},{"internalType":"uint256","name":"preOpGas","type":"uint256"}],"internalType":"struct EntryPoint.UserOpInfo","name":"opInfo","type":"tuple"},{"internalType":"bytes","name":"context","type":"bytes"}],"name":"innerHandleOp","outputs":[{"internalType":"uint256","name":"actualGasCost","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paymasterStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"bytes","name":"initCode","type":"bytes"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint256","name":"callGas","type":"uint256"},{"internalType":"uint256","name":"verificationGas","type":"uint256"},{"internalType":"uint256","name":"preVerificationGas","type":"uint256"},{"internalType":"uint256","name":"maxFeePerGas","type":"uint256"},{"internalType":"uint256","name":"maxPriorityFeePerGas","type":"uint256"},{"internalType":"address","name":"paymaster","type":"address"},{"internalType":"bytes","name":"paymasterData","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"}],"internalType":"struct UserOperation","name":"userOp","type":"tuple"}],"name":"simulateValidation","outputs":[{"internalType":"uint256","name":"preOpGas","type":"uint256"},{"internalType":"uint256","name":"prefund","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeDelaySec","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"withdrawAddress","type":"address"}],"name":"withdrawStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"withdrawAddress","type":"address"},{"internalType":"uint256","name":"withdrawAmount","type":"uint256"}],"name":"withdrawTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
// EXTERNAL MODULE: ./packages/web3-contracts/abis/Wallet.json
var Wallet = __webpack_require__(49734);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/Create2Factory.json
var Create2Factory = __webpack_require__(91976);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/LensHub.json
var LensHub = __webpack_require__(30133);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/LensFollowNFT.json
var LensFollowNFT = __webpack_require__(55788);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/AirdropV2.json
var AirdropV2 = __webpack_require__(88592);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/abi.ts


// built-in abis





















class ABI {
    abis = new Map();
    constructor(){
        this.construct(BulkCheckout);
        // donate gitcoin grants
        this.construct(NftRedPacket);
        this.construct(HappyRedPacketV4);
        this.construct(MaskBox);
        this.construct(ERC721);
        this.construct(ERC20);
        this.construct(RouterV2);
        // uniswap V2 like
        this.construct(SwapRouter);
        // uniswap V3 like
        this.construct(DODORouteProxy_namespaceObject);
        // dodo swap
        this.construct(BancorNetwork_namespaceObject);
        // bancor swap
        this.construct(OpenOceanExchangeV2_namespaceObject);
        // openocean swap
        this.construct(ZeroXSwap_namespaceObject);
        // 0x swap
        this.construct(WETH);
        // wrap & unwrap
        this.construct(Lido);
        // lido saving
        this.construct(AaveLendingPool);
        // Aave saving
        this.construct(SmartPayEntryPoint_namespaceObject);
        // smart pay entrypoint
        this.construct(Wallet);
        // Contract Wallet
        this.construct(Create2Factory);
        // Create2Factory
        this.construct(LensHub);
        this.construct(LensFollowNFT);
        this.construct(AirdropV2);
    }
    read(signature) {
        if (!signature) return;
        return this.abis.get(signature);
    }
    construct(abi) {
        abi.forEach((x)=>{
            if (x.type !== 'function') return;
            if (x.stateMutability === 'pure' || x.stateMutability === 'view') return;
            const { name, inputs = [] } = x;
            if (!name) return;
            try {
                const signature = abiCoder/* abiCoder */.r.encodeFunctionSignature(x);
                const all = (0,uniqBy/* default */.Z)([
                    ...this.abis.get(signature) ?? [],
                    {
                        name,
                        parameters: inputs.map((y)=>({
                                name: y.name,
                                type: y.type,
                                components: y.components
                            })) ?? []
                    }
                ], (x)=>`${x.name}_${x.parameters.map((y)=>`${y.type}_${y.name}`)}`);
                this.abis.set(signature, all);
            } catch (error) {
                console.log('Failed to encode function signature from below ABI:');
                console.log(x);
            }
        });
    }
}
let abi;
function readABIs(signature) {
    return (abi ||= new ABI()).read(signature);
}

// EXTERNAL MODULE: ./packages/shared-base/src/i18n/instance.ts
var instance = __webpack_require__(50139);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/decodeEvents.ts
var decodeEvents = __webpack_require__(44747);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ContractReadonlyAPI.ts + 9 modules
var ContractReadonlyAPI = __webpack_require__(61871);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ConnectionReadonlyAPI.ts + 2 modules
var ConnectionReadonlyAPI = __webpack_require__(3543);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/HubAPI.ts
var HubAPI = __webpack_require__(60300);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Base.ts




class BaseDescriptor {
    Hub = new HubAPI/* HubAPI */.K().create();
    Web3 = new ConnectionReadonlyAPI/* ConnectionReadonlyAPI */.S();
    async compute(context) {
        const { NATIVE_TOKEN_ADDRESS } = (0,constants/* getTokenConstants */.aV)(context.chainId);
        const nativeToken = await this.Hub.getFungibleToken(NATIVE_TOKEN_ADDRESS, {
            chainId: context.chainId
        });
        return {
            chainId: context.chainId,
            title: context.methods?.find((x)=>x.name)?.name ?? 'Contract Interaction',
            description: getTokenAmountDescription(context.value, nativeToken)
        };
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/utils.ts




function getTokenAmountDescription(amount = '0', token) {
    const value = (0,number/* scale10 */.SI)(1, 9 + (token?.decimals ?? 18)).isGreaterThanOrEqualTo(amount) ? (0,formatBalance/* formatBalance */.a)(amount, token?.decimals) : 'infinite';
    return `${value} ${token?.symbol?.trim()}`;
}
class DescriptorWithTransactionDecodedReceipt extends BaseDescriptor {
    Contract = new ContractReadonlyAPI/* ContractReadonlyAPI */.M();
    async getReceipt(chainId, contractAddress, abi, hash) {
        if (!hash || !contractAddress || !abi) return;
        const receipt = await this.Web3.getTransactionReceipt(hash, {
            chainId
        });
        if (!receipt) return;
        const contract = this.Contract.getWeb3Contract(contractAddress, abi);
        if (!contract) return;
        return (0,decodeEvents/* decodeEvents */.e)(contract.options.jsonInterface, receipt.logs);
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/TransferToken.ts



class TransferTokenDescriptor extends BaseDescriptor {
    async compute(context) {
        const token = await this.Web3.getNativeToken({
            chainId: context.chainId
        });
        return {
            chainId: context.chainId,
            title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_title'),
            description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer', {
                tokenAmountDescription: getTokenAmountDescription(context.value, token)
            }),
            snackbar: {
                successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_success', {
                    tokenAmountDescription: getTokenAmountDescription(context.value, token)
                }),
                failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_fail')
            }
        };
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/ContractDeployment.ts


class ContractDeploymentDescriptor extends BaseDescriptor {
    async compute(context) {
        return {
            chainId: context.chainId,
            title: 'Contract Deployment',
            description: `Contract Deployment ${getTokenAmountDescription(context.value, await this.Web3.getNativeToken({
                chainId: context.chainId
            }))}`
        };
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Cancel.ts

class CancelDescriptor extends BaseDescriptor {
    compute(context) {
        return Promise.resolve({
            chainId: context.chainId,
            title: 'Cancel Transaction'
        });
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Gitcoin.ts





/** #0 */ /** #1 */ /** #2 */ class GitcoinDescriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        const GITCOIN_ETH_ADDRESS = (0,constants/* getGitcoinConstant */.Qt)(context.chainId, 'GITCOIN_ETH_ADDRESS');
        const nativeTokenAddress = (0,address/* getNativeTokenAddress */.rG)(context.chainId);
        for (const { name, parameters } of context.methods){
            if (name === 'donate' && parameters) {
                const tokenAddress = parameters._donations[0].token;
                const address = tokenAddress === GITCOIN_ETH_ADDRESS ? nativeTokenAddress : tokenAddress;
                const token = await this.Hub.getFungibleToken(address, {
                    chainId: context.chainId
                });
                const amount = new bignumber/* BigNumber */.O(parameters._donations[0].amount).plus(parameters._donations[1].amount).toFixed();
                return {
                    chainId: context.chainId,
                    tokenInAddress: address,
                    tokenInAmount: amount,
                    title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_gitcoin_donate_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_gitcoin_submitted', {
                        amount: (0,formatBalance/* formatBalance */.a)(amount, token?.decimals, 6),
                        symbol: token?.symbol
                    }),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_gitcoin_donate_success', {
                            amount: (0,formatBalance/* formatBalance */.a)(amount, token?.decimals, 6),
                            symbol: token?.symbol
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_gitcoin_donate_fail')
                    },
                    popup: {
                        method: name
                    }
                };
            }
        }
        return;
    }
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/MaskBox.ts





class MaskBoxDescriptor extends DescriptorWithTransactionDecodedReceipt {
    async getPurchaseTokenInfo(chainId, contractAddress, hash) {
        const events = await this.getReceipt(chainId, contractAddress, MaskBox, hash);
        const { amount, token_address } = events?.ClaimPayment?.returnValues ?? {};
        if (!token_address) return;
        const token = await this.Hub.getFungibleToken(token_address ?? '', {
            chainId
        });
        if (!token) return;
        return getTokenAmountDescription(amount, token);
    }
    async compute(context_) {
        const context = context_;
        const { MASK_BOX_CONTRACT_ADDRESS } = (0,constants/* getMaskBoxConstants */.i_)(context.chainId);
        if (!(0,isSameAddress/* isSameAddress */.W)(context.to, MASK_BOX_CONTRACT_ADDRESS)) return;
        const method = context.methods?.find((x)=>[
                'claimPayment'
            ].includes(x.name ?? ''));
        if (method?.name === 'claimPayment') {
            return {
                chainId: context.chainId,
                title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_mask_box_purchase_title'),
                description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_mask_box_purchase'),
                snackbar: {
                    successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_mask_box_purchase_success', {
                        tokenAmountDescription: await this.getPurchaseTokenInfo(context.chainId, MASK_BOX_CONTRACT_ADDRESS, context.hash)
                    }),
                    failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_mask_box_purchase_fail')
                },
                popup: {
                    method: method.name
                }
            };
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/RedPacket.ts






class RedPacketDescriptor extends DescriptorWithTransactionDecodedReceipt {
    async getClaimTokenInfo(chainId, contractAddress, hash) {
        const events = await this.getReceipt(chainId, contractAddress, HappyRedPacketV4, hash);
        const { claimed_value, token_address } = events?.ClaimSuccess?.returnValues ?? {};
        if (!token_address) return;
        const token = await this.Hub.getFungibleToken(token_address ?? '', {
            chainId
        });
        if (!token) return;
        return getTokenAmountDescription(claimed_value, token);
    }
    async getRefundTokenInfo(chainId, contractAddress, hash) {
        const events = await this.getReceipt(chainId, contractAddress, HappyRedPacketV4, hash);
        const { remaining_balance, token_address } = events?.RefundSuccess?.returnValues ?? {};
        if (!token_address) return;
        const token = await this.Hub.getFungibleToken(token_address ?? '', {
            chainId
        });
        if (!token) return;
        return getTokenAmountDescription(remaining_balance, token);
    }
    async getClaimedNFTSymbol(chainId, contractAddress, hash) {
        const events = await this.getReceipt(chainId, contractAddress, NftRedPacket, hash);
        const { token_address } = events?.ClaimSuccess?.returnValues ?? {};
        if (!token_address) return;
        return this.getNonFungibleContractSymbol(chainId, token_address);
    }
    async getNonFungibleContractSymbol(chainId, address) {
        const contract = await this.Web3.getNonFungibleTokenContract(address, undefined, {
            chainId
        });
        return contract?.symbol && contract?.symbol.length > 15 ? `${contract?.symbol.slice(0, 12)}...` : contract?.symbol;
    }
    // TODO: 6002: avoid using i18n text in a service. delegate it to ui.
    async compute(context_) {
        const context = context_;
        const { HAPPY_RED_PACKET_ADDRESS_V1, HAPPY_RED_PACKET_ADDRESS_V2, HAPPY_RED_PACKET_ADDRESS_V3, HAPPY_RED_PACKET_ADDRESS_V4 } = (0,constants/* getRedPacketConstants */.GV)(context.chainId);
        const RED_PACKET_NFT_ADDRESS = (0,constants/* getNftRedPacketConstant */.IJ)(context.chainId, 'RED_PACKET_NFT_ADDRESS');
        const method = context.methods?.find((x)=>[
                'create_red_packet',
                'claim',
                'refund'
            ].includes(x.name ?? ''));
        if ([
            HAPPY_RED_PACKET_ADDRESS_V1,
            HAPPY_RED_PACKET_ADDRESS_V2,
            HAPPY_RED_PACKET_ADDRESS_V3,
            HAPPY_RED_PACKET_ADDRESS_V4
        ].some((x)=>(0,isSameAddress/* isSameAddress */.W)(x, context.to))) {
            if (method?.name === 'create_red_packet' && method?.parameters?._token_addr && method?.parameters?._total_tokens) {
                const token = await this.Hub.getFungibleToken(method?.parameters?._token_addr ?? '', {
                    chainId: context.chainId
                });
                const tokenAmountDescription = getTokenAmountDescription(method.parameters?._total_tokens, token);
                return {
                    chainId: context.chainId,
                    tokenInAddress: token?.address,
                    tokenInAmount: method?.parameters?._total_tokens,
                    title: instance/* i18NextInstance */.BV.t('plugin_red_packet_create_with_token_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_red_packet_create_with_token'),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_create_with_token_success', {
                            tokenAmountDescription
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_create_with_token_fail')
                    },
                    popup: {
                        method: method.name
                    }
                };
            } else if (method?.name === 'claim') {
                const tokenAmountDescription = await this.getClaimTokenInfo(context.chainId, context.to, context.hash);
                return {
                    chainId: context.chainId,
                    title: instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_notification'),
                    snackbar: {
                        successfulDescription: tokenAmountDescription ? instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_success', {
                            tokenAmountDescription
                        }) : instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_success_without_details'),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_fail')
                    },
                    popup: {
                        method: method.name
                    }
                };
            } else {
                const tokenAmountDescription = await this.getRefundTokenInfo(context.chainId, context.to, context.hash);
                return {
                    chainId: context.chainId,
                    title: instance/* i18NextInstance */.BV.t('plugin_red_packet_refund_with_token_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_red_packet_refund_with_token'),
                    snackbar: {
                        successfulDescription: tokenAmountDescription ? instance/* i18NextInstance */.BV.t('plugin_red_packet_refund_with_token_success', {
                            tokenAmountDescription
                        }) : instance/* i18NextInstance */.BV.t('plugin_red_packet_refund_with_token_success_without_detail'),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_refund_with_token_fail')
                    },
                    popup: {
                        method: method?.name
                    }
                };
            }
        } else if ((0,isSameAddress/* isSameAddress */.W)(context.to, RED_PACKET_NFT_ADDRESS)) {
            if (method?.name === 'create_red_packet') {
                const symbol = await this.getNonFungibleContractSymbol(context.chainId, method.parameters?._token_addr ?? '');
                return {
                    chainId: context.chainId,
                    title: instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_create_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_create'),
                    snackbar: {
                        successfulDescription: symbol ? instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_create_success', {
                            symbol
                        }) : instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_create_success_without_detail'),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_create_with_token_fail')
                    },
                    popup: {
                        method: method.name
                    }
                };
            } else if (method?.name === 'claim') {
                const symbol = await this.getClaimedNFTSymbol(context.chainId, RED_PACKET_NFT_ADDRESS, context.hash);
                return {
                    chainId: context.chainId,
                    title: instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_claim_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_claim'),
                    snackbar: {
                        successfulDescription: symbol ? instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_claim_success', {
                            symbol
                        }) : instance/* i18NextInstance */.BV.t('plugin_nft_red_packet_claim_success_without_detail'),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_red_packet_claim_fail')
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
        }
        return;
    }
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/Web3StateAPI.ts
var Web3StateAPI = __webpack_require__(39850);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/ERC20.ts







class ERC20Descriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        for (const { name, parameters } of context.methods){
            switch(name){
                case 'approve':
                    if (parameters?.spender === undefined || parameters?.value === undefined) break;
                    const token = await this.Hub.getFungibleToken(context.to ?? '', {
                        chainId: context.chainId
                    });
                    const revokeTitle = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_revoke_title');
                    const approveTitle = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_approve_title');
                    const revokeDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_revoke', {
                        symbol: token?.symbol ?? 'token'
                    });
                    const approveDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_approve', {
                        tokenAmountDescription: getTokenAmountDescription(parameters?.value, token)
                    });
                    const revokeSuccessDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_revoke_success');
                    const approveSuccessDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_approve_success', {
                        tokenAmountDescription: getTokenAmountDescription(parameters?.value, token)
                    });
                    const revokeFailedDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_revoke_fail');
                    const approveFailedDescription = instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_fail');
                    if (Web3StateAPI.Web3StateRef.value.Provider?.providerType?.getCurrentValue() === types/* ProviderType */.lP.MetaMask) {
                        const spenders = await this.Hub.getFungibleTokenSpenders(context.chainId, context.from, {
                            chainId: context.chainId
                        });
                        const spender = spenders?.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, parameters?.spender) && (0,isSameAddress/* isSameAddress */.W)(x.tokenInfo.address, context.to));
                        const spendingCap = new bignumber/* BigNumber */.O(spender?.amount ?? spender?.rawAmount ?? 0).toString();
                        const successfulDescription = (0,number/* isZero */.Fr)(parameters.value) ? (0,number/* isZero */.Fr)(spendingCap) ? revokeSuccessDescription : instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_revoke_but_set_positive_cap', {
                            tokenAmountDescription: getTokenAmountDescription(spendingCap, token),
                            spender: spender?.address ? (0,formatter/* formatEthereumAddress */.j8)(spender?.address, 4) : 'spender'
                        }) : (0,number/* isZero */.Fr)(spendingCap) ? instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_approve_but_set_zero_cap', {
                            symbol: token?.symbol
                        }) : approveSuccessDescription;
                        const successfulTitle = (0,number/* isZero */.Fr)(parameters.value) && !(0,number/* isZero */.Fr)(spendingCap) ? approveTitle : undefined;
                        return {
                            chainId: context.chainId,
                            tokenInAddress: token?.address,
                            title: (0,number/* isZero */.Fr)(parameters.value) ? revokeTitle : approveTitle,
                            description: (0,number/* isZero */.Fr)(parameters.value) ? revokeDescription : approveDescription,
                            snackbar: {
                                successfulDescription,
                                successfulTitle,
                                failedDescription: (0,number/* isZero */.Fr)(parameters.value) ? revokeFailedDescription : approveFailedDescription
                            },
                            popup: {
                                method: name
                            }
                        };
                    }
                    if ((0,number/* isZero */.Fr)(parameters.value)) {
                        return {
                            chainId: context.chainId,
                            tokenInAddress: token?.address,
                            title: revokeTitle,
                            description: revokeDescription,
                            popup: {
                                tokenDescription: token?.symbol ?? 'token',
                                method: name
                            },
                            snackbar: {
                                successfulDescription: revokeSuccessDescription,
                                failedDescription: revokeFailedDescription
                            }
                        };
                    }
                    return {
                        chainId: context.chainId,
                        title: approveTitle,
                        tokenInAddress: token?.address,
                        tokenInAmount: parameters?.value,
                        description: approveDescription,
                        popup: {
                            spender: parameters.spender,
                            tokenDescription: (0,number/* leftShift */.w5)(parameters?.value, token?.decimals).gt((0,number/* pow10 */.wA)(9)) ? instance/* i18NextInstance */.BV.t('popups_wallet_token_infinite_unlock') : undefined,
                            method: name
                        },
                        snackbar: {
                            successfulDescription: approveSuccessDescription,
                            failedDescription: approveFailedDescription
                        }
                    };
            }
            if ((name === 'transfer' || name === 'transferFrom') && parameters?.to && parameters.value && !parameters.tokenId) {
                const schemaType = await this.Web3.getSchemaType(context.to ?? '', {
                    chainId: context.chainId
                });
                if (schemaType === types/* SchemaType */.XQ.ERC721) return;
                const token = await this.Hub.getFungibleToken(context.to ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    tokenInAddress: token?.address,
                    tokenInAmount: parameters?.value,
                    title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer', {
                        tokenAmountDescription: getTokenAmountDescription(parameters?.value, token)
                    }),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_success', {
                            tokenAmountDescription: getTokenAmountDescription(parameters?.value, token)
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_transfer_fail')
                    },
                    popup: {
                        method: name
                    }
                };
            }
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/ERC721.ts


class ERC721Descriptor extends BaseDescriptor {
    async getContractSymbol(chainId, address) {
        const contract = await this.Web3.getNonFungibleTokenContract(address, undefined, {
            chainId
        });
        return contract?.symbol && contract?.symbol.length > 15 ? `${contract?.symbol.slice(0, 12)}...` : contract?.symbol;
    }
    async compute(context) {
        if (!context.methods?.length) return;
        for (const { name, parameters } of context.methods){
            switch(name){
                case 'approve':
                    {
                        const schemaType = await this.Web3.getSchemaType(context.to);
                        if (parameters?.to === undefined || parameters?.tokenId === undefined || !schemaType) break;
                        const symbol = await this.getContractSymbol(context.chainId, context.to);
                        return {
                            chainId: context.chainId,
                            title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_title', {
                                action: 'Unlock'
                            }),
                            description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve', {
                                symbol,
                                action: 'Unlock'
                            }),
                            snackbar: {
                                successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_success', {
                                    symbol,
                                    action: 'Unlock'
                                }),
                                failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_fail', {
                                    action: 'unlock'
                                })
                            },
                            popup: {
                                method: name
                            }
                        };
                    }
                case 'setApprovalForAll':
                    {
                        if (parameters?.operator === undefined || parameters?.approved === undefined) break;
                        const action = parameters?.approved === false ? 'Revoke' : 'Unlock';
                        const symbol = await this.getContractSymbol(context.chainId, context.to);
                        return {
                            chainId: context.chainId,
                            title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_title', {
                                action
                            }),
                            description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve', {
                                symbol,
                                action
                            }),
                            snackbar: {
                                successfulDescription: parameters?.approved === false ? instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_revoke_success', {
                                    symbol,
                                    action
                                }) : instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_success', {
                                    symbol,
                                    action
                                }),
                                failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_approve_fail', {
                                    action: action.toLowerCase()
                                })
                            },
                            popup: {
                                erc721Spender: typeof parameters.operator === 'string' && action === 'Unlock' ? parameters.operator : undefined,
                                method: name
                            }
                        };
                    }
                case 'transferFrom':
                case 'safeTransferFrom':
                    {
                        if (!parameters?.tokenId) return;
                        const symbol = await this.getContractSymbol(context.chainId, context.to);
                        return {
                            chainId: context.chainId,
                            title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_transfer_title'),
                            description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_transfer', {
                                symbol
                            }),
                            snackbar: {
                                successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_transfer_success', {
                                    symbol
                                }),
                                failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_nft_transfer_fail')
                            },
                            popup: {
                                method: name,
                                tokenId: parameters.tokenId
                            }
                        };
                    }
                default:
                    return;
            }
        }
        return;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(12113);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/UniswapV3MulticallFunctionExactInput.json
const UniswapV3MulticallFunctionExactInput_namespaceObject = JSON.parse('["tuple(bytes,address,uint256,uint256,uint256)"]');
;// CONCATENATED MODULE: ./packages/web3-contracts/abis/UniswapV3MulticallFunctionExactInputSingle.json
const UniswapV3MulticallFunctionExactInputSingle_namespaceObject = JSON.parse('["tuple(address,address,uint24,address,uint256,uint256,uint256,uint160)"]');
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Swap.ts








class SwapDescriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        const { DODO_ETH_ADDRESS, OPENOCEAN_ETH_ADDRESS, ZERO_X_ETH_ADDRESS, BANCOR_ETH_ADDRESS } = (0,constants/* getTraderConstants */.Gr)(context.chainId);
        if (!context.methods?.find((x)=>x.name)) return;
        const nativeToken = await this.Web3.getNativeToken({
            chainId: context.chainId
        });
        for (const method of context.methods){
            const parameters = method.parameters;
            if (method.name === 'swapExactETHForTokens' && parameters?.path && parameters.amountOutMin) {
                const outputToken = await this.Hub.getFungibleToken((0,last/* default */.Z)(parameters.path) ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: nativeToken?.address,
                    tokenInAmount: context.value,
                    description: `Swap ${getTokenAmountDescription(context.value, nativeToken)} for ${outputToken?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(context.value, nativeToken)} for ${getTokenAmountDescription(parameters.amountOutMin, outputToken)} successfully.`,
                        failedDescription: `Failed to swap ${outputToken?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            if (method.name === 'swapExactTokensForETH' && parameters?.path && parameters?.amountOutMin && parameters?.amountIn) {
                const outputToken = await this.Hub.getFungibleToken((0,head/* default */.Z)(parameters.path) ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: outputToken?.address,
                    tokenInAmount: parameters?.amountIn,
                    description: `Swap ${getTokenAmountDescription(parameters.amountIn, outputToken)} for ${nativeToken?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.amountIn, outputToken)} for ${getTokenAmountDescription(parameters.amountOutMin, nativeToken)} successfully.`,
                        failedDescription: `Failed to swap ${nativeToken?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            if (method.name === 'swapExactTokensForTokens' && parameters?.path && parameters?.amountIn && parameters?.amountOutMin) {
                const tokenIn = await this.Hub.getFungibleToken((0,head/* default */.Z)(parameters.path) ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = await this.Hub.getFungibleToken((0,last/* default */.Z)(parameters.path) ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.amountIn,
                    description: `Swap ${getTokenAmountDescription(parameters.amountIn, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.amountIn, tokenIn)} for ${getTokenAmountDescription(parameters.amountOutMin, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            // DODO
            if (method.name === 'mixSwap' && parameters?.fromToken && parameters?.toToken && parameters?.fromTokenAmount && parameters?.minReturnAmount) {
                const tokenIn = (0,isSameAddress/* isSameAddress */.W)(parameters.fromToken, DODO_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(parameters.fromToken ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = (0,isSameAddress/* isSameAddress */.W)(parameters.toToken, DODO_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(parameters.toToken ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.fromTokenAmount,
                    description: `Swap ${getTokenAmountDescription(parameters.fromTokenAmount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.fromTokenAmount, tokenIn)} for ${getTokenAmountDescription(parameters.minReturnAmount, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            // DODO: swap DODO for eth
            if (method.name === 'dodoSwapV2TokenToETH' && parameters?.fromToken && parameters?.fromTokenAmount && parameters?.minReturnAmount) {
                const tokenIn = await this.Hub.getFungibleToken(parameters.fromToken ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = nativeToken;
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.fromTokenAmount,
                    description: `Swap ${getTokenAmountDescription(parameters.fromTokenAmount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.fromTokenAmount, tokenIn)} for ${getTokenAmountDescription(parameters.minReturnAmount, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            // Openocean
            if (method.name === 'swap') {
                const _parameters = parameters;
                if (!_parameters?.[1]?.srcToken || !_parameters?.[1]?.dstToken || !_parameters?.[1]?.amount || !_parameters?.[1]?.minReturnAmount) return;
                const tokenIn = (0,isSameAddress/* isSameAddress */.W)(_parameters[1].srcToken, OPENOCEAN_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(_parameters[1].srcToken ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = (0,isSameAddress/* isSameAddress */.W)(_parameters[1].dstToken, OPENOCEAN_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(_parameters[1].dstToken ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: _parameters[1].amount,
                    description: `Swap ${getTokenAmountDescription(_parameters[1].amount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(_parameters[1].amount, tokenIn)} for ${getTokenAmountDescription(_parameters?.[1]?.minReturnAmount, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            if (method.name === 'transformERC20' && parameters?.inputToken && parameters?.inputTokenAmount && parameters?.minOutputTokenAmount && parameters?.outputToken) {
                const tokenIn = (0,isSameAddress/* isSameAddress */.W)(parameters.inputToken, ZERO_X_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(parameters.inputToken ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = (0,isSameAddress/* isSameAddress */.W)(parameters.outputToken, ZERO_X_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(parameters.outputToken ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.inputTokenAmount,
                    description: `Swap ${getTokenAmountDescription(parameters.inputTokenAmount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.inputTokenAmount, tokenIn)} for ${getTokenAmountDescription(parameters.minOutputTokenAmount, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    }
                };
            }
            // Bancor
            if (method.name === 'convertByPath' && parameters?._amount && parameters?._beneficiary && parameters?._minReturn && parameters?._path) {
                const tokenInAddress = (0,head/* default */.Z)(parameters._path);
                const tokenOutAddress = (0,last/* default */.Z)(parameters._path);
                const tokenIn = (0,isSameAddress/* isSameAddress */.W)(tokenInAddress, BANCOR_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(tokenInAddress ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = (0,isSameAddress/* isSameAddress */.W)(tokenOutAddress, BANCOR_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(tokenOutAddress ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters._amount,
                    description: `Swap ${getTokenAmountDescription(parameters._amount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters._amount, tokenIn)} for ${getTokenAmountDescription(parameters._minReturn, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            // Uniswap V3
            if (method.name === 'multicall' && method.parameters?.[0]?.[0]) {
                try {
                    const results = abiCoder/* abiCoder */.r.decodeParameters(context.chainId === types/* ChainId */.a_.Arbitrum ? UniswapV3MulticallFunctionExactInputSingle_namespaceObject : UniswapV3MulticallFunctionExactInput_namespaceObject, method.parameters[0][0].slice(10));
                    let path;
                    let tokenInAddress;
                    let tokenOutAddress;
                    let recipient;
                    let amountIn;
                    let amountOutMinimum;
                    if (context.chainId === types/* ChainId */.a_.Arbitrum) {
                        const WETH_ADDRESS = (0,constants/* getTokenConstant */._x)(context.chainId, 'WETH_ADDRESS');
                        [tokenInAddress, tokenOutAddress, , recipient, , amountIn, amountOutMinimum] = results['0'];
                        if ((0,isSameAddress/* isSameAddress */.W)(WETH_ADDRESS, tokenOutAddress) && (0,address/* isNativeTokenAddress */.qw)(recipient)) {
                            tokenOutAddress = nativeToken?.address ?? '';
                        }
                    } else {
                        [path, tokenOutAddress, , amountIn, amountOutMinimum] = results['0'];
                        tokenInAddress = path.slice(0, 42);
                    }
                    const tokenIn = (0,address/* isNativeTokenAddress */.qw)(tokenInAddress) ? nativeToken : await this.Hub.getFungibleToken(tokenInAddress ?? '', {
                        chainId: context.chainId
                    });
                    const tokenOut = (0,address/* isNativeTokenAddress */.qw)(tokenOutAddress) ? nativeToken : await this.Hub.getFungibleToken(tokenOutAddress ?? '', {
                        chainId: context.chainId
                    });
                    return {
                        chainId: context.chainId,
                        title: 'Swap Token',
                        tokenInAddress: tokenIn?.address,
                        tokenInAmount: amountIn,
                        description: `Swap ${getTokenAmountDescription(amountIn, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                        snackbar: {
                            successfulDescription: `Swap ${getTokenAmountDescription(amountIn, tokenIn)} for ${getTokenAmountDescription(amountOutMinimum, tokenOut)} successfully.`,
                            failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                        },
                        popup: {
                            method: method.name
                        }
                    };
                } catch  {
                    return {
                        chainId: context.chainId,
                        title: 'Swap Token',
                        description: 'Swap with Uniswap V3',
                        popup: {
                            method: method.name
                        }
                    };
                }
            }
            // 0x ETH mainnet
            if ([
                'sellToUniswap',
                'sellToPancakeSwap'
            ].includes(method.name ?? '') && parameters?.minBuyAmount && parameters?.sellAmount && parameters?.tokens) {
                const tokenInAddress = (0,head/* default */.Z)(parameters.tokens);
                const tokenOutAddress = (0,last/* default */.Z)(parameters.tokens);
                const tokenIn = (0,isSameAddress/* isSameAddress */.W)(tokenInAddress, ZERO_X_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(tokenInAddress ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = (0,isSameAddress/* isSameAddress */.W)(tokenOutAddress, ZERO_X_ETH_ADDRESS) ? nativeToken : await this.Hub.getFungibleToken(tokenOutAddress ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.sellAmount,
                    description: `Swap ${getTokenAmountDescription(parameters.sellAmount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.sellAmount, tokenIn)} for ${getTokenAmountDescription(parameters.minBuyAmount, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            // Wrap & Unwrap, e.g. WETH <=> ETH
            if ([
                'withdraw',
                'deposit'
            ].includes(method.name ?? '')) {
                const actionName = method.name === 'withdraw' ? instance/* i18NextInstance */.BV.t('plugin_trader_unwrap') : instance/* i18NextInstance */.BV.t('plugin_trader_wrap');
                const amount = method.name === 'withdraw' ? parameters?.wad : context.value;
                const withdrawToken = await this.Hub.getFungibleToken(context.to ?? '', {
                    chainId: context.chainId
                });
                const tokenIn = method.name === 'withdraw' ? withdrawToken : nativeToken;
                const tokenOut = method.name === 'withdraw' ? nativeToken : withdrawToken;
                return {
                    chainId: context.chainId,
                    title: `${actionName} Token`,
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: amount,
                    description: `${actionName} ${getTokenAmountDescription(amount, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `${actionName} ${getTokenAmountDescription(amount, tokenIn)} for ${getTokenAmountDescription(amount, tokenOut)} successfully.`,
                        failedDescription: `Failed to ${actionName} ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
            if (method.name === 'swapExactTokensForAVAX' && parameters?.amountIn && parameters?.amountOutMin && parameters?.path) {
                const tokenIn = await this.Hub.getFungibleToken((0,head/* default */.Z)(parameters.path) ?? '', {
                    chainId: context.chainId
                });
                const tokenOut = nativeToken;
                return {
                    chainId: context.chainId,
                    title: 'Swap Token',
                    tokenInAddress: tokenIn?.address,
                    tokenInAmount: parameters.amountIn,
                    description: `Swap ${getTokenAmountDescription(parameters.amountIn, tokenIn)} for ${tokenOut?.symbol ?? ''}.`,
                    snackbar: {
                        successfulDescription: `Swap ${getTokenAmountDescription(parameters.amountIn, tokenIn)} for ${getTokenAmountDescription(parameters.amountOutMin, tokenOut)} successfully.`,
                        failedDescription: `Failed to swap ${tokenOut?.symbol ?? ''}.`
                    },
                    popup: {
                        method: method.name
                    }
                };
            }
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Savings.ts



class SavingsDescriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        for (const { name, parameters } of context.methods){
            // Lido
            if (name === 'submit' && parameters?._referral) {
                const token = await this.Web3.getNativeToken({
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    tokenInAddress: token?.address,
                    tokenInAmount: context.value,
                    title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit', {
                        tokenAmountDescription: getTokenAmountDescription(context.value, token)
                    }),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_success', {
                            tokenAmountDescription: getTokenAmountDescription(context.value, token)
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_fail', {
                            symbol: token?.symbol ?? 'token'
                        })
                    },
                    popup: {
                        method: name
                    }
                };
            }
            // Aave
            if (name === 'deposit' && parameters?.amount && parameters?.asset) {
                const token = await this.Hub.getFungibleToken(parameters?.asset ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    tokenInAddress: token?.address,
                    tokenInAmount: parameters?.amount,
                    title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit', {
                        tokenAmountDescription: getTokenAmountDescription(parameters?.amount, token)
                    }),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_success', {
                            tokenAmountDescription: getTokenAmountDescription(parameters?.amount, token)
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_deposit_fail', {
                            symbol: token?.symbol ?? 'token'
                        })
                    },
                    popup: {
                        method: name
                    }
                };
            }
            if (name === 'withdraw' && parameters?.amount && parameters?.asset) {
                const token = await this.Hub.getFungibleToken(parameters?.asset ?? '', {
                    chainId: context.chainId
                });
                return {
                    chainId: context.chainId,
                    tokenInAddress: token?.address,
                    tokenInAmount: parameters?.amount,
                    title: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_withdraw_title'),
                    description: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_withdraw', {
                        tokenAmountDescription: getTokenAmountDescription(parameters?.amount, token)
                    }),
                    snackbar: {
                        successfulDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_withdraw_success', {
                            tokenAmountDescription: getTokenAmountDescription(parameters?.amount, token)
                        }),
                        failedDescription: instance/* i18NextInstance */.BV.t('plugin_infra_descriptor_token_withdraw_fail', {
                            symbol: token?.symbol ?? 'token'
                        })
                    },
                    popup: {
                        method: name
                    }
                };
            }
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/SmartPay.ts

class SmartPayDescriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        for (const { name, parameters } of context.methods){
            switch(name){
                case 'fund':
                    if (!parameters?.owner || !parameters.nonce) break;
                    return {
                        chainId: context.chainId,
                        title: 'Create Smart Pay wallet',
                        description: 'Transaction submitted.',
                        snackbar: {
                            successfulDescription: 'Created a SmartPay wallet on Polygon network.',
                            failedDescription: ''
                        },
                        popup: {
                            method: name
                        }
                    };
                case 'deploy':
                    return {
                        chainId: context.chainId,
                        title: 'Deploy Smarty Pay wallet',
                        description: 'Transaction submitted.',
                        snackbar: {
                            successfulDescription: 'Deploy a SmartPay wallet on Polygon network.',
                            failedDescription: ''
                        },
                        popup: {
                            method: name
                        }
                    };
                case 'changeOwner':
                    return {
                        chainId: context.chainId,
                        title: 'Change Owner',
                        description: 'Transaction submitted.',
                        snackbar: {
                            successfulDescription: 'Change owner Successfully.',
                            failedDescription: ''
                        },
                        popup: {
                            method: name
                        }
                    };
                default:
                    continue;
            }
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Lens.ts

class LensDescriptor extends BaseDescriptor {
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        for (const { name } of context.methods){
            switch(name){
                case 'followWithSig':
                    return {
                        chainId: context.chainId,
                        title: 'Follow User',
                        description: 'Transaction submitted.',
                        snackbar: {
                            failedDescription: 'Transaction was Rejected!'
                        },
                        popup: {
                            method: name
                        }
                    };
            }
        }
        return;
    }
}

// EXTERNAL MODULE: ./packages/web3-providers/src/Airdrop/index.ts
var Airdrop = __webpack_require__(19906);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter/descriptors/Airdrop.ts



class AirdropDescriptor extends BaseDescriptor {
    Airdrop = new Airdrop/* AirdropAPI */.H();
    async compute(context_) {
        const context = context_;
        if (!context.methods?.length) return;
        for (const { name, parameters } of context.methods){
            if (name === 'claim' && parameters?._eventIndex !== undefined) {
                const result = await this.Airdrop.getPoolInfo(context.chainId, parameters._eventIndex);
                const token = result?.token ? await this.Hub.getFungibleToken(result.token, {
                    chainId: context.chainId
                }) : undefined;
                return {
                    chainId: context.chainId,
                    title: 'Claim your Airdrop',
                    description: 'Transaction submitted.',
                    snackbar: {
                        successfulDescription: `${getTokenAmountDescription(parameters?._amount, token)} were successfully claimed`,
                        failedDescription: 'Transaction was Rejected!'
                    },
                    popup: {
                        method: name
                    }
                };
            }
        }
        return;
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/TransactionFormatter.ts
class TransactionFormatterState {
    constructor(context){}
    async formatTransaction(chainId, transaction, txHash) {
        const context = await this.createContext(chainId, transaction, txHash);
        return this.createDescriptor(chainId, transaction, context);
    }
    createContext(chainId, transaction, txHash) {
        throw new Error('Method not implemented.');
    }
    createDescriptor(chainId, transaction, context) {
        throw new Error('Method not implemented.');
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionFormatter.ts



// built-in descriptors
















class TransactionFormatter extends TransactionFormatterState {
    Web3 = new ConnectionReadonlyAPI/* ConnectionReadonlyAPI */.S();
    descriptors = {
        [specs/* TransactionDescriptorType */.vt.TRANSFER]: [
            new TransferTokenDescriptor()
        ],
        [specs/* TransactionDescriptorType */.vt.INTERACTION]: [
            new AirdropDescriptor(),
            new LensDescriptor(),
            new SavingsDescriptor(),
            new GitcoinDescriptor(),
            new MaskBoxDescriptor(),
            new RedPacketDescriptor(),
            new SmartPayDescriptor(),
            new ERC20Descriptor(),
            new ERC721Descriptor(),
            new SwapDescriptor(),
            new BaseDescriptor()
        ],
        [specs/* TransactionDescriptorType */.vt.DEPLOYMENT]: [
            new ContractDeploymentDescriptor()
        ],
        [specs/* TransactionDescriptorType */.vt.RETRY]: [],
        [specs/* TransactionDescriptorType */.vt.CANCEL]: [
            new CancelDescriptor()
        ]
    };
    constructor(context){
        super(context);
    }
    async createContext(chainId, transaction, hash) {
        const { from, value, data, to, functionSignature, functionParameters } = new AccountTransaction/* AccountTransaction */.K(transaction);
        const context = {
            type: specs/* TransactionDescriptorType */.vt.INTERACTION,
            chainId,
            from,
            to,
            value,
            hash
        };
        if (data) {
            // contract interaction
            const abis = readABIs(functionSignature);
            if (abis?.length) {
                try {
                    return {
                        ...context,
                        type: specs/* TransactionDescriptorType */.vt.INTERACTION,
                        methods: abis.map((x)=>({
                                name: x.name,
                                parameters: abiCoder/* abiCoder */.r.decodeParameters(x.parameters, functionParameters ?? '')
                            }))
                    };
                } catch  {}
            }
            // do nothing
            // contract deployment
            if ((0,address/* isZeroAddress */.uO)(to)) {
                return {
                    ...context,
                    type: specs/* TransactionDescriptorType */.vt.DEPLOYMENT,
                    code: data
                };
            }
        }
        if (to) {
            let code = '';
            try {
                code = await this.Web3.getCode(to, {
                    chainId
                });
            } catch  {
                code = '';
            }
            // send ether tx
            if ((0,address/* isEmptyHex */.w2)(code)) {
                return {
                    ...context,
                    type: specs/* TransactionDescriptorType */.vt.TRANSFER
                };
            }
            return {
                ...context,
                type: specs/* TransactionDescriptorType */.vt.INTERACTION
            };
        }
        throw new Error('Failed to format transaction.');
    }
    async createDescriptor(chainId, transaction, context) {
        for (const descriptor of this.descriptors[context.type]){
            const computed = await descriptor.compute(context);
            if (computed) return {
                ...computed,
                context,
                chainId,
                type: context.type,
                _tx: transaction
            };
        }
        throw new Error('Failed to computed transaction descriptor.');
    }
}


/***/ }),

/***/ 40306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ TransactionWatcher)
});

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var dist = __webpack_require__(78757);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/EtherscanURL.ts
var EtherscanURL = __webpack_require__(4070);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Etherscan/helpers.ts
function toTransaction(transaction) {
    return {
        nonce: Number.parseInt(transaction.nonce, 10),
        blockHash: transaction.blockHash,
        blockNumber: Number.parseInt(transaction.blockNumber, 10),
        from: transaction.from,
        to: transaction.to,
        gas: Number.parseInt(transaction.gas, 10),
        gasPrice: transaction.gasPrice,
        hash: transaction.hash,
        input: transaction.input,
        transactionIndex: Number.parseInt(transaction.transactionIndex, 10),
        value: transaction.value,
        status: transaction.txreceipt_status,
        confirmations: Number.parseInt(transaction.confirmations, 10)
    };
}

// EXTERNAL MODULE: ./packages/web3-providers/src/helpers/fetchJSON.ts
var fetchJSON = __webpack_require__(11834);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Etherscan/apis/ExplorerAPI.ts




class EtherscanExplorerAPI {
    async getLatestTransactions(chainId, account, { offset = 10 } = {}) {
        const { result: transactions = [] } = await (0,fetchJSON/* fetchJSON */.ZV)((0,dist/* default */.ZP)(EtherscanURL/* EtherscanURL */.c.from(chainId), {
            chain_id: chainId,
            module: 'account',
            action: 'txlist',
            address: account.toLowerCase(),
            startBlock: 0,
            endblock: 999999999999,
            page: 1,
            offset,
            sort: 'desc'
        }));
        return transactions.map(toTransaction);
    }
}
const EtherscanExplorer = new EtherscanExplorerAPI();

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionWatcher/checkers/AccountChecker.ts



class TTL {
    cache = {};
    get(key) {
        if (!this.cache[key]) return;
        const { value, at, ttl } = this.cache[key];
        return Date.now() - at < ttl ? value : undefined;
    }
    set(key, value, ttl = Number.MAX_SAFE_INTEGER) {
        this.cache[key] = {
            at: Date.now(),
            ttl,
            value
        };
    }
}
/**
 * Fetch latest tx list of the the given account. It creates a signature for each transaction.
 * Treat two transactions the same with the identical transaction hash or signature.
 */ class AccountChecker {
    static CHECK_LATEST_TRANSACTION_SIZE = 5;
    ttl = new TTL();
    getExplorerTransactionId(transaction) {
        if (!transaction) return '';
        const { from, to, input, value } = transaction;
        return (0,lib.sha3)([
            from,
            to,
            input || '0x0',
            (0,lib.toHex)(value || '0x0') || '0x0'
        ].join('_')) ?? '';
    }
    getTransactionId(transaction) {
        const { from, to, data = '0x0', value = '0x0' } = transaction;
        if (!from || !to) return '';
        return (0,lib.sha3)([
            from,
            to,
            data,
            value
        ].join('_')) ?? '';
    }
    async fetchLatestTransactions(chainId, account) {
        const key = `${chainId}_${account.toLowerCase}`;
        const hit = this.ttl.get(key);
        if (hit) return hit;
        const transactions = await EtherscanExplorer.getLatestTransactions(chainId, account, {
            offset: AccountChecker.CHECK_LATEST_TRANSACTION_SIZE
        });
        this.ttl.set(key, transactions, 15 * 1000);
        return transactions;
    }
    async getStatus(chainId, id, transaction) {
        const account = transaction.from;
        if (!account) throw new Error('Cannot found account.');
        const latestTransactions = await this.fetchLatestTransactions(chainId, account);
        const txId = this.getTransactionId(transaction);
        const tx = latestTransactions.find((x)=>x.hash === id || this.getExplorerTransactionId(x) === txId);
        if (!tx) return specs.TransactionStatusType.NOT_DEPEND;
        // '1' for successful transactions and '0' for failed transactions.
        return tx.status === '1' ? specs.TransactionStatusType.SUCCEED : specs.TransactionStatusType.FAILED;
    }
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/getTransactionStatusType.ts
var getTransactionStatusType = __webpack_require__(29530);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/ConnectionReadonlyAPI.ts + 2 modules
var ConnectionReadonlyAPI = __webpack_require__(3543);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionWatcher/checkers/ReceiptChecker.ts


class ReceiptChecker {
    Web3 = new ConnectionReadonlyAPI/* ConnectionReadonlyAPI */.S();
    async getStatus(chainId, id, transaction) {
        const receipt = await this.Web3.getTransactionReceipt(id, {
            chainId
        });
        return (0,getTransactionStatusType/* getTransactionStatusType */.j)(receipt ?? null);
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionWatcher/checker.ts


const TransactionCheckers = [
    new AccountChecker(),
    new ReceiptChecker()
];

// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/EVM/apis/Web3StateAPI.ts
var Web3StateAPI = __webpack_require__(39850);
// EXTERNAL MODULE: ./node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var events_dist = __webpack_require__(93441);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/subscription.ts
var subscription = __webpack_require__(28129);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Base/state/TransactionWatcher.ts



class Checker {
    checkers;
    subscriptions;
    options;
    timer;
    constructor(checkers, subscriptions, options){
        this.checkers = checkers;
        this.subscriptions = subscriptions;
        this.options = options;
        this.timer = null;
    }
    async check() {
        const chainId = this.subscriptions.chainId.getCurrentValue();
        const transactions = this.subscriptions.transactions.getCurrentValue().filter((x)=>x.status === specs.TransactionStatusType.NOT_DEPEND).flatMap((x)=>Object.entries(x.candidates));
        if (!transactions.length) return;
        for (const [id, transaction] of transactions){
            for (const checker of this.checkers){
                try {
                    const status = await checker.getStatus(chainId, id, transaction);
                    if (status !== specs.TransactionStatusType.NOT_DEPEND) {
                        await this.options.onNotify(chainId, id, transaction, status);
                        break;
                    }
                } catch (error) {
                    console.warn('Failed to check transaction status.');
                }
            }
        }
        // kick to the next round
        this.startCheck();
    }
    startCheck() {
        this.stopCheck();
        this.timer = setTimeout(this.check.bind(this), this.options.delay);
    }
    stopCheck() {
        if (this.timer !== null) clearTimeout(this.timer);
        this.timer = null;
    }
}
class TransactionWatcherState {
    context;
    subscriptions;
    options;
    emitter;
    constructor(context, subscriptions, options)/** Default block delay in seconds */ /** Get all supported checkers */ {
        this.context = context;
        this.subscriptions = subscriptions;
        this.options = options;
        this.emitter = new events_dist/* Emitter */.Q5();
        const checker = new Checker(this.options.getTransactionCheckers(), this.subscriptions, {
            delay: this.options.defaultBlockDelay * 1000,
            onNotify: this.notifyTransaction.bind(this)
        });
        (0,subscription/* mergeSubscription */.EB)(subscriptions.chainId, subscriptions.transactions).subscribe(()=>{
            checker.startCheck();
        });
    }
    async notifyError(error, request) {
        this.emitter.emit('error', error, request);
    }
    async notifyTransaction(chainId, id, transaction, status) {
        throw new Error('Method not implemented.');
    }
}

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/EVM/state/TransactionWatcher.ts





class TransactionWatcher extends TransactionWatcherState {
    constructor(context, subscriptions){
        super(context, subscriptions, {
            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            defaultBlockDelay: 15,
            getTransactionCheckers: ()=>TransactionCheckers
        });
    }
    async notifyTransaction(chainId, id, transaction, status) {
        const { Transaction } = Web3StateAPI.Web3StateRef.value;
        if (Transaction && transaction.from && status !== specs.TransactionStatusType.NOT_DEPEND) {
            await Transaction.updateTransaction?.(chainId, transaction.from, id, status);
        }
        this.emitter.emit('progress', chainId, id, status, transaction);
    }
}


/***/ }),

/***/ 88245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowWeb3StateRef: () => (/* binding */ FlowWeb3StateRef),
/* harmony export */   createFlowState: () => (/* binding */ createFlowState)
/* harmony export */ });
/* harmony import */ var _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65592);
/* harmony import */ var _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14545);
/* harmony import */ var _state_Settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58792);
/* harmony import */ var _state_Transaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38684);
/* harmony import */ var _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1261);
/* harmony import */ var _state_Network_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85978);
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);







const FlowWeb3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .flow */ .ls.state;
    }
};
async function createFlowState(context) {
    const Provider_ = await _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__/* .Provider */ .z.new(context);
    return {
        AddressBook: new _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_2__/* .AddressBook */ .o(context),
        IdentityService: new _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_3__/* .IdentityService */ .P(context),
        Settings: new _state_Settings_js__WEBPACK_IMPORTED_MODULE_4__/* .Settings */ .Z(context),
        Network: new _state_Network_js__WEBPACK_IMPORTED_MODULE_5__/* .Network */ .Z(context),
        Transaction: new _state_Transaction_js__WEBPACK_IMPORTED_MODULE_6__/* .Transaction */ .Y(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_
    };
}


/***/ }),

/***/ 65592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ AddressBook)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44050);
/* harmony import */ var _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81113);




class AddressBook extends _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__/* .AddressBookState */ .C {
    context;
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_FLOW,
            isValidAddress: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At,
            isSameAddress: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W,
            formatAddress: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .formatAddress */ .Tg
        });
        this.context = context;
    }
}


/***/ }),

/***/ 1261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ IdentityService)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72845);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44050);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24835);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45569);
/* harmony import */ var _Base_state_Identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97627);




function getFlowAddress(bio) {
    const addressMatched = bio.match(/\b0x\w{16}\b/) ?? null;
    const address = addressMatched?.[0];
    if (address && (0,_masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .isValidAddress */ .At)(address)) return address;
    return;
}
class IdentityService extends _Base_state_Identity_js__WEBPACK_IMPORTED_MODULE_1__/* .IdentityServiceState */ .O {
    context;
    constructor(context){
        super();
        this.context = context;
    }
    async getFromRemote({ bio = '' }) {
        const address = getFlowAddress(bio);
        return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
            address ? {
                pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID */ .F.PLUGIN_FLOW,
                type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SocialAddressType */ .b.Address,
                label: address,
                address
            } : null
        ]);
    }
}


/***/ }),

/***/ 85978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _Base_state_Network_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49374);


class Network extends _Base_state_Network_js__WEBPACK_IMPORTED_MODULE_0__/* .NetworkState */ .G {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_FLOW
        });
    }
}


/***/ }),

/***/ 14545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44050);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59190);
/* harmony import */ var _providers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(781);
/* harmony import */ var _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36347);
/* harmony import */ var _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86039);






class Provider extends _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A {
    providers = _providers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .FlowProviders */ .W;
    isValidAddress = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At;
    isValidChainId = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainId */ .JW;
    isSameAddress = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W;
    getInvalidChainId = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getInvalidChainId */ .p6;
    getDefaultNetworkType = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultNetworkType */ .H2;
    getDefaultProviderType = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultProviderType */ .Xo;
    getDefaultChainId = _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultChainId */ .tA;
    getNetworkTypeFromChainId(chainId) {
        return _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_4__/* .FlowChainResolver */ .ql.networkType(chainId) ?? _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .td.Flow;
    }
    constructor(io){
        super(io);
    }
    storage = _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A.createStorage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_FLOW, (0,_masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultChainId */ .tA)(), (0,_masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultProviderType */ .Xo)());
    static async new(io) {
        const provider = new this(io);
        await provider.setup();
        return provider;
    }
}


/***/ }),

/***/ 58792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49547);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);


class Settings extends _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__/* .SettingsState */ .$ {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_FLOW
        });
    }
}


/***/ }),

/***/ 38684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22905);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44050);
/* harmony import */ var _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47346);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);



class Transaction extends _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .TransactionState */ .g {
    context;
    subscriptions;
    constructor(context, subscriptions){
        super(context, _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_1__/* .ChainIdList */ .rY, subscriptions, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_FLOW,
            formatAddress: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_3__/* .formatAddress */ .Tg,
            isValidChainId: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_3__/* .isValidChainId */ .JW
        });
        this.context = context;
        this.subscriptions = subscriptions;
    }
}


/***/ }),

/***/ 21984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolanaWeb3StateRef: () => (/* binding */ SolanaWeb3StateRef),
/* harmony export */   createSolanaState: () => (/* binding */ createSolanaState)
/* harmony export */ });
/* harmony import */ var _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59614);
/* harmony import */ var _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36330);
/* harmony import */ var _state_Settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57561);
/* harmony import */ var _state_Transaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84349);
/* harmony import */ var _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96738);
/* harmony import */ var _state_Network_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72090);
/* harmony import */ var _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45025);







const SolanaWeb3StateRef = {
    get value () {
        return _Manager_registry_js__WEBPACK_IMPORTED_MODULE_0__/* .solana */ .Zj.state;
    }
};
async function createSolanaState(context) {
    const Provider_ = await _state_Provider_js__WEBPACK_IMPORTED_MODULE_1__/* .Provider */ .z.new(context);
    return {
        AddressBook: new _state_AddressBook_js__WEBPACK_IMPORTED_MODULE_2__/* .AddressBook */ .o(context),
        IdentityService: new _state_IdentityService_js__WEBPACK_IMPORTED_MODULE_3__/* .IdentityService */ .P(context),
        Settings: new _state_Settings_js__WEBPACK_IMPORTED_MODULE_4__/* .Settings */ .Z(context),
        Network: new _state_Network_js__WEBPACK_IMPORTED_MODULE_5__/* .Network */ .Z(context),
        Transaction: new _state_Transaction_js__WEBPACK_IMPORTED_MODULE_6__/* .Transaction */ .Y(context, {
            chainId: Provider_.chainId,
            account: Provider_.account
        }),
        Provider: Provider_
    };
}


/***/ }),

/***/ 59614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ AddressBook)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97470);
/* harmony import */ var _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81113);




class AddressBook extends _Base_state_AddressBook_js__WEBPACK_IMPORTED_MODULE_0__/* .AddressBookState */ .C {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_SOLANA,
            isValidAddress: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At,
            isSameAddress: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W,
            formatAddress: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .formatAddress */ .Tg
        });
    }
}


/***/ }),

/***/ 96738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ IdentityService)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/helpers/address.ts + 2 modules
var helpers_address = __webpack_require__(97470);
// EXTERNAL MODULE: ./packages/web3-providers/src/Web3/Base/state/Identity.ts
var Identity = __webpack_require__(97627);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./node_modules/.pnpm/@solana+web3.js@1.75.0/node_modules/@solana/web3.js/lib/index.browser.esm.js
var index_browser_esm = __webpack_require__(20374);
// EXTERNAL MODULE: ./node_modules/.pnpm/@bonfida+spl-name-service@0.1.50_@solana+buffer-layout@4.0.1_@solana+spl-token@0.1.8_@solana+_pcnm6ddhsndtai733dtxa7aqtq/node_modules/@bonfida/spl-name-service/dist/index.js
var dist = __webpack_require__(17437);
// EXTERNAL MODULE: ./packages/shared-base/src/types/NameService.ts
var NameService = __webpack_require__(91461);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/sdk/index.ts
var sdk = __webpack_require__(5986);
// EXTERNAL MODULE: ./packages/web3-shared/solana/src/types.ts
var types = __webpack_require__(97834);
;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Solana/apis/DomainAPI.ts





class SolanaDomainAPI {
    client = (0,sdk/* createClient */.e)(types/* ChainId */.a_.Mainnet);
    SOL_TLD_AUTHORITY = new index_browser_esm.PublicKey('58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx');
    id = NameService/* NameServiceID */.S.SOL;
    async getKey(name) {
        const hashedName = await (0,dist.getHashedName)(name);
        const domainKey = await (0,dist.getNameAccountKey)(hashedName, undefined, this.SOL_TLD_AUTHORITY);
        return {
            domainKey,
            hashedName
        };
    }
    async lookup(name) {
        try {
            const { domainKey } = await this.getKey(name.replace('.sol', ''));
            const registry = await dist.NameRegistryState.retrieve(this.client, domainKey);
            const owner = registry.registry.owner.toBase58();
            return owner;
        } catch  {
            return '';
        }
    }
    async reverse(address) {
        const domainKey = new index_browser_esm.PublicKey(address);
        const keys = await (0,dist.getAllDomains)(this.client, domainKey);
        // resolve the first domain
        const key = (0,head/* default */.Z)(keys);
        if (!key) return;
        const domain = await (0,dist.performReverseLookup)(this.client, key);
        return `${domain}.sol`;
    }
}
const SolanaDomain = new SolanaDomainAPI();

;// CONCATENATED MODULE: ./packages/web3-providers/src/Web3/Solana/state/IdentityService.ts





const SOL_RE = /\S{1,256}\.sol\b/i;
function getSolanaAddress(bio) {
    const addressMatched = bio.match(/\b\w{32,44}\b/);
    const address = addressMatched?.[0];
    if (address && !address.startsWith('0x') && (0,helpers_address/* isValidAddress */.At)(address)) return address;
    return;
}
function getSolanaDomain(nickname, bio) {
    const [matched] = nickname.match(SOL_RE) ?? bio.match(SOL_RE) ?? [];
    return matched;
}
function getSolanaDomainAddress(domain) {
    if (!domain) return;
    return SolanaDomain.lookup(domain);
}
class IdentityService extends Identity/* IdentityServiceState */.O {
    context;
    constructor(context){
        super();
        this.context = context;
    }
    async getFromRemote(identity) {
        const { bio = '', nickname = '' } = identity;
        const address = getSolanaAddress(bio);
        const domain = getSolanaDomain(nickname, bio);
        const domainAddress = domain ? await getSolanaDomainAddress(domain) : undefined;
        return (0,compact/* default */.Z)([
            address ? {
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
                type: SocialIdentity/* SocialAddressType */.b.Address,
                label: '',
                address
            } : undefined,
            domainAddress ? {
                pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA,
                type: SocialIdentity/* SocialAddressType */.b.SOL,
                label: domain ?? domainAddress,
                address: domainAddress
            } : undefined
        ]);
    }
}


/***/ }),

/***/ 72090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Network)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _Base_state_Network_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49374);


class Network extends _Base_state_Network_js__WEBPACK_IMPORTED_MODULE_0__/* .NetworkState */ .G {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_SOLANA
        });
    }
}


/***/ }),

/***/ 36330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97470);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97834);
/* harmony import */ var _providers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65899);
/* harmony import */ var _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46034);
/* harmony import */ var _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86039);






class Provider extends _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A {
    providers = _providers_index_js__WEBPACK_IMPORTED_MODULE_1__/* .SolanaProviders */ .F;
    isValidAddress = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .isValidAddress */ .At;
    isValidChainId = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .isValidChainId */ .JW;
    isSameAddress = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W;
    getInvalidChainId = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getInvalidChainId */ .p6;
    getDefaultNetworkType = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultNetworkType */ .H2;
    getDefaultProviderType = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultProviderType */ .Xo;
    getDefaultChainId = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultChainId */ .tA;
    getNetworkTypeFromChainId(chainId) {
        return _apis_ResolverAPI_js__WEBPACK_IMPORTED_MODULE_4__/* .SolanaChainResolver */ .ZC.networkType(chainId) ?? _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .td.Solana;
    }
    constructor(io){
        super(io);
    }
    storage = _Base_state_Provider_js__WEBPACK_IMPORTED_MODULE_0__/* .ProviderState */ .A.createStorage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID */ .F.PLUGIN_SOLANA, (0,_masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultChainId */ .tA)(), (0,_masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .getDefaultProviderType */ .Xo)());
    static async new(io) {
        const provider = new this(io);
        await provider.setup();
        return provider;
    }
}


/***/ }),

/***/ 57561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49547);


class Settings extends _Base_state_Settings_js__WEBPACK_IMPORTED_MODULE_0__/* .SettingsState */ .$ {
    constructor(context){
        super(context, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID */ .F.PLUGIN_SOLANA
        });
    }
}


/***/ }),

/***/ 84349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45118);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97470);
/* harmony import */ var _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47346);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);



class Transaction extends _Base_state_Transaction_js__WEBPACK_IMPORTED_MODULE_0__/* .TransactionState */ .g {
    constructor(context, subscriptions){
        super(context, _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_1__/* .ChainIdList */ .rY, subscriptions, {
            pluginID: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_SOLANA,
            formatAddress: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__/* .formatAddress */ .Tg,
            isValidChainId: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__/* .isValidChainId */ .JW
        });
    }
}


/***/ }),

/***/ 6475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ fetchChainId)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83135);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24770);
/* harmony import */ var _fetchJsonRpcResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6923);


async function fetchChainId(url, init) {
    const { result } = await (0,_fetchJsonRpcResponse_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchJsonRpcResponse */ .A)(url, (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .createJsonRpcPayload */ .B)(0, {
        method: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .EthereumMethodType */ .W8.ETH_CHAIN_ID,
        params: []
    }), init);
    return Number.parseInt(result, 16);
}


/***/ }),

/***/ 44747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ decodeEvents)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84976);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abiCoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);


function decodeEvents(abis, logs) {
    // the topic0 for identifying which abi to be used for decoding the event
    const listOfTopic0 = abis.map((abi)=>(0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.keccak256)(`${abi.name}(${abi.inputs?.map((x)=>x.type).join(',')})`));
    // decode events
    const events = logs.map((log)=>{
        const idx = listOfTopic0.indexOf(log.topics[0]);
        if (idx === -1) return;
        const abi = abis[idx];
        const inputs = abi?.inputs ?? [];
        return {
            // more: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html?highlight=decodeLog#decodelog
            returnValues: _abiCoder_js__WEBPACK_IMPORTED_MODULE_1__/* .abiCoder */ .r.decodeLog(inputs, log.data, abi.anonymous ? log.topics : log.topics.slice(1)),
            raw: {
                data: log.data,
                topics: log.topics
            },
            event: abi.name,
            signature: listOfTopic0[idx],
            ...log
        };
    });
    return events.reduce((accumulate, event)=>{
        if (event) accumulate[event.event] = event;
        return accumulate;
    }, {});
}


/***/ }),

/***/ 79382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SupportedAlgorithm: () => (/* reexport */ SupportedAlgorithm),
  computeHmac: () => (/* reexport */ computeHmac),
  ripemd160: () => (/* reexport */ ripemd160),
  sha256: () => (/* reexport */ sha256),
  sha512: () => (/* reexport */ sha512)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var hash = __webpack_require__(81427);
var hash_default = /*#__PURE__*/__webpack_require__.n(hash);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+bytes@5.7.0/node_modules/@ethersproject/bytes/lib.esm/index.js
var lib_esm = __webpack_require__(87737);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ethersproject+sha2@5.7.0/node_modules/@ethersproject/sha2/lib.esm/types.js
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;

// EXTERNAL MODULE: ./node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(43288);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ethersproject+sha2@5.7.0/node_modules/@ethersproject/sha2/lib.esm/_version.js
const version = "sha2/5.7.0";

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ethersproject+sha2@5.7.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js


//const _ripemd160 = _hash.ripemd160;




const logger = new logger_lib_esm/* Logger */.Yd(version);
function ripemd160(data) {
    return "0x" + (hash_default().ripemd160().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_default().sha256().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash_default().sha512().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, logger_lib_esm/* Logger */.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_default().hmac((hash_default())[algorithm], (0,lib_esm/* arrayify */.lE)(key)).update((0,lib_esm/* arrayify */.lE)(data)).digest("hex");
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ethersproject+sha2@5.7.0/node_modules/@ethersproject/sha2/lib.esm/index.js





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


/***/ }),

/***/ 37775:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRateMode","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRate","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"premium","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"FlashLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collateralAsset","type":"address"},{"indexed":true,"internalType":"address","name":"debtAsset","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"debtToCover","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidatedCollateralAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"LiquidationCall","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"RebalanceStableBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"repayer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Repay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"}],"name":"ReserveDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralDisabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FLASHLOAN_PREMIUM_TOTAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LENDINGPOOL_REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NUMBER_RESERVES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STABLE_RATE_BORROW_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"interestRateMode","type":"uint256"},{"internalType":"uint16","name":"referralCode","type":"uint16"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"balanceFromBefore","type":"uint256"},{"internalType":"uint256","name":"balanceToBefore","type":"uint256"}],"name":"finalizeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiverAddress","type":"address"},{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"modes","type":"uint256[]"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"bytes","name":"params","type":"bytes"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddressesProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"configuration","type":"tuple"},{"internalType":"uint128","name":"liquidityIndex","type":"uint128"},{"internalType":"uint128","name":"variableBorrowIndex","type":"uint128"},{"internalType":"uint128","name":"currentLiquidityRate","type":"uint128"},{"internalType":"uint128","name":"currentVariableBorrowRate","type":"uint128"},{"internalType":"uint128","name":"currentStableBorrowRate","type":"uint128"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"},{"internalType":"uint8","name":"id","type":"uint8"}],"internalType":"struct DataTypes.ReserveData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedVariableDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReservesList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAccountData","outputs":[{"internalType":"uint256","name":"totalCollateralETH","type":"uint256"},{"internalType":"uint256","name":"totalDebtETH","type":"uint256"},{"internalType":"uint256","name":"availableBorrowsETH","type":"uint256"},{"internalType":"uint256","name":"currentLiquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"healthFactor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.UserConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtAddress","type":"address"},{"internalType":"address","name":"variableDebtAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"}],"name":"initReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"provider","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"collateralAsset","type":"address"},{"internalType":"address","name":"debtAsset","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"debtToCover","type":"uint256"},{"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"liquidationCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"rebalanceStableBorrowRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rateMode","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"configuration","type":"uint256"}],"name":"setConfiguration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"rateStrategyAddress","type":"address"}],"name":"setReserveInterestRateStrategyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"useAsCollateral","type":"bool"}],"name":"setUserUseReserveAsCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"swapBorrowRateMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 40098:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"dest","type":"address"},{"indexed":true,"internalType":"address","name":"donor","type":"address"}],"name":"DonationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"dest","type":"address"}],"name":"TokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"dest","type":"address"}],"internalType":"struct BulkCheckout.Donation[]","name":"_donations","type":"tuple[]"}],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dest","type":"address"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_dest","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ }),

/***/ 10390:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositContract","type":"address"},{"name":"_oracle","type":"address"},{"name":"_operators","type":"address"},{"name":"_treasury","type":"address"},{"name":"_insuranceFund","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInsuranceFund","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"getSharesByPooledEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalPooledEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PAUSE_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTreasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_ORACLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_WITHDRAWAL_KEY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBufferedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SIGNATURE_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawalCredentials","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFeeDistribution","outputs":[{"name":"treasuryFeeBasisPoints","type":"uint16"},{"name":"insuranceFeeBasisPoints","type":"uint16"},{"name":"operatorsFeeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sharesAmount","type":"uint256"}],"name":"getPooledEthByShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16"},{"name":"_insuranceFeeBasisPoints","type":"uint16"},{"name":"_operatorsFeeBasisPoints","type":"uint16"}],"name":"setFeeDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_feeBasisPoints","type":"uint16"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_maxDeposits","type":"uint256"}],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_FEE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SET_TREASURY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_CREDENTIALS_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PUBKEY_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_pubkeyHash","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDepositContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBeaconStat","outputs":[{"name":"depositedValidators","type":"uint256"},{"name":"beaconValidators","type":"uint256"},{"name":"beaconBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_insuranceFund","type":"address"}],"name":"setInsuranceFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"feeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_INSURANCE_FUND","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalCredentials","type":"bytes32"}],"name":"setWithdrawalCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_sharesAmount","type":"uint256"}],"name":"burnShares","outputs":[{"name":"newTotalShares","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_beaconValidators","type":"uint256"},{"name":"_beaconBalance","type":"uint256"}],"name":"pushBeacon","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"sharesOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"},{"anonymous":false,"inputs":[],"name":"Stopped","type":"event"},{"anonymous":false,"inputs":[],"name":"Resumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint16"}],"name":"FeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"treasuryFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"insuranceFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"operatorsFeeBasisPoints","type":"uint16"}],"name":"FeeDistributionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawalCredentials","type":"bytes32"}],"name":"WithdrawalCredentialsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"referral","type":"address"}],"name":"Submitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unbuffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"},{"indexed":false,"name":"sentFromBuffer","type":"uint256"},{"indexed":true,"name":"pubkeyHash","type":"bytes32"},{"indexed":false,"name":"etherAmount","type":"uint256"}],"name":"Withdrawal","type":"event"}]');

/***/ }),

/***/ 12244:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"}],"name":"CancelSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ClaimPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint32","name":"start_time","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"end_time","type":"uint32"},{"indexed":false,"internalType":"bool","name":"sell_all","type":"bool"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"customer","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OpenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"name":"addNftIntoBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"box_ids","type":"uint256[]"}],"name":"claimPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MysteryBox.PaymentOption[]","name":"payment","type":"tuple[]"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"uint32","name":"start_time","type":"uint32"},{"internalType":"uint32","name":"end_time","type":"uint32"},{"internalType":"bool","name":"sell_all","type":"bool"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxStatus","outputs":[{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"receivable_amount","type":"uint256"}],"internalType":"struct MysteryBox.PaymentInfo[]","name":"payment","type":"tuple[]"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getNftListForSale","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"address","name":"customer","type":"address"}],"name":"getPurchasedNft","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"},{"internalType":"uint8","name":"payment_token_index","type":"uint8"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"openBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"setQualificationData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');

/***/ })

}]);
//# sourceMappingURL=5801.js.map