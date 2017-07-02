import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  sessionAccount: Ember.inject.service(),

  model() {
    const currentUser = this.get('sessionAccount.currentUser');

    return this.get('store').query('booking', {
      filter: {
        'user_id': currentUser.id
      },
      include: 'rental'
    });
  }
});
