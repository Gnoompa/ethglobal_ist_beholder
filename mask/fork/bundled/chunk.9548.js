(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[9548],{

/***/ 37460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useSocialIdentity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65734);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8898);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49588);





/**
 * Get the social identity of the given identity
 */ function useSocialIdentity(identity) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            identity,
            _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$
        ],
        enabled: Boolean(identity && _context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$),
        queryFn: async ()=>{
            if (!_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$ || !identity) return null;
            return (0,_dom_context_js__WEBPACK_IMPORTED_MODULE_3__/* .querySocialIdentity */ .il)(_context_js__WEBPACK_IMPORTED_MODULE_2__/* .currentNextIDPlatform */ .m$, identity);
        },
        refetchOnWindowFocus: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .MaskMessages */ .q.events.ownProofChanged.on(()=>result.refetch()), [
        result.refetch
    ]);
    return result;
}


/***/ }),

/***/ 62476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unnecessary-qualifier */ // https://github.com/typescript-eslint/typescript-eslint/issues/7192
/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */ /**
     * A code loader interface of the plugin API.
     *
     * Plugin should be lazy-loaded. If a plugin is not enabled, it will not be loaded into the Mask.
     *
     * @example
     * ```ts
     * const loader = {
     *     load: () => import('./code'),
     *     hotModuleReload: hot => import.meta.webpackHot && import.meta.webpackHot.accept('./code', () => hot(import('./code')))
     * }
     * ```
     *
     * The `./code` should use `export default` to export what loader expects.
     */ /**
         * The `load()` function will be called on demand.
         *
         * It should not have side effects (e.g. start some daemon, start a new HTTP request or WebSocket client),
         * those work should be in the `.init()` function.
         * @returns the actual definition of this plugin
         * @example load: () => import('./path')
         */ /**
         * This provides the functionality for hot module reload on the plugin.
         * When the callback is called, the old instance of the plugin will be unloaded, then the new instance will be init.
         * @example hotModuleReload: hot => import.meta.webpackHot && import.meta.webpackHot.accept('./path', () => hot(import('./path')))
         */ /**
     * DeferredDefinition should not contain any functionality of the plugin expects the loader.
     * If the plugin is not providing some of the functionality, please can omit that field.
     */ /** Load the Site Adaptor part of the plugin. */ /** Load the extension page part of the plugin. */ /** Load the Worker part of the plugin. */ /**
 * Basic knowledge of the plugin (ID, name, publisher, ...).
 */ /**
         * A lightweight K/V storage used to store some simple data.
         */ /**
         * ID of the plugin. It should be unique.
         * @example "com.mask.wallet"
         */ /**
         * The human readable name of the plugin.
         * @example { i18nKey: "name", fallback: "Never gonna give you up" }
         */ /**
         * A brief description of this plugin.
         * @example { i18nKey: "description", fallback: "This plugin is going to replace every link in the page to https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
         */ /**
         * Publisher of this plugin.
         * @example { link: "https://github.com/Dimensiondev", name: { fallback: "Mask Network", i18nKey: "org_name" } }
         */ /**
         * Configuration of what environment that this plugin expects to run in.
         */ /**
         * Is this plugin marked as "experimental"?
         *
         * If the enableRequirement.target is not "stable", it will be treated as true.
         *
         * This does not affect if the plugin enable or not.
         */ /**
         * If the plugin is in the minimal mode by default.
         */ /** i18n resources of this plugin */ /**
         * Declare what this plugin provides.
         *
         * Declare this field properly so Mask Network can suggest your plugin when needed.
         */ /** Declare ability this plugin supported. */ /**
     * This part is shared between ExtensionPage, Site Adaptor and Worker part
     * which you should include the information above in those three parts.
     */ /**
         * This function is called when the plugin is initialized.
         *
         * The plugin must clean up all side effects it creates when the `AbortSignal` provided aborts
         * to make sure the plugin can be reloaded safely.
         */ /** The publisher of the plugin */ /** The name of the publisher */ /** URL of the publisher */ /** For what stage the plugin should be included in the Mask. */ /**
     * The condition that expected to start the plugin.
     *
     * If the condition changes and becomes invalid, the plugin will be unloaded.
     */ /** The website this plugin supports. */ /** The Web3 Network this plugin supports */ /**
         * Requested origins.
         * Only put necessary permissions here.
         * https://developer.chrome.com/docs/extensions/mv3/match_patterns/
         */ /**
         * opt-in means the listed site is supported.
         * out-out means the listed site is not supported.
         */ /** This plugin can recognize and react to the following metadata keys. */ /** This plugin can recognize and enhance the post that matches the following matchers. */ /** This part runs in the Site Adaptor */ var Plugin; /** To update enabled/disabled status */  /**
             * The injected Lens Content component
             */  /**
         * The name of the slider card
         */  /**
         * Used to order the sliders
         */  /**
         * The injected UI
         */  /**
         * The name of the tab
         */  /**
         * Used to order the sliders
         */  /**
             * The injected tab content
             */  /**
             * If it returns false, this tab will not be displayed.
             */  /**
             * Filter social address.
             */  /**
             * Sort social address in expected order.
             */  /**
         * The name of the cover
         */  /**
         * Used to order the sliders
         */  /**
             * The injected cover component
             */  /**
             * If it returns false, this cover will not be displayed
             */  /**
             * Filter social account
             */  /**
             * Sort social account in expected order
             */  /**
         * The name of setting tab
         */  /**
         * Used to order the tabs
         */  /** Contribute a widget to other plugins. */  /** This part runs in the Popup */  // As you can see we currently don't have so much use case for an API here.
 /** Plugin DO NOT need to define this. This will be auto set by the plugin host. */  /** This part runs in the background page */  /**
         * Start the background service.
         * @param impl Implementation of the RPC
         */  /**
         * Start the background generator service.
         * @param impl Implementation of the RPC
         */  /**
         * This function will be called when user try to generate a new backup.
         * The return value will contribute to the backup file.
         *
         * If it returns a None, it will not contributes to the backup file.
         *
         * If it returns a Some<T>, T will be serialized by JSON.stringify and added into the backup file.
         */  /**
         * This function will be called when the user try to restore a backup file,
         * and there is some data associated with this plugin.
         *
         * @param data The serialized backup content previously returned by `onBackup`.
         * You MUST treat the data as untrustful content because it can be modified by the user.
         */  /**
     * @typeParameter Data It should be a [tagged union](https://en.wikipedia.org/wiki/Tagged_union) with an extra `id` field
     * @example
     *
     * type File = { type: 'file'; name: string; id: string }
     * type Folder = { type: 'folder'; file: string[]; id: string }
     * const Storage: Plugin.Worker.Storage<File | Folder> = context.storage
     * const file: File = { type: 'file', name: 'file.txt', id: uuid() }
     * const folder: Folder = { type: 'folder', file: [file.id], id: uuid() }
     * // Add new data
     * await Storage.add(file)
     * await Storage.add(folder)
     * // Remove
     * await Storage.remove('file', file.id)
     * // Query
     * const result: File | undefined = await Storage.get('file', file.id)
     * const has: boolean = await Storage.has('file', file.id)
     * // iterate
     * for await (const { value } of Storage.iterate('file')) {
     *     // read only during the for...await loop
     *     // !! NO: await Storage.remove('file', file.id)
     *     console.log(value.name)
     * }
     * for await (const cursor of Storage.iterate_mutate('folder')) {
     *     cursor.value // Folder
     *     await cursor.update({ ...cursor.value, file: [] })
     *     await cursor.delete()
     * }
     */  /**
         * Query an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */  /**
         * Store a data into the database.
         * @param data Must be an object with "type" and "id"
         */  /**
         * Remove an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */  /**
         * Iterate over the database of given type (readonly!)
         *
         * !!! During the iterate, you MUST NOT do anything that writes to the store (use iterate_mutate instead)
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */  /**
         * Iterate over the database of given type (read-write).
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */  /** This part defines the plugin part that does not context aware. */  /** This UI will be injected into the global scope of the target page. */  /**
         * Render metadata in many different environments.
         *
         * 1. Environment
         *
         * The render component MUST NOT assume they are running in a specific environment (e.g. Site Adaptor).
         * Plugin messages and RPC MAY NOT working.
         *
         * It MUST NOT assume the environment using the `context` props.
         * ALL actions MUST BE DONE with the given props.
         *
         * Here is some example of *possible* environments.
         * - inside site adaptor, given "composition" context, running in the CompositionDialog.
         * - inside site adaptor, given "post" context,        running in the DecryptedPost.
         * - inside Popups,       given "post" context,        running in the PostInspector (Isolated mode).
         * - on mask.io,          given "post" context,        allowing preview the message without extension installed.
         *
         * 2. Contexts
         *
         * The render component might be used in many different contexts.
         *
         * - "composition" context, the render should be editable, but not interactive (e.g. allow vote).
         * - "post" context, the render should be readonly, but interactive.
         *
         * 3. Actions
         *
         * The render component MUST BE a ForwardRefExotic React Component
         * that support operations defined in `Plugin.ContextFree.MetadataRender.RenderActions`
         */  // #region Static render
 // new Map([ [reader, react component] ])
 // #endregion
 // #region DynamicRender
 // #endregion
 /**
             * This action make the render into the edit state.
             * It should report the result via onEditComplete() props.
             *
             * If this action does not exist, it will be rendered as non-editable.
             */  /**
             * This action make the render quit the edit state.
             * If save is true, the render MUST report the new result via onEditComplete.
             *
             * If this action does not exist, the render should handle the save/cancel by themselves.
             */  /** This metadata render is called in a composition preview context. */  /**
             * When edit() is called, this component should go into to editable state.
             * If the edit completes, the new metadata will be used to replace the old one.
             */  /**
         * This metadata render is called in the decrypted post.
         */  // Helper types
 /**
     * Injected UI. There're two kinds
     * - InjectUIReact: Optimized for React component.
     * - InjectUIRaw: The fallback choice if a React component doesn't apply here.
     */  /**
     *
     * @example
     * ```ts
     * const ui = {
     *      type: 'raw' as const,
     *      init(signal, dom) {
     *          return props => dom.textContent = toString(props)
     *      }
     * }
     * ```
     */  /**
         * The raw version of the inject UI.
         * @param signal The AbortSignal. You should undo side effects when the signal aborts.
         * @param mountingPoint The mounting DOM
         * @returns A function that will be called each time if the `props` has changed
         */  /** The i18n key of the string content. */  /** The fallback content to display if there is no i18n string found. */  /**
 * This namespace is not related to the plugin authors
 */  // ---------------------------------------------------
 /**
         * Control if the plugin is in the minimal mode.
         *
         * If it is in the minimal mode, it will be omitted in some cases.
         */ 
(function(Plugin) {
    let SiteAdaptor;
    (function(SiteAdaptor) {
        let /** This UI will be rendered for each post found. */ /** This UI will be rendered for action of each post found. */ /** This UI will be rendered for each decrypted post. */ /** This UI will be rendered into the global scope of the site. */ /** This UI will be rendered under the Search result of the site */ /** This UI will be rendered under the Search result of the site. */ /** This UI will be an entry to the plugin in the Composition dialog of Mask. */ /** This UI will be use when there is known badges. */ /** This UI will be rendered as an entry in the wallet status dialog */ /** This UI will be rendered as tabs on the profile page */ /** This UI will be rendered as tabs on the profile card */ /** This UI will be rendered as cover on the profile page */ /** This UI will be rendered as tab on the setting dialog */ /** This UI will be rendered components on the avatar realm */ /** This UI will be shared across plugins */ // Widgets?: {
        //     [key in keyof WidgetRegistry]: Widget<WidgetRegistry[key]>
        // }
        /** This UI will be rendered components on the tips realm */ /** This UI will be rendered components on the tips realm */ /** This UI will be rendered as plugin wrapper page */ /**
         * A hook for if this plugin can enhance the #hash or $cash tag.
         */ // #region Composition entry
        /**
     * The entry has two type:
     *
     * - Dialog type: This type is very common so it is supported as first class citizen.
     * - Custom type: Fallback choice if the dialog type cannot do what you want to do.
     */ /**
         * A label that will be rendered in the CompositionDialog as a chip.
         * @example {fallback: "🧧 Red Packet"}
         */ /** This callback will be called when the user clicked on the chip. */ /**
         * A label that will be rendered in the CompositionDialog as a chip.
         * @example {fallback: "🧧 Red Packet"}
         */ /** A React dialog component that receives `open` and `onClose`. The dialog will be opened when the chip clicked. */ /**
         * If this option is true, the dialog will be always mounted even if the dialog is not opening.
         *
         * @default false
         */ // #endregion
        /**
         * The contrast between ApplicationEntryID and PluginID is that one plugin may contains multiple entries.
         */ /**
         * Render entry component
         */ /**
         * Used to order the applications on the board
         */ /**
         * Used to order the applications on the market list
         */ /**
         * Does the application listed in the DAPP list
         */ /**
         * One plugin may has multiple part. E.g. Tips requires connected wallet, but Tips setting not.
         */ /**
         * Display using an eye-catching card and unable to be unlisted.
         */ /**
         * The injected UI
         */ /** The brief content above detailed tabs. */ /**
         * The name of the slider card
         */ /**
         * Used to order the sliders
         */ /**
         * The injected UI
         */ /**
             * The injected tab content
             */ AvatarRealmSourceType;
        (function(AvatarRealmSourceType) {
            AvatarRealmSourceType["ProfilePage"] = "ProfilePage";
            AvatarRealmSourceType["ProfileCard"] = "ProfileCard";
            AvatarRealmSourceType["Post"] = "Post";
            AvatarRealmSourceType["Editor"] = "Editor";
            AvatarRealmSourceType["Menu"] = "Menu";
            AvatarRealmSourceType["Suggestion"] = "Suggestion";
        })(AvatarRealmSourceType = SiteAdaptor.AvatarRealmSourceType || (SiteAdaptor.AvatarRealmSourceType = {}));
        let /**
             * The injected avatar decorator component
             */ /**
             * The injected avatar settings button component
             */ /**
             * If it returns false, this cover will not be displayed.
             */ TipsSlot;
        (function(TipsSlot) {
            TipsSlot["FollowButton"] = 'follow';
            TipsSlot["Post"] = 'post';
            TipsSlot["Profile"] = 'profile';
            TipsSlot["MirrorMenu"] = 'mirror-menu';
            TipsSlot["MirrorEntry"] = 'mirror-entry';
            TipsSlot["MirrorProfile"] = 'mirror-profile';
            TipsSlot["MirrorVerification"] = 'mirror-verification';
        })(TipsSlot = SiteAdaptor.TipsSlot || (SiteAdaptor.TipsSlot = {}));
        let /**
             * The injected Tips Content component
             */ LensSlot;
        (function(LensSlot) {
            LensSlot["ProfileName"] = 'profile-name';
            LensSlot["Post"] = 'post';
            LensSlot["Sidebar"] = 'sidebar';
        })(LensSlot = SiteAdaptor.LensSlot || (SiteAdaptor.LensSlot = {}));
    })(SiteAdaptor = Plugin.SiteAdaptor || (Plugin.SiteAdaptor = {}));
})(Plugin || (Plugin = {}));


