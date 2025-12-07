import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type class_group_membersModel = runtime.Types.Result.DefaultSelection<Prisma.$class_group_membersPayload>;
export type AggregateClass_group_members = {
    _count: Class_group_membersCountAggregateOutputType | null;
    _avg: Class_group_membersAvgAggregateOutputType | null;
    _sum: Class_group_membersSumAggregateOutputType | null;
    _min: Class_group_membersMinAggregateOutputType | null;
    _max: Class_group_membersMaxAggregateOutputType | null;
};
export type Class_group_membersAvgAggregateOutputType = {
    member_id: number | null;
    class_group_id: number | null;
    user_id: number | null;
    reg_id: number | null;
};
export type Class_group_membersSumAggregateOutputType = {
    member_id: number | null;
    class_group_id: number | null;
    user_id: number | null;
    reg_id: number | null;
};
export type Class_group_membersMinAggregateOutputType = {
    member_id: number | null;
    class_group_id: number | null;
    user_id: number | null;
    reg_id: number | null;
    joined_at: Date | null;
    status: string | null;
};
export type Class_group_membersMaxAggregateOutputType = {
    member_id: number | null;
    class_group_id: number | null;
    user_id: number | null;
    reg_id: number | null;
    joined_at: Date | null;
    status: string | null;
};
export type Class_group_membersCountAggregateOutputType = {
    member_id: number;
    class_group_id: number;
    user_id: number;
    reg_id: number;
    joined_at: number;
    status: number;
    _all: number;
};
export type Class_group_membersAvgAggregateInputType = {
    member_id?: true;
    class_group_id?: true;
    user_id?: true;
    reg_id?: true;
};
export type Class_group_membersSumAggregateInputType = {
    member_id?: true;
    class_group_id?: true;
    user_id?: true;
    reg_id?: true;
};
export type Class_group_membersMinAggregateInputType = {
    member_id?: true;
    class_group_id?: true;
    user_id?: true;
    reg_id?: true;
    joined_at?: true;
    status?: true;
};
export type Class_group_membersMaxAggregateInputType = {
    member_id?: true;
    class_group_id?: true;
    user_id?: true;
    reg_id?: true;
    joined_at?: true;
    status?: true;
};
export type Class_group_membersCountAggregateInputType = {
    member_id?: true;
    class_group_id?: true;
    user_id?: true;
    reg_id?: true;
    joined_at?: true;
    status?: true;
    _all?: true;
};
export type Class_group_membersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithRelationInput | Prisma.class_group_membersOrderByWithRelationInput[];
    cursor?: Prisma.class_group_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Class_group_membersCountAggregateInputType;
    _avg?: Class_group_membersAvgAggregateInputType;
    _sum?: Class_group_membersSumAggregateInputType;
    _min?: Class_group_membersMinAggregateInputType;
    _max?: Class_group_membersMaxAggregateInputType;
};
export type GetClass_group_membersAggregateType<T extends Class_group_membersAggregateArgs> = {
    [P in keyof T & keyof AggregateClass_group_members]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClass_group_members[P]> : Prisma.GetScalarType<T[P], AggregateClass_group_members[P]>;
};
export type class_group_membersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithAggregationInput | Prisma.class_group_membersOrderByWithAggregationInput[];
    by: Prisma.Class_group_membersScalarFieldEnum[] | Prisma.Class_group_membersScalarFieldEnum;
    having?: Prisma.class_group_membersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Class_group_membersCountAggregateInputType | true;
    _avg?: Class_group_membersAvgAggregateInputType;
    _sum?: Class_group_membersSumAggregateInputType;
    _min?: Class_group_membersMinAggregateInputType;
    _max?: Class_group_membersMaxAggregateInputType;
};
export type Class_group_membersGroupByOutputType = {
    member_id: number;
    class_group_id: number;
    user_id: number;
    reg_id: number | null;
    joined_at: Date | null;
    status: string | null;
    _count: Class_group_membersCountAggregateOutputType | null;
    _avg: Class_group_membersAvgAggregateOutputType | null;
    _sum: Class_group_membersSumAggregateOutputType | null;
    _min: Class_group_membersMinAggregateOutputType | null;
    _max: Class_group_membersMaxAggregateOutputType | null;
};
type GetClass_group_membersGroupByPayload<T extends class_group_membersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Class_group_membersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Class_group_membersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Class_group_membersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Class_group_membersGroupByOutputType[P]>;
}>>;
export type class_group_membersWhereInput = {
    AND?: Prisma.class_group_membersWhereInput | Prisma.class_group_membersWhereInput[];
    OR?: Prisma.class_group_membersWhereInput[];
    NOT?: Prisma.class_group_membersWhereInput | Prisma.class_group_membersWhereInput[];
    member_id?: Prisma.IntFilter<"class_group_members"> | number;
    class_group_id?: Prisma.IntFilter<"class_group_members"> | number;
    user_id?: Prisma.IntFilter<"class_group_members"> | number;
    reg_id?: Prisma.IntNullableFilter<"class_group_members"> | number | null;
    joined_at?: Prisma.DateTimeNullableFilter<"class_group_members"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"class_group_members"> | string | null;
    class_group?: Prisma.XOR<Prisma.Class_groupsScalarRelationFilter, Prisma.class_groupsWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    registration?: Prisma.XOR<Prisma.RegistrationsNullableScalarRelationFilter, Prisma.registrationsWhereInput> | null;
};
export type class_group_membersOrderByWithRelationInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    joined_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    class_group?: Prisma.class_groupsOrderByWithRelationInput;
    user?: Prisma.usersOrderByWithRelationInput;
    registration?: Prisma.registrationsOrderByWithRelationInput;
};
export type class_group_membersWhereUniqueInput = Prisma.AtLeast<{
    member_id?: number;
    class_group_id_user_id?: Prisma.class_group_membersClass_group_idUser_idCompoundUniqueInput;
    AND?: Prisma.class_group_membersWhereInput | Prisma.class_group_membersWhereInput[];
    OR?: Prisma.class_group_membersWhereInput[];
    NOT?: Prisma.class_group_membersWhereInput | Prisma.class_group_membersWhereInput[];
    class_group_id?: Prisma.IntFilter<"class_group_members"> | number;
    user_id?: Prisma.IntFilter<"class_group_members"> | number;
    reg_id?: Prisma.IntNullableFilter<"class_group_members"> | number | null;
    joined_at?: Prisma.DateTimeNullableFilter<"class_group_members"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"class_group_members"> | string | null;
    class_group?: Prisma.XOR<Prisma.Class_groupsScalarRelationFilter, Prisma.class_groupsWhereInput>;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    registration?: Prisma.XOR<Prisma.RegistrationsNullableScalarRelationFilter, Prisma.registrationsWhereInput> | null;
}, "member_id" | "class_group_id_user_id">;
export type class_group_membersOrderByWithAggregationInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    joined_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.class_group_membersCountOrderByAggregateInput;
    _avg?: Prisma.class_group_membersAvgOrderByAggregateInput;
    _max?: Prisma.class_group_membersMaxOrderByAggregateInput;
    _min?: Prisma.class_group_membersMinOrderByAggregateInput;
    _sum?: Prisma.class_group_membersSumOrderByAggregateInput;
};
export type class_group_membersScalarWhereWithAggregatesInput = {
    AND?: Prisma.class_group_membersScalarWhereWithAggregatesInput | Prisma.class_group_membersScalarWhereWithAggregatesInput[];
    OR?: Prisma.class_group_membersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.class_group_membersScalarWhereWithAggregatesInput | Prisma.class_group_membersScalarWhereWithAggregatesInput[];
    member_id?: Prisma.IntWithAggregatesFilter<"class_group_members"> | number;
    class_group_id?: Prisma.IntWithAggregatesFilter<"class_group_members"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"class_group_members"> | number;
    reg_id?: Prisma.IntNullableWithAggregatesFilter<"class_group_members"> | number | null;
    joined_at?: Prisma.DateTimeNullableWithAggregatesFilter<"class_group_members"> | Date | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"class_group_members"> | string | null;
};
export type class_group_membersCreateInput = {
    joined_at?: Date | string | null;
    status?: string | null;
    class_group: Prisma.class_groupsCreateNestedOneWithoutMembersInput;
    user: Prisma.usersCreateNestedOneWithoutClass_group_membershipsInput;
    registration?: Prisma.registrationsCreateNestedOneWithoutClass_group_membersInput;
};
export type class_group_membersUncheckedCreateInput = {
    member_id?: number;
    class_group_id: number;
    user_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersUpdateInput = {
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    class_group?: Prisma.class_groupsUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.usersUpdateOneRequiredWithoutClass_group_membershipsNestedInput;
    registration?: Prisma.registrationsUpdateOneWithoutClass_group_membersNestedInput;
};
export type class_group_membersUncheckedUpdateInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersCreateManyInput = {
    member_id?: number;
    class_group_id: number;
    user_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersUpdateManyMutationInput = {
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersUncheckedUpdateManyInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Class_group_membersListRelationFilter = {
    every?: Prisma.class_group_membersWhereInput;
    some?: Prisma.class_group_membersWhereInput;
    none?: Prisma.class_group_membersWhereInput;
};
export type class_group_membersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type class_group_membersClass_group_idUser_idCompoundUniqueInput = {
    class_group_id: number;
    user_id: number;
};
export type class_group_membersCountOrderByAggregateInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrder;
    joined_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type class_group_membersAvgOrderByAggregateInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrder;
};
export type class_group_membersMaxOrderByAggregateInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrder;
    joined_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type class_group_membersMinOrderByAggregateInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrder;
    joined_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type class_group_membersSumOrderByAggregateInput = {
    member_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reg_id?: Prisma.SortOrder;
};
export type class_group_membersCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput> | Prisma.class_group_membersCreateWithoutUserInput[] | Prisma.class_group_membersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutUserInput | Prisma.class_group_membersCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.class_group_membersCreateManyUserInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput> | Prisma.class_group_membersCreateWithoutUserInput[] | Prisma.class_group_membersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutUserInput | Prisma.class_group_membersCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.class_group_membersCreateManyUserInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput> | Prisma.class_group_membersCreateWithoutUserInput[] | Prisma.class_group_membersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutUserInput | Prisma.class_group_membersCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutUserInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.class_group_membersCreateManyUserInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutUserInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutUserInput | Prisma.class_group_membersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput> | Prisma.class_group_membersCreateWithoutUserInput[] | Prisma.class_group_membersUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutUserInput | Prisma.class_group_membersCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutUserInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.class_group_membersCreateManyUserInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutUserInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutUserInput | Prisma.class_group_membersUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersCreateNestedManyWithoutClass_groupInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput> | Prisma.class_group_membersCreateWithoutClass_groupInput[] | Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput | Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput[];
    createMany?: Prisma.class_group_membersCreateManyClass_groupInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput> | Prisma.class_group_membersCreateWithoutClass_groupInput[] | Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput | Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput[];
    createMany?: Prisma.class_group_membersCreateManyClass_groupInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUpdateManyWithoutClass_groupNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput> | Prisma.class_group_membersCreateWithoutClass_groupInput[] | Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput | Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutClass_groupInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutClass_groupInput[];
    createMany?: Prisma.class_group_membersCreateManyClass_groupInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutClass_groupInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutClass_groupInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutClass_groupInput | Prisma.class_group_membersUpdateManyWithWhereWithoutClass_groupInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput> | Prisma.class_group_membersCreateWithoutClass_groupInput[] | Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput | Prisma.class_group_membersCreateOrConnectWithoutClass_groupInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutClass_groupInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutClass_groupInput[];
    createMany?: Prisma.class_group_membersCreateManyClass_groupInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutClass_groupInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutClass_groupInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutClass_groupInput | Prisma.class_group_membersUpdateManyWithWhereWithoutClass_groupInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersCreateNestedManyWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput> | Prisma.class_group_membersCreateWithoutRegistrationInput[] | Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput | Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput[];
    createMany?: Prisma.class_group_membersCreateManyRegistrationInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput> | Prisma.class_group_membersCreateWithoutRegistrationInput[] | Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput | Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput[];
    createMany?: Prisma.class_group_membersCreateManyRegistrationInputEnvelope;
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
};
export type class_group_membersUpdateManyWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput> | Prisma.class_group_membersCreateWithoutRegistrationInput[] | Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput | Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutRegistrationInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutRegistrationInput[];
    createMany?: Prisma.class_group_membersCreateManyRegistrationInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutRegistrationInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutRegistrationInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutRegistrationInput | Prisma.class_group_membersUpdateManyWithWhereWithoutRegistrationInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput> | Prisma.class_group_membersCreateWithoutRegistrationInput[] | Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput[];
    connectOrCreate?: Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput | Prisma.class_group_membersCreateOrConnectWithoutRegistrationInput[];
    upsert?: Prisma.class_group_membersUpsertWithWhereUniqueWithoutRegistrationInput | Prisma.class_group_membersUpsertWithWhereUniqueWithoutRegistrationInput[];
    createMany?: Prisma.class_group_membersCreateManyRegistrationInputEnvelope;
    set?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    disconnect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    delete?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    connect?: Prisma.class_group_membersWhereUniqueInput | Prisma.class_group_membersWhereUniqueInput[];
    update?: Prisma.class_group_membersUpdateWithWhereUniqueWithoutRegistrationInput | Prisma.class_group_membersUpdateWithWhereUniqueWithoutRegistrationInput[];
    updateMany?: Prisma.class_group_membersUpdateManyWithWhereWithoutRegistrationInput | Prisma.class_group_membersUpdateManyWithWhereWithoutRegistrationInput[];
    deleteMany?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
};
export type class_group_membersCreateWithoutUserInput = {
    joined_at?: Date | string | null;
    status?: string | null;
    class_group: Prisma.class_groupsCreateNestedOneWithoutMembersInput;
    registration?: Prisma.registrationsCreateNestedOneWithoutClass_group_membersInput;
};
export type class_group_membersUncheckedCreateWithoutUserInput = {
    member_id?: number;
    class_group_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersCreateOrConnectWithoutUserInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput>;
};
export type class_group_membersCreateManyUserInputEnvelope = {
    data: Prisma.class_group_membersCreateManyUserInput | Prisma.class_group_membersCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type class_group_membersUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_group_membersUpdateWithoutUserInput, Prisma.class_group_membersUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutUserInput, Prisma.class_group_membersUncheckedCreateWithoutUserInput>;
};
export type class_group_membersUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateWithoutUserInput, Prisma.class_group_membersUncheckedUpdateWithoutUserInput>;
};
export type class_group_membersUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.class_group_membersScalarWhereInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateManyMutationInput, Prisma.class_group_membersUncheckedUpdateManyWithoutUserInput>;
};
export type class_group_membersScalarWhereInput = {
    AND?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
    OR?: Prisma.class_group_membersScalarWhereInput[];
    NOT?: Prisma.class_group_membersScalarWhereInput | Prisma.class_group_membersScalarWhereInput[];
    member_id?: Prisma.IntFilter<"class_group_members"> | number;
    class_group_id?: Prisma.IntFilter<"class_group_members"> | number;
    user_id?: Prisma.IntFilter<"class_group_members"> | number;
    reg_id?: Prisma.IntNullableFilter<"class_group_members"> | number | null;
    joined_at?: Prisma.DateTimeNullableFilter<"class_group_members"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"class_group_members"> | string | null;
};
export type class_group_membersCreateWithoutClass_groupInput = {
    joined_at?: Date | string | null;
    status?: string | null;
    user: Prisma.usersCreateNestedOneWithoutClass_group_membershipsInput;
    registration?: Prisma.registrationsCreateNestedOneWithoutClass_group_membersInput;
};
export type class_group_membersUncheckedCreateWithoutClass_groupInput = {
    member_id?: number;
    user_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersCreateOrConnectWithoutClass_groupInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput>;
};
export type class_group_membersCreateManyClass_groupInputEnvelope = {
    data: Prisma.class_group_membersCreateManyClass_groupInput | Prisma.class_group_membersCreateManyClass_groupInput[];
    skipDuplicates?: boolean;
};
export type class_group_membersUpsertWithWhereUniqueWithoutClass_groupInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_group_membersUpdateWithoutClass_groupInput, Prisma.class_group_membersUncheckedUpdateWithoutClass_groupInput>;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutClass_groupInput, Prisma.class_group_membersUncheckedCreateWithoutClass_groupInput>;
};
export type class_group_membersUpdateWithWhereUniqueWithoutClass_groupInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateWithoutClass_groupInput, Prisma.class_group_membersUncheckedUpdateWithoutClass_groupInput>;
};
export type class_group_membersUpdateManyWithWhereWithoutClass_groupInput = {
    where: Prisma.class_group_membersScalarWhereInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateManyMutationInput, Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupInput>;
};
export type class_group_membersCreateWithoutRegistrationInput = {
    joined_at?: Date | string | null;
    status?: string | null;
    class_group: Prisma.class_groupsCreateNestedOneWithoutMembersInput;
    user: Prisma.usersCreateNestedOneWithoutClass_group_membershipsInput;
};
export type class_group_membersUncheckedCreateWithoutRegistrationInput = {
    member_id?: number;
    class_group_id: number;
    user_id: number;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersCreateOrConnectWithoutRegistrationInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput>;
};
export type class_group_membersCreateManyRegistrationInputEnvelope = {
    data: Prisma.class_group_membersCreateManyRegistrationInput | Prisma.class_group_membersCreateManyRegistrationInput[];
    skipDuplicates?: boolean;
};
export type class_group_membersUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_group_membersUpdateWithoutRegistrationInput, Prisma.class_group_membersUncheckedUpdateWithoutRegistrationInput>;
    create: Prisma.XOR<Prisma.class_group_membersCreateWithoutRegistrationInput, Prisma.class_group_membersUncheckedCreateWithoutRegistrationInput>;
};
export type class_group_membersUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: Prisma.class_group_membersWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateWithoutRegistrationInput, Prisma.class_group_membersUncheckedUpdateWithoutRegistrationInput>;
};
export type class_group_membersUpdateManyWithWhereWithoutRegistrationInput = {
    where: Prisma.class_group_membersScalarWhereInput;
    data: Prisma.XOR<Prisma.class_group_membersUpdateManyMutationInput, Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationInput>;
};
export type class_group_membersCreateManyUserInput = {
    member_id?: number;
    class_group_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersUpdateWithoutUserInput = {
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    class_group?: Prisma.class_groupsUpdateOneRequiredWithoutMembersNestedInput;
    registration?: Prisma.registrationsUpdateOneWithoutClass_group_membersNestedInput;
};
export type class_group_membersUncheckedUpdateWithoutUserInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersUncheckedUpdateManyWithoutUserInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersCreateManyClass_groupInput = {
    member_id?: number;
    user_id: number;
    reg_id?: number | null;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersUpdateWithoutClass_groupInput = {
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.usersUpdateOneRequiredWithoutClass_group_membershipsNestedInput;
    registration?: Prisma.registrationsUpdateOneWithoutClass_group_membersNestedInput;
};
export type class_group_membersUncheckedUpdateWithoutClass_groupInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersUncheckedUpdateManyWithoutClass_groupInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    reg_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersCreateManyRegistrationInput = {
    member_id?: number;
    class_group_id: number;
    user_id: number;
    joined_at?: Date | string | null;
    status?: string | null;
};
export type class_group_membersUpdateWithoutRegistrationInput = {
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    class_group?: Prisma.class_groupsUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.usersUpdateOneRequiredWithoutClass_group_membershipsNestedInput;
};
export type class_group_membersUncheckedUpdateWithoutRegistrationInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersUncheckedUpdateManyWithoutRegistrationInput = {
    member_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    joined_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type class_group_membersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    member_id?: boolean;
    class_group_id?: boolean;
    user_id?: boolean;
    reg_id?: boolean;
    joined_at?: boolean;
    status?: boolean;
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
}, ExtArgs["result"]["class_group_members"]>;
export type class_group_membersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    member_id?: boolean;
    class_group_id?: boolean;
    user_id?: boolean;
    reg_id?: boolean;
    joined_at?: boolean;
    status?: boolean;
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
}, ExtArgs["result"]["class_group_members"]>;
export type class_group_membersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    member_id?: boolean;
    class_group_id?: boolean;
    user_id?: boolean;
    reg_id?: boolean;
    joined_at?: boolean;
    status?: boolean;
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
}, ExtArgs["result"]["class_group_members"]>;
export type class_group_membersSelectScalar = {
    member_id?: boolean;
    class_group_id?: boolean;
    user_id?: boolean;
    reg_id?: boolean;
    joined_at?: boolean;
    status?: boolean;
};
export type class_group_membersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"member_id" | "class_group_id" | "user_id" | "reg_id" | "joined_at" | "status", ExtArgs["result"]["class_group_members"]>;
export type class_group_membersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
};
export type class_group_membersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
};
export type class_group_membersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class_group?: boolean | Prisma.class_groupsDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.class_group_members$registrationArgs<ExtArgs>;
};
export type $class_group_membersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "class_group_members";
    objects: {
        class_group: Prisma.$class_groupsPayload<ExtArgs>;
        user: Prisma.$usersPayload<ExtArgs>;
        registration: Prisma.$registrationsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        member_id: number;
        class_group_id: number;
        user_id: number;
        reg_id: number | null;
        joined_at: Date | null;
        status: string | null;
    }, ExtArgs["result"]["class_group_members"]>;
    composites: {};
};
export type class_group_membersGetPayload<S extends boolean | null | undefined | class_group_membersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload, S>;
export type class_group_membersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<class_group_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Class_group_membersCountAggregateInputType | true;
};
export interface class_group_membersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['class_group_members'];
        meta: {
            name: 'class_group_members';
        };
    };
    findUnique<T extends class_group_membersFindUniqueArgs>(args: Prisma.SelectSubset<T, class_group_membersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends class_group_membersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, class_group_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends class_group_membersFindFirstArgs>(args?: Prisma.SelectSubset<T, class_group_membersFindFirstArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends class_group_membersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, class_group_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends class_group_membersFindManyArgs>(args?: Prisma.SelectSubset<T, class_group_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends class_group_membersCreateArgs>(args: Prisma.SelectSubset<T, class_group_membersCreateArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends class_group_membersCreateManyArgs>(args?: Prisma.SelectSubset<T, class_group_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends class_group_membersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, class_group_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends class_group_membersDeleteArgs>(args: Prisma.SelectSubset<T, class_group_membersDeleteArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends class_group_membersUpdateArgs>(args: Prisma.SelectSubset<T, class_group_membersUpdateArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends class_group_membersDeleteManyArgs>(args?: Prisma.SelectSubset<T, class_group_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends class_group_membersUpdateManyArgs>(args: Prisma.SelectSubset<T, class_group_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends class_group_membersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, class_group_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends class_group_membersUpsertArgs>(args: Prisma.SelectSubset<T, class_group_membersUpsertArgs<ExtArgs>>): Prisma.Prisma__class_group_membersClient<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends class_group_membersCountArgs>(args?: Prisma.Subset<T, class_group_membersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Class_group_membersCountAggregateOutputType> : number>;
    aggregate<T extends Class_group_membersAggregateArgs>(args: Prisma.Subset<T, Class_group_membersAggregateArgs>): Prisma.PrismaPromise<GetClass_group_membersAggregateType<T>>;
    groupBy<T extends class_group_membersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: class_group_membersGroupByArgs['orderBy'];
    } : {
        orderBy?: class_group_membersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, class_group_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_group_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: class_group_membersFieldRefs;
}
export interface Prisma__class_group_membersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class_group<T extends Prisma.class_groupsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groupsDefaultArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registration<T extends Prisma.class_group_members$registrationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_group_members$registrationArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface class_group_membersFieldRefs {
    readonly member_id: Prisma.FieldRef<"class_group_members", 'Int'>;
    readonly class_group_id: Prisma.FieldRef<"class_group_members", 'Int'>;
    readonly user_id: Prisma.FieldRef<"class_group_members", 'Int'>;
    readonly reg_id: Prisma.FieldRef<"class_group_members", 'Int'>;
    readonly joined_at: Prisma.FieldRef<"class_group_members", 'DateTime'>;
    readonly status: Prisma.FieldRef<"class_group_members", 'String'>;
}
export type class_group_membersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where: Prisma.class_group_membersWhereUniqueInput;
};
export type class_group_membersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where: Prisma.class_group_membersWhereUniqueInput;
};
export type class_group_membersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithRelationInput | Prisma.class_group_membersOrderByWithRelationInput[];
    cursor?: Prisma.class_group_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_group_membersScalarFieldEnum | Prisma.Class_group_membersScalarFieldEnum[];
};
export type class_group_membersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithRelationInput | Prisma.class_group_membersOrderByWithRelationInput[];
    cursor?: Prisma.class_group_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_group_membersScalarFieldEnum | Prisma.Class_group_membersScalarFieldEnum[];
};
export type class_group_membersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithRelationInput | Prisma.class_group_membersOrderByWithRelationInput[];
    cursor?: Prisma.class_group_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_group_membersScalarFieldEnum | Prisma.Class_group_membersScalarFieldEnum[];
};
export type class_group_membersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_group_membersCreateInput, Prisma.class_group_membersUncheckedCreateInput>;
};
export type class_group_membersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.class_group_membersCreateManyInput | Prisma.class_group_membersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type class_group_membersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    data: Prisma.class_group_membersCreateManyInput | Prisma.class_group_membersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.class_group_membersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type class_group_membersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_group_membersUpdateInput, Prisma.class_group_membersUncheckedUpdateInput>;
    where: Prisma.class_group_membersWhereUniqueInput;
};
export type class_group_membersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.class_group_membersUpdateManyMutationInput, Prisma.class_group_membersUncheckedUpdateManyInput>;
    where?: Prisma.class_group_membersWhereInput;
    limit?: number;
};
export type class_group_membersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_group_membersUpdateManyMutationInput, Prisma.class_group_membersUncheckedUpdateManyInput>;
    where?: Prisma.class_group_membersWhereInput;
    limit?: number;
    include?: Prisma.class_group_membersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type class_group_membersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where: Prisma.class_group_membersWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_group_membersCreateInput, Prisma.class_group_membersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.class_group_membersUpdateInput, Prisma.class_group_membersUncheckedUpdateInput>;
};
export type class_group_membersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where: Prisma.class_group_membersWhereUniqueInput;
};
export type class_group_membersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_group_membersWhereInput;
    limit?: number;
};
export type class_group_members$registrationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where?: Prisma.registrationsWhereInput;
};
export type class_group_membersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
};
export {};
