import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['booking-card'],
  store: Ember.inject.service(),

  actions: {
    setBookingRating(stars) {
      return alert(stars);
    }
  }
});
