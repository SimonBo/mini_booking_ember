import DS from 'ember-data';
import ENV from "../config/environment";
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.serverURL,
  authorizer: 'authorizer:oauth2',
  namespace: 'api/v1',
  headers: {
    'X-Api-Key': '12345'
  }
});
