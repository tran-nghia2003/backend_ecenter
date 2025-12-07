import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_baseModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_basePayload>;
export type AggregateQuiz_base = {
    _count: Quiz_baseCountAggregateOutputType | null;
    _avg: Quiz_baseAvgAggregateOutputType | null;
    _sum: Quiz_baseSumAggregateOutputType | null;
    _min: Quiz_baseMinAggregateOutputType | null;
    _max: Quiz_baseMaxAggregateOutputType | null;
};
export type Quiz_baseAvgAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type Quiz_baseSumAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type Quiz_baseMinAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    question: string | null;
    question_type: string | null;
    explanation: string | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_baseMaxAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    question: string | null;
    question_type: string | null;
    explanation: string | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_baseCountAggregateOutputType = {
    quiz_id: number;
    lesson_id: number;
    question: number;
    question_type: number;
    explanation: number;
    order_index: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Quiz_baseAvgAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    order_index?: true;
    created_by?: true;
};
export type Quiz_baseSumAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    order_index?: true;
    created_by?: true;
};
export type Quiz_baseMinAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_baseMaxAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_baseCountAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Quiz_baseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_baseWhereInput;
    orderBy?: Prisma.quiz_baseOrderByWithRelationInput | Prisma.quiz_baseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_baseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_baseCountAggregateInputType;
    _avg?: Quiz_baseAvgAggregateInputType;
    _sum?: Quiz_baseSumAggregateInputType;
    _min?: Quiz_baseMinAggregateInputType;
    _max?: Quiz_baseMaxAggregateInputType;
};
export type GetQuiz_baseAggregateType<T extends Quiz_baseAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_base]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_base[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_base[P]>;
};
export type quiz_baseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_baseWhereInput;
    orderBy?: Prisma.quiz_baseOrderByWithAggregationInput | Prisma.quiz_baseOrderByWithAggregationInput[];
    by: Prisma.Quiz_baseScalarFieldEnum[] | Prisma.Quiz_baseScalarFieldEnum;
    having?: Prisma.quiz_baseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_baseCountAggregateInputType | true;
    _avg?: Quiz_baseAvgAggregateInputType;
    _sum?: Quiz_baseSumAggregateInputType;
    _min?: Quiz_baseMinAggregateInputType;
    _max?: Quiz_baseMaxAggregateInputType;
};
export type Quiz_baseGroupByOutputType = {
    quiz_id: number;
    lesson_id: number | null;
    question: string;
    question_type: string | null;
    explanation: string | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Quiz_baseCountAggregateOutputType | null;
    _avg: Quiz_baseAvgAggregateOutputType | null;
    _sum: Quiz_baseSumAggregateOutputType | null;
    _min: Quiz_baseMinAggregateOutputType | null;
    _max: Quiz_baseMaxAggregateOutputType | null;
};
type GetQuiz_baseGroupByPayload<T extends quiz_baseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_baseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_baseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_baseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_baseGroupByOutputType[P]>;
}>>;
export type quiz_baseWhereInput = {
    AND?: Prisma.quiz_baseWhereInput | Prisma.quiz_baseWhereInput[];
    OR?: Prisma.quiz_baseWhereInput[];
    NOT?: Prisma.quiz_baseWhereInput | Prisma.quiz_baseWhereInput[];
    quiz_id?: Prisma.IntFilter<"quiz_base"> | number;
    lesson_id?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    question?: Prisma.StringFilter<"quiz_base"> | string;
    question_type?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    order_index?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    quiz_fill_blank?: Prisma.Quiz_fill_blankListRelationFilter;
    quiz_multiple_choice?: Prisma.Quiz_multiple_choiceListRelationFilter;
    quiz_ordering?: Prisma.Quiz_orderingListRelationFilter;
};
export type quiz_baseOrderByWithRelationInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankOrderByRelationAggregateInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceOrderByRelationAggregateInput;
    quiz_ordering?: Prisma.quiz_orderingOrderByRelationAggregateInput;
};
export type quiz_baseWhereUniqueInput = Prisma.AtLeast<{
    quiz_id?: number;
    AND?: Prisma.quiz_baseWhereInput | Prisma.quiz_baseWhereInput[];
    OR?: Prisma.quiz_baseWhereInput[];
    NOT?: Prisma.quiz_baseWhereInput | Prisma.quiz_baseWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    question?: Prisma.StringFilter<"quiz_base"> | string;
    question_type?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    order_index?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    quiz_fill_blank?: Prisma.Quiz_fill_blankListRelationFilter;
    quiz_multiple_choice?: Prisma.Quiz_multiple_choiceListRelationFilter;
    quiz_ordering?: Prisma.Quiz_orderingListRelationFilter;
}, "quiz_id">;
export type quiz_baseOrderByWithAggregationInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quiz_baseCountOrderByAggregateInput;
    _avg?: Prisma.quiz_baseAvgOrderByAggregateInput;
    _max?: Prisma.quiz_baseMaxOrderByAggregateInput;
    _min?: Prisma.quiz_baseMinOrderByAggregateInput;
    _sum?: Prisma.quiz_baseSumOrderByAggregateInput;
};
export type quiz_baseScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_baseScalarWhereWithAggregatesInput | Prisma.quiz_baseScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_baseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_baseScalarWhereWithAggregatesInput | Prisma.quiz_baseScalarWhereWithAggregatesInput[];
    quiz_id?: Prisma.IntWithAggregatesFilter<"quiz_base"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"quiz_base"> | number | null;
    question?: Prisma.StringWithAggregatesFilter<"quiz_base"> | string;
    question_type?: Prisma.StringNullableWithAggregatesFilter<"quiz_base"> | string | null;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"quiz_base"> | string | null;
    order_index?: Prisma.IntNullableWithAggregatesFilter<"quiz_base"> | number | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"quiz_base"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_base"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_base"> | Date | string | null;
};
export type quiz_baseCreateInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_baseInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuiz_baseInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_baseNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutQuiz_baseNestedInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseCreateManyInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_baseUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_baseUncheckedUpdateManyInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Quiz_baseListRelationFilter = {
    every?: Prisma.quiz_baseWhereInput;
    some?: Prisma.quiz_baseWhereInput;
    none?: Prisma.quiz_baseWhereInput;
};
export type quiz_baseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_baseCountOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_baseAvgOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type quiz_baseMaxOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_baseMinOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_baseSumOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type Quiz_baseNullableScalarRelationFilter = {
    is?: Prisma.quiz_baseWhereInput | null;
    isNot?: Prisma.quiz_baseWhereInput | null;
};
export type quiz_baseCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput> | Prisma.quiz_baseCreateWithoutLessonsInput[] | Prisma.quiz_baseUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutLessonsInput | Prisma.quiz_baseCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.quiz_baseCreateManyLessonsInputEnvelope;
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
};
export type quiz_baseUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput> | Prisma.quiz_baseCreateWithoutLessonsInput[] | Prisma.quiz_baseUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutLessonsInput | Prisma.quiz_baseCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.quiz_baseCreateManyLessonsInputEnvelope;
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
};
export type quiz_baseUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput> | Prisma.quiz_baseCreateWithoutLessonsInput[] | Prisma.quiz_baseUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutLessonsInput | Prisma.quiz_baseCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.quiz_baseUpsertWithWhereUniqueWithoutLessonsInput | Prisma.quiz_baseUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.quiz_baseCreateManyLessonsInputEnvelope;
    set?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    disconnect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    delete?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    update?: Prisma.quiz_baseUpdateWithWhereUniqueWithoutLessonsInput | Prisma.quiz_baseUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.quiz_baseUpdateManyWithWhereWithoutLessonsInput | Prisma.quiz_baseUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
};
export type quiz_baseUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput> | Prisma.quiz_baseCreateWithoutLessonsInput[] | Prisma.quiz_baseUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutLessonsInput | Prisma.quiz_baseCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.quiz_baseUpsertWithWhereUniqueWithoutLessonsInput | Prisma.quiz_baseUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.quiz_baseCreateManyLessonsInputEnvelope;
    set?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    disconnect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    delete?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    update?: Prisma.quiz_baseUpdateWithWhereUniqueWithoutLessonsInput | Prisma.quiz_baseUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.quiz_baseUpdateManyWithWhereWithoutLessonsInput | Prisma.quiz_baseUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
};
export type quiz_baseCreateNestedOneWithoutQuiz_fill_blankInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_fill_blankInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_fill_blankInput;
    connect?: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseUpdateOneWithoutQuiz_fill_blankNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_fill_blankInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_fill_blankInput;
    upsert?: Prisma.quiz_baseUpsertWithoutQuiz_fill_blankInput;
    disconnect?: Prisma.quiz_baseWhereInput | boolean;
    delete?: Prisma.quiz_baseWhereInput | boolean;
    connect?: Prisma.quiz_baseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.quiz_baseUpdateToOneWithWhereWithoutQuiz_fill_blankInput, Prisma.quiz_baseUpdateWithoutQuiz_fill_blankInput>, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_fill_blankInput>;
};
export type quiz_baseCreateNestedOneWithoutQuiz_multiple_choiceInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_multiple_choiceInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_multiple_choiceInput;
    connect?: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseUpdateOneWithoutQuiz_multiple_choiceNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_multiple_choiceInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_multiple_choiceInput;
    upsert?: Prisma.quiz_baseUpsertWithoutQuiz_multiple_choiceInput;
    disconnect?: Prisma.quiz_baseWhereInput | boolean;
    delete?: Prisma.quiz_baseWhereInput | boolean;
    connect?: Prisma.quiz_baseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.quiz_baseUpdateToOneWithWhereWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUpdateWithoutQuiz_multiple_choiceInput>, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_multiple_choiceInput>;
};
export type quiz_baseCreateNestedOneWithoutQuiz_orderingInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_orderingInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_orderingInput;
    connect?: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseUpdateOneWithoutQuiz_orderingNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_orderingInput>;
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutQuiz_orderingInput;
    upsert?: Prisma.quiz_baseUpsertWithoutQuiz_orderingInput;
    disconnect?: Prisma.quiz_baseWhereInput | boolean;
    delete?: Prisma.quiz_baseWhereInput | boolean;
    connect?: Prisma.quiz_baseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.quiz_baseUpdateToOneWithWhereWithoutQuiz_orderingInput, Prisma.quiz_baseUpdateWithoutQuiz_orderingInput>, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_orderingInput>;
};
export type quiz_baseCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput> | Prisma.quiz_baseCreateWithoutUsersInput[] | Prisma.quiz_baseUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutUsersInput | Prisma.quiz_baseCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_baseCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
};
export type quiz_baseUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput> | Prisma.quiz_baseCreateWithoutUsersInput[] | Prisma.quiz_baseUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutUsersInput | Prisma.quiz_baseCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.quiz_baseCreateManyUsersInputEnvelope;
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
};
export type quiz_baseUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput> | Prisma.quiz_baseCreateWithoutUsersInput[] | Prisma.quiz_baseUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutUsersInput | Prisma.quiz_baseCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_baseUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_baseUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_baseCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    disconnect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    delete?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    update?: Prisma.quiz_baseUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_baseUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_baseUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_baseUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
};
export type quiz_baseUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput> | Prisma.quiz_baseCreateWithoutUsersInput[] | Prisma.quiz_baseUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.quiz_baseCreateOrConnectWithoutUsersInput | Prisma.quiz_baseCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.quiz_baseUpsertWithWhereUniqueWithoutUsersInput | Prisma.quiz_baseUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.quiz_baseCreateManyUsersInputEnvelope;
    set?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    disconnect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    delete?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    connect?: Prisma.quiz_baseWhereUniqueInput | Prisma.quiz_baseWhereUniqueInput[];
    update?: Prisma.quiz_baseUpdateWithWhereUniqueWithoutUsersInput | Prisma.quiz_baseUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.quiz_baseUpdateManyWithWhereWithoutUsersInput | Prisma.quiz_baseUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
};
export type quiz_baseCreateWithoutLessonsInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_baseInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateWithoutLessonsInput = {
    quiz_id?: number;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseCreateOrConnectWithoutLessonsInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput>;
};
export type quiz_baseCreateManyLessonsInputEnvelope = {
    data: Prisma.quiz_baseCreateManyLessonsInput | Prisma.quiz_baseCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type quiz_baseUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_baseUpdateWithoutLessonsInput, Prisma.quiz_baseUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutLessonsInput, Prisma.quiz_baseUncheckedCreateWithoutLessonsInput>;
};
export type quiz_baseUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateWithoutLessonsInput, Prisma.quiz_baseUncheckedUpdateWithoutLessonsInput>;
};
export type quiz_baseUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.quiz_baseScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateManyMutationInput, Prisma.quiz_baseUncheckedUpdateManyWithoutLessonsInput>;
};
export type quiz_baseScalarWhereInput = {
    AND?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
    OR?: Prisma.quiz_baseScalarWhereInput[];
    NOT?: Prisma.quiz_baseScalarWhereInput | Prisma.quiz_baseScalarWhereInput[];
    quiz_id?: Prisma.IntFilter<"quiz_base"> | number;
    lesson_id?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    question?: Prisma.StringFilter<"quiz_base"> | string;
    question_type?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quiz_base"> | string | null;
    order_index?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quiz_base"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quiz_base"> | Date | string | null;
};
export type quiz_baseCreateWithoutQuiz_fill_blankInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_baseInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateWithoutQuiz_fill_blankInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseCreateOrConnectWithoutQuiz_fill_blankInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_fill_blankInput>;
};
export type quiz_baseUpsertWithoutQuiz_fill_blankInput = {
    update: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_fill_blankInput>;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_fill_blankInput>;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_baseUpdateToOneWithWhereWithoutQuiz_fill_blankInput = {
    where?: Prisma.quiz_baseWhereInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_fill_blankInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_fill_blankInput>;
};
export type quiz_baseUpdateWithoutQuiz_fill_blankInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_baseNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateWithoutQuiz_fill_blankInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseCreateWithoutQuiz_multiple_choiceInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_baseInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuiz_baseInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateWithoutQuiz_multiple_choiceInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseCreateOrConnectWithoutQuiz_multiple_choiceInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_multiple_choiceInput>;
};
export type quiz_baseUpsertWithoutQuiz_multiple_choiceInput = {
    update: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_multiple_choiceInput>;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_multiple_choiceInput>;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_baseUpdateToOneWithWhereWithoutQuiz_multiple_choiceInput = {
    where?: Prisma.quiz_baseWhereInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_multiple_choiceInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_multiple_choiceInput>;
};
export type quiz_baseUpdateWithoutQuiz_multiple_choiceInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_baseNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutQuiz_baseNestedInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateWithoutQuiz_multiple_choiceInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseCreateWithoutQuiz_orderingInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutQuiz_baseInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuiz_baseInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateWithoutQuiz_orderingInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseCreateOrConnectWithoutQuiz_orderingInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_orderingInput>;
};
export type quiz_baseUpsertWithoutQuiz_orderingInput = {
    update: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_orderingInput>;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedCreateWithoutQuiz_orderingInput>;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_baseUpdateToOneWithWhereWithoutQuiz_orderingInput = {
    where?: Prisma.quiz_baseWhereInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateWithoutQuiz_orderingInput, Prisma.quiz_baseUncheckedUpdateWithoutQuiz_orderingInput>;
};
export type quiz_baseUpdateWithoutQuiz_orderingInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_baseNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutQuiz_baseNestedInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateWithoutQuiz_orderingInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseCreateWithoutUsersInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuiz_baseInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseUncheckedCreateWithoutUsersInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput;
};
export type quiz_baseCreateOrConnectWithoutUsersInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput>;
};
export type quiz_baseCreateManyUsersInputEnvelope = {
    data: Prisma.quiz_baseCreateManyUsersInput | Prisma.quiz_baseCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type quiz_baseUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_baseUpdateWithoutUsersInput, Prisma.quiz_baseUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.quiz_baseCreateWithoutUsersInput, Prisma.quiz_baseUncheckedCreateWithoutUsersInput>;
};
export type quiz_baseUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.quiz_baseWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateWithoutUsersInput, Prisma.quiz_baseUncheckedUpdateWithoutUsersInput>;
};
export type quiz_baseUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.quiz_baseScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_baseUpdateManyMutationInput, Prisma.quiz_baseUncheckedUpdateManyWithoutUsersInput>;
};
export type quiz_baseCreateManyLessonsInput = {
    quiz_id?: number;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_baseUpdateWithoutLessonsInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutQuiz_baseNestedInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateWithoutLessonsInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateManyWithoutLessonsInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quiz_baseCreateManyUsersInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    order_index?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quiz_baseUpdateWithoutUsersInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutQuiz_baseNestedInput;
    quiz_fill_blank?: Prisma.quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateWithoutUsersInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_fill_blank?: Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_multiple_choice?: Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput;
    quiz_ordering?: Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput;
};
export type quiz_baseUncheckedUpdateManyWithoutUsersInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Quiz_baseCountOutputType = {
    quiz_fill_blank: number;
    quiz_multiple_choice: number;
    quiz_ordering: number;
};
export type Quiz_baseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_fill_blank?: boolean | Quiz_baseCountOutputTypeCountQuiz_fill_blankArgs;
    quiz_multiple_choice?: boolean | Quiz_baseCountOutputTypeCountQuiz_multiple_choiceArgs;
    quiz_ordering?: boolean | Quiz_baseCountOutputTypeCountQuiz_orderingArgs;
};
export type Quiz_baseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Quiz_baseCountOutputTypeSelect<ExtArgs> | null;
};
export type Quiz_baseCountOutputTypeCountQuiz_fill_blankArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_fill_blankWhereInput;
};
export type Quiz_baseCountOutputTypeCountQuiz_multiple_choiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_multiple_choiceWhereInput;
};
export type Quiz_baseCountOutputTypeCountQuiz_orderingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_orderingWhereInput;
};
export type quiz_baseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
    quiz_fill_blank?: boolean | Prisma.quiz_base$quiz_fill_blankArgs<ExtArgs>;
    quiz_multiple_choice?: boolean | Prisma.quiz_base$quiz_multiple_choiceArgs<ExtArgs>;
    quiz_ordering?: boolean | Prisma.quiz_base$quiz_orderingArgs<ExtArgs>;
    _count?: boolean | Prisma.Quiz_baseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_base"]>;
