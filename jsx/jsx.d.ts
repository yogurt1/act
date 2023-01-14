/**
 * stolen from https://github.dev/solidjs/solid/blob/49793e9452ecd034d4d2ef5f95108f5d2ff4134a/packages/solid/h/jsx-runtime/src/jsx.d.ts
 */

import * as csstype from 'csstype'

type DOMElement = Element

export namespace JSX {
  type ActMaybe<T = unknown> = { subscribe: () => T } | T
  type Element =
    | ActMaybe
    | Node
    | ArrayElement
    | FunctionElement
    | (string & {})
    | number
    | boolean
    | null
    | undefined
  interface ArrayElement extends Array<Element> {}
  interface FunctionElement {
    (): Element
  }
  interface ElementClass {
    // empty, libs can define requirements downstream
  }
  interface ElementAttributesProperty {
    // empty, libs can define requirements downstream
  }
  interface ElementChildrenAttribute {
    children: {}
  }
  interface EventHandler<T, E extends Event> {
    (
      e: E & {
        currentTarget: T
        target: DOMElement
      },
    ): void
  }
  interface BoundEventHandler<T, E extends Event> {
    0: (
      data: any,
      e: E & {
        currentTarget: T
        target: DOMElement
      },
    ) => void
    1: any
  }
  type EventHandlerUnion<T, E extends Event> =
    | EventHandler<T, E>
    | BoundEventHandler<T, E>
  interface IntrinsicAttributes {
    ref?: unknown | ((e: unknown) => void)
  }
  type Accessor<T> = () => T
  interface Directives {}
  interface DirectiveFunctions {
    [x: string]: (el: Element, accessor: Accessor<any>) => void
  }
  interface ExplicitProperties {}
  interface ExplicitAttributes {}
  interface CustomEvents {}
  interface CustomCaptureEvents {}
  interface DOMAttributes<T> extends CustomEventHandlersLowerCase<T> {
    children?: Element
    innerHTML?: string
    innerText?: string | number
    textContent?: string | number
    // lower case events
    oncopy?: EventHandlerUnion<T, ClipboardEvent>
    oncut?: EventHandlerUnion<T, ClipboardEvent>
    onpaste?: EventHandlerUnion<T, ClipboardEvent>
    oncompositionend?: EventHandlerUnion<T, CompositionEvent>
    oncompositionstart?: EventHandlerUnion<T, CompositionEvent>
    oncompositionupdate?: EventHandlerUnion<T, CompositionEvent>
    onfocusout?: EventHandlerUnion<T, FocusEvent>
    onfocusin?: EventHandlerUnion<T, FocusEvent>
    onencrypted?: EventHandlerUnion<T, Event>
    ondragexit?: EventHandlerUnion<T, DragEvent>
  }
  /**
   * @type {GlobalEventHandlers}
   */
  interface CustomEventHandlersLowerCase<T> {
    onabort?: EventHandlerUnion<T, Event>
    onanimationend?: EventHandlerUnion<T, AnimationEvent>
    onanimationiteration?: EventHandlerUnion<T, AnimationEvent>
    onanimationstart?: EventHandlerUnion<T, AnimationEvent>
    onauxclick?: EventHandlerUnion<T, MouseEvent>
    onbeforeinput?: EventHandlerUnion<T, InputEvent>
    onblur?: EventHandlerUnion<T, FocusEvent>
    oncanplay?: EventHandlerUnion<T, Event>
    oncanplaythrough?: EventHandlerUnion<T, Event>
    onchange?: EventHandlerUnion<T, Event>
    onclick?: EventHandlerUnion<T, MouseEvent>
    oncontextmenu?: EventHandlerUnion<T, MouseEvent>
    ondblclick?: EventHandlerUnion<T, MouseEvent>
    ondrag?: EventHandlerUnion<T, DragEvent>
    ondragend?: EventHandlerUnion<T, DragEvent>
    ondragenter?: EventHandlerUnion<T, DragEvent>
    ondragleave?: EventHandlerUnion<T, DragEvent>
    ondragover?: EventHandlerUnion<T, DragEvent>
    ondragstart?: EventHandlerUnion<T, DragEvent>
    ondrop?: EventHandlerUnion<T, DragEvent>
    ondurationchange?: EventHandlerUnion<T, Event>
    onemptied?: EventHandlerUnion<T, Event>
    onended?: EventHandlerUnion<T, Event>
    onerror?: EventHandlerUnion<T, Event>
    onfocus?: EventHandlerUnion<T, FocusEvent>
    ongotpointercapture?: EventHandlerUnion<T, PointerEvent>
    oninput?: EventHandlerUnion<T, InputEvent>
    oninvalid?: EventHandlerUnion<T, Event>
    onkeydown?: EventHandlerUnion<T, KeyboardEvent>
    onkeypress?: EventHandlerUnion<T, KeyboardEvent>
    onkeyup?: EventHandlerUnion<T, KeyboardEvent>
    onload?: EventHandlerUnion<T, Event>
    onloadeddata?: EventHandlerUnion<T, Event>
    onloadedmetadata?: EventHandlerUnion<T, Event>
    onloadstart?: EventHandlerUnion<T, Event>
    onlostpointercapture?: EventHandlerUnion<T, PointerEvent>
    onmousedown?: EventHandlerUnion<T, MouseEvent>
    onmouseenter?: EventHandlerUnion<T, MouseEvent>
    onmouseleave?: EventHandlerUnion<T, MouseEvent>
    onmousemove?: EventHandlerUnion<T, MouseEvent>
    onmouseout?: EventHandlerUnion<T, MouseEvent>
    onmouseover?: EventHandlerUnion<T, MouseEvent>
    onmouseup?: EventHandlerUnion<T, MouseEvent>
    onpause?: EventHandlerUnion<T, Event>
    onplay?: EventHandlerUnion<T, Event>
    onplaying?: EventHandlerUnion<T, Event>
    onpointercancel?: EventHandlerUnion<T, PointerEvent>
    onpointerdown?: EventHandlerUnion<T, PointerEvent>
    onpointerenter?: EventHandlerUnion<T, PointerEvent>
    onpointerleave?: EventHandlerUnion<T, PointerEvent>
    onpointermove?: EventHandlerUnion<T, PointerEvent>
    onpointerout?: EventHandlerUnion<T, PointerEvent>
    onpointerover?: EventHandlerUnion<T, PointerEvent>
    onpointerup?: EventHandlerUnion<T, PointerEvent>
    onprogress?: EventHandlerUnion<T, Event>
    onratechange?: EventHandlerUnion<T, Event>
    onreset?: EventHandlerUnion<T, Event>
    onscroll?: EventHandlerUnion<T, UIEvent>
    onseeked?: EventHandlerUnion<T, Event>
    onseeking?: EventHandlerUnion<T, Event>
    onselect?: EventHandlerUnion<T, UIEvent>
    onstalled?: EventHandlerUnion<T, Event>
    onsubmit?: EventHandlerUnion<
      T,
      Event & {
        submitter: HTMLElement
      }
    >
    onsuspend?: EventHandlerUnion<T, Event>
    ontimeupdate?: EventHandlerUnion<T, Event>
    ontouchcancel?: EventHandlerUnion<T, TouchEvent>
    ontouchend?: EventHandlerUnion<T, TouchEvent>
    ontouchmove?: EventHandlerUnion<T, TouchEvent>
    ontouchstart?: EventHandlerUnion<T, TouchEvent>
    ontransitionend?: EventHandlerUnion<T, TransitionEvent>
    onvolumechange?: EventHandlerUnion<T, Event>
    onwaiting?: EventHandlerUnion<T, Event>
    onwheel?: EventHandlerUnion<T, WheelEvent>
  }

