"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[5021],{

/***/ 25021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fetchFollowStatus: () => (/* binding */ fetchFollowStatus),
  fetchFollowers: () => (/* binding */ fetchFollowers),
  fetchIdentity: () => (/* binding */ fetchIdentity)
});

// EXTERNAL MODULE: ./packages/shared-base/src/Pageable/index.ts
var Pageable = __webpack_require__(38645);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
;// CONCATENATED MODULE: ./packages/plugins/Beholder/src/constants.ts

const CYBERCONNECT_PLUGIN_ID = PluginID/* PluginID */.P.CyberConnect;
var ProfileTab;
(function(ProfileTab) {
    ProfileTab["Followings"] = "Followings";
    ProfileTab["Followers"] = "Followers";
})(ProfileTab || (ProfileTab = {}));
const PageSize = 50;

;// CONCATENATED MODULE: ./packages/plugins/Beholder/src/Worker/apis/index.ts


async function query(data) {
    const url =  true ? 'https://api.cybertino.io/connect/' : 0;
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return res.json();
}
async function fetchIdentity(address) {
    const data = {
        query: `query QueryForENS {
        identity(address: "${address.toLowerCase()}") {
            address
            ens
            domain
            avatar
        }
    }`,
        variables: {}
    };
    const res = await query(data);
    return res;
}
async function fetchFollowers(category, address, size, indicator) {
    const data = {
        query: `query FullIdentityQuery {
        identity(address: "${address.toLowerCase()}") {
                ${category.toLowerCase()}(first: ${size > PageSize ? PageSize : size}, after: "${Number.parseInt(indicator?.id ?? '0', 10) - 1}"){
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                    startCursor
                }
                list {
                    address
                    ens
                    namespace
                }
            }
        }
    }`,
        variables: {}
    };
    const res = await query(data);
    if (category === ProfileTab.Followings) return (0,Pageable/* createPageable */.LI)(res.data.identity.followings.list, (0,Pageable/* createIndicator */.sz)(indicator), res.data.identity.followings.pageInfo.hasNextPage ? (0,Pageable/* createNextIndicator */.gT)(indicator, res.data.identity.followings.pageInfo.endCursor) : undefined);
    return (0,Pageable/* createPageable */.LI)(res.data.identity.followers.list, (0,Pageable/* createIndicator */.sz)(indicator), res.data.identity.followers.pageInfo.hasNextPage ? (0,Pageable/* createNextIndicator */.gT)(indicator, res.data.identity.followers.pageInfo.endCursor) : undefined);
}
async function fetchFollowStatus(fromAddr, toAddr) {
    const data = {
        query: `query FollowStatusQuery {
            connections(
                fromAddr: "${fromAddr}"
                toAddrList: ["${toAddr}"]
                network: ETH
            ) {
                fromAddr
                toAddr
                followStatus {
                    isFollowed
                    isFollowing
                }
            }
        }`,
        variables: {}
    };
    const res = await query(data);
    return res.data.connections[0]?.followStatus ?? {
        isFollowed: false,
        isFollowing: false
    };
}


/***/ })

}]);
//# sourceMappingURL=chunk.5021.js.map