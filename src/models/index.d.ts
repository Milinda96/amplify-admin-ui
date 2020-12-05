import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Order {
  readonly id: string;
  readonly date?: string;
  readonly total?: number;
  readonly user?: string;
  readonly OrderBooks?: (OrderBook | null)[];
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class OrderBook {
  readonly id: string;
  readonly order: Order;
  readonly book: Book;
  constructor(init: ModelInit<OrderBook>);
  static copyOf(source: OrderBook, mutator: (draft: MutableModel<OrderBook>) => MutableModel<OrderBook> | void): OrderBook;
}

export declare class Book {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly price?: number;
  readonly author?: string;
  readonly is_featured?: boolean;
  readonly orders?: (OrderBook | null)[];
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}