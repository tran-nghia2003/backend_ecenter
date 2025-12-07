import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_utilitiesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_utilitiesPayload>;
export type AggregateUser_utilities = {
    _count: User_utilitiesCountAggregateOutputType | null;
    _avg: User_utilitiesAvgAggregateOutputType | null;
    _sum: User_utilitiesSumAggregateOutputType | null;
    _min: User_utilitiesMinAggregateOutputType | null;
    _max: User_utilitiesMaxAggregateOutputType | null;
};
export type User_utilitiesAvgAggregateOutputType = {
    user_id: number | null;
    utility_id: number | null;
};
export type User_utilitiesSumAggregateOutputType = {
    user_id: number | null;
    utility_id: number | null;
};
export type User_utilitiesMinAggregateOutputType = {
    user_id: number | null;
    utility_id: number | null;
    is_enabled: boolean | null;
    pinned: boolean | null;
    customized_label: string | null;
    updated_at: Date | null;
};
export type User_utilitiesMaxAggregateOutputType = {
    user_id: number | null;
    utility_id: number | null;
    is_enabled: boolean | null;
    pinned: boolean | null;
    customized_label: string | null;
    updated_at: Date | null;
};
export type User_utilitiesCountAggregateOutputType = {
    user_id: number;
    utility_id: number;
    is_enabled: number;
    pinned: number;
    customized_label: number;
    updated_at: number;
    _all: number;
};
export type User_utilitiesAvgAggregateInputType = {
    user_id?: true;
    utility_id?: true;
};
export type User_utilitiesSumAggregateInputType = {
    user_id?: true;
    utility_id?: true;
};
export type User_utilitiesMinAggregateInputType = {
    user_id?: true;
    utility_id?: true;
    is_enabled?: true;
    pinned?: true;
    customized_label?: true;
    updated_at?: true;
};
export type User_utilitiesMaxAggregateInputType = {
    user_id?: true;
    utility_id?: true;
    is_enabled?: true;
    pinned?: true;
    customized_label?: true;
    updated_at?: true;
};
export type User_utilitiesCountAggregateInputType = {
    user_id?: true;
    utility_id?: true;
    is_enabled?: true;
    pinned?: true;
    customized_label?: true;
    updated_at?: true;
    _all?: true;
};
export type User_utilitiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithRelationInput | Prisma.user_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.user_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_utilitiesCountAggregateInputType;
    _avg?: User_utilitiesAvgAggregateInputType;
    _sum?: User_utilitiesSumAggregateInputType;
    _min?: User_utilitiesMinAggregateInputType;
    _max?: User_utilitiesMaxAggregateInputType;
};
export type GetUser_utilitiesAggregateType<T extends User_utilitiesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_utilities]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_utilities[P]> : Prisma.GetScalarType<T[P], AggregateUser_utilities[P]>;
};
export type user_utilitiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithAggregationInput | Prisma.user_utilitiesOrderByWithAggregationInput[];
    by: Prisma.User_utilitiesScalarFieldEnum[] | Prisma.User_utilitiesScalarFieldEnum;
    having?: Prisma.user_utilitiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_utilitiesCountAggregateInputType | true;
    _avg?: User_utilitiesAvgAggregateInputType;
    _sum?: User_utilitiesSumAggregateInputType;
    _min?: User_utilitiesMinAggregateInputType;
    _max?: User_utilitiesMaxAggregateInputType;
};
export type User_utilitiesGroupByOutputType = {
    user_id: number;
    utility_id: number;
    is_enabled: boolean | null;
    pinned: boolean | null;
    customized_label: string | null;
    updated_at: Date | null;
    _count: User_utilitiesCountAggregateOutputType | null;
    _avg: User_utilitiesAvgAggregateOutputType | null;
    _sum: User_utilitiesSumAggregateOutputType | null;
    _min: User_utilitiesMinAggregateOutputType | null;
    _max: User_utilitiesMaxAggregateOutputType | null;
};
type GetUser_utilitiesGroupByPayload<T extends user_utilitiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_utilitiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_utilitiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_utilitiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_utilitiesGroupByOutputType[P]>;
}>>;
export type user_utilitiesWhereInput = {
    AND?: Prisma.user_utilitiesWhereInput | Prisma.user_utilitiesWhereInput[];
    OR?: Prisma.user_utilitiesWhereInput[];
    NOT?: Prisma.user_utilitiesWhereInput | Prisma.user_utilitiesWhereInput[];
    user_id?: Prisma.IntFilter<"user_utilities"> | number;
    utility_id?: Prisma.IntFilter<"user_utilities"> | number;
    is_enabled?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    pinned?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    customized_label?: Prisma.StringNullableFilter<"user_utilities"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_utilities"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    app_utilities?: Prisma.XOR<Prisma.App_utilitiesScalarRelationFilter, Prisma.app_utilitiesWhereInput>;
};
export type user_utilitiesOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrderInput | Prisma.SortOrder;
    pinned?: Prisma.SortOrderInput | Prisma.SortOrder;
    customized_label?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    app_utilities?: Prisma.app_utilitiesOrderByWithRelationInput;
};
export type user_utilitiesWhereUniqueInput = Prisma.AtLeast<{
    user_id_utility_id?: Prisma.user_utilitiesUser_idUtility_idCompoundUniqueInput;
    AND?: Prisma.user_utilitiesWhereInput | Prisma.user_utilitiesWhereInput[];
    OR?: Prisma.user_utilitiesWhereInput[];
    NOT?: Prisma.user_utilitiesWhereInput | Prisma.user_utilitiesWhereInput[];
    user_id?: Prisma.IntFilter<"user_utilities"> | number;
    utility_id?: Prisma.IntFilter<"user_utilities"> | number;
    is_enabled?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    pinned?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    customized_label?: Prisma.StringNullableFilter<"user_utilities"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_utilities"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    app_utilities?: Prisma.XOR<Prisma.App_utilitiesScalarRelationFilter, Prisma.app_utilitiesWhereInput>;
}, "user_id_utility_id">;
export type user_utilitiesOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrderInput | Prisma.SortOrder;
    pinned?: Prisma.SortOrderInput | Prisma.SortOrder;
    customized_label?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.user_utilitiesCountOrderByAggregateInput;
    _avg?: Prisma.user_utilitiesAvgOrderByAggregateInput;
    _max?: Prisma.user_utilitiesMaxOrderByAggregateInput;
    _min?: Prisma.user_utilitiesMinOrderByAggregateInput;
    _sum?: Prisma.user_utilitiesSumOrderByAggregateInput;
};
export type user_utilitiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_utilitiesScalarWhereWithAggregatesInput | Prisma.user_utilitiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_utilitiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_utilitiesScalarWhereWithAggregatesInput | Prisma.user_utilitiesScalarWhereWithAggregatesInput[];
    user_id?: Prisma.IntWithAggregatesFilter<"user_utilities"> | number;
    utility_id?: Prisma.IntWithAggregatesFilter<"user_utilities"> | number;
    is_enabled?: Prisma.BoolNullableWithAggregatesFilter<"user_utilities"> | boolean | null;
    pinned?: Prisma.BoolNullableWithAggregatesFilter<"user_utilities"> | boolean | null;
    customized_label?: Prisma.StringNullableWithAggregatesFilter<"user_utilities"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_utilities"> | Date | string | null;
};
export type user_utilitiesCreateInput = {
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutUser_utilitiesInput;
    app_utilities: Prisma.app_utilitiesCreateNestedOneWithoutUser_utilitiesInput;
};
export type user_utilitiesUncheckedCreateInput = {
    user_id: number;
    utility_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesUpdateInput = {
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_utilitiesNestedInput;
    app_utilities?: Prisma.app_utilitiesUpdateOneRequiredWithoutUser_utilitiesNestedInput;
};
export type user_utilitiesUncheckedUpdateInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesCreateManyInput = {
    user_id: number;
    utility_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesUpdateManyMutationInput = {
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesUncheckedUpdateManyInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type User_utilitiesListRelationFilter = {
    every?: Prisma.user_utilitiesWhereInput;
    some?: Prisma.user_utilitiesWhereInput;
    none?: Prisma.user_utilitiesWhereInput;
};
export type user_utilitiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_utilitiesUser_idUtility_idCompoundUniqueInput = {
    user_id: number;
    utility_id: number;
};
export type user_utilitiesCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    pinned?: Prisma.SortOrder;
    customized_label?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_utilitiesAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
};
export type user_utilitiesMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    pinned?: Prisma.SortOrder;
    customized_label?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_utilitiesMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
    is_enabled?: Prisma.SortOrder;
    pinned?: Prisma.SortOrder;
    customized_label?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type user_utilitiesSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    utility_id?: Prisma.SortOrder;
};
export type user_utilitiesCreateNestedManyWithoutApp_utilitiesInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput> | Prisma.user_utilitiesCreateWithoutApp_utilitiesInput[] | Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput | Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput[];
    createMany?: Prisma.user_utilitiesCreateManyApp_utilitiesInputEnvelope;
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
};
export type user_utilitiesUncheckedCreateNestedManyWithoutApp_utilitiesInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput> | Prisma.user_utilitiesCreateWithoutApp_utilitiesInput[] | Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput | Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput[];
    createMany?: Prisma.user_utilitiesCreateManyApp_utilitiesInputEnvelope;
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
};
export type user_utilitiesUpdateManyWithoutApp_utilitiesNestedInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput> | Prisma.user_utilitiesCreateWithoutApp_utilitiesInput[] | Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput | Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput[];
    upsert?: Prisma.user_utilitiesUpsertWithWhereUniqueWithoutApp_utilitiesInput | Prisma.user_utilitiesUpsertWithWhereUniqueWithoutApp_utilitiesInput[];
    createMany?: Prisma.user_utilitiesCreateManyApp_utilitiesInputEnvelope;
    set?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    disconnect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    delete?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    update?: Prisma.user_utilitiesUpdateWithWhereUniqueWithoutApp_utilitiesInput | Prisma.user_utilitiesUpdateWithWhereUniqueWithoutApp_utilitiesInput[];
    updateMany?: Prisma.user_utilitiesUpdateManyWithWhereWithoutApp_utilitiesInput | Prisma.user_utilitiesUpdateManyWithWhereWithoutApp_utilitiesInput[];
    deleteMany?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
};
export type user_utilitiesUncheckedUpdateManyWithoutApp_utilitiesNestedInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput> | Prisma.user_utilitiesCreateWithoutApp_utilitiesInput[] | Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput | Prisma.user_utilitiesCreateOrConnectWithoutApp_utilitiesInput[];
    upsert?: Prisma.user_utilitiesUpsertWithWhereUniqueWithoutApp_utilitiesInput | Prisma.user_utilitiesUpsertWithWhereUniqueWithoutApp_utilitiesInput[];
    createMany?: Prisma.user_utilitiesCreateManyApp_utilitiesInputEnvelope;
    set?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    disconnect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    delete?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    update?: Prisma.user_utilitiesUpdateWithWhereUniqueWithoutApp_utilitiesInput | Prisma.user_utilitiesUpdateWithWhereUniqueWithoutApp_utilitiesInput[];
    updateMany?: Prisma.user_utilitiesUpdateManyWithWhereWithoutApp_utilitiesInput | Prisma.user_utilitiesUpdateManyWithWhereWithoutApp_utilitiesInput[];
    deleteMany?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
};
export type user_utilitiesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput> | Prisma.user_utilitiesCreateWithoutUsersInput[] | Prisma.user_utilitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutUsersInput | Prisma.user_utilitiesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_utilitiesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
};
export type user_utilitiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput> | Prisma.user_utilitiesCreateWithoutUsersInput[] | Prisma.user_utilitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutUsersInput | Prisma.user_utilitiesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.user_utilitiesCreateManyUsersInputEnvelope;
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
};
export type user_utilitiesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput> | Prisma.user_utilitiesCreateWithoutUsersInput[] | Prisma.user_utilitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutUsersInput | Prisma.user_utilitiesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_utilitiesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_utilitiesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_utilitiesCreateManyUsersInputEnvelope;
    set?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    disconnect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    delete?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    update?: Prisma.user_utilitiesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_utilitiesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_utilitiesUpdateManyWithWhereWithoutUsersInput | Prisma.user_utilitiesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
};
export type user_utilitiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput> | Prisma.user_utilitiesCreateWithoutUsersInput[] | Prisma.user_utilitiesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.user_utilitiesCreateOrConnectWithoutUsersInput | Prisma.user_utilitiesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.user_utilitiesUpsertWithWhereUniqueWithoutUsersInput | Prisma.user_utilitiesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.user_utilitiesCreateManyUsersInputEnvelope;
    set?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    disconnect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    delete?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    connect?: Prisma.user_utilitiesWhereUniqueInput | Prisma.user_utilitiesWhereUniqueInput[];
    update?: Prisma.user_utilitiesUpdateWithWhereUniqueWithoutUsersInput | Prisma.user_utilitiesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.user_utilitiesUpdateManyWithWhereWithoutUsersInput | Prisma.user_utilitiesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
};
export type user_utilitiesCreateWithoutApp_utilitiesInput = {
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutUser_utilitiesInput;
};
export type user_utilitiesUncheckedCreateWithoutApp_utilitiesInput = {
    user_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesCreateOrConnectWithoutApp_utilitiesInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput>;
};
export type user_utilitiesCreateManyApp_utilitiesInputEnvelope = {
    data: Prisma.user_utilitiesCreateManyApp_utilitiesInput | Prisma.user_utilitiesCreateManyApp_utilitiesInput[];
    skipDuplicates?: boolean;
};
export type user_utilitiesUpsertWithWhereUniqueWithoutApp_utilitiesInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_utilitiesUpdateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedUpdateWithoutApp_utilitiesInput>;
    create: Prisma.XOR<Prisma.user_utilitiesCreateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedCreateWithoutApp_utilitiesInput>;
};
export type user_utilitiesUpdateWithWhereUniqueWithoutApp_utilitiesInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateWithoutApp_utilitiesInput, Prisma.user_utilitiesUncheckedUpdateWithoutApp_utilitiesInput>;
};
export type user_utilitiesUpdateManyWithWhereWithoutApp_utilitiesInput = {
    where: Prisma.user_utilitiesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateManyMutationInput, Prisma.user_utilitiesUncheckedUpdateManyWithoutApp_utilitiesInput>;
};
export type user_utilitiesScalarWhereInput = {
    AND?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
    OR?: Prisma.user_utilitiesScalarWhereInput[];
    NOT?: Prisma.user_utilitiesScalarWhereInput | Prisma.user_utilitiesScalarWhereInput[];
    user_id?: Prisma.IntFilter<"user_utilities"> | number;
    utility_id?: Prisma.IntFilter<"user_utilities"> | number;
    is_enabled?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    pinned?: Prisma.BoolNullableFilter<"user_utilities"> | boolean | null;
    customized_label?: Prisma.StringNullableFilter<"user_utilities"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"user_utilities"> | Date | string | null;
};
export type user_utilitiesCreateWithoutUsersInput = {
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
    app_utilities: Prisma.app_utilitiesCreateNestedOneWithoutUser_utilitiesInput;
};
export type user_utilitiesUncheckedCreateWithoutUsersInput = {
    utility_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesCreateOrConnectWithoutUsersInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput>;
};
export type user_utilitiesCreateManyUsersInputEnvelope = {
    data: Prisma.user_utilitiesCreateManyUsersInput | Prisma.user_utilitiesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type user_utilitiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_utilitiesUpdateWithoutUsersInput, Prisma.user_utilitiesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.user_utilitiesCreateWithoutUsersInput, Prisma.user_utilitiesUncheckedCreateWithoutUsersInput>;
};
export type user_utilitiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.user_utilitiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateWithoutUsersInput, Prisma.user_utilitiesUncheckedUpdateWithoutUsersInput>;
};
export type user_utilitiesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.user_utilitiesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateManyMutationInput, Prisma.user_utilitiesUncheckedUpdateManyWithoutUsersInput>;
};
export type user_utilitiesCreateManyApp_utilitiesInput = {
    user_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesUpdateWithoutApp_utilitiesInput = {
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutUser_utilitiesNestedInput;
};
export type user_utilitiesUncheckedUpdateWithoutApp_utilitiesInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesUncheckedUpdateManyWithoutApp_utilitiesInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesCreateManyUsersInput = {
    utility_id: number;
    is_enabled?: boolean | null;
    pinned?: boolean | null;
    customized_label?: string | null;
    updated_at?: Date | string | null;
};
export type user_utilitiesUpdateWithoutUsersInput = {
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    app_utilities?: Prisma.app_utilitiesUpdateOneRequiredWithoutUser_utilitiesNestedInput;
};
export type user_utilitiesUncheckedUpdateWithoutUsersInput = {
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesUncheckedUpdateManyWithoutUsersInput = {
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_enabled?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pinned?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customized_label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type user_utilitiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    utility_id?: boolean;
    is_enabled?: boolean;
    pinned?: boolean;
    customized_label?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_utilities"]>;
export type user_utilitiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    utility_id?: boolean;
    is_enabled?: boolean;
    pinned?: boolean;
    customized_label?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_utilities"]>;
export type user_utilitiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    utility_id?: boolean;
    is_enabled?: boolean;
    pinned?: boolean;
    customized_label?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_utilities"]>;
export type user_utilitiesSelectScalar = {
    user_id?: boolean;
    utility_id?: boolean;
    is_enabled?: boolean;
    pinned?: boolean;
    customized_label?: boolean;
    updated_at?: boolean;
};
export type user_utilitiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "utility_id" | "is_enabled" | "pinned" | "customized_label" | "updated_at", ExtArgs["result"]["user_utilities"]>;
export type user_utilitiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
};
export type user_utilitiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
};
export type user_utilitiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    app_utilities?: boolean | Prisma.app_utilitiesDefaultArgs<ExtArgs>;
};
export type $user_utilitiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_utilities";
    objects: {
        users: Prisma.$usersPayload<ExtArgs>;
        app_utilities: Prisma.$app_utilitiesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: number;
        utility_id: number;
        is_enabled: boolean | null;
        pinned: boolean | null;
        customized_label: string | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["user_utilities"]>;
    composites: {};
};
export type user_utilitiesGetPayload<S extends boolean | null | undefined | user_utilitiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload, S>;
export type user_utilitiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_utilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_utilitiesCountAggregateInputType | true;
};
export interface user_utilitiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_utilities'];
        meta: {
            name: 'user_utilities';
        };
    };
    findUnique<T extends user_utilitiesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_utilitiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_utilitiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_utilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_utilitiesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_utilitiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_utilitiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_utilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_utilitiesFindManyArgs>(args?: Prisma.SelectSubset<T, user_utilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_utilitiesCreateArgs>(args: Prisma.SelectSubset<T, user_utilitiesCreateArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_utilitiesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_utilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_utilitiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_utilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_utilitiesDeleteArgs>(args: Prisma.SelectSubset<T, user_utilitiesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_utilitiesUpdateArgs>(args: Prisma.SelectSubset<T, user_utilitiesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_utilitiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_utilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_utilitiesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_utilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_utilitiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_utilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_utilitiesUpsertArgs>(args: Prisma.SelectSubset<T, user_utilitiesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_utilitiesCountArgs>(args?: Prisma.Subset<T, user_utilitiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_utilitiesCountAggregateOutputType> : number>;
    aggregate<T extends User_utilitiesAggregateArgs>(args: Prisma.Subset<T, User_utilitiesAggregateArgs>): Prisma.PrismaPromise<GetUser_utilitiesAggregateType<T>>;
    groupBy<T extends user_utilitiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_utilitiesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_utilitiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_utilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_utilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_utilitiesFieldRefs;
}
export interface Prisma__user_utilitiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    app_utilities<T extends Prisma.app_utilitiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.app_utilitiesDefaultArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_utilitiesFieldRefs {
    readonly user_id: Prisma.FieldRef<"user_utilities", 'Int'>;
    readonly utility_id: Prisma.FieldRef<"user_utilities", 'Int'>;
    readonly is_enabled: Prisma.FieldRef<"user_utilities", 'Boolean'>;
    readonly pinned: Prisma.FieldRef<"user_utilities", 'Boolean'>;
    readonly customized_label: Prisma.FieldRef<"user_utilities", 'String'>;
    readonly updated_at: Prisma.FieldRef<"user_utilities", 'DateTime'>;
}
export type user_utilitiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where: Prisma.user_utilitiesWhereUniqueInput;
};
export type user_utilitiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where: Prisma.user_utilitiesWhereUniqueInput;
};
export type user_utilitiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithRelationInput | Prisma.user_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.user_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_utilitiesScalarFieldEnum | Prisma.User_utilitiesScalarFieldEnum[];
};
export type user_utilitiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithRelationInput | Prisma.user_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.user_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_utilitiesScalarFieldEnum | Prisma.User_utilitiesScalarFieldEnum[];
};
export type user_utilitiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithRelationInput | Prisma.user_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.user_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_utilitiesScalarFieldEnum | Prisma.User_utilitiesScalarFieldEnum[];
};
export type user_utilitiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_utilitiesCreateInput, Prisma.user_utilitiesUncheckedCreateInput>;
};
export type user_utilitiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_utilitiesCreateManyInput | Prisma.user_utilitiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_utilitiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    data: Prisma.user_utilitiesCreateManyInput | Prisma.user_utilitiesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_utilitiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_utilitiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateInput, Prisma.user_utilitiesUncheckedUpdateInput>;
    where: Prisma.user_utilitiesWhereUniqueInput;
};
export type user_utilitiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_utilitiesUpdateManyMutationInput, Prisma.user_utilitiesUncheckedUpdateManyInput>;
    where?: Prisma.user_utilitiesWhereInput;
    limit?: number;
};
export type user_utilitiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_utilitiesUpdateManyMutationInput, Prisma.user_utilitiesUncheckedUpdateManyInput>;
    where?: Prisma.user_utilitiesWhereInput;
    limit?: number;
    include?: Prisma.user_utilitiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_utilitiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where: Prisma.user_utilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_utilitiesCreateInput, Prisma.user_utilitiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_utilitiesUpdateInput, Prisma.user_utilitiesUncheckedUpdateInput>;
};
export type user_utilitiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where: Prisma.user_utilitiesWhereUniqueInput;
};
export type user_utilitiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_utilitiesWhereInput;
    limit?: number;
};
export type user_utilitiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
};
export {};
