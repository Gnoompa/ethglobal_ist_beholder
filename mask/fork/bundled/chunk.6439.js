"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[6439,6751],{

/***/ 56463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ Composition)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(17735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_react@_wx4uwssjzdyhn3m5bz2kb6menq/node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(78056);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(837);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/shared/src/hooks/useCurrentPersonaConnectStatus.ts
var useCurrentPersonaConnectStatus = __webpack_require__(54928);
// EXTERNAL MODULE: ./packages/shared/src/UI/contexts/components/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(80922);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaAction.tsx
var PersonaAction = __webpack_require__(41253);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/constants.ts
var constants = __webpack_require__(52033);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/CrossIsolationEvents.ts
var CrossIsolationEvents = __webpack_require__(40514);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/providers/index.ts + 10 modules
var providers = __webpack_require__(17788);
// EXTERNAL MODULE: ./packages/web3-telemetry/src/types/index.ts
var types = __webpack_require__(91451);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(37603);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(46906);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/index.ts
var utils = __webpack_require__(41840);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Metadata/index.ts
var Metadata = __webpack_require__(33845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(30911);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(77821);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputBase/InputBase.js
var InputBase = __webpack_require__(99979);
// EXTERNAL MODULE: ./packages/plugin-infra/src/manager/site-adaptor.ts
var site_adaptor = __webpack_require__(94685);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/useTrans.tsx
var useTrans = __webpack_require__(94892);
// EXTERNAL MODULE: ./packages/theme/src/Components/WrappedComponents/ShadowRootTooltip.ts
var ShadowRootTooltip = __webpack_require__(27966);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Chip/Chip.js
var Chip = __webpack_require__(3247);
// EXTERNAL MODULE: ./packages/shared/src/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(8772);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CompositionDialog/BadgeRenderer.tsx





const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        chip: {
            maxWidth: 500,
            background: theme.palette.background.paper,
            boxShadow: `0px 0px 20px 0px ${theme.palette.mode === 'dark' ? '#FFFFFF1F' : '#0000000D'}`
        }
    }));
function BadgeRenderer({ meta, onDeleteMeta, readonly }) {
    const plugins = (0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any');
    const i18n = (0,useTrans/* usePluginTransField */.T)();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    if (!meta) return null;
    const result = [
        ...meta.entries()
    ].flatMap(([metaKey, metaValue])=>{
        return plugins.map((plugin)=>{
            const render = plugin.CompositionDialogMetadataBadgeRender;
            if (!render) return null;
            try {
                if (typeof render === 'function') {
                    return normalizeBadgeDescriptor(render(metaKey, metaValue));
                } else {
                    const f = render.get(metaKey);
                    if (!f) return null;
                    return normalizeBadgeDescriptor(f(metaValue));
                }
            } catch (error) {
                console.error(error);
                return null;
            }
            function normalizeBadgeDescriptor(desc) {
                if (!desc) return null;
                if (typeof desc === 'string') desc = {
                    text: desc,
                    tooltip: `${t.badge_renderer_provided_by_plugin()} "${i18n(plugin.ID, plugin.name)}"`
                };
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(MetaBadge, {
                    readonly: readonly,
                    title: desc.tooltip || '',
                    onDelete: ()=>onDeleteMeta(metaKey),
                    children: desc.text
                }, metaKey + ';' + plugin.ID);
            }
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: result
    });
}
function MetaBadge({ title, children, onDelete, readonly }) {
    const { classes } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            display: 'inline-block'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootTooltip/* ShadowRootTooltip */.p, {
            title: title ?? '',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    disabled: readonly,
                    onDelete: onDelete,
                    label: children,
                    className: classes.chip
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CompositionDialog/TypedMessageEditor.tsx








const TypedMessageEditor_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            padding: 0
        },
        input: {
            fontSize: 15,
            position: 'relative',
            display: 'flex',
            height: '100%',
            backgroundColor: theme.palette.maskColor.input,
            [`& > .${inputBaseClasses/* default */.Z.input}`]: {
                height: 'calc(100% - 22px) !important',
                overflow: 'unset'
            },
            [`&.${inputBaseClasses/* default */.Z.focused}`]: {
                backgroundColor: 'transparent',
                border: 0,
                outline: `2px solid ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.primary, 0.2)}`
            }
        },
        badgeInput: {
            paddingTop: 48
        },
        textarea: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.maskColor.secondaryLine,
                backgroundClip: 'padding-box'
            }
        },
        badge: {
            position: 'absolute',
            top: 14,
            left: 14
        }
    }));
/** Current message, it is a getter/setter. */ /** The length of the current message. */ /** Clean the editor. */ /**
     * Insert metadata into the current message.
     * Might be async in the future.
     * @param metaID The inserted meta key.
     * @param meta Metadata.
     */ const emptyMessage = (0,core_text/* makeTypedMessageText */.P)('');
// This is an **uncontrolled** component. (performance consideration, because it will be re-rendered very frequently).
const TypedMessageEditor = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)(function TypedMessageEditor(props, ref) {
    const { onChange, readonly } = props;
    const { classes, cx } = TypedMessageEditor_useStyles();
    const t = (0,i18n_generated/* useSharedTrans */.j)();
    const [value, setValue] = (0,react.useState)(props.defaultValue ?? emptyMessage);
    const currentValue = (0,react.useRef)(value);
    const [inputRef, setInputRef] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        props.autoFocus && inputRef?.focus();
    }, [
        props.autoFocus,
        inputRef
    ]);
    currentValue.current = value;
    const setMessage = (0,react.useCallback)((value)=>{
        if ((0,utils/* isTypedMessageEqual */.Hz)(currentValue.current, value)) return;
        setValue(value);
        currentValue.current = value;
        onChange?.(value);
    }, [
        onChange
    ]);
    const setAsText = (0,react.useCallback)((val1)=>{
        const text = typeof val1 === 'string' ? val1 : val1.target.value;
        const newValue = (0,core_text/* makeTypedMessageText */.P)(text, currentValue.current.meta);
        setMessage(newValue);
    }, [
        setMessage
    ]);
    const deleteMetaID = (0,react.useCallback)((meta)=>{
        setMessage((0,Metadata/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.delete(meta)));
    }, [
        setMessage
    ]);
    const refItem = (0,react.useMemo)(()=>{
        return {
            get estimatedLength () {
                // TODO: we should count metadata into the estimated size
                if ((0,core_text/* isTypedMessageText */.Rz)(currentValue.current)) return currentValue.current.content.length;
                return 0;
            },
            get value () {
                return currentValue.current;
            },
            set value (val){
                setMessage(val);
            },
            focus: ()=>inputRef?.focus(),
            reset: ()=>setMessage(emptyMessage),
            attachMetadata (meta, data) {
                setMessage((0,Metadata/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.set(meta, data)));
            },
            dropMetadata: deleteMetaID
        };
    }, [
        setMessage,
        deleteMetaID
    ]);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
    if (!(0,core_text/* isTypedMessageText */.Rz)(value)) {
        const reset = ()=>setAsText('');
        // We don't have an rich text editor yet.
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            severity: "error",
            action: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                onClick: reset,
                children: [
                    t.reset(),
                    " ",
                    t.editor()
                ]
            }),
            children: t.typed_message_text_alert()
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
            inputRef: setInputRef,
            startAdornment: value.meta ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.badge,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BadgeRenderer, {
                    readonly: !!readonly,
                    meta: value.meta,
                    onDeleteMeta: deleteMetaID
                })
            }) : null,
            readOnly: readonly,
            classes: {
                root: classes.root,
                input: classes.textarea
            },
            className: cx(classes.input, value.meta ? classes.badgeInput : undefined),
            value: value.content,
            onChange: setAsText,
            fullWidth: true,
            multiline: true,
            placeholder: t.post_dialog__placeholder(),
            rows: value.meta ? 11 : 13
        })
    });
}));

// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@13.0.2_i18next@23.2.11_react-dom@0.0.0-experimental-0a360642d-20230711_react@0._2rfuagrovdvghma7yykblhtw4i/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(24002);
// EXTERNAL MODULE: ./node_modules/.pnpm/ts-results-es@4.0.0/node_modules/ts-results-es/dist/esm/index.js
var esm = __webpack_require__(76089);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/CompositionContext.ts
var CompositionContext = __webpack_require__(20179);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var esm_useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(82897);
// EXTERNAL MODULE: ./packages/plugin-infra/src/dom/context.ts
var context = __webpack_require__(49588);
;// CONCATENATED MODULE: ./packages/shared/src/hooks/usePluginHostPermission.ts




function usePluginHostPermissionCheck(plugins) {
    const plugins_ = plugins.filter((x)=>x.enableRequirement.host_permissions?.length);
    // query if plugin is disabled due to lack of permission
    const { retry, value: lackPermission } = (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        const lackPermission = new Set();
        await Promise.allSettled(plugins_.map((plugin)=>(0,context/* hasHostPermission */.yy)?.(plugin.enableRequirement.host_permissions).then((result)=>!result && lackPermission.add(plugin.ID))));
        return lackPermission;
    }, [
        plugins_.map((x)=>x.ID).join(',')
    ]);
    (0,react.useEffect)(()=>Messages/* MaskMessages */.q.events.hostPermissionChanged.on(retry), [
        retry
    ]);
    return lackPermission;
}
function useCheckPermissions(permissions) {
    const asyncResult = useAsyncRetry(async ()=>{
        if (!permissions.length) return true;
        return hasHostPermission?.(permissions);
    }, [
        permissions
    ]);
    useEffect(()=>MaskMessages.events.hostPermissionChanged.on(asyncResult.retry), [
        asyncResult.retry
    ]);
    return asyncResult;
}
function useGrantPermissions(permissions) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!permissions?.length) return;
        return (0,context/* requestHostPermission */.Xm)?.(permissions);
    }, [
        permissions
    ]);
}

// EXTERNAL MODULE: ./packages/shared/src/UI/components/GrantPermission/index.tsx
var GrantPermission = __webpack_require__(3294);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/Done.js
var Done = __webpack_require__(36447);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(89601);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/ClickableChip/index.tsx





const ClickableChip_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { checked })=>({
        root: {
            marginRight: 6,
            marginBottom: 6,
            cursor: 'pointer',
            ...checked ? {
                color: theme.palette.text.buttonText,
                backgroundColor: theme.palette.text.primary
            } : {},
            '&:hover': {
                color: theme.palette.text.primary,
                '& > svg': {
                    color: `${theme.palette.text.primary} !important`
                }
            }
        },
        icon: {
            backgroundColor: 'transparent !important',
            ...checked ? {
                color: `${theme.palette.text.buttonText} !important`
            } : {}
        },
        label: {
            display: 'flex'
        }
    }));
function ClickableChip(props) {
    const { classes, cx } = ClickableChip_useStyles({
        checked: !!props.checked
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        deleteIcon: props.checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
            className: classes.icon
        }) : undefined,
        onDelete: props.checked ? noop/* default */.Z : undefined,
        color: props.checked ? 'primary' : 'default',
        ...props,
        classes: {
            ...props.classes,
            root: cx(classes.root, props.classes?.root),
            label: cx(classes.label, props.classes?.label)
        }
    });
}

// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx + 3 modules
var ErrorBoundary = __webpack_require__(87148);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CompositionDialog/PluginEntryRender.tsx










const PluginEntryRender_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        sup: {
            paddingLeft: 2
        },
        clickRoot: {
            background: theme.palette.maskColor.bottom,
            boxShadow: `0px 0px 20px 0px ${(0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.main, 0.05)}`,
            marginBottom: 0
        }
    }));
const PluginEntryRender = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [trackPluginRef] = useSetPluginEntryRenderRef(ref);
    const pluginField = (0,useTrans/* usePluginTransField */.T)();
    const plugins = [
        ...(0,site_adaptor/* useActivatedPluginsSiteAdaptor */.JR)('any')
    ].sort((plugin)=>{
        // TODO: support priority order
        if (plugin.ID === PluginID/* PluginID */.P.RedPacket) return -1;
        return 1;
    });
    const lackPermission = usePluginHostPermissionCheck(plugins);
    const result = plugins.map((plugin)=>esm.Result.wrap(()=>{
            const entry = plugin.CompositionDialogEntry;
            const unstable = plugin.enableRequirement.target !== 'stable';
            const ID = plugin.ID;
            if (!entry) return null;
            const extra = {
                unstable,
                id: ID,
                readonly: props.readonly
            };
            if (lackPermission?.has(ID)) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary/* ErrorBoundary */.S, {
                    subject: `Plugin "${pluginField(ID, plugin.name)}"`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogEntry, {
                        label: entry.label,
                        ...extra,
                        dialog: getPluginEntryDisabledDialog(plugin),
                        ref: trackPluginRef(ID),
                        isOpenFromApplicationBoard: props.isOpenFromApplicationBoard
                    })
                }, plugin.ID);
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary/* ErrorBoundary */.S, {
                subject: `Plugin "${pluginField(ID, plugin.name)}"`,
                children: 'onClick' in entry ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomEntry, {
                    ...entry,
                    ...extra,
                    ref: trackPluginRef(ID)
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogEntry, {
                    ...entry,
                    ...extra,
                    ref: trackPluginRef(ID),
                    isOpenFromApplicationBoard: props.isOpenFromApplicationBoard
                })
            }, plugin.ID);
        }).unwrapOr(null));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: result
    });
}));
const usePermissionDialogStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            width: 384,
            padding: theme.spacing(1)
        },
        dialogTitle: {
            background: theme.palette.maskColor.bottom
        },
        action: {
            width: '80%'
        }
    }));
const cache = new Map();
function getPluginEntryDisabledDialog(define) {
    if (!cache.has(define)) {
        cache.set(define, (props)=>{
            const t = (0,i18n_generated/* useSharedTrans */.j)();
            const { classes } = usePermissionDialogStyles();
            const [, onGrant] = useGrantPermissions(define.enableRequirement.host_permissions);
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
                classes: {
                    paper: classes.root,
                    dialogTitle: classes.dialogTitle
                },
                title: t.domain_request(),
                open: props.open,
                onClose: props.onClose,
                maxWidth: "sm",
                titleBarIconStyle: "close",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GrantPermission/* GrantPermissions */.X, {
                        classes: {
                            action: classes.action
                        },
                        permissions: define.enableRequirement.host_permissions ?? constants/* EMPTY_LIST */.rP,
                        onGrant: onGrant
                    })
                })
            });
        });
    }
    return cache.get(define);
}
function useSetPluginEntryRenderRef(ref) {
    const pluginRefs = (0,react.useRef)({});
    const refItem = (0,react.useMemo)(()=>({
            openPlugin: function openPlugin(id, props = {}, tryTimes = 4) {
                const ref = pluginRefs.current[id];
                if (ref) return ref.open(props);
                // If the plugin has not been loaded yet, we wait for at most 2000ms
                if (tryTimes === 0) return;
                setTimeout(()=>openPlugin(id, props, tryTimes - 1), 500);
            }
        }), []);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
    const trackPluginRef = (pluginID)=>(ref)=>{
            pluginRefs.current = {
                ...pluginRefs.current,
                [pluginID]: ref
            };
        };
    return [
        trackPluginRef
    ];
}
function useSetPluginRef(ref, onClick) {
    const refItem = (0,react.useMemo)(()=>({
            open: onClick
        }), [
        onClick
    ]);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
}
const CustomEntry = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes } = PluginEntryRender_useStyles();
    const { id, label, onClick, unstable } = props;
    useSetPluginRef(ref, onClick);
    const { type, getMetadata } = (0,CompositionContext/* useCompositionContext */.C)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
        classes: {
            root: classes.clickRoot
        },
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                    field: label,
                    pluginID: id
                }),
                unstable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "beta_sup",
                    components: {
                        sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                            className: classes.sup
                        })
                    }
                }) : null
            ]
        }),
        onClick: ()=>{
            const metadata = getMetadata();
            onClick?.({
                compositionType: type,
                metadata
            });
        },
        disabled: props.readonly
    });
}));
const DialogEntry = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes } = PluginEntryRender_useStyles();
    const { dialog: Dialog, id, label, unstable, keepMounted, isOpenFromApplicationBoard } = props;
    const [dialogProps, setDialogProps] = (0,react.useState)({});
    const [open, setOpen] = (0,react.useState)(false);
    const opener = (0,react.useCallback)((props = {})=>{
        setDialogProps(props);
        setOpen(true);
    }, []);
    const close = (0,react.useCallback)(()=>{
        setOpen(false);
    }, []);
    useSetPluginRef(ref, opener);
    const chip = /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
        classes: {
            root: classes.clickRoot
        },
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(useTrans/* PluginTransFieldRender */.s, {
                    field: label,
                    pluginID: id
                }),
                unstable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* Trans */.cC, {
                    i18nKey: "beta_sup",
                    components: {
                        sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                            className: classes.sup
                        })
                    }
                }) : null
            ]
        }),
        disabled: props.readonly,
        onClick: opener
    });
    if (keepMounted || open) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            chip,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    display: 'none'
                },
                children: /* Dialog should use portals to render. */ /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog, {
                    open: open,
                    onClose: close,
                    isOpenFromApplicationBoard: isOpenFromApplicationBoard,
                    ...dialogProps
                })
            })
        ]
    });
    return chip;
}));
DialogEntry.displayName = 'DialogEntry';

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/CompositionDialog/CharLimitIndicator.tsx




