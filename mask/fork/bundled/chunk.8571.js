"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8571],{

/***/ 41693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ parseURLs)
/* harmony export */ });
/* deferred harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = {
	/* namespace */ get a() {
		var exports = __webpack_require__(13407);
		Object.defineProperty(this, "a", { value: exports });
		return exports;
	}

};

function parseURLs(text, requireProtocol = true) {
    // CJS-ESM compatibility
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__.a/* ["default"] */ .Z;
    return lib.list(text).map((x)=>x.string).filter((y)=>{
        if (!requireProtocol) return true;
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        return URL.canParse(y);
    });
}


/***/ }),

/***/ 52668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ __TwitterEncoder),
/* harmony export */   Y: () => (/* binding */ TwitterDecoder)
/* harmony export */ });
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30898);
/* harmony import */ var _masknet_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41693);
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76089);



function __TwitterEncoder(data) {
    if (typeof data === 'string') return __TwitterEncoderText(data);
    return __TwitterEncoderBinary(data);
}
/**
 * @link https://github.com/DimensionDev/Maskbook/issues/198
 */ function __TwitterEncoderText(text) {
    return 'https://mask.io/?PostData_v1=' + text.//
    replace('\u{1F3BC}', '%20').replace(':||', '%40').replace('+', '-').replace('=', '_').replaceAll('|', '.');
}
function __TwitterEncoderBinary(data) {
    return `https://mask.io/?PostData_v2=${encodeURIComponent((0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(data))}`;
}
function TwitterDecoder(raw) {
    const newVersion = TwitterDecoderBinary(raw);
    if (newVersion.isSome()) return newVersion;
    return TwitterDecoderText(raw);
}
function TwitterDecoderBinary(raw) {
    if (!raw) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    if (!raw.includes('PostData_v2')) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    const payloadLink = (0,_masknet_base__WEBPACK_IMPORTED_MODULE_2__/* .parseURLs */ .l)(raw).filter((x)=>x.startsWith('https://mask.io/?PostData_v2='));
    try {
        for (const link of payloadLink){
            const url = new URL(link);
            const payload = url.searchParams.get('PostData_v2');
            if (!payload) continue;
            return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_1__.Some)(new Uint8Array((0,_masknet_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(payload)));
        }
    } catch  {
        return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    }
    return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
}
function TwitterDecoderText(raw) {
    if (!raw) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    if (!raw.includes('%20') || !raw.includes('%40')) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    const payloadLink = (0,_masknet_base__WEBPACK_IMPORTED_MODULE_2__/* .parseURLs */ .l)(raw).map((x)=>x.replace(/\u2026$/, '')).filter((x)=>x.endsWith('%40'))[0];
    if (!URL.canParse(payloadLink)) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    const { search, pathname } = new URL(payloadLink);
    const payload = search ? search.slice(1) : pathname.slice(1);
    if (!payload) return ts_results_es__WEBPACK_IMPORTED_MODULE_1__.None;
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_1__.Some)('\u{1F3BC}' + payload.// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
    // eslint-disable-next-line unicorn/better-regex
    replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, '').replace('-', '+').replace('_', '=').replaceAll('.', '|') + ':||');
}


/***/ }),

/***/ 3715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FB: () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   FK: () => (/* binding */ useSocialIdentityByUserId),
/* harmony export */   Ud: () => (/* binding */ useCurrentIdentity),
/* harmony export */   XG: () => (/* binding */ useThemeSettings),
/* harmony export */   fb: () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   mJ: () => (/* binding */ useSocialIdentity)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65734);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84271);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81755);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85094);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15628);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4643);
/* harmony import */ var _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18126);










async function queryPersonaFromDB(identityResolved) {
    if (!identityResolved.identifier) return;
    return _services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP.Identity.queryPersonaByProfile(identityResolved.identifier);
}
async function queryPersonasFromNextID(identityResolved) {
    if (!identityResolved.identifier) return;
    if (!_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform) return;
    return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .NextIDProof */ .q7.queryAllExistedBindingsByPlatform(_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.configuration.nextIDConfig?.platform, identityResolved.identifier.userId);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        const all = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__/* .activatedSiteAdaptor_state */ .g.profiles.value;
        const current = (_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.collecting.identityProvider?.recognized || defaultIdentityResolved).value.identifier;
        return all.find((i)=>i.identifier === current) || (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(all);
    },
    subscribe (sub) {
        const a = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__/* .activatedSiteAdaptor_state */ .g.profiles.addListener(sub);
        const b = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.collecting.identityProvider?.recognized.addListener(sub);
        return ()=>[
                a(),
                b?.()
            ];
    }
};
const defaults = {
    mode: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ThemeMode */ .hY.Light,
    size: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .FontSize */ .Bf.Normal,
    color: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ThemeColor */ .tP.Blue
};
const defaultIdentityResolved = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .ValueRef */ .Xf({}, lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
const defaultThemeSettings = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .ValueRef */ .Xf({}, lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
}
function useLastRecognizedIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_9__/* .useValueRef */ .E)(_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.collecting.identityProvider?.recognized || defaultIdentityResolved);
}
function useCurrentVisitingIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_9__/* .useValueRef */ .E)(_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.collecting.currentVisitingIdentityProvider?.recognized || defaultIdentityResolved);
}
/**
 * Get the social identity of the given identity
 */ function useSocialIdentity(identity) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__/* .useQuery */ .a)({
        enabled: !!identity,
        queryKey: [
            'social-identity',
            identity
        ],
        queryFn: async ()=>{
            if (!identity) return null;
            try {
                const bindings = await queryPersonasFromNextID(identity);
                const persona = await queryPersonaFromDB(identity);
                const personaBindings = bindings?.filter((x)=>x.persona === persona?.identifier.publicKeyAsHex.toLowerCase()) ?? [];
                return {
                    ...identity,
                    publicKey: persona?.identifier.publicKeyAsHex,
                    hasBinding: personaBindings.length > 0,
                    binding: (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(personaBindings)
                };
            } catch  {
                return identity;
            }
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}
function useSocialIdentityByUserId(userId) {
    const { data: identity } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__/* .useQuery */ .a)([
        'social-identity',
        'by-id',
        userId
    ], async ()=>{
        if (!userId) return;
        return _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI.utils.getUserIdentity?.(userId);
    }, {
        networkMode: 'always'
    });
    return useSocialIdentity(identity);
}
function useThemeSettings() {
    const themeSettings = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_9__/* .useValueRef */ .E)(_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI?.collecting.themeSettingsProvider?.recognized || defaultThemeSettings);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            ...defaults,
            ..._site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI?.configuration.themeSettings,
            ...themeSettings
        }), [
        _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_4__.activatedSiteAdaptorUI?.configuration.themeSettings,
        themeSettings
    ]);
}


