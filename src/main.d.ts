// Type definitions for dom-path-utils
// Project: dom-path-utils
// Definitions by: Seth MacPherson <https://github.com/smacpherson64>

declare function getAncestors(element: HTMLElement): HTMLElement[]
declare function getClasses(element: HTMLElement): string
declare function getId(element: HTMLElement): string
declare function getParent(element: HTMLElement): HTMLElement | null
declare function getSelectorPath(element: HTMLElement): string
declare function getSelector(element: HTMLElement): string
declare function getTagName(element: HTMLElement): string

export {
  getAncestors,
  getClasses,
  getId,
  getParent,
  getSelectorPath,
  getSelector,
  getTagName
}
