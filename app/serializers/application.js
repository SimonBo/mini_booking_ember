import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, clazz, payload) {
    const result = this._super(...arguments);
    result.meta = result.meta || {};

    if (payload.links && payload.meta && payload.meta['page-count']) {
      result.meta.pagination = this._createPagination(payload);
    }

    return result;
  },

  _createPagination(data) {
    let meta = { links: {}, pageCount: data.meta['page-count'] };
    Object.keys(data.links).forEach(type => {
      const link = data.links[type];
      meta.links[type] = {};
      let anchor = document.createElement('a');
      anchor.href = link;
      anchor.search.slice(1).split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');
        if (param == 'page%5Bnumber%5D') {
          meta.links[type].number = parseInt(value);
        }
        if (param == 'page%5Bsize%5D') {
          meta.links[type].size = parseInt(value);
        }
      });
      anchor = null;
    });
    return meta;
  }
});


