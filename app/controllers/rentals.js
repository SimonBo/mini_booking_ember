import Ember from 'ember';

export default Ember.Controller.extend({
  sort: 'name',
  sortDirection: 'asc',

  sortBy: Ember.computed('sort', 'sortDirection', function() {
    return [`${this.get('sort')}:${this.get('sortDirection')}`];
  }),
  sortedRentals: Ember.computed.sort('model', 'sortBy'),

  actions: {
    toggleSort(sortProp) {
      let currentDirection = this.get('sortDirection');
      let sort = this.get('sort');

      let newDirection = sort == sortProp ? (currentDirection == 'asc' ? 'desc' : 'asc') : 'asc'
      this.set('sort', sortProp);
      this.set('sortDirection', newDirection);
    }
  }
});
