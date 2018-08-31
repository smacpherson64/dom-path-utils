# DOM Path Utils

Helper utilties for traversing ancestors in the dom.

## Table of Contents
- [Installation](#installation)
- [Utils](#utils)
  - [`getAncestors`](#getancestors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save dom-path-utils
```

## Utils

### `getAncestors`
```typescript
getAncestors(element: HTMLElement): HTMLElement[]
```

Get all ancestors of an element including detached elements.

#### Examples
```html
  <html>
    <body>
      <div></div>
    </body>
  </html>
```

##### Part of the Dom
```javascript
  import { getAncestors } from 'dom-path-utils';

  const ancestors = getAncestors(document.querySelector('div'));
  // [html, body, div] (References the actual HTMLElement)
```

##### Detached Elements Example
```javascript
    const parent = document.createElement('div');
    const child = document.createElement('div');
    const grandchild = document.createElement('div');

    child.appendChild(grandchild);
    parent.appendChild(child);

    const results = getAncestors(grandchild);
    // [div(parent), div(child), div(grandchild)] (References the actual HTMLElement)
```

### `getClasses`
```typescript
getClasses(element: HTMLElement): string
```

Get the classes selectors as a string separated by '.'

#### Examples
```html
  <div class="class1 class2 class3"></div>
```

```javascript
  import { getClasses } from 'dom-path-utils';

  const classes = getClasses(document.querySelector('div'));
  // ".class1.class2.class3"
```

## LICENSE
MIT
