"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4305,2782],{

/***/ 20355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ useThemeLanguage)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64455);
/* harmony import */ var _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55166);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50139);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);




const langs = {
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.enUS]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ ._z,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.jaJP]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .jaJP */ .jz,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.koKR]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .koKR */ .uG,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.zhTW]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .zhTW */ .cj,
    [_masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .SupportedLanguages */ .iu.zhCN]: _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .zhCN */ .U1
};
function useThemeLanguage(language) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (language !== _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__) return;
        (0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .updateLanguage */ .BF)(language));
    }, [
        language
    ]);
    if (language === _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.__auto__) {
        // we've scheduled an update above.
        language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions */ .P7.enUS;
    }
    const displayLanguage = language;
    return [
        langs[displayLanguage] || _mui_material_locale_index_js__WEBPACK_IMPORTED_MODULE_2__/* .enUS */ ._z,
        false
    ];
}


/***/ }),

/***/ 94036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useMaskSharedTrans)
/* harmony export */ });
/* unused harmony export MaskSharedTrans */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);
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
function useMaskSharedTrans() /**
      * `🎭🎭🎭 Tired of plaintext? Try to send encrypted messages to your friends. Install Mask.io to send your first encrypted tweet.`
      */ /**
      * `Hi friends, I just created {{token}} Lucky Drop. Download Mask.io to claim.`
      */ /**
      * `📃📃📃 Try to permanently use decentralized file storage on {{sns}}. Install Mask.io to upload and share first permanent decentralized file, powered by mainstream decentralized storage solutions.`
      */ /**
      * `Hi friends, I just deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.`
      */ /**
      * `Hi friends, I just withdrew my deposit {{- amount}} {{symbol}} on {{chain}}. Follow @{{account}} to find more staking projects.`
      */ /**
      * `Display collectibles in variable NFT marketplaces, make an offer directly on social media. Install Mask.io to try to browse NFTs directly on {{sns}}.`
      */ /**
      * `Want to actively participate in proposal vote and move projects forward? Install Mask.io to vote proposals directly on {{sns}}.`
      */ /**
      * `Backup Database`
      */ /**
      * `Overwrite Database with backup`
      */ /**
      * `Clear Database`
      */ /**
      * `New bug issue`
      */ /**
      * `Add new metadata or replace existing metadata`
      */ /**
      * `Put metadata`
      */ /**
      * `Edit`
      */ /**
      * `Clear`
      */ /**
      * `Connect`
      */ /**
      * `Back`
      */ /**
      * `More`
      */ /**
      * `Remove`
      */ /**
      * `To`
      */ /**
      * `Add`
      */ /**
      * `Approve`
      */ /**
      * `Address`
      */ /**
      * `Amount`
      */ /**
      * `Coming soon`
      */ /**
      * `Max`
      */ /**
      * `Data`
      */ /**
      * `a token`
      */ /**
      * `an NFT`
      */ /**
      * `Available Balance`
      */ /**
      * `{{- amount}} available`
      */ /**
      * `Failed to transfer token: {{- message}}`
      */ /**
      * `Network error or execute smart contract failed.`
      */ /**
      * `Operation`
      */ /**
      * `Gas Limit`
      */ /**
      * `Gas Price`
      */ /**
      * `value`
      */ /**
      * `Balance`
      */ /**
      * `Gwei`
      */ /**
      * `Redirect to`
      */ /**
      * `Welcome Back`
      */ /**
      * `Sign`
      */ /**
      * `Load failed`
      */ /**
      * `Web3 Profile Card`
      */ /**
      * `Powered by`
      */ /**
      * `Reload`
      */ /**
      * `Rename`
      */ /**
      * `Contacts`
      */ /**
      * `Currency`
      */ /**
      * `Load`
      */ /**
      * `Load All`
      */ /**
      * `No Data`
      */ /**
      * `Tip`
      */ /**
      * `Tags`
      */ /**
      * `Price`
      */ /**
      * `Floor price`
      */ /**
      * `Default`
      */ /**
      * `Contract`
      */ /**
      * `Plugins`
      */ /**
      * `Signing ...`
      */ /**
      * `Network`
      */ /**
      * `Backup`
      */ /**
      * `Password`
      */ /**
      * `Re-enter`
      */ /**
      * `Copy`
      */ /**
      * `Or`
      */ /**
      * `Send`
      */ /**
      * `To`
      */ /**
      * `Added by user`
      */ /**
      * `Congratulations`
      */ /**
      * `Token Standard`
      */ /**
      * `Persona required.`
      */ /**
      * `Initializing...`
      */ /**
      * `Only TypedMessageText is supported currently.`
      */ /**
      * `Provided by plugin`
      */ /**
      * `Add Assets`
      */ /**
      * `Search NFT collection name, symbol or contract address`
      */ /**
      * `Applications`
      */ /**
      * `APP Settings`
      */ /**
      * `Connect Persona`
      */ /**
      * `Not your current account.`
      */ /**
      * `Please sign up or login {{- siteName}} to connect Mask Network.`
      */ /**
      * `Switch accounts and try more connections.`
      */ /**
      * `Twitter ID verified persona({{currentSNSConnectedPersonaPublicKey}}) is not consistent with your current persona({{currentPersonaPublicKey}}). Please switch to persona({{currentSNSConnectedPersonaPublicKey}}) and try again.`
      */ /**
      * `Please verify your social account`
      */ /**
      * `Please create your persona and use it`
      */ /**
      * `Please connect your persona`
      */ /**
      * `Please connect your wallet`
      */ /**
      * `APP list`
      */ /**
      * `Plug-in switch`
      */ /**
      * `Listed`
      */ /**
      * `Unlisted`
      */ /**
      * `Click the application icon to hide in the APP list.`
      */ /**
      * `Click the setting icon to list it on the App board.`
      */ /**
      * `Click the application icon to list it on the App board.`
      */ /**
      * `Load failed`
      */ /**
      * `Decrypt this post with #mask_io! $t(promote) {{encrypted}}`
      */ /**
      * `$t(promote_red_packet) Follow @{{account}} for Web3 updates and insights.
    
    🧧🧧🧧 Try sending Lucky Drop to your friends with Mask.io.
    
    {{encrypted}}`
      */ /**
      * `$t(promote_red_packet)
    
    🧧🧧🧧 Try sending Lucky Drop to your friends with Mask.io.
    
    {{encrypted}}`
      */ /**
      * `$t(promote_file_service)
     {{encrypted}}`
      */ /**
      * `$t(promote_file_service) {{encrypted}}`
      */ /**
      * `This image is encrypted with #mask_io.
    {{random}}
    
    Install Mask.io to send your first encrypted tweet.`
      */ /**
      * `Paste manually`
      */ /**
      * `Please copy the following text and image (if there is any) and publish it.`
      */ /**
      * `Open in a new tab`
      */ /**
      * `Do you need to paste encrypted content manually?`
      */ /**
      * `Show me how`
      */ /**
      * `Close`
      */ /**
      * `Connect your wallet`
      */ /**
      * `Connected wallets settings`
      */ /**
      * `Text`
      */ /**
      * `Use text encryption`
      */ /**
      * `Image`
      */ /**
      * `Encrypt messages in images`
      */ /**
      * `No local key`
      */ /**
      * `All`
      */ /**
      * `Everyone`
      */ /**
      * `Private`
      */ /**
      * `Just Me`
      */ /**
      * `1 friend`
      */ /**
      * `{{count}} friends`
      */ /**
      * `Share with`
      */ /**
      * `Just Selected Contacts`
      */ /**
      * `No Persona-based encryption friends locally, please try searching.`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Please click the “Post” button to open the compose dialog.`
      */ /**
      * `OK`
      */ /**
      * `Start`
      */ /**
      * `Cancel`
      */ /**
      * `realMaskNetwork`
      */ /**
      * `masknetwork`
      */ /**
      * `#mask_io`
      */ /**
      * `Add an encrypted comment…`
      */ /**
      * `Confirm`
      */ /**
      * `Copy text`
      */ /**
      * `Loading failed`
      */ /**
      * `Try Again`
      */ /**
      * `Copy image`
      */ /**
      * `Copy wallet address successfully!`
      */ /**
      * `Copy text successfully!`
      */ /**
      * `Copy image successfully!`
      */ /**
      * `Copy token successfully!`
      */ /**
      * `Connecting…`
      */ /**
      * `Collectibles`
      */ /**
      * `Select an NFT`
      */ /**
      * `Create`
      */ /**
      * `Copied`
      */ /**
      * `Daily`
      */ /**
      * `No collectible found.`
      */ /**
      * `No NFTs found.`
      */ /**
      * `All ({{count}})`
      */ /**
      * `Every {{days}} days`
      */ /**
      * `Only visible to yourself`
      */ /**
      * `All Mask plug-in users`
      */ /**
      * `Mask decrypting…`
      */ /**
      * `Mask decoding…`
      */ /**
      * `Mask is looking for the public key of the author…`
      */ /**
      * `Mask is getting the key to decrypt. If you see this for a long time, this post might not be shared to you.`
      */ /**
      * `Originally posted by {{name}}`
      */ /**
      * `Decrypted by Mask Network`
      */ /**
      * `Dismiss`
      */ /**
      * `Delete`
      */ /**
      * `Delete Wallet`
      */ /**
      * `Hide Token`
      */ /**
      * `Done`
      */ /**
      * `Download`
      */ /**
      * `Failed`
      */ /**
      * `Buy Now`
      */ /**
      * `No Enough Gas Fees`
      */ /**
      * `Gas Fee`
      */ /**
      * `Insufficient funds for gas.`
      */ /**
      * `Open`
      */ /**
      * `Settings`
      */ /**
      * `Don't see your NFT?`
      */ /**
      * `Import NFT`
      */ /**
      * `Post content:`
      */ /**
      * `We will need to verify your Twitter account and record it on the NextID. Please post it for validation.`
      */ /**
      * `Please sign up or log in to connect Mask Network.`
      */ /**
      * `Link your profile to your persona.`
      */ /**
      * `Connect`
      */ /**
      * `Re-Connect`
      */ /**
      * `Verify`
      */ /**
      * `Inconsistent Account`
      */ /**
      * `Don't show again.`
      */ /**
      * `Checking`
      */ /**
      * `No verification post found`
      */ /**
      * `Verify Account`
      */ /**
      * `Account successfully connected to persona`
      */ /**
      * `Verifying`
      */ /**
      * `Re-Verify`
      */ /**
      * `You have connected to this account successfully.`
      */ /**
      * `Mask Network requires you to post a verification tweet to access Next.ID-based products.`
      */ /**
      * `Hello Mask world. This is my first encrypted message. Install https://mask.io to send me encrypted post. `
      */ /**
      * `Follow {{account}} to explore Web3.`
      */ /**
      * `Don't forget to pin Mask Network in your browser toolbar to access Web3 easily.`
      */ /**
      * `Click on `
      */ /**
      * ` at top right of your browser.`
      */ /**
      * `Find Mask Network in the list of extensions and click the `
      */ /**
      * ` button.`
      */ /**
      * `Pinned successfully.`
      */ /**
      * `Explore multi-chain dApps.`
      */ /**
      * `Connect and switch between your wallets.`
      */ /**
      * `Browse the Web3 footprints of your Twitter friends, enjoy the freedom of Web3.`
      */ /**
      * `Click here to have a quick start.`
      */ /**
      * `NFT PFP`
      */ /**
      * `I just set my NFT PFP using Mask Extension for free! To browse other's unique NFT collections and Web3 activities on Twitter, download the most powerful tool mask.io.`
      */ /**
      * `Set NFT PFP successfully.`
      */ /**
      * `Cannot found asset.`
      */ /**
      * `Web3 error`
      */ /**
      * `Chain does not match.`
      */ /**
      * `Input Contract Address`
      */ /**
      * `Token ID`
      */ /**
      * `Mask Network`
      */ /**
      * `Import`
      */ /**
      * `No result`
      */ /**
      * `Set NFT Photo`
      */ /**
      * `Use NFT`
      */ /**
      * `Loading`
      */ /**
      * `Unlock`
      */ /**
      * `Persona`
      */ /**
      * `Wallet`
      */ /**
      * `Dashboard`
      */ /**
      * `Welcome to Mask Network`
      */ /**
      * `Congrats, you are in Web3!`
      */ /**
      * `Explore the hottest NFTs, DAOs, `
      */ /**
      * `crypto trends with Mask Network.`
      */ /**
      * `Enter Dashboard`
      */ /**
      * `Pending...`
      */ /**
      * `Encrypt`
      */ /**
      * `Tell selective friends what's happening...`
      */ /**
      * `Encrypted Post`
      */ /**
      * `Visible To`
      */ /**
      * `Encryption Method`
      */ /**
      * `Enable auto paste`
      */ /**
      * `eg: Twitter accounts, Persona public keys, wallet addresses or ENS`
      */ /**
      * `Compose encrypted post`
      */ /**
      * `Hide`
      */ /**
      * `Reset`
      */ /**
      * `Editor`
      */ /**
      * `Retry`
      */ /**
      * `Something went wrong.`
      */ /**
      * `Type here to search`
      */ /**
      * `Select All`
      */ /**
      * `Nonce`
      */ /**
      * `N/A`
      */ /**
      * `Select None`
      */ /**
      * `All Friends`
      */ /**
      * `Share with`
      */ /**
      * `The Persona is connected to account`
      */ /**
      * `The Persona is connected to accounts`
      */ /**
      * `Decryption failed.`
      */ /**
      * `Invalid Username`
      */ /**
      * `Speed Up`
      */ /**
      * `Save`
      */ /**
      * `Skip`
      */ /**
      * `Next`
      */ /**
      * `Try`
      */ /**
      * `Share`
      */ /**
      * `Share `
      */ /**
      * `Sharing`
      */ /**
      * `Transfer`
      */ /**
      * `Export`
      */ /**
      * `Confirm swap risk`
      */ /**
      * `Failed to load {{symbol}}. Click to retry.`
      */ /**
      * `Name`
      */ /**
      * `Rename Wallet`
      */ /**
      * `Loading NFT contract...`
      */ /**
      * `No results or contract address does not meet the query criteria.`
      */ /**
      * `No results`
      */ /**
      * `Confirm with password`
      */ /**
      * `NFT Airdrop Unclaimed:`
      */ /**
      * `View on Explorer`
      */ /**
      * `Pending`
      */ /**
      * `Cancelled`
      */ /**
      * `Balance`
      */ /**
      * `Available Balance`
      */ /**
      * `New Wallet`
      */ /**
      * `Change`
      */ /**
      * `Change to EVM wallet`
      */ /**
      * `Copy Address`
      */ /**
      * `The wallet name already exists.`
      */ /**
      * `Transfer Account`
      */ /**
      * `Receiving Account`
      */ /**
      * `To Address`
      */ /**
      * `Send`
      */ /**
      * `Ens or Address(0x)`
      */ /**
      * `Transfer`
      */ /**
      * `My Wallets`
      */ /**
      * `Contacts`
      */ /**
      * `This address is a contract address.`
      */ /**
      * `Enter recipient address`
      */ /**
      * `This address may be a scam address.`
      */ /**
      * `Incorrect wallet address.`
      */ /**
      * `This ENS does not exist or not be resolved.`
      */ /**
      * `Network does not support ENS.`
      */ /**
      * `Enter an amount`
      */ /**
      * `Enter recipient address`
      */ /**
      * `This receiving address is the same as the sending address. Please check again.`
      */ /**
      * `The receiving address is contract address. Please check again.`
      */ /**
      * `Invalid recipient address`
      */ /**
      * `The address of the receiver is invalid.`
      */ /**
      * `Network does not support ENS.`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Enter a gas price`
      */ /**
      * `Enter a gas limit`
      */ /**
      * `Enter a max fee`
      */ /**
      * `Enter a max priority fee`
      */ /**
      * `Max fee is too low for network conditions.`
      */ /**
      * `Max fee is higher than necessary`
      */ /**
      * `Max priority fee must be greater than 0 GWEI`
      */ /**
      * `Max priority fee is too low for network conditions`
      */ /**
      * `Max priority fee is higher than necessary. You may pay more than needed.`
      */ /**
      * `Max fee cannot be lower than max priority fee`
      */ /**
      * `GWEI`
      */ /**
      * `Transfer between my accounts`
      */ /**
      * `Weekly`
      */ /**
      * `{{count}} day ago`
      */ /**
      * `{{count}} days ago`
      */ /**
      * `{{count}} hour ago`
      */ /**
      * `{{count}} hours ago`
      */ /**
      * `{{count}} minute ago`
      */ /**
      * `{{count}} minutes ago`
      */ /**
      * `{{count}} month ago`
      */ /**
      * `{{count}} months ago`
      */ /**
      * `{{count}} second ago`
      */ /**
      * `{{count}} seconds ago`
      */ /**
      * `{{count}} year ago`
      */ /**
      * `{{count}} years ago`
      */ /**
      * `{{count}} days`
      */ /**
      * `{{count}} day`
      */ /**
      * `{{count}} hours`
      */ /**
      * `{{count}} hour`
      */ /**
      * `{{count}} minutes`
      */ /**
      * `{{count}} minute`
      */ /**
      * `{{count}} month`
      */ /**
      * `{{count}} months`
      */ /**
      * `{{count}} second`
      */ /**
      * `{{count}} seconds`
      */ /**
      * `{{count}} year`
      */ /**
      * `{{count}} years`
      */ /**
      * `Confirm this transaction in your wallet`
      */ /**
      * `Transaction Submitted`
      */ /**
      * `Transaction Confirmed`
      */ /**
      * `Transaction Succeed`
      */ /**
      * `Transaction Failed`
      */ /**
      * `Successfully swapped Token`
      */ /**
      * `Swap Token`
      */ /**
      * `Connect to`
      */ /**
      * `Try Again`
      */ /**
      * `Connected to`
      */ /**
      * `You've opened the popup, please confirm.`
      */ /**
      * `Disconnect`
      */ /**
      * `Wallet Account`
      */ /**
      * `Select an NFT Contract`
      */ /**
      * `Select an NFT Contract Owner`
      */ /**
      * `Select an NFT Contract Operator`
      */ /**
      * `Click to retry`
      */ /**
      * `Unlocking {{symbol}}...`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `Unlock {{symbol}} successfully`
      */ /**
      * `Confirm Risk Warning`
      */ /**
      * `No Gas Fee`
      */ /**
      * `Updating Gas Fee…`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Invalid Network`
      */ /**
      * `Select a Wallet`
      */ /**
      * `Transaction`
      */ /**
      * `Waiting for confirmation…`
      */ /**
      * `Your transaction was submitted!`
      */ /**
      * `Your transaction was confirmed!`
      */ /**
      * `Transaction was reverted!`
      */ /**
      * `Transaction was rejected!`
      */ /**
      * `Transaction underpriced.`
      */ /**
      * `Transaction was failed due to an internal JSON-RPC server error.`
      */ /**
      * `View on Explorer`
      */ /**
      * `Create Wallet`
      */ /**
      * `Connect Wallet`
      */ /**
      * `{{count}} Pending`
      */ /**
      * `{{count}} Pendings`
      */ /**
      * `Import Wallet`
      */ /**
      * `Exact Unlock`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `You must give the {{provider}} smart contract permission to use your part of {{symbol}}. `
      */ /**
      * `You must give the {{provider}} smart contract permission to use your {{symbol}}. You only have to do this once per token.`
      */ /**
      * `Connect to MetaMask`
      */ /**
      * `Connect to Rainbow`
      */ /**
      * `Connect to Trust`
      */ /**
      * `Connect to imToken`
      */ /**
      * `Connect`
      */ /**
      * `Return to Mobile Wallet Options`
      */ /**
      * `View QR Code`
      */ /**
      * `Switch to {{network}}`
      */ /**
      * `Switching to {{network}}`
      */ /**
      * `You're connected to a WalletConnect wallet. Please switch network in that wallet, or switch to another wallet.`
      */ /**
      * `This network is not supported yet.`
      */ /**
      * `Change to {{network}}`
      */ /**
      * `Not available on {{network}} Network.`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Enter 1-12 characters`
      */ /**
      * `Signature canceled.`
      */ /**
      * `Optimize your social profile by customizing the display of Web3 features.`
      */ /**
      * `Set your NFT as profile picture with exclusive aura.`
      */ /**
      * `Socialize and show off your NFTs. People can bid, buy and view your valuable NFTs without leaving Twitter.`
      */ /**
      * `Provide you with fast, reliable and convenient security services.`
      */ /**
      * `Create your Lucky Drop.`
      */ /**
      * `Claimed`
      */ /**
      * `Claim`
      */ /**
      * `Claim Lucky Drop`
      */ /**
      * `Claim your Lucky Drop.`
      */ /**
      * `Claim Lucky Drop with {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Claim Lucky Drop successfully.`
      */ /**
      * `Failed to claim Lucky Drop.`
      */ /**
      * `Create your Lucky Drop.`
      */ /**
      * `Create Lucky Drop`
      */ /**
      * `Create Lucky drop with {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Failed to create Lucky Drop.`
      */ /**
      * `Refund your expired Lucky Drop.`
      */ /**
      * `Refund Lucky drop`
      */ /**
      * `Refund Lucky Drop with {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Refund Lucky Drop successfully.`
      */ /**
      * `Failed to refund Lucky Drop.`
      */ /**
      * `Create NFT Lucky Drop`
      */ /**
      * `Create your NFT Lucky Drop.`
      */ /**
      * `Create {{symbol}} NFT Lucky Drop successfully.`
      */ /**
      * `Create NFT Lucky Drop successfully.`
      */ /**
      * `Claim your NFT Lucky Drop`
      */ /**
      * `Claim 1 {{symbol}} NFT Lucky Drop successfully.`
      */ /**
      * `Claim 1 NFT Lucky Drop successfully.`
      */ /**
      * `Claim NFT Lucky Drop`
      */ /**
      * `Wallet account`
      */ /**
      * `Select a token`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Fail to load trending info from  `
      */ /**
      * `Switch to {{provider}}`
      */ /**
      * `Pop-up trading widget allows you to instantly view prices of the hottest Crypto/Stock and trade, also invest in the best performing managers.`
      */ /**
      * `Tutorial`
      */ /**
      * `What's LBP?`
      */ /**
      * `Solid blue line illustrates the historical price of {{symbol}} on the {{symbol}}'s LBP. The price could continue to go down if no one buys. Please make your investment decision wisely.`
      */ /**
      * `No pools found.`
      */ /**
      * `I understand`
      */ /**
      * `View on Etherscan`
      */ /**
      * `Token Safety Alert`
      */ /**
      * `Anyone can create and name any ERC20 token on Ethereum, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token. Similar to Etherscan, this site automatically tracks analytics for all ERC20 tokens independent of token integrity. Please do your own research before interacting with any ERC20 token.`
      */ /**
      * `Total Supply`
      */ /**
      * `Circulating Supply`
      */ /**
      * `Accept`
      */ /**
      * `24 Hour Trading Vol`
      */ /**
      * `Market Cap`
      */ /**
      * `Risk Warning`
      */ /**
      * `Confirm swap token contract risk`
      */ /**
      * `Swap Anyway`
      */ /**
      * `Dear Users,`
      */ /**
      * `Clicking the confirm button means that you agree to take the potential risks and proceed with the transaction.`
      */ /**
      * `The price has expired.`
      */ /**
      * `Market Statistic`
      */ /**
      * `Floor Price`
      */ /**
      * `Trending`
      */ /**
      * `Highest Price`
      */ /**
      * `Total Volume`
      */ /**
      * `24H Average Price`
      */ /**
      * `24H Traded Volume`
      */ /**
      * `24H sale`
      */ /**
      * `Marketplace`
      */ /**
      * `Items`
      */ /**
      * `Owners`
      */ /**
      * `Sales (24h)`
      */ /**
      * `Rank #{{rank}}`
      */ /**
      * `Info`
      */ /**
      * `Website`
      */ /**
      * `Community`
      */ /**
      * `Savings`
      */ /**
      * `Asset`
      */ /**
      * `APR`
      */ /**
      * `Wallet`
      */ /**
      * `Operation`
      */ /**
      * `Amount`
      */ /**
      * `Deposit`
      */ /**
      * `Swap {{token}}`
      */ /**
      * `Withdraw {{token}}`
      */ /**
      * `Withdraw`
      */ /**
      * `Processing Deposit`
      */ /**
      * `Processing Withdrawal`
      */ /**
      * `No deposit protocols found.`
      */ /**
      * `Swap`
      */ /**
      * `Wrap`
      */ /**
      * `You sell`
      */ /**
      * `You buy`
      */ /**
      * `Unwrap`
      */ /**
      * `Buy`
      */ /**
      * `No Data`
      */ /**
      * `General`
      */ /**
      * `Price`
      */ /**
      * `Exchange`
      */ /**
      * `Activities`
      */ /**
      * `NFTs`
      */ /**
      * `NFT`
      */ /**
      * `Method`
      */ /**
      * `Value`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Time`
      */ /**
      * `Enter an amount`
      */ /**
      * `Insufficient {{symbol}} balance`
      */ /**
      * `Insufficient liquidity for this trade`
      */ /**
      * `Input amount is below the minimum amount`
      */ /**
      * `Advanced Settings:`
      */ /**
      * `Gas fee`
      */ /**
      * `Unlock {{symbol}}`
      */ /**
      * `You must give the {{provider}} Smart contracts permission to use your {{symbol}}.You only have to do this once per token.`
      */ /**
      * `Swap`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Slippage tolerance`
      */ /**
      * `(${{usd}})`
      */ /**
      * `Minimum Received`
      */ /**
      * `Setting the max price slippage too high may cause the minimum amount returned lower than the amount desired.`
      */ /**
      * `Transaction with extremely low slippage tolerance might be reverted because of very small market movement.`
      */ /**
      * `High Price impact！More than {{impact}} drop！`
      */ /**
      * `Confirm Swap`
      */ /**
      * `Update`
      */ /**
      * `Price Impact`
      */ /**
      * `Price Impact (-{{percent}})`
      */ /**
      * `You may receive 10% less with this level of slippage tolerance.`
      */ /**
      * `Confirm Price Impact {{percent}}`
      */ /**
      * `Max Slippage`
      */ /**
      * `Instant`
      */ /**
      * `High`
      */ /**
      * `Medium`
      */ /**
      * `Standard`
      */ /**
      * `Fast`
      */ /**
      * `Custom`
      */ /**
      * `(${{usd}})`
      */ /**
      * `({{usd}})`
      */ /**
      * `({{usd}})`
      */ /**
      * `{{option}} ({{value}}) Gwei`
      */ /**
      * `No enough liquidity`
      */ /**
      * `Please select a trade`
      */ /**
      * `Swapping Risk`
      */ /**
      * `Transaction cost`
      */ /**
      * `Plugin: Poll`
      */ /**
      * `Ask a question…`
      */ /**
      * `choice`
      */ /**
      * `Poll length`
      */ /**
      * `Days`
      */ /**
      * `Hours`
      */ /**
      * `Minutes`
      */ /**
      * `Unknown`
      */ /**
      * `Create New`
      */ /**
      * `Past`
      */ /**
      * `Send Poll`
      */ /**
      * `Closed`
      */ /**
      * `Voting`
      */ /**
      * `Voted.`
      */ /**
      * `{{time}} left until vote ends`
      */ /**
      * `Collectibles`
      */ /**
      * `Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.`
      */ /**
      * `{{action}} NFT contract`
      */ /**
      * `{{action}} {{symbol}} NFT contract.`
      */ /**
      * `{{action}} {{symbol}} NFT contract successfully.`
      */ /**
      * `{{action}} {{symbol}} approval successfully.`
      */ /**
      * `Failed to {{action}} NFT contract.`
      */ /**
      * `Transfer NFT`
      */ /**
      * `Failed to transfer NFT.`
      */ /**
      * `Transfer {{symbol}} NFT successfully.`
      */ /**
      * `Transfer {{symbol}} NFT.`
      */ /**
      * `Revoke the approval for {{symbol}}.`
      */ /**
      * `Transfer Token`
      */ /**
      * `Send {{- tokenAmountDescription}}.`
      */ /**
      * `Failed to send token.`
      */ /**
      * `Send {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Revoke Token`
      */ /**
      * `Revoke the approval successfully.`
      */ /**
      * `Failed to revoke token contract.`
      */ /**
      * `Unlock Token`
      */ /**
      * `Unlock {{- tokenAmountDescription}}`
      */ /**
      * `Unlock {{- tokenAmountDescription}} successfully`
      */ /**
      * `You've approved {{- tokenAmountDescription}} for {{spender}}. If you want to revoke that token, please keep custom spending cap amount as 0 and try it again.`
      */ /**
      * `You didn't approve {{symbol}} successfully. Please do not set spending cap as 0 and try it again.`
      */ /**
      * `Failed to unlock token contract.`
      */ /**
      * `Deposit token`
      */ /**
      * `Deposit {{- tokenAmountDescription}} for savings.`
      */ /**
      * `Deposit {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Failed to deposit {{symbol}}.`
      */ /**
      * `Withdraw token`
      */ /**
      * `Withdraw {{- tokenAmountDescription}} for savings.`
      */ /**
      * `Withdraw {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Failed to withdraw {{symbol}}.`
      */ /**
      * `Purchase Maskbox NFT`
      */ /**
      * `Purchase Maskbox NFT with {{- tokenAmountDescription}} successfully.`
      */ /**
      * `Purchase Maskbox NFT.`
      */ /**
      * `Failed to purchase Maskbox NFT.`
      */ /**
      * `Donate`
      */ /**
      * `You have donated {{- amount}} {{symbol}}`
      */ /**
      * `Transaction submitted.`
      */ /**
      * `You have donated {{- amount}} {{symbol}}`
      */ /**
      * `Transaction failed`
      */ /**
      * `Information`
      */ /**
      * `Strategie(s)`
      */ /**
      * `Author`
      */ /**
      * `IPFS`
      */ /**
      * `Start date`
      */ /**
      * `End date`
      */ /**
      * `Snapshot`
      */ /**
      * `DAO`
      */ /**
      * `Display Snapshot proposals on the Twitter page of the respective project or protocol.`
      */ /**
      * `Results`
      */ /**
      * `Votes`
      */ /**
      * `You`
      */ /**
      * `No power`
      */ /**
      * `Voted successfully.`
      */ /**
      * `Please try again if you failed to vote.`
      */ /**
      * `Vote`
      */ /**
      * `Option(s)`
      */ /**
      * `Your voting power`
      */ /**
      * `Cast your vote`
      */ /**
      * `My vote`
      */ /**
      * `{{followersCount}} members`
      */ /**
      * `Starts in {{date}}`
      */ /**
      * `Ends in {{date}} `
      */ /**
      * `Ended {{date}}`
      */ /**
      * `Oops, we can't find any results.`
      */ /**
      * `Space`
      */ /**
      * `Join`
      */ /**
      * `View`
      */ /**
      * `Proposal`
      */ /**
      * `Progress`
      */ /**
      * `Loading fails due to Snapshot API service breakdown.`
      */ /**
      * `Vote Overview`
      */ /**
      * `Are you sure you want to vote "{{- choiceText}}"?`
      */ /**
      * `This action cannot be undone.`
      */ /**
      * `Current results`
      */ /**
      * `Download report`
      */ /**
      * `Non-F Friends`
      */ /**
      * `Discover the infinite possibilities of #NFTs.`
      */ /**
      * `Persona Sign`
      */ /**
      * `The wallet has already been bound to {{currentPersona}}. Please switch to another wallet.`
      */ /**
      * `{{- personaName}} Sign`
      */ /**
      * `Please connect your wallet first.`
      */ /**
      * `Sign seamlessly with your persona to ensure data validity.`
      */ /**
      * `Welcome to Mask Network`
      */ /**
      * `Encrypt your social media posts & messages. Make selective friends to decrypt.`
      */ /**
      * `Add Wallet`
      */ /**
      * `Keep your transactions and assets safe with Mask Wallet.`
      */ /**
      * `Use Persona to encrypt and decrypt social media posts & messages.`
      */ /**
      * `Create a New Wallet`
      */ /**
      * `Generate a new wallet address`
      */ /**
      * `Generate a new persona`
      */ /**
      * `Import Wallet`
      */ /**
      * `Import Wallets`
      */ /**
      * `Support mnemonic phrase, private key or keystone file.`
      */ /**
      * `Support Identity code, private key, local backups or cloud backups to access your personal data.`
      */ /**
      * `Lock Wallet`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Persona signed successfully`
      */ /**
      * `Persona signed failed`
      */ /**
      * `Wallet signed successfully`
      */ /**
      * `Wallet signed failed`
      */ /**
      * `Profile Photo`
      */ /**
      * `Public Key`
      */ /**
      * `Create Persona`
      */ /**
      * `Restore or Login`
      */ /**
      * `Name`
      */ /**
      * `Connect your social platform accounts.`
      */ /**
      * `Save successfully`
      */ /**
      * `Save failed`
      */ /**
      * `Display the following address on your Web3 profile page and use it to receive tips.`
      */ /**
      * `After connecting and verifying your persona, you can set up associated address for displaying your web3 footprints or receiving tips.`
      */ /**
      * `Social Account`
      */ /**
      * `Connected Wallet`
      */ /**
      * `Change Owner`
      */ /**
      * `Connected`
      */ /**
      * `Not Connected`
      */ /**
      * `Loading`
      */ /**
      * `Connect your social media accounts`
      */ /**
      * `Connect Social Account`
      */ /**
      * ` Disconnect successfully. `
      */ /**
      * `Disconnect failed.`
      */ /**
      * `Performing this action will have impact on sending encrypted messages by this Persona.`
      */ /**
      * `Verify Account`
      */ /**
      * `Add and verify Wallet`
      */ /**
      * `Add Derive`
      */ /**
      * `Rename`
      */ /**
      * `Speed up transaction`
      */ /**
      * `Cancel Transaction`
      */ /**
      * `Import the wallet`
      */ /**
      * `Disconnect Wallet`
      */ /**
      * `Disconnect Wallet?`
      */ /**
      * `Create Wallet`
      */ /**
      * `Back up the wallet`
      */ /**
      * `Wallet Recovered`
      */ /**
      * `Wallet Settings`
      */ /**
      * `Change Network`
      */ /**
      * `Auto-lock Time`
      */ /**
      * `{{time}} Mins`
      */ /**
      * `{{count}} Hour`
      */ /**
      * `{{count}} Hours`
      */ /**
      * `Auto-lock`
      */ /**
      * `Change Payment Password`
      */ /**
      * `Show Private Key`
      */ /**
      * `Backup Wallet`
      */ /**
      * `Enter Payment Password`
      */ /**
      * `Click on the down-arrow icon to see the private key.`
      */ /**
      * `Wallet name must between 3 to 18 characters.`
      */ /**
      * `The wallet name already exists.`
      */ /**
      * `Remove Wallet`
      */ /**
      * `Remove Wallet?`
      */ /**
      * `Are you sure to remove this wallet?`
      */ /**
      * `The wallet address already exists.`
      */ /**
      * `Please set up the amount of time before we automatically lock your wallet.`
      */ /**
      * `Minutes`
      */ /**
      * `This field is number required.`
      */ /**
      * `Current Management Account`
      */ /**
      * `Local persona or wallet only`
      */ /**
      * `Connected sites`
      */ /**
      * `Wallet name is connected to these sites, they can view your account address.`
      */ /**
      * `Are your sure you want to disconnect? You may lose site functionality.`
      */ /**
      * `Disconnect all accounts`
      */ /**
      * `Unconnected successfully.`
      */ /**
      * `Gas fee settings`
      */ /**
      * `Assets`
      */ /**
      * `Send`
      */ /**
      * `Set the payment password`
      */ /**
      * `Set Payment Password`
      */ /**
      * `Log out`
      */ /**
      * `The plugin ({{pluginName}}) (hosted on {{pluginURL}}) is going to request the following permissions:`
      */ /**
      * `Permissions`
      */ /**
      * `Sites`
      */ /**
      * `Mask needs the following permissions`
      */ /**
      * `Grant`
      */ /**
      * `No Mask wallet found.`
      */ /**
      * `No persona found`
      */ /**
      * `Permission request`
      */ /**
      * `To continue, Mask Network needs permission to access the following URL:`
      */ /**
      * `This gives Mask Network the necessary abilities to provide the requested function properly.`
      */ /**
      * `Welcome`
      */ /**
      * `Tokens`
      */ /**
      * `NFTs`
      */ /**
      * `Successfully added`
      */ /**
      * `Detected legacy wallets, please click confirm to restore them all.`
      */ /**
      * `Set the payment password`
      */ /**
      * `Create Password`
      */ /**
      * `Payment Password`
      */ /**
      * `Set up payment password`
      */ /**
      * `Old Payment Password`
      */ /**
      * `New Payment Password`
      */ /**
      * `Confirm Password`
      */ /**
      * `The new passwords don't match`
      */ /**
      * `At least 6 characters`
      */ /**
      * `Set payment password successfully.`
      */ /**
      * `By proceeding you agree to the`
      */ /**
      * `Forgot payment password?`
      */ /**
      * `The Payment password must be a combination of 2 categories out of numbers, letters, and special characters with a length of 8-20 characters.`
      */ /**
      * `Incorrect Payment Password.`
      */ /**
      * `Connect to your wallet, create a new wallet or recover an existing wallet using a seed phrase.`
      */ /**
      * `Enter 1-12 characters`
      */ /**
      * `Mnemonic`
      */ /**
      * `Json File`
      */ /**
      * `Private Key`
      */ /**
      * `Keystore`
      */ /**
      * `Enter 12 or 24 mnemonic words.`
      */ /**
      * `Original Password`
      */ /**
      * `Tokens`
      */ /**
      * `NFTs`
      */ /**
      * `Activities`
      */ /**
      * `Derivation path ({{- path }})`
      */ /**
      * `To`
      */ /**
      * `Next`
      */ /**
      * `Back up the wallet`
      */ /**
      * `JSON File`
      */ /**
      * `Private Key`
      */ /**
      * `Reset Wallet`
      */ /**
      * `Payment password stored locally and you could try many times to unlock your wallet.`
      */ /**
      * `Note: If you using the mnemonic phrase from your last import, you can recover the wallet derived from that mnemonic phrase.`
      */ /**
      * `This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.`
      */ /**
      * `Please don’t show anyone your private key. The private key can be used in any wallet that supports EVM-compatible chains without decryption.`
      */ /**
      * `Please enter your backup password.`
      */ /**
      * `Please enter your payment password.`
      */ /**
      * `Drag your file into here…`
      */ /**
      * `Click or drag your file here`
      */ /**
      * `Write down mnemonic words`
      */ /**
      * `Please write down the following words in correct order. Keep it safe and do not share with anyone!`
      */ /**
      * `hide Mnemonic words`
      */ /**
      * `Copy private key`
      */ /**
      * `Enter your wallet name`
      */ /**
      * `Are you sure you want to delete this wallet? Your wallet cannot be recovered without seed phrase.`
      */ /**
      * `This wallet {{management}} is management account of SmartPay Wallet {{addresses}}. You cannot use SmartPay wallet to interact with blockchain after deleting it.`
      */ /**
      * `Are you sure you want to delete this wallet?`
      */ /**
      * `Confirm with payment password`
      */ /**
      * `Buy`
      */ /**
      * `Send`
      */ /**
      * `Swap`
      */ /**
      * `Wallet disconnect failed`
      */ /**
      * `View on Explorer`
      */ /**
      * `Gas fee settings`
      */ /**
      * `Gas fees are the fees for paying ethereum miners. The miners prefer to pack transactions with higher gas fees. Transactions with low gas fees might fail, and the paid gas fees won’t be returned.`
      */ /**
      * `Low`
      */ /**
      * `Medium`
      */ /**
      * `High`
      */ /**
      * `Instant`
      */ /**
      * `Custom`
      */ /**
      * `Gas Fee`
      */ /**
      * `Gas price is too low and will cause the transaction to fail`
      */ /**
      * `Priority fee should be greater than 0. `
      */ /**
      * `Max priority fee is too high for network conditions.`
      */ /**
      * `Max priority fee is too low for network conditions.`
      */ /**
      * `Max fee should be greater than base fee of {{minimum}} Gwei. `
      */ /**
      * `Current base fee is {{baseFee}} Gwei`
      */ /**
      * `Max priority fee is too low for network conditions.`
      */ /**
      * `Gas Limit`
      */ /**
      * `Max Priority Fee`
      */ /**
      * `Max Fee`
      */ /**
      * `Gas limit must be at least {{limit}}`
      */ /**
      * `Multiple transaction requests {{index}} / {{total}}`
      */ /**
      * `Reject {{total}} Transactions`
      */ /**
      * `View full transaction details`
      */ /**
      * `Function: {{name}}`
      */ /**
      * `Spend more transaction fees to cancel the previous transaction.`
      */ /**
      * `Spend more transaction fees to cancel the previous transaction.`
      */ /**
      * `Signature Request`
      */ /**
      * `Signature request`
      */ /**
      * `Message`
      */ /**
      * `Contract Interaction`
      */ /**
      * `Token unlock permission`
      */ /**
      * `Infinite unlock`
      */ /**
      * `Transfer`
      */ /**
      * `Gas fee`
      */ /**
      * `Edit`
      */ /**
      * `Total`
      */ /**
      * `The two entered passwords are inconsistent.`
      */ /**
      * `Payment password must be 6 to 20 characters in length.`
      */ /**
      * `Change payment password successfully.`
      */ /**
      * `Unlock Wallet`
      */ /**
      * `Incorrect password`
      */ /**
      * `Incorrect payment password.`
      */ /**
      * `To: {{address}}`
      */ /**
      * `Network connection failure or contract error, send transaction failure.`
      */ /**
      * `Pending...`
      */ /**
      * `Re-Send`
      */ /**
      * `Choose Token`
      */ /**
      * `Gas Price`
      */ /**
      * `Done`
      */ /**
      * `Wallet recovered`
      */ /**
      * `You have no transactions`
      */ /**
      * `Show tokens with value less than $1`
      */ /**
      * `Hide tokens with value less than $1`
      */ /**
      * `Change Owner`
      */ /**
      * `Current Management Accounts`
      */ /**
      * `Set a New Management Account`
      */ /**
      * `Wallets`
      */ /**
      * `Please close this page.`
      */ /**
      * `Connect to {{type}}`
      */ /**
      * `To be verified`
      */ /**
      * `Disconnect`
      */ /**
      * `Disconnect confirmation`
      */ /**
      * `Confirm disconnect?`
      */ /**
      * `Disconnect Social Account?`
      */ /**
      * `This persona verification record will no longer show up in your verification profile page. Your
     Mask friends can no longer send encrypted message to you by this persona or check your Web3
     products.`
      */ /**
      * `Persona`
      */ /**
      * `Twitter ID`
      */ /**
      * `Log out`
      */ /**
      * `After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.`
      */ /**
      * `The persona name already exists.`
      */ /**
      * `Signature request`
      */ /**
      * `message`
      */ /**
      * `Incorrect password`
      */ /**
      * `Backup Password`
      */ /**
      * `Maximum length is {{length}} characters long.`
      */ /**
      * `Connect Mask Network Account using your wallet.`
      */ /**
      * `Waiting for {{providerType}}`
      */ /**
      * `Connecting your {{providerType}} wallet`
      */ /**
      * `Wallet request timed out`
      */ /**
      * `Connecting operation cancelled in third-party wallet.`
      */ /**
      * `Not connected`
      */ /**
      * `Not found your {{providerType}} wallet`
      */ /**
      * `Please install your metamask wallet and set up your first wallet.`
      */ /**
      * `Choose another wallet`
      */ /**
      * `Adding your wallets will allow you to own, view, and utilize your digital identities via Next.ID service. Note that you will be required to sign and authenticate the transaction to prove ownership of your wallet.`
      */ /**
      * `This wallet is connected to current persona {{persona}}.`
      */ /**
      * `You have successfully signed with your wallet.`
      */ /**
      * `Sorry, signature failed! Please try signing again.`
      */ /**
      * `Failed to add the wallet, please try again.`
      */ /**
      * `Connecting {{persona}} with {{wallet}} successfully.`
      */ /**
      * `Switch Wallet`
      */ /**
      * `Contacts`
      */ /**
      * `Search Next.ID, Twitter, Lens, ENS or Address`
      */ /**
      * `No search results`
      */ /**
      * `No encrypted contacts, you can try searching.`
      */ /**
      * `Add`
      */ /**
      * `No associated accounts`
      */ /**
      * `Deleted successfully`
      */ /**
      * `Added successfully`
      */ /**
      * `Select Wallet`
      */ /**
      * `Switch Persona`
      */ /**
      * `Recovery`
      */ /**
      * `Next.ID`
      */ /**
      * `Wallet Group #{{index}}`
      */ /**
      * `Imported Wallets`
      */ /**
      * `Backup Persona`
      */ /**
      * `Persona name must between 1 to 24 characters.`
      */ /**
      * `Password should contain uppercase and lowercase letters, special characters and numbers.`
      */ /**
      * `Backup password must be 8-20 characters, including uppercase, lowercase, special characters and numbers.`
      */ /**
      * `Please set up backup password to export private key.`
      */ /**
      * `The two entered passwords are inconsistent.`
      */ /**
      * `Incorrect backup password.`
      */ /**
      * `Please enter backup password to export persona private key.`
      */ /**
      * `Backup password set successfully`
      */ /**
      * `This file has been encrypted and stored with your current password. Your current password is needed to decrypt this file when using it to import wallet.`
      */ /**
      * `This JSON file is encrypted with your current payment password. The same password is required for decryption when importing this wallet.`
      */ /**
      * `After logging out, your associated social accounts will no longer decrypt past encrypted messages. If you need to reuse your account, you can recover your account with your identity, private key, local or cloud backup.`
      */ /**
      * `Please note: This Persona {{persona}} is the management account of above listed SmartPay wallet. You cannot use SmartPay wallet to interact with blockchain after logging out persona.`
      */ /**
      * `Please note: This Persona {{persona}} is the management account of above listed SmartPay wallets. You cannot use SmartPay wallet to interact with blockchain after logging out persona.`
      */ /**
      * `Logout successfully`
      */ /**
      * `Logout failed`
      */ /**
      * `Image`
      */ /**
      * `NFTs`
      */ /**
      * `Drag & Drop your file here`
      */ /**
      * `Siez limit: 10 MB`
      */ /**
      * `Browser File`
      */ /**
      * `Select and Connect to your wallet`
      */ /**
      * `Avatar set successfully`
      */ /**
      * `Failed to set Avatar.`
      */ /**
      * `Request Source`
      */ /**
      * `Sign Messsage`
      */ /**
      * `Enter Max spend limit`
      */ /**
      * `Spend limit requested by`
      */ /**
      * `This allows the third party to spend {{amount}} {{symbol}} from your current balance.`
      */ /**
      * `This allows the third party to spend all your token balance until it reaches the cap or you revoke the spending cap. If this is not intended, consider setting a lower spending cap.`
      */ /**
      * `The approval for this contract will be revoked in the event of using 0 as the default input.`
      */ /**
      * `Approve amount`
      */ /**
      * `Granted to`
      */ /**
      * `There was a network or RPC provider error, please try again later!`
      */ /**
      * `Gas price should be greater than 0`
      */ /**
      * `General`
      */ /**
      * `Basic setting`
      */ /**
      * `Language`
      */ /**
      * `Appearance`
      */ /**
      * `Supported Sites`
      */ /**
      * `Backup & Recovery`
      */ /**
      * `Data correlation`
      */ /**
      * `Cloud Backup`
      */ /**
      * `Local Backup`
      */ /**
      * `Restore Database`
      */ /**
      * `Restore from a previous database backup`
      */ /**
      * `Backup Password`
      */ /**
      * `Support`
      */ /**
      * `Feedback`
      */ /**
      * `FAQ&Tutorial`
      */ /**
      * `Website`
      */ /**
      * `About`
      */ /**
      * `Version`
      */ /**
      * `Service Agreement`
      */ /**
      * `Privacy Policy`
      */ /**
      * `Follow System`
      */ /**
      * `Follow System`
      */ /**
      * `Light`
      */ /**
      * `Dark`
      */ /**
      * `Select language`
      */ /**
      * `Manage the permissions of the Mask Network plugin to inject into websites. Once turned off, the use of the plugin on this site will no longer be supported.`
      */ /**
      * `Change Backup Password`
      */ /**
      * `New password`
      */ /**
      * `New password cannot be the same as your current password.`
      */ /**
      * `Lack of number, letter or special character.`
      */ /**
      * `Please set the backup password to back up`
      */ /**
      * `No back up`
      */ /**
      * `Backup on {{time}}`
      */ /**
      * `You've backedup.`
      */ /**
      * `You've backedup with email/phone number.`
      */ /**
      * `Not set`
      */ /**
      * `Wallet`
      */ /**
      * `Please input contract address`
      */ /**
      * `Please input token ID`
      */ /**
      * `The contract address is incorrect or the collection does not belong to you`
      */ /**
      * `Add Collectible`
      */ /**
      * `Add`
      */ /**
      * `Checking`
      */ /**
      * `NFT Avatar Setting`
      */ /**
      * `Change`
      */ /**
      * `Add Collectible`
      */ /**
      * `NFT PFP`
      */ /**
      * `No address found.`
      */ /**
      * `This project is no more active`
      */ /**
      * `Completed`
      */ /**
      * `Paused`
      */ /**
      * `Collection`
      */ /**
      * `Details`
      */ /**
      * `Created by`
      */ /**
      * `Purchase`
      */ /**
      * `Purchasing....`
      */ /**
      * `Please check ToS document`
      */ /**
      * `Price per mint`
      */ /**
      * `Price:`
      */ /**
      * `Minted:`
      */ /**
      * `License:`
      */ /**
      * `Library:`
      */ /**
      * `Website`
      */ /**
      * `Infos`
      */ /**
      * `Chain`
      */ /**
      * `Blockchain:`
      */ /**
      * `Contract:`
      */ /**
      * `Something went wrong!`
      */ /**
      * `Wallet disconnect successfully`
      */ /**
      * `I just purchased a beautiful piece of art from '{{name}}' collection for {{- price}} {{symbol}}. Install @realMaskNetwork to get yours.`
      */ /**
      * `I just purchased a beautiful piece of art from '{{name}}' collection for {{- price}} {{symbol}}. Welcome to join.`
      */ /**
      * `The tips feature currently supports only EVM chains. Support for other chains will be added in the future.`
      */ /**
      * `Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.`
      */ /**
      * `Artblocks`
      */ /**
      * `Optimize the display of search results about ENS in social media.`
      */ /**
      * `ENS`
      */ /**
      * `Set NFT Avatar`
      */ /**
      * `MaskBox`
      */ /**
      * `Professional multi-chain decentralized platform for launching NFT mystery boxes.`
      */ /**
      * `Fiat On-Ramp`
      */ /**
      * `Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.`
      */ /**
      * `Unsupported network type`
      */ /**
      * `Default`
      */ /**
      * `Provided by`
      */ /**
      * `Enable plugin`
      */ /**
      * `Go to Settings`
      */ /**
      * `Can’t find a valid user address data source.`
      */ /**
      * `General user`
      */ /**
      * `View user’s Web3 footprints, including NFTs, social media posts and other transaction activities based on public data source.`
      */ /**
      * `Token`
      */ /**
      * `View real-time crypto prices, market cap, trading volume, etc.`
      */ /**
      * `NFT collection `
      */ /**
      * `Stay on top of NFT trending information, hot projects, notable transactions, etc.`
      */ /**
      * `General user`
      */ /**
      * `View user’s Web3 footprints, including NFTs, social media posts and other transaction activities based on public data source.`
      */ /**
      * `NFT collection `
      */ /**
      * `Stay on top of NFT trending information, hot projects, notable transactions, etc.`
      */ /**
      * `DSearch`
      */ /**
      * `Optimize search results with token names, NFT collections, ENS domains or wallet addresses.`
      */ /**
      * `Token`
      */ /**
      * `Get optimized search results when you look for a token.`
      */ /**
      * `NFTs`
      */ /**
      * `Search with the name of an NFT collection or its symbol to get optimized results.`
      */ /**
      * `ENS or Wallet Address`
      */ /**
      * `Search with an ENS domain or wallet address to get optimized results.`
      */ /**
      * `Please create a Persona and verify your account to use this function.`
      */ /**
      * `Persona`
      */ /**
      * `Create persona`
      */ /**
      * `Insufficient balance`
      */ /**
      * `Create Persona`
      */ /**
      * `Connect Persona`
      */ /**
      * `Verify your Twitter ID`
      */ /**
      * `Scan QR code with a WalletConnect-compatible wallet`
      */ /**
      * `WalletConnect`
      */ /**
      * `Connect Wallet`
      */ /**
      * `Success`
      */ /**
      * `Failed`
      */ /**
      * `Clear`
      */ /**
      * `{{count}} Pending`
      */ /**
      * `{{count}} Pendings`
      */ /**
      * `Clear All`
      */ /**
      * `Not select wallet yet.`
      */ /**
      * `Risk Warning`
      */ /**
      * `Clicking the confirm button means that you agree to bear the above possible risks.`
      */ /**
      * `Confirming`
      */ /**
      * `Confirm Failed`
      */ /**
      * `String must contain at least 1 character(s)`
      */ /**
      * `Token ID separated by comma, e.g. 1223,1224,`
      */ /**
      * `Phantom only supports the Solana chain.`
      */ /**
      * `Blocto only supports the Flow chain.`
      */ /**
      * `Fortmatic only supports the ETH and BNB chain.`
      */ /**
      * `Only supports EVM chains, ETH, BNB chain, Polygon, Arb, Op, etc.`
      */ /**
      * `Connect Fortmatic`
      */ /**
      * `Choose Network`
      */ /**
      * `You need to open the DAPP to view the specific content.`
      */ /**
      * `Manage Network`
      */ /**
      * `Add Network`
      */ /**
      * `Network Name`
      */ /**
      * `RPC URL`
      */ /**
      * `Chain ID`
      */ /**
      * `Currency Symbol (Optional)`
      */ /**
      * `Block Explorer URL`
      */ /**
      * `This wallet name already exists.`
      */ /**
      * `This network name already exists`
      */ /**
      * `Invalid RPC URL.`
      */ /**
      * `Invalid Block Explorer URL.`
      */ /**
      * `This RPC URL is currently used by the {{- name}} network`
      */ /**
      * `This Chain ID is currently used by the {{- name}} network. `
      */ /**
      * `Could not fetch chain ID. Is your RPC URL correct?`
      */ /**
      * `The RPC URL you have entered returned a different chain ID ({{chain_id}}). Please update the Chain ID to match the RPC URL of the network you are trying to add.`
      */ /**
      * `The network with chain ID {{chain_id}} may use a different currency symbol ({{symbol}}) than the one you have entered. Please check.`
      */ /**
      * `URLs require the appropriate HTTPS prefix.`
      */ /**
      * `Failed to save network`
      */ /**
      * `Incorrect Chain Id`
      */ /**
      * `Invalid number`
      */ /**
      * `Saved network successfully`
      */ /**
      * `Adding network successfully`
      */ /**
      * `Network successfully deleted.`
      */ /**
      * `Successfully hidden.`
      */ /**
      * `Not enough data to present.`
      */ /**
      * `Send`
      */ /**
      * `Receive`
      */ /**
      * `Swap`
      */ /**
      * `Add Contact`
      */ /**
      * `Add contact successfully.`
      */ /**
      * `Edit Contact`
      */ /**
      * `Edit contact successfully.`
      */ /**
      * `Delete Contact`
      */ /**
      * `Delete contact successfully.`
      */ /**
      * `Name your wallet`
      */ /**
      * `Wallet Account`
      */ /**
      * `Imported`
      */ /**
      * `Scan QR code to receive payment`
      */ /**
      * `WalletConnect`
      */ /**
      * `Scan QR code with WalleConnecnt-compatible wallet`
      */ /**
      * `Empty`
      */ /**
      * `Hide {{- symbol}}`
      */ /**
      * `Confirm to hide {{- symbol}}?  You can redisplay it by re-adding this token at any time.`
      */ /**
      * `Scam tx`
      */ /**
      * `to {{address}}`
      */ /**
      * `status`
      */ /**
      * `Failed`
      */ /**
      * `Success`
      */ /**
      * `Pending`
      */ /**
      * `Base`
      */ /**
      * `From`
      */ /**
      * `To`
      */ /**
      * `Link`
      */ /**
      * `Transaction Hash`
      */ /**
      * `Gas Limit (Units)`
      */ /**
      * `Gas Used (Units)`
      */ /**
      * `Gas Price (GWEI)`
      */ /**
      * `Priority Fee (GWEI)`
      */ /**
      * `Max Fee (GWEI)`
      */ /**
      * `Transaction Fee`
      */ /**
      * `Activity Log`
      */ /**
      * `The transaction was confirmed at {{- datetime}}`
      */ /**
      * `The transaction was complete and has been recorded on blockchain at {{- datetime}}`
      */ /**
      * `Collectible`
      */ /**
      * `Description`
      */ /**
      * `Properties`
      */ /**
      * `Properties`
      */ /**
      * `Abount {{- name}}`
      */ /**
      * `Hide {{-name}}`
      */ /**
      * `Confirm to hide {{- name}}? You can redisplay it by re-adding this NFT at any time.`
      */ /**
      * `Add new address to an existing group`
      */ /**
      * `Or create a new wallet group`
      */ /**
      * - compose_shared_friends_one: `1 friend`
    
      * - compose_shared_friends_other: `{{count}} friends`
      */ /**
      * - select_friends_dialog_persona_connect_one: `The Persona is connected to account`
    
      * - select_friends_dialog_persona_connect_other: `The Persona is connected to accounts`
      */ /**
      * - relative_time_days_ago_one: `{{count}} day ago`
    
      * - relative_time_days_ago_other: `{{count}} days ago`
      */ /**
      * - relative_time_hours_ago_one: `{{count}} hour ago`
    
      * - relative_time_hours_ago_other: `{{count}} hours ago`
      */ /**
      * - relative_time_minutes_ago_one: `{{count}} minute ago`
    
      * - relative_time_minutes_ago_other: `{{count}} minutes ago`
      */ /**
      * - relative_time_months_ago_one: `{{count}} month ago`
    
      * - relative_time_months_ago_other: `{{count}} months ago`
      */ /**
      * - relative_time_seconds_ago_one: `{{count}} second ago`
    
      * - relative_time_seconds_ago_other: `{{count}} seconds ago`
      */ /**
      * - relative_time_years_ago_one: `{{count}} year ago`
    
      * - relative_time_years_ago_other: `{{count}} years ago`
      */ /**
      * - relative_time_days_other: `{{count}} days`
    
      * - relative_time_days_one: `{{count}} day`
      */ /**
      * - relative_time_hours_other: `{{count}} hours`
    
      * - relative_time_hours_one: `{{count}} hour`
      */ /**
      * - relative_time_minutes_other: `{{count}} minutes`
    
      * - relative_time_minutes_one: `{{count}} minute`
      */ /**
      * - relative_time_months_one: `{{count}} month`
    
      * - relative_time_months_other: `{{count}} months`
      */ /**
      * - relative_time_seconds_one: `{{count}} second`
    
      * - relative_time_seconds_other: `{{count}} seconds`
      */ /**
      * - relative_time_years_one: `{{count}} year`
    
      * - relative_time_years_other: `{{count}} years`
      */ /**
      * - plugin_wallet_pending_transactions_one: `{{count}} Pending`
    
      * - plugin_wallet_pending_transactions_other: `{{count}} Pendings`
      */ /**
      * - popups_wallet_settings_auto-unlock_time_hour_one: `{{count}} Hour`
    
      * - popups_wallet_settings_auto-unlock_time_hour_other: `{{count}} Hours`
      */ /**
      * - popups_wallet_priority_fee_is_zero: `Priority fee should be greater than 0. `
      */ /**
      * - popups_log_out_with_smart_pay_tips_one: `Please note: This Persona {{persona}} is the management account of above listed SmartPay wallet. You cannot use SmartPay wallet to interact with blockchain after logging out persona.`
    
      * - popups_log_out_with_smart_pay_tips_other: `Please note: This Persona {{persona}} is the management account of above listed SmartPay wallets. You cannot use SmartPay wallet to interact with blockchain after logging out persona.`
      */ /**
      * - popups_wallet_gas_price_should_greater_than_zero: `Gas price should be greater than 0`
      */ /**
      * - wallet_status_pending_one: `{{count}} Pending`
    
      * - wallet_status_pending_other: `{{count}} Pendings`
      */ /**
      * - popups_wallet_connected_status$connected: `Connected`
    
      * - popups_wallet_connected_status$unconnected: `Not Connected`
      */ {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)("mask");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>createProxy((key)=>t.bind(null, key)), [
        t
    ]);
}
function createComponent(i18nKey) {
    return (props)=>createElement(Trans, {
            i18nKey,
            ns: "mask",
            shouldUnescape: true,
            ...props
        });
}
const MaskSharedTrans = /**
      * `Powered by <span>{{whom}}</span>`
      */ /**
      * `If your browser does not redirect, please <terms>click here</terms>.`
      */ /**
      * `Please switch to <bold>@{{- account}}</bold> to continue the account verification progress.`
      */ /**
      * `<bold>@{{- account}}</bold> connected already.`
      */ /**
      * `Sent verification post successfully.<br/> <br/>You could check the verification result on Mask Pop-up after few minutes. If failed, try sending verification post again.`
      */ /**
      * `Connected successfully. <br/><br/>Trying exploring more features powered by Mask Network.`
      */ /**
      * `You can add <strong>{{token}}</strong> back in the future by going to "Add Token" in the wallet panel.`
      */ /**
      * `<sup>(beta)<sup>`
      */ /**
      * `Please make sure that your {{providerName}} wallet is provided by the official <providerLink>{{providerShortenLink}}</providerLink>.`
      */ /**
      * `After two simple steps, you will own, view, and utilize your digital identities through the<br/>services of Next.ID. You can disconnect them easily at any time.`
      */ /**
      * `Other social networking platforms, such as <strong>Instagram,</strong> <strong>Facebook,</strong> and <strong>Minds,</strong> do not have a verified relationship like Twitter's Next.ID verified connection. <br /> <br /> When connecting a persona with an account on these platforms, they only support sending encrypted posts.`
      */ /**
      * `No associated wallet. <strong>Add Wallet.</strong>`
      */ /**
      * `Twitter account @<strong>{{account}}</strong> has not been verified by Next.ID. Please switch to @<strong>{{account}}</strong> to proceed on Twitter.`
      */ /**
      * `Are you sure to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?`
      */ /**
      * `Are you sure to disconnect {{personaName}} from wallet <strong>{{identity}}</strong>？`
      */ /**
      * `Current wallet (<bold>{{wallet}}</bold>) is the management account of SmartPay wallet (<bold>{{other_wallets}}</bold>).<br/>Deleting the current wallet will result in the deletion of the SmartPay wallet simultaneously.`
      */ /**
      * `<agreement>Service Agreement</agreement> and <policy>Privacy Policy</policy>`
      */ /**
      * `If you forget payment password, you can enter 'RESET' to reset your wallet. <strong>Remember, this action will erase all your previous wallets.</strong>`
      */ /**
      * `Tap to view the mnemonic words <br /> Make sure no one is looking at your screen`
      */ /**
      * `Tap to view the private key <br /> Make sure no one is looking at your screen`
      */ /**
      * `Gas limit must be > 21,000 and < 15M.`
      */ /**
      * `Likely in < {{seconds}} seconds`
      */ /**
      * ` ≈ <span>{{usd}}</span>`
      */ /**
      * `This twitter verification relationship with Persona will not be recorded in Next.ID.<br /> <br/> Performing this action will impact these Persona-related features:<br /> <li>Send the encrypted message.</li> <li>‘Browser your Web3’ features.</li><br/>`
      */ /**
      * `Do you want to remove the verified association between the Twitter account @<strong>{{- identity}}</strong> and {{- personaName}}?`
      */ /**
      * `Are you sure to remove the connected wallet <strong>{{wallet}}</strong>?`
      */ /**
      * `Please note: This Persona {{persona}} is the management account of SmartPay wallet <span>{{addresses}}</span>. You cannot use SmartPay wallet to interact with blockchain after logging out persona.`
      */ /**
      * `This export is only for exporting private key. We do not export any other data. If you need more data, please go to Settings: <a> Global Backup </a>`
      */ /**
      * `Give permission to access <br /> your {{symbol}}?`
      */ /**
      * `By granting permission, you are allowing the following <br /> contract to access your funds`
      */ /**
      * `Give permission to access <br /> your {{symbol}}?`
      */ /**
      * `By granting permission, you are allowing the following <br /> contract to access your NFTs`
      */ /**
      * `<strong>{{count}}<strong> Website`
      */ /**
      * `<strong>{{count}}<strong> Websites`
      */ /**
      * `Connect your wallet here.<br/>This section will be shown to your encrypted friends.<br/>The display content includes digital art, donations, badges<br/>and other public information on chain.`
      */ /**
      * `By checking this box, I agree to ArtBlocks's <terms>Terms of Service</terms>.`
      */ /**
      * `Are you going to disconnect {{persona}} from wallet <strong>{{address}}<strong/>?`
      */ /**
      * `Dear User,<br/><br/>When using any wallet-related plugins in Mask Network, please confirm the following usage risks:<br/><br/>Mask Network provides non-commercial free services. The plug-ins are provided by community members and other excellent third-party DApp teams. Due to the freedom of the decentralized network and other uncertain risk factors, users are requested to properly protect their sensitive information such as wallet mnemonic words and private keys. Please be cautious when conducting any blockchain contract interaction. The risks caused by any third-party DApps (plug-ins) are borne by the third-party DApps themselves.`
      */ /**
      * `from <addr>{{address}}</addr>`
    
      * - other_address$from: `from <addr>{{address}}</addr>`
    
      * - other_address$to: `to <addr>{{address}}</addr>`
      */ /**
      * `from <addr>{{address}}</addr>`
      */ /**
      * `to <addr>{{address}}</addr>`
      */ /**
      * - popups_settings_supported_website_one: `<strong>{{count}}<strong> Website`
    
      * - popups_settings_supported_website_other: `<strong>{{count}}<strong> Websites`
      */ /*#__PURE__*/ (/* unused pure expression or super */ null && (createProxy(createComponent)));