const CharLimitIndicator_useStyles = (0,makeStyles/* makeStyles */.Z)()((_theme, overflowed)=>({
        root: {
            position: 'relative',
            display: 'inline-flex',
            marginLeft: 8,
            marginRight: 8
        },
        circle: {
            transitionProperty: 'transform, width, height, color',
            color: overflowed ? 'red' : undefined
        },
        label: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }));
const CharLimitIndicator = /*#__PURE__*/ (0,react.memo)(({ value, max, ...props })=>{
    const displayLabel = max - value < 40;
    const normalized = Math.min(value / max * 100, 100);
    const { classes, cx } = CharLimitIndicator_useStyles(value >= max);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                variant: "determinate",
                color: displayLabel ? 'secondary' : 'primary',
                size: displayLabel ? void 0 : 16,
                ...props,
                value: normalized,
                className: cx(props.className, classes.circle)
            }),
            displayLabel ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.label,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    component: "div",
                    color: "textSecondary",
                    children: max - value
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ./packages/shared-base/src/Messages/Events.ts
var Events = __webpack_require__(24272);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var locales_i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(72601);
// EXTERNAL MODULE: ./packages/shared-base/src/NextID/types.ts
var NextID_types = __webpack_require__(95766);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(72845);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/EmptyStatus/index.tsx
var EmptyStatus = __webpack_require__(85793);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ActionButton/index.tsx
var ActionButton = __webpack_require__(58894);
// EXTERNAL MODULE: ./packages/theme/src/Components/LoadingBase/index.tsx
var LoadingBase = __webpack_require__(20419);
// EXTERNAL MODULE: ./packages/theme/src/Components/Boundary/index.tsx
var Boundary = __webpack_require__(64149);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useLookupAddress.ts
var useLookupAddress = __webpack_require__(80675);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(88012);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Stack/Stack.js
var Stack = __webpack_require__(45262);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(38670);
// EXTERNAL MODULE: ./packages/mask/shared/helpers/attachNextIDToProfile.ts
var attachNextIDToProfile = __webpack_require__(562);
// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/ProfileInList.tsx
var ProfileInList = __webpack_require__(15763);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/SelectRecipientsDialog.tsx












const SelectRecipientsDialog_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            minHeight: 400,
            minWidth: 400,
            overflow: 'hidden'
        },
        inputRoot: {
            padding: '4px 10px',
            borderRadius: 8,
            width: '100%',
            background: theme.palette.maskColor.input,
            fontSize: 14,
            marginBottom: 16
        },
        inputFocused: {
            background: theme.palette.maskColor.bottom,
            borderColor: theme.palette.text.third
        },
        paper: {
            height: 450,
            position: 'relative',
            padding: theme.spacing(2),
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflow: 'hidden'
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
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        mainText: {
            color: theme.palette.text.primary
        },
        listParent: {
            height: 400,
            display: 'flex',
            flexDirection: 'column'
        },
        listBody: {
            height: 400,
            '::-webkit-scrollbar': {
                display: 'none'
            },
            overflowY: 'auto',
            flex: 1,
            backgroundColor: theme.palette.maskColor.bottom
        },
        list: {
            gridGap: '12px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            alignItems: 'flex-start'
        },
        actions: {
            display: 'flex',
            gap: 16,
            padding: 16,
            boxSizing: 'border-box',
            alignItems: 'center',
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            boxShadow: theme.palette.mode === 'light' ? ' 0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12);',
            borderRadius: '0px 0px 12px 12px',
            flex: 1,
            backdropFilter: 'blur(8px)'
        },
        back: {
            color: theme.palette.maskColor.main,
            background: theme.palette.maskColor.thirdMain,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            '&:hover': {
                color: theme.palette.maskColor.main,
                background: theme.palette.maskColor.thirdMain,
                fontSize: 14,
                fontWeight: 700,
                lineHeight: '18px'
            }
        },
        done: {
            color: theme.palette.maskColor.bottom,
            background: theme.palette.maskColor.main,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px'
        }
    }));
function SelectRecipientsDialogUI(props) {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = SelectRecipientsDialog_useStyles();
    const { items, onSearch } = props;
    const [searchInput, setSearchInput] = (0,react.useState)('');
    const { value: registeredAddress = '' } = (0,useLookupAddress/* useLookupAddress */.h)(undefined, (0,react.useDeferredValue)(searchInput));
    const [selectedAllProfiles, setSelectedAllProfiles] = (0,react.useState)([]);
    const keyword = registeredAddress || searchInput;
    const results = (0,react.useMemo)(()=>{
        if (!keyword) return items;
        return entry/* Fuse */.QI.create(items, {
            keys: [
                'identifier.userId',
                'nickname',
                'walletAddress',
                'linkedPersona.rawPublicKey',
                'linkedPersona.publicKeyAsHex',
                'linkedTwitterNames'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        }).search(keyword).map((item)=>item.item);
    }, [
        keyword,
        items
    ]);
    const handleClose = ()=>{
        props.onClose();
        setSearchInput('');
        onSearch('');
    };
    const handleSubmit = (0,react.useCallback)(async ()=>{
        props.onSetSelected([
            ...selectedAllProfiles
        ]);
        for (const item of selectedAllProfiles){
            await (0,attachNextIDToProfile/* attachNextIDToProfile */.$)(item);
        }
        props.onSubmit();
        setSearchInput('');
        onSearch('');
    }, [
        selectedAllProfiles
    ]);
    const onSelectedProfile = (0,react.useCallback)((item, checked)=>{
        if (checked) {
            setSelectedAllProfiles((profiles)=>[
                    ...profiles,
                    item
                ]);
        } else setSelectedAllProfiles((profiles)=>profiles.filter((x)=>x !== item));
    }, []);
    const selectedPubkeyList = (0,compact/* default */.Z)(selectedAllProfiles.map((x)=>x.linkedPersona?.publicKeyAsHex));
    const onSelectedAllChange = (0,react.useCallback)((checked)=>{
        if (checked) {
            setSelectedAllProfiles([
                ...results
            ]);
        } else {
            setSelectedAllProfiles([]);
        }
    }, [
        results
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        className: classes.root,
        open: props.open,
        title: t.select_specific_friends_dialog__title(),
        onClose: handleClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.paper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        className: classes.inputRoot,
                        classes: {
                            focused: classes.inputFocused
                        },
                        value: searchInput,
                        onKeyUp: (e)=>{
                            if (e.code !== 'Enter') return;
                            (0,react.startTransition)(()=>onSearch(keyword));
                        },
                        onChange: (e)=>setSearchInput(e.target.value.trim()),
                        onBlur: ()=>onSearch(keyword),
                        startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                            position: "start",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Search, {})
                        }),
                        placeholder: t.post_dialog_share_with_input_placeholder()
                    }),
                    props.loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: cx(classes.empty, classes.mainText),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingBase/* LoadingBase */.S, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.loading()
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Boundary/* Boundary */.E, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.listParent,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.listBody,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.list,
                                        children: results.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyStatus/* EmptyStatus */.a, {
                                            className: classes.empty,
                                            children: props.searchEmptyText ?? t.compose_encrypt_share_dialog_empty()
                                        }) : results.map((item, index)=>{
                                            const pubkey = item.linkedPersona?.publicKeyAsHex;
                                            const selected = selectedPubkeyList.includes(pubkey);
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInList/* ProfileInList */.n, {
                                                profile: item,
                                                highlightText: keyword,
                                                selected: selected,
                                                disabled: props.disabled,
                                                onChange: onSelectedProfile
                                            }, index);
                                        })
                                    })
                                }),
                                results.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    alignItems: "center",
                                    flexDirection: "row",
                                    sx: {
                                        padding: '16px 0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            size: "small",
                                            sx: {
                                                width: 20,
                                                height: 20
                                            },
                                            onChange: (e)=>onSelectedAllChange(e.currentTarget.checked)
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            sx: {
                                                paddingLeft: 1
                                            },
                                            children: t.select_all()
                                        })
                                    ]
                                }) : null
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                style: {
                    padding: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.actions,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.back,
                            fullWidth: true,
                            variant: "roundedContained",
                            disabled: props.submitDisabled,
                            onClick: handleClose,
                            children: t.back()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Z, {
                            className: classes.done,
                            fullWidth: true,
                            variant: "roundedContained",
                            disabled: props.submitDisabled,
                            executor: handleSubmit,
                            completeIcon: null,
                            failIcon: null,
                            failedOnClick: "use executor",
                            complete: t.done(),
                            init: t.done(),
                            waiting: t.done()
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/useTwitterIdByWalletSearch.tsx
var useTwitterIdByWalletSearch = __webpack_require__(73529);
// EXTERNAL MODULE: ./packages/shared/src/utils/resolveNextIDPlatform.ts
var resolveNextIDPlatform = __webpack_require__(85662);
// EXTERNAL MODULE: ./packages/shared/src/utils/resolveValueToSearch.ts
var resolveValueToSearch = __webpack_require__(83418);
// EXTERNAL MODULE: ./packages/shared/src/hooks/usePersonasFromNextID.ts
var usePersonasFromNextID = __webpack_require__(8347);
// EXTERNAL MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/useContacts.ts + 1 modules
var useContacts = __webpack_require__(34299);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/SelectRecipients/SelectRecipients.tsx










function SelectRecipientsUI(props) {
    const { items, selected, onSetSelected, open, onClose } = props;
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const [valueToSearch, setValueToSearch] = (0,react.useState)('');
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const type = (0,resolveNextIDPlatform/* resolveNextIDPlatform */.v)(valueToSearch);
    const _value = (0,resolveValueToSearch/* resolveValueToSearch */._)(valueToSearch);
    const { isInitialLoading: searchLoading, data: NextIDResults } = (0,usePersonasFromNextID/* usePersonasFromNextID */.r)(_value, type ?? NextID_types/* NextIDPlatform */.V.NextID, false);
    const NextIDItems = (0,useTwitterIdByWalletSearch/* useTwitterIdByWalletSearch */.V)(NextIDResults, _value, type);
    const myUserId = currentIdentity?.identifier.userId;
    const searchedList = (0,react.useMemo)(()=>{
        if (!items.recipients) return constants/* EMPTY_LIST */.rP;
        const profileItems = items.recipients.filter((x)=>x.identifier.userId !== myUserId);
        // Selected might contain profiles that fetched asynchronously from
        // Next.ID, which are not stored locally
        return (0,uniqBy/* default */.Z)(profileItems.concat(NextIDItems, selected), ({ linkedPersona })=>linkedPersona?.rawPublicKey);
    }, [
        NextIDItems,
        selected,
        items.recipients,
        myUserId
    ]);
    const { value = constants/* EMPTY_LIST */.rP } = (0,useContacts/* useContacts */.g)(currentIdentity?.identifier.network);
    (0,react.useEffect)(()=>{
        if (!open) return;
        items.request();
    }, [
        open,
        items.request
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsDialogUI, {
        searchEmptyText: valueToSearch ? t.wallet_search_no_result() : undefined,
        loading: searchLoading,
        onSearch: setValueToSearch,
        open: open,
        items: (0,uniqBy/* default */.Z)([
            ...searchedList,
            ...value
        ], (x)=>x.linkedPersona?.publicKeyAsHex),
        selected: selected,
        disabled: false,
        submitDisabled: false,
        onSubmit: onClose,
        onClose: onClose,
        onSetSelected: onSetSelected
    });
}

// EXTERNAL MODULE: ./packages/theme/src/ShadowRoot/Portal.tsx
var Portal = __webpack_require__(26909);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Popover/Popover.js
var Popover = __webpack_require__(66069);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(87565);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/PopoverListTrigger.tsx




const PopoverListTrigger_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        popper: {
            overflow: 'visible',
            boxShadow: '0px 0px 16px 0px rgba(101, 119, 134, 0.2)',
            borderRadius: 4
        },
        paperRoot: {
            background: theme.palette.maskColor.bottom,
            boxShadow: theme.palette.mode === 'dark' ? '0px 4px 30px rgba(255, 255, 255, 0.15)' : '0px 4px 30px rgba(0, 0, 0, 0.1)'
        },
        popperText: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '18px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 4,
            cursor: 'pointer',
            padding: 0,
            border: 0,
            background: 'none',
            minWidth: 70
        },
        paper: {
            width: 280,
            padding: 12,
            boxSizing: 'border-box'
        },
        selected: {
            lineHeight: '18px',
            fontSize: 14,
            fontWeight: 700,
            color: theme.palette.maskColor.main
        }
    }));
function PopoverListTrigger({ anchorEl, selected, selectedTitle, children, setAnchorEl, onChange }) {
    const { classes } = PopoverListTrigger_useStyles();
    return (0,Portal/* usePortalShadowRoot */.ad)((ref)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                    type: "button",
                    className: classes.popperText,
                    onClick: (e)=>{
                        setAnchorEl(anchorEl ? null : e.currentTarget);
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.selected,
                            children: selectedTitle
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                            className: classes.selected,
                            size: 20
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Popover/* default */.ZP, {
                    container: ref,
                    disableScrollLock: true,
                    className: classes.popper,
                    classes: {
                        paper: classes.paperRoot
                    },
                    open: !!anchorEl,
                    anchorEl: anchorEl,
                    onClose: ()=>setAnchorEl(null),
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    },
                    transformOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioGroup/* default */.Z, {
                        className: classes.paper,
                        value: selected,
                        onChange: (e)=>onChange(e.target.value),
                        children: children
                    })
                })
            ]
        }));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(99371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Radio/Radio.js + 3 modules
var Radio = __webpack_require__(72881);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/PopoverListItem.tsx



const PopoverListItem_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            marginLeft: 'unset',
            marginRight: 'unset'
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            flex: 1
        },
        mainTitle: {
            fontWeight: 700,
            fontSize: 14
        },
        subTitle: {
            whiteSpace: 'nowrap',
            fontSize: 14
        },
        pointer: {
            cursor: 'pointer'
        }
    }));