/***/ }),

/***/ 18126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateSiteAdaptorUIInner: () => (/* binding */ activateSiteAdaptorUIInner),
/* harmony export */   activatedSiteAdaptorUI: () => (/* binding */ activatedSiteAdaptorUI),
/* harmony export */   g: () => (/* binding */ activatedSiteAdaptor_state)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74545);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88228);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30898);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8898);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(94685);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14580);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(65715);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1749);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50139);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28129);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(37816);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19477);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51573);
/* harmony import */ var _masknet_web3_telemetry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17788);
/* harmony import */ var _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91451);
/* harmony import */ var _shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(31418);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4643);
/* harmony import */ var _site_adaptors_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21827);
/* harmony import */ var _utils_shadow_root_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49138);
/* harmony import */ var _utils_startWatch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31210);
/* harmony import */ var _shared_ui_initUIContext_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9485);
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79314);

















const definedSiteAdaptorsResolved = new Map();
let activatedSiteAdaptorUI;
let activatedSiteAdaptor_state;
async function activateSiteAdaptorUIInner(ui_deferred) {
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__/* .assertNotEnvironment */ .BX)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__/* .Environment */ .qA.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const injectSwitchSettings = await _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Settings.getAllInjectSwitchSettings();
    if (!injectSwitchSettings[ui_deferred.networkIdentifier]) return;
    (0,_utils_startWatch_js__WEBPACK_IMPORTED_MODULE_6__/* .configureSelectorMissReporter */ .e)((name)=>{
        const error = new Error(`Selector "${name}" does not match anything ${location.href}.`);
        error.stack = '';
        _masknet_web3_telemetry__WEBPACK_IMPORTED_MODULE_7__/* .Telemetry */ .M.captureException(_masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_8__/* .ExceptionType */ .wz.Error, _masknet_web3_telemetry_types__WEBPACK_IMPORTED_MODULE_8__/* .ExceptionID */ .T$.Debug, error, {
            sampleRate: 0.01
        });
    });
    (0,_utils_shadow_root_js__WEBPACK_IMPORTED_MODULE_9__/* .setupReactShadowRootEnvironment */ .eG)();
    const ui = activatedSiteAdaptorUI = await loadSiteAdaptorUI(ui_deferred.networkIdentifier);
    _masknet_shared__WEBPACK_IMPORTED_MODULE_10__/* .sharedUINetworkIdentifier */ .Xr.value = ui_deferred.networkIdentifier;
    if (ui.customization.sharedComponentOverwrite) {
        _masknet_shared__WEBPACK_IMPORTED_MODULE_10__/* .sharedUIComponentOverwrite */ .vU.value = ui.customization.sharedComponentOverwrite;
    }
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_11__/* .setDebugObject */ .o)('ui', ui);
    const abort = new AbortController();
    const { signal } = abort;
    if (false) {}
    await (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_2__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    await ui.collecting.themeSettingsProvider?.start(signal);
    activatedSiteAdaptor_state = await ui.init(signal);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    ui.collecting.postsProvider?.start(signal);
    startPostListener();
    ui.collecting.currentVisitingIdentityProvider?.start(signal);
    ui.injection.pageInspector?.(signal);
    ui.injection.toolbox?.(signal, 'wallet');
    ui.injection.toolbox?.(signal, 'application');
    ui.injection.newPostComposition?.start?.(signal);
    ui.injection.searchResult?.(signal);
    ui.injection.userBadge?.(signal);
    ui.injection.profileTab?.(signal);
    ui.injection.profileTabContent?.(signal);
    ui.injection.profileCover?.(signal);
    ui.injection.userAvatar?.(signal);
    ui.injection.profileAvatar?.(signal);
    ui.injection.tips?.(signal);
    ui.injection.lens?.(signal);
    ui.injection.enhancedProfileNFTAvatar?.(signal);
    ui.injection.openNFTAvatar?.(signal);
    ui.injection.postAndReplyNFTAvatar?.(signal);
    ui.injection.avatar?.(signal);
    ui.injection.profileCard?.(signal);
    ui.injection.switchLogo?.(signal);
    ui.injection.PluginSettingsDialog?.(signal);
    ui.injection.calendar?.(signal);
    // Update user avatar
    ui.collecting.currentVisitingIdentityProvider?.recognized.addListener((ref)=>{
        if (!(ref.avatar && ref.identifier)) return;
        _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Identity.updateProfileInfo(ref.identifier, {
            avatarURL: ref.avatar,
            nickname: ref.nickname
        });
        const currentProfile = (0,_site_adaptors_utils_js__WEBPACK_IMPORTED_MODULE_12__/* .getCurrentIdentifier */ .T)();
        if (currentProfile?.linkedPersona) {
            _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Identity.createNewRelation(ref.identifier, currentProfile.linkedPersona);
        }
    });
    signal.addEventListener('abort', (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .queryRemoteI18NBundle */ .M2)(_services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Helper.queryRemoteI18NBundle));
    const lastRecognizedSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .createSubscriptionFromValueRef */ .v_)(ui.collecting.identityProvider.recognized, signal);
    const currentVisitingSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .createSubscriptionFromValueRef */ .v_)(ui.collecting.currentVisitingIdentityProvider.recognized, signal);
    const connectPersona = async ()=>{
        const currentPersonaIdentifier = await _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Settings.getCurrentPersonaIdentifier();
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .currentSetupGuideStatus */ .AI[activatedSiteAdaptorUI.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
            status: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_16__/* .SetupGuideStep */ .s.FindUsername,
            persona: currentPersonaIdentifier?.toText()
        });
    };
    (0,_shared_ui_initUIContext_js__WEBPACK_IMPORTED_MODULE_17__/* .setupUIContext */ .y)();
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_18__/* .__setSiteAdaptorContext__ */ .EE)({
        lastRecognizedProfile: lastRecognizedSub,
        currentVisitingProfile: currentVisitingSub,
        currentNextIDPlatform: ui.configuration.nextIDConfig?.platform,
        currentPersonaIdentifier: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_14__/* .createSubscriptionFromValueRef */ .v_)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .currentPersonaIdentifier */ .cn, signal),
        getPostURL: ui.utils.getPostURL || (()=>null),
        share: ui.utils.share,
        getPostIdFromNewPostToast: ui.configuration.nextIDConfig?.getPostIdFromNewPostToast,
        connectPersona,
        postMessage: ui.automation?.nativeCompositionDialog?.attachText,
        getSearchedKeyword: ui.collecting.getSearchedKeyword,
        getUserIdentity: ui.utils.getUserIdentity
    });
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_19__/* .startPluginSiteAdaptor */ .jJ)(ui.networkIdentifier, (0,_shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_20__/* .createPluginHost */ .R)(signal, (id, def, signal)=>{
        return {
            setMinimalMode (enabled) {
                _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Settings.setPluginMinimalModeEnabled(id, enabled);
            },
            ...(0,_shared_plugin_infra_host_js__WEBPACK_IMPORTED_MODULE_20__/* .createSharedContext */ .y)(id, signal)
        };
    }, _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Settings.getPluginMinimalModeEnabled, _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Helper.hasHostPermission));
    (0,_utils_shadow_root_js__WEBPACK_IMPORTED_MODULE_9__/* .attachReactTreeWithoutContainer */ .Ei)('Modals', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_masknet_shared__WEBPACK_IMPORTED_MODULE_21__/* .Modals */ .nK, {
        createWallet: ()=>_services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Helper.openDashboard(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_22__/* .DashboardRoutes */ .vq.CreateMaskWalletForm)
    }));
    // TODO: receive the signal
    if (_masknet_flags__WEBPACK_IMPORTED_MODULE_3__/* .Flags */ .v.sandboxedPluginRuntime) Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(8672), __webpack_require__.e(8136), __webpack_require__.e(2486), __webpack_require__.e(6316), __webpack_require__.e(4275), __webpack_require__.e(2406), __webpack_require__.e(4396), __webpack_require__.e(2402), __webpack_require__.e(8255)]).then(__webpack_require__.bind(__webpack_require__, 4369));
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for (const namespace of Object.keys(i18n)){
            const ns = i18n[namespace];
            for (const i18nKey of Object.keys(ns)){
                const pair = i18n[namespace][i18nKey];
                for (const language of Object.keys(pair)){
                    const value = pair[language];
                    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .i18NextInstance */ .BV.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        if (!provider) return;
        provider.start(signal);
        provider.recognized.addListener((newValue, oldValue)=>{
            if (document.visibilityState === 'hidden') return;
            if (newValue.identifier === oldValue.identifier) return;
            if (!newValue.identifier) return;
        });
        if (provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal.aborted) return;
                if (!id.identifier) return;
                _services__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.Identity.resolveUnknownLegacyIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        const posts = ui.collecting.postsProvider?.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            await unmount(key);
            const abort = new AbortController();
            signal.addEventListener('abort', ()=>abort.abort());
            abortSignals.set(key, abort);
            const { signal: postSignal } = abort;
            ui.injection.postReplacer?.(postSignal, value);
            ui.injection.postInspector?.(postSignal, value);
            ui.injection.postActions?.(postSignal, value);
            ui.injection.commentComposition?.compositionBox(postSignal, value);
            ui.injection.commentComposition?.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_2__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona, status } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                started = true;
                ui.injection.setupWizard?.(signal, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_23__/* .ECKeyIdentifier */ .o.from(persona).expect(`${persona} should be a valid ECKeyIdentifier`));
            }
        };
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id);
    }
}
async function loadSiteAdaptorUI(identifier) {
    if (definedSiteAdaptorsResolved.has(identifier)) return definedSiteAdaptorsResolved.get(identifier);
    const define = _define_js__WEBPACK_IMPORTED_MODULE_24__/* .definedSiteAdaptorsUI */ .d.get(identifier);
    if (!define) throw new Error('Site adaptor not found');
    const ui = (await define.load()).default;
    definedSiteAdaptorsResolved.set(identifier, ui);
    if (false) {}
    return ui;
}


