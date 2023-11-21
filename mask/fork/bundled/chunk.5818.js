"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5818],{

/***/ 45818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SiteAdaptor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/types/SocialIdentity.ts
var SocialIdentity = __webpack_require__(45569);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-providers/src/types/RSS3.ts
var RSS3 = __webpack_require__(83838);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/plugins/RSS3/src/base.ts + 7 modules
var base = __webpack_require__(84203);
// EXTERNAL MODULE: ./packages/plugins/RSS3/src/constants.ts
var constants = __webpack_require__(94614);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/range.js + 2 modules
var range = __webpack_require__(81951);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(82124);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/ScopedDomains/index.tsx
var ScopedDomains = __webpack_require__(38050);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(94715);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/locales/i18n_generated.ts
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
function useRSS3Trans() /**
      * `$t(token_operation$mint)`
      */ /**
      * `$t(token_operation$burn)`
      */ /**
      * `$t(token_operation$deposit)`
      */ /**
      * `$t(token_operation$withdraw)`
      */ /**
      * `{{- value}} {{- symbol}}`
      */ /**
      * `{{- from_value}} {{from_symbol}} for {{- to_value}} {{to_symbol}}`
      */ /**
      * `Original`
      */ /**
      * `Details`
      */ /**
      * `There’s no feed associated with this address.`
      */ /**
      * `There’s no feed associated with this address.`
      */ /**
      * `There’s no feed associated with this address.`
      */ /**
      * - no_data$activities: `There’s no feed associated with this address.`
    
      * - no_data$donation: `There’s no feed associated with this address.`
    
      * - no_data$social: `There’s no feed associated with this address.`
      */ {
    const { t } = (0,es/* useTranslation */.$G)("bio.rss3");
    return (0,react.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>(0,react.createElement)(es/* Trans */.cC, {
            i18nKey,
            ns: "bio.rss3",
            shouldUnescape: true,
            ...props
        });
}
const RSS3Trans = /**
      * `<to>{{to}}</to> minted <bold>{{value}} {{symbol}}</bold>`
      */ /**
      * `<from>{{from}}</from> sent to <to>{{to}}</to>`
      */ /**
      * `<to>{{to}}</to> claimed from <from>{{from}}</from>`
      */ /**
      * `<from>{{from}}</from> burned <bold>{{value}} {{symbol}}</bold>`
      */ /**
      * `<from>{{from}}</from> deposited on <bold>{{exchange}}</bold>`
      */ /**
      * `<from>{{from}}</from> withdrew on <bold>{{exchange}}</bold>`
      */ /**
      * `<from>{{from}}</from> sent to <to>{{to}}</to> for <bold>{{value}} {{symbol}}</bold>`
      */ /**
      * `<to>{{to}}</to> claimed from <from>{{from}}</from> for <bold>{{value}} {{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> staked <bold>{{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> claimed <bold>{{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> unstaked <bold>{{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> approved <bold>{{- amount}} {{symbol}}</bold> to <bold>{{contract}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> revoked the approval of <bold>{{- amount}} {{symbol}}</bold> to <bold>{{contract}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> approved <bold>{{- amount}} {{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> revoked the approval of <bold>{{- amount}} {{symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> approved {{collection}} to <bold>{{contract}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> revoked the approval of {{collection}} to <bold>{{contract}}</bold>`
      */ /**
      * `<user>{{user}}</user> supplied liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> added liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> repaid liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> withdrew liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> collected liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> removed liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> borrowed liquidity on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> swapped on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> swapped <bold>{{- from_value}} {{from_symbol}}</bold> for <bold>{{- to_value}} {{to_symbol}}</bold> on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> bridged <bold>{{- amount}} {{symbol}}</bold> from <platform>{{source}}</platform> to <platform>{{target}}</platform>`
      */ /**
      * `<user>{{user}}</user> registered <ens>{{ens}}</ens> for <cost>{{cost_value}} {{cost_symbol}}</cost>`
      */ /**
      * `<user>{{user}}</user> minted <collectible>{{collectible}}</collectible> for <cost>{{cost_value}} {{cost_symbol}}</cost>`
      */ /**
      * `<user>{{user}}</user> minted <collectible>{{collectible}}</collectible>`
      */ /**
      * `<user>{{user}}</user> sent <collectible>{{collectible}}</collectible> to <other>{{other}}</other>`
      */ /**
      * `<user>{{user}}</user> claimed <collectible>{{collectible}}</collectible> from <other>{{other}}</other>`
      */ /**
      * `$t(collectible_operation$claim) for <cost>{{cost_value}} {{cost_symbol}}</cost>`
      */ /**
      * `<bold>{{user}}</bold> sold <collectible>{{collectible}}</collectible> to <recipient>{{recipient}}</recipient> for <bold>{{cost_value}} {{cost_symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> sold <collectible>{{collectible}}</collectible> to <recipient>{{recipient}}</recipient> for <bold>{{cost_value}} {{cost_symbol}}</bold> on <bold>{{platform}}</bold>`
      */ /**
      * `<user>{{user}}</user> burned <collectible>{{collectible}}</collectible>`
      */ /**
      * `<bold>{{user}}</bold> carried out an activity to <bold>{{target}}</bold> on <bold>{{platform}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> donated <bold>{{cost_value}} {{cost_symbol}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> donated <bold>{{cost_value}} {{cost_symbol}}</bold> to <bold>{{project}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> posted a note on <bold>{{platform}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> minted a note on <bold>{{platform}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> revised a note on <bold>{{platform}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> made a comment on <bold>{{platform}}</bold>`
      */ /**
      * `<bold>{{user}}</bold> shared a note on <bold>{{platform}}</bold>`
      */ /**
      * `<user>{{user}}</user> created a profile on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> updated a profile on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> followed <other>{{other}}</other> on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> unfollowed <other>{{other}}</other> on <platform>{{platform}}</platform>`
      */ /**
      * `<user>{{user}}</user> appointed a proxy on <platform>{{platform}}</platform>`
      */ /**
      * `<bold>{{user}}</bold> voted for <bold>{{- option}}</bold> on <bold>{{- platform }}</bold>`
      */ /**
      * `<bold>{{user}}</bold> proposed`
      */ /**
      * - token_operation$mint: `<to>{{to}}</to> minted <bold>{{value}} {{symbol}}</bold>`
    
      * - token_operation$send: `<from>{{from}}</from> sent to <to>{{to}}</to>`
    
      * - token_operation$claim: `<to>{{to}}</to> claimed from <from>{{from}}</from>`
    
      * - token_operation$burn: `<from>{{from}}</from> burned <bold>{{value}} {{symbol}}</bold>`
    
      * - token_operation$deposit: `<from>{{from}}</from> deposited on <bold>{{exchange}}</bold>`
    
      * - token_operation$withdraw: `<from>{{from}}</from> withdrew on <bold>{{exchange}}</bold>`
      */ /**
      * - token_operation_verbose$mint: `$t(token_operation$mint)`
    
      * - token_operation_verbose$send: `<from>{{from}}</from> sent to <to>{{to}}</to> for <bold>{{value}} {{symbol}}</bold>`
    
      * - token_operation_verbose$claim: `<to>{{to}}</to> claimed from <from>{{from}}</from> for <bold>{{value}} {{symbol}}</bold>`
    
      * - token_operation_verbose$burn: `$t(token_operation$burn)`
    
      * - token_operation_verbose$deposit: `$t(token_operation$deposit)`
    
      * - token_operation_verbose$withdraw: `$t(token_operation$withdraw)`
      */ /**
      * - token_staking$stake: `<bold>{{user}}</bold> staked <bold>{{symbol}}</bold>`
    
      * - token_staking$claim: `<bold>{{user}}</bold> claimed <bold>{{symbol}}</bold>`
    
      * - token_staking$unstake: `<bold>{{user}}</bold> unstaked <bold>{{symbol}}</bold>`
      */ /**
      * - token_approval$approve: `<bold>{{user}}</bold> approved <bold>{{- amount}} {{symbol}}</bold> to <bold>{{contract}}</bold>`
    
      * - token_approval$revoke: `<bold>{{user}}</bold> revoked the approval of <bold>{{- amount}} {{symbol}}</bold> to <bold>{{contract}}</bold>`
      */ /**
      * - token_approval_verbose$approve: `<bold>{{user}}</bold> approved <bold>{{- amount}} {{symbol}}</bold>`
    
      * - token_approval_verbose$revoke: `<bold>{{user}}</bold> revoked the approval of <bold>{{- amount}} {{symbol}}</bold>`
      */ /**
      * - collectible_approval$approve: `<bold>{{user}}</bold> approved {{collection}} to <bold>{{contract}}</bold>`
    
      * - collectible_approval$revoke: `<bold>{{user}}</bold> revoked the approval of {{collection}} to <bold>{{contract}}</bold>`
      */ /**
      * - liquidity$supply: `<user>{{user}}</user> supplied liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$add: `<user>{{user}}</user> added liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$repay: `<user>{{user}}</user> repaid liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$withdraw: `<user>{{user}}</user> withdrew liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$collect: `<user>{{user}}</user> collected liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$remove: `<user>{{user}}</user> removed liquidity on <platform>{{platform}}</platform>`
    
      * - liquidity$borrow: `<user>{{user}}</user> borrowed liquidity on <platform>{{platform}}</platform>`
      */ /**
      * - token_swap$normal: `<user>{{user}}</user> swapped on <platform>{{platform}}</platform>`
    
      * - token_swap$verbose: `<user>{{user}}</user> swapped <bold>{{- from_value}} {{from_symbol}}</bold> for <bold>{{- to_value}} {{to_symbol}}</bold> on <platform>{{platform}}</platform>`
      */ /**
      * - collectible_mint$cost: `<user>{{user}}</user> minted <collectible>{{collectible}}</collectible> for <cost>{{cost_value}} {{cost_symbol}}</cost>`
    
      * - collectible_mint$no_cost: `<user>{{user}}</user> minted <collectible>{{collectible}}</collectible>`
      */ /**
      * - collectible_operation$send: `<user>{{user}}</user> sent <collectible>{{collectible}}</collectible> to <other>{{other}}</other>`
    
      * - collectible_operation$claim: `<user>{{user}}</user> claimed <collectible>{{collectible}}</collectible> from <other>{{other}}</other>`
    
      * - collectible_operation$claim_cost: `$t(collectible_operation$claim) for <cost>{{cost_value}} {{cost_symbol}}</cost>`
      */ /**
      * - collectible_trade$no_platform: `<bold>{{user}}</bold> sold <collectible>{{collectible}}</collectible> to <recipient>{{recipient}}</recipient> for <bold>{{cost_value}} {{cost_symbol}}</bold>`
    
      * - collectible_trade$platform: `<bold>{{user}}</bold> sold <collectible>{{collectible}}</collectible> to <recipient>{{recipient}}</recipient> for <bold>{{cost_value}} {{cost_symbol}}</bold> on <bold>{{platform}}</bold>`
      */ /**
      * - note$post: `<bold>{{user}}</bold> posted a note on <bold>{{platform}}</bold>`
    
      * - note$mint: `<bold>{{user}}</bold> minted a note on <bold>{{platform}}</bold>`
    
      * - note$revise: `<bold>{{user}}</bold> revised a note on <bold>{{platform}}</bold>`
    
      * - note$comment: `<bold>{{user}}</bold> made a comment on <bold>{{platform}}</bold>`
    
      * - note$share: `<bold>{{user}}</bold> shared a note on <bold>{{platform}}</bold>`
      */ /**
      * - profile$create: `<user>{{user}}</user> created a profile on <platform>{{platform}}</platform>`
    
      * - profile$update: `<user>{{user}}</user> updated a profile on <platform>{{platform}}</platform>`
      */ /**
      * - profile_link$follow: `<user>{{user}}</user> followed <other>{{other}}</other> on <platform>{{platform}}</platform>`
    
      * - profile_link$unfollow: `<user>{{user}}</user> unfollowed <other>{{other}}</other> on <platform>{{platform}}</platform>`
      */ /*#__PURE__*/ createProxy(createComponent);

// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/formatter.ts
var formatter = __webpack_require__(41487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/contexts/FeedOwnerContext.tsx

/** ENS, RNS or SOL, etc */ const FeedOwnerContext = /*#__PURE__*/ (0,react.createContext)(null);
function useFeedOwner() {
    return (0,react.useContext)(FeedOwnerContext);
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/hooks/useAddressLabel.ts

function useAddressLabel(address, pluginID) {
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { getDomain } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    const { data } = (0,useReverseAddress/* useReverseAddress */.$)(pluginID, address);
    const domain = getDomain(address) || data;
    const formattedDomain = domain ? Others.formatDomainName(domain) : undefined;
    const label = formattedDomain || Others.formatAddress(address, 4) || address;
    return label;
}

// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(10149);
// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(21447);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/share.ts


var CardType;
(function(CardType) {
    CardType[CardType["AchievementBurn"] = 1] = "AchievementBurn";
    CardType[CardType["AchievementReceive"] = 2] = "AchievementReceive";
    CardType[CardType["CollectibleBurn"] = 3] = "CollectibleBurn";
    CardType[CardType["CollectibleIn"] = 4] = "CollectibleIn";
    CardType[CardType["CollectibleMint"] = 5] = "CollectibleMint";
    CardType[CardType["CollectibleOut"] = 6] = "CollectibleOut";
    CardType[CardType["CollectibleApproval"] = 7] = "CollectibleApproval";
    CardType[CardType["DonationDonate"] = 8] = "DonationDonate";
    CardType[CardType["DonationLaunch"] = 9] = "DonationLaunch";
    CardType[CardType["GovernancePropose"] = 10] = "GovernancePropose";
    CardType[CardType["GovernanceVote"] = 11] = "GovernanceVote";
    CardType[CardType["NoteCreate"] = 12] = "NoteCreate";
    CardType[CardType["NoteMint"] = 13] = "NoteMint";
    CardType[CardType["NoteEdit"] = 14] = "NoteEdit";
    CardType[CardType["NoteLink"] = 15] = "NoteLink";
    CardType[CardType["NoteBurn"] = 16] = "NoteBurn";
    CardType[CardType["ProfileBurn"] = 17] = "ProfileBurn";
    CardType[CardType["ProfileCreate"] = 18] = "ProfileCreate";
    CardType[CardType["ProfileUpdate"] = 19] = "ProfileUpdate";
    CardType[CardType["ProfileLink"] = 20] = "ProfileLink";
    CardType[CardType["ProfileProxy"] = 21] = "ProfileProxy";
    CardType[CardType["TokenMint"] = 22] = "TokenMint";
    CardType[CardType["TokenIn"] = 23] = "TokenIn";
    CardType[CardType["TokenLiquidity"] = 24] = "TokenLiquidity";
    CardType[CardType["TokenOut"] = 25] = "TokenOut";
    CardType[CardType["TokenStake"] = 26] = "TokenStake";
    CardType[CardType["TokenUnstake"] = 27] = "TokenUnstake";
    CardType[CardType["TokenSwap"] = 28] = "TokenSwap";
    CardType[CardType["TokenBridge"] = 29] = "TokenBridge";
    CardType[CardType["TokenBurn"] = 30] = "TokenBurn";
    CardType[CardType["TokenApproval"] = 31] = "TokenApproval";
    CardType[CardType["UnknownBurn"] = 32] = "UnknownBurn";
    CardType[CardType["UnknownCancel"] = 33] = "UnknownCancel";
    CardType[CardType["UnknownIn"] = 34] = "UnknownIn";
    CardType[CardType["UnknownOut"] = 35] = "UnknownOut";
})(CardType || (CardType = {}));
const cardTypeIconMap = {
    [CardType.AchievementBurn]: icon_generated_as_jsx.AchievementBurn,
    [CardType.AchievementReceive]: icon_generated_as_jsx.AchievementReceive,
    [CardType.CollectibleBurn]: icon_generated_as_jsx.CollectibleBurn,
    [CardType.CollectibleIn]: icon_generated_as_jsx.CollectibleIn,
    [CardType.CollectibleMint]: icon_generated_as_jsx.CollectibleMint,
    [CardType.CollectibleOut]: icon_generated_as_jsx.CollectibleOut,
    [CardType.CollectibleApproval]: icon_generated_as_jsx.CollectibleApprove,
    [CardType.DonationDonate]: icon_generated_as_jsx.DonationDonate,
    [CardType.DonationLaunch]: icon_generated_as_jsx.DonationLaunch,
    [CardType.GovernancePropose]: icon_generated_as_jsx.GovernancePropose,
    [CardType.GovernanceVote]: icon_generated_as_jsx.GovernanceVote,
    [CardType.NoteCreate]: icon_generated_as_jsx.NoteCreate,
    [CardType.NoteMint]: icon_generated_as_jsx.NoteMint,
    [CardType.NoteEdit]: icon_generated_as_jsx.NoteEdit,
    [CardType.NoteLink]: icon_generated_as_jsx.NoteLink,
    [CardType.NoteBurn]: icon_generated_as_jsx.NoteBurn,
    [CardType.ProfileBurn]: icon_generated_as_jsx.ProfileBurn,
    [CardType.ProfileCreate]: icon_generated_as_jsx.ProfileCreate,
    [CardType.ProfileUpdate]: icon_generated_as_jsx.ProfileUpdate,
    [CardType.ProfileLink]: icon_generated_as_jsx.ProfileLink,
    [CardType.ProfileProxy]: icon_generated_as_jsx.ProfileProxy,
    [CardType.TokenMint]: icon_generated_as_jsx.TokenMint,
    [CardType.TokenIn]: icon_generated_as_jsx.TokenIn,
    [CardType.TokenLiquidity]: icon_generated_as_jsx.TokenLiquidity,
    [CardType.TokenOut]: icon_generated_as_jsx.TokenOut,
    [CardType.TokenStake]: icon_generated_as_jsx.TokenStake,
    [CardType.TokenUnstake]: icon_generated_as_jsx.TokenUnstake,
    [CardType.TokenSwap]: icon_generated_as_jsx.TokenSwap,
    [CardType.TokenBridge]: icon_generated_as_jsx.TokenBridge,
    [CardType.TokenBurn]: icon_generated_as_jsx.TokenBurn,
    [CardType.TokenApproval]: icon_generated_as_jsx.ApprovalApprove,
    [CardType.UnknownBurn]: icon_generated_as_jsx.UnknownBurn,
    [CardType.UnknownCancel]: icon_generated_as_jsx.UnknownCancel,
    [CardType.UnknownIn]: icon_generated_as_jsx.UnknownIn,
    [CardType.UnknownOut]: icon_generated_as_jsx.UnknownOut
};
const platformIconMap = {
    // Networks
    ethereum: icon_generated_as_jsx.ETH,
    binance_smart_chain: icon_generated_as_jsx.BSC,
    polygon: icon_generated_as_jsx.Polygon,
    xdai: icon_generated_as_jsx.Gnosis,
    arbitrum: icon_generated_as_jsx.Arbitrum,
    optimism: icon_generated_as_jsx.Optimism,
    fantom: icon_generated_as_jsx.Fantom,
    avalanche: icon_generated_as_jsx.Avalanche,
    zksync: icon_generated_as_jsx.ZkScan,
    // Platforms
    gitcoin: icon_generated_as_jsx.Gitcoin,
    mirror: icon_generated_as_jsx.Mirror,
    snapshot: icon_generated_as_jsx.Snapshot,
    uniswap: icon_generated_as_jsx.Uniswap,
    binance: icon_generated_as_jsx.BSC,
    lens: icon_generated_as_jsx.Lens,
    farcaster: icon_generated_as_jsx.Farcaster,
    crossbell: icon_generated_as_jsx.Crossbell,
    '0x': icon_generated_as_jsx.ZeroX,
    'ens registrar': null,
    crosssync: icon_generated_as_jsx.CrossSync,
    metamask: icon_generated_as_jsx.MetaMask,
    opensea: icon_generated_as_jsx.OpenSea,
    sushiswap: icon_generated_as_jsx.SushiSwap,
    pancakeswap: icon_generated_as_jsx.PancakeSwap,
    aave: icon_generated_as_jsx.Aave,
    'crossbell.io': icon_generated_as_jsx.Crossbell,
    xlog: icon_generated_as_jsx.XLog,
    'eip-1577': icon_generated_as_jsx.EIP1577,
    planet: icon_generated_as_jsx.Planet,
    arweave: icon_generated_as_jsx.Arweave
};
const getPlatformIcon = (platform)=>{
    if (!platform) return null;
    return platformIconMap[platform.toLowerCase()];
};
const hostIconMap = {
    'etherscan.io': icon_generated_as_jsx.EtherScan,
    'opensea.io': icon_generated_as_jsx.OpenSea,
    'polygonscan.com': icon_generated_as_jsx.PolygonScan,
    'crossbell.io': icon_generated_as_jsx.Crossbell,
    'scan.crossbell.io': icon_generated_as_jsx.Crossbell,
    'lenster.xyz': icon_generated_as_jsx.Lens,
    'looksrare.org': icon_generated_as_jsx.LooksRare,
    'gitcoin.co': icon_generated_as_jsx.Gitcoin,
    'bscscan.com': icon_generated_as_jsx.BSC,
    'zkscan.io': icon_generated_as_jsx.ZkScan,
    'mirror.xyz': icon_generated_as_jsx.Mirror,
    'ipfs.io': icon_generated_as_jsx.IPFS,
    'snapshot.org': icon_generated_as_jsx.Snapshot,
    'momoka.lens.xyz': icon_generated_as_jsx.Momoka
};
const hostNameMap = {
    'etherscan.io': 'Etherscan',
    'opensea.io': 'Opensea',
    'polygonscan.com': 'Polygonscan',
    'crossbell.io': 'Crossbell',
    'scan.crossbell.io': 'Crossbell Scan',
    'lenster.xyz': 'Lenster',
    'looksrare.org': 'LooksRare',
    'gitcoin.co': 'Gitcoin',
    'bscscan.com': 'BscScan',
    'zkscan.io': 'ZkScan',
    'ipfs.io': 'IPFS',
    'snapshot.org': 'Snapshot',
    'mirror.xyz': 'Mirror',
    'momoka.lens.xyz': 'Momoka'
};
function getLastAction(feed) {
    return feed.actions.at(-1);
}
/**
 * Get cost from multiple actions.
 * We used to get it from the last action, but it might not always exists in
 * the last action.
 */ function getCost(feed) {
    for (const action of feed.actions){
        if (action.metadata?.cost) {
            return action.metadata.cost;
        }
    }
    return null;
}
const ONE_MIN = 60 * 1000;
const ONE_HOUR = 60 * ONE_MIN;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_WEEK = 7 * ONE_DAY;
const plural = (num, unit)=>`${num} ${unit}${num !== 1 ? 's' : ''}`;
/**
 * A datetime formatter follows RSS3's
 */ function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const ms = date.getTime();
    const distance = Date.now() - ms;
    if (distance > ONE_WEEK) {
        return (0,format/* default */.Z)(date, 'MM/dd/yyyy');
    }
    if (distance > ONE_DAY) {
        const days = Math.floor(distance / ONE_DAY);
        return plural(days, 'day');
    }
    if (distance > ONE_HOUR) {
        const hours = Math.floor(distance / ONE_HOUR);
        return plural(hours, 'hr');
    }
    const mins = Math.floor(distance / ONE_MIN);
    return plural(mins, 'min');
}
/**
 * @deprecated
 */ function transformPlanetResource(markdown, base) {
    return markdown.replaceAll(/(<img [^>]*)\bsrc=("|')([^"']*)\2([^>]*>)/gi, (match, before, quotation, url, after)=>{
        if (url.match(/^https?:\/\//)) return match;
        return `${before}src=${quotation}https://thumbor.rss3.dev/unsafe/${base}/${url}${quotation}${after}`;
    }).replaceAll(/(!\[.*?])\((.*?)\)/g, (match, head, url)=>{
        if (url.match(/^https?:\/\//)) return match;
        return `${head}(https://thumbor.rss3.dev/unsafe/${base}/${url})`;
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/SingletonModal/index.ts
var SingletonModal = __webpack_require__(62384);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/modals/modals.tsx

const FeedDetailsModal = new SingletonModal/* SingletonModal */.G();

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/base.tsx









/**
     * to specify action from the feed
     * for example donation feed. there might be multiple actions to render
     */ /**
     * verbose variant is
     * - not inspectable (not clickable)
     * - showing more details, including fee, and more other content, in different layout
     */ const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        inspectable: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.palette.maskColor.bg
            }
        },
        header: {
            display: 'flex'
        },
        fee: {
            display: 'flex',
            fontWeight: 400,
            fontSize: 12,
            borderRadius: '4px',
            backgroundColor: theme.palette.maskColor.bg,
            color: theme.palette.maskColor.third,
            height: 20,
            padding: '0 4px',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: theme.spacing(1.5)
        },
        timestamp: {
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 400,
            color: theme.palette.maskColor.third
        },
        body: {
            marginTop: theme.spacing(1.5),
            flexGrow: 1
        },
        icon: {
            marginLeft: theme.spacing(1.5)
        }
    }));
function CardFrame({ type, feed, actionIndex, className, children, onClick, verbose, badge, ...rest }) {
    const { classes, cx } = useStyles();
    const CardIcon = cardTypeIconMap[type];
    const PrimaryPlatformIcon = getPlatformIcon(feed.network);
    const ProviderPlatformIcon = getPlatformIcon(feed.platform);
    const { map } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: cx(className, verbose ? null : classes.inspectable),
        onClick: (event)=>{
            onClick?.(event);
            if (!verbose) {
                FeedDetailsModal.open({
                    type,
                    scopedDomainsMap: map,
                    feed,
                    actionIndex
                });
            }
        },
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardIcon, {
                        width: 36,
                        height: 18
                    }),
                    verbose && feed.fee ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.fee,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Gas, {
                                size: 16
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                ml: "4px",
                                children: new bignumber/* BigNumber */.O(feed.fee).toFixed(6)
                            })
                        ]
                    }) : null,
                    ProviderPlatformIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderPlatformIcon, {
                        className: classes.icon,
                        height: 18,
                        width: "auto"
                    }) : null,
                    PrimaryPlatformIcon && PrimaryPlatformIcon !== ProviderPlatformIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PrimaryPlatformIcon, {
                        className: classes.icon,
                        height: 18,
                        width: "auto"
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
                        title: (0,format/* default */.Z)(new Date(feed.timestamp), 'yyyy-MM-dd HH:mm:ss'),
                        placement: "right",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.timestamp,
                            children: formatTimestamp(feed.timestamp)
                        })
                    }),
                    badge
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(47675);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/formatBalance.ts
var formatBalance = __webpack_require__(95325);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/common.tsx