function PopoverListItem(props) {
    const { title, subTitle, value, itemTail, disabled } = props;
    const { classes, cx } = PopoverListItem_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
        classes: {
            root: classes.root,
            label: itemTail ? cx(classes.label, classes.pointer) : classes.label
        },
        disabled: disabled,
        value: value,
        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
        onClick: ()=>props.onClick?.(value),
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.mainTitle,
                            children: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subTitle,
                            children: subTitle
                        })
                    ]
                }),
                itemTail
            ]
        })
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/EncryptionMethodSelector.tsx







const EncryptionMethodSelector_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        optionTitle: {
            fontFamily: 'sans-serif',
            fontSize: 14,
            lineHeight: '18px',
            color: theme.palette.text.secondary,
            marginRight: 12
        },
        divider: {
            width: '100%',
            height: 1,
            background: theme.palette.divider,
            margin: '8px 0'
        }
    }));
var EncryptionMethodType;
(function(EncryptionMethodType) {
    EncryptionMethodType["Text"] = 'text';
    EncryptionMethodType["Image"] = 'image';
})(EncryptionMethodType || (EncryptionMethodType = {}));
function EncryptionMethodSelector(props) {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = EncryptionMethodSelector_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.optionTitle,
                children: t.post_dialog_encryption_method()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(PopoverListTrigger, {
                selected: props.method ?? EncryptionMethodType.Text,
                anchorEl: anchorEl,
                setAnchorEl: setAnchorEl,
                onChange: props.onChange,
                selectedTitle: props.method === EncryptionMethodType.Text ? t.compose_encrypt_method_text() : t.compose_encrypt_method_image(),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PopoverListItem, {
                        value: EncryptionMethodType.Text,
                        title: t.compose_encrypt_method_text(),
                        subTitle: t.compose_encrypt_method_text_sub_title(),
                        disabled: props.textDisabled
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.divider
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PopoverListItem, {
                        value: EncryptionMethodType.Image,
                        title: t.compose_encrypt_method_image(),
                        subTitle: t.compose_encrypt_method_image_sub_title(),
                        disabled: props.imageDisabled
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+kit@0.1.2/node_modules/@masknet/kit/esm/index.js + 1 modules
var kit_esm = __webpack_require__(30898);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/ConnectPersonaBoundary/index.tsx
var ConnectPersonaBoundary = __webpack_require__(4145);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/usePersonasFromDB.ts
var usePersonasFromDB = __webpack_require__(4172);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/EncryptionTargetSelector.tsx
















const EncryptionTargetSelector_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        optionTitle: {
            lineHeight: '18px',
            fontSize: 14,
            color: theme.palette.text.secondary,
            marginRight: 12
        },
        divider: {
            width: '100%',
            height: 1,
            background: theme.palette.divider,
            margin: '8px 0'
        },
        mainTitle: {
            color: theme.palette.text.primary,
            fontWeight: 700
        },
        flex: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
            boxSizing: 'border-box'
        },
        create: {
            cursor: 'pointer',
            fontWeight: 700,
            color: theme.palette.maskColor.primary,
            textAlign: 'right'
        },
        rightIcon: {
            marginLeft: 'auto'
        }
    }));
function EncryptionTargetSelector(props) {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const { classes } = EncryptionTargetSelector_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const allPersonas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const e2eDisabledMessage = props.e2eDisabled && props.e2eDisabled !== E2EUnavailableReason.NoLocalKey ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.flex,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.mainTitle,
                children: t.persona_required()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                flex: 1
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectPersonaBoundary/* ConnectPersonaBoundary */.C, {
                personas: allPersonas,
                identity: lastRecognized,
                currentPersonaIdentifier: currentIdentifier,
                openDashboard: service/* default */.ZP.Helper.openDashboard,
                customHint: true,
                handlerPosition: "top-right",
                enableVerify: false,
                createConfirm: false,
                children: (s)=>{
                    if (!s.hasPersona) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.create,
                        children: t.create()
                    });
                    // TODO: how to handle verified
                    if (!s.connected || !s.verified) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.create,
                        children: t.connect()
                    });
                    return null;
                }
            })
        ]
    }) : null;
    const noLocalKeyMessage = props.e2eDisabled === E2EUnavailableReason.NoLocalKey && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.flex,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.mainTitle,
            children: t.compose_no_local_key()
        })
    });
    const selectedTitle = ()=>{
        const selected = props.target;
        const shareWithNum = props.selectedRecipientLength;
        if (selected === Events/* EncryptionTargetType */.J.E2E) return shareWithNum > 1 ? t.compose_shared_friends_other({
            count: shareWithNum
        }) : t.compose_shared_friends_one();
        else if (selected === Events/* EncryptionTargetType */.J.Public) return t.compose_encrypt_visible_to_all();
        else if (selected === Events/* EncryptionTargetType */.J.Self) return t.compose_encrypt_visible_to_private();
        (0,kit_esm/* unreachable */.t1)(selected);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.optionTitle,
                children: t.post_dialog_visible_to()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(PopoverListTrigger, {
                selected: props.target,
                selectedTitle: selectedTitle(),
                anchorEl: anchorEl,
                setAnchorEl: setAnchorEl,
                onChange: (v)=>{
                    props.onClick(v);
                    if (v === Events/* EncryptionTargetType */.J.E2E) setAnchorEl(null);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PopoverListItem, {
                        value: Events/* EncryptionTargetType */.J.Public,
                        title: t.compose_encrypt_visible_to_all(),
                        subTitle: t.compose_encrypt_visible_to_all_sub()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.divider
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PopoverListItem, {
                        disabled: !!props.e2eDisabled,
                        value: Events/* EncryptionTargetType */.J.Self,
                        title: t.compose_encrypt_visible_to_private(),
                        subTitle: t.compose_encrypt_visible_to_private_sub()
                    }),
                    e2eDisabledMessage,
                    noLocalKeyMessage,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.divider
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PopoverListItem, {
                        itemTail: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.RightArrow, {
                            className: classes.rightIcon
                        }),
                        disabled: !!props.e2eDisabled,
                        value: Events/* EncryptionTargetType */.J.E2E,
                        title: t.compose_encrypt_visible_to_share(),
                        subTitle: t.compose_encrypt_visible_to_share_sub(),
                        onClick: (v)=>{
                            if (props.e2eDisabled) return;
                            props.onClick(v);
                            if (v === Events/* EncryptionTargetType */.J.E2E) setAnchorEl(null);
                        }
                    }),
                    e2eDisabledMessage,
                    noLocalKeyMessage
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/CompositionUI.tsx















const CompositionUI_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        root: {
            '& > *': {
                height: '36px !important'
            },
            minHeight: 450,
            maxHeight: 464,
            height: 464,
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2)
        },
        flex: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        between: {
            justifyContent: 'space-between'
        },
        optionTitle: {
            lineHeight: '18px',
            fontSize: 14,
            color: theme.palette.text.secondary,
            marginRight: 12
        },
        editorWrapper: {
            flex: 1,
            width: 568,
            background: theme.palette.maskColor.bottom,
            padding: 0,
            boxSizing: 'border-box',
            borderRadius: 8,
            marginBottom: 16
        },
        icon: {
            width: 18,
            height: 18,
            fill: theme.palette.text.buttonText
        },
        action: {
            height: 68,
            padding: '0 16px',
            boxShadow: theme.palette.mode === 'light' ? ' 0px 0px 20px rgba(0, 0, 0, 0.05)' : '0px 0px 20px rgba(255, 255, 255, 0.12);',
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            justifyContent: 'space-between',
            display: 'flex'
        },
        personaAction: {
            flex: 1
        }
    }));