/***/ }),

/***/ 21827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ getCurrentIdentifier)
/* harmony export */ });
/* harmony import */ var _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18126);

function getCurrentIdentifier() {
    const current = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_0__.activatedSiteAdaptorUI.collecting.identityProvider?.recognized.value;
    return _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_0__/* .activatedSiteAdaptor_state */ .g.profiles.value.find((i)=>i.identifier === current?.identifier) || _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_0__/* .activatedSiteAdaptor_state */ .g.profiles.value[0];
}


/***/ }),

/***/ 49138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W5: () => (/* binding */ attachReactTreeWithContainer),
  Ei: () => (/* binding */ attachReactTreeWithoutContainer),
  eG: () => (/* binding */ setupReactShadowRootEnvironment)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-dom/index.js
var react_dom = __webpack_require__(32704);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/ShadowRootSetup.tsx
var ShadowRootSetup = __webpack_require__(57604);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/Injector.tsx
var Injector = __webpack_require__(3266);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/ShadowRootStyleProvider.tsx + 1 modules
var ShadowRootStyleProvider = __webpack_require__(60186);
;// CONCATENATED MODULE: ./packages/theme/src/ShadowRoot/attachReactTreeToMountedRoot.tsx





/** Root tag. @default "main" */ /** Used to distinguish multiple React root within a same ShadowRoot */ /** The AbortSignal to stop the render */ /** Defer the tree until the mount point is near visible in the document */ // do not name it as unmount otherwise it might be compatible with ReactDOM's Root interface.
/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function attachReactTreeToMountedRoot_noHost(wrapJSX) {
    return attachReactTreeToMountedRoot.bind(null, wrapJSX);
}
function attachReactTreeToMountedRoot(wrapJSX, shadow, options = {}) {
    const tag = options.tag || 'main';
    const key = options.key || 'main';
    if (shadow.querySelector(`.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, 'which is already used. Skip rendering.');
        return {
            destroy: noop/* default */.Z,
            render: noop/* default */.Z
        };
    }
    const child = typeof tag === 'function' ? tag() : document.createElement(tag);
    const container = shadow.appendChild(child);
    const instanceKey = `${key}(${Math.random().toString(36).slice(2)})`;
    container.classList.add(key);
    const controller = new AbortController();
    const signal = controller.signal;
    function render(jsx) {
        if (signal.aborted) return;
        ShadowRootSetup/* shadowEnvironmentMountingRoots */.LZ.set(instanceKey, /*#__PURE__*/ (0,react_dom.createPortal)(/*#__PURE__*/ (0,jsx_runtime.jsx)(AttachPointComponent, {
            children: jsx
        }), container, instanceKey));
    }
    signal.addEventListener('abort', ()=>{
        ShadowRootSetup/* shadowEnvironmentMountingRoots */.LZ.delete(instanceKey);
        container.remove();
    }, {
        signal
    });
    options.signal?.addEventListener('abort', ()=>controller.abort(), {
        signal
    });
    AttachPointComponent.displayName = `ShadowRootAttachPoint (${key})`;
    return {
        destroy: ()=>controller.abort(),
        render: (jsx)=>{
            if (options.untilVisible && !isElementPartiallyInViewport(container)) {
                observe(container, key, ()=>render(jsx), signal);
                return;
            }
            render(jsx);
        }
    };
    function AttachPointComponent({ children: jsx }) {
        return (0,ShadowRootStyleProvider/* ShadowRootStyleProvider */.q)({
            preventPropagation: true,
            shadow,
            children: wrapJSX ? wrapJSX(jsx) : jsx
        });
    }
}
let observer;
const callbacks = new WeakMap();
function observe(element, key, callback, signal) {
    if (signal.aborted) return;
    observer ||= new IntersectionObserver((records)=>{
        records.filter((x)=>x.isIntersecting).map((x)=>{
            const result = callbacks.get(x.target);
            callbacks.delete(x.target);
            return result;
        }).filter(Boolean).flatMap(Object.values).forEach((f)=>f());
    }, // preload the element before it really hits the viewport
    {
        root: null,
        threshold: 0.1,
        rootMargin: '20px 0px 50px 0px'
    });
    observer.observe(element);
    signal.addEventListener('abort', ()=>observer.unobserve(element), {
        signal
    });
    callbacks.set(element, {
        ...callbacks.get(element),
        [key]: callback
    });
}
function isElementPartiallyInViewport(element) {
    const { top, left, height, width } = element.getBoundingClientRect();
    const { clientHeight, clientWidth } = document.documentElement;
    const vertInView = top <= clientHeight && top + height >= 0;
    const horInView = left <= clientWidth && left + width >= 0;
    return vertInView && horInView;
}

// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./packages/flags/src/index.ts
var src = __webpack_require__(51573);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(65295);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(80835);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/compose.ts
var compose = __webpack_require__(75369);
// EXTERNAL MODULE: ./packages/shared-base/src/i18n/instance.ts
var instance = __webpack_require__(50139);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/data/queryClient.ts
var queryClient = __webpack_require__(73401);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(79399);
;// CONCATENATED MODULE: ./packages/shared/src/UI/contexts/SiteUIProvider.tsx










function SiteUIProvider(children) {
    return (0,compose/* compose */.q)(// Avoid the crash due to unhandled suspense
    (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            children: children
        }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskUIRoot, {
        children: children
    }));
}
function MaskUIRoot({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogStack/* DialogStackingProvider */.yu, {
        hasGlobalBackdrop: false,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(QueryClientProvider/* QueryClientProvider */.aH, {
            client: queryClient/* queryClient */.E,
            children: [
                 false ? /*#__PURE__*/ 0 : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* RootWeb3ContextProvider */.t2, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(I18NextProviderHMR/* I18NextProviderHMR */.q, {
                        i18n: instance/* i18NextInstance */.BV,
                        children: children
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useThemeSettings.ts
var useThemeSettings = __webpack_require__(53639);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/SharedContextProvider.tsx
var SharedContextProvider = __webpack_require__(18956);
// EXTERNAL MODULE: ./packages/theme/src/Theme/Provider.tsx
var Provider = __webpack_require__(39112);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx + 3 modules
var ErrorBoundary = __webpack_require__(87148);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(55786);
// EXTERNAL MODULE: ./packages/theme/src/Theme/theme.ts + 1 modules
var Theme_theme = __webpack_require__(73515);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useThemeLanguage.ts
var useThemeLanguage = __webpack_require__(20355);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/useMaskSiteAdaptorMixedTheme.ts









const defaultUseTheme = (t)=>t;
function useMaskSiteAdaptorMixedTheme() {
    const { mode } = (0,useActivatedUI/* useThemeSettings */.XG)();
    const useMixedTheme = (0,react.useRef)(ui.activatedSiteAdaptorUI.customization.useTheme || defaultUseTheme).current;
    const [localization] = (0,useThemeLanguage/* useThemeLanguage */.e)((0,useValueRef/* useValueRef */.E)(settings/* languageSettings */.pQ));
    const theme = (0,createMuiStrictModeTheme/* default */.Z)(mode === specs/* ThemeMode */.hY.Dark ? Theme_theme/* MaskDarkTheme */.H : Theme_theme/* MaskLightTheme */.C, localization);
    return useMixedTheme(theme);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/utils/shadow-root/ShadowRootAttachPointRoot.tsx








function ShadowRootAttachPointRoot(children) {
    return (0,compose/* compose */.q)((children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            children: children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary/* ErrorBoundary */.S, {
            children: children
        }), (children)=>(0,Provider/* MaskThemeProvider */.R)({
            useMaskIconPalette: useThemeSettings/* useSiteThemeMode */.E,
            useTheme: useMaskSiteAdaptorMixedTheme,
            CustomSnackbarOffsetY: Sniffings/* Sniffings */.Y.is_facebook_page ? 80 : undefined,
            children
        }), (children)=>(0,SharedContextProvider/* SharedContextProvider */.Q)({
            children
        }), /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Injector/* CSSVariableInjector */.U, {}),
            children
        ]
    }));
}

;// CONCATENATED MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx






const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change'
];
function setupReactShadowRootEnvironment() {
    const shadow = (0,ShadowRootSetup/* setupReactShadowRootEnvironment */.eG)(src/* Flags */.v.shadowRootInit, captureEvents, SiteUIProvider);
    // Inject variable for Portals
    attachReactTreeWithContainer(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Injector/* CSSVariableInjector */.U, {})
    }));
}
const attachReactTreeWithContainer = attachReactTreeToMountedRoot_noHost(ShadowRootAttachPointRoot);
function AttachReactTreeWithoutContainerRedirect(props) {
    // Note: since it is the direct children of attachReactTreeWithoutContainer, it MUST inside a ShadowRoot environment.
    return (0,Portal/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,react_dom.createPortal)(props.children, container), props.debugKey);
}
/**
 * @param debugKey Only used for debug
 * @param jsx JSX to render
 * @param signal AbortSignal
 */ function attachReactTreeWithoutContainer(debugKey, jsx, signal) {
    // Note: do not attach this DOM to window. We don't need it
    const dom = document.createElement('main');
    const shadow = dom.attachShadow({
        mode: 'closed',
        delegatesFocus: true
    });
    attachReactTreeWithContainer(shadow, {
        signal,
        key: debugKey
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(AttachReactTreeWithoutContainerRedirect, {
        children: jsx,
        debugKey: debugKey
    }));
}


/***/ }),

/***/ 31210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ configureSelectorMissReporter),
/* harmony export */   f: () => (/* binding */ startWatch)
/* harmony export */ });
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51573);

/**
 * @example
 * ```ts
 * startWatch(new MutationObserverWatcher(ls), {
 *    signal,
 *    missingReportRule: new URL('https://twitter.com/'),
 *    name: 'twitter-home-page',
 * })
 * ```
 *
 * This will be reported only when the current page is https://twitter.com/ and no matches is found.
 */ function startWatch(watcher, options) {
    if (options instanceof AbortSignal) {
        options = {
            signal: options
        };
    }
    const { signal, missingReportRule, shadowRootDelegatesFocus: delegatesFocus } = options;
    if (missingReportRule) {
        watchers.set(watcher, missingReportRule);
        const timeout = setTimeout(check, 2000);
        signal.addEventListener('abort', ()=>{
            watchers.delete(watcher);
            clearTimeout(timeout);
        }, {
            once: true
        });
    }
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            ..._masknet_flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags */ .v.shadowRootInit,
            delegatesFocus
        },
        beforeShadowRootInit: {
            ..._masknet_flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags */ .v.shadowRootInit,
            delegatesFocus
        }
    }).startWatch({
        subtree: true,
        childList: true
    }, signal);
    return watcher;
}
/**
 * string will be startsWith match, RegExp will be partial match
 */ const watchers = new Map();
if (typeof window === 'object') {
    window.addEventListener('locationchange', ()=>{
        setTimeout(check, 2000);
    });
}
let reporter = function(name) {
    console.warn(`[Mask] Watcher "${name}" expected to match something but it didn't.`, location.href);
};
function configureSelectorMissReporter(newReporter) {
    reporter = newReporter;
}
function check() {
    for (const [watcher, { name, rule }] of watchers){
        // protected API
        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (watcher['lastKeyList'].length) continue;
        if (typeof rule === 'function') {
            const result = rule();
            if (!result) continue;
            if (result !== true) {
                // eslint-disable-next-line @typescript-eslint/no-loop-func
                result.then((x)=>x || reporter?.(name));
                continue;
            }
        } else if (Array.isArray(rule)) {
            if (!rule.some(hitBasic)) continue;
        } else if (!hitBasic(rule)) continue;
        reporter(name);
    }
}
function hitBasic(rule) {
    if (rule instanceof RegExp) {
        return rule.test(location.href);
    }
    return location.href.startsWith(rule);
}


/***/ }),