const common_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        label: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1),
            fontWeight: 700,
            marginRight: theme.spacing(1),
            whiteSpace: 'nowrap',
            '&:first-of-type': {
                marginLeft: 0
            },
            '&:last-of-type': {
                marginRight: 0
            }
        },
        link: {
            color: theme.palette.maskColor.main,
            fontWeight: 700
        }
    }));
function Label({ className, ...rest }) {
    const { classes, cx } = common_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: cx(classes.label, className),
        component: "span",
        ...rest
    });
}
function AddressLabel({ address, pluginID, size, className, ...rest }) {
    const { classes, cx } = common_useStyles();
    return address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReversedAddress/* ReversedAddress */.i, {
        address: address,
        pluginID: pluginID,
        size: size,
        className: cx(classes.label, className),
        component: "span",
        ...rest
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
        className: className,
        ...rest
    });
}
const formatValue = (value)=>{
    if (!value) return '';
    return (0,formatBalance/* formatBalance */.a)(value.value, value.decimals, 5);
};
function LinkifyRender({ attributes, content }) {
    const { classes, cx } = common_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        ...attributes,
        className: cx(classes.link, attributes.className),
        children: content
    });
}
const LinkifyOptions = {
    target: '_blank',
    render: LinkifyRender
};
const htmlToPlain = (htmlString)=>{
    if (!htmlString) return htmlString;
    return htmlString.trimStart().replaceAll(/<[^>]+>/g, '');
};

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/CollectibleApprovalCard.tsx











const CollectibleApprovalCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700
        }
    }));
const { Tag, Type } = RSS3.RSS3BaseAPI;
function isCollectibleApprovalFeed(feed) {
    return feed.tag === Tag.Collectible && feed.type === Type.Approval;
}
/**
 * CollectibleApprovalCard.
 * Including:
 *
 * - CollectibleApproval
 */ function CollectibleApprovalCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = CollectibleApprovalCard_useStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const owner = useFeedOwner();
    const user = useAddressLabel(owner.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.CollectibleApproval,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_approval, {
                    values: {
                        user,
                        collection: metadata?.collection,
                        contract: (0,formatter/* formatEthereumAddress */.j8)(action.address_to, 4),
                        context: metadata?.action
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.value,
                    children: metadata.collection
                })
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/Image/index.tsx
var Image = __webpack_require__(93301);
// EXTERNAL MODULE: ./packages/theme/src/Components/TextOverflowTooltip/index.tsx
var TextOverflowTooltip = __webpack_require__(59134);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/isSameAddress.ts
var isSameAddress = __webpack_require__(74765);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/resolver.ts
var resolver = __webpack_require__(53007);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/CollectibleCard.tsx













const CollectibleCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        verbose: {},
        image: {
            img: {
                objectFit: 'cover'
            }
        },
        center: {},
        failedImage: {},
        soloImage: {
            // If only single image, place it center
            marginTop: theme.spacing(5)
        },
        body: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: theme.spacing(1.5),
            [`&.${refs.center}`]: {
                alignItems: 'center'
            },
            [`&.${refs.verbose}`]: {
                display: 'block',
                [`.${refs.image}`]: {
                    width: 552,
                    height: 'auto',
                    aspectRatio: 'auto'
                },
                [`.${refs.image}.${refs.failedImage}`]: {
                    height: 100,
                    width: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                },
                [`.${refs.info}`]: {
                    marginLeft: 0,
                    marginTop: theme.spacing(1.5)
                }
            },
            [`.${refs.image}`]: {
                width: 64,
                height: 64,
                aspectRatio: '1 / 1',
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0
            }
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            marginLeft: theme.spacing(1.5),
            overflow: 'auto'
        },
        title: {
            fontWeight: 700
        },
        subtitle: {
            fontWeight: 400,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
        },
        attributes: {
            display: 'grid',
            marginTop: theme.spacing(1.5),
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: theme.spacing(2, 2)
        },
        attribute: {
            backgroundColor: theme.palette.maskColor.bg,
            padding: theme.spacing(1.5),
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            flexGrow: 0,
            flexShrink: 0,
            overflow: 'hidden'
        },
        attributeType: {
            color: theme.palette.maskColor.second,
            textTransform: 'uppercase',
            fontSize: 14,
            fontWeight: 400
        },
        attributeValue: {
            color: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        }
    }));
const { Tag: CollectibleCard_Tag, Type: CollectibleCard_Type } = RSS3.RSS3BaseAPI;
function isCollectibleFeed(feed) {
    return feed.tag === CollectibleCard_Tag.Collectible && [
        CollectibleCard_Type.Mint,
        CollectibleCard_Type.Trade,
        CollectibleCard_Type.Transfer,
        CollectibleCard_Type.Burn
    ].includes(feed.type);
}
function isRegisteringENS(feed) {
    return feed.actions[1]?.platform === 'ENS Registrar';
}
/**
 * CollectibleCard
 * Including:
 *
 * - CollectibleIn
 * - CollectibleBurn
 * - CollectibleIn
 * - CollectibleMint
 * - CollectibleOut
 */ function CollectibleCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = CollectibleCard_useStyles();
    const user = useAddressLabel(feed.owner);
    const { metadata, cardType, summary } = (0,react.useMemo)(()=>{
        let action;
        let metadata;
        switch(feed.type){
            case CollectibleCard_Type.Mint:
                // If only one action, it should be free minting
                metadata = getLastAction(feed).metadata;
                return {
                    cardType: CardType.CollectibleMint,
                    metadata,
                    summary: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_mint, {
                        values: {
                            user,
                            collectible: verbose ? metadata.name : 'an NFT',
                            cost_value: formatValue(metadata?.cost),
                            cost_symbol: metadata?.cost?.symbol ?? '',
                            context: metadata?.cost ? 'cost' : 'no_cost'
                        },
                        components: {
                            user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                            cost: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                            collectible: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        }
                    })
                };
            case CollectibleCard_Type.Trade:
                action = getLastAction(feed);
                metadata = action.metadata;
                const cost = getCost(feed);
                return {
                    cardType: CardType.CollectibleOut,
                    metadata,
                    summary: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_trade, {
                        values: {
                            user,
                            collectible: verbose ? metadata.name : 'an NFT',
                            recipient: (0,formatter/* formatEthereumAddress */.j8)(action.address_to ?? '', 4),
                            cost_value: formatValue(cost),
                            cost_symbol: cost?.symbol ?? '',
                            platform: feed.platform,
                            context: feed.platform ? 'platform' : 'no_platform'
                        },
                        components: {
                            recipient: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressLabel, {
                                address: action.address_to
                            }),
                            bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                            collectible: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        }
                    })
                };
            case CollectibleCard_Type.Transfer:
                if (isRegisteringENS(feed)) {
                    return {
                        cardType: CardType.CollectibleIn,
                        metadata: feed.actions[1].metadata,
                        summary: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_register_ens, {
                            values: {
                                user,
                                ens: verbose ? feed.actions[1].metadata.name : 'an ENS',
                                cost_value: formatValue(feed.actions[0].metadata),
                                cost_symbol: feed.actions[0].metadata?.symbol ?? ''
                            },
                            components: {
                                user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                                cost: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                                ens: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                            }
                        })
                    };
                }
                action = getLastAction(feed);
                metadata = action.metadata;
                const standard = feed.actions[0].metadata?.standard;
                const costMetadata = standard && [
                    'Native',
                    'ERC-20'
                ].includes(standard) ? feed.actions[0].metadata : undefined;
                const isSending = (0,isSameAddress/* isSameAddress */.W)(feed.owner, action.address_from);
                const otherAddress = isSending ? action.address_to : action.address_from;
                return {
                    cardType: isSending ? CardType.CollectibleOut : CardType.CollectibleIn,
                    metadata,
                    summary: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_operation, {
                        values: {
                            user,
                            collectible: verbose ? metadata.name : 'an NFT',
                            other: (0,formatter/* formatEthereumAddress */.j8)(otherAddress ?? '', 4),
                            context: isSending ? 'send' : costMetadata ? 'claim_cost' : 'claim',
                            cost_value: formatValue(costMetadata),
                            cost_symbol: costMetadata?.symbol
                        },
                        components: {
                            user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                            other: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddressLabel, {
                                address: otherAddress
                            }),
                            collectible: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                            cost: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                        }
                    })
                };
            case CollectibleCard_Type.Burn:
                metadata = getLastAction(feed).metadata;
                return {
                    cardType: CardType.CollectibleBurn,
                    metadata,
                    summary: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.collectible_burn, {
                        values: {
                            user,
                            collectible: verbose ? metadata.name : 'an NFT'
                        },
                        components: {
                            user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                            collectible: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        }
                    })
                };
        }
        return {
            summary: '',
            cardType: CardType.CollectibleIn
        };
    }, [
        feed,
        user
    ]);
    const imageWidth = verbose ? '100%' : 64;
    const imageHeight = verbose ? 'auto' : 64;
    const attributes = metadata && 'attributes' in metadata ? metadata.attributes?.filter((x)=>x.trait_type) : [];
    const soloImage = verbose && !metadata?.description && !attributes?.length;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: cardType,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: summary
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.body, {
                    [classes.verbose]: verbose,
                    [classes.center]: !verbose && !metadata.description
                }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: cx(classes.image, soloImage ? classes.soloImage : undefined),
                            failed: classes.failedImage
                        },
                        src: (0,resolver/* resolveResourceURL */.Bl)(metadata.image),
                        width: imageWidth,
                        height: imageHeight
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.info,
                        children: [
                            verbose ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: metadata.name
                            }),
                            metadata.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.subtitle,
                                children: metadata.description
                            }) : null
                        ]
                    }),
                    verbose && attributes?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.attributes,
                        children: attributes.map((attribute)=>{
                            const value = Array.isArray(attribute.value) ? attribute.value.map((x)=>x.uri).join('\n') : attribute.value;
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.attribute,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.attributeType,
                                        children: attribute.trait_type
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextOverflowTooltip/* TextOverflowTooltip */.v, {
                                        title: value,
                                        as: ShadowRootTooltip/* ShadowRootTooltip */.p,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.attributeValue,
                                            children: value
                                        })
                                    })
                                ]
                            }, attribute.trait_type);
                        })
                    }) : null
                ]
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/Markdown/index.tsx + 44 modules
var Markdown = __webpack_require__(70564);
// EXTERNAL MODULE: ./node_modules/.pnpm/linkifyjs@4.1.1/node_modules/linkifyjs/dist/linkify.es.js
var linkify_es = __webpack_require__(81581);
;// CONCATENATED MODULE: ./node_modules/.pnpm/linkify-react@4.1.1_linkifyjs@4.1.1_react@0.0.0-experimental-0a360642d-20230711/node_modules/linkify-react/dist/linkify-react.es.js



/**
 * Given a string, converts to an array of valid React components
 * (which may include strings)
 * @param {string} str
 * @param {Options} opts
 * @param {{ [elementId: string]: number }} meta
 * @returns {React.ReactNodeArray}
 */
function stringToElements(str, opts, meta) {
  const tokens = (0,linkify_es/* tokenize */.wS)(str);
  const elements = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.t === 'nl' && opts.get('nl2br')) {
      const key = `__linkify-el-${meta.elementId++}`;
      elements.push(react.createElement('br', {
        key
      }));
    } else if (!token.isLink || !opts.check(token)) {
      // Regular text
      elements.push(token.toString());
    } else {
      let rendered = opts.render(token);
      if (!('key' in rendered.props)) {
        // Ensure generated element has unique key
        const key = `__linkify-el-${meta.elementId++}`;
        const props = linkify_es/* options */.YM.assign({
          key
        }, rendered.props);
        rendered = react.cloneElement(rendered, props);
      }
      elements.push(rendered);
    }
  }
  return elements;
}

// Recursively linkify the contents of the given React Element instance
/**
 * @template P
 * @template {string | React.JSXElementConstructor<P>} T
 * @param {React.ReactElement<P, T>} element
 * @param {Options} opts
 * @param {{ [elementId: string]: number }} meta
 * @returns {React.ReactElement<P, T>}
 */
function linkifyReactElement(element, opts, meta) {
  if (react.Children.count(element.props.children) === 0) {
    // No need to clone if the element had no children
    return element;
  }
  const children = [];
  react.Children.forEach(element.props.children, child => {
    if (typeof child === 'string') {
      // ensure that we always generate unique element IDs for keys
      children.push.apply(children, stringToElements(child, opts, meta));
    } else if (react.isValidElement(child)) {
      if (typeof child.type === 'string' && opts.ignoreTags.indexOf(child.type.toUpperCase()) >= 0) {
        // Don't linkify this element
        children.push(child);
      } else {
        children.push(linkifyReactElement(child, opts, meta));
      }
    } else {
      // Unknown element type, just push
      children.push(child);
    }
  });

  // Set a default unique key, copy over remaining props
  const key = `__linkify-el-${meta.elementId++}`;
  const newProps = linkify_es/* options */.YM.assign({
    key
  }, element.props);
  return react.cloneElement(element, newProps, children);
}

