import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),


  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('store')
      .queryRecord('user', { me: true })
      .then((user) => {
        this.set('currentUser', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