/***/ 86766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d2: () => (/* binding */ useActivatedPluginExtensionPage),
/* harmony export */   fb: () => (/* binding */ useActivatedPluginsExtensionPage),
/* harmony export */   fn: () => (/* binding */ useIsMinimalModeExtensionPage)
/* harmony export */ });
/* unused harmony export startPluginHostExtensionPage */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85094);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93441);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88547);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84271);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70771);





const { activated, startDaemon, events, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.ExtensionPage, _manage_js__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on(_servie_events__WEBPACK_IMPORTED_MODULE_3__/* .ALL_EVENTS */ .Ko, ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useIsMinimalModeExtensionPage(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
function useActivatedPluginsExtensionPage() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
}
function useActivatedPluginExtensionPage(pluginID) {
    const plugins = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(activatedSub);
    return plugins.find((x)=>x.ID === pluginID);
}
function startPluginHostExtensionPage(host) {
    startDaemon(host);
}


/***/ }),

/***/ 94685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ useIsMinimalMode),
/* harmony export */   JR: () => (/* binding */ useActivatedPluginsSiteAdaptor),
/* harmony export */   jJ: () => (/* binding */ startPluginSiteAdaptor),
/* harmony export */   o7: () => (/* binding */ useActivatedPluginSiteAdaptor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85094);
/* harmony import */ var _masknet_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30898);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88547);
/* harmony import */ var _manage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70771);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50754);







