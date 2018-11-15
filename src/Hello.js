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
