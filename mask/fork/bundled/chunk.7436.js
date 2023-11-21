"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[7436],{

/***/ 62476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 69529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/plugin-infra/src/types.ts
var types = __webpack_require__(62476);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(26997);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFireflyLensAccounts.ts
var useFireflyLensAccounts = __webpack_require__(98658);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./packages/plugins/Web3Profile/src/base.ts + 8 modules
var base = __webpack_require__(60787);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var src_types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(11017);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__(85094);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(89762);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootPopper.ts
var ShadowRootPopper = __webpack_require__(50502);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Fade/Fade.js
var Fade = __webpack_require__(49803);
// EXTERNAL MODULE: ./node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(93441);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/emitter.ts

/** For lazy load lens accounts from NextID */ const emitter = new dist/* Emitter */.Q5();
function openPopup(options) {
    emitter.emit('open', options);
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/Lens/useControlLensPopup.ts


const LEAVE_DURATION = 500;
function useControlLensPopup(holderRef) {
    const hoverRef = (0,react.useRef)(false);
    const closeTimerRef = (0,react.useRef)();
    const [active, setActive] = (0,react.useState)(false);
    const hidePopup = (0,react.useCallback)(()=>{
        if (hoverRef.current) return;
        setActive(false);
    }, []);
    const showProfileCard = (0,react.useCallback)(()=>{
        clearTimeout(closeTimerRef.current);
        setActive(true);
    }, []);
    (0,react.useEffect)(()=>{
        const holder = holderRef.current;
        if (!holder) {
            hidePopup();
            return;
        }
        const enter = ()=>{
            hoverRef.current = true;
            clearTimeout(closeTimerRef.current);
        };
        const leave = ()=>{
            hoverRef.current = false;
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = setTimeout(hidePopup, LEAVE_DURATION);
        };
        holder.addEventListener('mouseenter', enter);
        holder.addEventListener('mouseleave', leave);
        return ()=>{
            holder.removeEventListener('mouseenter', enter);
            holder.removeEventListener('mouseleave', leave);
        };
    }, [
        holderRef.current
    ]);
    (0,react.useEffect)(()=>{
        const unsubscribe = emitter.on('open', showProfileCard);
        return ()=>void unsubscribe();
    }, [
        hidePopup,
        showProfileCard
    ]);
    (0,react.useEffect)(()=>{
        const onClick = (event)=>{
            // `NODE.contains(other)` doesn't work for cross multiple layer of Shadow DOM
            if (event.composedPath()?.includes(holderRef.current)) return;
            hoverRef.current = false;
            hidePopup();
        };
        document.body.addEventListener('click', onClick, true);
        return ()=>{
            document.body.removeEventListener('click', onClick, true);
        };
    }, [
        hidePopup
    ]);
    return active;
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/List/List.js
var List = __webpack_require__(10292);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/locales/i18n_generated.ts
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
function useWeb3ProfileTrans() /**
      * `Choose and showcase your Web3 footprints on Twitter.`
      */ /**
      * `persona_public_key_copy`
      */ /**
      * `Current`
      */ /**
      * `plugin_wallet_view_on_explorer`
      */ /**
      * `Wallets`
      */ /**
      * `Donations`
      */ /**
      * `Footprints`
      */ /**
      * `NFTs`
      */ /**
      * `Web3 Profile`
      */ /**
      * `EVM Wallet`
      */ /**
      * `Edit your profile in lenster`
      */ /**
      * `{{- profile}} is owned by the current connected wallet. Please go to lenster.xyz to edit profile.`
      */ /**
      * `Solana Wallet`
      */ /**
      * `Flow Wallet`
      */ /**
      * `Network error, try again`
      */ /**
      * `View`
      */ /**
      * `Follow`
      */ /**
      * `Following`
      */ /**
      * `Follow Lens handle`
      */ /**
      * `Unfollow lens handle`
      */ /**
      * `Follow for {{value}} {{symbol}}`
      */ /**
      * `Unfollow`
      */ /**
      * `Only holding lens handle can follow.`
      */ /**
      * `No enough balance to complete follow process.`
      */ /**
      * `This user has banned follow function.`
      */ /**
      * `Current wallet does not support to interact with Lens protocol.`
      */ /**
      * `Need to pay gas fee to follow this account.`
      */ /**
      * `Lens Follow`
      */ /**
      * `Lens Unfollow`
      */ /**
      * `Previous follow transaction is in processing, please wait and try again.`
      */ /**
      * `Previous unfollow transaction is in processing, please wait and try again.`
      */ /**
      * `Unlock {{value}} {{symbol}} and follow`
      */ /**
      * `Switch to Polygon and Follow`
      */ /**
      * `Disconnect`
      */ /**
      * `Change`
      */ /**
      * `Connect Wallet`
      */ /**
      * `The wallet has already been bound to {{currentPersona}}. Please switch to another wallet.`
      */ /**
      * `Please connect a wallet.`
      */ /**
      * `{{personaName}} Sign`
      */ /**
      * `Sign seamlessly with Persona, ensure the validity of data.`
      */ /**
      * `Persona Sign`
      */ /**
      * `After two steps, you will own, view, utilize all your cyber identities through Next.ID. You can also disconnect them easily.`
      */ /**
      * `Done`
      */ /**
      * `Confirm`
      */ /**
      * `Cancel`
      */ /**
      * `Save`
      */ /**
      * `Copied`
      */ /**
      * `Listed`
      */ /**
      * `Lens`
      */ /**
      * `Lenster`
      */ /**
      * `Unlisted`
      */ /**
      * `Add Wallet`
      */ /**
      * `No connected wallet. Please add wallet.`
      */ /**
      * `You’ve switched off all wallets. Please go to settings to active.`
      */ /**
      * `Persona signed successfully.`
      */ /**
      * `Wallet connection failed.`
      */ /**
      * `The tips feature currently supports only EVM chains. Support for other chains will be added in the future.`
      */ /**
      * `The wallet is connected.`
      */ /**
      * `Persona Signature failed.`
      */ /**
      * `Wallet`
      */ /**
      * `Please input contract address`
      */ /**
      * `Please input token ID`
      */ /**
      * `web3 error`
      */ /**
      * `Cannot found asset.`
      */ /**
      * `Chain does not match.`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you`
      */ /**
      * `Checking`
      */ /**
      * `Add`
      */ /**
      * `Input Contract Address`
      */ /**
      * `Token ID`
      */ /**
      * `Add Collectible`
      */ /**
      * `Add collectible`
      */ /**
      * `Add Collectible`
      */ /**
      * `No {{collection}} found.`
      */ /**
      * `All {{collection}} unlisted.`
      */ /**
      * `Click items in listed area to hidden your {{collection}} on Web3 Profile.`
      */ /**
      * `Click items in Unlisted area to show your {{collection}} on Web3 Profile.`
      */ /**
      * `Toggle the button to manage wallet display settings.`
      */ /**
      * `That hasn't been authenticated yet.`
      */ /**
      * `No Items found.`
      */ /**
      * `No verified account found here.`
      */ /**
      * `Please verify this persona to set your Web3 profile.`
      */ /**
      * `Load More`
      */ /**
      * `Set up wallet for displaying Web3 footprints and receiving tips on each social media account.`
      */ /**
      * `Save successfully`
      */ /**
      * `Set up Web3 Profile wallets successfully.`
      */ /**
      * `Save failed`
      */ /**
      * `Failed to set up Web3 Profile wallets. Please try again.`
      */ /**
      * - no_collection$empty: `No {{collection}} found.`
    
      * - no_collection$hidden: `All {{collection}} unlisted.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("io.mask.web3-profile");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "io.mask.web3-profile",
            shouldUnescape: true,
            ...props
        });
}
const Web3ProfileTrans = /**
      * `<strong>{{followers}}</strong> Followers`
      */ /**
      * `<strong>{{following}}</strong> Following`
      */ /*#__PURE__*/ createProxy(createComponent);

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/LensList.tsx












const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    const isDark = theme.palette.mode === 'dark';
    return {
        list: {
            backgroundColor: isDark ? '#030303' : theme.palette.common.white,
            maxWidth: 320,
            // Show up to 6 item
            maxHeight: 244,
            overflow: 'auto',
            minWidth: 240,
            padding: theme.spacing(1.5),
            boxSizing: 'border-box',
            borderRadius: 16,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listItem: {
            cursor: 'default',
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5),
            height: 40,
            marginBottom: 6,
            borderRadius: 4,
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            },
            '&:last-of-type': {
                marginBottom: 0
            }
        },
        avatar: {
            borderRadius: '50%'
        },
        name: {
            color: theme.palette.maskColor.main,
            fontWeight: 400,
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(2),
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            flexGrow: 1
        },
        followButton: {
            marginLeft: 'auto',
            height: 32,
            minWidth: 64,
            padding: theme.spacing(1, 1.5),
            backgroundColor: '#ABFE2C',
            color: theme.palette.common.black,
            borderRadius: 99,
            fontSize: '12px',
            '&:hover': {
                backgroundColor: '#ABFE2C',
                color: theme.palette.common.black
            }
        }
    };
});
const LensList = /*#__PURE__*/ (0,react.memo)(({ className, accounts, ...rest })=>{
    const { classes, cx } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: cx(classes.list, className),
        ...rest,
        children: accounts.map((account, key)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(LensListItem, {
                account: account
            }, key);
        })
    });
});
LensList.displayName = 'LensList';
const LensListItem = /*#__PURE__*/ (0,react.memo)(({ account })=>{
    const { classes } = useStyles();
    const { account: wallet } = (0,useContext/* useChainContext */.ql)();
    const t = useWeb3ProfileTrans();
    const profileUri = account.profileUri.filter(Boolean);
    const lensIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Lens, {
        size: 20
    });
    const { loading, value } = (0,useAsync/* default */.Z)(async ()=>{
        const profile = await entry/* Lens */.Ri.getProfileByHandle(account.handle);
        const isFollowing = await entry/* Lens */.Ri.queryFollowStatus(wallet, profile.id);
        return {
            ownedBy: profile.ownedBy,
            isFollowing
        };
    }, [
        account,
        wallet
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.listItem,
        children: [
            profileUri.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                size: 20,
                src: profileUri[0],
                className: classes.avatar,
                fallback: lensIcon
            }) : lensIcon,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.name,
                children: account.name || account.handle
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                variant: "text",
                loading: loading,
                className: classes.followButton,
                disableElevation: true,
                onClick: ()=>{
                    CrossIsolationEvents/* CrossIsolationMessages */.W.events.followLensDialogEvent.sendToLocal({
                        open: true,
                        handle: account.handle
                    });
                },
                children: (0,isSameAddress/* isSameAddress */.W)(wallet, value?.ownedBy) ? t.view() : value?.isFollowing ? t.following_action() : t.follow()
            })
        ]
    }, account.handle);
});
LensListItem.displayName = 'LensListItem';

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/LensPopup.tsx









const LensPopup_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        popup: {
            position: 'absolute',
            zIndex: 99,
            borderRadius: 16,
            boxShadow: theme.palette.mode === 'light' ? '0px 4px 30px rgba(0, 0, 0, 0.1)' : '0px 4px 30px rgba(255, 255, 255, 0.15)'
        }
    }));
