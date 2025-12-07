import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type writing_exercisesModel = runtime.Types.Result.DefaultSelection<Prisma.$writing_exercisesPayload>;
export type AggregateWriting_exercises = {
    _count: Writing_exercisesCountAggregateOutputType | null;
    _avg: Writing_exercisesAvgAggregateOutputType | null;
    _sum: Writing_exercisesSumAggregateOutputType | null;
    _min: Writing_exercisesMinAggregateOutputType | null;
    _max: Writing_exercisesMaxAggregateOutputType | null;
};
export type Writing_exercisesAvgAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    word_limit: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type Writing_exercisesSumAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    word_limit: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type Writing_exercisesMinAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    title: string | null;
    prompt: string | null;
    sample_answer: string | null;
    word_limit: number | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Writing_exercisesMaxAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    title: string | null;
    prompt: string | null;
    sample_answer: string | null;
    word_limit: number | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Writing_exercisesCountAggregateOutputType = {
    exercise_id: number;
    lesson_id: number;
    title: number;
    prompt: number;
    sample_answer: number;
    word_limit: number;
    order_index: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type Writing_exercisesAvgAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    word_limit?: true;
    order_index?: true;
    created_by?: true;
};
export type Writing_exercisesSumAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    word_limit?: true;
    order_index?: true;
    created_by?: true;
};
export type Writing_exercisesMinAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    prompt?: true;
    sample_answer?: true;
    word_limit?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
};
export type Writing_exercisesMaxAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    prompt?: true;
    sample_answer?: true;
    word_limit?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
};
export type Writing_exercisesCountAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    title?: true;
    prompt?: true;
    sample_answer?: true;
    word_limit?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type Writing_exercisesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_exercisesWhereInput;
    orderBy?: Prisma.writing_exercisesOrderByWithRelationInput | Prisma.writing_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.writing_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Writing_exercisesCountAggregateInputType;
    _avg?: Writing_exercisesAvgAggregateInputType;
    _sum?: Writing_exercisesSumAggregateInputType;
    _min?: Writing_exercisesMinAggregateInputType;
    _max?: Writing_exercisesMaxAggregateInputType;
};
export type GetWriting_exercisesAggregateType<T extends Writing_exercisesAggregateArgs> = {
    [P in keyof T & keyof AggregateWriting_exercises]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWriting_exercises[P]> : Prisma.GetScalarType<T[P], AggregateWriting_exercises[P]>;
};
export type writing_exercisesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_exercisesWhereInput;
    orderBy?: Prisma.writing_exercisesOrderByWithAggregationInput | Prisma.writing_exercisesOrderByWithAggregationInput[];
    by: Prisma.Writing_exercisesScalarFieldEnum[] | Prisma.Writing_exercisesScalarFieldEnum;
    having?: Prisma.writing_exercisesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Writing_exercisesCountAggregateInputType | true;
    _avg?: Writing_exercisesAvgAggregateInputType;
    _sum?: Writing_exercisesSumAggregateInputType;
    _min?: Writing_exercisesMinAggregateInputType;
    _max?: Writing_exercisesMaxAggregateInputType;
};
export type Writing_exercisesGroupByOutputType = {
    exercise_id: number;
    lesson_id: number | null;
    title: string | null;
    prompt: string;
    sample_answer: string | null;
    word_limit: number | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    _count: Writing_exercisesCountAggregateOutputType | null;
    _avg: Writing_exercisesAvgAggregateOutputType | null;
    _sum: Writing_exercisesSumAggregateOutputType | null;
    _min: Writing_exercisesMinAggregateOutputType | null;
    _max: Writing_exercisesMaxAggregateOutputType | null;
};
type GetWriting_exercisesGroupByPayload<T extends writing_exercisesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Writing_exercisesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Writing_exercisesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Writing_exercisesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Writing_exercisesGroupByOutputType[P]>;
}>>;
export type writing_exercisesWhereInput = {
    AND?: Prisma.writing_exercisesWhereInput | Prisma.writing_exercisesWhereInput[];
    OR?: Prisma.writing_exercisesWhereInput[];
    NOT?: Prisma.writing_exercisesWhereInput | Prisma.writing_exercisesWhereInput[];
    exercise_id?: Prisma.IntFilter<"writing_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    prompt?: Prisma.StringFilter<"writing_exercises"> | string;
    sample_answer?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    word_limit?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    order_index?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_by?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"writing_exercises"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    writing_submissions?: Prisma.Writing_submissionsListRelationFilter;
};
export type writing_exercisesOrderByWithRelationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    sample_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    word_limit?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    writing_submissions?: Prisma.writing_submissionsOrderByRelationAggregateInput;
};
export type writing_exercisesWhereUniqueInput = Prisma.AtLeast<{
    exercise_id?: number;
    AND?: Prisma.writing_exercisesWhereInput | Prisma.writing_exercisesWhereInput[];
    OR?: Prisma.writing_exercisesWhereInput[];
    NOT?: Prisma.writing_exercisesWhereInput | Prisma.writing_exercisesWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    prompt?: Prisma.StringFilter<"writing_exercises"> | string;
    sample_answer?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    word_limit?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    order_index?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_by?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"writing_exercises"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    writing_submissions?: Prisma.Writing_submissionsListRelationFilter;
}, "exercise_id">;
export type writing_exercisesOrderByWithAggregationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    sample_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    word_limit?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.writing_exercisesCountOrderByAggregateInput;
    _avg?: Prisma.writing_exercisesAvgOrderByAggregateInput;
    _max?: Prisma.writing_exercisesMaxOrderByAggregateInput;
    _min?: Prisma.writing_exercisesMinOrderByAggregateInput;
    _sum?: Prisma.writing_exercisesSumOrderByAggregateInput;
};
export type writing_exercisesScalarWhereWithAggregatesInput = {
    AND?: Prisma.writing_exercisesScalarWhereWithAggregatesInput | Prisma.writing_exercisesScalarWhereWithAggregatesInput[];
    OR?: Prisma.writing_exercisesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.writing_exercisesScalarWhereWithAggregatesInput | Prisma.writing_exercisesScalarWhereWithAggregatesInput[];
    exercise_id?: Prisma.IntWithAggregatesFilter<"writing_exercises"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"writing_exercises"> | number | null;
    title?: Prisma.StringNullableWithAggregatesFilter<"writing_exercises"> | string | null;
    prompt?: Prisma.StringWithAggregatesFilter<"writing_exercises"> | string;
    sample_answer?: Prisma.StringNullableWithAggregatesFilter<"writing_exercises"> | string | null;
    word_limit?: Prisma.IntNullableWithAggregatesFilter<"writing_exercises"> | number | null;
    order_index?: Prisma.IntNullableWithAggregatesFilter<"writing_exercises"> | number | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"writing_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"writing_exercises"> | Date | string | null;
};
export type writing_exercisesCreateInput = {
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutWriting_exercisesInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutWriting_exercisesInput;
};
export type writing_exercisesUncheckedCreateInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutWriting_exercisesInput;
};
export type writing_exercisesUpdateInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutWriting_exercisesNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutWriting_exercisesNestedInput;
};
export type writing_exercisesUncheckedUpdateInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutWriting_exercisesNestedInput;
};
export type writing_exercisesCreateManyInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type writing_exercisesUpdateManyMutationInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_exercisesUncheckedUpdateManyInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Writing_exercisesListRelationFilter = {
    every?: Prisma.writing_exercisesWhereInput;
    some?: Prisma.writing_exercisesWhereInput;
    none?: Prisma.writing_exercisesWhereInput;
};
export type writing_exercisesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type writing_exercisesCountOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    sample_answer?: Prisma.SortOrder;
    word_limit?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type writing_exercisesAvgOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    word_limit?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type writing_exercisesMaxOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    sample_answer?: Prisma.SortOrder;
    word_limit?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type writing_exercisesMinOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    prompt?: Prisma.SortOrder;
    sample_answer?: Prisma.SortOrder;
    word_limit?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type writing_exercisesSumOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    word_limit?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type Writing_exercisesNullableScalarRelationFilter = {
    is?: Prisma.writing_exercisesWhereInput | null;
    isNot?: Prisma.writing_exercisesWhereInput | null;
};
export type writing_exercisesCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.writing_exercisesCreateWithoutLessonsInput[] | Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput | Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.writing_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
};
export type writing_exercisesUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.writing_exercisesCreateWithoutLessonsInput[] | Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput | Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.writing_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
};
export type writing_exercisesUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.writing_exercisesCreateWithoutLessonsInput[] | Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput | Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.writing_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.writing_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.writing_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    disconnect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    delete?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    connect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    update?: Prisma.writing_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.writing_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.writing_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.writing_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.writing_exercisesScalarWhereInput | Prisma.writing_exercisesScalarWhereInput[];
};
export type writing_exercisesUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.writing_exercisesCreateWithoutLessonsInput[] | Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput | Prisma.writing_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.writing_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.writing_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.writing_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    disconnect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    delete?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    connect?: Prisma.writing_exercisesWhereUniqueInput | Prisma.writing_exercisesWhereUniqueInput[];
    update?: Prisma.writing_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.writing_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.writing_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.writing_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.writing_exercisesScalarWhereInput | Prisma.writing_exercisesScalarWhereInput[];
};
export type writing_exercisesCreateNestedOneWithoutWriting_submissionsInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedCreateWithoutWriting_submissionsInput>;
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutWriting_submissionsInput;
    connect?: Prisma.writing_exercisesWhereUniqueInput;
};
export type writing_exercisesUpdateOneWithoutWriting_submissionsNestedInput = {
    create?: Prisma.XOR<Prisma.writing_exercisesCreateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedCreateWithoutWriting_submissionsInput>;
    connectOrCreate?: Prisma.writing_exercisesCreateOrConnectWithoutWriting_submissionsInput;
    upsert?: Prisma.writing_exercisesUpsertWithoutWriting_submissionsInput;
    disconnect?: Prisma.writing_exercisesWhereInput | boolean;
    delete?: Prisma.writing_exercisesWhereInput | boolean;
    connect?: Prisma.writing_exercisesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.writing_exercisesUpdateToOneWithWhereWithoutWriting_submissionsInput, Prisma.writing_exercisesUpdateWithoutWriting_submissionsInput>, Prisma.writing_exercisesUncheckedUpdateWithoutWriting_submissionsInput>;
};
export type writing_exercisesCreateWithoutLessonsInput = {
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutWriting_exercisesInput;
};
export type writing_exercisesUncheckedCreateWithoutLessonsInput = {
    exercise_id?: number;
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutWriting_exercisesInput;
};
export type writing_exercisesCreateOrConnectWithoutLessonsInput = {
    where: Prisma.writing_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type writing_exercisesCreateManyLessonsInputEnvelope = {
    data: Prisma.writing_exercisesCreateManyLessonsInput | Prisma.writing_exercisesCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type writing_exercisesUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.writing_exercisesWhereUniqueInput;
    update: Prisma.XOR<Prisma.writing_exercisesUpdateWithoutLessonsInput, Prisma.writing_exercisesUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.writing_exercisesCreateWithoutLessonsInput, Prisma.writing_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type writing_exercisesUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.writing_exercisesWhereUniqueInput;
    data: Prisma.XOR<Prisma.writing_exercisesUpdateWithoutLessonsInput, Prisma.writing_exercisesUncheckedUpdateWithoutLessonsInput>;
};
export type writing_exercisesUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.writing_exercisesScalarWhereInput;
    data: Prisma.XOR<Prisma.writing_exercisesUpdateManyMutationInput, Prisma.writing_exercisesUncheckedUpdateManyWithoutLessonsInput>;
};
export type writing_exercisesScalarWhereInput = {
    AND?: Prisma.writing_exercisesScalarWhereInput | Prisma.writing_exercisesScalarWhereInput[];
    OR?: Prisma.writing_exercisesScalarWhereInput[];
    NOT?: Prisma.writing_exercisesScalarWhereInput | Prisma.writing_exercisesScalarWhereInput[];
    exercise_id?: Prisma.IntFilter<"writing_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    title?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    prompt?: Prisma.StringFilter<"writing_exercises"> | string;
    sample_answer?: Prisma.StringNullableFilter<"writing_exercises"> | string | null;
    word_limit?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    order_index?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_by?: Prisma.IntNullableFilter<"writing_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"writing_exercises"> | Date | string | null;
};
export type writing_exercisesCreateWithoutWriting_submissionsInput = {
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutWriting_exercisesInput;
};
export type writing_exercisesUncheckedCreateWithoutWriting_submissionsInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type writing_exercisesCreateOrConnectWithoutWriting_submissionsInput = {
    where: Prisma.writing_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_exercisesCreateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedCreateWithoutWriting_submissionsInput>;
};
export type writing_exercisesUpsertWithoutWriting_submissionsInput = {
    update: Prisma.XOR<Prisma.writing_exercisesUpdateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedUpdateWithoutWriting_submissionsInput>;
    create: Prisma.XOR<Prisma.writing_exercisesCreateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedCreateWithoutWriting_submissionsInput>;
    where?: Prisma.writing_exercisesWhereInput;
};
export type writing_exercisesUpdateToOneWithWhereWithoutWriting_submissionsInput = {
    where?: Prisma.writing_exercisesWhereInput;
    data: Prisma.XOR<Prisma.writing_exercisesUpdateWithoutWriting_submissionsInput, Prisma.writing_exercisesUncheckedUpdateWithoutWriting_submissionsInput>;
};
export type writing_exercisesUpdateWithoutWriting_submissionsInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutWriting_exercisesNestedInput;
};
export type writing_exercisesUncheckedUpdateWithoutWriting_submissionsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_exercisesCreateManyLessonsInput = {
    exercise_id?: number;
    title?: string | null;
    prompt: string;
    sample_answer?: string | null;
    word_limit?: number | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type writing_exercisesUpdateWithoutLessonsInput = {
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutWriting_exercisesNestedInput;
};
export type writing_exercisesUncheckedUpdateWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutWriting_exercisesNestedInput;
};
export type writing_exercisesUncheckedUpdateManyWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prompt?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_answer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_limit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Writing_exercisesCountOutputType = {
    writing_submissions: number;
};
export type Writing_exercisesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    writing_submissions?: boolean | Writing_exercisesCountOutputTypeCountWriting_submissionsArgs;
};
export type Writing_exercisesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Writing_exercisesCountOutputTypeSelect<ExtArgs> | null;
};
export type Writing_exercisesCountOutputTypeCountWriting_submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_submissionsWhereInput;
};
export type writing_exercisesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    prompt?: boolean;
    sample_answer?: boolean;
    word_limit?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
    writing_submissions?: boolean | Prisma.writing_exercises$writing_submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Writing_exercisesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["writing_exercises"]>;
