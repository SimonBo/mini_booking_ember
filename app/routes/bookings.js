import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RSVP from 'rsvp';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service(),

  model() {
    let currentUser = this.get('currentUser.user');
    let userId = currentUser.id;

    let bookings = this.get('store').query('booking', {
      filter: {
        'user_id': userId
      },
      include: 'rental'
    });


    let ratings = this.get('store').query('rentalRating', {
      filter: {
        'user_id': userId
      },
      'sort': '-id'
    });

    return RSVP.hash({
      bookings: bookings,
      ratings: ratings
    });
  }
});