const NextIdLensToFireflyLens = (account)=>{
    return {
        address: account.address,
        name: account.displayName,
        handle: account.handle,
        bio: '',
        url: '',
        profileUri: []
    };
};
const LensPopup = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes } = LensPopup_useStyles();
    const holderRef = (0,react.useRef)(null);
    const [lens, setLens] = (0,react.useState)([]);
    const active = useControlLensPopup(holderRef);
    const [anchorEl, setAnchorEl] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        const unsubscribe = emitter.on('open', async ({ lensAccounts, userId, popupAnchorEl })=>{
            setLens((oldAccounts)=>{
                return (0,isEqual/* default */.Z)(oldAccounts, lensAccounts) ? oldAccounts : lensAccounts;
            });
            setAnchorEl(popupAnchorEl);
            if (lens[0]?.handle) return;
            const accounts = await entry/* NextIDProof */.q7.queryAllLens(lens[0].handle);
            if (!accounts.length) return;
            setLens((oldAccounts)=>{
                if (accounts.length <= oldAccounts.length) return oldAccounts;
                const merged = (0,uniqBy/* default */.Z)([
                    ...oldAccounts,
                    ...accounts.map(NextIdLensToFireflyLens)
                ], (x)=>x.handle);
                return (0,sortBy/* default */.Z)(merged, [
                    (x)=>-accounts.findIndex((y)=>x.handle === y.handle)
                ]);
            });
        });
        return ()=>void unsubscribe();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
        in: active,
        easing: "linear",
        timeout: 250,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootPopper/* ShadowRootPopper */.s, {
            open: !!anchorEl,
            anchorEl: anchorEl,
            keepMounted: true,
            className: classes.popup,
            ref: holderRef,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LensList, {
                accounts: lens
            })
        })
    });
});
LensPopup.displayName = 'LensPopup';

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19628);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ChainBoundary/index.tsx + 1 modules
var ChainBoundary = __webpack_require__(38655);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx + 1 modules
var WalletConnectedBoundary = __webpack_require__(24981);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/index.tsx + 2 modules
var Snackbar = __webpack_require__(8330);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
;// CONCATENATED MODULE: ./packages/web3-providers/src/types/Lens.ts
var FollowModuleType;
(function(FollowModuleType) {
    FollowModuleType["FeeFollowModule"] = "FeeFollowModule";
    FollowModuleType["ProfileFollowModule"] = "ProfileFollowModule";
    FollowModuleType["RevertFollowModule"] = "RevertFollowModule";
})(FollowModuleType || (FollowModuleType = {}));
var ProxyActionType;
(function(ProxyActionType) {
    ProxyActionType["ProxyActionError"] = "ProxyActionError";
    ProxyActionType["ProxyActionQueued"] = "ProxyActionQueued";
    ProxyActionType["ProxyActionStatusResult"] = "ProxyActionStatusResult";
})(ProxyActionType || (ProxyActionType = {}));
var BroadcastType;
(function(BroadcastType) {
    BroadcastType["RelayerResult"] = "RelayerResult";
    BroadcastType["RelayError"] = "RelayError";
})(BroadcastType || (BroadcastType = {}));

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/token.ts
var helpers_token = __webpack_require__(48289);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/buttonClasses.js
var buttonClasses = __webpack_require__(80843);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/urlcat@3.1.0_patch_hash=5r5xyq4zgcnqugwsrx4lxq2i4e/node_modules/urlcat/dist/index.mjs
var urlcat_dist = __webpack_require__(78757);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/utils.ts

