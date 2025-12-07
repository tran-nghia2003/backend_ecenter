import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type course_teachersModel = runtime.Types.Result.DefaultSelection<Prisma.$course_teachersPayload>;
export type AggregateCourse_teachers = {
    _count: Course_teachersCountAggregateOutputType | null;
    _avg: Course_teachersAvgAggregateOutputType | null;
    _sum: Course_teachersSumAggregateOutputType | null;
    _min: Course_teachersMinAggregateOutputType | null;
    _max: Course_teachersMaxAggregateOutputType | null;
};
export type Course_teachersAvgAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    teacher_id: number | null;
};
export type Course_teachersSumAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    teacher_id: number | null;
};
export type Course_teachersMinAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    teacher_id: number | null;
    role_in_course: string | null;
    assigned_at: Date | null;
};
export type Course_teachersMaxAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    teacher_id: number | null;
    role_in_course: string | null;
    assigned_at: Date | null;
};
export type Course_teachersCountAggregateOutputType = {
    id: number;
    course_id: number;
    teacher_id: number;
    role_in_course: number;
    assigned_at: number;
    _all: number;
};
export type Course_teachersAvgAggregateInputType = {
    id?: true;
    course_id?: true;
    teacher_id?: true;
};
export type Course_teachersSumAggregateInputType = {
    id?: true;
    course_id?: true;
    teacher_id?: true;
};
export type Course_teachersMinAggregateInputType = {
    id?: true;
    course_id?: true;
    teacher_id?: true;
    role_in_course?: true;
    assigned_at?: true;
};
export type Course_teachersMaxAggregateInputType = {
    id?: true;
    course_id?: true;
    teacher_id?: true;
    role_in_course?: true;
    assigned_at?: true;
};
export type Course_teachersCountAggregateInputType = {
    id?: true;
    course_id?: true;
    teacher_id?: true;
    role_in_course?: true;
    assigned_at?: true;
    _all?: true;
};
export type Course_teachersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_teachersWhereInput;
    orderBy?: Prisma.course_teachersOrderByWithRelationInput | Prisma.course_teachersOrderByWithRelationInput[];
    cursor?: Prisma.course_teachersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Course_teachersCountAggregateInputType;
    _avg?: Course_teachersAvgAggregateInputType;
    _sum?: Course_teachersSumAggregateInputType;
    _min?: Course_teachersMinAggregateInputType;
    _max?: Course_teachersMaxAggregateInputType;
};
export type GetCourse_teachersAggregateType<T extends Course_teachersAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse_teachers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse_teachers[P]> : Prisma.GetScalarType<T[P], AggregateCourse_teachers[P]>;
};
export type course_teachersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_teachersWhereInput;
    orderBy?: Prisma.course_teachersOrderByWithAggregationInput | Prisma.course_teachersOrderByWithAggregationInput[];
    by: Prisma.Course_teachersScalarFieldEnum[] | Prisma.Course_teachersScalarFieldEnum;
    having?: Prisma.course_teachersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Course_teachersCountAggregateInputType | true;
    _avg?: Course_teachersAvgAggregateInputType;
    _sum?: Course_teachersSumAggregateInputType;
    _min?: Course_teachersMinAggregateInputType;
    _max?: Course_teachersMaxAggregateInputType;
};
export type Course_teachersGroupByOutputType = {
    id: number;
    course_id: number | null;
    teacher_id: number | null;
    role_in_course: string | null;
    assigned_at: Date | null;
    _count: Course_teachersCountAggregateOutputType | null;
    _avg: Course_teachersAvgAggregateOutputType | null;
    _sum: Course_teachersSumAggregateOutputType | null;
    _min: Course_teachersMinAggregateOutputType | null;
    _max: Course_teachersMaxAggregateOutputType | null;
};
type GetCourse_teachersGroupByPayload<T extends course_teachersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Course_teachersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Course_teachersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Course_teachersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Course_teachersGroupByOutputType[P]>;
}>>;
export type course_teachersWhereInput = {
    AND?: Prisma.course_teachersWhereInput | Prisma.course_teachersWhereInput[];
    OR?: Prisma.course_teachersWhereInput[];
    NOT?: Prisma.course_teachersWhereInput | Prisma.course_teachersWhereInput[];
    id?: Prisma.IntFilter<"course_teachers"> | number;
    course_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    teacher_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    role_in_course?: Prisma.StringNullableFilter<"course_teachers"> | string | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"course_teachers"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type course_teachersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_in_course?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigned_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type course_teachersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    course_id_teacher_id?: Prisma.course_teachersCourse_idTeacher_idCompoundUniqueInput;
    AND?: Prisma.course_teachersWhereInput | Prisma.course_teachersWhereInput[];
    OR?: Prisma.course_teachersWhereInput[];
    NOT?: Prisma.course_teachersWhereInput | Prisma.course_teachersWhereInput[];
    course_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    teacher_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    role_in_course?: Prisma.StringNullableFilter<"course_teachers"> | string | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"course_teachers"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "id" | "course_id_teacher_id">;
export type course_teachersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_in_course?: Prisma.SortOrderInput | Prisma.SortOrder;
    assigned_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.course_teachersCountOrderByAggregateInput;
    _avg?: Prisma.course_teachersAvgOrderByAggregateInput;
    _max?: Prisma.course_teachersMaxOrderByAggregateInput;
    _min?: Prisma.course_teachersMinOrderByAggregateInput;
    _sum?: Prisma.course_teachersSumOrderByAggregateInput;
};
export type course_teachersScalarWhereWithAggregatesInput = {
    AND?: Prisma.course_teachersScalarWhereWithAggregatesInput | Prisma.course_teachersScalarWhereWithAggregatesInput[];
    OR?: Prisma.course_teachersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.course_teachersScalarWhereWithAggregatesInput | Prisma.course_teachersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"course_teachers"> | number;
    course_id?: Prisma.IntNullableWithAggregatesFilter<"course_teachers"> | number | null;
    teacher_id?: Prisma.IntNullableWithAggregatesFilter<"course_teachers"> | number | null;
    role_in_course?: Prisma.StringNullableWithAggregatesFilter<"course_teachers"> | string | null;
    assigned_at?: Prisma.DateTimeNullableWithAggregatesFilter<"course_teachers"> | Date | string | null;
};
export type course_teachersCreateInput = {
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_teachersInput;
    users?: Prisma.usersCreateNestedOneWithoutCourse_teachersInput;
};
export type course_teachersUncheckedCreateInput = {
    id?: number;
    course_id?: number | null;
    teacher_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersUpdateInput = {
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutCourse_teachersNestedInput;
    users?: Prisma.usersUpdateOneWithoutCourse_teachersNestedInput;
};
export type course_teachersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersCreateManyInput = {
    id?: number;
    course_id?: number | null;
    teacher_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersUpdateManyMutationInput = {
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Course_teachersListRelationFilter = {
    every?: Prisma.course_teachersWhereInput;
    some?: Prisma.course_teachersWhereInput;
    none?: Prisma.course_teachersWhereInput;
};
export type course_teachersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type course_teachersCourse_idTeacher_idCompoundUniqueInput = {
    course_id: number;
    teacher_id: number;
};
export type course_teachersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    role_in_course?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type course_teachersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
};
export type course_teachersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    role_in_course?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type course_teachersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    role_in_course?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type course_teachersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
};
export type course_teachersCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput> | Prisma.course_teachersCreateWithoutUsersInput[] | Prisma.course_teachersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutUsersInput | Prisma.course_teachersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.course_teachersCreateManyUsersInputEnvelope;
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
};
export type course_teachersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput> | Prisma.course_teachersCreateWithoutUsersInput[] | Prisma.course_teachersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutUsersInput | Prisma.course_teachersCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.course_teachersCreateManyUsersInputEnvelope;
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
};
export type course_teachersUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput> | Prisma.course_teachersCreateWithoutUsersInput[] | Prisma.course_teachersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutUsersInput | Prisma.course_teachersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.course_teachersUpsertWithWhereUniqueWithoutUsersInput | Prisma.course_teachersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.course_teachersCreateManyUsersInputEnvelope;
    set?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    disconnect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    delete?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    update?: Prisma.course_teachersUpdateWithWhereUniqueWithoutUsersInput | Prisma.course_teachersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.course_teachersUpdateManyWithWhereWithoutUsersInput | Prisma.course_teachersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
};
export type course_teachersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput> | Prisma.course_teachersCreateWithoutUsersInput[] | Prisma.course_teachersUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutUsersInput | Prisma.course_teachersCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.course_teachersUpsertWithWhereUniqueWithoutUsersInput | Prisma.course_teachersUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.course_teachersCreateManyUsersInputEnvelope;
    set?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    disconnect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    delete?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    update?: Prisma.course_teachersUpdateWithWhereUniqueWithoutUsersInput | Prisma.course_teachersUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.course_teachersUpdateManyWithWhereWithoutUsersInput | Prisma.course_teachersUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
};
export type course_teachersCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput> | Prisma.course_teachersCreateWithoutCoursesInput[] | Prisma.course_teachersUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutCoursesInput | Prisma.course_teachersCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_teachersCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
};
export type course_teachersUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput> | Prisma.course_teachersCreateWithoutCoursesInput[] | Prisma.course_teachersUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutCoursesInput | Prisma.course_teachersCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_teachersCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
};
export type course_teachersUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput> | Prisma.course_teachersCreateWithoutCoursesInput[] | Prisma.course_teachersUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutCoursesInput | Prisma.course_teachersCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_teachersUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_teachersUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_teachersCreateManyCoursesInputEnvelope;
    set?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    disconnect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    delete?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    update?: Prisma.course_teachersUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_teachersUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_teachersUpdateManyWithWhereWithoutCoursesInput | Prisma.course_teachersUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
};
export type course_teachersUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput> | Prisma.course_teachersCreateWithoutCoursesInput[] | Prisma.course_teachersUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_teachersCreateOrConnectWithoutCoursesInput | Prisma.course_teachersCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_teachersUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_teachersUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_teachersCreateManyCoursesInputEnvelope;
    set?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    disconnect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    delete?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    connect?: Prisma.course_teachersWhereUniqueInput | Prisma.course_teachersWhereUniqueInput[];
    update?: Prisma.course_teachersUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_teachersUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_teachersUpdateManyWithWhereWithoutCoursesInput | Prisma.course_teachersUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
};
export type course_teachersCreateWithoutUsersInput = {
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_teachersInput;
};
export type course_teachersUncheckedCreateWithoutUsersInput = {
    id?: number;
    course_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersCreateOrConnectWithoutUsersInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput>;
};
export type course_teachersCreateManyUsersInputEnvelope = {
    data: Prisma.course_teachersCreateManyUsersInput | Prisma.course_teachersCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type course_teachersUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_teachersUpdateWithoutUsersInput, Prisma.course_teachersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.course_teachersCreateWithoutUsersInput, Prisma.course_teachersUncheckedCreateWithoutUsersInput>;
};
export type course_teachersUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_teachersUpdateWithoutUsersInput, Prisma.course_teachersUncheckedUpdateWithoutUsersInput>;
};
export type course_teachersUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.course_teachersScalarWhereInput;
    data: Prisma.XOR<Prisma.course_teachersUpdateManyMutationInput, Prisma.course_teachersUncheckedUpdateManyWithoutUsersInput>;
};
export type course_teachersScalarWhereInput = {
    AND?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
    OR?: Prisma.course_teachersScalarWhereInput[];
    NOT?: Prisma.course_teachersScalarWhereInput | Prisma.course_teachersScalarWhereInput[];
    id?: Prisma.IntFilter<"course_teachers"> | number;
    course_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    teacher_id?: Prisma.IntNullableFilter<"course_teachers"> | number | null;
    role_in_course?: Prisma.StringNullableFilter<"course_teachers"> | string | null;
    assigned_at?: Prisma.DateTimeNullableFilter<"course_teachers"> | Date | string | null;
};
export type course_teachersCreateWithoutCoursesInput = {
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutCourse_teachersInput;
};
export type course_teachersUncheckedCreateWithoutCoursesInput = {
    id?: number;
    teacher_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersCreateOrConnectWithoutCoursesInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput>;
};
export type course_teachersCreateManyCoursesInputEnvelope = {
    data: Prisma.course_teachersCreateManyCoursesInput | Prisma.course_teachersCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type course_teachersUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_teachersUpdateWithoutCoursesInput, Prisma.course_teachersUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.course_teachersCreateWithoutCoursesInput, Prisma.course_teachersUncheckedCreateWithoutCoursesInput>;
};
export type course_teachersUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_teachersWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_teachersUpdateWithoutCoursesInput, Prisma.course_teachersUncheckedUpdateWithoutCoursesInput>;
};
export type course_teachersUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.course_teachersScalarWhereInput;
    data: Prisma.XOR<Prisma.course_teachersUpdateManyMutationInput, Prisma.course_teachersUncheckedUpdateManyWithoutCoursesInput>;
};
export type course_teachersCreateManyUsersInput = {
    id?: number;
    course_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersUpdateWithoutUsersInput = {
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutCourse_teachersNestedInput;
};
export type course_teachersUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersCreateManyCoursesInput = {
    id?: number;
    teacher_id?: number | null;
    role_in_course?: string | null;
    assigned_at?: Date | string | null;
};
export type course_teachersUpdateWithoutCoursesInput = {
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutCourse_teachersNestedInput;
};
export type course_teachersUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role_in_course?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    assigned_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_teachersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    teacher_id?: boolean;
    role_in_course?: boolean;
    assigned_at?: boolean;
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_teachers"]>;
export type course_teachersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    teacher_id?: boolean;
    role_in_course?: boolean;
    assigned_at?: boolean;
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_teachers"]>;
export type course_teachersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    teacher_id?: boolean;
    role_in_course?: boolean;
    assigned_at?: boolean;
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_teachers"]>;
export type course_teachersSelectScalar = {
    id?: boolean;
    course_id?: boolean;
    teacher_id?: boolean;
    role_in_course?: boolean;
    assigned_at?: boolean;
};
export type course_teachersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "course_id" | "teacher_id" | "role_in_course" | "assigned_at", ExtArgs["result"]["course_teachers"]>;
export type course_teachersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
};
export type course_teachersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
};
export type course_teachersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_teachers$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_teachers$usersArgs<ExtArgs>;
};
export type $course_teachersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "course_teachers";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        course_id: number | null;
        teacher_id: number | null;
        role_in_course: string | null;
        assigned_at: Date | null;
    }, ExtArgs["result"]["course_teachers"]>;
    composites: {};
};
export type course_teachersGetPayload<S extends boolean | null | undefined | course_teachersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$course_teachersPayload, S>;
export type course_teachersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<course_teachersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Course_teachersCountAggregateInputType | true;
};
export interface course_teachersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['course_teachers'];
        meta: {
            name: 'course_teachers';
        };
    };
    findUnique<T extends course_teachersFindUniqueArgs>(args: Prisma.SelectSubset<T, course_teachersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends course_teachersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, course_teachersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends course_teachersFindFirstArgs>(args?: Prisma.SelectSubset<T, course_teachersFindFirstArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends course_teachersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, course_teachersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends course_teachersFindManyArgs>(args?: Prisma.SelectSubset<T, course_teachersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends course_teachersCreateArgs>(args: Prisma.SelectSubset<T, course_teachersCreateArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends course_teachersCreateManyArgs>(args?: Prisma.SelectSubset<T, course_teachersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends course_teachersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, course_teachersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends course_teachersDeleteArgs>(args: Prisma.SelectSubset<T, course_teachersDeleteArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends course_teachersUpdateArgs>(args: Prisma.SelectSubset<T, course_teachersUpdateArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends course_teachersDeleteManyArgs>(args?: Prisma.SelectSubset<T, course_teachersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends course_teachersUpdateManyArgs>(args: Prisma.SelectSubset<T, course_teachersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends course_teachersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, course_teachersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends course_teachersUpsertArgs>(args: Prisma.SelectSubset<T, course_teachersUpsertArgs<ExtArgs>>): Prisma.Prisma__course_teachersClient<runtime.Types.Result.GetResult<Prisma.$course_teachersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends course_teachersCountArgs>(args?: Prisma.Subset<T, course_teachersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Course_teachersCountAggregateOutputType> : number>;
    aggregate<T extends Course_teachersAggregateArgs>(args: Prisma.Subset<T, Course_teachersAggregateArgs>): Prisma.PrismaPromise<GetCourse_teachersAggregateType<T>>;
    groupBy<T extends course_teachersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: course_teachersGroupByArgs['orderBy'];
    } : {
        orderBy?: course_teachersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, course_teachersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_teachersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: course_teachersFieldRefs;
}
export interface Prisma__course_teachersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.course_teachers$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_teachers$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.course_teachers$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_teachers$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface course_teachersFieldRefs {
    readonly id: Prisma.FieldRef<"course_teachers", 'Int'>;
    readonly course_id: Prisma.FieldRef<"course_teachers", 'Int'>;
    readonly teacher_id: Prisma.FieldRef<"course_teachers", 'Int'>;
    readonly role_in_course: Prisma.FieldRef<"course_teachers", 'String'>;
    readonly assigned_at: Prisma.FieldRef<"course_teachers", 'DateTime'>;
}
export type course_teachersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where: Prisma.course_teachersWhereUniqueInput;
};
export type course_teachersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where: Prisma.course_teachersWhereUniqueInput;
};
export type course_teachersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where?: Prisma.course_teachersWhereInput;
    orderBy?: Prisma.course_teachersOrderByWithRelationInput | Prisma.course_teachersOrderByWithRelationInput[];
    cursor?: Prisma.course_teachersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_teachersScalarFieldEnum | Prisma.Course_teachersScalarFieldEnum[];
};
export type course_teachersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where?: Prisma.course_teachersWhereInput;
    orderBy?: Prisma.course_teachersOrderByWithRelationInput | Prisma.course_teachersOrderByWithRelationInput[];
    cursor?: Prisma.course_teachersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_teachersScalarFieldEnum | Prisma.Course_teachersScalarFieldEnum[];
};
export type course_teachersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where?: Prisma.course_teachersWhereInput;
    orderBy?: Prisma.course_teachersOrderByWithRelationInput | Prisma.course_teachersOrderByWithRelationInput[];
    cursor?: Prisma.course_teachersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_teachersScalarFieldEnum | Prisma.Course_teachersScalarFieldEnum[];
};
export type course_teachersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.course_teachersCreateInput, Prisma.course_teachersUncheckedCreateInput>;
};
export type course_teachersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.course_teachersCreateManyInput | Prisma.course_teachersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type course_teachersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    data: Prisma.course_teachersCreateManyInput | Prisma.course_teachersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.course_teachersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type course_teachersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_teachersUpdateInput, Prisma.course_teachersUncheckedUpdateInput>;
    where: Prisma.course_teachersWhereUniqueInput;
};
export type course_teachersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.course_teachersUpdateManyMutationInput, Prisma.course_teachersUncheckedUpdateManyInput>;
    where?: Prisma.course_teachersWhereInput;
    limit?: number;
};
export type course_teachersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_teachersUpdateManyMutationInput, Prisma.course_teachersUncheckedUpdateManyInput>;
    where?: Prisma.course_teachersWhereInput;
    limit?: number;
    include?: Prisma.course_teachersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type course_teachersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where: Prisma.course_teachersWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_teachersCreateInput, Prisma.course_teachersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.course_teachersUpdateInput, Prisma.course_teachersUncheckedUpdateInput>;
};
export type course_teachersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
    where: Prisma.course_teachersWhereUniqueInput;
};
export type course_teachersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_teachersWhereInput;
    limit?: number;
};
export type course_teachers$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type course_teachers$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type course_teachersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_teachersSelect<ExtArgs> | null;
    omit?: Prisma.course_teachersOmit<ExtArgs> | null;
    include?: Prisma.course_teachersInclude<ExtArgs> | null;
};
export {};
