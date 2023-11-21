"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[598],{

/***/ 45157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ ReactMarkdown)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@0.0.0-experimental-0a360642d-20230711/node_modules/react/index.js
var react = __webpack_require__(78996);
// EXTERNAL MODULE: ./node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/index.js + 4 modules
var lib = __webpack_require__(67354);
// EXTERNAL MODULE: ./node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js + 3 modules
var unified_lib = __webpack_require__(50400);
// EXTERNAL MODULE: ./node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js + 1 modules
var remark_parse = __webpack_require__(80539);
// EXTERNAL MODULE: ./node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/lib/index.js
var remark_rehype_lib = __webpack_require__(55558);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(43284);
// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js + 11 modules
var property_information = __webpack_require__(14060);
// EXTERNAL MODULE: ./node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js
var unist_util_visit = __webpack_require__(29920);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-markdown@8.0.7_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-markdown/lib/rehype-filter.js


/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @callback AllowElement
 * @param {Element} element
 * @param {number} index
 * @param {Element|Root} parent
 * @returns {boolean|undefined}
 *
 * @typedef Options
 * @property {Array<string>} [allowedElements]
 * @property {Array<string>} [disallowedElements=[]]
 * @property {AllowElement} [allowElement]
 * @property {boolean} [unwrapDisallowed=false]
 */

/**
 * @type {import('unified').Plugin<[Options], Root>}
 */
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError(
      'Only one of `allowedElements` and `disallowedElements` should be defined'
    )
  }

  if (
    options.allowedElements ||
    options.disallowedElements ||
    options.allowElement
  ) {
    return (tree) => {
      (0,unist_util_visit/* visit */.Vn)(tree, 'element', (node, index, parent_) => {
        const parent = /** @type {Element|Root} */ (parent_)
        /** @type {boolean|undefined} */
        let remove

        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName)
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName)
        }

        if (!remove && options.allowElement && typeof index === 'number') {
          remove = !options.allowElement(node, index, parent)
        }

        if (remove && typeof index === 'number') {
          if (options.unwrapDisallowed && node.children) {
            parent.children.splice(index, 1, ...node.children)
          } else {
            parent.children.splice(index, 1)
          }

          return index
        }

        return undefined
      })
    }
  }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js
var react_is = __webpack_require__(69550);
// EXTERNAL MODULE: ./node_modules/.pnpm/hast-util-whitespace@2.0.0/node_modules/hast-util-whitespace/index.js
var hast_util_whitespace = __webpack_require__(13239);
// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/find.js
var find = __webpack_require__(1178);
// EXTERNAL MODULE: ./node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/hast-to-react.js
var hast_to_react = __webpack_require__(92071);
// EXTERNAL MODULE: ./node_modules/.pnpm/space-separated-tokens@2.0.1/node_modules/space-separated-tokens/index.js
var space_separated_tokens = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/.pnpm/comma-separated-tokens@2.0.2/node_modules/comma-separated-tokens/index.js
var comma_separated_tokens = __webpack_require__(27295);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-to-object@0.4.1/node_modules/style-to-object/index.mjs
var style_to_object = __webpack_require__(53547);
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-markdown@8.0.7_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-markdown/lib/uri-transformer.js
const protocols = ['http', 'https', 'mailto', 'tel']

/**
 * @param {string} uri
 * @returns {string}
 */