function getLensterLink(handle) {
    return (0,urlcat_dist/* default */.ZP)('https://lenster.xyz/u/:handle', {
        handle
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(27186);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useContract.ts
var useContract = __webpack_require__(95685);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/constants/constants.ts
var constants_constants = __webpack_require__(33026);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-utils@1.10.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/.pnpm/web3-eth-abi@1.10.2/node_modules/web3-eth-abi/lib/index.js
var web3_eth_abi_lib = __webpack_require__(65797);
;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/encodeTypedData.ts


// Helper function to find types for a given type name
const findTypes = (types, primaryType)=>{
    let result = [];
    for (const type of types[primaryType]){
        result.push(`${type.type} ${type.name}`);
        if (types[type.type]) {
            result = result.concat(findTypes(types, type.type));
        }
    }
    return result;
};
// Recursively find all the dependencies of a type
const dependencies = (types, primaryType, found = [])=>{
    if (found.includes(primaryType)) {
        return found;
    }
    found.push(primaryType);
    for (const field of types[primaryType]){
        for (const dep of dependencies(types, field.type, found)){
            if (!found.includes(dep)) {
                found.push(dep);
            }
        }
    }
    return found;
};
// Encode the type data for hashing
const encodeType = (types, primaryType)=>{
    const depSet = dependencies(types, primaryType);
    depSet.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    return depSet.map((type)=>`${type}(${types[type]?.map(({ name, type })=>`${type} ${name}`).join(',')})`).join('');
};
// Generate the EIP-712 hash
const typeHash = (types, primaryType)=>{
    return (0,lib.sha3)(encodeType(types, primaryType));
};
function encodeTypedData(domain, types, message) {
    const coder = new web3_eth_abi_lib.AbiCoder();
    const domainSeparator = (0,lib.sha3)(coder.encodeParameters(Object.keys(domain).map(()=>'string'), Object.values(domain)));
    const messageHash = (0,lib.sha3)(coder.encodeParameters(findTypes(types, 'Message'), Object.values(message)));
    const payload = (0,lib.soliditySha3)('0x1901', domainSeparator, (0,lib.sha3)(coder.encodeParameters([
        'bytes32',
        'bytes32'
    ], [
        typeHash(types, 'Message'),
        messageHash
    ])));
    return payload;
}

;// CONCATENATED MODULE: ./packages/web3-shared/evm/src/helpers/splitSignature.ts

function splitSignature(signature) {
    if (signature.length !== 132 && !signature.startsWith('0x')) {
        throw new Error('Invalid signature length');
    }
    // Extracting r, s, v from the signature
    const r = signature.slice(0, 66);
    const s = '0x' + signature.slice(66, 130);
    const v = (0,lib.toDecimal)('0x' + signature.slice(130, 132));
    return {
        r,
        s,
        v
    };
}

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/libs/ContractTransaction.ts
var ContractTransaction = __webpack_require__(21704);
// EXTERNAL MODULE: ./packages/web3-contracts/abis/LensHub.json
var LensHub = __webpack_require__(30133);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isBefore/index.js
var isBefore = __webpack_require__(12367);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/add/index.js
var add = __webpack_require__(28557);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/context.ts
let lensTokenStorage;
async function setupStorage(x) {
    const result = x.createKVStorage('persistent', {}).createSubScope('LensToken', {});
    await Promise.all([
        result.storage.accessToken?.initializedPromise,
        result.storage.refreshToken?.initializedPromise
    ]);
    lensTokenStorage = result.storage;
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/Lens/useQueryAuthenticate.ts






function useQueryAuthenticate(address) {
    const { chainId } = (0,useContext/* useChainContext */.ql)();
    return (0,react.useCallback)(async ()=>{
        if (!address || chainId !== src_types/* ChainId */.a_.Matic || !(0,helpers_address/* isValidAddress */.At)(address)) return;
        const accessToken = lensTokenStorage.accessToken?.value?.[address];
        const refreshToken = lensTokenStorage.refreshToken?.value?.[address];
        if (accessToken && (0,isBefore/* default */.Z)(new Date(), accessToken.expireDate)) {
            return accessToken.token;
        } else if (refreshToken && (0,isBefore/* default */.Z)(new Date(), refreshToken.expireDate)) {
            const authenticate = await entry/* Lens */.Ri.refresh(refreshToken.token);
            if (!authenticate) return;
            // Only reset accessToken
            await lensTokenStorage.accessToken?.setValue({
                [address]: {
                    token: authenticate.accessToken,
                    expireDate: (0,add/* default */.Z)(new Date(), {
                        minutes: 30
                    })
                }
            });
            return authenticate.accessToken;
        }
        const challenge = await entry/* Lens */.Ri.queryChallenge(address);
        if (!challenge) return;
        const signature = await entry/* Web3 */.Bv.signMessage('message', challenge);
        const authenticate = await entry/* Lens */.Ri.authenticate(address, signature);
        if (!authenticate) return;
        /**
         * accessToken - This lasts 30 minutes before needed to be refreshed
         * refreshToken - This lasts 7 days to allow you to keep them logged in and generate a new accessToken when they come back without them having to sign a challenge again.
         */ await lensTokenStorage.accessToken?.setValue({
            [address]: {
                token: authenticate.accessToken,
                expireDate: (0,add/* default */.Z)(new Date(), {
                    minutes: 30
                })
            }
        });
        await lensTokenStorage.refreshToken?.setValue({
            [address]: {
                token: authenticate.refreshToken,
                expireDate: (0,add/* default */.Z)(new Date(), {
                    days: 7
                })
            }
        });
        return authenticate.accessToken;
    }, [
        address,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/Lens/useFollow.ts













function useFollow(profileId, followModule, hasDefaultProfile, onSuccess, onFailed) {
    const [loading, setLoading] = (0,react.useState)(false);
    const t = useWeb3ProfileTrans();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const handleQueryAuthenticate = useQueryAuthenticate(account);
    const { LENS_HUB_PROXY_CONTRACT_ADDRESS } = (0,constants_constants/* useLensConstants */.BL)(chainId);
    const lensHub = (0,useContract/* useContract */.c)(chainId, LENS_HUB_PROXY_CONTRACT_ADDRESS, LensHub);
    const snackbarKeyRef = (0,react.useRef)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const showSingletonSnackbar = (0,react.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    const followWithProxyAction = (0,react.useCallback)(async (token)=>{
        if (!profileId || chainId !== src_types/* ChainId */.a_.Matic || followModule || !hasDefaultProfile) return;
        return entry/* Lens */.Ri.followWithProxyAction(profileId, {
            token
        });
    }, [
        profileId,
        chainId,
        followModule,
        hasDefaultProfile
    ]);
    const queryProxyActionStatus = (0,react.useCallback)(async (token, proxyAction)=>{
        if (!proxyAction) return;
        for(let i = 0; i < 30; i += 1){
            const status = await entry/* Lens */.Ri.queryProxyStatus(proxyAction, {
                token
            });
            if (!status) return;
            switch(status.__typename){
                case ProxyActionType.ProxyActionError:
                    throw new Error(status.reason);
                case ProxyActionType.ProxyActionQueued:
                    await (0,esm/* delay */.gw)(1000);
                    continue;
                case ProxyActionType.ProxyActionStatusResult:
                    const receipt = await entry/* Web3 */.Bv.confirmTransaction(status.txHash);
                    if (!receipt.status) return;
                    return proxyAction;
                default:
                    // TODO: error
                    return;
            }
        }
        return;
    }, []);
    const handleFollow = (0,react.useCallback)(async (event)=>{
        const cloneEvent = (0,cloneDeep/* default */.Z)(event);
        try {
            setLoading(true);
            if (!profileId || chainId !== src_types/* ChainId */.a_.Matic) return;
            const token = await handleQueryAuthenticate();
            if (!token) return;
            const proxyAction = await followWithProxyAction(token);
            if (proxyAction) {
                onSuccess?.(cloneEvent);
                setLoading(false);
            }
            const result = await queryProxyActionStatus(token, proxyAction);
            if (!result) {
                setLoading(true);
                const typedData = await entry/* Lens */.Ri.createFollowTypedData(profileId, {
                    token,
                    followModule
                });
                if (!typedData) return;
                const signature = await entry/* Web3 */.Bv.signMessage('typedData', JSON.stringify(encodeTypedData(typedData.typedData.domain, typedData.typedData.types, typedData.typedData.value)));
                const { v, r, s } = splitSignature(signature);
                const { deadline, profileIds, datas } = typedData.typedData.value;
                let hash;
                try {
                    const broadcast = await entry/* Lens */.Ri.broadcast(typedData.id, signature, {
                        token,
                        fetcher: context/* fetchJSON */.ZV
                    });
                    if (broadcast?.__typename === BroadcastType.RelayError) throw new Error(broadcast.reason);
                    else hash = broadcast?.txHash;
                } catch  {
                    onFailed?.();
                    const tx = await new ContractTransaction/* ContractTransaction */.D(lensHub).fillAll(lensHub?.methods.followWithSig([
                        account,
                        profileIds,
                        datas,
                        [
                            v,
                            r,
                            s,
                            deadline
                        ]
                    ]), {
                        from: account
                    });
                    hash = await entry/* Web3 */.Bv.sendTransaction(tx);
                }
                if (!hash) return;
                onSuccess?.(cloneEvent);
                setLoading(false);
                const receipt = await entry/* Web3 */.Bv.confirmTransaction(hash, {
                    signal: AbortSignal.timeout(3 * 60 * 1000)
                });
                if (!receipt.status) throw new Error('Failed to Follow');
            }
        } catch (error) {
            if (error instanceof Error && !error.message.includes('Transaction was rejected') && !error.message.includes('Signature canceled') && !error.message.includes('User rejected the request') && !error.message.includes('User rejected transaction') && !error.message.includes('RPC Error')) {
                onFailed?.();
                showSingletonSnackbar(t.follow_lens_handle(), {
                    processing: false,
                    variant: 'error',
                    message: t.network_error()
                });
            }
        } finally{
            setLoading(false);
        }
    }, [
        handleQueryAuthenticate,
        profileId,
        account,
        chainId,
        onSuccess,
        showSingletonSnackbar,
        onFailed
    ]);
    return {
        loading,
        handleFollow
    };
}

// EXTERNAL MODULE: ./packages/web3-contracts/abis/LensFollowNFT.json
var LensFollowNFT = __webpack_require__(55788);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/Lens/useUnfollow.ts











function useUnfollow(profileId, onSuccess, onFailed) {
    const [loading, setLoading] = (0,react.useState)(false);
    const t = useWeb3ProfileTrans();
    const { account, chainId } = (0,useContext/* useChainContext */.ql)();
    const handleQueryAuthenticate = useQueryAuthenticate(account);
    const snackbarKeyRef = (0,react.useRef)();
    const { showSnackbar, closeSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const showSingletonSnackbar = (0,react.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    const handleUnfollow = (0,react.useCallback)(async (event)=>{
        const cloneEvent = (0,cloneDeep/* default */.Z)(event);
        try {
            setLoading(true);
            if (!profileId || chainId !== src_types/* ChainId */.a_.Matic) return;
            const token = await handleQueryAuthenticate();
            if (!token) return;
            const typedData = await entry/* Lens */.Ri.createUnfollowTypedData(profileId, {
                token
            });
            if (!typedData) return;
            const signature = await entry/* Web3 */.Bv.signMessage('typedData', JSON.stringify(encodeTypedData(typedData.typedData.domain, typedData.typedData.types, typedData.typedData.value)), {
                chainId: src_types/* ChainId */.a_.Matic
            });
            const { v, r, s } = splitSignature(signature);
            const { tokenId, deadline } = typedData.typedData.value;
            let hash;
            try {
                onSuccess?.(cloneEvent);
                setLoading?.(false);
                const broadcast = await entry/* Lens */.Ri.broadcast(typedData.id, signature, {
                    token,
                    fetcher: context/* fetchJSON */.ZV
                });
                if (broadcast?.__typename === BroadcastType.RelayError) throw new Error(broadcast.reason);
                else hash = broadcast?.txHash;
            } catch  {
                onFailed?.();
                setLoading(true);
                const followNFTContract = entry/* Contract */.CH.getWeb3Contract(typedData.typedData.domain.verifyingContract, LensFollowNFT);
                const tx = await new ContractTransaction/* ContractTransaction */.D(followNFTContract).fillAll(followNFTContract?.methods.burnWithSig(tokenId, [
                    v,
                    r,
                    s,
                    deadline
                ]), {
                    from: account
                });
                hash = await entry/* Web3 */.Bv.sendTransaction(tx, {
                    chainId: src_types/* ChainId */.a_.Matic
                });
                onSuccess?.(cloneEvent);
                setLoading(false);
            }
            if (!hash) return;
            const receipt = await entry/* Web3 */.Bv.confirmTransaction(hash, {
                chainId: src_types/* ChainId */.a_.Matic,
                signal: AbortSignal.timeout(3 * 60 * 1000)
            });
            if (!receipt.status) return;
        } catch (error) {
            if (error instanceof Error && !error.message.includes('Transaction was rejected') && !error.message.includes('Signature canceled') && !error.message.includes('User rejected the request') && !error.message.includes('User rejected transaction') && !error.message.includes('RPC Error')) {
                onFailed?.();
                showSingletonSnackbar(t.unfollow_lens_handle(), {
                    processing: false,
                    variant: 'error',
                    message: t.network_error()
                });
            }
        } finally{
            setLoading(false);
        }
    }, [
        handleQueryAuthenticate,
        chainId,
        profileId,
        account,
        onSuccess,
        showSingletonSnackbar
    ]);
    return {
        loading,
        handleUnfollow
    };
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/HandlerDescription.tsx










const HandlerDescription_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: theme.palette.maskColor.bg,
            borderRadius: 8,
            padding: theme.spacing(1.5)
        },
        description: {
            display: 'flex',
            columnGap: 4
        },
        name: {
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.main
        },
        address: {
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.maskColor.second
        },
        avatar: {
            objectFit: 'cover',
            borderRadius: 99
        }
    }));
const HandlerDescription = /*#__PURE__*/ (0,react.memo)((props)=>{
    const t = useWeb3ProfileTrans();
    const { classes } = HandlerDescription_useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const { account, providerType } = (0,useContext/* useChainContext */.ql)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(pluginID, props.profile?.handle ? account : undefined);
    const providerDescriptor = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const walletName = (0,react.useMemo)(()=>{
        if (props.profile?.handle) return props.profile.handle;
        if (domain) return domain;
        if (providerType === src_types/* ProviderType */.lP.MaskWallet && wallet?.name) return wallet?.name;
        return providerDescriptor?.name;
    }, [
        account,
        domain,
        providerType,
        wallet?.name,
        providerDescriptor?.name,
        props.profile?.handle
    ]);
    const handleDisconnect = (0,react.useCallback)(()=>entry/* Web3 */.Bv.disconnect(), []);
    const avatarUrl = (0,react.useMemo)(()=>{
        if (!props.profile?.avatar) return;
        return (0,resolver/* resolveIPFS_URL */.mg)(props.profile?.avatar);
    }, [
        props.profile?.avatar
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        size: 36,
                        classes: {
                            mainIcon: props.profile ? classes.avatar : undefined
                        },
                        mainIcon: props.profile ? avatarUrl ? avatarUrl : new URL(/* asset import */ __webpack_require__(70577), __webpack_require__.b).href : providerDescriptor?.icon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: walletName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.address,
                                children: Others.formatAddress(account, 4)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "text",
                onClick: props.profile ? handleDisconnect : ()=>modals/* SelectProviderModal */.ge.open(),
                children: props.profile ? t.plugin_wallet_disconnect() : t.wallet_status_button_change()
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/ConfettiExplosion/utils.ts
// colors, back side is darker for confetti flipping
const colors = [
    {
        front: '#abfe2c',
        back: '#5CC91A'
    },
    // Purple
    {
        front: '#00C21F',
        back: '#21C93C'
    },
    // Light Blue
    {
        front: '#C3FF9E',
        back: '#9FEA71'
    }
];
// Darker Blue
// amount to add on each button press
const confettiCount = 20;
const sequinCount = 10;
// "physics" variables
const gravityConfetti = 0.3;
const gravitySequins = 0.55;
const dragConfetti = 0.075;
const dragSequins = 0.02;
const terminalVelocity = 3;
// helper function to pick a random number within a range
const randomRange = (min, max)=>Math.random() * (max - min) + min;
// helper function to get initial velocities for confetti
// this weighted spread helps the confetti look more realistic
const initConfettoVelocity = (xRange, yRange)=>{
    const x = randomRange(xRange[0], xRange[1]);
    const range = yRange[1] - yRange[0] + 1;
    let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
    if (y >= yRange[1] - 1) {
        // Occasional confetto goes higher than the max
        y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
    }
    return {
        x,
        y: -y
    };
};

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/ConfettiExplosion/Confetto.ts

class Confetto {
    randomModifier;
    color;
    dimensions;
    position;
    rotation;
    scale = {
        x: 1,
        y: 1
    };
    velocity = initConfettoVelocity([
        -9,
        9
    ], [
        6,
        11
    ]);
    constructor(canvasWidth, canvasHeight, buttonOffsetWidth, buttonOffsetHeight){
        this.randomModifier = randomRange(0, 99);
        this.color = colors[Math.floor(randomRange(0, colors.length))];
        this.dimensions = {
            x: randomRange(5, 9),
            y: randomRange(8, 15)
        };
        this.position = {
            x: randomRange(canvasWidth / 2 - buttonOffsetWidth / 4, canvasWidth / 2 + buttonOffsetWidth / 4),
            y: randomRange(canvasHeight / 2 + buttonOffsetHeight / 2 + 8, canvasHeight / 2 + 1.5 * buttonOffsetHeight - 8)
        };
        this.rotation = randomRange(0, 2 * Math.PI);
    }
    update() {
        // apply forces to velocity
        this.velocity.x -= this.velocity.x * dragConfetti;
        this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity);
        this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
        // set position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // spin confetto by scaling y and set the color, .09 just slows cosine frequency
        this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
    }
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/ConfettiExplosion/Sequin.ts

class Sequin {
    color;
    radius;
    position;
    velocity = {
        x: randomRange(-6, 6),
        y: randomRange(-8, -12)
    };
    constructor(canvasWidth, canvasHeight, buttonOffsetWidth, buttonOffsetHeight){
        this.color = colors[Math.floor(randomRange(0, colors.length))].back;
        this.radius = randomRange(1, 2);
        this.position = {
            x: randomRange(canvasWidth / 2 - buttonOffsetWidth / 3, canvasWidth / 2 + buttonOffsetWidth / 3),
            y: randomRange(canvasHeight / 2 + buttonOffsetHeight / 2 + 8, canvasHeight / 2 + 1.5 * buttonOffsetHeight - 8)
        };
    }
    update() {
        // apply forces to velocity
        this.velocity.x -= this.velocity.x * dragSequins;
        this.velocity.y = this.velocity.y + gravitySequins;
        // set position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/ConfettiExplosion/index.tsx




// add Confetto/Sequin objects to arrays to draw them
const confetti = [];
const sequins = [];
let buttonOffsetWidth = 0;
let buttonOffsetHeight = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let globalCtx;
let requestId;
const renderConfetti = ()=>{
    if (globalCtx) {
        globalCtx.clearRect(0, 0, canvasWidth, canvasHeight);
        confetti.forEach((confetto, index)=>{
            if (!globalCtx) return;
            const width = confetto.dimensions.x * confetto.scale.x;
            const height = confetto.dimensions.y * confetto.scale.y;
            // move canvas to position and rotate
            globalCtx.translate(confetto.position.x, confetto.position.y);
            globalCtx.rotate(confetto.rotation);
            // update confetto "physics" values
            confetto.update();
            // get front or back fill color
            globalCtx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
            // draw confetto
            globalCtx.fillRect(-width / 2, -height / 2, width, height);
            // reset transform matrix
            globalCtx.setTransform(1, 0, 0, 1, 0, 0);
            // clear rectangle where button cuts off
            if (confetto.velocity.y < 0) {
                globalCtx.clearRect(canvasWidth / 2 - buttonOffsetWidth / 2, canvasHeight / 2 + buttonOffsetHeight / 2, buttonOffsetWidth, buttonOffsetHeight);
            }
        });
        sequins.forEach((sequin, index)=>{
            if (!globalCtx) return;
            // move canvas to position
            globalCtx.translate(sequin.position.x, sequin.position.y);
            // update sequin "physics" values
            sequin.update();
            // set the color
            globalCtx.fillStyle = sequin.color;
            // draw sequin
            globalCtx.beginPath();
            globalCtx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
            globalCtx.fill();
            // reset transform matrix
            globalCtx.setTransform(1, 0, 0, 1, 0, 0);
            // clear rectangle where button cuts off
            if (sequin.velocity.y < 0) {
                globalCtx.clearRect(canvasWidth / 2 - buttonOffsetWidth / 2, canvasHeight / 2 + buttonOffsetHeight / 2, buttonOffsetWidth, buttonOffsetHeight);
            }
        });
        // remove confetti and sequins that fall off the screen
        // must be done in separate loops to avoid noticeable flickering
        confetti.forEach((confetto, index)=>{
            if (confetto.position.y >= canvasHeight) confetti.splice(index, 1);
        });
        sequins.forEach((sequin, index)=>{
            if (sequin.position.y >= canvasHeight) sequins.splice(index, 1);
        });
    }
    requestId = window.requestAnimationFrame(renderConfetti);
};
function useConfettiExplosion() {
    const canvasRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const resize = ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        renderConfetti();
        return ()=>{
            if (requestId) window.cancelAnimationFrame(requestId);
            window.removeEventListener('resize', resize);
        };
    }, []);
    const showConfettiExplosion = (0,react.useCallback)((width, height)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        buttonOffsetWidth = width;
        buttonOffsetHeight = height;
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;
        globalCtx = ctx;
        for(let i = 0; i < confettiCount; i += 1){
            confetti.push(new Confetto(canvas.width, canvas.height, width, height));
        }
        for(let i = 0; i < sequinCount; i += 1){
            sequins.push(new Sequin(canvas.width, canvas.height, width, height));
        }
    }, []);
    return {
        showConfettiExplosion,
        canvasRef
    };
}

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/FollowLensDialog.tsx




















const FollowLensDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { account })=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        name: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 700,
            color: theme.palette.maskColor.main,
            marginTop: 24
        },
        handle: {
            fontSize: 16,
            lineHeight: '20px',
            fontWeight: 400,
            color: theme.palette.maskColor.main,
            margin: theme.spacing(0.5, 0)
        },
        followers: {
            display: 'flex',
            justifyContent: 'center',
            columnGap: 8
        },
        dialogTitle: {
            background: `${theme.palette.maskColor.bottom}!important`
        },
        dialogContent: {
            maxWidth: 400,
            minHeight: 398
        },
        actions: {
            display: 'flex',
            flexDirection: 'column',
            rowGap: 12,
            width: '100%',
            marginTop: 24
        },
        followAction: {
            backgroundColor: '#A1FE27',
            color: theme.palette.maskColor.publicMain,
            '&:hover': {
                backgroundColor: '#A1FE27',
                color: theme.palette.maskColor.publicMain
            },
            [`&.${buttonClasses/* default */.Z.disabled}`]: {
                background: '#A1FE27',
                opacity: 0.6,
                color: theme.palette.maskColor.publicMain
            }
        },
        profile: {
            marginTop: account ? 24 : 44,
            width: '100%'
        },
        tips: {
            marginBottom: theme.spacing(3),
            color: theme.palette.maskColor.main,
            fontSize: 14
        },
        canvas: {
            height: '100vh',
            pointerEvents: 'none',
            position: 'fixed',
            width: '100%',
            zIndex: 2,
            top: 0,
            left: 0
        },
        linkButton: {
            '&:hover': {
                backgroundColor: theme.palette.maskColor.thirdMain
            }
        }
    }));
let task;
function FollowLensDialog({ handle, onClose }) {
    const t = useWeb3ProfileTrans();
    const wallet = (0,useWallet/* useWallet */.O)();
    const [isFollowing, setIsFollowing] = (0,react.useState)(false);
    const [isHovering, setIsHovering] = (0,react.useState)(false);
    const { classes } = FollowLensDialog_useStyles({
        account: !!wallet
    });
    const { account, chainId, providerType } = (0,useContext/* useChainContext */.ql)();
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    // #region profile information
    const { value, loading } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!handle || !open || !open) return;
        const profile = await entry/* Lens */.Ri.getProfileByHandle(handle);
        if (!profile) return;
        const isFollowing = await entry/* Lens */.Ri.queryFollowStatus(account, profile.id);
        const defaultProfile = await entry/* Lens */.Ri.queryDefaultProfileByAddress(account);
        const profiles = await entry/* Lens */.Ri.queryProfilesByAddress(account);
        setIsFollowing(!!isFollowing);
        return {
            profile,
            isSelf: (0,isSameAddress/* isSameAddress */.W)(profile.ownedBy, account),
            isFollowing,
            defaultProfile: defaultProfile ?? (0,head/* default */.Z)(profiles)
        };
    }, [
        handle,
        open,
        account
    ]);
    const { profile, defaultProfile, isSelf } = value ?? {};
    const followModule = (0,react.useMemo)(()=>{
        if (profile?.followModule?.type === FollowModuleType.ProfileFollowModule && defaultProfile) {
            return {
                profileFollowModule: {
                    profileId: defaultProfile.id
                }
            };
        } else if (profile?.followModule?.type === FollowModuleType.FeeFollowModule && profile.followModule.amount) {
            return {
                feeFollowModule: {
                    currency: profile.followModule.amount.asset.address,
                    value: profile.followModule.amount.value
                }
            };
        }
        return;
    }, [
        profile,
        defaultProfile
    ]);
    // #endregion
    const approved = (0,react.useMemo)(()=>{
        if (!profile?.followModule?.amount?.asset) return {
            amount: number/* ZERO */.xE.toFixed()
        };
        const { address, name, symbol, decimals } = profile.followModule.amount.asset;
        const token = (0,helpers_token/* createERC20Token */.wY)(chainId, address, name, symbol, decimals);
        const amount = (0,formatter/* formatAmount */.dN)(profile.followModule.amount.value, decimals);
        return {
            token,
            amount
        };
    }, [
        profile?.followModule?.amount,
        chainId
    ]);
    // #region follow and unfollow event handler
    const { showConfettiExplosion, canvasRef } = useConfettiExplosion();
    const { loading: followLoading, handleFollow } = useFollow(profile?.id, followModule, !!defaultProfile, (event)=>{
        showConfettiExplosion(event.currentTarget.offsetWidth, event.currentTarget.offsetHeight);
        setIsFollowing(true);
    }, ()=>setIsFollowing(false));
    const { loading: unfollowLoading, handleUnfollow } = useUnfollow(profile?.id, (event)=>{
        setIsFollowing(false);
    }, ()=>setIsFollowing(true));
    // #endregion
    const { data: feeTokenBalance, isLoading: getBalanceLoading } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, profile?.followModule?.amount?.asset.address ?? '');
    const handleClick = (0,react.useCallback)((event)=>{
        if (task) {
            showSnackbar(isFollowing ? t.lens_unfollow() : t.lens_follow(), {
                processing: true,
                message: isFollowing ? t.lens_unfollow_processing_tips() : t.lens_follow_processing_tips(),
                autoHideDuration: 2000
            });
            return;
        }
        task = (isFollowing ? handleUnfollow(event) : handleFollow(event)).finally(()=>task = undefined);
    }, [
        handleFollow,
        handleUnfollow,
        isFollowing
    ]);
    const disabled = (0,react.useMemo)(()=>{
        if (!account || !!wallet?.owner || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM || providerType === src_types/* ProviderType */.lP.Fortmatic || followLoading || unfollowLoading || profile?.followModule?.type === FollowModuleType.ProfileFollowModule && !defaultProfile || profile?.followModule?.type === FollowModuleType.FeeFollowModule && profile.followModule.amount && (!feeTokenBalance || (0,number/* isLessThan */.FI)((0,formatBalance/* formatBalance */.a)(feeTokenBalance, profile.followModule.amount.asset.decimals), profile.followModule.amount.value)) || profile?.followModule?.type === FollowModuleType.RevertFollowModule) return true;
        return false;
    }, [
        account,
        wallet?.owner,
        chainId,
        followLoading,
        unfollowLoading,
        feeTokenBalance,
        profile?.followModule,
        pluginID
    ]);
    const buttonText = (0,react.useMemo)(()=>{
        if (isFollowing) {
            return isHovering ? t.unfollow() : t.following_action();
        } else if (profile?.followModule?.type === FollowModuleType.FeeFollowModule && profile.followModule.amount) {
            return t.follow_for_fees({
                value: profile.followModule.amount.value,
                symbol: profile.followModule.amount.asset.symbol
            });
        }
        return t.follow();
    }, [
        isFollowing,
        isHovering,
        profile
    ]);
    const tips = (0,react.useMemo)(()=>{
        if (isSelf && profile) return t.edit_profile_tips({
            profile: profile.handle
        });
        if (wallet?.owner || pluginID !== PluginID/* NetworkPluginID */.F.PLUGIN_EVM || providerType === src_types/* ProviderType */.lP.Fortmatic) return t.follow_wallet_tips();
        else if (profile?.followModule?.type === FollowModuleType.ProfileFollowModule && !defaultProfile) return t.follow_with_profile_tips();
        else if (profile?.followModule?.type === FollowModuleType.FeeFollowModule && profile.followModule.amount && (!feeTokenBalance || (0,number/* isLessThan */.FI)((0,formatBalance/* formatBalance */.a)(feeTokenBalance, profile.followModule.amount.asset.decimals), profile.followModule.amount.value))) return t.follow_with_charge_tips();
        else if (profile?.followModule?.type === FollowModuleType.RevertFollowModule) return t.follow_with_revert_tips();
        else if (!defaultProfile) {
            return t.follow_gas_tips();
        }
        return;
    }, [
        wallet?.owner,
        chainId,
        profile,
        feeTokenBalance,
        pluginID,
        providerType,
        isSelf
    ]);
    const avatar = (0,react.useMemo)(()=>{
        if (!profile?.picture?.original) return;
        return (0,resolver/* resolveIPFS_URL */.mg)(profile?.picture?.original.url);
    }, [
        profile?.picture?.original
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: true,
        onClose: onClose,
        title: t.lens(),
        classes: {
            dialogTitle: classes.dialogTitle,
            paper: classes.dialogContent
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                padding: 3
            },
            children: [
                !value && (loading || getBalanceLoading) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 342,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: avatar ?? new URL(/* asset import */ __webpack_require__(70577), __webpack_require__.b).toString(),
                            sx: {
                                width: 64,
                                height: 64
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.name,
                            children: profile?.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.handle,
                            children: [
                                "@",
                                profile?.handle
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.followers,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ProfileTrans.followers, {
                                    components: {
                                        strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {})
                                    },
                                    values: {
                                        followers: String(profile?.stats?.totalFollowers ?? '0')
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ProfileTrans.following, {
                                    components: {
                                        strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {})
                                    },
                                    values: {
                                        following: String(profile?.stats?.totalFollowing ?? '0')
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.actions,
                            children: isSelf ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "roundedContained",
                                className: classes.followAction,
                                href: profile?.handle ? getLensterLink(profile.handle) : '#',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                    size: 18
                                }),
                                sx: {
                                    cursor: 'pointer'
                                },
                                children: t.edit_profile_in_lenster()
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                                        spender: value?.profile.followModule?.contractAddress,
                                        amount: approved.amount,
                                        token: !isFollowing ? approved.token : undefined,
                                        showHelperToken: false,
                                        ActionButtonProps: {
                                            variant: 'roundedContained',
                                            className: classes.followAction,
                                            disabled
                                        },
                                        infiniteUnlockContent: t.unlock_token_tips({
                                            value: value?.profile.followModule?.amount?.value ?? number/* ZERO */.xE.toFixed(),
                                            symbol: approved.token?.symbol ?? ''
                                        }),
                                        failedContent: t.unlock_token_tips({
                                            value: value?.profile.followModule?.amount?.value ?? number/* ZERO */.xE.toFixed(),
                                            symbol: approved.token?.symbol ?? ''
                                        }),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                                            disableConnectWallet: true,
                                            expectedPluginID: pluginID,
                                            expectedChainId: src_types/* ChainId */.a_.Matic,
                                            ActionButtonPromiseProps: {
                                                variant: 'roundedContained',
                                                className: classes.followAction,
                                                startIcon: null,
                                                disabled
                                            },
                                            switchText: t.switch_network_tips(),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                                                variant: "roundedContained",
                                                className: classes.followAction,
                                                disabled: disabled,
                                                loading: followLoading || unfollowLoading || loading,
                                                onClick: handleClick,
                                                onMouseOver: ()=>setIsHovering(true),
                                                onMouseOut: ()=>setIsHovering(false),
                                                children: buttonText
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        className: classes.linkButton,
                                        variant: "roundedOutlined",
                                        href: profile?.handle ? getLensterLink(profile.handle) : '#',
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 18
                                        }),
                                        sx: {
                                            cursor: 'pointer'
                                        },
                                        children: t.lenster()
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.profile,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                offChain: true,
                                hideRiskWarningConfirmed: true,
                                expectedChainId: src_types/* ChainId */.a_.Matic,
                                ActionButtonProps: {
                                    variant: 'roundedContained'
                                },
                                children: [
                                    tips ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.tips,
                                        children: tips
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(HandlerDescription, {
                                        profile: defaultProfile ? {
                                            avatar: defaultProfile.picture?.original?.url,
                                            handle: defaultProfile.handle
                                        } : undefined
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
                    className: classes.canvas,
                    id: "follow-button-confetto",
                    ref: canvasRef,
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqualWith.js
var isEqualWith = __webpack_require__(81647);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(405);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaProofs.ts
var usePersonaProofs = __webpack_require__(19717);
// EXTERNAL MODULE: ./packages/shared/src/constants.tsx
var src_constants = __webpack_require__(16044);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Alert/index.tsx
var Alert = __webpack_require__(41664);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaAction.tsx
var PersonaAction = __webpack_require__(41253);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useHiddenAddressConfig.ts
var useHiddenAddressConfig = __webpack_require__(66117);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/context.ts
var site_adaptor_context = __webpack_require__(8898);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/hooks/usePersona.ts



function useCurrentPersona() {
    return (0,use_subscription.useSubscription)(context/* currentPersona */._c);
}
function useLastRecognizedProfile() {
    return (0,use_subscription.useSubscription)(site_adaptor_context/* lastRecognizedProfile */.Ns);
}
function useAllPersonas() {
    return (0,use_subscription.useSubscription)(context/* allPersonas */.d4);
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaAction/PlatformAvatar.tsx + 1 modules
var PlatformAvatar = __webpack_require__(70269);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallets.ts
var useWallets = __webpack_require__(41238);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(4639);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(20701);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Switch/Switch.js
var Switch = __webpack_require__(14722);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletSettingCard/UI.tsx






const UI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            backgroundColor: theme.palette.maskColor.bottom,
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(1.25, 1)
        },
        left: {
            display: 'flex',
            columnGap: 10,
            alignItems: 'center'
        },
        name: {
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            fontWeight: 700
        },
        address: {
            color: theme.palette.maskColor.second,
            fontSize: 12,
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center'
        },
        link: {
            height: 14,
            color: theme.palette.maskColor.second
        }
    }));
const WalletSettingCardUI = /*#__PURE__*/ (0,react.memo)(({ icon, walletName, formattedAddress, addressLink, checked, onSwitchChange })=>{
    const { classes } = UI_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.left,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                        mainIcon: icon,
                        size: 30
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: walletName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.address,
                                children: [
                                    formattedAddress,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        href: addressLink,
                                        target: "_blank",
                                        title: "View on Explorer",
                                        rel: "noopener noreferrer",
                                        className: classes.link,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                            size: 14
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                checked: checked,
                onChange: onSwitchChange
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletSettingCard/index.tsx





const WalletSettingCard = /*#__PURE__*/ (0,react.memo)(function WalletSettingCard({ wallet, fallbackName, checked, onSwitchChange }) {
    const wallets = (0,useWallets/* useWallets */.r)();
    const networkPluginId = (0,resolver/* resolveNextID_NetworkPluginID */.j$)(wallet.platform);
    const chainId = (0,useDefaultChainId/* useDefaultChainId */.b)(networkPluginId);
    const networkDescriptor = (0,useNetworkDescriptor/* useNetworkDescriptor */.V)(networkPluginId, chainId);
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(networkPluginId);
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(networkPluginId, wallet.identity);
    const walletName = (0,react.useMemo)(()=>{
        if (domain) return domain;
        const walletAtDB = wallets.find((x)=>(0,isSameAddress/* isSameAddress */.W)(wallet.identity, x.address));
        if (walletAtDB) return walletAtDB.name;
        return;
    }, [
        domain,
        wallets,
        wallet.identity
    ]);
    const formattedAddress = Others.formatAddress(wallet.identity, 4);
    const addressLink = Others.explorerResolver.addressLink(chainId, wallet.identity);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettingCardUI, {
        onSwitchChange: ()=>onSwitchChange(wallet.identity),
        icon: networkDescriptor?.icon,
        formattedAddress: formattedAddress,
        addressLink: addressLink,
        walletName: walletName ?? fallbackName,
        checked: checked
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Card/Card.js
var Card = __webpack_require__(65174);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(7081);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Collapse/Collapse.js
var Collapse = __webpack_require__(81631);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(77607);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/ProfileCard.tsx











const ProfileCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            backgroundColor: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 0px 20px rgba(255, 255, 255, 0.12)' : '0 0 20px rgba(0, 0, 0, 0.05)'
        },
        cursor: {
            cursor: 'pointer'
        },
        content: {
            padding: theme.spacing(0, 2, 2),
            paddingBottom: '16px !important'
        },
        avatar: {
            marginRight: theme.spacing(1)
        },
        headerContent: {
            height: 40
        },
        action: {
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center'
        },
        wallets: {
            borderTop: `1px solid ${theme.palette.maskColor.line}`,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: theme.spacing(1.5)
        },
        percent: {
            width: 36,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16
        },
        arrowWrapper: {
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        titleWrapper: {
            display: 'flex'
        },
        title: {
            height: 18,
            lineHeight: '18px',
            fontSize: 14,
            fontWeight: 'bold',
            color: theme.palette.maskColor.main
        },
        current: {
            display: 'inline-block',
            marginLeft: theme.spacing(1.5),
            borderRadius: 4,
            fontWeight: 'bold',
            fontSize: '10px',
            height: theme.spacing(2),
            lineHeight: '16px',
            padding: '0 6px',
            boxSizing: 'border-box',
            color: theme.palette.maskColor.primary,
            backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.1)
        },
        subheader: {
            height: 16,
            lineHeight: '16px',
            fontSize: 12,
            fontWeight: 'normal',
            color: theme.palette.maskColor.second,
            marginTop: theme.spacing(0.5)
        },
        providerIcon: {
            padding: 1,
            background: theme.palette.maskColor.white
        }
    }));
const ProfileCard = /*#__PURE__*/ (0,react.memo)(function ProfileCard({ profile, avatar, walletProofs = constants/* EMPTY_LIST */.rP, className, unlistedAddresses, pendingUnlistedAddresses, initialExpanded = false, isCurrent, onToggle, onAddWallet, ...rest }) {
    const { classes, cx } = ProfileCard_useStyles();
    const t = useWeb3ProfileTrans();
    const [expanded, setExpanded] = (0,react.useState)(initialExpanded);
    const { data: user } = (0,useQuery/* useQuery */.a)({
        queryKey: [
            'twitter',
            'profile',
            profile.identity
        ],
        queryFn: ()=>entry/* Twitter */.tL.getUserByScreenName(profile.identity)
    });
    const nickname = user?.nickname || profile.name || profile.identity;
    // Identities of Twitter proof get lowered case. Prefer handle from Twitter API.
    const handle = user?.screenName || profile.identity;
    const avatarUrl = user?.avatarURL || avatar;
    const handleSwitch = (0,react.useCallback)((address)=>{
        onToggle?.(profile.identity, address);
    }, [
        onToggle,
        profile.identity
    ]);
    const listingAddresses = (0,react.useMemo)(()=>{
        const addresses = walletProofs.map((x)=>x.identity);
        return addresses.filter((x)=>!pendingUnlistedAddresses.includes(x));
    }, [
        pendingUnlistedAddresses
    ]);
    const action = walletProofs.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                size: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.percent,
                variant: "body2",
                mx: 1,
                children: [
                    listingAddresses.length,
                    "/",
                    walletProofs.length
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.arrowWrapper,
                children: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowUp, {
                    size: 20
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowDrop, {
                    size: 20
                })
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "text",
        disableRipple: true,
        onClick: onAddWallet,
        sx: {
            px: 1
        },
        children: t.add_wallet()
    });
    const cardRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: cx(classes.card, className),
        ref: cardRef,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: walletProofs.length ? classes.cursor : undefined,
                classes: {
                    avatar: classes.avatar,
                    action: classes.action,
                    content: classes.headerContent
                },
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlatformAvatar/* PlatformAvatar */.c, {
                    classes: {
                        providerIcon: classes.providerIcon
                    },
                    networkIcon: avatarUrl,
                    providerIcon: new URL(/* asset import */ __webpack_require__(61635), __webpack_require__.b).href,
                    size: 36
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.titleWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "subtitle1",
                            className: classes.title,
                            children: nickname
                        }),
                        isCurrent ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.current,
                            role: "status",
                            children: t.current()
                        }) : null
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "subtitle2",
                    className: classes.subheader,
                    children: [
                        "@",
                        handle
                    ]
                }),
                action: action,
                onClick: ()=>{
                    if (!walletProofs.length) return;
                    return setExpanded((v)=>!v);
                }
            }),
            walletProofs.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                in: expanded,
                easing: "ease-in-out",
                onEntered: ()=>{
                    cardRef.current?.scrollIntoView({
                        block: 'nearest',
                        behavior: 'smooth'
                    });
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                    className: classes.content,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.wallets,
                        children: walletProofs.map((proof, i)=>{
                            const checked = listingAddresses.includes(proof.identity);
                            const fallbackName = (0,resolver/* resolveNextIDPlatformWalletName */.ww)(proof.platform);
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettingCard, {
                                wallet: proof,
                                fallbackName: `${fallbackName} ${walletProofs.length - i}`,
                                checked: checked,
                                onSwitchChange: handleSwitch
                            }, proof.identity);
                        })
                    })
                })
            }) : null
        ]
    });
});
const ProfileCardSkeleton = /*#__PURE__*/ (0,react.memo)(function ProfileCardSkeleton(props) {
    const { classes, cx } = ProfileCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        ...props,
        className: cx(classes.card, props.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
            classes: {
                avatar: classes.avatar,
                action: classes.action,
                content: classes.headerContent
            },
            avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "circular",
                height: 36,
                width: 36
            }),
            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "text",
                height: 18,
                width: 60
            }),
            subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "text",
                height: 16,
                width: 40
            })
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/Web3ProfileDialog.tsx














