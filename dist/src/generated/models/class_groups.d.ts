import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type class_groupsModel = runtime.Types.Result.DefaultSelection<Prisma.$class_groupsPayload>;
export type AggregateClass_groups = {
    _count: Class_groupsCountAggregateOutputType | null;
    _avg: Class_groupsAvgAggregateOutputType | null;
    _sum: Class_groupsSumAggregateOutputType | null;
    _min: Class_groupsMinAggregateOutputType | null;
    _max: Class_groupsMaxAggregateOutputType | null;
};
export type Class_groupsAvgAggregateOutputType = {
    class_group_id: number | null;
    course_id: number | null;
    shift_id: number | null;
    teacher_id: number | null;
    max_students: number | null;
    created_by: number | null;
};
export type Class_groupsSumAggregateOutputType = {
    class_group_id: number | null;
    course_id: number | null;
    shift_id: number | null;
    teacher_id: number | null;
    max_students: number | null;
    created_by: number | null;
};
export type Class_groupsMinAggregateOutputType = {
    class_group_id: number | null;
    course_id: number | null;
    shift_id: number | null;
    name: string | null;
    teacher_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
    max_students: number | null;
    zalo_link: string | null;
    status: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Class_groupsMaxAggregateOutputType = {
    class_group_id: number | null;
    course_id: number | null;
    shift_id: number | null;
    name: string | null;
    teacher_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
    max_students: number | null;
    zalo_link: string | null;
    status: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Class_groupsCountAggregateOutputType = {
    class_group_id: number;
    course_id: number;
    shift_id: number;
    name: number;
    teacher_id: number;
    start_date: number;
    end_date: number;
    max_students: number;
    zalo_link: number;
    status: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Class_groupsAvgAggregateInputType = {
    class_group_id?: true;
    course_id?: true;
    shift_id?: true;
    teacher_id?: true;
    max_students?: true;
    created_by?: true;
};
export type Class_groupsSumAggregateInputType = {
    class_group_id?: true;
    course_id?: true;
    shift_id?: true;
    teacher_id?: true;
    max_students?: true;
    created_by?: true;
};
export type Class_groupsMinAggregateInputType = {
    class_group_id?: true;
    course_id?: true;
    shift_id?: true;
    name?: true;
    teacher_id?: true;
    start_date?: true;
    end_date?: true;
    max_students?: true;
    zalo_link?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Class_groupsMaxAggregateInputType = {
    class_group_id?: true;
    course_id?: true;
    shift_id?: true;
    name?: true;
    teacher_id?: true;
    start_date?: true;
    end_date?: true;
    max_students?: true;
    zalo_link?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Class_groupsCountAggregateInputType = {
    class_group_id?: true;
    course_id?: true;
    shift_id?: true;
    name?: true;
    teacher_id?: true;
    start_date?: true;
    end_date?: true;
    max_students?: true;
    zalo_link?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Class_groupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithRelationInput | Prisma.class_groupsOrderByWithRelationInput[];
    cursor?: Prisma.class_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Class_groupsCountAggregateInputType;
    _avg?: Class_groupsAvgAggregateInputType;
    _sum?: Class_groupsSumAggregateInputType;
    _min?: Class_groupsMinAggregateInputType;
    _max?: Class_groupsMaxAggregateInputType;
};
export type GetClass_groupsAggregateType<T extends Class_groupsAggregateArgs> = {
    [P in keyof T & keyof AggregateClass_groups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClass_groups[P]> : Prisma.GetScalarType<T[P], AggregateClass_groups[P]>;
};
export type class_groupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithAggregationInput | Prisma.class_groupsOrderByWithAggregationInput[];
    by: Prisma.Class_groupsScalarFieldEnum[] | Prisma.Class_groupsScalarFieldEnum;
    having?: Prisma.class_groupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Class_groupsCountAggregateInputType | true;
    _avg?: Class_groupsAvgAggregateInputType;
    _sum?: Class_groupsSumAggregateInputType;
    _min?: Class_groupsMinAggregateInputType;
    _max?: Class_groupsMaxAggregateInputType;
};
export type Class_groupsGroupByOutputType = {
    class_group_id: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id: number | null;
    start_date: Date;
    end_date: Date | null;
    max_students: number | null;
    zalo_link: string | null;
    status: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Class_groupsCountAggregateOutputType | null;
    _avg: Class_groupsAvgAggregateOutputType | null;
    _sum: Class_groupsSumAggregateOutputType | null;
    _min: Class_groupsMinAggregateOutputType | null;
    _max: Class_groupsMaxAggregateOutputType | null;
};
type GetClass_groupsGroupByPayload<T extends class_groupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Class_groupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Class_groupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Class_groupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Class_groupsGroupByOutputType[P]>;
}>>;
export type class_groupsWhereInput = {
    AND?: Prisma.class_groupsWhereInput | Prisma.class_groupsWhereInput[];
    OR?: Prisma.class_groupsWhereInput[];
    NOT?: Prisma.class_groupsWhereInput | Prisma.class_groupsWhereInput[];
    class_group_id?: Prisma.IntFilter<"class_groups"> | number;
    course_id?: Prisma.IntFilter<"class_groups"> | number;
    shift_id?: Prisma.IntFilter<"class_groups"> | number;
    name?: Prisma.StringFilter<"class_groups"> | string;
    teacher_id?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    start_date?: Prisma.DateTimeFilter<"class_groups"> | Date | string;
    end_date?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    max_students?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    zalo_link?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    status?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    created_by?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    course?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    shift?: Prisma.XOR<Prisma.Study_shiftsScalarRelationFilter, Prisma.study_shiftsWhereInput>;
    teacher?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    members?: Prisma.Class_group_membersListRelationFilter;
    classes?: Prisma.ClassesListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
};
export type class_groupsOrderByWithRelationInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    max_students?: Prisma.SortOrderInput | Prisma.SortOrder;
    zalo_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    course?: Prisma.coursesOrderByWithRelationInput;
    shift?: Prisma.study_shiftsOrderByWithRelationInput;
    teacher?: Prisma.usersOrderByWithRelationInput;
    creator?: Prisma.usersOrderByWithRelationInput;
    members?: Prisma.class_group_membersOrderByRelationAggregateInput;
    classes?: Prisma.classesOrderByRelationAggregateInput;
    notifications?: Prisma.notificationsOrderByRelationAggregateInput;
};
export type class_groupsWhereUniqueInput = Prisma.AtLeast<{
    class_group_id?: number;
    AND?: Prisma.class_groupsWhereInput | Prisma.class_groupsWhereInput[];
    OR?: Prisma.class_groupsWhereInput[];
    NOT?: Prisma.class_groupsWhereInput | Prisma.class_groupsWhereInput[];
    course_id?: Prisma.IntFilter<"class_groups"> | number;
    shift_id?: Prisma.IntFilter<"class_groups"> | number;
    name?: Prisma.StringFilter<"class_groups"> | string;
    teacher_id?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    start_date?: Prisma.DateTimeFilter<"class_groups"> | Date | string;
    end_date?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    max_students?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    zalo_link?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    status?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    created_by?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    course?: Prisma.XOR<Prisma.CoursesScalarRelationFilter, Prisma.coursesWhereInput>;
    shift?: Prisma.XOR<Prisma.Study_shiftsScalarRelationFilter, Prisma.study_shiftsWhereInput>;
    teacher?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    creator?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    members?: Prisma.Class_group_membersListRelationFilter;
    classes?: Prisma.ClassesListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
}, "class_group_id">;
export type class_groupsOrderByWithAggregationInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    max_students?: Prisma.SortOrderInput | Prisma.SortOrder;
    zalo_link?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.class_groupsCountOrderByAggregateInput;
    _avg?: Prisma.class_groupsAvgOrderByAggregateInput;
    _max?: Prisma.class_groupsMaxOrderByAggregateInput;
    _min?: Prisma.class_groupsMinOrderByAggregateInput;
    _sum?: Prisma.class_groupsSumOrderByAggregateInput;
};
export type class_groupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.class_groupsScalarWhereWithAggregatesInput | Prisma.class_groupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.class_groupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.class_groupsScalarWhereWithAggregatesInput | Prisma.class_groupsScalarWhereWithAggregatesInput[];
    class_group_id?: Prisma.IntWithAggregatesFilter<"class_groups"> | number;
    course_id?: Prisma.IntWithAggregatesFilter<"class_groups"> | number;
    shift_id?: Prisma.IntWithAggregatesFilter<"class_groups"> | number;
    name?: Prisma.StringWithAggregatesFilter<"class_groups"> | string;
    teacher_id?: Prisma.IntNullableWithAggregatesFilter<"class_groups"> | number | null;
    start_date?: Prisma.DateTimeWithAggregatesFilter<"class_groups"> | Date | string;
    end_date?: Prisma.DateTimeNullableWithAggregatesFilter<"class_groups"> | Date | string | null;
    max_students?: Prisma.IntNullableWithAggregatesFilter<"class_groups"> | number | null;
    zalo_link?: Prisma.StringNullableWithAggregatesFilter<"class_groups"> | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"class_groups"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"class_groups"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"class_groups"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"class_groups"> | Date | string | null;
};
export type class_groupsCreateInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsCreateManyInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type class_groupsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_groupsUncheckedUpdateManyInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Class_groupsListRelationFilter = {
    every?: Prisma.class_groupsWhereInput;
    some?: Prisma.class_groupsWhereInput;
    none?: Prisma.class_groupsWhereInput;
};
export type class_groupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Class_groupsScalarRelationFilter = {
    is?: Prisma.class_groupsWhereInput;
    isNot?: Prisma.class_groupsWhereInput;
};
export type class_groupsCountOrderByAggregateInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    max_students?: Prisma.SortOrder;
    zalo_link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type class_groupsAvgOrderByAggregateInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    max_students?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type class_groupsMaxOrderByAggregateInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    max_students?: Prisma.SortOrder;
    zalo_link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type class_groupsMinOrderByAggregateInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    max_students?: Prisma.SortOrder;
    zalo_link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type class_groupsSumOrderByAggregateInput = {
    class_group_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    shift_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    max_students?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type Class_groupsNullableScalarRelationFilter = {
    is?: Prisma.class_groupsWhereInput | null;
    isNot?: Prisma.class_groupsWhereInput | null;
};
export type class_groupsCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput> | Prisma.class_groupsCreateWithoutTeacherInput[] | Prisma.class_groupsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutTeacherInput | Prisma.class_groupsCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.class_groupsCreateManyTeacherInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput> | Prisma.class_groupsCreateWithoutCreatorInput[] | Prisma.class_groupsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCreatorInput | Prisma.class_groupsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.class_groupsCreateManyCreatorInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput> | Prisma.class_groupsCreateWithoutTeacherInput[] | Prisma.class_groupsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutTeacherInput | Prisma.class_groupsCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.class_groupsCreateManyTeacherInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput> | Prisma.class_groupsCreateWithoutCreatorInput[] | Prisma.class_groupsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCreatorInput | Prisma.class_groupsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.class_groupsCreateManyCreatorInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput> | Prisma.class_groupsCreateWithoutTeacherInput[] | Prisma.class_groupsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutTeacherInput | Prisma.class_groupsCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutTeacherInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.class_groupsCreateManyTeacherInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutTeacherInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutTeacherInput | Prisma.class_groupsUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput> | Prisma.class_groupsCreateWithoutCreatorInput[] | Prisma.class_groupsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCreatorInput | Prisma.class_groupsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.class_groupsCreateManyCreatorInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutCreatorInput | Prisma.class_groupsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput> | Prisma.class_groupsCreateWithoutTeacherInput[] | Prisma.class_groupsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutTeacherInput | Prisma.class_groupsCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutTeacherInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.class_groupsCreateManyTeacherInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutTeacherInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutTeacherInput | Prisma.class_groupsUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput> | Prisma.class_groupsCreateWithoutCreatorInput[] | Prisma.class_groupsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCreatorInput | Prisma.class_groupsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.class_groupsCreateManyCreatorInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutCreatorInput | Prisma.class_groupsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput> | Prisma.class_groupsCreateWithoutCourseInput[] | Prisma.class_groupsUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCourseInput | Prisma.class_groupsCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.class_groupsCreateManyCourseInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput> | Prisma.class_groupsCreateWithoutCourseInput[] | Prisma.class_groupsUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCourseInput | Prisma.class_groupsCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.class_groupsCreateManyCourseInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput> | Prisma.class_groupsCreateWithoutCourseInput[] | Prisma.class_groupsUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCourseInput | Prisma.class_groupsCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutCourseInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.class_groupsCreateManyCourseInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutCourseInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutCourseInput | Prisma.class_groupsUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput> | Prisma.class_groupsCreateWithoutCourseInput[] | Prisma.class_groupsUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutCourseInput | Prisma.class_groupsCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutCourseInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.class_groupsCreateManyCourseInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutCourseInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutCourseInput | Prisma.class_groupsUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutClassesInput, Prisma.class_groupsUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutClassesInput;
    connect?: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutClassesInput, Prisma.class_groupsUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.class_groupsUpsertWithoutClassesInput;
    connect?: Prisma.class_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.class_groupsUpdateToOneWithWhereWithoutClassesInput, Prisma.class_groupsUpdateWithoutClassesInput>, Prisma.class_groupsUncheckedUpdateWithoutClassesInput>;
};
export type class_groupsCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput> | Prisma.class_groupsCreateWithoutShiftInput[] | Prisma.class_groupsUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutShiftInput | Prisma.class_groupsCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.class_groupsCreateManyShiftInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUncheckedCreateNestedManyWithoutShiftInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput> | Prisma.class_groupsCreateWithoutShiftInput[] | Prisma.class_groupsUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutShiftInput | Prisma.class_groupsCreateOrConnectWithoutShiftInput[];
    createMany?: Prisma.class_groupsCreateManyShiftInputEnvelope;
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
};
export type class_groupsUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput> | Prisma.class_groupsCreateWithoutShiftInput[] | Prisma.class_groupsUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutShiftInput | Prisma.class_groupsCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutShiftInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.class_groupsCreateManyShiftInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutShiftInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutShiftInput | Prisma.class_groupsUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput> | Prisma.class_groupsCreateWithoutShiftInput[] | Prisma.class_groupsUncheckedCreateWithoutShiftInput[];
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutShiftInput | Prisma.class_groupsCreateOrConnectWithoutShiftInput[];
    upsert?: Prisma.class_groupsUpsertWithWhereUniqueWithoutShiftInput | Prisma.class_groupsUpsertWithWhereUniqueWithoutShiftInput[];
    createMany?: Prisma.class_groupsCreateManyShiftInputEnvelope;
    set?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    disconnect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    delete?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    connect?: Prisma.class_groupsWhereUniqueInput | Prisma.class_groupsWhereUniqueInput[];
    update?: Prisma.class_groupsUpdateWithWhereUniqueWithoutShiftInput | Prisma.class_groupsUpdateWithWhereUniqueWithoutShiftInput[];
    updateMany?: Prisma.class_groupsUpdateManyWithWhereWithoutShiftInput | Prisma.class_groupsUpdateManyWithWhereWithoutShiftInput[];
    deleteMany?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
};
export type class_groupsCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutMembersInput, Prisma.class_groupsUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutMembersInput;
    connect?: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutMembersInput, Prisma.class_groupsUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.class_groupsUpsertWithoutMembersInput;
    connect?: Prisma.class_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.class_groupsUpdateToOneWithWhereWithoutMembersInput, Prisma.class_groupsUpdateWithoutMembersInput>, Prisma.class_groupsUncheckedUpdateWithoutMembersInput>;
};
export type class_groupsCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutNotificationsInput, Prisma.class_groupsUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.class_groupsCreateWithoutNotificationsInput, Prisma.class_groupsUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.class_groupsCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.class_groupsUpsertWithoutNotificationsInput;
    disconnect?: Prisma.class_groupsWhereInput | boolean;
    delete?: Prisma.class_groupsWhereInput | boolean;
    connect?: Prisma.class_groupsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.class_groupsUpdateToOneWithWhereWithoutNotificationsInput, Prisma.class_groupsUpdateWithoutNotificationsInput>, Prisma.class_groupsUncheckedUpdateWithoutNotificationsInput>;
};
export type class_groupsCreateWithoutTeacherInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutTeacherInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutTeacherInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput>;
};
export type class_groupsCreateManyTeacherInputEnvelope = {
    data: Prisma.class_groupsCreateManyTeacherInput | Prisma.class_groupsCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type class_groupsCreateWithoutCreatorInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutCreatorInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutCreatorInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput>;
};
export type class_groupsCreateManyCreatorInputEnvelope = {
    data: Prisma.class_groupsCreateManyCreatorInput | Prisma.class_groupsCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type class_groupsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutTeacherInput, Prisma.class_groupsUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutTeacherInput, Prisma.class_groupsUncheckedCreateWithoutTeacherInput>;
};
export type class_groupsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutTeacherInput, Prisma.class_groupsUncheckedUpdateWithoutTeacherInput>;
};
export type class_groupsUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.class_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyWithoutTeacherInput>;
};
export type class_groupsScalarWhereInput = {
    AND?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
    OR?: Prisma.class_groupsScalarWhereInput[];
    NOT?: Prisma.class_groupsScalarWhereInput | Prisma.class_groupsScalarWhereInput[];
    class_group_id?: Prisma.IntFilter<"class_groups"> | number;
    course_id?: Prisma.IntFilter<"class_groups"> | number;
    shift_id?: Prisma.IntFilter<"class_groups"> | number;
    name?: Prisma.StringFilter<"class_groups"> | string;
    teacher_id?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    start_date?: Prisma.DateTimeFilter<"class_groups"> | Date | string;
    end_date?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    max_students?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    zalo_link?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    status?: Prisma.StringNullableFilter<"class_groups"> | string | null;
    created_by?: Prisma.IntNullableFilter<"class_groups"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"class_groups"> | Date | string | null;
};
export type class_groupsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutCreatorInput, Prisma.class_groupsUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutCreatorInput, Prisma.class_groupsUncheckedCreateWithoutCreatorInput>;
};
export type class_groupsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutCreatorInput, Prisma.class_groupsUncheckedUpdateWithoutCreatorInput>;
};
export type class_groupsUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.class_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyWithoutCreatorInput>;
};
export type class_groupsCreateWithoutCourseInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutCourseInput = {
    class_group_id?: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutCourseInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput>;
};
export type class_groupsCreateManyCourseInputEnvelope = {
    data: Prisma.class_groupsCreateManyCourseInput | Prisma.class_groupsCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type class_groupsUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutCourseInput, Prisma.class_groupsUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutCourseInput, Prisma.class_groupsUncheckedCreateWithoutCourseInput>;
};
export type class_groupsUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutCourseInput, Prisma.class_groupsUncheckedUpdateWithoutCourseInput>;
};
export type class_groupsUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.class_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyWithoutCourseInput>;
};
export type class_groupsCreateWithoutClassesInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutClassesInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutClassesInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutClassesInput, Prisma.class_groupsUncheckedCreateWithoutClassesInput>;
};
export type class_groupsUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutClassesInput, Prisma.class_groupsUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutClassesInput, Prisma.class_groupsUncheckedCreateWithoutClassesInput>;
    where?: Prisma.class_groupsWhereInput;
};
export type class_groupsUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.class_groupsWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutClassesInput, Prisma.class_groupsUncheckedUpdateWithoutClassesInput>;
};
export type class_groupsUpdateWithoutClassesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutClassesInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsCreateWithoutShiftInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutShiftInput = {
    class_group_id?: number;
    course_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutShiftInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput>;
};
export type class_groupsCreateManyShiftInputEnvelope = {
    data: Prisma.class_groupsCreateManyShiftInput | Prisma.class_groupsCreateManyShiftInput[];
    skipDuplicates?: boolean;
};
export type class_groupsUpsertWithWhereUniqueWithoutShiftInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutShiftInput, Prisma.class_groupsUncheckedUpdateWithoutShiftInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutShiftInput, Prisma.class_groupsUncheckedCreateWithoutShiftInput>;
};
export type class_groupsUpdateWithWhereUniqueWithoutShiftInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutShiftInput, Prisma.class_groupsUncheckedUpdateWithoutShiftInput>;
};
export type class_groupsUpdateManyWithWhereWithoutShiftInput = {
    where: Prisma.class_groupsScalarWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyWithoutShiftInput>;
};
export type class_groupsCreateWithoutMembersInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsUncheckedCreateWithoutMembersInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutClass_groupsInput;
};
export type class_groupsCreateOrConnectWithoutMembersInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutMembersInput, Prisma.class_groupsUncheckedCreateWithoutMembersInput>;
};
export type class_groupsUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutMembersInput, Prisma.class_groupsUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutMembersInput, Prisma.class_groupsUncheckedCreateWithoutMembersInput>;
    where?: Prisma.class_groupsWhereInput;
};
export type class_groupsUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.class_groupsWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutMembersInput, Prisma.class_groupsUncheckedUpdateWithoutMembersInput>;
};
export type class_groupsUpdateWithoutMembersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutMembersInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsCreateWithoutNotificationsInput = {
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    course: Prisma.coursesCreateNestedOneWithoutClass_groupsInput;
    shift: Prisma.study_shiftsCreateNestedOneWithoutClass_groupsInput;
    teacher?: Prisma.usersCreateNestedOneWithoutClass_groups_taughtInput;
    creator?: Prisma.usersCreateNestedOneWithoutClass_groups_createdInput;
    members?: Prisma.class_group_membersCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesCreateNestedManyWithoutClass_groupInput;
};
export type class_groupsUncheckedCreateWithoutNotificationsInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutClass_groupInput;
    classes?: Prisma.classesUncheckedCreateNestedManyWithoutClass_groupInput;
};
export type class_groupsCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutNotificationsInput, Prisma.class_groupsUncheckedCreateWithoutNotificationsInput>;
};
export type class_groupsUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.class_groupsUpdateWithoutNotificationsInput, Prisma.class_groupsUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.class_groupsCreateWithoutNotificationsInput, Prisma.class_groupsUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.class_groupsWhereInput;
};
export type class_groupsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.class_groupsWhereInput;
    data: Prisma.XOR<Prisma.class_groupsUpdateWithoutNotificationsInput, Prisma.class_groupsUncheckedUpdateWithoutNotificationsInput>;
};
export type class_groupsUpdateWithoutNotificationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
};
export type class_groupsUncheckedUpdateWithoutNotificationsInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
};
export type class_groupsCreateManyTeacherInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type class_groupsCreateManyCreatorInput = {
    class_group_id?: number;
    course_id: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type class_groupsUpdateWithoutTeacherInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutTeacherInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateManyWithoutTeacherInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_groupsUpdateWithoutCreatorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutCreatorInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateManyWithoutCreatorInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_groupsCreateManyCourseInput = {
    class_group_id?: number;
    shift_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type class_groupsUpdateWithoutCourseInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    shift?: Prisma.study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutCourseInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateManyWithoutCourseInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type class_groupsCreateManyShiftInput = {
    class_group_id?: number;
    course_id: number;
    name: string;
    teacher_id?: number | null;
    start_date: Date | string;
    end_date?: Date | string | null;
    max_students?: number | null;
    zalo_link?: string | null;
    status?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type class_groupsUpdateWithoutShiftInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    course?: Prisma.coursesUpdateOneRequiredWithoutClass_groupsNestedInput;
    teacher?: Prisma.usersUpdateOneWithoutClass_groups_taughtNestedInput;
    creator?: Prisma.usersUpdateOneWithoutClass_groups_createdNestedInput;
    members?: Prisma.class_group_membersUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateWithoutShiftInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    members?: Prisma.class_group_membersUncheckedUpdateManyWithoutClass_groupNestedInput;
    classes?: Prisma.classesUncheckedUpdateManyWithoutClass_groupNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutClass_groupsNestedInput;
};
export type class_groupsUncheckedUpdateManyWithoutShiftInput = {
    class_group_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    max_students?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    zalo_link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Class_groupsCountOutputType = {
    members: number;
    classes: number;
    notifications: number;
};
export type Class_groupsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | Class_groupsCountOutputTypeCountMembersArgs;
    classes?: boolean | Class_groupsCountOutputTypeCountClassesArgs;
    notifications?: boolean | Class_groupsCountOutputTypeCountNotificationsArgs;
};
export type Class_groupsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Class_groupsCountOutputTypeSelect<ExtArgs> | null;
};
export type Class_groupsCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_group_membersWhereInput;
};
export type Class_groupsCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.classesWhereInput;
};
export type Class_groupsCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
};
export type class_groupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    class_group_id?: boolean;
    course_id?: boolean;
    shift_id?: boolean;
    name?: boolean;
    teacher_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    max_students?: boolean;
    zalo_link?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
    members?: boolean | Prisma.class_groups$membersArgs<ExtArgs>;
    classes?: boolean | Prisma.class_groups$classesArgs<ExtArgs>;
    notifications?: boolean | Prisma.class_groups$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Class_groupsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["class_groups"]>;
