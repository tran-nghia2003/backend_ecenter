import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type listening_exercisesModel = runtime.Types.Result.DefaultSelection<Prisma.$listening_exercisesPayload>;
export type AggregateListening_exercises = {
    _count: Listening_exercisesCountAggregateOutputType | null;
    _avg: Listening_exercisesAvgAggregateOutputType | null;
    _sum: Listening_exercisesSumAggregateOutputType | null;
    _min: Listening_exercisesMinAggregateOutputType | null;
    _max: Listening_exercisesMaxAggregateOutputType | null;
};
export type Listening_exercisesAvgAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Listening_exercisesSumAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Listening_exercisesMinAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    title: string | null;
    audio_url: string | null;
    transcript: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Listening_exercisesMaxAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    title: string | null;
    audio_url: string | null;
    transcript: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Listening_exercisesCountAggregateOutputType = {
    exercise_id: number;
    lesson_id: number;
    title: number;
    audio_url: number;
    transcript: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type Listening_exercisesAvgAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Listening_exercisesSumAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Listening_exercisesMinAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    audio_url?: true;
    transcript?: true;
    created_by?: true;
    created_at?: true;
};
export type Listening_exercisesMaxAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    audio_url?: true;
    transcript?: true;
    created_by?: true;
    created_at?: true;
};
export type Listening_exercisesCountAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    audio_url?: true;
    transcript?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type Listening_exercisesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_exercisesWhereInput;
    orderBy?: Prisma.listening_exercisesOrderByWithRelationInput | Prisma.listening_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.listening_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Listening_exercisesCountAggregateInputType;
    _avg?: Listening_exercisesAvgAggregateInputType;
    _sum?: Listening_exercisesSumAggregateInputType;
    _min?: Listening_exercisesMinAggregateInputType;
    _max?: Listening_exercisesMaxAggregateInputType;
};
export type GetListening_exercisesAggregateType<T extends Listening_exercisesAggregateArgs> = {
    [P in keyof T & keyof AggregateListening_exercises]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListening_exercises[P]> : Prisma.GetScalarType<T[P], AggregateListening_exercises[P]>;
};
export type listening_exercisesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_exercisesWhereInput;
    orderBy?: Prisma.listening_exercisesOrderByWithAggregationInput | Prisma.listening_exercisesOrderByWithAggregationInput[];
    by: Prisma.Listening_exercisesScalarFieldEnum[] | Prisma.Listening_exercisesScalarFieldEnum;
    having?: Prisma.listening_exercisesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Listening_exercisesCountAggregateInputType | true;
    _avg?: Listening_exercisesAvgAggregateInputType;
    _sum?: Listening_exercisesSumAggregateInputType;
    _min?: Listening_exercisesMinAggregateInputType;
    _max?: Listening_exercisesMaxAggregateInputType;
};
export type Listening_exercisesGroupByOutputType = {
    exercise_id: number;
    lesson_id: number | null;
    title: string | null;
    audio_url: string;
    transcript: string | null;
    created_by: number | null;
    created_at: Date | null;
    _count: Listening_exercisesCountAggregateOutputType | null;
    _avg: Listening_exercisesAvgAggregateOutputType | null;
    _sum: Listening_exercisesSumAggregateOutputType | null;
    _min: Listening_exercisesMinAggregateOutputType | null;
    _max: Listening_exercisesMaxAggregateOutputType | null;
};
type GetListening_exercisesGroupByPayload<T extends listening_exercisesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Listening_exercisesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Listening_exercisesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Listening_exercisesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Listening_exercisesGroupByOutputType[P]>;
}>>;
export type listening_exercisesWhereInput = {
    AND?: Prisma.listening_exercisesWhereInput | Prisma.listening_exercisesWhereInput[];
    OR?: Prisma.listening_exercisesWhereInput[];
    NOT?: Prisma.listening_exercisesWhereInput | Prisma.listening_exercisesWhereInput[];
    exercise_id?: Prisma.IntFilter<"listening_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    audio_url?: Prisma.StringFilter<"listening_exercises"> | string;
    transcript?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_exercises"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    listening_questions?: Prisma.Listening_questionsListRelationFilter;
};
export type listening_exercisesOrderByWithRelationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    transcript?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    listening_questions?: Prisma.listening_questionsOrderByRelationAggregateInput;
};
export type listening_exercisesWhereUniqueInput = Prisma.AtLeast<{
    exercise_id?: number;
    AND?: Prisma.listening_exercisesWhereInput | Prisma.listening_exercisesWhereInput[];
    OR?: Prisma.listening_exercisesWhereInput[];
    NOT?: Prisma.listening_exercisesWhereInput | Prisma.listening_exercisesWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    audio_url?: Prisma.StringFilter<"listening_exercises"> | string;
    transcript?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_exercises"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    listening_questions?: Prisma.Listening_questionsListRelationFilter;
}, "exercise_id">;
export type listening_exercisesOrderByWithAggregationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    transcript?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.listening_exercisesCountOrderByAggregateInput;
    _avg?: Prisma.listening_exercisesAvgOrderByAggregateInput;
    _max?: Prisma.listening_exercisesMaxOrderByAggregateInput;
    _min?: Prisma.listening_exercisesMinOrderByAggregateInput;
    _sum?: Prisma.listening_exercisesSumOrderByAggregateInput;
};
export type listening_exercisesScalarWhereWithAggregatesInput = {
    AND?: Prisma.listening_exercisesScalarWhereWithAggregatesInput | Prisma.listening_exercisesScalarWhereWithAggregatesInput[];
    OR?: Prisma.listening_exercisesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listening_exercisesScalarWhereWithAggregatesInput | Prisma.listening_exercisesScalarWhereWithAggregatesInput[];
    exercise_id?: Prisma.IntWithAggregatesFilter<"listening_exercises"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"listening_exercises"> | number | null;
    title?: Prisma.StringNullableWithAggregatesFilter<"listening_exercises"> | string | null;
    audio_url?: Prisma.StringWithAggregatesFilter<"listening_exercises"> | string;
    transcript?: Prisma.StringNullableWithAggregatesFilter<"listening_exercises"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"listening_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"listening_exercises"> | Date | string | null;
};
export type listening_exercisesCreateInput = {
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_exercisesInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutListening_exercisesInput;
    listening_questions?: Prisma.listening_questionsCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesUncheckedCreateInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesUpdateInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_exercisesNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutListening_exercisesNestedInput;
    listening_questions?: Prisma.listening_questionsUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesCreateManyInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type listening_exercisesUpdateManyMutationInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_exercisesUncheckedUpdateManyInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Listening_exercisesListRelationFilter = {
    every?: Prisma.listening_exercisesWhereInput;
    some?: Prisma.listening_exercisesWhereInput;
    none?: Prisma.listening_exercisesWhereInput;
};
export type listening_exercisesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type listening_exercisesCountOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    transcript?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_exercisesAvgOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type listening_exercisesMaxOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    transcript?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_exercisesMinOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    transcript?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_exercisesSumOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type Listening_exercisesNullableScalarRelationFilter = {
    is?: Prisma.listening_exercisesWhereInput | null;
    isNot?: Prisma.listening_exercisesWhereInput | null;
};
export type listening_exercisesCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.listening_exercisesCreateWithoutLessonsInput[] | Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput | Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.listening_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
};
export type listening_exercisesUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.listening_exercisesCreateWithoutLessonsInput[] | Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput | Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.listening_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
};
export type listening_exercisesUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.listening_exercisesCreateWithoutLessonsInput[] | Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput | Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.listening_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.listening_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.listening_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    disconnect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    delete?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    update?: Prisma.listening_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.listening_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.listening_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.listening_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
};
export type listening_exercisesUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.listening_exercisesCreateWithoutLessonsInput[] | Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput | Prisma.listening_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.listening_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.listening_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.listening_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    disconnect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    delete?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    update?: Prisma.listening_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.listening_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.listening_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.listening_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
};
export type listening_exercisesCreateNestedOneWithoutListening_questionsInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedCreateWithoutListening_questionsInput>;
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutListening_questionsInput;
    connect?: Prisma.listening_exercisesWhereUniqueInput;
};
export type listening_exercisesUpdateOneWithoutListening_questionsNestedInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedCreateWithoutListening_questionsInput>;
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutListening_questionsInput;
    upsert?: Prisma.listening_exercisesUpsertWithoutListening_questionsInput;
    disconnect?: Prisma.listening_exercisesWhereInput | boolean;
    delete?: Prisma.listening_exercisesWhereInput | boolean;
    connect?: Prisma.listening_exercisesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listening_exercisesUpdateToOneWithWhereWithoutListening_questionsInput, Prisma.listening_exercisesUpdateWithoutListening_questionsInput>, Prisma.listening_exercisesUncheckedUpdateWithoutListening_questionsInput>;
};
export type listening_exercisesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput> | Prisma.listening_exercisesCreateWithoutUsersInput[] | Prisma.listening_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutUsersInput | Prisma.listening_exercisesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.listening_exercisesCreateManyUsersInputEnvelope;
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
};
export type listening_exercisesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput> | Prisma.listening_exercisesCreateWithoutUsersInput[] | Prisma.listening_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutUsersInput | Prisma.listening_exercisesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.listening_exercisesCreateManyUsersInputEnvelope;
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
};
export type listening_exercisesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput> | Prisma.listening_exercisesCreateWithoutUsersInput[] | Prisma.listening_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutUsersInput | Prisma.listening_exercisesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.listening_exercisesUpsertWithWhereUniqueWithoutUsersInput | Prisma.listening_exercisesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.listening_exercisesCreateManyUsersInputEnvelope;
    set?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    disconnect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    delete?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    update?: Prisma.listening_exercisesUpdateWithWhereUniqueWithoutUsersInput | Prisma.listening_exercisesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.listening_exercisesUpdateManyWithWhereWithoutUsersInput | Prisma.listening_exercisesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
};
export type listening_exercisesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput> | Prisma.listening_exercisesCreateWithoutUsersInput[] | Prisma.listening_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.listening_exercisesCreateOrConnectWithoutUsersInput | Prisma.listening_exercisesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.listening_exercisesUpsertWithWhereUniqueWithoutUsersInput | Prisma.listening_exercisesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.listening_exercisesCreateManyUsersInputEnvelope;
    set?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    disconnect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    delete?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    connect?: Prisma.listening_exercisesWhereUniqueInput | Prisma.listening_exercisesWhereUniqueInput[];
    update?: Prisma.listening_exercisesUpdateWithWhereUniqueWithoutUsersInput | Prisma.listening_exercisesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.listening_exercisesUpdateManyWithWhereWithoutUsersInput | Prisma.listening_exercisesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
};
export type listening_exercisesCreateWithoutLessonsInput = {
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_exercisesInput;
    listening_questions?: Prisma.listening_questionsCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesUncheckedCreateWithoutLessonsInput = {
    exercise_id?: number;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesCreateOrConnectWithoutLessonsInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type listening_exercisesCreateManyLessonsInputEnvelope = {
    data: Prisma.listening_exercisesCreateManyLessonsInput | Prisma.listening_exercisesCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type listening_exercisesUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutLessonsInput, Prisma.listening_exercisesUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutLessonsInput, Prisma.listening_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type listening_exercisesUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutLessonsInput, Prisma.listening_exercisesUncheckedUpdateWithoutLessonsInput>;
};
export type listening_exercisesUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.listening_exercisesScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateManyMutationInput, Prisma.listening_exercisesUncheckedUpdateManyWithoutLessonsInput>;
};
export type listening_exercisesScalarWhereInput = {
    AND?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
    OR?: Prisma.listening_exercisesScalarWhereInput[];
    NOT?: Prisma.listening_exercisesScalarWhereInput | Prisma.listening_exercisesScalarWhereInput[];
    exercise_id?: Prisma.IntFilter<"listening_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    audio_url?: Prisma.StringFilter<"listening_exercises"> | string;
    transcript?: Prisma.StringNullableFilter<"listening_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"listening_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_exercises"> | Date | string | null;
};
export type listening_exercisesCreateWithoutListening_questionsInput = {
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutListening_exercisesInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutListening_exercisesInput;
};
export type listening_exercisesUncheckedCreateWithoutListening_questionsInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type listening_exercisesCreateOrConnectWithoutListening_questionsInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedCreateWithoutListening_questionsInput>;
};
export type listening_exercisesUpsertWithoutListening_questionsInput = {
    update: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedUpdateWithoutListening_questionsInput>;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedCreateWithoutListening_questionsInput>;
    where?: Prisma.listening_exercisesWhereInput;
};
export type listening_exercisesUpdateToOneWithWhereWithoutListening_questionsInput = {
    where?: Prisma.listening_exercisesWhereInput;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutListening_questionsInput, Prisma.listening_exercisesUncheckedUpdateWithoutListening_questionsInput>;
};
export type listening_exercisesUpdateWithoutListening_questionsInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_exercisesNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateWithoutListening_questionsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_exercisesCreateWithoutUsersInput = {
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutListening_exercisesInput;
    listening_questions?: Prisma.listening_questionsCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesUncheckedCreateWithoutUsersInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedCreateNestedManyWithoutListening_exercisesInput;
};
export type listening_exercisesCreateOrConnectWithoutUsersInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput>;
};
export type listening_exercisesCreateManyUsersInputEnvelope = {
    data: Prisma.listening_exercisesCreateManyUsersInput | Prisma.listening_exercisesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type listening_exercisesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutUsersInput, Prisma.listening_exercisesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.listening_exercisesCreateWithoutUsersInput, Prisma.listening_exercisesUncheckedCreateWithoutUsersInput>;
};
export type listening_exercisesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.listening_exercisesWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateWithoutUsersInput, Prisma.listening_exercisesUncheckedUpdateWithoutUsersInput>;
};
export type listening_exercisesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.listening_exercisesScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateManyMutationInput, Prisma.listening_exercisesUncheckedUpdateManyWithoutUsersInput>;
};
export type listening_exercisesCreateManyLessonsInput = {
    exercise_id?: number;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type listening_exercisesUpdateWithoutLessonsInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutListening_exercisesNestedInput;
    listening_questions?: Prisma.listening_questionsUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateManyWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_exercisesCreateManyUsersInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    audio_url: string;
    transcript?: string | null;
    created_at?: Date | string | null;
};
export type listening_exercisesUpdateWithoutUsersInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutListening_exercisesNestedInput;
    listening_questions?: Prisma.listening_questionsUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateWithoutUsersInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    listening_questions?: Prisma.listening_questionsUncheckedUpdateManyWithoutListening_exercisesNestedInput;
};
export type listening_exercisesUncheckedUpdateManyWithoutUsersInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.StringFieldUpdateOperationsInput | string;
    transcript?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Listening_exercisesCountOutputType = {
    listening_questions: number;
};
export type Listening_exercisesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listening_questions?: boolean | Listening_exercisesCountOutputTypeCountListening_questionsArgs;
};
export type Listening_exercisesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Listening_exercisesCountOutputTypeSelect<ExtArgs> | null;
};
export type Listening_exercisesCountOutputTypeCountListening_questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_questionsWhereInput;
};
export type listening_exercisesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    audio_url?: boolean;
    transcript?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_exercises$listening_questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Listening_exercisesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listening_exercises"]>;
