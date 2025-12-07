import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type notificationsModel = runtime.Types.Result.DefaultSelection<Prisma.$notificationsPayload>;
export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null;
    _avg: NotificationsAvgAggregateOutputType | null;
    _sum: NotificationsSumAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
export type NotificationsAvgAggregateOutputType = {
    notification_id: number | null;
    sender_id: number | null;
    course_id: number | null;
    class_group_id: number | null;
};
export type NotificationsSumAggregateOutputType = {
    notification_id: number | null;
    sender_id: number | null;
    course_id: number | null;
    class_group_id: number | null;
};
export type NotificationsMinAggregateOutputType = {
    notification_id: number | null;
    sender_id: number | null;
    title: string | null;
    message: string | null;
    course_id: number | null;
    class_group_id: number | null;
    target_audience: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NotificationsMaxAggregateOutputType = {
    notification_id: number | null;
    sender_id: number | null;
    title: string | null;
    message: string | null;
    course_id: number | null;
    class_group_id: number | null;
    target_audience: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type NotificationsCountAggregateOutputType = {
    notification_id: number;
    sender_id: number;
    title: number;
    message: number;
    course_id: number;
    class_group_id: number;
    target_audience: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type NotificationsAvgAggregateInputType = {
    notification_id?: true;
    sender_id?: true;
    course_id?: true;
    class_group_id?: true;
};
export type NotificationsSumAggregateInputType = {
    notification_id?: true;
    sender_id?: true;
    course_id?: true;
    class_group_id?: true;
};
export type NotificationsMinAggregateInputType = {
    notification_id?: true;
    sender_id?: true;
    title?: true;
    message?: true;
    course_id?: true;
    class_group_id?: true;
    target_audience?: true;
    created_at?: true;
    updated_at?: true;
};
export type NotificationsMaxAggregateInputType = {
    notification_id?: true;
    sender_id?: true;
    title?: true;
    message?: true;
    course_id?: true;
    class_group_id?: true;
    target_audience?: true;
    created_at?: true;
    updated_at?: true;
};
export type NotificationsCountAggregateInputType = {
    notification_id?: true;
    sender_id?: true;
    title?: true;
    message?: true;
    course_id?: true;
    class_group_id?: true;
    target_audience?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type NotificationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationsCountAggregateInputType;
    _avg?: NotificationsAvgAggregateInputType;
    _sum?: NotificationsSumAggregateInputType;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
    [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotifications[P]> : Prisma.GetScalarType<T[P], AggregateNotifications[P]>;
};
export type notificationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithAggregationInput | Prisma.notificationsOrderByWithAggregationInput[];
    by: Prisma.NotificationsScalarFieldEnum[] | Prisma.NotificationsScalarFieldEnum;
    having?: Prisma.notificationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationsCountAggregateInputType | true;
    _avg?: NotificationsAvgAggregateInputType;
    _sum?: NotificationsSumAggregateInputType;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type NotificationsGroupByOutputType = {
    notification_id: number;
    sender_id: number | null;
    title: string;
    message: string;
    course_id: number | null;
    class_group_id: number | null;
    target_audience: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: NotificationsCountAggregateOutputType | null;
    _avg: NotificationsAvgAggregateOutputType | null;
    _sum: NotificationsSumAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]>;
}>>;
export type notificationsWhereInput = {
    AND?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    OR?: Prisma.notificationsWhereInput[];
    NOT?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    notification_id?: Prisma.IntFilter<"notifications"> | number;
    sender_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    title?: Prisma.StringFilter<"notifications"> | string;
    message?: Prisma.StringFilter<"notifications"> | string;
    course_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    class_group_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    target_audience?: Prisma.StringNullableFilter<"notifications"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    class_groups?: Prisma.XOR<Prisma.Class_groupsNullableScalarRelationFilter, Prisma.class_groupsWhereInput> | null;
    sender?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    notification_recipients?: Prisma.Notification_recipientsListRelationFilter;
};
export type notificationsOrderByWithRelationInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    class_group_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    target_audience?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    class_groups?: Prisma.class_groupsOrderByWithRelationInput;
    sender?: Prisma.usersOrderByWithRelationInput;
    notification_recipients?: Prisma.notification_recipientsOrderByRelationAggregateInput;
};
export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number;
    AND?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    OR?: Prisma.notificationsWhereInput[];
    NOT?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    sender_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    title?: Prisma.StringFilter<"notifications"> | string;
    message?: Prisma.StringFilter<"notifications"> | string;
    course_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    class_group_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    target_audience?: Prisma.StringNullableFilter<"notifications"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    class_groups?: Prisma.XOR<Prisma.Class_groupsNullableScalarRelationFilter, Prisma.class_groupsWhereInput> | null;
    sender?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    notification_recipients?: Prisma.Notification_recipientsListRelationFilter;
}, "notification_id">;
export type notificationsOrderByWithAggregationInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    class_group_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    target_audience?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.notificationsCountOrderByAggregateInput;
    _avg?: Prisma.notificationsAvgOrderByAggregateInput;
    _max?: Prisma.notificationsMaxOrderByAggregateInput;
    _min?: Prisma.notificationsMinOrderByAggregateInput;
    _sum?: Prisma.notificationsSumOrderByAggregateInput;
};
export type notificationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.notificationsScalarWhereWithAggregatesInput | Prisma.notificationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.notificationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.notificationsScalarWhereWithAggregatesInput | Prisma.notificationsScalarWhereWithAggregatesInput[];
    notification_id?: Prisma.IntWithAggregatesFilter<"notifications"> | number;
    sender_id?: Prisma.IntNullableWithAggregatesFilter<"notifications"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"notifications"> | string;
    message?: Prisma.StringWithAggregatesFilter<"notifications"> | string;
    course_id?: Prisma.IntNullableWithAggregatesFilter<"notifications"> | number | null;
    class_group_id?: Prisma.IntNullableWithAggregatesFilter<"notifications"> | number | null;
    target_audience?: Prisma.StringNullableWithAggregatesFilter<"notifications"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null;
};
export type notificationsCreateInput = {
    title: string;
    message: string;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutNotificationsInput;
    class_groups?: Prisma.class_groupsCreateNestedOneWithoutNotificationsInput;
    sender?: Prisma.usersCreateNestedOneWithoutNotifications_sentInput;
    notification_recipients?: Prisma.notification_recipientsCreateNestedManyWithoutNotificationsInput;
};
export type notificationsUncheckedCreateInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    course_id?: number | null;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedCreateNestedManyWithoutNotificationsInput;
};
export type notificationsUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutNotificationsNestedInput;
    class_groups?: Prisma.class_groupsUpdateOneWithoutNotificationsNestedInput;
    sender?: Prisma.usersUpdateOneWithoutNotifications_sentNestedInput;
    notification_recipients?: Prisma.notification_recipientsUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsCreateManyInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    course_id?: number | null;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type notificationsUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notificationsUncheckedUpdateManyInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationsListRelationFilter = {
    every?: Prisma.notificationsWhereInput;
    some?: Prisma.notificationsWhereInput;
    none?: Prisma.notificationsWhereInput;
};
export type notificationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type notificationsCountOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    target_audience?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notificationsAvgOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
};
export type notificationsMaxOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    target_audience?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notificationsMinOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
    target_audience?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type notificationsSumOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    class_group_id?: Prisma.SortOrder;
};
export type NotificationsScalarRelationFilter = {
    is?: Prisma.notificationsWhereInput;
    isNot?: Prisma.notificationsWhereInput;
};
export type notificationsCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput> | Prisma.notificationsCreateWithoutSenderInput[] | Prisma.notificationsUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutSenderInput | Prisma.notificationsCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.notificationsCreateManySenderInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput> | Prisma.notificationsCreateWithoutSenderInput[] | Prisma.notificationsUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutSenderInput | Prisma.notificationsCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.notificationsCreateManySenderInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput> | Prisma.notificationsCreateWithoutSenderInput[] | Prisma.notificationsUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutSenderInput | Prisma.notificationsCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutSenderInput | Prisma.notificationsUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.notificationsCreateManySenderInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutSenderInput | Prisma.notificationsUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutSenderInput | Prisma.notificationsUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput> | Prisma.notificationsCreateWithoutSenderInput[] | Prisma.notificationsUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutSenderInput | Prisma.notificationsCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutSenderInput | Prisma.notificationsUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.notificationsCreateManySenderInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutSenderInput | Prisma.notificationsUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutSenderInput | Prisma.notificationsUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput> | Prisma.notificationsCreateWithoutCoursesInput[] | Prisma.notificationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutCoursesInput | Prisma.notificationsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.notificationsCreateManyCoursesInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput> | Prisma.notificationsCreateWithoutCoursesInput[] | Prisma.notificationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutCoursesInput | Prisma.notificationsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.notificationsCreateManyCoursesInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput> | Prisma.notificationsCreateWithoutCoursesInput[] | Prisma.notificationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutCoursesInput | Prisma.notificationsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.notificationsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.notificationsCreateManyCoursesInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.notificationsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutCoursesInput | Prisma.notificationsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput> | Prisma.notificationsCreateWithoutCoursesInput[] | Prisma.notificationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutCoursesInput | Prisma.notificationsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.notificationsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.notificationsCreateManyCoursesInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.notificationsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutCoursesInput | Prisma.notificationsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsCreateNestedManyWithoutClass_groupsInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput> | Prisma.notificationsCreateWithoutClass_groupsInput[] | Prisma.notificationsUncheckedCreateWithoutClass_groupsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutClass_groupsInput | Prisma.notificationsCreateOrConnectWithoutClass_groupsInput[];
    createMany?: Prisma.notificationsCreateManyClass_groupsInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUncheckedCreateNestedManyWithoutClass_groupsInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput> | Prisma.notificationsCreateWithoutClass_groupsInput[] | Prisma.notificationsUncheckedCreateWithoutClass_groupsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutClass_groupsInput | Prisma.notificationsCreateOrConnectWithoutClass_groupsInput[];
    createMany?: Prisma.notificationsCreateManyClass_groupsInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUpdateManyWithoutClass_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput> | Prisma.notificationsCreateWithoutClass_groupsInput[] | Prisma.notificationsUncheckedCreateWithoutClass_groupsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutClass_groupsInput | Prisma.notificationsCreateOrConnectWithoutClass_groupsInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutClass_groupsInput | Prisma.notificationsUpsertWithWhereUniqueWithoutClass_groupsInput[];
    createMany?: Prisma.notificationsCreateManyClass_groupsInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutClass_groupsInput | Prisma.notificationsUpdateWithWhereUniqueWithoutClass_groupsInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutClass_groupsInput | Prisma.notificationsUpdateManyWithWhereWithoutClass_groupsInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput> | Prisma.notificationsCreateWithoutClass_groupsInput[] | Prisma.notificationsUncheckedCreateWithoutClass_groupsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutClass_groupsInput | Prisma.notificationsCreateOrConnectWithoutClass_groupsInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutClass_groupsInput | Prisma.notificationsUpsertWithWhereUniqueWithoutClass_groupsInput[];
    createMany?: Prisma.notificationsCreateManyClass_groupsInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutClass_groupsInput | Prisma.notificationsUpdateWithWhereUniqueWithoutClass_groupsInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutClass_groupsInput | Prisma.notificationsUpdateManyWithWhereWithoutClass_groupsInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsCreateNestedOneWithoutNotification_recipientsInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedCreateWithoutNotification_recipientsInput>;
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutNotification_recipientsInput;
    connect?: Prisma.notificationsWhereUniqueInput;
};
export type notificationsUpdateOneRequiredWithoutNotification_recipientsNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedCreateWithoutNotification_recipientsInput>;
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutNotification_recipientsInput;
    upsert?: Prisma.notificationsUpsertWithoutNotification_recipientsInput;
    connect?: Prisma.notificationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.notificationsUpdateToOneWithWhereWithoutNotification_recipientsInput, Prisma.notificationsUpdateWithoutNotification_recipientsInput>, Prisma.notificationsUncheckedUpdateWithoutNotification_recipientsInput>;
};
export type notificationsCreateWithoutSenderInput = {
    title: string;
    message: string;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutNotificationsInput;
    class_groups?: Prisma.class_groupsCreateNestedOneWithoutNotificationsInput;
    notification_recipients?: Prisma.notification_recipientsCreateNestedManyWithoutNotificationsInput;
};
export type notificationsUncheckedCreateWithoutSenderInput = {
    notification_id?: number;
    title: string;
    message: string;
    course_id?: number | null;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedCreateNestedManyWithoutNotificationsInput;
};
export type notificationsCreateOrConnectWithoutSenderInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput>;
};
export type notificationsCreateManySenderInputEnvelope = {
    data: Prisma.notificationsCreateManySenderInput | Prisma.notificationsCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type notificationsUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.notificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutSenderInput, Prisma.notificationsUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutSenderInput, Prisma.notificationsUncheckedCreateWithoutSenderInput>;
};
export type notificationsUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.notificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutSenderInput, Prisma.notificationsUncheckedUpdateWithoutSenderInput>;
};
export type notificationsUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.notificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyWithoutSenderInput>;
};
export type notificationsScalarWhereInput = {
    AND?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
    OR?: Prisma.notificationsScalarWhereInput[];
    NOT?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
    notification_id?: Prisma.IntFilter<"notifications"> | number;
    sender_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    title?: Prisma.StringFilter<"notifications"> | string;
    message?: Prisma.StringFilter<"notifications"> | string;
    course_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    class_group_id?: Prisma.IntNullableFilter<"notifications"> | number | null;
    target_audience?: Prisma.StringNullableFilter<"notifications"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
};
export type notificationsCreateWithoutCoursesInput = {
    title: string;
    message: string;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    class_groups?: Prisma.class_groupsCreateNestedOneWithoutNotificationsInput;
    sender?: Prisma.usersCreateNestedOneWithoutNotifications_sentInput;
    notification_recipients?: Prisma.notification_recipientsCreateNestedManyWithoutNotificationsInput;
};
export type notificationsUncheckedCreateWithoutCoursesInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedCreateNestedManyWithoutNotificationsInput;
};
export type notificationsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput>;
};
export type notificationsCreateManyCoursesInputEnvelope = {
    data: Prisma.notificationsCreateManyCoursesInput | Prisma.notificationsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type notificationsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.notificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutCoursesInput, Prisma.notificationsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutCoursesInput, Prisma.notificationsUncheckedCreateWithoutCoursesInput>;
};
export type notificationsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.notificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutCoursesInput, Prisma.notificationsUncheckedUpdateWithoutCoursesInput>;
};
export type notificationsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.notificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyWithoutCoursesInput>;
};
export type notificationsCreateWithoutClass_groupsInput = {
    title: string;
    message: string;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutNotificationsInput;
    sender?: Prisma.usersCreateNestedOneWithoutNotifications_sentInput;
    notification_recipients?: Prisma.notification_recipientsCreateNestedManyWithoutNotificationsInput;
};
export type notificationsUncheckedCreateWithoutClass_groupsInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    course_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedCreateNestedManyWithoutNotificationsInput;
};
export type notificationsCreateOrConnectWithoutClass_groupsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput>;
};
export type notificationsCreateManyClass_groupsInputEnvelope = {
    data: Prisma.notificationsCreateManyClass_groupsInput | Prisma.notificationsCreateManyClass_groupsInput[];
    skipDuplicates?: boolean;
};
export type notificationsUpsertWithWhereUniqueWithoutClass_groupsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutClass_groupsInput, Prisma.notificationsUncheckedUpdateWithoutClass_groupsInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutClass_groupsInput, Prisma.notificationsUncheckedCreateWithoutClass_groupsInput>;
};
export type notificationsUpdateWithWhereUniqueWithoutClass_groupsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutClass_groupsInput, Prisma.notificationsUncheckedUpdateWithoutClass_groupsInput>;
};
export type notificationsUpdateManyWithWhereWithoutClass_groupsInput = {
    where: Prisma.notificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsInput>;
};
export type notificationsCreateWithoutNotification_recipientsInput = {
    title: string;
    message: string;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutNotificationsInput;
    class_groups?: Prisma.class_groupsCreateNestedOneWithoutNotificationsInput;
    sender?: Prisma.usersCreateNestedOneWithoutNotifications_sentInput;
};
export type notificationsUncheckedCreateWithoutNotification_recipientsInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    course_id?: number | null;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type notificationsCreateOrConnectWithoutNotification_recipientsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedCreateWithoutNotification_recipientsInput>;
};
export type notificationsUpsertWithoutNotification_recipientsInput = {
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedUpdateWithoutNotification_recipientsInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedCreateWithoutNotification_recipientsInput>;
    where?: Prisma.notificationsWhereInput;
};
export type notificationsUpdateToOneWithWhereWithoutNotification_recipientsInput = {
    where?: Prisma.notificationsWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutNotification_recipientsInput, Prisma.notificationsUncheckedUpdateWithoutNotification_recipientsInput>;
};
export type notificationsUpdateWithoutNotification_recipientsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutNotificationsNestedInput;
    class_groups?: Prisma.class_groupsUpdateOneWithoutNotificationsNestedInput;
    sender?: Prisma.usersUpdateOneWithoutNotifications_sentNestedInput;
};
export type notificationsUncheckedUpdateWithoutNotification_recipientsInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notificationsCreateManySenderInput = {
    notification_id?: number;
    title: string;
    message: string;
    course_id?: number | null;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type notificationsUpdateWithoutSenderInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutNotificationsNestedInput;
    class_groups?: Prisma.class_groupsUpdateOneWithoutNotificationsNestedInput;
    notification_recipients?: Prisma.notification_recipientsUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateWithoutSenderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateManyWithoutSenderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notificationsCreateManyCoursesInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    class_group_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type notificationsUpdateWithoutCoursesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    class_groups?: Prisma.class_groupsUpdateOneWithoutNotificationsNestedInput;
    sender?: Prisma.usersUpdateOneWithoutNotifications_sentNestedInput;
    notification_recipients?: Prisma.notification_recipientsUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateWithoutCoursesInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateManyWithoutCoursesInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    class_group_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type notificationsCreateManyClass_groupsInput = {
    notification_id?: number;
    sender_id?: number | null;
    title: string;
    message: string;
    course_id?: number | null;
    target_audience?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type notificationsUpdateWithoutClass_groupsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutNotificationsNestedInput;
    sender?: Prisma.usersUpdateOneWithoutNotifications_sentNestedInput;
    notification_recipients?: Prisma.notification_recipientsUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateWithoutClass_groupsInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notification_recipients?: Prisma.notification_recipientsUncheckedUpdateManyWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateManyWithoutClass_groupsInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    target_audience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NotificationsCountOutputType = {
    notification_recipients: number;
};
export type NotificationsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notification_recipients?: boolean | NotificationsCountOutputTypeCountNotification_recipientsArgs;
};
export type NotificationsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationsCountOutputTypeSelect<ExtArgs> | null;
};
export type NotificationsCountOutputTypeCountNotification_recipientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notification_recipientsWhereInput;
};
export type notificationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    sender_id?: boolean;
    title?: boolean;
    message?: boolean;
    course_id?: boolean;
    class_group_id?: boolean;
    target_audience?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
    notification_recipients?: boolean | Prisma.notifications$notification_recipientsArgs<ExtArgs>;
    _count?: boolean | Prisma.NotificationsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    sender_id?: boolean;
    title?: boolean;
    message?: boolean;
    course_id?: boolean;
    class_group_id?: boolean;
    target_audience?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    sender_id?: boolean;
    title?: boolean;
    message?: boolean;
    course_id?: boolean;
    class_group_id?: boolean;
    target_audience?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectScalar = {
    notification_id?: boolean;
    sender_id?: boolean;
    title?: boolean;
    message?: boolean;
    course_id?: boolean;
    class_group_id?: boolean;
    target_audience?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type notificationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"notification_id" | "sender_id" | "title" | "message" | "course_id" | "class_group_id" | "target_audience" | "created_at" | "updated_at", ExtArgs["result"]["notifications"]>;
export type notificationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
    notification_recipients?: boolean | Prisma.notifications$notification_recipientsArgs<ExtArgs>;
    _count?: boolean | Prisma.NotificationsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type notificationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
};
export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.notifications$coursesArgs<ExtArgs>;
    class_groups?: boolean | Prisma.notifications$class_groupsArgs<ExtArgs>;
    sender?: boolean | Prisma.notifications$senderArgs<ExtArgs>;
};
export type $notificationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "notifications";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        class_groups: Prisma.$class_groupsPayload<ExtArgs> | null;
        sender: Prisma.$usersPayload<ExtArgs> | null;
        notification_recipients: Prisma.$notification_recipientsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        notification_id: number;
        sender_id: number | null;
        title: string;
        message: string;
        course_id: number | null;
        class_group_id: number | null;
        target_audience: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["notifications"]>;
    composites: {};
};
export type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$notificationsPayload, S>;
export type notificationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationsCountAggregateInputType | true;
};
export interface notificationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['notifications'];
        meta: {
            name: 'notifications';
        };
    };
    findUnique<T extends notificationsFindUniqueArgs>(args: Prisma.SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends notificationsFindFirstArgs>(args?: Prisma.SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends notificationsFindManyArgs>(args?: Prisma.SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends notificationsCreateArgs>(args: Prisma.SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends notificationsCreateManyArgs>(args?: Prisma.SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends notificationsDeleteArgs>(args: Prisma.SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends notificationsUpdateArgs>(args: Prisma.SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends notificationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends notificationsUpdateManyArgs>(args: Prisma.SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends notificationsUpsertArgs>(args: Prisma.SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends notificationsCountArgs>(args?: Prisma.Subset<T, notificationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationsCountAggregateOutputType> : number>;
    aggregate<T extends NotificationsAggregateArgs>(args: Prisma.Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>;
    groupBy<T extends notificationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: notificationsGroupByArgs['orderBy'];
    } : {
        orderBy?: notificationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: notificationsFieldRefs;
}
export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.notifications$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notifications$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    class_groups<T extends Prisma.notifications$class_groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notifications$class_groupsArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sender<T extends Prisma.notifications$senderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notifications$senderArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notification_recipients<T extends Prisma.notifications$notification_recipientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.notifications$notification_recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notification_recipientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface notificationsFieldRefs {
    readonly notification_id: Prisma.FieldRef<"notifications", 'Int'>;
    readonly sender_id: Prisma.FieldRef<"notifications", 'Int'>;
    readonly title: Prisma.FieldRef<"notifications", 'String'>;
    readonly message: Prisma.FieldRef<"notifications", 'String'>;
    readonly course_id: Prisma.FieldRef<"notifications", 'Int'>;
    readonly class_group_id: Prisma.FieldRef<"notifications", 'Int'>;
    readonly target_audience: Prisma.FieldRef<"notifications", 'String'>;
    readonly created_at: Prisma.FieldRef<"notifications", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"notifications", 'DateTime'>;
}
export type notificationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsCreateInput, Prisma.notificationsUncheckedCreateInput>;
};
export type notificationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.notificationsCreateManyInput | Prisma.notificationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notificationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    data: Prisma.notificationsCreateManyInput | Prisma.notificationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.notificationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type notificationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsUpdateInput, Prisma.notificationsUncheckedUpdateInput>;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyInput>;
    where?: Prisma.notificationsWhereInput;
    limit?: number;
};
export type notificationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyInput>;
    where?: Prisma.notificationsWhereInput;
    limit?: number;
    include?: Prisma.notificationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type notificationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateInput, Prisma.notificationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.notificationsUpdateInput, Prisma.notificationsUncheckedUpdateInput>;
};
export type notificationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    limit?: number;
};
export type notifications$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type notifications$class_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where?: Prisma.class_groupsWhereInput;
};
export type notifications$senderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type notifications$notification_recipientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type notificationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
};
export {};