export type class_groupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    class_group_id?: boolean;
    course_id?: boolean;
    shift_id?: boolean;
    name?: boolean;
    teacher_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    max_students?: boolean;
    zalo_link?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["class_groups"]>;
export type class_groupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    class_group_id?: boolean;
    course_id?: boolean;
    shift_id?: boolean;
    name?: boolean;
    teacher_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    max_students?: boolean;
    zalo_link?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["class_groups"]>;
export type class_groupsSelectScalar = {
    class_group_id?: boolean;
    course_id?: boolean;
    shift_id?: boolean;
    name?: boolean;
    teacher_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    max_students?: boolean;
    zalo_link?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type class_groupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"class_group_id" | "course_id" | "shift_id" | "name" | "teacher_id" | "start_date" | "end_date" | "max_students" | "zalo_link" | "status" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["class_groups"]>;
export type class_groupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
    members?: boolean | Prisma.class_groups$membersArgs<ExtArgs>;
    classes?: boolean | Prisma.class_groups$classesArgs<ExtArgs>;
    notifications?: boolean | Prisma.class_groups$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Class_groupsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type class_groupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
};
export type class_groupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.coursesDefaultArgs<ExtArgs>;
    shift?: boolean | Prisma.study_shiftsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.class_groups$teacherArgs<ExtArgs>;
    creator?: boolean | Prisma.class_groups$creatorArgs<ExtArgs>;
};
export type $class_groupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "class_groups";
    objects: {
        course: Prisma.$coursesPayload<ExtArgs>;
        shift: Prisma.$study_shiftsPayload<ExtArgs>;
        teacher: Prisma.$usersPayload<ExtArgs> | null;
        creator: Prisma.$usersPayload<ExtArgs> | null;
        members: Prisma.$class_group_membersPayload<ExtArgs>[];
        classes: Prisma.$classesPayload<ExtArgs>[];
        notifications: Prisma.$notificationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        class_group_id: number;
        course_id: number;
        shift_id: number;
        name: string;
        teacher_id: number | null;
        start_date: Date;
        end_date: Date | null;
        max_students: number | null;
        zalo_link: string | null;
        status: string | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["class_groups"]>;
    composites: {};
};
export type class_groupsGetPayload<S extends boolean | null | undefined | class_groupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$class_groupsPayload, S>;
export type class_groupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<class_groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Class_groupsCountAggregateInputType | true;
};
export interface class_groupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['class_groups'];
        meta: {
            name: 'class_groups';
        };
    };
    findUnique<T extends class_groupsFindUniqueArgs>(args: Prisma.SelectSubset<T, class_groupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends class_groupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, class_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends class_groupsFindFirstArgs>(args?: Prisma.SelectSubset<T, class_groupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends class_groupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, class_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends class_groupsFindManyArgs>(args?: Prisma.SelectSubset<T, class_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends class_groupsCreateArgs>(args: Prisma.SelectSubset<T, class_groupsCreateArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends class_groupsCreateManyArgs>(args?: Prisma.SelectSubset<T, class_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends class_groupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, class_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends class_groupsDeleteArgs>(args: Prisma.SelectSubset<T, class_groupsDeleteArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends class_groupsUpdateArgs>(args: Prisma.SelectSubset<T, class_groupsUpdateArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends class_groupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, class_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends class_groupsUpdateManyArgs>(args: Prisma.SelectSubset<T, class_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends class_groupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, class_groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends class_groupsUpsertArgs>(args: Prisma.SelectSubset<T, class_groupsUpsertArgs<ExtArgs>>): Prisma.Prisma__class_groupsClient<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends class_groupsCountArgs>(args?: Prisma.Subset<T, class_groupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Class_groupsCountAggregateOutputType> : number>;
    aggregate<T extends Class_groupsAggregateArgs>(args: Prisma.Subset<T, Class_groupsAggregateArgs>): Prisma.PrismaPromise<GetClass_groupsAggregateType<T>>;
    groupBy<T extends class_groupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: class_groupsGroupByArgs['orderBy'];
    } : {
        orderBy?: class_groupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, class_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClass_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: class_groupsFieldRefs;
}
export interface Prisma__class_groupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.coursesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.coursesDefaultArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    shift<T extends Prisma.study_shiftsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.study_shiftsDefaultArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.class_groups$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groups$teacherArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.class_groups$creatorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groups$creatorArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    members<T extends Prisma.class_groups$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groups$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    classes<T extends Prisma.class_groups$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groups$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.class_groups$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.class_groups$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface class_groupsFieldRefs {
    readonly class_group_id: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly course_id: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly shift_id: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly name: Prisma.FieldRef<"class_groups", 'String'>;
    readonly teacher_id: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly start_date: Prisma.FieldRef<"class_groups", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"class_groups", 'DateTime'>;
    readonly max_students: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly zalo_link: Prisma.FieldRef<"class_groups", 'String'>;
    readonly status: Prisma.FieldRef<"class_groups", 'String'>;
    readonly created_by: Prisma.FieldRef<"class_groups", 'Int'>;
    readonly created_at: Prisma.FieldRef<"class_groups", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"class_groups", 'DateTime'>;
}
export type class_groupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithRelationInput | Prisma.class_groupsOrderByWithRelationInput[];
    cursor?: Prisma.class_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_groupsScalarFieldEnum | Prisma.Class_groupsScalarFieldEnum[];
};
export type class_groupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithRelationInput | Prisma.class_groupsOrderByWithRelationInput[];
    cursor?: Prisma.class_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_groupsScalarFieldEnum | Prisma.Class_groupsScalarFieldEnum[];
};
export type class_groupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithRelationInput | Prisma.class_groupsOrderByWithRelationInput[];
    cursor?: Prisma.class_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_groupsScalarFieldEnum | Prisma.Class_groupsScalarFieldEnum[];
};
export type class_groupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_groupsCreateInput, Prisma.class_groupsUncheckedCreateInput>;
};
export type class_groupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.class_groupsCreateManyInput | Prisma.class_groupsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type class_groupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    data: Prisma.class_groupsCreateManyInput | Prisma.class_groupsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.class_groupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type class_groupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_groupsUpdateInput, Prisma.class_groupsUncheckedUpdateInput>;
    where: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyInput>;
    where?: Prisma.class_groupsWhereInput;
    limit?: number;
};
export type class_groupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.class_groupsUpdateManyMutationInput, Prisma.class_groupsUncheckedUpdateManyInput>;
    where?: Prisma.class_groupsWhereInput;
    limit?: number;
    include?: Prisma.class_groupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type class_groupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where: Prisma.class_groupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.class_groupsCreateInput, Prisma.class_groupsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.class_groupsUpdateInput, Prisma.class_groupsUncheckedUpdateInput>;
};
export type class_groupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where: Prisma.class_groupsWhereUniqueInput;
};
export type class_groupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_groupsWhereInput;
    limit?: number;
};
export type class_groups$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type class_groups$creatorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type class_groups$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type class_groups$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.classesSelect<ExtArgs> | null;
    omit?: Prisma.classesOmit<ExtArgs> | null;
    include?: Prisma.classesInclude<ExtArgs> | null;
    where?: Prisma.classesWhereInput;
    orderBy?: Prisma.classesOrderByWithRelationInput | Prisma.classesOrderByWithRelationInput[];
    cursor?: Prisma.classesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClassesScalarFieldEnum | Prisma.ClassesScalarFieldEnum[];
};
export type class_groups$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type class_groupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
};
export {};
