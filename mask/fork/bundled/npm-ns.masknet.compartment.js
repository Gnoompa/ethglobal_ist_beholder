"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[4396],{

/***/ 66816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Df: () => (/* binding */ makeGlobalThis),
/* harmony export */   K$: () => (/* binding */ Evaluators),
/* harmony export */   o0: () => (/* binding */ imports)
/* harmony export */ });
/* unused harmony exports Module, ModuleSource */
class ModuleSource {
    #code;
    get bindings() {
        this.#code;
        return [];
    }
    constructor(source){
        throw new EvalError(`Refused to evaluate a string as JavaScript.`);
    }
}
Reflect.defineProperty(ModuleSource.prototype, Symbol.toStringTag, {
    configurable: true,
    value: 'ModuleSource'
});

/** @internal */ const empty = /*#__PURE__*/ Symbol('empty');
/** @internal */ const namespace = /*#__PURE__*/ Symbol('namespace');
/** @internal */ const ambiguous = /*#__PURE__*/ Symbol('ambiguous');
/** @internal */ const all = /*#__PURE__*/ Symbol('all');
/** @internal */ const allButDefault = /*#__PURE__*/ Symbol('all-but-default');
/** @internal */ function PromiseCapability() {
    let ok, err;
    const promise = new Promise((a, b)=>{
        ok = (val)=>{
            capability.Status = {
                Type: 'Fulfilled',
                Value: val
            };
            a(val);
        };
        err = (error)=>{
            capability.Status = {
                Type: 'Rejected',
                Reason: error
            };
            b(error);
        };
    });
    const capability = {
        Promise: promise,
        Resolve: ok,
        Reject: err,
        Status: {
            Type: 'Pending',
            Promise: promise
        }
    };
    return capability;
}
/** @internal */ function NormalCompletion(value) {
    return {
        Type: 'normal',
        Value: value
    };
}
/** @internal */ function ThrowCompletion(error) {
    return {
        Type: 'throw',
        Value: error
    };
}

function getOpaqueProxy() {
    const x = Proxy.revocable({}, {});
    x.revoke();
    return x.proxy;
}
/** @internal */ const opaqueProxy = /*#__PURE__*/ getOpaqueProxy();
/** @internal */ function assertFailed(message) {
    throw new TypeError('Assertion failed.' + (message ? ' ' : '') + message);
}
/** @internal */ function unreachable(val) {
    throw new TypeError('Unreachable');
}

/** @internal */ function isImportBinding(binding) {
    return 'import' in binding;
}
/** @internal */ function isExportBinding(binding) {
    return 'export' in binding;
}
/** @internal */ function isImportAllBinding(binding) {
    return 'importAllFrom' in binding;
}
/** @internal */ function isExportAllBinding(binding) {
    return 'exportAllFrom' in binding;
}
/** @internal */ function hasFromField(binding) {
    return 'from' in binding && typeof binding.from === 'string';
}

/** @internal */ function normalizeVirtualModuleRecord(module) {
    const { execute , bindings , needsImport , needsImportMeta , isAsync  } = module;
    if (execute !== undefined && execute !== null && typeof execute !== 'function') {
        throw new TypeError('VirtualModuleRecord.execute must be a function');
    }
    return {
        execute,
        needsImportMeta: Boolean(needsImportMeta),
        needsImport: Boolean(needsImport),
        isAsync: Boolean(isAsync),
        bindings: normalizeBindings(bindings)
    };
}
/** @internal */ function normalizeBindings(binding) {
    if (!binding) return [];
    if (!Array.isArray(binding)) throw new TypeError('bindings must be an array.');
    const result = [];
    for (const item of binding){
        if ('importAllFrom' in item) {
            if (!('as' in item)) throw new TypeError('ImportAllBinding must have an "as" field.');
            if ('exportAllFrom' in item || 'import' in item || 'export' in item || 'from' in item) throw new TypeError('ImportAllBinding cannot have "exportAllFrom", "import", "export", or "from" fields.');
            result.push({
                importAllFrom: normalizeString(item.importAllFrom),
                as: normalizeString(item.as)
            });
        } else if ('exportAllFrom' in item) {
            if ('importAllFrom' in item || 'import' in item || 'export' in item || 'from' in item) throw new TypeError('ExportAllBinding cannot have "importAllFrom", "import", "export", or "from" fields.');
            result.push({
                exportAllFrom: normalizeString(item.exportAllFrom),
                as: normalizeStringOrUndefined(item.as)
            });
        } else if ('import' in item) {
            if (!('from' in item)) throw new TypeError('ImportBinding must have a "from" field.');
            if ('exportAllFrom' in item || 'importAllFrom' in item || 'export' in item) throw new TypeError('ImportBinding cannot have "exportAllFrom", "importAllFrom", or "export" fields.');
            result.push({
                import: normalizeString(item.import),
                from: normalizeString(item.from),
                as: normalizeStringOrUndefined(item.as)
            });
        } else if ('export' in item) {
            if ('exportAllFrom' in item || 'importAllFrom' in item || 'import' in item) throw new TypeError('ExportBinding cannot have "exportAllFrom", "importAllFrom", or "import" fields.');
            result.push({
                export: normalizeString(item.export),
                from: normalizeStringOrUndefined(item.from),
                as: normalizeStringOrUndefined(item.as)
            });
        } else {
            throw new TypeError('binding must be one of ImportBinding, ExportBinding, ImportAllBinding or ExportAllBinding.');
        }
    }
    Object.freeze(result);
    const LexicallyDeclaredNames = new Set();
    const ExportedNames = new Set();
    for (const item1 of result){
        if (isImportBinding(item1) || isImportAllBinding(item1)) {
            const bind = item1.as || item1.import;
            if (LexicallyDeclaredNames.has(bind)) throw new TypeError(`Duplicate lexical binding for "${bind}"`);
            LexicallyDeclaredNames.add(bind);
        } else if (isExportBinding(item1)) {
            const bind1 = item1.as || item1.export;
            if (ExportedNames.has(bind1)) throw new TypeError(`Duplicate export binding for "${bind1}"`);
            ExportedNames.add(bind1);
        } else ;
    }
    return result;
}
/** @internal */ function normalizeBindingsToSpecRecord(bindings) {
    // bindings = normalizeBindings(bindings) || []
    bindings ??= [];
    const requestedModules = [];
    for (const binding of bindings){
        if (isImportBinding(binding)) requestedModules.push(binding.from);
        else if (isImportAllBinding(binding)) requestedModules.push(binding.importAllFrom);
        else if (isExportBinding(binding)) {
            if (hasFromField(binding)) requestedModules.push(binding.from);
        } else if (isExportAllBinding(binding)) requestedModules.push(binding.exportAllFrom);
        else unreachable();
    }
    const importEntries = [];
    for (const binding1 of bindings){
        if (isImportBinding(binding1)) {
            importEntries.push({
                ImportName: binding1.import,
                LocalName: binding1.as ?? binding1.import,
                ModuleRequest: binding1.from
            });
        } else if (isImportAllBinding(binding1)) {
            importEntries.push({
                ImportName: namespace,
                LocalName: binding1.as,
                ModuleRequest: binding1.importAllFrom
            });
        }
    }
    const indirectExportEntries = [];
    const localExportEntries = [];
    const starExportEntries = [];
    for (const binding2 of bindings){
        // step 10.a: if ee.ModuleRequest is null, then append ee to localExportEntries
        // export { ... }
        if (isExportBinding(binding2) && !hasFromField(binding2)) {
            localExportEntries.push({
                ExportName: binding2.as ?? binding2.export,
                ImportName: null,
                ModuleRequest: null
            });
        } else if (isExportAllBinding(binding2) && binding2.as === undefined) {
            starExportEntries.push({
                // LocalName: null,
                ExportName: null,
                ImportName: allButDefault,
                ModuleRequest: binding2.exportAllFrom
            });
        } else {
            if (isExportAllBinding(binding2)) {
                if (!(binding2.as !== undefined)) assertFailed();
                indirectExportEntries.push({
                    ExportName: binding2.as,
                    ImportName: all,
                    ModuleRequest: binding2.exportAllFrom
                });
            } else if (isExportBinding(binding2)) {
                indirectExportEntries.push({
                    ExportName: binding2.as ?? binding2.export,
                    ImportName: binding2.export,
                    ModuleRequest: binding2.from
                });
            }
        }
    }
    return {
        requestedModules: [
            ...new Set(requestedModules)
        ],
        importEntries,
        indirectExportEntries,
        localExportEntries,
        starExportEntries
    };
}
function normalizeString(x) {
    return `${x}`;
}
function normalizeStringOrUndefined(x) {
    return x === undefined ? undefined : `${x}`;
}

