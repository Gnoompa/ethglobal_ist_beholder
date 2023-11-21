"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4645],{

/***/ 14645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchProposal: () => (/* binding */ fetchProposal),
/* harmony export */   vote: () => (/* binding */ vote)
/* harmony export */ });
async function fetchProposal(id) {
    const { proposal } = await fetchProposalFromGraphql(id);
    const { votes } = await fetchVotesFromGraphql(id, 500, 0, proposal.space.id);
    const now = Date.now();
    const isStart = proposal.start * 1000 < now;
    const isEnd = proposal.end * 1000 < now;
    return {
        ...proposal,
        voterAmounts: votes.length,
        address: proposal.author,
        isStart,
        isEnd,
        votes,
        chainId: Number(proposal.network)
    };
}
async function fetchVotesFromGraphql(id, first, skip, space) {
    const response = await fetch('https://hub.snapshot.org/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operationName: 'Votes',
            query: `query Votes(
                $id: String!,
                $first: Int,
                $skip: Int,
                $orderBy: String,
                $orderDirection: OrderDirection,
                $voter: String,
                $space: String
            ) {
                votes(
                    first: $first
                    skip: $skip
                    where: {proposal: $id, vp_gt: 0, voter: $voter, space: $space}
                    orderBy: $orderBy
                    orderDirection: $orderDirection
                ) {
                    ipfs
                    voter
                    choice
                    vp
                    vp_by_strategy
                    reason
                    created
                }
            }`,
            variables: {
                id,
                first,
                skip,
                // vote power
                orderBy: 'vp',
                orderDirection: 'desc',
                space
            }
        })
    });
    const { data } = await response.json();
    return data;
}
async function fetchProposalFromGraphql(id) {
    const response = await fetch('https://hub.snapshot.org/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            operationName: 'Proposal',
            query: `query Proposal($id: String!) {
                proposal(id: $id) {
                    id
                    ipfs
                    title
                    body
                    discussion
                    choices
                    start
                    end
                    snapshot
                    state
                    author
                    created
                    plugins
                    symbol
                    scores
                    scores_total
                    scores_by_strategy
                    network
                    type
                    votes
                    strategies {
                      name
                      params
                      network
                      __typename
                    }
                    space {
                      id
                      name
                      symbol
                      avatar
                    }
                }
            }`,
            variables: {
                id
            }
        })
    });
    const { data } = await response.json();
    return data;
}
async function vote(body) {
    const response = await fetch('https://hub.snapshot.org/api/msg', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body
    });
    const result = await response.json();
    return result;
}


/***/ })

}]);
//# sourceMappingURL=chunk.4645.js.map