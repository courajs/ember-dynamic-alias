import { module, test } from 'qunit';
import Ember from 'ember';
import dynamicAlias from 'ember-dynamic-alias';

const {
  get,
  set
} = Ember;


const Thing = Ember.Object.extend({
  one: 1,
  two: 2,
  number: 'one',
  onNumberChanged: dynamicAlias('number', 'myNumber')
});

let thing;

module('dynamic-alias', {
  beforeEach() {
    thing = Thing.create();
  }
});

test('it creates an alias to the value of the given key', function(assert) {
  assert.expect(2);

  assert.equal(get(thing, 'myNumber'), 1, 'It creates an alias');
  set(thing, 'one', 10);
  assert.equal(get(thing, 'myNumber'), 10, 'The alias updates');
  set(thing, 'myNumber', 90);
});

test('when the dependent key changes, the alias updates', function(assert) {
  assert.expect(3);

  assert.equal(get(thing, 'myNumber'), 1, 'It creates an alias');
  set(thing, 'number', 'two');
  assert.equal(get(thing, 'myNumber'), 2, 'It updates the alias');
  set(thing, 'two', 6);
  assert.equal(get(thing, 'myNumber'), 6, 'The updated alias updates');
});


test('it prevents sets to the alias when the dependent key is not present', function(assert) {
  assert.expect(4);

  let other = Thing.create({
    number: null
  });

  assert.equal(get(other, 'myNumber'), null);

  assert.expectAssertion(function() {
    set(other, 'myNumber', 7);
  }, 'You cannot set to a dynamic alias (`myNumber`) while the dependent key (`number`) is not present');

  set(other, 'number', 'one');

  assert.equal(get(other, 'myNumber'), 1, 'The alias works once the dependent key is set');

  set(other, 'number', null);

  assert.expectAssertion(function() {
    set(other, 'myNumber', 7);
  }, 'You cannot set to a dynamic alias (`myNumber`) while the dependent key (`number`) is not present');
});