/***/ }),

/***/ 30504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87148);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16256);
/* harmony import */ var _usePluginWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18586);
/* harmony import */ var _useTrans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94892);
/* harmony import */ var _utils_getAvailablePlugins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79412);







function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent, rootElement) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_usePluginWrapper_js__WEBPACK_IMPORTED_MODULE_2__/* .PluginWrapperMethodsContext */ .y.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin, props }) {
        const t = (0,_useTrans_js__WEBPACK_IMPORTED_MODULE_3__/* .usePluginTransField */ .T)();
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .ErrorBoundary */ .S, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const allPlugins = usePlugins();
        const availablePlugins = (0,_utils_getAvailablePlugins_js__WEBPACK_IMPORTED_MODULE_5__/* .getAvailablePlugins */ .q)(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .ShadowRootIsolation */ .Q, {
                "data-plugin": plugin.ID,
                rootElement: rootElement,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SinglePluginWithinErrorBoundary, {
                    plugin: plugin,
                    props: props
                })
            }, plugin.ID));
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .ErrorBoundary */ .S, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data, UI } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        ...data
    });
}
function RawHookRender({ UI, data }) {
    const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [f, setF] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const cancel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort();
    }, [
        ref,
        UI.init
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        f?.(data);
    }, [
        f,
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 18586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ usePluginWrapper),
/* harmony export */   y: () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89601);