const { events, activated, startDaemon, minimalMode } = (0,_manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m)((def)=>def.SiteAdaptor, _manage_js__WEBPACK_IMPORTED_MODULE_2__/* .createManager */ .m.NoManagedContext);
const activatedSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('activateChanged', ()=>activatedSub.value = [
        ...activated.plugins
    ]);
const minimalModeSub = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ValueRefWithReady */ .td([], lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
events.on('minimalModeChanged', ()=>minimalModeSub.value = [
        ...minimalMode
    ]);
function useActivatedPluginsSiteAdaptor(minimalModeEqualsTo) {
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    const result = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(activatedSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode.includes(x.ID));
        else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode.includes(x.ID));
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        result,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
useActivatedPluginsSiteAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSiteAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSiteAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSiteAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSiteAdaptor(minimalModeEqualsTo);
    const minimalMode = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_5__/* .useValueRef */ .E)(minimalModeSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const result = plugins.find((x)=>x.ID === pluginID);
        if (!result) return result;
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) {
            if (minimalMode.includes(result.ID)) return result;
            return undefined;
        } else if (minimalModeEqualsTo === false) {
            if (minimalMode.includes(result.ID)) return undefined;
            return result;
        }
        (0,_masknet_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        pluginID,
        plugins,
        minimalMode,
        minimalModeEqualsTo
    ]);
}
function startPluginSiteAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store_js__WEBPACK_IMPORTED_MODULE_6__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        const status = def.enableRequirement.supports.sites[currentNetwork];
        if (def.enableRequirement.supports.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.supports.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 8898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ share),