/***/ }),

/***/ 9967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/CSSVariables/vars.ts
var vars = __webpack_require__(23935);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/plugins/Tips/src/base.ts + 7 modules
var base = __webpack_require__(30431);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__(85094);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletStatusBar/PluginWalletStatusBar.tsx
var PluginWalletStatusBar = __webpack_require__(708);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/Tabs/index.tsx + 4 modules
var Tabs = __webpack_require__(22596);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(98862);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(78678);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/resolve.ts
var resolve = __webpack_require__(28110);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useMountReport.ts




/**
 * Log an access event
 */ function useMountReport(eventID) {
    (0,useMount/* default */.Z)(()=>{
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, (0,resolve/* resolve */.D)(eventID));
    });
}

// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(65587);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(80234);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Tab/Tab.js
var Tab = __webpack_require__(60475);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(82903);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(4639);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(54225);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/TargetRuntimeContext.tsx




function useTargetRuntime(initPluginID) {
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const [targetPluginID, setTargetPluginID] = (0,react.useState)(initPluginID ?? pluginID);
    const [chainIdMap, setChainIdMap] = (0,react.useState)({});
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const defaultChainId = (0,useDefaultChainId/* useDefaultChainId */.b)(targetPluginID);
    const fallbackChainId = targetPluginID === pluginID ? chainId : defaultChainId;
    const targetChainId = chainIdMap[targetPluginID] ?? fallbackChainId;
    const setTargetChainId = (0,react.useCallback)((id)=>{
        setChainIdMap((map)=>({
                ...map,
                [targetPluginID]: id
            }));
    }, [
        targetPluginID
    ]);
    return {
        targetPluginID,
        setTargetPluginID,
        targetChainId,
        setTargetChainId
    };
}
const TargetRuntimeContext = (0,unstated_next/* createContainer */.f)(useTargetRuntime);
TargetRuntimeContext.Provider.displayName = 'TargetRuntimeContextProvider';
/**
 * A Tips scoped chain runtime, which controls Web3ContextProvider value
 */ function ChainRuntime({ children }) {
    const { targetPluginID, targetChainId } = TargetRuntimeContext.useContainer();
    const account = (0,useAccount/* useAccount */.m)(targetPluginID);
    const context = (0,react.useMemo)(()=>{
        return {
            pluginID: targetPluginID,
            chainId: targetChainId,
            account,
            controlled: true
        };
    }, [
        targetPluginID,
        targetChainId,
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* Web3ContextProvider */.vP, {
        value: context,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeToken.ts
var useNativeToken = __webpack_require__(24637);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleTokenContract.ts
var useNonFungibleTokenContract = __webpack_require__(34425);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useAvailableBalance.ts
var useAvailableBalance = __webpack_require__(58752);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/storage/index.ts


const storageDefaultValue = {
    publicKey: null,
    addedTokens: []
};
// TODO Keep this for 5 versions until 2.23
const legacyStorageStep = localStorage.getItem('plugin_userGuide_com.maskbook.tip_mirror.xyz');
const guideStorageDefaultValue = {
    userGuide: {
        'mirror.xyz': legacyStorageStep ? Number.parseInt(legacyStorageStep, 10) : undefined
    }
};
let storage = null;
let guideStorage = null;
function setupStorage(_, _guideStorage) {
    storage = _;
    guideStorage = _guideStorage;
}
function getStorage() {
    return storage.storage;
}
const TIPS_GUIDE_TOTAL = 1;
const TIPS_GUIDE_INIT = 1;
const useTipsUserGuide = (site)=>{
    const settings = (0,use_subscription.useSubscription)(guideStorage?.storage?.userGuide.subscription);
    const setStep = (0,react.useCallback)(async (to)=>{
        await guideStorage.storage.userGuide.setValue({
            ...settings,
            [site]: to
        });
    }, [
        settings,
        site
    ]);
    const step = settings[site] ?? TIPS_GUIDE_INIT;
    const nextStep = (0,react.useCallback)(async ()=>{
        await guideStorage.storage.userGuide.setValue({
            ...settings,
            [site]: step + 1
        });
    }, [
        settings,
        step,
        site
    ]);
    return {
        finished: step > TIPS_GUIDE_TOTAL,
        step,
        setStep,
        nextStep
    };
};

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/TipContext.ts



const TipContext = (0,react.createContext)({
    recipient: undefined,
    recipientAddress: '',
    recipientUserId: '',
    setRecipient: noop/* default */.Z,
    tipType: specs/* TokenType */.iv.NonFungible,
    setTipType: noop/* default */.Z,
    recipients: [],
    token: null,
    setToken: noop/* default */.Z,
    amount: '',
    setAmount: noop/* default */.Z,
    nonFungibleTokenId: null,
    setNonFungibleTokenId: noop/* default */.Z,
    nonFungibleTokenContract: null,
    nonFungibleTokenAddress: '',
    setNonFungibleTokenAddress: noop/* default */.Z,
    sendTip: noop/* default */.Z,
    isSending: false,
    isDirty: false,
    storedTokens: [],
    reset: noop/* default */.Z,
    setGasOption: noop/* default */.Z,
    gasOption: undefined,
    validation: [
        true
    ],
    validatingRecipient: false,
    recipientValidation: [
        true
    ],
    isAvailableBalance: false,
    isGasSufficient: false,
    balance: ''
});
TipContext.displayName = 'TipContext';

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/useTipAccountsCompletion.ts


/**
 * Add name service
 */ function useTipAccountsCompletion(accounts) {
    const [map, setMap] = (0,react.useState)({});
    const { NameService } = (0,useWeb3State/* useWeb3State */.d)();
    (0,react.useEffect)(()=>{
        if (!NameService?.reverse) return;
        accounts.forEach(async ({ address, label: originalName })=>{
            if (originalName) return;
            const name = await NameService.reverse(address);
            if (!name) return;
            setMap((oldMap)=>({
                    ...oldMap,
                    [address]: name
                }));
        });
    }, [
        accounts,
        NameService
    ]);
    return (0,react.useMemo)(()=>{
        if (!Object.keys(map).length) return accounts;
        return accounts.map((config)=>({
                ...config,
                name: config.label || map[config.address]
            }));
    }, [
        accounts,
        map
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(96732);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/useNftTip.ts



function useNftTip(pluginID, recipient, contractAddress, tokenId, options) {
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        account,
        ...options,
        overrides: {}
    });
    const [{ loading: isTransferring }, sendTip] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!contractAddress) return;
        if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM && !tokenId) return;
        const txid = await Web3.transferNonFungibleToken(contractAddress, tokenId ?? '', recipient, '1');
        const tokenDetailed = await Web3.getNonFungibleToken(contractAddress, tokenId ?? '', undefined, {
            chainId,
            account
        });
        if (tokenDetailed) {
            await Token?.removeToken?.(account, tokenDetailed);
        }
        return txid;
    }, [
        account,
        tokenId,
        pluginID,
        contractAddress,
        recipient,
        Web3
    ]);
    return [
        isTransferring,
        sendTip
    ];
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/useTokenTip.ts



function useTokenTip(pluginID, recipient, token, amount, options) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const Web3 = (0,useWeb3Connection/* useWeb3Connection */.T)(pluginID, {
        account,
        ...options
    });
    const [{ loading: isTransferring }, sendTip] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!token?.address) return;
        const totalAmount = (0,number/* rightShift */.pu)(amount, token.decimals).toFixed();
        return Web3.transferFungibleToken(token?.address, recipient, totalAmount, '');
    }, [
        account,
        token?.address,
        token?.decimals,
        amount,
        Web3
    ]);
    return [
        isTransferring,
        sendTip
    ];
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAddressType.ts
var useAddressType = __webpack_require__(29063);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/locales/i18n_generated.ts
// @ts-nocheck
/* eslint-disable */ 

function createProxy(initValue) {
    function define(key) {
        const value = initValue(key);
        Object.defineProperty(container, key, {
            value,
            configurable: true
        });
        return value;
    }
    const container = {
        __proto__: new Proxy({
            __proto__: null
        }, {
            get (_, key) {
                if (typeof key === "symbol") return undefined;
                return define(key);
            }
        })
    };
    return new Proxy(container, {
        getPrototypeOf: ()=>null,
        setPrototypeOf: (_, v)=>v === null,
        getOwnPropertyDescriptor: (_, key)=>{
            if (typeof key === "symbol") return undefined;
            if (!(key in container)) define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        }
    });
}
function useTipsTrans() /**
      * `Tips`
      */ /**
      * `To`
      */ /**
      * `Cancel`
      */ /**
      * `Confirm`
      */ /**
      * `Copy successfully`
      */ /**
      * `Default`
      */ /**
      * `Gas Fee`
      */ /**
      * `Insufficient balance`
      */ /**
      * `Manage wallet`
      */ /**
      * `Network error or execute smart contract failed.`
      */ /**
      * `Save`
      */ /**
      * `Save successfully`
      */ /**
      * `Save failed`
      */ /**
      * `Send`
      */ /**
      * `Sending...`
      */ /**
      * `No Enough Gas Fees`
      */ /**
      * `The collectible doesn't exist or belong to you.`
      */ /**
      * `Sent tip successfully.`
      */ /**
      * `Sent {{- amount}} {{name}} tips successfully.`
      */ /**
      * `Share`
      */ /**
      * `OK`
      */ /**
      * `Please connect a wallet.`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Search`
      */ /**
      * `Token`
      */ /**
      * `NFT`
      */ /**
      * `Tokens`
      */ /**
      * `NFTs`
      */ /**
      * `Wallets not found.`
      */ /**
      * `Contracts`
      */ /**
      * `Install https://mask.io/download-links to send your first tip.`
      */ /**
      * `I just tipped {{- amount}} {{symbol}} to @{{recipientSnsId}}'s wallet {{recipient}}
    
    $t(promote)`
      */ /**
      * `I just tipped {{- amount}} {{symbol}} to @{{recipientSnsId}}'s wallet address {{recipient}}
    
    $t(promote)`
      */ /**
      * `I just tipped a {{name}} to @{{recipientSnsId}}'s wallet {{recipient}}
    
    $t(promote)`
      */ /**
      * `I just tipped a {{name}} to @{{recipientSnsId}}'s wallet address {{recipient}}
    
    $t(promote)`
      */ /**
      * `Add`
      */ /**
      * `Adding`
      */ /**
      * `Add Collectibles`
      */ /**
      * `Input contract address`
      */ /**
      * `Token ID`
      */ /**
      * `The contract address is incorrect or the collectible does not belong to you.`
      */ /**
      * `Loading`
      */ /**
      * `No any collectible is available to preview. Please add your collectible here.`
      */ /**
      * `Save successfully`
      */ /**
      * `Add and manage verified wallet addresses for receiving tips.`
      */ /**
      * `The receiving address is a contract address. Please check again.`
      */ /**
      * `The receiving address may be a malicious address.`
      */ /**
      * `Copy Address`
      */ /**
      * `Tips Wallet set up successfully.`
      */ /**
      * `Tips Wallet set up failed, please try again.`
      */ /**
      * `View on Explorer`
      */ /**
      * `Send authors tips by using Mask Network’s Tips function.`
      */ /**
      * `Close`
      */ /**
      * `No collectible found.`
      */ /**
      * `Retry`
      */ /**
      * - tip_token_share_post$name: `I just tipped {{- amount}} {{symbol}} to @{{recipientSnsId}}'s wallet {{recipient}}
    
    $t(promote)`
    
      * - tip_token_share_post$address: `I just tipped {{- amount}} {{symbol}} to @{{recipientSnsId}}'s wallet address {{recipient}}
    
    $t(promote)`
      */ /**
      * - tip_nft_share_post$name: `I just tipped a {{name}} to @{{recipientSnsId}}'s wallet {{recipient}}
    
    $t(promote)`
    
      * - tip_nft_share_post$address: `I just tipped a {{name}} to @{{recipientSnsId}}'s wallet address {{recipient}}
    
    $t(promote)`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("com.maskbook.tip");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "com.maskbook.tip",
            shouldUnescape: true,
            ...props
        });
}
const TipsTrans = /**
      * `Gift crypto or NFTs tips to any <Link>Next.ID</Link> verified users on social media.`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/useRecipientValidate.ts







function useRecipientValidate(recipientAddress) {
    const t = useTipsTrans();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { value: addressType, loading } = (0,useAddressType/* useAddressType */.t)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, recipientAddress, {
        chainId
    });
    const { value: security } = (0,useAsync/* default */.Z)(async ()=>{
        return entry/* GoPlusLabs */.e.getAddressSecurity(chainId, recipientAddress);
    }, [
        chainId,
        recipientAddress
    ]);
    const isMaliciousAddress = security && Object.values(security).filter((x)=>x === '1').length > 0;
    const validation = (0,react.useMemo)(()=>{
        if (addressType === src_types/* AddressType */.DL.Contract) return [
            false,
            t.recipient_address_is_contract()
        ];
        if (isMaliciousAddress) return [
            false,
            t.recipient_address_is_malicious()
        ];
        return [
            true
        ];
    }, [
        addressType,
        isMaliciousAddress,
        t
    ]);
    return {
        loading,
        validation
    };
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/useTipValidate.ts





