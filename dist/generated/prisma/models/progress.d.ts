import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type progressModel = runtime.Types.Result.DefaultSelection<Prisma.$progressPayload>;
export type AggregateProgress = {
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
};
export type ProgressAvgAggregateOutputType = {
    progress_id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    progress_percent: runtime.Decimal | null;
};
export type ProgressSumAggregateOutputType = {
    progress_id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    progress_percent: runtime.Decimal | null;
};
export type ProgressMinAggregateOutputType = {
    progress_id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
};
export type ProgressMaxAggregateOutputType = {
    progress_id: number | null;
    user_id: number | null;
    lesson_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
};
export type ProgressCountAggregateOutputType = {
    progress_id: number;
    user_id: number;
    lesson_id: number;
    progress_percent: number;
    status: number;
    updated_at: number;
    _all: number;
};
export type ProgressAvgAggregateInputType = {
    progress_id?: true;
    user_id?: true;
    lesson_id?: true;
    progress_percent?: true;
};
export type ProgressSumAggregateInputType = {
    progress_id?: true;
    user_id?: true;
    lesson_id?: true;
    progress_percent?: true;
};
export type ProgressMinAggregateInputType = {
    progress_id?: true;
    user_id?: true;
    lesson_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
};
export type ProgressMaxAggregateInputType = {
    progress_id?: true;
    user_id?: true;
    lesson_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
};
export type ProgressCountAggregateInputType = {
    progress_id?: true;
    user_id?: true;
    lesson_id?: true;
    progress_percent?: true;
    status?: true;
    updated_at?: true;
    _all?: true;
};
export type ProgressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgressCountAggregateInputType;
    _avg?: ProgressAvgAggregateInputType;
    _sum?: ProgressSumAggregateInputType;
    _min?: ProgressMinAggregateInputType;
    _max?: ProgressMaxAggregateInputType;
};
export type GetProgressAggregateType<T extends ProgressAggregateArgs> = {
    [P in keyof T & keyof AggregateProgress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgress[P]> : Prisma.GetScalarType<T[P], AggregateProgress[P]>;
};
export type progressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithAggregationInput | Prisma.progressOrderByWithAggregationInput[];
    by: Prisma.ProgressScalarFieldEnum[] | Prisma.ProgressScalarFieldEnum;
    having?: Prisma.progressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressCountAggregateInputType | true;
    _avg?: ProgressAvgAggregateInputType;
    _sum?: ProgressSumAggregateInputType;
    _min?: ProgressMinAggregateInputType;
    _max?: ProgressMaxAggregateInputType;
};
export type ProgressGroupByOutputType = {
    progress_id: number;
    user_id: number | null;
    lesson_id: number | null;
    progress_percent: runtime.Decimal | null;
    status: string | null;
    updated_at: Date | null;
    _count: ProgressCountAggregateOutputType | null;
    _avg: ProgressAvgAggregateOutputType | null;
    _sum: ProgressSumAggregateOutputType | null;
    _min: ProgressMinAggregateOutputType | null;
    _max: ProgressMaxAggregateOutputType | null;
};
type GetProgressGroupByPayload<T extends progressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressGroupByOutputType[P]>;
}>>;
export type progressWhereInput = {
    AND?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    OR?: Prisma.progressWhereInput[];
    NOT?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    progress_id?: Prisma.IntFilter<"progress"> | number;
    user_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"progress"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"progress"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type progressOrderByWithRelationInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type progressWhereUniqueInput = Prisma.AtLeast<{
    progress_id?: number;
    AND?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    OR?: Prisma.progressWhereInput[];
    NOT?: Prisma.progressWhereInput | Prisma.progressWhereInput[];
    user_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"progress"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"progress"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "progress_id">;
export type progressOrderByWithAggregationInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_percent?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.progressCountOrderByAggregateInput;
    _avg?: Prisma.progressAvgOrderByAggregateInput;
    _max?: Prisma.progressMaxOrderByAggregateInput;
    _min?: Prisma.progressMinOrderByAggregateInput;
    _sum?: Prisma.progressSumOrderByAggregateInput;
};
export type progressScalarWhereWithAggregatesInput = {
    AND?: Prisma.progressScalarWhereWithAggregatesInput | Prisma.progressScalarWhereWithAggregatesInput[];
    OR?: Prisma.progressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.progressScalarWhereWithAggregatesInput | Prisma.progressScalarWhereWithAggregatesInput[];
    progress_id?: Prisma.IntWithAggregatesFilter<"progress"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"progress"> | number | null;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"progress"> | number | null;
    progress_percent?: Prisma.DecimalNullableWithAggregatesFilter<"progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"progress"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"progress"> | Date | string | null;
};
export type progressCreateInput = {
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutProgressInput;
    users?: Prisma.usersCreateNestedOneWithoutProgressInput;
};
export type progressUncheckedCreateInput = {
    progress_id?: number;
    user_id?: number | null;
    lesson_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressUpdateInput = {
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutProgressNestedInput;
    users?: Prisma.usersUpdateOneWithoutProgressNestedInput;
};
export type progressUncheckedUpdateInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressCreateManyInput = {
    progress_id?: number;
    user_id?: number | null;
    lesson_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressUpdateManyMutationInput = {
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressUncheckedUpdateManyInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProgressListRelationFilter = {
    every?: Prisma.progressWhereInput;
    some?: Prisma.progressWhereInput;
    none?: Prisma.progressWhereInput;
};
export type progressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type progressCountOrderByAggregateInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type progressAvgOrderByAggregateInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
};
export type progressMaxOrderByAggregateInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type progressMinOrderByAggregateInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type progressSumOrderByAggregateInput = {
    progress_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    progress_percent?: Prisma.SortOrder;
};
export type progressCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput> | Prisma.progressCreateWithoutLessonsInput[] | Prisma.progressUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutLessonsInput | Prisma.progressCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.progressCreateManyLessonsInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput> | Prisma.progressCreateWithoutLessonsInput[] | Prisma.progressUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutLessonsInput | Prisma.progressCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.progressCreateManyLessonsInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput> | Prisma.progressCreateWithoutLessonsInput[] | Prisma.progressUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutLessonsInput | Prisma.progressCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutLessonsInput | Prisma.progressUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.progressCreateManyLessonsInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutLessonsInput | Prisma.progressUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutLessonsInput | Prisma.progressUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type progressUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput> | Prisma.progressCreateWithoutLessonsInput[] | Prisma.progressUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutLessonsInput | Prisma.progressCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutLessonsInput | Prisma.progressUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.progressCreateManyLessonsInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutLessonsInput | Prisma.progressUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutLessonsInput | Prisma.progressUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type progressCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput> | Prisma.progressCreateWithoutUsersInput[] | Prisma.progressUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutUsersInput | Prisma.progressCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.progressCreateManyUsersInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput> | Prisma.progressCreateWithoutUsersInput[] | Prisma.progressUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutUsersInput | Prisma.progressCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.progressCreateManyUsersInputEnvelope;
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
};
export type progressUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput> | Prisma.progressCreateWithoutUsersInput[] | Prisma.progressUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutUsersInput | Prisma.progressCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutUsersInput | Prisma.progressUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.progressCreateManyUsersInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutUsersInput | Prisma.progressUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutUsersInput | Prisma.progressUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type progressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput> | Prisma.progressCreateWithoutUsersInput[] | Prisma.progressUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.progressCreateOrConnectWithoutUsersInput | Prisma.progressCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.progressUpsertWithWhereUniqueWithoutUsersInput | Prisma.progressUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.progressCreateManyUsersInputEnvelope;
    set?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    disconnect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    delete?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    connect?: Prisma.progressWhereUniqueInput | Prisma.progressWhereUniqueInput[];
    update?: Prisma.progressUpdateWithWhereUniqueWithoutUsersInput | Prisma.progressUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.progressUpdateManyWithWhereWithoutUsersInput | Prisma.progressUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
};
export type progressCreateWithoutLessonsInput = {
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutProgressInput;
};
export type progressUncheckedCreateWithoutLessonsInput = {
    progress_id?: number;
    user_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressCreateOrConnectWithoutLessonsInput = {
    where: Prisma.progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput>;
};
export type progressCreateManyLessonsInputEnvelope = {
    data: Prisma.progressCreateManyLessonsInput | Prisma.progressCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type progressUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.progressUpdateWithoutLessonsInput, Prisma.progressUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.progressCreateWithoutLessonsInput, Prisma.progressUncheckedCreateWithoutLessonsInput>;
};
export type progressUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.progressUpdateWithoutLessonsInput, Prisma.progressUncheckedUpdateWithoutLessonsInput>;
};
export type progressUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.progressScalarWhereInput;
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyWithoutLessonsInput>;
};
export type progressScalarWhereInput = {
    AND?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
    OR?: Prisma.progressScalarWhereInput[];
    NOT?: Prisma.progressScalarWhereInput | Prisma.progressScalarWhereInput[];
    progress_id?: Prisma.IntFilter<"progress"> | number;
    user_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    lesson_id?: Prisma.IntNullableFilter<"progress"> | number | null;
    progress_percent?: Prisma.DecimalNullableFilter<"progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringNullableFilter<"progress"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"progress"> | Date | string | null;
};
export type progressCreateWithoutUsersInput = {
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutProgressInput;
};
export type progressUncheckedCreateWithoutUsersInput = {
    progress_id?: number;
    lesson_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressCreateOrConnectWithoutUsersInput = {
    where: Prisma.progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput>;
};
export type progressCreateManyUsersInputEnvelope = {
    data: Prisma.progressCreateManyUsersInput | Prisma.progressCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type progressUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.progressUpdateWithoutUsersInput, Prisma.progressUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.progressCreateWithoutUsersInput, Prisma.progressUncheckedCreateWithoutUsersInput>;
};
export type progressUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.progressUpdateWithoutUsersInput, Prisma.progressUncheckedUpdateWithoutUsersInput>;
};
export type progressUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.progressScalarWhereInput;
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyWithoutUsersInput>;
};
export type progressCreateManyLessonsInput = {
    progress_id?: number;
    user_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressUpdateWithoutLessonsInput = {
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutProgressNestedInput;
};
export type progressUncheckedUpdateWithoutLessonsInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressUncheckedUpdateManyWithoutLessonsInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressCreateManyUsersInput = {
    progress_id?: number;
    lesson_id?: number | null;
    progress_percent?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string | null;
    updated_at?: Date | string | null;
};
export type progressUpdateWithoutUsersInput = {
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutProgressNestedInput;
};
export type progressUncheckedUpdateWithoutUsersInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressUncheckedUpdateManyWithoutUsersInput = {
    progress_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progress_percent?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type progressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    progress_id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    progress_id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    progress_id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
}, ExtArgs["result"]["progress"]>;
export type progressSelectScalar = {
    progress_id?: boolean;
    user_id?: boolean;
    lesson_id?: boolean;
    progress_percent?: boolean;
    status?: boolean;
    updated_at?: boolean;
};
export type progressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"progress_id" | "user_id" | "lesson_id" | "progress_percent" | "status" | "updated_at", ExtArgs["result"]["progress"]>;
export type progressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
};
export type progressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
};
export type progressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.progress$lessonsArgs<ExtArgs>;
    users?: boolean | Prisma.progress$usersArgs<ExtArgs>;
};
export type $progressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "progress";
    objects: {
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        progress_id: number;
        user_id: number | null;
        lesson_id: number | null;
        progress_percent: runtime.Decimal | null;
        status: string | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["progress"]>;
    composites: {};
};
export type progressGetPayload<S extends boolean | null | undefined | progressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$progressPayload, S>;
export type progressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressCountAggregateInputType | true;
};
export interface progressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['progress'];
        meta: {
            name: 'progress';
        };
    };
    findUnique<T extends progressFindUniqueArgs>(args: Prisma.SelectSubset<T, progressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends progressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends progressFindFirstArgs>(args?: Prisma.SelectSubset<T, progressFindFirstArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends progressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, progressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends progressFindManyArgs>(args?: Prisma.SelectSubset<T, progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends progressCreateArgs>(args: Prisma.SelectSubset<T, progressCreateArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends progressCreateManyArgs>(args?: Prisma.SelectSubset<T, progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends progressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends progressDeleteArgs>(args: Prisma.SelectSubset<T, progressDeleteArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends progressUpdateArgs>(args: Prisma.SelectSubset<T, progressUpdateArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends progressDeleteManyArgs>(args?: Prisma.SelectSubset<T, progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends progressUpdateManyArgs>(args: Prisma.SelectSubset<T, progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends progressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends progressUpsertArgs>(args: Prisma.SelectSubset<T, progressUpsertArgs<ExtArgs>>): Prisma.Prisma__progressClient<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends progressCountArgs>(args?: Prisma.Subset<T, progressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressCountAggregateOutputType> : number>;
    aggregate<T extends ProgressAggregateArgs>(args: Prisma.Subset<T, ProgressAggregateArgs>): Prisma.PrismaPromise<GetProgressAggregateType<T>>;
    groupBy<T extends progressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: progressGroupByArgs['orderBy'];
    } : {
        orderBy?: progressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: progressFieldRefs;
}
export interface Prisma__progressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessons<T extends Prisma.progress$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.progress$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.progress$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.progress$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface progressFieldRefs {
    readonly progress_id: Prisma.FieldRef<"progress", 'Int'>;
    readonly user_id: Prisma.FieldRef<"progress", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"progress", 'Int'>;
    readonly progress_percent: Prisma.FieldRef<"progress", 'Decimal'>;
    readonly status: Prisma.FieldRef<"progress", 'String'>;
    readonly updated_at: Prisma.FieldRef<"progress", 'DateTime'>;
}
export type progressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressScalarFieldEnum | Prisma.ProgressScalarFieldEnum[];
};
export type progressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressScalarFieldEnum | Prisma.ProgressScalarFieldEnum[];
};
export type progressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressScalarFieldEnum | Prisma.ProgressScalarFieldEnum[];
};
export type progressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.progressCreateInput, Prisma.progressUncheckedCreateInput>;
};
export type progressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.progressCreateManyInput | Prisma.progressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type progressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    data: Prisma.progressCreateManyInput | Prisma.progressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.progressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type progressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progressUpdateInput, Prisma.progressUncheckedUpdateInput>;
    where: Prisma.progressWhereUniqueInput;
};
export type progressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyInput>;
    where?: Prisma.progressWhereInput;
    limit?: number;
};
export type progressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progressUpdateManyMutationInput, Prisma.progressUncheckedUpdateManyInput>;
    where?: Prisma.progressWhereInput;
    limit?: number;
    include?: Prisma.progressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type progressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.progressCreateInput, Prisma.progressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.progressUpdateInput, Prisma.progressUncheckedUpdateInput>;
};
export type progressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where: Prisma.progressWhereUniqueInput;
};
export type progressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
    limit?: number;
};
export type progress$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type progress$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type progressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
};
export {};