export type listening_exercisesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    audio_url?: boolean;
    transcript?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["listening_exercises"]>;
export type listening_exercisesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    audio_url?: boolean;
    transcript?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["listening_exercises"]>;
export type listening_exercisesSelectScalar = {
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    audio_url?: boolean;
    transcript?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type listening_exercisesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"exercise_id" | "lesson_id" | "title" | "audio_url" | "transcript" | "created_by" | "created_at", ExtArgs["result"]["listening_exercises"]>;
export type listening_exercisesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
    listening_questions?: boolean | Prisma.listening_exercises$listening_questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Listening_exercisesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type listening_exercisesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
};
export type listening_exercisesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.listening_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.listening_exercises$lessonsArgs<ExtArgs>;
};
export type $listening_exercisesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listening_exercises";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        listening_questions: Prisma.$listening_questionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        exercise_id: number;
        lesson_id: number | null;
        title: string | null;
        audio_url: string;
        transcript: string | null;
        created_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["listening_exercises"]>;
    composites: {};
};
export type listening_exercisesGetPayload<S extends boolean | null | undefined | listening_exercisesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload, S>;
export type listening_exercisesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listening_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Listening_exercisesCountAggregateInputType | true;
};
export interface listening_exercisesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listening_exercises'];
        meta: {
            name: 'listening_exercises';
        };
    };
    findUnique<T extends listening_exercisesFindUniqueArgs>(args: Prisma.SelectSubset<T, listening_exercisesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends listening_exercisesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listening_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends listening_exercisesFindFirstArgs>(args?: Prisma.SelectSubset<T, listening_exercisesFindFirstArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends listening_exercisesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listening_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends listening_exercisesFindManyArgs>(args?: Prisma.SelectSubset<T, listening_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends listening_exercisesCreateArgs>(args: Prisma.SelectSubset<T, listening_exercisesCreateArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends listening_exercisesCreateManyArgs>(args?: Prisma.SelectSubset<T, listening_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends listening_exercisesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listening_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends listening_exercisesDeleteArgs>(args: Prisma.SelectSubset<T, listening_exercisesDeleteArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends listening_exercisesUpdateArgs>(args: Prisma.SelectSubset<T, listening_exercisesUpdateArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends listening_exercisesDeleteManyArgs>(args?: Prisma.SelectSubset<T, listening_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends listening_exercisesUpdateManyArgs>(args: Prisma.SelectSubset<T, listening_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends listening_exercisesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listening_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends listening_exercisesUpsertArgs>(args: Prisma.SelectSubset<T, listening_exercisesUpsertArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends listening_exercisesCountArgs>(args?: Prisma.Subset<T, listening_exercisesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Listening_exercisesCountAggregateOutputType> : number>;
    aggregate<T extends Listening_exercisesAggregateArgs>(args: Prisma.Subset<T, Listening_exercisesAggregateArgs>): Prisma.PrismaPromise<GetListening_exercisesAggregateType<T>>;
    groupBy<T extends listening_exercisesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listening_exercisesGroupByArgs['orderBy'];
    } : {
        orderBy?: listening_exercisesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listening_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListening_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: listening_exercisesFieldRefs;
}
export interface Prisma__listening_exercisesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.listening_exercises$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_exercises$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.listening_exercises$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_exercises$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listening_questions<T extends Prisma.listening_exercises$listening_questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_exercises$listening_questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface listening_exercisesFieldRefs {
    readonly exercise_id: Prisma.FieldRef<"listening_exercises", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"listening_exercises", 'Int'>;
    readonly title: Prisma.FieldRef<"listening_exercises", 'String'>;
    readonly audio_url: Prisma.FieldRef<"listening_exercises", 'String'>;
    readonly transcript: Prisma.FieldRef<"listening_exercises", 'String'>;
    readonly created_by: Prisma.FieldRef<"listening_exercises", 'Int'>;
    readonly created_at: Prisma.FieldRef<"listening_exercises", 'DateTime'>;
}
export type listening_exercisesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where: Prisma.listening_exercisesWhereUniqueInput;
};
export type listening_exercisesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where: Prisma.listening_exercisesWhereUniqueInput;
};
export type listening_exercisesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where?: Prisma.listening_exercisesWhereInput;
    orderBy?: Prisma.listening_exercisesOrderByWithRelationInput | Prisma.listening_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.listening_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_exercisesScalarFieldEnum | Prisma.Listening_exercisesScalarFieldEnum[];
};
export type listening_exercisesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where?: Prisma.listening_exercisesWhereInput;
    orderBy?: Prisma.listening_exercisesOrderByWithRelationInput | Prisma.listening_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.listening_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_exercisesScalarFieldEnum | Prisma.Listening_exercisesScalarFieldEnum[];
};
export type listening_exercisesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where?: Prisma.listening_exercisesWhereInput;
    orderBy?: Prisma.listening_exercisesOrderByWithRelationInput | Prisma.listening_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.listening_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_exercisesScalarFieldEnum | Prisma.Listening_exercisesScalarFieldEnum[];
};
export type listening_exercisesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_exercisesCreateInput, Prisma.listening_exercisesUncheckedCreateInput>;
};
export type listening_exercisesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.listening_exercisesCreateManyInput | Prisma.listening_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type listening_exercisesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    data: Prisma.listening_exercisesCreateManyInput | Prisma.listening_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.listening_exercisesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type listening_exercisesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateInput, Prisma.listening_exercisesUncheckedUpdateInput>;
    where: Prisma.listening_exercisesWhereUniqueInput;
};
export type listening_exercisesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.listening_exercisesUpdateManyMutationInput, Prisma.listening_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.listening_exercisesWhereInput;
    limit?: number;
};
export type listening_exercisesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_exercisesUpdateManyMutationInput, Prisma.listening_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.listening_exercisesWhereInput;
    limit?: number;
    include?: Prisma.listening_exercisesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type listening_exercisesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where: Prisma.listening_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_exercisesCreateInput, Prisma.listening_exercisesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.listening_exercisesUpdateInput, Prisma.listening_exercisesUncheckedUpdateInput>;
};
export type listening_exercisesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where: Prisma.listening_exercisesWhereUniqueInput;
};
export type listening_exercisesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_exercisesWhereInput;
    limit?: number;
};
export type listening_exercises$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type listening_exercises$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type listening_exercises$listening_questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithRelationInput | Prisma.listening_questionsOrderByWithRelationInput[];
    cursor?: Prisma.listening_questionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_questionsScalarFieldEnum | Prisma.Listening_questionsScalarFieldEnum[];
};
export type listening_exercisesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
};
export {};