function useTipValidate(pluginID, chainId, { tipType, amount, token, nonFungibleTokenId: tokenId, nonFungibleTokenAddress: tokenAddress, isGasSufficient }) {
    const { account } = (0,useContext/* useChainContext */.ql)();
    const { data: balance = '0' } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(pluginID, token?.address, {
        chainId,
        account
    });
    const t = useTipsTrans();
    const result = (0,react.useMemo)(()=>{
        if (tipType === specs/* TokenType */.iv.Fungible) {
            if (!isGasSufficient) {
                return [
                    false,
                    t.no_enough_gas_fees()
                ];
            }
            if (!amount || (0,number/* isLessThanOrEqualTo */.PW)(amount, 0)) return [
                false
            ];
            if ((0,number/* isGreaterThan */.T1)((0,number/* rightShift */.pu)(amount, token?.decimals), balance)) return [
                false,
                t.token_insufficient_balance()
            ];
        } else if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            if (!tokenId || !tokenAddress) return [
                false
            ];
        } else if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA && !tokenAddress) {
            return [
                false
            ];
        }
        return [
            true
        ];
    }, [
        tipType,
        amount,
        token?.decimals,
        balance,
        pluginID,
        tokenId,
        tokenAddress,
        t,
        isGasSufficient
    ]);
    return result;
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/Tip/TipTaskProvider.tsx















function useRecipients(pluginID, tipsAccounts) {
    const _recipients = useTipAccountsCompletion(tipsAccounts);
    const recipients = (0,react.useMemo)(()=>{
        return [
            ..._recipients
        ].sort((a, z)=>{
            if (a.pluginID === z.pluginID) return 0;
            return a.pluginID === pluginID ? -1 : 1;
        });
    }, [
        _recipients,
        pluginID
    ]);
    return recipients;
}
function useDirtyDetection(deps) {
    const [isDirty, setIsDirty] = (0,react.useState)(false);
    const { account } = (0,useContext/* useChainContext */.ql)();
    (0,react.useEffect)(()=>{
        setIsDirty(true);
    }, [
        account,
        ...deps
    ]);
    return [
        isDirty,
        setIsDirty
    ];
}
const TipTaskProvider = /*#__PURE__*/ (0,react.memo)(({ children, task })=>{
    const { targetPluginID, setTargetPluginID } = TargetRuntimeContext.useContainer();
    const { chainId: targetChainId } = (0,useContext/* useChainContext */.ql)();
    const [gasOption, setGasOption] = (0,react.useState)();
    const [_recipientAddress, setRecipient] = (0,react.useState)(task.recipient ?? '');
    const recipients = useRecipients(targetPluginID, task.accounts);
    const [tipType, setTipType] = (0,react.useState)(specs/* TokenType */.iv.Fungible);
    const [amount, setAmount] = (0,react.useState)('');
    const [nonFungibleTokenAddress, setNonFungibleTokenAddress] = (0,react.useState)('');
    const { data: nativeTokenDetailed = null } = (0,useNativeToken/* useNativeToken */.u)(targetPluginID, {
        chainId: targetChainId
    });
    const [tokenMap, setTokenMap] = (0,react.useState)({});
    const key = `${targetPluginID}:${targetChainId}`;
    const setToken = (0,react.useCallback)((val)=>{
        setTokenMap((map)=>{
            const newToken = typeof val === 'function' ? val(map[key]) : val;
            return {
                ...map,
                [key]: newToken
            };
        });
    }, [
        key
    ]);
    const token = tokenMap[key] ?? nativeTokenDetailed;
    // #region balance
    const { isAvailableBalance, balance, isGasSufficient } = (0,useAvailableBalance/* useAvailableBalance */.d)(targetPluginID, token?.address, gasOption, {
        chainId: targetChainId
    });
    // #endregion
    const [nonFungibleTokenId, setNonFungibleTokenId] = (0,react.useState)(null);
    const storedTokens = (0,use_subscription.useSubscription)(getStorage().addedTokens.subscription);
    const validation = useTipValidate(targetPluginID, targetChainId, {
        tipType,
        amount,
        token,
        nonFungibleTokenId,
        nonFungibleTokenAddress,
        isGasSufficient
    });
    const { value: nonFungibleTokenContract } = (0,useNonFungibleTokenContract/* useNonFungibleTokenContract */.L)(targetPluginID, nonFungibleTokenAddress);
    const connectionOptions = targetPluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? {
        overrides: gasOption,
        chainId: targetChainId
    } : undefined;
    const recipientAddress = _recipientAddress || task.recipient || recipients[0]?.address;
    const { loading: validatingRecipient, validation: recipientValidation } = useRecipientValidate(recipientAddress);
    const tokenTipTuple = useTokenTip(targetPluginID, recipientAddress, token, amount, connectionOptions);
    const nftTipTuple = useNftTip(targetPluginID, recipientAddress, nonFungibleTokenAddress, nonFungibleTokenId, connectionOptions);
    const sendTipTuple = tipType === specs/* TokenType */.iv.Fungible ? tokenTipTuple : nftTipTuple;
    const [isDirty, setIsDirty] = useDirtyDetection([
        tipType,
        recipientAddress,
        targetChainId,
        amount,
        token
    ]);
    const isSending = sendTipTuple[0];
    const sendTip = sendTipTuple[1];
    const recipient = recipients.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, recipientAddress));
    const reset = (0,react.useCallback)(()=>{
        setAmount('');
        setNonFungibleTokenId(null);
        setNonFungibleTokenAddress('');
    }, []);
    (0,react.useEffect)(reset, [
        targetChainId
    ]);
    const wrappedSendTip = (0,react.useCallback)(()=>{
        setIsDirty(false);
        return sendTip();
    }, [
        sendTip
    ]);
    const contextValue = (0,react.useMemo)(()=>{
        return {
            recipient,
            recipientUserId: task.recipientUserId || '',
            recipientAddress,
            setRecipient,
            recipients,
            tipType,
            setTipType,
            token,
            setToken,
            amount,
            setAmount,
            nonFungibleTokenId,
            setNonFungibleTokenId,
            nonFungibleTokenContract: nonFungibleTokenContract || null,
            nonFungibleTokenAddress,
            setNonFungibleTokenAddress,
            sendTip: wrappedSendTip,
            // Respect to dirty status, reset if it's dirty
            isSending: isDirty ? false : isSending,
            isDirty,
            storedTokens: storedTokens.filter((t)=>t.contract?.chainId === targetChainId),
            reset,
            gasOption,
            setGasOption,
            validation,
            validatingRecipient,
            recipientValidation,
            isAvailableBalance,
            isGasSufficient,
            balance
        };
    }, [
        targetChainId,
        recipient,
        recipientAddress,
        task.recipient,
        task.recipientUserId,
        recipients,
        tipType,
        amount,
        nonFungibleTokenId,
        nonFungibleTokenContract,
        nonFungibleTokenAddress,
        token,
        wrappedSendTip,
        isSending,
        reset,
        balance,
        gasOption,
        storedTokens,
        validation,
        validatingRecipient,
        recipientValidation
    ]);
    (0,react.useEffect)(()=>{
        const pid = recipient?.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
        setTargetPluginID(pid);
    }, [
        recipient?.pluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TipContext.Provider, {
        value: contextValue,
        children: children
    });
});
TipTaskProvider.displayName = 'TipTaskProvider';
function useTip() {
    return (0,react.useContext)(TipContext);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqWith.js
var uniqWith = __webpack_require__(9402);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(45921);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(55149);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleList.tsx + 3 modules
var CollectibleList = __webpack_require__(28246);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadingStatus/index.tsx
var LoadingStatus = __webpack_require__(52478);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var address = __webpack_require__(65327);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensFollower.ts
var isLensFollower = __webpack_require__(63623);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/isLensCollect.ts
var isLensCollect = __webpack_require__(42097);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/NFTSection/index.tsx













const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            height: '100%'
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexShrink: 0,
            margin: theme.spacing(0, 2)
        },
        selectSection: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            flexGrow: 1,
            margin: theme.spacing(2, 0, 0)
        },
        statusBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(4)
        },
        collectibleList: {
            paddingRight: 0
        },
        loadingList: {
            overflowY: 'scroll',
            flexGrow: 1,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                minHeight: 50,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            }
        },
        addButton: {
            marginLeft: 'auto',
            cursor: 'pointer',
            color: theme.palette.maskColor.highlight,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px'
        }
    }));
function NFTSection({ className, onEmpty, ...rest }) {
    const { nonFungibleTokenAddress: tokenAddress, nonFungibleTokenId: tokenId, setNonFungibleTokenId, setNonFungibleTokenAddress } = useTip();
    const { classes, cx } = useStyles();
    const t = useTipsTrans();
    const selectedKey = tokenAddress || tokenId ? `${tokenAddress}_${tokenId}` : undefined;
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const { value: fetchedTokens = constants/* EMPTY_LIST */.rP, done, next, loading, error: loadError } = (0,useNonFungibleAssets/* useNonFungibleAssets */.H)(pluginID, undefined, {
        chainId
    });
    const isEvm = pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
    const tokens = (0,react.useMemo)(()=>{
        const filtered = isEvm ? fetchedTokens.filter((x)=>{
            if ((0,address/* isLensProfileAddress */._u)(x.address)) return false;
            if (x.metadata?.name && (0,isLensFollower/* isLensFollower */.a)(x.metadata.name)) return false;
            if (x.collection?.name && (0,isLensCollect/* isLensCollect */.C)(x.collection.name)) return false;
            return true;
        }) : fetchedTokens;
        return (0,uniqWith/* default */.Z)(filtered, isEvm ? (v1, v2)=>{
            return (0,isSameAddress/* isSameAddress */.W)(v1.contract?.address, v2.contract?.address) && v1.tokenId === v2.tokenId;
        } : (v1, v2)=>v1.tokenId === v2.tokenId);
    }, [
        fetchedTokens,
        isEvm
    ]);
    const { Token } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const handleAddToken = (0,react.useCallback)(async ()=>{
        const results = await modals/* AddCollectiblesModal */.NB.openAndWaitForClose({
            pluginID,
            chainId
        });
        if (!results || !chainId) return;
        const [contract, tokenIds] = results;
        const allSettled = await Promise.allSettled(tokenIds.map(async (tokenId)=>{
            const token = await entry/* Web3 */.Bv.getNonFungibleToken(contract.address, tokenId, src_types/* SchemaType */.XQ.ERC721, {
                chainId: chainId,
                account
            });
            await Token?.addToken?.(account, token);
            return token;
        }));
        const tokens = (0,compact/* default */.Z)(allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null));
        if (!tokens.length) return;
        setNonFungibleTokenAddress(tokens[0].address);
        setNonFungibleTokenId(tokens[0].tokenId);
    }, [
        account,
        pluginID,
        chainId,
        Token?.addNonFungibleTokens
    ]);
    // fetched tokens are all filtered out, keep fetching next page
    (0,react.useEffect)(()=>{
        if (tokens.length) return;
        next();
    }, [
        !tokens.length,
        fetchedTokens.length,
        next
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                className: classes.header,
                children: isEvm && account ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.addButton,
                    onClick: handleAddToken,
                    children: t.tip_add_collectibles()
                }) : null
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.selectSection,
                children: (()=>{
                    if (tokens.length) {
                        // TODO CollectionList has its own loading skeleton
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.loadingList,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectibleList */.O, {
                                    classes: {
                                        root: classes.collectibleList
                                    },
                                    retry: next,
                                    collectibles: tokens,
                                    pluginID: pluginID,
                                    loading: loading,
                                    columns: 4,
                                    selectable: true,
                                    value: selectedKey,
                                    showNetworkIcon: false,
                                    onChange: (value)=>{
                                        if (!value) {
                                            setNonFungibleTokenAddress('');
                                            setNonFungibleTokenId('');
                                            return;
                                        }
                                        const [address, tokenId] = value.split('_');
                                        setNonFungibleTokenAddress(address);
                                        setNonFungibleTokenId(tokenId);
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                                    callback: ()=>next?.(),
                                    children: !done && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                                        size: 36
                                    })
                                }, fetchedTokens.length)
                            ]
                        });
                    }
                    if (tokens.length === 0 && (!done || loading) && account) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingStatus/* LoadingStatus */.Q, {
                            className: classes.statusBox,
                            iconSize: 36
                        });
                    }
                    if (fetchedTokens.length === 0 && loadError && account && done) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                            retry: next
                        });
                    }
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                        className: classes.statusBox,
                        iconSize: 36,
                        children: t.tip_empty_nft()
                    });
                })()
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(39907);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkTab/index.tsx
var NetworkTab = __webpack_require__(59312);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/NetworkSection/index.tsx







