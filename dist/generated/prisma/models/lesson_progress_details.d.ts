import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type lesson_progress_detailsModel = runtime.Types.Result.DefaultSelection<Prisma.$lesson_progress_detailsPayload>;
export type AggregateLesson_progress_details = {
    _count: Lesson_progress_detailsCountAggregateOutputType | null;
    _avg: Lesson_progress_detailsAvgAggregateOutputType | null;
    _sum: Lesson_progress_detailsSumAggregateOutputType | null;
    _min: Lesson_progress_detailsMinAggregateOutputType | null;
    _max: Lesson_progress_detailsMaxAggregateOutputType | null;
};
export type Lesson_progress_detailsAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    content_id: number | null;
    progress_percent: runtime.Decimal | null;
};
export type Lesson_progress_detailsSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    content_id: number | null;
    progress_percent: runtime.Decimal | null;
};
export type Lesson_progress_detailsMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    content_type: string | null;
    content_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
};
export type Lesson_progress_detailsMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    content_type: string | null;
    content_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
};
export type Lesson_progress_detailsCountAggregateOutputType = {
    id: number;
    user_id: number;
    lesson_id: number;
    content_type: number;
    content_id: number;
    progress_percent: number;
    status: number;
    updated_at: number;
    _all: number;
};
export type Lesson_progress_detailsAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    lesson_id?: true;
    content_id?: true;
    progress_percent?: true;
};
export type Lesson_progress_detailsSumAggregateInputType = {
    id?: true;
    user_id?: true;
    lesson_id?: true;
    content_id?: true;
    progress_percent?: true;
};
export type Lesson_progress_detailsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    lesson_id?: true;
    content_type?: true;
    content_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
};
export type Lesson_progress_detailsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    lesson_id?: true;
    content_type?: true;
    content_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
};
export type Lesson_progress_detailsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    lesson_id?: true;
    content_type?: true;
    content_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
    _all?: true;
};
export type Lesson_progress_detailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithRelationInput | Prisma.lesson_progress_detailsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_progress_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lesson_progress_detailsCountAggregateInputType;
    _avg?: Lesson_progress_detailsAvgAggregateInputType;
    _sum?: Lesson_progress_detailsSumAggregateInputType;
    _min?: Lesson_progress_detailsMinAggregateInputType;
    _max?: Lesson_progress_detailsMaxAggregateInputType;
};
export type GetLesson_progress_detailsAggregateType<T extends Lesson_progress_detailsAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_progress_details]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson_progress_details[P]> : Prisma.GetScalarType<T[P], AggregateLesson_progress_details[P]>;
};
export type lesson_progress_detailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithAggregationInput | Prisma.lesson_progress_detailsOrderByWithAggregationInput[];
    by: Prisma.Lesson_progress_detailsScalarFieldEnum[] | Prisma.Lesson_progress_detailsScalarFieldEnum;
    having?: Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_progress_detailsCountAggregateInputType | true;
    _avg?: Lesson_progress_detailsAvgAggregateInputType;
    _sum?: Lesson_progress_detailsSumAggregateInputType;
    _min?: Lesson_progress_detailsMinAggregateInputType;
    _max?: Lesson_progress_detailsMaxAggregateInputType;
};
export type Lesson_progress_detailsGroupByOutputType = {
    id: number;
    user_id: number | null;
    lesson_id: number | null;
    content_type: string | null;
    content_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
    _count: Lesson_progress_detailsCountAggregateOutputType | null;
    _avg: Lesson_progress_detailsAvgAggregateOutputType | null;
    _sum: Lesson_progress_detailsSumAggregateOutputType | null;
    _min: Lesson_progress_detailsMinAggregateOutputType | null;
    _max: Lesson_progress_detailsMaxAggregateOutputType | null;
};
type GetLesson_progress_detailsGroupByPayload<T extends lesson_progress_detailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lesson_progress_detailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lesson_progress_detailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lesson_progress_detailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lesson_progress_detailsGroupByOutputType[P]>;
}>>;
export type lesson_progress_detailsWhereInput = {
    AND?: Prisma.lesson_progress_detailsWhereInput | Prisma.lesson_progress_detailsWhereInput[];
    OR?: Prisma.lesson_progress_detailsWhereInput[];
    NOT?: Prisma.lesson_progress_detailsWhereInput | Prisma.lesson_progress_detailsWhereInput[];
    id?: Prisma.IntFilter<"lesson_progress_details"> | number;
    user_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    content_type?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    content_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"lesson_progress_details"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_progress_details"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type lesson_progress_detailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    content_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type lesson_progress_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.lesson_progress_detailsWhereInput | Prisma.lesson_progress_detailsWhereInput[];
    OR?: Prisma.lesson_progress_detailsWhereInput[];
    NOT?: Prisma.lesson_progress_detailsWhereInput | Prisma.lesson_progress_detailsWhereInput[];
    user_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    content_type?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    content_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"lesson_progress_details"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_progress_details"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id">;
export type lesson_progress_detailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    content_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lesson_progress_detailsCountOrderByAggregateInput;
    _avg?: Prisma.lesson_progress_detailsAvgOrderByAggregateInput;
    _max?: Prisma.lesson_progress_detailsMaxOrderByAggregateInput;
    _min?: Prisma.lesson_progress_detailsMinOrderByAggregateInput;
    _sum?: Prisma.lesson_progress_detailsSumOrderByAggregateInput;
};
export type lesson_progress_detailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput | Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput | Prisma.lesson_progress_detailsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"lesson_progress_details"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"lesson_progress_details"> | number | null;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"lesson_progress_details"> | number | null;
    content_type?: Prisma.StringNullableWithAggregatesFilter<"lesson_progress_details"> | string | null;
    content_id?: Prisma.IntNullableWithAggregatesFilter<"lesson_progress_details"> | number | null;
    progress_percent?: Prisma.DecimalNullableWithAggregatesFilter<"lesson_progress_details"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"lesson_progress_details"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_progress_details"> | Date | string | null;
};
export type lesson_progress_detailsCreateInput = {
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutLesson_progress_detailsInput;
    users?: Prisma.usersCreateNestedOneWithoutLesson_progress_detailsInput;
};
export type lesson_progress_detailsUncheckedCreateInput = {
    id?: number;
    user_id?: number | null;
    lesson_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsUpdateInput = {
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutLesson_progress_detailsNestedInput;
    users?: Prisma.usersUpdateOneWithoutLesson_progress_detailsNestedInput;
};
export type lesson_progress_detailsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsCreateManyInput = {
    id?: number;
    user_id?: number | null;
    lesson_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsUpdateManyMutationInput = {
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    content_type?: Prisma.SortOrder;
    content_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_progress_detailsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    content_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
};
export type lesson_progress_detailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    content_type?: Prisma.SortOrder;
    content_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_progress_detailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    content_type?: Prisma.SortOrder;
    content_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type lesson_progress_detailsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    content_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
};
export type Lesson_progress_detailsListRelationFilter = {
    every?: Prisma.lesson_progress_detailsWhereInput;
    some?: Prisma.lesson_progress_detailsWhereInput;
    none?: Prisma.lesson_progress_detailsWhereInput;
};
export type lesson_progress_detailsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lesson_progress_detailsCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput> | Prisma.lesson_progress_detailsCreateWithoutLessonsInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyLessonsInputEnvelope;
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
};
export type lesson_progress_detailsUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput> | Prisma.lesson_progress_detailsCreateWithoutLessonsInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyLessonsInputEnvelope;
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
};
export type lesson_progress_detailsUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput> | Prisma.lesson_progress_detailsCreateWithoutLessonsInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutLessonsInput | Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyLessonsInputEnvelope;
    set?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    disconnect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    delete?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    update?: Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutLessonsInput | Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutLessonsInput | Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
};
export type lesson_progress_detailsUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput> | Prisma.lesson_progress_detailsCreateWithoutLessonsInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutLessonsInput | Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyLessonsInputEnvelope;
    set?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    disconnect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    delete?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    update?: Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutLessonsInput | Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutLessonsInput | Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
};
export type lesson_progress_detailsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput> | Prisma.lesson_progress_detailsCreateWithoutUsersInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
};
export type lesson_progress_detailsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput> | Prisma.lesson_progress_detailsCreateWithoutUsersInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
};
export type lesson_progress_detailsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput> | Prisma.lesson_progress_detailsCreateWithoutUsersInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    disconnect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    delete?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    update?: Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
};
export type lesson_progress_detailsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput> | Prisma.lesson_progress_detailsCreateWithoutUsersInput[] | Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput | Prisma.lesson_progress_detailsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_progress_detailsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_progress_detailsCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    disconnect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    delete?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    connect?: Prisma.lesson_progress_detailsWhereUniqueInput | Prisma.lesson_progress_detailsWhereUniqueInput[];
    update?: Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_progress_detailsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_progress_detailsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
};
export type lesson_progress_detailsCreateWithoutLessonsInput = {
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutLesson_progress_detailsInput;
};
export type lesson_progress_detailsUncheckedCreateWithoutLessonsInput = {
    id?: number;
    user_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsCreateOrConnectWithoutLessonsInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput>;
};
export type lesson_progress_detailsCreateManyLessonsInputEnvelope = {
    data: Prisma.lesson_progress_detailsCreateManyLessonsInput | Prisma.lesson_progress_detailsCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type lesson_progress_detailsUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_progress_detailsUpdateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutLessonsInput>;
};
export type lesson_progress_detailsUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateWithoutLessonsInput, Prisma.lesson_progress_detailsUncheckedUpdateWithoutLessonsInput>;
};
export type lesson_progress_detailsUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.lesson_progress_detailsScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateManyMutationInput, Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutLessonsInput>;
};
export type lesson_progress_detailsScalarWhereInput = {
    AND?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
    OR?: Prisma.lesson_progress_detailsScalarWhereInput[];
    NOT?: Prisma.lesson_progress_detailsScalarWhereInput | Prisma.lesson_progress_detailsScalarWhereInput[];
    id?: Prisma.IntFilter<"lesson_progress_details"> | number;
    user_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    content_type?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    content_id?: Prisma.IntNullableFilter<"lesson_progress_details"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"lesson_progress_details"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"lesson_progress_details"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"lesson_progress_details"> | Date | string | null;
};
export type lesson_progress_detailsCreateWithoutUsersInput = {
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutLesson_progress_detailsInput;
};
export type lesson_progress_detailsUncheckedCreateWithoutUsersInput = {
    id?: number;
    lesson_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsCreateOrConnectWithoutUsersInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput>;
};
export type lesson_progress_detailsCreateManyUsersInputEnvelope = {
    data: Prisma.lesson_progress_detailsCreateManyUsersInput | Prisma.lesson_progress_detailsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type lesson_progress_detailsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_progress_detailsUpdateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.lesson_progress_detailsCreateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedCreateWithoutUsersInput>;
};
export type lesson_progress_detailsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateWithoutUsersInput, Prisma.lesson_progress_detailsUncheckedUpdateWithoutUsersInput>;
};
export type lesson_progress_detailsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.lesson_progress_detailsScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateManyMutationInput, Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutUsersInput>;
};
export type lesson_progress_detailsCreateManyLessonsInput = {
    id?: number;
    user_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsUpdateWithoutLessonsInput = {
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutLesson_progress_detailsNestedInput;
};
export type lesson_progress_detailsUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsUncheckedUpdateManyWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsCreateManyUsersInput = {
    id?: number;
    lesson_id?: number | null;
    content_type?: string | null;
    content_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type lesson_progress_detailsUpdateWithoutUsersInput = {
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutLesson_progress_detailsNestedInput;
};
export type lesson_progress_detailsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_progress_detailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    content_type?: boolean;
    content_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_progress_details"]>;
export type lesson_progress_detailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    content_type?: boolean;
    content_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_progress_details"]>;
export type lesson_progress_detailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    content_type?: boolean;
    content_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_progress_details"]>;
export type lesson_progress_detailsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    content_type?: boolean;
    content_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
};
export type lesson_progress_detailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "lesson_id" | "content_type" | "content_id" | "progress_percent" | "status" | "updated_at", ExtArgs["result"]["lesson_progress_details"]>;
export type lesson_progress_detailsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
};
export type lesson_progress_detailsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
};
export type lesson_progress_detailsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.lesson_progress_details$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.lesson_progress_details$usersArgs<ExtArgs>;
};
export type $lesson_progress_detailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lesson_progress_details";
    objects: {
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number | null;
        lesson_id: number | null;
        content_type: string | null;
        content_id: number | null;
        progress_percent: runtime.Decimal | null;
        status: string | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["lesson_progress_details"]>;
    composites: {};
};
export type lesson_progress_detailsGetPayload<S extends boolean | null | undefined | lesson_progress_detailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload, S>;
export type lesson_progress_detailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lesson_progress_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lesson_progress_detailsCountAggregateInputType | true;
};
export interface lesson_progress_detailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lesson_progress_details'];
        meta: {
            name: 'lesson_progress_details';
        };
    };
    findUnique<T extends lesson_progress_detailsFindUniqueArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lesson_progress_detailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lesson_progress_detailsFindFirstArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lesson_progress_detailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lesson_progress_detailsFindManyArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lesson_progress_detailsCreateArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsCreateArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lesson_progress_detailsCreateManyArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends lesson_progress_detailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends lesson_progress_detailsDeleteArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsDeleteArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lesson_progress_detailsUpdateArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsUpdateArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lesson_progress_detailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, lesson_progress_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lesson_progress_detailsUpdateManyArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends lesson_progress_detailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends lesson_progress_detailsUpsertArgs>(args: Prisma.SelectSubset<T, lesson_progress_detailsUpsertArgs<ExtArgs>>): Prisma.Prisma__lesson_progress_detailsClient<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lesson_progress_detailsCountArgs>(args?: Prisma.Subset<T, lesson_progress_detailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lesson_progress_detailsCountAggregateOutputType> : number>;
    aggregate<T extends Lesson_progress_detailsAggregateArgs>(args: Prisma.Subset<T, Lesson_progress_detailsAggregateArgs>): Prisma.PrismaPromise<GetLesson_progress_detailsAggregateType<T>>;
    groupBy<T extends lesson_progress_detailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lesson_progress_detailsGroupByArgs['orderBy'];
    } : {
        orderBy?: lesson_progress_detailsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lesson_progress_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLesson_progress_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lesson_progress_detailsFieldRefs;
}
export interface Prisma__lesson_progress_detailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessons<T extends Prisma.lesson_progress_details$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lesson_progress_details$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.lesson_progress_details$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lesson_progress_details$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lesson_progress_detailsFieldRefs {
    readonly id: Prisma.FieldRef<"lesson_progress_details", 'Int'>;
    readonly user_id: Prisma.FieldRef<"lesson_progress_details", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"lesson_progress_details", 'Int'>;
    readonly content_type: Prisma.FieldRef<"lesson_progress_details", 'String'>;
    readonly content_id: Prisma.FieldRef<"lesson_progress_details", 'Int'>;
    readonly progress_percent: Prisma.FieldRef<"lesson_progress_details", 'Decimal'>;
    readonly status: Prisma.FieldRef<"lesson_progress_details", 'String'>;
    readonly updated_at: Prisma.FieldRef<"lesson_progress_details", 'DateTime'>;
}
export type lesson_progress_detailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
};
export type lesson_progress_detailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
};
export type lesson_progress_detailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithRelationInput | Prisma.lesson_progress_detailsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_progress_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_progress_detailsScalarFieldEnum | Prisma.Lesson_progress_detailsScalarFieldEnum[];
};
export type lesson_progress_detailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithRelationInput | Prisma.lesson_progress_detailsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_progress_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_progress_detailsScalarFieldEnum | Prisma.Lesson_progress_detailsScalarFieldEnum[];
};
export type lesson_progress_detailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithRelationInput | Prisma.lesson_progress_detailsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_progress_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_progress_detailsScalarFieldEnum | Prisma.Lesson_progress_detailsScalarFieldEnum[];
};
export type lesson_progress_detailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.lesson_progress_detailsCreateInput, Prisma.lesson_progress_detailsUncheckedCreateInput>;
};
export type lesson_progress_detailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lesson_progress_detailsCreateManyInput | Prisma.lesson_progress_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lesson_progress_detailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    data: Prisma.lesson_progress_detailsCreateManyInput | Prisma.lesson_progress_detailsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.lesson_progress_detailsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type lesson_progress_detailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateInput, Prisma.lesson_progress_detailsUncheckedUpdateInput>;
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
};
export type lesson_progress_detailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateManyMutationInput, Prisma.lesson_progress_detailsUncheckedUpdateManyInput>;
    where?: Prisma.lesson_progress_detailsWhereInput;
    limit?: number;
};
export type lesson_progress_detailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_progress_detailsUpdateManyMutationInput, Prisma.lesson_progress_detailsUncheckedUpdateManyInput>;
    where?: Prisma.lesson_progress_detailsWhereInput;
    limit?: number;
    include?: Prisma.lesson_progress_detailsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type lesson_progress_detailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_progress_detailsCreateInput, Prisma.lesson_progress_detailsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lesson_progress_detailsUpdateInput, Prisma.lesson_progress_detailsUncheckedUpdateInput>;
};
export type lesson_progress_detailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where: Prisma.lesson_progress_detailsWhereUniqueInput;
};
export type lesson_progress_detailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_progress_detailsWhereInput;
    limit?: number;
};
export type lesson_progress_details$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type lesson_progress_details$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type lesson_progress_detailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
};
export {};
