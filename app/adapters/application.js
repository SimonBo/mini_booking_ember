import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiBaseURL,
  namespace: ENV.apiNameSpace,
  headers: {
    'X-Api-Key': '12345'
  }
});
