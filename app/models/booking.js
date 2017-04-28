import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  startAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  endAt: DS.attr('date', {
    defaultValue() {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    }
  }),
  clientEmail: DS.attr('string'),
  price: DS.attr('number'),
  rental: DS.belongsTo('rental'),

  lengthOfStay: Ember.computed('startAt', 'endAt', function() {
    let startAt = this.get('startAt');
    let endAt = this.get('endAt');
    return Math.round((endAt - startAt)/(1000*60*60*24));
  }),

  clientEmailValid: Ember.computed('clientEmail', function() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.get('clientEmail'));
  }),
});