let asyncTaskPolyfill;
function getAsyncTaskAPI() {
    if (typeof console === 'object' && typeof console.createTask === 'function') return console.createTask;
    return (_name)=>asyncTaskPolyfill ||= {
            run: Function.prototype.call.bind(Function.call)
        };
}
/**
 * @internal
 * @see https://developer.chrome.com/docs/devtools/console/api/#createtask
 */ const createTask = /*#__PURE__*/ getAsyncTaskAPI();

let imports;
/** @internal */ let setParentGlobalThis;
/** @internal */ let setParentImportHook;
/** @internal */ let setParentImportMetaHook;
class Module {
    // The constructor is equivalent to ParseModule in SourceTextModuleRecord
    // https://tc39.es/ecma262/#sec-parsemodule
    constructor(moduleSource, handler){
        if (typeof moduleSource !== 'object') throw new TypeError('moduleSource must be an object');
        // impossible to create a ModuleSource instance
        if (moduleSource instanceof ModuleSource) assertFailed('ModuleSource instance cannot be created');
        const module = normalizeVirtualModuleRecord(moduleSource);
        if (handler === null) throw new TypeError('handler must not be null');
        let importHook;
        let importMetaHook;
        if (typeof handler === 'object') {
            importHook = handler.importHook;
            if (typeof importHook !== 'function' && importHook !== undefined) throw new TypeError('importHook must be a function');
            importMetaHook = handler.importMetaHook;
            if (typeof importMetaHook !== 'function' && importMetaHook !== undefined) throw new TypeError('importMetaHook must be a function');
        }
        this.#VirtualModuleSource = moduleSource;
        this.#Execute = module.execute;
        this.#NeedsImport = module.needsImport;
        this.#NeedsImportMeta = module.needsImportMeta;
        this.#HasTLA = !!module.isAsync;
        this.#ImportHook = importHook;
        this.#ImportMetaHook = importMetaHook;
        this.#HandlerValue = handler;
        const { importEntries , indirectExportEntries , localExportEntries , requestedModules , starExportEntries  } = normalizeBindingsToSpecRecord(module.bindings);
        this.#ImportEntries = importEntries;
        this.#IndirectExportEntries = indirectExportEntries;
        this.#LocalExportEntries = localExportEntries;
        this.#RequestedModules = requestedModules;
        this.#StarExportEntries = starExportEntries;
    }
    get source() {
        return this.#VirtualModuleSource;
    }
    //#region ModuleRecord fields https://tc39.es/ecma262/#table-module-record-fields
    /** first argument of execute() */ #Environment;
    /** result of await import(mod) */ #Namespace;
    //#endregion
    //#region VirtualModuleRecord fields
    // *this value* when calling #Execute.
    #VirtualModuleSource;
    #Execute;
    #NeedsImportMeta;
    #NeedsImport;
    #ContextObject;
    #ImportHook;
    #ImportMetaHook;
    #HandlerValue;
    /** the global environment this module binds to */ #GlobalThis = globalThis;
    #ParentImportHook = defaultImportHook;
    #ParentImportMetaHook;
    /** imported module cache */ #ImportEntries;
    #LocalExportEntries;
    #IndirectExportEntries;
    #StarExportEntries;
    /** Where local export stored */ #LocalExportedValues = new Map();
    /** Callback to update live exports */ #non_std_ExportCallback = new Map();
    //#endregion
    //#region VirtualModuleRecord methods
    #non_std_AddLiveExportCallback(name, callback) {
        if (!this.#non_std_ExportCallback.has(name)) this.#non_std_ExportCallback.set(name, new Set());
        this.#non_std_ExportCallback.get(name).add(callback);
    }
    //#endregion
    //#region ModuleRecord methods https://tc39.es/ecma262/#table-abstract-methods-of-module-records
    // https://tc39.es/ecma262/#sec-getexportednames
    #GetExportedNames(exportStarSet = []) {
        const module = this;
        if (!(module.#Status !== 0)) assertFailed();
        if (exportStarSet.includes(module)) return [];
        exportStarSet.push(module);
        const exportedNames = [];
        for (const e of module.#LocalExportEntries){
            if (!(e.ExportName !== null)) assertFailed();
            exportedNames.push(e.ExportName);
        }
        for (const e1 of module.#IndirectExportEntries){
            if (!(e1.ExportName !== null)) assertFailed();
            exportedNames.push(e1.ExportName);
        }
        for (const e2 of module.#StarExportEntries){
            if (!(e2.ModuleRequest !== null)) assertFailed();
            const requestedModule = Module.#GetImportedModule(module, e2.ModuleRequest);
            const starNames = requestedModule.#GetExportedNames(exportStarSet);
            for (const n of starNames){
                if (n === 'default') continue;
                if (exportedNames.includes(n)) continue;
                exportedNames.push(n);
            }
        }
        return exportedNames;
    }
    // https://tc39.es/ecma262/#sec-resolveexport
    #ResolveExport(exportName, resolveSet = []) {
        const module1 = this;
        if (!(module1.#Status !== 0)) assertFailed();
        for (const r of resolveSet){
            if (module1 === r.module && exportName === r.exportName) {
                // Assert: This is a circular import request.
                return null;
            }
        }
        resolveSet.push({
            module: module1,
            exportName
        });
        for (const e3 of module1.#LocalExportEntries){
            if (exportName === e3.ExportName) {
                // if (!(e.LocalName !== null)) assertFailed()
                // return { module, bindingName: e.LocalName }
                return {
                    module: module1,
                    bindingName: e3.ExportName
                };
            }
        }
        for (const e4 of module1.#IndirectExportEntries){
            if (exportName === e4.ExportName) {
                if (!(e4.ModuleRequest !== null)) assertFailed();
                const importedModule = Module.#GetImportedModule(module1, e4.ModuleRequest);
                if (e4.ImportName === all) {
                    // Assert: module does not provide the direct binding for this export.
                    return {
                        module: importedModule,
                        bindingName: namespace
                    };
                } else {
                    if (!(typeof e4.ImportName === 'string')) assertFailed();
                    return importedModule.#ResolveExport(e4.ImportName, resolveSet);
                }
            }
        }
        if (exportName === 'default') {
            // Assert: A default export was not explicitly provided by this module.
            // Note: A default export cannot be provided by an export * from "mod" declaration.
            return null;
        }
        let starResolution = null;
        for (const e5 of module1.#StarExportEntries){
            if (!(e5.ModuleRequest !== null)) assertFailed();
            const importedModule1 = Module.#GetImportedModule(module1, e5.ModuleRequest);
            let resolution = importedModule1.#ResolveExport(exportName, resolveSet);
            if (resolution === ambiguous) return ambiguous;
            if (resolution !== null) {
                if (starResolution === null) starResolution = resolution;
                else {
                    // Assert: There is more than one * import that includes the requested name.
                    if (resolution.module !== starResolution.module) return ambiguous;
                    if (resolution.bindingName === namespace && starResolution.bindingName !== namespace || resolution.bindingName !== namespace && starResolution.bindingName === namespace) return ambiguous;
                    if (typeof resolution.bindingName === 'string' && typeof starResolution.bindingName === 'string' && resolution.bindingName !== starResolution.bindingName) {
                        return ambiguous;
                    }
                }
            }
        }
        return starResolution;
    }
    #LoadRequestedModules(HostDefined) {
        const module2 = this;
        const pc = PromiseCapability();
        const state = {
            IsLoading: true,
            PendingModulesCount: 1,
            Visited: [],
            PromiseCapability: pc,
            HostDefined
        };
        Module.#InnerModuleLoading(state, module2);
        return pc.Promise;
    }
    static #InnerModuleLoading(state1, module3) {
        if (!state1.IsLoading) assertFailed();
        if (module3.#Status === 0 && !state1.Visited.includes(module3)) {
            state1.Visited.push(module3);
            const requestedModulesCount = module3.#RequestedModules.length;
            state1.PendingModulesCount = state1.PendingModulesCount + requestedModulesCount;
            for (const required of module3.#RequestedModules){
                const record = module3.#LoadedModules.get(required);
                if (record) {
                    Module.#InnerModuleLoading(state1, record);
                } else {
                    Module.#LoadImportedModule(module3, required, state1.HostDefined, state1);
                }
                if (!state1.IsLoading) return;
            }
        }
        if (!(state1.PendingModulesCount >= 1)) assertFailed();
        state1.PendingModulesCount = state1.PendingModulesCount - 1;
        if (state1.PendingModulesCount === 0) {
            state1.IsLoading = false;
            for (const loaded of state1.Visited){
                if (loaded.#Status === 0) loaded.#Status = 1;
            }
            state1.PromiseCapability.Resolve();
        }
    }
    static #ContinueModuleLoading(state2, moduleCompletion) {
        if (!state2.IsLoading) return;
        if (moduleCompletion.Type === 'normal') Module.#InnerModuleLoading(state2, moduleCompletion.Value);
        else {
            state2.IsLoading = false;
            state2.PromiseCapability.Reject(moduleCompletion.Value);
        }
    }
    //#endregion
    //#region CyclicModuleRecord fields https://tc39.es/ecma262/#sec-cyclic-module-records
    #Status = 0;
    #EvaluationError = empty;
    #DFSIndex = empty;
    #DFSAncestorIndex = empty;
    #RequestedModules;
    #LoadedModules = new Map();
    #LoadingModules = new Map();
    #LoadStates = new Set();
    #CycleRoot;
    #HasTLA;
    #AsyncEvaluation = false;
    #__AsyncEvaluationPreviouslyTrue = false;
    #TopLevelCapability;
    #AsyncParentModules = [];
    #PendingAsyncDependencies = empty;
    //#endregion
    //#region CyclicModuleRecord methods https://tc39.es/ecma262/#table-cyclic-module-methods
    // https://tc39.es/ecma262/#sec-source-text-module-record-initialize-environment
    #InitializeEnvironment() {
        const module4 = this;
        for (const e6 of module4.#IndirectExportEntries){
            if (!(e6.ExportName !== null)) assertFailed();
            const resolution1 = module4.#ResolveExport(e6.ExportName);
            if (resolution1 === null || resolution1 === ambiguous) {
                throw new SyntaxError(`Module '${e6.ModuleRequest}' does not provide an export ${e6.ExportName}`);
            }
        }
        // Assert: All named exports from module are resolvable.
        const env = {
            __proto__: null
        };
        module4.#ContextObject = createContextObject();
        module4.#Environment = env;
        const propertiesToBeDefined = {
            __proto__: null
        };
        for (const i of module4.#ImportEntries){
            const importedModule2 = Module.#GetImportedModule(module4, i.ModuleRequest);
            // import * as ns from '..'
            if (i.ImportName === namespace) {
                const namespaceObject = Module.#GetModuleNamespace(importedModule2);
                propertiesToBeDefined[i.LocalName] = {
                    value: namespaceObject,
                    enumerable: true
                };
            } else {
                const resolution2 = importedModule2.#ResolveExport(i.ImportName);
                if (resolution2 === null) throw new SyntaxError(`${i.ModuleRequest} does not provide export ${i.ImportName}`);
                if (resolution2 === ambiguous) throw new SyntaxError(`${i.ModuleRequest} does not provide an unambiguous export ${i.ImportName}`);
                // import { x } from '...' where x is a "export * as ns from '...'"
                if (resolution2.bindingName === namespace) {
                    const namespaceObject1 = Module.#GetModuleNamespace(resolution2.module);
                    propertiesToBeDefined[i.LocalName] = {
                        value: namespaceObject1,
                        enumerable: true
                    };
                } else {
                    resolution2.module.#non_std_AddLiveExportCallback(i.ImportName, (newValue)=>{
                        Object.defineProperty(env, i.LocalName, {
                            value: newValue,
                            configurable: true,
                            enumerable: true
                        });
                    });
                    if (resolution2.module.#LocalExportedValues.has(resolution2.bindingName)) {
                        propertiesToBeDefined[i.LocalName] = {
                            configurable: true,
                            enumerable: true,
                            value: resolution2.module.#LocalExportedValues.get(resolution2.bindingName)
                        };
                    } else {
                        propertiesToBeDefined[i.LocalName] = {
                            get () {
                                throw new ReferenceError(`Cannot access '${i.LocalName}' before initialization`);
                            },
                            configurable: true,
                            enumerable: true
                        };
                    }
                }
            }
        }
        for (const { ModuleRequest , ExportName , ImportName  } of module4.#LocalExportEntries){
            if (!(ModuleRequest === null && typeof ExportName === 'string' && ImportName === null)) assertFailed();
            propertiesToBeDefined[ExportName] = {
                get: ()=>this.#LocalExportedValues.get(ExportName),
                set: (value)=>{
                    this.#LocalExportedValues.set(ExportName, value);
                    this.#non_std_ExportCallback.get(ExportName)?.forEach((callback)=>callback(value));
                    return true;
                },
                // Note: export property should not be enumerable?
                // but it will crash Chrome devtools. See: https://bugs.chromium.org/p/chromium/issues/detail?id=1358114
                enumerable: true
            };
        }
        Object.defineProperties(env, propertiesToBeDefined);
        for (const exports of module4.#GetExportedNames()){
            if (module4.#ResolveExport(exports) === ambiguous) {
                throw new SyntaxError(`Module has multiple exports named '${exports}'`);
            }
        }
        // TODO: https://github.com/tc39/proposal-compartments/issues/70
        // prevent access to global env until [[ExecuteModule]]
        Object.setPrototypeOf(env, opaqueProxy);
    }
    /** All call to ExecuteModule must use Task.run to keep the call stack continue */ #ExecuteModule(promise) {
        const execute = this.#Execute;
        if (!execute) return;
        this.#Execute = undefined;
        // prepare context
        this.#ContextObject.globalThis = this.#GlobalThis;
        if (this.#NeedsImportMeta) {
            const importMeta = {
                __proto__: null
            };
            if (this.#ImportMetaHook) Reflect.apply(this.#ImportMetaHook, this.#HandlerValue, [
                importMeta
            ]);
            else if (this.#ParentImportMetaHook) Reflect.apply(this.#ParentImportMetaHook, undefined, [
                importMeta
            ]);
            this.#ContextObject.importMeta = importMeta;
        }
        if (this.#NeedsImport) {
            this.#ContextObject.import = async (specifier, options)=>{
                const referrer = this;
                const promiseCapability = PromiseCapability();
                let hasModuleInternalSlot = false;
                try {
                    specifier.#HandlerValue;
                    hasModuleInternalSlot = true;
                } catch  {}
                if (hasModuleInternalSlot) {
                    const hostDefined = createTask(`import(<module block>)`);
                    Module.#ContinueDynamicImport(promiseCapability, NormalCompletion(specifier), hostDefined);
                } else {
                    specifier = String(specifier);
                    const hostDefined1 = createTask(`import("${specifier}")`);
                    if (referrer.#LoadedModules.has(specifier)) {
                        Module.#ContinueDynamicImport(promiseCapability, NormalCompletion(referrer.#LoadedModules.get(specifier)), hostDefined1);
                    } else {
                        Module.#LoadImportedModule(referrer, specifier, hostDefined1, promiseCapability);
                    }
                }
                return promiseCapability.Promise;
            };
        }
        if (!this.#Environment) assertFailed();
        const env1 = new Proxy(this.#Environment, moduleEnvExoticMethods);
        if (!this.#HasTLA) {
            if (promise) assertFailed();
            const result = Reflect.apply(execute, this.#VirtualModuleSource, [
                env1,
                this.#ContextObject
            ]);
            if (result) throw new TypeError('Due to specification limitations, in order to support Async Modules (modules that use Top Level Await or a Virtual Module that has an execute() function that returns a Promise), the Virtual Module record must be marked with `isAsync: true`. The `isAsync` property is non-standard, and it is being tracked in https://github.com/tc39/proposal-compartments/issues/84.');
        } else {
            if (!promise) assertFailed();
            Promise.resolve(Reflect.apply(execute, this.#VirtualModuleSource, [
                env1,
                this.#ContextObject
            ])).then(promise.Resolve, promise.Reject);
        }
    }
    // https://tc39.es/ecma262/#sec-moduledeclarationlinking
    #Link() {
        const module5 = this;
        if (![
            1,
            3,
            5,
            6
        ].includes(module5.#Status)) assertFailed();
        const stack = [];
        try {
            Module.#InnerModuleLinking(module5, stack, 0);
        } catch (err) {
            for (const mod of stack){
                if (!(mod.#Status === 2)) assertFailed();
                mod.#Status = 1;
            }
            if (!(module5.#Status === 1)) assertFailed();
            throw err;
        }
        if (![
            3,
            5,
            6
        ].includes(module5.#Status)) assertFailed();
        if (!(stack.length === 0)) assertFailed();
    }
    // https://tc39.es/ecma262/#sec-moduleevaluation
    #Evaluate(HostDefined1) {
        let module6 = this;
        // TODO: Assert: This call to Evaluate is not happening at the same time as another call to Evaluate within the surrounding agent.
        if (![
            3,
            5,
            6
        ].includes(module6.#Status)) assertFailed();
        if ([
            5,
            6
        ].includes(module6.#Status)) {
            module6 = module6.#CycleRoot;
            if (!module6) assertFailed() // TODO: https://github.com/tc39/ecma262/issues/2823
            ;
        }
        if (module6.#TopLevelCapability) return module6.#TopLevelCapability.Promise;
        const stack1 = [];
        const capability = PromiseCapability();
        module6.#TopLevelCapability = capability;
        try {
            Module.#InnerModuleEvaluation(module6, stack1, 0, HostDefined1);
        } catch (err1) {
            for (const m of stack1){
                if (!(m.#Status === 4)) assertFailed();
                m.#Status = 6;
                m.#EvaluationError = err1;
            }
            if (!(module6.#Status === 6)) assertFailed();
            if (!(module6.#EvaluationError === err1)) assertFailed();
            capability.Reject(err1);
            return capability.Promise;
        }
        if (![
            5,
            6
        ].includes(module6.#Status)) assertFailed();
        if (!(module6.#EvaluationError === empty)) assertFailed();
        if (module6.#AsyncEvaluation === false) {
            if (!(module6.#Status === 6)) assertFailed();
            capability.Resolve();
        }
        if (!(stack1.length === 0)) assertFailed();
        return capability.Promise;
    }
    // https://tc39.es/ecma262/#sec-InnerModuleLinking
    static #InnerModuleLinking(module7, stack2, index) {
        if ([
            2,
            3,
            5,
            6
        ].includes(module7.#Status)) {
            return index;
        }
        if (!(module7.#Status === 1)) assertFailed();
        module7.#Status = 2;
        module7.#DFSIndex = index;
        module7.#DFSAncestorIndex = index;
        index++;
        stack2.push(module7);
        for (const required1 of module7.#RequestedModules){
            const requiredModule = this.#GetImportedModule(module7, required1);
            index = this.#InnerModuleLinking(requiredModule, stack2, index);
            if (![
                2,
                3,
                5,
                6
            ].includes(requiredModule.#Status)) assertFailed();
            if (stack2.includes(requiredModule)) {
                if (!(requiredModule.#Status === 2)) assertFailed();
            } else {
                if (!(requiredModule.#Status !== 2)) assertFailed();
            }
            if (requiredModule.#Status === 2) {
                module7.#DFSAncestorIndex = Math.min(module7.#DFSAncestorIndex, requiredModule.#DFSAncestorIndex);
            }
        }
        module7.#InitializeEnvironment();
        if (!(stack2.filter((x)=>x === module7).length === 1)) assertFailed();
        if (!(module7.#DFSAncestorIndex <= module7.#DFSIndex)) assertFailed();
        if (module7.#DFSAncestorIndex === module7.#DFSIndex) {
            let done = false;
            while(!done){
                const requiredModule1 = stack2.pop();
                requiredModule1.#Status = 3;
                if (requiredModule1 === module7) done = true;
            }
        }
        return index;
    }
    // https://tc39.es/ecma262/#sec-InnerModuleEvaluation
    static #InnerModuleEvaluation(module8, stack3, index1, HostDefined2) {
        if ([
            5,
            6
        ].includes(module8.#Status)) {
            if (module8.#EvaluationError === empty) return index1;
            throw module8.#EvaluationError;
        }
        if (module8.#Status === 4) return index1;
        if (!(module8.#Status === 3)) assertFailed();
        module8.#Status = 4;
        module8.#DFSIndex = index1;
        module8.#DFSAncestorIndex = index1;
        module8.#PendingAsyncDependencies = 0;
        index1++;
        stack3.push(module8);
        for (const required2 of module8.#RequestedModules){
            let requiredModule2 = this.#GetImportedModule(module8, required2);
            index1 = this.#InnerModuleEvaluation(requiredModule2, stack3, index1, HostDefined2);
            if (![
                4,
                5,
                6
            ].includes(requiredModule2.#Status)) assertFailed();
            if (stack3.includes(requiredModule2)) {
                if (!(requiredModule2.#Status === 4)) assertFailed();
            } else {
                if (!(requiredModule2.#Status !== 4)) assertFailed();
            }
            if (requiredModule2.#Status === 4) {
                module8.#DFSAncestorIndex = Math.min(module8.#DFSAncestorIndex, requiredModule2.#DFSAncestorIndex);
            } else {
                requiredModule2 = requiredModule2.#CycleRoot;
                if (![
                    5,
                    6
                ].includes(requiredModule2.#Status)) assertFailed();
                if (requiredModule2.#EvaluationError !== empty) throw requiredModule2.#EvaluationError;
            }
            if (requiredModule2.#AsyncEvaluation === true) {
                module8.#PendingAsyncDependencies++;
                requiredModule2.#AsyncParentModules.push(module8);
            }
        }
        if (module8.#PendingAsyncDependencies > 0 || module8.#HasTLA) {
            if (!(module8.#AsyncEvaluation === false)) assertFailed();
            if (!(module8.#__AsyncEvaluationPreviouslyTrue === false)) assertFailed();
            module8.#AsyncEvaluation = true;
            module8.#__AsyncEvaluationPreviouslyTrue = true;
            // Note: The order in which module records have their [[AsyncEvaluation]] fields transition to true is significant. (See 16.2.1.5.2.4.)
            if (module8.#PendingAsyncDependencies === 0) {
                this.#ExecuteAsyncModule(module8, HostDefined2);
            }
        } else {
            HostDefined2.run(()=>module8.#ExecuteModule());
        }
        if (!(stack3.filter((x)=>x === module8).length === 1)) assertFailed();
        if (!(module8.#DFSAncestorIndex <= module8.#DFSIndex)) assertFailed();
        if (module8.#DFSAncestorIndex === module8.#DFSIndex) {
            let done1 = false;
            while(!done1){
                const requiredModule3 = stack3.pop();
                if (requiredModule3.#AsyncEvaluation === false) {
                    requiredModule3.#Status = 6;
                } else {
                    requiredModule3.#Status = 5;
                }
                if (requiredModule3 === module8) done1 = true;
                requiredModule3.#CycleRoot = module8;
            }
        }
        return index1;
    }
    // https://tc39.es/ecma262/#sec-execute-async-module
    static #ExecuteAsyncModule(module9, HostDefined3) {
        if (![
            4,
            5
        ].includes(module9.#Status)) assertFailed();
        if (!module9.#HasTLA) assertFailed();
        const capability1 = PromiseCapability();
        capability1.Promise.then(()=>{
            this.#AsyncModuleExecutionFulfilled(module9, HostDefined3);
        }, (error)=>{
            this.#AsyncModuleExecutionRejected(module9, error);
        });
        HostDefined3.run(()=>module9.#ExecuteModule(capability1));
    }
    // https://tc39.es/ecma262/#sec-gather-available-ancestors
    static #GatherAvailableAncestors(module10, execList) {
        for (const m1 of module10.#AsyncParentModules){
            if (!execList.includes(m1) && m1.#CycleRoot.#EvaluationError === empty) {
                if (!(m1.#Status === 5)) assertFailed();
                if (!(m1.#EvaluationError === empty)) assertFailed();
                if (!(m1.#AsyncEvaluation === true)) assertFailed();
                if (!(m1.#PendingAsyncDependencies > 0)) assertFailed();
                m1.#PendingAsyncDependencies--;
                if (m1.#PendingAsyncDependencies === 0) {
                    execList.push(m1);
                    if (!m1.#HasTLA) this.#GatherAvailableAncestors(m1, execList);
                }
            }
        }
    }
    // https://tc39.es/ecma262/#sec-async-module-execution-fulfilled
    static #AsyncModuleExecutionFulfilled(module11, HostDefined4) {
        if (module11.#Status === 6) {
            if (!(module11.#EvaluationError !== empty)) assertFailed();
            return;
        }
        if (!(module11.#Status === 5)) assertFailed();
        if (!(module11.#AsyncEvaluation === true)) assertFailed();
        if (!(module11.#EvaluationError === empty)) assertFailed();
        module11.#AsyncEvaluation = false;
        module11.#Status = 6;
        if (module11.#TopLevelCapability) {
            if (!(module11.#CycleRoot === module11)) assertFailed();
            module11.#TopLevelCapability.Resolve();
        }
        const execList1 = [];
        this.#GatherAvailableAncestors(module11, execList1);
        // TODO: Let sortedExecList be a List whose elements are the elements of execList, in the order in which they had their [[AsyncEvaluation]] fields set to true in InnerModuleEvaluation.
        const sortedExecList = execList1;
        if (!sortedExecList.every((x)=>x.#AsyncEvaluation && x.#PendingAsyncDependencies === 0 && x.#EvaluationError === empty)) assertFailed();
        for (const m2 of sortedExecList){
            if (m2.#Status === 6) {
                if (!(m2.#EvaluationError !== empty)) assertFailed();
            } else if (m2.#HasTLA) {
                this.#ExecuteAsyncModule(m2, HostDefined4);
            } else {
                try {
                    HostDefined4.run(()=>m2.#ExecuteModule());
                } catch (err2) {
                    this.#AsyncModuleExecutionRejected(m2, err2);
                    continue;
                }
                m2.#Status = 6;
                if (m2.#TopLevelCapability) {
                    if (!(m2.#CycleRoot === m2)) assertFailed();
                    m2.#TopLevelCapability.Resolve();
                }
            }
        }
    }
    // https://tc39.es/ecma262/#sec-async-module-execution-rejected
    static #AsyncModuleExecutionRejected = (module, error)=>{
        if (module.#Status === 6) {
            if (!(module.#EvaluationError !== empty)) assertFailed();
            return;
        }
        if (!(module.#Status === 5)) assertFailed();
        if (!(module.#AsyncEvaluation === true)) assertFailed();
        if (!(module.#EvaluationError === empty)) assertFailed();
        module.#EvaluationError = error;
        module.#Status = 6;
        for (const m of module.#AsyncParentModules){
            this.#AsyncModuleExecutionRejected(m, error);
        }
        if (module.#TopLevelCapability) {
            if (!(module.#CycleRoot === module)) assertFailed();
            module.#TopLevelCapability.Reject(error);
        }
    };
    static #GetModuleNamespace(module12) {
        if (module12.#Namespace) return module12.#Namespace;
        if (!(module12.#Status !== 0 && module12.#Status !== 1)) assertFailed();
        const exportedNames1 = module12.#GetExportedNames();
        const namespaceObject2 = {
            __proto__: null
        };
        const propertiesToBeDefined1 = {
            __proto__: null,
            [Symbol.toStringTag]: {
                value: 'Module'
            }
        };
        const namespaceProxy = new Proxy(namespaceObject2, moduleNamespaceExoticMethods);
        // set it earlier in case of circular dependency
        module12.#Namespace = namespaceProxy;
        for (const name1 of exportedNames1){
            const resolution3 = module12.#ResolveExport(name1);
            if (resolution3 === ambiguous || resolution3 === null) continue;
            const { bindingName , module: targetModule  } = resolution3;
            if (bindingName === namespace) {
                propertiesToBeDefined1[name1] = {
                    enumerable: true,
                    value: Module.#GetModuleNamespace(targetModule)
                };
            } else {
                if (targetModule.#LocalExportedValues.has(bindingName)) {
                    propertiesToBeDefined1[name1] = {
                        enumerable: true,
                        // Note: this should not be configurable, but it's a trade-off for DX.
                        configurable: true,
                        value: targetModule.#LocalExportedValues.get(bindingName)
                    };
                } else {
                    propertiesToBeDefined1[name1] = {
                        get () {
                            throw new ReferenceError(`Cannot access '${name1}' before initialization`);
                        },
                        // Note: this should not be configurable, but it's a trade-off for DX.
                        configurable: true,
                        enumerable: true
                    };
                }
                targetModule.#non_std_AddLiveExportCallback(name1, (newValue)=>{
                    Object.defineProperty(namespaceObject2, name1, {
                        enumerable: true,
                        writable: true,
                        value: newValue
                    });
                });
            }
        }
        Object.defineProperties(namespaceObject2, propertiesToBeDefined1);
        return namespaceProxy;
    }
    //#endregion
    //#region Module refactor methods https://github.com/tc39/ecma262/pull/2905/
    static #GetImportedModule(module13, spec) {
        const record1 = module13.#LoadedModules.get(spec);
        if (!record1) assertFailed();
        return record1;
    }
    static #LoadImportedModule(referrer, specifier, hostDefined, state3) {
        if (referrer.#LoadedModules.has(specifier)) {
            const module14 = referrer.#LoadedModules.get(specifier);
            this.#FinishLoadingImportedModule(referrer, specifier, NormalCompletion(module14), hostDefined);
            return;
        }
        if (referrer.#LoadingModules.has(specifier)) {
            referrer.#LoadingModules.get(specifier).add(state3);
            return;
        }
        referrer.#LoadingModules.set(specifier, new Set([
            state3
        ]));
        // Skipped spec:
        // 4. If referrer is not a Source Text Module Record, referrer.[[ModuleInstance]] is undefined, or referrer.[[ModuleInstance]].[[ImportHook]] is undefined, then
        //     a. Perform HostLoadImportedModule(referrer, specifier, hostDefined).
        //     b. Return unused.
        // Reason: we cannot call HostLoadImportedModule and we always have a importHook.
        try {
            const importHookResult = referrer.#ImportHook ? Reflect.apply(referrer.#ImportHook, referrer.#HandlerValue, [
                specifier
            ]) : Reflect.apply(referrer.#ParentImportHook, undefined, [
                specifier
            ]);
            // unwrap importHookResult here
            const importHookPromise = Promise.resolve(importHookResult);
            // unwrap PromiseResolve(%Promise%, importHookResult.[[Value]]) here
            const onFulfilled = (result)=>{
                let completion;
                try {
                    result.#HandlerValue;
                    completion = NormalCompletion(result);
                } catch (error) {
                    completion = ThrowCompletion(new TypeError('importHook must return a Module instance'));
                }
                this.#FinishLoadingImportedModule(referrer, specifier, completion, hostDefined);
            };
            const onRejected = (error)=>{
                this.#FinishLoadingImportedModule(referrer, specifier, ThrowCompletion(error), hostDefined);
            };
            importHookPromise.then(onFulfilled, onRejected);
        } catch (error) {
            this.#FinishLoadingImportedModule(referrer, specifier, ThrowCompletion(error), hostDefined);
        }
    }
    static #FinishLoadingImportedModule(referrer1, specifier1, result1, hostDefined1) {
        if (result1.Type === 'normal') {
            const record2 = referrer1.#LoadedModules.get(specifier1);
            if (record2) {
                if (!(record2 === result1.Value)) assertFailed();
            } else {
                referrer1.#LoadedModules.set(specifier1, result1.Value);
            }
        }
        const loading = referrer1.#LoadingModules.get(specifier1);
        if (!loading) assertFailed();
        referrer1.#LoadingModules.delete(specifier1);
        for (const state4 of loading){
            if ('Visited' in state4) this.#ContinueModuleLoading(state4, result1);
            else this.#ContinueDynamicImport(state4, result1, hostDefined1);
        }
    }
    static #ContinueDynamicImport(promiseCapability, moduleCompletion1, hostDefined2) {
        if (moduleCompletion1.Type === 'throw') {
            promiseCapability.Reject(moduleCompletion1.Value);
            return;
        }
        const module15 = moduleCompletion1.Value;
        const loadPromise = module15.#LoadRequestedModules(hostDefined2);
        function onRejected1(reason) {
            promiseCapability.Reject(reason);
        }
        function linkAndEvaluate() {
            try {
                module15.#Link();
                const evaluatePromise = module15.#Evaluate(hostDefined2);
                function onFulfilled() {
                    const namespace = Module.#GetModuleNamespace(module15);
                    promiseCapability.Resolve(namespace);
                }
                evaluatePromise.then(onFulfilled, onRejected1);
            } catch (error) {
                promiseCapability.Reject(error);
            }
        }
        loadPromise.then(linkAndEvaluate, onRejected1);
    }
    //#endregion
    /** @internal */ static{
        imports = async (module, options)=>{
            const promiseCapability = PromiseCapability();
            const hostDefined = createTask(`import(<module block>)`);
            Module.#ContinueDynamicImport(promiseCapability, NormalCompletion(module), hostDefined);
            return promiseCapability.Promise;
        };
        setParentGlobalThis = (module, global)=>module.#GlobalThis = global;
        setParentImportHook = (module, hook)=>module.#ParentImportHook = hook;
        setParentImportMetaHook = (module, hook)=>module.#ParentImportMetaHook = hook;
    }
}
Reflect.defineProperty(Module.prototype, Symbol.toStringTag, {
    configurable: true,
    value: 'Module'
});
var ModuleStatus;
(function(ModuleStatus) {
    ModuleStatus[ModuleStatus["new"] = 0] = "new";
    ModuleStatus[ModuleStatus["unlinked"] = 1] = "unlinked";
    ModuleStatus[ModuleStatus["linking"] = 2] = "linking";
    ModuleStatus[ModuleStatus["linked"] = 3] = "linked";
    ModuleStatus[ModuleStatus["evaluating"] = 4] = "evaluating";
    ModuleStatus[ModuleStatus["evaluatingAsync"] = 5] = "evaluatingAsync";
    ModuleStatus[ModuleStatus["evaluated"] = 6] = "evaluated";
})(ModuleStatus || (ModuleStatus = {}));
function createContextObject() {
    const context = {};
    Object.defineProperties(context, {
        import: {
            writable: true,
            enumerable: true,
            value: undefined
        },
        importMeta: {
            writable: true,
            enumerable: true,
            value: undefined
        },
        globalThis: {
            writable: true,
            enumerable: true,
            value: undefined
        }
    });
    return context;
}
const moduleNamespaceExoticMethods = {
    // https://tc39.es/ecma262/#sec-module-namespace-exotic-objects
    setPrototypeOf (target, prototype) {
        return prototype === null;
    },
    defineProperty (target, p, attributes) {
        if (typeof p === 'symbol') return Reflect.defineProperty(target, p, attributes);
        const current = Reflect.getOwnPropertyDescriptor(target, p);
        if (!current) return false;
        if (attributes.configurable) return false;
        if (attributes.enumerable === false) return false;
        if (attributes.get || attributes.set) return false;
        if (attributes.writable === false) return false;
        if ('value' in attributes) return Object.is(current.value, attributes.value);
        return true;
    },
    set () {
        return false;
    },
    preventExtensions () {
        return true;
    },
    isExtensible () {
        return false;
    }
};
const moduleEnvExoticMethods = {
    getOwnPropertyDescriptor: ()=>undefined,
    defineProperty: ()=>false,
    deleteProperty: ()=>false,
    isExtensible: ()=>false,
    preventExtensions: ()=>true,
    getPrototypeOf: ()=>null,
    setPrototypeOf: (_, v)=>v === null
};

class Evaluators {
    get globalThis() {
        return this.#AssignGlobalThis;
    }
    // We do not support `eval` and `Function`.
    eval = eval;
    Function = Function;
    // implementation
    constructor(handler){
        const { globalThis: globalThis1 , importHook , importMeta  } = handler;
        this.#Handler = handler;
        if (typeof globalThis1 !== 'object' && globalThis1 !== undefined) throw new TypeError('globalThis must be an object');
        if (typeof importHook !== 'function' && importHook !== undefined) throw new TypeError('importHook must be a function');
        if (typeof importMeta !== 'object' && importMeta !== undefined && importMeta !== null) throw new TypeError('importMeta must be an object');
        const parent = this;
        class Evaluators extends TopEvaluators {
            constructor(options){
                super(options);
                this.#ParentEvaluator = parent;
            }
        }
        class Module extends TopModule {
            constructor(moduleSource, handler){
                super(moduleSource, handler);
                setParentGlobalThis(this, parent.#CalculatedGlobalThis ??= parent.#GetGlobalThis());
                setParentImportHook(this, parent.#CalculatedImportHook ??= parent.#GetImportHook());
                setParentImportMetaHook(this, (meta)=>Object.assign(meta, parent.#CalculatedImportMeta ??= parent.#GetImportMeta()));
            }
        }
        this.#AssignedImportHook = importHook;
        this.#AssignedImportMeta = importMeta;
        this.#AssignGlobalThis = globalThis1;
        this.Module = Module;
        this.Evaluators = Evaluators;
    }
    #ParentEvaluator;
    #AssignGlobalThis;
    #AssignedImportHook;
    #AssignedImportMeta;
    #CalculatedGlobalThis;
    #CalculatedImportHook;
    #CalculatedImportMeta;
    #Handler;
    #GetGlobalThis() {
        if (this.#AssignGlobalThis) return this.#AssignGlobalThis;
        if (this.#ParentEvaluator) return this.#ParentEvaluator.#GetGlobalThis();
        return realGlobalThis;
    }
    #GetImportHook() {
        if (this.#AssignedImportHook) return this.#AssignedImportHook.bind(this.#Handler);
        if (this.#ParentEvaluator) return this.#ParentEvaluator.#GetImportHook();
        return defaultImportHook;
    }
    #GetImportMeta() {
        if (this.#AssignedImportMeta) return this.#AssignedImportMeta;
        if (this.#ParentEvaluator) return this.#ParentEvaluator.#GetImportMeta();
        return null;
    }
}
const TopEvaluators = Evaluators;
const TopModule = Module;
const realGlobalThis = globalThis;
/** @internal */ function defaultImportHook() {
    throw new TypeError(`This evaluator does not have any import resolution strategy.`);
}

function makeGlobalThis(prototype = Object.prototype) {
    const global = Object.create(null);
    Object.defineProperties(global, intrinsic.reduce((previous, name)=>{
        previous[name] = Object.getOwnPropertyDescriptor(globalThis, name);
        return previous;
    }, Object.create(null)));
    Object.defineProperties(global, {
        globalThis: {
            writable: true,
            configurable: true,
            value: global
        },
        Evaluators: {
            writable: true,
            configurable: true,
            value: Evaluators
        },
        ModuleSource: {
            writable: true,
            configurable: true,
            value: ModuleSource
        },
        Module: {
            writable: true,
            configurable: true,
            value: new Evaluators({
                globalThis: global
            })
        }
    });
    return Object.setPrototypeOf(global, prototype);
}
// https://tc39.es/ecma262/multipage/global-object.html#sec-global-object
const intrinsic = [
    'Infinity',
    'NaN',
    'undefined',
    // Note: This library has an assumption that NO eval is available due to CSP.
    // Therefore we use the original version to make it looks like a "native function".
    // This library runs under SES lockdown environment, so we cannot modify Function.prototype.toString to do that.
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'AggregateError',
    'Array',
    'ArrayBuffer',
    'BigInt',
    'BigInt64Array',
    'BigUint64Array',
    'Boolean',
    'Date',
    'DataView',
    'Error',
    'EvalError',
    'FinalizationRegistry',
    'Float32Array',
    'Float64Array',
    // Note: Same as eval.
    'Function',
    'Int8Array',
    'Int16Array',
    'Int32Array',
    'Map',
    'Number',
    'Object',
    'Promise',
    'Proxy',
    'RangeError',
    'ReferenceError',
    'RegExp',
    'Set',
    // NO SharedArrayBuffer!
    'String',
    'Symbol',
    'SyntaxError',
    'TypeError',
    'Uint8Array',
    'Uint8ClampedArray',
    'Uint16Array',
    'Uint32Array',
    'URIError',
    'WeakMap',
    'WeakRef',
    'WeakSet',
    // NO Atomics (because we don't have SharedArrayBuffer)
    'JSON',
    'Math',
    'Reflect'
];


//# sourceMappingURL=bundle.js.map


/***/ })

}]);
//# sourceMappingURL=npm-ns.masknet.compartment.js.map