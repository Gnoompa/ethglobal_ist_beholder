"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8929],{

/***/ 28929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var types = __webpack_require__(95766);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/helpers/address.ts
var helpers_address = __webpack_require__(65327);
;// CONCATENATED MODULE: ./packages/shared/src/utils/resolveNextIDPlatform.ts


const resolveNextIDPlatform = (value)=>{
    const address = value;
    if ((0,helpers_address/* isValidAddress */.At)(address)) return types/* NextIDPlatform */.V.Ethereum;
    const pubKey = value;
    if (pubKey.length >= 44) return types/* NextIDPlatform */.V.NextID;
    const domain = value;
    if (domain.endsWith('.eth') || domain.endsWith('.lens')) return types/* NextIDPlatform */.V.Ethereum;
    const userId = value;
    if (/^@?\w{1,15}$/.test(userId)) return types/* NextIDPlatform */.V.Twitter;
    return;
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs
var useInfiniteQuery = __webpack_require__(86886);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentLinkedPersona.ts
var useCurrentLinkedPersona = __webpack_require__(50538);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Search/index.tsx







const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        inputRoot: {
            borderRadius: 8,
            width: '100%',
            background: theme.palette.maskColor.input,
            fontSize: 14
        },
        input: {
            '&::placeholder': {
                color: theme.palette.maskColor.third
            },
            padding: '11px 4px !important'
        },
        inputFocused: {
            background: theme.palette.maskColor.bottom,
            borderColor: theme.palette.text.third
        },
        button: {
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer'
        }
    }));
const Search = /*#__PURE__*/ (0,react.memo)(function Search({ setSearchValue }) {
    const { classes } = useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const [value, setValue] = (0,react.useState)('');
    const [timer, setTimer] = (0,react.useState)(null);
    const currentPersona = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    const handleKeyPress = (e)=>{
        if (e.key !== 'Enter') return;
        if (timer) clearTimeout(timer);
        setSearchValue(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        className: classes.inputRoot,
        classes: {
            focused: classes.inputFocused,
            input: classes.input
        },
        inputProps: {
            className: classes.input
        },
        disabled: !currentPersona,
        value: value,
        onKeyUp: (e)=>handleKeyPress(e),
        onBlur: (e)=>{
            if (timer) clearTimeout(timer);
            setTimer(setTimeout(()=>{
                setSearchValue(e.target.value);
            }, 500));
        },
        onChange: (e)=>{
            setValue(e.target.value);
        },
        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {}),
        endAdornment: value ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
            type: "reset",
            onClick: ()=>{
                setValue('');
                setSearchValue('');
            },
            className: classes.button,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Close, {})
        }) : null,
        placeholder: t.popups_encrypted_friends_search_placeholder()
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(81755);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(96310);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.2_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-router/dist/index.js
var dist = __webpack_require__(99116);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useEverSeen.ts
var useEverSeen = __webpack_require__(83220);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var QueryClientProvider = __webpack_require__(65295);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var useMutation = __webpack_require__(22144);
// EXTERNAL MODULE: ./packages/theme/src/Components/Snackbar/PopupSnackbar.tsx
var PopupSnackbar = __webpack_require__(39521);
// EXTERNAL MODULE: ./packages/theme/src/Components/ActionButton/index.tsx
var ActionButton = __webpack_require__(90097);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(55106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Link/Link.js + 1 modules
var Link = __webpack_require__(90138);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js + 2 modules
var ButtonBase = __webpack_require__(62621);
// EXTERNAL MODULE: ./packages/base/src/Identifier/ec-key.ts
var ec_key = __webpack_require__(19477);
// EXTERNAL MODULE: ./packages/base/src/Identifier/profile.ts
var Identifier_profile = __webpack_require__(50508);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/personas.ts
var personas = __webpack_require__(67101);
// EXTERNAL MODULE: ./packages/shared-base/src/types/Routes.ts
var Routes = __webpack_require__(37377);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(39117);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/CopyButton/index.tsx
var CopyButton = __webpack_require__(98662);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Friends/AccountRender/index.tsx + 4 modules
var AccountRender = __webpack_require__(5164);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/ContactCard/ConnectedAccounts/index.tsx







const ConnectedAccounts_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        connectedAccounts: {
            borderBottomLeftRadius: '6px',
            borderBottomRightRadius: '6px',
            background: theme.palette.mode === 'dark' ? theme.palette.maskColor.bottom : theme.palette.maskColor.white,
            padding: '8px',
            position: 'relative'
        },
        more: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            background: 'rgba(28, 104, 243, 0.1)',
            borderRadius: '50%',
            position: 'absolute',
            right: '10px'
        }
    }));
