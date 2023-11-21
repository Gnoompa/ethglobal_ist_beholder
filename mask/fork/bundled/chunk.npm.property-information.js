"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[8787],{

/***/ 14060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dy: () => (/* binding */ property_information_html),
  YP: () => (/* binding */ property_information_svg)
});

// UNUSED EXPORTS: find, hastToReact, normalize

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/schema.js
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property
    this.normal = normal
    if (space) {
      this.space = space
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {}
/** @type {Normal} */
Schema.prototype.normal = {}
/** @type {string|null} */
Schema.prototype.space = null

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/merge.js
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */



/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  let index = -1

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property)
    Object.assign(normal, definitions[index].normal)
  }

  return new Schema(property, normal, space)
}

// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/normalize.js
var normalize = __webpack_require__(72621);
// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/defined-info.js
var defined_info = __webpack_require__(91362);
;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/create.js
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */





const own = {}.hasOwnProperty

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  /** @type {string} */
  let prop

  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      const value = definition.properties[prop]
      const info = new defined_info/* DefinedInfo */.I(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      )

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true
      }

      property[prop] = info

      normal[(0,normalize/* normalize */.F)(prop)] = prop
      normal[(0,normalize/* normalize */.F)(info.attribute)] = prop
    }
  }

  return new Schema(property, normal, definition.space)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xlink.js


