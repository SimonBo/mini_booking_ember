import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['booking-card'],
  store: Ember.inject.service(),

  actions: {
    setRentalRating(stars) {
      let booking = this.get('booking');
      let currentUser = this.get('currentUser');
      let rating = this.get('rating');
      let rental = booking.get('rental');
      let rentalRating = rating ? rating : this.get('store').createRecord('rentalRating', {
        rental: rental,
        user: currentUser
      });

      rentalRating.set('stars', stars);
      rentalRating.save()
    }
  }
});
