import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly activity_logs: "activity_logs";
    readonly files: "files";
    readonly app_utilities: "app_utilities";
    readonly certificates: "certificates";
    readonly chats: "chats";
    readonly class_participants: "class_participants";
    readonly classes: "classes";
    readonly comment_reactions: "comment_reactions";
    readonly comments: "comments";
    readonly course_prerequisites: "course_prerequisites";
    readonly course_reviews: "course_reviews";
    readonly course_teachers: "course_teachers";
    readonly courses: "courses";
    readonly exam_scores: "exam_scores";
    readonly leaderboard: "leaderboard";
    readonly lesson_media: "lesson_media";
    readonly lesson_progress_details: "lesson_progress_details";
    readonly lessons: "lessons";
    readonly listening_exercises: "listening_exercises";
    readonly listening_questions: "listening_questions";
    readonly minigames: "minigames";
    readonly notifications: "notifications";
    readonly payments: "payments";
    readonly permissions: "permissions";
    readonly post_reactions: "post_reactions";
    readonly posts: "posts";
    readonly progress: "progress";
    readonly pronunciation_exercises: "pronunciation_exercises";
    readonly quiz_base: "quiz_base";
    readonly quiz_fill_blank: "quiz_fill_blank";
    readonly quiz_multiple_choice: "quiz_multiple_choice";
    readonly quiz_ordering: "quiz_ordering";
    readonly registrations: "registrations";
    readonly role_permissions: "role_permissions";
    readonly roles: "roles";
    readonly system_settings: "system_settings";
    readonly user_roles: "user_roles";
    readonly user_utilities: "user_utilities";
    readonly users: "users";
    readonly vocabularies: "vocabularies";
    readonly writing_exercises: "writing_exercises";
    readonly writing_submissions: "writing_submissions";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "activity_logs" | "files" | "app_utilities" | "certificates" | "chats" | "class_participants" | "classes" | "comment_reactions" | "comments" | "course_prerequisites" | "course_reviews" | "course_teachers" | "courses" | "exam_scores" | "leaderboard" | "lesson_media" | "lesson_progress_details" | "lessons" | "listening_exercises" | "listening_questions" | "minigames" | "notifications" | "payments" | "permissions" | "post_reactions" | "posts" | "progress" | "pronunciation_exercises" | "quiz_base" | "quiz_fill_blank" | "quiz_multiple_choice" | "quiz_ordering" | "registrations" | "role_permissions" | "roles" | "system_settings" | "user_roles" | "user_utilities" | "users" | "vocabularies" | "writing_exercises" | "writing_submissions";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        activity_logs: {
            payload: Prisma.$activity_logsPayload<ExtArgs>;
            fields: Prisma.activity_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.activity_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.activity_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                findFirst: {
                    args: Prisma.activity_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.activity_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                findMany: {
                    args: Prisma.activity_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>[];
                };
                create: {
                    args: Prisma.activity_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                createMany: {
                    args: Prisma.activity_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.activity_logsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>[];
                };
                delete: {
                    args: Prisma.activity_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                update: {
                    args: Prisma.activity_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.activity_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.activity_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.activity_logsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>[];
                };
                upsert: {
                    args: Prisma.activity_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$activity_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Activity_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActivity_logs>;
                };
                groupBy: {
                    args: Prisma.activity_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Activity_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.activity_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Activity_logsCountAggregateOutputType> | number;
                };
            };
        };
        files: {
            payload: Prisma.$filesPayload<ExtArgs>;
            fields: Prisma.filesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.filesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                findFirst: {
                    args: Prisma.filesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                findMany: {
                    args: Prisma.filesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>[];
                };
                create: {
                    args: Prisma.filesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                createMany: {
                    args: Prisma.filesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.filesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>[];
                };
                delete: {
                    args: Prisma.filesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                update: {
                    args: Prisma.filesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                deleteMany: {
                    args: Prisma.filesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.filesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.filesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>[];
                };
                upsert: {
                    args: Prisma.filesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$filesPayload>;
                };
                aggregate: {
                    args: Prisma.FilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFiles>;
                };
                groupBy: {
                    args: Prisma.filesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.filesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilesCountAggregateOutputType> | number;
                };
            };
        };
        app_utilities: {
            payload: Prisma.$app_utilitiesPayload<ExtArgs>;
            fields: Prisma.app_utilitiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.app_utilitiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.app_utilitiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                findFirst: {
                    args: Prisma.app_utilitiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.app_utilitiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                findMany: {
                    args: Prisma.app_utilitiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>[];
                };
                create: {
                    args: Prisma.app_utilitiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                createMany: {
                    args: Prisma.app_utilitiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.app_utilitiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>[];
                };
                delete: {
                    args: Prisma.app_utilitiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                update: {
                    args: Prisma.app_utilitiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                deleteMany: {
                    args: Prisma.app_utilitiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.app_utilitiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.app_utilitiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>[];
                };
                upsert: {
                    args: Prisma.app_utilitiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$app_utilitiesPayload>;
                };
                aggregate: {
                    args: Prisma.App_utilitiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApp_utilities>;
                };
                groupBy: {
                    args: Prisma.app_utilitiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.App_utilitiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.app_utilitiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.App_utilitiesCountAggregateOutputType> | number;
                };
            };
        };
        certificates: {
            payload: Prisma.$certificatesPayload<ExtArgs>;
            fields: Prisma.certificatesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.certificatesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.certificatesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                findFirst: {
                    args: Prisma.certificatesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.certificatesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                findMany: {
                    args: Prisma.certificatesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>[];
                };
                create: {
                    args: Prisma.certificatesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                createMany: {
                    args: Prisma.certificatesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.certificatesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>[];
                };
                delete: {
                    args: Prisma.certificatesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                update: {
                    args: Prisma.certificatesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                deleteMany: {
                    args: Prisma.certificatesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.certificatesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.certificatesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>[];
                };
                upsert: {
                    args: Prisma.certificatesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$certificatesPayload>;
                };
                aggregate: {
                    args: Prisma.CertificatesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCertificates>;
                };
                groupBy: {
                    args: Prisma.certificatesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificatesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.certificatesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CertificatesCountAggregateOutputType> | number;
                };
            };
        };
        chats: {
            payload: Prisma.$chatsPayload<ExtArgs>;
            fields: Prisma.chatsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.chatsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.chatsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                findFirst: {
                    args: Prisma.chatsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.chatsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                findMany: {
                    args: Prisma.chatsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>[];
                };
                create: {
                    args: Prisma.chatsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                createMany: {
                    args: Prisma.chatsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.chatsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>[];
                };
                delete: {
                    args: Prisma.chatsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                update: {
                    args: Prisma.chatsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                deleteMany: {
                    args: Prisma.chatsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.chatsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.chatsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>[];
                };
                upsert: {
                    args: Prisma.chatsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$chatsPayload>;
                };
                aggregate: {
                    args: Prisma.ChatsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChats>;
                };
                groupBy: {
                    args: Prisma.chatsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.chatsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatsCountAggregateOutputType> | number;
                };
            };
        };
        class_participants: {
            payload: Prisma.$class_participantsPayload<ExtArgs>;
            fields: Prisma.class_participantsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.class_participantsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.class_participantsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                findFirst: {
                    args: Prisma.class_participantsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.class_participantsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                findMany: {
                    args: Prisma.class_participantsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>[];
                };
                create: {
                    args: Prisma.class_participantsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                createMany: {
                    args: Prisma.class_participantsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.class_participantsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>[];
                };
                delete: {
                    args: Prisma.class_participantsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                update: {
                    args: Prisma.class_participantsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                deleteMany: {
                    args: Prisma.class_participantsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.class_participantsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.class_participantsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>[];
                };
                upsert: {
                    args: Prisma.class_participantsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$class_participantsPayload>;
                };
                aggregate: {
                    args: Prisma.Class_participantsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClass_participants>;
                };
                groupBy: {
                    args: Prisma.class_participantsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Class_participantsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.class_participantsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Class_participantsCountAggregateOutputType> | number;
                };
            };
        };
        classes: {
            payload: Prisma.$classesPayload<ExtArgs>;
            fields: Prisma.classesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.classesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                findFirst: {
                    args: Prisma.classesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                findMany: {
                    args: Prisma.classesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                create: {
                    args: Prisma.classesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                createMany: {
                    args: Prisma.classesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.classesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                delete: {
                    args: Prisma.classesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                update: {
                    args: Prisma.classesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                deleteMany: {
                    args: Prisma.classesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.classesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.classesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                upsert: {
                    args: Prisma.classesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                aggregate: {
                    args: Prisma.ClassesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClasses>;
                };
                groupBy: {
                    args: Prisma.classesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.classesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassesCountAggregateOutputType> | number;
                };
            };
        };
        comment_reactions: {
            payload: Prisma.$comment_reactionsPayload<ExtArgs>;
            fields: Prisma.comment_reactionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.comment_reactionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.comment_reactionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                findFirst: {
                    args: Prisma.comment_reactionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.comment_reactionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                findMany: {
                    args: Prisma.comment_reactionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>[];
                };
                create: {
                    args: Prisma.comment_reactionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                createMany: {
                    args: Prisma.comment_reactionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.comment_reactionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>[];
                };
                delete: {
                    args: Prisma.comment_reactionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                update: {
                    args: Prisma.comment_reactionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                deleteMany: {
                    args: Prisma.comment_reactionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.comment_reactionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.comment_reactionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>[];
                };
                upsert: {
                    args: Prisma.comment_reactionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$comment_reactionsPayload>;
                };
                aggregate: {
                    args: Prisma.Comment_reactionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComment_reactions>;
                };
                groupBy: {
                    args: Prisma.comment_reactionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Comment_reactionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.comment_reactionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Comment_reactionsCountAggregateOutputType> | number;
                };
            };
        };
        comments: {
            payload: Prisma.$commentsPayload<ExtArgs>;
            fields: Prisma.commentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.commentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                findFirst: {
                    args: Prisma.commentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                findMany: {
                    args: Prisma.commentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>[];
                };
                create: {
                    args: Prisma.commentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                createMany: {
                    args: Prisma.commentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>[];
                };
                delete: {
                    args: Prisma.commentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                update: {
                    args: Prisma.commentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                deleteMany: {
                    args: Prisma.commentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.commentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>[];
                };
                upsert: {
                    args: Prisma.commentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$commentsPayload>;
                };
                aggregate: {
                    args: Prisma.CommentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComments>;
                };
                groupBy: {
                    args: Prisma.commentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.commentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CommentsCountAggregateOutputType> | number;
                };
            };
        };
        course_prerequisites: {
            payload: Prisma.$course_prerequisitesPayload<ExtArgs>;
            fields: Prisma.course_prerequisitesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.course_prerequisitesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.course_prerequisitesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                findFirst: {
                    args: Prisma.course_prerequisitesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.course_prerequisitesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                findMany: {
                    args: Prisma.course_prerequisitesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>[];
                };
                create: {
                    args: Prisma.course_prerequisitesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                createMany: {
                    args: Prisma.course_prerequisitesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.course_prerequisitesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>[];
                };
                delete: {
                    args: Prisma.course_prerequisitesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                update: {
                    args: Prisma.course_prerequisitesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                deleteMany: {
                    args: Prisma.course_prerequisitesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.course_prerequisitesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.course_prerequisitesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>[];
                };
                upsert: {
                    args: Prisma.course_prerequisitesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_prerequisitesPayload>;
                };
                aggregate: {
                    args: Prisma.Course_prerequisitesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse_prerequisites>;
                };
                groupBy: {
                    args: Prisma.course_prerequisitesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_prerequisitesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.course_prerequisitesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_prerequisitesCountAggregateOutputType> | number;
                };
            };
        };
        course_reviews: {
            payload: Prisma.$course_reviewsPayload<ExtArgs>;
            fields: Prisma.course_reviewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.course_reviewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.course_reviewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                findFirst: {
                    args: Prisma.course_reviewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.course_reviewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                findMany: {
                    args: Prisma.course_reviewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>[];
                };
                create: {
                    args: Prisma.course_reviewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                createMany: {
                    args: Prisma.course_reviewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.course_reviewsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>[];
                };
                delete: {
                    args: Prisma.course_reviewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                update: {
                    args: Prisma.course_reviewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                deleteMany: {
                    args: Prisma.course_reviewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.course_reviewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.course_reviewsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>[];
                };
                upsert: {
                    args: Prisma.course_reviewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_reviewsPayload>;
                };
                aggregate: {
                    args: Prisma.Course_reviewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse_reviews>;
                };
                groupBy: {
                    args: Prisma.course_reviewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_reviewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.course_reviewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_reviewsCountAggregateOutputType> | number;
                };
            };
        };
        course_teachers: {
            payload: Prisma.$course_teachersPayload<ExtArgs>;
            fields: Prisma.course_teachersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.course_teachersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.course_teachersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                findFirst: {
                    args: Prisma.course_teachersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.course_teachersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                findMany: {
                    args: Prisma.course_teachersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>[];
                };
                create: {
                    args: Prisma.course_teachersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                createMany: {
                    args: Prisma.course_teachersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.course_teachersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>[];
                };
                delete: {
                    args: Prisma.course_teachersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                update: {
                    args: Prisma.course_teachersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                deleteMany: {
                    args: Prisma.course_teachersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.course_teachersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.course_teachersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>[];
                };
                upsert: {
                    args: Prisma.course_teachersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$course_teachersPayload>;
                };
                aggregate: {
                    args: Prisma.Course_teachersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse_teachers>;
                };
                groupBy: {
                    args: Prisma.course_teachersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_teachersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.course_teachersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Course_teachersCountAggregateOutputType> | number;
                };
            };
        };
        courses: {
            payload: Prisma.$coursesPayload<ExtArgs>;
            fields: Prisma.coursesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.coursesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.coursesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                findFirst: {
                    args: Prisma.coursesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.coursesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                findMany: {
                    args: Prisma.coursesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>[];
                };
                create: {
                    args: Prisma.coursesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                createMany: {
                    args: Prisma.coursesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.coursesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>[];
                };
                delete: {
                    args: Prisma.coursesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                update: {
                    args: Prisma.coursesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                deleteMany: {
                    args: Prisma.coursesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.coursesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.coursesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>[];
                };
                upsert: {
                    args: Prisma.coursesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$coursesPayload>;
                };
                aggregate: {
                    args: Prisma.CoursesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourses>;
                };
                groupBy: {
                    args: Prisma.coursesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CoursesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.coursesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CoursesCountAggregateOutputType> | number;
                };
            };
        };
        exam_scores: {
            payload: Prisma.$exam_scoresPayload<ExtArgs>;
            fields: Prisma.exam_scoresFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.exam_scoresFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.exam_scoresFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                findFirst: {
                    args: Prisma.exam_scoresFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.exam_scoresFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                findMany: {
                    args: Prisma.exam_scoresFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>[];
                };
                create: {
                    args: Prisma.exam_scoresCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                createMany: {
                    args: Prisma.exam_scoresCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.exam_scoresCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>[];
                };
                delete: {
                    args: Prisma.exam_scoresDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                update: {
                    args: Prisma.exam_scoresUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                deleteMany: {
                    args: Prisma.exam_scoresDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.exam_scoresUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.exam_scoresUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>[];
                };
                upsert: {
                    args: Prisma.exam_scoresUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$exam_scoresPayload>;
                };
                aggregate: {
                    args: Prisma.Exam_scoresAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExam_scores>;
                };
                groupBy: {
                    args: Prisma.exam_scoresGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Exam_scoresGroupByOutputType>[];
                };
                count: {
                    args: Prisma.exam_scoresCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Exam_scoresCountAggregateOutputType> | number;
                };
            };
        };
        leaderboard: {
            payload: Prisma.$leaderboardPayload<ExtArgs>;
            fields: Prisma.leaderboardFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.leaderboardFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.leaderboardFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                findFirst: {
                    args: Prisma.leaderboardFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.leaderboardFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                findMany: {
                    args: Prisma.leaderboardFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>[];
                };
                create: {
                    args: Prisma.leaderboardCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                createMany: {
                    args: Prisma.leaderboardCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.leaderboardCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>[];
                };
                delete: {
                    args: Prisma.leaderboardDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                update: {
                    args: Prisma.leaderboardUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                deleteMany: {
                    args: Prisma.leaderboardDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.leaderboardUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.leaderboardUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>[];
                };
                upsert: {
                    args: Prisma.leaderboardUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$leaderboardPayload>;
                };
                aggregate: {
                    args: Prisma.LeaderboardAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeaderboard>;
                };
                groupBy: {
                    args: Prisma.leaderboardGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderboardGroupByOutputType>[];
                };
                count: {
                    args: Prisma.leaderboardCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderboardCountAggregateOutputType> | number;
                };
            };
        };
        lesson_media: {
            payload: Prisma.$lesson_mediaPayload<ExtArgs>;
            fields: Prisma.lesson_mediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lesson_mediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lesson_mediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                findFirst: {
                    args: Prisma.lesson_mediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lesson_mediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                findMany: {
                    args: Prisma.lesson_mediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>[];
                };
                create: {
                    args: Prisma.lesson_mediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                createMany: {
                    args: Prisma.lesson_mediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.lesson_mediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>[];
                };
                delete: {
                    args: Prisma.lesson_mediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                update: {
                    args: Prisma.lesson_mediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                deleteMany: {
                    args: Prisma.lesson_mediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lesson_mediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.lesson_mediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>[];
                };
                upsert: {
                    args: Prisma.lesson_mediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_mediaPayload>;
                };
                aggregate: {
                    args: Prisma.Lesson_mediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson_media>;
                };
                groupBy: {
                    args: Prisma.lesson_mediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_mediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lesson_mediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_mediaCountAggregateOutputType> | number;
                };
            };
        };
        lesson_progress_details: {
            payload: Prisma.$lesson_progress_detailsPayload<ExtArgs>;
            fields: Prisma.lesson_progress_detailsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lesson_progress_detailsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lesson_progress_detailsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                findFirst: {
                    args: Prisma.lesson_progress_detailsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lesson_progress_detailsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                findMany: {
                    args: Prisma.lesson_progress_detailsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>[];
                };
                create: {
                    args: Prisma.lesson_progress_detailsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                createMany: {
                    args: Prisma.lesson_progress_detailsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.lesson_progress_detailsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>[];
                };
                delete: {
                    args: Prisma.lesson_progress_detailsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                update: {
                    args: Prisma.lesson_progress_detailsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                deleteMany: {
                    args: Prisma.lesson_progress_detailsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lesson_progress_detailsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.lesson_progress_detailsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>[];
                };
                upsert: {
                    args: Prisma.lesson_progress_detailsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lesson_progress_detailsPayload>;
                };
                aggregate: {
                    args: Prisma.Lesson_progress_detailsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson_progress_details>;
                };
                groupBy: {
                    args: Prisma.lesson_progress_detailsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_progress_detailsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lesson_progress_detailsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lesson_progress_detailsCountAggregateOutputType> | number;
                };
            };
        };
        lessons: {
            payload: Prisma.$lessonsPayload<ExtArgs>;
            fields: Prisma.lessonsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lessonsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lessonsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                findFirst: {
                    args: Prisma.lessonsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lessonsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                findMany: {
                    args: Prisma.lessonsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>[];
                };
                create: {
                    args: Prisma.lessonsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                createMany: {
                    args: Prisma.lessonsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.lessonsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>[];
                };
                delete: {
                    args: Prisma.lessonsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                update: {
                    args: Prisma.lessonsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                deleteMany: {
                    args: Prisma.lessonsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lessonsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.lessonsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>[];
                };
                upsert: {
                    args: Prisma.lessonsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lessonsPayload>;
                };
                aggregate: {
                    args: Prisma.LessonsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessons>;
                };
                groupBy: {
                    args: Prisma.lessonsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lessonsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonsCountAggregateOutputType> | number;
                };
            };
        };
        listening_exercises: {
            payload: Prisma.$listening_exercisesPayload<ExtArgs>;
            fields: Prisma.listening_exercisesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listening_exercisesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listening_exercisesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                findFirst: {
                    args: Prisma.listening_exercisesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listening_exercisesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                findMany: {
                    args: Prisma.listening_exercisesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>[];
                };
                create: {
                    args: Prisma.listening_exercisesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                createMany: {
                    args: Prisma.listening_exercisesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listening_exercisesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>[];
                };
                delete: {
                    args: Prisma.listening_exercisesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                update: {
                    args: Prisma.listening_exercisesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                deleteMany: {
                    args: Prisma.listening_exercisesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listening_exercisesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listening_exercisesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>[];
                };
                upsert: {
                    args: Prisma.listening_exercisesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_exercisesPayload>;
                };
                aggregate: {
                    args: Prisma.Listening_exercisesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListening_exercises>;
                };
                groupBy: {
                    args: Prisma.listening_exercisesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listening_exercisesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listening_exercisesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listening_exercisesCountAggregateOutputType> | number;
                };
            };
        };
        listening_questions: {
            payload: Prisma.$listening_questionsPayload<ExtArgs>;
            fields: Prisma.listening_questionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listening_questionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listening_questionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                findFirst: {
                    args: Prisma.listening_questionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listening_questionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                findMany: {
                    args: Prisma.listening_questionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>[];
                };
                create: {
                    args: Prisma.listening_questionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                createMany: {
                    args: Prisma.listening_questionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listening_questionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>[];
                };
                delete: {
                    args: Prisma.listening_questionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                update: {
                    args: Prisma.listening_questionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                deleteMany: {
                    args: Prisma.listening_questionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listening_questionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listening_questionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>[];
                };
                upsert: {
                    args: Prisma.listening_questionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listening_questionsPayload>;
                };
                aggregate: {
                    args: Prisma.Listening_questionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListening_questions>;
                };
                groupBy: {
                    args: Prisma.listening_questionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listening_questionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listening_questionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listening_questionsCountAggregateOutputType> | number;
                };
            };
        };
        minigames: {
            payload: Prisma.$minigamesPayload<ExtArgs>;
            fields: Prisma.minigamesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.minigamesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.minigamesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                findFirst: {
                    args: Prisma.minigamesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.minigamesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                findMany: {
                    args: Prisma.minigamesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>[];
                };
                create: {
                    args: Prisma.minigamesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                createMany: {
                    args: Prisma.minigamesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.minigamesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>[];
                };
                delete: {
                    args: Prisma.minigamesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                update: {
                    args: Prisma.minigamesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                deleteMany: {
                    args: Prisma.minigamesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.minigamesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.minigamesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>[];
                };
                upsert: {
                    args: Prisma.minigamesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$minigamesPayload>;
                };
                aggregate: {
                    args: Prisma.MinigamesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMinigames>;
                };
                groupBy: {
                    args: Prisma.minigamesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MinigamesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.minigamesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MinigamesCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        permissions: {
            payload: Prisma.$permissionsPayload<ExtArgs>;
            fields: Prisma.permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findMany: {
                    args: Prisma.permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                create: {
                    args: Prisma.permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                createMany: {
                    args: Prisma.permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                delete: {
                    args: Prisma.permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                update: {
                    args: Prisma.permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermissions>;
                };
                groupBy: {
                    args: Prisma.permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsCountAggregateOutputType> | number;
                };
            };
        };
        post_reactions: {
            payload: Prisma.$post_reactionsPayload<ExtArgs>;
            fields: Prisma.post_reactionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.post_reactionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.post_reactionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                findFirst: {
                    args: Prisma.post_reactionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.post_reactionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                findMany: {
                    args: Prisma.post_reactionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>[];
                };
                create: {
                    args: Prisma.post_reactionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                createMany: {
                    args: Prisma.post_reactionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.post_reactionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>[];
                };
                delete: {
                    args: Prisma.post_reactionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                update: {
                    args: Prisma.post_reactionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                deleteMany: {
                    args: Prisma.post_reactionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.post_reactionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.post_reactionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>[];
                };
                upsert: {
                    args: Prisma.post_reactionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$post_reactionsPayload>;
                };
                aggregate: {
                    args: Prisma.Post_reactionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePost_reactions>;
                };
                groupBy: {
                    args: Prisma.post_reactionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Post_reactionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.post_reactionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Post_reactionsCountAggregateOutputType> | number;
                };
            };
        };
        posts: {
            payload: Prisma.$postsPayload<ExtArgs>;
            fields: Prisma.postsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.postsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                findFirst: {
                    args: Prisma.postsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                findMany: {
                    args: Prisma.postsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>[];
                };
                create: {
                    args: Prisma.postsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                createMany: {
                    args: Prisma.postsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>[];
                };
                delete: {
                    args: Prisma.postsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                update: {
                    args: Prisma.postsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                deleteMany: {
                    args: Prisma.postsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.postsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>[];
                };
                upsert: {
                    args: Prisma.postsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$postsPayload>;
                };
                aggregate: {
                    args: Prisma.PostsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePosts>;
                };
                groupBy: {
                    args: Prisma.postsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.postsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PostsCountAggregateOutputType> | number;
                };
            };
        };
        progress: {
            payload: Prisma.$progressPayload<ExtArgs>;
            fields: Prisma.progressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.progressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.progressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                findFirst: {
                    args: Prisma.progressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.progressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                findMany: {
                    args: Prisma.progressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>[];
                };
                create: {
                    args: Prisma.progressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                createMany: {
                    args: Prisma.progressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.progressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>[];
                };
                delete: {
                    args: Prisma.progressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                update: {
                    args: Prisma.progressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                deleteMany: {
                    args: Prisma.progressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.progressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.progressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>[];
                };
                upsert: {
                    args: Prisma.progressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progressPayload>;
                };
                aggregate: {
                    args: Prisma.ProgressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgress>;
                };
                groupBy: {
                    args: Prisma.progressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.progressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressCountAggregateOutputType> | number;
                };
            };
        };
        pronunciation_exercises: {
            payload: Prisma.$pronunciation_exercisesPayload<ExtArgs>;
            fields: Prisma.pronunciation_exercisesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pronunciation_exercisesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pronunciation_exercisesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                findFirst: {
                    args: Prisma.pronunciation_exercisesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pronunciation_exercisesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                findMany: {
                    args: Prisma.pronunciation_exercisesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>[];
                };
                create: {
                    args: Prisma.pronunciation_exercisesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                createMany: {
                    args: Prisma.pronunciation_exercisesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.pronunciation_exercisesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>[];
                };
                delete: {
                    args: Prisma.pronunciation_exercisesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                update: {
                    args: Prisma.pronunciation_exercisesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                deleteMany: {
                    args: Prisma.pronunciation_exercisesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pronunciation_exercisesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.pronunciation_exercisesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>[];
                };
                upsert: {
                    args: Prisma.pronunciation_exercisesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pronunciation_exercisesPayload>;
                };
                aggregate: {
                    args: Prisma.Pronunciation_exercisesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePronunciation_exercises>;
                };
                groupBy: {
                    args: Prisma.pronunciation_exercisesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Pronunciation_exercisesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pronunciation_exercisesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Pronunciation_exercisesCountAggregateOutputType> | number;
                };
            };
        };
        quiz_base: {
            payload: Prisma.$quiz_basePayload<ExtArgs>;
            fields: Prisma.quiz_baseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_baseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_baseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                findFirst: {
                    args: Prisma.quiz_baseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_baseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                findMany: {
                    args: Prisma.quiz_baseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>[];
                };
                create: {
                    args: Prisma.quiz_baseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                createMany: {
                    args: Prisma.quiz_baseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_baseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>[];
                };
                delete: {
                    args: Prisma.quiz_baseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                update: {
                    args: Prisma.quiz_baseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_baseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_baseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_baseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>[];
                };
                upsert: {
                    args: Prisma.quiz_baseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_basePayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_baseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_base>;
                };
                groupBy: {
                    args: Prisma.quiz_baseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_baseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_baseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_baseCountAggregateOutputType> | number;
                };
            };
        };
        quiz_fill_blank: {
            payload: Prisma.$quiz_fill_blankPayload<ExtArgs>;
            fields: Prisma.quiz_fill_blankFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_fill_blankFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_fill_blankFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                findFirst: {
                    args: Prisma.quiz_fill_blankFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_fill_blankFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                findMany: {
                    args: Prisma.quiz_fill_blankFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>[];
                };
                create: {
                    args: Prisma.quiz_fill_blankCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                createMany: {
                    args: Prisma.quiz_fill_blankCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_fill_blankCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>[];
                };
                delete: {
                    args: Prisma.quiz_fill_blankDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                update: {
                    args: Prisma.quiz_fill_blankUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_fill_blankDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_fill_blankUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_fill_blankUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>[];
                };
                upsert: {
                    args: Prisma.quiz_fill_blankUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_fill_blankPayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_fill_blankAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_fill_blank>;
                };
                groupBy: {
                    args: Prisma.quiz_fill_blankGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_fill_blankGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_fill_blankCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_fill_blankCountAggregateOutputType> | number;
                };
            };
        };
        quiz_multiple_choice: {
            payload: Prisma.$quiz_multiple_choicePayload<ExtArgs>;
            fields: Prisma.quiz_multiple_choiceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_multiple_choiceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_multiple_choiceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                findFirst: {
                    args: Prisma.quiz_multiple_choiceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_multiple_choiceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                findMany: {
                    args: Prisma.quiz_multiple_choiceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>[];
                };
                create: {
                    args: Prisma.quiz_multiple_choiceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                createMany: {
                    args: Prisma.quiz_multiple_choiceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_multiple_choiceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>[];
                };
                delete: {
                    args: Prisma.quiz_multiple_choiceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                update: {
                    args: Prisma.quiz_multiple_choiceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_multiple_choiceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_multiple_choiceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_multiple_choiceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>[];
                };
                upsert: {
                    args: Prisma.quiz_multiple_choiceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_multiple_choicePayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_multiple_choiceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_multiple_choice>;
                };
                groupBy: {
                    args: Prisma.quiz_multiple_choiceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_multiple_choiceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_multiple_choiceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_multiple_choiceCountAggregateOutputType> | number;
                };
            };
        };
        quiz_ordering: {
            payload: Prisma.$quiz_orderingPayload<ExtArgs>;
            fields: Prisma.quiz_orderingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.quiz_orderingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.quiz_orderingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                findFirst: {
                    args: Prisma.quiz_orderingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.quiz_orderingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                findMany: {
                    args: Prisma.quiz_orderingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>[];
                };
                create: {
                    args: Prisma.quiz_orderingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                createMany: {
                    args: Prisma.quiz_orderingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.quiz_orderingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>[];
                };
                delete: {
                    args: Prisma.quiz_orderingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                update: {
                    args: Prisma.quiz_orderingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                deleteMany: {
                    args: Prisma.quiz_orderingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.quiz_orderingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.quiz_orderingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>[];
                };
                upsert: {
                    args: Prisma.quiz_orderingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$quiz_orderingPayload>;
                };
                aggregate: {
                    args: Prisma.Quiz_orderingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateQuiz_ordering>;
                };
                groupBy: {
                    args: Prisma.quiz_orderingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_orderingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.quiz_orderingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Quiz_orderingCountAggregateOutputType> | number;
                };
            };
        };
        registrations: {
            payload: Prisma.$registrationsPayload<ExtArgs>;
            fields: Prisma.registrationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.registrationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.registrationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                findFirst: {
                    args: Prisma.registrationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.registrationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                findMany: {
                    args: Prisma.registrationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>[];
                };
                create: {
                    args: Prisma.registrationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                createMany: {
                    args: Prisma.registrationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.registrationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>[];
                };
                delete: {
                    args: Prisma.registrationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                update: {
                    args: Prisma.registrationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                deleteMany: {
                    args: Prisma.registrationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.registrationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.registrationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>[];
                };
                upsert: {
                    args: Prisma.registrationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$registrationsPayload>;
                };
                aggregate: {
                    args: Prisma.RegistrationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRegistrations>;
                };
                groupBy: {
                    args: Prisma.registrationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistrationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.registrationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegistrationsCountAggregateOutputType> | number;
                };
            };
        };
        role_permissions: {
            payload: Prisma.$role_permissionsPayload<ExtArgs>;
            fields: Prisma.role_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.role_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.role_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.role_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.role_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.role_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                create: {
                    args: Prisma.role_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.role_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.role_permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                delete: {
                    args: Prisma.role_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                update: {
                    args: Prisma.role_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.role_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.role_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.role_permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.role_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Role_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole_permissions>;
                };
                groupBy: {
                    args: Prisma.role_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.role_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        system_settings: {
            payload: Prisma.$system_settingsPayload<ExtArgs>;
            fields: Prisma.system_settingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.system_settingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.system_settingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findFirst: {
                    args: Prisma.system_settingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.system_settingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                findMany: {
                    args: Prisma.system_settingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                create: {
                    args: Prisma.system_settingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                createMany: {
                    args: Prisma.system_settingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.system_settingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                delete: {
                    args: Prisma.system_settingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                update: {
                    args: Prisma.system_settingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                deleteMany: {
                    args: Prisma.system_settingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.system_settingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.system_settingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>[];
                };
                upsert: {
                    args: Prisma.system_settingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$system_settingsPayload>;
                };
                aggregate: {
                    args: Prisma.System_settingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSystem_settings>;
                };
                groupBy: {
                    args: Prisma.system_settingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.system_settingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.System_settingsCountAggregateOutputType> | number;
                };
            };
        };
        user_roles: {
            payload: Prisma.$user_rolesPayload<ExtArgs>;
            fields: Prisma.user_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                update: {
                    args: Prisma.user_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_roles>;
                };
                groupBy: {
                    args: Prisma.user_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesCountAggregateOutputType> | number;
                };
            };
        };
        user_utilities: {
            payload: Prisma.$user_utilitiesPayload<ExtArgs>;
            fields: Prisma.user_utilitiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_utilitiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_utilitiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                findFirst: {
                    args: Prisma.user_utilitiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_utilitiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                findMany: {
                    args: Prisma.user_utilitiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>[];
                };
                create: {
                    args: Prisma.user_utilitiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                createMany: {
                    args: Prisma.user_utilitiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_utilitiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>[];
                };
                delete: {
                    args: Prisma.user_utilitiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                update: {
                    args: Prisma.user_utilitiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_utilitiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_utilitiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_utilitiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>[];
                };
                upsert: {
                    args: Prisma.user_utilitiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_utilitiesPayload>;
                };
                aggregate: {
                    args: Prisma.User_utilitiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_utilities>;
                };
                groupBy: {
                    args: Prisma.user_utilitiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_utilitiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_utilitiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_utilitiesCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        vocabularies: {
            payload: Prisma.$vocabulariesPayload<ExtArgs>;
            fields: Prisma.vocabulariesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.vocabulariesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.vocabulariesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                findFirst: {
                    args: Prisma.vocabulariesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.vocabulariesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                findMany: {
                    args: Prisma.vocabulariesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>[];
                };
                create: {
                    args: Prisma.vocabulariesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                createMany: {
                    args: Prisma.vocabulariesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.vocabulariesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>[];
                };
                delete: {
                    args: Prisma.vocabulariesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                update: {
                    args: Prisma.vocabulariesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                deleteMany: {
                    args: Prisma.vocabulariesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.vocabulariesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.vocabulariesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>[];
                };
                upsert: {
                    args: Prisma.vocabulariesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vocabulariesPayload>;
                };
                aggregate: {
                    args: Prisma.VocabulariesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVocabularies>;
                };
                groupBy: {
                    args: Prisma.vocabulariesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VocabulariesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.vocabulariesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VocabulariesCountAggregateOutputType> | number;
                };
            };
        };
        writing_exercises: {
            payload: Prisma.$writing_exercisesPayload<ExtArgs>;
            fields: Prisma.writing_exercisesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.writing_exercisesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.writing_exercisesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                findFirst: {
                    args: Prisma.writing_exercisesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.writing_exercisesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                findMany: {
                    args: Prisma.writing_exercisesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>[];
                };
                create: {
                    args: Prisma.writing_exercisesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                createMany: {
                    args: Prisma.writing_exercisesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.writing_exercisesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>[];
                };
                delete: {
                    args: Prisma.writing_exercisesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                update: {
                    args: Prisma.writing_exercisesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                deleteMany: {
                    args: Prisma.writing_exercisesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.writing_exercisesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.writing_exercisesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>[];
                };
                upsert: {
                    args: Prisma.writing_exercisesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_exercisesPayload>;
                };
                aggregate: {
                    args: Prisma.Writing_exercisesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWriting_exercises>;
                };
                groupBy: {
                    args: Prisma.writing_exercisesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Writing_exercisesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.writing_exercisesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Writing_exercisesCountAggregateOutputType> | number;
                };
            };
        };
        writing_submissions: {
            payload: Prisma.$writing_submissionsPayload<ExtArgs>;
            fields: Prisma.writing_submissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.writing_submissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.writing_submissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                findFirst: {
                    args: Prisma.writing_submissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.writing_submissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                findMany: {
                    args: Prisma.writing_submissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>[];
                };
                create: {
                    args: Prisma.writing_submissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                createMany: {
                    args: Prisma.writing_submissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.writing_submissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>[];
                };
                delete: {
                    args: Prisma.writing_submissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                update: {
                    args: Prisma.writing_submissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.writing_submissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.writing_submissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.writing_submissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>[];
                };
                upsert: {
                    args: Prisma.writing_submissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$writing_submissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Writing_submissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWriting_submissions>;
                };
                groupBy: {
                    args: Prisma.writing_submissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Writing_submissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.writing_submissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Writing_submissionsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Activity_logsScalarFieldEnum: {
    readonly log_id: "log_id";
    readonly user_id: "user_id";
    readonly action: "action";
    readonly details: "details";
    readonly created_at: "created_at";
};
export type Activity_logsScalarFieldEnum = (typeof Activity_logsScalarFieldEnum)[keyof typeof Activity_logsScalarFieldEnum];
export declare const FilesScalarFieldEnum: {
    readonly id: "id";
    readonly filename: "filename";
    readonly originalName: "originalName";
    readonly mimetype: "mimetype";
    readonly size: "size";
    readonly path: "path";
    readonly publicId: "publicId";
    readonly type: "type";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly lessonId: "lessonId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum];
export declare const App_utilitiesScalarFieldEnum: {
    readonly utility_id: "utility_id";
    readonly key: "key";
    readonly name: "name";
    readonly description: "description";
    readonly icon_url: "icon_url";
    readonly route_path: "route_path";
    readonly is_active: "is_active";
    readonly category: "category";
    readonly display_order: "display_order";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type App_utilitiesScalarFieldEnum = (typeof App_utilitiesScalarFieldEnum)[keyof typeof App_utilitiesScalarFieldEnum];
export declare const CertificatesScalarFieldEnum: {
    readonly cert_id: "cert_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly issue_date: "issue_date";
    readonly cert_url: "cert_url";
    readonly created_by: "created_by";
};
export type CertificatesScalarFieldEnum = (typeof CertificatesScalarFieldEnum)[keyof typeof CertificatesScalarFieldEnum];
export declare const ChatsScalarFieldEnum: {
    readonly chat_id: "chat_id";
    readonly user_id: "user_id";
    readonly sender: "sender";
    readonly message: "message";
    readonly created_at: "created_at";
};
export type ChatsScalarFieldEnum = (typeof ChatsScalarFieldEnum)[keyof typeof ChatsScalarFieldEnum];
export declare const Class_participantsScalarFieldEnum: {
    readonly participant_id: "participant_id";
    readonly class_id: "class_id";
    readonly user_id: "user_id";
    readonly attendance_status: "attendance_status";
    readonly score: "score";
    readonly feedback: "feedback";
    readonly created_at: "created_at";
};
export type Class_participantsScalarFieldEnum = (typeof Class_participantsScalarFieldEnum)[keyof typeof Class_participantsScalarFieldEnum];
export declare const ClassesScalarFieldEnum: {
    readonly class_id: "class_id";
    readonly course_id: "course_id";
    readonly teacher_id: "teacher_id";
    readonly title: "title";
    readonly description: "description";
    readonly class_type: "class_type";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly meeting_link: "meeting_link";
    readonly recording_url: "recording_url";
    readonly location: "location";
    readonly exam_type: "exam_type";
    readonly max_score: "max_score";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum];
export declare const Comment_reactionsScalarFieldEnum: {
    readonly reaction_id: "reaction_id";
    readonly comment_id: "comment_id";
    readonly user_id: "user_id";
    readonly reaction_type: "reaction_type";
    readonly created_at: "created_at";
};
export type Comment_reactionsScalarFieldEnum = (typeof Comment_reactionsScalarFieldEnum)[keyof typeof Comment_reactionsScalarFieldEnum];
export declare const CommentsScalarFieldEnum: {
    readonly comment_id: "comment_id";
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly parent_id: "parent_id";
    readonly content: "content";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly status: "status";
};
export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum];
export declare const Course_prerequisitesScalarFieldEnum: {
    readonly id: "id";
    readonly course_id: "course_id";
    readonly prereq_course_id: "prereq_course_id";
};
export type Course_prerequisitesScalarFieldEnum = (typeof Course_prerequisitesScalarFieldEnum)[keyof typeof Course_prerequisitesScalarFieldEnum];
export declare const Course_reviewsScalarFieldEnum: {
    readonly review_id: "review_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Course_reviewsScalarFieldEnum = (typeof Course_reviewsScalarFieldEnum)[keyof typeof Course_reviewsScalarFieldEnum];
export declare const Course_teachersScalarFieldEnum: {
    readonly id: "id";
    readonly course_id: "course_id";
    readonly teacher_id: "teacher_id";
    readonly role_in_course: "role_in_course";
    readonly assigned_at: "assigned_at";
};
export type Course_teachersScalarFieldEnum = (typeof Course_teachersScalarFieldEnum)[keyof typeof Course_teachersScalarFieldEnum];
export declare const CoursesScalarFieldEnum: {
    readonly course_id: "course_id";
    readonly title: "title";
    readonly description: "description";
    readonly image_url: "image_url";
    readonly price: "price";
    readonly level: "level";
    readonly duration_weeks: "duration_weeks";
    readonly language: "language";
    readonly zalo_link: "zalo_link";
    readonly status: "status";
    readonly teacher_id: "teacher_id";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum];
export declare const Exam_scoresScalarFieldEnum: {
    readonly score_id: "score_id";
    readonly class_id: "class_id";
    readonly user_id: "user_id";
    readonly listening_score: "listening_score";
    readonly speaking_score: "speaking_score";
    readonly reading_score: "reading_score";
    readonly writing_score: "writing_score";
    readonly total_score: "total_score";
    readonly feedback: "feedback";
    readonly graded_by: "graded_by";
    readonly graded_at: "graded_at";
    readonly created_at: "created_at";
};
export type Exam_scoresScalarFieldEnum = (typeof Exam_scoresScalarFieldEnum)[keyof typeof Exam_scoresScalarFieldEnum];
export declare const LeaderboardScalarFieldEnum: {
    readonly score_id: "score_id";
    readonly user_id: "user_id";
    readonly game_id: "game_id";
    readonly score: "score";
    readonly achieved_at: "achieved_at";
};
export type LeaderboardScalarFieldEnum = (typeof LeaderboardScalarFieldEnum)[keyof typeof LeaderboardScalarFieldEnum];
export declare const Lesson_mediaScalarFieldEnum: {
    readonly media_id: "media_id";
    readonly lesson_id: "lesson_id";
    readonly media_type: "media_type";
    readonly media_url: "media_url";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Lesson_mediaScalarFieldEnum = (typeof Lesson_mediaScalarFieldEnum)[keyof typeof Lesson_mediaScalarFieldEnum];
export declare const Lesson_progress_detailsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly lesson_id: "lesson_id";
    readonly content_type: "content_type";
    readonly content_id: "content_id";
    readonly progress_percent: "progress_percent";
    readonly status: "status";
    readonly updated_at: "updated_at";
};
export type Lesson_progress_detailsScalarFieldEnum = (typeof Lesson_progress_detailsScalarFieldEnum)[keyof typeof Lesson_progress_detailsScalarFieldEnum];
export declare const LessonsScalarFieldEnum: {
    readonly lesson_id: "lesson_id";
    readonly course_id: "course_id";
    readonly title: "title";
    readonly content: "content";
    readonly order_index: "order_index";
    readonly duration_seconds: "duration_seconds";
    readonly total_pages: "total_pages";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type LessonsScalarFieldEnum = (typeof LessonsScalarFieldEnum)[keyof typeof LessonsScalarFieldEnum];
export declare const Listening_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly title: "title";
    readonly audio_url: "audio_url";
    readonly transcript: "transcript";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Listening_exercisesScalarFieldEnum = (typeof Listening_exercisesScalarFieldEnum)[keyof typeof Listening_exercisesScalarFieldEnum];
export declare const Listening_questionsScalarFieldEnum: {
    readonly question_id: "question_id";
    readonly exercise_id: "exercise_id";
    readonly question: "question";
    readonly options: "options";
    readonly correct_answer: "correct_answer";
    readonly order_index: "order_index";
    readonly created_at: "created_at";
};
export type Listening_questionsScalarFieldEnum = (typeof Listening_questionsScalarFieldEnum)[keyof typeof Listening_questionsScalarFieldEnum];
export declare const MinigamesScalarFieldEnum: {
    readonly game_id: "game_id";
    readonly name: "name";
    readonly description: "description";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type MinigamesScalarFieldEnum = (typeof MinigamesScalarFieldEnum)[keyof typeof MinigamesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly noti_id: "noti_id";
    readonly user_id: "user_id";
    readonly message: "message";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly payment_id: "payment_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly payment_method: "payment_method";
    readonly payment_status: "payment_status";
    readonly transaction_id: "transaction_id";
    readonly payment_note: "payment_note";
    readonly paid_at: "paid_at";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PermissionsScalarFieldEnum: {
    readonly perm_id: "perm_id";
    readonly perm_key: "perm_key";
    readonly module: "module";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum];
export declare const Post_reactionsScalarFieldEnum: {
    readonly reaction_id: "reaction_id";
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly reaction_type: "reaction_type";
    readonly created_at: "created_at";
};
export type Post_reactionsScalarFieldEnum = (typeof Post_reactionsScalarFieldEnum)[keyof typeof Post_reactionsScalarFieldEnum];
export declare const PostsScalarFieldEnum: {
    readonly post_id: "post_id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly content: "content";
    readonly media_url: "media_url";
    readonly media_type: "media_type";
    readonly category: "category";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly status: "status";
};
export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum];
export declare const ProgressScalarFieldEnum: {
    readonly progress_id: "progress_id";
    readonly user_id: "user_id";
    readonly lesson_id: "lesson_id";
    readonly progress_percent: "progress_percent";
    readonly status: "status";
    readonly updated_at: "updated_at";
};
export type ProgressScalarFieldEnum = (typeof ProgressScalarFieldEnum)[keyof typeof ProgressScalarFieldEnum];
export declare const Pronunciation_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly sentence: "sentence";
    readonly sample_audio_url: "sample_audio_url";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Pronunciation_exercisesScalarFieldEnum = (typeof Pronunciation_exercisesScalarFieldEnum)[keyof typeof Pronunciation_exercisesScalarFieldEnum];
export declare const Quiz_baseScalarFieldEnum: {
    readonly quiz_id: "quiz_id";
    readonly lesson_id: "lesson_id";
    readonly question: "question";
    readonly question_type: "question_type";
    readonly explanation: "explanation";
    readonly order_index: "order_index";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Quiz_baseScalarFieldEnum = (typeof Quiz_baseScalarFieldEnum)[keyof typeof Quiz_baseScalarFieldEnum];
export declare const Quiz_fill_blankScalarFieldEnum: {
    readonly fb_id: "fb_id";
    readonly quiz_id: "quiz_id";
    readonly correct_text: "correct_text";
};
export type Quiz_fill_blankScalarFieldEnum = (typeof Quiz_fill_blankScalarFieldEnum)[keyof typeof Quiz_fill_blankScalarFieldEnum];
export declare const Quiz_multiple_choiceScalarFieldEnum: {
    readonly mcq_id: "mcq_id";
    readonly quiz_id: "quiz_id";
    readonly option_text: "option_text";
    readonly is_correct: "is_correct";
};
export type Quiz_multiple_choiceScalarFieldEnum = (typeof Quiz_multiple_choiceScalarFieldEnum)[keyof typeof Quiz_multiple_choiceScalarFieldEnum];
export declare const Quiz_orderingScalarFieldEnum: {
    readonly ord_id: "ord_id";
    readonly quiz_id: "quiz_id";
    readonly item_text: "item_text";
    readonly correct_position: "correct_position";
};
export type Quiz_orderingScalarFieldEnum = (typeof Quiz_orderingScalarFieldEnum)[keyof typeof Quiz_orderingScalarFieldEnum];
export declare const RegistrationsScalarFieldEnum: {
    readonly reg_id: "reg_id";
    readonly user_id: "user_id";
    readonly course_id: "course_id";
    readonly registered_at: "registered_at";
};
export type RegistrationsScalarFieldEnum = (typeof RegistrationsScalarFieldEnum)[keyof typeof RegistrationsScalarFieldEnum];
export declare const Role_permissionsScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly perm_id: "perm_id";
};
export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly role_name: "role_name";
    readonly display_name: "display_name";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const System_settingsScalarFieldEnum: {
    readonly setting_id: "setting_id";
    readonly key: "key";
    readonly value: "value";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type System_settingsScalarFieldEnum = (typeof System_settingsScalarFieldEnum)[keyof typeof System_settingsScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly role_id: "role_id";
    readonly assigned_at: "assigned_at";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const User_utilitiesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly utility_id: "utility_id";
    readonly is_enabled: "is_enabled";
    readonly pinned: "pinned";
    readonly customized_label: "customized_label";
    readonly updated_at: "updated_at";
};
export type User_utilitiesScalarFieldEnum = (typeof User_utilitiesScalarFieldEnum)[keyof typeof User_utilitiesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly full_name: "full_name";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly language_pref: "language_pref";
    readonly avatar_url: "avatar_url";
    readonly phone: "phone";
    readonly address: "address";
    readonly date_of_birth: "date_of_birth";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const VocabulariesScalarFieldEnum: {
    readonly vocab_id: "vocab_id";
    readonly lesson_id: "lesson_id";
    readonly word: "word";
    readonly phonetic: "phonetic";
    readonly meaning: "meaning";
    readonly example: "example";
    readonly audio_url: "audio_url";
    readonly image_url: "image_url";
    readonly part_of_speech: "part_of_speech";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type VocabulariesScalarFieldEnum = (typeof VocabulariesScalarFieldEnum)[keyof typeof VocabulariesScalarFieldEnum];
export declare const Writing_exercisesScalarFieldEnum: {
    readonly exercise_id: "exercise_id";
    readonly lesson_id: "lesson_id";
    readonly title: "title";
    readonly prompt: "prompt";
    readonly sample_answer: "sample_answer";
    readonly word_limit: "word_limit";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type Writing_exercisesScalarFieldEnum = (typeof Writing_exercisesScalarFieldEnum)[keyof typeof Writing_exercisesScalarFieldEnum];
export declare const Writing_submissionsScalarFieldEnum: {
    readonly submission_id: "submission_id";
    readonly exercise_id: "exercise_id";
    readonly user_id: "user_id";
    readonly content: "content";
    readonly file_url: "file_url";
    readonly word_count: "word_count";
    readonly grade: "grade";
    readonly feedback: "feedback";
    readonly graded_by: "graded_by";
    readonly status: "status";
    readonly submitted_at: "submitted_at";
    readonly graded_at: "graded_at";
};
export type Writing_submissionsScalarFieldEnum = (typeof Writing_submissionsScalarFieldEnum)[keyof typeof Writing_submissionsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    activity_logs?: Prisma.activity_logsOmit;
    files?: Prisma.filesOmit;
    app_utilities?: Prisma.app_utilitiesOmit;
    certificates?: Prisma.certificatesOmit;
    chats?: Prisma.chatsOmit;
    class_participants?: Prisma.class_participantsOmit;
    classes?: Prisma.classesOmit;
    comment_reactions?: Prisma.comment_reactionsOmit;
    comments?: Prisma.commentsOmit;
    course_prerequisites?: Prisma.course_prerequisitesOmit;
    course_reviews?: Prisma.course_reviewsOmit;
    course_teachers?: Prisma.course_teachersOmit;
    courses?: Prisma.coursesOmit;
    exam_scores?: Prisma.exam_scoresOmit;
    leaderboard?: Prisma.leaderboardOmit;
    lesson_media?: Prisma.lesson_mediaOmit;
    lesson_progress_details?: Prisma.lesson_progress_detailsOmit;
    lessons?: Prisma.lessonsOmit;
    listening_exercises?: Prisma.listening_exercisesOmit;
    listening_questions?: Prisma.listening_questionsOmit;
    minigames?: Prisma.minigamesOmit;
    notifications?: Prisma.notificationsOmit;
    payments?: Prisma.paymentsOmit;
    permissions?: Prisma.permissionsOmit;
    post_reactions?: Prisma.post_reactionsOmit;
    posts?: Prisma.postsOmit;
    progress?: Prisma.progressOmit;
    pronunciation_exercises?: Prisma.pronunciation_exercisesOmit;
    quiz_base?: Prisma.quiz_baseOmit;
    quiz_fill_blank?: Prisma.quiz_fill_blankOmit;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceOmit;
    quiz_ordering?: Prisma.quiz_orderingOmit;
    registrations?: Prisma.registrationsOmit;
    role_permissions?: Prisma.role_permissionsOmit;
    roles?: Prisma.rolesOmit;
    system_settings?: Prisma.system_settingsOmit;
    user_roles?: Prisma.user_rolesOmit;
    user_utilities?: Prisma.user_utilitiesOmit;
    users?: Prisma.usersOmit;
    vocabularies?: Prisma.vocabulariesOmit;
    writing_exercises?: Prisma.writing_exercisesOmit;
    writing_submissions?: Prisma.writing_submissionsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