// Enabled features
// Requirements
const CompositionDialogUI = /*#__PURE__*/ (0,react.forwardRef)(function CompositionDialogUI(props, ref) {
    const { classes, cx } = CompositionUI_useStyles();
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const [currentPostSize, __updatePostSize] = (0,react.useState)(0);
    const [isSelectRecipientOpen, setSelectRecipientOpen] = (0,react.useState)(false);
    const Editor = (0,react.useRef)(null);
    const PluginEntry = (0,react.useRef)(null);
    const [sending, setSending] = (0,react.useState)(false);
    const updatePostSize = (0,react.useCallback)((size)=>{
        (0,react.startTransition)(()=>__updatePostSize(size));
    }, []);
    const { encodingKind, setEncoding } = useEncryptionEncode(props);
    const { setEncryptionKind, encryptionKind, recipients, setRecipients } = useSetEncryptionKind(props, encodingKind);
    const reset = (0,react.useCallback)(()=>{
        (0,react.startTransition)(()=>{
            Editor.current?.reset();
            setEncryptionKind(Events/* EncryptionTargetType */.J.Public);
            setRecipients([]);
            // Don't clean up the image/text selection across different encryption.
            // setEncoding('text')
            setSending(false);
        });
    }, []);
    const refItem = (0,react.useMemo)(()=>({
            setMessage: (msg)=>{
                if (Editor.current) Editor.current.value = msg;
            },
            setEncryptionKind,
            startPlugin: (id, props)=>{
                PluginEntry.current?.openPlugin(id, props);
            },
            reset
        }), [
        reset
    ]);
    (0,react.useImperativeHandle)(ref, ()=>refItem, [
        refItem
    ]);
    (0,react.useEffect)(()=>{
        if (!props.initialMetas || !Editor.current) return;
        for (const [meta, data] of Object.entries(props.initialMetas)){
            Editor.current.attachMetadata(meta, data);
        }
    }, [
        props.initialMetas,
        Editor.current
    ]);
    const context = (0,react.useMemo)(()=>({
            type: props.type,
            getMetadata: ()=>Editor.current?.value.meta,
            attachMetadata: (meta, data)=>Editor.current?.attachMetadata(meta, data),
            dropMetadata: (meta)=>Editor.current?.dropMetadata(meta)
        }), [
        props.type,
        Editor.current
    ]);
    const submitAvailable = currentPostSize > 0 && currentPostSize < (props.maxLength ?? Number.POSITIVE_INFINITY);
    const onSubmit = (0,react.useCallback)(()=>{
        if (!Editor.current) return;
        setSending(true);
        props.onSubmit({
            content: Editor.current.value,
            encode: encodingKind,
            target: encryptionKind === Events/* EncryptionTargetType */.J.Public ? {
                type: 'public'
            } : {
                type: 'E2E',
                target: recipients.map((x)=>({
                        profile: x.identifier,
                        persona: x.linkedPersona
                    }))
            },
            version: encodingKind === EncryptionMethodType.Text ? -37 : -38
        }).finally(reset);
    }, [
        encodingKind,
        encryptionKind,
        recipients,
        props.onSubmit
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CompositionContext/* CompositionContext */.N.Provider, {
        value: context,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.editorWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageEditor, {
                            autoFocus: true,
                            readonly: sending,
                            ref: (element)=>{
                                Editor.current = element;
                                if (element) updatePostSize(element.estimatedLength);
                            },
                            onChange: (message)=>{
                                (0,react.startTransition)(()=>props.onChange?.(message));
                                updatePostSize(Editor.current?.estimatedLength || 0);
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.flex,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionTitle,
                                children: t.plugins()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginEntryRender, {
                                readonly: sending,
                                ref: PluginEntry,
                                isOpenFromApplicationBoard: props.isOpenFromApplicationBoard
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: cx(classes.flex, classes.between),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptionTargetSelector, {
                                target: encryptionKind,
                                e2eDisabled: props.e2eEncryptionDisabled(encodingKind),
                                selectedRecipientLength: recipients.length,
                                onClick: (target)=>{
                                    setEncryptionKind(target);
                                    if (target === Events/* EncryptionTargetType */.J.E2E) {
                                        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryMaskComposeVisibleSelected);
                                        setSelectRecipientOpen(true);
                                    }
                                    if (target === Events/* EncryptionTargetType */.J.Public) {
                                        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryMaskComposeVisibleAll);
                                    }
                                    if (target === Events/* EncryptionTargetType */.J.Self) {
                                        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryMaskComposeVisiblePrivate);
                                    }
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsUI, {
                                open: isSelectRecipientOpen,
                                onClose: ()=>setSelectRecipientOpen(false),
                                disabled: sending,
                                items: props.recipients,
                                selected: recipients,
                                onSetSelected: setRecipients
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cx(classes.flex, classes.between),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptionMethodSelector, {
                            imageDisabled: !props.supportImageEncoding,
                            textDisabled: !props.supportTextEncoding,
                            method: encodingKind,
                            onChange: setEncoding
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                className: classes.action,
                children: [
                    props.personaAction ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.personaAction,
                        children: props.personaAction
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            props.maxLength ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CharLimitIndicator, {
                                value: currentPostSize,
                                max: props.maxLength
                            }) : null,
                            props.requireClipboardPermission && !props.hasClipboardPermission ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "roundedContained",
                                onClick: props.onRequestClipboardPermission,
                                sx: {
                                    marginRight: 1
                                },
                                children: t.post_dialog_enable_paste_auto()
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                style: {
                                    opacity: 1
                                },
                                disabled: !submitAvailable,
                                loading: sending,
                                loadingPosition: "start",
                                variant: "roundedContained",
                                onClick: onSubmit,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Send, {
                                    className: classes.icon
                                }),
                                children: t.post_dialog__button()
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
var E2EUnavailableReason;
(function(E2EUnavailableReason) {
    E2EUnavailableReason[E2EUnavailableReason[// These reasons only applies to E2E encryption.
    "NoPersona"] = 1] = "NoPersona";
    E2EUnavailableReason[E2EUnavailableReason["NoLocalKey"] = 2] = "NoLocalKey";
    E2EUnavailableReason[E2EUnavailableReason["NoConnection"] = 3] = "NoConnection";
})(E2EUnavailableReason || (E2EUnavailableReason = {}));
function useSetEncryptionKind(props, encoding) {
    const [internal_encryptionKind, setEncryptionKind] = (0,react.useState)(Events/* EncryptionTargetType */.J.Public);
    // TODO: Change to ProfileIdentifier
    const [recipients, setRecipients] = (0,react.useState)([]);
    let encryptionKind = internal_encryptionKind;
    if (encryptionKind === Events/* EncryptionTargetType */.J.E2E && recipients.length === 0) encryptionKind = Events/* EncryptionTargetType */.J.Self;
    if (props.e2eEncryptionDisabled(encoding)) encryptionKind = Events/* EncryptionTargetType */.J.Public;
    return {
        recipients,
        setRecipients,
        encryptionKind,
        setEncryptionKind
    };
}
function useEncryptionEncode(props) {
    const [encoding, setEncoding] = (0,react.useState)(props.supportTextEncoding ? EncryptionMethodType.Text : EncryptionMethodType.Image);
    const imagePayloadSelected = props.supportImageEncoding && (encoding === EncryptionMethodType.Image || !props.supportTextEncoding);
    // XOR
    const imagePayloadReadonly = props.supportImageEncoding && !props.supportTextEncoding || !props.supportImageEncoding && props.supportTextEncoding;
    const imagePayloadVisible = props.supportImageEncoding;
    const encodingKind = imagePayloadSelected ? EncryptionMethodType.Image : EncryptionMethodType.Text;
    return {
        encodingKind,
        imagePayloadSelected,
        imagePayloadReadonly,
        imagePayloadVisible,
        setEncoding
    };
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/useCompositionClipboardRequest.tsx




function useCompositionClipboardRequest(requireClipboardPermission) {
    const { retry, value: hasClipboardPermission = true } = (0,esm_useAsyncRetry/* default */.Z)(async ()=>{
        if (!requireClipboardPermission) return true;
        return service/* default */.ZP.Helper.queryExtensionPermission({
            permissions: [
                'clipboardRead'
            ]
        });
    }, [
        requireClipboardPermission
    ]);
    const onRequestClipboardPermission = (0,react.useCallback)(()=>{
        if (!requireClipboardPermission) return;
        service/* default */.ZP.Helper.requestExtensionPermission({
            permissions: [
                'clipboardRead'
            ]
        }).finally(()=>{
            Messages/* MaskMessages */.q.events.requestExtensionPermission.sendToAll({
                permissions: [
                    'clipboardRead'
                ]
            });
        });
    }, [
        requireClipboardPermission
    ]);
    return {
        onQueryClipboardPermission: retry,
        requireClipboardPermission,
        hasClipboardPermission,
        onRequestClipboardPermission
    };
}

// EXTERNAL MODULE: ./packages/mask/content-script/components/CompositionDialog/useRecipientsList.ts
var useRecipientsList = __webpack_require__(73929);
// EXTERNAL MODULE: ./packages/encryption/src/network-encoding/index.ts
var network_encoding = __webpack_require__(53218);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@masknet+stego-js@0.14.2/node_modules/@masknet/stego-js/esm/dom.js + 21 modules
var dom = __webpack_require__(59300);
;// CONCATENATED MODULE: ./packages/encryption/src/image-steganography/index.ts





var SteganographyPreset;
(function(SteganographyPreset) {
    SteganographyPreset["Preset2021"] = '2021';
    SteganographyPreset["Preset2022"] = '2022';
    SteganographyPreset["Preset2023"] = '2023';
})(SteganographyPreset || (SteganographyPreset = {}));
async function steganographyEncodeImage(buf, options) {
    const { downloadImage, data, password, grayscaleAlgorithm } = options;
    const preset = getPreset(options.preset);
    if (!preset) throw new Error('Failed to find preset.');
    const optionalOptions = {};
    if (grayscaleAlgorithm) optionalOptions.grayscaleAlgorithm = grayscaleAlgorithm;
    if (preset.type === 'string' && typeof data !== 'string') throw new TypeError('The chosen preset must be used with string');
    if (preset.type === 'raw' && typeof data === 'string') throw new TypeError('The chosen preset must be used with Uint8Array');
    const text = typeof data === 'string' ? data : encodeArrayBuffer(data);
    return new Uint8Array(await encode(buf, preset.mask ? await downloadImage(preset.mask) : new Uint8Array(DEFAULT_MASK), {
        ...preset.options,
        ...optionalOptions,
        text,
        pass: password
    }));
}
async function steganographyDecodeImage(image, options) {
    const buffer = typeof image === 'string' ? await options.downloadImage(image) : await image.arrayBuffer();
    const dimension = getDimension(buffer);
    const preset = findPreset(dimension);
    if (!preset) return null;
    const result = decode(buffer, preset.mask ? await options.downloadImage(preset.mask) : new Uint8Array(DEFAULT_MASK), {
        ...preset.options,
        pass: options.password
    });
    if (preset.type === 'raw') return new Uint8Array(decodeArrayBuffer(await result));
    return result;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/resources/image-payload/index.ts

const SteganographyPresetImage = {
    [SteganographyPreset.Preset2021]: new URL(/* asset import */ __webpack_require__(40923), __webpack_require__.b).toString(),
    [SteganographyPreset.Preset2022]: new URL(/* asset import */ __webpack_require__(5401), __webpack_require__.b).toString(),
    [SteganographyPreset.Preset2023]: new URL(/* asset import */ __webpack_require__(6090), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ./packages/mask/content-script/utils/downloadUrl.ts
var downloadUrl = __webpack_require__(36435);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/SteganographyPayload.ts





async function SteganographyPayload(data) {
    const password = ui.activatedSiteAdaptorUI.configuration.steganography?.password?.() || 'mask';
    const preset = typeof data === 'string' ? SteganographyPreset.Preset2022 : SteganographyPreset.Preset2023;
    const blankImage = await (0,downloadUrl/* downloadUrl */.G)(SteganographyPresetImage[preset]).then((x)=>x.arrayBuffer());
    const secretImage = await service/* default */.ZP.Crypto.steganographyEncodeImage(new Uint8Array(blankImage), {
        preset,
        data,
        password,
        grayscaleAlgorithm: ui.activatedSiteAdaptorUI.configuration.steganography?.grayscaleAlgorithm ?? dom/* GrayscaleAlgorithm */.Ft.NONE
    });
    const blob = new Blob([
        secretImage
    ], {
        type: 'image/png'
    });
    return blob;
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/useSubmit.ts










function useSubmit(onClose, reason) {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const lastRecognizedIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    return (0,react.useCallback)(async (info)=>{
        const { content, encode, target } = info;
        const fallbackProfile = ui/* activatedSiteAdaptor_state */.g.profiles.value[0]?.identifier;
        if (encode === 'image' && !lastRecognizedIdentity) throw new Error('No Current Profile');
        // rawEncrypted is either string or Uint8Array
        // string is the old format, Uint8Array is the new format.
        const rawEncrypted = await service/* default */.ZP.Crypto.encryptTo(info.version, content, target, lastRecognizedIdentity?.identifier ?? fallbackProfile, ui.activatedSiteAdaptorUI.encryptPayloadNetwork);
        // Since we cannot directly send binary in the composition box, we need to encode it into a string.
        const encrypted = (0,network_encoding/* encodeByNetwork */.a1)(ui.activatedSiteAdaptorUI.encryptPayloadNetwork, rawEncrypted);
        const decoratedText = encode === 'image' ? decorateEncryptedText('', t, content.meta) : decorateEncryptedText(encrypted, t, content.meta);
        const defaultText = encode === 'image' ? t.additional_post_box__encrypted_post_pre({
            encrypted: 'https://mask.io/'
        }) : t.additional_post_box__encrypted_post_pre({
            encrypted
        });
        const mediaObject = encode === 'image' ? // We can send raw binary through the image, but for the text we still use the old way.
        // For text, it must send the text _after_ encodeByNetwork, otherwise it will break backward compatibility.
        await SteganographyPayload(typeof rawEncrypted === 'string' ? encrypted : rawEncrypted) : undefined;
        if (ui.activatedSiteAdaptorUI?.automation.endpoint?.publishPost) {
            await ui.activatedSiteAdaptorUI.automation.endpoint.publishPost(mediaObject ? [
                decoratedText || defaultText,
                mediaObject
            ] : [
                decoratedText || defaultText
            ], {
                reason
            });
        } else {
            if (encode === 'image') {
                if (!mediaObject) throw new Error('Failed to create image payload.');
                // Don't await this, otherwise the dialog won't disappear
                ui.activatedSiteAdaptorUI?.automation.nativeCompositionDialog?.attachImage?.(mediaObject, {
                    recover: true,
                    relatedTextPayload: decoratedText || defaultText,
                    reason
                });
            } else {
                ui.activatedSiteAdaptorUI?.automation.nativeCompositionDialog?.attachText?.(decoratedText || defaultText, {
                    recover: true,
                    reason
                });
            }
        }
        if (content.meta?.has(`${PluginID/* PluginID */.P.RedPacket}:1`) || content.meta?.has(`${PluginID/* PluginID */.P.RedPacket}_nft:1`)) providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryAppLuckSend);
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryMaskComposeEncrypt);
        onClose();
    }, [
        t,
        lastRecognizedIdentity,
        onClose,
        reason
    ]);
}
// TODO: Provide API to plugin to post-process post content,
// then we can move these -PreText's and meta readers into plugin's own context
function decorateEncryptedText(encrypted, t, meta) {
    const hasOfficialAccount = Sniffings/* Sniffings */.Y.is_twitter_page || Sniffings/* Sniffings */.Y.is_facebook_page;
    const officialAccount = Sniffings/* Sniffings */.Y.is_twitter_page ? t.twitter_account() : t.facebook_account();
    const options = {
        interpolation: {
            escapeValue: false
        }
    };
    // Note: since this is in the composition stage, we can assume plugins don't insert old version of meta.
    if (meta?.has(`${PluginID/* PluginID */.P.RedPacket}:1`) || meta?.has(`${PluginID/* PluginID */.P.RedPacket}_nft:1`)) {
        return hasOfficialAccount ? t.additional_post_box__encrypted_post_pre_red_packet_sns_official_account({
            encrypted,
            account: officialAccount,
            ...options
        }) : t.additional_post_box__encrypted_post_pre_red_packet({
            encrypted,
            ...options
        });
    } else if (meta?.has(`${PluginID/* PluginID */.P.FileService}:3`)) {
        return hasOfficialAccount ? t.additional_post_box__encrypted_post_pre_file_service_sns_official_account({
            encrypted,
            ...options
        }) : t.additional_post_box__encrypted_post_pre_file_service({
            encrypted,
            ...options
        });
    }
    return null;
}

// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/useCurrentPersona.ts
var useCurrentPersona = __webpack_require__(18937);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/CompositionDialog/Composition.tsx




















const Composition_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        dialogRoot: {
            minWidth: 400,
            width: 600,
            boxShadow: 'none',
            backgroundImage: 'none',
            maxWidth: 'none'
        },
        hideDialogRoot: {
            visibility: 'hidden'
        },
        dialogContent: {
            padding: 0
        },
        persona: {
            padding: 0,
            background: (0,colorManipulator/* alpha */.Fq)(theme.palette.maskColor.bottom, 0.8),
            width: 'auto',
            boxShadow: 'none'
        }
    }));
function Composition({ type = 'timeline', requireClipboardPermission }) {
    const t = (0,locales_i18n_generated/* useMaskSharedTrans */.b)();
    const { classes, cx } = Composition_useStyles();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)()?.identifier;
    const allPersonas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const currentIdentifier = (0,useValueRef/* useValueRef */.E)(settings/* currentPersonaIdentifier */.cn);
    const { value: connectStatus } = (0,useCurrentPersonaConnectStatus/* useCurrentPersonaConnectStatus */.H)(allPersonas, currentIdentifier, service/* default */.ZP.Helper.openDashboard, lastRecognized);
    /** @deprecated */ const { value: hasLocalKey } = (0,useAsync/* default */.Z)(async ()=>currentIdentity ? service/* default */.ZP.Identity.hasLocalKey(currentIdentity) : false, [
        currentIdentity,
        connectStatus
    ]);
    const [reason, setReason] = (0,react.useState)('timeline');
    const [initialMetas, setInitialMetas] = (0,react.useState)(constants/* EMPTY_OBJECT */.Nu);
    const [open, setOpen] = (0,react.useState)(false);
    const [isOpenFromApplicationBoard, setIsOpenFromApplicationBoard] = (0,react.useState)(false);
    const onClose = (0,react.useCallback)(()=>{
        setOpen(false);
        setInitialMetas(constants/* EMPTY_OBJECT */.Nu);
        UI.current?.reset();
    }, []);
    const { onQueryClipboardPermission, hasClipboardPermission, onRequestClipboardPermission } = useCompositionClipboardRequest(requireClipboardPermission || false);
    (0,react.useEffect)(()=>{
        return Messages/* MaskMessages */.q.events.requestExtensionPermission.on(()=>onQueryClipboardPermission?.());
    }, [
        onQueryClipboardPermission
    ]);
    (0,react.useEffect)(()=>{
        return CrossIsolationEvents/* CrossIsolationMessages */.W.events.compositionDialogEvent.on(({ reason, open, content, options })=>{
            if (reason !== 'reply' && reason !== type || reason === 'reply' && type === 'popup') return;
            setOpen(open);
            setReason(reason);
            setIsOpenFromApplicationBoard(!!options?.isOpenFromApplicationBoard);
            setInitialMetas(options?.initialMetas ?? constants/* EMPTY_OBJECT */.Nu);
            if (content) UI.current?.setMessage(content);
            if (options?.target) UI.current?.setEncryptionKind(options.target);
            if (options?.startupPlugin) UI.current?.startPlugin(options.startupPlugin, options.startupPluginProps);
        });
    }, [
        type
    ]);
    (0,react.useEffect)(()=>{
        if (!open) return;
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Access, types/* EventID */.HS.EntryMaskComposeOpen);
        providers/* Telemetry */.M.captureEvent(types/* EventType */.tw.Interact, types/* EventID */.HS.EntryMaskComposeVisibleAll);
        return Messages/* MaskMessages */.q.events.replaceComposition.on((message)=>{
            if (!UI.current) return;
            UI.current.setMessage(message);
        });
    }, [
        open
    ]);
    const onSubmit_ = useSubmit(onClose, reason);
    const UI = (0,react.useRef)(null);
    const networkSupport = ui.activatedSiteAdaptorUI.injection.newPostComposition?.supportedOutputTypes;
    const recipients = (0,useRecipientsList/* useRecipientsList */.a)();
    const isE2E_Disabled = (encode)=>{
        if (!connectStatus.currentPersona && !connectStatus.hasPersona) return E2EUnavailableReason.NoPersona;
        if (!connectStatus.connected && connectStatus.hasPersona) return E2EUnavailableReason.NoConnection;
        if (!hasLocalKey && encode === EncryptionMethodType.Image) return E2EUnavailableReason.NoLocalKey;
        return;
    };
    const persona = (0,useCurrentPersona/* useCurrentPersona */.F)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        classes: {
            paper: cx(classes.dialogRoot, !open ? classes.hideDialogRoot : '')
        },
        open: open,
        onClose: onClose,
        title: t.post_dialog__title(),
        independent: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            classes: {
                root: classes.dialogContent
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialogUI, {
                type: type,
                ref: UI,
                hasClipboardPermission: hasClipboardPermission,
                onRequestClipboardPermission: onRequestClipboardPermission,
                requireClipboardPermission: requireClipboardPermission,
                recipients: recipients,
                maxLength: 560,
                onSubmit: onSubmit_,
                supportImageEncoding: networkSupport?.text ?? false,
                supportTextEncoding: networkSupport?.image ?? false,
                e2eEncryptionDisabled: isE2E_Disabled,
                isOpenFromApplicationBoard: isOpenFromApplicationBoard,
                initialMetas: initialMetas,
                personaAction: persona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaAction/* PersonaAction */.D, {
                    currentPersona: persona,
                    classes: {
                        bottomFixed: classes.persona
                    }
                }) : null
            })
        })
    });
}


/***/ }),

/***/ 64798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GuideStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26909);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32024);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20039);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7387);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84271);
/* harmony import */ var _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18126);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94036);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        container: {
            position: 'absolute',
            boxShadow: `0 0 0 3000px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,.3)' : 'rgba(110,118,125,.3)'}`,
            borderRadius: 8
        },
        noBoxShadowCover: {
            boxShadow: `0 0 0 3000px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,.2)' : 'rgba(110,118,125,.2)'}`
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
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(0,0,0,.85)',
            boxShadow: '0 4px 8px rgba(0,0,0,.1)',
            boxSizing: 'border-box',
            color: '#fff',
            '&.arrow-top:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderBottomColor: 'rgba(0,0,0,.85)',
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
                borderTopColor: 'rgba(0,0,0,.85)',
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
            paddingTop: '16px'
        }
    }));
const ActionButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('button')({
    boxSizing: 'border-box',
    width: 104,
    height: 32,
    lineHeight: '32px',
    borderRadius: 16,
    textAlign: 'center',
    border: 'solid 1px #000',
    borderColor: '#fff',
    cursor: 'pointer',
    fontFamily: 'PingFang SC',
    background: 'none',
    color: 'inherit'
});
const NextButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(ActionButton)({
    border: 'none',
    color: '#111418',
    background: '#fff'
});
// cloneElement is used.
// eslint-disable-next-line @typescript-eslint/ban-types
function GuideStep({ total, step, tip, children, arrow = true, onComplete }) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_4__/* .useMaskSharedTrans */ .b)();
    const { classes, cx } = useStyles();
    const childrenRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [clientRect, setClientRect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [bottomAvailable, setBottomAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { networkIdentifier } = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_5__.activatedSiteAdaptorUI;
    const currentStep = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .userGuideStatus */ .Ct[networkIdentifier]);
    const finished = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .userGuideFinished */ .CH[networkIdentifier]);
    const isCurrentStep = +currentStep === step;
    const box1Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const box2Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const box3Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const stepVisible = isCurrentStep && !finished && !!clientRect?.top && !!clientRect.left;
    const onSkip = ()=>{
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .sayHelloShowed */ .Pg[networkIdentifier].value = true;
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .userGuideFinished */ .CH[networkIdentifier].value = true;
    };
    const onNext = ()=>{
        if (step !== total) {
            _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .userGuideStatus */ .Ct[networkIdentifier].value = String(step + 1);
        }
        if (step === total - 1) {
            document.body.scrollIntoView();
        }
    };
    const onTry = ()=>{
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .userGuideFinished */ .CH[networkIdentifier].value = true;
        onComplete?.();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        let stopped = false;
        requestAnimationFrame(function fn() {
            if (stopped) return;
            requestAnimationFrame(fn);
            if (!childrenRef.current) return;
            const cr = childrenRef.current.getBoundingClientRect();
            if (!cr.height) return;
            const bottomAvailable = window.innerHeight - cr.height - cr.top > 200;
            setBottomAvailable(bottomAvailable);
            setClientRect((old)=>{
                if (old && (old.height === cr.height || old.left === cr.left || old.top === cr.top || old.width === cr.width)) return old;
                return cr;
            });
            if (box1Ref.current) {
                box1Ref.current.style.top = cr.top + 'px';
                box1Ref.current.style.left = cr.left + 'px';
            }
            if (box2Ref.current) {
                box2Ref.current.style.width = cr.width + 'px';
                box2Ref.current.style.height = cr.height + 'px';
            }
            if (box3Ref.current) {
                box3Ref.current.style.left = (cr.width < 50 ? -cr.width / 2 : 0) + 'px';
                box3Ref.current.style.top = bottomAvailable ? cr.height + 16 + 'px' : '';
                box3Ref.current.style.bottom = bottomAvailable ? '' : cr.height + 16 + 'px';
            }
        });
        return ()=>void (stopped = true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children, {
                ref: childrenRef
            }),
            (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_8__/* .usePortalShadowRoot */ .ad)((container)=>{
                if (!stepVisible) return null;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    open: true,
                    hideBackdrop: true,
                    container: container,
                    className: classes.mask,
                    onClose: onSkip,
                    children: /* this extra div is feed to <FocusTrap /> If we remove it, it will show a blue outline on the box1 */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            ref: box1Ref,
                            className: cx(classes.container, step === 3 ? classes.noBoxShadowCover : null),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                ref: box2Ref,
                                className: classes.target,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: box3Ref,
                                    className: cx(classes.card, arrow ? bottomAvailable ? 'arrow-top' : 'arrow-bottom' : ''),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            paddingBottom: "16px",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                fontSize: 20,
                                                children: [
                                                    step,
                                                    "/",
                                                    total
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                fontSize: 14,
                                                fontWeight: 600,
                                                children: tip
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: classes.buttonContainer,
                                            children: step === total ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                type: "button",
                                                style: {
                                                    width: '100%'
                                                },
                                                onClick: onTry,
                                                children: t.try()
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionButton, {
                                                        type: "button",
                                                        onClick: onSkip,
                                                        children: t.skip()
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                        type: "button",
                                                        onClick: onNext,
                                                        children: t.next()
                                                    })
                                                ]
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


/***/ }),

/***/ 26251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PostDialogHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8311);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38060);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27966);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60317);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _site_adaptors_facebook_com_utils_isMobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68102);
/* harmony import */ var _shared_ui_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94036);
/* harmony import */ var _GuideStep_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64798);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        button: {
            // TODO: is it correct? (what about twitter?)
            padding: _site_adaptors_facebook_com_utils_isMobile_js__WEBPACK_IMPORTED_MODULE_3__/* .isMobileFacebook */ .q ? 0 : 'var(--icon-padding, 10px)'
        },
        text: {
            color: theme.palette.grey[300],
            marginLeft: theme.spacing(1)
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 10px',
            borderBottom: `1px solid ${theme.palette.divider}`
        }
    }));
const ICON_MAP = {
    minds: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.MaskInMinds, {
        size: 18
    }),
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__.SharpMask, {
        style: {
            height: 'var(--icon-size, 17px)',
            width: 'var(--icon-size, 17px)'
        },
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .MaskColors */ .m.light.maskColor.publicTwitter
    })
};
const EntryIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function EntryIconButton(props) {
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useMaskSharedTrans */ .b)();
    const { tooltip, disableGuideTip } = props;
    const { classes, cx } = useStyles(undefined, {
        props
    });
    const Entry = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_7__/* .ShadowRootTooltip */ .p, {
        title: t.mask_network(),
        placement: tooltip?.placement,
        disableHoverListener: tooltip?.disabled,
        PopperProps: {
            disablePortal: false
        },
        arrow: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            size: "large",
            className: cx(classes.button, classes.iconButton),
            onClick: props.onHintButtonClicked,
            children: ICON_MAP?.[props?.iconType ?? 'default']
        })
    });
    return disableGuideTip ? Entry : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GuideStep_index_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        step: 4,
        total: 4,
        tip: t.user_guide_tip_4(),
        onComplete: props.onHintButtonClicked,
        children: Entry
    });
});
const PostDialogHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PostDialogHintUI(props) {
    const { onHintButtonClicked, size, ...others } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    const t = (0,_shared_ui_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useMaskSharedTrans */ .b)();
    return _site_adaptors_facebook_com_utils_isMobile_js__WEBPACK_IMPORTED_MODULE_3__/* .isMobileFacebook */ .q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.wrapper,
        onClick: onHintButtonClicked,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
                size: size,
                onHintButtonClicked: ()=>undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.text,
                children: t.post_modal_hint__button()
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.buttonTransform,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
            size: size,
            onHintButtonClicked: onHintButtonClicked,
            ...others
        })
    });
});


/***/ }),

/***/ 4347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ProfileCover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23615);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24835);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30504);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94685);
/* harmony import */ var _DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3715);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()(()=>({
        root: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%'
        }
    }));
function ProfileCover(props) {
    const { classes } = useStyles(undefined, {
        props: {
            classes: props.classes
        }
    });
    const currentVisitingIdentity = (0,_DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentVisitingIdentity */ .fb)();
    // TODO: Multi-plugin rendering support
    const component = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const Component = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_4__/* .createInjectHooksRenderer */ .E)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__/* .useActivatedPluginsSiteAdaptor */ .JR.visibility.useAnyMode, (x)=>{
            const cover = x.ProfileCover?.find((x)=>x.ID === `${_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PluginID */ .P.Debugger}_cover`);
            return cover?.UI?.Cover;
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
            identity: currentVisitingIdentity
        });
    }, [
        currentVisitingIdentity
    ]);
    if (!component) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes?.root,
        children: component
    });
}


/***/ }),

/***/ 8388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ ToolboxHintUnstyled)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js
var ListItemButton_ListItemButton = __webpack_require__(62335);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon_ListItemIcon = __webpack_require__(58391);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Typography/Typography.js
var Typography_Typography = __webpack_require__(7387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/ListItemText/ListItemText.js
var ListItemText_ListItemText = __webpack_require__(32863);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Box/Box.js
var Box = __webpack_require__(78130);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useTheme.js
var useTheme = __webpack_require__(43204);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(57058);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+icons-material@5.10.6_@mui+material@5.10.8_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/icons-material/esm/FiberManualRecord.js


/* harmony default export */ const FiberManualRecord = ((0,createSvgIcon/* default */.Z)( /*#__PURE__*/(0,jsx_runtime.jsx)("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}), 'FiberManualRecord'));
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-shared/base/src/specs/index.ts
var specs = __webpack_require__(62649);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useContext.tsx + 1 modules
var useContext = __webpack_require__(14162);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3Others.ts
var useWeb3Others = __webpack_require__(81128);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useChainColor.ts


function useChainColor(pluginID, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    return Others?.chainResolver.chainColor?.(chainId) ?? 'transparent';
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainIdValid.ts
var useChainIdValid = __webpack_require__(44909);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useChainIdMainnet.ts


function useChainIdMainnet(pluginID, expectedChainId) {
    const { chainId } = (0,useContext/* useChainContext */.ql)({
        chainId: expectedChainId
    });
    const Others = (0,useWeb3Others/* useWeb3Others */.v)(pluginID);
    return Others.chainResolver.isMainnet?.(chainId) ?? false;
}

// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(84305);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(60574);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useReverseAddress.ts
var useReverseAddress = __webpack_require__(6379);
// EXTERNAL MODULE: ./packages/shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(98748);
// EXTERNAL MODULE: ./packages/shared/src/UI/modals/modals.ts
var modals = __webpack_require__(25127);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/mask/shared-ui/locales/i18n_generated.ts
var i18n_generated = __webpack_require__(94036);
// EXTERNAL MODULE: ./packages/mask/content-script/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(64798);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
// EXTERNAL MODULE: ./packages/mask/shared-ui/hooks/usePersonasFromDB.ts
var usePersonasFromDB = __webpack_require__(4172);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(77219);
// EXTERNAL MODULE: ./packages/mask/shared-ui/service.ts
var service = __webpack_require__(4643);
// EXTERNAL MODULE: ./packages/mask/content-script/components/GuideStep/useSetupGuideStatus.ts
var useSetupGuideStatus = __webpack_require__(54474);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/DataSource/usePersonaPerSiteConnectStatus.ts






function usePersonaPerSiteConnectStatus() {
    const personas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const lastState = (0,useSetupGuideStatus/* useSetupGuideStatus */.j)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const username = lastState.username || lastRecognized.identifier?.userId;
    const checkSiteConnectedToCurrentPersona = (0,react.useCallback)((persona)=>username ? persona.linkedProfiles.some((x)=>x.identifier.userId === username) : false, [
        username
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const currentPersonaIdentifier = await service/* default */.ZP.Settings.getCurrentPersonaIdentifier();
        const currentPersona = (await service/* default */.ZP.Identity.queryOwnedPersonaInformation(true)).find((x)=>x.identifier === currentPersonaIdentifier);
        const currentSiteConnectedPersona = personas.find(checkSiteConnectedToCurrentPersona);
        if (!currentPersona || !currentSiteConnectedPersona) return;
        return {
            isSiteConnectedToCurrentPersona: currentPersona ? checkSiteConnectedToCurrentPersona(currentPersona) : false,
            currentPersonaPublicKey: currentPersona?.identifier.rawPublicKey,
            currentSiteConnectedPersonaPublicKey: currentSiteConnectedPersona?.identifier.rawPublicKey
        };
    }, [
        checkSiteConnectedToCurrentPersona,
        personas.map((x)=>x.identifier.toText()).join(',')
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/shared/openApplicationBoardDialog.tsx







function useOpenApplicationBoardDialog(quickMode, focusPluginID) {
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const allPersonas = (0,usePersonasFromDB/* usePersonasFromDB */.L)();
    const { value: applicationCurrentStatus, loading: personaPerSiteConnectStatusLoading } = usePersonaPerSiteConnectStatus();
    return (0,react.useCallback)(()=>modals/* ApplicationBoardModal */.G5.open({
            allPersonas,
            lastRecognized,
            openDashboard: service/* default */.ZP.Helper.openDashboard,
            currentSite: ui.activatedSiteAdaptorUI.networkIdentifier,
            queryOwnedPersonaInformation: service/* default */.ZP.Identity.queryOwnedPersonaInformation,
            setPluginMinimalModeEnabled: service/* default */.ZP.Settings.setPluginMinimalModeEnabled,
            personaPerSiteConnectStatusLoading,
            applicationCurrentStatus,
            quickMode,
            focusPluginID
        }), [
        allPersonas,
        lastRecognized,
        applicationCurrentStatus,
        personaPerSiteConnectStatusLoading,
        quickMode,
        focusPluginID
    ]);
}

;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/ToolboxUnstyled.tsx













const useStyles = (0,makeStyles/* makeStyles */.Z)()(()=>({
        title: {
            display: 'flex',
            alignItems: 'center'
        },
        chainIcon: {
            fontSize: 18,
            width: 18,
            height: 18
        }
    }));
function ToolboxHintUnstyled(props) {
    return props.category === 'wallet' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintForWallet, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintForApplication, {
        ...props
    });
}
function ToolboxHintForApplication(props) {
    const { ListItemButton = ListItemButton_ListItemButton/* default */.Z, ListItemIcon = ListItemIcon_ListItemIcon/* default */.Z, Container = 'div', Typography = Typography_Typography/* default */.Z, iconSize = 24, mini, ListItemText = ListItemText_ListItemText/* default */.Z } = props;
    const { classes } = useStyles();
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const openApplicationBoardDialog = useOpenApplicationBoardDialog();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
        step: 1,
        total: 4,
        tip: t.user_guide_tip_1(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton, {
                onClick: openApplicationBoardDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.MaskBlue, {
                            size: iconSize
                        })
                    }),
                    mini ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography, {
                                className: classes.title,
                                children: t.mask_network()
                            })
                        })
                    })
                ]
            })
        })
    });
}
function ToolboxHintForWallet(props) {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { ListItemButton = ListItemButton_ListItemButton/* default */.Z, ListItemText = ListItemText_ListItemText/* default */.Z, ListItemIcon = ListItemIcon_ListItemIcon/* default */.Z, Container = 'div', Typography = Typography_Typography/* default */.Z, iconSize = 24, badgeSize = 12, mini } = props;
    const { classes } = useStyles();
    const { onClickToolbox, title, chainColor, shouldDisplayChainIndicator, account, provider } = useToolbox();
    const theme = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
        step: 2,
        total: 4,
        tip: t.user_guide_tip_2(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton, {
                onClick: onClickToolbox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon, {
                        children: account && provider && provider.type !== types/* ProviderType */.lP.MaskWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                            size: iconSize,
                            badgeSize: badgeSize,
                            mainIcon: provider.icon,
                            badgeIconBorderColor: theme.palette.background.paper
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Wallet, {
                            size: iconSize
                        })
                    }),
                    mini ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText, {
                        primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography, {
                                    className: classes.title,
                                    children: title
                                }),
                                shouldDisplayChainIndicator ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FiberManualRecord, {
                                    className: classes.chainIcon,
                                    style: {
                                        color: chainColor
                                    }
                                }) : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}
