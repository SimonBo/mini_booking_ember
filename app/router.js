import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', { path: '/' }),
  this.route('rental', { path: 'rentals/:rental_id' })

  this.route('booking', { path: 'bookings/:booking_id' });
});

export default Router;