const ConnectedAccounts = /*#__PURE__*/ (0,react.memo)(function({ avatar, nextId, profiles, publicKey, isLocal, localProfile }) {
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = ConnectedAccounts_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        height: "58px",
        className: classes.connectedAccounts,
        width: "100%",
        children: [
            profiles?.slice(0, 2).map((profile, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountRender/* AccountRender */.w, {
                    profile: profile,
                    avatar: localProfile?.userId === (profile.name ?? profile.identity) ? avatar : ''
                }, index);
            }),
            profiles && profiles.length > 2 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonBase/* default */.Z, {
                className: classes.more,
                onClick: ()=>{
                    navigate(`${Routes/* PopupRoutes */.mZ.FriendsDetail}/${nextId}`, {
                        state: {
                            avatar,
                            publicKey,
                            nextId,
                            profiles,
                            isLocal,
                            localProfile
                        }
                    });
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: "16px",
                    color: theme.palette.maskColor.main,
                    children: `+${profiles?.length - 2}`
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./node_modules/.pnpm/async-call-rpc@6.3.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(56499);
;// CONCATENATED MODULE: ./packages/mask/shared/helpers/attachNextIDToProfile.ts



async function attachNextIDToProfile(nextID) {
    const whoAmI = await service/* default */.ZP.Settings.getCurrentPersonaIdentifier();
    if (!nextID?.fromNextID || !nextID.linkedPersona || !whoAmI) return;
    const [rpc, emit] = (0,full/* batch */.dC)((0,full/* notify */.h4)(service/* default */.ZP.Identity));
    await Promise.allSettled(nextID.linkedTwitterNames?.map((x)=>{
        return rpc.attachNextIDPersonaToProfile({
            ...nextID,
            nickname: x,
            identifier: Identifier_profile/* ProfileIdentifier */.W.of('twitter.com', x).expect(`${x} should be a valid user id`)
        }, whoAmI);
    }) ?? []);
    emit();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@4.29.25_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-exp_ph45ttbltampqv75cnp6zhp25e/node_modules/@tanstack/react-query/build/lib/useQuery.mjs
var useQuery = __webpack_require__(39333);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useCurrentPersona.ts
var useCurrentPersona = __webpack_require__(18937);
// EXTERNAL MODULE: ./packages/mask/popups/pages/Friends/common.tsx
var common = __webpack_require__(70082);
;// CONCATENATED MODULE: ./packages/mask/popups/hooks/useFriendProfiles.ts






function profilesFilter(x) {
    return x.platform === types/* NextIDPlatform */.V.ENS && x.name.endsWith('.eth') || !common/* UnsupportedPlatforms */.op.includes(x.platform);
}
function useFriendProfiles(seen, nextId, profile) {
    const currentPersona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    const { data: profiles = constants/* EMPTY_LIST */.rP } = (0,useQuery/* useQuery */.a)([
        'profiles',
        currentPersona?.identifier.publicKeyAsHex,
        nextId
    ], async ()=>{
        if (!nextId) return constants/* EMPTY_LIST */.rP;
        try {
            return await entry/* NextIDProof */.q7.queryProfilesByPublicKey(nextId, 2);
        } catch (error) {
            return constants/* EMPTY_LIST */.rP;
        }
    }, {
        enabled: seen && !!nextId
    });
    return (0,react.useMemo)(()=>{
        if (profiles.length === 0) {
            if (profile?.userId) {
                return [
                    {
                        platform: profile?.network,
                        identity: profile.userId,
                        is_valid: true,
                        last_checked_at: '',
                        name: profile.userId,
                        created_at: ''
                    }
                ];
            } else {
                return constants/* EMPTY_LIST */.rP;
            }
        }
        return profiles.filter(profilesFilter).sort((a, b)=>common/* PlatformSort */.Ob[a.platform] - common/* PlatformSort */.Ob[b.platform]);
    }, [
        profiles
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/ContactCard/index.tsx















const ContactCard_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: theme.palette.maskColor.line
        },
        title: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
        },
        titleWrap: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '12px',
            borderTopLeftRadius: '6px',
            borderTopRightRadius: '6px',
            background: theme.palette.maskColor.modalTitleBg
        },
        avatar: {
            width: 40,
            height: 40
        },
        icon: {
            width: 12,
            height: 12,
            fontSize: 12,
            color: theme.palette.maskColor.second
        }
    }));
const ContactCard = /*#__PURE__*/ (0,react.memo)(function ContactCard({ avatar, nextId, publicKey, isLocal, profile, refetch, proofProfiles }) {
    const theme = (0,useTheme/* default */.Z)();
    const { classes } = ContactCard_useStyles();
    const navigate = (0,dist/* useNavigate */.s0)();
    const { showSnackbar } = (0,PopupSnackbar/* usePopupCustomSnackbar */.D)();
    const [local, setLocal] = (0,react.useState)(false);
    const [seen, ref] = (0,useEverSeen/* useEverSeen */.t)();
    const { currentPersona } = usePersonaContext/* PersonaContext */.m.useContainer();
    const profiles = useFriendProfiles(seen, nextId, profile);
    const rawPublicKey = currentPersona?.identifier.rawPublicKey;
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const friendInfo = (0,react.useMemo)(()=>{
        if (!rawPublicKey) return;
        const twitter = proofProfiles?.find((p)=>p.platform === types/* NextIDPlatform */.V.Twitter);
        const personaIdentifier = ec_key/* ECKeyIdentifier */.o.fromHexPublicKeyK256(nextId).expect(`${nextId} should be a valid hex public key in k256`);
        if (!twitter) {
            return {
                persona: personaIdentifier
            };
        } else {
            const profileIdentifier = Identifier_profile/* ProfileIdentifier */.W.of('twitter.com', twitter.identity).unwrap();
            return {
                persona: personaIdentifier,
                profile: profileIdentifier
            };
        }
    }, [
        profiles,
        nextId,
        rawPublicKey
    ]);
    const handleAddFriend = (0,react.useCallback)(async ()=>{
        if (!friendInfo || !currentPersona) return;
        const { persona, profile } = friendInfo;
        if (!profile) {
            await service/* default */.ZP.Identity.createNewRelation(persona, currentPersona.identifier);
        } else {
            await attachNextIDToProfile({
                identifier: profile,
                linkedPersona: persona,
                fromNextID: true,
                linkedTwitterNames: [
                    profile.userId
                ]
            });
        }
    }, [
        nextId,
        queryClient,
        currentPersona,
        refetch,
        friendInfo
    ]);
    const { mutate: onAdd, isLoading } = (0,useMutation/* useMutation */.D)({
        mutationFn: handleAddFriend,
        onMutate: async (friend)=>{
            if (!friend) return;
            await queryClient.cancelQueries([
                'relation-records',
                rawPublicKey
            ]);
            await queryClient.cancelQueries([
                'friends',
                rawPublicKey
            ]);
            queryClient.setQueryData([
                'friends',
                rawPublicKey
            ], (oldData)=>{
                if (!oldData) return undefined;
                return {
                    ...oldData,
                    pages: oldData.pages[0] ? [
                        {
                            friends: [
                                friend,
                                ...oldData.pages[0].friends
                            ],
                            nextPageOffset: 10
                        },
                        ...oldData.pages.slice(1)
                    ] : [
                        {
                            friends: [
                                friend
                            ],
                            nextPageOffset: 0
                        }
                    ]
                };
            });
            showSnackbar(t.popups_encrypted_friends_added_successfully(), {
                variant: 'success'
            });
            setLocal(true);
        },
        onSettled: async ()=>{
            await queryClient.invalidateQueries([
                'relation-records',
                rawPublicKey
            ]);
            await queryClient.invalidateQueries([
                'friends',
                rawPublicKey
            ]);
            refetch?.();
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.card,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.titleWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.title,
                        children: [
                            avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                className: classes.avatar,
                                src: avatar
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.NextIdAvatar, {
                                className: classes.avatar
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: 14,
                                        fontWeight: 700,
                                        lineHeight: "18px",
                                        children: publicKey ? (0,personas/* formatPersonaFingerprint */.Nb)(publicKey) : null
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        fontSize: 12,
                                        color: theme.palette.maskColor.second,
                                        lineHeight: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        columnGap: "2px",
                                        children: [
                                            nextId ? (0,personas/* formatPersonaFingerprint */.Nb)(nextId, 4) : null,
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyButton/* CopyButton */.q, {
                                                text: nextId ? nextId : '',
                                                size: 12,
                                                className: classes.icon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                underline: "none",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: `https://web3.bio/${nextId}`,
                                                className: classes.icon,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.LinkOut, {
                                                    size: 12
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    isLocal || local ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonBase/* default */.Z, {
                        onClick: ()=>navigate(`${Routes/* PopupRoutes */.mZ.FriendsDetail}/${nextId}`, {
                                state: {
                                    avatar,
                                    publicKey,
                                    nextId,
                                    profiles: proofProfiles ?? profiles,
                                    isLocal,
                                    localProfile: profile
                                }
                            }),
                        color: "inherit",
                        style: {
                            borderRadius: '50%'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.ArrowRight, {})
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButton */.K, {
                        variant: "roundedContained",
                        onClick: ()=>onAdd(friendInfo),
                        loading: isLoading,
                        disabled: isLoading,
                        children: t.popups_encrypted_friends_add_friends()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedAccounts, {
                avatar: avatar,
                nextId: nextId,
                publicKey: publicKey,
                isLocal: isLocal,
                profiles: proofProfiles ?? profiles,
                localProfile: profile
            })
        ]
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Contacts/index.tsx








const Contacts_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        empty: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 12,
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '0 16px 16px 16px',
            flexGrow: 1,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const Contacts = /*#__PURE__*/ (0,react.memo)(function Contacts({ friendsArray, fetchNextPage }) {
    const { classes } = Contacts_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return !(0,head/* default */.Z)(friendsArray) || (0,head/* default */.Z)(friendsArray)?.friends.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        className: classes.empty,
        children: t.popups_encrypted_friends_no_friends()
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.cardContainer,
        children: [
            friendsArray.map(({ friends })=>{
                return friends.map((friend)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactCard, {
                        avatar: friend.avatar,
                        nextId: friend.persona?.publicKeyAsHex,
                        publicKey: friend.persona?.rawPublicKey,
                        profile: friend.profile,
                        isLocal: true
                    }, friend.persona.publicKeyAsHex));
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                callback: ()=>fetchNextPage(),
                height: 10
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared/src/UI/components/RestorableScroll/index.tsx
var RestorableScroll = __webpack_require__(64472);
;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/SearchList/index.tsx







const SearchList_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        empty: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 12,
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '0 16px 16px 16px',
            flexGrow: 1,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    }));
const SearchList = /*#__PURE__*/ (0,react.memo)(function SearchList({ searchResult, fetchNextPage, refetch }) {
    const { classes } = SearchList_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return searchResult.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
        className: classes.empty,
        children: t.popups_encrypted_friends_search_no_result()
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RestorableScroll/* RestorableScroll */.g, {
        scrollKey: "search_contacts",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.cardContainer,
            children: [
                searchResult.map((friend)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactCard, {
                        nextId: friend.persona,
                        proofProfiles: friend.proofs,
                        publicKey: friend.linkedPersona?.rawPublicKey,
                        isLocal: friend.isLocal,
                        refetch: refetch,
                        avatar: friend.avatar
                    }, friend.persona);
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ElementAnchor/* ElementAnchor */.e, {
                    callback: ()=>fetchNextPage(),
                    height: 10
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Home/UI.tsx








const UI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            flex: 1,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.maskColor.bottom : theme.palette.maskColor.white,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100vh',
            overflowY: 'hidden'
        },
        empty: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 12,
            color: theme.palette.maskColor.second,
            whiteSpace: 'nowrap'
        },
        mainText: {
            color: theme.palette.text.primary
        }
    }));
const FriendsHomeUI = /*#__PURE__*/ (0,react.memo)(function FriendsHomeUI({ loading, friends, setSearchValue, searchResult, searchValue, fetchNextPage, fetchNextSearchPage, refetch }) {
    const { classes, cx } = UI_useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                padding: "16px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search, {
                    setSearchValue: setSearchValue
                })
            }),
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: cx(classes.empty, classes.mainText),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.loading()
                    })
                ]
            }) : searchValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchList, {
                searchResult: searchResult,
                fetchNextPage: fetchNextSearchPage,
                refetch: refetch
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Contacts, {
                friendsArray: friends,
                fetchNextPage: fetchNextPage
            })
        ]
    });
});

// EXTERNAL MODULE: ./packages/mask/popups/hooks/useTitle.ts
var useTitle = __webpack_require__(81430);
;// CONCATENATED MODULE: ./packages/shared/src/utils/identifierSelector.ts

function isProfileIdentifier(value) {
    return value instanceof Identifier_profile/* ProfileIdentifier */.W;
}

;// CONCATENATED MODULE: ./packages/mask/popups/hooks/useFriends.ts







function useFriendsPaged() {
    const currentPersona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    const { data: records = constants/* EMPTY_LIST */.rP, isLoading: recordsLoading, refetch: refetchRecords, status: fetchRelationStatus } = (0,useQuery/* useQuery */.a)([
        'relation-records',
        currentPersona?.identifier.rawPublicKey
    ], async ()=>{
        return service/* default */.ZP.Identity.queryRelationPaged(currentPersona?.identifier, {
            network: 'all',
            pageOffset: 0
        }, 3000);
    }, {
        enabled: !!currentPersona,
        networkMode: 'always'
    });
    const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage, refetch: refetchFriends, status } = (0,useInfiniteQuery/* useInfiniteQuery */.N)({
        queryKey: [
            'friends',
            currentPersona?.identifier.rawPublicKey
        ],
        enabled: !recordsLoading,
        queryFn: async ({ pageParam = 0 })=>{
            const friends = [];
            const startIndex = pageParam ? Number(pageParam) : 0;
            let nextPageOffset = 0;
            for(let i = startIndex; i < records.length; i += 1){
                nextPageOffset = i;
                if (friends.length === 10) break;
                const x = records[i];
                if (isProfileIdentifier(x.profile)) {
                    const profile = (0,head/* default */.Z)(await service/* default */.ZP.Identity.queryProfileInformation(x.profile));
                    if (profile?.linkedPersona && profile.linkedPersona !== currentPersona?.identifier) friends.push({
                        persona: profile.linkedPersona,
                        profile: x.profile,
                        avatar: profile.avatar
                    });
                } else {
                    if (x.profile !== currentPersona?.identifier) friends.push({
                        persona: x.profile
                    });
                }
            }
            return {
                friends,
                nextPageOffset
            };
        },
        getNextPageParam: ({ nextPageOffset })=>{
            if (nextPageOffset >= records.length - 1) return;
            return nextPageOffset;
        }
    });
    const refetch = (0,react.useCallback)(()=>{
        refetchFriends();
        refetchRecords();
    }, [
        refetchFriends,
        refetchRecords
    ]);
    return {
        data,
        isLoading: isLoading || recordsLoading,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        refetch,
        status,
        fetchRelationStatus,
        records
    };
}
function useFriendFromList(searchedRecords) {
    const currentPersona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    return (0,useQuery/* useQuery */.a)([
        'search-local',
        searchedRecords
    ], async ()=>{
        return (await Promise.all(searchedRecords.map(async (x)=>{
            if (!isProfileIdentifier(x.profile)) return;
            const profile = (0,head/* default */.Z)(await service/* default */.ZP.Identity.queryProfileInformation(x.profile));
            if (profile?.linkedPersona !== undefined && profile?.linkedPersona.publicKeyAsHex !== currentPersona?.identifier.publicKeyAsHex) return {
                persona: profile.linkedPersona,
                profile: x.profile,
                avatar: profile.avatar
            };
            return;
        }))).filter((x)=>typeof x !== 'undefined' && Object.hasOwn(x, 'persona'));
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
;// CONCATENATED MODULE: ./packages/mask/popups/hooks/useSearchValue.ts



function useSearchValue(value, type) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!type) return '';
        if (value.length === 44) return new ec_key/* ECKeyIdentifier */.o('secp256k1', value).publicKeyAsHex ?? value;
        if (type === types/* NextIDPlatform */.V.Twitter) return value.replace(/^@/, '').toLowerCase();
        if (value.endsWith('.eth')) return (await entry/* ENS */.nB.lookup(value))?.toLowerCase();
        if (value.endsWith('.lens')) return (await entry/* Lens */.Ri.getProfileByHandle(value)).ownedBy?.toLowerCase();
        return value.toLowerCase();
    }, [
        value
    ]);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