/* harmony export */   EE: () => (/* binding */ __setSiteAdaptorContext__),
/* harmony export */   Ge: () => (/* binding */ getPostIdFromNewPostToast),
/* harmony export */   Ns: () => (/* binding */ lastRecognizedProfile),
/* harmony export */   P4: () => (/* binding */ getPostURL),
/* harmony export */   XD: () => (/* binding */ connectPersona),
/* harmony export */   Yg: () => (/* binding */ currentVisitingProfile),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   m$: () => (/* binding */ currentNextIDPlatform),
/* harmony export */   mO: () => (/* binding */ getUserIdentity),
/* harmony export */   oi: () => (/* binding */ postMessage)
/* harmony export */ });
/* unused harmony export getSearchedKeyword */
// This file will be virtualized in the future.
// Currently all plugins access the same value, but we can virtualize them in the future.
let lastRecognizedProfile;
let currentVisitingProfile;
let currentNextIDPlatform;
let currentPersonaIdentifier;
let getPostURL;
let share;
let getUserIdentity;
let getPostIdFromNewPostToast;
let postMessage;
let getSearchedKeyword;
let connectPersona;
function __setSiteAdaptorContext__(value) {
    ({ lastRecognizedProfile, currentVisitingProfile, currentNextIDPlatform, currentPersonaIdentifier, getPostURL, share, getUserIdentity, getPostIdFromNewPostToast, postMessage, getSearchedKeyword, connectPersona } = value);
}


/***/ }),

/***/ 53639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useSiteThemeMode)
/* harmony export */ });
/* harmony import */ var _utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13326);

function useSiteThemeMode(theme) {
    const backgroundColor = (0,_utils_theme_color_tools_js__WEBPACK_IMPORTED_MODULE_0__/* .getBackgroundColor */ .dF)(document.body);
    const isDark = theme.palette.mode === 'dark';
    const isDarker = backgroundColor === 'rgb(0,0,0)';
    return isDark ? !isDarker ? 'dim' : 'dark' : 'light';
}


/***/ }),

/***/ 13326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _T: () => (/* binding */ isDark),
/* harmony export */   dF: () => (/* binding */ getBackgroundColor),
/* harmony export */   f2: () => (/* binding */ fromRGB),
/* harmony export */   wj: () => (/* binding */ shade),
/* harmony export */   xr: () => (/* binding */ toRGB)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47494);

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join(',')})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.floor(c * (100 + percentage) / 100), 0, 255));
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10)
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}


/***/ }),

