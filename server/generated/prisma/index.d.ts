
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
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model Ingredients
 * 
 */
export type Ingredients = $Result.DefaultSelection<Prisma.$IngredientsPayload>
/**
 * Model DishIngredients
 * 
 */
export type DishIngredients = $Result.DefaultSelection<Prisma.$DishIngredientsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dishes
 * const dishes = await prisma.dish.findMany()
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
   * // Fetch zero or more Dishes
   * const dishes = await prisma.dish.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **Ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.IngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dishIngredients`: Exposes CRUD operations for the **DishIngredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DishIngredients
    * const dishIngredients = await prisma.dishIngredients.findMany()
    * ```
    */
  get dishIngredients(): Prisma.DishIngredientsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Dish: 'Dish',
    Ingredients: 'Ingredients',
    DishIngredients: 'DishIngredients'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dish" | "ingredients" | "dishIngredients"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      Ingredients: {
        payload: Prisma.$IngredientsPayload<ExtArgs>
        fields: Prisma.IngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findMany: {
            args: Prisma.IngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          create: {
            args: Prisma.IngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          createMany: {
            args: Prisma.IngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          delete: {
            args: Prisma.IngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          update: {
            args: Prisma.IngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          upsert: {
            args: Prisma.IngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.IngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      DishIngredients: {
        payload: Prisma.$DishIngredientsPayload<ExtArgs>
        fields: Prisma.DishIngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishIngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishIngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          findFirst: {
            args: Prisma.DishIngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishIngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          findMany: {
            args: Prisma.DishIngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>[]
          }
          create: {
            args: Prisma.DishIngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          createMany: {
            args: Prisma.DishIngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishIngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>[]
          }
          delete: {
            args: Prisma.DishIngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          update: {
            args: Prisma.DishIngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          deleteMany: {
            args: Prisma.DishIngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishIngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishIngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>[]
          }
          upsert: {
            args: Prisma.DishIngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishIngredientsPayload>
          }
          aggregate: {
            args: Prisma.DishIngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishIngredients>
          }
          groupBy: {
            args: Prisma.DishIngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishIngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishIngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<DishIngredientsCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dish?: DishOmit
    ingredients?: IngredientsOmit
    dishIngredients?: DishIngredientsOmit
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
    | 'updateManyAndReturn'
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
   * Count Type DishCountOutputType
   */

  export type DishCountOutputType = {
    ingredients: number
  }

  export type DishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | DishCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCountOutputType
     */
    select?: DishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishIngredientsWhereInput
  }


  /**
   * Count Type IngredientsCountOutputType
   */

  export type IngredientsCountOutputType = {
    dishes: number
  }

  export type IngredientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishes?: boolean | IngredientsCountOutputTypeCountDishesArgs
  }

  // Custom InputTypes
  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsCountOutputType
     */
    select?: IngredientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeCountDishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishIngredientsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    id: number | null
    prep_time: number | null
    cook_time: number | null
  }

  export type DishSumAggregateOutputType = {
    id: number | null
    prep_time: number | null
    cook_time: number | null
  }

  export type DishMinAggregateOutputType = {
    id: number | null
    name: string | null
    diet: string | null
    prep_time: number | null
    cook_time: number | null
    flavour_profile: string | null
    course: string | null
    state: string | null
    region: string | null
    image_url: string | null
  }

  export type DishMaxAggregateOutputType = {
    id: number | null
    name: string | null
    diet: string | null
    prep_time: number | null
    cook_time: number | null
    flavour_profile: string | null
    course: string | null
    state: string | null
    region: string | null
    image_url: string | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    name: number
    diet: number
    prep_time: number
    cook_time: number
    flavour_profile: number
    course: number
    state: number
    region: number
    image_url: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    id?: true
    prep_time?: true
    cook_time?: true
  }

  export type DishSumAggregateInputType = {
    id?: true
    prep_time?: true
    cook_time?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    name?: true
    diet?: true
    prep_time?: true
    cook_time?: true
    flavour_profile?: true
    course?: true
    state?: true
    region?: true
    image_url?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    name?: true
    diet?: true
    prep_time?: true
    cook_time?: true
    flavour_profile?: true
    course?: true
    state?: true
    region?: true
    image_url?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    name?: true
    diet?: true
    prep_time?: true
    cook_time?: true
    flavour_profile?: true
    course?: true
    state?: true
    region?: true
    image_url?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: number
    name: string
    diet: string
    prep_time: number | null
    cook_time: number | null
    flavour_profile: string | null
    course: string | null
    state: string | null
    region: string | null
    image_url: string | null
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diet?: boolean
    prep_time?: boolean
    cook_time?: boolean
    flavour_profile?: boolean
    course?: boolean
    state?: boolean
    region?: boolean
    image_url?: boolean
    ingredients?: boolean | Dish$ingredientsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diet?: boolean
    prep_time?: boolean
    cook_time?: boolean
    flavour_profile?: boolean
    course?: boolean
    state?: boolean
    region?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    diet?: boolean
    prep_time?: boolean
    cook_time?: boolean
    flavour_profile?: boolean
    course?: boolean
    state?: boolean
    region?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    name?: boolean
    diet?: boolean
    prep_time?: boolean
    cook_time?: boolean
    flavour_profile?: boolean
    course?: boolean
    state?: boolean
    region?: boolean
    image_url?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "diet" | "prep_time" | "cook_time" | "flavour_profile" | "course" | "state" | "region" | "image_url", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Dish$ingredientsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      ingredients: Prisma.$DishIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      diet: string
      prep_time: number | null
      cook_time: number | null
      flavour_profile: string | null
      course: string | null
      state: string | null
      region: string | null
      image_url: string | null
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
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
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Dish$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Dish$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dish model
   */
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'Int'>
    readonly name: FieldRef<"Dish", 'String'>
    readonly diet: FieldRef<"Dish", 'String'>
    readonly prep_time: FieldRef<"Dish", 'Int'>
    readonly cook_time: FieldRef<"Dish", 'Int'>
    readonly flavour_profile: FieldRef<"Dish", 'String'>
    readonly course: FieldRef<"Dish", 'String'>
    readonly state: FieldRef<"Dish", 'String'>
    readonly region: FieldRef<"Dish", 'String'>
    readonly image_url: FieldRef<"Dish", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish.ingredients
   */
  export type Dish$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    where?: DishIngredientsWhereInput
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    cursor?: DishIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishIngredientsScalarFieldEnum | DishIngredientsScalarFieldEnum[]
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model Ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientsSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type IngredientsAvgAggregateInputType = {
    id?: true
  }

  export type IngredientsSumAggregateInputType = {
    id?: true
  }

  export type IngredientsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to aggregate.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type IngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithAggregationInput | IngredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: IngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _avg?: IngredientsAvgAggregateInputType
    _sum?: IngredientsSumAggregateInputType
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: number
    name: string
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends IngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dishes?: boolean | Ingredients$dishesArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type IngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["ingredients"]>
  export type IngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishes?: boolean | Ingredients$dishesArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredients"
    objects: {
      dishes: Prisma.$DishIngredientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }

  type IngredientsGetPayload<S extends boolean | null | undefined | IngredientsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsPayload, S>

  type IngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface IngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredients'], meta: { name: 'Ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {IngredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientsFindUniqueArgs>(args: SelectSubset<T, IngredientsFindUniqueArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientsFindFirstArgs>(args?: SelectSubset<T, IngredientsFindFirstArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientsFindManyArgs>(args?: SelectSubset<T, IngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients.
     * @param {IngredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
     */
    create<T extends IngredientsCreateArgs>(args: SelectSubset<T, IngredientsCreateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientsCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientsCreateManyArgs>(args?: SelectSubset<T, IngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientsCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients.
     * @param {IngredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
     */
    delete<T extends IngredientsDeleteArgs>(args: SelectSubset<T, IngredientsDeleteArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients.
     * @param {IngredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientsUpdateArgs>(args: SelectSubset<T, IngredientsUpdateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientsDeleteManyArgs>(args?: SelectSubset<T, IngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientsUpdateManyArgs>(args: SelectSubset<T, IngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientsUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients.
     * @param {IngredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
     */
    upsert<T extends IngredientsUpsertArgs>(args: SelectSubset<T, IngredientsUpsertArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientsCountArgs>(
      args?: Subset<T, IngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsGroupByArgs} args - Group by arguments.
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
      T extends IngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredients model
   */
  readonly fields: IngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dishes<T extends Ingredients$dishesArgs<ExtArgs> = {}>(args?: Subset<T, Ingredients$dishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredients model
   */
  interface IngredientsFieldRefs {
    readonly id: FieldRef<"Ingredients", 'Int'>
    readonly name: FieldRef<"Ingredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredients findUnique
   */
  export type IngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findUniqueOrThrow
   */
  export type IngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findFirst
   */
  export type IngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findFirstOrThrow
   */
  export type IngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findMany
   */
  export type IngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients create
   */
  export type IngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredients.
     */
    data: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
  }

  /**
   * Ingredients createMany
   */
  export type IngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients createManyAndReturn
   */
  export type IngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients update
   */
  export type IngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredients.
     */
    data: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
    /**
     * Choose, which Ingredients to update.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients updateMany
   */
  export type IngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients updateManyAndReturn
   */
  export type IngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients upsert
   */
  export type IngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredients to update in case it exists.
     */
    where: IngredientsWhereUniqueInput
    /**
     * In case the Ingredients found by the `where` argument doesn't exist, create a new Ingredients with this data.
     */
    create: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
    /**
     * In case the Ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
  }

  /**
   * Ingredients delete
   */
  export type IngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter which Ingredients to delete.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients deleteMany
   */
  export type IngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredients.dishes
   */
  export type Ingredients$dishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    where?: DishIngredientsWhereInput
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    cursor?: DishIngredientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishIngredientsScalarFieldEnum | DishIngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients without action
   */
  export type IngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
  }


  /**
   * Model DishIngredients
   */

  export type AggregateDishIngredients = {
    _count: DishIngredientsCountAggregateOutputType | null
    _avg: DishIngredientsAvgAggregateOutputType | null
    _sum: DishIngredientsSumAggregateOutputType | null
    _min: DishIngredientsMinAggregateOutputType | null
    _max: DishIngredientsMaxAggregateOutputType | null
  }

  export type DishIngredientsAvgAggregateOutputType = {
    dishId: number | null
    ingredientId: number | null
  }

  export type DishIngredientsSumAggregateOutputType = {
    dishId: number | null
    ingredientId: number | null
  }

  export type DishIngredientsMinAggregateOutputType = {
    dishId: number | null
    ingredientId: number | null
  }

  export type DishIngredientsMaxAggregateOutputType = {
    dishId: number | null
    ingredientId: number | null
  }

  export type DishIngredientsCountAggregateOutputType = {
    dishId: number
    ingredientId: number
    _all: number
  }


  export type DishIngredientsAvgAggregateInputType = {
    dishId?: true
    ingredientId?: true
  }

  export type DishIngredientsSumAggregateInputType = {
    dishId?: true
    ingredientId?: true
  }

  export type DishIngredientsMinAggregateInputType = {
    dishId?: true
    ingredientId?: true
  }

  export type DishIngredientsMaxAggregateInputType = {
    dishId?: true
    ingredientId?: true
  }

  export type DishIngredientsCountAggregateInputType = {
    dishId?: true
    ingredientId?: true
    _all?: true
  }

  export type DishIngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishIngredients to aggregate.
     */
    where?: DishIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishIngredients to fetch.
     */
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DishIngredients
    **/
    _count?: true | DishIngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishIngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishIngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishIngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishIngredientsMaxAggregateInputType
  }

  export type GetDishIngredientsAggregateType<T extends DishIngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateDishIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishIngredients[P]>
      : GetScalarType<T[P], AggregateDishIngredients[P]>
  }




  export type DishIngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishIngredientsWhereInput
    orderBy?: DishIngredientsOrderByWithAggregationInput | DishIngredientsOrderByWithAggregationInput[]
    by: DishIngredientsScalarFieldEnum[] | DishIngredientsScalarFieldEnum
    having?: DishIngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishIngredientsCountAggregateInputType | true
    _avg?: DishIngredientsAvgAggregateInputType
    _sum?: DishIngredientsSumAggregateInputType
    _min?: DishIngredientsMinAggregateInputType
    _max?: DishIngredientsMaxAggregateInputType
  }

  export type DishIngredientsGroupByOutputType = {
    dishId: number
    ingredientId: number
    _count: DishIngredientsCountAggregateOutputType | null
    _avg: DishIngredientsAvgAggregateOutputType | null
    _sum: DishIngredientsSumAggregateOutputType | null
    _min: DishIngredientsMinAggregateOutputType | null
    _max: DishIngredientsMaxAggregateOutputType | null
  }

  type GetDishIngredientsGroupByPayload<T extends DishIngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishIngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishIngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishIngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], DishIngredientsGroupByOutputType[P]>
        }
      >
    >


  export type DishIngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dishId?: boolean
    ingredientId?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishIngredients"]>

  export type DishIngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dishId?: boolean
    ingredientId?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishIngredients"]>

  export type DishIngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dishId?: boolean
    ingredientId?: boolean
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishIngredients"]>

  export type DishIngredientsSelectScalar = {
    dishId?: boolean
    ingredientId?: boolean
  }

  export type DishIngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dishId" | "ingredientId", ExtArgs["result"]["dishIngredients"]>
  export type DishIngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }
  export type DishIngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }
  export type DishIngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dish?: boolean | DishDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
  }

  export type $DishIngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DishIngredients"
    objects: {
      dish: Prisma.$DishPayload<ExtArgs>
      ingredient: Prisma.$IngredientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dishId: number
      ingredientId: number
    }, ExtArgs["result"]["dishIngredients"]>
    composites: {}
  }

  type DishIngredientsGetPayload<S extends boolean | null | undefined | DishIngredientsDefaultArgs> = $Result.GetResult<Prisma.$DishIngredientsPayload, S>

  type DishIngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishIngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishIngredientsCountAggregateInputType | true
    }

  export interface DishIngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DishIngredients'], meta: { name: 'DishIngredients' } }
    /**
     * Find zero or one DishIngredients that matches the filter.
     * @param {DishIngredientsFindUniqueArgs} args - Arguments to find a DishIngredients
     * @example
     * // Get one DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishIngredientsFindUniqueArgs>(args: SelectSubset<T, DishIngredientsFindUniqueArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DishIngredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishIngredientsFindUniqueOrThrowArgs} args - Arguments to find a DishIngredients
     * @example
     * // Get one DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishIngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, DishIngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsFindFirstArgs} args - Arguments to find a DishIngredients
     * @example
     * // Get one DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishIngredientsFindFirstArgs>(args?: SelectSubset<T, DishIngredientsFindFirstArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishIngredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsFindFirstOrThrowArgs} args - Arguments to find a DishIngredients
     * @example
     * // Get one DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishIngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, DishIngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DishIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findMany()
     * 
     * // Get first 10 DishIngredients
     * const dishIngredients = await prisma.dishIngredients.findMany({ take: 10 })
     * 
     * // Only select the `dishId`
     * const dishIngredientsWithDishIdOnly = await prisma.dishIngredients.findMany({ select: { dishId: true } })
     * 
     */
    findMany<T extends DishIngredientsFindManyArgs>(args?: SelectSubset<T, DishIngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DishIngredients.
     * @param {DishIngredientsCreateArgs} args - Arguments to create a DishIngredients.
     * @example
     * // Create one DishIngredients
     * const DishIngredients = await prisma.dishIngredients.create({
     *   data: {
     *     // ... data to create a DishIngredients
     *   }
     * })
     * 
     */
    create<T extends DishIngredientsCreateArgs>(args: SelectSubset<T, DishIngredientsCreateArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DishIngredients.
     * @param {DishIngredientsCreateManyArgs} args - Arguments to create many DishIngredients.
     * @example
     * // Create many DishIngredients
     * const dishIngredients = await prisma.dishIngredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishIngredientsCreateManyArgs>(args?: SelectSubset<T, DishIngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DishIngredients and returns the data saved in the database.
     * @param {DishIngredientsCreateManyAndReturnArgs} args - Arguments to create many DishIngredients.
     * @example
     * // Create many DishIngredients
     * const dishIngredients = await prisma.dishIngredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DishIngredients and only return the `dishId`
     * const dishIngredientsWithDishIdOnly = await prisma.dishIngredients.createManyAndReturn({
     *   select: { dishId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishIngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, DishIngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DishIngredients.
     * @param {DishIngredientsDeleteArgs} args - Arguments to delete one DishIngredients.
     * @example
     * // Delete one DishIngredients
     * const DishIngredients = await prisma.dishIngredients.delete({
     *   where: {
     *     // ... filter to delete one DishIngredients
     *   }
     * })
     * 
     */
    delete<T extends DishIngredientsDeleteArgs>(args: SelectSubset<T, DishIngredientsDeleteArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DishIngredients.
     * @param {DishIngredientsUpdateArgs} args - Arguments to update one DishIngredients.
     * @example
     * // Update one DishIngredients
     * const dishIngredients = await prisma.dishIngredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishIngredientsUpdateArgs>(args: SelectSubset<T, DishIngredientsUpdateArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DishIngredients.
     * @param {DishIngredientsDeleteManyArgs} args - Arguments to filter DishIngredients to delete.
     * @example
     * // Delete a few DishIngredients
     * const { count } = await prisma.dishIngredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishIngredientsDeleteManyArgs>(args?: SelectSubset<T, DishIngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DishIngredients
     * const dishIngredients = await prisma.dishIngredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishIngredientsUpdateManyArgs>(args: SelectSubset<T, DishIngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishIngredients and returns the data updated in the database.
     * @param {DishIngredientsUpdateManyAndReturnArgs} args - Arguments to update many DishIngredients.
     * @example
     * // Update many DishIngredients
     * const dishIngredients = await prisma.dishIngredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DishIngredients and only return the `dishId`
     * const dishIngredientsWithDishIdOnly = await prisma.dishIngredients.updateManyAndReturn({
     *   select: { dishId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishIngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, DishIngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DishIngredients.
     * @param {DishIngredientsUpsertArgs} args - Arguments to update or create a DishIngredients.
     * @example
     * // Update or create a DishIngredients
     * const dishIngredients = await prisma.dishIngredients.upsert({
     *   create: {
     *     // ... data to create a DishIngredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DishIngredients we want to update
     *   }
     * })
     */
    upsert<T extends DishIngredientsUpsertArgs>(args: SelectSubset<T, DishIngredientsUpsertArgs<ExtArgs>>): Prisma__DishIngredientsClient<$Result.GetResult<Prisma.$DishIngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DishIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsCountArgs} args - Arguments to filter DishIngredients to count.
     * @example
     * // Count the number of DishIngredients
     * const count = await prisma.dishIngredients.count({
     *   where: {
     *     // ... the filter for the DishIngredients we want to count
     *   }
     * })
    **/
    count<T extends DishIngredientsCountArgs>(
      args?: Subset<T, DishIngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishIngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DishIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishIngredientsAggregateArgs>(args: Subset<T, DishIngredientsAggregateArgs>): Prisma.PrismaPromise<GetDishIngredientsAggregateType<T>>

    /**
     * Group by DishIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishIngredientsGroupByArgs} args - Group by arguments.
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
      T extends DishIngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishIngredientsGroupByArgs['orderBy'] }
        : { orderBy?: DishIngredientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishIngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DishIngredients model
   */
  readonly fields: DishIngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DishIngredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishIngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dish<T extends DishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishDefaultArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientsDefaultArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DishIngredients model
   */
  interface DishIngredientsFieldRefs {
    readonly dishId: FieldRef<"DishIngredients", 'Int'>
    readonly ingredientId: FieldRef<"DishIngredients", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DishIngredients findUnique
   */
  export type DishIngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DishIngredients to fetch.
     */
    where: DishIngredientsWhereUniqueInput
  }

  /**
   * DishIngredients findUniqueOrThrow
   */
  export type DishIngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DishIngredients to fetch.
     */
    where: DishIngredientsWhereUniqueInput
  }

  /**
   * DishIngredients findFirst
   */
  export type DishIngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DishIngredients to fetch.
     */
    where?: DishIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishIngredients to fetch.
     */
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishIngredients.
     */
    cursor?: DishIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishIngredients.
     */
    distinct?: DishIngredientsScalarFieldEnum | DishIngredientsScalarFieldEnum[]
  }

  /**
   * DishIngredients findFirstOrThrow
   */
  export type DishIngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DishIngredients to fetch.
     */
    where?: DishIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishIngredients to fetch.
     */
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishIngredients.
     */
    cursor?: DishIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishIngredients.
     */
    distinct?: DishIngredientsScalarFieldEnum | DishIngredientsScalarFieldEnum[]
  }

  /**
   * DishIngredients findMany
   */
  export type DishIngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter, which DishIngredients to fetch.
     */
    where?: DishIngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishIngredients to fetch.
     */
    orderBy?: DishIngredientsOrderByWithRelationInput | DishIngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DishIngredients.
     */
    cursor?: DishIngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishIngredients.
     */
    skip?: number
    distinct?: DishIngredientsScalarFieldEnum | DishIngredientsScalarFieldEnum[]
  }

  /**
   * DishIngredients create
   */
  export type DishIngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a DishIngredients.
     */
    data: XOR<DishIngredientsCreateInput, DishIngredientsUncheckedCreateInput>
  }

  /**
   * DishIngredients createMany
   */
  export type DishIngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DishIngredients.
     */
    data: DishIngredientsCreateManyInput | DishIngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishIngredients createManyAndReturn
   */
  export type DishIngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many DishIngredients.
     */
    data: DishIngredientsCreateManyInput | DishIngredientsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishIngredients update
   */
  export type DishIngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a DishIngredients.
     */
    data: XOR<DishIngredientsUpdateInput, DishIngredientsUncheckedUpdateInput>
    /**
     * Choose, which DishIngredients to update.
     */
    where: DishIngredientsWhereUniqueInput
  }

  /**
   * DishIngredients updateMany
   */
  export type DishIngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DishIngredients.
     */
    data: XOR<DishIngredientsUpdateManyMutationInput, DishIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which DishIngredients to update
     */
    where?: DishIngredientsWhereInput
    /**
     * Limit how many DishIngredients to update.
     */
    limit?: number
  }

  /**
   * DishIngredients updateManyAndReturn
   */
  export type DishIngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * The data used to update DishIngredients.
     */
    data: XOR<DishIngredientsUpdateManyMutationInput, DishIngredientsUncheckedUpdateManyInput>
    /**
     * Filter which DishIngredients to update
     */
    where?: DishIngredientsWhereInput
    /**
     * Limit how many DishIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishIngredients upsert
   */
  export type DishIngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the DishIngredients to update in case it exists.
     */
    where: DishIngredientsWhereUniqueInput
    /**
     * In case the DishIngredients found by the `where` argument doesn't exist, create a new DishIngredients with this data.
     */
    create: XOR<DishIngredientsCreateInput, DishIngredientsUncheckedCreateInput>
    /**
     * In case the DishIngredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishIngredientsUpdateInput, DishIngredientsUncheckedUpdateInput>
  }

  /**
   * DishIngredients delete
   */
  export type DishIngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
    /**
     * Filter which DishIngredients to delete.
     */
    where: DishIngredientsWhereUniqueInput
  }

  /**
   * DishIngredients deleteMany
   */
  export type DishIngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishIngredients to delete
     */
    where?: DishIngredientsWhereInput
    /**
     * Limit how many DishIngredients to delete.
     */
    limit?: number
  }

  /**
   * DishIngredients without action
   */
  export type DishIngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishIngredients
     */
    select?: DishIngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishIngredients
     */
    omit?: DishIngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIngredientsInclude<ExtArgs> | null
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


  export const DishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    diet: 'diet',
    prep_time: 'prep_time',
    cook_time: 'cook_time',
    flavour_profile: 'flavour_profile',
    course: 'course',
    state: 'state',
    region: 'region',
    image_url: 'image_url'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const DishIngredientsScalarFieldEnum: {
    dishId: 'dishId',
    ingredientId: 'ingredientId'
  };

  export type DishIngredientsScalarFieldEnum = (typeof DishIngredientsScalarFieldEnum)[keyof typeof DishIngredientsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: IntFilter<"Dish"> | number
    name?: StringFilter<"Dish"> | string
    diet?: StringFilter<"Dish"> | string
    prep_time?: IntNullableFilter<"Dish"> | number | null
    cook_time?: IntNullableFilter<"Dish"> | number | null
    flavour_profile?: StringNullableFilter<"Dish"> | string | null
    course?: StringNullableFilter<"Dish"> | string | null
    state?: StringNullableFilter<"Dish"> | string | null
    region?: StringNullableFilter<"Dish"> | string | null
    image_url?: StringNullableFilter<"Dish"> | string | null
    ingredients?: DishIngredientsListRelationFilter
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    diet?: SortOrder
    prep_time?: SortOrderInput | SortOrder
    cook_time?: SortOrderInput | SortOrder
    flavour_profile?: SortOrderInput | SortOrder
    course?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    ingredients?: DishIngredientsOrderByRelationAggregateInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    diet?: StringFilter<"Dish"> | string
    prep_time?: IntNullableFilter<"Dish"> | number | null
    cook_time?: IntNullableFilter<"Dish"> | number | null
    flavour_profile?: StringNullableFilter<"Dish"> | string | null
    course?: StringNullableFilter<"Dish"> | string | null
    state?: StringNullableFilter<"Dish"> | string | null
    region?: StringNullableFilter<"Dish"> | string | null
    image_url?: StringNullableFilter<"Dish"> | string | null
    ingredients?: DishIngredientsListRelationFilter
  }, "id" | "name">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    diet?: SortOrder
    prep_time?: SortOrderInput | SortOrder
    cook_time?: SortOrderInput | SortOrder
    flavour_profile?: SortOrderInput | SortOrder
    course?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dish"> | number
    name?: StringWithAggregatesFilter<"Dish"> | string
    diet?: StringWithAggregatesFilter<"Dish"> | string
    prep_time?: IntNullableWithAggregatesFilter<"Dish"> | number | null
    cook_time?: IntNullableWithAggregatesFilter<"Dish"> | number | null
    flavour_profile?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    course?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    state?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    region?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Dish"> | string | null
  }

  export type IngredientsWhereInput = {
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    dishes?: DishIngredientsListRelationFilter
  }

  export type IngredientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dishes?: DishIngredientsOrderByRelationAggregateInput
  }

  export type IngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    dishes?: DishIngredientsListRelationFilter
  }, "id" | "name">

  export type IngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: IngredientsCountOrderByAggregateInput
    _avg?: IngredientsAvgOrderByAggregateInput
    _max?: IngredientsMaxOrderByAggregateInput
    _min?: IngredientsMinOrderByAggregateInput
    _sum?: IngredientsSumOrderByAggregateInput
  }

  export type IngredientsScalarWhereWithAggregatesInput = {
    AND?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    OR?: IngredientsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredients"> | number
    name?: StringWithAggregatesFilter<"Ingredients"> | string
  }

  export type DishIngredientsWhereInput = {
    AND?: DishIngredientsWhereInput | DishIngredientsWhereInput[]
    OR?: DishIngredientsWhereInput[]
    NOT?: DishIngredientsWhereInput | DishIngredientsWhereInput[]
    dishId?: IntFilter<"DishIngredients"> | number
    ingredientId?: IntFilter<"DishIngredients"> | number
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
  }

  export type DishIngredientsOrderByWithRelationInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
    dish?: DishOrderByWithRelationInput
    ingredient?: IngredientsOrderByWithRelationInput
  }

  export type DishIngredientsWhereUniqueInput = Prisma.AtLeast<{
    dishId_ingredientId?: DishIngredientsDishIdIngredientIdCompoundUniqueInput
    AND?: DishIngredientsWhereInput | DishIngredientsWhereInput[]
    OR?: DishIngredientsWhereInput[]
    NOT?: DishIngredientsWhereInput | DishIngredientsWhereInput[]
    dishId?: IntFilter<"DishIngredients"> | number
    ingredientId?: IntFilter<"DishIngredients"> | number
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
  }, "dishId_ingredientId">

  export type DishIngredientsOrderByWithAggregationInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
    _count?: DishIngredientsCountOrderByAggregateInput
    _avg?: DishIngredientsAvgOrderByAggregateInput
    _max?: DishIngredientsMaxOrderByAggregateInput
    _min?: DishIngredientsMinOrderByAggregateInput
    _sum?: DishIngredientsSumOrderByAggregateInput
  }

  export type DishIngredientsScalarWhereWithAggregatesInput = {
    AND?: DishIngredientsScalarWhereWithAggregatesInput | DishIngredientsScalarWhereWithAggregatesInput[]
    OR?: DishIngredientsScalarWhereWithAggregatesInput[]
    NOT?: DishIngredientsScalarWhereWithAggregatesInput | DishIngredientsScalarWhereWithAggregatesInput[]
    dishId?: IntWithAggregatesFilter<"DishIngredients"> | number
    ingredientId?: IntWithAggregatesFilter<"DishIngredients"> | number
  }

  export type DishCreateInput = {
    name: string
    diet: string
    prep_time?: number | null
    cook_time?: number | null
    flavour_profile?: string | null
    course?: string | null
    state?: string | null
    region?: string | null
    image_url?: string | null
    ingredients?: DishIngredientsCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id?: number
    name: string
    diet: string
    prep_time?: number | null
    cook_time?: number | null
    flavour_profile?: string | null
    course?: string | null
    state?: string | null
    region?: string | null
    image_url?: string | null
    ingredients?: DishIngredientsUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: DishIngredientsUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    ingredients?: DishIngredientsUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishCreateManyInput = {
    id?: number
    name: string
    diet: string
    prep_time?: number | null
    cook_time?: number | null
    flavour_profile?: string | null
    course?: string | null
    state?: string | null
    region?: string | null
    image_url?: string | null
  }

  export type DishUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DishUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientsCreateInput = {
    name: string
    dishes?: DishIngredientsCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUncheckedCreateInput = {
    id?: number
    name: string
    dishes?: DishIngredientsUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dishes?: DishIngredientsUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dishes?: DishIngredientsUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsCreateManyInput = {
    id?: number
    name: string
  }

  export type IngredientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DishIngredientsCreateInput = {
    dish: DishCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientsCreateNestedOneWithoutDishesInput
  }

  export type DishIngredientsUncheckedCreateInput = {
    dishId: number
    ingredientId: number
  }

  export type DishIngredientsUpdateInput = {
    dish?: DishUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientsUpdateOneRequiredWithoutDishesNestedInput
  }

  export type DishIngredientsUncheckedUpdateInput = {
    dishId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
  }

  export type DishIngredientsCreateManyInput = {
    dishId: number
    ingredientId: number
  }

  export type DishIngredientsUpdateManyMutationInput = {

  }

  export type DishIngredientsUncheckedUpdateManyInput = {
    dishId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
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

  export type DishIngredientsListRelationFilter = {
    every?: DishIngredientsWhereInput
    some?: DishIngredientsWhereInput
    none?: DishIngredientsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DishIngredientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diet?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
    flavour_profile?: SortOrder
    course?: SortOrder
    state?: SortOrder
    region?: SortOrder
    image_url?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    id?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diet?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
    flavour_profile?: SortOrder
    course?: SortOrder
    state?: SortOrder
    region?: SortOrder
    image_url?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    diet?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
    flavour_profile?: SortOrder
    course?: SortOrder
    state?: SortOrder
    region?: SortOrder
    image_url?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    id?: SortOrder
    prep_time?: SortOrder
    cook_time?: SortOrder
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

  export type IngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IngredientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DishScalarRelationFilter = {
    is?: DishWhereInput
    isNot?: DishWhereInput
  }

  export type IngredientsScalarRelationFilter = {
    is?: IngredientsWhereInput
    isNot?: IngredientsWhereInput
  }

  export type DishIngredientsDishIdIngredientIdCompoundUniqueInput = {
    dishId: number
    ingredientId: number
  }

  export type DishIngredientsCountOrderByAggregateInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
  }

  export type DishIngredientsAvgOrderByAggregateInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
  }

  export type DishIngredientsMaxOrderByAggregateInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
  }

  export type DishIngredientsMinOrderByAggregateInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
  }

  export type DishIngredientsSumOrderByAggregateInput = {
    dishId?: SortOrder
    ingredientId?: SortOrder
  }

  export type DishIngredientsCreateNestedManyWithoutDishInput = {
    create?: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput> | DishIngredientsCreateWithoutDishInput[] | DishIngredientsUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutDishInput | DishIngredientsCreateOrConnectWithoutDishInput[]
    createMany?: DishIngredientsCreateManyDishInputEnvelope
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
  }

  export type DishIngredientsUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput> | DishIngredientsCreateWithoutDishInput[] | DishIngredientsUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutDishInput | DishIngredientsCreateOrConnectWithoutDishInput[]
    createMany?: DishIngredientsCreateManyDishInputEnvelope
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DishIngredientsUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput> | DishIngredientsCreateWithoutDishInput[] | DishIngredientsUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutDishInput | DishIngredientsCreateOrConnectWithoutDishInput[]
    upsert?: DishIngredientsUpsertWithWhereUniqueWithoutDishInput | DishIngredientsUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishIngredientsCreateManyDishInputEnvelope
    set?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    disconnect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    delete?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    update?: DishIngredientsUpdateWithWhereUniqueWithoutDishInput | DishIngredientsUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishIngredientsUpdateManyWithWhereWithoutDishInput | DishIngredientsUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DishIngredientsUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput> | DishIngredientsCreateWithoutDishInput[] | DishIngredientsUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutDishInput | DishIngredientsCreateOrConnectWithoutDishInput[]
    upsert?: DishIngredientsUpsertWithWhereUniqueWithoutDishInput | DishIngredientsUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishIngredientsCreateManyDishInputEnvelope
    set?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    disconnect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    delete?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    update?: DishIngredientsUpdateWithWhereUniqueWithoutDishInput | DishIngredientsUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishIngredientsUpdateManyWithWhereWithoutDishInput | DishIngredientsUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
  }

  export type DishIngredientsCreateNestedManyWithoutIngredientInput = {
    create?: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput> | DishIngredientsCreateWithoutIngredientInput[] | DishIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutIngredientInput | DishIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: DishIngredientsCreateManyIngredientInputEnvelope
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
  }

  export type DishIngredientsUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput> | DishIngredientsCreateWithoutIngredientInput[] | DishIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutIngredientInput | DishIngredientsCreateOrConnectWithoutIngredientInput[]
    createMany?: DishIngredientsCreateManyIngredientInputEnvelope
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
  }

  export type DishIngredientsUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput> | DishIngredientsCreateWithoutIngredientInput[] | DishIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutIngredientInput | DishIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: DishIngredientsUpsertWithWhereUniqueWithoutIngredientInput | DishIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: DishIngredientsCreateManyIngredientInputEnvelope
    set?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    disconnect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    delete?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    update?: DishIngredientsUpdateWithWhereUniqueWithoutIngredientInput | DishIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: DishIngredientsUpdateManyWithWhereWithoutIngredientInput | DishIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
  }

  export type DishIngredientsUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput> | DishIngredientsCreateWithoutIngredientInput[] | DishIngredientsUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: DishIngredientsCreateOrConnectWithoutIngredientInput | DishIngredientsCreateOrConnectWithoutIngredientInput[]
    upsert?: DishIngredientsUpsertWithWhereUniqueWithoutIngredientInput | DishIngredientsUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: DishIngredientsCreateManyIngredientInputEnvelope
    set?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    disconnect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    delete?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    connect?: DishIngredientsWhereUniqueInput | DishIngredientsWhereUniqueInput[]
    update?: DishIngredientsUpdateWithWhereUniqueWithoutIngredientInput | DishIngredientsUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: DishIngredientsUpdateManyWithWhereWithoutIngredientInput | DishIngredientsUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
  }

  export type DishCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<DishCreateWithoutIngredientsInput, DishUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: DishCreateOrConnectWithoutIngredientsInput
    connect?: DishWhereUniqueInput
  }

  export type IngredientsCreateNestedOneWithoutDishesInput = {
    create?: XOR<IngredientsCreateWithoutDishesInput, IngredientsUncheckedCreateWithoutDishesInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutDishesInput
    connect?: IngredientsWhereUniqueInput
  }

  export type DishUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<DishCreateWithoutIngredientsInput, DishUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: DishCreateOrConnectWithoutIngredientsInput
    upsert?: DishUpsertWithoutIngredientsInput
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutIngredientsInput, DishUpdateWithoutIngredientsInput>, DishUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientsUpdateOneRequiredWithoutDishesNestedInput = {
    create?: XOR<IngredientsCreateWithoutDishesInput, IngredientsUncheckedCreateWithoutDishesInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutDishesInput
    upsert?: IngredientsUpsertWithoutDishesInput
    connect?: IngredientsWhereUniqueInput
    update?: XOR<XOR<IngredientsUpdateToOneWithWhereWithoutDishesInput, IngredientsUpdateWithoutDishesInput>, IngredientsUncheckedUpdateWithoutDishesInput>
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

  export type DishIngredientsCreateWithoutDishInput = {
    ingredient: IngredientsCreateNestedOneWithoutDishesInput
  }

  export type DishIngredientsUncheckedCreateWithoutDishInput = {
    ingredientId: number
  }

  export type DishIngredientsCreateOrConnectWithoutDishInput = {
    where: DishIngredientsWhereUniqueInput
    create: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput>
  }

  export type DishIngredientsCreateManyDishInputEnvelope = {
    data: DishIngredientsCreateManyDishInput | DishIngredientsCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type DishIngredientsUpsertWithWhereUniqueWithoutDishInput = {
    where: DishIngredientsWhereUniqueInput
    update: XOR<DishIngredientsUpdateWithoutDishInput, DishIngredientsUncheckedUpdateWithoutDishInput>
    create: XOR<DishIngredientsCreateWithoutDishInput, DishIngredientsUncheckedCreateWithoutDishInput>
  }

  export type DishIngredientsUpdateWithWhereUniqueWithoutDishInput = {
    where: DishIngredientsWhereUniqueInput
    data: XOR<DishIngredientsUpdateWithoutDishInput, DishIngredientsUncheckedUpdateWithoutDishInput>
  }

  export type DishIngredientsUpdateManyWithWhereWithoutDishInput = {
    where: DishIngredientsScalarWhereInput
    data: XOR<DishIngredientsUpdateManyMutationInput, DishIngredientsUncheckedUpdateManyWithoutDishInput>
  }

  export type DishIngredientsScalarWhereInput = {
    AND?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
    OR?: DishIngredientsScalarWhereInput[]
    NOT?: DishIngredientsScalarWhereInput | DishIngredientsScalarWhereInput[]
    dishId?: IntFilter<"DishIngredients"> | number
    ingredientId?: IntFilter<"DishIngredients"> | number
  }

  export type DishIngredientsCreateWithoutIngredientInput = {
    dish: DishCreateNestedOneWithoutIngredientsInput
  }

  export type DishIngredientsUncheckedCreateWithoutIngredientInput = {
    dishId: number
  }

  export type DishIngredientsCreateOrConnectWithoutIngredientInput = {
    where: DishIngredientsWhereUniqueInput
    create: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type DishIngredientsCreateManyIngredientInputEnvelope = {
    data: DishIngredientsCreateManyIngredientInput | DishIngredientsCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type DishIngredientsUpsertWithWhereUniqueWithoutIngredientInput = {
    where: DishIngredientsWhereUniqueInput
    update: XOR<DishIngredientsUpdateWithoutIngredientInput, DishIngredientsUncheckedUpdateWithoutIngredientInput>
    create: XOR<DishIngredientsCreateWithoutIngredientInput, DishIngredientsUncheckedCreateWithoutIngredientInput>
  }

  export type DishIngredientsUpdateWithWhereUniqueWithoutIngredientInput = {
    where: DishIngredientsWhereUniqueInput
    data: XOR<DishIngredientsUpdateWithoutIngredientInput, DishIngredientsUncheckedUpdateWithoutIngredientInput>
  }

  export type DishIngredientsUpdateManyWithWhereWithoutIngredientInput = {
    where: DishIngredientsScalarWhereInput
    data: XOR<DishIngredientsUpdateManyMutationInput, DishIngredientsUncheckedUpdateManyWithoutIngredientInput>
  }

  export type DishCreateWithoutIngredientsInput = {
    name: string
    diet: string
    prep_time?: number | null
    cook_time?: number | null
    flavour_profile?: string | null
    course?: string | null
    state?: string | null
    region?: string | null
    image_url?: string | null
  }

  export type DishUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    diet: string
    prep_time?: number | null
    cook_time?: number | null
    flavour_profile?: string | null
    course?: string | null
    state?: string | null
    region?: string | null
    image_url?: string | null
  }

  export type DishCreateOrConnectWithoutIngredientsInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutIngredientsInput, DishUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsCreateWithoutDishesInput = {
    name: string
  }

  export type IngredientsUncheckedCreateWithoutDishesInput = {
    id?: number
    name: string
  }

  export type IngredientsCreateOrConnectWithoutDishesInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutDishesInput, IngredientsUncheckedCreateWithoutDishesInput>
  }

  export type DishUpsertWithoutIngredientsInput = {
    update: XOR<DishUpdateWithoutIngredientsInput, DishUncheckedUpdateWithoutIngredientsInput>
    create: XOR<DishCreateWithoutIngredientsInput, DishUncheckedCreateWithoutIngredientsInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutIngredientsInput, DishUncheckedUpdateWithoutIngredientsInput>
  }

  export type DishUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DishUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    diet?: StringFieldUpdateOperationsInput | string
    prep_time?: NullableIntFieldUpdateOperationsInput | number | null
    cook_time?: NullableIntFieldUpdateOperationsInput | number | null
    flavour_profile?: NullableStringFieldUpdateOperationsInput | string | null
    course?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientsUpsertWithoutDishesInput = {
    update: XOR<IngredientsUpdateWithoutDishesInput, IngredientsUncheckedUpdateWithoutDishesInput>
    create: XOR<IngredientsCreateWithoutDishesInput, IngredientsUncheckedCreateWithoutDishesInput>
    where?: IngredientsWhereInput
  }

  export type IngredientsUpdateToOneWithWhereWithoutDishesInput = {
    where?: IngredientsWhereInput
    data: XOR<IngredientsUpdateWithoutDishesInput, IngredientsUncheckedUpdateWithoutDishesInput>
  }

  export type IngredientsUpdateWithoutDishesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientsUncheckedUpdateWithoutDishesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DishIngredientsCreateManyDishInput = {
    ingredientId: number
  }

  export type DishIngredientsUpdateWithoutDishInput = {
    ingredient?: IngredientsUpdateOneRequiredWithoutDishesNestedInput
  }

  export type DishIngredientsUncheckedUpdateWithoutDishInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
  }

  export type DishIngredientsUncheckedUpdateManyWithoutDishInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
  }

  export type DishIngredientsCreateManyIngredientInput = {
    dishId: number
  }

  export type DishIngredientsUpdateWithoutIngredientInput = {
    dish?: DishUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type DishIngredientsUncheckedUpdateWithoutIngredientInput = {
    dishId?: IntFieldUpdateOperationsInput | number
  }

  export type DishIngredientsUncheckedUpdateManyWithoutIngredientInput = {
    dishId?: IntFieldUpdateOperationsInput | number
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