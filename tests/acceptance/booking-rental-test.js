import { test } from 'qunit';
import moduleForAcceptance from 'mini-booking-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | booking rental');

test('booking a rental', function(assert) {
  server.createList('rental', 10);
  visit('/');

  andThen(function() {
    assert.equal(find('.booking-card').length, 10 );
  });

  click('a.rental-link').then(function() {
    assert.equal(find('.rental-presentation').length, 1 );
  });

  fillIn('#client-email', 'you@example.com').then(function() {
    click('button#book-rental').then(function() {
      assert.equal(find('.booking-card').length, 1 );
    });
  });
});