export type writing_exercisesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    prompt?: boolean;
    sample_answer?: boolean;
    word_limit?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["writing_exercises"]>;
export type writing_exercisesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    prompt?: boolean;
    sample_answer?: boolean;
    word_limit?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["writing_exercises"]>;
export type writing_exercisesSelectScalar = {
    exercise_id?: boolean;
    lesson_id?: boolean;
    title?: boolean;
    prompt?: boolean;
    sample_answer?: boolean;
    word_limit?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type writing_exercisesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"exercise_id" | "lesson_id" | "title" | "prompt" | "sample_answer" | "word_limit" | "order_index" | "created_by" | "created_at", ExtArgs["result"]["writing_exercises"]>;
export type writing_exercisesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
    writing_submissions?: boolean | Prisma.writing_exercises$writing_submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Writing_exercisesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type writing_exercisesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
};
export type writing_exercisesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.writing_exercises$lessonsArgs<ExtArgs>;
};
export type $writing_exercisesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "writing_exercises";
    objects: {
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        writing_submissions: Prisma.$writing_submissionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        exercise_id: number;
        lesson_id: number | null;
        title: string | null;
        prompt: string;
        sample_answer: string | null;
        word_limit: number | null;
        order_index: number | null;
        created_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["writing_exercises"]>;
    composites: {};
};
export type writing_exercisesGetPayload<S extends boolean | null | undefined | writing_exercisesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload, S>;
export type writing_exercisesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<writing_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Writing_exercisesCountAggregateInputType | true;
};
export interface writing_exercisesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['writing_exercises'];
        meta: {
            name: 'writing_exercises';
        };
    };
    findUnique<T extends writing_exercisesFindUniqueArgs>(args: Prisma.SelectSubset<T, writing_exercisesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends writing_exercisesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, writing_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends writing_exercisesFindFirstArgs>(args?: Prisma.SelectSubset<T, writing_exercisesFindFirstArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends writing_exercisesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, writing_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends writing_exercisesFindManyArgs>(args?: Prisma.SelectSubset<T, writing_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends writing_exercisesCreateArgs>(args: Prisma.SelectSubset<T, writing_exercisesCreateArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends writing_exercisesCreateManyArgs>(args?: Prisma.SelectSubset<T, writing_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends writing_exercisesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, writing_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends writing_exercisesDeleteArgs>(args: Prisma.SelectSubset<T, writing_exercisesDeleteArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends writing_exercisesUpdateArgs>(args: Prisma.SelectSubset<T, writing_exercisesUpdateArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends writing_exercisesDeleteManyArgs>(args?: Prisma.SelectSubset<T, writing_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends writing_exercisesUpdateManyArgs>(args: Prisma.SelectSubset<T, writing_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends writing_exercisesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, writing_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends writing_exercisesUpsertArgs>(args: Prisma.SelectSubset<T, writing_exercisesUpsertArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends writing_exercisesCountArgs>(args?: Prisma.Subset<T, writing_exercisesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Writing_exercisesCountAggregateOutputType> : number>;
    aggregate<T extends Writing_exercisesAggregateArgs>(args: Prisma.Subset<T, Writing_exercisesAggregateArgs>): Prisma.PrismaPromise<GetWriting_exercisesAggregateType<T>>;
    groupBy<T extends writing_exercisesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: writing_exercisesGroupByArgs['orderBy'];
    } : {
        orderBy?: writing_exercisesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, writing_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriting_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: writing_exercisesFieldRefs;
}
export interface Prisma__writing_exercisesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessons<T extends Prisma.writing_exercises$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.writing_exercises$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    writing_submissions<T extends Prisma.writing_exercises$writing_submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.writing_exercises$writing_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface writing_exercisesFieldRefs {
    readonly exercise_id: Prisma.FieldRef<"writing_exercises", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"writing_exercises", 'Int'>;
    readonly title: Prisma.FieldRef<"writing_exercises", 'String'>;
    readonly prompt: Prisma.FieldRef<"writing_exercises", 'String'>;
    readonly sample_answer: Prisma.FieldRef<"writing_exercises", 'String'>;
    readonly word_limit: Prisma.FieldRef<"writing_exercises", 'Int'>;
    readonly order_index: Prisma.FieldRef<"writing_exercises", 'Int'>;
    readonly created_by: Prisma.FieldRef<"writing_exercises", 'Int'>;
    readonly created_at: Prisma.FieldRef<"writing_exercises", 'DateTime'>;
}
export type writing_exercisesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where: Prisma.writing_exercisesWhereUniqueInput;
};
export type writing_exercisesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where: Prisma.writing_exercisesWhereUniqueInput;
};
export type writing_exercisesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where?: Prisma.writing_exercisesWhereInput;
    orderBy?: Prisma.writing_exercisesOrderByWithRelationInput | Prisma.writing_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.writing_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_exercisesScalarFieldEnum | Prisma.Writing_exercisesScalarFieldEnum[];
};
export type writing_exercisesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where?: Prisma.writing_exercisesWhereInput;
    orderBy?: Prisma.writing_exercisesOrderByWithRelationInput | Prisma.writing_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.writing_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_exercisesScalarFieldEnum | Prisma.Writing_exercisesScalarFieldEnum[];
};
export type writing_exercisesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where?: Prisma.writing_exercisesWhereInput;
    orderBy?: Prisma.writing_exercisesOrderByWithRelationInput | Prisma.writing_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.writing_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_exercisesScalarFieldEnum | Prisma.Writing_exercisesScalarFieldEnum[];
};
export type writing_exercisesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_exercisesCreateInput, Prisma.writing_exercisesUncheckedCreateInput>;
};
export type writing_exercisesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.writing_exercisesCreateManyInput | Prisma.writing_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type writing_exercisesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    data: Prisma.writing_exercisesCreateManyInput | Prisma.writing_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.writing_exercisesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type writing_exercisesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_exercisesUpdateInput, Prisma.writing_exercisesUncheckedUpdateInput>;
    where: Prisma.writing_exercisesWhereUniqueInput;
};
export type writing_exercisesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.writing_exercisesUpdateManyMutationInput, Prisma.writing_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.writing_exercisesWhereInput;
    limit?: number;
};
export type writing_exercisesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_exercisesUpdateManyMutationInput, Prisma.writing_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.writing_exercisesWhereInput;
    limit?: number;
    include?: Prisma.writing_exercisesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type writing_exercisesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where: Prisma.writing_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_exercisesCreateInput, Prisma.writing_exercisesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.writing_exercisesUpdateInput, Prisma.writing_exercisesUncheckedUpdateInput>;
};
export type writing_exercisesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where: Prisma.writing_exercisesWhereUniqueInput;
};
export type writing_exercisesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_exercisesWhereInput;
    limit?: number;
};
export type writing_exercises$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type writing_exercises$writing_submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_submissionsScalarFieldEnum | Prisma.Writing_submissionsScalarFieldEnum[];
};
export type writing_exercisesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
};
export {};