const Web3ProfileDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        content: {
            width: 568,
            height: 484,
            padding: theme.spacing(1, 2, 0),
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        profileCard: {
            margin: theme.spacing(1.5, 0)
        },
        actions: {
            padding: '0px !important',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)'
        },
        button: {
            width: 276
        },
        titleTailButton: {
            cursor: 'pointer',
            color: theme.palette.maskColor.main
        }
    }));
const Web3ProfileDialog = /*#__PURE__*/ (0,react.memo)(function Web3ProfileDialog({ open, onClose }) {
    const t = useWeb3ProfileTrans();
    const { classes } = Web3ProfileDialog_useStyles();
    const myProfile = useLastRecognizedProfile();
    const allPersona = useAllPersonas();
    const [tipsVisible, setTipsVisible] = (0,react.useState)(true);
    const dismissTips = (0,react.useCallback)(()=>setTipsVisible(false), []);
    const persona = useCurrentPersona();
    const currentPersona = allPersona.find((x)=>x.identifier.rawPublicKey === persona?.rawPublicKey);
    const personaPublicKey = currentPersona?.identifier.publicKeyAsHex;
    const allLinkedProfiles = (0,react.useMemo)(()=>{
        return allPersona.flatMap((x)=>x.linkedProfiles).filter((x)=>x.identifier.network === 'twitter.com');
    }, [
        allPersona
    ]);
    const { data: proofs, isLoading: loadingBinding, isFetched } = (0,usePersonaProofs/* usePersonaProofs */.x)(personaPublicKey);
    const twitterProofs = (0,react.useMemo)(()=>{
        if (!proofs?.length) return constants/* EMPTY_LIST */.rP;
        return (0,uniqBy/* default */.Z)(proofs.filter((proof)=>proof.platform === NextID_types/* NextIDPlatform */.V.Twitter && proof.is_valid), (x)=>x.identity);
    }, [
        proofs
    ]);
    const walletProofs = (0,react.useMemo)(()=>{
        if (!proofs?.length) return constants/* EMPTY_LIST */.rP;
        return (0,uniqBy/* default */.Z)(proofs.filter((proof)=>proof.platform === NextID_types/* NextIDPlatform */.V.Ethereum), (x)=>x.identity);
    }, [
        proofs
    ]);
    const socialIds = (0,react.useMemo)(()=>twitterProofs.map((x)=>x.identity), [
        twitterProofs
    ]);
    const [{ data: unlistedAddressConfig = constants/* EMPTY_OBJECT */.Nu, isInitialLoading, refetch }, updateConfig] = (0,useHiddenAddressConfig/* useUnlistedAddressConfig */.KS)({
        identifier: currentPersona?.identifier,
        pluginID: PluginID/* PluginID */.P.Web3Profile,
        socialIds
    }, context/* signWithPersona */.MN);
    const [pendingUnlistedConfig, setPendingUnlistedConfig] = (0,react.useState)({});
    (0,react.useEffect)(()=>{
        setPendingUnlistedConfig(unlistedAddressConfig);
    }, [
        unlistedAddressConfig
    ]);
    const isClean = (0,react.useMemo)(()=>{
        return (0,isEqualWith/* default */.Z)(unlistedAddressConfig, pendingUnlistedConfig, (config1, config2)=>{
            // Some identities might only in pendingUnlistedConfig but not in migratedUnlistedAddressConfig,
            // so we merged all the identities
            const keys = (0,uniq/* default */.Z)([
                ...Object.keys(config1),
                ...Object.keys(config2)
            ]);
            for (const key of keys){
                if (!(0,isEqual/* default */.Z)((0,sortBy/* default */.Z)(config1[key] || []), (0,sortBy/* default */.Z)(config2[key] || []))) return false;
            }
            return true;
        });
    }, [
        unlistedAddressConfig,
        pendingUnlistedConfig
    ]);
    const toggleUnlisted = (0,react.useCallback)((identity, address)=>{
        setPendingUnlistedConfig((config)=>{
            const list = config[identity] ?? [];
            return {
                ...config,
                [identity]: list.includes(address) ? list.filter((x)=>x !== address) : [
                    ...list,
                    address
                ]
            };
        });
    }, []);
    const { showSnackbar } = (0,Snackbar/* useCustomSnackbar */.Ii)();
    const [{ loading: submitting }, handleSubmit] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            await updateConfig(pendingUnlistedConfig);
            showSnackbar(t.save_successfully(), {
                variant: 'success',
                message: t.save_successfully_message(),
                autoHideDuration: 2000
            });
        } catch  {
            showSnackbar(t.save_failed(), {
                variant: 'error',
                message: t.save_failed_message()
            });
        }
        refetch();
    }, [
        pendingUnlistedConfig,
        t,
        updateConfig
    ]);
    const { value: avatar } = (0,useAsyncRetry/* default */.Z)(async ()=>(0,context/* queryPersonaAvatar */.Tk)(currentPersona?.identifier), []);
    const openPopupsWindow = (0,react.useCallback)(()=>{
        (0,context/* openPopupWindow */.lU)(Routes/* PopupRoutes */.mZ.Personas, {
            tab: src_constants/* PopupHomeTabType */.$J.ConnectedWallets
        });
    }, []);
    const disabled = isClean || isInitialLoading;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            dialogContent: classes.content
        },
        title: t.web3_profile(),
        fullWidth: false,
        open: open,
        isOnBack: true,
        titleTail: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
            size: 24,
            onClick: openPopupsWindow,
            className: classes.titleTailButton
        }),
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* Alert */.b, {
                        open: tipsVisible,
                        onClose: dismissTips,
                        children: t.setup_tips()
                    }),
                    loadingBinding && !twitterProofs.length ? (0,range/* default */.Z)(3).map((v)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCardSkeleton, {
                            className: classes.profileCard
                        }, v)) : isFetched && !twitterProofs.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                        height: 360,
                        children: t.no_verified_account()
                    }) : twitterProofs.map((proof)=>{
                        const avatar = allLinkedProfiles.find((x)=>x.identifier.userId === proof.identity)?.avatar;
                        const unlistedAddresses = unlistedAddressConfig[proof.identity] ?? constants/* EMPTY_LIST */.rP;
                        const pendingUnlistedAddresses = pendingUnlistedConfig[proof.identity] ?? constants/* EMPTY_LIST */.rP;
                        const isCurrent = proof.identity.toLowerCase() === myProfile?.identifier?.userId.toLowerCase();
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCard, {
                            className: classes.profileCard,
                            avatar: avatar,
                            profile: proof,
                            walletProofs: walletProofs,
                            unlistedAddresses: unlistedAddresses,
                            pendingUnlistedAddresses: pendingUnlistedAddresses,
                            initialExpanded: isCurrent,
                            isCurrent: isCurrent,
                            onToggle: toggleUnlisted,
                            onAddWallet: openPopupsWindow
                        }, proof.identity);
                    })
                ]
            }),
            currentPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAction/* PersonaAction */.D, {
                    avatar: avatar === null ? undefined : avatar,
                    currentPersona: currentPersona,
                    currentVisitingProfile: myProfile,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        className: classes.button,
                        disabled: disabled,
                        loading: submitting,
                        onClick: handleSubmit,
                        children: t.confirm()
                    })
                })
            }) : null
        ]
    });
});

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/Web3ProfileGlobalInjection.tsx









