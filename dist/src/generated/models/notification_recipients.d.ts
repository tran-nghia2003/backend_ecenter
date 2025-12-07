import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type notification_recipientsModel = runtime.Types.Result.DefaultSelection<Prisma.$notification_recipientsPayload>;
export type AggregateNotification_recipients = {
    _count: Notification_recipientsCountAggregateOutputType | null;
    _avg: Notification_recipientsAvgAggregateOutputType | null;
    _sum: Notification_recipientsSumAggregateOutputType | null;
    _min: Notification_recipientsMinAggregateOutputType | null;
    _max: Notification_recipientsMaxAggregateOutputType | null;
};
export type Notification_recipientsAvgAggregateOutputType = {
    recipient_id: number | null;
    notification_id: number | null;
    user_id: number | null;
};
export type Notification_recipientsSumAggregateOutputType = {
    recipient_id: number | null;
    notification_id: number | null;
    user_id: number | null;
};
export type Notification_recipientsMinAggregateOutputType = {
    recipient_id: number | null;
    notification_id: number | null;
    user_id: number | null;
    is_read: boolean | null;
    read_at: Date | null;
    delivered_at: Date | null;
};
export type Notification_recipientsMaxAggregateOutputType = {
    recipient_id: number | null;
    notification_id: number | null;
    user_id: number | null;
    is_read: boolean | null;
    read_at: Date | null;
    delivered_at: Date | null;
};
export type Notification_recipientsCountAggregateOutputType = {
    recipient_id: number;
    notification_id: number;
    user_id: number;
    is_read: number;
    read_at: number;
    delivered_at: number;
    _all: number;
};
export type Notification_recipientsAvgAggregateInputType = {
    recipient_id?: true;
    notification_id?: true;
    user_id?: true;
};
export type Notification_recipientsSumAggregateInputType = {
    recipient_id?: true;
    notification_id?: true;
    user_id?: true;
};
export type Notification_recipientsMinAggregateInputType = {
    recipient_id?: true;
    notification_id?: true;
    user_id?: true;
    is_read?: true;
    read_at?: true;
    delivered_at?: true;
};
export type Notification_recipientsMaxAggregateInputType = {
    recipient_id?: true;
    notification_id?: true;
    user_id?: true;
    is_read?: true;
    read_at?: true;
    delivered_at?: true;
};
export type Notification_recipientsCountAggregateInputType = {
    recipient_id?: true;
    notification_id?: true;
    user_id?: true;
    is_read?: true;
    read_at?: true;
    delivered_at?: true;
    _all?: true;
};
export type Notification_recipientsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_recipientsWhereInput;
    orderBy?: Prisma.notification_recipientsOrderByWithRelationInput | Prisma.notification_recipientsOrderByWithRelationInput[];
    cursor?: Prisma.notification_recipientsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Notification_recipientsCountAggregateInputType;
    _avg?: Notification_recipientsAvgAggregateInputType;
    _sum?: Notification_recipientsSumAggregateInputType;
    _min?: Notification_recipientsMinAggregateInputType;
    _max?: Notification_recipientsMaxAggregateInputType;
};
export type GetNotification_recipientsAggregateType<T extends Notification_recipientsAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification_recipients]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification_recipients[P]> : Prisma.GetScalarType<T[P], AggregateNotification_recipients[P]>;
};
export type notification_recipientsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_recipientsWhereInput;
    orderBy?: Prisma.notification_recipientsOrderByWithAggregationInput | Prisma.notification_recipientsOrderByWithAggregationInput[];
    by: Prisma.Notification_recipientsScalarFieldEnum[] | Prisma.Notification_recipientsScalarFieldEnum;
    having?: Prisma.notification_recipientsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Notification_recipientsCountAggregateInputType | true;
    _avg?: Notification_recipientsAvgAggregateInputType;
    _sum?: Notification_recipientsSumAggregateInputType;
    _min?: Notification_recipientsMinAggregateInputType;
    _max?: Notification_recipientsMaxAggregateInputType;
};
export type Notification_recipientsGroupByOutputType = {
    recipient_id: number;
    notification_id: number;
    user_id: number;
    is_read: boolean | null;
    read_at: Date | null;
    delivered_at: Date | null;
    _count: Notification_recipientsCountAggregateOutputType | null;
    _avg: Notification_recipientsAvgAggregateOutputType | null;
    _sum: Notification_recipientsSumAggregateOutputType | null;
    _min: Notification_recipientsMinAggregateOutputType | null;
    _max: Notification_recipientsMaxAggregateOutputType | null;
};
type GetNotification_recipientsGroupByPayload<T extends notification_recipientsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Notification_recipientsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Notification_recipientsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Notification_recipientsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Notification_recipientsGroupByOutputType[P]>;
}>>;
export type notification_recipientsWhereInput = {
    AND?: Prisma.notification_recipientsWhereInput | Prisma.notification_recipientsWhereInput[];
    OR?: Prisma.notification_recipientsWhereInput[];
    NOT?: Prisma.notification_recipientsWhereInput | Prisma.notification_recipientsWhereInput[];
    recipient_id?: Prisma.IntFilter<"notification_recipients"> | number;
    notification_id?: Prisma.IntFilter<"notification_recipients"> | number;
    user_id?: Prisma.IntFilter<"notification_recipients"> | number;
    is_read?: Prisma.BoolNullableFilter<"notification_recipients"> | boolean | null;
    read_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
    notifications?: Prisma.XOR<Prisma.NotificationsScalarRelationFilter, Prisma.notificationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type notification_recipientsOrderByWithRelationInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrderInput | Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    notifications?: Prisma.notificationsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type notification_recipientsWhereUniqueInput = Prisma.AtLeast<{
    recipient_id?: number;
    AND?: Prisma.notification_recipientsWhereInput | Prisma.notification_recipientsWhereInput[];
    OR?: Prisma.notification_recipientsWhereInput[];
    NOT?: Prisma.notification_recipientsWhereInput | Prisma.notification_recipientsWhereInput[];
    notification_id?: Prisma.IntFilter<"notification_recipients"> | number;
    user_id?: Prisma.IntFilter<"notification_recipients"> | number;
    is_read?: Prisma.BoolNullableFilter<"notification_recipients"> | boolean | null;
    read_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
    notifications?: Prisma.XOR<Prisma.NotificationsScalarRelationFilter, Prisma.notificationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "recipient_id">;
export type notification_recipientsOrderByWithAggregationInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrderInput | Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.notification_recipientsCountOrderByAggregateInput;
    _avg?: Prisma.notification_recipientsAvgOrderByAggregateInput;
    _max?: Prisma.notification_recipientsMaxOrderByAggregateInput;
    _min?: Prisma.notification_recipientsMinOrderByAggregateInput;
    _sum?: Prisma.notification_recipientsSumOrderByAggregateInput;
};
export type notification_recipientsScalarWhereWithAggregatesInput = {
    AND?: Prisma.notification_recipientsScalarWhereWithAggregatesInput | Prisma.notification_recipientsScalarWhereWithAggregatesInput[];
    OR?: Prisma.notification_recipientsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.notification_recipientsScalarWhereWithAggregatesInput | Prisma.notification_recipientsScalarWhereWithAggregatesInput[];
    recipient_id?: Prisma.IntWithAggregatesFilter<"notification_recipients"> | number;
    notification_id?: Prisma.IntWithAggregatesFilter<"notification_recipients"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"notification_recipients"> | number;
    is_read?: Prisma.BoolNullableWithAggregatesFilter<"notification_recipients"> | boolean | null;
    read_at?: Prisma.DateTimeNullableWithAggregatesFilter<"notification_recipients"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"notification_recipients"> | Date | string | null;
};
export type notification_recipientsCreateInput = {
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
    notifications: Prisma.notificationsCreateNestedOneWithoutNotification_recipientsInput;
    users?: Prisma.usersCreateNestedOneWithoutNotification_recipientsInput;
};
export type notification_recipientsUncheckedCreateInput = {
    recipient_id?: number;
    notification_id: number;
    user_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsUpdateInput = {
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notifications?: Prisma.notificationsUpdateOneRequiredWithoutNotification_recipientsNestedInput;
    users?: Prisma.usersUpdateOneWithoutNotification_recipientsNestedInput;
};
export type notification_recipientsUncheckedUpdateInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsCreateManyInput = {
    recipient_id?: number;
    notification_id: number;
    user_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsUpdateManyMutationInput = {
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsUncheckedUpdateManyInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Notification_recipientsListRelationFilter = {
    every?: Prisma.notification_recipientsWhereInput;
    some?: Prisma.notification_recipientsWhereInput;
    none?: Prisma.notification_recipientsWhereInput;
};
export type notification_recipientsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type notification_recipientsCountOrderByAggregateInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type notification_recipientsAvgOrderByAggregateInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type notification_recipientsMaxOrderByAggregateInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type notification_recipientsMinOrderByAggregateInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
};
export type notification_recipientsSumOrderByAggregateInput = {
    recipient_id?: Prisma.SortOrder;
    notification_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type notification_recipientsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput> | Prisma.notification_recipientsCreateWithoutUsersInput[] | Prisma.notification_recipientsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutUsersInput | Prisma.notification_recipientsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.notification_recipientsCreateManyUsersInputEnvelope;
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
};
export type notification_recipientsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput> | Prisma.notification_recipientsCreateWithoutUsersInput[] | Prisma.notification_recipientsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutUsersInput | Prisma.notification_recipientsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.notification_recipientsCreateManyUsersInputEnvelope;
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
};
export type notification_recipientsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput> | Prisma.notification_recipientsCreateWithoutUsersInput[] | Prisma.notification_recipientsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutUsersInput | Prisma.notification_recipientsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.notification_recipientsUpsertWithWhereUniqueWithoutUsersInput | Prisma.notification_recipientsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.notification_recipientsCreateManyUsersInputEnvelope;
    set?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    disconnect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    delete?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    update?: Prisma.notification_recipientsUpdateWithWhereUniqueWithoutUsersInput | Prisma.notification_recipientsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.notification_recipientsUpdateManyWithWhereWithoutUsersInput | Prisma.notification_recipientsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
};
export type notification_recipientsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput> | Prisma.notification_recipientsCreateWithoutUsersInput[] | Prisma.notification_recipientsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutUsersInput | Prisma.notification_recipientsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.notification_recipientsUpsertWithWhereUniqueWithoutUsersInput | Prisma.notification_recipientsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.notification_recipientsCreateManyUsersInputEnvelope;
    set?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    disconnect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    delete?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    update?: Prisma.notification_recipientsUpdateWithWhereUniqueWithoutUsersInput | Prisma.notification_recipientsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.notification_recipientsUpdateManyWithWhereWithoutUsersInput | Prisma.notification_recipientsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
};
export type notification_recipientsCreateNestedManyWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput> | Prisma.notification_recipientsCreateWithoutNotificationsInput[] | Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput | Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput[];
    createMany?: Prisma.notification_recipientsCreateManyNotificationsInputEnvelope;
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
};
export type notification_recipientsUncheckedCreateNestedManyWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput> | Prisma.notification_recipientsCreateWithoutNotificationsInput[] | Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput | Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput[];
    createMany?: Prisma.notification_recipientsCreateManyNotificationsInputEnvelope;
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
};
export type notification_recipientsUpdateManyWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput> | Prisma.notification_recipientsCreateWithoutNotificationsInput[] | Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput | Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput[];
    upsert?: Prisma.notification_recipientsUpsertWithWhereUniqueWithoutNotificationsInput | Prisma.notification_recipientsUpsertWithWhereUniqueWithoutNotificationsInput[];
    createMany?: Prisma.notification_recipientsCreateManyNotificationsInputEnvelope;
    set?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    disconnect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    delete?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    update?: Prisma.notification_recipientsUpdateWithWhereUniqueWithoutNotificationsInput | Prisma.notification_recipientsUpdateWithWhereUniqueWithoutNotificationsInput[];
    updateMany?: Prisma.notification_recipientsUpdateManyWithWhereWithoutNotificationsInput | Prisma.notification_recipientsUpdateManyWithWhereWithoutNotificationsInput[];
    deleteMany?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
};
export type notification_recipientsUncheckedUpdateManyWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput> | Prisma.notification_recipientsCreateWithoutNotificationsInput[] | Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput[];
    connectOrCreate?: Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput | Prisma.notification_recipientsCreateOrConnectWithoutNotificationsInput[];
    upsert?: Prisma.notification_recipientsUpsertWithWhereUniqueWithoutNotificationsInput | Prisma.notification_recipientsUpsertWithWhereUniqueWithoutNotificationsInput[];
    createMany?: Prisma.notification_recipientsCreateManyNotificationsInputEnvelope;
    set?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    disconnect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    delete?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    connect?: Prisma.notification_recipientsWhereUniqueInput | Prisma.notification_recipientsWhereUniqueInput[];
    update?: Prisma.notification_recipientsUpdateWithWhereUniqueWithoutNotificationsInput | Prisma.notification_recipientsUpdateWithWhereUniqueWithoutNotificationsInput[];
    updateMany?: Prisma.notification_recipientsUpdateManyWithWhereWithoutNotificationsInput | Prisma.notification_recipientsUpdateManyWithWhereWithoutNotificationsInput[];
    deleteMany?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
};
export type notification_recipientsCreateWithoutUsersInput = {
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
    notifications: Prisma.notificationsCreateNestedOneWithoutNotification_recipientsInput;
};
export type notification_recipientsUncheckedCreateWithoutUsersInput = {
    recipient_id?: number;
    notification_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsCreateOrConnectWithoutUsersInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput>;
};
export type notification_recipientsCreateManyUsersInputEnvelope = {
    data: Prisma.notification_recipientsCreateManyUsersInput | Prisma.notification_recipientsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type notification_recipientsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notification_recipientsUpdateWithoutUsersInput, Prisma.notification_recipientsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.notification_recipientsCreateWithoutUsersInput, Prisma.notification_recipientsUncheckedCreateWithoutUsersInput>;
};
export type notification_recipientsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateWithoutUsersInput, Prisma.notification_recipientsUncheckedUpdateWithoutUsersInput>;
};
export type notification_recipientsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.notification_recipientsScalarWhereInput;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateManyMutationInput, Prisma.notification_recipientsUncheckedUpdateManyWithoutUsersInput>;
};
export type notification_recipientsScalarWhereInput = {
    AND?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
    OR?: Prisma.notification_recipientsScalarWhereInput[];
    NOT?: Prisma.notification_recipientsScalarWhereInput | Prisma.notification_recipientsScalarWhereInput[];
    recipient_id?: Prisma.IntFilter<"notification_recipients"> | number;
    notification_id?: Prisma.IntFilter<"notification_recipients"> | number;
    user_id?: Prisma.IntFilter<"notification_recipients"> | number;
    is_read?: Prisma.BoolNullableFilter<"notification_recipients"> | boolean | null;
    read_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"notification_recipients"> | Date | string | null;
};
export type notification_recipientsCreateWithoutNotificationsInput = {
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutNotification_recipientsInput;
};
export type notification_recipientsUncheckedCreateWithoutNotificationsInput = {
    recipient_id?: number;
    user_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput>;
};
export type notification_recipientsCreateManyNotificationsInputEnvelope = {
    data: Prisma.notification_recipientsCreateManyNotificationsInput | Prisma.notification_recipientsCreateManyNotificationsInput[];
    skipDuplicates?: boolean;
};
export type notification_recipientsUpsertWithWhereUniqueWithoutNotificationsInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notification_recipientsUpdateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.notification_recipientsCreateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedCreateWithoutNotificationsInput>;
};
export type notification_recipientsUpdateWithWhereUniqueWithoutNotificationsInput = {
    where: Prisma.notification_recipientsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateWithoutNotificationsInput, Prisma.notification_recipientsUncheckedUpdateWithoutNotificationsInput>;
};
export type notification_recipientsUpdateManyWithWhereWithoutNotificationsInput = {
    where: Prisma.notification_recipientsScalarWhereInput;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateManyMutationInput, Prisma.notification_recipientsUncheckedUpdateManyWithoutNotificationsInput>;
};
export type notification_recipientsCreateManyUsersInput = {
    recipient_id?: number;
    notification_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsUpdateWithoutUsersInput = {
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notifications?: Prisma.notificationsUpdateOneRequiredWithoutNotification_recipientsNestedInput;
};
export type notification_recipientsUncheckedUpdateWithoutUsersInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsUncheckedUpdateManyWithoutUsersInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsCreateManyNotificationsInput = {
    recipient_id?: number;
    user_id: number;
    is_read?: boolean | null;
    read_at?: Date | string | null;
    delivered_at?: Date | string | null;
};
export type notification_recipientsUpdateWithoutNotificationsInput = {
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutNotification_recipientsNestedInput;
};
export type notification_recipientsUncheckedUpdateWithoutNotificationsInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsUncheckedUpdateManyWithoutNotificationsInput = {
    recipient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notification_recipientsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    recipient_id?: boolean;
    notification_id?: boolean;
    user_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    delivered_at?: boolean;
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
}, ExtArgs["result"]["notification_recipients"]>;
export type notification_recipientsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    recipient_id?: boolean;
    notification_id?: boolean;
    user_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    delivered_at?: boolean;
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
}, ExtArgs["result"]["notification_recipients"]>;
export type notification_recipientsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    recipient_id?: boolean;
    notification_id?: boolean;
    user_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    delivered_at?: boolean;
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
}, ExtArgs["result"]["notification_recipients"]>;
export type notification_recipientsSelectScalar = {
    recipient_id?: boolean;
    notification_id?: boolean;
    user_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    delivered_at?: boolean;
};
export type notification_recipientsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"recipient_id" | "notification_id" | "user_id" | "is_read" | "read_at" | "delivered_at", ExtArgs["result"]["notification_recipients"]>;
export type notification_recipientsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
};
export type notification_recipientsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
};
export type notification_recipientsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | Prisma.notificationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.notification_recipients$usersArgs<ExtArgs>;
};
export type $notification_recipientsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "notification_recipients";
    objects: {
        notifications: Prisma.$notificationsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        recipient_id: number;
        notification_id: number;
        user_id: number;
        is_read: boolean | null;
        read_at: Date | null;
        delivered_at: Date | null;
    }, ExtArgs["result"]["notification_recipients"]>;
    composites: {};
};
export type notification_recipientsGetPayload<S extends boolean | null | undefined | notification_recipientsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload, S>;
export type notification_recipientsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<notification_recipientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Notification_recipientsCountAggregateInputType | true;
};
export interface notification_recipientsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['notification_recipients'];
        meta: {
            name: 'notification_recipients';
        };
    };
    findUnique<T extends notification_recipientsFindUniqueArgs>(args: Prisma.SelectSubset<T, notification_recipientsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends notification_recipientsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, notification_recipientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends notification_recipientsFindFirstArgs>(args?: Prisma.SelectSubset<T, notification_recipientsFindFirstArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends notification_recipientsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, notification_recipientsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends notification_recipientsFindManyArgs>(args?: Prisma.SelectSubset<T, notification_recipientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends notification_recipientsCreateArgs>(args: Prisma.SelectSubset<T, notification_recipientsCreateArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends notification_recipientsCreateManyArgs>(args?: Prisma.SelectSubset<T, notification_recipientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends notification_recipientsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, notification_recipientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends notification_recipientsDeleteArgs>(args: Prisma.SelectSubset<T, notification_recipientsDeleteArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends notification_recipientsUpdateArgs>(args: Prisma.SelectSubset<T, notification_recipientsUpdateArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends notification_recipientsDeleteManyArgs>(args?: Prisma.SelectSubset<T, notification_recipientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends notification_recipientsUpdateManyArgs>(args: Prisma.SelectSubset<T, notification_recipientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends notification_recipientsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, notification_recipientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends notification_recipientsUpsertArgs>(args: Prisma.SelectSubset<T, notification_recipientsUpsertArgs<ExtArgs>>): Prisma.Prisma__notification_recipientsClient<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends notification_recipientsCountArgs>(args?: Prisma.Subset<T, notification_recipientsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Notification_recipientsCountAggregateOutputType> : number>;
    aggregate<T extends Notification_recipientsAggregateArgs>(args: Prisma.Subset<T, Notification_recipientsAggregateArgs>): Prisma.PrismaPromise<GetNotification_recipientsAggregateType<T>>;
    groupBy<T extends notification_recipientsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: notification_recipientsGroupByArgs['orderBy'];
    } : {
        orderBy?: notification_recipientsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, notification_recipientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotification_recipientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: notification_recipientsFieldRefs;
}
export interface Prisma__notification_recipientsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    notifications<T extends Prisma.notificationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notificationsDefaultArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.notification_recipients$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notification_recipients$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface notification_recipientsFieldRefs {
    readonly recipient_id: Prisma.FieldRef<"notification_recipients", 'Int'>;
    readonly notification_id: Prisma.FieldRef<"notification_recipients", 'Int'>;
    readonly user_id: Prisma.FieldRef<"notification_recipients", 'Int'>;
    readonly is_read: Prisma.FieldRef<"notification_recipients", 'Boolean'>;
    readonly read_at: Prisma.FieldRef<"notification_recipients", 'DateTime'>;
    readonly delivered_at: Prisma.FieldRef<"notification_recipients", 'DateTime'>;
}
export type notification_recipientsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where: Prisma.notification_recipientsWhereUniqueInput;
};
export type notification_recipientsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where: Prisma.notification_recipientsWhereUniqueInput;
};
export type notification_recipientsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where?: Prisma.notification_recipientsWhereInput;
    orderBy?: Prisma.notification_recipientsOrderByWithRelationInput | Prisma.notification_recipientsOrderByWithRelationInput[];
    cursor?: Prisma.notification_recipientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_recipientsScalarFieldEnum | Prisma.Notification_recipientsScalarFieldEnum[];
};
export type notification_recipientsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where?: Prisma.notification_recipientsWhereInput;
    orderBy?: Prisma.notification_recipientsOrderByWithRelationInput | Prisma.notification_recipientsOrderByWithRelationInput[];
    cursor?: Prisma.notification_recipientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_recipientsScalarFieldEnum | Prisma.Notification_recipientsScalarFieldEnum[];
};
export type notification_recipientsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where?: Prisma.notification_recipientsWhereInput;
    orderBy?: Prisma.notification_recipientsOrderByWithRelationInput | Prisma.notification_recipientsOrderByWithRelationInput[];
    cursor?: Prisma.notification_recipientsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Notification_recipientsScalarFieldEnum | Prisma.Notification_recipientsScalarFieldEnum[];
};
export type notification_recipientsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_recipientsCreateInput, Prisma.notification_recipientsUncheckedCreateInput>;
};
export type notification_recipientsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.notification_recipientsCreateManyInput | Prisma.notification_recipientsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notification_recipientsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    data: Prisma.notification_recipientsCreateManyInput | Prisma.notification_recipientsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.notification_recipientsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type notification_recipientsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateInput, Prisma.notification_recipientsUncheckedUpdateInput>;
    where: Prisma.notification_recipientsWhereUniqueInput;
};
export type notification_recipientsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.notification_recipientsUpdateManyMutationInput, Prisma.notification_recipientsUncheckedUpdateManyInput>;
    where?: Prisma.notification_recipientsWhereInput;
    limit?: number;
};
export type notification_recipientsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notification_recipientsUpdateManyMutationInput, Prisma.notification_recipientsUncheckedUpdateManyInput>;
    where?: Prisma.notification_recipientsWhereInput;
    limit?: number;
    include?: Prisma.notification_recipientsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type notification_recipientsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where: Prisma.notification_recipientsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notification_recipientsCreateInput, Prisma.notification_recipientsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.notification_recipientsUpdateInput, Prisma.notification_recipientsUncheckedUpdateInput>;
};
export type notification_recipientsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
    where: Prisma.notification_recipientsWhereUniqueInput;
};
export type notification_recipientsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_recipientsWhereInput;
    limit?: number;
};
export type notification_recipients$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type notification_recipientsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notification_recipientsSelect<ExtArgs> | null;
    omit?: Prisma.notification_recipientsOmit<ExtArgs> | null;
    include?: Prisma.notification_recipientsInclude<ExtArgs> | null;
};
export {};
