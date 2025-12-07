import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type course_prerequisitesModel = runtime.Types.Result.DefaultSelection<Prisma.$course_prerequisitesPayload>;
export type AggregateCourse_prerequisites = {
    _count: Course_prerequisitesCountAggregateOutputType | null;
    _avg: Course_prerequisitesAvgAggregateOutputType | null;
    _sum: Course_prerequisitesSumAggregateOutputType | null;
    _min: Course_prerequisitesMinAggregateOutputType | null;
    _max: Course_prerequisitesMaxAggregateOutputType | null;
};
export type Course_prerequisitesAvgAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    prereq_course_id: number | null;
};
export type Course_prerequisitesSumAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    prereq_course_id: number | null;
};
export type Course_prerequisitesMinAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    prereq_course_id: number | null;
};
export type Course_prerequisitesMaxAggregateOutputType = {
    id: number | null;
    course_id: number | null;
    prereq_course_id: number | null;
};
export type Course_prerequisitesCountAggregateOutputType = {
    id: number;
    course_id: number;
    prereq_course_id: number;
    _all: number;
};
export type Course_prerequisitesAvgAggregateInputType = {
    id?: true;
    course_id?: true;
    prereq_course_id?: true;
};
export type Course_prerequisitesSumAggregateInputType = {
    id?: true;
    course_id?: true;
    prereq_course_id?: true;
};
export type Course_prerequisitesMinAggregateInputType = {
    id?: true;
    course_id?: true;
    prereq_course_id?: true;
};
export type Course_prerequisitesMaxAggregateInputType = {
    id?: true;
    course_id?: true;
    prereq_course_id?: true;
};
export type Course_prerequisitesCountAggregateInputType = {
    id?: true;
    course_id?: true;
    prereq_course_id?: true;
    _all?: true;
};
export type Course_prerequisitesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_prerequisitesWhereInput;
    orderBy?: Prisma.course_prerequisitesOrderByWithRelationInput | Prisma.course_prerequisitesOrderByWithRelationInput[];
    cursor?: Prisma.course_prerequisitesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Course_prerequisitesCountAggregateInputType;
    _avg?: Course_prerequisitesAvgAggregateInputType;
    _sum?: Course_prerequisitesSumAggregateInputType;
    _min?: Course_prerequisitesMinAggregateInputType;
    _max?: Course_prerequisitesMaxAggregateInputType;
};
export type GetCourse_prerequisitesAggregateType<T extends Course_prerequisitesAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse_prerequisites]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse_prerequisites[P]> : Prisma.GetScalarType<T[P], AggregateCourse_prerequisites[P]>;
};
export type course_prerequisitesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_prerequisitesWhereInput;
    orderBy?: Prisma.course_prerequisitesOrderByWithAggregationInput | Prisma.course_prerequisitesOrderByWithAggregationInput[];
    by: Prisma.Course_prerequisitesScalarFieldEnum[] | Prisma.Course_prerequisitesScalarFieldEnum;
    having?: Prisma.course_prerequisitesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Course_prerequisitesCountAggregateInputType | true;
    _avg?: Course_prerequisitesAvgAggregateInputType;
    _sum?: Course_prerequisitesSumAggregateInputType;
    _min?: Course_prerequisitesMinAggregateInputType;
    _max?: Course_prerequisitesMaxAggregateInputType;
};
export type Course_prerequisitesGroupByOutputType = {
    id: number;
    course_id: number | null;
    prereq_course_id: number | null;
    _count: Course_prerequisitesCountAggregateOutputType | null;
    _avg: Course_prerequisitesAvgAggregateOutputType | null;
    _sum: Course_prerequisitesSumAggregateOutputType | null;
    _min: Course_prerequisitesMinAggregateOutputType | null;
    _max: Course_prerequisitesMaxAggregateOutputType | null;
};
type GetCourse_prerequisitesGroupByPayload<T extends course_prerequisitesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Course_prerequisitesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Course_prerequisitesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Course_prerequisitesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Course_prerequisitesGroupByOutputType[P]>;
}>>;
export type course_prerequisitesWhereInput = {
    AND?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    OR?: Prisma.course_prerequisitesWhereInput[];
    NOT?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    id?: Prisma.IntFilter<"course_prerequisites"> | number;
    course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    prereq_courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
};
export type course_prerequisitesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    prereq_courses?: Prisma.coursesOrderByWithRelationInput;
};
export type course_prerequisitesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    course_id_prereq_course_id?: Prisma.course_prerequisitesCourse_idPrereq_course_idCompoundUniqueInput;
    AND?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    OR?: Prisma.course_prerequisitesWhereInput[];
    NOT?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    prereq_courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
}, "id" | "course_id_prereq_course_id">;
export type course_prerequisitesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.course_prerequisitesCountOrderByAggregateInput;
    _avg?: Prisma.course_prerequisitesAvgOrderByAggregateInput;
    _max?: Prisma.course_prerequisitesMaxOrderByAggregateInput;
    _min?: Prisma.course_prerequisitesMinOrderByAggregateInput;
    _sum?: Prisma.course_prerequisitesSumOrderByAggregateInput;
};
export type course_prerequisitesScalarWhereWithAggregatesInput = {
    AND?: Prisma.course_prerequisitesScalarWhereWithAggregatesInput | Prisma.course_prerequisitesScalarWhereWithAggregatesInput[];
    OR?: Prisma.course_prerequisitesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.course_prerequisitesScalarWhereWithAggregatesInput | Prisma.course_prerequisitesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"course_prerequisites"> | number;
    course_id?: Prisma.IntNullableWithAggregatesFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableWithAggregatesFilter<"course_prerequisites"> | number | null;
};
export type course_prerequisitesCreateInput = {
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisitesInput;
    prereq_courses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_prereqInput;
};
export type course_prerequisitesUncheckedCreateInput = {
    id?: number;
    course_id?: number | null;
    prereq_course_id?: number | null;
};
export type course_prerequisitesUpdateInput = {
    courses?: Prisma.coursesUpdateOneWithoutCourse_prerequisitesNestedInput;
    prereq_courses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_prereqNestedInput;
};
export type course_prerequisitesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesCreateManyInput = {
    id?: number;
    course_id?: number | null;
    prereq_course_id?: number | null;
};
export type course_prerequisitesUpdateManyMutationInput = {};
export type course_prerequisitesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Course_prerequisitesListRelationFilter = {
    every?: Prisma.course_prerequisitesWhereInput;
    some?: Prisma.course_prerequisitesWhereInput;
    none?: Prisma.course_prerequisitesWhereInput;
};
export type course_prerequisitesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type course_prerequisitesCourse_idPrereq_course_idCompoundUniqueInput = {
    course_id: number;
    prereq_course_id: number;
};
export type course_prerequisitesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrder;
};
export type course_prerequisitesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrder;
};
export type course_prerequisitesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrder;
};
export type course_prerequisitesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrder;
};
export type course_prerequisitesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrder;
};
export type course_prerequisitesCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput> | Prisma.course_prerequisitesCreateWithoutCoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesCreateNestedManyWithoutPrereq_coursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput> | Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyPrereq_coursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput> | Prisma.course_prerequisitesCreateWithoutCoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUncheckedCreateNestedManyWithoutPrereq_coursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput> | Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyPrereq_coursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput> | Prisma.course_prerequisitesCreateWithoutCoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUpdateManyWithoutPrereq_coursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput> | Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutPrereq_coursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyPrereq_coursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutPrereq_coursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutPrereq_coursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput> | Prisma.course_prerequisitesCreateWithoutCoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUncheckedUpdateManyWithoutPrereq_coursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput> | Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutPrereq_coursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyPrereq_coursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutPrereq_coursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutPrereq_coursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutPrereq_coursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesCreateWithoutCoursesInput = {
    prereq_courses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_prereqInput;
};
export type course_prerequisitesUncheckedCreateWithoutCoursesInput = {
    id?: number;
    prereq_course_id?: number | null;
};
export type course_prerequisitesCreateOrConnectWithoutCoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput>;
};
export type course_prerequisitesCreateManyCoursesInputEnvelope = {
    data: Prisma.course_prerequisitesCreateManyCoursesInput | Prisma.course_prerequisitesCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type course_prerequisitesCreateWithoutPrereq_coursesInput = {
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisitesInput;
};
export type course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput = {
    id?: number;
    course_id?: number | null;
};
export type course_prerequisitesCreateOrConnectWithoutPrereq_coursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput>;
};
export type course_prerequisitesCreateManyPrereq_coursesInputEnvelope = {
    data: Prisma.course_prerequisitesCreateManyPrereq_coursesInput | Prisma.course_prerequisitesCreateManyPrereq_coursesInput[];
    skipDuplicates?: boolean;
};
export type course_prerequisitesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCoursesInput>;
};
export type course_prerequisitesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCoursesInput>;
};
export type course_prerequisitesUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.course_prerequisitesScalarWhereInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyWithoutCoursesInput>;
};
export type course_prerequisitesScalarWhereInput = {
    AND?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
    OR?: Prisma.course_prerequisitesScalarWhereInput[];
    NOT?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
    id?: Prisma.IntFilter<"course_prerequisites"> | number;
    course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
};
export type course_prerequisitesUpsertWithWhereUniqueWithoutPrereq_coursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutPrereq_coursesInput>;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutPrereq_coursesInput>;
};
export type course_prerequisitesUpdateWithWhereUniqueWithoutPrereq_coursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutPrereq_coursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutPrereq_coursesInput>;
};
export type course_prerequisitesUpdateManyWithWhereWithoutPrereq_coursesInput = {
    where: Prisma.course_prerequisitesScalarWhereInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyWithoutPrereq_coursesInput>;
};
export type course_prerequisitesCreateManyCoursesInput = {
    id?: number;
    prereq_course_id?: number | null;
};
export type course_prerequisitesCreateManyPrereq_coursesInput = {
    id?: number;
    course_id?: number | null;
};
export type course_prerequisitesUpdateWithoutCoursesInput = {
    prereq_courses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_prereqNestedInput;
};
export type course_prerequisitesUncheckedUpdateWithoutCoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUncheckedUpdateManyWithoutCoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUpdateWithoutPrereq_coursesInput = {
    courses?: Prisma.coursesUpdateOneWithoutCourse_prerequisitesNestedInput;
};
export type course_prerequisitesUncheckedUpdateWithoutPrereq_coursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUncheckedUpdateManyWithoutPrereq_coursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectScalar = {
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
};
export type course_prerequisitesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "course_id" | "prereq_course_id", ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
};
export type course_prerequisitesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
};
export type course_prerequisitesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_prerequisites$coursesArgs<ExtArgs>;
    prereq_courses?: boolean | Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>;
};
export type $course_prerequisitesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "course_prerequisites";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        prereq_courses: Prisma.$coursesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        course_id: number | null;
        prereq_course_id: number | null;
    }, ExtArgs["result"]["course_prerequisites"]>;
    composites: {};
};
export type course_prerequisitesGetPayload<S extends boolean | null | undefined | course_prerequisitesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload, S>;
export type course_prerequisitesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<course_prerequisitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Course_prerequisitesCountAggregateInputType | true;
};
export interface course_prerequisitesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['course_prerequisites'];
        meta: {
            name: 'course_prerequisites';
        };
    };
    findUnique<T extends course_prerequisitesFindUniqueArgs>(args: Prisma.SelectSubset<T, course_prerequisitesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends course_prerequisitesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, course_prerequisitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends course_prerequisitesFindFirstArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesFindFirstArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends course_prerequisitesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends course_prerequisitesFindManyArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends course_prerequisitesCreateArgs>(args: Prisma.SelectSubset<T, course_prerequisitesCreateArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends course_prerequisitesCreateManyArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends course_prerequisitesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends course_prerequisitesDeleteArgs>(args: Prisma.SelectSubset<T, course_prerequisitesDeleteArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends course_prerequisitesUpdateArgs>(args: Prisma.SelectSubset<T, course_prerequisitesUpdateArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends course_prerequisitesDeleteManyArgs>(args?: Prisma.SelectSubset<T, course_prerequisitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends course_prerequisitesUpdateManyArgs>(args: Prisma.SelectSubset<T, course_prerequisitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends course_prerequisitesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, course_prerequisitesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends course_prerequisitesUpsertArgs>(args: Prisma.SelectSubset<T, course_prerequisitesUpsertArgs<ExtArgs>>): Prisma.Prisma__course_prerequisitesClient<runtime.Types.Result.GetResult<Prisma.$course_prerequisitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends course_prerequisitesCountArgs>(args?: Prisma.Subset<T, course_prerequisitesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Course_prerequisitesCountAggregateOutputType> : number>;
    aggregate<T extends Course_prerequisitesAggregateArgs>(args: Prisma.Subset<T, Course_prerequisitesAggregateArgs>): Prisma.PrismaPromise<GetCourse_prerequisitesAggregateType<T>>;
    groupBy<T extends course_prerequisitesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: course_prerequisitesGroupByArgs['orderBy'];
    } : {
        orderBy?: course_prerequisitesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, course_prerequisitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_prerequisitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: course_prerequisitesFieldRefs;
}
export interface Prisma__course_prerequisitesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.course_prerequisites$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_prerequisites$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    prereq_courses<T extends Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_prerequisites$prereq_coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface course_prerequisitesFieldRefs {
    readonly id: Prisma.FieldRef<"course_prerequisites", 'Int'>;
    readonly course_id: Prisma.FieldRef<"course_prerequisites", 'Int'>;
    readonly prereq_course_id: Prisma.FieldRef<"course_prerequisites", 'Int'>;
}
export type course_prerequisitesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where: Prisma.course_prerequisitesWhereUniqueInput;
};
export type course_prerequisitesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where: Prisma.course_prerequisitesWhereUniqueInput;
};
export type course_prerequisitesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where?: Prisma.course_prerequisitesWhereInput;
    orderBy?: Prisma.course_prerequisitesOrderByWithRelationInput | Prisma.course_prerequisitesOrderByWithRelationInput[];
    cursor?: Prisma.course_prerequisitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_prerequisitesScalarFieldEnum | Prisma.Course_prerequisitesScalarFieldEnum[];
};
export type course_prerequisitesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where?: Prisma.course_prerequisitesWhereInput;
    orderBy?: Prisma.course_prerequisitesOrderByWithRelationInput | Prisma.course_prerequisitesOrderByWithRelationInput[];
    cursor?: Prisma.course_prerequisitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_prerequisitesScalarFieldEnum | Prisma.Course_prerequisitesScalarFieldEnum[];
};
export type course_prerequisitesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where?: Prisma.course_prerequisitesWhereInput;
    orderBy?: Prisma.course_prerequisitesOrderByWithRelationInput | Prisma.course_prerequisitesOrderByWithRelationInput[];
    cursor?: Prisma.course_prerequisitesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_prerequisitesScalarFieldEnum | Prisma.Course_prerequisitesScalarFieldEnum[];
};
export type course_prerequisitesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.course_prerequisitesCreateInput, Prisma.course_prerequisitesUncheckedCreateInput>;
};
export type course_prerequisitesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.course_prerequisitesCreateManyInput | Prisma.course_prerequisitesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type course_prerequisitesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    data: Prisma.course_prerequisitesCreateManyInput | Prisma.course_prerequisitesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.course_prerequisitesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type course_prerequisitesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateInput, Prisma.course_prerequisitesUncheckedUpdateInput>;
    where: Prisma.course_prerequisitesWhereUniqueInput;
};
export type course_prerequisitesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyInput>;
    where?: Prisma.course_prerequisitesWhereInput;
    limit?: number;
};
export type course_prerequisitesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyInput>;
    where?: Prisma.course_prerequisitesWhereInput;
    limit?: number;
    include?: Prisma.course_prerequisitesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type course_prerequisitesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where: Prisma.course_prerequisitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateInput, Prisma.course_prerequisitesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.course_prerequisitesUpdateInput, Prisma.course_prerequisitesUncheckedUpdateInput>;
};
export type course_prerequisitesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
    where: Prisma.course_prerequisitesWhereUniqueInput;
};
export type course_prerequisitesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_prerequisitesWhereInput;
    limit?: number;
};
export type course_prerequisites$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type course_prerequisites$prereq_coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type course_prerequisitesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_prerequisitesSelect<ExtArgs> | null;
    omit?: Prisma.course_prerequisitesOmit<ExtArgs> | null;
    include?: Prisma.course_prerequisitesInclude<ExtArgs> | null;
};
export {};
