import Ember from 'ember';
import dynamicAlias from 'ember-dynamic-alias';

const {
  Component,
  set
} = Ember;

export default Component.extend({
  one: 1,
  two: 2,
  number: 'one',
  onNumberChange: dynamicAlias('number', 'myNumber'),
  actions: {
    changeDependentKey() {
      set(this, 'number', 'two');
    }
  }
});