function uriTransformer(uri) {
  const url = (uri || '').trim()
  const first = url.charAt(0)

  if (first === '#' || first === '/') {
    return url
  }

  const colon = url.indexOf(':')
  if (colon === -1) {
    return url
  }

  let index = -1

  while (++index < protocols.length) {
    const protocol = protocols[index]

    if (
      colon === protocol.length &&
      url.slice(0, protocol.length).toLowerCase() === protocol
    ) {
      return url
    }
  }

  index = url.indexOf('?')
  if (index !== -1 && colon > index) {
    return url
  }

  index = url.indexOf('#')
  if (index !== -1 && colon > index) {
    return url
  }

  // eslint-disable-next-line no-script-url
  return 'javascript:void(0)'
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/react-markdown@8.0.7_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-markdown/lib/ast-to-react.js
/**
 * @template T
 * @typedef {import('react').ComponentType<T>} ComponentType<T>
 */

/**
 * @template {import('react').ElementType} T
 * @typedef {import('react').ComponentPropsWithoutRef<T>} ComponentPropsWithoutRef<T>
 */

/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('unist').Position} Position
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').DocType} Doctype
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 * @typedef {import('./complex-types.js').ReactMarkdownProps} ReactMarkdownProps
 *
 * @typedef Raw
 * @property {'raw'} type
 * @property {string} value
 *
 * @typedef Context
 * @property {Options} options
 * @property {Schema} schema
 * @property {number} listDepth
 *
 * @callback TransformLink
 * @param {string} href
 * @param {Array<ElementContent>} children
 * @param {string?} title
 * @returns {string}
 *
 * @callback TransformImage
 * @param {string} src
 * @param {string} alt
 * @param {string?} title
 * @returns {string}
 *
 * @typedef {import('react').HTMLAttributeAnchorTarget} TransformLinkTargetType
 *
 * @callback TransformLinkTarget
 * @param {string} href
 * @param {Array<ElementContent>} children
 * @param {string?} title
 * @returns {TransformLinkTargetType|undefined}
 *
 * @typedef {keyof JSX.IntrinsicElements} ReactMarkdownNames
 *
 * To do: is `data-sourcepos` typeable?
 *
 * @typedef {ComponentPropsWithoutRef<'code'> & ReactMarkdownProps & {inline?: boolean}} CodeProps
 * @typedef {ComponentPropsWithoutRef<'h1'> & ReactMarkdownProps & {level: number}} HeadingProps
 * @typedef {ComponentPropsWithoutRef<'li'> & ReactMarkdownProps & {checked: boolean|null, index: number, ordered: boolean}} LiProps
 * @typedef {ComponentPropsWithoutRef<'ol'> & ReactMarkdownProps & {depth: number, ordered: true}} OrderedListProps
 * @typedef {ComponentPropsWithoutRef<'td'> & ReactMarkdownProps & {style?: Record<string, unknown>, isHeader: false}} TableDataCellProps
 * @typedef {ComponentPropsWithoutRef<'th'> & ReactMarkdownProps & {style?: Record<string, unknown>, isHeader: true}} TableHeaderCellProps
 * @typedef {ComponentPropsWithoutRef<'tr'> & ReactMarkdownProps & {isHeader: boolean}} TableRowProps
 * @typedef {ComponentPropsWithoutRef<'ul'> & ReactMarkdownProps & {depth: number, ordered: false}} UnorderedListProps
 *
 * @typedef {ComponentType<CodeProps>} CodeComponent
 * @typedef {ComponentType<HeadingProps>} HeadingComponent
 * @typedef {ComponentType<LiProps>} LiComponent
 * @typedef {ComponentType<OrderedListProps>} OrderedListComponent
 * @typedef {ComponentType<TableDataCellProps>} TableDataCellComponent
 * @typedef {ComponentType<TableHeaderCellProps>} TableHeaderCellComponent
 * @typedef {ComponentType<TableRowProps>} TableRowComponent
 * @typedef {ComponentType<UnorderedListProps>} UnorderedListComponent
 *
 * @typedef SpecialComponents
 * @property {CodeComponent|ReactMarkdownNames} code
 * @property {HeadingComponent|ReactMarkdownNames} h1
 * @property {HeadingComponent|ReactMarkdownNames} h2
 * @property {HeadingComponent|ReactMarkdownNames} h3
 * @property {HeadingComponent|ReactMarkdownNames} h4
 * @property {HeadingComponent|ReactMarkdownNames} h5
 * @property {HeadingComponent|ReactMarkdownNames} h6
 * @property {LiComponent|ReactMarkdownNames} li
 * @property {OrderedListComponent|ReactMarkdownNames} ol
 * @property {TableDataCellComponent|ReactMarkdownNames} td
 * @property {TableHeaderCellComponent|ReactMarkdownNames} th
 * @property {TableRowComponent|ReactMarkdownNames} tr
 * @property {UnorderedListComponent|ReactMarkdownNames} ul
 *
 * @typedef {Partial<Omit<import('./complex-types.js').NormalComponents, keyof SpecialComponents> & SpecialComponents>} Components
 *
 * @typedef Options
 * @property {boolean} [sourcePos=false]
 * @property {boolean} [rawSourcePos=false]
 * @property {boolean} [skipHtml=false]
 * @property {boolean} [includeElementIndex=false]
 * @property {null|false|TransformLink} [transformLinkUri]
 * @property {TransformImage} [transformImageUri]
 * @property {TransformLinkTargetType|TransformLinkTarget} [linkTarget]
 * @property {Components} [components]
 */










const own = {}.hasOwnProperty

// The table-related elements that must not contain whitespace text according
// to React.
const tableElements = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr'])

