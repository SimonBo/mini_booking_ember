import Ember from 'ember';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/routes/jsonapi-pagination';

export default Ember.Controller.extend(Pagination, {
  sort: 'name',
  sortDirection: 'asc',
  size: 10,

  sortBy: Ember.computed('sort', 'sortDirection', function() {
    return [`${this.get('sort')}:${this.get('sortDirection')}`];
  }),
  sortedRentals: Ember.computed.sort('model', 'sortBy'),

  totalPages: Ember.computed('size', 'number', 'model.[]', function() {
    return this.get('model.meta.page-count');
  }),

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
