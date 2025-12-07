import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pronunciation_exercisesModel = runtime.Types.Result.DefaultSelection<Prisma.$pronunciation_exercisesPayload>;
export type AggregatePronunciation_exercises = {
    _count: Pronunciation_exercisesCountAggregateOutputType | null;
    _avg: Pronunciation_exercisesAvgAggregateOutputType | null;
    _sum: Pronunciation_exercisesSumAggregateOutputType | null;
    _min: Pronunciation_exercisesMinAggregateOutputType | null;
    _max: Pronunciation_exercisesMaxAggregateOutputType | null;
};
export type Pronunciation_exercisesAvgAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Pronunciation_exercisesSumAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Pronunciation_exercisesMinAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    sentence: string | null;
    sample_audio_url: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Pronunciation_exercisesMaxAggregateOutputType = {
    exercise_id: number | null;
    lesson_id: number | null;
    sentence: string | null;
    sample_audio_url: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Pronunciation_exercisesCountAggregateOutputType = {
    exercise_id: number;
    lesson_id: number;
    sentence: number;
    sample_audio_url: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type Pronunciation_exercisesAvgAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Pronunciation_exercisesSumAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Pronunciation_exercisesMinAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    sentence?: true;
    sample_audio_url?: true;
    created_by?: true;
    created_at?: true;
};
export type Pronunciation_exercisesMaxAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    sentence?: true;
    sample_audio_url?: true;
    created_by?: true;
    created_at?: true;
};
export type Pronunciation_exercisesCountAggregateInputType = {
    exercise_id?: true;
    lesson_id?: true;
    sentence?: true;
    sample_audio_url?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type Pronunciation_exercisesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pronunciation_exercisesWhereInput;
    orderBy?: Prisma.pronunciation_exercisesOrderByWithRelationInput | Prisma.pronunciation_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.pronunciation_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Pronunciation_exercisesCountAggregateInputType;
    _avg?: Pronunciation_exercisesAvgAggregateInputType;
    _sum?: Pronunciation_exercisesSumAggregateInputType;
    _min?: Pronunciation_exercisesMinAggregateInputType;
    _max?: Pronunciation_exercisesMaxAggregateInputType;
};
export type GetPronunciation_exercisesAggregateType<T extends Pronunciation_exercisesAggregateArgs> = {
    [P in keyof T & keyof AggregatePronunciation_exercises]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePronunciation_exercises[P]> : Prisma.GetScalarType<T[P], AggregatePronunciation_exercises[P]>;
};
export type pronunciation_exercisesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pronunciation_exercisesWhereInput;
    orderBy?: Prisma.pronunciation_exercisesOrderByWithAggregationInput | Prisma.pronunciation_exercisesOrderByWithAggregationInput[];
    by: Prisma.Pronunciation_exercisesScalarFieldEnum[] | Prisma.Pronunciation_exercisesScalarFieldEnum;
    having?: Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pronunciation_exercisesCountAggregateInputType | true;
    _avg?: Pronunciation_exercisesAvgAggregateInputType;
    _sum?: Pronunciation_exercisesSumAggregateInputType;
    _min?: Pronunciation_exercisesMinAggregateInputType;
    _max?: Pronunciation_exercisesMaxAggregateInputType;
};
export type Pronunciation_exercisesGroupByOutputType = {
    exercise_id: number;
    lesson_id: number | null;
    sentence: string;
    sample_audio_url: string | null;
    created_by: number | null;
    created_at: Date | null;
    _count: Pronunciation_exercisesCountAggregateOutputType | null;
    _avg: Pronunciation_exercisesAvgAggregateOutputType | null;
    _sum: Pronunciation_exercisesSumAggregateOutputType | null;
    _min: Pronunciation_exercisesMinAggregateOutputType | null;
    _max: Pronunciation_exercisesMaxAggregateOutputType | null;
};
type GetPronunciation_exercisesGroupByPayload<T extends pronunciation_exercisesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Pronunciation_exercisesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Pronunciation_exercisesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Pronunciation_exercisesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Pronunciation_exercisesGroupByOutputType[P]>;
}>>;
export type pronunciation_exercisesWhereInput = {
    AND?: Prisma.pronunciation_exercisesWhereInput | Prisma.pronunciation_exercisesWhereInput[];
    OR?: Prisma.pronunciation_exercisesWhereInput[];
    NOT?: Prisma.pronunciation_exercisesWhereInput | Prisma.pronunciation_exercisesWhereInput[];
    exercise_id?: Prisma.IntFilter<"pronunciation_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    sentence?: Prisma.StringFilter<"pronunciation_exercises"> | string;
    sample_audio_url?: Prisma.StringNullableFilter<"pronunciation_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"pronunciation_exercises"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
};
export type pronunciation_exercisesOrderByWithRelationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentence?: Prisma.SortOrder;
    sample_audio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
};
export type pronunciation_exercisesWhereUniqueInput = Prisma.AtLeast<{
    exercise_id?: number;
    AND?: Prisma.pronunciation_exercisesWhereInput | Prisma.pronunciation_exercisesWhereInput[];
    OR?: Prisma.pronunciation_exercisesWhereInput[];
    NOT?: Prisma.pronunciation_exercisesWhereInput | Prisma.pronunciation_exercisesWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    sentence?: Prisma.StringFilter<"pronunciation_exercises"> | string;
    sample_audio_url?: Prisma.StringNullableFilter<"pronunciation_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"pronunciation_exercises"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
}, "exercise_id">;
export type pronunciation_exercisesOrderByWithAggregationInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentence?: Prisma.SortOrder;
    sample_audio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.pronunciation_exercisesCountOrderByAggregateInput;
    _avg?: Prisma.pronunciation_exercisesAvgOrderByAggregateInput;
    _max?: Prisma.pronunciation_exercisesMaxOrderByAggregateInput;
    _min?: Prisma.pronunciation_exercisesMinOrderByAggregateInput;
    _sum?: Prisma.pronunciation_exercisesSumOrderByAggregateInput;
};
export type pronunciation_exercisesScalarWhereWithAggregatesInput = {
    AND?: Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput | Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput[];
    OR?: Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput | Prisma.pronunciation_exercisesScalarWhereWithAggregatesInput[];
    exercise_id?: Prisma.IntWithAggregatesFilter<"pronunciation_exercises"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"pronunciation_exercises"> | number | null;
    sentence?: Prisma.StringWithAggregatesFilter<"pronunciation_exercises"> | string;
    sample_audio_url?: Prisma.StringNullableWithAggregatesFilter<"pronunciation_exercises"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"pronunciation_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"pronunciation_exercises"> | Date | string | null;
};
export type pronunciation_exercisesCreateInput = {
    sentence: string;
    sample_audio_url?: string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutPronunciation_exercisesInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutPronunciation_exercisesInput;
};
export type pronunciation_exercisesUncheckedCreateInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    sentence: string;
    sample_audio_url?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesUpdateInput = {
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutPronunciation_exercisesNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutPronunciation_exercisesNestedInput;
};
export type pronunciation_exercisesUncheckedUpdateInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesCreateManyInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    sentence: string;
    sample_audio_url?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesUpdateManyMutationInput = {
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesUncheckedUpdateManyInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Pronunciation_exercisesListRelationFilter = {
    every?: Prisma.pronunciation_exercisesWhereInput;
    some?: Prisma.pronunciation_exercisesWhereInput;
    none?: Prisma.pronunciation_exercisesWhereInput;
};
export type pronunciation_exercisesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pronunciation_exercisesCountOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    sentence?: Prisma.SortOrder;
    sample_audio_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type pronunciation_exercisesAvgOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type pronunciation_exercisesMaxOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    sentence?: Prisma.SortOrder;
    sample_audio_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type pronunciation_exercisesMinOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    sentence?: Prisma.SortOrder;
    sample_audio_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type pronunciation_exercisesSumOrderByAggregateInput = {
    exercise_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type pronunciation_exercisesCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.pronunciation_exercisesCreateWithoutLessonsInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
};
export type pronunciation_exercisesUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.pronunciation_exercisesCreateWithoutLessonsInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyLessonsInputEnvelope;
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
};
export type pronunciation_exercisesUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.pronunciation_exercisesCreateWithoutLessonsInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    disconnect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    delete?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    update?: Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
};
export type pronunciation_exercisesUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput> | Prisma.pronunciation_exercisesCreateWithoutLessonsInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyLessonsInputEnvelope;
    set?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    disconnect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    delete?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    update?: Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutLessonsInput | Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
};
export type pronunciation_exercisesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput> | Prisma.pronunciation_exercisesCreateWithoutUsersInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyUsersInputEnvelope;
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
};
export type pronunciation_exercisesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput> | Prisma.pronunciation_exercisesCreateWithoutUsersInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyUsersInputEnvelope;
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
};
export type pronunciation_exercisesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput> | Prisma.pronunciation_exercisesCreateWithoutUsersInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutUsersInput | Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyUsersInputEnvelope;
    set?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    disconnect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    delete?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    update?: Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutUsersInput | Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutUsersInput | Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
};
export type pronunciation_exercisesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput> | Prisma.pronunciation_exercisesCreateWithoutUsersInput[] | Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput | Prisma.pronunciation_exercisesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutUsersInput | Prisma.pronunciation_exercisesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.pronunciation_exercisesCreateManyUsersInputEnvelope;
    set?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    disconnect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    delete?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    connect?: Prisma.pronunciation_exercisesWhereUniqueInput | Prisma.pronunciation_exercisesWhereUniqueInput[];
    update?: Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutUsersInput | Prisma.pronunciation_exercisesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutUsersInput | Prisma.pronunciation_exercisesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
};
export type pronunciation_exercisesCreateWithoutLessonsInput = {
    sentence: string;
    sample_audio_url?: string | null;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutPronunciation_exercisesInput;
};
export type pronunciation_exercisesUncheckedCreateWithoutLessonsInput = {
    exercise_id?: number;
    sentence: string;
    sample_audio_url?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesCreateOrConnectWithoutLessonsInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type pronunciation_exercisesCreateManyLessonsInputEnvelope = {
    data: Prisma.pronunciation_exercisesCreateManyLessonsInput | Prisma.pronunciation_exercisesCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type pronunciation_exercisesUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    update: Prisma.XOR<Prisma.pronunciation_exercisesUpdateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutLessonsInput>;
};
export type pronunciation_exercisesUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateWithoutLessonsInput, Prisma.pronunciation_exercisesUncheckedUpdateWithoutLessonsInput>;
};
export type pronunciation_exercisesUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.pronunciation_exercisesScalarWhereInput;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateManyMutationInput, Prisma.pronunciation_exercisesUncheckedUpdateManyWithoutLessonsInput>;
};
export type pronunciation_exercisesScalarWhereInput = {
    AND?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
    OR?: Prisma.pronunciation_exercisesScalarWhereInput[];
    NOT?: Prisma.pronunciation_exercisesScalarWhereInput | Prisma.pronunciation_exercisesScalarWhereInput[];
    exercise_id?: Prisma.IntFilter<"pronunciation_exercises"> | number;
    lesson_id?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    sentence?: Prisma.StringFilter<"pronunciation_exercises"> | string;
    sample_audio_url?: Prisma.StringNullableFilter<"pronunciation_exercises"> | string | null;
    created_by?: Prisma.IntNullableFilter<"pronunciation_exercises"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"pronunciation_exercises"> | Date | string | null;
};
export type pronunciation_exercisesCreateWithoutUsersInput = {
    sentence: string;
    sample_audio_url?: string | null;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutPronunciation_exercisesInput;
};
export type pronunciation_exercisesUncheckedCreateWithoutUsersInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    sentence: string;
    sample_audio_url?: string | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesCreateOrConnectWithoutUsersInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput>;
};
export type pronunciation_exercisesCreateManyUsersInputEnvelope = {
    data: Prisma.pronunciation_exercisesCreateManyUsersInput | Prisma.pronunciation_exercisesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type pronunciation_exercisesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    update: Prisma.XOR<Prisma.pronunciation_exercisesUpdateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.pronunciation_exercisesCreateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedCreateWithoutUsersInput>;
};
export type pronunciation_exercisesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateWithoutUsersInput, Prisma.pronunciation_exercisesUncheckedUpdateWithoutUsersInput>;
};
export type pronunciation_exercisesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.pronunciation_exercisesScalarWhereInput;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateManyMutationInput, Prisma.pronunciation_exercisesUncheckedUpdateManyWithoutUsersInput>;
};
export type pronunciation_exercisesCreateManyLessonsInput = {
    exercise_id?: number;
    sentence: string;
    sample_audio_url?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesUpdateWithoutLessonsInput = {
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutPronunciation_exercisesNestedInput;
};
export type pronunciation_exercisesUncheckedUpdateWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesUncheckedUpdateManyWithoutLessonsInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesCreateManyUsersInput = {
    exercise_id?: number;
    lesson_id?: number | null;
    sentence: string;
    sample_audio_url?: string | null;
    created_at?: Date | string | null;
};
export type pronunciation_exercisesUpdateWithoutUsersInput = {
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutPronunciation_exercisesNestedInput;
};
export type pronunciation_exercisesUncheckedUpdateWithoutUsersInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesUncheckedUpdateManyWithoutUsersInput = {
    exercise_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sentence?: Prisma.StringFieldUpdateOperationsInput | string;
    sample_audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type pronunciation_exercisesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    sentence?: boolean;
    sample_audio_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["pronunciation_exercises"]>;
export type pronunciation_exercisesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    sentence?: boolean;
    sample_audio_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["pronunciation_exercises"]>;
export type pronunciation_exercisesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    exercise_id?: boolean;
    lesson_id?: boolean;
    sentence?: boolean;
    sample_audio_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["pronunciation_exercises"]>;
export type pronunciation_exercisesSelectScalar = {
    exercise_id?: boolean;
    lesson_id?: boolean;
    sentence?: boolean;
    sample_audio_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type pronunciation_exercisesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"exercise_id" | "lesson_id" | "sentence" | "sample_audio_url" | "created_by" | "created_at", ExtArgs["result"]["pronunciation_exercises"]>;
export type pronunciation_exercisesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
};
export type pronunciation_exercisesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
};
export type pronunciation_exercisesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.pronunciation_exercises$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>;
};
export type $pronunciation_exercisesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pronunciation_exercises";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        exercise_id: number;
        lesson_id: number | null;
        sentence: string;
        sample_audio_url: string | null;
        created_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["pronunciation_exercises"]>;
    composites: {};
};
export type pronunciation_exercisesGetPayload<S extends boolean | null | undefined | pronunciation_exercisesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload, S>;
export type pronunciation_exercisesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pronunciation_exercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Pronunciation_exercisesCountAggregateInputType | true;
};
export interface pronunciation_exercisesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pronunciation_exercises'];
        meta: {
            name: 'pronunciation_exercises';
        };
    };
    findUnique<T extends pronunciation_exercisesFindUniqueArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pronunciation_exercisesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pronunciation_exercisesFindFirstArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesFindFirstArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pronunciation_exercisesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pronunciation_exercisesFindManyArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pronunciation_exercisesCreateArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesCreateArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pronunciation_exercisesCreateManyArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pronunciation_exercisesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pronunciation_exercisesDeleteArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesDeleteArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pronunciation_exercisesUpdateArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesUpdateArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pronunciation_exercisesDeleteManyArgs>(args?: Prisma.SelectSubset<T, pronunciation_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pronunciation_exercisesUpdateManyArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pronunciation_exercisesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pronunciation_exercisesUpsertArgs>(args: Prisma.SelectSubset<T, pronunciation_exercisesUpsertArgs<ExtArgs>>): Prisma.Prisma__pronunciation_exercisesClient<runtime.Types.Result.GetResult<Prisma.$pronunciation_exercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pronunciation_exercisesCountArgs>(args?: Prisma.Subset<T, pronunciation_exercisesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Pronunciation_exercisesCountAggregateOutputType> : number>;
    aggregate<T extends Pronunciation_exercisesAggregateArgs>(args: Prisma.Subset<T, Pronunciation_exercisesAggregateArgs>): Prisma.PrismaPromise<GetPronunciation_exercisesAggregateType<T>>;
    groupBy<T extends pronunciation_exercisesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pronunciation_exercisesGroupByArgs['orderBy'];
    } : {
        orderBy?: pronunciation_exercisesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pronunciation_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPronunciation_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pronunciation_exercisesFieldRefs;
}
export interface Prisma__pronunciation_exercisesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.pronunciation_exercises$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pronunciation_exercises$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.pronunciation_exercises$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pronunciation_exercises$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pronunciation_exercisesFieldRefs {
    readonly exercise_id: Prisma.FieldRef<"pronunciation_exercises", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"pronunciation_exercises", 'Int'>;
    readonly sentence: Prisma.FieldRef<"pronunciation_exercises", 'String'>;
    readonly sample_audio_url: Prisma.FieldRef<"pronunciation_exercises", 'String'>;
    readonly created_by: Prisma.FieldRef<"pronunciation_exercises", 'Int'>;
    readonly created_at: Prisma.FieldRef<"pronunciation_exercises", 'DateTime'>;
}
export type pronunciation_exercisesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
};
export type pronunciation_exercisesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
};
export type pronunciation_exercisesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where?: Prisma.pronunciation_exercisesWhereInput;
    orderBy?: Prisma.pronunciation_exercisesOrderByWithRelationInput | Prisma.pronunciation_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.pronunciation_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pronunciation_exercisesScalarFieldEnum | Prisma.Pronunciation_exercisesScalarFieldEnum[];
};
export type pronunciation_exercisesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where?: Prisma.pronunciation_exercisesWhereInput;
    orderBy?: Prisma.pronunciation_exercisesOrderByWithRelationInput | Prisma.pronunciation_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.pronunciation_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pronunciation_exercisesScalarFieldEnum | Prisma.Pronunciation_exercisesScalarFieldEnum[];
};
export type pronunciation_exercisesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where?: Prisma.pronunciation_exercisesWhereInput;
    orderBy?: Prisma.pronunciation_exercisesOrderByWithRelationInput | Prisma.pronunciation_exercisesOrderByWithRelationInput[];
    cursor?: Prisma.pronunciation_exercisesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pronunciation_exercisesScalarFieldEnum | Prisma.Pronunciation_exercisesScalarFieldEnum[];
};
export type pronunciation_exercisesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pronunciation_exercisesCreateInput, Prisma.pronunciation_exercisesUncheckedCreateInput>;
};
export type pronunciation_exercisesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pronunciation_exercisesCreateManyInput | Prisma.pronunciation_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pronunciation_exercisesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    data: Prisma.pronunciation_exercisesCreateManyInput | Prisma.pronunciation_exercisesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.pronunciation_exercisesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type pronunciation_exercisesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateInput, Prisma.pronunciation_exercisesUncheckedUpdateInput>;
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
};
export type pronunciation_exercisesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateManyMutationInput, Prisma.pronunciation_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.pronunciation_exercisesWhereInput;
    limit?: number;
};
export type pronunciation_exercisesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pronunciation_exercisesUpdateManyMutationInput, Prisma.pronunciation_exercisesUncheckedUpdateManyInput>;
    where?: Prisma.pronunciation_exercisesWhereInput;
    limit?: number;
    include?: Prisma.pronunciation_exercisesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type pronunciation_exercisesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
    create: Prisma.XOR<Prisma.pronunciation_exercisesCreateInput, Prisma.pronunciation_exercisesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pronunciation_exercisesUpdateInput, Prisma.pronunciation_exercisesUncheckedUpdateInput>;
};
export type pronunciation_exercisesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
    where: Prisma.pronunciation_exercisesWhereUniqueInput;
};
export type pronunciation_exercisesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pronunciation_exercisesWhereInput;
    limit?: number;
};
export type pronunciation_exercises$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type pronunciation_exercises$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type pronunciation_exercisesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pronunciation_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.pronunciation_exercisesOmit<ExtArgs> | null;
    include?: Prisma.pronunciation_exercisesInclude<ExtArgs> | null;
};
export {};