/**
 * @param {Context} context
 * @param {Element|Root} node
 */
function childrenToReact(context, node) {
  /** @type {Array<ReactNode>} */
  const children = []
  let childIndex = -1
  /** @type {Comment|Doctype|Element|Raw|Text} */
  let child

  while (++childIndex < node.children.length) {
    child = node.children[childIndex]

    if (child.type === 'element') {
      children.push(toReact(context, child, childIndex, node))
    } else if (child.type === 'text') {
      // Currently, a warning is triggered by react for *any* white space in
      // tables.
      // So we drop it.
      // See: <https://github.com/facebook/react/pull/7081>.
      // See: <https://github.com/facebook/react/pull/7515>.
      // See: <https://github.com/remarkjs/remark-react/issues/64>.
      // See: <https://github.com/remarkjs/react-markdown/issues/576>.
      if (
        node.type !== 'element' ||
        !tableElements.has(node.tagName) ||
        !(0,hast_util_whitespace/* whitespace */.Q)(child)
      ) {
        children.push(child.value)
      }
    } else if (child.type === 'raw' && !context.options.skipHtml) {
      // Default behavior is to show (encoded) HTML.
      children.push(child.value)
    }
  }

  return children
}

/**
 * @param {Context} context
 * @param {Element} node
 * @param {number} index
 * @param {Element|Root} parent
 */
function toReact(context, node, index, parent) {
  const options = context.options
  const transform =
    options.transformLinkUri === undefined
      ? uriTransformer
      : options.transformLinkUri
  const parentSchema = context.schema
  /** @type {ReactMarkdownNames} */
  // @ts-expect-error assume a known HTML/SVG element.
  const name = node.tagName
  /** @type {Record<string, unknown>} */
  const properties = {}
  let schema = parentSchema
  /** @type {string} */
  let property

  if (parentSchema.space === 'html' && name === 'svg') {
    schema = property_information/* svg */.YP
    context.schema = schema
  }

  if (node.properties) {
    for (property in node.properties) {
      if (own.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context)
      }
    }
  }

  if (name === 'ol' || name === 'ul') {
    context.listDepth++
  }

  const children = childrenToReact(context, node)

  if (name === 'ol' || name === 'ul') {
    context.listDepth--
  }

  // Restore parent schema.
  context.schema = parentSchema

  // Nodes created by plugins do not have positional info, in which case we use
  // an object that matches the position interface.
  const position = node.position || {
    start: {line: null, column: null, offset: null},
    end: {line: null, column: null, offset: null}
  }
  const component =
    options.components && own.call(options.components, name)
      ? options.components[name]
      : name
  const basic = typeof component === 'string' || component === react.Fragment

  if (!react_is.isValidElementType(component)) {
    throw new TypeError(
      `Component for name \`${name}\` not defined or is not renderable`
    )
  }

  properties.key = index

  if (name === 'a' && options.linkTarget) {
    properties.target =
      typeof options.linkTarget === 'function'
        ? options.linkTarget(
            String(properties.href || ''),
            node.children,
            typeof properties.title === 'string' ? properties.title : null
          )
        : options.linkTarget
  }

  if (name === 'a' && transform) {
    properties.href = transform(
      String(properties.href || ''),
      node.children,
      typeof properties.title === 'string' ? properties.title : null
    )
  }

  if (
    !basic &&
    name === 'code' &&
    parent.type === 'element' &&
    parent.tagName !== 'pre'
  ) {
    properties.inline = true
  }

  if (
    !basic &&
    (name === 'h1' ||
      name === 'h2' ||
      name === 'h3' ||
      name === 'h4' ||
      name === 'h5' ||
      name === 'h6')
  ) {
    properties.level = Number.parseInt(name.charAt(1), 10)
  }

  if (name === 'img' && options.transformImageUri) {
    properties.src = options.transformImageUri(
      String(properties.src || ''),
      String(properties.alt || ''),
      typeof properties.title === 'string' ? properties.title : null
    )
  }

  if (!basic && name === 'li' && parent.type === 'element') {
    const input = getInputElement(node)
    properties.checked =
      input && input.properties ? Boolean(input.properties.checked) : null
    properties.index = getElementsBeforeCount(parent, node)
    properties.ordered = parent.tagName === 'ol'
  }

  if (!basic && (name === 'ol' || name === 'ul')) {
    properties.ordered = name === 'ol'
    properties.depth = context.listDepth
  }

  if (name === 'td' || name === 'th') {
    if (properties.align) {
      if (!properties.style) properties.style = {}
      // @ts-expect-error assume `style` is an object
      properties.style.textAlign = properties.align
      delete properties.align
    }

    if (!basic) {
      properties.isHeader = name === 'th'
    }
  }

  if (!basic && name === 'tr' && parent.type === 'element') {
    properties.isHeader = Boolean(parent.tagName === 'thead')
  }

  // If `sourcePos` is given, pass source information (line/column info from markdown source).
  if (options.sourcePos) {
    properties['data-sourcepos'] = flattenPosition(position)
  }

  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position
  }

  // If `includeElementIndex` is given, pass node index info to components.
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node)
    properties.siblingCount = getElementsBeforeCount(parent)
  }

  if (!basic) {
    properties.node = node
  }

  // Ensure no React warnings are emitted for void elements w/ children.
  return children.length > 0
    ? react.createElement(component, properties, children)
    : react.createElement(component, properties)
}

