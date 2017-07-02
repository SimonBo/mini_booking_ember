import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['booking-card'],
  store: Ember.inject.service(),
  // rating: Ember.computed('booking', function() {
  //   // return 3;
  //   let rental = this.get('booking.rental');

  //   rental.get("rentalRatings").then((ratings) => {
  //     let all_stars = ratings.mapBy('stars')
  //     console.log(all_stars);
  //     if (all_stars.length > 0) {
  //       console.log(all_stars[0])
  //       return all_stars[0]
  //     } else {
  //       console.log(0)
  //       return 0
  //     }
  //   });
  // }),

  actions: {
    setBookingRating(stars) {
      return alert(stars);
    }
  }
});
