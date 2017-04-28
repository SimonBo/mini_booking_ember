import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dailyRate: DS.attr('number'),
  bookings: DS.hasMany('booking')
});
