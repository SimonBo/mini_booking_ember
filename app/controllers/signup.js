import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  ajax: Ember.inject.service(),

  actions: {
    register() {
      let userData = {
        data: {
          username: this.get('username'),
          password: this.get('password')
        }
      };
      this.get('ajax').post('/users', { data: userData })
      .then(() => {
        let { username, password } = this.getProperties('username', 'password');
        this.get('session').authenticate('authenticator:oauth2', username, password)
        .then(() => {
          this.get('currentUser').load();
        });
      }).catch(() => {
        this.set('errorMessage', 'An error occurred, please try again');
      });
    }
  }
});
