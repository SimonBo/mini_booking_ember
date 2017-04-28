import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    bookRental(booking) {
      let self = this;
      function handleSuccess(booking) {
        self.transitionToRoute('booking', booking);
      }

      booking.save().then(handleSuccess);
    }
  }
});
