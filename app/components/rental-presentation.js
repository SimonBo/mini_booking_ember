import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  bookingPrice: Ember.computed('booking.lengthOfStay', 'rental', function() {
    let rental = this.get('rental');
    let dailyRate = rental.get('dailyRate');
    let booking = this.get('booking');
    let lengthOfStay = booking.get('lengthOfStay');
    return lengthOfStay * dailyRate;
  }),

  bookingValid: Ember.computed('booking.lengthOfStay', 'booking.clientEmailValid', function() {
    let booking = this.get('booking');
    return booking.get('lengthOfStay') > 0 && booking.get('clientEmailValid');
  }),

  actions: {
    bookRental() {
      let booking = this.get('booking');
      let rental = this.get('rental');
      booking.set('price', this.get('bookingPrice'));
      booking.set('rental', rental);

      // this feels like a hack but otherwise endAt and startAt are assigned a Moment object
      // byt the datepicker and are null in the request to server
      let startAt = booking.get('startAt');
      let endAt = booking.get('endAt');

      if (startAt instanceof moment) {
        booking.set('startAt', startAt.toDate());
      }

      if (endAt instanceof moment) {
        booking.set('endAt', endAt.toDate());
      }
      this.sendAction('bookRental', booking);
    }
  }
});