/**
 * @param {Element|Root} node
 * @returns {Element?}
 */
function getInputElement(node) {
  let index = -1

  while (++index < node.children.length) {
    const child = node.children[index]

    if (child.type === 'element' && child.tagName === 'input') {
      return child
    }
  }

  return null
}

/**
 * @param {Element|Root} parent
 * @param {Element} [node]
 * @returns {number}
 */
function getElementsBeforeCount(parent, node) {
  let index = -1
  let count = 0

  while (++index < parent.children.length) {
    if (parent.children[index] === node) break
    if (parent.children[index].type === 'element') count++
  }

  return count
}

/**
 * @param {Record<string, unknown>} props
 * @param {string} prop
 * @param {unknown} value
 * @param {Context} ctx
 */
function addProperty(props, prop, value, ctx) {
  const info = (0,find/* find */.s)(ctx.schema, prop)
  let result = value

  // Ignore nullish and `NaN` values.
  // eslint-disable-next-line no-self-compare
  if (result === null || result === undefined || result !== result) {
    return
  }

  // Accept `array`.
  // Most props are space-separated.
  if (Array.isArray(result)) {
    result = info.commaSeparated ? (0,comma_separated_tokens/* stringify */.P)(result) : (0,space_separated_tokens/* stringify */.P)(result)
  }

  if (info.property === 'style' && typeof result === 'string') {
    result = parseStyle(result)
  }

  if (info.space && info.property) {
    props[
      own.call(hast_to_react/* hastToReact */.D, info.property)
        ? hast_to_react/* hastToReact */.D[info.property]
        : info.property
    ] = result
  } else if (info.attribute) {
    props[info.attribute] = result
  }
}

/**
 * @param {string} value
 * @returns {Record<string, string>}
 */
function parseStyle(value) {
  /** @type {Record<string, string>} */
  const result = {}

  try {
    ;(0,style_to_object/* default */.Z)(value, iterator)
  } catch {
    // Silent.
  }

  return result

  /**
   * @param {string} name
   * @param {string} v
   */
  function iterator(name, v) {
    const k = name.slice(0, 4) === '-ms-' ? `ms-${name.slice(4)}` : name
    result[k.replace(/-([a-z])/g, styleReplacer)] = v
  }
}

/**
 * @param {unknown} _
 * @param {string} $1
 */
function styleReplacer(_, $1) {
  return $1.toUpperCase()
}

/**
 * @param {Position|{start: {line: null, column: null, offset: null}, end: {line: null, column: null, offset: null}}} pos
 * @returns {string}
 */
function flattenPosition(pos) {
  return [
    pos.start.line,
    ':',
    pos.start.column,
    '-',
    pos.end.line,
    ':',
    pos.end.column
  ]
    .map(String)
    .join('')
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/react-markdown@8.0.7_@types+react@18.2.21_react@0.0.0-experimental-0a360642d-20230711/node_modules/react-markdown/lib/react-markdown.js
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('react').ReactElement<{}>} ReactElement
 * @typedef {import('unified').PluggableList} PluggableList
 * @typedef {import('hast').Root} Root
 * @typedef {import('./rehype-filter.js').Options} FilterOptions
 * @typedef {import('./ast-to-react.js').Options} TransformOptions
 *
 * @typedef CoreOptions
 * @property {string} children
 *
 * @typedef PluginOptions
 * @property {PluggableList} [remarkPlugins=[]]
 * @property {PluggableList} [rehypePlugins=[]]
 * @property {import('remark-rehype').Options | undefined} [remarkRehypeOptions={}]
 *
 * @typedef LayoutOptions
 * @property {string} [className]
 *
 * @typedef {CoreOptions & PluginOptions & LayoutOptions & FilterOptions & TransformOptions} ReactMarkdownOptions
 *
 * @typedef Deprecation
 * @property {string} id
 * @property {string} [to]
 */