/**
 * @template P
 * @template {string | React.JSXElementConstructor<P>} T
 * @param {P & { as?: T, tagName?: T, options?: import('linkifyjs').Opts, children?: React.ReactNode}} props
 * @returns {React.ReactElement<P, T>}
 */
const Linkify = props => {
  // Copy over all non-linkify-specific props
  let linkId = 0;
  const defaultLinkRender = _ref => {
    let {
      tagName,
      attributes,
      content
    } = _ref;
    attributes.key = `__linkify-lnk-${linkId++}`;
    if (attributes.class) {
      attributes.className = attributes.class;
      delete attributes.class;
    }
    return react.createElement(tagName, attributes, content);
  };
  const newProps = {
    key: '__linkify-wrapper'
  };
  for (const prop in props) {
    if (prop !== 'options' && prop !== 'as' && prop !== 'tagName' && prop !== 'children') {
      newProps[prop] = props[prop];
    }
  }
  const opts = new linkify_es/* Options */.Ei(props.options, defaultLinkRender);
  const as = props.as || props.tagName || react.Fragment || 'span';
  const children = props.children;
  const element = react.createElement(as, newProps, children);
  return linkifyReactElement(element, opts, {
    elementId: 0
  });
};



;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/useMarkdownStyles.ts

/* eslint-disable tss-unused-classes/unused-classes */ const useMarkdownStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        markdown: {
            wordBreak: 'break-all',
            overflow: 'auto',
            img: {
                maxWidth: '100%'
            },
            a: {
                color: theme.palette.maskColor.highlight
            },
            pre: {
                overflow: 'auto'
            }
        }
    }));

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/CommentCard.tsx













const CommentCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        comment: {
            color: theme.palette.maskColor.main
        },
        image: {},
        failedImage: {},
        verbose: {},
        target: {
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${theme.palette.maskColor.line}`,
            padding: theme.spacing(1),
            borderRadius: 8,
            marginTop: theme.spacing(1.5),
            color: theme.palette.maskColor.main,
            [`.${refs.image}`]: {
                width: 64,
                height: 64,
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0,
                marginRight: theme.spacing(1.5)
            },
            [`&.${refs.verbose}`]: {
                display: 'block',
                [`.${refs.image}`]: {
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    marginTop: theme.spacing(1)
                },
                [`.${refs.image}.${refs.failedImage}`]: {
                    height: 100,
                    width: 100,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                },
                [`.${refs.content}`]: {
                    marginLeft: 0,
                    maxHeight: 'none',
                    display: 'block'
                }
            }
        },
        originalLabel: {
            fontSize: 14,
            color: theme.palette.maskColor.second
        },
        title: {
            fontSize: '16px',
            fontWeight: 700,
            margin: theme.spacing(0.5, 0)
        },
        content: {
            color: theme.palette.maskColor.main,
            whiteSpace: 'pre-wrap',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            wordBreak: 'break-all'
        }
    }));
const { Tag: CommentCard_Tag, Type: CommentCard_Type } = RSS3.RSS3BaseAPI;
function isCommentFeed(feed) {
    return feed.tag === CommentCard_Tag.Social && feed.type === CommentCard_Type.Comment;
}
/**
 * CommentCard
 * Including:
 *
 * - NoteLink
 */ function CommentCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = CommentCard_useStyles();
    const { classes: mdClasses } = useMarkdownStyles();
    const t = useRSS3Trans();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    const commentTarget = metadata?.target;
    const imageSize = verbose ? '100%' : 64;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.NoteLink,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.note, {
                    values: {
                        user,
                        platform: action.platform,
                        context: 'comment'
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.comment,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linkify, {
                    options: LinkifyOptions,
                    children: metadata?.body
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
                className: cx(classes.target, verbose ? classes.verbose : null),
                children: [
                    verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.originalLabel,
                        children: t.original()
                    }) : null,
                    commentTarget?.media?.[0].mime_type?.startsWith('image/') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: classes.image,
                            failed: classes.failedImage
                        },
                        src: (0,resolver/* resolveResourceURL */.Bl)(commentTarget.media[0].address),
                        height: imageSize,
                        width: imageSize
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            commentTarget?.title ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h1",
                                className: classes.title,
                                children: commentTarget?.title
                            }) : null,
                            verbose && commentTarget?.body ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                defaultStyle: false,
                                className: mdClasses.markdown,
                                children: commentTarget.body
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.content,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linkify, {
                                    options: LinkifyOptions,
                                    children: htmlToPlain(commentTarget?.body)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/Slider.tsx





const Slider_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        container: {},
        slider: {
            width: '100%'
        },
        sliderWrapper: {
            transition: 'transform 0.2s ease-in-out',
            display: 'flex'
        },
        slide: {
            width: '100%'
        },
        sliderControllers: {
            display: 'flex'
        },
        indicators: {
            display: 'flex',
            gap: 1.5,
            margin: 'auto',
            [`.${refs.active}`]: {
                backgroundColor: theme.palette.maskColor.second
            }
        },
        indicator: {
            width: 3,
            height: 3,
            display: 'inline-block',
            borderRadius: '50%',
            backgroundColor: theme.palette.maskColor.third
        },
        active: {}
    }));
function Slider({ children, className, onUpdate, ...rest }) {
    const containerRef = (0,react.useRef)(null);
    const { classes, cx } = Slider_useStyles();
    const [index, setIndex] = (0,react.useState)(0);
    const count = react.Children.count(children);
    const [style, setStyle] = (0,react.useState)({});
    (0,react.useLayoutEffect)(()=>{
        if (!containerRef.current) return;
        const offsetWidth = containerRef.current.offsetWidth;
        setStyle({
            width: offsetWidth * count,
            transform: `RSS3Trans(${-offsetWidth * index}px, 0)`
        });
    }, [
        count,
        index
    ]);
    (0,react.useEffect)(()=>{
        onUpdate?.(index);
    }, [
        onUpdate,
        index
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.container, className),
        ref: containerRef,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.slider,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.sliderWrapper,
                    style: style,
                    children: react.Children.map(children, (child, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.slide,
                            style: {
                                width: containerRef.current?.offsetWidth
                            },
                            children: child
                        }, index))
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.sliderControllers,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LeftArrow, {
                        size: 18,
                        onClick: (event)=>{
                            event.stopPropagation();
                            setIndex((idx)=>((idx - 1) % count + count) % count);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.indicators,
                        children: (0,range/* default */.Z)(count).map((idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("i", {
                                className: cx(classes.indicator, index === idx ? classes.active : null)
                            }, idx);
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                        size: 18,
                        onClick: (event)=>{
                            event.stopPropagation();
                            setIndex((idx)=>(idx + 1) % count);
                        }
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/DonationCard.tsx













const DonationCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        badge: {
            display: 'inline-block',
            height: 18,
            lineHeight: '18px',
            borderRadius: 4,
            marginLeft: theme.spacing(1.5),
            fontSize: 12,
            backgroundColor: theme.palette.maskColor.main,
            color: theme.palette.maskColor.bottom,
            padding: '0 6px'
        },
        summary: {
            color: theme.palette.maskColor.third
        },
        content: {
            marginTop: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '18px',
            color: theme.palette.maskColor.main,
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            alignItems: 'flex-start'
        },
        body: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            [`.${refs.image}`]: {
                width: 64,
                height: 64,
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0
            }
        },
        image: {
            img: {
                objectFit: 'cover'
            }
        },
        verbose: {
            [`.${refs.image}`]: {
                marginTop: theme.spacing(1),
                aspectRatio: 'auto'
            }
        },
        info: {
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            marginLeft: theme.spacing(1.5),
            height: 80
        },
        title: {
            fontWeight: 700,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        subtitle: {
            fontWeight: 400,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2
        }
    }));
const { Tag: DonationCard_Tag } = RSS3.RSS3BaseAPI;
function isDonationFeed(feed) {
    return feed.tag === DonationCard_Tag.Donation;
}
const CardBody = /*#__PURE__*/ (0,react.memo)(({ metadata, className, ...rest })=>{
    const { classes, cx } = DonationCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cx(classes.body, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                classes: {
                    container: classes.image
                },
                src: metadata.logo,
                height: 64,
                width: 64
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: metadata.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.subtitle,
                        children: metadata.description
                    })
                ]
            })
        ]
    });
});
/**
 * DonationCard
 * Including:
 *
 * - DonationDonate
 */ function DonationCard({ feed, actionIndex, className, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = DonationCard_useStyles();
    const { classes: mdClasses } = useMarkdownStyles();
    const [index, setIndex] = (0,react.useState)(0);
    const activeActionIndex = actionIndex ?? index;
    // Might mixin a transaction action
    const availableActions = feed.actions.filter((x)=>x.metadata?.title);
    const action = availableActions[activeActionIndex];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    const actionSize = feed.actions.length;
    const badge = actionSize > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.badge,
        children: [
            "+",
            actionSize
        ]
    }) : null;
    if (verbose) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
            type: CardType.DonationDonate,
            feed: feed,
            className: cx(rest.verbose ? classes.verbose : null, className),
            badge: badge,
            ...rest,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.summary,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.donation_donate_verbose, {
                        values: {
                            user,
                            cost_value: formatValue(metadata?.token),
                            cost_symbol: metadata?.token?.symbol ?? 'Unknown Token',
                            project: action.metadata?.title ?? 'Unknown Project'
                        },
                        components: {
                            bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                    classes: {
                        container: classes.image
                    },
                    src: metadata.logo,
                    width: "100%"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                    className: mdClasses.markdown,
                    defaultStyle: false,
                    children: metadata.description
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.DonationDonate,
        feed: feed,
        actionIndex: activeActionIndex,
        badge: badge,
        className: className,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.donation_donate, {
                    values: {
                        user,
                        cost_value: formatValue(metadata?.token),
                        cost_symbol: metadata?.token?.symbol ?? 'Unknown Token'
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            availableActions.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider, {
                className: classes.content,
                onUpdate: setIndex,
                children: availableActions.map((action, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                        metadata: action.metadata
                    }, index))
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CardBody, {
                className: classes.content,
                metadata: availableActions[0].metadata
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/LiquidityCard.tsx













const LiquidityCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        // helper box to center token list in horizontal direction
        horizonCenter: {},
        tokenList: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column'
        },
        verbose: {
            [`.${refs.horizonCenter}`]: {
                minHeight: 186,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`.${refs.tokenIcon}`]: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden'
            }
        },
        supply: {},
        withdraw: {},
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700,
            [`&.${refs.supply}`]: {
                color: theme.palette.maskColor.success
            },
            [`&.${refs.withdraw}`]: {
                color: theme.palette.maskColor.danger
            }
        }
    }));
const { Tag: LiquidityCard_Tag, Type: LiquidityCard_Type } = RSS3.RSS3BaseAPI;
function isLiquidityFeed(feed) {
    return feed.tag === LiquidityCard_Tag.Exchange && feed.type === LiquidityCard_Type.Liquidity;
}
/**
 * LiquidityCard.
 * Including:
 *
 * - TokenIn
 * - TokenOut
 * - UnknownBurn
 */ function LiquidityCard({ feed, className, ...rest }) {
    const { verbose } = rest;
    const t = useRSS3Trans();
    const { classes, cx } = LiquidityCard_useStyles();
    const owner = useFeedOwner();
    const user = useAddressLabel(owner.address);
    // You might see two transaction actions in a liquidity feed as well
    const actions = feed.actions.filter((x)=>x.tag === LiquidityCard_Tag.Exchange);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: actions.map((action)=>{
            const metadata = action.metadata;
            const isUp = !!metadata?.action && [
                'supply',
                'add',
                'repay',
                'collect'
            ].includes(metadata?.action);
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
                type: CardType.TokenLiquidity,
                feed: feed,
                className: cx(className, verbose ? classes.verbose : null),
                ...rest,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.summary,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.liquidity, {
                            values: {
                                user,
                                platform: feed.platform,
                                context: metadata?.action
                            },
                            components: {
                                user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                                    title: action.address_from
                                }),
                                platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                                bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                            }
                        })
                    }),
                    metadata?.tokens.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.horizonCenter,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.tokenList,
                            children: metadata.tokens.map((token)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.token,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                            classes: {
                                                container: classes.tokenIcon
                                            },
                                            src: (0,resolver/* resolveResourceURL */.Bl)(token.image),
                                            height: 40,
                                            width: 40
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: cx(classes.value, isUp ? classes.supply : classes.withdraw),
                                            children: [
                                                isUp ? '+ ' : '- ',
                                                t.token_value({
                                                    value: formatValue(token),
                                                    symbol: token.symbol
                                                })
                                            ]
                                        })
                                    ]
                                }, token.contract_address))
                        })
                    }) : null
                ]
            }, `${feed.hash}/${action.index}`);
        })
    });
}

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/hooks/usePublicationId.ts


function usePublicationId(txId) {
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            'lens',
            'transaction-publication-id',
            txId
        ],
        queryFn: async ()=>{
            if (!txId) return null;
            return entry/* Lens */.Ri.queryTransactionPublicationId(txId);
        }
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/NoteCard.tsx
















const NoteCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        title: {
            fontWeight: 700,
            marginTop: theme.spacing(1),
            color: theme.palette.maskColor.main
        },
        info: {},
        center: {
            display: 'flex',
            alignItems: 'center'
        },
        failedImage: {},
        soloImage: {
            // If only single image, place it center
            marginTop: theme.spacing(5),
            [`&.${refs.image}`]: {
                marginTop: theme.spacing(5)
            }
        },
        image: {
            [`& + .${refs.info}`]: {
                marginLeft: theme.spacing(1.5)
            },
            img: {
                objectFit: 'cover'
            }
        },
        playButton: {
            color: theme.palette.maskColor.main,
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            backgroundColor: theme.palette.maskColor.bg,
            [`& + .${refs.info}`]: {
                marginLeft: theme.spacing(1.5)
            }
        },
        body: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: theme.spacing(0.5),
            [`.${refs.image}`]: {
                width: 64,
                aspectRatio: '1 / 1',
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0
            }
        },
        content: {
            marginTop: theme.spacing(1),
            fontSize: 14,
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            maxHeight: 80,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            wordBreak: 'break-all'
        },
        verbose: {
            [`.${refs.title}`]: {
                lineHeight: '18px',
                marginBottom: theme.spacing(1.5)
            },
            [`.${refs.body}`]: {
                display: 'block'
            },
            [`.${refs.content}`]: {
                display: 'block',
                maxHeight: 'none',
                overflow: 'unset'
            },
            [`.${refs.image}`]: {
                width: 552,
                marginTop: theme.spacing(1.5),
                [`& + .${refs.info}`]: {
                    marginTop: theme.spacing(1.5),
                    marginLeft: 0
                },
                aspectRatio: 'auto',
                img: {
                    objectFit: 'unset'
                }
            },
            [`.${refs.image}.${refs.failedImage}`]: {
                height: 100,
                width: 100,
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            [`.${refs.info}`]: {
                marginLeft: 0
            },
            [`.${refs.playButton}`]: {
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }
    }));
const { Tag: NoteCard_Tag, Type: NoteCard_Type } = RSS3.RSS3BaseAPI;
function isNoteFeed(feed) {
    return feed.tag === NoteCard_Tag.Social && [
        NoteCard_Type.Post,
        NoteCard_Type.Revise,
        NoteCard_Type.Mint,
        NoteCard_Type.Share
    ].includes(feed.type);
}
const cardTypeMap = {
    [NoteCard_Type.Mint]: CardType.NoteMint,
    [NoteCard_Type.Post]: CardType.NoteCreate,
    [NoteCard_Type.Revise]: CardType.NoteEdit,
    [NoteCard_Type.Share]: CardType.NoteLink
};
const toHex = (num)=>{
    const str = num.toString(16);
    return str.length % 2 === 0 ? str : str.padStart(str.length + 1, '0');
};
function resolveDetailLink(publicationId, metadata, related_urls) {
    if (publicationId) return `https://lenstube.xyz/watch/${publicationId}`;
    if (!metadata) return null;
    const { profile_id, publication_id } = metadata;
    if (!profile_id || !publication_id || !related_urls?.length) return null;
    const pubId = `0x${toHex(profile_id)}-0x${toHex(publication_id)}`;
    return related_urls.find((x)=>x.toLowerCase().endsWith(pubId));
}
/**
 * NoteCard
 * Including:
 *
 * - NoteMint
 * - NoteCreate
 * - NoteEdit
 * - NoteLink
 */ function NoteCard({ feed, className, ...rest }) {
    const { classes, cx } = NoteCard_useStyles();
    const { classes: mdClasses } = useMarkdownStyles();
    // You might see a collectible action on a note minting feed
    const action = feed.actions.filter((x)=>x.tag === NoteCard_Tag.Social)[0];
    const metadata = 'target' in action.metadata ? action.metadata.target : action.metadata;
    const user = useAddressLabel(feed.owner);
    const type = action.type;
    const imageSize = rest.verbose ? '100%' : 64;
    const transformUri = (0,react.useCallback)((uri)=>{
        if (action.platform === 'Planet' && action.related_urls?.[0] && !uri.match(/^https?:\/\//)) return `https://thumbor.rss3.dev/unsafe/${action.related_urls[0]}/${uri}`;
        return (0,resolver/* resolveIPFS_URL */.mg)(uri);
    }, [
        action.platform,
        action.related_urls?.[0]
    ]);
    const media = metadata?.media?.[0];
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    const enablePublicationId = seen && !!media?.mime_type.startsWith('video/');
    const { data: publicationId, isLoading } = usePublicationId(enablePublicationId ? feed.hash : null);
    // Image post on Forcaster
    const isImagePost = metadata?.body ? /https?:\/\/.*?\.(jpg|png)$/.test(metadata.body) : false;
    const soloImage = rest.verbose && isImagePost;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: cardTypeMap[type],
        feed: feed,
        className: cx(rest.verbose ? classes.verbose : null, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.note, {
                    values: {
                        user,
                        platform: action.platform,
                        context: type
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.body,
                ref: ref,
                children: [
                    media?.mime_type.startsWith('image/') || isImagePost ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: cx(classes.image, soloImage ? classes.soloImage : undefined),
                            failed: classes.failedImage
                        },
                        src: isImagePost ? metadata.body : (0,resolver/* resolveResourceURL */.Bl)(media.address),
                        height: imageSize,
                        width: imageSize
                    }) : media?.mime_type.startsWith('video/') ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.playButton,
                        href: resolveDetailLink(publicationId, metadata, action.related_urls) || (0,resolver/* resolveResourceURL */.Bl)(media.address),
                        target: "_blank",
                        onClick: (evt)=>evt.stopPropagation(),
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                            size: 36
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Play, {
                            size: 64
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: cx(classes.info, metadata?.title || rest.verbose ? null : classes.center),
                        children: [
                            metadata?.title ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: metadata.title
                            }) : null,
                            isImagePost ? null : rest.verbose && metadata?.body ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                className: mdClasses.markdown,
                                defaultStyle: false,
                                transformLinkUri: transformUri,
                                transformImageUri: transformUri,
                                children: metadata.body
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.content,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linkify, {
                                    options: LinkifyOptions,
                                    children: htmlToPlain(metadata?.summary || metadata?.body)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(60307);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/LensAvatar.tsx



const LensAvatar = /*#__PURE__*/ (0,react.memo)(({ handle, size, className })=>{
    const id1 = (0,react.useMemo)(v4/* default */.Z, []);
    const id2 = (0,react.useMemo)(v4/* default */.Z, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size ?? 100,
        height: size ?? 100,
        className: className,
        fill: "none",
        viewBox: "0 0 450 450",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: id1,
                        x1: -137,
                        x2: 415,
                        y1: -236,
                        y2: 486,
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#fff"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: 1,
                                stopColor: "#fff",
                                stopOpacity: 0.2
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: id2,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: 450,
                            height: 450,
                            fill: "#fff",
                            rx: 16
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                clipPath: `url(#${id2})`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        fill: "#ABFE2C",
                        d: "M0 0h450v450H0z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        fill: "#00501e",
                        d: "m231.3 345.6.1.2-.3-67a113.6 113.6 0 0 0 99.7 58.6 115 115 0 0 0 48.9-10.8l-5.8-10a103.9 103.9 0 0 1-120.5-25.5l4.3 2.9a77 77 0 0 0 77.9 1l-5.7-10-2 1.1a66.4 66.4 0 0 1-96.5-54c19-1.1-30.8-1.1-12 .1a66.4 66.4 0 0 1-98.5 52.8l-5.7 10 2.4 1.2a76.1 76.1 0 0 0 79.8-5 103.9 103.9 0 0 1-120.6 25.5l-5.7 9.9a115 115 0 0 0 138.5-32.2c3.8-4.8 7.2-10 10-15.3l.6 66.9v-.4h11Z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        stroke: "#00501e",
                        strokeLinejoin: "round",
                        strokeWidth: 8.3,
                        d: "M241.6 182.8c-2.4 6.6-9.6 12.2-19.2 12.2-9.3 0-17.3-5.3-19.4-12.4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                        fill: "#00501e",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M187.3 158.6a11.9 11.9 0 1 1-23.8 0 11.9 11.9 0 0 1 23.8 0ZM271.1 158.6a11.9 11.9 0 1 1-23.8 0 11.9 11.9 0 0 1 23.8 0Z"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        stroke: "#00501e",
                        strokeLinejoin: "round",
                        strokeWidth: 8.3,
                        d: "M148.8 166.4c0-14.6 13.8-26.4 30.8-26.4s30.8 11.8 30.8 26.4m23.2 0c0-14.6 13.8-26.4 30.8-26.4s30.8 11.8 30.8 26.4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        stroke: "#00501e",
                        strokeMiterlimit: 10,
                        strokeWidth: 11.2,
                        d: "m279.1 100.3-3.2 3.3.1-4.6v-4.7c-1.8-65.4-100.3-65.4-102.1 0l-.1 4.7v4.6l-3.1-3.3-3.4-3.3C119.8 52 50 121.7 95 169.2l3.3 3.4c54.3 54.2 126.6 54.4 126.6 54.4s72.3-.2 126.5-54.4l3.3-3.4C399.7 121.7 330 52 282.5 97l-3.4 3.3Z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        fill: "#ABFE2C",
                        d: "M0 370h450v80H0z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("text", {
                        x: 225,
                        y: 410,
                        fill: "#00501E",
                        dominantBaseline: "middle",
                        fontFamily: "Space Grotesk",
                        fontSize: 24,
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAnchor: "middle",
                        children: [
                            "@",
                            handle
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                        width: 444,
                        height: 444,
                        x: 2.5,
                        y: 2.5,
                        stroke: `url(#${id1})`,
                        strokeWidth: 5,
                        rx: 13
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        fill: "#fff",
                        fillOpacity: 0.8,
                        d: "M70 423a14 14 0 0 1-13-1c2 1 5 1 8-1l-1-2h-1a9 9 0 0 1-8 0 9 9 0 0 1-4-6c3-1 11-2 17-8v-1a8 8 0 0 0 3-6c0-2-1-4-3-5-1-2-3-3-5-3l-5 1-3-4c-2-2-4-2-6-2s-4 0-5 2l-3 4-5-1-6 3-2 5a8 8 0 0 0 2 6l1 1c6 6 14 7 17 8a9 9 0 0 1-4 6 9 9 0 0 1-9 0l-2 2h1c2 2 5 2 8 1a14 14 0 0 1-13 1h-1l-1 2 1 1c3 1 7 2 10 1a16 16 0 0 0 10-6v6h3v-6a16 16 0 0 0 13 6l7-1 1-1-2-2Zm-27-29v-1c1-4 4-6 6-6 3 0 6 2 6 6v5l2-3h1v-1c3-2 6-1 8 0 2 2 3 6 0 8v1c-7 7-17 7-17 7s-9 0-16-7l-1-1c-3-2-2-6 0-8l4-1 4 1 1 1 3 3-1-4Z"
                    })
                ]
            })
        ]
    });
});
LensAvatar.displayName = 'LensAvatar';

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/ProfileCard.tsx












const ProfileCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        verbose: {},
        image: {},
        center: {},
        body: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: theme.spacing(1.5),
            [`&.${refs.center}`]: {
                alignItems: 'center'
            },
            [`&.${refs.verbose}`]: {
                display: 'block',
                [`.${refs.image}`]: {
                    width: 552
                },
                [`.${refs.info}`]: {
                    marginLeft: 0,
                    marginTop: theme.spacing(1.5)
                }
            },
            [`.${refs.image}`]: {
                width: 64,
                aspectRatio: '1 / 1',
                borderRadius: 8,
                overflow: 'hidden',
                flexShrink: 0
            }
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 14,
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            marginLeft: theme.spacing(1.5)
        },
        title: {
            fontWeight: 700
        },
        bio: {
            fontWeight: 400,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
        }
    }));
const { Tag: ProfileCard_Tag, Type: ProfileCard_Type } = RSS3.RSS3BaseAPI;
function isProfileFeed(feed) {
    return feed.tag === ProfileCard_Tag.Social && feed.type === ProfileCard_Type.Profile;
}
/**
 * ProfileCard
 * Including:
 *
 * - ProfileCreate
 */ function ProfileCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = ProfileCard_useStyles();
    const user = useAddressLabel(feed.owner);
    const action = feed.actions[0];
    const metadata = action.metadata;
    const imageSize = verbose ? '100%' : 64;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: metadata?.action === 'update' ? CardType.ProfileUpdate : CardType.ProfileCreate,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.profile, {
                    values: {
                        user,
                        platform: metadata?.platform,
                        context: metadata?.action
                    },
                    components: {
                        user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                        platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.body, {
                    [classes.verbose]: verbose,
                    [classes.center]: !metadata.bio && !verbose
                }),
                children: [
                    metadata.source === 'Lens' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LensAvatar, {
                        handle: metadata.handle,
                        size: imageSize
                    }) : metadata.profile_uri ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: classes.image
                        },
                        src: (0,resolver/* resolveResourceURL */.Bl)(metadata.profile_uri[0]),
                        height: imageSize,
                        width: imageSize
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: metadata.name || metadata.handle
                            }),
                            metadata.bio ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.bio,
                                children: metadata.bio
                            }) : null
                        ]
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/ProfileLinkCard.tsx












const ProfileLinkCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        body: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1.5),
            gap: theme.spacing(2)
        },
        verbose: {
            [`.${refs.body}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        user: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        name: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            fontSize: 14,
            marginLeft: theme.spacing(1)
        },
        image: {
            height: 32,
            width: 32,
            borderRadius: '50%',
            overflow: 'hidden'
        },
        avatar: {
            height: 32,
            width: 32
        }
    }));
const { Tag: ProfileLinkCard_Tag, Type: ProfileLinkCard_Type } = RSS3.RSS3BaseAPI;
function isProfileLinkFeed(feed) {
    return feed.tag === ProfileLinkCard_Tag.Social && [
        ProfileLinkCard_Type.Follow,
        ProfileLinkCard_Type.Unfollow
    ].includes(feed.type);
}
const suffixMap = {
    Crossbell: '.csb',
    Lens: '.lens',
    ENS: '.eth'
};
const resolveHandle = (metadata)=>{
    if (!metadata.handle) return '';
    const handle = metadata.handle.toLowerCase();
    const suffix = metadata.platform && suffixMap[metadata.platform] || '';
    // handle might contain suffix at this time.
    return handle.endsWith(suffix) ? handle : `${handle}${suffix}`;
};
/**
 * ProfileLinkCard
 * Including:
 *
 * - ProfileLink, aka Follow, Unfollow
 */ function ProfileLinkCard({ feed, className, ...rest }) {
    const { classes, cx } = ProfileLinkCard_useStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    const formattedUser = (0,formatter/* formatDomainName */.bc)(user, 16, true);
    const otherEns = useAddressLabel(metadata?.address ?? '');
    const other = metadata ? resolveHandle(metadata) : otherEns;
    const formattedOther = (0,formatter/* formatDomainName */.bc)(other, 16, true);
    const Icon = feed.type === 'follow' ? icon_generated_as_jsx.Follow : icon_generated_as_jsx.Unfollow;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.ProfileLink,
        feed: feed,
        className: cx(className, rest.verbose ? classes.verbose : null),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.profile_link, {
                    values: {
                        user: formattedUser,
                        other: formattedOther,
                        platform: feed.platform,
                        context: feed.type
                    },
                    components: {
                        user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: user,
                            fontSize: 14
                        }),
                        other: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: other,
                            fontSize: 14
                        }),
                        platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            fontSize: 14
                        })
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.body),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.user,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                className: classes.avatar,
                                classes: {
                                    container: classes.image
                                },
                                height: 32,
                                width: 32,
                                src: `https://cdn.stamp.fyi/avatar/${feed.owner}`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                title: user,
                                children: formattedUser
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                        height: 18,
                        width: 48
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.user,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                className: classes.avatar,
                                classes: {
                                    container: classes.image
                                },
                                src: `https://cdn.stamp.fyi/avatar/${metadata.address}`,
                                height: 32,
                                width: 32
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                title: other,
                                children: formattedOther
                            })
                        ]
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/ProfileProxy.tsx











const ProfileProxy_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        body: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1.5),
            gap: theme.spacing(2)
        },
        verbose: {
            [`.${refs.body}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        user: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        name: {
            color: theme.palette.maskColor.main,
            fontWeight: 700,
            marginLeft: theme.spacing(1)
        },
        image: {
            height: 32,
            width: 32,
            borderRadius: '50%',
            overflow: 'hidden'
        },
        avatar: {
            height: 32,
            width: 32
        }
    }));
const { Tag: ProfileProxy_Tag, Type: ProfileProxy_Type } = RSS3.RSS3BaseAPI;
function isProfileProxyFeed(feed) {
    return feed.tag === ProfileProxy_Tag.Social && feed.type === ProfileProxy_Type.Proxy;
}
/**
 * ProfileProxyCard
 * Including:
 *
 * - ProfileProxy
 */ function ProfileProxyCard({ feed, className, ...rest }) {
    const { classes, cx } = ProfileProxy_useStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.ProfileProxy,
        feed: feed,
        className: cx(className, rest.verbose ? classes.verbose : null),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.profile_proxy, {
                    values: {
                        user,
                        platform: feed.platform
                    },
                    components: {
                        user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {}),
                        platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.body),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.user,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                className: classes.avatar,
                                classes: {
                                    container: classes.image
                                },
                                height: 32,
                                width: 32,
                                src: `https://cdn.stamp.fyi/avatar/${feed.owner}`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: user
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Follow, {
                        height: 18,
                        width: 48
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/ProposeCard.tsx









const ProposeCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        title: {
            marginTop: theme.spacing(1),
            color: theme.palette.maskColor.main
        },
        content: {
            marginTop: theme.spacing(1),
            fontSize: 14,
            color: theme.palette.maskColor.main,
            lineHeight: '18px',
            marginLeft: theme.spacing(1.5),
            maxHeight: 80,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3
        }
    }));
const { Tag: ProposeCard_Tag, Type: ProposeCard_Type } = RSS3.RSS3BaseAPI;
function isProposeFeed(feed) {
    return feed.tag === ProposeCard_Tag.Governance && feed.type === ProposeCard_Type.Propose;
}
/**
 * ProposeCard
 * Including:
 *
 * - NoteCreate
 * - NoteEdit
 */ function ProposeCard({ feed, ...rest }) {
    const { classes } = ProposeCard_useStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.GovernancePropose,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.propose, {
                    values: {
                        user
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata?.title ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: metadata.title
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.content,
                children: metadata?.body
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/web3-shared/base/src/helpers/number.ts
var number = __webpack_require__(29763);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/TokenApprovalCard.tsx













const TokenApprovalCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`.${refs.tokenIcon}`]: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden'
            },
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700
        }
    }));
const { Tag: TokenApprovalCard_Tag, Type: TokenApprovalCard_Type } = RSS3.RSS3BaseAPI;
function isTokenApprovalFeed(feed) {
    return feed.tag === TokenApprovalCard_Tag.Transaction && feed.type === TokenApprovalCard_Type.Approval;
}
/**
 * TokenApprovalCard.
 * Including:
 *
 * - TokenApproval
 */ function TokenApprovalCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = TokenApprovalCard_useStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const owner = useFeedOwner();
    const user = useAddressLabel(owner.address);
    const amount = (0,number/* isGreaterThan */.T1)(metadata.value, '1e+10') ? 'infinite' : metadata?.value_display;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.TokenApproval,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_approval_verbose, {
                    values: {
                        user,
                        amount,
                        symbol: metadata.symbol,
                        context: metadata.action
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_approval, {
                    values: {
                        user,
                        amount: (0,number/* isGreaterThan */.T1)(metadata.value, '1e+10') ? 'infinite' : metadata?.value_display,
                        symbol: metadata.symbol,
                        contract: (0,formatter/* formatEthereumAddress */.j8)(action.address_to, 4),
                        context: metadata.action
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: classes.tokenIcon
                        },
                        src: metadata?.image,
                        height: 40,
                        width: 40
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.value,
                        children: `${amount} ${metadata.symbol}`
                    })
                ]
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/NetworkIcon/index.tsx
var NetworkIcon = __webpack_require__(21508);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/TokenBridgeCard.tsx












const TokenBridgeCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            color: theme.palette.maskColor.main,
            [`.${refs.tokenIcon}`]: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                overflow: 'hidden'
            },
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        tokenValue: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        bridgePair: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }));
const { Tag: TokenBridgeCard_Tag, Type: TokenBridgeCard_Type } = RSS3.RSS3BaseAPI;
function isTokenBridgeFeed(feed) {
    return feed.tag === TokenBridgeCard_Tag.Transaction && feed.type === TokenBridgeCard_Type.Bridge;
}
/**
 * TokenBridgeCard
 * Including:
 *
 * - TokenBridge
 */ function TokenBridgeCard({ feed, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = TokenBridgeCard_useStyles();
    // You might see some `transfer` type actions as well
    const action = feed.actions.filter((x)=>x.tag === TokenBridgeCard_Tag.Transaction && x.type === TokenBridgeCard_Type.Bridge)[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    const FromNetworkIcon = getPlatformIcon(feed.network) || icon_generated_as_jsx.ETH;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.TokenBridge,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_bridge, {
                    values: {
                        user,
                        amount: formatValue(metadata?.token),
                        symbol: metadata.token.symbol,
                        source: feed.network,
                        target: metadata.target_network.name
                    },
                    components: {
                        user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: feed.owner
                        }),
                        platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: feed.platform,
                            sx: {
                                textTransform: 'capitalize'
                            }
                        }),
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.bridgePair,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FromNetworkIcon, {
                            size: 32
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.tokenValue,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RSS3Link, {
                                    height: 2,
                                    width: 9
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                    classes: {
                                        container: classes.tokenIcon
                                    },
                                    src: metadata.token.image,
                                    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: metadata.token.image,
                                        className: classes.tokenIcon
                                    }),
                                    height: 18,
                                    width: 18
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    fontWeight: 700,
                                    mr: 1.5,
                                    children: [
                                        formatValue(metadata.token),
                                        " ",
                                        metadata.token.symbol
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RSS3Link, {
                                    height: 2,
                                    width: 9
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                            pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                            chainId: metadata.target_network.chain_id,
                            size: 32
                        })
                    ]
                })
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/TokenOperationCard.tsx













const TokenOperationCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`.${refs.tokenIcon}`]: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden'
            },
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700
        }
    }));
const { Tag: TokenOperationCard_Tag, Type: TokenOperationCard_Type } = RSS3.RSS3BaseAPI;
function isTokenOperationFeed(feed) {
    const isTxTag = feed.tag === TokenOperationCard_Tag.Transaction && [
        TokenOperationCard_Type.Transfer,
        TokenOperationCard_Type.Burn,
        TokenOperationCard_Type.Mint
    ].includes(feed.type);
    const isExchangeTag = feed.tag === TokenOperationCard_Tag.Exchange && [
        TokenOperationCard_Type.Deposit,
        TokenOperationCard_Type.Withdraw
    ].includes(feed.type);
    return isTxTag || isExchangeTag;
}
const TokenOperationCard_cardTypeMap = {
    [TokenOperationCard_Type.Burn]: CardType.TokenBurn,
    [TokenOperationCard_Type.Mint]: CardType.TokenMint,
    [TokenOperationCard_Type.Withdraw]: CardType.TokenIn,
    [TokenOperationCard_Type.Deposit]: CardType.TokenOut
};
const contextMap = {
    [TokenOperationCard_Type.Burn]: TokenOperationCard_Type.Burn,
    [TokenOperationCard_Type.Mint]: TokenOperationCard_Type.Mint,
    [TokenOperationCard_Type.Withdraw]: TokenOperationCard_Type.Withdraw,
    [TokenOperationCard_Type.Deposit]: TokenOperationCard_Type.Deposit
};
/**
 * TokenOperationCard.
 * Including:
 *
 * - TokenMint
 * - TokenIn
 * - TokenOut
 * - TokenBurn
 */ function TokenOperationCard({ feed, ...rest }) {
    const { verbose } = rest;
    const t = useRSS3Trans();
    const { classes, cx } = TokenOperationCard_useStyles();
    const action = feed.actions.find((x)=>x.address_from && x.address_to) || feed.actions[0];
    const metadata = action.metadata;
    const owner = useFeedOwner();
    const isFromOwner = (0,isSameAddress/* isSameAddress */.W)(owner.address, action.address_from);
    const cardType = TokenOperationCard_cardTypeMap[feed.type] || (isFromOwner ? CardType.TokenOut : CardType.TokenIn);
    const context = contextMap[feed.type] || (isFromOwner ? 'send' : 'claim');
    const from = useAddressLabel(action.address_from ?? '');
    const to = useAddressLabel(action.address_to ?? '');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: cardType,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_operation_verbose, {
                    values: {
                        from,
                        to,
                        value: formatValue(metadata),
                        symbol: metadata.symbol,
                        /* eslint-disable-next-line  @typescript-eslint/ban-ts-comment */ // @ts-ignore
                        exchange: action.platform,
                        context
                    },
                    components: {
                        from: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: action.address_from
                        }),
                        to: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: action.address_to
                        }),
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_operation, {
                    values: {
                        from,
                        to,
                        value: formatValue(metadata),
                        symbol: metadata.symbol,
                        exchange: action.platform,
                        context
                    },
                    components: {
                        from: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: action.address_from
                        }),
                        to: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: action.address_to
                        }),
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: classes.tokenIcon
                        },
                        src: metadata?.image,
                        height: 40,
                        width: 40
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.value,
                        children: t.token_value({
                            value: formatValue(metadata),
                            symbol: metadata.symbol
                        })
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/TokenSwapCard.tsx











const TokenSwapCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`.${refs.tokenIcon}`]: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                overflow: 'hidden'
            },
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        iconStack: {
            display: 'flex',
            [`.${refs.tokenIcon}:not(:first-of-type)`]: {
                marginLeft: -7
            }
        },
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700
        }
    }));