const NetworkSection_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        abstractTabWrapper: {
            width: '100%',
            paddingBottom: theme.spacing(1),
            flexShrink: 0,
            height: 62
        }
    }));
function NetworkSection() {
    const { classes } = NetworkSection_useStyles();
    const { setTargetChainId } = TargetRuntimeContext.useContainer();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const tipsDefinition = (0,useActivatedPlugin/* useActivatedPlugin */.R)(PluginID/* PluginID */.P.Tips, 'any');
    const chainIdList = tipsDefinition?.enableRequirement.web3?.[pluginID]?.supportedChainIds ?? constants/* EMPTY_LIST */.rP;
    if (!chainIdList.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.abstractTabWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
            chains: chainIdList,
            pluginID: pluginID,
            onChange: setTargetChainId
        })
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(47675);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AccountIcons/index.tsx
var AccountIcons = __webpack_require__(27877);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Select/Select.js + 1 modules
var Select = __webpack_require__(23361);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(23869);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/RecipientSection/RecipientSelect.tsx











const RecipientSelect_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>{
    return {
        root: {
            height: 40,
            flexGrow: 1
        },
        menuItem: {
            height: 32,
            color: theme.palette.maskColor.main,
            borderRadius: theme.spacing(1),
            padding: theme.spacing(0, 0.5),
            '&:not(:first-of-type)': {
                marginTop: theme.spacing(1)
            }
        },
        text: {
            fontWeight: 700,
            marginLeft: theme.spacing(0.5),
            fontSize: '0.825rem'
        },
        select: {
            display: 'flex',
            alignItems: 'center',
            [`& .${refs.icon}`]: {
                display: 'none'
            },
            [`& .${refs.pluginIcon}`]: {
                display: 'none'
            },
            [`& .${refs.text}`]: {
                fontWeight: 400
            }
        },
        menuPaper: {
            '::-webkit-scrollbar': {
                display: 'none',
                opacity: 0
            }
        },
        menu: {
            maxHeight: 312,
            padding: theme.spacing(1.5),
            borderRadius: theme.spacing(2)
        },
        icon: {
            width: 20,
            height: 20
        },
        pluginIcon: {},
        link: {
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 0
        },
        actionIcon: {
            marginLeft: theme.spacing(0.5),
            color: theme.palette.maskColor.main
        },
        checkIcon: {
            marginLeft: 'auto',
            color: '#60DFAB',
            filter: 'drop-shadow(0px 4px 10px rgba(28, 104, 243, 0.2))'
        }
    };
});
const PluginIcon = ({ pluginID })=>{
    const { classes } = RecipientSelect_useStyles();
    const mapping = {
        [PluginID/* NetworkPluginID */.F.PLUGIN_EVM]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ETH, {
            size: 20,
            className: classes.pluginIcon,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(98, 126, 234, 0.2))',
                backdropFilter: 'blur(16px)'
            }
        }),
        [PluginID/* NetworkPluginID */.F.PLUGIN_FLOW]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Flow, {
            size: 20,
            className: classes.pluginIcon,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(25, 251, 155, 0.2))',
                backdropFilter: 'blur(16px)'
            }
        }),
        [PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA]: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Solana, {
            size: 20,
            className: classes.pluginIcon,
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(25, 251, 155, 0.2))',
                backdropFilter: 'blur(16px)'
            }
        })
    };
    return mapping[pluginID];
};
function ExternalLink({ account }) {
    const t = useTipsTrans();
    const { classes, cx } = RecipientSelect_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(account.pluginID);
    const chainId = (0,useDefaultChainId/* useDefaultChainId */.b)(account.pluginID);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        className: cx(classes.link, classes.actionIcon, classes.icon),
        onClick: (e)=>e.stopPropagation(),
        href: Others.explorerResolver.addressLink(chainId, account.address) ?? '',
        target: "_blank",
        title: t.view_on_explorer(),
        rel: "noopener noreferrer",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
            size: 20
        })
    });
}
const RecipientSelect = /*#__PURE__*/ (0,react.memo)(({ className })=>{
    const { classes, cx } = RecipientSelect_useStyles();
    const selectRef = (0,react.useRef)(null);
    const { recipient, recipients, setRecipient } = useTip();
    const recipientAddress = recipient?.address;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
        className: cx(classes.root, className),
        ref: selectRef,
        value: recipientAddress,
        classes: {
            select: classes.select
        },
        onChange: (e)=>{
            setRecipient(e.target.value);
        },
        MenuProps: {
            classes: {
                paper: classes.menuPaper,
                list: classes.menu
            },
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            disableScrollLock: true,
            container: selectRef.current,
            anchorEl: selectRef.current,
            BackdropProps: {
                invisible: true
            }
        },
        children: recipients.map((account)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
                className: classes.menuItem,
                value: account.address,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginIcon, {
                        pluginID: account.pluginID
                    }),
                    account.label ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        className: classes.text,
                        children: account.label
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
                        address: account.address,
                        size: account.address.length,
                        component: "span",
                        className: classes.text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExternalLink, {
                        account: account
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountIcons/* AccountIcons */.H, {
                        socialAccount: account,
                        classes: {
                            icon: classes.icon
                        }
                    }),
                    (0,isSameAddress/* isSameAddress */.W)(account.address, recipientAddress) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.CheckCircle, {
                        className: cx(classes.checkIcon, classes.icon)
                    }) : null
                ]
            }, account.address))
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/RecipientSection/index.tsx






const RecipientSection_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        container: {
            width: 'auto'
        },
        receiverRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 'auto'
        },
        to: {
            fontSize: 19,
            fontWeight: 500
        },
        select: {
            marginLeft: theme.spacing(2)
        },
        validation: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.danger,
            marginTop: theme.spacing(1)
        }
    };
});
function RecipientSection({ className, ...rest }) {
    const { classes, cx } = RecipientSection_useStyles();
    const t = useTipsTrans();
    const { recipientValidation: [isValid, validateMessage] } = useTip();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
        fullWidth: true,
        className: cx(classes.container, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.receiverRow,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.to,
                        children: t.tip_to()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RecipientSelect, {
                        className: classes.select
                    })
                ]
            }),
            isValid ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.validation,
                children: validateMessage
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/FungibleTokenInput/index.tsx + 1 modules
var FungibleTokenInput = __webpack_require__(93558);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenValue/index.tsx
var TokenValue = __webpack_require__(44888);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/SelectGasSettingsToolbar/index.tsx
var SelectGasSettingsToolbar = __webpack_require__(66390);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(39256);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useGasPrice.ts + 1 modules
var useGasPrice = __webpack_require__(37186);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetwork.ts
var useNetwork = __webpack_require__(70858);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/GasEditor.ts
var GasEditor = __webpack_require__(49113);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TokenSection/useGasLimit.ts







const MIN_GAS_LIMIT = 21000;
const DEFAULT_GAS_LIMIT = 50000;
// We only care about fungible tokens
function useGasLimit(fallback = DEFAULT_GAS_LIMIT) {
    const { tipType, token, amount, recipientAddress } = useTip();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    return (0,useAsync/* default */.Z)(async ()=>{
        const isNativeToken = (0,address/* isNativeTokenAddress */.qw)(token?.address);
        const isTippingToken = tipType === specs/* TokenType */.iv.Fungible;
        if (isNativeToken || !isTippingToken) return MIN_GAS_LIMIT;
        if (!token?.address) return fallback;
        const contract = entry/* Contract */.CH.getERC20Contract(token.address, {
            chainId,
            account
        });
        const tx = contract?.methods.transfer(recipientAddress, (0,lib.toHex)(amount));
        const estimated = await tx?.estimateGas({
            from: account
        });
        return estimated ?? fallback;
    }, [
        token,
        tipType,
        chainId,
        account,
        fallback
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TokenSection/GasSettingsBar.tsx










const ETH_GAS_LIMIT = 21000;
const ERC20_GAS_LIMIT = 50000;
function GasSettingsBar() {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { token, setGasOption, gasOption } = useTip();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const isNativeToken = (0,address/* isNativeTokenAddress */.qw)(token?.address);
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const { data: nativeTokenPrice = 0 } = (0,useNativeTokenPrice/* useNativeTokenPrice */.l)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const { data: defaultGasPrice = '1' } = (0,useGasPrice/* useGasPrice */.F)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId
    });
    const network = (0,useNetwork/* useNetwork */.L)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, chainId);
    const nativeToken = network?.nativeCurrency;
    const GAS_LIMIT = isNativeToken ? ETH_GAS_LIMIT : ERC20_GAS_LIMIT;
    const { value: gasLimit = GAS_LIMIT } = useGasLimit();
    const handleGasSettingChange = (0,react.useCallback)((gasConfig)=>{
        const editor = GasEditor/* GasEditor */.e.fromConfig(chainId, gasConfig);
        setGasOption((config)=>{
            return editor.getGasConfig({
                gasPrice: defaultGasPrice,
                maxFeePerGas: defaultGasPrice,
                maxPriorityFeePerGas: defaultGasPrice,
                ...config
            });
        });
    }, [
        chainId,
        defaultGasPrice
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectGasSettingsToolbar/* SelectGasSettingsToolbar */.M, {
        supportMultiCurrency: !!wallet?.owner && chainId === smartPayChainId,
        nativeToken: nativeToken,
        nativeTokenPrice: nativeTokenPrice,
        gasConfig: gasOption,
        gasLimit: gasLimit,
        onChange: handleGasSettingChange
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TokenSection/index.tsx








const TokenSection_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    tokenValue: {
        flexGrow: 1
    }
});
function TokenSection(props) {
    const { classes, cx } = TokenSection_useStyles();
    const { token, setToken, amount, setAmount, isAvailableBalance, balance } = useTip();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await modals/* SelectFungibleTokenModal */.gw.openAndWaitForClose({
            pluginID,
            chainId,
            disableNativeToken: false,
            selectedTokens: token ? [
                token.address
            ] : []
        });
        if (!picked) return;
        setToken(picked);
    }, [
        token?.address,
        pluginID,
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...props,
        className: cx(props.className, classes.container),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenInput/* FungibleTokenInput */.C, {
                label: "",
                token: token,
                amount: amount,
                isAvailableBalance: isAvailableBalance,
                onAmountChange: setAmount,
                balance: balance,
                onSelectToken: onSelectTokenChipClick
            }),
            pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingsBar, {}) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenValue/* TokenValue */.W, {
                className: classes.tokenValue,
                token: token,
                amount: amount
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TipDialog.tsx






















const TipDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialog: {
            width: 600,
            height: 620,
            overflow: 'hidden',
            backgroundImage: 'none'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 1,
            flexGrow: 1,
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            padding: 0
        },
        recipient: {
            margin: theme.spacing(1, 2, 0)
        },
        tabPanel: {
            flexGrow: 1,
            overflow: 'auto',
            padding: theme.spacing(0, 2)
        },
        section: {
            height: '100%',
            paddingTop: theme.spacing(2),
            boxSizing: 'border-box'
        }
    }));