const xlink = create({
  space: 'xlink',
  transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase()
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xml.js


const xml = create({
  space: 'xml',
  transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase()
  },
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-sensitive-transform.js
/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-insensitive-transform.js


/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xmlns.js



const xmlns = create({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
})

// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/types.js
var types = __webpack_require__(37386);
;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/aria.js



const aria = create({
  transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: types.booleanish,
    ariaAutoComplete: null,
    ariaBusy: types.booleanish,
    ariaChecked: types.booleanish,
    ariaColCount: types.number,
    ariaColIndex: types.number,
    ariaColSpan: types.number,
    ariaControls: types.spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: types.spaceSeparated,
    ariaDetails: null,
    ariaDisabled: types.booleanish,
    ariaDropEffect: types.spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: types.booleanish,
    ariaFlowTo: types.spaceSeparated,
    ariaGrabbed: types.booleanish,
    ariaHasPopup: null,
    ariaHidden: types.booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: types.spaceSeparated,
    ariaLevel: types.number,
    ariaLive: null,
    ariaModal: types.booleanish,
    ariaMultiLine: types.booleanish,
    ariaMultiSelectable: types.booleanish,
    ariaOrientation: null,
    ariaOwns: types.spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: types.number,
    ariaPressed: types.booleanish,
    ariaReadOnly: types.booleanish,
    ariaRelevant: null,
    ariaRequired: types.booleanish,
    ariaRoleDescription: types.spaceSeparated,
    ariaRowCount: types.number,
    ariaRowIndex: types.number,
    ariaRowSpan: types.number,
    ariaSelected: types.booleanish,
    ariaSetSize: types.number,
    ariaSort: null,
    ariaValueMax: types.number,
    ariaValueMin: types.number,
    ariaValueNow: types.number,
    ariaValueText: null,
    role: null
  }
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/html.js




const html = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: types.commaSeparated,
    acceptCharset: types.spaceSeparated,
    accessKey: types.spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: types.boolean,
    allowPaymentRequest: types.boolean,
    allowUserMedia: types.boolean,
    alt: null,
    as: null,
    async: types.boolean,
    autoCapitalize: null,
    autoComplete: types.spaceSeparated,
    autoFocus: types.boolean,
    autoPlay: types.boolean,
    capture: types.boolean,
    charSet: null,
    checked: types.boolean,
    cite: null,
    className: types.spaceSeparated,
    cols: types.number,
    colSpan: null,
    content: null,
    contentEditable: types.booleanish,
    controls: types.boolean,
    controlsList: types.spaceSeparated,
    coords: types.number | types.commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: types.boolean,
    defer: types.boolean,
    dir: null,
    dirName: null,
    disabled: types.boolean,
    download: types.overloadedBoolean,
    draggable: types.booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: types.boolean,
    formTarget: null,
    headers: types.spaceSeparated,
    height: types.number,
    hidden: types.boolean,
    high: types.number,
    href: null,
    hrefLang: null,
    htmlFor: types.spaceSeparated,
    httpEquiv: types.spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: types.boolean,
    itemId: null,
    itemProp: types.spaceSeparated,
    itemRef: types.spaceSeparated,
    itemScope: types.boolean,
    itemType: types.spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: types.boolean,
    low: types.number,
    manifest: null,
    max: null,
    maxLength: types.number,
    media: null,
    method: null,
    min: null,
    minLength: types.number,
    multiple: types.boolean,
    muted: types.boolean,
    name: null,
    nonce: null,
    noModule: types.boolean,
    noValidate: types.boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: types.boolean,
    optimum: types.number,
    pattern: null,
    ping: types.spaceSeparated,
    placeholder: null,
    playsInline: types.boolean,
    poster: null,
    preload: null,
    readOnly: types.boolean,
    referrerPolicy: null,
    rel: types.spaceSeparated,
    required: types.boolean,
    reversed: types.boolean,
    rows: types.number,
    rowSpan: types.number,
    sandbox: types.spaceSeparated,
    scope: null,
    scoped: types.boolean,
    seamless: types.boolean,
    selected: types.boolean,
    shape: null,
    size: types.number,
    sizes: null,
    slot: null,
    span: types.number,
    spellCheck: types.booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: types.number,
    step: null,
    style: null,
    tabIndex: types.number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: types.boolean,
    useMap: null,
    value: types.booleanish,
    width: types.number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: types.spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: types.number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: types.number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: types.boolean, // Lists. Use CSS to reduce space between items instead
    declare: types.boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: types.number, // `<img>` and `<object>`
    leftMargin: types.number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: types.number, // `<body>`
    marginWidth: types.number, // `<body>`
    noResize: types.boolean, // `<frame>`
    noHref: types.boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: types.boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: types.boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: types.number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: types.booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: types.number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: types.number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: types.boolean,
    disableRemotePlayback: types.boolean,
    prefix: null,
    property: null,
    results: types.number,
    security: null,
    unselectable: null
  }
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/svg.js




const svg = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: types.commaOrSpaceSeparated,
    accentHeight: types.number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: types.number,
    amplitude: types.number,
    arabicForm: null,
    ascent: types.number,
    attributeName: null,
    attributeType: null,
    azimuth: types.number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: types.number,
    by: null,
    calcMode: null,
    capHeight: types.number,
    className: types.spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: types.number,
    diffuseConstant: types.number,
    direction: null,
    display: null,
    dur: null,
    divisor: types.number,
    dominantBaseline: null,
    download: types.boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: types.number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: types.number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: types.number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: types.commaSeparated,
    g2: types.commaSeparated,
    glyphName: types.commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: types.number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: types.number,
    horizOriginX: types.number,
    horizOriginY: types.number,
    id: null,
    ideographic: types.number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: types.number,
    k: types.number,
    k1: types.number,
    k2: types.number,
    k3: types.number,
    k4: types.number,
    kernelMatrix: types.commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: types.number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: types.number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: types.number,
    overlineThickness: types.number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: types.number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: types.spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: types.number,
    pointsAtY: types.number,
    pointsAtZ: types.number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: types.commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: types.commaOrSpaceSeparated,
    rev: types.commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: types.commaOrSpaceSeparated,
    requiredFeatures: types.commaOrSpaceSeparated,
    requiredFonts: types.commaOrSpaceSeparated,
    requiredFormats: types.commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: types.number,
    specularExponent: types.number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: types.number,
    strikethroughThickness: types.number,
    string: null,
    stroke: null,
    strokeDashArray: types.commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: types.number,
    strokeOpacity: types.number,
    strokeWidth: null,
    style: null,
    surfaceScale: types.number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: types.commaOrSpaceSeparated,
    tabIndex: types.number,
    tableValues: null,
    target: null,
    targetX: types.number,
    targetY: types.number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: types.commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: types.number,
    underlineThickness: types.number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: types.number,
    values: null,
    vAlphabetic: types.number,
    vMathematical: types.number,
    vectorEffect: null,
    vHanging: types.number,
    vIdeographic: types.number,
    version: null,
    vertAdvY: types.number,
    vertOriginX: types.number,
    vertOriginY: types.number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: types.number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})

;// CONCATENATED MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */












const property_information_html = merge([xml, xlink, xmlns, aria, html], 'html')
const property_information_svg = merge([xml, xlink, xmlns, aria, svg], 'svg')


/***/ }),

