/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mini-booking-ember',
    environment: environment,
    rootURL: '/',
    apiNamespace: 'api/v1',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.serverURL = "http://localhost:3000";
    ENV.apiURL = 'http://127.0.0.1:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    ENV.serverURL = "http://localhost:3000";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment == 'production') {
    ENV.serverURL = '/';
  }

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'rentals'
  };
  ENV.apiBaseURL = ENV.serverURL + '/' + ENV.apiNamespace;
  return ENV;
};