const site = (0,Site/* getSiteType */.sv)();
function TipDialog({ open = false, onClose }) {
    const t = useTipsTrans();
    const { classes } = TipDialog_useStyles();
    const { tipType, setTipType, amount, token, isSending, isDirty, recipient, recipientAddress, recipientUserId, nonFungibleTokenAddress, nonFungibleTokenContract, nonFungibleTokenId, sendTip, validation: [isValid, validateMessage] } = useTip();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { data: recipientEns } = (0,useReverseAddress/* useReverseAddress */.$)(pluginID, recipientAddress);
    const wallet = (0,useWallet/* useWallet */.O)();
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    const isTokenTip = tipType === specs/* TokenType */.iv.Fungible;
    const shareText = (0,react.useMemo)(()=>{
        const recipientName = recipient?.label || recipientEns;
        const context = recipientName ? 'name' : 'address';
        const message = isTokenTip ? t.tip_token_share_post({
            amount,
            symbol: token?.symbol || 'token',
            recipientSnsId: recipientUserId,
            recipient: recipientName || recipientAddress,
            context
        }) : t.tip_nft_share_post({
            name: nonFungibleTokenContract?.name || 'NFT',
            recipientSnsId: recipientUserId,
            recipient: recipientName || recipientAddress,
            context
        });
        return message;
    }, [
        amount,
        isTokenTip,
        nonFungibleTokenContract?.name,
        token,
        recipient,
        recipientUserId,
        t,
        recipientEns
    ]);
    const currentTab = isTokenTip ? specs/* TokenType */.iv.Fungible : specs/* TokenType */.iv.NonFungible;
    const onTabChange = (0,react.useCallback)((_, value)=>{
        setTipType(value);
    }, []);
    const buttonLabel = isSending ? t.sending_tip() : isValid || !validateMessage ? t.send_tip() : validateMessage;
    const { data: nonFungibleToken } = (0,useNonFungibleAsset/* useNonFungibleAsset */.E)(undefined, nonFungibleTokenAddress, nonFungibleTokenId ?? '');
    const send = (0,react.useCallback)(async ()=>{
        const hash = await sendTip();
        if (typeof hash !== 'string') return;
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryTimelineTipsSend);
        await modals/* TransactionConfirmModal */.l$.openAndWaitForClose({
            shareText,
            amount,
            tokenType: tipType,
            token,
            nonFungibleTokenId,
            nonFungibleTokenAddress,
            messageTextForNFT: t.send_specific_tip_successfully({
                amount: '1',
                name: nonFungibleToken?.contract?.name || 'NFT'
            }),
            messageTextForFT: t.send_specific_tip_successfully({
                amount,
                name: `$${token?.symbol}`
            }),
            title: t.tips(),
            share: context/* share */.BN
        });
        onClose?.();
    }, [
        sendTip,
        nonFungibleToken,
        shareText,
        amount,
        tipType,
        token,
        nonFungibleTokenAddress,
        nonFungibleTokenId
    ]);
    const expectedPluginID = [
        PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
        PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA
    ].includes(pluginID) ? pluginID : PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
    const submitDisabled = !isValid || isSending && !isDirty;
    const pluginIDs = (0,useValueRef/* useValueRef */.E)(settings/* pluginIDsSettings */.Mo);
    const pluginId = site ? pluginIDs[site] : PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const { setTargetChainId } = TargetRuntimeContext.useContainer();
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!!wallet?.owner && smartPayChainId) setTargetChainId(smartPayChainId);
    }, [
        !!wallet?.owner,
        smartPayChainId
    ]);
    useMountReport(types/* EventID */.HS.EntryTimelineTipsOpen);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContext/* default */.ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            classes: {
                paper: classes.dialog
            },
            title: t.tips(),
            titleTabs: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* MaskTabList */.C, {
                variant: "base",
                onChange: onTabChange,
                "aria-label": "Tips",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.tips_tab_tokens(),
                        value: specs/* TokenType */.iv.Fungible
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                        label: t.tips_tab_collectibles(),
                        value: specs/* TokenType */.iv.NonFungible
                    })
                ]
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(RecipientSection, {
                        className: classes.recipient
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: specs/* TokenType */.iv.Fungible,
                        className: classes.tabPanel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSection, {
                            className: classes.section
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: specs/* TokenType */.iv.NonFungible,
                        className: classes.tabPanel,
                        style: {
                            padding: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTSection, {
                            className: classes.section
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWalletStatusBar/* PluginWalletStatusBar */.A, {
                        actualPluginID: pluginId,
                        expectedPluginID: expectedPluginID,
                        expectedChainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: expectedPluginID,
                            expectedChainId: chainId,
                            ActionButtonPromiseProps: {
                                fullWidth: true
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                fullWidth: true,
                                disabled: submitDisabled,
                                onClick: send,
                                children: buttonLabel
                            })
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./packages/plugins/Tips/src/messages.ts
var messages = __webpack_require__(90660);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/contexts/TipTaskManager.tsx









let id = 0;
function TipTaskManager({ children }) {
    const [tasks, setTasks] = (0,react.useState)(constants/* EMPTY_LIST */.rP);
    const removeTask = (0,react.useCallback)((task)=>{
        setTasks((list)=>list.filter((t)=>t.id !== task.id));
    }, []);
    (0,react.useEffect)(()=>{
        return messages/* PluginTipsMessages */.q.tipTask.on((task)=>{
            id += 1;
            setTasks((list)=>[
                    ...list,
                    {
                        id,
                        ...task
                    }
                ]);
        });
    }, []);
    (0,react.useEffect)(()=>{
        return messages/* PluginTipsMessages */.q.tipTaskUpdate.on((task)=>{
            setTasks((list)=>{
                const included = list.some((t)=>t.recipientUserId === task.recipientUserId);
                if (!included) return list;
                if (list.some((t)=>(0,isEqual/* default */.Z)(task, t))) return list;
                return list.map((t)=>t.recipientUserId === task.recipientUserId ? {
                        ...task,
                        id: t.id
                    } : t);
            });
        });
    }, []);
    // We assume there is only single one tips task at each time.
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            tasks.map((task)=>{
                const tipsAccount = task.accounts.find((x)=>(0,isSameAddress/* isSameAddress */.W)(x.address, task.recipient));
                const pluginID = tipsAccount?.pluginID ?? task.accounts[0].pluginID;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(TargetRuntimeContext.Provider, {
                    initialState: pluginID,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainRuntime, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipTaskProvider, {
                            task: task,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipDialog, {
                                open: true,
                                onClose: ()=>removeTask(task)
                            })
                        })
                    })
                }, task.id);
            }),
            children
        ]
    });
}

// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var plugin_infra_src_types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useLastRecognizedIdentity.ts
var useLastRecognizedIdentity = __webpack_require__(58213);
// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+base@5.0.0-alpha.100_patch_hash=ved4raqjjkr2jjhghdp5ouuxk4_@types+react@18.2.21_react-do_x7tnikinjhdbsji3vhas5jytle/node_modules/@mui/base/Portal/Portal.js
var Portal_Portal = __webpack_require__(71576);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PluginGuide/index.tsx





const PluginGuide_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            position: 'absolute',
            borderRadius: '50%'
        },
        target: {
            background: 'transparent'
        },
        mask: {
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'transparent',
            zIndex: 1000
        },
        card: {
            position: 'absolute',
            left: 0,
            width: 256,
            padding: theme.spacing(2),
            borderRadius: theme.spacing(2),
            background: theme.palette.maskColor.tips,
            boxShadow: '0 4px 8px rgba(0,0,0,.1)',
            boxSizing: 'border-box',
            color: theme.palette.maskColor.bottom,
            '&.arrow-top:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderBottomColor: theme.palette.maskColor.tips,
                borderBottomWidth: '13px',
                borderTopWidth: 0,
                position: 'absolute',
                top: '-13px',
                left: '24px'
            },
            '&.arrow-bottom:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderTopColor: theme.palette.maskColor.tips,
                borderTopWidth: '13px',
                borderBottomWidth: 0,
                position: 'absolute',
                bottom: '-13px',
                left: '24px'
            }
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: theme.spacing(2)
        },
        button: {
            width: '100%',
            borderRadius: '20px',
            backgroundColor: theme.palette.maskColor.bottom,
            color: theme.palette.maskColor.main,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bottom
            }
        }
    }));
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
function PluginGuide({ children, step, totalStep, arrow = true, finished = false, title, actionText, currentStep, onNext }) {
    const { classes, cx } = PluginGuide_useStyles();
    const childrenRef = (0,react.useRef)(null);
    const [clientRect, setClientRect] = (0,react.useState)({});
    const [bottomAvailable, setBottomAvailable] = (0,react.useState)(true);
    const targetVisible = !!clientRect.top && !!clientRect.left && !!clientRect.height && clientRect.width;
    const stepVisible = !finished && currentStep === step && targetVisible;
    (0,react.useLayoutEffect)(()=>{
        document.documentElement.style.overflow = stepVisible ? 'hidden' : '';
        document.documentElement.style.paddingLeft = 'calc(100vw - 100%)';
    }, [
        stepVisible
    ]);
    (0,react.useEffect)(()=>{
        if (finished) return;
        const updateClientRect = ()=>{
            const cr = childrenRef.current?.getBoundingClientRect();
            if (cr) {
                const bottomAvailable = window.innerHeight - cr.height - cr.top > 200;
                setBottomAvailable(bottomAvailable);
                if (!cr.width) {
                    setClientRect({
                        ...cr.toJSON(),
                        top: 30,
                        left: 'calc(100vw - 300px)'
                    });
                } else {
                    setClientRect(cr);
                }
            }
        };
        updateClientRect();
        window.addEventListener('resize', updateClientRect);
        return ()=>{
            window.removeEventListener('resize', updateClientRect);
        };
    }, [
        childrenRef.current,
        finished
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,react.cloneElement)(children, {
                ref: childrenRef
            }),
            (0,Portal/* usePortalShadowRoot */.ad)((container)=>{
                if (!stepVisible) return null;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal_Portal/* default */.Z, {
                    container: container,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.mask,
                        onClick: (e)=>{
                            e.stopPropagation();
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.container,
                            style: {
                                top: clientRect.top,
                                left: clientRect.left
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.target,
                                style: {
                                    width: clientRect.width,
                                    height: clientRect.height
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    onClick: (e)=>e.stopPropagation(),
                                    className: cx(classes.card, arrow ? bottomAvailable ? 'arrow-top' : 'arrow-bottom' : ''),
                                    style: {
                                        left: clientRect.width < 50 ? -clientRect.width / 2 + 5 : 0,
                                        [bottomAvailable ? 'top' : 'bottom']: clientRect.height + 16
                                    },
                                    children: [
                                        totalStep !== 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            style: {
                                                paddingBottom: '16px'
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                sx: {
                                                    fontSize: 20
                                                },
                                                children: [
                                                    currentStep,
                                                    "/",
                                                    totalStep
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                fontSize: 14,
                                                fontWeight: 600,
                                                children: title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.buttonContainer,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                color: "primary",
                                                className: classes.button,
                                                onClick: onNext,
                                                children: actionText
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                });
            })
        ]
    });
}
const PluginGuideContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function PluginGuideProvider({ value, children }) {
    const { guides, totalStep, onFinish, storageKey = 'default', pluginID } = value;
    const { currentStep, finished, nextStep } = usePluginGuideRecord(pluginID, totalStep, storageKey, onFinish);
    const title = guides[currentStep - 1]?.title;
    const actionText = guides[currentStep - 1]?.actionText;
    const context = useMemo(()=>({
            title,
            actionText,
            finished,
            currentStep,
            totalStep,
            nextStep
        }), [
        title,
        actionText,
        finished,
        currentStep,
        totalStep,
        nextStep
    ]);
    return /*#__PURE__*/ _jsx(PluginGuideContext.Provider, {
        value: context,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./packages/plugins/Tips/src/components/TipsButton/index.tsx + 3 modules
var TipsButton = __webpack_require__(23087);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/SiteAdaptor/components/TipsRealmContent/index.tsx









const TipsRealmContent_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { buttonSize }, refs)=>({
        postButtonWrapper: {
            display: 'flex',
            alignItems: 'center',
            color: '#8899a6',
            position: 'relative',
            [`& .${refs.postTipsButton}::before`]: {
                content: '""',
                width: 34,
                height: 34,
                position: 'absolute',
                borderRadius: '100%',
                zIndex: 0
            },
            [`&:hover .${refs.postTipsButton}::before`]: {
                backgroundColor: 'rgba(20,155,240,0.1)'
            }
        },
        mirrorEntryTipsButtonWrapper: {
            justifyContent: 'flex-end'
        },
        postTipsButton: {},
        roundButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.palette.maskColor.borderSecondary,
            boxSizing: 'border-box',
            verticalAlign: 'top',
            color: theme.palette.text.primary,
            '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(239,243,244,0.1)' : 'rgba(15,20,25,0.1)'
            }
        },
        followTipsButton: {
            position: 'absolute',
            width: buttonSize,
            height: buttonSize,
            left: 0,
            top: 0,
            borderRadius: '100%'
        },
        profileTipsButton: {
            width: buttonSize,
            height: buttonSize,
            borderRadius: '100%'
        }
    }));
const { TipsSlot } = plugin_infra_src_types.Plugin.SiteAdaptor;
function TipsRealmContent({ identity, slot, accounts, iconSize = 20, buttonSize = 34, onStatusUpdate }) {
    const t = useTipsTrans();
    const { classes, cx } = TipsRealmContent_useStyles({
        buttonSize
    });
    const myIdentity = (0,useLastRecognizedIdentity/* useLastRecognizedIdentity */.F)();
    const userGuide = useTipsUserGuide(myIdentity?.identifier?.network);
    if (!identity || identity.userId === myIdentity?.identifier?.userId) return null;
    const buttonClassMap = {
        [TipsSlot.FollowButton]: cx(classes.followTipsButton, classes.roundButton),
        [TipsSlot.Post]: classes.postTipsButton,
        [TipsSlot.Profile]: cx(classes.profileTipsButton, classes.roundButton),
        [TipsSlot.MirrorMenu]: classes.profileTipsButton,
        [TipsSlot.MirrorEntry]: classes.postTipsButton
    };
    const button = /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsButton/* TipButton */.X, {
        accounts: accounts,
        className: buttonClassMap[slot],
        iconSize: iconSize,
        receiver: identity,
        onStatusUpdate: onStatusUpdate
    });
    if (slot === TipsSlot.MirrorMenu) {
        const { finished, step, nextStep } = userGuide;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginGuide, {
            step: 1,
            totalStep: 1,
            finished: finished,
            currentStep: step,
            onNext: nextStep,
            title: t.tips_guide_description(),
            actionText: t.tips_guide_action(),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                display: "flex",
                width: "38px",
                height: "38px",
                position: "relative",
                top: 0,
                alignItems: "center",
                justifyContent: "center",
                children: button
            })
        });
    }
    if (slot === TipsSlot.Post || slot === TipsSlot.MirrorEntry) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: cx(classes.postButtonWrapper, slot === TipsSlot.MirrorEntry ? classes.mirrorEntryTipsButtonWrapper : undefined),
            children: button
        });
    }
    return button;
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/SiteAdaptor/index.tsx










