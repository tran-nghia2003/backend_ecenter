import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type quiz_attemptsModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_attemptsPayload>;
export type AggregateQuiz_attempts = {
    _count: Quiz_attemptsCountAggregateOutputType | null;
    _avg: Quiz_attemptsAvgAggregateOutputType | null;
    _sum: Quiz_attemptsSumAggregateOutputType | null;
    _min: Quiz_attemptsMinAggregateOutputType | null;
    _max: Quiz_attemptsMaxAggregateOutputType | null;
};
export type Quiz_attemptsAvgAggregateOutputType = {
    attempt_id: number | null;
    user_id: number | null;
    quiz_id: number | null;
    attempt_set_id: number | null;
    score_percent: runtime.Decimal | null;
};
export type Quiz_attemptsSumAggregateOutputType = {
    attempt_id: number | null;
    user_id: number | null;
    quiz_id: number | null;
    attempt_set_id: number | null;
    score_percent: runtime.Decimal | null;
};
export type Quiz_attemptsMinAggregateOutputType = {
    attempt_id: number | null;
    user_id: number | null;
    quiz_id: number | null;
    attempt_set_id: number | null;
    is_correct: boolean | null;
    score_percent: runtime.Decimal | null;
    created_at: Date | null;
};
export type Quiz_attemptsMaxAggregateOutputType = {
    attempt_id: number | null;
    user_id: number | null;
    quiz_id: number | null;
    attempt_set_id: number | null;
    is_correct: boolean | null;
    score_percent: runtime.Decimal | null;
    created_at: Date | null;
};
export type Quiz_attemptsCountAggregateOutputType = {
    attempt_id: number;
    user_id: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct: number;
    user_answer: number;
    score_percent: number;
    created_at: number;
    _all: number;
};
export type Quiz_attemptsAvgAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    quiz_id?: true;
    attempt_set_id?: true;
    score_percent?: true;
};
export type Quiz_attemptsSumAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    quiz_id?: true;
    attempt_set_id?: true;
    score_percent?: true;
};
export type Quiz_attemptsMinAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    quiz_id?: true;
    attempt_set_id?: true;
    is_correct?: true;
    score_percent?: true;
    created_at?: true;
};
export type Quiz_attemptsMaxAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    quiz_id?: true;
    attempt_set_id?: true;
    is_correct?: true;
    score_percent?: true;
    created_at?: true;
};
export type Quiz_attemptsCountAggregateInputType = {
    attempt_id?: true;
    user_id?: true;
    quiz_id?: true;
    attempt_set_id?: true;
    is_correct?: true;
    user_answer?: true;
    score_percent?: true;
    created_at?: true;
    _all?: true;
};
export type Quiz_attemptsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_attemptsCountAggregateInputType;
    _avg?: Quiz_attemptsAvgAggregateInputType;
    _sum?: Quiz_attemptsSumAggregateInputType;
    _min?: Quiz_attemptsMinAggregateInputType;
    _max?: Quiz_attemptsMaxAggregateInputType;
};
export type GetQuiz_attemptsAggregateType<T extends Quiz_attemptsAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_attempts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_attempts[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_attempts[P]>;
};
export type quiz_attemptsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithAggregationInput | Prisma.quiz_attemptsOrderByWithAggregationInput[];
    by: Prisma.Quiz_attemptsScalarFieldEnum[] | Prisma.Quiz_attemptsScalarFieldEnum;
    having?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_attemptsCountAggregateInputType | true;
    _avg?: Quiz_attemptsAvgAggregateInputType;
    _sum?: Quiz_attemptsSumAggregateInputType;
    _min?: Quiz_attemptsMinAggregateInputType;
    _max?: Quiz_attemptsMaxAggregateInputType;
};
export type Quiz_attemptsGroupByOutputType = {
    attempt_id: number;
    user_id: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct: boolean | null;
    user_answer: runtime.JsonValue | null;
    score_percent: runtime.Decimal | null;
    created_at: Date | null;
    _count: Quiz_attemptsCountAggregateOutputType | null;
    _avg: Quiz_attemptsAvgAggregateOutputType | null;
    _sum: Quiz_attemptsSumAggregateOutputType | null;
    _min: Quiz_attemptsMinAggregateOutputType | null;
    _max: Quiz_attemptsMaxAggregateOutputType | null;
};
type GetQuiz_attemptsGroupByPayload<T extends quiz_attemptsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_attemptsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_attemptsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_attemptsGroupByOutputType[P]>;
}>>;
export type quiz_attemptsWhereInput = {
    AND?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    OR?: Prisma.quiz_attemptsWhereInput[];
    NOT?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    attempt_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    user_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    quiz_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    attempt_set_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    is_correct?: Prisma.BoolNullableFilter<"quiz_attempts"> | boolean | null;
    user_answer?: Prisma.JsonNullableFilter<"quiz_attempts">;
    score_percent?: Prisma.DecimalNullableFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    quizzes?: Prisma.XOR<Prisma.QuizzesNullableScalarRelationFilter, Prisma.quizzesWhereInput> | null;
    quiz_attempt_sets?: Prisma.XOR<Prisma.Quiz_attempt_setsNullableScalarRelationFilter, Prisma.quiz_attempt_setsWhereInput> | null;
};
export type quiz_attemptsOrderByWithRelationInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    score_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    quizzes?: Prisma.quizzesOrderByWithRelationInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsOrderByWithRelationInput;
};
export type quiz_attemptsWhereUniqueInput = Prisma.AtLeast<{
    attempt_id?: number;
    AND?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    OR?: Prisma.quiz_attemptsWhereInput[];
    NOT?: Prisma.quiz_attemptsWhereInput | Prisma.quiz_attemptsWhereInput[];
    user_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    quiz_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    attempt_set_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    is_correct?: Prisma.BoolNullableFilter<"quiz_attempts"> | boolean | null;
    user_answer?: Prisma.JsonNullableFilter<"quiz_attempts">;
    score_percent?: Prisma.DecimalNullableFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    quizzes?: Prisma.XOR<Prisma.QuizzesNullableScalarRelationFilter, Prisma.quizzesWhereInput> | null;
    quiz_attempt_sets?: Prisma.XOR<Prisma.Quiz_attempt_setsNullableScalarRelationFilter, Prisma.quiz_attempt_setsWhereInput> | null;
}, "attempt_id">;
export type quiz_attemptsOrderByWithAggregationInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    score_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quiz_attemptsCountOrderByAggregateInput;
    _avg?: Prisma.quiz_attemptsAvgOrderByAggregateInput;
    _max?: Prisma.quiz_attemptsMaxOrderByAggregateInput;
    _min?: Prisma.quiz_attemptsMinOrderByAggregateInput;
    _sum?: Prisma.quiz_attemptsSumOrderByAggregateInput;
};
export type quiz_attemptsScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput | Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_attemptsScalarWhereWithAggregatesInput | Prisma.quiz_attemptsScalarWhereWithAggregatesInput[];
    attempt_id?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    quiz_id?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    attempt_set_id?: Prisma.IntWithAggregatesFilter<"quiz_attempts"> | number;
    is_correct?: Prisma.BoolNullableWithAggregatesFilter<"quiz_attempts"> | boolean | null;
    user_answer?: Prisma.JsonNullableWithAggregatesFilter<"quiz_attempts">;
    score_percent?: Prisma.DecimalNullableWithAggregatesFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_attempts"> | Date | string | null;
};
export type quiz_attemptsCreateInput = {
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_attemptsInput;
    quizzes?: Prisma.quizzesCreateNestedOneWithoutQuiz_attemptsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateInput = {
    attempt_id?: number;
    user_id: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsUpdateInput = {
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_attemptsNestedInput;
    quizzes?: Prisma.quizzesUpdateOneWithoutQuiz_attemptsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateOneWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsCreateManyInput = {
    attempt_id?: number;
    user_id: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsUpdateManyMutationInput = {
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Quiz_attemptsListRelationFilter = {
    every?: Prisma.quiz_attemptsWhereInput;
    some?: Prisma.quiz_attemptsWhereInput;
    none?: Prisma.quiz_attemptsWhereInput;
};
export type quiz_attemptsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_attemptsCountOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    user_answer?: Prisma.SortOrder;
    score_percent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_attemptsAvgOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    score_percent?: Prisma.SortOrder;
};
export type quiz_attemptsMaxOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    score_percent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_attemptsMinOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    score_percent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_attemptsSumOrderByAggregateInput = {
    attempt_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    score_percent?: Prisma.SortOrder;
};
export type quiz_attemptsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput> | Prisma.quiz_attemptsCreateWithoutUsersInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput | Prisma.quiz_attemptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_attemptsCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsCreateNestedManyWithoutQuizzesInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput> | Prisma.quiz_attemptsCreateWithoutQuizzesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuizzesInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUncheckedCreateNestedManyWithoutQuizzesInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput> | Prisma.quiz_attemptsCreateWithoutQuizzesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuizzesInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUpdateManyWithoutQuizzesNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput> | Prisma.quiz_attemptsCreateWithoutQuizzesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuizzesInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsUncheckedUpdateManyWithoutQuizzesNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput> | Prisma.quiz_attemptsCreateWithoutQuizzesInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuizzesInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuizzesInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsCreateNestedManyWithoutQuiz_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput> | Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUncheckedCreateNestedManyWithoutQuiz_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput> | Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInputEnvelope;
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
};
export type quiz_attemptsUpdateManyWithoutQuiz_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput> | Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuiz_attempt_setsInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuiz_attempt_setsInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuiz_attempt_setsInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsUncheckedUpdateManyWithoutQuiz_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput> | Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput[] | Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput[];
    connectOrCreate?: Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput[];
    upsert?: Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpsertWithWhereUniqueWithoutQuiz_attempt_setsInput[];
    createMany?: Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInputEnvelope;
    set?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    disconnect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    delete?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    connect?: Prisma.quiz_attemptsWhereUniqueInput | Prisma.quiz_attemptsWhereUniqueInput[];
    update?: Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpdateWithWhereUniqueWithoutQuiz_attempt_setsInput[];
    updateMany?: Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuiz_attempt_setsInput | Prisma.quiz_attemptsUpdateManyWithWhereWithoutQuiz_attempt_setsInput[];
    deleteMany?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
};
export type quiz_attemptsCreateWithoutUsersInput = {
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    quizzes?: Prisma.quizzesCreateNestedOneWithoutQuiz_attemptsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateWithoutUsersInput = {
    attempt_id?: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsCreateOrConnectWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput>;
};
export type quiz_attemptsCreateManyUsersInputEnvelope = {
    data: Prisma.quiz_attemptsCreateManyUsersInput | Prisma.quiz_attemptsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutUsersInput, Prisma.quiz_attemptsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutUsersInput, Prisma.quiz_attemptsUncheckedCreateWithoutUsersInput>;
};
export type quiz_attemptsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutUsersInput, Prisma.quiz_attemptsUncheckedUpdateWithoutUsersInput>;
};
export type quiz_attemptsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.quiz_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyWithoutUsersInput>;
};
export type quiz_attemptsScalarWhereInput = {
    AND?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
    OR?: Prisma.quiz_attemptsScalarWhereInput[];
    NOT?: Prisma.quiz_attemptsScalarWhereInput | Prisma.quiz_attemptsScalarWhereInput[];
    attempt_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    user_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    quiz_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    attempt_set_id?: Prisma.IntFilter<"quiz_attempts"> | number;
    is_correct?: Prisma.BoolNullableFilter<"quiz_attempts"> | boolean | null;
    user_answer?: Prisma.JsonNullableFilter<"quiz_attempts">;
    score_percent?: Prisma.DecimalNullableFilter<"quiz_attempts"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_attempts"> | Date | string | null;
};
export type quiz_attemptsCreateWithoutQuizzesInput = {
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_attemptsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateWithoutQuizzesInput = {
    attempt_id?: number;
    user_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsCreateOrConnectWithoutQuizzesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput>;
};
export type quiz_attemptsCreateManyQuizzesInputEnvelope = {
    data: Prisma.quiz_attemptsCreateManyQuizzesInput | Prisma.quiz_attemptsCreateManyQuizzesInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpsertWithWhereUniqueWithoutQuizzesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedUpdateWithoutQuizzesInput>;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuizzesInput>;
};
export type quiz_attemptsUpdateWithWhereUniqueWithoutQuizzesInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutQuizzesInput, Prisma.quiz_attemptsUncheckedUpdateWithoutQuizzesInput>;
};
export type quiz_attemptsUpdateManyWithWhereWithoutQuizzesInput = {
    where: Prisma.quiz_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyWithoutQuizzesInput>;
};
export type quiz_attemptsCreateWithoutQuiz_attempt_setsInput = {
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_attemptsInput;
    quizzes?: Prisma.quizzesCreateNestedOneWithoutQuiz_attemptsInput;
};
export type quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput = {
    attempt_id?: number;
    user_id: number;
    quiz_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsCreateOrConnectWithoutQuiz_attempt_setsInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput>;
};
export type quiz_attemptsCreateManyQuiz_attempt_setsInputEnvelope = {
    data: Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInput | Prisma.quiz_attemptsCreateManyQuiz_attempt_setsInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsUpsertWithWhereUniqueWithoutQuiz_attempt_setsInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedUpdateWithoutQuiz_attempt_setsInput>;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedCreateWithoutQuiz_attempt_setsInput>;
};
export type quiz_attemptsUpdateWithWhereUniqueWithoutQuiz_attempt_setsInput = {
    where: Prisma.quiz_attemptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateWithoutQuiz_attempt_setsInput, Prisma.quiz_attemptsUncheckedUpdateWithoutQuiz_attempt_setsInput>;
};
export type quiz_attemptsUpdateManyWithWhereWithoutQuiz_attempt_setsInput = {
    where: Prisma.quiz_attemptsScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyWithoutQuiz_attempt_setsInput>;
};
export type quiz_attemptsCreateManyUsersInput = {
    attempt_id?: number;
    quiz_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsUpdateWithoutUsersInput = {
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quizzes?: Prisma.quizzesUpdateOneWithoutQuiz_attemptsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateOneWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateWithoutUsersInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyWithoutUsersInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsCreateManyQuizzesInput = {
    attempt_id?: number;
    user_id: number;
    attempt_set_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsUpdateWithoutQuizzesInput = {
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_attemptsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateOneWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateWithoutQuizzesInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyWithoutQuizzesInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsCreateManyQuiz_attempt_setsInput = {
    attempt_id?: number;
    user_id: number;
    quiz_id: number;
    is_correct?: boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Date | string | null;
};
export type quiz_attemptsUpdateWithoutQuiz_attempt_setsInput = {
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_attemptsNestedInput;
    quizzes?: Prisma.quizzesUpdateOneWithoutQuiz_attemptsNestedInput;
};
export type quiz_attemptsUncheckedUpdateWithoutQuiz_attempt_setsInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsUncheckedUpdateManyWithoutQuiz_attempt_setsInput = {
    attempt_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    score_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_attemptsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    quiz_id?: boolean;
    attempt_set_id?: boolean;
    is_correct?: boolean;
    user_answer?: boolean;
    score_percent?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    quiz_id?: boolean;
    attempt_set_id?: boolean;
    is_correct?: boolean;
    user_answer?: boolean;
    score_percent?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    attempt_id?: boolean;
    user_id?: boolean;
    quiz_id?: boolean;
    attempt_set_id?: boolean;
    is_correct?: boolean;
    user_answer?: boolean;
    score_percent?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsSelectScalar = {
    attempt_id?: boolean;
    user_id?: boolean;
    quiz_id?: boolean;
    attempt_set_id?: boolean;
    is_correct?: boolean;
    user_answer?: boolean;
    score_percent?: boolean;
    created_at?: boolean;
};
export type quiz_attemptsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"attempt_id" | "user_id" | "quiz_id" | "attempt_set_id" | "is_correct" | "user_answer" | "score_percent" | "created_at", ExtArgs["result"]["quiz_attempts"]>;
export type quiz_attemptsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
};
export type quiz_attemptsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
};
export type quiz_attemptsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_attempts$usersArgs<ExtArgs>;
    quizzes?: boolean | Prisma.quiz_attempts$quizzesArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>;
};
export type $quiz_attemptsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_attempts";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        quizzes: Prisma.$quizzesPayload<ExtArgs> | null;
        quiz_attempt_sets: Prisma.$quiz_attempt_setsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        attempt_id: number;
        user_id: number;
        quiz_id: number;
        attempt_set_id: number;
        is_correct: boolean | null;
        user_answer: runtime.JsonValue | null;
        score_percent: runtime.Decimal | null;
        created_at: Date | null;
    }, ExtArgs["result"]["quiz_attempts"]>;
    composites: {};
};
export type quiz_attemptsGetPayload<S extends boolean | null | undefined | quiz_attemptsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload, S>;
export type quiz_attemptsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_attemptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_attemptsCountAggregateInputType | true;
};
export interface quiz_attemptsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_attempts'];
        meta: {
            name: 'quiz_attempts';
        };
    };
    findUnique<T extends quiz_attemptsFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_attemptsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_attemptsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_attemptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_attemptsFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_attemptsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_attemptsFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_attemptsCreateArgs>(args: Prisma.SelectSubset<T, quiz_attemptsCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_attemptsCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_attemptsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_attemptsDeleteArgs>(args: Prisma.SelectSubset<T, quiz_attemptsDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_attemptsUpdateArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_attemptsDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_attemptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_attemptsUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_attemptsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_attemptsUpsertArgs>(args: Prisma.SelectSubset<T, quiz_attemptsUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_attemptsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_attemptsCountArgs>(args?: Prisma.Subset<T, quiz_attemptsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_attemptsCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_attemptsAggregateArgs>(args: Prisma.Subset<T, Quiz_attemptsAggregateArgs>): Prisma.PrismaPromise<GetQuiz_attemptsAggregateType<T>>;
    groupBy<T extends quiz_attemptsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_attemptsGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_attemptsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_attemptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_attemptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_attemptsFieldRefs;
}
export interface Prisma__quiz_attemptsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.quiz_attempts$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_attempts$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quizzes<T extends Prisma.quiz_attempts$quizzesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_attempts$quizzesArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quiz_attempt_sets<T extends Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_attempts$quiz_attempt_setsArgs<ExtArgs>>): Prisma.Prisma__quiz_attempt_setsClient<runtime.Types.Result.GetResult<Prisma.$quiz_attempt_setsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_attemptsFieldRefs {
    readonly attempt_id: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly user_id: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly quiz_id: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly attempt_set_id: Prisma.FieldRef<"quiz_attempts", 'Int'>;
    readonly is_correct: Prisma.FieldRef<"quiz_attempts", 'Boolean'>;
    readonly user_answer: Prisma.FieldRef<"quiz_attempts", 'Json'>;
    readonly score_percent: Prisma.FieldRef<"quiz_attempts", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"quiz_attempts", 'DateTime'>;
}
export type quiz_attemptsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quiz_attemptsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_attemptsCreateInput, Prisma.quiz_attemptsUncheckedCreateInput>;
};
export type quiz_attemptsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_attemptsCreateManyInput | Prisma.quiz_attemptsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_attemptsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    data: Prisma.quiz_attemptsCreateManyInput | Prisma.quiz_attemptsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_attemptsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_attemptsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateInput, Prisma.quiz_attemptsUncheckedUpdateInput>;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyInput>;
    where?: Prisma.quiz_attemptsWhereInput;
    limit?: number;
};
export type quiz_attemptsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_attemptsUpdateManyMutationInput, Prisma.quiz_attemptsUncheckedUpdateManyInput>;
    where?: Prisma.quiz_attemptsWhereInput;
    limit?: number;
    include?: Prisma.quiz_attemptsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_attemptsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_attemptsCreateInput, Prisma.quiz_attemptsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_attemptsUpdateInput, Prisma.quiz_attemptsUncheckedUpdateInput>;
};
export type quiz_attemptsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where: Prisma.quiz_attemptsWhereUniqueInput;
};
export type quiz_attemptsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
    limit?: number;
};
export type quiz_attempts$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type quiz_attempts$quizzesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where?: Prisma.quizzesWhereInput;
};
export type quiz_attempts$quiz_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attempt_setsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attempt_setsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attempt_setsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attempt_setsWhereInput;
};
export type quiz_attemptsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
};
export {};
