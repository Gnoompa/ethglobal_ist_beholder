(function () {
    'use strict';

    // Collect from main js of Twitter's web client.
    const TWITTER_RESERVED_SLUGS = [
        '404',
        'account',
        'download',
        'explore',
        'follower_requests',
        'hashtag',
        'home',
        'i',
        'intent',
        'lists',
        'login',
        'logout',
        'mentions',
        'messages',
        'notifications',
        'personalization',
        'search',
        'search-advanced',
        'search-home',
        'session',
        'settings',
        'share',
        'signup',
        'twitterblue',
        'webview',
        'welcome',
        'your_twitter_data'
    ];
    Object.freeze(TWITTER_RESERVED_SLUGS);

    const CustomEventId = '413f832d-db5c-4779-8d7e-1f7127bd167b';
    const { parse, stringify } = JSON;
    const { isArray } = Array;
    const { setPrototypeOf: setPrototypeOf$1 } = Object;
    const { String: String$1 } = globalThis;
    function encodeEvent(key, args) {
        return stringify(setPrototypeOf$1([
            key,
            args
        ], null), function formatter(key, value) {
            if (value instanceof Uint8Array) return {
                $type: 'u8[]',
                value: [
                    ...value
                ]
            };
            return value;
        });
    }
    function decodeEvent(data) {
        const result = parse(String$1(data), function reviver(key, value) {
            if (typeof value === 'object' && value && '$type' in value && 'value' in value && isArray(value.value) && value.$type === 'u8[]') return new Uint8Array(value.value);
            return value;
        });
        // Do not throw new Error cause it requires a global lookup.
        if (!isEventItemBeforeSerialization(result)) throw null;
        return result;
    }
    function isEventItemBeforeSerialization(data) {
        if (!isArray(data)) return false;
        if (data.length !== 2) return false;
        if (typeof data[0] !== 'string') return false;
        if (!isArray(data[1])) return false;
        return true;
    }

    const takeThisF = Function.prototype.bind.bind(Function.prototype.call);
    const takeThis = takeThisF;
    const bind = takeThis(Function.prototype.bind);
    // #region ECMAScript intrinsic
    // ECMAScript
    const { String, Promise: Promise$1, Boolean: Boolean$1 } = globalThis;
    const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const setPrototypeOf = Object.setPrototypeOf;
    const { defineProperty, defineProperties, getOwnPropertyDescriptors, getPrototypeOf, create, freeze } = Object;
    const apply = Reflect.apply;
    let hasOwn = Object.hasOwn;
    if (!hasOwn) {
        const { hasOwnProperty } = Object.prototype;
        hasOwn = (o, v)=>Reflect.apply(hasOwnProperty, o, [
                v
            ]);
    }
    const StringSplit = takeThisF(globalThis.String.prototype.split);
    const StringToLowerCase = takeThisF(globalThis.String.prototype.toLowerCase);
    const StringStartsWith = takeThisF(globalThis.String.prototype.startsWith);
    const StringInclude = takeThisF(globalThis.String.prototype.includes);
    const ArrayFilter = takeThisF(globalThis.Array.prototype.filter);
    const ArrayIncludes = takeThisF(globalThis.Array.prototype.includes);
    const ArrayUnshift = takeThisF(globalThis.Array.prototype.unshift);
    const ArrayPush = takeThisF(globalThis.Array.prototype.push);
    const PromiseResolve = globalThis.Promise.resolve.bind(globalThis.Promise);
    const DateNow = globalThis.Date.now;
    const Uint8Array_from = globalThis.Uint8Array.from.bind(globalThis.Uint8Array);
    // #endregion
    // #region  DOM<EventTarget>
    const { URL, Blob, File, DOMException, Event, ClipboardEvent, CustomEvent, InputEvent, EventTarget } = globalThis;
    const setTimeout = globalThis.setTimeout.bind(window);
    globalThis.clearTimeout.bind(window);
    const addEventListener$1 = takeThisF(EventTarget.prototype.addEventListener);
    const removeEventListener$1 = takeThisF(EventTarget.prototype.removeEventListener);
    const dispatchEvent = takeThisF(EventTarget.prototype.dispatchEvent);
    const ConsoleError = console.error;
    const AbortSignal_aborted = takeThis(getOwnPropertyDescriptor(AbortSignal.prototype, 'aborted').get);
    const URL_origin = takeThis(getOwnPropertyDescriptor(URL.prototype, 'origin').get);
    const Window_document = takeThis(getOwnPropertyDescriptor(window, 'document').get);
    const Node_nodeName = takeThis(getOwnPropertyDescriptor(Node.prototype, 'nodeName').get);
    const Node_parentNode = takeThis(getOwnPropertyDescriptor(Node.prototype, 'parentNode').get);
    const Node_ownerDocument = takeThis(getOwnPropertyDescriptor(Node.prototype, 'ownerDocument').get);
    const Node_getRootNode = takeThisF(Node.prototype.getRootNode);
    const Document_defaultView = takeThis(getOwnPropertyDescriptor(Document.prototype, 'defaultView').get);
    const Document_body = takeThis(getOwnPropertyDescriptor(Document.prototype, 'body').get);
    const ShadowRoot_host = takeThis(getOwnPropertyDescriptor(ShadowRoot.prototype, 'host').get);
    const ShadowRoot_mode = takeThis(getOwnPropertyDescriptor(ShadowRoot.prototype, 'mode').get);
    const HTMLTextAreaElement_value_setter = takeThis(getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set);
    const HTMLInputElement_value_setter = takeThis(getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set);
    const DocumentActiveElement = getOwnPropertyDescriptor(Document.prototype, 'activeElement').get.bind(document);
    const CustomEvent_detail = takeThis(getOwnPropertyDescriptor(CustomEvent.prototype, 'detail').get);
    const Performance_now = globalThis.performance.now.bind(globalThis.performance);
    const Blob_type = takeThis(getOwnPropertyDescriptor(Blob.prototype, 'type').get);
    const EventPrototype = window.Event.prototype;
    const EventPrototypeDesc = getOwnPropertyDescriptors(EventPrototype);
    const ClipboardEventPrototype = window.ClipboardEvent.prototype;
    const ClipboardEventPrototypeDesc = getOwnPropertyDescriptors(ClipboardEventPrototype);
    const UIEventPrototype = window.UIEvent.prototype;
    const UIEventPrototypeDesc = getOwnPropertyDescriptors(UIEventPrototype);
    const InputEventPrototype = window.InputEvent.prototype;
    const InputEventPrototypeDesc = getOwnPropertyDescriptors(InputEventPrototype);
    const EventTargetPrototype = window.EventTarget.prototype;
    const EventTargetPrototypeDesc = getOwnPropertyDescriptors(EventTargetPrototype);
    const { pushState: pushState$1, replaceState: replaceState$1 } = window.history;
    const HistoryPrototype = window.History.prototype;
    const DataTransferPrototype = window.DataTransfer.prototype;
    const DataTransferPrototypeDesc = getOwnPropertyDescriptors(DataTransferPrototype);
    const DataTransferItemPrototype = window.DataTransferItem.prototype;
    const DataTransferItemPrototypeDesc = getOwnPropertyDescriptors(DataTransferItemPrototype);
    const DataTransferItemListPrototype = window.DataTransferItemList.prototype;
    const DataTransferItemListPrototypeDesc = getOwnPropertyDescriptors(DataTransferItemListPrototype);
    const FileListPrototype = window.FileList.prototype;
    const FileListPrototypeDesc = getOwnPropertyDescriptors(FileListPrototype);
    const HTMLElementPrototype = window.HTMLElement.prototype;
    const HTMLElementPrototype_click = takeThisF(window.HTMLElement.prototype.click);
    const HTMLInputElementPrototype = window.HTMLInputElement.prototype;
    const HTMLInputElementPrototype_files_get = takeThis(getOwnPropertyDescriptor(HTMLInputElementPrototype, 'files').get);
    const HTMLInputElementPrototype_files_set = takeThis(getOwnPropertyDescriptor(HTMLInputElementPrototype, 'files').set);
    const querySelector = takeThisF(document.querySelector);
    const querySelectorAll = takeThisF(document.querySelectorAll);
    const NodeList_forEach = takeThisF(NodeList.prototype.forEach);
    // #endregion
    // #region Firefox magic
    typeof XPCNativeWrapper !== 'undefined' ? XPCNativeWrapper : Object;
    const isFirefox = typeof XPCNativeWrapper !== 'undefined';

    const { Map: _Map, Set: _Set, WeakMap: _WeakMap } = globalThis;
    const MapPrototype = create(null, getOwnPropertyDescriptors(_Map.prototype));
    const SetPrototype = create(null, getOwnPropertyDescriptors(_Set.prototype));
    const WeakMapPrototype = create(null, getOwnPropertyDescriptors(_WeakMap.prototype));
    const ArrayPrototype = create(null, getOwnPropertyDescriptors(globalThis.Array.prototype));
    const PromisePrototype = create(null, getOwnPropertyDescriptors(Promise.prototype));
    const __set_iter__ = new _Set().values();
    const __map_iter__ = new _Map().values();
    const __array_iter__ = [].values();
    const IteratorPrototype = create(null, getOwnPropertyDescriptors(getPrototypeOf(getPrototypeOf(__set_iter__))));
    const SetIteratorPrototype = create(IteratorPrototype, getOwnPropertyDescriptors(getPrototypeOf(__set_iter__)));
    const MapIteratorPrototype = create(IteratorPrototype, getOwnPropertyDescriptors(getPrototypeOf(__map_iter__)));
    const ArrayIteratorPrototype = create(IteratorPrototype, getOwnPropertyDescriptors(getPrototypeOf(__array_iter__)));
    // Map
    {
        const entries = takeThisF(MapPrototype.entries);
        const keys = takeThisF(MapPrototype.keys);
        const values = takeThisF(MapPrototype.values);
        MapPrototype.entries = MapPrototype[Symbol.iterator] = function() {
            const iter = entries(this);
            setPrototypeOf(iter, MapIteratorPrototype);
            return iter;
        };
        MapPrototype.keys = function() {
            const iter = keys(this);
            setPrototypeOf(iter, MapIteratorPrototype);
            return iter;
        };
        MapPrototype.values = function() {
            const iter = values(this);
            setPrototypeOf(iter, MapIteratorPrototype);
            return iter;
        };
    }// Set
    {
        const entries = takeThisF(SetPrototype.entries);
        const values = takeThisF(SetPrototype.values);
        SetPrototype.entries = function() {
            const iter = entries(this);
            setPrototypeOf(iter, SetIteratorPrototype);
            return iter;
        };
        SetPrototype.values = SetPrototype.keys = SetPrototype[Symbol.iterator] = function() {
            const iter = values(this);
            setPrototypeOf(iter, SetIteratorPrototype);
            return iter;
        };
    }// Array
    {
        const entries = takeThisF(ArrayPrototype.entries);
        const keys = takeThisF(ArrayPrototype.keys);
        const values = takeThisF(ArrayPrototype.values);
        ArrayPrototype.entries = function() {
            const iter = entries(this);
            setPrototypeOf(iter, ArrayIteratorPrototype);
            return iter;
        };
        ArrayPrototype.keys = function() {
            const iter = keys(this);
            setPrototypeOf(iter, ArrayIteratorPrototype);
            return iter;
        };
        ArrayPrototype.values = ArrayPrototype[Symbol.iterator] = function() {
            const iter = values(this);
            setPrototypeOf(iter, ArrayIteratorPrototype);
            return iter;
        };
    }function WeakMap() {
        return setPrototypeOf(new _WeakMap(), WeakMapPrototype);
    }
    function Set(iterable) {
        return setPrototypeOf(new _Set(iterable), SetPrototype);
    }
    function Array_of(...args) {
        return setPrototypeOf(args, ArrayPrototype);
    }

    function noop() {}
    /** Clone a high privileged object into an unsafe one. This uses structuredClone on Firefox.  */ const structuredCloneFromSafe = typeof cloneInto === 'function' ? function(value) {
        return cloneInto(value, window, {
            __proto__: null,
            cloneFunctions: true
        });
    } : globalThis.Object;
    /** Clone a high privileged object into an unsafe one. This uses structuredClone on Firefox.  */ const structuredCloneFromSafeReal = typeof cloneInto === 'function' ? function(value) {
        return cloneInto(value, window, {
            __proto__: null,
            cloneFunctions: true
        });
    } : globalThis.structuredClone || globalThis.Object;
    const unwrapXRayVision = typeof XPCNativeWrapper !== 'undefined' ? XPCNativeWrapper.unwrap.bind(XPCNativeWrapper) : window.Object;
    const empty = unwrapXRayVision(structuredCloneFromSafe({
        __proto__: null
    }));
    window.Object.freeze(empty);
    // TODO: use the original info?
    const expose = typeof exportFunction === 'function' ? (f)=>new Proxy(exportFunction(f, window), empty) : (f)=>new Proxy(f, empty);
    // The "window" here means another Realm in Firefox
    const { // ECMAScript
Object:     Object$1, TypeError, Proxy } = window;
    const Array_values = takeThisF(window.Array.prototype.values);
    const reportError = takeThisF(window.reportError) || noop;
    const _window = window;
    /** Return the unsafe object without XRayVision from the main Realm. */ class NewObject {
        constructor(){
            // eslint-disable-next-line no-constructor-return
            return unwrapXRayVision(new Object$1());
        }
    }

    const isNodeCache = WeakMap();
    function isNode(item) {
        if (!item) return false;
        if (isNodeCache.has(item)) return isNodeCache.get(item);
        try {
            Node_parentNode(item);
            isNodeCache.set(item, true);
            return true;
        } catch  {
            isNodeCache.set(item, false);
            return false;
        }
    }
    const isShadowRootCache = WeakMap();
    function isShadowRoot(item) {
        if (!item) return false;
        if (isShadowRootCache.has(item)) return isShadowRootCache.get(item);
        try {
            ShadowRoot_host(item);
            isShadowRootCache.set(item, true);
            return true;
        } catch  {
            isShadowRootCache.set(item, false);
            return false;
        }
    }
    const isDocumentCache = WeakMap();
    function isDocument(item) {
        if (item === document) return true;
        if (!item) return false;
        if (isDocumentCache.has(item)) return isDocumentCache.get(item);
        try {
            Document_defaultView(item);
            isDocumentCache.set(item, true);
            return true;
        } catch  {
            isDocumentCache.set(item, false);
            return false;
        }
    }
    const isWindowCache = WeakMap();
    function isWindow(item) {
        if (item === window) return true;
        if (!item) return false;
        if (isWindowCache.has(item)) return isWindowCache.get(item);
        try {
            Window_document(item);
            isWindowCache.set(item, true);
            return true;
        } catch  {
            isWindowCache.set(item, false);
            return false;
        }
    }

    function PatchDescriptor(patchedProps, targetPrototype) {
        const __unsafe__targetPrototype = unwrapXRayVision(targetPrototype);
        const targetDescriptor = getOwnPropertyDescriptors(targetPrototype);
        for(const key in patchedProps){
            if (key === 'constructor') continue;
            const desc = patchedProps[key];
            const oldDesc = {
                ...targetDescriptor[key]
            };
            if (!oldDesc.configurable) continue;
            desc.configurable = true;
            desc.enumerable = oldDesc.enumerable;
            if ('writable' in oldDesc) desc.writable = oldDesc.writable;
            if (hasOwn(desc, 'value') && desc.value) desc.value = expose(desc.value, oldDesc.value);
            if (hasOwn(desc, 'get') && desc.get) desc.get = expose(desc.get, oldDesc.get);
            if (hasOwn(desc, 'set') && desc.set) desc.set = expose(desc.set, oldDesc.set);
            try {
                defineProperty(__unsafe__targetPrototype, key, desc);
            } catch  {}
        }
    }
    function PatchDescriptor_NonNull(patchedProps, targetPrototype) {
        setPrototypeOf(patchedProps, null);
        PatchDescriptor(patchedProps, targetPrototype);
    }
    function contentFileFromBufferSource(format, fileName, xray_fileContent) {
        const binary = Uint8Array_from(xray_fileContent);
        const blob = new Blob(Array_of(binary), {
            __proto__: null,
            type: format
        });
        const file = new File(Array_of(blob), fileName, {
            __proto__: null,
            lastModified: DateNow(),
            type: format
        });
        return structuredCloneFromSafe(file);
    }
    function getError(message) {
        try {
            return {
                __proto__: null,
                message: String(message.message)
            };
        } catch  {
            return {
                __proto__: null,
                message: 'unknown error'
            };
        }
    }
    async function handlePromise(id, f) {
        try {
            const data = await setPrototypeOf(PromiseResolve(f()), PromisePrototype);
            sendEvent('resolvePromise', id, data);
        } catch (error) {
            sendEvent('rejectPromise', id, getError(error));
        }
    }
    function sendEvent(event, ...args) {
        setPrototypeOf(args, null);
        const detail = encodeEvent(event, args);
        dispatchEvent(document, new CustomEvent(CustomEventId, {
            __proto__: null,
            detail
        }));
    }
    function isTwitter() {
        const url = new URL(window.location.href);
        return StringInclude(URL_origin(url), 'twitter.com');
    }

    class __DataTransfer extends NewObject {
        constructor(items){
            super();
            this.#items = items;
            const types = Array_of();
            const files = Array_of();
            for (const item of __DataTransferItemList.items(items)){
                if (item.kind === 'string') {
                    types.push(__DataTransferItem.type(item));
                } else if (item.kind === 'file') {
                    types.push('Files');
                    files.push(__DataTransferItem.data(item));
                }
            }
            this.#types = freeze(unwrapXRayVision(structuredCloneFromSafe(types)));
            this.#files = new __FileList(files);
            setPrototypeOf(this, DataTransferPrototype);
        }
        // #region getter setters
        #dropEffect = 'none';
        get dropEffect() {
            const object = unwrapXRayVision(this);
            if (!(#dropEffect in object)) return apply(DataTransferPrototypeDesc.dropEffect.get, this, []);
            return object.#dropEffect;
        }
        set dropEffect(value) {
            const object = unwrapXRayVision(this);
            if (!(#dropEffect in object)) {
                apply(DataTransferPrototypeDesc.dropEffect.set, this, arguments);
                return;
            }
            if (value !== 'none' && value !== 'copy' && value !== 'link' && value !== 'move') return;
            object.#dropEffect = value;
        }
        #effectAllowed = 'none';
        get effectAllowed() {
            const object = unwrapXRayVision(this);
            if (!(#effectAllowed in object)) return apply(DataTransferPrototypeDesc.effectAllowed.get, this, []);
            return object.#effectAllowed;
        }
        set effectAllowed(value) {
            const object = unwrapXRayVision(this);
            if (!(#effectAllowed in object)) {
                apply(DataTransferPrototypeDesc.effectAllowed.set, this, arguments);
                return;
            }
            if (value !== 'none' && value !== 'copy' && value !== 'copyLink' && value !== 'copyMove' && value !== 'link' && value !== 'linkMove' && value !== 'move' && value !== 'all' && value !== 'uninitialized') return;
            object.#effectAllowed = value;
        }
        #files = new __FileList([]);
        get files() {
            const object = unwrapXRayVision(this);
            if (!(#files in object)) return apply(DataTransferPrototypeDesc.files.get, this, []);
            return object.#files;
        }
        #items;
        get items() {
            const object = unwrapXRayVision(this);
            if (!(#items in object)) return apply(DataTransferPrototypeDesc.items.get, this, []);
            return object.#items;
        }
        #types = [];
        get types() {
            const object = unwrapXRayVision(this);
            if (!(#types in object)) return apply(DataTransferPrototypeDesc.types.get, this, []);
            return object.#types;
        }
        // #endregion
        clearData(format) {
            const object = unwrapXRayVision(this);
            if (!(#items in object)) return apply(DataTransferPrototypeDesc.clearData.value, this, arguments);
            return;
        }
        getData(format) {
            const object = unwrapXRayVision(this);
            if (!(#items in object)) return apply(DataTransferPrototypeDesc.getData.value, this, arguments);
            format = StringToLowerCase(format);
            if (format === 'text') format = 'text/plain';
            else if (format === 'url') {
                format = 'text/uri-list';
            }
            const data = __DataTransferItemList.items(object.#items);
            let result = '';
            for (const item of data){
                if (__DataTransferItem.kind(item) !== 'string') continue;
                if (__DataTransferItem.type(item) !== format) continue;
                result = __DataTransferItem.data(item);
            }
            return result;
        }
        setData(format, data) {
            const object = unwrapXRayVision(this);
            if (!(#items in object)) return apply(DataTransferPrototypeDesc.setData.value, this, arguments);
            return;
        }
        setDragImage(image, x, y) {
            const object = unwrapXRayVision(this);
            if (!(#items in object)) return apply(DataTransferPrototypeDesc.setDragImage.value, this, arguments);
            return;
        }
    }
    class __FileList extends NewObject {
        constructor(files){
            super();
            this.#files = Array_of(...files);
            const desc = getOwnPropertyDescriptors(files);
            delete desc.length;
            defineProperties(this, desc);
            setPrototypeOf(this, FileListPrototype);
        }
        #files;
        get length() {
            const list = unwrapXRayVision(this);
            if (!(#files in list)) return apply(FileListPrototypeDesc.length.get, this, []);
            return list.#files.length;
        }
        item(index) {
            const list = unwrapXRayVision(this);
            if (!(#files in list)) return apply(FileListPrototypeDesc.item.value, this, arguments);
            return list.#files[index] ?? null;
        }
        [Symbol.iterator]() {
            const list = unwrapXRayVision(this);
            if (!(#files in list)) return apply(FileListPrototypeDesc[Symbol.iterator].value, this, arguments);
            return Array_values(list.#files);
        }
    }
    class __DataTransferItem extends NewObject {
        static is(obj) {
            return #type in obj;
        }
        static type(item) {
            return item.#type;
        }
        static kind(item) {
            return item.#kind;
        }
        static data(item) {
            return item.#data;
        }
        constructor(item, type){
            super();
            this.#type = StringToLowerCase(type);
            if (typeof item === 'string') {
                this.#kind = 'string';
                this.#data = item;
            } else {
                this.#kind = 'file';
                this.#data = item;
            }
            setPrototypeOf(this, DataTransferItemPrototype);
        }
        #data;
        #kind;
        get kind() {
            const object = unwrapXRayVision(this);
            if (!(#kind in object)) return apply(DataTransferItemPrototypeDesc.kind.get, this, []);
            return object.#kind;
        }
        #type;
        get type() {
            const object = unwrapXRayVision(this);
            if (!(#type in object)) return apply(DataTransferItemPrototypeDesc.type.get, this, []);
            return object.#type;
        }
        getAsFile() {
            const object = unwrapXRayVision(this);
            if (!(#type in object)) return apply(DataTransferItemPrototypeDesc.getAsFile.value, this, arguments);
            if (object.#kind !== 'file') return null;
            return structuredCloneFromSafeReal(object.#data);
        }
        getAsString(callback) {
            const object = unwrapXRayVision(this);
            if (!(#type in object)) return apply(DataTransferItemPrototypeDesc.getAsString.value, this, arguments);
            if (callback === null) return;
            if (object.#kind !== 'string') return;
            setTimeout(()=>{
                callback(object.#data);
            }, 0);
        }
        webkitGetAsEntry() {
            const object = unwrapXRayVision(this);
            if (!(#type in object)) return apply(DataTransferItemPrototypeDesc.webkitGetAsEntry.value, this, arguments);
            // TODO:
            return null;
        }
    }
    class __DataTransferItemList extends NewObject {
        static from(...args) {
            setPrototypeOf(args, ArrayPrototype);
            return new __DataTransferItemList(args.map((item)=>{
                if (typeof item === 'string') return new __DataTransferItem(item, 'text/plain');
                if (__DataTransferItem.is(item)) return item;
                return new __DataTransferItem(item, Blob_type(item));
            }));
        }
        static items(list) {
            return list.#items;
        }
        constructor(items){
            super();
            this.#items = Array_of(...items);
            const desc = getOwnPropertyDescriptors(items);
            delete desc.length;
            defineProperties(this, desc);
            setPrototypeOf(this, DataTransferItemListPrototype);
        }
        #items;
        get length() {
            const list = unwrapXRayVision(this);
            if (!(#items in list)) return apply(DataTransferItemListPrototypeDesc.length.get, this, []);
            return list.#items.length;
        }
        add(data, type) {
            const list = unwrapXRayVision(this);
            if (!(#items in list)) return apply(DataTransferItemListPrototypeDesc.add.value, this, arguments);
            return null;
        }
        clear() {
            const list = unwrapXRayVision(this);
            if (!(#items in list)) return apply(DataTransferItemListPrototypeDesc.clear.value, this, arguments);
            return;
        }
        remove(index) {
            const list = unwrapXRayVision(this);
            if (!(#items in list)) return apply(DataTransferItemListPrototypeDesc.remove.value, this, arguments);
            throw structuredCloneFromSafe(// TODO: message
            new DOMException('The object is in an invalid state.', 'InvalidStateError'));
        }
        [Symbol.iterator]() {
            const list = unwrapXRayVision(this);
            if (!(#items in list)) return apply(DataTransferItemListPrototypeDesc[Symbol.iterator].value, this, arguments);
            return Array_values(list.#items);
        }
    }
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__DataTransfer.prototype), DataTransferPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__FileList.prototype), FileListPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__DataTransferItem.prototype), DataTransferItemPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__DataTransferItemList.prototype), DataTransferItemListPrototype);

    const CapturingEvents = Set([
        'keyup',
        'input',
        'paste',
        'change'
    ]);
    const CapturedListeners = WeakMap();
    function addEventListener(type, callback, options) {
        const original = EventTargetPrototypeDesc.addEventListener.value;
        if (callback === null || typeof callback !== 'object' && typeof callback !== 'function' || !CapturingEvents.has(type)) {
            return apply(original, this, arguments);
        }
        // validate eventTarget is a EventTarget
        apply(original, this, [
            '',
            null
        ]);
        const listener = normalizeAddEventListenerArgs(type, callback, options);
        const native_result = addEventListener$1(this, listener.type, listener.callback, {
            __proto__: null,
            capture: listener.capture,
            once: listener.once,
            passive: listener.passive === null ? undefined : listener.passive,
            signal: listener.signal === null ? undefined : listener.signal
        });
        // https://dom.spec.whatwg.org/#add-an-event-listener
        // (Skip) If eventTarget is a ServiceWorkerGlobalScope object, ...
        if (listener.signal !== null && AbortSignal_aborted(listener.signal)) return;
        if (listener.callback === null) return;
        if (listener.passive === null) {
            // https://dom.spec.whatwg.org/#default-passive-value
            if (listener.type === 'touchstart' || listener.type === 'touchmove' || listener.type === 'wheel' || listener.type === 'mousewheel') {
                listener.passive = true;
            } else if (isWindow(this)) {
                listener.passive = true;
            } else if (isNode(this)) {
                const nodeDocument = Node_ownerDocument(this);
                if (// or is a node whose node document is eventTarget
                nodeDocument === this || // or is a node whose node document's document element is eventTarget
                Node_parentNode(this) === nodeDocument || // or is a node whose node document's body element is eventTarget.
                nodeDocument && Document_body(nodeDocument) === this) {
                    listener.passive = true;
                }
            } else listener.passive = false;
        }
        if (!CapturedListeners.has(this)) CapturedListeners.set(this, Set());
        const listenerList = CapturedListeners.get(this);
        // If eventTarget's event listener list does not contain an event listener whose ...
        {
            let exist = false;
            for (const _ of listenerList){
                if (_.type === listener.type && _.capture === listener.capture && _.callback === listener.callback) {
                    exist = true;
                    break;
                }
            }
            if (!exist) listenerList.add(listener);
        }
        if (listener.signal !== null) {
            addEventListener$1(listener.signal, 'abort', bind(RemoveListener, null, listener, listenerList), {
                __proto__: null,
                once: true
            });
        }
        return native_result;
    }
    function removeEventListener(type, callback, options) {
        const original = EventTargetPrototypeDesc.removeEventListener.value;
        if (!CapturingEvents.has(type)) return apply(original, this, arguments);
        // validate eventTarget is a EventTarget
        apply(original, this, [
            '',
            null
        ]);
        let capture = false;
        if (typeof options === 'boolean') capture = options;
        else if (typeof options === 'object' && options) capture = Boolean$1(options.capture);
        const listenerList = CapturedListeners.get(this);
        if (!listenerList) return;
        for (const listener of listenerList){
            if (listener.type === type && listener.capture === capture && listener.callback === callback) {
                RemoveListener(listener, listenerList);
            }
        }
    }
    PatchDescriptor({
        __proto__: null,
        addEventListener: {
            value: addEventListener
        },
        removeEventListener: {
            value: removeEventListener
        }
    }, EventTargetPrototype);
    function RemoveListener(listener, listenerList) {
        // (Skip) If eventTarget is a ServiceWorkerGlobalScope object ...
        listener.removed = true;
        listenerList.delete(listener);
    }
    function normalizeAddEventListenerArgs(type, callback, options) {
        // https://dom.spec.whatwg.org/#event-flatten-more
        const capture = Boolean$1(typeof options === 'boolean' ? options : options?.capture ?? false);
        let once = false;
        let passive = null;
        let signal = null;
        if (typeof options === 'object' && options) {
            once = Boolean(options.once);
            if (hasOwn(options, 'passive')) passive = Boolean(options.passive);
            if (hasOwn(options, 'signal')) {
                signal = options.signal;
            // don't verify signal's internal slot. it will be verified later
            }
        }
        return {
            type,
            callback,
            once,
            capture,
            passive,
            removed: false,
            signal
        };
    }

    const EVENT_PHASE_NONE = 0;
    const EVENT_PHASE_CAPTURING_PHASE = 1;
    const EVENT_PHASE_AT_TARGET = 2;
    const EVENT_PHASE_BUBBLING_PHASE = 3;
    // https://dom.spec.whatwg.org/#retarget
    function ReTarget(A, B) {
        return A;
    // while (true) {
    //     if (!isNode(A)) return A
    //     const A_root = $.Node_getRootNode(A)
    //     if (A_root && !isShadowRoot(A_root)) return A
    //     // TODO: B is a node and A's root is a shadow-including inclusive ancestor of B
    //     A = $.ShadowRoot_host(A_root)
    // }
    }
    class __Event extends NewObject {
        // https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent
        static dispatchEvent(event) {
            if (!(#dispatch in event)) return dispatchEvent(this, event);
            // (Skip: we don't override document.createEvent) or if its initialized flag is not set
            if (event.#dispatch) {
                // TODO: stack
                throw structuredCloneFromSafe(new DOMException(isFirefox ? 'An attempt was made to use an object that is not, or is no longer, usable' : "Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.", 'InvalidStateError'));
            }
            event.#isTrusted = false;
            return DispatchEvent(this, event);
        }
        // https://dom.spec.whatwg.org/#concept-event-dispatch
        static DispatchEvent(target, event, activationBehavior, legacyTargetOverride, legacyOutputDidListenersThrowFlag) {
            if (!target) return;
            // Note: in firefox, "event" is "Opaque". Displayed as an empty object.
            const type = event.#type;
            if (!CapturingEvents.has(type)) {
                ConsoleError("[@masknet/injected-script] Trying to send event didn't captured.");
                return true;
            }
            let clearTargets = false;
            event.#dispatch = true;
            // legacy target override flag is only used by HTML and only when target is a Window object.
            const targetOverride = !legacyTargetOverride ? target : Window_document(target);
            let relatedTarget = ReTarget(event.#relatedTarget);
            if (target !== relatedTarget || target === event.#relatedTarget) {
                const touchTargets = Array_of();
                for (const touchTarget of event.#touchTargetList){
                    touchTargets.push(ReTarget(touchTarget));
                }
                AppendEventPath(event, target, targetOverride, relatedTarget, touchTargets, false);
                // TODO: Let slottable be target, if target is a slottable and is assigned, and null otherwise.
                let slotInClosedTree = false;
                let parent = EventTarget_GetParent(target, event);
                while(parent !== null){
                    // TODO: If slottable is non-null: ...
                    // TODO: If parent is a slottable and is assigned, then set slottable to parent.
                    relatedTarget = ReTarget(event.#relatedTarget);
                    const touchTargets = Array_of();
                    for (const touchTarget of event.#touchTargetList){
                        touchTargets.push(ReTarget(touchTarget));
                    }
                    // If parent is a Window object, or parent is a node
                    // TODO: and target's root is a shadow-including inclusive ancestor of parent, then:
                    if (isNode(parent) || isWindow(parent)) {
                        AppendEventPath(event, parent, null, relatedTarget, touchTargets, slotInClosedTree);
                    } else if (parent === relatedTarget) {
                        parent = null;
                    } else {
                        target = parent;
                        AppendEventPath(event, parent, target, relatedTarget, touchTargets, slotInClosedTree);
                    }
                    if (parent !== null) parent = EventTarget_GetParent(parent, event);
                    slotInClosedTree = false;
                }
                let clearTargetsStruct;
                for (const item of event.#path){
                    if (item.shadowAdjustedTarget !== null) clearTargetsStruct = item;
                }
                if (clearTargetsStruct) {
                    const { shadowAdjustedTarget, relatedTarget, touchTargetList } = clearTargetsStruct;
                    if (isNode(shadowAdjustedTarget) && isShadowRoot(Node_getRootNode(shadowAdjustedTarget))) {
                        clearTargets = true;
                    } else if (isNode(relatedTarget) && isShadowRoot(Node_getRootNode(relatedTarget))) {
                        clearTargets = true;
                    } else if (touchTargetList.some((t)=>isNode(t) && isShadowRoot(Node_getRootNode(t)))) {
                        clearTargets = true;
                    }
                }
                // Legacy TODO: If activationTarget is non-null ...
                for(let i = event.#path.length - 1; i >= 0; i -= 1){
                    const struct = event.#path[i];
                    if (struct.shadowAdjustedTarget !== null) event.#eventPhase = EVENT_PHASE_AT_TARGET;
                    else event.#eventPhase = EVENT_PHASE_CAPTURING_PHASE;
                    Invoke(struct, event, 'capturing', legacyOutputDidListenersThrowFlag);
                }
                for (const struct of event.#path){
                    if (struct.shadowAdjustedTarget !== null) event.#eventPhase = EVENT_PHASE_AT_TARGET;
                    else {
                        if (!event.#bubbles) continue;
                        event.#eventPhase = EVENT_PHASE_BUBBLING_PHASE;
                    }
                    Invoke(struct, event, 'bubbling', legacyOutputDidListenersThrowFlag);
                }
            }
            event.#eventPhase = EVENT_PHASE_NONE;
            event.#currentTarget = null;
            event.#path = Array_of();
            event.#dispatch = false;
            event.#stopPropagation = false;
            event.#stopImmediatePropagation = false;
            if (clearTargets) {
                event.#target = event.#relatedTarget = null;
                event.#touchTargetList = Array_of();
            }
            return !event.#canceled;
        }
        // https://dom.spec.whatwg.org/#concept-event-listener-invoke
        static Invoke(struct, event, phase, legacyOutputDidListenersThrowFlag) {
            // Set event's target to the shadow-adjusted target of the last struct in event's path, that is either struct or preceding struct, whose shadow-adjusted target is non-null.
            SetTarget: {
                const structIndex = event.#path.indexOf(struct);
                if (structIndex === -1) {
                    ConsoleError('[@masknet/injected-script] Assert failed: struct must appears in the event.#path.');
                    event.#target = struct.invocationTarget;
                    break SetTarget;
                }
                for(let i = structIndex; i >= 0; i -= 1){
                    const target = event.#path[i].shadowAdjustedTarget;
                    if (target !== null) {
                        event.#target = target;
                        break SetTarget;
                    }
                }
                event.#target = null;
            }
            event.#relatedTarget = struct.relatedTarget;
            event.#touchTargetList = struct.touchTargetList;
            if (event.#stopPropagation) return;
            event.#currentTarget = struct.invocationTarget;
            const listeners = Set(CapturedListeners.get(struct.invocationTarget));
            const invocationTargetInShadowTree = struct.invocationTargetInShadowTree;
            const found = InnerInvoke(event, listeners, phase, invocationTargetInShadowTree, legacyOutputDidListenersThrowFlag);
            if (!found && event.#isTrusted) {
                const originalEventType = event.#type;
                if (originalEventType in LegacyEventRemappingTable) {
                    event.#type = LegacyEventRemappingTable[originalEventType];
                } else return;
                InnerInvoke(event, listeners, phase, invocationTargetInShadowTree, legacyOutputDidListenersThrowFlag);
                event.#type = originalEventType;
            }
        }
        // https://dom.spec.whatwg.org/#concept-event-listener-inner-invoke
        static InnerInvoke(event, listeners, phase, invocationTargetInShadowTree, legacyOutputDidListenersThrowFlag) {
            let found = false;
            for (const listener of listeners){
                if (listener.removed) continue;
                if (listener.type !== event.#type) continue;
                found = true;
                if (phase === 'capturing' && listener.capture === false) continue;
                if (phase === 'bubbling' && listener.capture === true) continue;
                if (listener.once === true) {
                    removeEventListener$1(event.#currentTarget, listener.type, listener.callback, listener.capture);
                    const list = CapturedListeners.get(event.#currentTarget);
                    list && RemoveListener(listener, list);
                }
                // Legacy TODO: Let global be ...
                // Legacy TODO: Let currentEvent be ...
                // Legacy TODO: If global is a Window object, then: ...
                if (listener.passive === true) event.#inPassiveListener = true;
                let exception;
                let hasException;
                // https://webidl.spec.whatwg.org/#call-a-user-objects-operation
                Call_A_User_Objects_Operation: {
                    let __unsafe__X;
                    let __unsafe__thisArg = event.#currentTarget;
                    if (typeof listener.callback === 'function') __unsafe__X = listener.callback;
                    else {
                        try {
                            const __unsafe__callbackObject = unwrapXRayVision(listener.callback);
                            __unsafe__X = __unsafe__callbackObject?.handleEvent;
                            // TODO: message, stack
                            if (typeof __unsafe__X !== 'function') throw new TypeError('handleEvent is not a function');
                            __unsafe__thisArg = __unsafe__callbackObject;
                        } catch (error) {
                            exception = error;
                            hasException = true;
                            break Call_A_User_Objects_Operation;
                        }
                    }
                    try {
                        apply(__unsafe__X, __unsafe__thisArg, [
                            event
                        ]);
                    } catch (error) {
                        exception = error;
                        hasException = true;
                    }
                }
                if (hasException) {
                    reportError(_window, exception);
                    if (legacyOutputDidListenersThrowFlag) legacyOutputDidListenersThrowFlag.value = true;
                }
                event.#inPassiveListener = false;
                // Legacy TODO: If global is a Window object, ...
                if (event.#stopImmediatePropagation) return found;
            }
            return found;
        }
        // https://dom.spec.whatwg.org/#concept-event-path-append
        static AppendEventPath(event, invocationTarget, shadowAdjustedTarget, relatedTarget, touchTargets, slotInClosedTree) {
            let invocationTargetInShadowTree = false;
            if (isNode(invocationTarget) && isShadowRoot(Node_getRootNode(invocationTarget))) invocationTargetInShadowTree = true;
            let rootOfClosedTree = false;
            if (isShadowRoot(invocationTarget) && ShadowRoot_mode(invocationTarget) === 'closed') rootOfClosedTree = true;
            event.#path.push({
                __proto__: null,
                invocationTarget,
                invocationTargetInShadowTree,
                shadowAdjustedTarget,
                relatedTarget,
                touchTargetList: touchTargets,
                rootOfClosedTree,
                slotInClosedTree
            });
        }
        static EventTarget_GetParent(target, event) {
            // Document:
            // A document's get the parent algorithm, given an event, returns null if event's type attribute value is "load" or document does not have a browsing context; otherwise the document's relevant global object.
            if (isDocument(target)) {
                if (event.#type === 'load') return null;
                return Document_defaultView(target);
            }
            // ShadowRoot:
            // A shadow root's get the parent algorithm, given an event, returns null if event's composed flag is unset and shadow root is the root of event's path's first struct's invocation target; otherwise shadow root's host.
            if (isShadowRoot(target)) {
                if (!event.#composed && target === event.#path[0].invocationTarget) return null;
                return ShadowRoot_host(target);
            }
            // Node:
            // A node's get the parent algorithm, given an event, returns the node's assigned slot, if node is assigned; otherwise node's parent.
            if (isNode(target)) return Node_parentNode(target) // is that correct?
            ;
            return null;
        }
        constructor(type, eventInitDict){
            super();
            this.#type = type;
            this.#bubbles = eventInitDict?.bubbles || false;
            this.#cancelable = eventInitDict?.cancelable || false;
            setPrototypeOf(this, EventPrototype);
            defineProperties(this, {
                isTrusted: {
                    enumerable: true,
                    configurable: false,
                    get: expose(function isTrusted() {
                        return unwrapXRayVision(this).#isTrusted;
                    }),
                    set: undefined
                },
                NONE: {
                    value: 0,
                    writable: false,
                    enumerable: true,
                    configurable: false
                },
                CAPTURING_PHASE: {
                    value: 1,
                    writable: false,
                    enumerable: true,
                    configurable: false
                },
                AT_TARGET: {
                    value: 2,
                    writable: false,
                    enumerable: true,
                    configurable: false
                },
                BUBBLING_PHASE: {
                    value: 3,
                    writable: false,
                    enumerable: true,
                    configurable: false
                }
            });
        }
        #isTrusted = true;
        #type;
        get type() {
            const event = unwrapXRayVision(this);
            if (!(#type in event)) return apply(EventPrototypeDesc.type.get, this, []);
            return event.#type;
        }
        #bubbles;
        get bubbles() {
            const event = unwrapXRayVision(this);
            if (!(#bubbles in event)) return apply(EventPrototypeDesc.bubbles.get, this, []);
            return event.#bubbles;
        }
        #target = null;
        get target() {
            const event = unwrapXRayVision(this);
            if (!(#target in event)) return apply(EventPrototypeDesc.target.get, this, []);
            if (event.#target === null) return null;
            return event.#target;
        }
        get srcElement() {
            const event = unwrapXRayVision(this);
            if (!(#target in event)) return apply(EventPrototypeDesc.srcElement.get, this, []);
            if (event.#target === null) return null;
            return event.#target;
        }
        #currentTarget = null;
        get currentTarget() {
            const event = unwrapXRayVision(this);
            if (!(#currentTarget in event)) return apply(EventPrototypeDesc.currentTarget.get, this, []);
            if (event.#currentTarget === null) return null;
            return event.#currentTarget;
        }
        #timeStamp = Performance_now();
        get timeStamp() {
            const event = unwrapXRayVision(this);
            if (!(#timeStamp in event)) return apply(EventPrototypeDesc.timeStamp.get, this, []);
            return event.#timeStamp;
        }
        #relatedTarget = null;
        #touchTargetList = Array_of();
        #path = Array_of();
        #eventPhase = EVENT_PHASE_NONE;
        get eventPhase() {
            const event = unwrapXRayVision(this);
            if (!(#eventPhase in event)) return apply(EventPrototypeDesc.eventPhase.get, this, []);
            return event.#eventPhase;
        }
        #stopPropagation = false;
        #stopImmediatePropagation = false;
        #canceled = false;
        #cancelable = false;
        #inPassiveListener = false;
        #composed = false;
        #dispatch = false;
        // https://dom.spec.whatwg.org/#dom-event-composedpath
        composedPath() {
            const event = unwrapXRayVision(this);
            if (!(#path in event)) return apply(EventPrototypeDesc.composedPath.value, this, arguments);
            const path = event.#path;
            const currentTarget = event.#currentTarget;
            const __unsafe__composedPath__ = structuredCloneFromSafe([]);
            if (path.length === 0) return __unsafe__composedPath__;
            ArrayPush(__unsafe__composedPath__, currentTarget ? currentTarget : null);
            let currentTargetIndex = 0;
            let currentTargetHiddenSubtreeLevel = 0;
            let index = path.length - 1;
            while(index >= 0){
                if (path[index].rootOfClosedTree) currentTargetHiddenSubtreeLevel += 1;
                if (path[index].invocationTarget === currentTarget) {
                    currentTargetIndex = index;
                    break;
                }
                if (path[index].slotInClosedTree) currentTargetHiddenSubtreeLevel -= 1;
                index -= 1;
            }
            let currentHiddenLevel = currentTargetHiddenSubtreeLevel;
            let maxHiddenLevel = currentTargetHiddenSubtreeLevel;
            index = currentTargetIndex - 1;
            while(index >= 0){
                if (path[index].rootOfClosedTree) currentHiddenLevel += 1;
                if (currentHiddenLevel <= maxHiddenLevel) ArrayUnshift(__unsafe__composedPath__, path[index].invocationTarget);
                if (path[index].slotInClosedTree) {
                    currentHiddenLevel -= 1;
                    if (currentHiddenLevel < maxHiddenLevel) maxHiddenLevel = currentHiddenLevel;
                }
                index -= 1;
            }
            currentHiddenLevel = currentTargetHiddenSubtreeLevel;
            maxHiddenLevel = currentTargetHiddenSubtreeLevel;
            index = currentTargetIndex + 1;
            while(index < path.length){
                if (path[index].slotInClosedTree) currentHiddenLevel += 1;
                if (currentHiddenLevel <= maxHiddenLevel) ArrayPush(__unsafe__composedPath__, path[index].invocationTarget);
                if (path[index].rootOfClosedTree) {
                    currentHiddenLevel -= 1;
                    if (currentHiddenLevel < maxHiddenLevel) maxHiddenLevel = currentHiddenLevel;
                }
                index += 1;
            }
            return __unsafe__composedPath__;
        }
        stopPropagation() {
            const event = unwrapXRayVision(this);
            if (!(#stopPropagation in event)) return apply(EventPrototypeDesc.stopPropagation.value, this, arguments);
            event.#stopPropagation = true;
        }
        get cancelBubble() {
            const event = unwrapXRayVision(this);
            if (#stopPropagation in event) return event.#stopPropagation;
            return apply(EventPrototypeDesc.cancelBubble.get, this, []);
        }
        set cancelBubble(value) {
            if (value !== true) return;
            const event = unwrapXRayVision(this);
            if (#stopPropagation in event) event.#stopPropagation = value;
            else apply(EventPrototypeDesc.cancelBubble.set, this, [
                value
            ]);
        }
        stopImmediatePropagation() {
            const event = unwrapXRayVision(this);
            if (!(#stopImmediatePropagation in event)) return apply(EventPrototypeDesc.stopImmediatePropagation.value, this, arguments);
            event.#stopPropagation = true;
            event.#stopImmediatePropagation = true;
        }
        #SetCancelFlag() {
            if (this.#cancelable && !this.#inPassiveListener) this.#canceled = true;
        }
        get cancelable() {
            const event = unwrapXRayVision(this);
            if (#stopPropagation in event) return event.#stopPropagation;
            return apply(EventPrototypeDesc.cancelable.get, this, []);
        }
        get returnValue() {
            const event = unwrapXRayVision(this);
            if (#canceled in event) return !event.#canceled;
            return apply(EventPrototypeDesc.returnValue.get, this, []);
        }
        set returnValue(value) {
            if (value !== false) return;
            const event = unwrapXRayVision(this);
            if (#canceled in event) event.#canceled = !value;
            else apply(EventPrototypeDesc.returnValue.set, this, [
                value
            ]);
        }
        preventDefault() {
            const event = unwrapXRayVision(this);
            if (!(#canceled in event)) return apply(EventPrototypeDesc.preventDefault.value, this, arguments);
            event.#SetCancelFlag();
        }
        get defaultPrevented() {
            const event = unwrapXRayVision(this);
            if (#canceled in event) return event.#canceled;
            return apply(EventPrototypeDesc.defaultPrevented.get, this, []);
        }
        get composed() {
            const event = unwrapXRayVision(this);
            if (#composed in event) return event.#stopPropagation;
            return apply(EventPrototypeDesc.composed.get, this, []);
        }
        initEvent(type, bubbles, cancelable) {
            const event = unwrapXRayVision(this);
            if (!(#dispatch in event)) return apply(EventPrototypeDesc.initEvent.value, this, arguments);
            if (event.#dispatch) return;
            event.#stopPropagation = false;
            event.#stopImmediatePropagation = false;
            event.#canceled = false;
            event.#isTrusted = false;
            event.#target = null;
            event.#type = type;
            event.#bubbles = bubbles;
            event.#cancelable = cancelable;
        }
        static UIEvent = class UIEvent extends __Event {
            constructor(type, eventInitDict){
                super(type, eventInitDict);
                setPrototypeOf(this, UIEventPrototype);
                this.#detail = eventInitDict?.detail || 0;
                this.#view = eventInitDict?.view || null;
            }
            #view;
            get view() {
                const event = unwrapXRayVision(this);
                if (!(#view in event)) return apply(UIEventPrototypeDesc.view.get, this, []);
                return event.#view;
            }
            #detail;
            get detail() {
                const event = unwrapXRayVision(this);
                if (!(#detail in event)) return apply(UIEventPrototypeDesc.detail.get, this, []);
                return event.#detail;
            }
            initUIEvent(type, canBubble, cancelable, view, detail) {
                const event = unwrapXRayVision(this);
                if (!(#detail in event)) // TODO: use arguments after https://github.com/swc-project/swc/issues/7428
                return apply(UIEventPrototypeDesc.initUIEvent.value, this, [
                    type,
                    canBubble,
                    cancelable,
                    view,
                    detail
                ]);
                if (event.#dispatch) return;
                apply(__Event.prototype.initEvent, this, [
                    type,
                    canBubble,
                    cancelable
                ]);
                event.#view = view;
                event.#detail = detail;
            }
            get sourceCapabilities() {
                const event = unwrapXRayVision(this);
                if (!(#detail in event)) return void apply(UIEventPrototypeDesc.sourceCapabilities.get, this, []);
                // TODO: for touch events
                return null;
            }
            get which() {
                const event = unwrapXRayVision(this);
                if (!(#detail in event)) return void apply(UIEventPrototypeDesc.which.get, this, []);
                // TODO: for MouseEvent and KeyboardEvent
                return null;
            }
        };
        static ClipboardEvent = class ClipboardEvent extends __Event {
            #clipboardData;
            constructor(type, eventInitDict){
                super(type, eventInitDict);
                this.#clipboardData = eventInitDict?.clipboardData || new __DataTransfer(__DataTransferItemList.from());
                setPrototypeOf(this, ClipboardEventPrototype);
            }
            get clipboardData() {
                const event = unwrapXRayVision(this);
                if (!(#clipboardData in event)) return apply(ClipboardEventPrototypeDesc.clipboardData.get, this, []);
                return event.#clipboardData;
            }
        };
        static InputEvent = class InputEvent extends __Event.UIEvent {
            constructor(type, eventInitDict){
                super(type, eventInitDict);
                setPrototypeOf(this, InputEventPrototype);
                this.#data = eventInitDict?.data || null;
                this.#isComposing = eventInitDict?.isComposing || false;
                this.#inputType = eventInitDict?.inputType || '';
                this.#dataTransfer = eventInitDict?.dataTransfer || null;
            }
            #data;
            get data() {
                const event = unwrapXRayVision(this);
                if (!(#data in event)) return apply(InputEventPrototypeDesc.data.get, this, []);
                return event.#data;
            }
            #isComposing;
            get isComposing() {
                const event = unwrapXRayVision(this);
                if (!(#isComposing in event)) return apply(InputEventPrototypeDesc.isComposing.get, this, []);
                return event.#isComposing;
            }
            #inputType;
            get inputType() {
                const event = unwrapXRayVision(this);
                if (!(#inputType in event)) return apply(InputEventPrototypeDesc.inputType.get, this, []);
                return event.#inputType;
            }
            #dataTransfer;
            get dataTransfer() {
                const event = unwrapXRayVision(this);
                if (!(#dataTransfer in event)) return apply(InputEventPrototypeDesc.dataTransfer.get, this, []);
                if (event.#dataTransfer === null) return null;
                return event.#dataTransfer;
            }
            // TODO
            getTargetRanges() {
                return structuredCloneFromSafe([]);
            }
        };
    }
    const { DispatchEvent, AppendEventPath, EventTarget_GetParent, Invoke, InnerInvoke } = __Event;
    // Legacy TODO: https://dom.spec.whatwg.org/#interface-window-extensions
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__Event.prototype), EventPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__Event.UIEvent.prototype), UIEventPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__Event.InputEvent.prototype), InputEventPrototype);
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(__Event.ClipboardEvent.prototype), ClipboardEventPrototype);
    PatchDescriptor({
        __proto__: null,
        dispatchEvent: {
            value: __Event.dispatchEvent
        }
    }, EventTargetPrototype);
    // https://dom.spec.whatwg.org/#concept-event-listener-invoke
    const LegacyEventRemappingTable = {
        animationend: 'webkitAnimationEnd',
        animationiteration: 'webkitAnimationIteration',
        animationstart: 'webkitAnimationStart',
        transitionend: 'webkitTransitionEnd',
        __proto__: null
    };

    const HTMLElementClickReplaceAction = WeakMap();
    let defaultReplaceAction;
    let replaceFiles;
    function click() {
        if (HTMLElementClickReplaceAction.has(this)) return HTMLElementClickReplaceAction.get(this)(this);
        if (defaultReplaceAction) return defaultReplaceAction(this);
        return HTMLElementPrototype_click(this);
    }
    const HTMLInputElementPatch = {
        get files () {
            const originalFiles = HTMLInputElementPrototype_files_get(this);
            return replaceFiles || originalFiles;
        },
        set files (value){
            HTMLInputElementPrototype_files_set(this, value);
            replaceFiles = undefined;
        }
    };
    PatchDescriptor_NonNull(getOwnPropertyDescriptors(HTMLInputElementPatch), HTMLInputElementPrototype);
    PatchDescriptor({
        __proto__: null,
        click: {
            value: click
        }
    }, HTMLElementPrototype);
    /**
     * This API can mock a file upload in React applications when injected script has been injected into the page.
     *
     * If the <input type='file' /> element is available, you can use the API like this:
     *     input.focus()
     *     hookInputUploadOnce(format, fileName, file, true)
     *
     * If the <input type='file' /> is dynamically generated after the user clicks "Upload" button on the web page, you can use the API like this:
     *     hookInputUploadOnce(format, fileName, file, false)
     *     uploadButton.click()
     * @param format
     * @param fileName
     * @param fileArray
     * @param triggerOnActiveElementNow
     */ function hookInputUploadOnce(format, fileName, fileArray, triggerOnActiveElementNow) {
        setPrototypeOf(fileArray, ArrayPrototype);
        function action(thisVal) {
            defaultReplaceAction = undefined;
            const file = contentFileFromBufferSource(format, fileName, fileArray);
            const fileList = new __FileList([
                file
            ]);
            replaceFiles = fileList;
            setTimeout(()=>{
                const event = new __Event('change', {
                    bubbles: true
                });
                DispatchEvent(thisVal, event);
            }, 200);
        }
        defaultReplaceAction = action;
        if (triggerOnActiveElementNow) {
            const element = DocumentActiveElement();
            if (element) defaultReplaceAction(element);
        }
    }

    async function instagramUpload(img) {
        setPrototypeOf(img, ArrayPrototype);
        const file = contentFileFromBufferSource('image/jpeg', 'image.jpg', Uint8Array_from(img));
        const target = querySelectorAll(document, 'input');
        const postButton = querySelector(document, '[data-testid="new-post-button"]');
        if (!postButton || target.length === 0) return;
        NodeList_forEach(target, (input)=>{
            HTMLElementClickReplaceAction.set(input, ()=>{
                const __unsafe__input = unwrapXRayVision(input);
                for(const key in __unsafe__input){
                    if (!hasOwn(__unsafe__input, key)) continue;
                    if (StringStartsWith(key, '__reactEventHandlers') || StringStartsWith(key, '__reactProps')) {
                        // @ts-expect-error extra prop
                        const reactState = __unsafe__input[key];
                        reactState.onChange(structuredCloneFromSafe({
                            target: {
                                files: [
                                    file
                                ]
                            }
                        }));
                    }
                }
            });
            setTimeout(()=>HTMLElementClickReplaceAction.delete(input), 500);
        });
        HTMLElementPrototype_click(postButton);
    }

    function dispatchInput(text) {
        const element = DocumentActiveElement();
        if (!element) return;
        const name = Node_nodeName(element);
        if (name === 'INPUT') HTMLInputElement_value_setter(element, text);
        else if (name === 'TEXTAREA') HTMLTextAreaElement_value_setter(element, text);
        const event = new __Event.InputEvent('input', {
            __proto__: null,
            inputType: 'insertText',
            data: text,
            bubbles: true,
            cancelable: true
        });
        DispatchEvent(element, event);
    }

    function dispatchPaste(text) {
        const event = new __Event.ClipboardEvent('paste', {
            __proto__: null,
            clipboardData: new __DataTransfer(__DataTransferItemList.from(text)),
            bubbles: true,
            cancelable: true
        });
        DispatchEvent(DocumentActiveElement(), event);
    }

    function dispatchPasteImage(image) {
        const file = contentFileFromBufferSource('image/png', 'image.png', image);
        const event = new __Event.ClipboardEvent('paste', {
            __proto__: null,
            clipboardData: new __DataTransfer(__DataTransferItemList.from(file)),
            bubbles: true,
            cancelable: true
        });
        DispatchEvent(DocumentActiveElement(), event);
    }

    const hasListened = {
        __proto__: null
    };
    const __unsafe__window = unwrapXRayVision(window);
    function __unsafe__Get(path) {
        const fragments = setPrototypeOf(StringSplit(path, '.'), ArrayPrototype);
        let __unsafe__this = __unsafe__window;
        let __unsafe__value = __unsafe__window;
        for (const fragment of fragments){
            if (__unsafe__this === undefined || __unsafe__this === null) return undefined;
            try {
                if (fragment === '__metamask__') {
                    __unsafe__value = __unsafe__window.ethereum?.providerMap?.get('MetaMask') || __unsafe__window.ethereum;
                    __unsafe__this = __unsafe__window;
                } else {
                    __unsafe__this = __unsafe__value;
                    __unsafe__value = __unsafe__this[fragment];
                }
            } catch  {
                return undefined;
            }
        }
        return {
            __unsafe__this,
            __unsafe__value,
            __proto__: null
        };
    }
    function __unsafe__getValue(path, id, property) {
        handlePromise(id, ()=>{
            const ref = __unsafe__Get(path + '.' + property);
            if (!ref) return;
            const { __unsafe__value } = ref;
            // the public key cannot transfer correctly between pages, therefore stringify it manually
            if (path === 'solflare' && property === 'publicKey') {
                try {
                    return __unsafe__value.toBase58();
                } catch  {}
            }
            return __unsafe__value;
        });
    }
    function __unsafe__call(path, id, ...args) {
        setPrototypeOf(args, ArrayPrototype);
        handlePromise(id, ()=>{
            const ref = __unsafe__Get(path);
            if (!ref) return;
            const { __unsafe__this, __unsafe__value } = ref;
            if (typeof __unsafe__value !== 'function') return;
            return apply(__unsafe__value, __unsafe__this, structuredCloneFromSafe(args));
        });
    }
    function __unsafe__callRequest(path, id, request) {
        __unsafe__call(path + '.request', id, structuredCloneFromSafe({
            request
        }).request);
    }
    function __unsafe__onEvent(path, bridgeEvent, event) {
        if (hasListened[`${path}_${event}`]) return;
        hasListened[`${path}_${event}`] = true;
        try {
            const ref = __unsafe__Get(path + '.on');
            if (!ref) return;
            const { __unsafe__this, __unsafe__value } = ref;
            if (typeof __unsafe__value !== 'function') return;
            apply(__unsafe__value, __unsafe__this, [
                event,
                expose((...args)=>{
                    setPrototypeOf(args, null);
                    sendEvent(bridgeEvent, path, event, args);
                })
            ]);
        } catch  {}
    }
    function __unsafe__untilInner(name) {
        if (hasOwn(__unsafe__window, name)) return PromiseResolve(true);
        let restCheckTimes = 15 // 3s
        ;
        return new Promise$1((resolve, reject)=>{
            function check() {
                restCheckTimes -= 1;
                if (restCheckTimes < 0) return reject(new Error('timeout'));
                if (hasOwn(__unsafe__window, name)) return resolve(true);
                setTimeout(check, 200);
            }
            check();
        });
    }
    function __unsafe__until(path, id) {
        handlePromise(id, ()=>__unsafe__untilInner(path));
    }

    document.addEventListener(CustomEventId, (e)=>{
        const [type, args] = setPrototypeOf(decodeEvent(CustomEvent_detail(e)), ArrayPrototype);
        setPrototypeOf(args, ArrayPrototype);
        if (args.length < 1) return;
        switch(type){
            case 'rejectPromise':
            case 'resolvePromise':
                return;
            case 'input':
                return dispatchInput(...args);
            case 'paste':
                return dispatchPaste(...args);
            case 'instagramUpload':
                return instagramUpload(...args);
            case 'pasteImage':
                return dispatchPasteImage(...args);
            case 'hookInputUploadOnce':
                return hookInputUploadOnce(...args);
            // web3
            case 'web3BridgeBindEvent':
                return __unsafe__onEvent(...args);
            case 'web3BridgeEmitEvent':
                return;
            case 'web3BridgeSendRequest':
                return __unsafe__callRequest(...args);
            case 'web3BridgePrimitiveAccess':
                return __unsafe__getValue(...args);
            case 'web3UntilBridgeOnline':
                return __unsafe__until(...args);
            case 'web3BridgeExecute':
                return __unsafe__call(...args);
            default:
                const neverEvent = type;
                ConsoleError('[@masknet/injected-script]', neverEvent, 'not handled');
        }
    });

    function getFirstSlug() {
        const slugs = ArrayFilter(StringSplit(location.pathname, '/'), Boolean$1);
        return slugs[0];
    }
    let firstSlug = '';
    function update() {
        const newFirstSlug = getFirstSlug();
        // reset to void wrong value
        if (!newFirstSlug || ArrayIncludes(TWITTER_RESERVED_SLUGS, newFirstSlug)) {
            const event = new CustomEvent('scenechange', {
                __proto__: null,
                detail: {
                    __proto__: null,
                    scene: 'unknown'
                }
            });
            dispatchEvent(window, event);
            return;
        }
        if (firstSlug !== newFirstSlug) {
            firstSlug = newFirstSlug;
            const event = new CustomEvent('scenechange', {
                __proto__: null,
                detail: {
                    __proto__: null,
                    scene: 'profile',
                    value: newFirstSlug
                }
            });
            dispatchEvent(window, event);
        }
    }
    if (isTwitter()) {
        window.addEventListener('locationchange', update);
    }

    let currentLocationHref = window.location.href;
    PatchDescriptor({
        __proto__: null,
        pushState: {
            value: pushState
        },
        replaceState: {
            value: replaceState
        }
    }, HistoryPrototype);
    // Learn more about this hack from https://stackoverflow.com/a/52809105/1986338
    function pushState(data, unused, url) {
        const val = apply(pushState$1, this, arguments);
        dispatchEvent(window, new Event('locationchange'));
        if (currentLocationHref !== window.location.href) {
            currentLocationHref = window.location.href;
            dispatchEvent(window, new Event('locationchange'));
        }
        return val;
    }
    function replaceState(data, unused, url) {
        const val = apply(replaceState$1, this, arguments);
        dispatchEvent(window, new Event('replacestate'));
        if (currentLocationHref !== window.location.href) {
            currentLocationHref = window.location.href;
            dispatchEvent(window, new Event('replacestate'));
            dispatchEvent(window, new Event('locationchange'));
        }
        return val;
    }
    window.addEventListener('popstate', ()=>{
        if (currentLocationHref === window.location.href) return;
        currentLocationHref = window.location.href;
        dispatchEvent(window, new Event('locationchange'));
    });

    /// <reference types="@masknet/global-types/firefox" />
    // uncomment this when debugging this script
    // import './debugger.js'
    document.currentScript?.remove();

})();
