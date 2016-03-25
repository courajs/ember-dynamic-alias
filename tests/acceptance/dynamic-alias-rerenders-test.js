import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dynamic alias rerenders');

test('visiting /dynamic-alias-rerenders', function(assert) {
  visit('/');

  andThen(function() {
    let number = find('[data-auto-id="my-number"]').text();
    assert.equal(number, '1', 'It shows the initial alias');
  });

  click('button');

  andThen(function() {
    let number = find('[data-auto-id="my-number"]').text();
    assert.equal(number, '2', 'It updates the alias');
  });
});
