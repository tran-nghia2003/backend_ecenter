import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type course_reviewsModel = runtime.Types.Result.DefaultSelection<Prisma.$course_reviewsPayload>;
export type AggregateCourse_reviews = {
    _count: Course_reviewsCountAggregateOutputType | null;
    _avg: Course_reviewsAvgAggregateOutputType | null;
    _sum: Course_reviewsSumAggregateOutputType | null;
    _min: Course_reviewsMinAggregateOutputType | null;
    _max: Course_reviewsMaxAggregateOutputType | null;
};
export type Course_reviewsAvgAggregateOutputType = {
    review_id: number | null;
    user_id: number | null;
    course_id: number | null;
    rating: number | null;
};
export type Course_reviewsSumAggregateOutputType = {
    review_id: number | null;
    user_id: number | null;
    course_id: number | null;
    rating: number | null;
};
export type Course_reviewsMinAggregateOutputType = {
    review_id: number | null;
    user_id: number | null;
    course_id: number | null;
    rating: number | null;
    comment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Course_reviewsMaxAggregateOutputType = {
    review_id: number | null;
    user_id: number | null;
    course_id: number | null;
    rating: number | null;
    comment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Course_reviewsCountAggregateOutputType = {
    review_id: number;
    user_id: number;
    course_id: number;
    rating: number;
    comment: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Course_reviewsAvgAggregateInputType = {
    review_id?: true;
    user_id?: true;
    course_id?: true;
    rating?: true;
};
export type Course_reviewsSumAggregateInputType = {
    review_id?: true;
    user_id?: true;
    course_id?: true;
    rating?: true;
};
export type Course_reviewsMinAggregateInputType = {
    review_id?: true;
    user_id?: true;
    course_id?: true;
    rating?: true;
    comment?: true;
    created_at?: true;
    updated_at?: true;
};
export type Course_reviewsMaxAggregateInputType = {
    review_id?: true;
    user_id?: true;
    course_id?: true;
    rating?: true;
    comment?: true;
    created_at?: true;
    updated_at?: true;
};
export type Course_reviewsCountAggregateInputType = {
    review_id?: true;
    user_id?: true;
    course_id?: true;
    rating?: true;
    comment?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Course_reviewsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_reviewsWhereInput;
    orderBy?: Prisma.course_reviewsOrderByWithRelationInput | Prisma.course_reviewsOrderByWithRelationInput[];
    cursor?: Prisma.course_reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Course_reviewsCountAggregateInputType;
    _avg?: Course_reviewsAvgAggregateInputType;
    _sum?: Course_reviewsSumAggregateInputType;
    _min?: Course_reviewsMinAggregateInputType;
    _max?: Course_reviewsMaxAggregateInputType;
};
export type GetCourse_reviewsAggregateType<T extends Course_reviewsAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse_reviews]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse_reviews[P]> : Prisma.GetScalarType<T[P], AggregateCourse_reviews[P]>;
};
export type course_reviewsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_reviewsWhereInput;
    orderBy?: Prisma.course_reviewsOrderByWithAggregationInput | Prisma.course_reviewsOrderByWithAggregationInput[];
    by: Prisma.Course_reviewsScalarFieldEnum[] | Prisma.Course_reviewsScalarFieldEnum;
    having?: Prisma.course_reviewsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Course_reviewsCountAggregateInputType | true;
    _avg?: Course_reviewsAvgAggregateInputType;
    _sum?: Course_reviewsSumAggregateInputType;
    _min?: Course_reviewsMinAggregateInputType;
    _max?: Course_reviewsMaxAggregateInputType;
};
export type Course_reviewsGroupByOutputType = {
    review_id: number;
    user_id: number | null;
    course_id: number | null;
    rating: number | null;
    comment: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Course_reviewsCountAggregateOutputType | null;
    _avg: Course_reviewsAvgAggregateOutputType | null;
    _sum: Course_reviewsSumAggregateOutputType | null;
    _min: Course_reviewsMinAggregateOutputType | null;
    _max: Course_reviewsMaxAggregateOutputType | null;
};
type GetCourse_reviewsGroupByPayload<T extends course_reviewsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Course_reviewsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Course_reviewsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Course_reviewsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Course_reviewsGroupByOutputType[P]>;
}>>;
export type course_reviewsWhereInput = {
    AND?: Prisma.course_reviewsWhereInput | Prisma.course_reviewsWhereInput[];
    OR?: Prisma.course_reviewsWhereInput[];
    NOT?: Prisma.course_reviewsWhereInput | Prisma.course_reviewsWhereInput[];
    review_id?: Prisma.IntFilter<"course_reviews"> | number;
    user_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    course_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    rating?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    comment?: Prisma.StringNullableFilter<"course_reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type course_reviewsOrderByWithRelationInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type course_reviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number;
    AND?: Prisma.course_reviewsWhereInput | Prisma.course_reviewsWhereInput[];
    OR?: Prisma.course_reviewsWhereInput[];
    NOT?: Prisma.course_reviewsWhereInput | Prisma.course_reviewsWhereInput[];
    user_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    course_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    rating?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    comment?: Prisma.StringNullableFilter<"course_reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "review_id">;
export type course_reviewsOrderByWithAggregationInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.course_reviewsCountOrderByAggregateInput;
    _avg?: Prisma.course_reviewsAvgOrderByAggregateInput;
    _max?: Prisma.course_reviewsMaxOrderByAggregateInput;
    _min?: Prisma.course_reviewsMinOrderByAggregateInput;
    _sum?: Prisma.course_reviewsSumOrderByAggregateInput;
};
export type course_reviewsScalarWhereWithAggregatesInput = {
    AND?: Prisma.course_reviewsScalarWhereWithAggregatesInput | Prisma.course_reviewsScalarWhereWithAggregatesInput[];
    OR?: Prisma.course_reviewsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.course_reviewsScalarWhereWithAggregatesInput | Prisma.course_reviewsScalarWhereWithAggregatesInput[];
    review_id?: Prisma.IntWithAggregatesFilter<"course_reviews"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"course_reviews"> | number | null;
    course_id?: Prisma.IntNullableWithAggregatesFilter<"course_reviews"> | number | null;
    rating?: Prisma.IntNullableWithAggregatesFilter<"course_reviews"> | number | null;
    comment?: Prisma.StringNullableWithAggregatesFilter<"course_reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"course_reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"course_reviews"> | Date | string | null;
};
export type course_reviewsCreateInput = {
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_reviewsInput;
    users?: Prisma.usersCreateNestedOneWithoutCourse_reviewsInput;
};
export type course_reviewsUncheckedCreateInput = {
    review_id?: number;
    user_id?: number | null;
    course_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsUpdateInput = {
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutCourse_reviewsNestedInput;
    users?: Prisma.usersUpdateOneWithoutCourse_reviewsNestedInput;
};
export type course_reviewsUncheckedUpdateInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsCreateManyInput = {
    review_id?: number;
    user_id?: number | null;
    course_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsUpdateManyMutationInput = {
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsUncheckedUpdateManyInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsCountOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_reviewsAvgOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type course_reviewsMaxOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_reviewsMinOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    comment?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type course_reviewsSumOrderByAggregateInput = {
    review_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type Course_reviewsListRelationFilter = {
    every?: Prisma.course_reviewsWhereInput;
    some?: Prisma.course_reviewsWhereInput;
    none?: Prisma.course_reviewsWhereInput;
};
export type course_reviewsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type course_reviewsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput> | Prisma.course_reviewsCreateWithoutCoursesInput[] | Prisma.course_reviewsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutCoursesInput | Prisma.course_reviewsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_reviewsCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
};
export type course_reviewsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput> | Prisma.course_reviewsCreateWithoutCoursesInput[] | Prisma.course_reviewsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutCoursesInput | Prisma.course_reviewsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.course_reviewsCreateManyCoursesInputEnvelope;
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
};
export type course_reviewsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput> | Prisma.course_reviewsCreateWithoutCoursesInput[] | Prisma.course_reviewsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutCoursesInput | Prisma.course_reviewsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_reviewsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_reviewsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_reviewsCreateManyCoursesInputEnvelope;
    set?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    disconnect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    delete?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    update?: Prisma.course_reviewsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_reviewsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_reviewsUpdateManyWithWhereWithoutCoursesInput | Prisma.course_reviewsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
};
export type course_reviewsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput> | Prisma.course_reviewsCreateWithoutCoursesInput[] | Prisma.course_reviewsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutCoursesInput | Prisma.course_reviewsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.course_reviewsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.course_reviewsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.course_reviewsCreateManyCoursesInputEnvelope;
    set?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    disconnect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    delete?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    update?: Prisma.course_reviewsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.course_reviewsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.course_reviewsUpdateManyWithWhereWithoutCoursesInput | Prisma.course_reviewsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
};
export type course_reviewsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput> | Prisma.course_reviewsCreateWithoutUsersInput[] | Prisma.course_reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutUsersInput | Prisma.course_reviewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.course_reviewsCreateManyUsersInputEnvelope;
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
};
export type course_reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput> | Prisma.course_reviewsCreateWithoutUsersInput[] | Prisma.course_reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutUsersInput | Prisma.course_reviewsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.course_reviewsCreateManyUsersInputEnvelope;
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
};
export type course_reviewsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput> | Prisma.course_reviewsCreateWithoutUsersInput[] | Prisma.course_reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutUsersInput | Prisma.course_reviewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.course_reviewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.course_reviewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.course_reviewsCreateManyUsersInputEnvelope;
    set?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    disconnect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    delete?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    update?: Prisma.course_reviewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.course_reviewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.course_reviewsUpdateManyWithWhereWithoutUsersInput | Prisma.course_reviewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
};
export type course_reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput> | Prisma.course_reviewsCreateWithoutUsersInput[] | Prisma.course_reviewsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.course_reviewsCreateOrConnectWithoutUsersInput | Prisma.course_reviewsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.course_reviewsUpsertWithWhereUniqueWithoutUsersInput | Prisma.course_reviewsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.course_reviewsCreateManyUsersInputEnvelope;
    set?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    disconnect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    delete?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    connect?: Prisma.course_reviewsWhereUniqueInput | Prisma.course_reviewsWhereUniqueInput[];
    update?: Prisma.course_reviewsUpdateWithWhereUniqueWithoutUsersInput | Prisma.course_reviewsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.course_reviewsUpdateManyWithWhereWithoutUsersInput | Prisma.course_reviewsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
};
export type course_reviewsCreateWithoutCoursesInput = {
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutCourse_reviewsInput;
};
export type course_reviewsUncheckedCreateWithoutCoursesInput = {
    review_id?: number;
    user_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput>;
};
export type course_reviewsCreateManyCoursesInputEnvelope = {
    data: Prisma.course_reviewsCreateManyCoursesInput | Prisma.course_reviewsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type course_reviewsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_reviewsUpdateWithoutCoursesInput, Prisma.course_reviewsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.course_reviewsCreateWithoutCoursesInput, Prisma.course_reviewsUncheckedCreateWithoutCoursesInput>;
};
export type course_reviewsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_reviewsUpdateWithoutCoursesInput, Prisma.course_reviewsUncheckedUpdateWithoutCoursesInput>;
};
export type course_reviewsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.course_reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.course_reviewsUpdateManyMutationInput, Prisma.course_reviewsUncheckedUpdateManyWithoutCoursesInput>;
};
export type course_reviewsScalarWhereInput = {
    AND?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
    OR?: Prisma.course_reviewsScalarWhereInput[];
    NOT?: Prisma.course_reviewsScalarWhereInput | Prisma.course_reviewsScalarWhereInput[];
    review_id?: Prisma.IntFilter<"course_reviews"> | number;
    user_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    course_id?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    rating?: Prisma.IntNullableFilter<"course_reviews"> | number | null;
    comment?: Prisma.StringNullableFilter<"course_reviews"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"course_reviews"> | Date | string | null;
};
export type course_reviewsCreateWithoutUsersInput = {
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCourse_reviewsInput;
};
export type course_reviewsUncheckedCreateWithoutUsersInput = {
    review_id?: number;
    course_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsCreateOrConnectWithoutUsersInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput>;
};
export type course_reviewsCreateManyUsersInputEnvelope = {
    data: Prisma.course_reviewsCreateManyUsersInput | Prisma.course_reviewsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type course_reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    update: Prisma.XOR<Prisma.course_reviewsUpdateWithoutUsersInput, Prisma.course_reviewsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.course_reviewsCreateWithoutUsersInput, Prisma.course_reviewsUncheckedCreateWithoutUsersInput>;
};
export type course_reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.course_reviewsWhereUniqueInput;
    data: Prisma.XOR<Prisma.course_reviewsUpdateWithoutUsersInput, Prisma.course_reviewsUncheckedUpdateWithoutUsersInput>;
};
export type course_reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.course_reviewsScalarWhereInput;
    data: Prisma.XOR<Prisma.course_reviewsUpdateManyMutationInput, Prisma.course_reviewsUncheckedUpdateManyWithoutUsersInput>;
};
export type course_reviewsCreateManyCoursesInput = {
    review_id?: number;
    user_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsUpdateWithoutCoursesInput = {
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutCourse_reviewsNestedInput;
};
export type course_reviewsUncheckedUpdateWithoutCoursesInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsUncheckedUpdateManyWithoutCoursesInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsCreateManyUsersInput = {
    review_id?: number;
    course_id?: number | null;
    rating?: number | null;
    comment?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type course_reviewsUpdateWithoutUsersInput = {
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutCourse_reviewsNestedInput;
};
export type course_reviewsUncheckedUpdateWithoutUsersInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rating?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    comment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type course_reviewsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    review_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    rating?: boolean;
    comment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_reviews"]>;
export type course_reviewsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    review_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    rating?: boolean;
    comment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_reviews"]>;
export type course_reviewsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    review_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    rating?: boolean;
    comment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
}, ExtArgs["result"]["course_reviews"]>;
export type course_reviewsSelectScalar = {
    review_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    rating?: boolean;
    comment?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type course_reviewsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"review_id" | "user_id" | "course_id" | "rating" | "comment" | "created_at" | "updated_at", ExtArgs["result"]["course_reviews"]>;
export type course_reviewsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
};
export type course_reviewsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
};
export type course_reviewsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.course_reviews$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.course_reviews$usersArgs<ExtArgs>;
};
export type $course_reviewsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "course_reviews";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        review_id: number;
        user_id: number | null;
        course_id: number | null;
        rating: number | null;
        comment: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["course_reviews"]>;
    composites: {};
};
export type course_reviewsGetPayload<S extends boolean | null | undefined | course_reviewsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload, S>;
export type course_reviewsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<course_reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Course_reviewsCountAggregateInputType | true;
};
export interface course_reviewsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['course_reviews'];
        meta: {
            name: 'course_reviews';
        };
    };
    findUnique<T extends course_reviewsFindUniqueArgs>(args: Prisma.SelectSubset<T, course_reviewsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends course_reviewsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, course_reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends course_reviewsFindFirstArgs>(args?: Prisma.SelectSubset<T, course_reviewsFindFirstArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends course_reviewsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, course_reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends course_reviewsFindManyArgs>(args?: Prisma.SelectSubset<T, course_reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends course_reviewsCreateArgs>(args: Prisma.SelectSubset<T, course_reviewsCreateArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends course_reviewsCreateManyArgs>(args?: Prisma.SelectSubset<T, course_reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends course_reviewsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, course_reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends course_reviewsDeleteArgs>(args: Prisma.SelectSubset<T, course_reviewsDeleteArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends course_reviewsUpdateArgs>(args: Prisma.SelectSubset<T, course_reviewsUpdateArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends course_reviewsDeleteManyArgs>(args?: Prisma.SelectSubset<T, course_reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends course_reviewsUpdateManyArgs>(args: Prisma.SelectSubset<T, course_reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends course_reviewsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, course_reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends course_reviewsUpsertArgs>(args: Prisma.SelectSubset<T, course_reviewsUpsertArgs<ExtArgs>>): Prisma.Prisma__course_reviewsClient<runtime.Types.Result.GetResult<Prisma.$course_reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends course_reviewsCountArgs>(args?: Prisma.Subset<T, course_reviewsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Course_reviewsCountAggregateOutputType> : number>;
    aggregate<T extends Course_reviewsAggregateArgs>(args: Prisma.Subset<T, Course_reviewsAggregateArgs>): Prisma.PrismaPromise<GetCourse_reviewsAggregateType<T>>;
    groupBy<T extends course_reviewsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: course_reviewsGroupByArgs['orderBy'];
    } : {
        orderBy?: course_reviewsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, course_reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_reviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: course_reviewsFieldRefs;
}
export interface Prisma__course_reviewsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.course_reviews$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_reviews$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.course_reviews$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.course_reviews$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface course_reviewsFieldRefs {
    readonly review_id: Prisma.FieldRef<"course_reviews", 'Int'>;
    readonly user_id: Prisma.FieldRef<"course_reviews", 'Int'>;
    readonly course_id: Prisma.FieldRef<"course_reviews", 'Int'>;
    readonly rating: Prisma.FieldRef<"course_reviews", 'Int'>;
    readonly comment: Prisma.FieldRef<"course_reviews", 'String'>;
    readonly created_at: Prisma.FieldRef<"course_reviews", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"course_reviews", 'DateTime'>;
}
export type course_reviewsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where: Prisma.course_reviewsWhereUniqueInput;
};
export type course_reviewsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where: Prisma.course_reviewsWhereUniqueInput;
};
export type course_reviewsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where?: Prisma.course_reviewsWhereInput;
    orderBy?: Prisma.course_reviewsOrderByWithRelationInput | Prisma.course_reviewsOrderByWithRelationInput[];
    cursor?: Prisma.course_reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_reviewsScalarFieldEnum | Prisma.Course_reviewsScalarFieldEnum[];
};
export type course_reviewsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where?: Prisma.course_reviewsWhereInput;
    orderBy?: Prisma.course_reviewsOrderByWithRelationInput | Prisma.course_reviewsOrderByWithRelationInput[];
    cursor?: Prisma.course_reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_reviewsScalarFieldEnum | Prisma.Course_reviewsScalarFieldEnum[];
};
export type course_reviewsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where?: Prisma.course_reviewsWhereInput;
    orderBy?: Prisma.course_reviewsOrderByWithRelationInput | Prisma.course_reviewsOrderByWithRelationInput[];
    cursor?: Prisma.course_reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Course_reviewsScalarFieldEnum | Prisma.Course_reviewsScalarFieldEnum[];
};
export type course_reviewsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.course_reviewsCreateInput, Prisma.course_reviewsUncheckedCreateInput>;
};
export type course_reviewsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.course_reviewsCreateManyInput | Prisma.course_reviewsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type course_reviewsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    data: Prisma.course_reviewsCreateManyInput | Prisma.course_reviewsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.course_reviewsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type course_reviewsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_reviewsUpdateInput, Prisma.course_reviewsUncheckedUpdateInput>;
    where: Prisma.course_reviewsWhereUniqueInput;
};
export type course_reviewsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.course_reviewsUpdateManyMutationInput, Prisma.course_reviewsUncheckedUpdateManyInput>;
    where?: Prisma.course_reviewsWhereInput;
    limit?: number;
};
export type course_reviewsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.course_reviewsUpdateManyMutationInput, Prisma.course_reviewsUncheckedUpdateManyInput>;
    where?: Prisma.course_reviewsWhereInput;
    limit?: number;
    include?: Prisma.course_reviewsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type course_reviewsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where: Prisma.course_reviewsWhereUniqueInput;
    create: Prisma.XOR<Prisma.course_reviewsCreateInput, Prisma.course_reviewsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.course_reviewsUpdateInput, Prisma.course_reviewsUncheckedUpdateInput>;
};
export type course_reviewsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
    where: Prisma.course_reviewsWhereUniqueInput;
};
export type course_reviewsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.course_reviewsWhereInput;
    limit?: number;
};
export type course_reviews$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type course_reviews$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type course_reviewsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.course_reviewsSelect<ExtArgs> | null;
    omit?: Prisma.course_reviewsOmit<ExtArgs> | null;
    include?: Prisma.course_reviewsInclude<ExtArgs> | null;
};
export {};