export type quiz_baseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_base"]>;
export type quiz_baseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_base"]>;
export type quiz_baseSelectScalar = {
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type quiz_baseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"quiz_id" | "lesson_id" | "question" | "question_type" | "explanation" | "order_index" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["quiz_base"]>;
export type quiz_baseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
    quiz_fill_blank?: boolean | Prisma.quiz_base$quiz_fill_blankArgs<ExtArgs>;
    quiz_multiple_choice?: boolean | Prisma.quiz_base$quiz_multiple_choiceArgs<ExtArgs>;
    quiz_ordering?: boolean | Prisma.quiz_base$quiz_orderingArgs<ExtArgs>;
    _count?: boolean | Prisma.Quiz_baseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type quiz_baseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
};
export type quiz_baseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.quiz_base$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.quiz_base$lessonsArgs<ExtArgs>;
};
export type $quiz_basePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_base";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        quiz_fill_blank: Prisma.$quiz_fill_blankPayload<ExtArgs>[];
        quiz_multiple_choice: Prisma.$quiz_multiple_choicePayload<ExtArgs>[];
        quiz_ordering: Prisma.$quiz_orderingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        quiz_id: number;
        lesson_id: number | null;
        question: string;
        question_type: string | null;
        explanation: string | null;
        order_index: number | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["quiz_base"]>;
    composites: {};
};
export type quiz_baseGetPayload<S extends boolean | null | undefined | quiz_baseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_basePayload, S>;
export type quiz_baseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_baseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_baseCountAggregateInputType | true;
};
export interface quiz_baseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_base'];
        meta: {
            name: 'quiz_base';
        };
    };
    findUnique<T extends quiz_baseFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_baseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_baseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_baseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_baseFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_baseFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_baseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_baseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_baseFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_baseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_baseCreateArgs>(args: Prisma.SelectSubset<T, quiz_baseCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_baseCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_baseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_baseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_baseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_baseDeleteArgs>(args: Prisma.SelectSubset<T, quiz_baseDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_baseUpdateArgs>(args: Prisma.SelectSubset<T, quiz_baseUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_baseDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_baseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_baseUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_baseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_baseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_baseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_baseUpsertArgs>(args: Prisma.SelectSubset<T, quiz_baseUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_baseCountArgs>(args?: Prisma.Subset<T, quiz_baseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_baseCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_baseAggregateArgs>(args: Prisma.Subset<T, Quiz_baseAggregateArgs>): Prisma.PrismaPromise<GetQuiz_baseAggregateType<T>>;
    groupBy<T extends quiz_baseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_baseGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_baseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_baseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_baseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_baseFieldRefs;
}
export interface Prisma__quiz_baseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.quiz_base$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_base$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.quiz_base$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_base$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quiz_fill_blank<T extends Prisma.quiz_base$quiz_fill_blankArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_base$quiz_fill_blankArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quiz_multiple_choice<T extends Prisma.quiz_base$quiz_multiple_choiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_base$quiz_multiple_choiceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quiz_ordering<T extends Prisma.quiz_base$quiz_orderingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_base$quiz_orderingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_baseFieldRefs {
    readonly quiz_id: Prisma.FieldRef<"quiz_base", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"quiz_base", 'Int'>;
    readonly question: Prisma.FieldRef<"quiz_base", 'String'>;
    readonly question_type: Prisma.FieldRef<"quiz_base", 'String'>;
    readonly explanation: Prisma.FieldRef<"quiz_base", 'String'>;
    readonly order_index: Prisma.FieldRef<"quiz_base", 'Int'>;
    readonly created_by: Prisma.FieldRef<"quiz_base", 'Int'>;
    readonly created_at: Prisma.FieldRef<"quiz_base", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"quiz_base", 'DateTime'>;
}
export type quiz_baseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
    orderBy?: Prisma.quiz_baseOrderByWithRelationInput | Prisma.quiz_baseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_baseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_baseScalarFieldEnum | Prisma.Quiz_baseScalarFieldEnum[];
};
export type quiz_baseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
    orderBy?: Prisma.quiz_baseOrderByWithRelationInput | Prisma.quiz_baseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_baseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_baseScalarFieldEnum | Prisma.Quiz_baseScalarFieldEnum[];
};
export type quiz_baseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
    orderBy?: Prisma.quiz_baseOrderByWithRelationInput | Prisma.quiz_baseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_baseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_baseScalarFieldEnum | Prisma.Quiz_baseScalarFieldEnum[];
};
export type quiz_baseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_baseCreateInput, Prisma.quiz_baseUncheckedCreateInput>;
};
export type quiz_baseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_baseCreateManyInput | Prisma.quiz_baseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_baseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    data: Prisma.quiz_baseCreateManyInput | Prisma.quiz_baseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_baseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_baseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_baseUpdateInput, Prisma.quiz_baseUncheckedUpdateInput>;
    where: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_baseUpdateManyMutationInput, Prisma.quiz_baseUncheckedUpdateManyInput>;
    where?: Prisma.quiz_baseWhereInput;
    limit?: number;
};
export type quiz_baseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_baseUpdateManyMutationInput, Prisma.quiz_baseUncheckedUpdateManyInput>;
    where?: Prisma.quiz_baseWhereInput;
    limit?: number;
    include?: Prisma.quiz_baseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_baseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where: Prisma.quiz_baseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_baseCreateInput, Prisma.quiz_baseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_baseUpdateInput, Prisma.quiz_baseUncheckedUpdateInput>;
};
export type quiz_baseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where: Prisma.quiz_baseWhereUniqueInput;
};
export type quiz_baseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_baseWhereInput;
    limit?: number;
};
export type quiz_base$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type quiz_base$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type quiz_base$quiz_fill_blankArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithRelationInput | Prisma.quiz_fill_blankOrderByWithRelationInput[];
    cursor?: Prisma.quiz_fill_blankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_fill_blankScalarFieldEnum | Prisma.Quiz_fill_blankScalarFieldEnum[];
};
export type quiz_base$quiz_multiple_choiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithRelationInput | Prisma.quiz_multiple_choiceOrderByWithRelationInput[];
    cursor?: Prisma.quiz_multiple_choiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_multiple_choiceScalarFieldEnum | Prisma.Quiz_multiple_choiceScalarFieldEnum[];
};
export type quiz_base$quiz_orderingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithRelationInput | Prisma.quiz_orderingOrderByWithRelationInput[];
    cursor?: Prisma.quiz_orderingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_orderingScalarFieldEnum | Prisma.Quiz_orderingScalarFieldEnum[];
};
export type quiz_baseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
};
export {};