const emptyPluginWrapperMethods = {
    setWrap: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
PluginWrapperMethodsContext.displayName = 'PluginWrapperMethodsContext';
function usePluginWrapper(open, options) {
    const { setWidth, setWrap, setWrapperName } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width, name } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open);
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width), [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name), [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 94892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ usePluginTransField),
/* harmony export */   s: () => (/* binding */ PluginTransFieldRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24002);


function PluginTransFieldRender({ pluginID, field }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    });
}
function usePluginTransField() {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}


/***/ }),

/***/ 79412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ getAvailablePlugins)
/* harmony export */ });
function getAvailablePlugins(plugins, producer) {
    return producer ? producer(plugins) : plugins;
}


/***/ }),

/***/ 45522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 16044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: () => (/* binding */ PopupHomeTabType),
/* harmony export */   hA: () => (/* binding */ SOCIAL_MEDIA_ROUND_ICON_MAPPING),
/* harmony export */   mN: () => (/* binding */ EnhanceableSite_RSS3_NFT_SITE_KEY_map),
/* harmony export */   wV: () => (/* binding */ PERSONA_AVATAR_DB_NAMESPACE)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, RSS3_NFT_SITE_KEY */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77953);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterX, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Minds, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.TwitterXRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.FacebookRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Minds]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.MindsRound,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.InstagramRoundColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.OpenSea]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.OpenSeaColored,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Mirror]: _masknet_icons__WEBPACK_IMPORTED_MODULE_2__.Mirror,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Localhost]: null
};
var RSS3_NFT_SITE_KEY;
(function(RSS3_NFT_SITE_KEY) {
    RSS3_NFT_SITE_KEY["TWITTER"] = '_nfts';
    RSS3_NFT_SITE_KEY["FACEBOOK"] = '_facebook_nfts';
    RSS3_NFT_SITE_KEY["INSTAGRAM"] = '_instagram_nfts';
})(RSS3_NFT_SITE_KEY || (RSS3_NFT_SITE_KEY = {}));
const EnhanceableSite_RSS3_NFT_SITE_KEY_map = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Facebook]: RSS3_NFT_SITE_KEY.FACEBOOK,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Twitter]: RSS3_NFT_SITE_KEY.TWITTER,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .J.Instagram]: RSS3_NFT_SITE_KEY.INSTAGRAM
};
const PERSONA_AVATAR_DB_NAMESPACE = 'com.maskbook.persona.avatar.storage';
var PopupHomeTabType;
(function(PopupHomeTabType) {
    PopupHomeTabType["SocialAccounts"] = 'Social Accounts';
    PopupHomeTabType["ConnectedWallets"] = 'Connected Wallets';
})(PopupHomeTabType || (PopupHomeTabType = {}));