const Web3ProfileGlobalInjection = /*#__PURE__*/ (0,react.memo)(function Web3ProfileGlobalInjection() {
    const [profileOpen, setProfileOpen] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.on(({ open })=>{
            setProfileOpen(open);
        });
    }, []);
    const [handle, setHandle] = (0,react.useState)('');
    const { open: lensOpen, closeDialog: closeLensDialog } = (0,useRemoteControlledDialog/* useRemoteControlledDialog */.F)(CrossIsolationEvents/* CrossIsolationMessages */.W.events.followLensDialogEvent, (ev)=>{
        if (!ev.open) {
            setHandle('');
        }
        setHandle(ev.handle);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            profileOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ProfileDialog, {
                open: true,
                onClose: ()=>setProfileOpen(false)
            }) : null,
            lensOpen && handle ? /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                value: {
                    chainId: src_types/* ChainId */.a_.Matic
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FollowLensDialog, {
                    handle: handle,
                    onClose: closeLensDialog
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LensPopup, {})
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(60317);
;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/components/LensBadge.tsx







const LensIconSizeMap = {
    [types.Plugin.SiteAdaptor.LensSlot.Post]: 18,
    [types.Plugin.SiteAdaptor.LensSlot.ProfileName]: 18,
    [types.Plugin.SiteAdaptor.LensSlot.Sidebar]: 16
};
const LensBadge_useStyles = (0,makeStyles/* makeStyles */.Z)()({
    badge: {
        padding: 0,
        verticalAlign: 'baseline'
    }
});
const LensBadge = /*#__PURE__*/ (0,react.memo)(({ slot, accounts, userId })=>{
    const buttonRef = (0,react.useRef)(null);
    const { classes } = LensBadge_useStyles();
    (0,react.useEffect)(()=>{
        const button = buttonRef.current;
        if (!button) return;
        let openTimer;
        const enter = ()=>{
            clearTimeout(openTimer);
            openTimer = setTimeout(()=>{
                openPopup({
                    lensAccounts: accounts,
                    userId,
                    popupAnchorEl: buttonRef.current
                });
            }, 200);
        };
        const leave = ()=>{
            clearTimeout(openTimer);
        };
        button.addEventListener('mouseenter', enter);
        button.addEventListener('mouseleave', leave);
        return ()=>{
            clearTimeout(openTimer);
            button.removeEventListener('mouseenter', enter);
            button.removeEventListener('mouseleave', leave);
        };
    }, [
        accounts,
        userId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        disableRipple: true,
        className: classes.badge,
        ref: buttonRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Lens, {
            size: LensIconSizeMap[slot]
        })
    });
});
LensBadge.displayName = 'LensBadge';

;// CONCATENATED MODULE: ./packages/plugins/Web3Profile/src/SiteAdaptor/index.tsx

















const site = {
    ...base/* base */.u,
    async init (signal, context) {
        await setupStorage(context);
    },
    GlobalInjection: Web3ProfileGlobalInjection,
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Web3Profile, {
                size: 36
            });
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                ns: PluginID/* PluginID */.P.Web3Profile,
                i18nKey: "web3_profile"
            });
            return {
                RenderEntryComponent (EntryComponentProps) {
                    (0,react.useEffect)(()=>{
                        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.applicationDialogEvent.on(({ open, pluginID })=>{
                            if (pluginID !== PluginID/* PluginID */.P.Web3Profile) return;
                            CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.sendToLocal({
                                open
                            });
                        });
                    }, []);
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntry/* ApplicationEntry */.T, {
                            ...EntryComponentProps,
                            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                                field: name,
                                pluginID: base/* base */.u.ID
                            }),
                            icon: icon,
                            onClick: ()=>EntryComponentProps?.onClick ? EntryComponentProps.onClick() : CrossIsolationEvents/* CrossIsolationMessages */.W.events.web3ProfileDialogEvent.sendToLocal({
                                    open: true
                                })
                        })
                    });
                },
                ApplicationEntryID: base/* base */.u.ID,
                appBoardSortingDefaultPriority: 3,
                marketListSortingPriority: 3,
                name,
                icon,
                nextIdRequired: true,
                category: 'dapp',
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "__plugin_description",
                    defaults: "Choose and showcase your Web3 footprints on Twitter.",
                    ns: base/* base */.u.ID
                })
            };
        })()
    ],
    Lens: {
        ID: `${base/* base */.u.ID}_lens`,
        UI: {
            Content ({ identity, slot, onStatusUpdate }) {
                const userId = identity?.userId;
                const { data: accounts = constants/* EMPTY_LIST */.rP } = (0,useFireflyLensAccounts/* useFireflyLensAccounts */.$)(userId, true);
                const isProfile = slot === types.Plugin.SiteAdaptor.LensSlot.ProfileName;
                const handle = accounts[0]?.handle;
                const { data: nextIdLens = constants/* EMPTY_LIST */.rP } = (0,useQuery/* useQuery */.a)({
                    queryKey: [
                        'next-id',
                        'all-lens',
                        userId
                    ],
                    enabled: isProfile && !!handle && !!accounts?.length,
                    queryFn: async ()=>{
                        const lensAccounts = await entry/* NextIDProof */.q7.queryAllLens(handle);
                        return lensAccounts.map(NextIdLensToFireflyLens);
                    }
                });
                const lensAccounts = (0,react.useMemo)(()=>isProfile ? (0,uniqBy/* default */.Z)([
                        ...accounts,
                        ...nextIdLens
                    ], (x)=>x.handle) : accounts, [
                    isProfile,
                    accounts,
                    nextIdLens
                ]);
                const hasLens = !lensAccounts.length;
                (0,react.useEffect)(()=>{
                    onStatusUpdate?.(hasLens);
                }, [
                    onStatusUpdate,
                    hasLens
                ]);
                if (!accounts.length || !userId) return null;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(LensBadge, {
                    slot: slot,
                    accounts: lensAccounts,
                    userId: userId
                });
            }
        }
    }
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 11017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60307);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
    // create an uuid for every hook
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        }), [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 85793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 19628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/TokenIcon/index.tsx
var TokenIcon = __webpack_require__(95621);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(88572);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useFungibleTokenSpenders.ts
var useFungibleTokenSpenders = __webpack_require__(54165);
// EXTERNAL MODULE: ./packages/web3-hooks/evm/src/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(13414);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/HelpOutline.js


/* harmony default export */ const HelpOutline = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
}), 'HelpOutline'));
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/EthereumERC20TokenApprovedBoundary/index.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        icon: {},
        button: {
            whiteSpace: 'nowrap',
            // increase selector priority over button's
            [`.${refs.icon}`]: {
                width: 18,
                height: 18,
                fontSize: 10
            }
        },
        helpIcon: {
            width: 18,
            height: 18
        }
    }));
