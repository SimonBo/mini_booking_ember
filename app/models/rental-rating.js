import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr('number'),
  rental: DS.belongsTo('rental'),
  user: DS.belongsTo('user')
});