const { Tag: TokenSwapCard_Tag, Type: TokenSwapCard_Type } = RSS3.RSS3BaseAPI;
function isTokenSwapFeed(feed) {
    return feed.tag === TokenSwapCard_Tag.Exchange && feed.type === TokenSwapCard_Type.Swap;
}
/**
 * TokenSwapCard
 * Including:
 *
 * - TokenSwap
 */ function TokenSwapCard({ feed, ...rest }) {
    const { verbose } = rest;
    const t = useRSS3Trans();
    const { classes, cx } = TokenSwapCard_useStyles();
    // You might see some `transfer` type actions as well
    const action = feed.actions.filter((x)=>x.tag === TokenSwapCard_Tag.Exchange && x.type === TokenSwapCard_Type.Swap)[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.TokenSwap,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_swap, {
                    values: {
                        user,
                        from_value: formatValue(metadata?.from),
                        from_symbol: metadata?.from.symbol ?? 'Unknown Token',
                        to_value: formatValue(metadata?.to),
                        to_symbol: metadata?.to.symbol ?? 'Unknown Token',
                        platform: feed.platform,
                        context: verbose ? 'verbose' : 'normal'
                    },
                    components: {
                        user: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: feed.owner
                        }),
                        platform: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                            title: feed.platform
                        }),
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.iconStack,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                classes: {
                                    container: classes.tokenIcon
                                },
                                src: metadata.from.image,
                                fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: metadata.from.image,
                                    className: classes.tokenIcon
                                }),
                                height: 32,
                                width: 32
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                classes: {
                                    container: classes.tokenIcon
                                },
                                src: metadata.to.image,
                                fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: metadata.to.image,
                                    className: classes.tokenIcon
                                }),
                                height: 32,
                                width: 32
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.value,
                        children: t.token_swap_pair({
                            from_value: formatValue(metadata.from),
                            from_symbol: metadata.from.symbol,
                            to_value: formatValue(metadata.to),
                            to_symbol: metadata.to.symbol
                        })
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/VoteCard.tsx













const VoteCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        verbose: {
            [`.${refs.summary}`]: {
                whiteSpace: 'normal',
                overflow: 'visible',
                span: {
                    whiteSpace: 'normal'
                }
            }
        },
        summary: {
            fontSize: 14,
            color: theme.palette.maskColor.third,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        title: {
            marginTop: theme.spacing(1.5),
            color: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px'
        },
        content: {
            color: theme.palette.maskColor.main,
            whiteSpace: 'pre-wrap',
            maxHeight: '3em',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
        }
    }));
const { Tag: VoteCard_Tag, Type: VoteCard_Type } = RSS3.RSS3BaseAPI;
function isVoteFeed(feed) {
    return feed.tag === VoteCard_Tag.Governance && feed.type === VoteCard_Type.Vote;
}
/**
 * DonationCard
 * Including:
 *
 * - NoteCreate
 * - NoteEdit
 */ function VoteCard({ feed, className, ...rest }) {
    const { verbose } = rest;
    const { classes, cx } = VoteCard_useStyles();
    const { classes: mdClasses } = useMarkdownStyles();
    const action = feed.actions[0];
    const metadata = action.metadata;
    const user = useAddressLabel(feed.owner);
    const option = (0,react.useMemo)(()=>{
        if (!metadata?.choice) return '';
        const { choice, proposal } = metadata;
        const choices = /^\[.*?]$/.test(choice) ? JSON.parse(choice) : [
            Number.parseInt(choice, 10)
        ];
        return choices.map((no)=>proposal.options[no - 1]).join(', ');
    }, [
        metadata?.choice,
        metadata?.proposal
    ]);
    if (!metadata) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: CardType.GovernanceVote,
        feed: feed,
        className: cx(className, verbose ? classes.verbose : null),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.vote, {
                    values: {
                        user,
                        option,
                        platform: action.platform
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata.proposal ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: metadata.proposal.title
                    }),
                    verbose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                        className: mdClasses.markdown,
                        defaultStyle: false,
                        children: metadata.proposal.body
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linkify, {
                            options: LinkifyOptions,
                            children: htmlToPlain(metadata.proposal.body)
                        })
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/UnknownCard.tsx










const UnknownCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        summary: {
            color: theme.palette.maskColor.third
        }
    }));
function UnknownCard({ feed, ...rest }) {
    const { classes, theme } = UnknownCard_useStyles();
    const action = feed.actions[0];
    const user = useAddressLabel(feed.owner);
    const targetUser = useAddressLabel(feed.address_to);
    const owner = useFeedOwner();
    const isFromOwner = (0,isSameAddress/* isSameAddress */.W)(owner.address, action.address_from);
    const cardType = isFromOwner ? CardType.UnknownOut : CardType.UnknownIn;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: cardType,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.carry_out_activity, {
                    values: {
                        user,
                        target: targetUser,
                        platform: feed.platform
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
             false ? /*#__PURE__*/ 0 : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/StakingCard.tsx













const StakingCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, _, refs)=>({
        summary: {
            color: theme.palette.maskColor.third
        },
        tokenIcon: {},
        verboseToken: {},
        token: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing(1),
            [`.${refs.tokenIcon}`]: {
                width: 40,
                height: 40,
                borderRadius: '50%',
                overflow: 'hidden'
            },
            [`&.${refs.verboseToken}`]: {
                height: 186,
                justifyContent: 'center'
            }
        },
        value: {
            color: theme.palette.maskColor.main,
            marginLeft: theme.spacing(1.5),
            fontSize: 14,
            fontWeight: 700
        }
    }));
const { Tag: StakingCard_Tag, Type: StakingCard_Type } = RSS3.RSS3BaseAPI;
function isStakingFeed(feed) {
    return feed.tag === StakingCard_Tag.Exchange && feed.type === StakingCard_Type.Staking;
}
/**
 * StakingCard.
 * Including:
 *
 * - TokenStake
 * - TokenUnstake
 */ function StakingCard({ feed, ...rest }) {
    const { verbose } = rest;
    const t = useRSS3Trans();
    const { classes, cx } = StakingCard_useStyles();
    const action = feed.actions.find((x)=>x.type === StakingCard_Type.Staking);
    const metadata = action?.metadata;
    const owner = useFeedOwner();
    const user = useAddressLabel(owner.address);
    const cardType = metadata?.action === 'stake' ? CardType.TokenStake : CardType.TokenUnstake;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardFrame, {
        type: cardType,
        feed: feed,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.summary,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RSS3Trans.token_staking, {
                    values: {
                        user,
                        symbol: metadata?.token?.symbol,
                        context: metadata?.action
                    },
                    components: {
                        bold: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {})
                    }
                })
            }),
            metadata ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.token, verbose ? classes.verboseToken : null),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        classes: {
                            container: classes.tokenIcon
                        },
                        src: (0,resolver/* resolveResourceURL */.Bl)(metadata?.token.image),
                        height: 40,
                        width: 40
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.value,
                        children: t.token_value({
                            value: formatValue(metadata.token),
                            symbol: metadata.token?.symbol
                        })
                    })
                ]
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/components/FeedCard/index.tsx



















const FeedCard = /*#__PURE__*/ (0,react.memo)(({ feed, ...rest })=>{
    if (isTokenOperationFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenOperationCard, {
        feed: feed,
        ...rest
    });
    if (isTokenSwapFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSwapCard, {
        feed: feed,
        ...rest
    });
    if (isLiquidityFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LiquidityCard, {
        feed: feed,
        ...rest
    });
    if (isStakingFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(StakingCard, {
        feed: feed,
        ...rest
    });
    if (isCollectibleFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard, {
        feed: feed,
        ...rest
    });
    if (isDonationFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(DonationCard, {
        feed: feed,
        ...rest
    });
    if (isNoteFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(NoteCard, {
        feed: feed,
        ...rest
    });
    if (isCommentFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentCard, {
        feed: feed,
        ...rest
    });
    if (isProfileFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileCard, {
        feed: feed,
        ...rest
    });
    if (isProfileLinkFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileLinkCard, {
        feed: feed,
        ...rest
    });
    if (isProposeFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProposeCard, {
        feed: feed,
        ...rest
    });
    if (isVoteFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(VoteCard, {
        feed: feed,
        ...rest
    });
    if (isTokenApprovalFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenApprovalCard, {
        feed: feed,
        ...rest
    });
    if (isCollectibleApprovalFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleApprovalCard, {
        feed: feed,
        ...rest
    });
    if (isTokenBridgeFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenBridgeCard, {
        feed: feed,
        ...rest
    });
    if (isProfileProxyFeed(feed)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileProxyCard, {
        feed: feed,
        ...rest
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnknownCard, {
        feed: feed,
        ...rest
    });
});
FeedCard.displayName = 'FeedCard';

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
var useInfiniteQuery = __webpack_require__(86886);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var src_constants = __webpack_require__(52033);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/hooks/useFeeds.ts




function useFeeds(address, tag) {
    const { data, isLoading, error, fetchNextPage } = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        enabled: !!address,
        queryKey: [
            'rss3-feeds',
            address,
            tag
        ],
        queryFn: async ({ pageParam })=>{
            const res = await entry/* RSS3 */.S5.getAllNotes(address, {
                tag
            }, {
                indicator: pageParam,
                size: 20
            });
            return res;
        },
        getNextPageParam: (lastPage)=>lastPage?.nextIndicator
    });
    const feeds = (0,react.useMemo)(()=>{
        if (!data?.pages) return src_constants/* EMPTY_LIST */.rP;
        return data.pages.flatMap((page)=>page.data);
    }, [
        data?.pages
    ]);
    return {
        feeds,
        isLoading,
        error: error,
        next: fetchNextPage
    };
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/FeedsPage.tsx











const FeedsPage_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        feedCard: {
            padding: theme.spacing(2, 2, 1)
        },
        loading: {
            color: theme.palette.maskColor.main
        }
    }));
const FeedsPage = /*#__PURE__*/ (0,react.memo)(function FeedsPage({ address, tag }) {
    const t = useRSS3Trans();
    const { classes } = FeedsPage_useStyles();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const { feeds, isLoading: loadingFeeds, error, next } = useFeeds(address, tag);
    const { data: reversedName, isLoading: loadingENS } = (0,useReverseAddress/* useReverseAddress */.$)(undefined, address);
    const { getDomain } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    const loading = loadingFeeds || loadingENS;
    const name = address ? getDomain(address) || reversedName : reversedName;
    const feedOwner = (0,react.useMemo)(()=>{
        if (!address) return;
        return {
            address,
            name,
            ownerDisplay: name ? Others.formatDomainName(name) : Others.formatAddress(address, 4) ?? address
        };
    }, [
        address,
        name,
        Others.formatDomainName,
        Others.formatAddress
    ]);
    if (error && !feeds.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        p: 2,
        boxSizing: "border-box",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            mt: "100px",
            color: (theme)=>theme.palette.maskColor.main,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadRetry/* RetryHint */.u, {
                retry: next
            })
        })
    });
    if (loading && !feeds.length || !feedOwner) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            p: 2,
            boxSizing: "border-box",
            children: (0,range/* default */.Z)(3).map((i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    mb: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        height: 125
                    })
                }, i))
        });
    }
    if (!feeds.length && !loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
            height: 260,
            children: t.no_data({
                context: tag || 'activities'
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedOwnerContext.Provider, {
        value: feedOwner,
        children: /* padding for profile card footer */ /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            paddingBottom: "48px",
            children: [
                feeds.map((feed, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FeedCard, {
                        className: classes.feedCard,
                        feed: feed
                    }, index)),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                    callback: ()=>next(),
                    children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {
                        className: classes.loading
                    }) : null
                })
            ]
        })
    });
});

// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useSingletonModal.ts
var useSingletonModal = __webpack_require__(72385);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/Linking.tsx
var Linking = __webpack_require__(32147);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/parseURL.ts
var parseURL = __webpack_require__(38506);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/modals/DetailsModal/DetailDialog.tsx













const DetailDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        detailsDialog: {
            width: 600,
            minHeight: 400,
            maxHeight: 620,
            backgroundImage: 'none'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: theme.spacing(3)
        },
        details: {
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            '::-webkit-scrollbar-thumb': {}
        },
        card: {
            flexGrow: 1
        },
        links: {
            display: 'flex',
            gap: theme.spacing(1.5),
            marginTop: 'auto',
            flexShrink: 0,
            flexGrow: 0,
            paddingTop: theme.spacing(2)
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            height: 24,
            textDecoration: 'none',
            color: theme.palette.maskColor.highlight
        },
        linkLabel: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '22px',
            marginLeft: theme.spacing(1)
        }
    }));