const react_markdown_own = {}.hasOwnProperty
const changelog =
  'https://github.com/remarkjs/react-markdown/blob/main/changelog.md'

/** @type {Record<string, Deprecation>} */
const deprecated = {
  plugins: {to: 'remarkPlugins', id: 'change-plugins-to-remarkplugins'},
  renderers: {to: 'components', id: 'change-renderers-to-components'},
  astPlugins: {id: 'remove-buggy-html-in-markdown-parser'},
  allowDangerousHtml: {id: 'remove-buggy-html-in-markdown-parser'},
  escapeHtml: {id: 'remove-buggy-html-in-markdown-parser'},
  source: {to: 'children', id: 'change-source-to-children'},
  allowNode: {
    to: 'allowElement',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  allowedTypes: {
    to: 'allowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  disallowedTypes: {
    to: 'disallowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  includeNodeIndex: {
    to: 'includeElementIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  }
}

/**
 * React component to render markdown.
 *
 * @param {ReactMarkdownOptions} options
 * @returns {ReactElement}
 */
function ReactMarkdown(options) {
  for (const key in deprecated) {
    if (react_markdown_own.call(deprecated, key) && react_markdown_own.call(options, key)) {
      const deprecation = deprecated[key]
      console.warn(
        `[react-markdown] Warning: please ${
          deprecation.to ? `use \`${deprecation.to}\` instead of` : 'remove'
        } \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`
      )
      delete deprecated[key]
    }
  }

  const processor = (0,unified_lib/* unified */.l)()
    .use(remark_parse/* default */.Z)
    .use(options.remarkPlugins || [])
    .use(remark_rehype_lib/* default */.Z, {
      ...options.remarkRehypeOptions,
      allowDangerousHtml: true
    })
    .use(options.rehypePlugins || [])
    .use(rehypeFilter, options)

  const file = new lib/* VFile */.k()

  if (typeof options.children === 'string') {
    file.value = options.children
  } else if (options.children !== undefined && options.children !== null) {
    console.warn(
      `[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`
    )
  }

  const hastNode = processor.runSync(processor.parse(file), file)

  if (hastNode.type !== 'root') {
    throw new TypeError('Expected a `root` node')
  }

  /** @type {ReactElement} */
  let result = react.createElement(
    react.Fragment,
    {},
    childrenToReact({options, schema: property_information/* html */.dy, listDepth: 0}, hastNode)
  )

  if (options.className) {
    result = react.createElement('div', {className: options.className}, result)
  }

  return result
}

ReactMarkdown.propTypes = {
  // Core options:
  children: prop_types.string,
  // Layout options:
  className: prop_types.string,
  // Filter options:
  allowElement: prop_types.func,
  allowedElements: prop_types.arrayOf(prop_types.string),
  disallowedElements: prop_types.arrayOf(prop_types.string),
  unwrapDisallowed: prop_types.bool,
  // Plugin options:
  remarkPlugins: prop_types.arrayOf(
    prop_types.oneOfType([
      prop_types.object,
      prop_types.func,
      prop_types.arrayOf(
        prop_types.oneOfType([
          prop_types.bool,
          prop_types.string,
          prop_types.object,
          prop_types.func,
          prop_types.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            prop_types.any
          )
        ])
      )
    ])
  ),
  rehypePlugins: prop_types.arrayOf(
    prop_types.oneOfType([
      prop_types.object,
      prop_types.func,
      prop_types.arrayOf(
        prop_types.oneOfType([
          prop_types.bool,
          prop_types.string,
          prop_types.object,
          prop_types.func,
          prop_types.arrayOf(
            // prettier-ignore
            // type-coverage:ignore-next-line
            prop_types.any
          )
        ])
      )
    ])
  ),
  // Transform options:
  sourcePos: prop_types.bool,
  rawSourcePos: prop_types.bool,
  skipHtml: prop_types.bool,
  includeElementIndex: prop_types.bool,
  transformLinkUri: prop_types.oneOfType([prop_types.func, prop_types.bool]),
  linkTarget: prop_types.oneOfType([prop_types.func, prop_types.string]),
  transformImageUri: prop_types.func,
  components: prop_types.object
}


/***/ })

}]);
//# sourceMappingURL=chunk.npm.react-markdown.js.map