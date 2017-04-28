import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  clientEmail: faker.internet.email(),
  price: 1000,
  rental: association()
});