function EthereumERC20TokenApprovedBoundary(props) {
    const { children = null, amount, balance, spender, token, infiniteUnlockContent, contractName, showHelperToken = true, failedContent, callback } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes } = useStyles(undefined, {
        props
    });
    const { account, chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: token?.chainId
    });
    const { data: tokenBalance } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, token?.address, {
        chainId
    });
    const { data: spenders, isLoading: spendersLoading, isError, refetch } = (0,useFungibleTokenSpenders/* useFungibleTokenSpenders */.D)(PluginID/* NetworkPluginID */.F.PLUGIN_EVM, {
        chainId,
        account
    });
    const approveAmount = balance || tokenBalance || amount;
    const [{ type: approveStateType, allowance }, transactionState, approveCallback] = (0,useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S)(token?.address ?? '', approveAmount, spender ?? '', ()=>{
        callback?.();
        refetch();
    }, token?.chainId);
    const approved = (0,react.useMemo)(()=>{
        if ((0,number/* isGte */.sK)(allowance, amount)) return true;
        if (!token?.address || !spenders?.length) return false;
        return spenders.some((x)=>{
            return (0,isSameAddress/* isSameAddress */.W)(x.tokenInfo.address, token.address) && (0,isSameAddress/* isSameAddress */.W)(x.address, spender) && (0,number/* isGte */.sK)((0,number/* rightShift */.pu)(x.amount || 0, x.tokenInfo.decimals || token.decimals), amount);
        });
    }, [
        allowance,
        amount,
        spenders,
        token?.address,
        token?.decimals,
        spender
    ]);
    const loading = spendersLoading || approveStateType === useERC20TokenApproveCallback/* ApproveStateType */.i.UPDATING || transactionState.loadingApprove || transactionState.loading;
    const onApprove = (0,react.useCallback)(async ()=>{
        if (approved || loading) return;
        await approveCallback(true);
    }, [
        approved,
        loading,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    if (isError) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>refetch(),
        ...props.ActionButtonProps,
        children: failedContent ?? t.wallet_load_retry({
            symbol: token.symbol ?? token.name ?? 'Token'
        })
    });
    if (loading || !approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        loading: loading,
        className: classes.button,
        fullWidth: true,
        variant: "contained",
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
            className: classes.icon,
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            disableDefaultIcon: true
        }),
        endIcon: showHelperToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: t.plugin_wallet_token_infinite_unlock_tips({
                provider: contractName ?? '',
                symbol: token.symbol
            }),
            placement: "top",
            arrow: true,
            leaveDelay: 2000,
            disableInteractive: true,
            disableFocusListener: true,
            disableTouchListener: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HelpOutline, {
                className: classes.helpIcon
            })
        }) : null,
        onClick: onApprove,
        ...props.ActionButtonProps,
        children: infiniteUnlockContent ?? t.plugin_wallet_token_infinite_unlock({
            symbol: token.symbol
        })
    });
    if (approved) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approved);
}