;// CONCATENATED MODULE: ./packages/mask/popups/hooks/useFriendsFromSearch.tsx






function useFriendsFromSearch(localSearchedResult, searchResult, localList, searchValue) {
    const currentIdentifier = (0,useCurrentLinkedPersona/* useCurrentLinkedPersona */.O)();
    return (0,react.useMemo)(()=>{
        if (!searchResult?.length && !localSearchedResult?.length) return constants/* EMPTY_LIST */.rP;
        const localProfiles = localSearchedResult?.filter((x)=>x.persona.publicKeyAsHex !== currentIdentifier?.identifier.publicKeyAsHex && x.profile).map((item)=>{
            const profile = item.profile;
            return {
                proofs: [
                    {
                        platform: profile.network,
                        identity: profile.userId,
                        is_valid: true,
                        last_checked_at: '',
                        name: profile.userId,
                        created_at: ''
                    }
                ],
                linkedPersona: item.persona,
                activated_at: '',
                persona: item.persona.publicKeyAsHex,
                isLocal: true,
                avatar: item.avatar
            };
        }) ?? constants/* EMPTY_LIST */.rP;
        const profiles = searchResult ? searchResult.filter((x)=>x.persona !== currentIdentifier?.identifier.publicKeyAsHex).map((item)=>{
            const filtered = item.proofs.filter(profilesFilter);
            const identifier = ec_key/* ECKeyIdentifier */.o.fromHexPublicKeyK256(item.persona).expect(`${item.persona} should be a valid hex public key in k256`);
            filtered.sort((a, b)=>common/* PlatformSort */.Ob[a.platform] - common/* PlatformSort */.Ob[b.platform]);
            const searchItem = filtered.findIndex((x)=>x.identity === searchValue || x.name === searchValue);
            if (searchItem !== -1) filtered.unshift(filtered.splice(searchItem, 1)[0]);
            return {
                proofs: (0,uniqBy/* default */.Z)(filtered, ({ identity })=>identity),
                linkedPersona: identifier,
                activated_at: item.activated_at,
                persona: item.persona,
                isLocal: localList ? localList.some((x)=>x.persona.publicKeyAsHex === identifier.publicKeyAsHex) : false
            };
        }) : constants/* EMPTY_LIST */.rP;
        return (0,uniqBy/* default */.Z)(localProfiles ? localProfiles.concat(profiles) : profiles, ({ linkedPersona })=>linkedPersona.publicKeyAsHex);
    }, [
        searchResult,
        localList,
        currentIdentifier,
        localSearchedResult
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/popups/pages/Friends/Home/index.tsx









const FriendsHome = /*#__PURE__*/ (0,react.memo)(function FriendsHome() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    (0,useTitle/* useTitle */.Z)(t.popups_encrypted_friends());
    const { data, fetchNextPage, isLoading, refetch, status, fetchRelationStatus, records } = useFriendsPaged();
    const friends = (0,react.useMemo)(()=>data?.pages.flatMap((x)=>x.friends) ?? constants/* EMPTY_LIST */.rP, [
        data
    ]);
    const [searchValue, setSearchValue] = (0,react.useState)('');
    const type = resolveNextIDPlatform(searchValue);
    const { loading: resolveLoading, value: keyword = '' } = useSearchValue(searchValue, type);
    const fuse = (0,react.useMemo)(()=>{
        return entry/* Fuse */.QI.create(records, {
            keys: [
                'profile.userId'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        });
    }, [
        records
    ]);
    const searchedRecords = (0,react.useMemo)(()=>{
        if (!keyword || type !== types/* NextIDPlatform */.V.Twitter) return constants/* EMPTY_LIST */.rP;
        return fuse.search(keyword).map((item)=>item.item);
    }, [
        fuse,
        keyword,
        type
    ]);
    const { isLoading: isSearchRecordLoading, data: localSearchedList = constants/* EMPTY_LIST */.rP } = useFriendFromList(searchedRecords);
    const { isLoading: searchLoading, isInitialLoading, data: searchResultArray, fetchNextPage: fetchNextSearchPage } = (0,useInfiniteQuery/* useInfiniteQuery */.N)([
        'search-personas',
        keyword,
        type
    ], async ({ pageParam })=>{
        if (!type) return constants/* EMPTY_LIST */.rP;
        return await entry/* NextIDProof */.q7.queryExistedBindingByPlatform(type, keyword, pageParam ?? 1, false);
    }, {
        enabled: !!keyword && !!type,
        getNextPageParam: (lastPage, allPages)=>{
            if (lastPage.length === 0) return undefined;
            return allPages.length + 1;
        }
    });
    const searchResult = (0,react.useMemo)(()=>searchResultArray?.pages.flat() ?? constants/* EMPTY_LIST */.rP, [
        searchResultArray
    ]);
    const searchedList = useFriendsFromSearch(localSearchedList, searchResult, friends, keyword);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FriendsHomeUI, {
        friends: data?.pages ?? constants/* EMPTY_LIST */.rP,
        loading: isLoading || resolveLoading || (!!keyword && !!type ? searchLoading || isSearchRecordLoading : isInitialLoading) || status === 'loading' || fetchRelationStatus === 'loading',
        setSearchValue: setSearchValue,
        searchValue: searchValue,
        searchResult: searchedList,
        fetchNextPage: fetchNextPage,
        fetchNextSearchPage: fetchNextSearchPage,
        refetch: refetch
    });
});
/* harmony default export */ const Home = (FriendsHome);


/***/ }),