/***/ 1178:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ find)
/* harmony export */ });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72621);
/* harmony import */ var _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91362);
/* harmony import */ var _util_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73706);
/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */





const valid = /^data[-\w.:]+$/i
const dash = /-[a-z]/g
const cap = /[A-Z]/g

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  const normal = (0,_normalize_js__WEBPACK_IMPORTED_MODULE_0__/* .normalize */ .F)(value)
  let prop = value
  let Type = _util_info_js__WEBPACK_IMPORTED_MODULE_1__/* .Info */ .k

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase)
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1)
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4)

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab)

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes
        }

        value = 'data' + dashes
      }
    }

    Type = _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__/* .DefinedInfo */ .I
  }

  return new Type(prop, value)
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ 92071:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ hastToReact)
/* harmony export */ });
const hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
}


/***/ }),

/***/ 72621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ normalize)
/* harmony export */ });
/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ 91362:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ DefinedInfo)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73706);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37386);



/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
const checks = Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_0__)

class DefinedInfo extends _info_js__WEBPACK_IMPORTED_MODULE_1__/* .Info */ .k {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    let index = -1

    super(property, attribute)

    mark(this, 'space', space)

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index]
        mark(this, checks[index], (mask & _types_js__WEBPACK_IMPORTED_MODULE_0__[check]) === _types_js__WEBPACK_IMPORTED_MODULE_0__[check])
      }
    }
  }
}

DefinedInfo.prototype.defined = true

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value
  }
}


/***/ }),

/***/ 73706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ Info)
/* harmony export */ });
class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    /** @type {string} */
    this.property = property
    /** @type {string} */
    this.attribute = attribute
  }
}

/** @type {string|null} */
Info.prototype.space = null
Info.prototype.boolean = false
Info.prototype.booleanish = false
Info.prototype.overloadedBoolean = false
Info.prototype.number = false
Info.prototype.commaSeparated = false
Info.prototype.spaceSeparated = false
Info.prototype.commaOrSpaceSeparated = false
Info.prototype.mustUseProperty = false
Info.prototype.defined = false


/***/ }),

/***/ 37386:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean: () => (/* binding */ boolean),
/* harmony export */   booleanish: () => (/* binding */ booleanish),
/* harmony export */   commaOrSpaceSeparated: () => (/* binding */ commaOrSpaceSeparated),
/* harmony export */   commaSeparated: () => (/* binding */ commaSeparated),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   overloadedBoolean: () => (/* binding */ overloadedBoolean),
/* harmony export */   spaceSeparated: () => (/* binding */ spaceSeparated)
/* harmony export */ });
let powers = 0

const boolean = increment()
const booleanish = increment()
const overloadedBoolean = increment()
const number = increment()
const spaceSeparated = increment()
const commaSeparated = increment()
const commaOrSpaceSeparated = increment()

function increment() {
  return 2 ** ++powers
}


/***/ })

}]);
//# sourceMappingURL=chunk.npm.property-information.js.map