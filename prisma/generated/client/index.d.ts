
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Organizer
 * 
 */
export type Organizer = $Result.DefaultSelection<Prisma.$OrganizerPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCoupon
 * 
 */
export type UserCoupon = $Result.DefaultSelection<Prisma.$UserCouponPayload>
/**
 * Model UserPoint
 * 
 */
export type UserPoint = $Result.DefaultSelection<Prisma.$UserPointPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Order_Details
 * 
 */
export type Order_Details = $Result.DefaultSelection<Prisma.$Order_DetailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventCategory: {
  Concert: 'Concert',
  Sports: 'Sports',
  Theater: 'Theater',
  Socials: 'Socials',
  Other: 'Other'
};

export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory]


export const Location: {
  Bandung: 'Bandung',
  Jakarta: 'Jakarta',
  Bali: 'Bali',
  Surabaya: 'Surabaya'
};

export type Location = (typeof Location)[keyof typeof Location]


export const EventType: {
  Paid: 'Paid',
  Free: 'Free'
};

export type EventType = (typeof EventType)[keyof typeof EventType]


export const Status: {
  pending: 'pending',
  success: 'success',
  cancelled: 'cancelled'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type EventCategory = $Enums.EventCategory

export const EventCategory: typeof $Enums.EventCategory

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type EventType = $Enums.EventType

export const EventType: typeof $Enums.EventType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.organizer`: Exposes CRUD operations for the **Organizer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizers
    * const organizers = await prisma.organizer.findMany()
    * ```
    */
  get organizer(): Prisma.OrganizerDelegate<ExtArgs>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userCoupon`: Exposes CRUD operations for the **UserCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCoupons
    * const userCoupons = await prisma.userCoupon.findMany()
    * ```
    */
  get userCoupon(): Prisma.UserCouponDelegate<ExtArgs>;

  /**
   * `prisma.userPoint`: Exposes CRUD operations for the **UserPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoint.findMany()
    * ```
    */
  get userPoint(): Prisma.UserPointDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.order_Details`: Exposes CRUD operations for the **Order_Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_Details
    * const order_Details = await prisma.order_Details.findMany()
    * ```
    */
  get order_Details(): Prisma.Order_DetailsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    Ticket: 'Ticket',
    Organizer: 'Organizer',
    Rating: 'Rating',
    User: 'User',
    UserCoupon: 'UserCoupon',
    UserPoint: 'UserPoint',
    Order: 'Order',
    Order_Details: 'Order_Details'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "event" | "ticket" | "organizer" | "rating" | "user" | "userCoupon" | "userPoint" | "order" | "order_Details"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Organizer: {
        payload: Prisma.$OrganizerPayload<ExtArgs>
        fields: Prisma.OrganizerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findFirst: {
            args: Prisma.OrganizerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          findMany: {
            args: Prisma.OrganizerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[]
          }
          create: {
            args: Prisma.OrganizerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          createMany: {
            args: Prisma.OrganizerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[]
          }
          delete: {
            args: Prisma.OrganizerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          update: {
            args: Prisma.OrganizerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          deleteMany: {
            args: Prisma.OrganizerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>
          }
          aggregate: {
            args: Prisma.OrganizerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizer>
          }
          groupBy: {
            args: Prisma.OrganizerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizerCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizerCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserCoupon: {
        payload: Prisma.$UserCouponPayload<ExtArgs>
        fields: Prisma.UserCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findFirst: {
            args: Prisma.UserCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findMany: {
            args: Prisma.UserCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          create: {
            args: Prisma.UserCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          createMany: {
            args: Prisma.UserCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          delete: {
            args: Prisma.UserCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          update: {
            args: Prisma.UserCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          deleteMany: {
            args: Prisma.UserCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          aggregate: {
            args: Prisma.UserCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCoupon>
          }
          groupBy: {
            args: Prisma.UserCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCouponCountArgs<ExtArgs>
            result: $Utils.Optional<UserCouponCountAggregateOutputType> | number
          }
        }
      }
      UserPoint: {
        payload: Prisma.$UserPointPayload<ExtArgs>
        fields: Prisma.UserPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findFirst: {
            args: Prisma.UserPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findMany: {
            args: Prisma.UserPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          create: {
            args: Prisma.UserPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          createMany: {
            args: Prisma.UserPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          delete: {
            args: Prisma.UserPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          update: {
            args: Prisma.UserPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          deleteMany: {
            args: Prisma.UserPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          aggregate: {
            args: Prisma.UserPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPoint>
          }
          groupBy: {
            args: Prisma.UserPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPointCountArgs<ExtArgs>
            result: $Utils.Optional<UserPointCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Order_Details: {
        payload: Prisma.$Order_DetailsPayload<ExtArgs>
        fields: Prisma.Order_DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Order_DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Order_DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findFirst: {
            args: Prisma.Order_DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Order_DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          findMany: {
            args: Prisma.Order_DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          create: {
            args: Prisma.Order_DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          createMany: {
            args: Prisma.Order_DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Order_DetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>[]
          }
          delete: {
            args: Prisma.Order_DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          update: {
            args: Prisma.Order_DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          deleteMany: {
            args: Prisma.Order_DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Order_DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Order_DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Order_DetailsPayload>
          }
          aggregate: {
            args: Prisma.Order_DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_Details>
          }
          groupBy: {
            args: Prisma.Order_DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Order_DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_DetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    Ticket: number
    Rating: number
    Order: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | EventCountOutputTypeCountTicketArgs
    Rating?: boolean | EventCountOutputTypeCountRatingArgs
    Order?: boolean | EventCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    Order_Details: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | TicketCountOutputTypeCountOrder_DetailsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountOrder_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Count Type OrganizerCountOutputType
   */

  export type OrganizerCountOutputType = {
    Event: number
  }

  export type OrganizerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | OrganizerCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizerCountOutputType
     */
    select?: OrganizerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Order: number
    Rating: number
    User_Coupon: number
    User_Point: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | UserCountOutputTypeCountOrderArgs
    Rating?: boolean | UserCountOutputTypeCountRatingArgs
    User_Coupon?: boolean | UserCountOutputTypeCountUser_CouponArgs
    User_Point?: boolean | UserCountOutputTypeCountUser_PointArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_CouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_PointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    Order_Details: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | OrderCountOutputTypeCountOrder_DetailsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrder_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    event_name: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    event_date: Date | null
    location: $Enums.Location | null
    venue: string | null
    event_type: $Enums.EventType | null
    isActive: boolean | null
    event_thumbnail: string | null
    event_preview: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: $Enums.EventCategory | null
    organizerId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    event_name: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    event_date: Date | null
    location: $Enums.Location | null
    venue: string | null
    event_type: $Enums.EventType | null
    isActive: boolean | null
    event_thumbnail: string | null
    event_preview: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: $Enums.EventCategory | null
    organizerId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    event_name: number
    description: number
    start_time: number
    end_time: number
    event_date: number
    location: number
    venue: number
    event_type: number
    isActive: number
    event_thumbnail: number
    event_preview: number
    createdAt: number
    updatedAt: number
    category: number
    organizerId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    event_name?: true
    description?: true
    start_time?: true
    end_time?: true
    event_date?: true
    location?: true
    venue?: true
    event_type?: true
    isActive?: true
    event_thumbnail?: true
    event_preview?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    organizerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    event_name?: true
    description?: true
    start_time?: true
    end_time?: true
    event_date?: true
    location?: true
    venue?: true
    event_type?: true
    isActive?: true
    event_thumbnail?: true
    event_preview?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    organizerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    event_name?: true
    description?: true
    start_time?: true
    end_time?: true
    event_date?: true
    location?: true
    venue?: true
    event_type?: true
    isActive?: true
    event_thumbnail?: true
    event_preview?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    organizerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    event_name: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    event_date: Date | null
    location: $Enums.Location
    venue: string | null
    event_type: $Enums.EventType
    isActive: boolean
    event_thumbnail: string | null
    event_preview: string | null
    createdAt: Date | null
    updatedAt: Date | null
    category: $Enums.EventCategory
    organizerId: string | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    event_date?: boolean
    location?: boolean
    venue?: boolean
    event_type?: boolean
    isActive?: boolean
    event_thumbnail?: boolean
    event_preview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    organizerId?: boolean
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    Rating?: boolean | Event$RatingArgs<ExtArgs>
    Order?: boolean | Event$OrderArgs<ExtArgs>
    Organizer?: boolean | Event$OrganizerArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    event_date?: boolean
    location?: boolean
    venue?: boolean
    event_type?: boolean
    isActive?: boolean
    event_thumbnail?: boolean
    event_preview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    organizerId?: boolean
    Organizer?: boolean | Event$OrganizerArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    event_name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    event_date?: boolean
    location?: boolean
    venue?: boolean
    event_type?: boolean
    isActive?: boolean
    event_thumbnail?: boolean
    event_preview?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    organizerId?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    Rating?: boolean | Event$RatingArgs<ExtArgs>
    Order?: boolean | Event$OrderArgs<ExtArgs>
    Organizer?: boolean | Event$OrganizerArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organizer?: boolean | Event$OrganizerArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      Rating: Prisma.$RatingPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Organizer: Prisma.$OrganizerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_name: string | null
      description: string | null
      start_time: Date | null
      end_time: Date | null
      event_date: Date | null
      location: $Enums.Location
      venue: string | null
      event_type: $Enums.EventType
      isActive: boolean
      event_thumbnail: string | null
      event_preview: string | null
      createdAt: Date | null
      updatedAt: Date | null
      category: $Enums.EventCategory
      organizerId: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends Event$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Event$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    Rating<T extends Event$RatingArgs<ExtArgs> = {}>(args?: Subset<T, Event$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany"> | Null>
    Order<T extends Event$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Event$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    Organizer<T extends Event$OrganizerArgs<ExtArgs> = {}>(args?: Subset<T, Event$OrganizerArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly event_name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly start_time: FieldRef<"Event", 'DateTime'>
    readonly end_time: FieldRef<"Event", 'DateTime'>
    readonly event_date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'Location'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly event_type: FieldRef<"Event", 'EventType'>
    readonly isActive: FieldRef<"Event", 'Boolean'>
    readonly event_thumbnail: FieldRef<"Event", 'String'>
    readonly event_preview: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly category: FieldRef<"Event", 'EventCategory'>
    readonly organizerId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.Ticket
   */
  export type Event$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.Rating
   */
  export type Event$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Event.Order
   */
  export type Event$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Event.Organizer
   */
  export type Event$OrganizerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    where?: OrganizerWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    seats: number | null
    price: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    seats: number | null
    price: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    category: string | null
    desc: string | null
    seats: number | null
    price: number | null
    eventId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    category: string | null
    desc: string | null
    seats: number | null
    price: number | null
    eventId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    category: number
    desc: number
    seats: number
    price: number
    eventId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    seats?: true
    price?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    seats?: true
    price?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    category?: true
    desc?: true
    seats?: true
    price?: true
    eventId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    category?: true
    desc?: true
    seats?: true
    price?: true
    eventId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    category?: true
    desc?: true
    seats?: true
    price?: true
    eventId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    category: string | null
    desc: string | null
    seats: number | null
    price: number
    eventId: string | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    desc?: boolean
    seats?: boolean
    price?: boolean
    eventId?: boolean
    Order_Details?: boolean | Ticket$Order_DetailsArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    desc?: boolean
    seats?: boolean
    price?: boolean
    eventId?: boolean
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    category?: boolean
    desc?: boolean
    seats?: boolean
    price?: boolean
    eventId?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | Ticket$Order_DetailsArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Order_Details: Prisma.$Order_DetailsPayload<ExtArgs>[]
      Event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string | null
      desc: string | null
      seats: number | null
      price: number
      eventId: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order_Details<T extends Ticket$Order_DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$Order_DetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany"> | Null>
    Event<T extends Ticket$EventArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$EventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'String'>
    readonly desc: FieldRef<"Ticket", 'String'>
    readonly seats: FieldRef<"Ticket", 'Int'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly eventId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.Order_Details
   */
  export type Ticket$Order_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Ticket.Event
   */
  export type Ticket$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Organizer
   */

  export type AggregateOrganizer = {
    _count: OrganizerCountAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  export type OrganizerMinAggregateOutputType = {
    id: string | null
    organizer_name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
  }

  export type OrganizerMaxAggregateOutputType = {
    id: string | null
    organizer_name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
  }

  export type OrganizerCountAggregateOutputType = {
    id: number
    organizer_name: number
    email: number
    password: number
    avatar: number
    isVerify: number
    _all: number
  }


  export type OrganizerMinAggregateInputType = {
    id?: true
    organizer_name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
  }

  export type OrganizerMaxAggregateInputType = {
    id?: true
    organizer_name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
  }

  export type OrganizerCountAggregateInputType = {
    id?: true
    organizer_name?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    _all?: true
  }

  export type OrganizerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizer to aggregate.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizers
    **/
    _count?: true | OrganizerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizerMaxAggregateInputType
  }

  export type GetOrganizerAggregateType<T extends OrganizerAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizer[P]>
      : GetScalarType<T[P], AggregateOrganizer[P]>
  }




  export type OrganizerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizerWhereInput
    orderBy?: OrganizerOrderByWithAggregationInput | OrganizerOrderByWithAggregationInput[]
    by: OrganizerScalarFieldEnum[] | OrganizerScalarFieldEnum
    having?: OrganizerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizerCountAggregateInputType | true
    _min?: OrganizerMinAggregateInputType
    _max?: OrganizerMaxAggregateInputType
  }

  export type OrganizerGroupByOutputType = {
    id: string
    organizer_name: string
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean
    _count: OrganizerCountAggregateOutputType | null
    _min: OrganizerMinAggregateOutputType | null
    _max: OrganizerMaxAggregateOutputType | null
  }

  type GetOrganizerGroupByPayload<T extends OrganizerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
        }
      >
    >


  export type OrganizerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    Event?: boolean | Organizer$EventArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizer"]>

  export type OrganizerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizer_name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
  }, ExtArgs["result"]["organizer"]>

  export type OrganizerSelectScalar = {
    id?: boolean
    organizer_name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
  }

  export type OrganizerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Organizer$EventArgs<ExtArgs>
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizer"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizer_name: string
      email: string | null
      password: string | null
      avatar: string | null
      isVerify: boolean
    }, ExtArgs["result"]["organizer"]>
    composites: {}
  }

  type OrganizerGetPayload<S extends boolean | null | undefined | OrganizerDefaultArgs> = $Result.GetResult<Prisma.$OrganizerPayload, S>

  type OrganizerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizerCountAggregateInputType | true
    }

  export interface OrganizerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizer'], meta: { name: 'Organizer' } }
    /**
     * Find zero or one Organizer that matches the filter.
     * @param {OrganizerFindUniqueArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizerFindUniqueArgs>(args: SelectSubset<T, OrganizerFindUniqueArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organizer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizerFindUniqueOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizerFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizerFindFirstArgs>(args?: SelectSubset<T, OrganizerFindFirstArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizerFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizer.findMany()
     * 
     * // Get first 10 Organizers
     * const organizers = await prisma.organizer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizerWithIdOnly = await prisma.organizer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizerFindManyArgs>(args?: SelectSubset<T, OrganizerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organizer.
     * @param {OrganizerCreateArgs} args - Arguments to create a Organizer.
     * @example
     * // Create one Organizer
     * const Organizer = await prisma.organizer.create({
     *   data: {
     *     // ... data to create a Organizer
     *   }
     * })
     * 
     */
    create<T extends OrganizerCreateArgs>(args: SelectSubset<T, OrganizerCreateArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizers.
     * @param {OrganizerCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizerCreateManyArgs>(args?: SelectSubset<T, OrganizerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {OrganizerCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizerCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organizer.
     * @param {OrganizerDeleteArgs} args - Arguments to delete one Organizer.
     * @example
     * // Delete one Organizer
     * const Organizer = await prisma.organizer.delete({
     *   where: {
     *     // ... filter to delete one Organizer
     *   }
     * })
     * 
     */
    delete<T extends OrganizerDeleteArgs>(args: SelectSubset<T, OrganizerDeleteArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organizer.
     * @param {OrganizerUpdateArgs} args - Arguments to update one Organizer.
     * @example
     * // Update one Organizer
     * const organizer = await prisma.organizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizerUpdateArgs>(args: SelectSubset<T, OrganizerUpdateArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizers.
     * @param {OrganizerDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizerDeleteManyArgs>(args?: SelectSubset<T, OrganizerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizerUpdateManyArgs>(args: SelectSubset<T, OrganizerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organizer.
     * @param {OrganizerUpsertArgs} args - Arguments to update or create a Organizer.
     * @example
     * // Update or create a Organizer
     * const organizer = await prisma.organizer.upsert({
     *   create: {
     *     // ... data to create a Organizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizer we want to update
     *   }
     * })
     */
    upsert<T extends OrganizerUpsertArgs>(args: SelectSubset<T, OrganizerUpsertArgs<ExtArgs>>): Prisma__OrganizerClient<$Result.GetResult<Prisma.$OrganizerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizer.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
    **/
    count<T extends OrganizerCountArgs>(
      args?: Subset<T, OrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizerAggregateArgs>(args: Subset<T, OrganizerAggregateArgs>): Prisma.PrismaPromise<GetOrganizerAggregateType<T>>

    /**
     * Group by Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizerGroupByArgs['orderBy'] }
        : { orderBy?: OrganizerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizer model
   */
  readonly fields: OrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Organizer$EventArgs<ExtArgs> = {}>(args?: Subset<T, Organizer$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organizer model
   */ 
  interface OrganizerFieldRefs {
    readonly id: FieldRef<"Organizer", 'String'>
    readonly organizer_name: FieldRef<"Organizer", 'String'>
    readonly email: FieldRef<"Organizer", 'String'>
    readonly password: FieldRef<"Organizer", 'String'>
    readonly avatar: FieldRef<"Organizer", 'String'>
    readonly isVerify: FieldRef<"Organizer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Organizer findUnique
   */
  export type OrganizerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer findUniqueOrThrow
   */
  export type OrganizerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer findFirst
   */
  export type OrganizerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer findFirstOrThrow
   */
  export type OrganizerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer findMany
   */
  export type OrganizerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizers to fetch.
     */
    orderBy?: OrganizerOrderByWithRelationInput | OrganizerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizers.
     */
    skip?: number
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[]
  }

  /**
   * Organizer create
   */
  export type OrganizerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizer.
     */
    data: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
  }

  /**
   * Organizer createMany
   */
  export type OrganizerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizer createManyAndReturn
   */
  export type OrganizerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizer update
   */
  export type OrganizerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizer.
     */
    data: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
    /**
     * Choose, which Organizer to update.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer updateMany
   */
  export type OrganizerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<OrganizerUpdateManyMutationInput, OrganizerUncheckedUpdateManyInput>
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput
  }

  /**
   * Organizer upsert
   */
  export type OrganizerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizer to update in case it exists.
     */
    where: OrganizerWhereUniqueInput
    /**
     * In case the Organizer found by the `where` argument doesn't exist, create a new Organizer with this data.
     */
    create: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>
    /**
     * In case the Organizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>
  }

  /**
   * Organizer delete
   */
  export type OrganizerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
    /**
     * Filter which Organizer to delete.
     */
    where: OrganizerWhereUniqueInput
  }

  /**
   * Organizer deleteMany
   */
  export type OrganizerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizerWhereInput
  }

  /**
   * Organizer.Event
   */
  export type Organizer$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Organizer without action
   */
  export type OrganizerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    eventId: string | null
    userId: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    comment: string | null
    eventId: string | null
    userId: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    eventId: number
    userId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    eventId?: true
    userId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    eventId?: true
    userId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    rating: number
    comment: string
    eventId: string | null
    userId: string | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    eventId?: boolean
    userId?: boolean
    Event?: boolean | Rating$EventArgs<ExtArgs>
    User?: boolean | Rating$UserArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    eventId?: boolean
    userId?: boolean
    Event?: boolean | Rating$EventArgs<ExtArgs>
    User?: boolean | Rating$UserArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Rating$EventArgs<ExtArgs>
    User?: boolean | Rating$UserArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | Rating$EventArgs<ExtArgs>
    User?: boolean | Rating$UserArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      comment: string
      eventId: string | null
      userId: string | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends Rating$EventArgs<ExtArgs> = {}>(args?: Subset<T, Rating$EventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    User<T extends Rating$UserArgs<ExtArgs> = {}>(args?: Subset<T, Rating$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */ 
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly rating: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly eventId: FieldRef<"Rating", 'String'>
    readonly userId: FieldRef<"Rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
  }

  /**
   * Rating.Event
   */
  export type Rating$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Rating.User
   */
  export type Rating$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    ref_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    avatar: string | null
    isVerify: boolean | null
    ref_code: string | null
    ref_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    avatar: number
    isVerify: number
    ref_code: number
    ref_by: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    ref_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    ref_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    avatar?: true
    isVerify?: true
    ref_code?: true
    ref_by?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar: string | null
    isVerify: boolean
    ref_code: string
    ref_by: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    ref_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Order?: boolean | User$OrderArgs<ExtArgs>
    Rating?: boolean | User$RatingArgs<ExtArgs>
    User_Coupon?: boolean | User$User_CouponArgs<ExtArgs>
    User_Point?: boolean | User$User_PointArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    ref_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    isVerify?: boolean
    ref_code?: boolean
    ref_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | User$OrderArgs<ExtArgs>
    Rating?: boolean | User$RatingArgs<ExtArgs>
    User_Coupon?: boolean | User$User_CouponArgs<ExtArgs>
    User_Point?: boolean | User$User_PointArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      Rating: Prisma.$RatingPayload<ExtArgs>[]
      User_Coupon: Prisma.$UserCouponPayload<ExtArgs>[]
      User_Point: Prisma.$UserPointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string
      avatar: string | null
      isVerify: boolean
      ref_code: string
      ref_by: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    Rating<T extends User$RatingArgs<ExtArgs> = {}>(args?: Subset<T, User$RatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany"> | Null>
    User_Coupon<T extends User$User_CouponArgs<ExtArgs> = {}>(args?: Subset<T, User$User_CouponArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany"> | Null>
    User_Point<T extends User$User_PointArgs<ExtArgs> = {}>(args?: Subset<T, User$User_PointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly ref_code: FieldRef<"User", 'String'>
    readonly ref_by: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.Rating
   */
  export type User$RatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.User_Coupon
   */
  export type User$User_CouponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    cursor?: UserCouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * User.User_Point
   */
  export type User$User_PointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    cursor?: UserPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserCoupon
   */

  export type AggregateUserCoupon = {
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  export type UserCouponAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type UserCouponSumAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type UserCouponMinAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: string | null
  }

  export type UserCouponMaxAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    percentage: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: string | null
  }

  export type UserCouponCountAggregateOutputType = {
    id: number
    isRedeem: number
    percentage: number
    createdAt: number
    expiredAt: number
    userId: number
    _all: number
  }


  export type UserCouponAvgAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type UserCouponSumAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type UserCouponMinAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type UserCouponMaxAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type UserCouponCountAggregateInputType = {
    id?: true
    isRedeem?: true
    percentage?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
    _all?: true
  }

  export type UserCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupon to aggregate.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCoupons
    **/
    _count?: true | UserCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCouponMaxAggregateInputType
  }

  export type GetUserCouponAggregateType<T extends UserCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCoupon[P]>
      : GetScalarType<T[P], AggregateUserCoupon[P]>
  }




  export type UserCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithAggregationInput | UserCouponOrderByWithAggregationInput[]
    by: UserCouponScalarFieldEnum[] | UserCouponScalarFieldEnum
    having?: UserCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCouponCountAggregateInputType | true
    _avg?: UserCouponAvgAggregateInputType
    _sum?: UserCouponSumAggregateInputType
    _min?: UserCouponMinAggregateInputType
    _max?: UserCouponMaxAggregateInputType
  }

  export type UserCouponGroupByOutputType = {
    id: number
    isRedeem: boolean
    percentage: number
    createdAt: Date
    expiredAt: Date
    userId: string | null
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  type GetUserCouponGroupByPayload<T extends UserCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
            : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
        }
      >
    >


  export type UserCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectScalar = {
    id?: boolean
    isRedeem?: boolean
    percentage?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
  }

  export type UserCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
  }
  export type UserCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserCoupon$UserArgs<ExtArgs>
  }

  export type $UserCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCoupon"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isRedeem: boolean
      percentage: number
      createdAt: Date
      expiredAt: Date
      userId: string | null
    }, ExtArgs["result"]["userCoupon"]>
    composites: {}
  }

  type UserCouponGetPayload<S extends boolean | null | undefined | UserCouponDefaultArgs> = $Result.GetResult<Prisma.$UserCouponPayload, S>

  type UserCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCouponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCouponCountAggregateInputType | true
    }

  export interface UserCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCoupon'], meta: { name: 'UserCoupon' } }
    /**
     * Find zero or one UserCoupon that matches the filter.
     * @param {UserCouponFindUniqueArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCouponFindUniqueArgs>(args: SelectSubset<T, UserCouponFindUniqueArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserCoupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserCouponFindUniqueOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCouponFindFirstArgs>(args?: SelectSubset<T, UserCouponFindFirstArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany()
     * 
     * // Get first 10 UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCouponFindManyArgs>(args?: SelectSubset<T, UserCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserCoupon.
     * @param {UserCouponCreateArgs} args - Arguments to create a UserCoupon.
     * @example
     * // Create one UserCoupon
     * const UserCoupon = await prisma.userCoupon.create({
     *   data: {
     *     // ... data to create a UserCoupon
     *   }
     * })
     * 
     */
    create<T extends UserCouponCreateArgs>(args: SelectSubset<T, UserCouponCreateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserCoupons.
     * @param {UserCouponCreateManyArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCouponCreateManyArgs>(args?: SelectSubset<T, UserCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCoupons and returns the data saved in the database.
     * @param {UserCouponCreateManyAndReturnArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCoupons and only return the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserCoupon.
     * @param {UserCouponDeleteArgs} args - Arguments to delete one UserCoupon.
     * @example
     * // Delete one UserCoupon
     * const UserCoupon = await prisma.userCoupon.delete({
     *   where: {
     *     // ... filter to delete one UserCoupon
     *   }
     * })
     * 
     */
    delete<T extends UserCouponDeleteArgs>(args: SelectSubset<T, UserCouponDeleteArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserCoupon.
     * @param {UserCouponUpdateArgs} args - Arguments to update one UserCoupon.
     * @example
     * // Update one UserCoupon
     * const userCoupon = await prisma.userCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCouponUpdateArgs>(args: SelectSubset<T, UserCouponUpdateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserCoupons.
     * @param {UserCouponDeleteManyArgs} args - Arguments to filter UserCoupons to delete.
     * @example
     * // Delete a few UserCoupons
     * const { count } = await prisma.userCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCouponDeleteManyArgs>(args?: SelectSubset<T, UserCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCoupons
     * const userCoupon = await prisma.userCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCouponUpdateManyArgs>(args: SelectSubset<T, UserCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCoupon.
     * @param {UserCouponUpsertArgs} args - Arguments to update or create a UserCoupon.
     * @example
     * // Update or create a UserCoupon
     * const userCoupon = await prisma.userCoupon.upsert({
     *   create: {
     *     // ... data to create a UserCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCoupon we want to update
     *   }
     * })
     */
    upsert<T extends UserCouponUpsertArgs>(args: SelectSubset<T, UserCouponUpsertArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponCountArgs} args - Arguments to filter UserCoupons to count.
     * @example
     * // Count the number of UserCoupons
     * const count = await prisma.userCoupon.count({
     *   where: {
     *     // ... the filter for the UserCoupons we want to count
     *   }
     * })
    **/
    count<T extends UserCouponCountArgs>(
      args?: Subset<T, UserCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCouponAggregateArgs>(args: Subset<T, UserCouponAggregateArgs>): Prisma.PrismaPromise<GetUserCouponAggregateType<T>>

    /**
     * Group by UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCouponGroupByArgs['orderBy'] }
        : { orderBy?: UserCouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCoupon model
   */
  readonly fields: UserCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserCoupon$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserCoupon$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCoupon model
   */ 
  interface UserCouponFieldRefs {
    readonly id: FieldRef<"UserCoupon", 'Int'>
    readonly isRedeem: FieldRef<"UserCoupon", 'Boolean'>
    readonly percentage: FieldRef<"UserCoupon", 'Int'>
    readonly createdAt: FieldRef<"UserCoupon", 'DateTime'>
    readonly expiredAt: FieldRef<"UserCoupon", 'DateTime'>
    readonly userId: FieldRef<"UserCoupon", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserCoupon findUnique
   */
  export type UserCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findUniqueOrThrow
   */
  export type UserCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findFirst
   */
  export type UserCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findFirstOrThrow
   */
  export type UserCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findMany
   */
  export type UserCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupons to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon create
   */
  export type UserCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCoupon.
     */
    data: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
  }

  /**
   * UserCoupon createMany
   */
  export type UserCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoupon createManyAndReturn
   */
  export type UserCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCoupon update
   */
  export type UserCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCoupon.
     */
    data: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
    /**
     * Choose, which UserCoupon to update.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon updateMany
   */
  export type UserCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCoupons.
     */
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyInput>
    /**
     * Filter which UserCoupons to update
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon upsert
   */
  export type UserCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCoupon to update in case it exists.
     */
    where: UserCouponWhereUniqueInput
    /**
     * In case the UserCoupon found by the `where` argument doesn't exist, create a new UserCoupon with this data.
     */
    create: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
    /**
     * In case the UserCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
  }

  /**
   * UserCoupon delete
   */
  export type UserCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter which UserCoupon to delete.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon deleteMany
   */
  export type UserCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupons to delete
     */
    where?: UserCouponWhereInput
  }

  /**
   * UserCoupon.User
   */
  export type UserCoupon$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserCoupon without action
   */
  export type UserCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
  }


  /**
   * Model UserPoint
   */

  export type AggregateUserPoint = {
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  export type UserPointAvgAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type UserPointSumAggregateOutputType = {
    id: number | null
    point: number | null
  }

  export type UserPointMinAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    point: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: string | null
  }

  export type UserPointMaxAggregateOutputType = {
    id: number | null
    isRedeem: boolean | null
    point: number | null
    createdAt: Date | null
    expiredAt: Date | null
    userId: string | null
  }

  export type UserPointCountAggregateOutputType = {
    id: number
    isRedeem: number
    point: number
    createdAt: number
    expiredAt: number
    userId: number
    _all: number
  }


  export type UserPointAvgAggregateInputType = {
    id?: true
    point?: true
  }

  export type UserPointSumAggregateInputType = {
    id?: true
    point?: true
  }

  export type UserPointMinAggregateInputType = {
    id?: true
    isRedeem?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type UserPointMaxAggregateInputType = {
    id?: true
    isRedeem?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
  }

  export type UserPointCountAggregateInputType = {
    id?: true
    isRedeem?: true
    point?: true
    createdAt?: true
    expiredAt?: true
    userId?: true
    _all?: true
  }

  export type UserPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoint to aggregate.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPoints
    **/
    _count?: true | UserPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointMaxAggregateInputType
  }

  export type GetUserPointAggregateType<T extends UserPointAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPoint[P]>
      : GetScalarType<T[P], AggregateUserPoint[P]>
  }




  export type UserPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithAggregationInput | UserPointOrderByWithAggregationInput[]
    by: UserPointScalarFieldEnum[] | UserPointScalarFieldEnum
    having?: UserPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointCountAggregateInputType | true
    _avg?: UserPointAvgAggregateInputType
    _sum?: UserPointSumAggregateInputType
    _min?: UserPointMinAggregateInputType
    _max?: UserPointMaxAggregateInputType
  }

  export type UserPointGroupByOutputType = {
    id: number
    isRedeem: boolean
    point: number
    createdAt: Date
    expiredAt: Date
    userId: string | null
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  type GetUserPointGroupByPayload<T extends UserPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointGroupByOutputType[P]>
        }
      >
    >


  export type UserPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    User?: boolean | UserPoint$UserArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isRedeem?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
    User?: boolean | UserPoint$UserArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectScalar = {
    id?: boolean
    isRedeem?: boolean
    point?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    userId?: boolean
  }

  export type UserPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserPoint$UserArgs<ExtArgs>
  }
  export type UserPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserPoint$UserArgs<ExtArgs>
  }

  export type $UserPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPoint"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isRedeem: boolean
      point: number
      createdAt: Date
      expiredAt: Date
      userId: string | null
    }, ExtArgs["result"]["userPoint"]>
    composites: {}
  }

  type UserPointGetPayload<S extends boolean | null | undefined | UserPointDefaultArgs> = $Result.GetResult<Prisma.$UserPointPayload, S>

  type UserPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPointCountAggregateInputType | true
    }

  export interface UserPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPoint'], meta: { name: 'UserPoint' } }
    /**
     * Find zero or one UserPoint that matches the filter.
     * @param {UserPointFindUniqueArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPointFindUniqueArgs>(args: SelectSubset<T, UserPointFindUniqueArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPointFindUniqueOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPointFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPointFindFirstArgs>(args?: SelectSubset<T, UserPointFindFirstArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPointFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPoints
     * const userPoints = await prisma.userPoint.findMany()
     * 
     * // Get first 10 UserPoints
     * const userPoints = await prisma.userPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointWithIdOnly = await prisma.userPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPointFindManyArgs>(args?: SelectSubset<T, UserPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPoint.
     * @param {UserPointCreateArgs} args - Arguments to create a UserPoint.
     * @example
     * // Create one UserPoint
     * const UserPoint = await prisma.userPoint.create({
     *   data: {
     *     // ... data to create a UserPoint
     *   }
     * })
     * 
     */
    create<T extends UserPointCreateArgs>(args: SelectSubset<T, UserPointCreateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPoints.
     * @param {UserPointCreateManyArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPointCreateManyArgs>(args?: SelectSubset<T, UserPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPoints and returns the data saved in the database.
     * @param {UserPointCreateManyAndReturnArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPoints and only return the `id`
     * const userPointWithIdOnly = await prisma.userPoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPointCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPoint.
     * @param {UserPointDeleteArgs} args - Arguments to delete one UserPoint.
     * @example
     * // Delete one UserPoint
     * const UserPoint = await prisma.userPoint.delete({
     *   where: {
     *     // ... filter to delete one UserPoint
     *   }
     * })
     * 
     */
    delete<T extends UserPointDeleteArgs>(args: SelectSubset<T, UserPointDeleteArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPoint.
     * @param {UserPointUpdateArgs} args - Arguments to update one UserPoint.
     * @example
     * // Update one UserPoint
     * const userPoint = await prisma.userPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPointUpdateArgs>(args: SelectSubset<T, UserPointUpdateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPoints.
     * @param {UserPointDeleteManyArgs} args - Arguments to filter UserPoints to delete.
     * @example
     * // Delete a few UserPoints
     * const { count } = await prisma.userPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPointDeleteManyArgs>(args?: SelectSubset<T, UserPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPoints
     * const userPoint = await prisma.userPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPointUpdateManyArgs>(args: SelectSubset<T, UserPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPoint.
     * @param {UserPointUpsertArgs} args - Arguments to update or create a UserPoint.
     * @example
     * // Update or create a UserPoint
     * const userPoint = await prisma.userPoint.upsert({
     *   create: {
     *     // ... data to create a UserPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPoint we want to update
     *   }
     * })
     */
    upsert<T extends UserPointUpsertArgs>(args: SelectSubset<T, UserPointUpsertArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointCountArgs} args - Arguments to filter UserPoints to count.
     * @example
     * // Count the number of UserPoints
     * const count = await prisma.userPoint.count({
     *   where: {
     *     // ... the filter for the UserPoints we want to count
     *   }
     * })
    **/
    count<T extends UserPointCountArgs>(
      args?: Subset<T, UserPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPointAggregateArgs>(args: Subset<T, UserPointAggregateArgs>): Prisma.PrismaPromise<GetUserPointAggregateType<T>>

    /**
     * Group by UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPointGroupByArgs['orderBy'] }
        : { orderBy?: UserPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPoint model
   */
  readonly fields: UserPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserPoint$UserArgs<ExtArgs> = {}>(args?: Subset<T, UserPoint$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPoint model
   */ 
  interface UserPointFieldRefs {
    readonly id: FieldRef<"UserPoint", 'Int'>
    readonly isRedeem: FieldRef<"UserPoint", 'Boolean'>
    readonly point: FieldRef<"UserPoint", 'Int'>
    readonly createdAt: FieldRef<"UserPoint", 'DateTime'>
    readonly expiredAt: FieldRef<"UserPoint", 'DateTime'>
    readonly userId: FieldRef<"UserPoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPoint findUnique
   */
  export type UserPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findUniqueOrThrow
   */
  export type UserPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findFirst
   */
  export type UserPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findFirstOrThrow
   */
  export type UserPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findMany
   */
  export type UserPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint create
   */
  export type UserPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPoint.
     */
    data: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
  }

  /**
   * UserPoint createMany
   */
  export type UserPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPoint createManyAndReturn
   */
  export type UserPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPoint update
   */
  export type UserPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPoint.
     */
    data: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
    /**
     * Choose, which UserPoint to update.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint updateMany
   */
  export type UserPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPoints.
     */
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyInput>
    /**
     * Filter which UserPoints to update
     */
    where?: UserPointWhereInput
  }

  /**
   * UserPoint upsert
   */
  export type UserPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPoint to update in case it exists.
     */
    where: UserPointWhereUniqueInput
    /**
     * In case the UserPoint found by the `where` argument doesn't exist, create a new UserPoint with this data.
     */
    create: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
    /**
     * In case the UserPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
  }

  /**
   * UserPoint delete
   */
  export type UserPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter which UserPoint to delete.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint deleteMany
   */
  export type UserPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoints to delete
     */
    where?: UserPointWhereInput
  }

  /**
   * UserPoint.User
   */
  export type UserPoint$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserPoint without action
   */
  export type UserPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total_price: number | null
    final_price: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total_price: number | null
    final_price: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    total_price: number | null
    final_price: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    expiredAt: Date | null
    redirect_url: string | null
    userId: string | null
    eventId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    total_price: number | null
    final_price: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    expiredAt: Date | null
    redirect_url: string | null
    userId: string | null
    eventId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    total_price: number
    final_price: number
    status: number
    createdAt: number
    expiredAt: number
    redirect_url: number
    userId: number
    eventId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    createdAt?: true
    expiredAt?: true
    redirect_url?: true
    userId?: true
    eventId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    createdAt?: true
    expiredAt?: true
    redirect_url?: true
    userId?: true
    eventId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    total_price?: true
    final_price?: true
    status?: true
    createdAt?: true
    expiredAt?: true
    redirect_url?: true
    userId?: true
    eventId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    total_price: number
    final_price: number
    status: $Enums.Status
    createdAt: Date
    expiredAt: Date
    redirect_url: string | null
    userId: string | null
    eventId: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
    Order_Details?: boolean | Order$Order_DetailsArgs<ExtArgs>
    User?: boolean | Order$UserArgs<ExtArgs>
    Event?: boolean | Order$EventArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
    User?: boolean | Order$UserArgs<ExtArgs>
    Event?: boolean | Order$EventArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    total_price?: boolean
    final_price?: boolean
    status?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    redirect_url?: boolean
    userId?: boolean
    eventId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order_Details?: boolean | Order$Order_DetailsArgs<ExtArgs>
    User?: boolean | Order$UserArgs<ExtArgs>
    Event?: boolean | Order$EventArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Order$UserArgs<ExtArgs>
    Event?: boolean | Order$EventArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      Order_Details: Prisma.$Order_DetailsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      Event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total_price: number
      final_price: number
      status: $Enums.Status
      createdAt: Date
      expiredAt: Date
      redirect_url: string | null
      userId: string | null
      eventId: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order_Details<T extends Order$Order_DetailsArgs<ExtArgs> = {}>(args?: Subset<T, Order$Order_DetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Order$UserArgs<ExtArgs> = {}>(args?: Subset<T, Order$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Event<T extends Order$EventArgs<ExtArgs> = {}>(args?: Subset<T, Order$EventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly total_price: FieldRef<"Order", 'Int'>
    readonly final_price: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'Status'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly expiredAt: FieldRef<"Order", 'DateTime'>
    readonly redirect_url: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly eventId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.Order_Details
   */
  export type Order$Order_DetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    cursor?: Order_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order.User
   */
  export type Order$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.Event
   */
  export type Order$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Order_Details
   */

  export type AggregateOrder_Details = {
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  export type Order_DetailsAvgAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
    orderId: number | null
    ticketId: number | null
  }

  export type Order_DetailsSumAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
    orderId: number | null
    ticketId: number | null
  }

  export type Order_DetailsMinAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
    orderId: number | null
    ticketId: number | null
  }

  export type Order_DetailsMaxAggregateOutputType = {
    quantity: number | null
    subtotal: number | null
    orderId: number | null
    ticketId: number | null
  }

  export type Order_DetailsCountAggregateOutputType = {
    quantity: number
    subtotal: number
    orderId: number
    ticketId: number
    _all: number
  }


  export type Order_DetailsAvgAggregateInputType = {
    quantity?: true
    subtotal?: true
    orderId?: true
    ticketId?: true
  }

  export type Order_DetailsSumAggregateInputType = {
    quantity?: true
    subtotal?: true
    orderId?: true
    ticketId?: true
  }

  export type Order_DetailsMinAggregateInputType = {
    quantity?: true
    subtotal?: true
    orderId?: true
    ticketId?: true
  }

  export type Order_DetailsMaxAggregateInputType = {
    quantity?: true
    subtotal?: true
    orderId?: true
    ticketId?: true
  }

  export type Order_DetailsCountAggregateInputType = {
    quantity?: true
    subtotal?: true
    orderId?: true
    ticketId?: true
    _all?: true
  }

  export type Order_DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to aggregate.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Order_Details
    **/
    _count?: true | Order_DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type GetOrder_DetailsAggregateType<T extends Order_DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_Details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_Details[P]>
      : GetScalarType<T[P], AggregateOrder_Details[P]>
  }




  export type Order_DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Order_DetailsWhereInput
    orderBy?: Order_DetailsOrderByWithAggregationInput | Order_DetailsOrderByWithAggregationInput[]
    by: Order_DetailsScalarFieldEnum[] | Order_DetailsScalarFieldEnum
    having?: Order_DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_DetailsCountAggregateInputType | true
    _avg?: Order_DetailsAvgAggregateInputType
    _sum?: Order_DetailsSumAggregateInputType
    _min?: Order_DetailsMinAggregateInputType
    _max?: Order_DetailsMaxAggregateInputType
  }

  export type Order_DetailsGroupByOutputType = {
    quantity: number
    subtotal: number
    orderId: number
    ticketId: number
    _count: Order_DetailsCountAggregateOutputType | null
    _avg: Order_DetailsAvgAggregateOutputType | null
    _sum: Order_DetailsSumAggregateOutputType | null
    _min: Order_DetailsMinAggregateOutputType | null
    _max: Order_DetailsMaxAggregateOutputType | null
  }

  type GetOrder_DetailsGroupByPayload<T extends Order_DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_DetailsGroupByOutputType[P]>
        }
      >
    >


  export type Order_DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    subtotal?: boolean
    orderId?: boolean
    ticketId?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity?: boolean
    subtotal?: boolean
    orderId?: boolean
    ticketId?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_Details"]>

  export type Order_DetailsSelectScalar = {
    quantity?: boolean
    subtotal?: boolean
    orderId?: boolean
    ticketId?: boolean
  }

  export type Order_DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type Order_DetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $Order_DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order_Details"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quantity: number
      subtotal: number
      orderId: number
      ticketId: number
    }, ExtArgs["result"]["order_Details"]>
    composites: {}
  }

  type Order_DetailsGetPayload<S extends boolean | null | undefined | Order_DetailsDefaultArgs> = $Result.GetResult<Prisma.$Order_DetailsPayload, S>

  type Order_DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Order_DetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_DetailsCountAggregateInputType | true
    }

  export interface Order_DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order_Details'], meta: { name: 'Order_Details' } }
    /**
     * Find zero or one Order_Details that matches the filter.
     * @param {Order_DetailsFindUniqueArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Order_DetailsFindUniqueArgs>(args: SelectSubset<T, Order_DetailsFindUniqueArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_Details that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Order_DetailsFindUniqueOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Order_DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Order_DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Order_DetailsFindFirstArgs>(args?: SelectSubset<T, Order_DetailsFindFirstArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindFirstOrThrowArgs} args - Arguments to find a Order_Details
     * @example
     * // Get one Order_Details
     * const order_Details = await prisma.order_Details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Order_DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Order_DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_Details
     * const order_Details = await prisma.order_Details.findMany()
     * 
     * // Get first 10 Order_Details
     * const order_Details = await prisma.order_Details.findMany({ take: 10 })
     * 
     * // Only select the `quantity`
     * const order_DetailsWithQuantityOnly = await prisma.order_Details.findMany({ select: { quantity: true } })
     * 
     */
    findMany<T extends Order_DetailsFindManyArgs>(args?: SelectSubset<T, Order_DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_Details.
     * @param {Order_DetailsCreateArgs} args - Arguments to create a Order_Details.
     * @example
     * // Create one Order_Details
     * const Order_Details = await prisma.order_Details.create({
     *   data: {
     *     // ... data to create a Order_Details
     *   }
     * })
     * 
     */
    create<T extends Order_DetailsCreateArgs>(args: SelectSubset<T, Order_DetailsCreateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_Details.
     * @param {Order_DetailsCreateManyArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Order_DetailsCreateManyArgs>(args?: SelectSubset<T, Order_DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_Details and returns the data saved in the database.
     * @param {Order_DetailsCreateManyAndReturnArgs} args - Arguments to create many Order_Details.
     * @example
     * // Create many Order_Details
     * const order_Details = await prisma.order_Details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_Details and only return the `quantity`
     * const order_DetailsWithQuantityOnly = await prisma.order_Details.createManyAndReturn({ 
     *   select: { quantity: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Order_DetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, Order_DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_Details.
     * @param {Order_DetailsDeleteArgs} args - Arguments to delete one Order_Details.
     * @example
     * // Delete one Order_Details
     * const Order_Details = await prisma.order_Details.delete({
     *   where: {
     *     // ... filter to delete one Order_Details
     *   }
     * })
     * 
     */
    delete<T extends Order_DetailsDeleteArgs>(args: SelectSubset<T, Order_DetailsDeleteArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_Details.
     * @param {Order_DetailsUpdateArgs} args - Arguments to update one Order_Details.
     * @example
     * // Update one Order_Details
     * const order_Details = await prisma.order_Details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Order_DetailsUpdateArgs>(args: SelectSubset<T, Order_DetailsUpdateArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_Details.
     * @param {Order_DetailsDeleteManyArgs} args - Arguments to filter Order_Details to delete.
     * @example
     * // Delete a few Order_Details
     * const { count } = await prisma.order_Details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Order_DetailsDeleteManyArgs>(args?: SelectSubset<T, Order_DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_Details
     * const order_Details = await prisma.order_Details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Order_DetailsUpdateManyArgs>(args: SelectSubset<T, Order_DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_Details.
     * @param {Order_DetailsUpsertArgs} args - Arguments to update or create a Order_Details.
     * @example
     * // Update or create a Order_Details
     * const order_Details = await prisma.order_Details.upsert({
     *   create: {
     *     // ... data to create a Order_Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_Details we want to update
     *   }
     * })
     */
    upsert<T extends Order_DetailsUpsertArgs>(args: SelectSubset<T, Order_DetailsUpsertArgs<ExtArgs>>): Prisma__Order_DetailsClient<$Result.GetResult<Prisma.$Order_DetailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsCountArgs} args - Arguments to filter Order_Details to count.
     * @example
     * // Count the number of Order_Details
     * const count = await prisma.order_Details.count({
     *   where: {
     *     // ... the filter for the Order_Details we want to count
     *   }
     * })
    **/
    count<T extends Order_DetailsCountArgs>(
      args?: Subset<T, Order_DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_DetailsAggregateArgs>(args: Subset<T, Order_DetailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_DetailsAggregateType<T>>

    /**
     * Group by Order_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Order_DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Order_DetailsGroupByArgs['orderBy'] }
        : { orderBy?: Order_DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Order_DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_DetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order_Details model
   */
  readonly fields: Order_DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order_Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Order_DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order_Details model
   */ 
  interface Order_DetailsFieldRefs {
    readonly quantity: FieldRef<"Order_Details", 'Int'>
    readonly subtotal: FieldRef<"Order_Details", 'Int'>
    readonly orderId: FieldRef<"Order_Details", 'Int'>
    readonly ticketId: FieldRef<"Order_Details", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order_Details findUnique
   */
  export type Order_DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findUniqueOrThrow
   */
  export type Order_DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details findFirst
   */
  export type Order_DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findFirstOrThrow
   */
  export type Order_DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Order_Details.
     */
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details findMany
   */
  export type Order_DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Order_Details to fetch.
     */
    where?: Order_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Order_Details to fetch.
     */
    orderBy?: Order_DetailsOrderByWithRelationInput | Order_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Order_Details.
     */
    cursor?: Order_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Order_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Order_Details.
     */
    skip?: number
    distinct?: Order_DetailsScalarFieldEnum | Order_DetailsScalarFieldEnum[]
  }

  /**
   * Order_Details create
   */
  export type Order_DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Order_Details.
     */
    data: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
  }

  /**
   * Order_Details createMany
   */
  export type Order_DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order_Details createManyAndReturn
   */
  export type Order_DetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Order_Details.
     */
    data: Order_DetailsCreateManyInput | Order_DetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order_Details update
   */
  export type Order_DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Order_Details.
     */
    data: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
    /**
     * Choose, which Order_Details to update.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details updateMany
   */
  export type Order_DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Order_Details.
     */
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Order_Details to update
     */
    where?: Order_DetailsWhereInput
  }

  /**
   * Order_Details upsert
   */
  export type Order_DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Order_Details to update in case it exists.
     */
    where: Order_DetailsWhereUniqueInput
    /**
     * In case the Order_Details found by the `where` argument doesn't exist, create a new Order_Details with this data.
     */
    create: XOR<Order_DetailsCreateInput, Order_DetailsUncheckedCreateInput>
    /**
     * In case the Order_Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Order_DetailsUpdateInput, Order_DetailsUncheckedUpdateInput>
  }

  /**
   * Order_Details delete
   */
  export type Order_DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
    /**
     * Filter which Order_Details to delete.
     */
    where: Order_DetailsWhereUniqueInput
  }

  /**
   * Order_Details deleteMany
   */
  export type Order_DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order_Details to delete
     */
    where?: Order_DetailsWhereInput
  }

  /**
   * Order_Details without action
   */
  export type Order_DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_Details
     */
    select?: Order_DetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Order_DetailsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    event_name: 'event_name',
    description: 'description',
    start_time: 'start_time',
    end_time: 'end_time',
    event_date: 'event_date',
    location: 'location',
    venue: 'venue',
    event_type: 'event_type',
    isActive: 'isActive',
    event_thumbnail: 'event_thumbnail',
    event_preview: 'event_preview',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    organizerId: 'organizerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    category: 'category',
    desc: 'desc',
    seats: 'seats',
    price: 'price',
    eventId: 'eventId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const OrganizerScalarFieldEnum: {
    id: 'id',
    organizer_name: 'organizer_name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify'
  };

  export type OrganizerScalarFieldEnum = (typeof OrganizerScalarFieldEnum)[keyof typeof OrganizerScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    isVerify: 'isVerify',
    ref_code: 'ref_code',
    ref_by: 'ref_by',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCouponScalarFieldEnum: {
    id: 'id',
    isRedeem: 'isRedeem',
    percentage: 'percentage',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    userId: 'userId'
  };

  export type UserCouponScalarFieldEnum = (typeof UserCouponScalarFieldEnum)[keyof typeof UserCouponScalarFieldEnum]


  export const UserPointScalarFieldEnum: {
    id: 'id',
    isRedeem: 'isRedeem',
    point: 'point',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    userId: 'userId'
  };

  export type UserPointScalarFieldEnum = (typeof UserPointScalarFieldEnum)[keyof typeof UserPointScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    total_price: 'total_price',
    final_price: 'final_price',
    status: 'status',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    redirect_url: 'redirect_url',
    userId: 'userId',
    eventId: 'eventId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const Order_DetailsScalarFieldEnum: {
    quantity: 'quantity',
    subtotal: 'subtotal',
    orderId: 'orderId',
    ticketId: 'ticketId'
  };

  export type Order_DetailsScalarFieldEnum = (typeof Order_DetailsScalarFieldEnum)[keyof typeof Order_DetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType'>
    


  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EventCategory'
   */
  export type EnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory'>
    


  /**
   * Reference to a field of type 'EventCategory[]'
   */
  export type ListEnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    event_name?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringNullableFilter<"Event"> | string | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isActive?: BoolFilter<"Event"> | boolean
    event_thumbnail?: StringNullableFilter<"Event"> | string | null
    event_preview?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    organizerId?: StringNullableFilter<"Event"> | string | null
    Ticket?: TicketListRelationFilter
    Rating?: RatingListRelationFilter
    Order?: OrderListRelationFilter
    Organizer?: XOR<OrganizerNullableScalarRelationFilter, OrganizerWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    event_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    location?: SortOrder
    venue?: SortOrderInput | SortOrder
    event_type?: SortOrder
    isActive?: SortOrder
    event_thumbnail?: SortOrderInput | SortOrder
    event_preview?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    organizerId?: SortOrderInput | SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
    Rating?: RatingOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
    Organizer?: OrganizerOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    event_name?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringNullableFilter<"Event"> | string | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isActive?: BoolFilter<"Event"> | boolean
    event_thumbnail?: StringNullableFilter<"Event"> | string | null
    event_preview?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    organizerId?: StringNullableFilter<"Event"> | string | null
    Ticket?: TicketListRelationFilter
    Rating?: RatingListRelationFilter
    Order?: OrderListRelationFilter
    Organizer?: XOR<OrganizerNullableScalarRelationFilter, OrganizerWhereInput> | null
  }, "id" | "event_name">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    event_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    event_date?: SortOrderInput | SortOrder
    location?: SortOrder
    venue?: SortOrderInput | SortOrder
    event_type?: SortOrder
    isActive?: SortOrder
    event_thumbnail?: SortOrderInput | SortOrder
    event_preview?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    category?: SortOrder
    organizerId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    event_name?: StringNullableWithAggregatesFilter<"Event"> | string | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    event_date?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    location?: EnumLocationWithAggregatesFilter<"Event"> | $Enums.Location
    venue?: StringNullableWithAggregatesFilter<"Event"> | string | null
    event_type?: EnumEventTypeWithAggregatesFilter<"Event"> | $Enums.EventType
    isActive?: BoolWithAggregatesFilter<"Event"> | boolean
    event_thumbnail?: StringNullableWithAggregatesFilter<"Event"> | string | null
    event_preview?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    category?: EnumEventCategoryWithAggregatesFilter<"Event"> | $Enums.EventCategory
    organizerId?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: StringNullableFilter<"Ticket"> | string | null
    desc?: StringNullableFilter<"Ticket"> | string | null
    seats?: IntNullableFilter<"Ticket"> | number | null
    price?: IntFilter<"Ticket"> | number
    eventId?: StringNullableFilter<"Ticket"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    price?: SortOrder
    eventId?: SortOrderInput | SortOrder
    Order_Details?: Order_DetailsOrderByRelationAggregateInput
    Event?: EventOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    category?: StringNullableFilter<"Ticket"> | string | null
    desc?: StringNullableFilter<"Ticket"> | string | null
    seats?: IntNullableFilter<"Ticket"> | number | null
    price?: IntFilter<"Ticket"> | number
    eventId?: StringNullableFilter<"Ticket"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    seats?: SortOrderInput | SortOrder
    price?: SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    category?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    desc?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    seats?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    price?: IntWithAggregatesFilter<"Ticket"> | number
    eventId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
  }

  export type OrganizerWhereInput = {
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    id?: StringFilter<"Organizer"> | string
    organizer_name?: StringFilter<"Organizer"> | string
    email?: StringNullableFilter<"Organizer"> | string | null
    password?: StringNullableFilter<"Organizer"> | string | null
    avatar?: StringNullableFilter<"Organizer"> | string | null
    isVerify?: BoolFilter<"Organizer"> | boolean
    Event?: EventListRelationFilter
  }

  export type OrganizerOrderByWithRelationInput = {
    id?: SortOrder
    organizer_name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    Event?: EventOrderByRelationAggregateInput
  }

  export type OrganizerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizer_name?: string
    email?: string
    AND?: OrganizerWhereInput | OrganizerWhereInput[]
    OR?: OrganizerWhereInput[]
    NOT?: OrganizerWhereInput | OrganizerWhereInput[]
    password?: StringNullableFilter<"Organizer"> | string | null
    avatar?: StringNullableFilter<"Organizer"> | string | null
    isVerify?: BoolFilter<"Organizer"> | boolean
    Event?: EventListRelationFilter
  }, "id" | "organizer_name" | "email">

  export type OrganizerOrderByWithAggregationInput = {
    id?: SortOrder
    organizer_name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    _count?: OrganizerCountOrderByAggregateInput
    _max?: OrganizerMaxOrderByAggregateInput
    _min?: OrganizerMinOrderByAggregateInput
  }

  export type OrganizerScalarWhereWithAggregatesInput = {
    AND?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    OR?: OrganizerScalarWhereWithAggregatesInput[]
    NOT?: OrganizerScalarWhereWithAggregatesInput | OrganizerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organizer"> | string
    organizer_name?: StringWithAggregatesFilter<"Organizer"> | string
    email?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    password?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Organizer"> | string | null
    isVerify?: BoolWithAggregatesFilter<"Organizer"> | boolean
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    rating?: IntFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    eventId?: StringNullableFilter<"Rating"> | string | null
    userId?: StringNullableFilter<"Rating"> | string | null
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    eventId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    Event?: EventOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    rating?: IntFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    eventId?: StringNullableFilter<"Rating"> | string | null
    userId?: StringNullableFilter<"Rating"> | string | null
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    eventId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    rating?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringWithAggregatesFilter<"Rating"> | string
    eventId?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Rating"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    ref_code?: StringFilter<"User"> | string
    ref_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Order?: OrderListRelationFilter
    Rating?: RatingListRelationFilter
    User_Coupon?: UserCouponListRelationFilter
    User_Point?: UserPointListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    ref_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Order?: OrderOrderByRelationAggregateInput
    Rating?: RatingOrderByRelationAggregateInput
    User_Coupon?: UserCouponOrderByRelationAggregateInput
    User_Point?: UserPointOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolFilter<"User"> | boolean
    ref_code?: StringFilter<"User"> | string
    ref_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Order?: OrderListRelationFilter
    Rating?: RatingListRelationFilter
    User_Coupon?: UserCouponListRelationFilter
    User_Point?: UserPointListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    ref_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    ref_code?: StringWithAggregatesFilter<"User"> | string
    ref_by?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserCouponWhereInput = {
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    isRedeem?: BoolFilter<"UserCoupon"> | boolean
    percentage?: IntFilter<"UserCoupon"> | number
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
    expiredAt?: DateTimeFilter<"UserCoupon"> | Date | string
    userId?: StringNullableFilter<"UserCoupon"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserCouponOrderByWithRelationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserCouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    isRedeem?: BoolFilter<"UserCoupon"> | boolean
    percentage?: IntFilter<"UserCoupon"> | number
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
    expiredAt?: DateTimeFilter<"UserCoupon"> | Date | string
    userId?: StringNullableFilter<"UserCoupon"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserCouponOrderByWithAggregationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: UserCouponCountOrderByAggregateInput
    _avg?: UserCouponAvgOrderByAggregateInput
    _max?: UserCouponMaxOrderByAggregateInput
    _min?: UserCouponMinOrderByAggregateInput
    _sum?: UserCouponSumOrderByAggregateInput
  }

  export type UserCouponScalarWhereWithAggregatesInput = {
    AND?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    OR?: UserCouponScalarWhereWithAggregatesInput[]
    NOT?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCoupon"> | number
    isRedeem?: BoolWithAggregatesFilter<"UserCoupon"> | boolean
    percentage?: IntWithAggregatesFilter<"UserCoupon"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"UserCoupon"> | string | null
  }

  export type UserPointWhereInput = {
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    id?: IntFilter<"UserPoint"> | number
    isRedeem?: BoolFilter<"UserPoint"> | boolean
    point?: IntFilter<"UserPoint"> | number
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
    expiredAt?: DateTimeFilter<"UserPoint"> | Date | string
    userId?: StringNullableFilter<"UserPoint"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserPointOrderByWithRelationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type UserPointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    isRedeem?: BoolFilter<"UserPoint"> | boolean
    point?: IntFilter<"UserPoint"> | number
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
    expiredAt?: DateTimeFilter<"UserPoint"> | Date | string
    userId?: StringNullableFilter<"UserPoint"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserPointOrderByWithAggregationInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: UserPointCountOrderByAggregateInput
    _avg?: UserPointAvgOrderByAggregateInput
    _max?: UserPointMaxOrderByAggregateInput
    _min?: UserPointMinOrderByAggregateInput
    _sum?: UserPointSumOrderByAggregateInput
  }

  export type UserPointScalarWhereWithAggregatesInput = {
    AND?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    OR?: UserPointScalarWhereWithAggregatesInput[]
    NOT?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPoint"> | number
    isRedeem?: BoolWithAggregatesFilter<"UserPoint"> | boolean
    point?: IntWithAggregatesFilter<"UserPoint"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserPoint"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"UserPoint"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"UserPoint"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: StringNullableFilter<"Order"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    Order_Details?: Order_DetailsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: StringNullableFilter<"Order"> | string | null
    Order_Details?: Order_DetailsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    redirect_url?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    total_price?: IntWithAggregatesFilter<"Order"> | number
    final_price?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumStatusWithAggregatesFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    redirect_url?: StringNullableWithAggregatesFilter<"Order"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type Order_DetailsWhereInput = {
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    quantity?: IntFilter<"Order_Details"> | number
    subtotal?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
    ticketId?: IntFilter<"Order_Details"> | number
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type Order_DetailsOrderByWithRelationInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
    Order?: OrderOrderByWithRelationInput
    Ticket?: TicketOrderByWithRelationInput
  }

  export type Order_DetailsWhereUniqueInput = Prisma.AtLeast<{
    orderId_ticketId?: Order_DetailsOrderIdTicketIdCompoundUniqueInput
    AND?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    OR?: Order_DetailsWhereInput[]
    NOT?: Order_DetailsWhereInput | Order_DetailsWhereInput[]
    quantity?: IntFilter<"Order_Details"> | number
    subtotal?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
    ticketId?: IntFilter<"Order_Details"> | number
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "orderId_ticketId">

  export type Order_DetailsOrderByWithAggregationInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
    _count?: Order_DetailsCountOrderByAggregateInput
    _avg?: Order_DetailsAvgOrderByAggregateInput
    _max?: Order_DetailsMaxOrderByAggregateInput
    _min?: Order_DetailsMinOrderByAggregateInput
    _sum?: Order_DetailsSumOrderByAggregateInput
  }

  export type Order_DetailsScalarWhereWithAggregatesInput = {
    AND?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    OR?: Order_DetailsScalarWhereWithAggregatesInput[]
    NOT?: Order_DetailsScalarWhereWithAggregatesInput | Order_DetailsScalarWhereWithAggregatesInput[]
    quantity?: IntWithAggregatesFilter<"Order_Details"> | number
    subtotal?: IntWithAggregatesFilter<"Order_Details"> | number
    orderId?: IntWithAggregatesFilter<"Order_Details"> | number
    ticketId?: IntWithAggregatesFilter<"Order_Details"> | number
  }

  export type EventCreateInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Rating?: RatingCreateNestedManyWithoutEventInput
    Order?: OrderCreateNestedManyWithoutEventInput
    Organizer?: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    organizerId?: string | null
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Rating?: RatingUncheckedCreateNestedManyWithoutEventInput
    Order?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Rating?: RatingUpdateManyWithoutEventNestedInput
    Order?: OrderUpdateManyWithoutEventNestedInput
    Organizer?: OrganizerUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutEventNestedInput
    Order?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    organizerId?: string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateInput = {
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    Order_Details?: Order_DetailsCreateNestedManyWithoutTicketInput
    Event?: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    eventId?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    Order_Details?: Order_DetailsUpdateManyWithoutTicketNestedInput
    Event?: EventUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    eventId?: string | null
  }

  export type TicketUpdateManyMutationInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizerCreateInput = {
    id?: string
    organizer_name: string
    email?: string | null
    password?: string | null
    avatar?: string | null
    isVerify?: boolean
    Event?: EventCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUncheckedCreateInput = {
    id?: string
    organizer_name: string
    email?: string | null
    password?: string | null
    avatar?: string | null
    isVerify?: boolean
    Event?: EventUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type OrganizerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    Event?: EventUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    Event?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type OrganizerCreateManyInput = {
    id?: string
    organizer_name: string
    email?: string | null
    password?: string | null
    avatar?: string | null
    isVerify?: boolean
  }

  export type OrganizerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RatingCreateInput = {
    rating: number
    comment: string
    Event?: EventCreateNestedOneWithoutRatingInput
    User?: UserCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    rating: number
    comment: string
    eventId?: string | null
    userId?: string | null
  }

  export type RatingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneWithoutRatingNestedInput
    User?: UserUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingCreateManyInput = {
    id?: number
    rating: number
    comment: string
    eventId?: string | null
    userId?: string | null
  }

  export type RatingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
    Rating?: RatingCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponCreateNestedManyWithoutUserInput
    User_Point?: UserPointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Rating?: RatingUncheckedCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    User_Point?: UserPointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
    Rating?: RatingUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponCreateInput = {
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
    User?: UserCreateNestedOneWithoutUser_CouponInput
  }

  export type UserCouponUncheckedCreateInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId?: string | null
  }

  export type UserCouponUpdateInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutUser_CouponNestedInput
  }

  export type UserCouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCouponCreateManyInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId?: string | null
  }

  export type UserCouponUpdateManyMutationInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointCreateInput = {
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
    User?: UserCreateNestedOneWithoutUser_PointInput
  }

  export type UserPointUncheckedCreateInput = {
    id?: number
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId?: string | null
  }

  export type UserPointUpdateInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutUser_PointNestedInput
  }

  export type UserPointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPointCreateManyInput = {
    id?: number
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
    userId?: string | null
  }

  export type UserPointUpdateManyMutationInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrderInput
    User?: UserCreateNestedOneWithoutOrderInput
    Event?: EventCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    userId?: string | null
    eventId?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrderNestedInput
    User?: UserUpdateOneWithoutOrderNestedInput
    Event?: EventUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    userId?: string | null
    eventId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_DetailsCreateInput = {
    quantity: number
    subtotal: number
    Order: OrderCreateNestedOneWithoutOrder_DetailsInput
    Ticket: TicketCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateInput = {
    quantity: number
    subtotal: number
    orderId: number
    ticketId: number
  }

  export type Order_DetailsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrder_DetailsNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsCreateManyInput = {
    quantity: number
    subtotal: number
    orderId: number
    ticketId: number
  }

  export type Order_DetailsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrganizerNullableScalarRelationFilter = {
    is?: OrganizerWhereInput | null
    isNot?: OrganizerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    event_name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    event_date?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    event_type?: SortOrder
    isActive?: SortOrder
    event_thumbnail?: SortOrder
    event_preview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    organizerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    event_name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    event_date?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    event_type?: SortOrder
    isActive?: SortOrder
    event_thumbnail?: SortOrder
    event_preview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    organizerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    event_name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    event_date?: SortOrder
    location?: SortOrder
    venue?: SortOrder
    event_type?: SortOrder
    isActive?: SortOrder
    event_thumbnail?: SortOrder
    event_preview?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    organizerId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Order_DetailsListRelationFilter = {
    every?: Order_DetailsWhereInput
    some?: Order_DetailsWhereInput
    none?: Order_DetailsWhereInput
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type Order_DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    desc?: SortOrder
    seats?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    seats?: SortOrder
    price?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    desc?: SortOrder
    seats?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    desc?: SortOrder
    seats?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    seats?: SortOrder
    price?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizerCountOrderByAggregateInput = {
    id?: SortOrder
    organizer_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type OrganizerMaxOrderByAggregateInput = {
    id?: SortOrder
    organizer_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type OrganizerMinOrderByAggregateInput = {
    id?: SortOrder
    organizer_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCouponListRelationFilter = {
    every?: UserCouponWhereInput
    some?: UserCouponWhereInput
    none?: UserCouponWhereInput
  }

  export type UserPointListRelationFilter = {
    every?: UserPointWhereInput
    some?: UserPointWhereInput
    none?: UserPointWhereInput
  }

  export type UserCouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    ref_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    ref_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    isVerify?: SortOrder
    ref_code?: SortOrder
    ref_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCouponCountOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserCouponAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
  }

  export type UserCouponMaxOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserCouponMinOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserCouponSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
  }

  export type UserPointCountOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPointAvgOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type UserPointMaxOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPointMinOrderByAggregateInput = {
    id?: SortOrder
    isRedeem?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    userId?: SortOrder
  }

  export type UserPointSumOrderByAggregateInput = {
    id?: SortOrder
    point?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    redirect_url?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    final_price?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type Order_DetailsOrderIdTicketIdCompoundUniqueInput = {
    orderId: number
    ticketId: number
  }

  export type Order_DetailsCountOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
  }

  export type Order_DetailsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
  }

  export type Order_DetailsMaxOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
  }

  export type Order_DetailsMinOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
  }

  export type Order_DetailsSumOrderByAggregateInput = {
    quantity?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutEventInput = {
    create?: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput> | RatingCreateWithoutEventInput[] | RatingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutEventInput | RatingCreateOrConnectWithoutEventInput[]
    createMany?: RatingCreateManyEventInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrganizerCreateNestedOneWithoutEventInput = {
    create?: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutEventInput
    connect?: OrganizerWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput> | RatingCreateWithoutEventInput[] | RatingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutEventInput | RatingCreateOrConnectWithoutEventInput[]
    createMany?: RatingCreateManyEventInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumEventCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EventCategory
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutEventNestedInput = {
    create?: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput> | RatingCreateWithoutEventInput[] | RatingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutEventInput | RatingCreateOrConnectWithoutEventInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutEventInput | RatingUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RatingCreateManyEventInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutEventInput | RatingUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutEventInput | RatingUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrganizerUpdateOneWithoutEventNestedInput = {
    create?: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    connectOrCreate?: OrganizerCreateOrConnectWithoutEventInput
    upsert?: OrganizerUpsertWithoutEventInput
    disconnect?: OrganizerWhereInput | boolean
    delete?: OrganizerWhereInput | boolean
    connect?: OrganizerWhereUniqueInput
    update?: XOR<XOR<OrganizerUpdateToOneWithWhereWithoutEventInput, OrganizerUpdateWithoutEventInput>, OrganizerUncheckedUpdateWithoutEventInput>
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput> | RatingCreateWithoutEventInput[] | RatingUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutEventInput | RatingCreateOrConnectWithoutEventInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutEventInput | RatingUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RatingCreateManyEventInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutEventInput | RatingUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutEventInput | RatingUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput> | OrderCreateWithoutEventInput[] | OrderUncheckedCreateWithoutEventInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEventInput | OrderCreateOrConnectWithoutEventInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEventInput | OrderUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: OrderCreateManyEventInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEventInput | OrderUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEventInput | OrderUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type Order_DetailsCreateNestedManyWithoutTicketInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Order_DetailsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutTicketInput | Order_DetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutTicketInput | Order_DetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutTicketInput | Order_DetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type EventUpdateOneWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput> | Order_DetailsCreateWithoutTicketInput[] | Order_DetailsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutTicketInput | Order_DetailsCreateOrConnectWithoutTicketInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutTicketInput | Order_DetailsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: Order_DetailsCreateManyTicketInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutTicketInput | Order_DetailsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutTicketInput | Order_DetailsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutRatingInput = {
    create?: XOR<EventCreateWithoutRatingInput, EventUncheckedCreateWithoutRatingInput>
    connectOrCreate?: EventCreateOrConnectWithoutRatingInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingInput = {
    create?: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneWithoutRatingNestedInput = {
    create?: XOR<EventCreateWithoutRatingInput, EventUncheckedCreateWithoutRatingInput>
    connectOrCreate?: EventCreateOrConnectWithoutRatingInput
    upsert?: EventUpsertWithoutRatingInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRatingInput, EventUpdateWithoutRatingInput>, EventUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateOneWithoutRatingNestedInput = {
    create?: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingInput
    upsert?: UserUpsertWithoutRatingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingInput, UserUpdateWithoutRatingInput>, UserUncheckedUpdateWithoutRatingInput>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type UserCouponCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserPointCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type UserCouponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserPointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type UserCouponUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutUserInput | UserCouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutUserInput | UserCouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutUserInput | UserCouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserPointUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutUserInput | UserPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutUserInput | UserPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutUserInput | UserPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type UserCouponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutUserInput | UserCouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutUserInput | UserCouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutUserInput | UserCouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserPointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutUserInput | UserPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutUserInput | UserPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutUserInput | UserPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUser_CouponInput = {
    create?: XOR<UserCreateWithoutUser_CouponInput, UserUncheckedCreateWithoutUser_CouponInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_CouponInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutUser_CouponNestedInput = {
    create?: XOR<UserCreateWithoutUser_CouponInput, UserUncheckedCreateWithoutUser_CouponInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_CouponInput
    upsert?: UserUpsertWithoutUser_CouponInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_CouponInput, UserUpdateWithoutUser_CouponInput>, UserUncheckedUpdateWithoutUser_CouponInput>
  }

  export type UserCreateNestedOneWithoutUser_PointInput = {
    create?: XOR<UserCreateWithoutUser_PointInput, UserUncheckedCreateWithoutUser_PointInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_PointInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutUser_PointNestedInput = {
    create?: XOR<UserCreateWithoutUser_PointInput, UserUncheckedCreateWithoutUser_PointInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_PointInput
    upsert?: UserUpsertWithoutUser_PointInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_PointInput, UserUpdateWithoutUser_PointInput>, UserUncheckedUpdateWithoutUser_PointInput>
  }

  export type Order_DetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutOrderInput = {
    create?: XOR<EventCreateWithoutOrderInput, EventUncheckedCreateWithoutOrderInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrderInput
    connect?: EventWhereUniqueInput
  }

  export type Order_DetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type Order_DetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrderInput | Order_DetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrderInput | Order_DetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrderInput | Order_DetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type EventUpdateOneWithoutOrderNestedInput = {
    create?: XOR<EventCreateWithoutOrderInput, EventUncheckedCreateWithoutOrderInput>
    connectOrCreate?: EventCreateOrConnectWithoutOrderInput
    upsert?: EventUpsertWithoutOrderInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutOrderInput, EventUpdateWithoutOrderInput>, EventUncheckedUpdateWithoutOrderInput>
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput> | Order_DetailsCreateWithoutOrderInput[] | Order_DetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrderInput | Order_DetailsCreateOrConnectWithoutOrderInput[]
    upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrderInput | Order_DetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: Order_DetailsCreateManyOrderInputEnvelope
    set?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    disconnect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    delete?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    connect?: Order_DetailsWhereUniqueInput | Order_DetailsWhereUniqueInput[]
    update?: Order_DetailsUpdateWithWhereUniqueWithoutOrderInput | Order_DetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrderInput | Order_DetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrder_DetailsInput = {
    create?: XOR<OrderCreateWithoutOrder_DetailsInput, OrderUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_DetailsInput
    connect?: OrderWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutOrder_DetailsInput = {
    create?: XOR<TicketCreateWithoutOrder_DetailsInput, TicketUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrder_DetailsInput
    connect?: TicketWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrder_DetailsNestedInput = {
    create?: XOR<OrderCreateWithoutOrder_DetailsInput, OrderUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrder_DetailsInput
    upsert?: OrderUpsertWithoutOrder_DetailsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrder_DetailsInput, OrderUpdateWithoutOrder_DetailsInput>, OrderUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type TicketUpdateOneRequiredWithoutOrder_DetailsNestedInput = {
    create?: XOR<TicketCreateWithoutOrder_DetailsInput, TicketUncheckedCreateWithoutOrder_DetailsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutOrder_DetailsInput
    upsert?: TicketUpsertWithoutOrder_DetailsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutOrder_DetailsInput, TicketUpdateWithoutOrder_DetailsInput>, TicketUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.EventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventTypeFilter<$PrismaModel>
    _max?: NestedEnumEventTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type TicketCreateWithoutEventInput = {
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    Order_Details?: Order_DetailsCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: number
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutEventInput = {
    rating: number
    comment: string
    User?: UserCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutEventInput = {
    id?: number
    rating: number
    comment: string
    userId?: string | null
  }

  export type RatingCreateOrConnectWithoutEventInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput>
  }

  export type RatingCreateManyEventInputEnvelope = {
    data: RatingCreateManyEventInput | RatingCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutEventInput = {
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrderInput
    User?: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEventInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    userId?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEventInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderCreateManyEventInputEnvelope = {
    data: OrderCreateManyEventInput | OrderCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type OrganizerCreateWithoutEventInput = {
    id?: string
    organizer_name: string
    email?: string | null
    password?: string | null
    avatar?: string | null
    isVerify?: boolean
  }

  export type OrganizerUncheckedCreateWithoutEventInput = {
    id?: string
    organizer_name: string
    email?: string | null
    password?: string | null
    avatar?: string | null
    isVerify?: boolean
  }

  export type OrganizerCreateOrConnectWithoutEventInput = {
    where: OrganizerWhereUniqueInput
    create: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    category?: StringNullableFilter<"Ticket"> | string | null
    desc?: StringNullableFilter<"Ticket"> | string | null
    seats?: IntNullableFilter<"Ticket"> | number | null
    price?: IntFilter<"Ticket"> | number
    eventId?: StringNullableFilter<"Ticket"> | string | null
  }

  export type RatingUpsertWithWhereUniqueWithoutEventInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutEventInput, RatingUncheckedUpdateWithoutEventInput>
    create: XOR<RatingCreateWithoutEventInput, RatingUncheckedCreateWithoutEventInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutEventInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutEventInput, RatingUncheckedUpdateWithoutEventInput>
  }

  export type RatingUpdateManyWithWhereWithoutEventInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutEventInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    rating?: IntFilter<"Rating"> | number
    comment?: StringFilter<"Rating"> | string
    eventId?: StringNullableFilter<"Rating"> | string | null
    userId?: StringNullableFilter<"Rating"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
    create: XOR<OrderCreateWithoutEventInput, OrderUncheckedCreateWithoutEventInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEventInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEventInput, OrderUncheckedUpdateWithoutEventInput>
  }

  export type OrderUpdateManyWithWhereWithoutEventInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEventInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    total_price?: IntFilter<"Order"> | number
    final_price?: IntFilter<"Order"> | number
    status?: EnumStatusFilter<"Order"> | $Enums.Status
    createdAt?: DateTimeFilter<"Order"> | Date | string
    expiredAt?: DateTimeFilter<"Order"> | Date | string
    redirect_url?: StringNullableFilter<"Order"> | string | null
    userId?: StringNullableFilter<"Order"> | string | null
    eventId?: StringNullableFilter<"Order"> | string | null
  }

  export type OrganizerUpsertWithoutEventInput = {
    update: XOR<OrganizerUpdateWithoutEventInput, OrganizerUncheckedUpdateWithoutEventInput>
    create: XOR<OrganizerCreateWithoutEventInput, OrganizerUncheckedCreateWithoutEventInput>
    where?: OrganizerWhereInput
  }

  export type OrganizerUpdateToOneWithWhereWithoutEventInput = {
    where?: OrganizerWhereInput
    data: XOR<OrganizerUpdateWithoutEventInput, OrganizerUncheckedUpdateWithoutEventInput>
  }

  export type OrganizerUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizerUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizer_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Order_DetailsCreateWithoutTicketInput = {
    quantity: number
    subtotal: number
    Order: OrderCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutTicketInput = {
    quantity: number
    subtotal: number
    orderId: number
  }

  export type Order_DetailsCreateOrConnectWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput>
  }

  export type Order_DetailsCreateManyTicketInputEnvelope = {
    data: Order_DetailsCreateManyTicketInput | Order_DetailsCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutTicketInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Rating?: RatingCreateNestedManyWithoutEventInput
    Order?: OrderCreateNestedManyWithoutEventInput
    Organizer?: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    organizerId?: string | null
    Rating?: RatingUncheckedCreateNestedManyWithoutEventInput
    Order?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutTicketInput, Order_DetailsUncheckedUpdateWithoutTicketInput>
    create: XOR<Order_DetailsCreateWithoutTicketInput, Order_DetailsUncheckedCreateWithoutTicketInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutTicketInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutTicketInput, Order_DetailsUncheckedUpdateWithoutTicketInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutTicketInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutTicketInput>
  }

  export type Order_DetailsScalarWhereInput = {
    AND?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    OR?: Order_DetailsScalarWhereInput[]
    NOT?: Order_DetailsScalarWhereInput | Order_DetailsScalarWhereInput[]
    quantity?: IntFilter<"Order_Details"> | number
    subtotal?: IntFilter<"Order_Details"> | number
    orderId?: IntFilter<"Order_Details"> | number
    ticketId?: IntFilter<"Order_Details"> | number
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Rating?: RatingUpdateManyWithoutEventNestedInput
    Order?: OrderUpdateManyWithoutEventNestedInput
    Organizer?: OrganizerUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    Rating?: RatingUncheckedUpdateManyWithoutEventNestedInput
    Order?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Rating?: RatingCreateNestedManyWithoutEventInput
    Order?: OrderCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Rating?: RatingUncheckedCreateNestedManyWithoutEventInput
    Order?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    event_name?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Event"> | Date | string | null
    event_date?: DateTimeNullableFilter<"Event"> | Date | string | null
    location?: EnumLocationFilter<"Event"> | $Enums.Location
    venue?: StringNullableFilter<"Event"> | string | null
    event_type?: EnumEventTypeFilter<"Event"> | $Enums.EventType
    isActive?: BoolFilter<"Event"> | boolean
    event_thumbnail?: StringNullableFilter<"Event"> | string | null
    event_preview?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    organizerId?: StringNullableFilter<"Event"> | string | null
  }

  export type EventCreateWithoutRatingInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Order?: OrderCreateNestedManyWithoutEventInput
    Organizer?: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRatingInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    organizerId?: string | null
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Order?: OrderUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRatingInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRatingInput, EventUncheckedCreateWithoutRatingInput>
  }

  export type UserCreateWithoutRatingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponCreateNestedManyWithoutUserInput
    User_Point?: UserPointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    User_Point?: UserPointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
  }

  export type EventUpsertWithoutRatingInput = {
    update: XOR<EventUpdateWithoutRatingInput, EventUncheckedUpdateWithoutRatingInput>
    create: XOR<EventCreateWithoutRatingInput, EventUncheckedCreateWithoutRatingInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRatingInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRatingInput, EventUncheckedUpdateWithoutRatingInput>
  }

  export type EventUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Order?: OrderUpdateManyWithoutEventNestedInput
    Organizer?: OrganizerUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Order?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutRatingInput = {
    update: XOR<UserUpdateWithoutRatingInput, UserUncheckedUpdateWithoutRatingInput>
    create: XOR<UserCreateWithoutRatingInput, UserUncheckedCreateWithoutRatingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingInput, UserUncheckedUpdateWithoutRatingInput>
  }

  export type UserUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutUserInput = {
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    Order_Details?: Order_DetailsCreateNestedManyWithoutOrderInput
    Event?: EventCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    eventId?: string | null
    Order_Details?: Order_DetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    rating: number
    comment: string
    Event?: EventCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    id?: number
    rating: number
    comment: string
    eventId?: string | null
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCouponCreateWithoutUserInput = {
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type UserCouponUncheckedCreateWithoutUserInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type UserCouponCreateOrConnectWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
  }

  export type UserCouponCreateManyUserInputEnvelope = {
    data: UserCouponCreateManyUserInput | UserCouponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPointCreateWithoutUserInput = {
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type UserPointUncheckedCreateWithoutUserInput = {
    id?: number
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type UserPointCreateOrConnectWithoutUserInput = {
    where: UserPointWhereUniqueInput
    create: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput>
  }

  export type UserPointCreateManyUserInputEnvelope = {
    data: UserPointCreateManyUserInput | UserPointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCouponUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    update: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
  }

  export type UserCouponUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    data: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
  }

  export type UserCouponUpdateManyWithWhereWithoutUserInput = {
    where: UserCouponScalarWhereInput
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCouponScalarWhereInput = {
    AND?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    OR?: UserCouponScalarWhereInput[]
    NOT?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    isRedeem?: BoolFilter<"UserCoupon"> | boolean
    percentage?: IntFilter<"UserCoupon"> | number
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
    expiredAt?: DateTimeFilter<"UserCoupon"> | Date | string
    userId?: StringNullableFilter<"UserCoupon"> | string | null
  }

  export type UserPointUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPointWhereUniqueInput
    update: XOR<UserPointUpdateWithoutUserInput, UserPointUncheckedUpdateWithoutUserInput>
    create: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput>
  }

  export type UserPointUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPointWhereUniqueInput
    data: XOR<UserPointUpdateWithoutUserInput, UserPointUncheckedUpdateWithoutUserInput>
  }

  export type UserPointUpdateManyWithWhereWithoutUserInput = {
    where: UserPointScalarWhereInput
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPointScalarWhereInput = {
    AND?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    OR?: UserPointScalarWhereInput[]
    NOT?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    id?: IntFilter<"UserPoint"> | number
    isRedeem?: BoolFilter<"UserPoint"> | boolean
    point?: IntFilter<"UserPoint"> | number
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
    expiredAt?: DateTimeFilter<"UserPoint"> | Date | string
    userId?: StringNullableFilter<"UserPoint"> | string | null
  }

  export type UserCreateWithoutUser_CouponInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
    Rating?: RatingCreateNestedManyWithoutUserInput
    User_Point?: UserPointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_CouponInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Rating?: RatingUncheckedCreateNestedManyWithoutUserInput
    User_Point?: UserPointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_CouponInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_CouponInput, UserUncheckedCreateWithoutUser_CouponInput>
  }

  export type UserUpsertWithoutUser_CouponInput = {
    update: XOR<UserUpdateWithoutUser_CouponInput, UserUncheckedUpdateWithoutUser_CouponInput>
    create: XOR<UserCreateWithoutUser_CouponInput, UserUncheckedCreateWithoutUser_CouponInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_CouponInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_CouponInput, UserUncheckedUpdateWithoutUser_CouponInput>
  }

  export type UserUpdateWithoutUser_CouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
    Rating?: RatingUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_CouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser_PointInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
    Rating?: RatingCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_PointInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
    Rating?: RatingUncheckedCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_PointInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_PointInput, UserUncheckedCreateWithoutUser_PointInput>
  }

  export type UserUpsertWithoutUser_PointInput = {
    update: XOR<UserUpdateWithoutUser_PointInput, UserUncheckedUpdateWithoutUser_PointInput>
    create: XOR<UserCreateWithoutUser_PointInput, UserUncheckedCreateWithoutUser_PointInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_PointInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_PointInput, UserUncheckedUpdateWithoutUser_PointInput>
  }

  export type UserUpdateWithoutUser_PointInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
    Rating?: RatingUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_PointInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Order_DetailsCreateWithoutOrderInput = {
    quantity: number
    subtotal: number
    Ticket: TicketCreateNestedOneWithoutOrder_DetailsInput
  }

  export type Order_DetailsUncheckedCreateWithoutOrderInput = {
    quantity: number
    subtotal: number
    ticketId: number
  }

  export type Order_DetailsCreateOrConnectWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    create: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput>
  }

  export type Order_DetailsCreateManyOrderInputEnvelope = {
    data: Order_DetailsCreateManyOrderInput | Order_DetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Rating?: RatingCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponCreateNestedManyWithoutUserInput
    User_Point?: UserPointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string | null
    isVerify?: boolean
    ref_code: string
    ref_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Rating?: RatingUncheckedCreateNestedManyWithoutUserInput
    User_Coupon?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    User_Point?: UserPointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type EventCreateWithoutOrderInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    Ticket?: TicketCreateNestedManyWithoutEventInput
    Rating?: RatingCreateNestedManyWithoutEventInput
    Organizer?: OrganizerCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrderInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
    organizerId?: string | null
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
    Rating?: RatingUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrderInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrderInput, EventUncheckedCreateWithoutOrderInput>
  }

  export type Order_DetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    update: XOR<Order_DetailsUpdateWithoutOrderInput, Order_DetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<Order_DetailsCreateWithoutOrderInput, Order_DetailsUncheckedCreateWithoutOrderInput>
  }

  export type Order_DetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: Order_DetailsWhereUniqueInput
    data: XOR<Order_DetailsUpdateWithoutOrderInput, Order_DetailsUncheckedUpdateWithoutOrderInput>
  }

  export type Order_DetailsUpdateManyWithWhereWithoutOrderInput = {
    where: Order_DetailsScalarWhereInput
    data: XOR<Order_DetailsUpdateManyMutationInput, Order_DetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rating?: RatingUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ref_code?: StringFieldUpdateOperationsInput | string
    ref_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rating?: RatingUncheckedUpdateManyWithoutUserNestedInput
    User_Coupon?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    User_Point?: UserPointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutOrderInput = {
    update: XOR<EventUpdateWithoutOrderInput, EventUncheckedUpdateWithoutOrderInput>
    create: XOR<EventCreateWithoutOrderInput, EventUncheckedCreateWithoutOrderInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutOrderInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutOrderInput, EventUncheckedUpdateWithoutOrderInput>
  }

  export type EventUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Rating?: RatingUpdateManyWithoutEventNestedInput
    Organizer?: OrganizerUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    organizerId?: NullableStringFieldUpdateOperationsInput | string | null
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutEventNestedInput
  }

  export type OrderCreateWithoutOrder_DetailsInput = {
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    User?: UserCreateNestedOneWithoutOrderInput
    Event?: EventCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrder_DetailsInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    userId?: string | null
    eventId?: string | null
  }

  export type OrderCreateOrConnectWithoutOrder_DetailsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrder_DetailsInput, OrderUncheckedCreateWithoutOrder_DetailsInput>
  }

  export type TicketCreateWithoutOrder_DetailsInput = {
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    Event?: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutOrder_DetailsInput = {
    id?: number
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
    eventId?: string | null
  }

  export type TicketCreateOrConnectWithoutOrder_DetailsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutOrder_DetailsInput, TicketUncheckedCreateWithoutOrder_DetailsInput>
  }

  export type OrderUpsertWithoutOrder_DetailsInput = {
    update: XOR<OrderUpdateWithoutOrder_DetailsInput, OrderUncheckedUpdateWithoutOrder_DetailsInput>
    create: XOR<OrderCreateWithoutOrder_DetailsInput, OrderUncheckedCreateWithoutOrder_DetailsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrder_DetailsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrder_DetailsInput, OrderUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type OrderUpdateWithoutOrder_DetailsInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutOrderNestedInput
    Event?: EventUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrder_DetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpsertWithoutOrder_DetailsInput = {
    update: XOR<TicketUpdateWithoutOrder_DetailsInput, TicketUncheckedUpdateWithoutOrder_DetailsInput>
    create: XOR<TicketCreateWithoutOrder_DetailsInput, TicketUncheckedCreateWithoutOrder_DetailsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutOrder_DetailsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutOrder_DetailsInput, TicketUncheckedUpdateWithoutOrder_DetailsInput>
  }

  export type TicketUpdateWithoutOrder_DetailsInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    Event?: EventUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutOrder_DetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateManyEventInput = {
    id?: number
    category?: string | null
    desc?: string | null
    seats?: number | null
    price: number
  }

  export type RatingCreateManyEventInput = {
    id?: number
    rating: number
    comment: string
    userId?: string | null
  }

  export type OrderCreateManyEventInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    userId?: string | null
  }

  export type TicketUpdateWithoutEventInput = {
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    Order_Details?: Order_DetailsUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    price?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUpdateWithoutEventInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutEventInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrderNestedInput
    User?: UserUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Order_DetailsCreateManyTicketInput = {
    quantity: number
    subtotal: number
    orderId: number
  }

  export type Order_DetailsUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    Order?: OrderUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutTicketInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    event_name?: string | null
    description?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    event_date?: Date | string | null
    location: $Enums.Location
    venue?: string | null
    event_type: $Enums.EventType
    isActive?: boolean
    event_thumbnail?: string | null
    event_preview?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    category: $Enums.EventCategory
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Ticket?: TicketUpdateManyWithoutEventNestedInput
    Rating?: RatingUpdateManyWithoutEventNestedInput
    Order?: OrderUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
    Rating?: RatingUncheckedUpdateManyWithoutEventNestedInput
    Order?: OrderUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    event_thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    event_preview?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
  }

  export type OrderCreateManyUserInput = {
    id?: number
    total_price: number
    final_price: number
    status?: $Enums.Status
    createdAt?: Date | string
    expiredAt: Date | string
    redirect_url?: string | null
    eventId?: string | null
  }

  export type RatingCreateManyUserInput = {
    id?: number
    rating: number
    comment: string
    eventId?: string | null
  }

  export type UserCouponCreateManyUserInput = {
    id?: number
    isRedeem?: boolean
    percentage?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type UserPointCreateManyUserInput = {
    id?: number
    isRedeem?: boolean
    point?: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUpdateManyWithoutOrderNestedInput
    Event?: EventUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    Order_Details?: Order_DetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    final_price?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCouponUpdateWithoutUserInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    percentage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUpdateWithoutUserInput = {
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isRedeem?: BoolFieldUpdateOperationsInput | boolean
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Order_DetailsCreateManyOrderInput = {
    quantity: number
    subtotal: number
    ticketId: number
  }

  export type Order_DetailsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    Ticket?: TicketUpdateOneRequiredWithoutOrder_DetailsNestedInput
  }

  export type Order_DetailsUncheckedUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }

  export type Order_DetailsUncheckedUpdateManyWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}