/***/ }),

/***/ 3266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43204);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61536);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _applyToDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79836);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        styles: (0,_applyToDOM_js__WEBPACK_IMPORTED_MODULE_4__/* .CSSVariableInjectorCSS */ .P)(colorScheme)
    });
}


/***/ }),

/***/ 80835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 26909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 16256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ShadowRootIsolation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51573);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32704);
/* harmony import */ var _Contexts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64244);
/* harmony import */ var _ShadowRootStyleProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60186);
/* eslint-disable react-hooks/rules-of-hooks */ 





/** Tag name */ /**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children, rootElement = 'div', ...props }) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts_js__WEBPACK_IMPORTED_MODULE_4__/* .DisableShadowRootContext */ .AZ)).current;
    if (disabled) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!container.current) {
        container.current = typeof rootElement === 'function' ? rootElement() : document.createElement(rootElement);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        // Note: ShadowRootIsolation is expected to use inside other closed ShadowRoot
        const shadow = dom.attachShadow({
            ..._masknet_flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags */ .v.shadowRootInit,
            mode: 'open',
            delegatesFocus: false
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider_js__WEBPACK_IMPORTED_MODULE_5__/* .ShadowRootStyleProvider */ .q, {
            preventPropagation: false,
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(children, container.current)
        })
    });
}


