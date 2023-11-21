"use strict";
(globalThis["webpackChunkmask_network"] = globalThis["webpackChunkmask_network"] || []).push([[2284],{

/***/ 32004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ toHast)
});

// UNUSED EXPORTS: defaultHandlers

// EXTERNAL MODULE: ./node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js
var unist_builder = __webpack_require__(17361);
// EXTERNAL MODULE: ./node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js
var unist_util_visit = __webpack_require__(29920);
// EXTERNAL MODULE: ./node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js
var unist_util_position = __webpack_require__(43744);
// EXTERNAL MODULE: ./node_modules/.pnpm/unist-util-generated@2.0.0/node_modules/unist-util-generated/index.js
var unist_util_generated = __webpack_require__(76600);
// EXTERNAL MODULE: ./node_modules/.pnpm/mdast-util-definitions@5.1.1/node_modules/mdast-util-definitions/index.js
var mdast_util_definitions = __webpack_require__(85579);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/traverse.js
/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('./index.js').H} H
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */



const own = {}.hasOwnProperty

/**
 * Transform an unknown node.
 * @type {Handler}
 * @param {MdastNode} node
 */
function unknown(h, node) {
  const data = node.data || {}

  if (
    'value' in node &&
    !(
      own.call(data, 'hName') ||
      own.call(data, 'hProperties') ||
      own.call(data, 'hChildren')
    )
  ) {
    return h.augment(node, (0,unist_builder.u)('text', node.value))
  }

  return h(node, 'div', traverse_all(h, node))
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function one(h, node, parent) {
  const type = node && node.type
  /** @type {Handler} */
  let fn

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  if (own.call(h.handlers, type)) {
    fn = h.handlers[type]
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode
  } else {
    fn = h.unknownHandler
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function returnNode(h, node) {
  // @ts-expect-error: Pass through custom node.
  return 'children' in node ? {...node, children: traverse_all(h, node)} : node
}

/**
 * @param {H} h
 * @param {MdastNode} parent
 */
function traverse_all(h, parent) {
  /** @type {Array<Content>} */
  const values = []

  if ('children' in parent) {
    const nodes = parent.children
    let index = -1

    while (++index < nodes.length) {
      const result = one(h, nodes[index], parent)

      if (result) {
        if (index && nodes[index - 1].type === 'break') {
          if (!Array.isArray(result) && result.type === 'text') {
            result.value = result.value.replace(/^\s+/, '')
          }

          if (!Array.isArray(result) && result.type === 'element') {
            const head = result.children[0]

            if (head && head.type === 'text') {
              head.value = head.value.replace(/^\s+/, '')
            }
          }
        }

        if (Array.isArray(result)) {
          values.push(...result)
        } else {
          values.push(result)
        }
      }
    }
  }

  return values
}

// EXTERNAL MODULE: ./node_modules/.pnpm/micromark-util-sanitize-uri@1.1.0/node_modules/micromark-util-sanitize-uri/index.js
var micromark_util_sanitize_uri = __webpack_require__(66986);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/wrap.js
/**
 * @typedef {import('./index.js').Content} Content
 */



/**
 * Wrap `nodes` with line feeds between each entry.
 * Optionally adds line feeds at the start and end.
 *
 * @param {Array<Content>} nodes
 * @param {boolean} [loose=false]
 * @returns {Array<Content>}
 */
function wrap(nodes, loose) {
  /** @type {Array<Content>} */
  const result = []
  let index = -1

  if (loose) {
    result.push((0,unist_builder.u)('text', '\n'))
  }

  while (++index < nodes.length) {
    if (index) result.push((0,unist_builder.u)('text', '\n'))
    result.push(nodes[index])
  }

  if (loose && nodes.length > 0) {
    result.push((0,unist_builder.u)('text', '\n'))
  }

  return result
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/footer.js
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('./index.js').H} H
 */






/**
 * @param {H} h
 * @returns {Element|null}
 */
function footer(h) {
  let index = -1
  /** @type {Array<ElementContent>} */
  const listItems = []

  while (++index < h.footnoteOrder.length) {
    const def = h.footnoteById[h.footnoteOrder[index].toUpperCase()]

    if (!def) {
      continue
    }

    const content = traverse_all(h, def)
    const id = String(def.identifier)
    const safeId = (0,micromark_util_sanitize_uri/* normalizeUri */.F)(id.toLowerCase())
    let referenceIndex = 0
    /** @type {Array<ElementContent>} */
    const backReferences = []

    while (++referenceIndex <= h.footnoteCounts[id]) {
      /** @type {Element} */
      const backReference = {
        type: 'element',
        tagName: 'a',
        properties: {
          href:
            '#' +
            h.clobberPrefix +
            'fnref-' +
            safeId +
            (referenceIndex > 1 ? '-' + referenceIndex : ''),
          dataFootnoteBackref: true,
          className: ['data-footnote-backref'],
          ariaLabel: h.footnoteBackLabel
        },
        children: [{type: 'text', value: '↩'}]
      }

      if (referenceIndex > 1) {
        backReference.children.push({
          type: 'element',
          tagName: 'sup',
          children: [{type: 'text', value: String(referenceIndex)}]
        })
      }

      if (backReferences.length > 0) {
        backReferences.push({type: 'text', value: ' '})
      }

      backReferences.push(backReference)
    }

    const tail = content[content.length - 1]

    if (tail && tail.type === 'element' && tail.tagName === 'p') {
      const tailTail = tail.children[tail.children.length - 1]
      if (tailTail && tailTail.type === 'text') {
        tailTail.value += ' '
      } else {
        tail.children.push({type: 'text', value: ' '})
      }

      tail.children.push(...backReferences)
    } else {
      content.push(...backReferences)
    }

    /** @type {Element} */
    const listItem = {
      type: 'element',
      tagName: 'li',
      properties: {id: h.clobberPrefix + 'fn-' + safeId},
      children: wrap(content, true)
    }

    if (def.position) {
      listItem.position = def.position
    }

    listItems.push(listItem)
  }

  if (listItems.length === 0) {
    return null
  }

  return {
    type: 'element',
    tagName: 'section',
    properties: {dataFootnotes: true, className: ['footnotes']},
    children: [
      {
        type: 'element',
        tagName: h.footnoteLabelTagName,
        properties: {
          ...JSON.parse(JSON.stringify(h.footnoteLabelProperties)),
          id: 'footnote-label'
        },
        children: [(0,unist_builder.u)('text', h.footnoteLabel)]
      },
      {type: 'text', value: '\n'},
      {
        type: 'element',
        tagName: 'ol',
        properties: {},
        children: wrap(listItems, true)
      },
      {type: 'text', value: '\n'}
    ]
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {Blockquote} node
 */
function blockquote(h, node) {
  return h(node, 'blockquote', wrap(traverse_all(h, node), true))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/break.js
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Break} node
 * @returns {Array<Element|Text>}
 */
function hardBreak(h, node) {
  return [h(node, 'br'), (0,unist_builder.u)('text', '\n')]
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/code.js
/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Code} node
 */
function code(h, node) {
  const value = node.value ? node.value + '\n' : ''
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  /** @type {Properties} */
  const props = {}

  if (lang) {
    props.className = ['language-' + lang]
  }

  const code = h(node, 'code', props, [(0,unist_builder.u)('text', value)])

  if (node.meta) {
    code.data = {meta: node.meta}
  }

  return h(node.position, 'pre', [code])
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/delete.js
/**
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Delete} node
 */
function strikethrough(h, node) {
  return h(node, 'del', traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Emphasis} node
 */
function emphasis(h, node) {
  return h(node, 'em', traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */
function footnoteReference(h, node) {
  const id = String(node.identifier)
  const safeId = (0,micromark_util_sanitize_uri/* normalizeUri */.F)(id.toLowerCase())
  const index = h.footnoteOrder.indexOf(id)
  /** @type {number} */
  let counter

  if (index === -1) {
    h.footnoteOrder.push(id)
    h.footnoteCounts[id] = 1
    counter = h.footnoteOrder.length
  } else {
    h.footnoteCounts[id]++
    counter = index + 1
  }

  const reuseCounter = h.footnoteCounts[id]

  return h(node, 'sup', [
    h(
      node.position,
      'a',
      {
        href: '#' + h.clobberPrefix + 'fn-' + safeId,
        id:
          h.clobberPrefix +
          'fnref-' +
          safeId +
          (reuseCounter > 1 ? '-' + reuseCounter : ''),
        dataFootnoteRef: true,
        ariaDescribedBy: 'footnote-label'
      },
      [(0,unist_builder.u)('text', String(counter))]
    )
  ])
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 *
 * @todo
 *   `footnote` (or “inline note”) are a pandoc footnotes feature (`^[a note]`)
 *   that does not exist in GFM.
 *   We still have support for it, so that things remain working with
 *   `micromark-extension-footnote` and `mdast-util-footnote`, but in the future
 *   we might be able to remove it?
 */



/**
 * @type {Handler}
 * @param {Footnote} node
 */
function footnote(h, node) {
  const footnoteById = h.footnoteById
  let no = 1

  while (no in footnoteById) no++

  const identifier = String(no)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier,
    position: node.position
  })
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/heading.js
/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Heading} node
 */
function heading(h, node) {
  return h(node, 'h' + node.depth, traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/html.js
/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * Return either a `raw` node in dangerous mode, otherwise nothing.
 *
 * @type {Handler}
 * @param {HTML} node
 */
function html(h, node) {
  return h.dangerous ? h.augment(node, (0,unist_builder.u)('raw', node.value)) : null
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/revert.js
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */




/**
 * Return the content of a reference without definition as plain text.
 *
 * @type {Handler}
 * @param {ImageReference|LinkReference} node
 * @returns {Content|Array<Content>}
 */
function revert(h, node) {
  const subtype = node.referenceType
  let suffix = ']'

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return (0,unist_builder.u)('text', '![' + node.alt + suffix)
  }

  const contents = traverse_all(h, node)
  const head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift((0,unist_builder.u)('text', '['))
  }

  const tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push((0,unist_builder.u)('text', suffix))
  }

  return contents
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {ImageReference} node
 */
function imageReference(h, node) {
  const def = h.definition(node.identifier)

  if (!def) {
    return revert(h, node)
  }

  /** @type {Properties} */
  const props = {src: (0,micromark_util_sanitize_uri/* normalizeUri */.F)(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/image.js
/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Image} node
 */
function image_image(h, node) {
  /** @type {Properties} */
  const props = {src: (0,micromark_util_sanitize_uri/* normalizeUri */.F)(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {InlineCode} node
 */
function inlineCode(h, node) {
  return h(node, 'code', [(0,unist_builder.u)('text', node.value.replace(/\r?\n|\r/g, ' '))])
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */





/**
 * @type {Handler}
 * @param {LinkReference} node
 */
function linkReference(h, node) {
  const def = h.definition(node.identifier)

  if (!def) {
    return revert(h, node)
  }

  /** @type {Properties} */
  const props = {href: (0,micromark_util_sanitize_uri/* normalizeUri */.F)(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/link.js
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {Link} node
 */
function link_link(h, node) {
  /** @type {Properties} */
  const props = {href: (0,micromark_util_sanitize_uri/* normalizeUri */.F)(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */




/**
 * @type {Handler}
 * @param {ListItem} node
 * @param {List} parent
 */
function listItem(h, node, parent) {
  const result = traverse_all(h, node)
  const loose = parent ? listLoose(parent) : listItemLoose(node)
  /** @type {Properties} */
  const props = {}
  /** @type {Array<Content>} */
  const wrapped = []

  if (typeof node.checked === 'boolean') {
    /** @type {Element} */
    let paragraph

    if (
      result[0] &&
      result[0].type === 'element' &&
      result[0].tagName === 'p'
    ) {
      paragraph = result[0]
    } else {
      paragraph = h(null, 'p', [])
      result.unshift(paragraph)
    }

    if (paragraph.children.length > 0) {
      paragraph.children.unshift((0,unist_builder.u)('text', ' '))
    }

    paragraph.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item']
  }

  let index = -1

  while (++index < result.length) {
    const child = result[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (
      loose ||
      index !== 0 ||
      child.type !== 'element' ||
      child.tagName !== 'p'
    ) {
      wrapped.push((0,unist_builder.u)('text', '\n'))
    }

    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      wrapped.push(...child.children)
    } else {
      wrapped.push(child)
    }
  }

  const tail = result[result.length - 1]

  // Add a final eol.
  if (tail && (loose || !('tagName' in tail) || tail.tagName !== 'p')) {
    wrapped.push((0,unist_builder.u)('text', '\n'))
  }

  return h(node, 'li', props, wrapped)
}

/**
 * @param {List} node
 * @return {Boolean}
 */
function listLoose(node) {
  let loose = node.spread
  const children = node.children
  let index = -1

  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index])
  }

  return Boolean(loose)
}

/**
 * @param {ListItem} node
 * @return {Boolean}
 */
function listItemLoose(node) {
  const spread = node.spread

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/list.js
/**
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {List} node
 * @returns {Element}
 */
function list(h, node) {
  /** @type {Properties} */
  const props = {}
  const name = node.ordered ? 'ol' : 'ul'
  const items = traverse_all(h, node)
  let index = -1

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  // Like GitHub, add a class for custom styling.
  while (++index < items.length) {
    const item = items[index]

    if (
      item.type === 'element' &&
      item.tagName === 'li' &&
      item.properties &&
      Array.isArray(item.properties.className) &&
      item.properties.className.includes('task-list-item')
    ) {
      props.className = ['contains-task-list']
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Paragraph} node
 */
function paragraph(h, node) {
  return h(node, 'p', traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/root.js
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../index.js').Handler} Handler
 */





/**
 * @type {Handler}
 * @param {Root} node
 */
function root(h, node) {
  // @ts-expect-error `root`s are also fine.
  return h.augment(node, (0,unist_builder.u)('root', wrap(traverse_all(h, node))))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/strong.js
/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../index.js').Handler} Handler
 */



/**
 * @type {Handler}
 * @param {Strong} node
 */
function strong(h, node) {
  return h(node, 'strong', traverse_all(h, node))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/table.js
/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */





/**
 * @type {Handler}
 * @param {Table} node
 */
function table(h, node) {
  const rows = node.children
  let index = -1
  const align = node.align || []
  /** @type {Array<Element>} */
  const result = []

  while (++index < rows.length) {
    const row = rows[index].children
    const name = index === 0 ? 'th' : 'td'
    /** @type {Array<Content>} */
    const out = []
    let cellIndex = -1
    const length = node.align ? align.length : row.length

    while (++cellIndex < length) {
      const cell = row[cellIndex]
      out.push(
        h(cell, name, {align: align[cellIndex]}, cell ? traverse_all(h, cell) : [])
      )
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: (0,unist_util_position/* pointStart */.Pk)(result[1]),
                end: (0,unist_util_position/* pointEnd */.rb)(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  )
}

// EXTERNAL MODULE: ./node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
var trim_lines = __webpack_require__(11315);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/text.js
/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../index.js').Handler} Handler
 */




/**
 * @type {Handler}
 * @param {Text} node
 */
function text_text(h, node) {
  return h.augment(node, (0,unist_builder.u)('text', (0,trim_lines/* trimLines */.j)(String(node.value))))
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ThematicBreak} [node]
 * @returns {Element}
 */
function thematicBreak(h, node) {
  return h(node, 'hr')
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/index.js























const handlers = {
  blockquote: blockquote,
  break: hardBreak,
  code: code,
  delete: strikethrough,
  emphasis: emphasis,
  footnoteReference: footnoteReference,
  footnote: footnote,
  heading: heading,
  html: html,
  imageReference: imageReference,
  image: image_image,
  inlineCode: inlineCode,
  linkReference: linkReference,
  link: link_link,
  listItem: listItem,
  list: list,
  paragraph: paragraph,
  root: root,
  strong: strong,
  table: table,
  text: text_text,
  thematicBreak: thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/index.js
/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('hast').Root|import('hast').Parent['children'][number]} HastNode
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} Content
 * @typedef {import('unist-util-position').PositionLike} PositionLike
 *
 * @typedef EmbeddedHastFields
 * @property {string} [hName]
 *   Defines the tag name of an element.
 * @property {Properties} [hProperties]
 *   Defines the properties of an element.
 * @property {Array<Content>} [hChildren]
 *   Defines the (hast) children of an element.
 *
 * @typedef {Record<string, unknown> & EmbeddedHastFields} Data
 *   unist data with embedded hast fields.
 *
 * @typedef {MdastNode & {data?: Data}} NodeWithData
 *   unist node with embedded hast data.
 *
 * @callback Handler
 *   Handle a node.
 * @param {H} h
 *   Handle context.
 * @param {any} node
 *   mdast node to handle.
 * @param {Parent|null} parent
 *   Parent of `node`.
 * @returns {Content|Array<Content>|null|undefined}
 *   hast node.
 *
 * @callback HFunctionProps
 * @param {MdastNode|PositionLike|null|undefined} node
 *   mdast node or unist position.
 * @param {string} tagName
 *   HTML tag name.
 * @param {Properties} props
 *   Properties.
 * @param {Array<Content>?} [children]
 *   hast content.
 * @returns {Element}
 *   Compiled element.
 *
 * @callback HFunctionNoProps
 * @param {MdastNode|PositionLike|null|undefined} node
 *   mdast node or unist position.
 * @param {string} tagName
 *   HTML tag name.
 * @param {Array<Content>?} [children]
 *   hast content
 * @returns {Element}
 *   Compiled element.
 *
 * @typedef HFields
 * @property {boolean} dangerous
 *   Whether HTML is allowed.
 * @property {string} clobberPrefix
 *   Prefix to use to prevent DOM clobbering.
 * @property {string} footnoteLabel
 *   Label to use to introduce the footnote section.
 * @property {string} footnoteLabelTagName
 *   HTML used for the footnote label.
 * @property {Properties} footnoteLabelProperties
 *   Properties on the HTML tag used for the footnote label.
 * @property {string} footnoteBackLabel
 *   Label to use to go back to a footnote call from the footnote section.
 * @property {(identifier: string) => Definition|null} definition
 *   Definition cache.
 * @property {Record<string, FootnoteDefinition>} footnoteById
 *   Footnote cache.
 * @property {Array<string>} footnoteOrder
 *   Order in which footnotes occur.
 * @property {Record<string, number>} footnoteCounts
 *   Counts the same footnote was used.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {Handler} unknownHandler
 *   Handler for any none not in `passThrough` or otherwise handled.
 * @property {(left: NodeWithData|PositionLike|null|undefined, right: Content) => Content} augment
 *   Like `h` but lower-level and usable on non-elements.
 * @property {Array<string>} passThrough
 *   List of node types to pass through untouched (except for their children).
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean} [allowDangerousHtml=false]
 *   Whether to allow `html` nodes and inject them as `raw` HTML.
 * @property {string} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` attribute to prevent it from *clobbering*.
 *   attributes.
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id=x></p>
 *   <script>alert(x)</script>
 *   ```
 *
 *   Elements by their ID are made available in browsers on the `window` object.
 *   Using a prefix prevents this from being a problem.
 * @property {string} [footnoteLabel='Footnotes']
 *   Label to use for the footnotes section.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 * @property {string} [footnoteLabelTagName='h2']
 *   HTML tag to use for the footnote label.
 *   Can be changed to match your document structure and play well with your choice of css.
 * @property {Properties} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label.
 *   A 'sr-only' class is added by default to hide this from sighted users.
 *   Change it to make the label visible, or add classes for other purposes.
 * @property {string} [footnoteBackLabel='Back to content']
 *   Label to use from backreferences back to their footnote call.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 * @property {Handlers} [handlers]
 *   Object mapping mdast nodes to functions handling them
 * @property {Array<string>} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast
 * @property {Handler} [unknownHandler]
 *   Handler for all unknown nodes.
 *
 * @typedef {Record<string, Handler>} Handlers
 *   Map of node types to handlers
 * @typedef {HFunctionProps & HFunctionNoProps & HFields} H
 *   Handle context
 */










const lib_own = {}.hasOwnProperty

/**
 * Turn mdast into hast.
 *
 * @param {MdastNode} tree
 *   mdast node.
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {H}
 *   `h` function.
 */
function factory(tree, options) {
  const settings = options || {}
  const dangerous = settings.allowDangerousHtml || false
  /** @type {Record<string, FootnoteDefinition>} */
  const footnoteById = {}

  h.dangerous = dangerous
  h.clobberPrefix =
    settings.clobberPrefix === undefined || settings.clobberPrefix === null
      ? 'user-content-'
      : settings.clobberPrefix
  h.footnoteLabel = settings.footnoteLabel || 'Footnotes'
  h.footnoteLabelTagName = settings.footnoteLabelTagName || 'h2'
  h.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ['sr-only']
  }
  h.footnoteBackLabel = settings.footnoteBackLabel || 'Back to content'
  h.definition = (0,mdast_util_definitions/* definitions */.C)(tree)
  h.footnoteById = footnoteById
  /** @type {Array<string>} */
  h.footnoteOrder = []
  /** @type {Record<string, number>} */
  h.footnoteCounts = {}
  h.augment = augment
  h.handlers = {...handlers, ...settings.handlers}
  h.unknownHandler = settings.unknownHandler
  h.passThrough = settings.passThrough

  ;(0,unist_util_visit/* visit */.Vn)(tree, 'footnoteDefinition', (definition) => {
    const id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!lib_own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  })

  // @ts-expect-error Hush, it’s fine!
  return h

  /**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   *
   * @param {(NodeWithData|PositionLike)?} left
   * @param {Content} right
   * @returns {Content}
   */
  function augment(left, right) {
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && 'data' in left && left.data) {
      /** @type {Data} */
      const data = left.data

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          }
        }

        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = {...right.properties, ...data.hProperties}
      }

      if ('children' in right && right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    if (left) {
      const ctx = 'type' in left ? left : {position: left}

      if (!(0,unist_util_generated/* generated */.o)(ctx)) {
        // @ts-expect-error: fine.
        right.position = {start: (0,unist_util_position/* pointStart */.Pk)(ctx), end: (0,unist_util_position/* pointEnd */.rb)(ctx)}
      }
    }

    return right
  }

  /**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   */
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props
      props = {}
    }

    // @ts-expect-error augmenting an element yields an element.
    return augment(node, {
      type: 'element',
      tagName,
      properties: props || {},
      children: children || []
    })
  }
}

/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */
function toHast(tree, options) {
  const h = factory(tree, options)
  const node = one(h, tree, null)
  const foot = footer(h)

  if (foot) {
    // @ts-expect-error If there’s a footer, there were definitions, meaning block
    // content.
    // So assume `node` is a parent node.
    node.children.push((0,unist_builder.u)('text', '\n'), foot)
  }

  return Array.isArray(node) ? {type: 'root', children: node} : node
}




/***/ })

}]);
//# sourceMappingURL=chunk.npm.mdast-util-to-hast.js.map