  interface CSSProperties extends csstype.PropertiesHyphen {
    // Override
    [key: `-${string}`]: string | number | undefined
  }

  type HTMLAutocapitalize =
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters'
  type HTMLDir = 'ltr' | 'rtl' | 'auto'
  type HTMLFormEncType =
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain'
  type HTMLFormMethod = 'post' | 'get' | 'dialog'
  type HTMLCrossorigin = 'anonymous' | 'use-credentials' | ''
  type HTMLReferrerPolicy =
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  type HTMLIframeSandbox =
    | 'allow-downloads-without-user-activation'
    | 'allow-downloads'
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-orientation-lock'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-presentation'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-storage-access-by-user-activation'
    | 'allow-top-navigation'
    | 'allow-top-navigation-by-user-activation'
  type HTMLLinkAs =
    | 'audio'
    | 'document'
    | 'embed'
    | 'fetch'
    | 'font'
    | 'image'
    | 'object'
    | 'script'
    | 'style'
    | 'track'
    | 'video'
    | 'worker'

  // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
  interface AriaAttributes {
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    'aria-activedescendant'?: string
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
    'aria-atomic'?: boolean | 'false' | 'true'
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    'aria-busy'?: boolean | 'false' | 'true'
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see aria-pressed @see aria-selected.
     */
    'aria-checked'?: boolean | 'false' | 'mixed' | 'true'
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see aria-colindex.
     */
    'aria-colcount'?: number | string
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see aria-colcount @see aria-colspan.
     */
    'aria-colindex'?: number | string
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-colindex @see aria-rowspan.
     */
    'aria-colspan'?: number | string
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see aria-owns.
     */
    'aria-controls'?: string
    /** Indicates the element that represents the current item within a container or set of related elements. */
    'aria-current'?:
      | boolean
      | 'false'
      | 'true'
      | 'page'
      | 'step'
      | 'location'
      | 'date'
      | 'time'
    /**
     * Identifies the element (or elements) that describes the object.
     * @see aria-labelledby
     */
    'aria-describedby'?: string
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see aria-describedby.
     */
    'aria-details'?: string
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see aria-hidden @see aria-readonly.
     */
    'aria-disabled'?: boolean | 'false' | 'true'
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
    /**
     * Identifies the element that provides an error message for the object.
     * @see aria-invalid @see aria-describedby.
     */
    'aria-errormessage'?: string
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    'aria-expanded'?: boolean | 'false' | 'true'
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    'aria-flowto'?: string
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    'aria-grabbed'?: boolean | 'false' | 'true'
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    'aria-haspopup'?:
      | boolean
      | 'false'
      | 'true'
      | 'menu'
      | 'listbox'
      | 'tree'
      | 'grid'
      | 'dialog'
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see aria-disabled.
     */
    'aria-hidden'?: boolean | 'false' | 'true'
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see aria-errormessage.
     */
    'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    'aria-keyshortcuts'?: string
    /**
     * Defines a string value that labels the current element.
     * @see aria-labelledby.
     */
    'aria-label'?: string
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see aria-describedby.
     */
    'aria-labelledby'?: string
    /** Defines the hierarchical level of an element within a structure. */
    'aria-level'?: number | string
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    'aria-live'?: 'off' | 'assertive' | 'polite'
    /** Indicates whether an element is modal when displayed. */
    'aria-modal'?: boolean | 'false' | 'true'
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    'aria-multiline'?: boolean | 'false' | 'true'
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    'aria-multiselectable'?: boolean | 'false' | 'true'
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    'aria-orientation'?: 'horizontal' | 'vertical'
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see aria-controls.
     */
    'aria-owns'?: string
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    'aria-placeholder'?: string
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-setsize.
     */
    'aria-posinset'?: number | string
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see aria-checked @see aria-selected.
     */
    'aria-pressed'?: boolean | 'false' | 'mixed' | 'true'
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see aria-disabled.
     */
    'aria-readonly'?: boolean | 'false' | 'true'
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see aria-atomic.
     */
    'aria-relevant'?:
      | 'additions'
      | 'additions removals'
      | 'additions text'
      | 'all'
      | 'removals'
      | 'removals additions'
      | 'removals text'
      | 'text'
      | 'text additions'
      | 'text removals'
    /** Indicates that user input is required on the element before a form may be submitted. */
    'aria-required'?: boolean | 'false' | 'true'
    /** Defines a human-readable, author-localized description for the role of an element. */
    'aria-roledescription'?: string
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see aria-rowindex.
     */
    'aria-rowcount'?: number | string
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see aria-rowcount @see aria-rowspan.
     */
    'aria-rowindex'?: number | string
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see aria-rowindex @see aria-colspan.
     */
    'aria-rowspan'?: number | string
    /**
     * Indicates the current "selected" state of various widgets.
     * @see aria-checked @see aria-pressed.
     */
    'aria-selected'?: boolean | 'false' | 'true'
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see aria-posinset.
     */
    'aria-setsize'?: number | string
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
    /** Defines the maximum allowed value for a range widget. */
    'aria-valuemax'?: number | string
    /** Defines the minimum allowed value for a range widget. */
    'aria-valuemin'?: number | string
    /**
     * Defines the current value for a range widget.
     * @see aria-valuetext.
     */
    'aria-valuenow'?: number | string
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    'aria-valuetext'?: string
    role?: ActMaybe<
      | 'alert'
      | 'alertdialog'
      | 'application'
      | 'article'
      | 'banner'
      | 'button'
      | 'cell'
      | 'checkbox'
      | 'columnheader'
      | 'combobox'
      | 'complementary'
      | 'contentinfo'
      | 'definition'
      | 'dialog'
      | 'directory'
      | 'document'
      | 'feed'
      | 'figure'
      | 'form'
      | 'grid'
      | 'gridcell'
      | 'group'
      | 'heading'
      | 'img'
      | 'link'
      | 'list'
      | 'listbox'
      | 'listitem'
      | 'log'
      | 'main'
      | 'marquee'
      | 'math'
      | 'menu'
      | 'menubar'
      | 'menuitem'
      | 'menuitemcheckbox'
      | 'menuitemradio'
      | 'meter'
      | 'navigation'
      | 'none'
      | 'note'
      | 'option'
      | 'presentation'
      | 'progressbar'
      | 'radio'
      | 'radiogroup'
      | 'region'
      | 'row'
      | 'rowgroup'
      | 'rowheader'
      | 'scrollbar'
      | 'search'
      | 'searchbox'
      | 'separator'
      | 'slider'
      | 'spinbutton'
      | 'status'
      | 'switch'
      | 'tab'
      | 'table'
      | 'tablist'
      | 'tabpanel'
      | 'term'
      | 'textbox'
      | 'timer'
      | 'toolbar'
      | 'tooltip'
      | 'tree'
      | 'treegrid'
      | 'treeitem'
    >
  }

  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    accessKey?: ActMaybe<string>
    class?: ActMaybe<string> | undefined
    contenteditable?: ActMaybe<boolean | 'inherit'>
    contextmenu?: ActMaybe<string>
    dir?: ActMaybe<HTMLDir>
    draggable?: ActMaybe<boolean>
    hidden?: ActMaybe<boolean>
    id?: ActMaybe<string>
    lang?: ActMaybe<string>
    spellcheck?: ActMaybe<boolean>
    style?: ActMaybe<CSSProperties | string>
    tabindex?: ActMaybe<number | string>
    title?: ActMaybe<string>
    translate?: ActMaybe<'yes' | 'no'>
    about?: ActMaybe<string>
    datatype?: ActMaybe<string>
    inlist?: ActMaybe<any>
    prefix?: ActMaybe<string>
    property?: ActMaybe<string>
    resource?: ActMaybe<string>
    typeof?: ActMaybe<string>
    vocab?: ActMaybe<string>
    autocapitalize?: ActMaybe<HTMLAutocapitalize>
    slot?: ActMaybe<string>
    color?: ActMaybe<string>
    itemprop?: ActMaybe<string>
    itemscope?: ActMaybe<boolean>
    itemtype?: ActMaybe<string>
    itemid?: ActMaybe<string>
    itemref?: ActMaybe<string>
    part?: ActMaybe<string>
    exportparts?: ActMaybe<string>
    inputmode?: ActMaybe<
      | 'none'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | 'search'
    >
    contentEditable?: ActMaybe<boolean | 'inherit'>
    contextMenu?: ActMaybe<string>
    tabIndex?: ActMaybe<number | string>
    autoCapitalize?: ActMaybe<HTMLAutocapitalize>
    itemProp?: ActMaybe<string>
    itemScope?: ActMaybe<boolean>
    itemType?: ActMaybe<string>
    itemId?: ActMaybe<string>
    itemRef?: ActMaybe<string>
    exportParts?: ActMaybe<string>
    inputMode?: ActMaybe<
      | 'none'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | 'search'
    >
  }
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    download?: ActMaybe<any>
    href?: ActMaybe<string>
    hreflang?: ActMaybe<string>
    media?: ActMaybe<string>
    ping?: ActMaybe<string>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    rel?: ActMaybe<string>
    target?: ActMaybe<string>
    type?: ActMaybe<string>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
  }
  interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}
  interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: ActMaybe<string>
    coords?: ActMaybe<string>
    download?: ActMaybe<any>
    href?: ActMaybe<string>
    hreflang?: ActMaybe<string>
    ping?: ActMaybe<string>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    rel?: ActMaybe<string>
    shape?: ActMaybe<'rect' | 'circle' | 'poly' | 'default'>
    target?: ActMaybe<string>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
  }
  interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: ActMaybe<string>
    target?: ActMaybe<string>
  }
  interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: ActMaybe<string>
  }
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    autofocus?: ActMaybe<boolean>
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    formaction?: ActMaybe<string>
    formenctype?: ActMaybe<HTMLFormEncType>
    formmethod?: ActMaybe<HTMLFormMethod>
    formnovalidate?: ActMaybe<boolean>
    formtarget?: ActMaybe<string>
    name?: ActMaybe<string>
    type?: ActMaybe<'submit' | 'reset' | 'button'>
    value?: ActMaybe<string>
    formAction?: ActMaybe<string>
    formEnctype?: ActMaybe<HTMLFormEncType>
    formMethod?: ActMaybe<HTMLFormMethod>
    formNoValidate?: ActMaybe<boolean>
    formTarget?: ActMaybe<string>
  }
  interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
    width?: ActMaybe<number | string>
    height?: ActMaybe<number | string>
  }
  interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: ActMaybe<number | string>
    width?: ActMaybe<number | string>
  }
  interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    span?: ActMaybe<number | string>
  }
  interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: ActMaybe<string | string[] | number>
  }
  interface DetailsHtmlAttributes<T> extends HTMLAttributes<T> {
    open?: ActMaybe<boolean>
    onToggle?: EventHandlerUnion<T, Event>
    ontoggle?: EventHandlerUnion<T, Event>
  }
  interface DialogHtmlAttributes<T> extends HTMLAttributes<T> {
    open?: ActMaybe<boolean>
  }
  interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
    height?: ActMaybe<number | string>
    src?: ActMaybe<string>
    type?: ActMaybe<string>
    width?: ActMaybe<number | string>
  }
  interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    name?: ActMaybe<string>
  }
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    acceptcharset?: ActMaybe<string>
    action?: ActMaybe<string>
    autocomplete?: ActMaybe<string>
    encoding?: ActMaybe<HTMLFormEncType>
    enctype?: ActMaybe<HTMLFormEncType>
    method?: ActMaybe<HTMLFormMethod>
    name?: ActMaybe<string>
    novalidate?: ActMaybe<boolean>
    target?: ActMaybe<string>
    acceptCharset?: ActMaybe<string>
    noValidate?: ActMaybe<boolean>
  }
  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    allow?: ActMaybe<string>
    allowfullscreen?: ActMaybe<boolean>
    height?: ActMaybe<number | string>
    name?: ActMaybe<string>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    sandbox?: HTMLIframeSandbox | string
    src?: ActMaybe<string>
    srcdoc?: ActMaybe<string>
    width?: ActMaybe<number | string>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
  }
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    alt?: ActMaybe<string>
    crossorigin?: ActMaybe<HTMLCrossorigin>
    decoding?: ActMaybe<'sync' | 'async' | 'auto'>
    height?: ActMaybe<number | string>
    ismap?: ActMaybe<boolean>
    isMap?: ActMaybe<boolean>
    loading?: ActMaybe<'eager' | 'lazy'>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
    sizes?: ActMaybe<string>
    src?: ActMaybe<string>
    srcset?: ActMaybe<string>
    srcSet?: ActMaybe<string>
    usemap?: ActMaybe<string>
    useMap?: ActMaybe<string>
    width?: ActMaybe<number | string>
    crossOrigin?: ActMaybe<HTMLCrossorigin>
  }
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    accept?: ActMaybe<string>
    alt?: ActMaybe<string>
    autocomplete?: ActMaybe<string>
    autofocus?: ActMaybe<boolean>
    capture?: ActMaybe<boolean | string>
    checked?: ActMaybe<boolean>
    crossorigin?: ActMaybe<HTMLCrossorigin>
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    formaction?: ActMaybe<string>
    formenctype?: ActMaybe<HTMLFormEncType>
    formmethod?: ActMaybe<HTMLFormMethod>
    formnovalidate?: ActMaybe<boolean>
    formtarget?: ActMaybe<string>
    height?: ActMaybe<number | string>
    list?: ActMaybe<string>
    max?: ActMaybe<number | string>
    maxlength?: ActMaybe<number | string>
    min?: ActMaybe<number | string>
    minlength?: ActMaybe<number | string>
    multiple?: ActMaybe<boolean>
    name?: ActMaybe<string>
    pattern?: ActMaybe<string>
    placeholder?: ActMaybe<string>
    readonly?: ActMaybe<boolean>
    required?: ActMaybe<boolean>
    size?: ActMaybe<number | string>
    src?: ActMaybe<string>
    step?: ActMaybe<number | string>
    type?: ActMaybe<string>
    value?: ActMaybe<string | string[] | number>
    width?: ActMaybe<number | string>
    crossOrigin?: ActMaybe<HTMLCrossorigin>
    formAction?: ActMaybe<string>
    formEnctype?: ActMaybe<HTMLFormEncType>
    formMethod?: ActMaybe<HTMLFormMethod>
    formNoValidate?: ActMaybe<boolean>
    formTarget?: ActMaybe<string>
    maxLength?: ActMaybe<number | string>
    minLength?: ActMaybe<number | string>
    readOnly?: ActMaybe<boolean>
  }
  interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: ActMaybe<string>
    dateTime?: ActMaybe<string>
  }
  interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
    autofocus?: ActMaybe<boolean>
    challenge?: ActMaybe<string>
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    keytype?: ActMaybe<string>
    keyparams?: ActMaybe<string>
    name?: ActMaybe<string>
  }
  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    for?: ActMaybe<string>
    form?: ActMaybe<string>
  }
  interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: ActMaybe<number | string>
  }
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    as?: ActMaybe<HTMLLinkAs>
    crossorigin?: ActMaybe<HTMLCrossorigin>
    disabled?: ActMaybe<boolean>
    href?: ActMaybe<string>
    hreflang?: ActMaybe<string>
    integrity?: ActMaybe<string>
    media?: ActMaybe<string>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    rel?: ActMaybe<string>
    sizes?: ActMaybe<string>
    type?: ActMaybe<string>
    crossOrigin?: ActMaybe<HTMLCrossorigin>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
  }
  interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: ActMaybe<string>
  }
  interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
    autoplay?: ActMaybe<boolean>
    controls?: ActMaybe<boolean>
    crossorigin?: ActMaybe<HTMLCrossorigin>
    loop?: ActMaybe<boolean>
    mediagroup?: ActMaybe<string>
    muted?: ActMaybe<boolean>
    preload?: ActMaybe<'none' | 'metadata' | 'auto' | ''>
    src?: ActMaybe<string>
    crossOrigin?: ActMaybe<HTMLCrossorigin>
    mediaGroup?: ActMaybe<string>
  }
  interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
    label?: ActMaybe<string>
    type?: ActMaybe<'context' | 'toolbar'>
  }
  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    charset?: ActMaybe<string>
    content?: ActMaybe<string>
    httpequiv?: ActMaybe<string>
    name?: ActMaybe<string>
    httpEquiv?: ActMaybe<string>
  }
  interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: ActMaybe<string>
    high?: ActMaybe<number | string>
    low?: ActMaybe<number | string>
    max?: ActMaybe<number | string>
    min?: ActMaybe<number | string>
    optimum?: ActMaybe<number | string>
    value?: ActMaybe<string | string[] | number>
  }
  interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
    cite?: ActMaybe<string>
  }
  interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
    data?: ActMaybe<string>
    form?: ActMaybe<string>
    height?: ActMaybe<number | string>
    name?: ActMaybe<string>
    type?: ActMaybe<string>
    usemap?: ActMaybe<string>
    width?: ActMaybe<number | string>
    useMap?: ActMaybe<string>
  }
  interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    reversed?: ActMaybe<boolean>
    start?: ActMaybe<number | string>
    type?: ActMaybe<'1' | 'a' | 'A' | 'i' | 'I'>
  }
  interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: ActMaybe<boolean>
    label?: ActMaybe<string>
  }
  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    disabled?: ActMaybe<boolean>
    label?: ActMaybe<string>
    selected?: ActMaybe<boolean>
    value?: ActMaybe<string | string[] | number>
  }
  interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
    form?: ActMaybe<string>
    for?: ActMaybe<string>
    name?: ActMaybe<string>
  }
  interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
    name?: ActMaybe<string>
    value?: ActMaybe<string | string[] | number>
  }
  interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
    max?: ActMaybe<number | string>
    value?: ActMaybe<string | string[] | number>
  }
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    async?: ActMaybe<boolean>
    charset?: ActMaybe<string>
    crossorigin?: ActMaybe<HTMLCrossorigin>
    defer?: ActMaybe<boolean>
    integrity?: ActMaybe<string>
    nomodule?: ActMaybe<boolean>
    nonce?: ActMaybe<string>
    referrerpolicy?: ActMaybe<HTMLReferrerPolicy>
    src?: ActMaybe<string>
    type?: ActMaybe<string>
    crossOrigin?: ActMaybe<HTMLCrossorigin>
    noModule?: ActMaybe<boolean>
    referrerPolicy?: ActMaybe<HTMLReferrerPolicy>
  }
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    autocomplete?: ActMaybe<string>
    autofocus?: ActMaybe<boolean>
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    multiple?: ActMaybe<boolean>
    name?: ActMaybe<string>
    required?: ActMaybe<boolean>
    size?: ActMaybe<number | string>
    value?: ActMaybe<string | string[] | number>
  }
  interface HTMLSlotElementAttributes<T = HTMLSlotElement>
    extends HTMLAttributes<T> {
    name?: ActMaybe<string>
  }
  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: ActMaybe<string>
    sizes?: ActMaybe<string>
    src?: ActMaybe<string>
    srcset?: ActMaybe<string>
    type?: ActMaybe<string>
  }
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    media?: ActMaybe<string>
    nonce?: ActMaybe<string>
    scoped?: ActMaybe<boolean>
    type?: ActMaybe<string>
  }
  interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
    colspan?: ActMaybe<number | string>
    headers?: ActMaybe<string>
    rowspan?: ActMaybe<number | string>
    colSpan?: ActMaybe<number | string>
    rowSpan?: ActMaybe<number | string>
  }
  interface TemplateHTMLAttributes<T extends HTMLTemplateElement>
    extends HTMLAttributes<T> {
    content?: ActMaybe<DocumentFragment>
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    autocomplete?: ActMaybe<string>
    autofocus?: ActMaybe<boolean>
    cols?: ActMaybe<number | string>
    dirname?: ActMaybe<string>
    disabled?: ActMaybe<boolean>
    form?: ActMaybe<string>
    maxlength?: ActMaybe<number | string>
    minlength?: ActMaybe<number | string>
    name?: ActMaybe<string>
    placeholder?: ActMaybe<string>
    readonly?: ActMaybe<boolean>
    required?: ActMaybe<boolean>
    rows?: ActMaybe<number | string>
    value?: ActMaybe<string | string[] | number>
    wrap?: ActMaybe<'hard' | 'soft' | 'off'>
    maxLength?: ActMaybe<number | string>
    minLength?: ActMaybe<number | string>
    readOnly?: ActMaybe<boolean>
  }
  interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
    colspan?: ActMaybe<number | string>
    headers?: ActMaybe<string>
    rowspan?: ActMaybe<number | string>
    colSpan?: ActMaybe<number | string>
    rowSpan?: ActMaybe<number | string>
    scope?: ActMaybe<'col' | 'row' | 'rowgroup' | 'colgroup'>
  }
  interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
    datetime?: ActMaybe<string>
    dateTime?: ActMaybe<string>
  }
  interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
    default?: ActMaybe<boolean>
    kind?: ActMaybe<
      'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'
    >
    label?: ActMaybe<string>
    src?: ActMaybe<string>
    srclang?: ActMaybe<string>
  }
  interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
    height?: ActMaybe<number | string>
    playsinline?: ActMaybe<boolean>
    poster?: ActMaybe<string>
    width?: ActMaybe<number | string>
  }
  /**
   * @type {HTMLElementTagNameMap}
   */
  interface HTMLElementTags {
    a: AnchorHTMLAttributes<HTMLAnchorElement>
    abbr: HTMLAttributes<HTMLElement>
    address: HTMLAttributes<HTMLElement>
    area: AreaHTMLAttributes<HTMLAreaElement>
    article: HTMLAttributes<HTMLElement>
    aside: HTMLAttributes<HTMLElement>
    audio: AudioHTMLAttributes<HTMLAudioElement>
    b: HTMLAttributes<HTMLElement>
    base: BaseHTMLAttributes<HTMLBaseElement>
    bdi: HTMLAttributes<HTMLElement>
    bdo: HTMLAttributes<HTMLElement>
    blockquote: BlockquoteHTMLAttributes<HTMLElement>
    body: HTMLAttributes<HTMLBodyElement>
    br: HTMLAttributes<HTMLBRElement>
    button: ButtonHTMLAttributes<HTMLButtonElement>
    canvas: CanvasHTMLAttributes<HTMLCanvasElement>
    caption: HTMLAttributes<HTMLElement>
    cite: HTMLAttributes<HTMLElement>
    code: HTMLAttributes<HTMLElement>
    col: ColHTMLAttributes<HTMLTableColElement>
    colgroup: ColgroupHTMLAttributes<HTMLTableColElement>
    data: DataHTMLAttributes<HTMLElement>
    datalist: HTMLAttributes<HTMLDataListElement>
    dd: HTMLAttributes<HTMLElement>
    del: HTMLAttributes<HTMLElement>
    details: DetailsHtmlAttributes<HTMLDetailsElement>
    dfn: HTMLAttributes<HTMLElement>
    dialog: DialogHtmlAttributes<HTMLDialogElement>
    div: HTMLAttributes<HTMLDivElement>
    dl: HTMLAttributes<HTMLDListElement>
    dt: HTMLAttributes<HTMLElement>
    em: HTMLAttributes<HTMLElement>
    embed: EmbedHTMLAttributes<HTMLEmbedElement>
    fieldset: FieldsetHTMLAttributes<HTMLFieldSetElement>
    figcaption: HTMLAttributes<HTMLElement>
    figure: HTMLAttributes<HTMLElement>
    footer: HTMLAttributes<HTMLElement>
    form: FormHTMLAttributes<HTMLFormElement>
    h1: HTMLAttributes<HTMLHeadingElement>
    h2: HTMLAttributes<HTMLHeadingElement>
    h3: HTMLAttributes<HTMLHeadingElement>
    h4: HTMLAttributes<HTMLHeadingElement>
    h5: HTMLAttributes<HTMLHeadingElement>
    h6: HTMLAttributes<HTMLHeadingElement>
    head: HTMLAttributes<HTMLHeadElement>
    header: HTMLAttributes<HTMLElement>
    hgroup: HTMLAttributes<HTMLElement>
    hr: HTMLAttributes<HTMLHRElement>
    html: HTMLAttributes<HTMLHtmlElement>
    i: HTMLAttributes<HTMLElement>
    iframe: IframeHTMLAttributes<HTMLIFrameElement>
    img: ImgHTMLAttributes<HTMLImageElement>
    input: InputHTMLAttributes<HTMLInputElement>
    ins: InsHTMLAttributes<HTMLModElement>
    kbd: HTMLAttributes<HTMLElement>
    label: LabelHTMLAttributes<HTMLLabelElement>
    legend: HTMLAttributes<HTMLLegendElement>
    li: LiHTMLAttributes<HTMLLIElement>
    link: LinkHTMLAttributes<HTMLLinkElement>
    main: HTMLAttributes<HTMLElement>
    map: MapHTMLAttributes<HTMLMapElement>
    mark: HTMLAttributes<HTMLElement>
    menu: MenuHTMLAttributes<HTMLElement>
    meta: MetaHTMLAttributes<HTMLMetaElement>
    meter: MeterHTMLAttributes<HTMLElement>
    nav: HTMLAttributes<HTMLElement>
    noscript: HTMLAttributes<HTMLElement>
    object: ObjectHTMLAttributes<HTMLObjectElement>
    ol: OlHTMLAttributes<HTMLOListElement>
    optgroup: OptgroupHTMLAttributes<HTMLOptGroupElement>
    option: OptionHTMLAttributes<HTMLOptionElement>
    output: OutputHTMLAttributes<HTMLElement>
    p: HTMLAttributes<HTMLParagraphElement>
    picture: HTMLAttributes<HTMLElement>
    pre: HTMLAttributes<HTMLPreElement>
    progress: ProgressHTMLAttributes<HTMLProgressElement>
    q: QuoteHTMLAttributes<HTMLQuoteElement>
    rp: HTMLAttributes<HTMLElement>
    rt: HTMLAttributes<HTMLElement>
    ruby: HTMLAttributes<HTMLElement>
    s: HTMLAttributes<HTMLElement>
    samp: HTMLAttributes<HTMLElement>
    script: ScriptHTMLAttributes<HTMLElement>
    section: HTMLAttributes<HTMLElement>
    select: SelectHTMLAttributes<HTMLSelectElement>
    slot: HTMLSlotElementAttributes
    small: HTMLAttributes<HTMLElement>
    source: SourceHTMLAttributes<HTMLSourceElement>
    span: HTMLAttributes<HTMLSpanElement>
    strong: HTMLAttributes<HTMLElement>
    style: StyleHTMLAttributes<HTMLStyleElement>
    sub: HTMLAttributes<HTMLElement>
    summary: HTMLAttributes<HTMLElement>
    sup: HTMLAttributes<HTMLElement>
    table: HTMLAttributes<HTMLTableElement>
    tbody: HTMLAttributes<HTMLTableSectionElement>
    td: TdHTMLAttributes<HTMLTableCellElement>
    template: TemplateHTMLAttributes<HTMLTemplateElement>
    textarea: TextareaHTMLAttributes<HTMLTextAreaElement>
    tfoot: HTMLAttributes<HTMLTableSectionElement>
    th: ThHTMLAttributes<HTMLTableCellElement>
    thead: HTMLAttributes<HTMLTableSectionElement>
    time: TimeHTMLAttributes<HTMLElement>
    title: HTMLAttributes<HTMLTitleElement>
    tr: HTMLAttributes<HTMLTableRowElement>
    track: TrackHTMLAttributes<HTMLTrackElement>
    u: HTMLAttributes<HTMLElement>
    ul: HTMLAttributes<HTMLUListElement>
    var: HTMLAttributes<HTMLElement>
    video: VideoHTMLAttributes<HTMLVideoElement>
    wbr: HTMLAttributes<HTMLElement>
  }
  /**
   * @type {HTMLElementDeprecatedTagNameMap}
   */
  interface HTMLElementDeprecatedTags {
    big: HTMLAttributes<HTMLElement>
    keygen: KeygenHTMLAttributes<HTMLElement>
    menuitem: HTMLAttributes<HTMLElement>
    noindex: HTMLAttributes<HTMLElement>
    param: ParamHTMLAttributes<HTMLParamElement>
  }
  interface IntrinsicElements
    extends HTMLElementTags,
      HTMLElementDeprecatedTags {}
}