const SiteAdaptor_site = {
    ...base/* base */.u,
    init (_, context) {
        const storage = context.createKVStorage('memory', storageDefaultValue);
        const guideStorage = context.createKVStorage('persistent', guideStorageDefaultValue);
        setupStorage(storage, guideStorage);
    },
    ApplicationEntries: [
        (()=>{
            const name = base/* base */.u.name;
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Tips, {
                size: 36
            });
            const iconFilterColor = 'rgba(247, 147, 30, 0.3)';
            return {
                category: 'dapp',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    ns: PluginID/* PluginID */.P.Tips,
                    i18nKey: "description",
                    components: {
                        Link: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: "https://next.id/",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            style: {
                                color: vars/* MaskColorVar */.Z.primary
                            }
                        })
                    }
                }),
                ApplicationEntryID: base/* base */.u.ID,
                icon,
                name,
                iconFilterColor,
                nextIdRequired: true,
                entryWalletConnectedNotRequired: true
            };
        })()
    ],
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TipTaskManager, {});
    },
    TipsRealm: {
        ID: `${base/* base */.u.ID}_tips`,
        priority: 1,
        UI: {
            Content (props) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(TipsRealmContent, {
                    ...props
                });
            }
        }
    }
};
/* harmony default export */ const SiteAdaptor = (SiteAdaptor_site);


/***/ }),

/***/ 23087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: () => (/* binding */ TipButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useCurrentVisitingIdentity.ts
var useCurrentVisitingIdentity = __webpack_require__(78178);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var context = __webpack_require__(8898);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/useSocialIdentity.ts
var useSocialIdentity = __webpack_require__(37460);
;// CONCATENATED MODULE: ./packages/plugin-infra/src/site-adaptor/useSocialIdentityByUserId.ts



function useSocialIdentityByUserId(userId) {
    const { value: identity } = (0,useAsync/* default */.Z)(async ()=>{
        if (!userId) return;
        return (0,context/* getUserIdentity */.mO)?.(userId);
    }, [
        userId
    ]);
    return (0,useSocialIdentity/* useSocialIdentity */.m)(identity);
}

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/index.ts
var NextID = __webpack_require__(3765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/base/BaseSharedUIProvider.tsx
var BaseSharedUIProvider = __webpack_require__(14580);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/hooks/useProfilePublicKey.ts




function useProfilePublicKey(userId) {
    const { networkIdentifier } = (0,BaseSharedUIProvider/* useBaseUIRuntime */.uD)();
    const platform = (0,NextID/* resolveNetworkToNextIDPlatform */.Im)(networkIdentifier);
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'next-id',
            'lasted-active',
            platform,
            userId
        ],
        queryFn: async ()=>{
            if (!userId || !platform) return;
            const binding = await entry/* NextIDProof */.q7.queryLatestBindingByPlatform(platform, userId);
            return binding?.persona;
        }
    });
}

// EXTERNAL MODULE: ./packages/plugins/Tips/src/messages.ts
var messages = __webpack_require__(90660);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts + 2 modules
var useSocialAccountsAll = __webpack_require__(91375);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useHiddenAddressConfig.ts
var useHiddenAddressConfig = __webpack_require__(66117);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var dom_context = __webpack_require__(49588);
;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TipsButton/useTipsAccounts.ts





/**
 * Get Tips accounts, removing the hidden ones,
 * and put the default one at the front.
 */ function useTipsAccounts(identity, personaPubkey) {
    const { data: socialAccounts = constants/* EMPTY_LIST */.rP } = (0,useSocialAccountsAll/* useSocialAccountsAll */.C)(identity);
    const userId = identity?.identifier?.userId;
    const { data: hiddenAddresses } = (0,useHiddenAddressConfig/* useHiddenAddressConfigOf */.Nl)(personaPubkey, PluginID/* PluginID */.P.Web3Profile, userId, dom_context/* signWithPersona */.MN);
    return (0,react.useMemo)(()=>{
        if (!hiddenAddresses?.length) return socialAccounts;
        const list = socialAccounts;
        return list.filter((x)=>!hiddenAddresses.some((y)=>(0,isSameAddress/* isSameAddress */.W)(y, x.address)));
    }, [
        hiddenAddresses,
        socialAccounts,
        userId
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Tips/src/components/TipsButton/index.tsx










// This is workaround solution, link issue mf-2536 and pr #7576.
// Should refactor social account to support multi-account for one post.
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        tipButton: {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '-apple-system, system-ui, sans-serif'
        },
        icon: {
            width: props.iconSize,
            height: props.iconSize
        }
    }));
function TipButton(props) {
    const { className, accounts: receivingAccounts = constants/* EMPTY_LIST */.rP, receiver, recipient, children, iconSize = 24, onStatusUpdate, ...rest } = props;
    const { classes, cx } = useStyles({
        iconSize
    });
    const { data: personaPubkey, isLoading: loadingPersona } = useProfilePublicKey(receiver?.userId);
    const receiverUserId = receiver?.userId;
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const visitingIdentity = (0,useCurrentVisitingIdentity/* useCurrentVisitingIdentity */.f)();
    const { data: identity } = useSocialIdentityByUserId(receiverUserId);
    const isVisitingUser = visitingIdentity?.identifier?.userId === receiverUserId;
    const isRuntimeAvailable = (0,react.useMemo)(()=>{
        switch(pluginID){
            case PluginID/* NetworkPluginID */.F.PLUGIN_EVM:
                return true;
            case PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA:
                return isVisitingUser;
        }
        return false;
    }, [
        pluginID,
        isVisitingUser
    ]);
    const accountsByIdentity = useTipsAccounts(identity, personaPubkey);
    const accounts = (0,react.useMemo)(()=>{
        return [
            ...receivingAccounts,
            ...accountsByIdentity
        ].sort((a, z)=>{
            const aHasNextId = a.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.NEXT_ID);
            const zHasNextId = z.supportedAddressTypes?.includes(SocialIdentity/* SocialAddressType */.b.NEXT_ID);
            if (aHasNextId === zHasNextId) return 0;
            return aHasNextId ? -1 : zHasNextId ? 1 : 0;
        }).sort((a, z)=>{
            if (a.pluginID === z.pluginID) return 0;
            return a.pluginID === pluginID ? -1 : 1;
        });
    }, [
        receivingAccounts,
        accountsByIdentity,
        pluginID
    ]);
    const disabled = loadingPersona || accounts.length === 0 || !isRuntimeAvailable;
    (0,react.useEffect)(()=>{
        onStatusUpdate?.(disabled);
    }, [
        disabled
    ]);
    const createTipTask = (0,react.useCallback)(async (evt)=>{
        evt.stopPropagation();
        evt.preventDefault();
        if (disabled) return;
        if (!accounts.length || !receiverUserId) return;
        messages/* PluginTipsMessages */.q.tipTask.sendToLocal({
            recipient,
            recipientUserId: receiverUserId,
            accounts
        });
    }, [
        disabled,
        recipient,
        accounts,
        receiverUserId
    ]);
    (0,react.useEffect)(()=>{
        if (!receiverUserId || !accounts.length) return;
        messages/* PluginTipsMessages */.q.tipTaskUpdate.sendToLocal({
            recipient,
            recipientUserId: receiverUserId,
            accounts
        });
    }, [
        recipient,
        receiverUserId,
        accounts
    ]);
    if (disabled) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(className, classes.tipButton),
        ...rest,
        role: "button",
        onClick: createTipTask,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.TipCoin, {
                className: classes.icon
            }),
            children
        ]
    });
}


/***/ }),

/***/ 90660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ PluginTipsMessages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24835);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9898);


 undefined;
const PluginTipsMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .getPluginMessage */ .db)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PluginID */ .P.Tips);


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nW: () => (/* binding */ useBuildInfoMarkdown)
/* harmony export */ });
/* unused harmony exports BuildInfoProvider, useBuildInfo */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2194);



/** Type of the Error */ /** The Error message */ /** The error stack */ /**
 * Provide the build info for CrashUI
 */ const BuildInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useBuildInfo_raw */ .A);
BuildInfo.displayName = 'BuildInfo';
function BuildInfoProvider(props) {
    return /*#__PURE__*/ _jsx(BuildInfo.Provider, {
        ...props
    });
}
function useBuildInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BuildInfo)).current();
}
function useBuildInfoMarkdown() {
    const env = useBuildInfo();
    const gitInfo = env.COMMIT_HASH ? `
## Git (${env.DIRTY ? '*' : ''}):
${env.COMMIT_HASH} (${env.BRANCH_NAME})` : '';
    const buildInfoMarkdown = `## Build info
- Version: ${env.VERSION || 'unknown'}
- NODE_ENV: ${"production" || 0}
- userAgent: ${navigator.userAgent}
- build: ${env.channel || 'unknown'}
- BUILD_DATE: ${env.BUILD_DATE || 'unknown'}
` + gitInfo;
    return buildInfoMarkdown;
}


/***/ }),

/***/ 27877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ AccountIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45569);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53007);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90138);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72845);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32147);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>{
    return {
        icon: {
            width: 20,
            height: 20
        },
        iconStack: {
            display: 'inline-flex',
            alignItems: 'center'
        },
        stackedIcon: {
            marginRight: -6,
            display: 'inline-flex',
            alignItems: 'center'
        },
        linking: {
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        },
        link: {
            color: theme.palette.maskColor.primary,
            textDecoration: 'none'
        },
        actionIcon: {
            marginLeft: theme.spacing(0.5),
            color: theme.palette.maskColor.main
        },
        roundedIcon: {
            borderRadius: '50%'
        },
        tooltip: {
            maxWidth: 'unset'
        }
    };
});
var AddressPlatform;
(function(AddressPlatform) {
    AddressPlatform["Facebook"] = 'facebook';
    AddressPlatform["Twitter"] = 'twitter';
    AddressPlatform["NextId"] = 'next_id';
})(AddressPlatform || (AddressPlatform = {}));
function AccountTooltips({ platform, type, children }) {
    const { classes } = useStyles();
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootTooltip */ .p, {
        classes: {
            tooltip: classes.tooltip
        },
        disableInteractive: true,
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            fontSize: 14,
            lineHeight: "18px",
            children: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Address === type ? t.account_icon_tooltips_only({
                context: platform
            }) : t.account_icon_tooltips({
                source: type?.replace('_', ' ') ?? '',
                context: platform
            })
        }),
        arrow: true,
        children: children
    });
}
function AccountIcons({ socialAccount, classes: externalClasses }) {
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    const { classes, cx, theme } = useStyles(undefined, {
        props: {
            classes: externalClasses
        }
    });
    const { supportedAddressTypes } = socialAccount;
    if (!supportedAddressTypes?.length) return null;
    const iconStyle = theme.palette.mode === 'light' ? {
        boxShadow: '0px 6px 12px rgba(28, 104, 243, 0.2)',
        backdropFilter: 'blur(8px)'
    } : undefined;
    const fromTwitter = [
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.ENS,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.ARBID,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.TwitterBlue,
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Address
    ].find((x)=>supportedAddressTypes.includes(x));
    const fromNextId = supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.NEXT_ID);
    const normalClasses = cx(classes.actionIcon, classes.icon);
    const roundedClasses = cx(classes.actionIcon, classes.icon, classes.roundedIcon);
    const configs = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)([
        fromNextId ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.NEXT_ID),
            platform: AddressPlatform.NextId,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.NextIDMini, {
                className: normalClasses,
                style: {
                    ...iconStyle,
                    width: 32,
                    height: 18
                }
            })
        } : null,
        fromTwitter ? {
            platform: AddressPlatform.Twitter,
            type: fromTwitter,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.TwitterXRound, {
                className: roundedClasses,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.CyberConnect,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.CyberConnect, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Leaderboard,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Leaderboard, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil) ? {
            link: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .resolveSocialAddressLink */ .Vo)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil),
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Sybil,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Sybil, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Mask) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Mask,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.MaskBlue, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Firefly) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Firefly,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Firefly, {
                className: normalClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.OpenSea) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.OpenSea,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.OpenSea, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.RSS3) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.RSS3,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.RSS3, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.SPACE_ID,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.SpaceId, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null,
        supportedAddressTypes.includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens) ? {
            type: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .SocialAddressType */ .b.Lens,
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__.Lens, {
                className: roundedClasses,
                size: 18,
                style: iconStyle
            })
        } : null
    ]);
    if (configs.length <= 3) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: configs.map(({ platform, type, link, icon }, i)=>{
                const node = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AccountTooltips, {
                    platform: platform,
                    type: type,
                    children: icon
                }, i);
                if (link) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Linking */ .E, {
                    href: link,
                    LinkProps: {
                        className: classes.linking
                    },
                    children: node
                }, i);
                return node;
            })
        });
    }
    const sources = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(configs.flatMap((config, i)=>{
        return config.type && config.link ? [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.link,
                href: config.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: config.type
            }, config.type),
            i === configs.length ? '' : ', '
        ] : null;
    }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootTooltip */ .p, {
        classes: {
            tooltip: classes.tooltip
        },
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            fontSize: 14,
            lineHeight: "18px",
            component: "div",
            children: [
                t.account_icon_merged_tooltip({
                    context: fromTwitter ? AddressPlatform.Twitter : fromNextId ? AddressPlatform.NextId : 'normal'
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: sources
                })
            ]
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: classes.iconStack,
            children: configs.map(({ icon }, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: classes.stackedIcon,
                    children: icon
                }, i);
            })
        })
    });
}


