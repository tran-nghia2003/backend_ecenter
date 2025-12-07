import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type listening_answersModel = runtime.Types.Result.DefaultSelection<Prisma.$listening_answersPayload>;
export type AggregateListening_answers = {
    _count: Listening_answersCountAggregateOutputType | null;
    _avg: Listening_answersAvgAggregateOutputType | null;
    _sum: Listening_answersSumAggregateOutputType | null;
    _min: Listening_answersMinAggregateOutputType | null;
    _max: Listening_answersMaxAggregateOutputType | null;
};
export type Listening_answersAvgAggregateOutputType = {
    answer_id: number | null;
    user_id: number | null;
    question_id: number | null;
    attempt_set_id: number | null;
};
export type Listening_answersSumAggregateOutputType = {
    answer_id: number | null;
    user_id: number | null;
    question_id: number | null;
    attempt_set_id: number | null;
};
export type Listening_answersMinAggregateOutputType = {
    answer_id: number | null;
    user_id: number | null;
    question_id: number | null;
    attempt_set_id: number | null;
    is_correct: boolean | null;
    created_at: Date | null;
};
export type Listening_answersMaxAggregateOutputType = {
    answer_id: number | null;
    user_id: number | null;
    question_id: number | null;
    attempt_set_id: number | null;
    is_correct: boolean | null;
    created_at: Date | null;
};
export type Listening_answersCountAggregateOutputType = {
    answer_id: number;
    user_id: number;
    question_id: number;
    attempt_set_id: number;
    user_answer: number;
    is_correct: number;
    created_at: number;
    _all: number;
};
export type Listening_answersAvgAggregateInputType = {
    answer_id?: true;
    user_id?: true;
    question_id?: true;
    attempt_set_id?: true;
};
export type Listening_answersSumAggregateInputType = {
    answer_id?: true;
    user_id?: true;
    question_id?: true;
    attempt_set_id?: true;
};
export type Listening_answersMinAggregateInputType = {
    answer_id?: true;
    user_id?: true;
    question_id?: true;
    attempt_set_id?: true;
    is_correct?: true;
    created_at?: true;
};
export type Listening_answersMaxAggregateInputType = {
    answer_id?: true;
    user_id?: true;
    question_id?: true;
    attempt_set_id?: true;
    is_correct?: true;
    created_at?: true;
};
export type Listening_answersCountAggregateInputType = {
    answer_id?: true;
    user_id?: true;
    question_id?: true;
    attempt_set_id?: true;
    user_answer?: true;
    is_correct?: true;
    created_at?: true;
    _all?: true;
};
export type Listening_answersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_answersWhereInput;
    orderBy?: Prisma.listening_answersOrderByWithRelationInput | Prisma.listening_answersOrderByWithRelationInput[];
    cursor?: Prisma.listening_answersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Listening_answersCountAggregateInputType;
    _avg?: Listening_answersAvgAggregateInputType;
    _sum?: Listening_answersSumAggregateInputType;
    _min?: Listening_answersMinAggregateInputType;
    _max?: Listening_answersMaxAggregateInputType;
};
export type GetListening_answersAggregateType<T extends Listening_answersAggregateArgs> = {
    [P in keyof T & keyof AggregateListening_answers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListening_answers[P]> : Prisma.GetScalarType<T[P], AggregateListening_answers[P]>;
};
export type listening_answersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_answersWhereInput;
    orderBy?: Prisma.listening_answersOrderByWithAggregationInput | Prisma.listening_answersOrderByWithAggregationInput[];
    by: Prisma.Listening_answersScalarFieldEnum[] | Prisma.Listening_answersScalarFieldEnum;
    having?: Prisma.listening_answersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Listening_answersCountAggregateInputType | true;
    _avg?: Listening_answersAvgAggregateInputType;
    _sum?: Listening_answersSumAggregateInputType;
    _min?: Listening_answersMinAggregateInputType;
    _max?: Listening_answersMaxAggregateInputType;
};
export type Listening_answersGroupByOutputType = {
    answer_id: number;
    user_id: number;
    question_id: number;
    attempt_set_id: number;
    user_answer: runtime.JsonValue | null;
    is_correct: boolean | null;
    created_at: Date | null;
    _count: Listening_answersCountAggregateOutputType | null;
    _avg: Listening_answersAvgAggregateOutputType | null;
    _sum: Listening_answersSumAggregateOutputType | null;
    _min: Listening_answersMinAggregateOutputType | null;
    _max: Listening_answersMaxAggregateOutputType | null;
};
type GetListening_answersGroupByPayload<T extends listening_answersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Listening_answersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Listening_answersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Listening_answersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Listening_answersGroupByOutputType[P]>;
}>>;
export type listening_answersWhereInput = {
    AND?: Prisma.listening_answersWhereInput | Prisma.listening_answersWhereInput[];
    OR?: Prisma.listening_answersWhereInput[];
    NOT?: Prisma.listening_answersWhereInput | Prisma.listening_answersWhereInput[];
    answer_id?: Prisma.IntFilter<"listening_answers"> | number;
    user_id?: Prisma.IntFilter<"listening_answers"> | number;
    question_id?: Prisma.IntFilter<"listening_answers"> | number;
    attempt_set_id?: Prisma.IntFilter<"listening_answers"> | number;
    user_answer?: Prisma.JsonNullableFilter<"listening_answers">;
    is_correct?: Prisma.BoolNullableFilter<"listening_answers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_answers"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    listening_questions?: Prisma.XOR<Prisma.Listening_questionsNullableScalarRelationFilter, Prisma.listening_questionsWhereInput> | null;
    listening_attempt_sets?: Prisma.XOR<Prisma.Listening_attempt_setsNullableScalarRelationFilter, Prisma.listening_attempt_setsWhereInput> | null;
};
export type listening_answersOrderByWithRelationInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    user_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    listening_questions?: Prisma.listening_questionsOrderByWithRelationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsOrderByWithRelationInput;
};
export type listening_answersWhereUniqueInput = Prisma.AtLeast<{
    answer_id?: number;
    AND?: Prisma.listening_answersWhereInput | Prisma.listening_answersWhereInput[];
    OR?: Prisma.listening_answersWhereInput[];
    NOT?: Prisma.listening_answersWhereInput | Prisma.listening_answersWhereInput[];
    user_id?: Prisma.IntFilter<"listening_answers"> | number;
    question_id?: Prisma.IntFilter<"listening_answers"> | number;
    attempt_set_id?: Prisma.IntFilter<"listening_answers"> | number;
    user_answer?: Prisma.JsonNullableFilter<"listening_answers">;
    is_correct?: Prisma.BoolNullableFilter<"listening_answers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_answers"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    listening_questions?: Prisma.XOR<Prisma.Listening_questionsNullableScalarRelationFilter, Prisma.listening_questionsWhereInput> | null;
    listening_attempt_sets?: Prisma.XOR<Prisma.Listening_attempt_setsNullableScalarRelationFilter, Prisma.listening_attempt_setsWhereInput> | null;
}, "answer_id">;
export type listening_answersOrderByWithAggregationInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    user_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.listening_answersCountOrderByAggregateInput;
    _avg?: Prisma.listening_answersAvgOrderByAggregateInput;
    _max?: Prisma.listening_answersMaxOrderByAggregateInput;
    _min?: Prisma.listening_answersMinOrderByAggregateInput;
    _sum?: Prisma.listening_answersSumOrderByAggregateInput;
};
export type listening_answersScalarWhereWithAggregatesInput = {
    AND?: Prisma.listening_answersScalarWhereWithAggregatesInput | Prisma.listening_answersScalarWhereWithAggregatesInput[];
    OR?: Prisma.listening_answersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listening_answersScalarWhereWithAggregatesInput | Prisma.listening_answersScalarWhereWithAggregatesInput[];
    answer_id?: Prisma.IntWithAggregatesFilter<"listening_answers"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"listening_answers"> | number;
    question_id?: Prisma.IntWithAggregatesFilter<"listening_answers"> | number;
    attempt_set_id?: Prisma.IntWithAggregatesFilter<"listening_answers"> | number;
    user_answer?: Prisma.JsonNullableWithAggregatesFilter<"listening_answers">;
    is_correct?: Prisma.BoolNullableWithAggregatesFilter<"listening_answers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"listening_answers"> | Date | string | null;
};
export type listening_answersCreateInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_answersInput;
    listening_questions?: Prisma.listening_questionsCreateNestedOneWithoutListening_answersInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedOneWithoutListening_answersInput;
};
export type listening_answersUncheckedCreateInput = {
    answer_id?: number;
    user_id: number;
    question_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersUpdateInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_answersNestedInput;
    listening_questions?: Prisma.listening_questionsUpdateOneWithoutListening_answersNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateOneWithoutListening_answersNestedInput;
};
export type listening_answersUncheckedUpdateInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersCreateManyInput = {
    answer_id?: number;
    user_id: number;
    question_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersUpdateManyMutationInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersUncheckedUpdateManyInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Listening_answersListRelationFilter = {
    every?: Prisma.listening_answersWhereInput;
    some?: Prisma.listening_answersWhereInput;
    none?: Prisma.listening_answersWhereInput;
};
export type listening_answersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type listening_answersCountOrderByAggregateInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    user_answer?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_answersAvgOrderByAggregateInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
};
export type listening_answersMaxOrderByAggregateInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_answersMinOrderByAggregateInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_answersSumOrderByAggregateInput = {
    answer_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    question_id?: Prisma.SortOrder;
    attempt_set_id?: Prisma.SortOrder;
};
export type listening_answersCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput> | Prisma.listening_answersCreateWithoutUsersInput[] | Prisma.listening_answersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutUsersInput | Prisma.listening_answersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.listening_answersCreateManyUsersInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput> | Prisma.listening_answersCreateWithoutUsersInput[] | Prisma.listening_answersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutUsersInput | Prisma.listening_answersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.listening_answersCreateManyUsersInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput> | Prisma.listening_answersCreateWithoutUsersInput[] | Prisma.listening_answersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutUsersInput | Prisma.listening_answersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutUsersInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.listening_answersCreateManyUsersInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutUsersInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutUsersInput | Prisma.listening_answersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput> | Prisma.listening_answersCreateWithoutUsersInput[] | Prisma.listening_answersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutUsersInput | Prisma.listening_answersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutUsersInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.listening_answersCreateManyUsersInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutUsersInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutUsersInput | Prisma.listening_answersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersCreateNestedManyWithoutListening_questionsInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput> | Prisma.listening_answersCreateWithoutListening_questionsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput | Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_questionsInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUncheckedCreateNestedManyWithoutListening_questionsInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput> | Prisma.listening_answersCreateWithoutListening_questionsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput | Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_questionsInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUpdateManyWithoutListening_questionsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput> | Prisma.listening_answersCreateWithoutListening_questionsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput | Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_questionsInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_questionsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_questionsInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_questionsInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_questionsInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutListening_questionsInput | Prisma.listening_answersUpdateManyWithWhereWithoutListening_questionsInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersUncheckedUpdateManyWithoutListening_questionsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput> | Prisma.listening_answersCreateWithoutListening_questionsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput | Prisma.listening_answersCreateOrConnectWithoutListening_questionsInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_questionsInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_questionsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_questionsInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_questionsInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_questionsInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutListening_questionsInput | Prisma.listening_answersUpdateManyWithWhereWithoutListening_questionsInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersCreateNestedManyWithoutListening_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput> | Prisma.listening_answersCreateWithoutListening_attempt_setsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput | Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_attempt_setsInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUncheckedCreateNestedManyWithoutListening_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput> | Prisma.listening_answersCreateWithoutListening_attempt_setsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput | Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_attempt_setsInputEnvelope;
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
};
export type listening_answersUpdateManyWithoutListening_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput> | Prisma.listening_answersCreateWithoutListening_attempt_setsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput | Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_attempt_setsInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_attempt_setsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_attempt_setsInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_attempt_setsInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_attempt_setsInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutListening_attempt_setsInput | Prisma.listening_answersUpdateManyWithWhereWithoutListening_attempt_setsInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersUncheckedUpdateManyWithoutListening_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput> | Prisma.listening_answersCreateWithoutListening_attempt_setsInput[] | Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput[];
    connectOrCreate?: Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput | Prisma.listening_answersCreateOrConnectWithoutListening_attempt_setsInput[];
    upsert?: Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_attempt_setsInput | Prisma.listening_answersUpsertWithWhereUniqueWithoutListening_attempt_setsInput[];
    createMany?: Prisma.listening_answersCreateManyListening_attempt_setsInputEnvelope;
    set?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    disconnect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    delete?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    connect?: Prisma.listening_answersWhereUniqueInput | Prisma.listening_answersWhereUniqueInput[];
    update?: Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_attempt_setsInput | Prisma.listening_answersUpdateWithWhereUniqueWithoutListening_attempt_setsInput[];
    updateMany?: Prisma.listening_answersUpdateManyWithWhereWithoutListening_attempt_setsInput | Prisma.listening_answersUpdateManyWithWhereWithoutListening_attempt_setsInput[];
    deleteMany?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
};
export type listening_answersCreateWithoutUsersInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
    listening_questions?: Prisma.listening_questionsCreateNestedOneWithoutListening_answersInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedOneWithoutListening_answersInput;
};
export type listening_answersUncheckedCreateWithoutUsersInput = {
    answer_id?: number;
    question_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersCreateOrConnectWithoutUsersInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput>;
};
export type listening_answersCreateManyUsersInputEnvelope = {
    data: Prisma.listening_answersCreateManyUsersInput | Prisma.listening_answersCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type listening_answersUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_answersUpdateWithoutUsersInput, Prisma.listening_answersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutUsersInput, Prisma.listening_answersUncheckedCreateWithoutUsersInput>;
};
export type listening_answersUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateWithoutUsersInput, Prisma.listening_answersUncheckedUpdateWithoutUsersInput>;
};
export type listening_answersUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.listening_answersScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateManyMutationInput, Prisma.listening_answersUncheckedUpdateManyWithoutUsersInput>;
};
export type listening_answersScalarWhereInput = {
    AND?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
    OR?: Prisma.listening_answersScalarWhereInput[];
    NOT?: Prisma.listening_answersScalarWhereInput | Prisma.listening_answersScalarWhereInput[];
    answer_id?: Prisma.IntFilter<"listening_answers"> | number;
    user_id?: Prisma.IntFilter<"listening_answers"> | number;
    question_id?: Prisma.IntFilter<"listening_answers"> | number;
    attempt_set_id?: Prisma.IntFilter<"listening_answers"> | number;
    user_answer?: Prisma.JsonNullableFilter<"listening_answers">;
    is_correct?: Prisma.BoolNullableFilter<"listening_answers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_answers"> | Date | string | null;
};
export type listening_answersCreateWithoutListening_questionsInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_answersInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedOneWithoutListening_answersInput;
};
export type listening_answersUncheckedCreateWithoutListening_questionsInput = {
    answer_id?: number;
    user_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersCreateOrConnectWithoutListening_questionsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput>;
};
export type listening_answersCreateManyListening_questionsInputEnvelope = {
    data: Prisma.listening_answersCreateManyListening_questionsInput | Prisma.listening_answersCreateManyListening_questionsInput[];
    skipDuplicates?: boolean;
};
export type listening_answersUpsertWithWhereUniqueWithoutListening_questionsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_answersUpdateWithoutListening_questionsInput, Prisma.listening_answersUncheckedUpdateWithoutListening_questionsInput>;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_questionsInput, Prisma.listening_answersUncheckedCreateWithoutListening_questionsInput>;
};
export type listening_answersUpdateWithWhereUniqueWithoutListening_questionsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateWithoutListening_questionsInput, Prisma.listening_answersUncheckedUpdateWithoutListening_questionsInput>;
};
export type listening_answersUpdateManyWithWhereWithoutListening_questionsInput = {
    where: Prisma.listening_answersScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateManyMutationInput, Prisma.listening_answersUncheckedUpdateManyWithoutListening_questionsInput>;
};
export type listening_answersCreateWithoutListening_attempt_setsInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_answersInput;
    listening_questions?: Prisma.listening_questionsCreateNestedOneWithoutListening_answersInput;
};
export type listening_answersUncheckedCreateWithoutListening_attempt_setsInput = {
    answer_id?: number;
    user_id: number;
    question_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersCreateOrConnectWithoutListening_attempt_setsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput>;
};
export type listening_answersCreateManyListening_attempt_setsInputEnvelope = {
    data: Prisma.listening_answersCreateManyListening_attempt_setsInput | Prisma.listening_answersCreateManyListening_attempt_setsInput[];
    skipDuplicates?: boolean;
};
export type listening_answersUpsertWithWhereUniqueWithoutListening_attempt_setsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_answersUpdateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedUpdateWithoutListening_attempt_setsInput>;
    create: Prisma.XOR<Prisma.listening_answersCreateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedCreateWithoutListening_attempt_setsInput>;
};
export type listening_answersUpdateWithWhereUniqueWithoutListening_attempt_setsInput = {
    where: Prisma.listening_answersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateWithoutListening_attempt_setsInput, Prisma.listening_answersUncheckedUpdateWithoutListening_attempt_setsInput>;
};
export type listening_answersUpdateManyWithWhereWithoutListening_attempt_setsInput = {
    where: Prisma.listening_answersScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_answersUpdateManyMutationInput, Prisma.listening_answersUncheckedUpdateManyWithoutListening_attempt_setsInput>;
};
export type listening_answersCreateManyUsersInput = {
    answer_id?: number;
    question_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersUpdateWithoutUsersInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    listening_questions?: Prisma.listening_questionsUpdateOneWithoutListening_answersNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateOneWithoutListening_answersNestedInput;
};
export type listening_answersUncheckedUpdateWithoutUsersInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersUncheckedUpdateManyWithoutUsersInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersCreateManyListening_questionsInput = {
    answer_id?: number;
    user_id: number;
    attempt_set_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersUpdateWithoutListening_questionsInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_answersNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateOneWithoutListening_answersNestedInput;
};
export type listening_answersUncheckedUpdateWithoutListening_questionsInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersUncheckedUpdateManyWithoutListening_questionsInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_set_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersCreateManyListening_attempt_setsInput = {
    answer_id?: number;
    user_id: number;
    question_id: number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: boolean | null;
    created_at?: Date | string | null;
};
export type listening_answersUpdateWithoutListening_attempt_setsInput = {
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_answersNestedInput;
    listening_questions?: Prisma.listening_questionsUpdateOneWithoutListening_answersNestedInput;
};
export type listening_answersUncheckedUpdateWithoutListening_attempt_setsInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersUncheckedUpdateManyWithoutListening_attempt_setsInput = {
    answer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_answersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    answer_id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    attempt_set_id?: boolean;
    user_answer?: boolean;
    is_correct?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["listening_answers"]>;
export type listening_answersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    answer_id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    attempt_set_id?: boolean;
    user_answer?: boolean;
    is_correct?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["listening_answers"]>;
export type listening_answersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    answer_id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    attempt_set_id?: boolean;
    user_answer?: boolean;
    is_correct?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
}, ExtArgs["result"]["listening_answers"]>;
export type listening_answersSelectScalar = {
    answer_id?: boolean;
    user_id?: boolean;
    question_id?: boolean;
    attempt_set_id?: boolean;
    user_answer?: boolean;
    is_correct?: boolean;
    created_at?: boolean;
};
export type listening_answersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"answer_id" | "user_id" | "question_id" | "attempt_set_id" | "user_answer" | "is_correct" | "created_at", ExtArgs["result"]["listening_answers"]>;
export type listening_answersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
};
export type listening_answersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
};
export type listening_answersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_answers$usersArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_answers$listening_questionsArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>;
};
export type $listening_answersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listening_answers";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        listening_questions: Prisma.$listening_questionsPayload<ExtArgs> | null;
        listening_attempt_sets: Prisma.$listening_attempt_setsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        answer_id: number;
        user_id: number;
        question_id: number;
        attempt_set_id: number;
        user_answer: runtime.JsonValue | null;
        is_correct: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["listening_answers"]>;
    composites: {};
};
export type listening_answersGetPayload<S extends boolean | null | undefined | listening_answersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listening_answersPayload, S>;
export type listening_answersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listening_answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Listening_answersCountAggregateInputType | true;
};
export interface listening_answersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listening_answers'];
        meta: {
            name: 'listening_answers';
        };
    };
    findUnique<T extends listening_answersFindUniqueArgs>(args: Prisma.SelectSubset<T, listening_answersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends listening_answersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listening_answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends listening_answersFindFirstArgs>(args?: Prisma.SelectSubset<T, listening_answersFindFirstArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends listening_answersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listening_answersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends listening_answersFindManyArgs>(args?: Prisma.SelectSubset<T, listening_answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends listening_answersCreateArgs>(args: Prisma.SelectSubset<T, listening_answersCreateArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends listening_answersCreateManyArgs>(args?: Prisma.SelectSubset<T, listening_answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends listening_answersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listening_answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends listening_answersDeleteArgs>(args: Prisma.SelectSubset<T, listening_answersDeleteArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends listening_answersUpdateArgs>(args: Prisma.SelectSubset<T, listening_answersUpdateArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends listening_answersDeleteManyArgs>(args?: Prisma.SelectSubset<T, listening_answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends listening_answersUpdateManyArgs>(args: Prisma.SelectSubset<T, listening_answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends listening_answersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listening_answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends listening_answersUpsertArgs>(args: Prisma.SelectSubset<T, listening_answersUpsertArgs<ExtArgs>>): Prisma.Prisma__listening_answersClient<runtime.Types.Result.GetResult<Prisma.$listening_answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends listening_answersCountArgs>(args?: Prisma.Subset<T, listening_answersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Listening_answersCountAggregateOutputType> : number>;
    aggregate<T extends Listening_answersAggregateArgs>(args: Prisma.Subset<T, Listening_answersAggregateArgs>): Prisma.PrismaPromise<GetListening_answersAggregateType<T>>;
    groupBy<T extends listening_answersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listening_answersGroupByArgs['orderBy'];
    } : {
        orderBy?: listening_answersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listening_answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListening_answersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: listening_answersFieldRefs;
}
export interface Prisma__listening_answersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.listening_answers$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_answers$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listening_questions<T extends Prisma.listening_answers$listening_questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_answers$listening_questionsArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listening_attempt_sets<T extends Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_answers$listening_attempt_setsArgs<ExtArgs>>): Prisma.Prisma__listening_attempt_setsClient<runtime.Types.Result.GetResult<Prisma.$listening_attempt_setsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface listening_answersFieldRefs {
    readonly answer_id: Prisma.FieldRef<"listening_answers", 'Int'>;
    readonly user_id: Prisma.FieldRef<"listening_answers", 'Int'>;
    readonly question_id: Prisma.FieldRef<"listening_answers", 'Int'>;
    readonly attempt_set_id: Prisma.FieldRef<"listening_answers", 'Int'>;
    readonly user_answer: Prisma.FieldRef<"listening_answers", 'Json'>;
    readonly is_correct: Prisma.FieldRef<"listening_answers", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"listening_answers", 'DateTime'>;
}
export type listening_answersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where: Prisma.listening_answersWhereUniqueInput;
};
export type listening_answersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where: Prisma.listening_answersWhereUniqueInput;
};
export type listening_answersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where?: Prisma.listening_answersWhereInput;
    orderBy?: Prisma.listening_answersOrderByWithRelationInput | Prisma.listening_answersOrderByWithRelationInput[];
    cursor?: Prisma.listening_answersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_answersScalarFieldEnum | Prisma.Listening_answersScalarFieldEnum[];
};
export type listening_answersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where?: Prisma.listening_answersWhereInput;
    orderBy?: Prisma.listening_answersOrderByWithRelationInput | Prisma.listening_answersOrderByWithRelationInput[];
    cursor?: Prisma.listening_answersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_answersScalarFieldEnum | Prisma.Listening_answersScalarFieldEnum[];
};
export type listening_answersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where?: Prisma.listening_answersWhereInput;
    orderBy?: Prisma.listening_answersOrderByWithRelationInput | Prisma.listening_answersOrderByWithRelationInput[];
    cursor?: Prisma.listening_answersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_answersScalarFieldEnum | Prisma.Listening_answersScalarFieldEnum[];
};
export type listening_answersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_answersCreateInput, Prisma.listening_answersUncheckedCreateInput>;
};
export type listening_answersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.listening_answersCreateManyInput | Prisma.listening_answersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type listening_answersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    data: Prisma.listening_answersCreateManyInput | Prisma.listening_answersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.listening_answersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type listening_answersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_answersUpdateInput, Prisma.listening_answersUncheckedUpdateInput>;
    where: Prisma.listening_answersWhereUniqueInput;
};
export type listening_answersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.listening_answersUpdateManyMutationInput, Prisma.listening_answersUncheckedUpdateManyInput>;
    where?: Prisma.listening_answersWhereInput;
    limit?: number;
};
export type listening_answersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_answersUpdateManyMutationInput, Prisma.listening_answersUncheckedUpdateManyInput>;
    where?: Prisma.listening_answersWhereInput;
    limit?: number;
    include?: Prisma.listening_answersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type listening_answersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where: Prisma.listening_answersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_answersCreateInput, Prisma.listening_answersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.listening_answersUpdateInput, Prisma.listening_answersUncheckedUpdateInput>;
};
export type listening_answersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
    where: Prisma.listening_answersWhereUniqueInput;
};
export type listening_answersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_answersWhereInput;
    limit?: number;
};
export type listening_answers$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type listening_answers$listening_questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where?: Prisma.listening_questionsWhereInput;
};
export type listening_answers$listening_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_attempt_setsSelect<ExtArgs> | null;
    omit?: Prisma.listening_attempt_setsOmit<ExtArgs> | null;
    include?: Prisma.listening_attempt_setsInclude<ExtArgs> | null;
    where?: Prisma.listening_attempt_setsWhereInput;
};
export type listening_answersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_answersSelect<ExtArgs> | null;
    omit?: Prisma.listening_answersOmit<ExtArgs> | null;
    include?: Prisma.listening_answersInclude<ExtArgs> | null;
};
export {};
