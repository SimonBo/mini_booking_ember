import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend({
  host: ENV.serverURL,
  namespace: 'api/v1',
  headers: {
    'X-Api-Key': '12345'
  }
});