function useToolbox() {
    const t = (0,i18n_generated/* useMaskSharedTrans */.b)();
    const { account } = (0,useContext/* useChainContext */.ql)();
    const chainColor = useChainColor();
    const chainIdValid = (0,useChainIdValid/* useChainIdValid */.a)();
    const chainIdMainnet = useChainIdMainnet();
    const provider = (0,useProviderDescriptor/* useProviderDescriptor */.f)();
    const Others = (0,useWeb3Others/* useWeb3Others */.v)();
    const pendingTransactions = (0,useRecentTransactions/* useRecentTransactions */.S)(undefined, specs.TransactionStatusType.NOT_DEPEND);
    const { data: domain } = (0,useReverseAddress/* useReverseAddress */.$)(undefined, account, true);
    function getToolboxTitle() {
        if (!account || !provider) return t.plugin_wallet_connect_wallet();
        if (pendingTransactions.length <= 0) return Others.formatDomainName?.(domain) || Others.formatAddress(account, 4) || account;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        marginRight: 12
                    },
                    children: t.plugin_wallet_pending_transactions({
                        count: pendingTransactions.length
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                    thickness: 6,
                    size: 20,
                    color: "inherit"
                })
            ]
        });
    }
    const onClickToolbox = (0,react.useCallback)(()=>{
        return account && provider ? modals/* WalletStatusModal */.L9.open() : modals/* SelectProviderModal */.ge.open();
    }, [
        account,
        provider
    ]);
    return {
        account,
        chainColor,
        provider,
        onClickToolbox,
        title: getToolboxTitle(),
        shouldDisplayChainIndicator: account && chainIdValid && !chainIdMainnet
    };
}


/***/ }),

/***/ 31559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78996);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78678);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60317);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8311);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54928);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37377);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84271);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38060);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23615);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4643);
/* harmony import */ var _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18126);
/* harmony import */ var _DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3715);
/* harmony import */ var _shared_ui_hooks_usePersonasFromDB_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4172);













const ICON_MAP = {
    minds: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.MaskInMinds, {
        size: 18
    }),
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__.SharpMask, {
        size: 17,
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .MaskColors */ .m.light.maskColor.publicTwitter
    })
};
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .Z)()({
    buttonText: {
        width: 38,
        height: 38,
        margin: '10px 0'
    }
});
function BannerUI(props) {
    const { classes } = useStyles(undefined, {
        props
    });
    return props.nextStep === 'hidden' ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        size: "large",
        className: classes.buttonText,
        onClick: props.nextStep.onClick,
        children: ICON_MAP?.[props?.iconType ?? 'default']
    });
}
function Banner(props) {
    const lastRecognizedIdentity = (0,_DataSource_useActivatedUI_js__WEBPACK_IMPORTED_MODULE_6__/* .useLastRecognizedIdentity */ .FB)();
    const allPersonas = (0,_shared_ui_hooks_usePersonasFromDB_js__WEBPACK_IMPORTED_MODULE_7__/* .usePersonasFromDB */ .L)();
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_8__/* .useValueRef */ .E)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .currentPersonaIdentifier */ .cn);
    const { value: personaConnectStatus } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_10__/* .useCurrentPersonaConnectStatus */ .H)(allPersonas, currentIdentifier, _services__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP.Helper.openDashboard, lastRecognizedIdentity);
    const { nextStep } = props;
    const networkIdentifier = _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_12__.activatedSiteAdaptorUI.networkIdentifier;
    const identities = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_8__/* .useValueRef */ .E)(_site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_12__/* .activatedSiteAdaptor_state */ .g.profiles);
    const [value, onChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const defaultNextStep = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (nextStep === 'hidden') return;
        if (!networkIdentifier) {
            nextStep?.onClick();
            nextStep ?? console.warn('You must provide one of networkIdentifier or nextStep.onClick');
            return;
        }
        _services__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP.Helper.openDashboard(personaConnectStatus.hasPersona ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .DashboardRoutes */ .vq.Personas : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_13__/* .DashboardRoutes */ .vq.SignUpPersona);
    }, [
        networkIdentifier,
        nextStep
    ]);
    const defaultUserName = networkIdentifier ? {
        defaultValue: lastRecognizedIdentity.identifier?.userId ?? '',
        value,
        onChange,
        isValid: _site_adaptor_infra_index_js__WEBPACK_IMPORTED_MODULE_12__.activatedSiteAdaptorUI.utils.isValidUsername || (()=>true)
    } : 'hidden';
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(()=>setMounted(true));
    return identities.length === 0 && mounted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerUI, {
        ...props,
        username: props.username ?? defaultUserName,
        nextStep: props.nextStep ?? {
            onClick: defaultNextStep
        }
    }) : null;
}


/***/ }),

/***/ 18747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./packages/plugin-infra/src/site-adaptor/PostContext.ts + 1 modules
var PostContext = __webpack_require__(90786);
// EXTERNAL MODULE: ./packages/mask/content-script/utils/shadow-root/renderInShadowRoot.tsx + 4 modules
var renderInShadowRoot = __webpack_require__(49138);
// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.0.2/node_modules/immer/dist/immer.mjs
var immer = __webpack_require__(35268);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/typed-message/base/src/core/text.ts
var core_text = __webpack_require__(86025);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/Flatten.ts
var Flatten = __webpack_require__(76714);
// EXTERNAL MODULE: ./packages/typed-message/base/src/transformer/context.ts
var context = __webpack_require__(94553);
// EXTERNAL MODULE: ./packages/typed-message/base/src/utils/index.ts
var utils = __webpack_require__(41840);
// EXTERNAL MODULE: ./packages/typed-message/base/src/extension/anchor.ts
var extension_anchor = __webpack_require__(43458);
// EXTERNAL MODULE: ./packages/typed-message/base/src/visitor/forEachChild.ts
var forEachChild = __webpack_require__(30688);
// EXTERNAL MODULE: ./packages/shared-base/src/Messages/index.ts
var Messages = __webpack_require__(65734);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/utils/TransformContext.ts
var TransformContext = __webpack_require__(30641);
// EXTERNAL MODULE: ./packages/typed-message/react/src/Renderer/Entry.tsx + 1 modules
var Entry = __webpack_require__(18458);
// EXTERNAL MODULE: ./packages/mask/shared-ui/TypedMessageRender/context.tsx + 10 modules
var TypedMessageRender_context = __webpack_require__(78432);
// EXTERNAL MODULE: ./packages/mask/content-script/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(3715);
// EXTERNAL MODULE: ./packages/mask/content-script/site-adaptor-infra/ui.ts
var ui = __webpack_require__(18126);
;// CONCATENATED MODULE: ./packages/mask/content-script/components/InjectedComponents/PostReplacer.tsx











const useStyles = (0,makeStyles/* makeStyles */.Z)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    const { classes } = useStyles();
    const [postMessage, setPostMessage] = (0,react.useState)(PostContext/* usePostInfoDetails */.H9.rawMessage());
    const iv = PostContext/* usePostInfoDetails */.H9.postIVIdentifier();
    (0,react.useEffect)(()=>{
        if (postMessage?.meta || !iv?.toText()) return;
        return Messages/* MaskMessages */.q.events.postReplacerHidden.on(()=>{
            setPostMessage((0,immer/* produce */.Uy)((draft)=>{
                return {
                    ...draft,
                    items: [
                        (0,core_text/* makeTypedMessageText */.P)('')
                    ]
                };
            }));
        });
    }, [
        postMessage?.meta,
        iv?.toText
    ]);
    const author = PostContext/* usePostInfoDetails */.H9.author();
    const currentProfile = (0,useActivatedUI/* useCurrentIdentity */.Ud)()?.identifier;
    const url = PostContext/* usePostInfoDetails */.H9.url();
    const initialTransformationContext = (0,react.useMemo)(()=>{
        return {
            authorHint: author || undefined,
            currentProfile,
            postURL: url?.href
        };
    }, [
        author,
        currentProfile,
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRender_context/* TypedMessageRenderContext */.w, {
            textResizer: ui.activatedSiteAdaptorUI.networkIdentifier !== 'twitter.com',
            renderFragments: ui.activatedSiteAdaptorUI?.customization.componentOverwrite?.RenderFragments,
            context: initialTransformationContext,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transformer, {
                ...props,
                message: postMessage
            })
        })
    });
}
function Transformer({ message, zip, unzip }) {
    const after = (0,TransformContext/* useTransformedValue */.CB)(message);
    const shouldReplace = (0,react.useMemo)(()=>{
        const flatten = (0,Flatten/* FlattenTypedMessage */.p)(message, context/* emptyTransformationContext */.v);
        if (!(0,utils/* isTypedMessageEqual */.Hz)(flatten, after)) return true;
        if (hasCashOrHashTag(after)) return true;
        if (shouldHiddenPostReplacer(message)) return true;
        return false;
    }, [
        message,
        after
    ]);
    (0,react.useEffect)(()=>{
        if (shouldReplace) zip?.();
        else unzip?.();
        return ()=>unzip?.();
    }, []);
    if (shouldReplace) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry/* TypedMessageRender */.O, {
        message: after
    });
    return null;
}
function hasCashOrHashTag(message) {
    let result = false;
    function visitor(node) {
        if ((0,extension_anchor/* isTypedMessageAnchor */.b)(node)) {
            if (node.category === 'cash' || node.category === 'hash') {
                result = true;
                return 'stop';
            }
        } else (0,forEachChild/* forEachTypedMessageChild */.s)(node, visitor);
    }
    visitor(message);
    (0,forEachChild/* forEachTypedMessageChild */.s)(message, visitor);
    return result;
}
function shouldHiddenPostReplacer(message) {
    return (0,core_text/* isTypedMessageText */.Rz)(message) && message.content === '';
}

;// CONCATENATED MODULE: ./packages/mask/content-script/site-adaptor-infra/defaults/inject/PostReplacer.tsx





function injectPostReplacer({ zipPost, unzipPost }) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault(props) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
            zip: props.zipPost,
            unzip: props.unZipPost
        });
    });
    return function injectPostReplacer(current, signal) {
        signal.addEventListener('abort', unzipPost);
        (0,renderInShadowRoot/* attachReactTreeWithContainer */.W5)(current.rootElement.afterShadow, {
            key: 'post-replacer',
            untilVisible: true,
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostContext/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacerDefault, {
                zipPost: ()=>zipPost(current.rootElement),
                unZipPost: ()=>unzipPost(current.rootElement),
                ...current
            })
        }));
    };
}


/***/ }),

/***/ 68102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ isMobileFacebook)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88228);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .isEnvironment */ .hE)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__/* .Environment */ .qA.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);


/***/ }),

/***/ 36435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ downloadUrl)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4643);

/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _services__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.Helper.fetchBlob(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}


/***/ }),

/***/ 11485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ selectElementContents)
/* harmony export */ });
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}


/***/ }),

/***/ 20179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useCompositionContext),
/* harmony export */   N: () => (/* binding */ CompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);

const CompositionContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    type: 'popup',
    getMetadata: ()=>undefined,
    attachMetadata () {},
    dropMetadata () {}
});
CompositionContext.displayName = 'CompositionContext';
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext);
 undefined;


/***/ }),

/***/ 44475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ usePersistSubscription)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39333);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);


/**
 * In favor of react-query's persist cache and cache management
 */ function usePersistSubscription(persistKey, subscription, predicate) {
    const [initialValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>subscription.getCurrentValue());
    const { data = initialValue, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            persistKey
        ],
        networkMode: 'always',
        queryFn: ()=>{
            const value = subscription.getCurrentValue();
            if (predicate && !predicate(value)) return undefined;
            return value;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        refetch();
        // Actively fetch, make persist data act as placeholder data
        return subscription.subscribe(refetch);
    }, [
        subscription,
        refetch
    ]);
    return data;
}


/***/ }),

/***/ 15019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $n: () => (/* binding */ EMPTY_ENTRY),
/* harmony export */   Dv: () => (/* binding */ FALSE),
/* harmony export */   LZ: () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   i_: () => (/* binding */ UNDEFINED),
/* harmony export */   v6: () => (/* binding */ EMPTY_STRING)
/* harmony export */ });
/* unused harmony exports ZERO, TRUE, NULL */
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52033);
/* harmony import */ var _helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28129);


const ZERO = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(0);
const UNDEFINED = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(undefined);
const EMPTY_STRING = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP);
const EMPTY_ENTRY = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)({});
const TRUE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(true);
const FALSE = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_helpers_subscription_js__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(null);


/***/ }),

/***/ 75369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ compose)
/* harmony export */ });
function compose(...args) {
    if (args.length === 0) throw new TypeError();
    const last = args.pop();
    return args.filter(Boolean).reduceRight((prev, fn)=>fn(prev), last);
}


/***/ }),

/***/ 41253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ PersonaAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67101);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23615);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78130);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7387);
/* harmony import */ var _CopyButton_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98662);
/* harmony import */ var _PlatformAvatar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70269);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()((theme)=>({
        bottomFixed: {
            width: '100%',
            minHeight: 36,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 16,
            boxShadow: theme.palette.shadow.popup
        },
        linkIcon: {
            marginRight: theme.spacing(1),
            color: theme.palette.maskColor.second,
            cursor: 'pointer'
        },
        personaKey: {
            fontSize: '12px',
            fontWeight: '400',
            color: theme.palette.maskColor.third
        }
    }));
function PersonaAction(props) {
    const { classes } = useStyles(undefined, {
        props
    });
    const { currentPersona, avatar, children } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.bottomFixed,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                display: "flex",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlatformAvatar_js__WEBPACK_IMPORTED_MODULE_3__/* .PlatformAvatar */ .c, {
                        networkIcon: avatar,
                        size: 36
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginLeft: '4px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                style: {
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    display: 'flex'
                                },
                                children: currentPersona?.nickname
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                sx: {
                                    display: 'flex'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: classes.personaKey,
                                        children: currentPersona?.identifier ? (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .formatPersonaFingerprint */ .Nb)(currentPersona.identifier.rawPublicKey, 4) : '--'
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CopyButton_index_js__WEBPACK_IMPORTED_MODULE_6__/* .CopyButton */ .q, {
                                        size: 16,
                                        text: currentPersona?.identifier.rawPublicKey ?? '',
                                        className: classes.linkIcon
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
}


/***/ }),

/***/ 70269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ PlatformAvatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./packages/theme/src/UIHelper/makeStyles.ts
var makeStyles = __webpack_require__(23615);
// EXTERNAL MODULE: ./packages/icons/icon-generated-as-jsx.js
var icon_generated_as_jsx = __webpack_require__(8311);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaAction/PersonaImageIcon.tsx


const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>{
    return {
        icon: {
            borderRadius: '50%'
        }
    };
});
function PersonaImageIcon(props) {
    const { size = 48, icon, borderRadius = '50%' } = props;
    const { classes } = useStyles(undefined, {
        props
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        className: classes.icon,
        style: {
            borderRadius
        }
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
;// CONCATENATED MODULE: ./packages/shared/src/UI/components/PersonaAction/PlatformAvatar.tsx





const PlatformAvatar_useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, props)=>({
        root: {
            position: 'relative',
            alignSelf: 'center',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        badgeIcon: {
            position: 'absolute',
            right: -2,
            bottom: -2
        }
    }));
const PlatformAvatar = /*#__PURE__*/ (0,react.memo)(function PlatformAvatar(props) {
    const { size = 24, badgeSize = 14, inverse = false, networkIcon, providerIcon } = props;
    const { classes, cx } = PlatformAvatar_useStyles({
        size: badgeSize > size ? badgeSize : size,
        isBorderColorNotDefault: props.isBorderColorNotDefault
    }, {
        props
    });
    // #region icon names
    const names = inverse ? [
        cx(classes.badgeIcon, classes.providerIcon),
        cx(classes.mainIcon, classes.networkIcon)
    ] : [
        cx(classes.mainIcon, classes.networkIcon),
        cx(classes.badgeIcon, classes.providerIcon)
    ];
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            networkIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaImageIcon, {
                classes: {
                    icon: names[0]
                },
                size: size,
                icon: networkIcon
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icon_generated_as_jsx.Masks, {
                size: size,
                sx: {
                    display: 'inline-block',
                    borderRadius: '50%'
                }
            }),
            providerIcon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaImageIcon, {
                classes: {
                    icon: names[1]
                },
                size: badgeSize,
                icon: providerIcon
            }) : null
        ]
    });
});


