import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type filesModel = runtime.Types.Result.DefaultSelection<Prisma.$filesPayload>;
export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null;
    _avg: FilesAvgAggregateOutputType | null;
    _sum: FilesSumAggregateOutputType | null;
    _min: FilesMinAggregateOutputType | null;
    _max: FilesMaxAggregateOutputType | null;
};
export type FilesAvgAggregateOutputType = {
    id: number | null;
    size: number | null;
    userId: number | null;
    courseId: number | null;
    lessonId: number | null;
};
export type FilesSumAggregateOutputType = {
    id: number | null;
    size: number | null;
    userId: number | null;
    courseId: number | null;
    lessonId: number | null;
};
export type FilesMinAggregateOutputType = {
    id: number | null;
    filename: string | null;
    originalName: string | null;
    mimetype: string | null;
    size: number | null;
    path: string | null;
    publicId: string | null;
    type: string | null;
    userId: number | null;
    courseId: number | null;
    lessonId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FilesMaxAggregateOutputType = {
    id: number | null;
    filename: string | null;
    originalName: string | null;
    mimetype: string | null;
    size: number | null;
    path: string | null;
    publicId: string | null;
    type: string | null;
    userId: number | null;
    courseId: number | null;
    lessonId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FilesCountAggregateOutputType = {
    id: number;
    filename: number;
    originalName: number;
    mimetype: number;
    size: number;
    path: number;
    publicId: number;
    type: number;
    userId: number;
    courseId: number;
    lessonId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FilesAvgAggregateInputType = {
    id?: true;
    size?: true;
    userId?: true;
    courseId?: true;
    lessonId?: true;
};
export type FilesSumAggregateInputType = {
    id?: true;
    size?: true;
    userId?: true;
    courseId?: true;
    lessonId?: true;
};
export type FilesMinAggregateInputType = {
    id?: true;
    filename?: true;
    originalName?: true;
    mimetype?: true;
    size?: true;
    path?: true;
    publicId?: true;
    type?: true;
    userId?: true;
    courseId?: true;
    lessonId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FilesMaxAggregateInputType = {
    id?: true;
    filename?: true;
    originalName?: true;
    mimetype?: true;
    size?: true;
    path?: true;
    publicId?: true;
    type?: true;
    userId?: true;
    courseId?: true;
    lessonId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FilesCountAggregateInputType = {
    id?: true;
    filename?: true;
    originalName?: true;
    mimetype?: true;
    size?: true;
    path?: true;
    publicId?: true;
    type?: true;
    userId?: true;
    courseId?: true;
    lessonId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FilesCountAggregateInputType;
    _avg?: FilesAvgAggregateInputType;
    _sum?: FilesSumAggregateInputType;
    _min?: FilesMinAggregateInputType;
    _max?: FilesMaxAggregateInputType;
};
export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
    [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFiles[P]> : Prisma.GetScalarType<T[P], AggregateFiles[P]>;
};
export type filesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithAggregationInput | Prisma.filesOrderByWithAggregationInput[];
    by: Prisma.FilesScalarFieldEnum[] | Prisma.FilesScalarFieldEnum;
    having?: Prisma.filesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilesCountAggregateInputType | true;
    _avg?: FilesAvgAggregateInputType;
    _sum?: FilesSumAggregateInputType;
    _min?: FilesMinAggregateInputType;
    _max?: FilesMaxAggregateInputType;
};
export type FilesGroupByOutputType = {
    id: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId: string | null;
    type: string;
    userId: number;
    courseId: number | null;
    lessonId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FilesCountAggregateOutputType | null;
    _avg: FilesAvgAggregateOutputType | null;
    _sum: FilesSumAggregateOutputType | null;
    _min: FilesMinAggregateOutputType | null;
    _max: FilesMaxAggregateOutputType | null;
};
type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilesGroupByOutputType[P]>;
}>>;
export type filesWhereInput = {
    AND?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    OR?: Prisma.filesWhereInput[];
    NOT?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    id?: Prisma.IntFilter<"files"> | number;
    filename?: Prisma.StringFilter<"files"> | string;
    originalName?: Prisma.StringFilter<"files"> | string;
    mimetype?: Prisma.StringFilter<"files"> | string;
    size?: Prisma.IntFilter<"files"> | number;
    path?: Prisma.StringFilter<"files"> | string;
    publicId?: Prisma.StringNullableFilter<"files"> | string | null;
    type?: Prisma.StringFilter<"files"> | string;
    userId?: Prisma.IntFilter<"files"> | number;
    courseId?: Prisma.IntNullableFilter<"files"> | number | null;
    lessonId?: Prisma.IntNullableFilter<"files"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"files"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"files"> | Date | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    course?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
};
export type filesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    publicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessonId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.usersOrderByWithRelationInput;
    course?: Prisma.coursesOrderByWithRelationInput;
    lesson?: Prisma.lessonsOrderByWithRelationInput;
};
export type filesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    OR?: Prisma.filesWhereInput[];
    NOT?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    filename?: Prisma.StringFilter<"files"> | string;
    originalName?: Prisma.StringFilter<"files"> | string;
    mimetype?: Prisma.StringFilter<"files"> | string;
    size?: Prisma.IntFilter<"files"> | number;
    path?: Prisma.StringFilter<"files"> | string;
    publicId?: Prisma.StringNullableFilter<"files"> | string | null;
    type?: Prisma.StringFilter<"files"> | string;
    userId?: Prisma.IntFilter<"files"> | number;
    courseId?: Prisma.IntNullableFilter<"files"> | number | null;
    lessonId?: Prisma.IntNullableFilter<"files"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"files"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"files"> | Date | string;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    course?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    lesson?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
}, "id">;
export type filesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    publicId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessonId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.filesCountOrderByAggregateInput;
    _avg?: Prisma.filesAvgOrderByAggregateInput;
    _max?: Prisma.filesMaxOrderByAggregateInput;
    _min?: Prisma.filesMinOrderByAggregateInput;
    _sum?: Prisma.filesSumOrderByAggregateInput;
};
export type filesScalarWhereWithAggregatesInput = {
    AND?: Prisma.filesScalarWhereWithAggregatesInput | Prisma.filesScalarWhereWithAggregatesInput[];
    OR?: Prisma.filesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.filesScalarWhereWithAggregatesInput | Prisma.filesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"files"> | number;
    filename?: Prisma.StringWithAggregatesFilter<"files"> | string;
    originalName?: Prisma.StringWithAggregatesFilter<"files"> | string;
    mimetype?: Prisma.StringWithAggregatesFilter<"files"> | string;
    size?: Prisma.IntWithAggregatesFilter<"files"> | number;
    path?: Prisma.StringWithAggregatesFilter<"files"> | string;
    publicId?: Prisma.StringNullableWithAggregatesFilter<"files"> | string | null;
    type?: Prisma.StringWithAggregatesFilter<"files"> | string;
    userId?: Prisma.IntWithAggregatesFilter<"files"> | number;
    courseId?: Prisma.IntNullableWithAggregatesFilter<"files"> | number | null;
    lessonId?: Prisma.IntNullableWithAggregatesFilter<"files"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"files"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"files"> | Date | string;
};
export type filesCreateInput = {
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.usersCreateNestedOneWithoutFilesInput;
    course?: Prisma.coursesCreateNestedOneWithoutFilesInput;
    lesson?: Prisma.lessonsCreateNestedOneWithoutFilesInput;
};
export type filesUncheckedCreateInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    courseId?: number | null;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesUpdateInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.usersUpdateOneRequiredWithoutFilesNestedInput;
    course?: Prisma.coursesUpdateOneWithoutFilesNestedInput;
    lesson?: Prisma.lessonsUpdateOneWithoutFilesNestedInput;
};
export type filesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesCreateManyInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    courseId?: number | null;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesUpdateManyMutationInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    publicId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type filesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
};
export type filesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    publicId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type filesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    publicId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type filesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
};
export type FilesListRelationFilter = {
    every?: Prisma.filesWhereInput;
    some?: Prisma.filesWhereInput;
    none?: Prisma.filesWhereInput;
};
export type filesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type filesCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput> | Prisma.filesCreateWithoutCourseInput[] | Prisma.filesUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutCourseInput | Prisma.filesCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.filesCreateManyCourseInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput> | Prisma.filesCreateWithoutCourseInput[] | Prisma.filesUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutCourseInput | Prisma.filesCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.filesCreateManyCourseInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput> | Prisma.filesCreateWithoutCourseInput[] | Prisma.filesUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutCourseInput | Prisma.filesCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutCourseInput | Prisma.filesUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.filesCreateManyCourseInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutCourseInput | Prisma.filesUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutCourseInput | Prisma.filesUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput> | Prisma.filesCreateWithoutCourseInput[] | Prisma.filesUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutCourseInput | Prisma.filesCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutCourseInput | Prisma.filesUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.filesCreateManyCourseInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutCourseInput | Prisma.filesUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutCourseInput | Prisma.filesUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput> | Prisma.filesCreateWithoutLessonInput[] | Prisma.filesUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutLessonInput | Prisma.filesCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.filesCreateManyLessonInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput> | Prisma.filesCreateWithoutLessonInput[] | Prisma.filesUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutLessonInput | Prisma.filesCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.filesCreateManyLessonInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput> | Prisma.filesCreateWithoutLessonInput[] | Prisma.filesUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutLessonInput | Prisma.filesCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutLessonInput | Prisma.filesUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.filesCreateManyLessonInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutLessonInput | Prisma.filesUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutLessonInput | Prisma.filesUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput> | Prisma.filesCreateWithoutLessonInput[] | Prisma.filesUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutLessonInput | Prisma.filesCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutLessonInput | Prisma.filesUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.filesCreateManyLessonInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutLessonInput | Prisma.filesUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutLessonInput | Prisma.filesUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput> | Prisma.filesCreateWithoutUserInput[] | Prisma.filesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutUserInput | Prisma.filesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.filesCreateManyUserInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput> | Prisma.filesCreateWithoutUserInput[] | Prisma.filesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutUserInput | Prisma.filesCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.filesCreateManyUserInputEnvelope;
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
};
export type filesUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput> | Prisma.filesCreateWithoutUserInput[] | Prisma.filesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutUserInput | Prisma.filesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutUserInput | Prisma.filesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.filesCreateManyUserInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutUserInput | Prisma.filesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutUserInput | Prisma.filesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput> | Prisma.filesCreateWithoutUserInput[] | Prisma.filesUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.filesCreateOrConnectWithoutUserInput | Prisma.filesCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.filesUpsertWithWhereUniqueWithoutUserInput | Prisma.filesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.filesCreateManyUserInputEnvelope;
    set?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    disconnect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    delete?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    connect?: Prisma.filesWhereUniqueInput | Prisma.filesWhereUniqueInput[];
    update?: Prisma.filesUpdateWithWhereUniqueWithoutUserInput | Prisma.filesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.filesUpdateManyWithWhereWithoutUserInput | Prisma.filesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
};
export type filesCreateWithoutCourseInput = {
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.usersCreateNestedOneWithoutFilesInput;
    lesson?: Prisma.lessonsCreateNestedOneWithoutFilesInput;
};
export type filesUncheckedCreateWithoutCourseInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesCreateOrConnectWithoutCourseInput = {
    where: Prisma.filesWhereUniqueInput;
    create: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput>;
};
export type filesCreateManyCourseInputEnvelope = {
    data: Prisma.filesCreateManyCourseInput | Prisma.filesCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type filesUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.filesWhereUniqueInput;
    update: Prisma.XOR<Prisma.filesUpdateWithoutCourseInput, Prisma.filesUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.filesCreateWithoutCourseInput, Prisma.filesUncheckedCreateWithoutCourseInput>;
};
export type filesUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.filesWhereUniqueInput;
    data: Prisma.XOR<Prisma.filesUpdateWithoutCourseInput, Prisma.filesUncheckedUpdateWithoutCourseInput>;
};
export type filesUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.filesScalarWhereInput;
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyWithoutCourseInput>;
};
export type filesScalarWhereInput = {
    AND?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
    OR?: Prisma.filesScalarWhereInput[];
    NOT?: Prisma.filesScalarWhereInput | Prisma.filesScalarWhereInput[];
    id?: Prisma.IntFilter<"files"> | number;
    filename?: Prisma.StringFilter<"files"> | string;
    originalName?: Prisma.StringFilter<"files"> | string;
    mimetype?: Prisma.StringFilter<"files"> | string;
    size?: Prisma.IntFilter<"files"> | number;
    path?: Prisma.StringFilter<"files"> | string;
    publicId?: Prisma.StringNullableFilter<"files"> | string | null;
    type?: Prisma.StringFilter<"files"> | string;
    userId?: Prisma.IntFilter<"files"> | number;
    courseId?: Prisma.IntNullableFilter<"files"> | number | null;
    lessonId?: Prisma.IntNullableFilter<"files"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"files"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"files"> | Date | string;
};
export type filesCreateWithoutLessonInput = {
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.usersCreateNestedOneWithoutFilesInput;
    course?: Prisma.coursesCreateNestedOneWithoutFilesInput;
};
export type filesUncheckedCreateWithoutLessonInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    courseId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesCreateOrConnectWithoutLessonInput = {
    where: Prisma.filesWhereUniqueInput;
    create: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput>;
};
export type filesCreateManyLessonInputEnvelope = {
    data: Prisma.filesCreateManyLessonInput | Prisma.filesCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type filesUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.filesWhereUniqueInput;
    update: Prisma.XOR<Prisma.filesUpdateWithoutLessonInput, Prisma.filesUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.filesCreateWithoutLessonInput, Prisma.filesUncheckedCreateWithoutLessonInput>;
};
export type filesUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.filesWhereUniqueInput;
    data: Prisma.XOR<Prisma.filesUpdateWithoutLessonInput, Prisma.filesUncheckedUpdateWithoutLessonInput>;
};
export type filesUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.filesScalarWhereInput;
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyWithoutLessonInput>;
};
export type filesCreateWithoutUserInput = {
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    course?: Prisma.coursesCreateNestedOneWithoutFilesInput;
    lesson?: Prisma.lessonsCreateNestedOneWithoutFilesInput;
};
export type filesUncheckedCreateWithoutUserInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    courseId?: number | null;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesCreateOrConnectWithoutUserInput = {
    where: Prisma.filesWhereUniqueInput;
    create: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput>;
};
export type filesCreateManyUserInputEnvelope = {
    data: Prisma.filesCreateManyUserInput | Prisma.filesCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type filesUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.filesWhereUniqueInput;
    update: Prisma.XOR<Prisma.filesUpdateWithoutUserInput, Prisma.filesUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.filesCreateWithoutUserInput, Prisma.filesUncheckedCreateWithoutUserInput>;
};
export type filesUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.filesWhereUniqueInput;
    data: Prisma.XOR<Prisma.filesUpdateWithoutUserInput, Prisma.filesUncheckedUpdateWithoutUserInput>;
};
export type filesUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.filesScalarWhereInput;
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyWithoutUserInput>;
};
export type filesCreateManyCourseInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesUpdateWithoutCourseInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.usersUpdateOneRequiredWithoutFilesNestedInput;
    lesson?: Prisma.lessonsUpdateOneWithoutFilesNestedInput;
};
export type filesUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesCreateManyLessonInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    userId: number;
    courseId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesUpdateWithoutLessonInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.usersUpdateOneRequiredWithoutFilesNestedInput;
    course?: Prisma.coursesUpdateOneWithoutFilesNestedInput;
};
export type filesUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesCreateManyUserInput = {
    id?: number;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
    publicId?: string | null;
    type: string;
    courseId?: number | null;
    lessonId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type filesUpdateWithoutUserInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.coursesUpdateOneWithoutFilesNestedInput;
    lesson?: Prisma.lessonsUpdateOneWithoutFilesNestedInput;
};
export type filesUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    publicId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    lessonId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type filesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    originalName?: boolean;
    mimetype?: boolean;
    size?: boolean;
    path?: boolean;
    publicId?: boolean;
    type?: boolean;
    userId?: boolean;
    courseId?: boolean;
    lessonId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
}, ExtArgs["result"]["files"]>;
export type filesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    originalName?: boolean;
    mimetype?: boolean;
    size?: boolean;
    path?: boolean;
    publicId?: boolean;
    type?: boolean;
    userId?: boolean;
    courseId?: boolean;
    lessonId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
}, ExtArgs["result"]["files"]>;
export type filesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    originalName?: boolean;
    mimetype?: boolean;
    size?: boolean;
    path?: boolean;
    publicId?: boolean;
    type?: boolean;
    userId?: boolean;
    courseId?: boolean;
    lessonId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
}, ExtArgs["result"]["files"]>;
export type filesSelectScalar = {
    id?: boolean;
    filename?: boolean;
    originalName?: boolean;
    mimetype?: boolean;
    size?: boolean;
    path?: boolean;
    publicId?: boolean;
    type?: boolean;
    userId?: boolean;
    courseId?: boolean;
    lessonId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type filesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "filename" | "originalName" | "mimetype" | "size" | "path" | "publicId" | "type" | "userId" | "courseId" | "lessonId" | "createdAt" | "updatedAt", ExtArgs["result"]["files"]>;
export type filesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
};
export type filesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
};
export type filesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    course?: boolean | Prisma.files$courseArgs<ExtArgs>;
    lesson?: boolean | Prisma.files$lessonArgs<ExtArgs>;
};
export type $filesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "files";
    objects: {
        user: Prisma.$usersPayload<ExtArgs>;
        course: Prisma.$coursesPayload<ExtArgs> | null;
        lesson: Prisma.$lessonsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        filename: string;
        originalName: string;
        mimetype: string;
        size: number;
        path: string;
        publicId: string | null;
        type: string;
        userId: number;
        courseId: number | null;
        lessonId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["files"]>;
    composites: {};
};
export type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$filesPayload, S>;
export type filesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilesCountAggregateInputType | true;
};
export interface filesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['files'];
        meta: {
            name: 'files';
        };
    };
    findUnique<T extends filesFindUniqueArgs>(args: Prisma.SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends filesFindFirstArgs>(args?: Prisma.SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends filesFindManyArgs>(args?: Prisma.SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends filesCreateArgs>(args: Prisma.SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends filesCreateManyArgs>(args?: Prisma.SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends filesDeleteArgs>(args: Prisma.SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends filesUpdateArgs>(args: Prisma.SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends filesDeleteManyArgs>(args?: Prisma.SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends filesUpdateManyArgs>(args: Prisma.SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends filesUpsertArgs>(args: Prisma.SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends filesCountArgs>(args?: Prisma.Subset<T, filesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilesCountAggregateOutputType> : number>;
    aggregate<T extends FilesAggregateArgs>(args: Prisma.Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>;
    groupBy<T extends filesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: filesGroupByArgs['orderBy'];
    } : {
        orderBy?: filesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: filesFieldRefs;
}
export interface Prisma__filesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    course<T extends Prisma.files$courseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.files$courseArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lesson<T extends Prisma.files$lessonArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.files$lessonArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface filesFieldRefs {
    readonly id: Prisma.FieldRef<"files", 'Int'>;
    readonly filename: Prisma.FieldRef<"files", 'String'>;
    readonly originalName: Prisma.FieldRef<"files", 'String'>;
    readonly mimetype: Prisma.FieldRef<"files", 'String'>;
    readonly size: Prisma.FieldRef<"files", 'Int'>;
    readonly path: Prisma.FieldRef<"files", 'String'>;
    readonly publicId: Prisma.FieldRef<"files", 'String'>;
    readonly type: Prisma.FieldRef<"files", 'String'>;
    readonly userId: Prisma.FieldRef<"files", 'Int'>;
    readonly courseId: Prisma.FieldRef<"files", 'Int'>;
    readonly lessonId: Prisma.FieldRef<"files", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"files", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"files", 'DateTime'>;
}
export type filesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesCreateInput, Prisma.filesUncheckedCreateInput>;
};
export type filesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.filesCreateManyInput | Prisma.filesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type filesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.filesCreateManyInput | Prisma.filesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.filesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type filesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesUpdateInput, Prisma.filesUncheckedUpdateInput>;
    where: Prisma.filesWhereUniqueInput;
};
export type filesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyInput>;
    where?: Prisma.filesWhereInput;
    limit?: number;
};
export type filesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyInput>;
    where?: Prisma.filesWhereInput;
    limit?: number;
    include?: Prisma.filesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type filesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
    create: Prisma.XOR<Prisma.filesCreateInput, Prisma.filesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.filesUpdateInput, Prisma.filesUncheckedUpdateInput>;
};
export type filesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    limit?: number;
};
export type files$courseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type files$lessonArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type filesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    include?: Prisma.filesInclude<ExtArgs> | null;
};
export {};
