import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type vocabulariesModel = runtime.Types.Result.DefaultSelection<Prisma.$vocabulariesPayload>;
export type AggregateVocabularies = {
    _count: VocabulariesCountAggregateOutputType | null;
    _avg: VocabulariesAvgAggregateOutputType | null;
    _sum: VocabulariesSumAggregateOutputType | null;
    _min: VocabulariesMinAggregateOutputType | null;
    _max: VocabulariesMaxAggregateOutputType | null;
};
export type VocabulariesAvgAggregateOutputType = {
    vocab_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type VocabulariesSumAggregateOutputType = {
    vocab_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type VocabulariesMinAggregateOutputType = {
    vocab_id: number | null;
    lesson_id: number | null;
    word: string | null;
    phonetic: string | null;
    meaning: string | null;
    example: string | null;
    audio_url: string | null;
    image_url: string | null;
    part_of_speech: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type VocabulariesMaxAggregateOutputType = {
    vocab_id: number | null;
    lesson_id: number | null;
    word: string | null;
    phonetic: string | null;
    meaning: string | null;
    example: string | null;
    audio_url: string | null;
    image_url: string | null;
    part_of_speech: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type VocabulariesCountAggregateOutputType = {
    vocab_id: number;
    lesson_id: number;
    word: number;
    phonetic: number;
    meaning: number;
    example: number;
    audio_url: number;
    image_url: number;
    part_of_speech: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type VocabulariesAvgAggregateInputType = {
    vocab_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type VocabulariesSumAggregateInputType = {
    vocab_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type VocabulariesMinAggregateInputType = {
    vocab_id?: true;
    lesson_id?: true;
    word?: true;
    phonetic?: true;
    meaning?: true;
    example?: true;
    audio_url?: true;
    image_url?: true;
    part_of_speech?: true;
    created_by?: true;
    created_at?: true;
};
export type VocabulariesMaxAggregateInputType = {
    vocab_id?: true;
    lesson_id?: true;
    word?: true;
    phonetic?: true;
    meaning?: true;
    example?: true;
    audio_url?: true;
    image_url?: true;
    part_of_speech?: true;
    created_by?: true;
    created_at?: true;
};
export type VocabulariesCountAggregateInputType = {
    vocab_id?: true;
    lesson_id?: true;
    word?: true;
    phonetic?: true;
    meaning?: true;
    example?: true;
    audio_url?: true;
    image_url?: true;
    part_of_speech?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type VocabulariesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vocabulariesWhereInput;
    orderBy?: Prisma.vocabulariesOrderByWithRelationInput | Prisma.vocabulariesOrderByWithRelationInput[];
    cursor?: Prisma.vocabulariesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VocabulariesCountAggregateInputType;
    _avg?: VocabulariesAvgAggregateInputType;
    _sum?: VocabulariesSumAggregateInputType;
    _min?: VocabulariesMinAggregateInputType;
    _max?: VocabulariesMaxAggregateInputType;
};
export type GetVocabulariesAggregateType<T extends VocabulariesAggregateArgs> = {
    [P in keyof T & keyof AggregateVocabularies]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVocabularies[P]> : Prisma.GetScalarType<T[P], AggregateVocabularies[P]>;
};
export type vocabulariesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vocabulariesWhereInput;
    orderBy?: Prisma.vocabulariesOrderByWithAggregationInput | Prisma.vocabulariesOrderByWithAggregationInput[];
    by: Prisma.VocabulariesScalarFieldEnum[] | Prisma.VocabulariesScalarFieldEnum;
    having?: Prisma.vocabulariesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VocabulariesCountAggregateInputType | true;
    _avg?: VocabulariesAvgAggregateInputType;
    _sum?: VocabulariesSumAggregateInputType;
    _min?: VocabulariesMinAggregateInputType;
    _max?: VocabulariesMaxAggregateInputType;
};
export type VocabulariesGroupByOutputType = {
    vocab_id: number;
    lesson_id: number | null;
    word: string;
    phonetic: string | null;
    meaning: string | null;
    example: string | null;
    audio_url: string | null;
    image_url: string | null;
    part_of_speech: string | null;
    created_by: number | null;
    created_at: Date | null;
    _count: VocabulariesCountAggregateOutputType | null;
    _avg: VocabulariesAvgAggregateOutputType | null;
    _sum: VocabulariesSumAggregateOutputType | null;
    _min: VocabulariesMinAggregateOutputType | null;
    _max: VocabulariesMaxAggregateOutputType | null;
};
type GetVocabulariesGroupByPayload<T extends vocabulariesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VocabulariesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VocabulariesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VocabulariesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VocabulariesGroupByOutputType[P]>;
}>>;
export type vocabulariesWhereInput = {
    AND?: Prisma.vocabulariesWhereInput | Prisma.vocabulariesWhereInput[];
    OR?: Prisma.vocabulariesWhereInput[];
    NOT?: Prisma.vocabulariesWhereInput | Prisma.vocabulariesWhereInput[];
    vocab_id?: Prisma.IntFilter<"vocabularies"> | number;
    lesson_id?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    word?: Prisma.StringFilter<"vocabularies"> | string;
    phonetic?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    meaning?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    example?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    audio_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    image_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    part_of_speech?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    created_by?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"vocabularies"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
};
export type vocabulariesOrderByWithRelationInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    word?: Prisma.SortOrder;
    phonetic?: Prisma.SortOrderInput | Prisma.SortOrder;
    meaning?: Prisma.SortOrderInput | Prisma.SortOrder;
    example?: Prisma.SortOrderInput | Prisma.SortOrder;
    audio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    part_of_speech?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
};
export type vocabulariesWhereUniqueInput = Prisma.AtLeast<{
    vocab_id?: number;
    AND?: Prisma.vocabulariesWhereInput | Prisma.vocabulariesWhereInput[];
    OR?: Prisma.vocabulariesWhereInput[];
    NOT?: Prisma.vocabulariesWhereInput | Prisma.vocabulariesWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    word?: Prisma.StringFilter<"vocabularies"> | string;
    phonetic?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    meaning?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    example?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    audio_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    image_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    part_of_speech?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    created_by?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"vocabularies"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
}, "vocab_id">;
export type vocabulariesOrderByWithAggregationInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    word?: Prisma.SortOrder;
    phonetic?: Prisma.SortOrderInput | Prisma.SortOrder;
    meaning?: Prisma.SortOrderInput | Prisma.SortOrder;
    example?: Prisma.SortOrderInput | Prisma.SortOrder;
    audio_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    part_of_speech?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.vocabulariesCountOrderByAggregateInput;
    _avg?: Prisma.vocabulariesAvgOrderByAggregateInput;
    _max?: Prisma.vocabulariesMaxOrderByAggregateInput;
    _min?: Prisma.vocabulariesMinOrderByAggregateInput;
    _sum?: Prisma.vocabulariesSumOrderByAggregateInput;
};
export type vocabulariesScalarWhereWithAggregatesInput = {
    AND?: Prisma.vocabulariesScalarWhereWithAggregatesInput | Prisma.vocabulariesScalarWhereWithAggregatesInput[];
    OR?: Prisma.vocabulariesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.vocabulariesScalarWhereWithAggregatesInput | Prisma.vocabulariesScalarWhereWithAggregatesInput[];
    vocab_id?: Prisma.IntWithAggregatesFilter<"vocabularies"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"vocabularies"> | number | null;
    word?: Prisma.StringWithAggregatesFilter<"vocabularies"> | string;
    phonetic?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    meaning?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    example?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    audio_url?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    part_of_speech?: Prisma.StringNullableWithAggregatesFilter<"vocabularies"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"vocabularies"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"vocabularies"> | Date | string | null;
};
export type vocabulariesCreateInput = {
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutVocabulariesInput;
};
export type vocabulariesUncheckedCreateInput = {
    vocab_id?: number;
    lesson_id?: number | null;
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type vocabulariesUpdateInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutVocabulariesNestedInput;
};
export type vocabulariesUncheckedUpdateInput = {
    vocab_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vocabulariesCreateManyInput = {
    vocab_id?: number;
    lesson_id?: number | null;
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type vocabulariesUpdateManyMutationInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vocabulariesUncheckedUpdateManyInput = {
    vocab_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VocabulariesListRelationFilter = {
    every?: Prisma.vocabulariesWhereInput;
    some?: Prisma.vocabulariesWhereInput;
    none?: Prisma.vocabulariesWhereInput;
};
export type vocabulariesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type vocabulariesCountOrderByAggregateInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    phonetic?: Prisma.SortOrder;
    meaning?: Prisma.SortOrder;
    example?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    part_of_speech?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vocabulariesAvgOrderByAggregateInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type vocabulariesMaxOrderByAggregateInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    phonetic?: Prisma.SortOrder;
    meaning?: Prisma.SortOrder;
    example?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    part_of_speech?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vocabulariesMinOrderByAggregateInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    phonetic?: Prisma.SortOrder;
    meaning?: Prisma.SortOrder;
    example?: Prisma.SortOrder;
    audio_url?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    part_of_speech?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vocabulariesSumOrderByAggregateInput = {
    vocab_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type vocabulariesCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput> | Prisma.vocabulariesCreateWithoutLessonsInput[] | Prisma.vocabulariesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.vocabulariesCreateOrConnectWithoutLessonsInput | Prisma.vocabulariesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.vocabulariesCreateManyLessonsInputEnvelope;
    connect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
};
export type vocabulariesUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput> | Prisma.vocabulariesCreateWithoutLessonsInput[] | Prisma.vocabulariesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.vocabulariesCreateOrConnectWithoutLessonsInput | Prisma.vocabulariesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.vocabulariesCreateManyLessonsInputEnvelope;
    connect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
};
export type vocabulariesUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput> | Prisma.vocabulariesCreateWithoutLessonsInput[] | Prisma.vocabulariesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.vocabulariesCreateOrConnectWithoutLessonsInput | Prisma.vocabulariesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.vocabulariesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.vocabulariesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.vocabulariesCreateManyLessonsInputEnvelope;
    set?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    disconnect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    delete?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    connect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    update?: Prisma.vocabulariesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.vocabulariesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.vocabulariesUpdateManyWithWhereWithoutLessonsInput | Prisma.vocabulariesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.vocabulariesScalarWhereInput | Prisma.vocabulariesScalarWhereInput[];
};
export type vocabulariesUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput> | Prisma.vocabulariesCreateWithoutLessonsInput[] | Prisma.vocabulariesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.vocabulariesCreateOrConnectWithoutLessonsInput | Prisma.vocabulariesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.vocabulariesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.vocabulariesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.vocabulariesCreateManyLessonsInputEnvelope;
    set?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    disconnect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    delete?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    connect?: Prisma.vocabulariesWhereUniqueInput | Prisma.vocabulariesWhereUniqueInput[];
    update?: Prisma.vocabulariesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.vocabulariesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.vocabulariesUpdateManyWithWhereWithoutLessonsInput | Prisma.vocabulariesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.vocabulariesScalarWhereInput | Prisma.vocabulariesScalarWhereInput[];
};
export type vocabulariesCreateWithoutLessonsInput = {
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type vocabulariesUncheckedCreateWithoutLessonsInput = {
    vocab_id?: number;
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type vocabulariesCreateOrConnectWithoutLessonsInput = {
    where: Prisma.vocabulariesWhereUniqueInput;
    create: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput>;
};
export type vocabulariesCreateManyLessonsInputEnvelope = {
    data: Prisma.vocabulariesCreateManyLessonsInput | Prisma.vocabulariesCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type vocabulariesUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.vocabulariesWhereUniqueInput;
    update: Prisma.XOR<Prisma.vocabulariesUpdateWithoutLessonsInput, Prisma.vocabulariesUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.vocabulariesCreateWithoutLessonsInput, Prisma.vocabulariesUncheckedCreateWithoutLessonsInput>;
};
export type vocabulariesUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.vocabulariesWhereUniqueInput;
    data: Prisma.XOR<Prisma.vocabulariesUpdateWithoutLessonsInput, Prisma.vocabulariesUncheckedUpdateWithoutLessonsInput>;
};
export type vocabulariesUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.vocabulariesScalarWhereInput;
    data: Prisma.XOR<Prisma.vocabulariesUpdateManyMutationInput, Prisma.vocabulariesUncheckedUpdateManyWithoutLessonsInput>;
};
export type vocabulariesScalarWhereInput = {
    AND?: Prisma.vocabulariesScalarWhereInput | Prisma.vocabulariesScalarWhereInput[];
    OR?: Prisma.vocabulariesScalarWhereInput[];
    NOT?: Prisma.vocabulariesScalarWhereInput | Prisma.vocabulariesScalarWhereInput[];
    vocab_id?: Prisma.IntFilter<"vocabularies"> | number;
    lesson_id?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    word?: Prisma.StringFilter<"vocabularies"> | string;
    phonetic?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    meaning?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    example?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    audio_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    image_url?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    part_of_speech?: Prisma.StringNullableFilter<"vocabularies"> | string | null;
    created_by?: Prisma.IntNullableFilter<"vocabularies"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"vocabularies"> | Date | string | null;
};
export type vocabulariesCreateManyLessonsInput = {
    vocab_id?: number;
    word: string;
    phonetic?: string | null;
    meaning?: string | null;
    example?: string | null;
    audio_url?: string | null;
    image_url?: string | null;
    part_of_speech?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type vocabulariesUpdateWithoutLessonsInput = {
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vocabulariesUncheckedUpdateWithoutLessonsInput = {
    vocab_id?: Prisma.IntFieldUpdateOperationsInput | number;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vocabulariesUncheckedUpdateManyWithoutLessonsInput = {
    vocab_id?: Prisma.IntFieldUpdateOperationsInput | number;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    phonetic?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meaning?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    example?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    audio_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    part_of_speech?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vocabulariesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vocab_id?: boolean;
    lesson_id?: boolean;
    word?: boolean;
    phonetic?: boolean;
    meaning?: boolean;
    example?: boolean;
    audio_url?: boolean;
    image_url?: boolean;
    part_of_speech?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["vocabularies"]>;
export type vocabulariesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vocab_id?: boolean;
    lesson_id?: boolean;
    word?: boolean;
    phonetic?: boolean;
    meaning?: boolean;
    example?: boolean;
    audio_url?: boolean;
    image_url?: boolean;
    part_of_speech?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["vocabularies"]>;
export type vocabulariesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    vocab_id?: boolean;
    lesson_id?: boolean;
    word?: boolean;
    phonetic?: boolean;
    meaning?: boolean;
    example?: boolean;
    audio_url?: boolean;
    image_url?: boolean;
    part_of_speech?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["vocabularies"]>;
export type vocabulariesSelectScalar = {
    vocab_id?: boolean;
    lesson_id?: boolean;
    word?: boolean;
    phonetic?: boolean;
    meaning?: boolean;
    example?: boolean;
    audio_url?: boolean;
    image_url?: boolean;
    part_of_speech?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type vocabulariesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"vocab_id" | "lesson_id" | "word" | "phonetic" | "meaning" | "example" | "audio_url" | "image_url" | "part_of_speech" | "created_by" | "created_at", ExtArgs["result"]["vocabularies"]>;
export type vocabulariesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
};
export type vocabulariesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
};
export type vocabulariesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.vocabularies$lessonsArgs<ExtArgs>;
};
export type $vocabulariesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "vocabularies";
    objects: {
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        vocab_id: number;
        lesson_id: number | null;
        word: string;
        phonetic: string | null;
        meaning: string | null;
        example: string | null;
        audio_url: string | null;
        image_url: string | null;
        part_of_speech: string | null;
        created_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["vocabularies"]>;
    composites: {};
};
export type vocabulariesGetPayload<S extends boolean | null | undefined | vocabulariesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload, S>;
export type vocabulariesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<vocabulariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VocabulariesCountAggregateInputType | true;
};
export interface vocabulariesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['vocabularies'];
        meta: {
            name: 'vocabularies';
        };
    };
    findUnique<T extends vocabulariesFindUniqueArgs>(args: Prisma.SelectSubset<T, vocabulariesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends vocabulariesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, vocabulariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends vocabulariesFindFirstArgs>(args?: Prisma.SelectSubset<T, vocabulariesFindFirstArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends vocabulariesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, vocabulariesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends vocabulariesFindManyArgs>(args?: Prisma.SelectSubset<T, vocabulariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends vocabulariesCreateArgs>(args: Prisma.SelectSubset<T, vocabulariesCreateArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends vocabulariesCreateManyArgs>(args?: Prisma.SelectSubset<T, vocabulariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends vocabulariesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, vocabulariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends vocabulariesDeleteArgs>(args: Prisma.SelectSubset<T, vocabulariesDeleteArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends vocabulariesUpdateArgs>(args: Prisma.SelectSubset<T, vocabulariesUpdateArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends vocabulariesDeleteManyArgs>(args?: Prisma.SelectSubset<T, vocabulariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends vocabulariesUpdateManyArgs>(args: Prisma.SelectSubset<T, vocabulariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends vocabulariesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, vocabulariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends vocabulariesUpsertArgs>(args: Prisma.SelectSubset<T, vocabulariesUpsertArgs<ExtArgs>>): Prisma.Prisma__vocabulariesClient<runtime.Types.Result.GetResult<Prisma.$vocabulariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends vocabulariesCountArgs>(args?: Prisma.Subset<T, vocabulariesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VocabulariesCountAggregateOutputType> : number>;
    aggregate<T extends VocabulariesAggregateArgs>(args: Prisma.Subset<T, VocabulariesAggregateArgs>): Prisma.PrismaPromise<GetVocabulariesAggregateType<T>>;
    groupBy<T extends vocabulariesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: vocabulariesGroupByArgs['orderBy'];
    } : {
        orderBy?: vocabulariesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, vocabulariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabulariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: vocabulariesFieldRefs;
}
export interface Prisma__vocabulariesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessons<T extends Prisma.vocabularies$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.vocabularies$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface vocabulariesFieldRefs {
    readonly vocab_id: Prisma.FieldRef<"vocabularies", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"vocabularies", 'Int'>;
    readonly word: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly phonetic: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly meaning: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly example: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly audio_url: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly image_url: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly part_of_speech: Prisma.FieldRef<"vocabularies", 'String'>;
    readonly created_by: Prisma.FieldRef<"vocabularies", 'Int'>;
    readonly created_at: Prisma.FieldRef<"vocabularies", 'DateTime'>;
}
export type vocabulariesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where: Prisma.vocabulariesWhereUniqueInput;
};
export type vocabulariesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where: Prisma.vocabulariesWhereUniqueInput;
};
export type vocabulariesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where?: Prisma.vocabulariesWhereInput;
    orderBy?: Prisma.vocabulariesOrderByWithRelationInput | Prisma.vocabulariesOrderByWithRelationInput[];
    cursor?: Prisma.vocabulariesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VocabulariesScalarFieldEnum | Prisma.VocabulariesScalarFieldEnum[];
};
export type vocabulariesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where?: Prisma.vocabulariesWhereInput;
    orderBy?: Prisma.vocabulariesOrderByWithRelationInput | Prisma.vocabulariesOrderByWithRelationInput[];
    cursor?: Prisma.vocabulariesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VocabulariesScalarFieldEnum | Prisma.VocabulariesScalarFieldEnum[];
};
export type vocabulariesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where?: Prisma.vocabulariesWhereInput;
    orderBy?: Prisma.vocabulariesOrderByWithRelationInput | Prisma.vocabulariesOrderByWithRelationInput[];
    cursor?: Prisma.vocabulariesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VocabulariesScalarFieldEnum | Prisma.VocabulariesScalarFieldEnum[];
};
export type vocabulariesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vocabulariesCreateInput, Prisma.vocabulariesUncheckedCreateInput>;
};
export type vocabulariesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.vocabulariesCreateManyInput | Prisma.vocabulariesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type vocabulariesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    data: Prisma.vocabulariesCreateManyInput | Prisma.vocabulariesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.vocabulariesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type vocabulariesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vocabulariesUpdateInput, Prisma.vocabulariesUncheckedUpdateInput>;
    where: Prisma.vocabulariesWhereUniqueInput;
};
export type vocabulariesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.vocabulariesUpdateManyMutationInput, Prisma.vocabulariesUncheckedUpdateManyInput>;
    where?: Prisma.vocabulariesWhereInput;
    limit?: number;
};
export type vocabulariesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vocabulariesUpdateManyMutationInput, Prisma.vocabulariesUncheckedUpdateManyInput>;
    where?: Prisma.vocabulariesWhereInput;
    limit?: number;
    include?: Prisma.vocabulariesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type vocabulariesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where: Prisma.vocabulariesWhereUniqueInput;
    create: Prisma.XOR<Prisma.vocabulariesCreateInput, Prisma.vocabulariesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.vocabulariesUpdateInput, Prisma.vocabulariesUncheckedUpdateInput>;
};
export type vocabulariesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
    where: Prisma.vocabulariesWhereUniqueInput;
};
export type vocabulariesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vocabulariesWhereInput;
    limit?: number;
};
export type vocabularies$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type vocabulariesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vocabulariesSelect<ExtArgs> | null;
    omit?: Prisma.vocabulariesOmit<ExtArgs> | null;
    include?: Prisma.vocabulariesInclude<ExtArgs> | null;
};
export {};
