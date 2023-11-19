/* eslint @masknet/unicode-specific-set: ["error", { "only": "code" }] */
import { Icons } from '@masknet/icons'
import { usePluginWrapper, usePostInfoDetails, type Plugin } from '@masknet/plugin-infra/content-script'
import { Typography } from '@mui/material'
import { Trans } from 'react-i18next'
import { useAsync } from 'react-use'
import { WarpFactory } from 'warp-contracts'
import { base } from '../base.js'
import { ARWEAVE_CONTRACT_ID, PLUGIN_DESCRIPTION, PLUGIN_NAME } from '../constants.js'

const warp = WarpFactory.forTestnet()

function Renderer(postId) {
    usePluginWrapper(true)

    const { value, loading } = useAsync(() => {
        return warp.contract(ARWEAVE_CONTRACT_ID).viewState({
            function: 'readSentiment',
            data: { entityID: 'twitter' + postId.postId },
        })
    }, [postId])

    const sendSentiment = () => {
        console.log(postId)
        warp.generateWallet().then(({ jwk: wallet, address: owner }) => {
            warp.contract(ARWEAVE_CONTRACT_ID)
                .connect(wallet)
                .writeInteraction({
                    function: 'writeSentiment',
                    content: JSON.stringify({
                        entityID: 'twitter' + postId.postId,
                        score: 1,
                        legitimacyProofs: [
                            {
                                vendor: 'lens',
                            },
                        ],
                    }),
                })
        })
    }

    return (
        <div>
            <button onClick={sendSentiment}>Seems fishy!</button>
            <Typography variant="h6" fontWeight={700} color="red">
                {value?.result?.weight >= 5
                    ? '\u2757\uFE0F\u2757\uFE0F\u2757\uFE0F THIS POST IS FISHY \u2757\uFE0F\u2757\uFE0F\u2757\uFE0F'
                    : ''}
            </Typography>
        </div>
    )
}

const site: Plugin.SiteAdaptor.Definition = {
    ...base,
    init(signal) {},
    PostInspector: function Component() {
        const postID = usePostInfoDetails.postID()

        return <Renderer postId={postID} />
    },
    ApplicationEntries: [
        (() => {
            const icon = <Icons.ScamSniffer size={36} />
            return {
                ApplicationEntryID: base.ID,
                marketListSortingPriority: 19,
                icon,
                category: 'dapp',
                description: <Trans i18nKey="__plugin_description" defaults={PLUGIN_DESCRIPTION} ns={base.ID} />,
                name: <Trans i18nKey="__plugin_name" defaults={PLUGIN_NAME} ns={base.ID} />,
                tutorialLink: 'https://scamsniffer.io/?utm_source=mask-setting',
            }
        })(),
    ],
}

export default site