/***/ 81178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ useAllPersonas)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _dom_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49588);


function useAllPersonas() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_dom_context_js__WEBPACK_IMPORTED_MODULE_1__/* .allPersonas */ .d4);
}


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

/***/ 50538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ useCurrentLinkedPersona)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81178);
/* harmony import */ var _masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49588);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);



function useCurrentLinkedPersona() {
    const myPersonas = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .useAllPersonas */ .T)();
    const id = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(_masknet_plugin_infra_dom_context__WEBPACK_IMPORTED_MODULE_2__/* .currentPersona */ ._c);
    return myPersonas?.find((x)=>x.identifier.rawPublicKey.toLowerCase() === id?.rawPublicKey.toLowerCase());
}


/***/ }),

/***/ 47642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useIntersectionObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const DEFAULT_THRESHOLD = [0];
const DEFAULT_ROOT_MARGIN = '0px';
const observers = new Map();
const getObserverEntry = (options) => {
    const root = options.root ?? document;
    let rootObservers = observers.get(root);
    if (!rootObservers) {
        rootObservers = new Map();
        observers.set(root, rootObservers);
    }
    const opt = JSON.stringify([options.rootMargin, options.threshold]);
    let entry = rootObservers.get(opt);
    if (!entry) {
        const callbacks = new Map();
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((e) => callbacks.get(e.target)?.forEach((cb) => setTimeout(() => {
                cb(e);
            }, 0)));
        }, options);
        entry = {
            observer,
            observe(target, callback) {
                let cbs = callbacks.get(target);
                if (!cbs) {
                    // If target has no observers yet - register it
                    cbs = new Set();
                    callbacks.set(target, cbs);
                    observer.observe(target);
                }
                // As Set is duplicate-safe - simply add callback on each call
                cbs.add(callback);
            },
            unobserve(target, callback) {
                const cbs = callbacks.get(target);
                // Else branch should never occur in case of normal execution
                // because callbacks map is hidden in closure - it is impossible to
                // simulate situation with non-existent `cbs` Set
                /* istanbul ignore else */
                if (cbs) {
                    // Remove current observer
                    cbs.delete(callback);
                    if (!cbs.size) {
                        // If no observers left unregister target completely
                        callbacks.delete(target);
                        observer.unobserve(target);
                        // If not tracked elements left - disconnect observer
                        if (!callbacks.size) {
                            observer.disconnect();
                            rootObservers.delete(opt);
                            if (!rootObservers.size) {
                                observers.delete(root);
                            }
                        }
                    }
                }
            },
        };
        rootObservers.set(opt, entry);
    }
    return entry;
};
/**
 * Tracks intersection of a target element with an ancestor element or with a
 * top-level document's viewport.
 *
 * @param target React reference or Element to track.
 * @param options Like `IntersectionObserver` options but `root` can also be
 * react reference
 */
function useIntersectionObserver(target, { threshold = DEFAULT_THRESHOLD, root: r, rootMargin = DEFAULT_ROOT_MARGIN, } = {}) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const tgt = target && 'current' in target ? target.current : target;
        if (!tgt)
            return;
        let subscribed = true;
        const observerEntry = getObserverEntry({
            root: r && 'current' in r ? r.current : r,
            rootMargin,
            threshold,
        });
        const handler = (entry) => {
            // It is reinsurance for the highly asynchronous invocations, almost
            // impossible to achieve in tests, thus excluding from LOC
            /* istanbul ignore else */
            if (subscribed) {
                setState(entry);
            }
        };
        observerEntry.observe(tgt, handler);
        return () => {
            subscribed = false;
            observerEntry.unobserve(tgt, handler);
        };
    }, [target, r, rootMargin, ...threshold]);
    return state;
}


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


/***/ })

}]);
//# sourceMappingURL=chunk.8929.js.map