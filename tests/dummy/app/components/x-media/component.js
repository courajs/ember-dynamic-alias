import Ember from 'ember';
import dynamicAlias from 'ember-dynamic-alias';

const {
  Component,
  computed: { filterBy }
} = Ember;

export default Component.extend({
  books: Ember.A([
    { title: 'The Last Lecture', available: true },
    { title: 'Born To Run', available: true },
    { title: 'Godel, Escher, Bach', available: true }
  ]),
  movies: Ember.A([
    { title: 'Interstellar', available: true },
    { title: 'Pay It Forward', available: true }
  ]),
  music: Ember.A([
    { title: 'The Roots', available: true },
    { title: 'Taylor Swift', available: true }
  ]),

  favoriteMediaType: 'books',
  onTypeChanged: dynamicAlias('favoriteMediaType', 'favoriteMedia'),

  availableMedia: filterBy('favoriteMedia', 'available')
});
