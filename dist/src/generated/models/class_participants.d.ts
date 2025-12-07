import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type class_participantsModel = runtime.Types.Result.DefaultSelection<Prisma.$class_participantsPayload>;
export type AggregateClass_participants = {
    _count: Class_participantsCountAggregateOutputType | null;
    _avg: Class_participantsAvgAggregateOutputType | null;
    _sum: Class_participantsSumAggregateOutputType | null;
    _min: Class_participantsMinAggregateOutputType | null;
    _max: Class_participantsMaxAggregateOutputType | null;
};
export type Class_participantsAvgAggregateOutputType = {
    participant_id: number | null;
    class_id: number | null;
    user_id: number | null;
};
export type Class_participantsSumAggregateOutputType = {
    participant_id: number | null;
    class_id: number | null;
    user_id: number | null;
};
export type Class_participantsMinAggregateOutputType = {
    participant_id: number | null;
    class_id: number | null;
    user_id: number | null;
    attendance_status: string | null;
    feedback: string | null;
    created_at: Date | null;
};
export type Class_participantsMaxAggregateOutputType = {
    participant_id: number | null;
    class_id: number | null;
    user_id: number | null;
    attendance_status: string | null;
    feedback: string | null;
    created_at: Date | null;
};
export type Class_participantsCountAggregateOutputType = {
    participant_id: number;
    class_id: number;
    user_id: number;
    attendance_status: number;
    feedback: number;
    created_at: number;
    _all: number;
};
export type Class_participantsAvgAggregateInputType = {
    participant_id?: true;
    class_id?: true;
    user_id?: true;
};
export type Class_participantsSumAggregateInputType = {
    participant_id?: true;
    class_id?: true;
    user_id?: true;
};
export type Class_participantsMinAggregateInputType = {
    participant_id?: true;
    class_id?: true;
    user_id?: true;
    attendance_status?: true;
    feedback?: true;
    created_at?: true;
};
export type Class_participantsMaxAggregateInputType = {
    participant_id?: true;
    class_id?: true;
    user_id?: true;
    attendance_status?: true;
    feedback?: true;
    created_at?: true;
};
export type Class_participantsCountAggregateInputType = {
    participant_id?: true;
    class_id?: true;
    user_id?: true;
    attendance_status?: true;
    feedback?: true;
    created_at?: true;
    _all?: true;
};
export type Class_participantsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_participantsWhereInput;
    orderBy?: Prisma.class_participantsOrderByWithRelationInput | Prisma.class_participantsOrderByWithRelationInput[];
    cursor?: Prisma.class_participantsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Class_participantsCountAggregateInputType;
    _avg?: Class_participantsAvgAggregateInputType;
    _sum?: Class_participantsSumAggregateInputType;
    _min?: Class_participantsMinAggregateInputType;
    _max?: Class_participantsMaxAggregateInputType;
};
export type GetClass_participantsAggregateType<T extends Class_participantsAggregateArgs> = {
    [P in keyof T & keyof AggregateClass_participants]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClass_participants[P]> : Prisma.GetScalarType<T[P], AggregateClass_participants[P]>;
};
export type class_participantsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_participantsWhereInput;
    orderBy?: Prisma.class_participantsOrderByWithAggregationInput | Prisma.class_participantsOrderByWithAggregationInput[];
    by: Prisma.Class_participantsScalarFieldEnum[] | Prisma.Class_participantsScalarFieldEnum;
    having?: Prisma.class_participantsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Class_participantsCountAggregateInputType | true;
    _avg?: Class_participantsAvgAggregateInputType;
    _sum?: Class_participantsSumAggregateInputType;
    _min?: Class_participantsMinAggregateInputType;
    _max?: Class_participantsMaxAggregateInputType;
};
export type Class_participantsGroupByOutputType = {
    participant_id: number;
    class_id: number | null;
    user_id: number;
    attendance_status: string | null;
    feedback: string | null;
    created_at: Date | null;
    _count: Class_participantsCountAggregateOutputType | null;
    _avg: Class_participantsAvgAggregateOutputType | null;
    _sum: Class_participantsSumAggregateOutputType | null;
    _min: Class_participantsMinAggregateOutputType | null;
    _max: Class_participantsMaxAggregateOutputType | null;
};
type GetClass_participantsGroupByPayload<T extends class_participantsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Class_participantsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Class_participantsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Class_participantsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Class_participantsGroupByOutputType[P]>;
}>>;
export type class_participantsWhereInput = {
    AND?: Prisma.class_participantsWhereInput | Prisma.class_participantsWhereInput[];
    OR?: Prisma.class_participantsWhereInput[];
    NOT?: Prisma.class_participantsWhereInput | Prisma.class_participantsWhereInput[];
    participant_id?: Prisma.IntFilter<"class_participants"> | number;
    class_id?: Prisma.IntNullableFilter<"class_participants"> | number | null;
    user_id?: Prisma.IntFilter<"class_participants"> | number;
    attendance_status?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    feedback?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_participants"> | Date | string | null;
    classes?: Prisma.XOR<Prisma.ClassesNullableScalarRelationFilter, Prisma.classesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type class_participantsOrderByWithRelationInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attendance_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    classes?: Prisma.classesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type class_participantsWhereUniqueInput = Prisma.AtLeast<{
    participant_id?: number;
    class_id_user_id?: Prisma.class_participantsClass_idUser_idCompoundUniqueInput;
    AND?: Prisma.class_participantsWhereInput | Prisma.class_participantsWhereInput[];
    OR?: Prisma.class_participantsWhereInput[];
    NOT?: Prisma.class_participantsWhereInput | Prisma.class_participantsWhereInput[];
    class_id?: Prisma.IntNullableFilter<"class_participants"> | number | null;
    user_id?: Prisma.IntFilter<"class_participants"> | number;
    attendance_status?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    feedback?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_participants"> | Date | string | null;
    classes?: Prisma.XOR<Prisma.ClassesNullableScalarRelationFilter, Prisma.classesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "participant_id" | "class_id_user_id">;
export type class_participantsOrderByWithAggregationInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attendance_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.class_participantsCountOrderByAggregateInput;
    _avg?: Prisma.class_participantsAvgOrderByAggregateInput;
    _max?: Prisma.class_participantsMaxOrderByAggregateInput;
    _min?: Prisma.class_participantsMinOrderByAggregateInput;
    _sum?: Prisma.class_participantsSumOrderByAggregateInput;
};
export type class_participantsScalarWhereWithAggregatesInput = {
    AND?: Prisma.class_participantsScalarWhereWithAggregatesInput | Prisma.class_participantsScalarWhereWithAggregatesInput[];
    OR?: Prisma.class_participantsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.class_participantsScalarWhereWithAggregatesInput | Prisma.class_participantsScalarWhereWithAggregatesInput[];
    participant_id?: Prisma.IntWithAggregatesFilter<"class_participants"> | number;
    class_id?: Prisma.IntNullableWithAggregatesFilter<"class_participants"> | number | null;
    user_id?: Prisma.IntWithAggregatesFilter<"class_participants"> | number;
    attendance_status?: Prisma.StringNullableWithAggregatesFilter<"class_participants"> | string | null;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"class_participants"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"class_participants"> | Date | string | null;
};
export type class_participantsCreateInput = {
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
    classes?: Prisma.classesCreateNestedOneWithoutClass_participantsInput;
    users: Prisma.usersCreateNestedOneWithoutClass_participantsInput;
};
export type class_participantsUncheckedCreateInput = {
    participant_id?: number;
    class_id?: number | null;
    user_id: number;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsUpdateInput = {
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneWithoutClass_participantsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutClass_participantsNestedInput;
};
export type class_participantsUncheckedUpdateInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsCreateManyInput = {
    participant_id?: number;
    class_id?: number | null;
    user_id: number;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsUpdateManyMutationInput = {
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsUncheckedUpdateManyInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Class_participantsListRelationFilter = {
    every?: Prisma.class_participantsWhereInput;
    some?: Prisma.class_participantsWhereInput;
    none?: Prisma.class_participantsWhereInput;
};
export type class_participantsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type class_participantsClass_idUser_idCompoundUniqueInput = {
    class_id: number;
    user_id: number;
};
export type class_participantsCountOrderByAggregateInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attendance_status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type class_participantsAvgOrderByAggregateInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type class_participantsMaxOrderByAggregateInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attendance_status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type class_participantsMinOrderByAggregateInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    attendance_status?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type class_participantsSumOrderByAggregateInput = {
    participant_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type class_participantsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput> | Prisma.class_participantsCreateWithoutUsersInput[] | Prisma.class_participantsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutUsersInput | Prisma.class_participantsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.class_participantsCreateManyUsersInputEnvelope;
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
};
export type class_participantsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput> | Prisma.class_participantsCreateWithoutUsersInput[] | Prisma.class_participantsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutUsersInput | Prisma.class_participantsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.class_participantsCreateManyUsersInputEnvelope;
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
};
export type class_participantsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput> | Prisma.class_participantsCreateWithoutUsersInput[] | Prisma.class_participantsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutUsersInput | Prisma.class_participantsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.class_participantsUpsertWithWhereUniqueWithoutUsersInput | Prisma.class_participantsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.class_participantsCreateManyUsersInputEnvelope;
    set?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    disconnect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    delete?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    update?: Prisma.class_participantsUpdateWithWhereUniqueWithoutUsersInput | Prisma.class_participantsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.class_participantsUpdateManyWithWhereWithoutUsersInput | Prisma.class_participantsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
};
export type class_participantsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput> | Prisma.class_participantsCreateWithoutUsersInput[] | Prisma.class_participantsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutUsersInput | Prisma.class_participantsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.class_participantsUpsertWithWhereUniqueWithoutUsersInput | Prisma.class_participantsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.class_participantsCreateManyUsersInputEnvelope;
    set?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    disconnect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    delete?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    update?: Prisma.class_participantsUpdateWithWhereUniqueWithoutUsersInput | Prisma.class_participantsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.class_participantsUpdateManyWithWhereWithoutUsersInput | Prisma.class_participantsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
};
export type class_participantsCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput> | Prisma.class_participantsCreateWithoutClassesInput[] | Prisma.class_participantsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutClassesInput | Prisma.class_participantsCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.class_participantsCreateManyClassesInputEnvelope;
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
};
export type class_participantsUncheckedCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput> | Prisma.class_participantsCreateWithoutClassesInput[] | Prisma.class_participantsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutClassesInput | Prisma.class_participantsCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.class_participantsCreateManyClassesInputEnvelope;
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
};
export type class_participantsUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput> | Prisma.class_participantsCreateWithoutClassesInput[] | Prisma.class_participantsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutClassesInput | Prisma.class_participantsCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.class_participantsUpsertWithWhereUniqueWithoutClassesInput | Prisma.class_participantsUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.class_participantsCreateManyClassesInputEnvelope;
    set?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    disconnect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    delete?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    update?: Prisma.class_participantsUpdateWithWhereUniqueWithoutClassesInput | Prisma.class_participantsUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.class_participantsUpdateManyWithWhereWithoutClassesInput | Prisma.class_participantsUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
};
export type class_participantsUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput> | Prisma.class_participantsCreateWithoutClassesInput[] | Prisma.class_participantsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.class_participantsCreateOrConnectWithoutClassesInput | Prisma.class_participantsCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.class_participantsUpsertWithWhereUniqueWithoutClassesInput | Prisma.class_participantsUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.class_participantsCreateManyClassesInputEnvelope;
    set?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    disconnect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    delete?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    connect?: Prisma.class_participantsWhereUniqueInput | Prisma.class_participantsWhereUniqueInput[];
    update?: Prisma.class_participantsUpdateWithWhereUniqueWithoutClassesInput | Prisma.class_participantsUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.class_participantsUpdateManyWithWhereWithoutClassesInput | Prisma.class_participantsUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
};
export type class_participantsCreateWithoutUsersInput = {
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
    classes?: Prisma.classesCreateNestedOneWithoutClass_participantsInput;
};
export type class_participantsUncheckedCreateWithoutUsersInput = {
    participant_id?: number;
    class_id?: number | null;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsCreateOrConnectWithoutUsersInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput>;
};
export type class_participantsCreateManyUsersInputEnvelope = {
    data: Prisma.class_participantsCreateManyUsersInput | Prisma.class_participantsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type class_participantsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_participantsUpdateWithoutUsersInput, Prisma.class_participantsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.class_participantsCreateWithoutUsersInput, Prisma.class_participantsUncheckedCreateWithoutUsersInput>;
};
export type class_participantsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_participantsUpdateWithoutUsersInput, Prisma.class_participantsUncheckedUpdateWithoutUsersInput>;
};
export type class_participantsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.class_participantsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_participantsUpdateManyMutationInput, Prisma.class_participantsUncheckedUpdateManyWithoutUsersInput>;
};
export type class_participantsScalarWhereInput = {
    AND?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
    OR?: Prisma.class_participantsScalarWhereInput[];
    NOT?: Prisma.class_participantsScalarWhereInput | Prisma.class_participantsScalarWhereInput[];
    participant_id?: Prisma.IntFilter<"class_participants"> | number;
    class_id?: Prisma.IntNullableFilter<"class_participants"> | number | null;
    user_id?: Prisma.IntFilter<"class_participants"> | number;
    attendance_status?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    feedback?: Prisma.StringNullableFilter<"class_participants"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_participants"> | Date | string | null;
};
export type class_participantsCreateWithoutClassesInput = {
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutClass_participantsInput;
};
export type class_participantsUncheckedCreateWithoutClassesInput = {
    participant_id?: number;
    user_id: number;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsCreateOrConnectWithoutClassesInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput>;
};
export type class_participantsCreateManyClassesInputEnvelope = {
    data: Prisma.class_participantsCreateManyClassesInput | Prisma.class_participantsCreateManyClassesInput[];
    skipDuplicates?: boolean;
};
export type class_participantsUpsertWithWhereUniqueWithoutClassesInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_participantsUpdateWithoutClassesInput, Prisma.class_participantsUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.class_participantsCreateWithoutClassesInput, Prisma.class_participantsUncheckedCreateWithoutClassesInput>;
};
export type class_participantsUpdateWithWhereUniqueWithoutClassesInput = {
    where: Prisma.class_participantsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_participantsUpdateWithoutClassesInput, Prisma.class_participantsUncheckedUpdateWithoutClassesInput>;
};
export type class_participantsUpdateManyWithWhereWithoutClassesInput = {
    where: Prisma.class_participantsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_participantsUpdateManyMutationInput, Prisma.class_participantsUncheckedUpdateManyWithoutClassesInput>;
};
export type class_participantsCreateManyUsersInput = {
    participant_id?: number;
    class_id?: number | null;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsUpdateWithoutUsersInput = {
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneWithoutClass_participantsNestedInput;
};
export type class_participantsUncheckedUpdateWithoutUsersInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsUncheckedUpdateManyWithoutUsersInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsCreateManyClassesInput = {
    participant_id?: number;
    user_id: number;
    attendance_status?: string | null;
    feedback?: string | null;
    created_at?: Date | string | null;
};
export type class_participantsUpdateWithoutClassesInput = {
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutClass_participantsNestedInput;
};
export type class_participantsUncheckedUpdateWithoutClassesInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsUncheckedUpdateManyWithoutClassesInput = {
    participant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attendance_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_participantsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    participant_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    attendance_status?: boolean;
    feedback?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class_participants"]>;
export type class_participantsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    participant_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    attendance_status?: boolean;
    feedback?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class_participants"]>;
export type class_participantsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    participant_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    attendance_status?: boolean;
    feedback?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class_participants"]>;
export type class_participantsSelectScalar = {
    participant_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    attendance_status?: boolean;
    feedback?: boolean;
    created_at?: boolean;
};
export type class_participantsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"participant_id" | "class_id" | "user_id" | "attendance_status" | "feedback" | "created_at", ExtArgs["result"]["class_participants"]>;
export type class_participantsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type class_participantsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type class_participantsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.class_participants$classesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $class_participantsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "class_participants";
    objects: {
        classes: Prisma.$classesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        participant_id: number;
        class_id: number | null;
        user_id: number;
        attendance_status: string | null;
        feedback: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["class_participants"]>;
    composites: {};
};
export type class_participantsGetPayload<S extends boolean | null | undefined | class_participantsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$class_participantsPayload, S>;
export type class_participantsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<class_participantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Class_participantsCountAggregateInputType | true;
};
export interface class_participantsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['class_participants'];
        meta: {
            name: 'class_participants';
        };
    };
    findUnique<T extends class_participantsFindUniqueArgs>(args: Prisma.SelectSubset<T, class_participantsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends class_participantsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, class_participantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends class_participantsFindFirstArgs>(args?: Prisma.SelectSubset<T, class_participantsFindFirstArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends class_participantsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, class_participantsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends class_participantsFindManyArgs>(args?: Prisma.SelectSubset<T, class_participantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends class_participantsCreateArgs>(args: Prisma.SelectSubset<T, class_participantsCreateArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends class_participantsCreateManyArgs>(args?: Prisma.SelectSubset<T, class_participantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends class_participantsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, class_participantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends class_participantsDeleteArgs>(args: Prisma.SelectSubset<T, class_participantsDeleteArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends class_participantsUpdateArgs>(args: Prisma.SelectSubset<T, class_participantsUpdateArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends class_participantsDeleteManyArgs>(args?: Prisma.SelectSubset<T, class_participantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends class_participantsUpdateManyArgs>(args: Prisma.SelectSubset<T, class_participantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends class_participantsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, class_participantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends class_participantsUpsertArgs>(args: Prisma.SelectSubset<T, class_participantsUpsertArgs<ExtArgs>>): Prisma.Prisma__class_participantsClient<runtime.Types.Result.GetResult<Prisma.$class_participantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends class_participantsCountArgs>(args?: Prisma.Subset<T, class_participantsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Class_participantsCountAggregateOutputType> : number>;
    aggregate<T extends Class_participantsAggregateArgs>(args: Prisma.Subset<T, Class_participantsAggregateArgs>): Prisma.PrismaPromise<GetClass_participantsAggregateType<T>>;
    groupBy<T extends class_participantsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: class_participantsGroupByArgs['orderBy'];
    } : {
        orderBy?: class_participantsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, class_participantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_participantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: class_participantsFieldRefs;
}
export interface Prisma__class_participantsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classes<T extends Prisma.class_participants$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_participants$classesArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface class_participantsFieldRefs {
    readonly participant_id: Prisma.FieldRef<"class_participants", 'Int'>;
    readonly class_id: Prisma.FieldRef<"class_participants", 'Int'>;
    readonly user_id: Prisma.FieldRef<"class_participants", 'Int'>;
    readonly attendance_status: Prisma.FieldRef<"class_participants", 'String'>;
    readonly feedback: Prisma.FieldRef<"class_participants", 'String'>;
    readonly created_at: Prisma.FieldRef<"class_participants", 'DateTime'>;
}
export type class_participantsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where: Prisma.class_participantsWhereUniqueInput;
};
export type class_participantsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where: Prisma.class_participantsWhereUniqueInput;
};
export type class_participantsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where?: Prisma.class_participantsWhereInput;
    orderBy?: Prisma.class_participantsOrderByWithRelationInput | Prisma.class_participantsOrderByWithRelationInput[];
    cursor?: Prisma.class_participantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_participantsScalarFieldEnum | Prisma.Class_participantsScalarFieldEnum[];
};
export type class_participantsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where?: Prisma.class_participantsWhereInput;
    orderBy?: Prisma.class_participantsOrderByWithRelationInput | Prisma.class_participantsOrderByWithRelationInput[];
    cursor?: Prisma.class_participantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_participantsScalarFieldEnum | Prisma.Class_participantsScalarFieldEnum[];
};
export type class_participantsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where?: Prisma.class_participantsWhereInput;
    orderBy?: Prisma.class_participantsOrderByWithRelationInput | Prisma.class_participantsOrderByWithRelationInput[];
    cursor?: Prisma.class_participantsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_participantsScalarFieldEnum | Prisma.Class_participantsScalarFieldEnum[];
};
export type class_participantsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_participantsCreateInput, Prisma.class_participantsUncheckedCreateInput>;
};
export type class_participantsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.class_participantsCreateManyInput | Prisma.class_participantsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type class_participantsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    data: Prisma.class_participantsCreateManyInput | Prisma.class_participantsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.class_participantsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type class_participantsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_participantsUpdateInput, Prisma.class_participantsUncheckedUpdateInput>;
    where: Prisma.class_participantsWhereUniqueInput;
};
export type class_participantsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.class_participantsUpdateManyMutationInput, Prisma.class_participantsUncheckedUpdateManyInput>;
    where?: Prisma.class_participantsWhereInput;
    limit?: number;
};
export type class_participantsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_participantsUpdateManyMutationInput, Prisma.class_participantsUncheckedUpdateManyInput>;
    where?: Prisma.class_participantsWhereInput;
    limit?: number;
    include?: Prisma.class_participantsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type class_participantsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where: Prisma.class_participantsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_participantsCreateInput, Prisma.class_participantsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.class_participantsUpdateInput, Prisma.class_participantsUncheckedUpdateInput>;
};
export type class_participantsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
    where: Prisma.class_participantsWhereUniqueInput;
};
export type class_participantsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_participantsWhereInput;
    limit?: number;
};
export type class_participants$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.classesSelect<ExtArgs> | null;
    omit?: Prisma.classesOmit<ExtArgs> | null;
    include?: Prisma.classesInclude<ExtArgs> | null;
    where?: Prisma.classesWhereInput;
};
export type class_participantsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_participantsSelect<ExtArgs> | null;
    omit?: Prisma.class_participantsOmit<ExtArgs> | null;
    include?: Prisma.class_participantsInclude<ExtArgs> | null;
};
export {};
