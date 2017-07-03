import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  sessionAccount: Ember.inject.service(),

  model() {
    let currentUser = this.get('sessionAccount.currentUser');
    let userId = currentUser ? currentUser.id : 1 //till i figure out why currenUser is null after refresh

    return this.get('store').query('booking', {
      filter: {
        'user_id': userId
      },
      include: 'rental,rental.rental-ratings'
    });
  }
});