/***/ }),

/***/ 93301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43204);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme, { size, rounded }, refs)=>({
        optimistic: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        container: {
            width: size ?? '100%',
            height: size ?? '100%',
            position: 'relative',
            borderRadius: rounded ? '50%' : undefined,
            overflow: rounded ? 'hidden' : undefined
        },
        image: {
            display: 'block'
        },
        failImage: {
            width: 30,
            height: 30
        },
        center: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        failed: {
            [`&.${refs.center}`]: {
                background: theme.palette.mode === 'light' ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)' : 'linear-gradient(180deg, #202020 0%, #181818 100%)'
            }
        }
    }));
const MASK_DARK_FALLBACK = new URL(/* asset import */ __webpack_require__(44365), __webpack_require__.b).href;
const MASK_LIGHT_FALLBACK = new URL(/* asset import */ __webpack_require__(34656), __webpack_require__.b).href;
function Image({ fallback, size, rounded, disableSpinner, classes: extraClasses, onClick, containerProps, ...rest }) {
    const { classes, cx } = useStyles({
        size,
        rounded
    }, {
        props: {
            classes: extraClasses
        }
    });
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (rest.src && !failed) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.optimistic, containerProps?.className),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                className: classes.image,
                width: size,
                height: size,
                ...rest,
                src: rest.src,
                onError: ()=>setFailed(true)
            })
        });
    }
    if (fallback && !(fallback instanceof URL) && typeof fallback !== 'string') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            ...containerProps,
            className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
            children: fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ...containerProps,
        className: cx(classes.container, classes.failed, classes.center, containerProps?.className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            loading: "lazy",
            decoding: "async",
            width: size,
            height: size,
            ...rest,
            src: fallback?.toString() ?? (theme.palette.mode === 'dark' ? MASK_DARK_FALLBACK : MASK_LIGHT_FALLBACK),
            className: cx(classes.image, classes.failImage, classes.fallbackImage)
        })
    });
}


/***/ }),

/***/ 95621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TokenIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54246);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61811);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62649);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39333);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81755);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28236);








const TokenIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function TokenIcon(props) {
    const { pluginID = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID */ .F.PLUGIN_EVM, chainId: propChainId, address, logoURL, symbol, tokenType = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.Fungible, disableDefaultIcon, name, ...rest } = props;
    const { data: token } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleToken */ .c)(pluginID, address, undefined, {
        chainId: propChainId
    });
    const { chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_5__/* .useChainContext */ .ql)({
        chainId: props.chainId
    });
    const Hub = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Hub */ .h)(pluginID);
    const isNFT = tokenType === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .TokenType */ .iv.NonFungible;
    const { data } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__/* .useQuery */ .a)({
        queryKey: [
            'token-icon',
            chainId,
            address,
            isNFT
        ],
        enabled: !logoURL,
        queryFn: async ()=>{
            const logoURLs = isNFT ? (()=>{
                throw new Error("Unreachable: it used to call Hub.getNonFungibleTokenIconURLs, but it's default implementation is throw an error, and not override by any subclass.");
            })() : await Hub.getFungibleTokenIconURLs(chainId, address).catch(()=>[]);
            return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(logoURLs);
        }
    });
    if (data && disableDefaultIcon) return null;
    const text = token?.name || token?.symbol || symbol || name || '?';
    // `?` prevent to fallback to avatar icon
    const url = logoURL || token?.logoURL || data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_9__/* .Icon */ .J, {
        ...rest,
        logoURL: url,
        name: text
    });
});


/***/ }),

/***/ 24981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ WalletConnectedBoundary)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWallet.ts
var useWallet = __webpack_require__(98170);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(5480);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useRiskWarningApproved.ts



