import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    const rental = this.get('store').findRecord('rental', params.rental_id);
    const booking = this.get('store').createRecord('booking', {
      rental: rental
    });

    return RSVP.hash({
      rental: rental,
      booking: booking
    });
  },

  actions: {
    willTransition(transition) {
      const model = this.get('currentModel');
      const booking = model.booking;

      if (booking.get('isNew')) {
        transition.abort();
        booking.destroyRecord().then(() => transition.retry());
      }
    }
  }
});