/***/ }),

/***/ 33845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   mC: () => (/* binding */ createRenderWithMetadata),
/* harmony export */   r1: () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, renderWithMetadataUntyped */
/* harmony import */ var ts_results_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76089);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42582);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35268);



const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key);
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (!meta.has(key)) return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.isErr()) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.error);
            return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err.EMPTY;
        }
    }
    return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Err)(validator.getLastErrors());
    return ts_results_es__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.isOk()) return render(message.value);
        return null;
    };
}
let immer_setup = false;
function editTypedMessageMeta(typedMessage, edit) {
    if (!immer_setup) {
        (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
        immer_setup = true;
    }
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .produce */ .Uy)(typedMessage, (e)=>{
        if (!e.meta) e.meta = new Map();
        edit(e.meta);
        if (e.meta.size === 0) e.meta = undefined;
    });
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.isOk()) return render(message.value);
    return null;
}


/***/ }),

/***/ 29752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83977);
/* harmony import */ var _useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81128);




function useAccount(pluginID, expectedAccount) {
    const Others = (0,_useWeb3Others_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Others */ .v)(pluginID);
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const defaultAccount = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.account ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return Others.formatAddress(expectedAccount ?? defaultAccount ?? '');
}


/***/ }),

/***/ 58807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useChainId)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15628);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15019);
/* harmony import */ var _useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83977);
/* harmony import */ var _useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4639);




function useChainId(pluginID, expectedChainId) {
    const { Provider } = (0,_useWeb3State_js__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    const defaultChainId = (0,_useDefaultChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .useDefaultChainId */ .b)(pluginID);
    const actualChainId = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Provider?.chainId ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .UNDEFINED */ .i_);
    return expectedChainId ?? actualChainId ?? defaultChainId;
}


/***/ }),

/***/ 14162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  on: () => (/* binding */ ChainContextProvider),
  V4: () => (/* binding */ DefaultWeb3ContextProvider),
  f6: () => (/* binding */ NetworkContextProvider),
  fw: () => (/* binding */ RevokeChainContextProvider),
  t2: () => (/* binding */ RootWeb3ContextProvider),
  vP: () => (/* binding */ Web3ContextProvider),
  ql: () => (/* binding */ useChainContext),
  Ux: () => (/* binding */ useEnvironmentContext),
  gK: () => (/* binding */ useNetworkContext)
});

// UNUSED EXPORTS: ReadonlyNetworkContextProvider, RevokeNetworkContextProvider

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omitBy.js + 1 modules
var omitBy = __webpack_require__(72802);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(81770);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/usePersistSubscription.ts
var usePersistSubscription = __webpack_require__(44475);
// EXTERNAL MODULE: ./packages/shared-base-ui/src/hooks/useValueRef.ts
var useValueRef = __webpack_require__(84271);
// EXTERNAL MODULE: ./packages/shared-base/src/Sniffings/index.ts
var Sniffings = __webpack_require__(66584);
// EXTERNAL MODULE: ./packages/shared-base/src/helpers/compose.ts
var compose = __webpack_require__(75369);
// EXTERNAL MODULE: ./packages/shared-base/src/types/PluginID.ts
var PluginID = __webpack_require__(24835);
// EXTERNAL MODULE: ./packages/shared-base/src/LegacySettings/settings.ts
var settings = __webpack_require__(5338);
// EXTERNAL MODULE: ./packages/shared-base/src/Site/index.ts
var Site = __webpack_require__(68422);
// EXTERNAL MODULE: ./packages/web3-providers/src/entry.ts
var entry = __webpack_require__(62322);
// EXTERNAL MODULE: ./packages/web3-shared/evm/src/types/index.ts
var types = __webpack_require__(24770);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useAccount.ts
var useAccount = __webpack_require__(29752);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useChainId.ts
var useChainId = __webpack_require__(58807);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-subscription@1.8.0_react@0.0.0-experimental-0a360642d-20230711/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(15628);
// EXTERNAL MODULE: ./packages/shared-base/src/Subscriptions/index.ts
var Subscriptions = __webpack_require__(15019);
// EXTERNAL MODULE: ./packages/web3-hooks/base/src/useWeb3State.ts
var useWeb3State = __webpack_require__(83977);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useProviderType.ts



function useProviderType(pluginID) {
    const { Provider } = (0,useWeb3State/* useWeb3State */.d)(pluginID);
    const defaultProviderType = (0,use_subscription.useSubscription)(Provider?.providerType ?? Subscriptions/* UNDEFINED */.i_);
    return defaultProviderType;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-use@17.4.0_react-dom@0.0.0-experimental-0a360642d-20230711_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(73161);
;// CONCATENATED MODULE: ./packages/web3-hooks/base/src/useContext.tsx











// If it's controlled, we prefer passed value over state inside
const ReadonlyNetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
ReadonlyNetworkContext.displayName = 'ReadonlyNetworkContext';
const NetworkContext = /*#__PURE__*/ (0,react.createContext)(null);
NetworkContext.displayName = 'NetworkContext';
const ChainContext = /*#__PURE__*/ (0,react.createContext)(null);
ChainContext.displayName = 'ChainContext';
/**
 * Provide the current readonly network plugin ID (readonly)
 * @param props
 * @returns
 */ function ReadonlyNetworkContextProvider({ value, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the current selected network plugin ID
 * @param props
 * @returns
 */ function NetworkContextProvider({ value, children }) {
    const [pluginID = value, setPluginID] = (0,react.useState)();
    const context = (0,react.useMemo)(()=>({
            pluginID,
            setPluginID
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContext.Provider, {
        value: context,
        children: children
    });
}
/**
 * Provide the current chain context
 * @param props
 * @returns
 */ const ChainContextProvider = /*#__PURE__*/ (0,react.memo)(function ChainContextProvider({ value, children }) {
    const { pluginID } = useNetworkContext();
    const { controlled } = value;
    const globalAccount = (0,useAccount/* useAccount */.m)(pluginID);
    const globalChainId = (0,useChainId/* useChainId */.x)(pluginID);
    const globalProviderType = useProviderType(pluginID);
    const maskProvider = entry/* Providers */.Cl[types/* ProviderType */.lP.MaskWallet];
    // The initial value of subscription.account could be empty string
    const maskAccount = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-account', maskProvider.subscription.account, (x)=>!!x);
    const maskChainId = (0,usePersistSubscription/* usePersistSubscription */.i)('@@mask-chain-id', maskProvider.subscription.chainId);
    const [_account, setAccount] = (0,react.useState)();
    const [_chainId, setChainId] = (0,react.useState)();
    const [_providerType, setProviderType] = (0,react.useState)();
    const location = (0,useLocation/* default */.Z)();
    const is_popup_wallet_page = Sniffings/* Sniffings */.Y.is_popup_page && location.hash?.includes('/wallet');
    const account = controlled ? value.account : _account ?? value.account ?? (is_popup_wallet_page ? maskAccount : globalAccount);
    const chainId = controlled ? value.chainId : _chainId ?? value.chainId ?? (is_popup_wallet_page ? maskChainId : globalChainId);
    const providerType = controlled ? value.providerType : _providerType ?? value.providerType ?? (is_popup_wallet_page ? types/* ProviderType */.lP.MaskWallet : globalProviderType);
    const context = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType,
            setAccount,
            setChainId,
            setProviderType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: context,
        children: children
    });
});
/**
 * Provide a context that contains both network and chain context
 * @param props
 * @returns
 */ function Web3ContextProvider({ value, children }) {
    const { pluginID, ...rest } = value;
    return (0,compose/* compose */.q)((children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkContextProvider, {
            value: pluginID,
            children: children
        }), (children)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContextProvider, {
            value: rest,
            children: children
        }), /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    }));
}
/**
 * Provide the top most network context
 * @param props
 * @returns
 */ function RevokeNetworkContextProvider({ children }) {
    const { pluginID } = useContext(ReadonlyNetworkContext);
    const value = useMemo(()=>({
            pluginID,
            setPluginID: ()=>{
                throw new Error('Set pluginID is not allowed.');
            }
        }), [
        pluginID
    ]);
    return /*#__PURE__*/ _jsx(NetworkContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * Provide the top most chain context
 * @param props
 * @returns
 */ function RevokeChainContextProvider({ children }) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.x)();
    const providerType = useProviderType();
    const value = (0,react.useMemo)(()=>({
            account,
            chainId,
            providerType
        }), [
        account,
        chainId,
        providerType
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainContext.Provider, {
        value: value,
        children: children
    });
}
/**
 * The default Web3 context provider that uses the EVM plugin
 * @param props
 * @returns
 */ function DefaultWeb3ContextProvider({ value, children }) {
    const contextValue = (0,react.useMemo)(()=>{
        return {
            pluginID: value?.pluginID ?? PluginID/* NetworkPluginID */.F.PLUGIN_EVM,
            ...value
        };
    }, [
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
        value: contextValue,
        children: children
    });
}
/**
 * The root Web3 context provider that uses the plugin ID from global settings
 * @param props
 * @returns
 */ function RootWeb3ContextProvider({ value, children }) {
    const pluginIDs = (0,useValueRef/* useValueRef */.E)(settings/* pluginIDsSettings */.Mo);
    const contextValue = (0,react.useMemo)(()=>{
        const site = (0,Site/* getSiteType */.sv)();
        return {
            pluginID: value?.pluginID ?? (site ? pluginIDs[site] : PluginID/* NetworkPluginID */.F.PLUGIN_EVM)
        };
    }, [
        pluginIDs,
        JSON.stringify(value)
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadonlyNetworkContextProvider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Web3ContextProvider, {
            value: contextValue,
            children: children
        })
    });
}
function useEnvironmentContext(overrides) {
    const context = (0,react.useContext)(ReadonlyNetworkContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}
function useNetworkContext(overrides) {
    const context = (0,react.useContext)(NetworkContext);
    return {
        ...context,
        pluginID: overrides ?? context.pluginID
    };
}
function useChainContext(overrides) {
    const context = (0,react.useContext)(ChainContext);
    return {
        ...context,
        ...(0,omitBy/* default */.Z)(overrides, isUndefined/* default */.Z)
    };
}


/***/ }),

/***/ 4639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useDefaultChainId)
/* harmony export */ });
/* unused harmony export getDefaultChainId */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24835);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24770);
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59190);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97834);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14162);





const DEFAULT_CHAIN_ID = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_EVM]: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_FLOW]: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_2__/* .ChainId */ .a_.Mainnet,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .NetworkPluginID */ .F.PLUGIN_SOLANA]: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_.Mainnet
};
function useDefaultChainId(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkContext */ .gK)(expectedPluginID);
    return DEFAULT_CHAIN_ID[pluginID];
}
function getDefaultChainId(pluginID) {
    return DEFAULT_CHAIN_ID[pluginID];
}


/***/ }),

/***/ 81128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ useWeb3Others)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);



function useWeb3Others(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_1__/* .OthersAll */ .Zy.use(pluginID), [
        pluginID
    ]);
}


/***/ }),

/***/ 83977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62322);
/* harmony import */ var _useContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);


function useWeb3State(expectedPluginID) {
    const { pluginID } = (0,_useContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkContext */ .gK)(expectedPluginID);
    return (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .getActivatedPluginWeb3State */ .TQ)(pluginID);
}


/***/ }),

/***/ 36447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49603);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done'));

/***/ }),

/***/ 37603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(34567);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(15320);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/capitalize.js
var capitalize = __webpack_require__(38832);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/utils/useId.js
var useId = __webpack_require__(48845);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(64696);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/styled.js
var styled = __webpack_require__(32024);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/styles/useThemeProps.js
var useThemeProps = __webpack_require__(15973);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/Button/Button.js
var Button = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.10.8_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.21_reac_i4im6kvy6ed7iuhqcafkffcuku/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(27027);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(83018);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.10.6_react@0.0.0-experimental-0a360642d-20230711/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(49603);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+lab@5.0.0-alpha.102_@emotion+react@11.11.1_@emotion+styled@11.11.0_@mui+material@5.10.8__fhlpvrxljs34dqlglckbh3kya4/node_modules/@mui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "id", "loading", "loadingIndicator", "loadingPosition", "variant"];












const useUtilityClasses = ownerState => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, ownerState.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginRight: -8
  }
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0,
    marginLeft: -8
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(ownerState.loadingPosition)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, ownerState.loadingPosition === 'start' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  left: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'start' && ownerState.variant === 'text' && {
  left: 6
}, ownerState.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: (theme.vars || theme).palette.action.disabled
}, ownerState.loadingPosition === 'end' && (ownerState.variant === 'outlined' || ownerState.variant === 'contained') && {
  right: ownerState.size === 'small' ? 10 : 14
}, ownerState.loadingPosition === 'end' && ownerState.variant === 'text' && {
  right: 6
}, ownerState.loadingPosition === 'start' && ownerState.fullWidth && {
  position: 'relative',
  left: -10
}, ownerState.loadingPosition === 'end' && ownerState.fullWidth && {
  position: 'relative',
  right: -10
}));
const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = 'center',
    variant = 'text'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const id = (0,useId/* default */.Z)(idProp);
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });

  const ownerState = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const loadingButtonLoadingIndicator = loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState: ownerState,
    children: loadingIndicator
  }) : null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    id: id,
    ref: ref
  }, other, {
    variant: variant,
    classes: classes,
    ownerState: ownerState,
    children: [ownerState.loadingPosition === 'end' ? children : loadingButtonLoadingIndicator, ownerState.loadingPosition === 'end' ? loadingButtonLoadingIndicator : children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

/***/ }),

/***/ 69427:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.copy = void 0;
const copy = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    if (sw <= 0 || sh <= 0)
        return;
    const sourceData = new Uint32Array(source.data.buffer);
    const destData = new Uint32Array(dest.data.buffer);
    for (let y = 0; y < sh; y++) {
        const sourceY = sy + y;
        if (sourceY < 0 || sourceY >= source.height)
            continue;
        const destY = dy + y;
        if (destY < 0 || destY >= dest.height)
            continue;
        for (let x = 0; x < sw; x++) {
            const sourceX = sx + x;
            if (sourceX < 0 || sourceX >= source.width)
                continue;
            const destX = dx + x;
            if (destX < 0 || destX >= dest.width)
                continue;
            const sourceIndex = sourceY * source.width + sourceX;
            const destIndex = destY * dest.width + destX;
            destData[destIndex] = sourceData[sourceIndex];
        }
    }
};
exports.copy = copy;


/***/ }),