/***/ }),

/***/ 28246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ CollectibleList)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReloadStatus/index.tsx
var ReloadStatus = __webpack_require__(3135);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(35713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/AssetPreviewer/index.tsx
var AssetPreviewer = __webpack_require__(83629);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(78909);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/descriptors.ts + 1 modules
var descriptors = __webpack_require__(3187);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleCard.tsx








const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            width: '100%',
            height: '100%'
        },
        fallbackImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 30,
            height: 30
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            height: '100%'
        },
        linkWrapper: {
            position: 'relative',
            display: 'block'
        },
        networkIcon: {
            position: 'absolute',
            top: 6,
            left: 6
        }
    }));
const CollectibleCard = /*#__PURE__*/ (0,react.memo)(function CollectibleCard({ className, asset, pluginID, disableLink, showNetworkIcon, ...rest }) {
    const { classes, cx } = useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(pluginID);
    const networkIcon = (0,react.useMemo)(()=>{
        // None is better than incorrect.
        if (!pluginID) return;
        if (pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) {
            return descriptors/* NETWORK_DESCRIPTORS */.qQ.find((network)=>network?.chainId === asset.chainId)?.icon;
        }
        return networkDescriptor?.icon;
    }, [
        asset.chainId,
        pluginID,
        networkDescriptor?.icon
    ]);
    const content = /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetPreviewer/* AssetPreviewer */.d, {
                            url: asset.metadata?.mediaURL || asset.metadata?.imageURL,
                            classes: {
                                fallbackImage: classes.fallbackImage
                            }
                        }),
                        networkIcon && showNetworkIcon !== false ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageIcon/* ImageIcon */.X, {
                            icon: networkIcon,
                            size: 24,
                            className: classes.networkIcon
                        }) : null
                    ]
                })
            })
        ]
    });
    if (disableLink) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cx(classes.linkWrapper, className),
        children: content
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        href: asset.link ?? Others.explorerResolver.nonFungibleTokenLink(asset.chainId, asset.address, asset.tokenId),
        className: cx(classes.linkWrapper, className),
        ...rest,
        children: content
    });
});
CollectibleCard.displayName = 'CollectibleCard';

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleItem.tsx






const CollectibleItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 0,
            background: theme.palette.maskColor.bg,
            borderRadius: theme.spacing(1)
        },
        inactive: {
            opacity: 0.5
        },
        selectable: {
            cursor: 'pointer'
        },
        collectibleCard: {
            width: '100%',
            height: '100%',
            aspectRatio: '1/1',
            borderRadius: theme.spacing(1),
            overflow: 'hidden'
        },
        description: {
            alignSelf: 'stretch',
            borderRadius: theme.spacing(0, 0, 1, 1)
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: '36px',
            minHeight: '1em',
            textIndent: '8px'
        },
        select: {
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 6,
            zIndex: 9
        }
    }));
// TODO lazy render in big list.
const CollectibleItem = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)(function CollectibleItem(props, ref) {
    const { provider, asset, pluginID, checked, inactive, selectable, multiple, value, onChange, className, showNetworkIcon, disableLink, ...rest } = props;
    const { classes, cx } = CollectibleItem_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const uiTokenId = Others.formatTokenId(asset.tokenId, 4);
    const SelectableButton = selectable && multiple ? Checkbox/* default */.Z : Radio/* default */.Z;
    const scrollIntoViewRef = (node)=>{
        if (!checked || multiple || !node) return;
        node.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    };
    const forkedRef = (0,useForkRef/* default */.Z)(ref, scrollIntoViewRef);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.card, className, {
            [classes.inactive]: inactive,
            [classes.selectable]: selectable
        }),
        onClick: ()=>{
            if (selectable) {
                onChange?.({
                    checked: !checked,
                    value: value
                });
            }
        },
        ...rest,
        ref: forkedRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
                className: classes.collectibleCard,
                asset: asset,
                provider: provider,
                pluginID: pluginID,
                showNetworkIcon: showNetworkIcon,
                disableLink: disableLink || selectable
            }),
            asset.metadata?.name || uiTokenId ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: asset.metadata?.name || uiTokenId
                })
            }) : null,
            checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectableButton, {
                className: classes.select,
                value: value,
                checked: true
            }) : null
        ]
    });
}));
function CollectibleItemSkeleton(props) {
    const { classes, cx } = CollectibleItem_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...props,
        className: cx(classes.card, props.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.collectibleCard,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "rectangular",
                    height: "100%"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "text",
                        height: "100%"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/LoadingSkeleton.tsx



function LoadingSkeleton({ className }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: className,
        children: (0,range/* default */.Z)(7).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItemSkeleton, {}, i))
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CollectibleList/CollectibleList.tsx










const CollectibleList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { columns = 3, gap = 2 })=>{
    const gapIsNumber = typeof gap === 'number';
    return {
        root: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridGap: gapIsNumber ? theme.spacing(gap) : gap,
            padding: gapIsNumber ? theme.spacing(0, gap, 0) : `0 ${gap} 0`,
            boxSizing: 'border-box'
        },
        collectibleItem: {
            overflowX: 'hidden'
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 260
        },
        list: {
            overflow: 'auto',
            position: 'relative'
        }
    };
});
/**
     * Collectible key, in format of `${contractAddress}_${tokenId}`.
     * You can also customize, but don't forget pass a customized getCollectibleKey as well.
     * */ const getKey = (collectible)=>{
    return `${collectible.address}_${collectible.tokenId}`;
};
const CollectibleList = /*#__PURE__*/ (0,react.memo)(function CollectibleList(props) {
    const { pluginID, collectibles, columns, gap, loading, error, selectable, multiple, disableLink, showNetworkIcon, value, retry, getCollectibleKey = getKey, onChange, className, ...rest } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = CollectibleList_useStyles({
        columns,
        gap
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const availableKeys = (0,react.useMemo)(()=>collectibles.map(getCollectibleKey), [
        collectibles
    ]);
    const handleItemChange = (0,react.useCallback)((event)=>{
        if (multiple) {
            const newValue = availableKeys.filter((x)=>{
                return x === event.value ? event.checked : value?.includes(x);
            });
            onChange?.(newValue);
        } else {
            onChange?.(event.checked ? event.value : null);
        }
    }, [
        multiple,
        availableKeys,
        value
    ]);
    const listRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: cx(classes.list, className),
        ...rest,
        ref: listRef,
        children: loading && collectibles.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSkeleton, {
            className: classes.root
        }) : error || collectibles.length === 0 && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReloadStatus/* ReloadStatus */.S, {
            className: classes.text,
            message: t.no_collectible_found(),
            onRetry: retry
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.root,
            children: collectibles.map((token, index)=>{
                const name = token.metadata?.name;
                const uiTokenId = Others.formatTokenId(token.tokenId, 4) ?? `#${token.tokenId}`;
                const title = `${name || token.collection?.name || token.contract?.name} ${uiTokenId}`;
                const collectibleKey = getCollectibleKey(token);
                const checked = selectable ? value?.includes(collectibleKey) : false;
                const inactive = value ? !!value?.length && !checked : false;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                    title: title,
                    placement: "top",
                    disableInteractive: true,
                    PopperProps: {
                        placement: 'top',
                        popperOptions: {
                            strategy: 'absolute'
                        },
                        modifiers: [
                            {
                                name: 'preventOverflow',
                                options: {
                                    rootBoundary: listRef.current,
                                    boundary: listRef.current
                                }
                            }
                        ]
                    },
                    arrow: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem, {
                        className: classes.collectibleItem,
                        asset: token,
                        provider: specs/* SourceType */.PO.OpenSea,
                        pluginID: pluginID,
                        selectable: selectable,
                        multiple: multiple,
                        disableLink: disableLink,
                        showNetworkIcon: showNetworkIcon,
                        checked: checked,
                        inactive: inactive,
                        value: collectibleKey,
                        onChange: handleItemChange
                    })
                }, index);
            })
        })
    });
});


/***/ }),

/***/ 96310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ElementAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _react_hookz_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47642);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);




const ElementAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ callback, children, ...rest })=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersection = (0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_2__/* .useIntersectionObserver */ .S)(elementRef, {
        rootMargin: '200px'
    });
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(callback);
    callbackRef.current = callback;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!intersection?.isIntersecting) return;
        callbackRef.current(intersection);
    }, [
        intersection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pt: 1,
        ref: elementRef,
        justifyContent: "center",
        alignItems: "center",
        direction: "row",
        ...rest,
        children: children
    });
});
ElementAnchor.displayName = 'ElementAnchor';


/***/ }),

/***/ 85793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EmptyStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        text: {
            color: theme.palette.maskColor.second,
            fontSize: '14px',
            fontWeight: 400,
            marginTop: theme.spacing(1.5)
        }
    }));
const EmptyStatus = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function EmptyStatus({ className, children, iconSize = 32, ...rest }) {
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: cx(classes.statusBox, className),
        p: 2,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.EmptySimple, {
                size: iconSize
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: classes.text,
                component: "div",
                children: children
            })
        ]
    });
});


/***/ }),

/***/ 32147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Linking)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90138);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7387);


function Linking(props) {
    const { href, LinkProps, TypographyProps, children } = props;
    if (href && URL.canParse(href)) {
        const { hostname } = new URL(href);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            color: (theme)=>theme.palette.maskColor.main,
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href,
            ...LinkProps,
            children: children ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: hostname.replace(/^www./i, '')
            })
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: LinkProps?.className,
            title: LinkProps?.title,
            children: children ? children : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: href
            })
        });
    }
}


/***/ }),

/***/ 82124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ RetryHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45262);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6764);
/* harmony import */ var _locales_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);




const RetryHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ retry, hint = true, ButtonProps })=>{
    const t = (0,_locales_index_js__WEBPACK_IMPORTED_MODULE_2__/* .useSharedTrans */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        height: hint ? '100%' : '100px',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            gap: 2.75,
            children: [
                hint ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    children: t.load_failed()
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    ...ButtonProps,
                    size: "small",
                    style: {
                        borderRadius: 16
                    },
                    onClick: ()=>retry?.(),
                    children: t.load_retry()
                })
            ]
        })
    });
});
RetryHint.displayName = 'RetryHint';


/***/ }),

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6379);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81128);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7387);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27966);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74765);






// declare explicitly to avoid ts warning
const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address, pluginID, size = 4, ...rest })=>{
    const { data: domain } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$)(pluginID, address);
    const Others = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Others */ .v)(pluginID);
    const showDomain = !!domain && Others.isValidDomain(domain);
    const uiLabel = showDomain ? Others.formatDomainName(domain) : Others.formatAddress(address, size) ?? address;
    const hasEllipsis = showDomain ? uiLabel !== domain : !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .W)(uiLabel, address);
    const node = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        fontWeight: 700,
        ...rest,
        children: uiLabel
    });
    const popperProps = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .useBoundedPopperProps */ .g)();
    return hasEllipsis ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .ShadowRootTooltip */ .p, {
        title: showDomain ? domain : address,
        PopperProps: {
            ...popperProps,
            style: {
                whiteSpace: 'break-spaces'
            }
        },
        children: node
    }) : node;
});
ReversedAddress.displayName = 'ReversedAddress';


/***/ }),

/***/ 64149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Boundary),
/* harmony export */   b: () => (/* binding */ useBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);


const BoundaryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    boundaryRef: {
        current: null
    }
});
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
const Boundary = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children })=>{
    const boundaryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            boundaryRef
        }), [
        boundaryRef.current
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BoundaryContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
            ...children.props,
            ref: boundaryRef
        })
    });
});
Boundary.displayName = 'Boundary';
function useBoundary() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(BoundaryContext);
}


/***/ }),

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ useDialogStacking),
/* harmony export */   tE: () => (/* binding */ useDialogStackActor),
/* harmony export */   yu: () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89601);



const DialogStackingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    stack: [],
    push: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pop: lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    setParent: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    hasGlobalBackdrop: false
});
DialogStackingContext.displayName = 'DialogStackingContext';
const DialogHierarchyContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
DialogHierarchyContext.displayName = 'DialogHierarchyContext';
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps, TrackDialogHierarchy } = useDialogStackConsumer(open)
 *     return <TrackDialogHierarchy>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </TrackDialogHierarchy>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)('' + Math.random()).current;
    const { pop, push, stack, setParent, hasGlobalBackdrop } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
    // children's useEffect will run before parent's useEffect.
    // when the hierarchy is A > B and they are both open,
    // the stack will be ["B", "A"] (B pushed into the stack first.)
    // we need to notify the context the react component tree hierarchy to order them correctly.
    const parentID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogHierarchyContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>setParent(selfID, parentID), [
        parentID
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        open ? push(selfID) : pop(selfID);
        return ()=>pop(selfID);
    }, [
        open
    ]);
    const TrackDialogHierarchy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null).current ??= function TrackDialogHierarchy({ children }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogHierarchyContext.Provider, {
            value: selfID,
            children: children
        });
    };
    const returnVal = {
        shouldReplaceExitWithBack: stack.length > 1,
        extraProps: {
            open
        },
        TrackDialogHierarchy
    };
    if (hasGlobalBackdrop) returnVal.extraProps.hideBackdrop = true;
    if (stack.length > 1) returnVal.extraProps.transitionDuration = 0;
    if (!open) return returnVal;
    if (stack.at(-1) !== selfID) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            hidden: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 *    <Dialog3></Dialog3>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    const [stack, setStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [hierarchy, setHierarchy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const sortedStack = sortStackByHierarchy(hierarchy, stack);
        return {
            hasGlobalBackdrop: props.hasGlobalBackdrop || false,
            stack: sortedStack,
            // Note: the following methods MUST NOT use stack or hierarchy out of the useState callback.
            setParent (child, parent) {
                if (!parent) return lodash_es__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
                setHierarchy((hierarchy)=>{
                    if (hierarchy[parent]?.has(child)) return hierarchy;
                    const newSet = new Set(hierarchy[parent] || []);
                    newSet.add(child);
                    return {
                        ...hierarchy,
                        [parent]: newSet
                    };
                });
                return ()=>{
                    setHierarchy((hierarchy)=>{
                        const newSet = new Set(hierarchy[parent]);
                        newSet.delete(child);
                        return {
                            ...hierarchy,
                            [parent]: newSet
                        };
                    });
                };
            },
            pop (id) {
                setStack((stack)=>stack.includes(id) ? stack.filter((x)=>x !== id) : stack);
            },
            push (id) {
                setStack((stack)=>stack.includes(id) ? stack : stack.concat(id));
            }
        };
    }, [
        stack,
        hierarchy,
        props.hasGlobalBackdrop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogStackingContext.Provider, {
        value: context,
        children: props.children
    });
}
function useDialogStacking() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DialogStackingContext);
}
function sortStackByHierarchy(hierarchy, stack) {
    if (stack.length <= 1) return stack;
    const last = stack.at(-1);
    const children = hierarchy[last];
    if (!children?.size) return stack;
    for (const child of children){
        if (stack.includes(child)) return sortStackByHierarchy(hierarchy, [
            last
        ].concat(stack.slice(0, -1)));
    }
    return stack;
}


/***/ }),

/***/ 27966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ShadowRootTooltip)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70429);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootTooltip = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootTooltip.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ad: () => (/* binding */ usePortalShadowRoot),
/* harmony export */   lr: () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   vg: () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57604);
/* eslint-disable react-hooks/rules-of-hooks */ 




/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer, debugKey) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on DisableShadowRootContext during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .PreventShadowRootEventPropagationListContext */ .N);
    const container = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = _ShadowRootSetup_js__WEBPACK_IMPORTED_MODULE_4__/* .ref */ .iH.portalContainer;
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = debugKey || '';
        const shadow = root.attachShadow(_masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit);
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, _Contexts_js__WEBPACK_IMPORTED_MODULE_3__/* .stopPropagation */ .UW, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheet.addContainer(shadow);
        // This is important to make the portal orders correct.
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return container;
    });
    return renderer(container);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            }));
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 57604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LZ: () => (/* binding */ shadowEnvironmentMountingRoots),
/* harmony export */   eG: () => (/* binding */ setupReactShadowRootEnvironment),
/* harmony export */   iH: () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8482);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35440);
if (3161 == __webpack_require__.j) {
	/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
}





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

/***/ 86999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useBoundedPopperProps)
/* harmony export */ });
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64149);

function useBoundedPopperProps() {
    const { boundaryRef } = (0,_Components_index_js__WEBPACK_IMPORTED_MODULE_0__/* .useBoundary */ .b)();
    const tooltipPopperProps = {
        disablePortal: !!boundaryRef.current,
        placement: 'top',
        modifiers: [
            {
                name: 'flip',
                options: {
                    rootBoundary: boundaryRef.current,
                    boundary: boundaryRef.current
                }
            }
        ]
    };
    return tooltipPopperProps;
}


/***/ }),

/***/ 29063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useAddressType)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useAddressType(pluginID, address, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getAddressType(address, options);
    }, [
        address,
        Web3,
        options?.chainId
    ]);
}


/***/ }),

/***/ 47830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useBlockedNonFungibleTokens)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);




function useBlockedNonFungibleTokens(pluginID, schemaType) {
    const { Token } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const nfts = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Token?.blockedNonFungibleTokens ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return nfts.length && schemaType ? nfts.filter((x)=>x.schema === schemaType) : nfts;
    }, [
        schemaType,
        nfts
    ]);
}


/***/ }),

/***/ 66117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KS: () => (/* binding */ useUnlistedAddressConfig),
/* harmony export */   Nl: () => (/* binding */ useHiddenAddressConfigOf)
/* harmony export */ });
/* unused harmony exports useHiddenAddressConfig, hiddenAddressesAdapter, getHiddenAddressesOf */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95766);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);




/**
 *
 * Get unlisted address by persona pubkey.
 *
 * @param personaPubkey The persona identifier in hex string
 * @param pluginID The plugin id as store key
 * @returns
 */ function useHiddenAddressConfig(personaPubkey, pluginID, signWithPersona) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'hidden-address',
            pluginID,
            personaPubkey
        ],
        enabled: !!personaPubkey,
        queryFn: async ()=>{
            if (!pluginID || !personaPubkey) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            const storage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3Storage */ .xk.createNextIDStorage(personaPubkey, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NextIDPlatform */ .V.NextID, personaPubkey, signWithPersona);
            const result = await storage.get(pluginID);
            if (!result) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            // When the tips data is legacy
            if (Array.isArray(result)) return result;
            if (!result.hiddenAddresses) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
            if (Array.isArray(result.hiddenAddresses)) return result.hiddenAddresses;
            return result.hiddenAddresses ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
        }
    });
}
function useHiddenAddressConfigOf(personaPubkey, pluginID, socialId, signWithPersona) {
    const result = useHiddenAddressConfig(personaPubkey, pluginID, signWithPersona);
    return {
        ...result,
        // Identities of Twitter proof get lowered case.
        data: result.data ? getHiddenAddressesOf(result.data, socialId?.toLowerCase()) : undefined
    };
}
/** To update storage, a signer is required */ /** For data migration */ /**
 * Provider address config and data updater
 */ function useUnlistedAddressConfig({ identifier, pluginID, socialIds }, signWithPersona) {
    const query = useHiddenAddressConfig(identifier?.publicKeyAsHex, pluginID, signWithPersona);
    const { data: unlistedAddressConfig } = query;
    const migratedUnlistedAddressConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!unlistedAddressConfig || !socialIds?.length) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_OBJECT */ .Nu;
        if (!Array.isArray(unlistedAddressConfig)) return unlistedAddressConfig;
        return hiddenAddressesAdapter(unlistedAddressConfig, socialIds);
    }, [
        unlistedAddressConfig,
        socialIds
    ]);
    const updateConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (config)=>{
        if (!identifier) return;
        const storage = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Web3Storage */ .xk.createNextIDStorage(identifier.publicKeyAsHex, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NextIDPlatform */ .V.NextID, identifier, signWithPersona);
        await storage.set(pluginID, {
            hiddenAddresses: config
        });
    }, [
        pluginID,
        identifier
    ]);
    return [
        {
            ...query,
            data: migratedUnlistedAddressConfig
        },
        updateConfig
    ];
}
function hiddenAddressesAdapter(list, accounts) {
    return Object.fromEntries(accounts.map((account)=>[
            account,
            list
        ]));
}
function getHiddenAddressesOf(config, socialId) {
    if (!config) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
    if (Array.isArray(config)) return config;
    return socialId ? config[socialId] ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_LIST */ .rP;
}


/***/ }),

/***/ 55149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useNonFungibleAssets)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52033);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86886);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _useBlockedNonFungibleTokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47830);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useNetworkDescriptors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3350);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61811);







/**
 * Blocked tokens would be filtered out
 */ function useNonFungibleAssets(pluginID, schemaType, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    const networks = (0,_useNetworkDescriptors_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptors */ .p)(pluginID);
    const availableChainIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return networks.filter((x)=>x.isMainnet && (options?.chainId ? x.chainId === options.chainId : true)).map((x)=>x.chainId);
    }, [
        networks,
        options?.chainId
    ]);
    const blockedTokens = (0,_useBlockedNonFungibleTokens_js__WEBPACK_IMPORTED_MODULE_4__/* .useBlockedNonFungibleTokens */ .E)();
    const blockedTokenIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return blockedTokens.filter((x)=>availableChainIds.includes(x.chainId)).map((x)=>x.id);
    }, [
        blockedTokens,
        availableChainIds
    ]);
    const { data, isLoading, fetchNextPage, hasNextPage, refetch, error, dataUpdatedAt } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__/* .useInfiniteQuery */ .N)({
        queryKey: [
            'non-fungible-assets',
            account,
            availableChainIds,
            blockedTokenIds
        ],
        queryFn: async ({ pageParam })=>{
            const chainId = pageParam?.chainId || availableChainIds[0];
            const res = await Hub.getNonFungibleAssets(account, {
                indicator: pageParam?.indicator,
                size: 20,
                chainId
            });
            const data = blockedTokenIds.length ? res.data.filter((x)=>{
                const id = `${x.chainId}.${x.address}.${x.tokenId}`.toLowerCase();
                return !blockedTokenIds.includes(id);
            }) : res.data;
            return {
                ...res,
                data,
                chainId
            };
        },
        getNextPageParam: (lastPage)=>{
            const { nextIndicator, chainId } = lastPage;
            const nextChainId = nextIndicator ? chainId : availableChainIds[availableChainIds.indexOf(chainId) + 1];
            if (!nextChainId) return;
            return {
                indicator: nextIndicator,
                chainId: nextChainId
            };
        }
    });
    const list = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>data?.pages.flatMap((x)=>x.data) || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY_LIST */ .rP, [
        data?.pages
    ]);
    const nextPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>fetchNextPage(), [
        fetchNextPage
    ]);
    // TODO rename these fields in style of react-query
    return {
        value: list,
        next: nextPage,
        loading: isLoading,
        done: !hasNextPage,
        retry: refetch,
        error,
        dataUpdatedAt
    };
}


/***/ }),

/***/ 34425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNonFungibleTokenContract)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77219);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96732);


function useNonFungibleTokenContract(pluginID, address, schemaType, options) {
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .T)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return Web3.getNonFungibleTokenContract?.(address, schemaType);
    }, [
        address,
        schemaType,
        Web3
    ]);
}


/***/ }),

/***/ 91375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ useSocialAccountsAll)
});

// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAddressesAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAddressesAll(identity, includes, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService } = (0,useWeb3State/* useWeb3State */.d)(PluginID/* NetworkPluginID */.F.PLUGIN_SOLANA);
    const userId = identity?.identifier?.userId;
    return (0,useQuery/* useQuery */.a)({
        enabled: !!identity && userId !== '$unknown',
        queryKey: [
            'all-social-addresses',
            userId,
            identity,
            includes
        ],
        queryFn: async ()=>{
            const allSettled = await Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []));
            const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []);
            const sorted = sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
            return includes?.length ? sorted.filter((x)=>includes.includes(x.type)) : sorted;
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsFrom.ts


/**
 * Merge many social addresses into a social account.
 */ function useSocialAccountsFrom(socialAddresses) {
    const { IdentityService } = (0,useWeb3State/* useWeb3State */.d)();
    return (0,react.useMemo)(()=>{
        return IdentityService?.__mergeSocialAddressesAll__(socialAddresses);
    }, [
        socialAddresses,
        IdentityService
    ]);
}

;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useSocialAccountsAll.ts



/**
 * Get all social addresses across all networks.
 */ function useSocialAccountsAll(identity, includes, sorter) {
    const { data: socialAddressList = constants/* EMPTY_LIST */.rP, ...rest } = useSocialAddressesAll(identity, includes, sorter);
    const socialAccounts = useSocialAccountsFrom(socialAddressList) ?? constants/* EMPTY_LIST */.rP;
    return {
        ...rest,
        data: socialAccounts
    };
}


/***/ }),

/***/ 80361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58750);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49603);





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .xB, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

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

/***/ 86886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ useInfiniteQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87193);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useInfiniteQuery(arg1, arg2, arg3) {
  const options = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(options, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .InfiniteQueryObserver */ .c);
}


//# sourceMappingURL=useInfiniteQuery.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.9548.js.map