/***/ 5338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   CH: () => (/* binding */ userGuideFinished),
/* harmony export */   Ct: () => (/* binding */ userGuideStatus),
/* harmony export */   FX: () => (/* binding */ userPinExtension),
/* harmony export */   Mo: () => (/* binding */ pluginIDsSettings),
/* harmony export */   Pg: () => (/* binding */ sayHelloShowed),
/* harmony export */   cn: () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   pQ: () => (/* binding */ languageSettings),
/* harmony export */   v2: () => (/* binding */ switchLogoSettings)
/* harmony export */ });
/* unused harmony exports InjectSwitchSettings, currentMaskWalletLockStatusSettings, dismissVerifyNextID, decentralizedSearchSettings, appearanceSettings, getCurrentPluginMinimalMode, setCurrentPluginMinimalMode */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85094);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64455);
/* harmony import */ var _createSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6938);
/* harmony import */ var _i18n_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50139);
/* harmony import */ var _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24835);
/* harmony import */ var _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58190);
/* harmony import */ var _Site_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77953);
/* harmony import */ var _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73835);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88547);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19477);










const languageSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__);
languageSettings.addListener(_i18n_index_js__WEBPACK_IMPORTED_MODULE_2__/* .updateLanguage */ .BF);
const pluginIDsSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('PluginIdBySite', {
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Twitter]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Facebook]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Instagram]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.OpenSea]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Minds]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Localhost]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.Mirror]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .EnhanceableSite */ .J.App]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Popup]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM,
    [_Site_types_js__WEBPACK_IMPORTED_MODULE_3__/* .ExtensionSite */ .v.Dashboard]: _types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID */ .F.PLUGIN_EVM
}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const InjectSwitchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('InjectSwitchBySite', true);
const currentMaskWalletLockStatusSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_types_PluginID_js__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .P.Wallet}+maskWalletLockStatus`, _types_Wallet_js__WEBPACK_IMPORTED_MODULE_6__/* .LockStatus */ .O.INIT);
const currentSetupGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideStatus', '');
const userGuideFinished = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('userGuideFinished', false);
const sayHelloShowed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('sayHelloShowed', false);
const userPinExtension = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('userPinExtension', false);
const dismissVerifyNextID = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('dismissVerifyNextID', {}, lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
const decentralizedSearchSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('decentralizedSearchSettings', true);
const appearanceSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .Appearance */ .um.default);
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSiteAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsExtensionPage().find((x) => x.ID === PLUGIN_ID)` instead
 * @deprecated DO NOT EXPORT THIS
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const pluginMinimalModeReversed = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('pluginsEnabled', true);
function getCurrentPluginMinimalMode(id) {
    if (pluginMinimalModeReversed['plugin:' + id].value === 'enabled') return BooleanPreference.False;
    if (pluginMinimalModeReversed['plugin:' + id].value === false) return BooleanPreference.True;
    return BooleanPreference.Default;
}
function setCurrentPluginMinimalMode(id, value) {
    if (value === BooleanPreference.Default) pluginMinimalModeReversed['plugin:' + id].value = true;
    else if (value === BooleanPreference.True) pluginMinimalModeReversed['plugin:' + id].value = false;
    else if (value === BooleanPreference.False) pluginMinimalModeReversed['plugin:' + id].value = 'enabled';
}
const currentPersonaIdentifier = new _index_js__WEBPACK_IMPORTED_MODULE_7__/* .ValueRefWithReady */ .td(undefined);
{
    const currentPersonaIdentifier_raw = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '');
    currentPersonaIdentifier.addListener((newVal)=>{
        currentPersonaIdentifier_raw.value = newVal?.toText() ?? '';
    });
    currentPersonaIdentifier_raw.addListener((newVal)=>{
        currentPersonaIdentifier.value = newVal ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(newVal).unwrap() : undefined;
    });
    currentPersonaIdentifier_raw.readyPromise.then(()=>{
        const value = currentPersonaIdentifier_raw.value;
        currentPersonaIdentifier.value = value ? _index_js__WEBPACK_IMPORTED_MODULE_8__/* .ECKeyIdentifier */ .o.from(value).unwrap() : undefined;
    });
}try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__;
} catch  {}
const switchLogoSettings = (0,_createSettings_js__WEBPACK_IMPORTED_MODULE_0__/* .createBulkSettings */ .PY)('SwitchLogo', _types_SwitchLogo_js__WEBPACK_IMPORTED_MODULE_9__/* .SwitchLogoType */ .O.New);


/***/ }),

/***/ 8482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $f: () => (/* binding */ ObservableWeakMap),
/* harmony export */   n7: () => (/* binding */ ObservableSet),
/* harmony export */   vP: () => (/* binding */ ObservableMap)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93441);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);


function tick(callback) {
    Promise.resolve().then(callback);
}
class ObservableWeakMap extends WeakMap {
    ALL_EVENTS = _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .ALL_EVENTS */ .Ko;
    event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value));
        return _;
    }
}
class ObservableMap extends Map {
    ALL_EVENTS = _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .ALL_EVENTS */ .Ko;
    event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    _asValues;
    get asValues() {
        return this._asValues ??= this.size ? [
            ...this.values()
        ] : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
    }
    clear() {
        super.clear();
        this._asValues = undefined;
        tick(()=>this.event.emit('clear'));
    }
    delete(key) {
        const _ = super.delete(key);
        this._asValues = undefined;
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this._asValues = undefined;
        tick(()=>this.event.emit('set', key, value));
        this.event.emit('set', key, value);
        return _;
    }
}
class ObservableSet extends Set {
    ALL_EVENTS = _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .ALL_EVENTS */ .Ko;
    event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    _asValues;
    get asValues() {
        return this._asValues ??= this.size ? [
            ...this.values()
        ] : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
    }
    clear() {
        super.clear();
        this._asValues = undefined;
        tick(()=>this.event.emit('clear'));
    }
    delete(key) {
        const _ = super.delete(key);
        this._asValues = undefined;
        tick(()=>this.event.emit('delete', key));
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x));
        this._asValues = undefined;
        this.event.emit('add', value);
        tick(()=>this.event.emit('add', value));
        return this;
    }
}


/***/ }),

/***/ 37816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SetupGuideStep)
/* harmony export */ });
var /** The persona to be connected */ /**
     * The user name given by user
     * @todo Rename to userId
     * */ /** The WIP step */ /** Specified tab id to activate setup guide */ SetupGuideStep;