/***/ 48746:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateImageFactory = (fill = [0, 0, 0, 0], channels = 4) => {
    channels = Math.floor(channels);
    if (isNaN(channels) || channels < 1) {
        throw TypeError('channels should be a positive non-zero number');
    }
    if (!('length' in fill) || fill.length < channels) {
        throw TypeError(`fill should be iterable with at least ${channels} members`);
    }
    fill = (new Uint8ClampedArray(fill)).slice(0, channels);
    const allZero = fill.every(v => v === 0);
    const createImage = (width, height, data) => {
        if (width === undefined || height === undefined) {
            throw TypeError('Not enough arguments');
        }
        width = Math.floor(width);
        height = Math.floor(height);
        if (isNaN(width) || width < 1 || isNaN(height) || height < 1) {
            throw TypeError('Index or size is negative or greater than the allowed amount');
        }
        const length = width * height * channels;
        if (data === undefined) {
            data = new Uint8ClampedArray(length);
        }
        if (data instanceof Uint8ClampedArray) {
            if (data.length !== length) {
                throw TypeError('Index or size is negative or greater than the allowed amount');
            }
            if (!allZero) {
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        const index = (y * width + x) * channels;
                        for (let c = 0; c < channels; c++) {
                            data[index + c] = fill[c];
                        }
                    }
                }
            }
            return {
                get width() { return width; },
                get height() { return height; },
                get data() { return data; }
            };
        }
        throw TypeError('Expected data to be Uint8ClampedArray or undefined');
    };
    return createImage;
};
exports.createImage = exports.CreateImageFactory();


/***/ }),

/***/ 99461:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convolve = void 0;
const fixedFracBits = 14;
const convolve = (source, dest, sw, sh, dw, filters) => {
    let srcOffset = 0;
    let destOffset = 0;
    // For each row
    for (let sourceY = 0; sourceY < sh; sourceY++) {
        let filterPtr = 0;
        // Apply precomputed filters to each destination row point
        for (let destX = 0; destX < dw; destX++) {
            // Get the filter that determines the current output pixel.
            const filterShift = filters[filterPtr++];
            let srcPtr = (srcOffset + (filterShift * 4)) | 0;
            let r = 0;
            let g = 0;
            let b = 0;
            let a = 0;
            // Apply the filter to the row to get the destination pixel r, g, b, a
            for (let filterSize = filters[filterPtr++]; filterSize > 0; filterSize--) {
                const filterValue = filters[filterPtr++];
                r = (r + filterValue * source[srcPtr]) | 0;
                g = (g + filterValue * source[srcPtr + 1]) | 0;
                b = (b + filterValue * source[srcPtr + 2]) | 0;
                a = (a + filterValue * source[srcPtr + 3]) | 0;
                srcPtr = (srcPtr + 4) | 0;
            }
            // Bring this value back in range. All of the filter scaling factors
            // are in fixed point with fixedFracBits bits of fractional part.
            //
            // (!) Add 1/2 of value before clamping to get proper rounding. In other
            // case brightness loss will be noticeable if you resize image with white
            // border and place it on white background.
            //
            dest[destOffset] = (r + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 1] = (g + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 2] = (b + (1 << 13)) >> fixedFracBits;
            dest[destOffset + 3] = (a + (1 << 13)) >> fixedFracBits;
            destOffset = (destOffset + sh * 4) | 0;
        }
        destOffset = ((sourceY + 1) * 4) | 0;
        srcOffset = ((sourceY + 1) * sw * 4) | 0;
    }
};
exports.convolve = convolve;
/*
  Adapted to typescript from pica: https://github.com/nodeca/pica

  (The MIT License)

  Copyright (C) 2014-2017 by Vitaly Puzrin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


/***/ }),

/***/ 93184:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filters = void 0;
const fixedFracBits = 14;
const filterValue = (x, a) => {
    if (x <= -a || x >= a)
        return 0;
    if (x == 0)
        return 0;
    // appears to do nothing?
    // if ( x > -1.19209290e-07 && x < 1.19209290e-07 ) return 1
    const xPi = x * Math.PI;
    return (Math.sin(xPi) / xPi) * Math.sin(xPi / a) / (xPi / a);
};
const toFixedPoint = (value) => Math.round(value * ((1 << fixedFracBits) - 1));
const filters = (srcSize, destSize, scale, offset, use2) => {
    const a = use2 ? 2 : 3;
    const scaleInverted = 1 / scale;
    const scaleClamped = Math.min(1, scale); // For upscale
    // Filter window (averaging interval), scaled to src image
    const srcWindow = a / scaleClamped;
    const maxFilterElementSize = Math.floor((srcWindow + 1) * 2);
    const packedFilter = new Int16Array((maxFilterElementSize + 2) * destSize);
    let packedFilterPtr = 0;
    // For each destination pixel calculate source range and built filter values
    for (let destPixel = 0; destPixel < destSize; destPixel++) {
        // Scaling should be done relative to central pixel point
        const sourcePixel = (destPixel + 0.5) * scaleInverted + offset;
        const sourceFirst = Math.max(0, Math.floor(sourcePixel - srcWindow));
        const sourceLast = Math.min(srcSize - 1, Math.ceil(sourcePixel + srcWindow));
        const filterElementSize = sourceLast - sourceFirst + 1;
        const floatFilter = new Float32Array(filterElementSize);
        const fxpFilter = new Int16Array(filterElementSize);
        let total = 0;
        // Fill filter values for calculated range
        let index = 0;
        for (let pixel = sourceFirst; pixel <= sourceLast; pixel++) {
            const floatValue = filterValue(((pixel + 0.5) - sourcePixel) * scaleClamped, a);
            total += floatValue;
            floatFilter[index] = floatValue;
            index++;
        }
        // Normalize filter, convert to fixed point and accumulate conversion error
        let filterTotal = 0;
        for (let index = 0; index < floatFilter.length; index++) {
            const filterValue = floatFilter[index] / total;
            filterTotal += filterValue;
            fxpFilter[index] = toFixedPoint(filterValue);
        }
        // Compensate normalization error, to minimize brightness drift
        fxpFilter[destSize >> 1] += toFixedPoint(1 - filterTotal);
        //
        // Now pack filter to useable form
        //
        // 1. Trim heading and tailing zero values, and compensate shitf/length
        // 2. Put all to single array in this format:
        //
        //    [ pos shift, data length, value1, value2, value3, ... ]
        //
        let leftNotEmpty = 0;
        while (leftNotEmpty < fxpFilter.length && fxpFilter[leftNotEmpty] === 0) {
            leftNotEmpty++;
        }
        let rightNotEmpty = fxpFilter.length - 1;
        while (rightNotEmpty > 0 && fxpFilter[rightNotEmpty] === 0) {
            rightNotEmpty--;
        }
        const filterShift = sourceFirst + leftNotEmpty;
        const filterSize = rightNotEmpty - leftNotEmpty + 1;
        packedFilter[packedFilterPtr++] = filterShift; // shift
        packedFilter[packedFilterPtr++] = filterSize; // size
        packedFilter.set(fxpFilter.subarray(leftNotEmpty, rightNotEmpty + 1), packedFilterPtr);
        packedFilterPtr += filterSize;
    }
    return packedFilter;
};
exports.filters = filters;
/*
  Adapted to typescript from pica: https://github.com/nodeca/pica

  (The MIT License)

  Copyright (C) 2014-2017 by Vitaly Puzrin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/


/***/ }),

/***/ 30804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = exports.m6 = void 0;
const copy_1 = __webpack_require__(69427);
const create_image_1 = __webpack_require__(48746);
const filters_1 = __webpack_require__(93184);
const convolve_1 = __webpack_require__(99461);
const resize = (source, dest, use2 = false) => {
    const xRatio = dest.width / source.width;
    const yRatio = dest.height / source.height;
    const filtersX = filters_1.filters(source.width, dest.width, xRatio, 0, use2);
    const filtersY = filters_1.filters(source.height, dest.height, yRatio, 0, use2);
    const tmp = new Uint8ClampedArray(dest.width * source.height * 4);
    convolve_1.convolve(source.data, tmp, source.width, source.height, dest.width, filtersX);
    convolve_1.convolve(tmp, dest.data, source.height, dest.width, dest.height, filtersY);
};
const lanczos = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0)
        return;
    if (sx === 0 && sy === 0 && sw === source.width && sh === source.height && dx === 0 && dy === 0 && dw === dest.width && dh === dest.height) {
        resize(source, dest);
        return;
    }
    /*
      this is more expensive than the way we do in other rgba-lib functions, but
      I don't understand the pica code that I based this on well enough to work
      out how to use regions without doing crops first
  
      however copy is pretty fast compared to lanczos, so the difference is slight
    */
    const croppedSource = create_image_1.createImage(sw, sh);
    const croppedDest = create_image_1.createImage(dw, dh);
    copy_1.copy(source, croppedSource, sx, sy);
    resize(croppedSource, croppedDest);
    copy_1.copy(croppedDest, dest, 0, 0, croppedDest.width, croppedDest.height, dx, dy);
};
exports.m6 = lanczos;
const lanczos2 = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    if (sw <= 0 || sh <= 0 || dw <= 0 || dh <= 0)
        return;
    if (sx === 0 && sy === 0 && sw === source.width && sh === source.height && dx === 0 && dy === 0 && dw === dest.width && dh === dest.height) {
        resize(source, dest, true);
        return;
    }
    /*
      this is more expensive than the way we do in other rgba-lib functions, but
      I don't understand the pica code that I based this on well enough to work
      out how to use regions without doing crops first
  
      however copy is pretty fast compared to lanczos, so the difference is slight
    */
    const croppedSource = create_image_1.createImage(sw, sh);
    const croppedDest = create_image_1.createImage(dw, dh);
    copy_1.copy(source, croppedSource, sx, sy);
    resize(croppedSource, croppedDest, true);
    copy_1.copy(croppedDest, dest, 0, 0, croppedDest.width, croppedDest.height, dx, dy);
};
__webpack_unused_export__ = lanczos2;


/***/ }),

/***/ 41425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=__webpack_require__(9578);exports.useSubscription=function(a){return b.useSyncExternalStore(a.subscribe,a.getCurrentValue)};


/***/ }),

/***/ 15628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(41425);
} else {}


/***/ }),

/***/ 37700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(78996);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 9578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(37700);
} else {}


/***/ }),

/***/ 40923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/70c03ec1bb4575d55722.png";

/***/ }),

/***/ 5401:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2c6ce7a0cab86d8d0cbc.png";

/***/ }),

/***/ 6090:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/565d6dfe752e413212c5.png";

/***/ }),

/***/ 65295:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NL: () => (/* binding */ useQueryClient),
/* harmony export */   aH: () => (/* binding */ QueryClientProvider)
/* harmony export */ });
/* unused harmony export defaultContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


const defaultContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const QueryClientSharingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false); // If we are given a context, we will use it.
// Otherwise, if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }

  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

const useQueryClient = ({
  context
} = {}) => {
  const queryClient = react__WEBPACK_IMPORTED_MODULE_0__.useContext(getQueryClientContext(context, react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};
const QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);

  if (false) {}

  const Context = getQueryClientContext(context, contextSharing);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
    value: client
  }, children));
};


//# sourceMappingURL=QueryClientProvider.mjs.map


/***/ }),

/***/ 22487:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useQueryErrorResetBoundary)
/* harmony export */ });
/* unused harmony export QueryErrorResetBoundary */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
'use client';


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}

const QueryErrorResetBoundaryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(createValue()); // HOOK

const useQueryErrorResetBoundary = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryErrorResetBoundaryContext); // COMPONENT

const QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = React.useState(() => createValue());
  return /*#__PURE__*/React.createElement(QueryErrorResetBoundaryContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
};


//# sourceMappingURL=QueryErrorResetBoundary.mjs.map


/***/ }),

/***/ 13110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JN: () => (/* binding */ useClearResetErrorBoundary),
/* harmony export */   KJ: () => (/* binding */ getHasError),
/* harmony export */   pf: () => (/* binding */ ensurePreventErrorBoundaryRetry)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9599);
'use client';



const ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
const useClearResetErrorBoundary = errorResetBoundary => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
const getHasError = ({
  result,
  errorResetBoundary,
  useErrorBoundary,
  query
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__/* .shouldThrowError */ .L)(useErrorBoundary, [result.error, query]);
};


//# sourceMappingURL=errorBoundaryUtils.mjs.map


/***/ }),

/***/ 29143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fb: () => (/* binding */ ensureStaleTime),
/* harmony export */   SB: () => (/* binding */ shouldSuspend),
/* harmony export */   Z$: () => (/* binding */ willFetch),
/* harmony export */   j8: () => (/* binding */ fetchOptimistic)
/* harmony export */ });
const ensureStaleTime = defaultedOptions => {
  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    }
  }
};
const willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
const shouldSuspend = (defaultedOptions, result, isRestoring) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && willFetch(result, isRestoring);
const fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).then(({
  data
}) => {
  defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
}).catch(error => {
  errorResetBoundary.clearReset();
  defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
  defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
});


//# sourceMappingURL=suspense.mjs.map


/***/ }),

/***/ 84233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ useBaseQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78996);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29641);
/* harmony import */ var _useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41026);
/* harmony import */ var _QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65295);
/* harmony import */ var _isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87167);
/* harmony import */ var _errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13110);
/* harmony import */ var _suspense_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29143);
'use client';









function useBaseQuery(options, Observer) {
  const queryClient = (0,_QueryClientProvider_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useQueryClient */ .NL)({
    context: options.context
  });
  const isRestoring = (0,_isRestoring_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useIsRestoring */ .S)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useQueryErrorResetBoundary */ ._)();
  const defaultedOptions = queryClient.defaultQueryOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions._optimisticResults = isRestoring ? 'isRestoring' : 'optimistic'; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(defaultedOptions.onSettled);
  }

  (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .ensureStaleTime */ .Fb)(defaultedOptions);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .ensurePreventErrorBoundaryRetry */ .pf)(defaultedOptions, errorResetBoundary);
  (0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useClearResetErrorBoundary */ .JN)(errorResetBoundary);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => new Observer(queryClient, defaultedOptions));
  const result = observer.getOptimisticResult(defaultedOptions);
  (0,_useSyncExternalStore_mjs__WEBPACK_IMPORTED_MODULE_7__/* .useSyncExternalStore */ .$)(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(onStoreChange => {
    const unsubscribe = isRestoring ? () => undefined : observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__/* .notifyManager */ .V.batchCalls(onStoreChange)); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return unsubscribe;
  }, [observer, isRestoring]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if ((0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .shouldSuspend */ .SB)(defaultedOptions, result, isRestoring)) {
    throw (0,_suspense_mjs__WEBPACK_IMPORTED_MODULE_5__/* .fetchOptimistic */ .j8)(defaultedOptions, observer, errorResetBoundary);
  } // Handle error boundary


  if ((0,_errorBoundaryUtils_mjs__WEBPACK_IMPORTED_MODULE_6__/* .getHasError */ .KJ)({
    result,
    errorResetBoundary,
    useErrorBoundary: defaultedOptions.useErrorBoundary,
    query: observer.getCurrentQuery()
  })) {
    throw result.error;
  } // Handle result property usage tracking


  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}


//# sourceMappingURL=useBaseQuery.mjs.map


/***/ }),

/***/ 39333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14047);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28281);
/* harmony import */ var _useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84233);
'use client';



function useQuery(arg1, arg2, arg3) {
  const parsedOptions = (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_0__/* .parseQueryArgs */ ._v)(arg1, arg2, arg3);
  return (0,_useBaseQuery_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useBaseQuery */ .r)(parsedOptions, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__/* .QueryObserver */ .z);
}


//# sourceMappingURL=useQuery.mjs.map


/***/ }),

/***/ 41026:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useSyncExternalStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9578);
'use client';


const useSyncExternalStore = use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore;


//# sourceMappingURL=useSyncExternalStore.mjs.map


/***/ }),

/***/ 9599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ shouldThrowError)
/* harmony export */ });
function shouldThrowError(_useErrorBoundary, params) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary(...params);
  }

  return !!_useErrorBoundary;
}


//# sourceMappingURL=utils.mjs.map


/***/ })

}]);
//# sourceMappingURL=chunk.6439.js.map