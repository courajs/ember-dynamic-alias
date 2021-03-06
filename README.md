# Ember-dynamic-alias

NOTE: I recently discovered the superior
[ember-computed-indirect](https://www.npmjs.com/package/ember-computed-indirect),
and I recommend you use that instead. I'll leave this available for anyone
who prefers the observer approach used here.

Sometimes you want to create a computed property dependent on a key
you'll only know at run-time--often a value on a model, or the value of
a computed property. You probably don't need to do this often, but when
the occasion arises it can be pretty handy.

There are a few ways to do this currently, but they're all a bit of
a pain. This addon deals with it so you don't have to! It returns an
observer which will keep an alias up-to-date.

Here's a simple example of how to use it.

```js
import dynamicAlias from 'ember-dynamic-alias';

let thing = Ember.Object.extend({
  one: 1,
  two: 2,
  whichNumber: 'one',
  onWhichNumberChanged: dynamicAlias('whichNumber', 'myNumber')
}).create();

thing.get('myNumber'); // 1
thing.set('whichNumber', 'two');
thing.get('myNumber'); // 2
```

See [a more complicated example](https://github.com/courajs/ember-dynamic-alias/tree/master/tests/dummy/app/components/x-media).

## Installation

- `npm install ember-dynamic-alias --save`

## Running Tests

- `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
- `ember test`
- `ember test --server`