/***/ }),

/***/ 60186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ShadowRootStyleProvider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+cache@11.11.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(92984);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.11.1_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js
var emotion_element_c39617d8_browser_esm = __webpack_require__(11020);
;// CONCATENATED MODULE: ./packages/theme/src/ShadowRoot/ShadowRootStyleSheet.ts
/// <reference types="@masknet/global-types/firefox" />
/// <reference types="@masknet/global-types/env" />
const shadowHeadMap = new WeakMap();
// There are 2 rendering mode of this ShadowRootStyleSheet.
// 1. If the host supports ConstructableStyleSheet proposal:
//      It is the fastest but only Chrome supports it.
// 2. style tags that being synchronize between all ShadowRoot.
//      See https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js
//      Note: We cannot use .sheet.insertRule (so called "speedy mode") because in our app,
//            the host of a ShadowRoot might be detached from the DOM and reattach to another place,
//            when a <style> tag is disconnected from the DOM, it's CSSStyleSheet object will be dropped.
class StyleSheet {
    // Unlucky, emotion will create it's own StyleSheet and use isSpeedy, tags, keys and container for Global components.
    tags = [];
    container = document.createElement('div');
    isSpeedy = false;
    key;
    constructor(options){
        this.key = options.key;
        if (options.container instanceof ShadowRoot) {
            this.implementation = 'adoptedStyleSheets' in Document.prototype ? new ConstructableStyleSheet() : new SynchronizeStyleSheet();
            this.addContainer(options.container);
            Reflect.set(this.container, 'sheet', this);
        } else {
            // global style
            const un_global = Reflect.get(options.container, 'sheet');
            if (!(un_global instanceof StyleSheet)) throw new TypeError();
            // A hack to the emotion StyleSheet
            // eslint-disable-next-line no-constructor-return
            return {
                tags: [],
                key: options.key,
                insert: un_global.implementation.insertGlobal.bind(un_global.implementation),
                flush: un_global.implementation.flushGlobal.bind(un_global.implementation)
            };
        }
    }
    addContainer(container) {
        this.implementation.addContainer(container, this.key);
    }
    hydrate() {
        throw new Error('Does not support SSR.');
    }
    insert(rule) {
        if (false) {}
        this.implementation.insert(rule);
    }
    flush() {
        this.implementation.flush();
        this._alreadyInsertedOrderInsensitiveRule = false;
    }
    implementation;
    _alreadyInsertedOrderInsensitiveRule = false;
}
class ConstructableStyleSheet {
    sheet = new CSSStyleSheet();
    globalSheet = new CSSStyleSheet();
    added = new WeakSet();
    addContainer(container) {
        if (this.added.has(container)) return;
        this.added.add(container);
        if (typeof XPCNativeWrapper === 'undefined') {
            // push & unshift crashes Chrome 103. Not tested on other versions.
            container.adoptedStyleSheets = [
                this.globalSheet,
                ...container.adoptedStyleSheets,
                this.sheet
            ];
        } else {
            // assignment does not work on Firefox 102. Not tested on other versions.
            const unsafe = XPCNativeWrapper.unwrap(container.adoptedStyleSheets);
            Array.prototype.unshift.call(unsafe, XPCNativeWrapper.unwrap(this.globalSheet));
            Array.prototype.push.call(unsafe, XPCNativeWrapper.unwrap(this.sheet));
        }
    }
    insert(rule) {
        insertRuleSpeedy(this.sheet, rule);
    }
    insertGlobal(rule) {
        insertRuleSpeedy(this.globalSheet, rule);
    }
    flush() {
        this.sheet.replaceSync('');
    }
    flushGlobal() {
        this.globalSheet.replaceSync('');
    }
}
class SynchronizeStyleSheet {
    ctr = 0;
    containers = new Map();
    addContainer(container, tag) {
        if (this.containers.has(container)) return;
        // setup tags
        const head = getShadowRootHead(container);
        const localContainer = document.createElement('div');
        localContainer.dataset.styleContainer = tag;
        head.appendChild(localContainer);
        this.containers.set(container, localContainer);
        {
            const style = createStyleElement();
            style.dataset.globalStyleOf = tag;
            head.insertBefore(style, head.firstChild);
            this.globalStyles.set(container, style);
        }
        // copy styles
        const first = this.containers.entries().next();
        if (first.done) return;
        // there is no previous styles. we are done.
        const frag = document.createDocumentFragment();
        for (const x of first.value[1].children){
            frag.appendChild(x.cloneNode(true));
        }
        localContainer.appendChild(frag);
    }
    insert(rule) {
        if (this.ctr % 25 === 0) {
            this._insertTag();
        }
        for (const container of this.containers.values()){
            const tag = container.lastElementChild;
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr += 1;
    }
    insertGlobal(rule) {
        for (const style of this.globalStyles.values()){
            style.appendChild(document.createTextNode(rule));
        }
    }
    flush() {
        for (const container of this.containers.values()){
            for (const tag of container.children){
                tag.remove();
            }
        }
        this.ctr = 0;
    }
    flushGlobal() {
        this.globalStyles.forEach((x)=>x.innerText = '');
    }
    _insertTag = ()=>{
        for (const container of this.containers.values()){
            container.appendChild(createStyleElement());
        }
    };
    globalStyles = new Map();
}
function getShadowRootHead(shadow) {
    if (!shadowHeadMap.has(shadow)) {
        const head = document.createElement('head');
        shadowHeadMap.set(shadow, head);
        shadow.insertBefore(head, shadow.firstChild);
    }
    return shadowHeadMap.get(shadow);
}
function createStyleElement() {
    const tag = document.createElement('style');
    tag.appendChild(document.createTextNode(''));
    return tag;
}
function insertRuleSpeedy(sheet, rule) {
    try {
        sheet.insertRule(rule, sheet.cssRules.length);
    } catch (error) {
        if (false) {}
    }
}

// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Contexts.ts
var Contexts = __webpack_require__(64244);
;// CONCATENATED MODULE: ./packages/theme/src/ShadowRoot/ShadowRootStyleProvider.tsx






/**
 * @internal
 * This component provide the modified version of tss-react and emotion context,
 * therefore styles within this component can render correctly in ShadowRoot.
 *
 * This component is used to render inside a bare ShadowRoot.
 * If you need a nested ShadowRoot render, use ShadowRootIsolation.
 */ function ShadowRootStyleProvider(props) {
    const { shadow, children } = props;
    const [cache, sheets] = getShadowRootEmotionCache(shadow);
    const preventEventPropagationList = (0,react.useContext)(Contexts/* PreventShadowRootEventPropagationListContext */.N);
    (0,react.useEffect)(()=>{
        if (!props.preventPropagation) return;
        preventEventPropagationList.forEach((event)=>shadow.addEventListener(event, Contexts/* stopPropagation */.UW));
        return ()=>preventEventPropagationList.forEach((event)=>shadow.removeEventListener(event, Contexts/* stopPropagation */.UW));
    }, [
        props.preventPropagation,
        preventEventPropagationList,
        shadow
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Contexts/* StyleSheetsContext */.EP.Provider, {
        value: sheets,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(emotion_element_c39617d8_browser_esm.C, {
            value: cache,
            children: children
        })
    });
}
const styleSheetMap = new WeakMap();
function getShadowRootEmotionCache(shadow) {
    if (styleSheetMap.has(shadow)) return styleSheetMap.get(shadow);
    // emotion doesn't allow numbers appears in the key
    const instanceID = Math.random().toString(36).slice(2).replaceAll(/\d/g, 'x').slice(0, 4);
    const key = 'css-' + instanceID;
    const muiEmotionCache = (0,emotion_cache_browser_esm/* default */.Z)({
        key
    });
    const muiStyleSheet = new StyleSheet({
        key,
        container: shadow
    });
    muiEmotionCache.sheet = muiStyleSheet;
    styleSheetMap.set(shadow, [
        muiEmotionCache,
        muiStyleSheet
    ]);
    return styleSheetMap.get(shadow);
}


/***/ }),

/***/ 39112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ MaskThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7133);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79783);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44513);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75369);
/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8330);





function MaskThemeProvider(props) {
    const { children, useTheme, useMaskIconPalette, CustomSnackbarOffsetY } = props;
    const theme = useTheme();
    const MaskIconPalette = useMaskIconPalette(theme);
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .compose */ .q)((jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .MaskIconPaletteContext */ .v.Provider, {
            value: MaskIconPalette,
            children: jsx
        }), (children)=>(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
            theme,
            children
        }), (jsx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_index_js__WEBPACK_IMPORTED_MODULE_4__/* .CustomSnackbarProvider */ .YO, {
            disableWindowBlurListener: false,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            },
            children: jsx,
            offsetY: CustomSnackbarOffsetY
        }), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {}),
            children
        ]
    }));
}


/***/ }),

/***/ 43666:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 69550:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(43666);
} else {}


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
//# sourceMappingURL=4305.js.map