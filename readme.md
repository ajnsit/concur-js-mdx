# Concur-js + MDX + Parcel

MDX is a way to embed React components inside Markdown. Concur-js works with MDX. This is a proof of concept.

## Getting Started

```
npm install
npm start
```

## Example

Concur-js components can be converted to React components by wrapping them in `<Concur>` tags. Then you can use it in MDX documents.

If you have a Concur component in a file, for example -

```javascript
// Hello.js
/** @jsx el */

import 'babel-polyfill';

import {el, forever} from './core';

// Create a new widget
export const HelloWorld = () =>
  forever (async function* () {
    yield* <button onClick>Click me</button>
    yield* <div>
        Hello Concur!
        <button onClick>Restart?</button>
    </div>
  })
```

You can then use the component in MDX documents, any number of times -

```javascript
// content.mdx
import {HelloWorld} from './Hello'
import {Concur} from './core'

# Concur Showcase

#### 1. Hello World

<Concur>{HelloWorld}</Concur>

#### 2. More stuff here

<Concur>{HelloWorld}</Concur>
```

