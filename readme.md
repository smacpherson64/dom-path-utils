# DOM Path Utils

Helper utilties for traversing ancestors in the dom.

## Table of Contents

- [Installation](#installation)
- [Utils](#utils)
  - [`getAncestors`](#getancestors)
  - [`getClasses`](#getclasses)
  - [`getId`](#getid)
  - [`getParent`](#getparent)
  - [`getSelectorPath`](#getselectorpath)
  - [`getSelector`](#getselector)
  - [`getTagName`](#gettagname)
- [LICENSE](#license)

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/en/) and
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

### `getId`

```typescript
getId(element: HTMLElement): string
```

Get the id as a string prefixed by '#'

#### Examples

```html
  <div id="element-id"></div>
```

```javascript
import { getId } from 'dom-path-utils';

const id = getId(document.querySelector('div'));
// "#element-id"
```

### `getParent`

```typescript
getParent(element: HTMLElement): HTMLElement | null
```

Get the parent of the current element including detached elements.

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
import { getParent } from 'dom-path-utils';

const ancestors = getParent(document.querySelector('div'));
// body (References the actual HTMLElement)
```

##### Detached Elements Example

```javascript
const parent = document.createElement('div');
const child = document.createElement('div');

parent.appendChild(child);

const results = getParent(child);
// div(parent) (References the actual HTMLElement)
```

### `getSelectorPath`

```typescript
getSelectorPath(element: HTMLElement, attributes: string[]): string
```

Gets the string representation of the selector path.
Note: This selector is intended to be a general selector not a fully unique selector, multiple elements may match this selector.

The default attributes are `id` and `class`.

#### Examples

```html
  <html>
    <body id="body-id">
      <div class="div-class"></div>
    </body>
  </html>
```

##### Part of the Dom

```javascript
import { getSelectorPath } from 'dom-path-utils';

const ancestors = getSelectorPath(document.querySelector('div'));
// "html > body#body-id > div.div-class"
```

##### Detached Elements Example

```javascript
const parent = document.createElement('div');
const child = document.createElement('div');

parent.appendChild(child);

const results = getSelectorPath(child);
// "div > div"
```

### `getSelector`

```typescript
getSelector(element: HTMLElement, attributes: string[]): string
```

Gets the string representation of a specific element.
The default attributes are `id` and `class`.

#### Examples

```html
  <div id="div-id" class="div-class"></div>
```

```javascript
import { getSelector } from 'dom-path-utils';

const selector = getSelector(document.querySelector('div'));
// "div#div-id.div-class"
```

### `getTagName`

```typescript
getTagName(element: HTMLElement): string
```

Get the element tag string in lowercase

#### Examples

```html
  <div class="some-class" id="some-id"></div>
```

```javascript
import { getTagName } from 'dom-path-utils';

const id = getTagName(document.querySelector('div'));
// "div"
```

## LICENSE

MIT