(function(SetupGuideStep) {
    SetupGuideStep["FindUsername"] = 'find-username';
    SetupGuideStep["CheckConnection"] = 'check-connection';
    SetupGuideStep["VerifyOnNextID"] = 'next-id-verify';
    SetupGuideStep["PinExtension"] = 'pin-extension';
    SetupGuideStep["Close"] = 'close';
})(SetupGuideStep || (SetupGuideStep = {}));


/***/ }),

/***/ 79836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
/* unused harmony export applyMaskColorVars */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32711);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13101);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89204);



// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r, g, b } = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(x[key]).toRgb();
    return [
        r,
        g,
        b
    ].join(', ');
}
function CSSVariableInjectorCSS(scheme) {
    const ns = scheme === 'light' ? _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .LightColor */ .C : _constants_js__WEBPACK_IMPORTED_MODULE_1__/* .DarkColor */ .I;
    const result = {};
    for (const key of Object.keys(ns)){
        // --mask-name: val;
        result[`--mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result,
        // TODO doesn't work on components that mounted in portal
        '[data-hide-scrollbar]': {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? LightColor : DarkColor;
    if (node === document.body) {
        const id = '#mask-style-var';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            document.head.appendChild(style);
        }
        applyMaskColorVars(document.getElementById(id), scheme);
        return;
    } else if (node instanceof HTMLStyleElement) {
        let rule = ':root, :host {\n';
        for (const key of Object.keys(ns)){
            // --mask-name: val;
            rule += `    --mask-${kebabCase(key)}: ${ns[key]};\n`;
            rule += `    --mask-${kebabCase(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for (const key of Object.keys(ns)){
            node.style.setProperty('--mask-' + kebabCase(key), ns[key]);
            node.style.setProperty('--mask-' + kebabCase(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ shadowEnvironmentMountingRoots),
/* harmony export */   eG: () => (/* binding */ setupReactShadowRootEnvironment),
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);





/**
 * This container is used to attach the single React root.
 * It does not contain direct DOM decedents.
 * All decedents are mounted via <Portal>.
 */ let globalContainer;
/**
 * This container is prepared for all the Modals.
 */ let portalContainer;
/** @internal */ const shadowEnvironmentMountingRoots = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ObservableMap */ .vP();
function setupReactShadowRootEnvironment(init, preventEventPropagationList, wrapJSX) {
    if (portalContainer) return portalContainer;
    // TODO: make sure globalContainer is the last DOM in the body?
    globalContainer = document.body.appendChild(document.createElement('div'));
    portalContainer = globalContainer.attachShadow(init);
    // Note: This React Root does not expect to have any direct DOM children.
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(globalContainer).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MountingPoint, {
            wrapJSX: wrapJSX,
            preventPropagationList: preventEventPropagationList
        })
    }));
    return portalContainer;
}
function MountingPoint(props) {
    const [children, setChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        shadowEnvironmentMountingRoots.event.on(shadowEnvironmentMountingRoots.ALL_EVENTS, ()=>{
            setChildren(Array.from(shadowEnvironmentMountingRoots.values()));
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .PreventShadowRootEventPropagationListContext */ .N.Provider, {
        value: props.preventPropagationList,
        children: props.wrapJSX ? props.wrapJSX(children) : children
    });
}
/** @internal */ const ref = {
    get portalContainer () {
        let dom;
        if (location.protocol.includes('extension')) dom = document.body;
        else if (globalThis.location.hostname === 'localhost') return document.body;
        else if (!portalContainer) throw new TypeError('Please call setupPortalShadowRoot first');
        else dom = portalContainer;
        Object.defineProperty(ref, 'mountingPoint', {
            value: dom
        });
        return dom;
    }
};


/***/ }),

/***/ 42938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xg: () => (/* binding */ useCustomBlockBeatRetry),
/* harmony export */   gm: () => (/* binding */ useSingleBlockBeatRetry)
/* harmony export */ });
/* unused harmony exports useBeat, useBeatRetry, useDoubleBlockBeatRetry */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99732);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81128);




const DEFAULT_SINGLE_BLOCK_DELAY = 10 * 1000;
// 10 seconds
const DEFAULT_DOUBLE_BLOCK_DELAY = DEFAULT_SINGLE_BLOCK_DELAY * 2;
function useBeat(delay = 1000) {
    const [beat, setBeat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [, , reset] = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(()=>{
        setBeat((x)=>(x + 1) % Number.MAX_SAFE_INTEGER);
        reset();
    }, delay);
    return beat;
}
/**
 * @deprecated Use react-query with refetchInterval
 */ function useBeatRetry(fn, delay = 1000, deps = []) {
    const beat = useBeat(delay);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(fn, deps.concat(beat));
}
function useSingleBlockBeatRetry(pluginID, fn, deps = []) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Others */ .v)(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId) ?? DEFAULT_SINGLE_BLOCK_DELAY, deps);
}
function useDoubleBlockBeatRetry(pluginID, fn, deps = []) {
    const { chainId } = useChainContext();
    const Others = useWeb3Others(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId, 2) ?? DEFAULT_DOUBLE_BLOCK_DELAY, deps);
}
function useCustomBlockBeatRetry(pluginID, fn, deps = [], scale = 1) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3Others */ .v)(pluginID);
    return useBeatRetry(fn, Others.getAverageBlockDelay?.(chainId, scale) ?? DEFAULT_DOUBLE_BLOCK_DELAY, deps);
}


/***/ }),

/***/ 87167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIsRestoring)
/* harmony export */ });
/* unused harmony export IsRestoringProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const IsRestoringContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);
const IsRestoringProvider = IsRestoringContext.Provider;


//# sourceMappingURL=isRestoring.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.8571.js.map