function FeedDetailsDialog({ type, feed, onClose, actionIndex, ...rest }) {
    const t = useRSS3Trans();
    const { classes } = DetailDialog_useStyles();
    const links = feed.actions[0].related_urls;
    const address = feed.owner || feed.address_from || feed.actions[0].address_from || '';
    const { data: reversedName } = (0,useReverseAddress/* useReverseAddress */.$)(undefined, address);
    const { getDomain } = ScopedDomains/* ScopedDomainsContainer */.h.useContainer();
    const name = address ? getDomain(address) || reversedName : reversedName;
    const feedOwner = (0,react.useMemo)(()=>{
        return {
            address,
            name,
            ownerDisplay: name ? entry/* Others */.ej.formatDomainName(name) : entry/* Others */.ej.formatAddress(feed.owner, 4) ?? address
        };
    }, [
        address,
        name,
        entry/* Others */.ej.formatDomainName,
        entry/* Others */.ej.formatAddress,
        feed.owner
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedOwnerContext.Provider, {
        value: feedOwner,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            classes: {
                paper: classes.detailsDialog
            },
            ...rest,
            title: t.details(),
            onClose: ()=>{
                onClose?.();
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.details,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedCard, {
                            className: classes.card,
                            feed: feed,
                            actionIndex: actionIndex,
                            verbose: true
                        }),
                        links?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.links,
                            children: links.map((link, index)=>{
                                const url = (0,parseURL/* parseURL */.L)(link);
                                if (!url || ![
                                    'http:',
                                    'https:'
                                ].includes(url.protocol)) return null;
                                const Icon = hostIconMap[url.host] ?? icon_generated_as_jsx.SettingsLanguage;
                                const name = hostNameMap[url.host] ?? url.host;
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Linking/* Linking */.E, {
                                    LinkProps: {
                                        className: classes.link
                                    },
                                    href: link,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                            size: 24
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.linkLabel,
                                            children: name
                                        })
                                    ]
                                }, index);
                            })
                        }) : null
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/modals/DetailsModal/index.tsx






const DetailsModal_FeedDetailsModal = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [props_, setProps_] = (0,react.useState)();
    const [scopedDomainsMap, setScopedDomainsMap] = (0,react.useState)({});
    const [open, dispatch] = (0,useSingletonModal/* useSingletonModal */.g)(ref, {
        onOpen ({ scopedDomainsMap, ...props }) {
            setProps_(props);
            setScopedDomainsMap(scopedDomainsMap);
        }
    });
    if (!open) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ScopedDomains/* ScopedDomainsContainer */.h.Provider, {
        initialState: scopedDomainsMap,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedDetailsDialog, {
            open: true,
            onClose: ()=>dispatch?.close(),
            ...props_,
            type: props_?.type ?? CardType.UnknownIn,
            feed: props_?.feed
        })
    });
});
DetailsModal_FeedDetailsModal.displayName = 'FeedDetailsModal';

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/modals/index.tsx




const Modals = /*#__PURE__*/ (0,react.memo)(function Modals() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsModal_FeedDetailsModal, {
            ref: FeedDetailsModal.register
        })
    });
});

;// CONCATENATED MODULE: ./packages/plugins/RSS3/src/SiteAdaptor/index.tsx










function shouldDisplay(_, socialAccount) {
    return socialAccount?.pluginID === PluginID/* NetworkPluginID */.F.PLUGIN_EVM;
}
const createProfileTabConfig = (label, props, priority = 1)=>{
    return {
        ID: `${constants/* PLUGIN_ID */.Uu}_${label}`,
        label,
        priority,
        UI: {
            TabContent: ({ socialAccount })=>{
                const key = [
                    socialAccount?.address ?? '-',
                    props.tag ?? '-'
                ].join('_');
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedsPage, {
                        address: socialAccount?.address,
                        ...props
                    }, key)
                });
            }
        },
        Utils: {
            shouldDisplay
        }
    };
};
const createSearchTabConfig = (label, props, priority = 1)=>{
    return {
        ID: `${constants/* PLUGIN_ID */.Uu}_${label}`,
        label,
        priority,
        UI: {
            TabContent: ({ result })=>{
                const socialAccount = {
                    pluginID: PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
                    address: result.type === specs/* SearchResultType */.Bk.Domain ? result.address ?? '' : result.keyword,
                    label: result.type === specs/* SearchResultType */.Bk.Domain ? result.keyword : '',
                    supportedAddressTypes: [
                        SocialIdentity/* SocialAddressType */.b.ENS
                    ]
                };
                const key = [
                    socialAccount?.address ?? '-',
                    props.tag ?? '-'
                ].join('_');
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        minHeight: 300
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useContext/* DefaultWeb3ContextProvider */.V4, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FeedsPage, {
                            address: socialAccount?.address,
                            ...props
                        }, key)
                    })
                });
            }
        },
        Utils: {
            shouldDisplay (result) {
                return [
                    specs/* SearchResultType */.Bk.Domain,
                    specs/* SearchResultType */.Bk.EOA
                ].includes(result.type);
            }
        }
    };
};
const ActivitiesTabConfig = createProfileTabConfig('Activities', {}, 2);
const ActivitiesTabConfigInProfileCard = createProfileTabConfig('Activities', {}, 2);
const ActivitiesTabConfigInSearchResult = createSearchTabConfig('Activities', {}, 2);
const DonationTabConfig = createProfileTabConfig('Donation', {
    tag: RSS3.RSS3BaseAPI.Tag.Donation
}, 3);
const DonationsTabConfigInProfileCard = createProfileTabConfig('Donation', {
    tag: RSS3.RSS3BaseAPI.Tag.Donation
}, 3);
const DonationsTabConfigInSearchResult = createSearchTabConfig('Donation', {
    tag: RSS3.RSS3BaseAPI.Tag.Donation
}, 3);
const SocialTabConfig = createProfileTabConfig('Social', {
    tag: RSS3.RSS3BaseAPI.Tag.Social
}, 1);
const SocialTabConfigInProfileCard = createProfileTabConfig('Social', {
    tag: RSS3.RSS3BaseAPI.Tag.Social
}, 1);
const SocialTabConfigInSearchResult = createSearchTabConfig('Social', {
    tag: RSS3.RSS3BaseAPI.Tag.Social
}, 1);
const site = {
    ...base/* base */.u,
    init (_, context) {},
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals, {});
    },
    ProfileTabs: [
        ActivitiesTabConfig,
        DonationTabConfig,
        SocialTabConfig
    ],
    ProfileCardTabs: [
        ActivitiesTabConfigInProfileCard,
        DonationsTabConfigInProfileCard,
        SocialTabConfigInProfileCard
    ],
    SearchResultTabs: [
        ActivitiesTabConfigInSearchResult,
        DonationsTabConfigInSearchResult,
        SocialTabConfigInSearchResult
    ]
};
/* harmony default export */ const SiteAdaptor = (site);


/***/ }),

/***/ 83220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ useEverSeen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58778);


function useEverSeen() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [seen, setSeen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const nullRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const entry = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(seen ? nullRef : ref, {});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (entry?.isIntersecting) setSeen(true);
    }, [
        entry?.isIntersecting
    ]);
    return [
        seen,
        ref
    ];
}


/***/ }),

/***/ 72385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ useSingletonModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

function useSingletonModal(ref, options) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const optionsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const openRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(open);
    optionsRef.current = options;
    openRef.current = open;
    const creator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((dispatchOpen, dispatchClose, dispatchAbort)=>{
        dispatchRef.current = {
            peek () {
                return openRef.current;
            },
            open (props) {
                optionsRef.current?.onOpen?.(props);
                dispatchOpen(props);
                setOpen(true);
            },
            close (props) {
                optionsRef.current?.onClose?.(props);
                dispatchClose(props);
                setOpen(false);
            },
            abort (error) {
                optionsRef.current?.onAbort?.(error);
                dispatchAbort(error);
                setOpen(false);
            }
        };
        return dispatchRef.current;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, ()=>creator, [
        creator
    ]);
    return [
        open,
        dispatchRef.current
    ];
}


/***/ }),

/***/ 76670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ChainIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _Icon_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28236);



const ChainIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function ChainIcon({ ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index_js__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
        ...rest,
        sx: {
            fontSize: 12,
            fontWeight: 'bold',
            ...rest.sx
        },
        size: rest.size ?? 12.5
    });
});


/***/ }),

/***/ 96310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 28236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ Icon)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/name2Image.ts
const DEFAULT_IMAGES = [
    new URL(/* asset import */ __webpack_require__(32665), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(63417), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(74246), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(85663), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(38374), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(51139), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(82567), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(15213), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(52660), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(33605), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(32297), __webpack_require__.b).toString(),
    new URL(/* asset import */ __webpack_require__(53066), __webpack_require__.b).toString()
];
const name2Image = (name)=>{
    if (!name) return DEFAULT_IMAGES[0];
    let sum = 0;
    for(let i = 0; i < name.length; i += 1){
        sum += name.charCodeAt(i);
    }
    return DEFAULT_IMAGES[sum % DEFAULT_IMAGES.length];
};

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/Icon/index.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { size })=>({
        icon: {
            margin: 0,
            borderRadius: '50%',
            color: `${theme.palette.maskColor.dark} !important`,
            backgroundSize: 'cover',
            height: size,
            width: size
        }
    }));
const Icon = /*#__PURE__*/ (0,react.memo)(function Icon(props) {
    const { logoURL, size, color, name, label, className, ...rest } = props;
    const [failed, setFailed] = (0,react.useState)(false);
    const defaultBackgroundImage = name2Image(name);
    const { classes, cx } = useStyles({
        size
    });
    const theme = (0,useTheme/* default */.Z)();
    const showImage = logoURL && !failed;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: cx(classes.icon, className),
        src: logoURL,
        ...rest,
        imgProps: {
            onError: (event)=>{
                setFailed(true);
                rest.imgProps?.onError?.(event);
            },
            ...rest.imgProps
        },
        sx: {
            ...rest.sx,
            backgroundImage: showImage ? undefined : `url("${defaultBackgroundImage}")`,
            backgroundColor: showImage ? color ?? theme.palette.common.white : undefined
        },
        children: label ?? name?.slice(0, 1).toUpperCase() ?? '?'
    });
});
Icon.displayName = 'Icon';


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

/***/ 32147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 21508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70858);
/* harmony import */ var _ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78909);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76670);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);





/**
     * It's allow to add custom network with duplicate chainIds. Network could
     * be specified with this prop.
     */ const NetworkIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function NetworkIcon(props) {
    const { pluginID, chainId, icon, network: expectedNetwork, ...rest } = props;
    const fallbackNetwork = (0,_masknet_web3_hooks_base__WEBPACK_IMPORTED_MODULE_2__/* .useNetwork */ .L)(pluginID, chainId);
    const network = expectedNetwork || fallbackNetwork;
    const iconUrl = network?.iconUrl || icon;
    if (iconUrl && !network?.isCustomized) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageIcon_index_js__WEBPACK_IMPORTED_MODULE_3__/* .ImageIcon */ .X, {
        size: 20,
        ...rest,
        icon: iconUrl
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_4__/* .ChainIcon */ .f, {
        size: rest.size || 20,
        name: network?.name,
        color: rest.color || network?.color,
        className: rest.className
    });
});


/***/ }),

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 86999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 38050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ ScopedDomainsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54225);


function useMap(initialState) {
    const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const setPair = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address, domain)=>{
        setMap((map)=>{
            const key = address.toLowerCase();
            if (map[key] === domain || !domain.includes('.')) return map;
            return {
                ...map,
                [key]: domain
            };
        });
    }, []);
    const getDomain = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((address)=>{
        return initialState?.[address.toLowerCase()] || map[address.toLowerCase()];
    }, [
        map,
        initialState
    ]);
    return {
        setPair,
        getDomain,
        map
    };
}
const ScopedDomainsContainer = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(useMap);
ScopedDomainsContainer.Provider.displayName = 'ScopedDomainsContainer.Provider';


/***/ }),

/***/ 70858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useNetwork)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useNetworks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72889);





function useNetwork(pluginID, chainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,_useNetworks_js__WEBPACK_IMPORTED_MODULE_3__/* .useNetworks */ .e)(pluginID);
    const networkID = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networkID ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_STRING */ .v6);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (chainId) return networks.find((x)=>x.chainId === chainId);
        return networks.find((x)=>x.ID === networkID);
    }, [
        chainId,
        networkID,
        networks
    ]);
}


/***/ }),

/***/ 72889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useNetworks)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72601);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15628);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);





/**
 * Bulletin networks and custom networks.
 * There could be duplicate chian id among them, because that's allow to custom networks.
 */ function useNetworks(pluginID, uniqChainId) {
    const { Network } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const networks = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Network?.networks ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const list = networks.filter((x)=>x.network === 'mainnet' || x.isCustomized);
        return uniqChainId ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(list, (x)=>x.chainId) : list;
    }, [
        networks,
        uniqChainId
    ]);
}


/***/ }),

/***/ 32665:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/32cc6126716b1c948521.svg";

/***/ }),

/***/ 33605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2ba762c78bff78c550fb.svg";

/***/ }),

/***/ 32297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/db4a425a3e40a8852fa3.svg";

/***/ }),

/***/ 53066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3e222d37b7dad4bdab7e.svg";

/***/ }),

/***/ 63417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/0db610b2e2f8b0e3f140.svg";

/***/ }),

/***/ 74246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/44a2ee9660f3051e559b.svg";

/***/ }),

/***/ 85663:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/17413f9e89ac1d796f8b.svg";

/***/ }),

/***/ 38374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/99b296aa8c69cb9a9ac3.svg";

/***/ }),

/***/ 51139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d9090da8ea2f06ba6df9.svg";

/***/ }),

/***/ 82567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6f3a8ca61f969207c1e3.svg";

/***/ }),

/***/ 15213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ca770caade4e39fafbc5.svg";

/***/ }),

/***/ 52660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8a27a1699f5026bcded9.svg";

/***/ }),

/***/ 44365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/73873807554e1cb12299.png";

/***/ }),

/***/ 34656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8fbcb4dca63f56437009.png";

/***/ }),

/***/ 86886:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 54225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createContainer),
/* harmony export */   u: () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.5818.js.map