// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OrderBook, Book } = initSchema(schema);

export {
  Order,
  OrderBook,
  Book
};