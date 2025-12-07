import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
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
    courses_course_prerequisites_course_idTocourses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
};
export type course_prerequisitesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    prereq_course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses_course_prerequisites_course_idTocourses?: Prisma.coursesOrderByWithRelationInput;
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.coursesOrderByWithRelationInput;
};
export type course_prerequisitesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    course_id_prereq_course_id?: Prisma.course_prerequisitesCourse_idPrereq_course_idCompoundUniqueInput;
    AND?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    OR?: Prisma.course_prerequisitesWhereInput[];
    NOT?: Prisma.course_prerequisitesWhereInput | Prisma.course_prerequisitesWhereInput[];
    course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    courses_course_prerequisites_course_idTocourses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
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
    courses_course_prerequisites_course_idTocourses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_course_prerequisites_course_idTocoursesInput;
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_course_prerequisites_prereq_course_idTocoursesInput;
};
export type course_prerequisitesUncheckedCreateInput = {
    id?: number;
    course_id?: number | null;
    prereq_course_id?: number | null;
};
export type course_prerequisitesUpdateInput = {
    courses_course_prerequisites_course_idTocourses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_course_prerequisites_course_idTocoursesNestedInput;
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_course_prerequisites_prereq_course_idTocoursesNestedInput;
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
export type Course_prerequisitesListRelationFilter = {
    every?: Prisma.course_prerequisitesWhereInput;
    some?: Prisma.course_prerequisitesWhereInput;
    none?: Prisma.course_prerequisitesWhereInput;
};
export type course_prerequisitesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type course_prerequisitesCreateNestedManyWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesCreateNestedManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUncheckedCreateNestedManyWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUncheckedCreateNestedManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInputEnvelope;
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
};
export type course_prerequisitesUpdateManyWithoutCourses_course_prerequisites_course_idTocoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUpdateManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_course_idTocoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_course_idTocoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput> | Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[] | Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    connectOrCreate?: Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    upsert?: Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    createMany?: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInputEnvelope;
    set?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    disconnect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    delete?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    connect?: Prisma.course_prerequisitesWhereUniqueInput | Prisma.course_prerequisitesWhereUniqueInput[];
    update?: Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    updateMany?: Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    deleteMany?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
};
export type course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_course_prerequisites_prereq_course_idTocoursesInput;
};
export type course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    id?: number;
    prereq_course_id?: number | null;
};
export type course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput>;
};
export type course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInputEnvelope = {
    data: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInput | Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInput[];
    skipDuplicates?: boolean;
};
export type course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    courses_course_prerequisites_course_idTocourses?: Prisma.coursesCreateNestedOneWithoutCourse_prerequisites_course_prerequisites_course_idTocoursesInput;
};
export type course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    id?: number;
    course_id?: number | null;
};
export type course_prerequisitesCreateOrConnectWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput>;
};
export type course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInputEnvelope = {
    data: Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInput | Prisma.course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInput[];
    skipDuplicates?: boolean;
};
export type course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput>;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_course_idTocoursesInput>;
};
export type course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput>;
};
export type course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesScalarWhereInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_course_idTocoursesInput>;
};
export type course_prerequisitesScalarWhereInput = {
    AND?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
    OR?: Prisma.course_prerequisitesScalarWhereInput[];
    NOT?: Prisma.course_prerequisitesScalarWhereInput | Prisma.course_prerequisitesScalarWhereInput[];
    id?: Prisma.IntFilter<"course_prerequisites"> | number;
    course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
    prereq_course_id?: Prisma.IntNullableFilter<"course_prerequisites"> | number | null;
};
export type course_prerequisitesUpsertWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput>;
    create: Prisma.XOR<Prisma.course_prerequisitesCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedCreateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput>;
};
export type course_prerequisitesUpdateWithWhereUniqueWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput, Prisma.course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput>;
};
export type course_prerequisitesUpdateManyWithWhereWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    where: Prisma.course_prerequisitesScalarWhereInput;
    data: Prisma.XOR<Prisma.course_prerequisitesUpdateManyMutationInput, Prisma.course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput>;
};
export type course_prerequisitesCreateManyCourses_course_prerequisites_course_idTocoursesInput = {
    id?: number;
    prereq_course_id?: number | null;
};
export type course_prerequisitesCreateManyCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    id?: number;
    course_id?: number | null;
};
export type course_prerequisitesUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    courses_course_prerequisites_prereq_course_idTocourses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_course_prerequisites_prereq_course_idTocoursesNestedInput;
};
export type course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_course_idTocoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    prereq_course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    courses_course_prerequisites_course_idTocourses?: Prisma.coursesUpdateOneWithoutCourse_prerequisites_course_prerequisites_course_idTocoursesNestedInput;
};
export type course_prerequisitesUncheckedUpdateWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesUncheckedUpdateManyWithoutCourses_course_prerequisites_prereq_course_idTocoursesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type course_prerequisitesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
}, ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesSelectScalar = {
    id?: boolean;
    course_id?: boolean;
    prereq_course_id?: boolean;
};
export type course_prerequisitesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "course_id" | "prereq_course_id", ExtArgs["result"]["course_prerequisites"]>;
export type course_prerequisitesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
};
export type course_prerequisitesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
};
export type course_prerequisitesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses_course_prerequisites_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>;
    courses_course_prerequisites_prereq_course_idTocourses?: boolean | Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>;
};
export type $course_prerequisitesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "course_prerequisites";
    objects: {
        courses_course_prerequisites_course_idTocourses: Prisma.$coursesPayload<ExtArgs> | null;
        courses_course_prerequisites_prereq_course_idTocourses: Prisma.$coursesPayload<ExtArgs> | null;
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
    courses_course_prerequisites_course_idTocourses<T extends Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    courses_course_prerequisites_prereq_course_idTocourses<T extends Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
export type course_prerequisites$courses_course_prerequisites_course_idTocoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type course_prerequisites$courses_course_prerequisites_prereq_course_idTocoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
