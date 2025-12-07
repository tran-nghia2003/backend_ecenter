import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get push_tokens(): Prisma.push_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_roles(): Prisma.user_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get permissions(): Prisma.permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role_permissions(): Prisma.role_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get courses(): Prisma.coursesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get course_prerequisites(): Prisma.course_prerequisitesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get course_reviews(): Prisma.course_reviewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get course_teachers(): Prisma.course_teachersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lessons(): Prisma.lessonsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lesson_media(): Prisma.lesson_mediaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vocabularies(): Prisma.vocabulariesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get listening_exercises(): Prisma.listening_exercisesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get listening_questions(): Prisma.listening_questionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quizzes(): Prisma.quizzesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get writing_exercises(): Prisma.writing_exercisesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get writing_submissions(): Prisma.writing_submissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payments(): Prisma.paymentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get progress(): Prisma.progressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lesson_progress_details(): Prisma.lesson_progress_detailsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get listening_attempt_sets(): Prisma.listening_attempt_setsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get listening_answers(): Prisma.listening_answersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quiz_attempt_sets(): Prisma.quiz_attempt_setsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get quiz_attempts(): Prisma.quiz_attemptsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get classes(): Prisma.classesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get class_participants(): Prisma.class_participantsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get study_shifts(): Prisma.study_shiftsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get class_groups(): Prisma.class_groupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get class_group_members(): Prisma.class_group_membersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get exam_scores(): Prisma.exam_scoresDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get certificates(): Prisma.certificatesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get chats(): Prisma.chatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get comments(): Prisma.commentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get comment_reactions(): Prisma.comment_reactionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get posts(): Prisma.postsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get post_reactions(): Prisma.post_reactionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notifications(): Prisma.notificationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notification_recipients(): Prisma.notification_recipientsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get minigames(): Prisma.minigamesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get leaderboard(): Prisma.leaderboardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get system_settings(): Prisma.system_settingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get app_utilities(): Prisma.app_utilitiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_utilities(): Prisma.user_utilitiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get activity_logs(): Prisma.activity_logsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get files(): Prisma.filesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get registrations(): Prisma.registrationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
