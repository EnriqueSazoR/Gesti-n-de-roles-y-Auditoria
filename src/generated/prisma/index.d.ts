
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
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model AuditLogs
 * 
 */
export type AuditLogs = $Result.DefaultSelection<Prisma.$AuditLogsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estado: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO'
};

export type estado = (typeof estado)[keyof typeof estado]


export const accion: {
  INSERT: 'INSERT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  PASSWORD_CHANGE: 'PASSWORD_CHANGE',
  ACCESS_DENIED: 'ACCESS_DENIED'
};

export type accion = (typeof accion)[keyof typeof accion]


export const entidadAfectada: {
  USUARIO: 'USUARIO',
  ROL: 'ROL'
};

export type entidadAfectada = (typeof entidadAfectada)[keyof typeof entidadAfectada]

}

export type estado = $Enums.estado

export const estado: typeof $Enums.estado

export type accion = $Enums.accion

export const accion: typeof $Enums.accion

export type entidadAfectada = $Enums.entidadAfectada

export const entidadAfectada: typeof $Enums.entidadAfectada

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
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
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLogs`: Exposes CRUD operations for the **AuditLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLogs.findMany()
    * ```
    */
  get auditLogs(): Prisma.AuditLogsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    Rol: 'Rol',
    Usuario: 'Usuario',
    AuditLogs: 'AuditLogs'
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
      modelProps: "rol" | "usuario" | "auditLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      AuditLogs: {
        payload: Prisma.$AuditLogsPayload<ExtArgs>
        fields: Prisma.AuditLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          findFirst: {
            args: Prisma.AuditLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          findMany: {
            args: Prisma.AuditLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          create: {
            args: Prisma.AuditLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          createMany: {
            args: Prisma.AuditLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          delete: {
            args: Prisma.AuditLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          update: {
            args: Prisma.AuditLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogsPayload>
          }
          aggregate: {
            args: Prisma.AuditLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLogs>
          }
          groupBy: {
            args: Prisma.AuditLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogsCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    rol?: RolOmit
    usuario?: UsuarioOmit
    auditLogs?: AuditLogsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    auditLogos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogos?: boolean | UsuarioCountOutputTypeCountAuditLogosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAuditLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "fechaCreacion" | "fechaActualizacion", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fechaCreacion: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
    readonly fechaCreacion: FieldRef<"Rol", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Rol", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idRol: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    idRol: number | null
    estado: $Enums.estado | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    password: string | null
    idRol: number | null
    estado: $Enums.estado | null
    fechaCreacion: Date | null
    fechaActualizacion: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    password: number
    idRol: number
    estado: number
    fechaCreacion: number
    fechaActualizacion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idRol?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    idRol?: true
    estado?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    idRol?: true
    estado?: true
    fechaCreacion?: true
    fechaActualizacion?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    password?: true
    idRol?: true
    estado?: true
    fechaCreacion?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    password: string
    idRol: number
    estado: $Enums.estado
    fechaCreacion: Date
    fechaActualizacion: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    idRol?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    auditLogos?: boolean | Usuario$auditLogosArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    idRol?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    idRol?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    password?: boolean
    idRol?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    fechaActualizacion?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "password" | "idRol" | "estado" | "fechaCreacion" | "fechaActualizacion", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogos?: boolean | Usuario$auditLogosArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      auditLogos: Prisma.$AuditLogsPayload<ExtArgs>[]
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      password: string
      idRol: number
      estado: $Enums.estado
      fechaCreacion: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogos<T extends Usuario$auditLogosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$auditLogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly idRol: FieldRef<"Usuario", 'Int'>
    readonly estado: FieldRef<"Usuario", 'estado'>
    readonly fechaCreacion: FieldRef<"Usuario", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.auditLogos
   */
  export type Usuario$auditLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    where?: AuditLogsWhereInput
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    cursor?: AuditLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model AuditLogs
   */

  export type AggregateAuditLogs = {
    _count: AuditLogsCountAggregateOutputType | null
    _avg: AuditLogsAvgAggregateOutputType | null
    _sum: AuditLogsSumAggregateOutputType | null
    _min: AuditLogsMinAggregateOutputType | null
    _max: AuditLogsMaxAggregateOutputType | null
  }

  export type AuditLogsAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type AuditLogsSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
  }

  export type AuditLogsMinAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    accion: $Enums.accion | null
    entidadAfectada: $Enums.entidadAfectada | null
    detalle: string | null
    timestamp: Date | null
  }

  export type AuditLogsMaxAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    accion: $Enums.accion | null
    entidadAfectada: $Enums.entidadAfectada | null
    detalle: string | null
    timestamp: Date | null
  }

  export type AuditLogsCountAggregateOutputType = {
    id: number
    idUsuario: number
    accion: number
    entidadAfectada: number
    detalle: number
    timestamp: number
    _all: number
  }


  export type AuditLogsAvgAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type AuditLogsSumAggregateInputType = {
    id?: true
    idUsuario?: true
  }

  export type AuditLogsMinAggregateInputType = {
    id?: true
    idUsuario?: true
    accion?: true
    entidadAfectada?: true
    detalle?: true
    timestamp?: true
  }

  export type AuditLogsMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    accion?: true
    entidadAfectada?: true
    detalle?: true
    timestamp?: true
  }

  export type AuditLogsCountAggregateInputType = {
    id?: true
    idUsuario?: true
    accion?: true
    entidadAfectada?: true
    detalle?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to aggregate.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogsMaxAggregateInputType
  }

  export type GetAuditLogsAggregateType<T extends AuditLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLogs[P]>
      : GetScalarType<T[P], AggregateAuditLogs[P]>
  }




  export type AuditLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogsWhereInput
    orderBy?: AuditLogsOrderByWithAggregationInput | AuditLogsOrderByWithAggregationInput[]
    by: AuditLogsScalarFieldEnum[] | AuditLogsScalarFieldEnum
    having?: AuditLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogsCountAggregateInputType | true
    _avg?: AuditLogsAvgAggregateInputType
    _sum?: AuditLogsSumAggregateInputType
    _min?: AuditLogsMinAggregateInputType
    _max?: AuditLogsMaxAggregateInputType
  }

  export type AuditLogsGroupByOutputType = {
    id: number
    idUsuario: number
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp: Date
    _count: AuditLogsCountAggregateOutputType | null
    _avg: AuditLogsAvgAggregateOutputType | null
    _sum: AuditLogsSumAggregateOutputType | null
    _min: AuditLogsMinAggregateOutputType | null
    _max: AuditLogsMaxAggregateOutputType | null
  }

  type GetAuditLogsGroupByPayload<T extends AuditLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogsGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogsGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    accion?: boolean
    entidadAfectada?: boolean
    detalle?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    accion?: boolean
    entidadAfectada?: boolean
    detalle?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    accion?: boolean
    entidadAfectada?: boolean
    detalle?: boolean
    timestamp?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLogs"]>

  export type AuditLogsSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    accion?: boolean
    entidadAfectada?: boolean
    detalle?: boolean
    timestamp?: boolean
  }

  export type AuditLogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUsuario" | "accion" | "entidadAfectada" | "detalle" | "timestamp", ExtArgs["result"]["auditLogs"]>
  export type AuditLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AuditLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AuditLogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AuditLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLogs"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUsuario: number
      accion: $Enums.accion
      entidadAfectada: $Enums.entidadAfectada
      detalle: string
      timestamp: Date
    }, ExtArgs["result"]["auditLogs"]>
    composites: {}
  }

  type AuditLogsGetPayload<S extends boolean | null | undefined | AuditLogsDefaultArgs> = $Result.GetResult<Prisma.$AuditLogsPayload, S>

  type AuditLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogsCountAggregateInputType | true
    }

  export interface AuditLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLogs'], meta: { name: 'AuditLogs' } }
    /**
     * Find zero or one AuditLogs that matches the filter.
     * @param {AuditLogsFindUniqueArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogsFindUniqueArgs>(args: SelectSubset<T, AuditLogsFindUniqueArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogsFindUniqueOrThrowArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindFirstArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogsFindFirstArgs>(args?: SelectSubset<T, AuditLogsFindFirstArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindFirstOrThrowArgs} args - Arguments to find a AuditLogs
     * @example
     * // Get one AuditLogs
     * const auditLogs = await prisma.auditLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLogs.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogsFindManyArgs>(args?: SelectSubset<T, AuditLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLogs.
     * @param {AuditLogsCreateArgs} args - Arguments to create a AuditLogs.
     * @example
     * // Create one AuditLogs
     * const AuditLogs = await prisma.auditLogs.create({
     *   data: {
     *     // ... data to create a AuditLogs
     *   }
     * })
     * 
     */
    create<T extends AuditLogsCreateArgs>(args: SelectSubset<T, AuditLogsCreateArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogsCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLogs = await prisma.auditLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogsCreateManyArgs>(args?: SelectSubset<T, AuditLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogsCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLogs = await prisma.auditLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLogs.
     * @param {AuditLogsDeleteArgs} args - Arguments to delete one AuditLogs.
     * @example
     * // Delete one AuditLogs
     * const AuditLogs = await prisma.auditLogs.delete({
     *   where: {
     *     // ... filter to delete one AuditLogs
     *   }
     * })
     * 
     */
    delete<T extends AuditLogsDeleteArgs>(args: SelectSubset<T, AuditLogsDeleteArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLogs.
     * @param {AuditLogsUpdateArgs} args - Arguments to update one AuditLogs.
     * @example
     * // Update one AuditLogs
     * const auditLogs = await prisma.auditLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogsUpdateArgs>(args: SelectSubset<T, AuditLogsUpdateArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogsDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogsDeleteManyArgs>(args?: SelectSubset<T, AuditLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLogs = await prisma.auditLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogsUpdateManyArgs>(args: SelectSubset<T, AuditLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogsUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLogs = await prisma.auditLogs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogsWithIdOnly = await prisma.auditLogs.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLogs.
     * @param {AuditLogsUpsertArgs} args - Arguments to update or create a AuditLogs.
     * @example
     * // Update or create a AuditLogs
     * const auditLogs = await prisma.auditLogs.upsert({
     *   create: {
     *     // ... data to create a AuditLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLogs we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogsUpsertArgs>(args: SelectSubset<T, AuditLogsUpsertArgs<ExtArgs>>): Prisma__AuditLogsClient<$Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLogs.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogsCountArgs>(
      args?: Subset<T, AuditLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogsAggregateArgs>(args: Subset<T, AuditLogsAggregateArgs>): Prisma.PrismaPromise<GetAuditLogsAggregateType<T>>

    /**
     * Group by AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogsGroupByArgs} args - Group by arguments.
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
      T extends AuditLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogsGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLogs model
   */
  readonly fields: AuditLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLogs model
   */
  interface AuditLogsFieldRefs {
    readonly id: FieldRef<"AuditLogs", 'Int'>
    readonly idUsuario: FieldRef<"AuditLogs", 'Int'>
    readonly accion: FieldRef<"AuditLogs", 'accion'>
    readonly entidadAfectada: FieldRef<"AuditLogs", 'entidadAfectada'>
    readonly detalle: FieldRef<"AuditLogs", 'String'>
    readonly timestamp: FieldRef<"AuditLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLogs findUnique
   */
  export type AuditLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs findUniqueOrThrow
   */
  export type AuditLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs findFirst
   */
  export type AuditLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs findFirstOrThrow
   */
  export type AuditLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs findMany
   */
  export type AuditLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogsOrderByWithRelationInput | AuditLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogsScalarFieldEnum | AuditLogsScalarFieldEnum[]
  }

  /**
   * AuditLogs create
   */
  export type AuditLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLogs.
     */
    data: XOR<AuditLogsCreateInput, AuditLogsUncheckedCreateInput>
  }

  /**
   * AuditLogs createMany
   */
  export type AuditLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogsCreateManyInput | AuditLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLogs createManyAndReturn
   */
  export type AuditLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogsCreateManyInput | AuditLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLogs update
   */
  export type AuditLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLogs.
     */
    data: XOR<AuditLogsUpdateInput, AuditLogsUncheckedUpdateInput>
    /**
     * Choose, which AuditLogs to update.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs updateMany
   */
  export type AuditLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogsUpdateManyMutationInput, AuditLogsUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLogs updateManyAndReturn
   */
  export type AuditLogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogsUpdateManyMutationInput, AuditLogsUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLogs upsert
   */
  export type AuditLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLogs to update in case it exists.
     */
    where: AuditLogsWhereUniqueInput
    /**
     * In case the AuditLogs found by the `where` argument doesn't exist, create a new AuditLogs with this data.
     */
    create: XOR<AuditLogsCreateInput, AuditLogsUncheckedCreateInput>
    /**
     * In case the AuditLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogsUpdateInput, AuditLogsUncheckedUpdateInput>
  }

  /**
   * AuditLogs delete
   */
  export type AuditLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
    /**
     * Filter which AuditLogs to delete.
     */
    where: AuditLogsWhereUniqueInput
  }

  /**
   * AuditLogs deleteMany
   */
  export type AuditLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogsWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLogs without action
   */
  export type AuditLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLogs
     */
    select?: AuditLogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLogs
     */
    omit?: AuditLogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogsInclude<ExtArgs> | null
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


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    password: 'password',
    idRol: 'idRol',
    estado: 'estado',
    fechaCreacion: 'fechaCreacion',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AuditLogsScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    accion: 'accion',
    entidadAfectada: 'entidadAfectada',
    detalle: 'detalle',
    timestamp: 'timestamp'
  };

  export type AuditLogsScalarFieldEnum = (typeof AuditLogsScalarFieldEnum)[keyof typeof AuditLogsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'estado'
   */
  export type EnumestadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado'>
    


  /**
   * Reference to a field of type 'estado[]'
   */
  export type ListEnumestadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado[]'>
    


  /**
   * Reference to a field of type 'accion'
   */
  export type EnumaccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accion'>
    


  /**
   * Reference to a field of type 'accion[]'
   */
  export type ListEnumaccionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accion[]'>
    


  /**
   * Reference to a field of type 'entidadAfectada'
   */
  export type EnumentidadAfectadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'entidadAfectada'>
    


  /**
   * Reference to a field of type 'entidadAfectada[]'
   */
  export type ListEnumentidadAfectadaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'entidadAfectada[]'>
    


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


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    fechaCreacion?: DateTimeFilter<"Rol"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    fechaCreacion?: DateTimeFilter<"Rol"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Rol"> | Date | string
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Rol"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    idRol?: IntFilter<"Usuario"> | number
    estado?: EnumestadoFilter<"Usuario"> | $Enums.estado
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Usuario"> | Date | string
    auditLogos?: AuditLogsListRelationFilter
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    idRol?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    auditLogos?: AuditLogsOrderByRelationAggregateInput
    rol?: RolOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    idRol?: IntFilter<"Usuario"> | number
    estado?: EnumestadoFilter<"Usuario"> | $Enums.estado
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Usuario"> | Date | string
    auditLogos?: AuditLogsListRelationFilter
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "id" | "nombre" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    idRol?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    idRol?: IntWithAggregatesFilter<"Usuario"> | number
    estado?: EnumestadoWithAggregatesFilter<"Usuario"> | $Enums.estado
    fechaCreacion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type AuditLogsWhereInput = {
    AND?: AuditLogsWhereInput | AuditLogsWhereInput[]
    OR?: AuditLogsWhereInput[]
    NOT?: AuditLogsWhereInput | AuditLogsWhereInput[]
    id?: IntFilter<"AuditLogs"> | number
    idUsuario?: IntFilter<"AuditLogs"> | number
    accion?: EnumaccionFilter<"AuditLogs"> | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFilter<"AuditLogs"> | $Enums.entidadAfectada
    detalle?: StringFilter<"AuditLogs"> | string
    timestamp?: DateTimeFilter<"AuditLogs"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AuditLogsOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    accion?: SortOrder
    entidadAfectada?: SortOrder
    detalle?: SortOrder
    timestamp?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AuditLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogsWhereInput | AuditLogsWhereInput[]
    OR?: AuditLogsWhereInput[]
    NOT?: AuditLogsWhereInput | AuditLogsWhereInput[]
    idUsuario?: IntFilter<"AuditLogs"> | number
    accion?: EnumaccionFilter<"AuditLogs"> | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFilter<"AuditLogs"> | $Enums.entidadAfectada
    detalle?: StringFilter<"AuditLogs"> | string
    timestamp?: DateTimeFilter<"AuditLogs"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AuditLogsOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    accion?: SortOrder
    entidadAfectada?: SortOrder
    detalle?: SortOrder
    timestamp?: SortOrder
    _count?: AuditLogsCountOrderByAggregateInput
    _avg?: AuditLogsAvgOrderByAggregateInput
    _max?: AuditLogsMaxOrderByAggregateInput
    _min?: AuditLogsMinOrderByAggregateInput
    _sum?: AuditLogsSumOrderByAggregateInput
  }

  export type AuditLogsScalarWhereWithAggregatesInput = {
    AND?: AuditLogsScalarWhereWithAggregatesInput | AuditLogsScalarWhereWithAggregatesInput[]
    OR?: AuditLogsScalarWhereWithAggregatesInput[]
    NOT?: AuditLogsScalarWhereWithAggregatesInput | AuditLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLogs"> | number
    idUsuario?: IntWithAggregatesFilter<"AuditLogs"> | number
    accion?: EnumaccionWithAggregatesFilter<"AuditLogs"> | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaWithAggregatesFilter<"AuditLogs"> | $Enums.entidadAfectada
    detalle?: StringWithAggregatesFilter<"AuditLogs"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditLogs"> | Date | string
  }

  export type RolCreateInput = {
    nombre: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    correo: string
    password: string
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    auditLogos?: AuditLogsCreateNestedManyWithoutUsuarioInput
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    idRol: number
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    auditLogos?: AuditLogsUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogos?: AuditLogsUpdateManyWithoutUsuarioNestedInput
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogos?: AuditLogsUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    idRol: number
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsCreateInput = {
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAuditLogosInput
  }

  export type AuditLogsUncheckedCreateInput = {
    id?: number
    idUsuario: number
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
  }

  export type AuditLogsUpdateInput = {
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAuditLogosNestedInput
  }

  export type AuditLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsCreateManyInput = {
    id?: number
    idUsuario: number
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
  }

  export type AuditLogsUpdateManyMutationInput = {
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumestadoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    not?: NestedEnumestadoFilter<$PrismaModel> | $Enums.estado
  }

  export type AuditLogsListRelationFilter = {
    every?: AuditLogsWhereInput
    some?: AuditLogsWhereInput
    none?: AuditLogsWhereInput
  }

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type AuditLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    idRol?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    idRol?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    password?: SortOrder
    idRol?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idRol?: SortOrder
  }

  export type EnumestadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    not?: NestedEnumestadoWithAggregatesFilter<$PrismaModel> | $Enums.estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestadoFilter<$PrismaModel>
    _max?: NestedEnumestadoFilter<$PrismaModel>
  }

  export type EnumaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.accion | EnumaccionFieldRefInput<$PrismaModel>
    in?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumaccionFilter<$PrismaModel> | $Enums.accion
  }

  export type EnumentidadAfectadaFilter<$PrismaModel = never> = {
    equals?: $Enums.entidadAfectada | EnumentidadAfectadaFieldRefInput<$PrismaModel>
    in?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    not?: NestedEnumentidadAfectadaFilter<$PrismaModel> | $Enums.entidadAfectada
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type AuditLogsCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    accion?: SortOrder
    entidadAfectada?: SortOrder
    detalle?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type AuditLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    accion?: SortOrder
    entidadAfectada?: SortOrder
    detalle?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogsMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    accion?: SortOrder
    entidadAfectada?: SortOrder
    detalle?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogsSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
  }

  export type EnumaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accion | EnumaccionFieldRefInput<$PrismaModel>
    in?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumaccionWithAggregatesFilter<$PrismaModel> | $Enums.accion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccionFilter<$PrismaModel>
    _max?: NestedEnumaccionFilter<$PrismaModel>
  }

  export type EnumentidadAfectadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.entidadAfectada | EnumentidadAfectadaFieldRefInput<$PrismaModel>
    in?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    not?: NestedEnumentidadAfectadaWithAggregatesFilter<$PrismaModel> | $Enums.entidadAfectada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumentidadAfectadaFilter<$PrismaModel>
    _max?: NestedEnumentidadAfectadaFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AuditLogsCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput> | AuditLogsCreateWithoutUsuarioInput[] | AuditLogsUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditLogsCreateOrConnectWithoutUsuarioInput | AuditLogsCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditLogsCreateManyUsuarioInputEnvelope
    connect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type AuditLogsUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput> | AuditLogsCreateWithoutUsuarioInput[] | AuditLogsUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditLogsCreateOrConnectWithoutUsuarioInput | AuditLogsCreateOrConnectWithoutUsuarioInput[]
    createMany?: AuditLogsCreateManyUsuarioInputEnvelope
    connect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
  }

  export type EnumestadoFieldUpdateOperationsInput = {
    set?: $Enums.estado
  }

  export type AuditLogsUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput> | AuditLogsCreateWithoutUsuarioInput[] | AuditLogsUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditLogsCreateOrConnectWithoutUsuarioInput | AuditLogsCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditLogsUpsertWithWhereUniqueWithoutUsuarioInput | AuditLogsUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditLogsCreateManyUsuarioInputEnvelope
    set?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    disconnect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    delete?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    connect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    update?: AuditLogsUpdateWithWhereUniqueWithoutUsuarioInput | AuditLogsUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditLogsUpdateManyWithWhereWithoutUsuarioInput | AuditLogsUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditLogsScalarWhereInput | AuditLogsScalarWhereInput[]
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type AuditLogsUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput> | AuditLogsCreateWithoutUsuarioInput[] | AuditLogsUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AuditLogsCreateOrConnectWithoutUsuarioInput | AuditLogsCreateOrConnectWithoutUsuarioInput[]
    upsert?: AuditLogsUpsertWithWhereUniqueWithoutUsuarioInput | AuditLogsUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AuditLogsCreateManyUsuarioInputEnvelope
    set?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    disconnect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    delete?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    connect?: AuditLogsWhereUniqueInput | AuditLogsWhereUniqueInput[]
    update?: AuditLogsUpdateWithWhereUniqueWithoutUsuarioInput | AuditLogsUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AuditLogsUpdateManyWithWhereWithoutUsuarioInput | AuditLogsUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AuditLogsScalarWhereInput | AuditLogsScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAuditLogosInput = {
    create?: XOR<UsuarioCreateWithoutAuditLogosInput, UsuarioUncheckedCreateWithoutAuditLogosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditLogosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumaccionFieldUpdateOperationsInput = {
    set?: $Enums.accion
  }

  export type EnumentidadAfectadaFieldUpdateOperationsInput = {
    set?: $Enums.entidadAfectada
  }

  export type UsuarioUpdateOneRequiredWithoutAuditLogosNestedInput = {
    create?: XOR<UsuarioCreateWithoutAuditLogosInput, UsuarioUncheckedCreateWithoutAuditLogosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAuditLogosInput
    upsert?: UsuarioUpsertWithoutAuditLogosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAuditLogosInput, UsuarioUpdateWithoutAuditLogosInput>, UsuarioUncheckedUpdateWithoutAuditLogosInput>
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

  export type NestedEnumestadoFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    not?: NestedEnumestadoFilter<$PrismaModel> | $Enums.estado
  }

  export type NestedEnumestadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado | EnumestadoFieldRefInput<$PrismaModel>
    in?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.estado[] | ListEnumestadoFieldRefInput<$PrismaModel>
    not?: NestedEnumestadoWithAggregatesFilter<$PrismaModel> | $Enums.estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumestadoFilter<$PrismaModel>
    _max?: NestedEnumestadoFilter<$PrismaModel>
  }

  export type NestedEnumaccionFilter<$PrismaModel = never> = {
    equals?: $Enums.accion | EnumaccionFieldRefInput<$PrismaModel>
    in?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumaccionFilter<$PrismaModel> | $Enums.accion
  }

  export type NestedEnumentidadAfectadaFilter<$PrismaModel = never> = {
    equals?: $Enums.entidadAfectada | EnumentidadAfectadaFieldRefInput<$PrismaModel>
    in?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    not?: NestedEnumentidadAfectadaFilter<$PrismaModel> | $Enums.entidadAfectada
  }

  export type NestedEnumaccionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accion | EnumaccionFieldRefInput<$PrismaModel>
    in?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    notIn?: $Enums.accion[] | ListEnumaccionFieldRefInput<$PrismaModel>
    not?: NestedEnumaccionWithAggregatesFilter<$PrismaModel> | $Enums.accion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccionFilter<$PrismaModel>
    _max?: NestedEnumaccionFilter<$PrismaModel>
  }

  export type NestedEnumentidadAfectadaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.entidadAfectada | EnumentidadAfectadaFieldRefInput<$PrismaModel>
    in?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    notIn?: $Enums.entidadAfectada[] | ListEnumentidadAfectadaFieldRefInput<$PrismaModel>
    not?: NestedEnumentidadAfectadaWithAggregatesFilter<$PrismaModel> | $Enums.entidadAfectada
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumentidadAfectadaFilter<$PrismaModel>
    _max?: NestedEnumentidadAfectadaFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    correo: string
    password: string
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    auditLogos?: AuditLogsCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    auditLogos?: AuditLogsUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    idRol?: IntFilter<"Usuario"> | number
    estado?: EnumestadoFilter<"Usuario"> | $Enums.estado
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type AuditLogsCreateWithoutUsuarioInput = {
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
  }

  export type AuditLogsUncheckedCreateWithoutUsuarioInput = {
    id?: number
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
  }

  export type AuditLogsCreateOrConnectWithoutUsuarioInput = {
    where: AuditLogsWhereUniqueInput
    create: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditLogsCreateManyUsuarioInputEnvelope = {
    data: AuditLogsCreateManyUsuarioInput | AuditLogsCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type AuditLogsUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AuditLogsWhereUniqueInput
    update: XOR<AuditLogsUpdateWithoutUsuarioInput, AuditLogsUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AuditLogsCreateWithoutUsuarioInput, AuditLogsUncheckedCreateWithoutUsuarioInput>
  }

  export type AuditLogsUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AuditLogsWhereUniqueInput
    data: XOR<AuditLogsUpdateWithoutUsuarioInput, AuditLogsUncheckedUpdateWithoutUsuarioInput>
  }

  export type AuditLogsUpdateManyWithWhereWithoutUsuarioInput = {
    where: AuditLogsScalarWhereInput
    data: XOR<AuditLogsUpdateManyMutationInput, AuditLogsUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AuditLogsScalarWhereInput = {
    AND?: AuditLogsScalarWhereInput | AuditLogsScalarWhereInput[]
    OR?: AuditLogsScalarWhereInput[]
    NOT?: AuditLogsScalarWhereInput | AuditLogsScalarWhereInput[]
    id?: IntFilter<"AuditLogs"> | number
    idUsuario?: IntFilter<"AuditLogs"> | number
    accion?: EnumaccionFilter<"AuditLogs"> | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFilter<"AuditLogs"> | $Enums.entidadAfectada
    detalle?: StringFilter<"AuditLogs"> | string
    timestamp?: DateTimeFilter<"AuditLogs"> | Date | string
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutAuditLogosInput = {
    nombre: string
    correo: string
    password: string
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutAuditLogosInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    idRol: number
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutAuditLogosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAuditLogosInput, UsuarioUncheckedCreateWithoutAuditLogosInput>
  }

  export type UsuarioUpsertWithoutAuditLogosInput = {
    update: XOR<UsuarioUpdateWithoutAuditLogosInput, UsuarioUncheckedUpdateWithoutAuditLogosInput>
    create: XOR<UsuarioCreateWithoutAuditLogosInput, UsuarioUncheckedCreateWithoutAuditLogosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAuditLogosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAuditLogosInput, UsuarioUncheckedUpdateWithoutAuditLogosInput>
  }

  export type UsuarioUpdateWithoutAuditLogosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAuditLogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    idRol?: IntFieldUpdateOperationsInput | number
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyRolInput = {
    id?: number
    nombre: string
    correo: string
    password: string
    estado?: $Enums.estado
    fechaCreacion?: Date | string
    fechaActualizacion?: Date | string
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogos?: AuditLogsUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogos?: AuditLogsUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: EnumestadoFieldUpdateOperationsInput | $Enums.estado
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsCreateManyUsuarioInput = {
    id?: number
    accion: $Enums.accion
    entidadAfectada: $Enums.entidadAfectada
    detalle: string
    timestamp?: Date | string
  }

  export type AuditLogsUpdateWithoutUsuarioInput = {
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogsUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    accion?: EnumaccionFieldUpdateOperationsInput | $Enums.accion
    entidadAfectada?: EnumentidadAfectadaFieldUpdateOperationsInput | $Enums.entidadAfectada
    detalle?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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