function useRiskWarningApproved(pluginID) {
    const { RiskWarning } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    return (0,use_subscription.useSubscription)(RiskWarning?.approved ?? Subscriptions/* FALSE */.Dv);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/WalletConnectedBoundary/index.tsx









const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    button: {
        margin: 0
    }
});
function WalletConnectedBoundary(props) {
    const { children = null, offChain = false, hideRiskWarningConfirmed = false, expectedChainId } = props;
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const { pluginID } = (0,useContext/* useNetworkContext */.gK)();
    const { account, chainId: chainIdValid } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: smartPayChainId } = (0,useAsync/* default */.Z)(async ()=>entry/* SmartPayBundler */.Pp.getSupportedChainId(), []);
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)(undefined, {
        chainId: chainIdValid
    });
    const approved = useRiskWarningApproved();
    const buttonClass = cx(classes.button, classes.connectWallet);
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        onClick: ()=>modals/* SelectProviderModal */.ge.open(),
        ...props.ActionButtonProps,
        children: t.plugin_wallet_connect_a_wallet()
    });
    if (!approved && !hideRiskWarningConfirmed && pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            modals/* WalletRiskWarningModal */.L5.open({
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t.plugin_wallet_confirm_risk_warning()
    });
    if (!(wallet?.owner && chainIdValid === smartPayChainId) && (0,number/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: nativeTokenBalance.loading ? t.plugin_wallet_update_gas_fee() : t.plugin_wallet_no_gas_fee()
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t.plugin_wallet_invalid_network()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 98748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78909);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme, props)=>({
        root: {
            position: 'relative',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block'
        },
        badgeIcon: {
            position: 'absolute',
            right: -6,
            bottom: -4,
            border: `1px solid ${props.badgeIconBorderColor ?? theme.palette.common.white}`,
            borderRadius: '50%'
        }
    }));
function WalletIcon(props) {
    const { size = 24, badgeSize = 14, mainIcon, badgeIcon, badgeIconBorderColor, iconFilterColor } = props;
    const { classes } = useStyles({
        size: badgeSize > size ? badgeSize : size,
        badgeIconBorderColor
    }, {
        props: {
            classes: props.classes
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            mainIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.mainIcon,
                size: size,
                icon: mainIcon,
                iconFilterColor: iconFilterColor
            }) : null,
            badgeIcon ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .ImageIcon */ .X, {
                className: classes.badgeIcon,
                size: badgeSize,
                icon: badgeIcon
            }) : null
        ]
    });
}


/***/ }),

/***/ 19717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ usePersonaProofs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66584);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52033);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65734);




function usePersonaProofs(publicKey) {
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'next-id',
            'bindings-by-persona',
            publicKey
        ],
        queryFn: async ()=>{
            if (_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Sniffings */ .Y.is_popup_page) await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            const binding = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.queryExistedBindingByPersona(publicKey);
            return binding?.proofs ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP;
        }
    });
    const { refetch } = result;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages */ .q.events.ownProofChanged.on(async ()=>{
            // Clearing the query cache when the proof relation changes
            if (publicKey) {
                await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .NextIDProof */ .q7.clearPersonaQueryCache(publicKey);
            }
            refetch();
        });
    }, [
        publicKey
    ]);
    return result;
}


/***/ }),

/***/ 50502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92384);
/* harmony import */ var _ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26909);


const ShadowRootPopper = (0,_ShadowRoot_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
ShadowRootPopper.displayName = 'ShadowRootTooltip';


/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);


function useChainIdValid(pluginID, expectedChainId) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: expectedChainId
    });
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    return (!account || Others.chainResolver.isValidChainId?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 98658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useFireflyLensAccounts)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);


function useFireflyLensAccounts(twitterId, isVerified) {
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            'firefly',
            'lens',
            twitterId,
            isVerified
        ],
        enabled: !!twitterId,
        queryFn: ()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Firefly */ .EV.getLensByTwitterId(twitterId, isVerified)
    });
}


/***/ }),

/***/ 54246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useFungibleToken)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92358);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39333);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65327);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72889);







function useFungibleToken(pluginID, address, fallbackToken, options) {
    const { chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        chainId,
        ...options
    });
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworks */ .e)(pluginID);
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .useQuery */ .a)({
        enabled: true,
        queryKey: [
            'fungible-token',
            pluginID,
            address,
            chainId,
            options
        ],
        queryFn: async ()=>{
            if (!address) return;
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .attemptUntil */ .C)([
                async ()=>{
                    if (pluginID !== _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM || !(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .isNativeTokenAddress */ .qw)(address) || !chainId) return;
                    const network = networks.find((x)=>x.chainId === chainId);
                    return network?.nativeCurrency;
                },
                async ()=>{
                    const token = await Hub.getFungibleToken(address, {
                        chainId
                    });
                    if (!token) return;
                    const logoURL = token.logoURL ?? fallbackToken?.logoURL;
                    const symbol = token.symbol === 'UNKNOWN' || !token.symbol ? fallbackToken?.symbol : token.symbol;
                    return {
                        ...token,
                        symbol,
                        logoURL
                    };
                }
            ], fallbackToken);
        }
    });
}


/***/ }),

/***/ 88572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39333);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96732);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83977);







function useFungibleTokenBalance(pluginID, address, options, /** Allow to control the request */ enabled = true) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    const { BalanceNotifier } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(pluginID);
    const result = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useQuery */ .a)({
        enabled,
        queryKey: [
            'fungible-token',
            'balance',
            pluginID,
            account,
            address,
            options
        ],
        queryFn: async ()=>{
            if (!address) return '0';
            return Web3.getFungibleTokenBalance(address, undefined, options);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return BalanceNotifier?.emitter.on('update', (ev)=>{
            if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .W)(account, ev.account)) {
                result.refetch();
            }
        }) ?? lodash_es__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
    }, [
        account,
        result.refetch,
        BalanceNotifier
    ]);
    return result;
}


/***/ }),

/***/ 54165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ useFungibleTokenSpenders)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61811);



function useFungibleTokenSpenders(pluginID, options) {
    const { account, chainId } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    const Hub = (0,_useWeb3Hub_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Hub */ .h)(pluginID, {
        account,
        chainId,
        ...options
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'fungible-tokens',
            'spenders',
            chainId,
            account
        ],
        enabled: true,
        queryFn: async ()=>Hub.getFungibleTokenSpenders(chainId, account)
    });
}


/***/ }),

/***/ 66117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77219);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96732);



function useNativeTokenBalance(pluginID, options) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_0__/* .useChainContext */ .ql)({
        account: options?.account
    });
    const Web3 = (0,_useWeb3Connection_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Connection */ .T)(pluginID, {
        account,
        ...options
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return Web3.getNativeTokenBalance();
    }, [
        account,
        Web3
    ]);
}


/***/ }),

/***/ 20701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


/**
 * Get built in declared network descriptor
 * @param expectedPluginID
 * @param expectedChainIdOrNetworkTypeOrID
 * @returns
 */ function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    const { networkType } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getRegisteredWeb3Networks */ .Rm)(pluginID).find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes(expectedChainIdOrNetworkTypeOrID ?? networkType ?? ''));
}


/***/ }),

/***/ 98170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74765);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _useWallets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41238);




/**
 * Use the currently selected wallet.
 * @param pluginID
 * @returns
 */ function useWallet(pluginID, providerType) {
    const { account } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)();
    const wallets = (0,_useWallets_js__WEBPACK_IMPORTED_MODULE_2__/* .useWallets */ .r)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .W)?.(x.address, account)) ?? null : null;
    }, [
        account,
        wallets
    ]);
}


/***/ }),

/***/ 95685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ useContract)
/* harmony export */ });
/* unused harmony export useContracts */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52033);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95739);




/**
 * Create a contract which will forward its all transactions to the
 * EthereumService in the background page and decode the result of calls automatically
 * @param address
 * @param ABI
 * @param chainId
 */ function useContract(chainId, address = '', ABI = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_LIST */ .rP) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .createContract */ .O)(_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.getWeb3({
            chainId
        }), address, ABI), [
        address,
        ABI
    ]);
}
/**
 * Create many contracts with same ABI
 * @param listOfAddress
 * @param ABI
 * @param chainId
 */ function useContracts(chainId, listOfAddress = EMPTY_LIST, ABI = EMPTY_LIST) {
    return useMemo(()=>listOfAddress.map((address)=>createContract(Web3.getWeb3({
                chainId
            }), address, ABI)).filter(Boolean), [
        JSON.stringify(listOfAddress),
        ABI
    ]);
}


/***/ }),

/***/ 61918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39333);



function useERC20TokenAllowance(address, spender, options) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_1__/* .useChainContext */ .ql)({
        account: options?.account,
        chainId: options?.chainId
    });
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .useQuery */ .a)({
        queryKey: [
            'erc20-allowance',
            address,
            account,
            spender
        ],
        queryFn: async ()=>{
            if (!account || !address || !spender) return '0';
            return _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .Contract */ .CH.getERC20Contract(address, {
                chainId
            })?.methods.allowance(account, spender).call({
                from: account
            });
        },
        refetchInterval: 30 * 1000
    });
}


/***/ }),

/***/ 13414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useERC20TokenApproveCallback),
/* harmony export */   i: () => (/* binding */ ApproveStateType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82897);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29763);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14162);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88572);
/* harmony import */ var _useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61918);







const MaxUint256 = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender, callback, tokenChainId) {
    const { account, chainId } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_3__/* .useChainContext */ .ql)();
    // read the approved information from the chain
    const { data: balance = '0', isLoading: loadingBalance, error: errorBalance, refetch: revalidateBalance } = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenBalance */ .V)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID */ .F.PLUGIN_EVM, address, {
        chainId: tokenChainId
    });
    const { data: allowance = '0', isLoading: loadingAllowance, error: errorAllowance, refetch: revalidateAllowance } = (0,_useERC20TokenAllowance_js__WEBPACK_IMPORTED_MODULE_6__/* .useERC20TokenAllowance */ .n)(address, spender, {
        chainId: tokenChainId
    });
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isLessThan */ .FI)(allowance, amount) || allowance === amount && (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .isZero */ .Fr)(amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance
    ]);
    const [state, approveCallback] = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async (useExact = false, isRevoke = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED && !isRevoke) {
            return;
        }
        if (tokenChainId !== chainId) {
            await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.switchChain?.(tokenChainId ?? chainId);
        }
        const hash = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.approveFungibleToken(address, spender, useExact ? amount : MaxUint256, {
            chainId: tokenChainId
        });
        const receipt = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .Web3 */ .Bv.confirmTransaction(hash, {
            chainId: tokenChainId,
            signal: AbortSignal.timeout(5 * 60 * 1000)
        });
        if (receipt) {
            callback?.();
            revalidateBalance();
            revalidateAllowance();
        }
    }, [
        account,
        amount,
        spender,
        address,
        approveStateType,
        tokenChainId,
        chainId
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
    }, [
        revalidateBalance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        {
            ...state,
            loading: loadingAllowance || loadingBalance || state.loading,
            loadingApprove: state.loading
        },
        approveCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 61635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1d8aedc387bdb622faaf.svg";

/***/ }),

/***/ 70577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/31ecc268d6bc0ac27f74.png";

/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ })

}]);
//# sourceMappingURL=chunk.7436.js.map