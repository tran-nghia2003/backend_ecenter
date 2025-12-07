import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type writing_submissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$writing_submissionsPayload>;
export type AggregateWriting_submissions = {
    _count: Writing_submissionsCountAggregateOutputType | null;
    _avg: Writing_submissionsAvgAggregateOutputType | null;
    _sum: Writing_submissionsSumAggregateOutputType | null;
    _min: Writing_submissionsMinAggregateOutputType | null;
    _max: Writing_submissionsMaxAggregateOutputType | null;
};
export type Writing_submissionsAvgAggregateOutputType = {
    submission_id: number | null;
    exercise_id: number | null;
    user_id: number | null;
    word_count: number | null;
    grade: runtime.Decimal | null;
    graded_by: number | null;
};
export type Writing_submissionsSumAggregateOutputType = {
    submission_id: number | null;
    exercise_id: number | null;
    user_id: number | null;
    word_count: number | null;
    grade: runtime.Decimal | null;
    graded_by: number | null;
};
export type Writing_submissionsMinAggregateOutputType = {
    submission_id: number | null;
    exercise_id: number | null;
    user_id: number | null;
    content: string | null;
    file_url: string | null;
    word_count: number | null;
    grade: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    status: string | null;
    submitted_at: Date | null;
    graded_at: Date | null;
};
export type Writing_submissionsMaxAggregateOutputType = {
    submission_id: number | null;
    exercise_id: number | null;
    user_id: number | null;
    content: string | null;
    file_url: string | null;
    word_count: number | null;
    grade: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    status: string | null;
    submitted_at: Date | null;
    graded_at: Date | null;
};
export type Writing_submissionsCountAggregateOutputType = {
    submission_id: number;
    exercise_id: number;
    user_id: number;
    content: number;
    file_url: number;
    word_count: number;
    grade: number;
    feedback: number;
    graded_by: number;
    status: number;
    submitted_at: number;
    graded_at: number;
    _all: number;
};
export type Writing_submissionsAvgAggregateInputType = {
    submission_id?: true;
    exercise_id?: true;
    user_id?: true;
    word_count?: true;
    grade?: true;
    graded_by?: true;
};
export type Writing_submissionsSumAggregateInputType = {
    submission_id?: true;
    exercise_id?: true;
    user_id?: true;
    word_count?: true;
    grade?: true;
    graded_by?: true;
};
export type Writing_submissionsMinAggregateInputType = {
    submission_id?: true;
    exercise_id?: true;
    user_id?: true;
    content?: true;
    file_url?: true;
    word_count?: true;
    grade?: true;
    feedback?: true;
    graded_by?: true;
    status?: true;
    submitted_at?: true;
    graded_at?: true;
};
export type Writing_submissionsMaxAggregateInputType = {
    submission_id?: true;
    exercise_id?: true;
    user_id?: true;
    content?: true;
    file_url?: true;
    word_count?: true;
    grade?: true;
    feedback?: true;
    graded_by?: true;
    status?: true;
    submitted_at?: true;
    graded_at?: true;
};
export type Writing_submissionsCountAggregateInputType = {
    submission_id?: true;
    exercise_id?: true;
    user_id?: true;
    content?: true;
    file_url?: true;
    word_count?: true;
    grade?: true;
    feedback?: true;
    graded_by?: true;
    status?: true;
    submitted_at?: true;
    graded_at?: true;
    _all?: true;
};
export type Writing_submissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Writing_submissionsCountAggregateInputType;
    _avg?: Writing_submissionsAvgAggregateInputType;
    _sum?: Writing_submissionsSumAggregateInputType;
    _min?: Writing_submissionsMinAggregateInputType;
    _max?: Writing_submissionsMaxAggregateInputType;
};
export type GetWriting_submissionsAggregateType<T extends Writing_submissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateWriting_submissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWriting_submissions[P]> : Prisma.GetScalarType<T[P], AggregateWriting_submissions[P]>;
};
export type writing_submissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithAggregationInput | Prisma.writing_submissionsOrderByWithAggregationInput[];
    by: Prisma.Writing_submissionsScalarFieldEnum[] | Prisma.Writing_submissionsScalarFieldEnum;
    having?: Prisma.writing_submissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Writing_submissionsCountAggregateInputType | true;
    _avg?: Writing_submissionsAvgAggregateInputType;
    _sum?: Writing_submissionsSumAggregateInputType;
    _min?: Writing_submissionsMinAggregateInputType;
    _max?: Writing_submissionsMaxAggregateInputType;
};
export type Writing_submissionsGroupByOutputType = {
    submission_id: number;
    exercise_id: number | null;
    user_id: number | null;
    content: string;
    file_url: string | null;
    word_count: number | null;
    grade: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    status: string | null;
    submitted_at: Date | null;
    graded_at: Date | null;
    _count: Writing_submissionsCountAggregateOutputType | null;
    _avg: Writing_submissionsAvgAggregateOutputType | null;
    _sum: Writing_submissionsSumAggregateOutputType | null;
    _min: Writing_submissionsMinAggregateOutputType | null;
    _max: Writing_submissionsMaxAggregateOutputType | null;
};
type GetWriting_submissionsGroupByPayload<T extends writing_submissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Writing_submissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Writing_submissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Writing_submissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Writing_submissionsGroupByOutputType[P]>;
}>>;
export type writing_submissionsWhereInput = {
    AND?: Prisma.writing_submissionsWhereInput | Prisma.writing_submissionsWhereInput[];
    OR?: Prisma.writing_submissionsWhereInput[];
    NOT?: Prisma.writing_submissionsWhereInput | Prisma.writing_submissionsWhereInput[];
    submission_id?: Prisma.IntFilter<"writing_submissions"> | number;
    exercise_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    content?: Prisma.StringFilter<"writing_submissions"> | string;
    file_url?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    word_count?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    grade?: Prisma.DecimalNullableFilter<"writing_submissions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    status?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    submitted_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
    graded_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
    writing_exercises?: Prisma.XOR<Prisma.Writing_exercisesNullableScalarRelationFilter, Prisma.writing_exercisesWhereInput> | null;
    users_writing_submissions_graded_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_writing_submissions_user_idTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type writing_submissionsOrderByWithRelationInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    word_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    submitted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    writing_exercises?: Prisma.writing_exercisesOrderByWithRelationInput;
    users_writing_submissions_graded_byTousers?: Prisma.usersOrderByWithRelationInput;
    users_writing_submissions_user_idTousers?: Prisma.usersOrderByWithRelationInput;
};
export type writing_submissionsWhereUniqueInput = Prisma.AtLeast<{
    submission_id?: number;
    AND?: Prisma.writing_submissionsWhereInput | Prisma.writing_submissionsWhereInput[];
    OR?: Prisma.writing_submissionsWhereInput[];
    NOT?: Prisma.writing_submissionsWhereInput | Prisma.writing_submissionsWhereInput[];
    exercise_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    content?: Prisma.StringFilter<"writing_submissions"> | string;
    file_url?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    word_count?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    grade?: Prisma.DecimalNullableFilter<"writing_submissions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    status?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    submitted_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
    graded_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
    writing_exercises?: Prisma.XOR<Prisma.Writing_exercisesNullableScalarRelationFilter, Prisma.writing_exercisesWhereInput> | null;
    users_writing_submissions_graded_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_writing_submissions_user_idTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "submission_id">;
export type writing_submissionsOrderByWithAggregationInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    word_count?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    submitted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.writing_submissionsCountOrderByAggregateInput;
    _avg?: Prisma.writing_submissionsAvgOrderByAggregateInput;
    _max?: Prisma.writing_submissionsMaxOrderByAggregateInput;
    _min?: Prisma.writing_submissionsMinOrderByAggregateInput;
    _sum?: Prisma.writing_submissionsSumOrderByAggregateInput;
};
export type writing_submissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.writing_submissionsScalarWhereWithAggregatesInput | Prisma.writing_submissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.writing_submissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.writing_submissionsScalarWhereWithAggregatesInput | Prisma.writing_submissionsScalarWhereWithAggregatesInput[];
    submission_id?: Prisma.IntWithAggregatesFilter<"writing_submissions"> | number;
    exercise_id?: Prisma.IntNullableWithAggregatesFilter<"writing_submissions"> | number | null;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"writing_submissions"> | number | null;
    content?: Prisma.StringWithAggregatesFilter<"writing_submissions"> | string;
    file_url?: Prisma.StringNullableWithAggregatesFilter<"writing_submissions"> | string | null;
    word_count?: Prisma.IntNullableWithAggregatesFilter<"writing_submissions"> | number | null;
    grade?: Prisma.DecimalNullableWithAggregatesFilter<"writing_submissions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"writing_submissions"> | string | null;
    graded_by?: Prisma.IntNullableWithAggregatesFilter<"writing_submissions"> | number | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"writing_submissions"> | string | null;
    submitted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"writing_submissions"> | Date | string | null;
    graded_at?: Prisma.DateTimeNullableWithAggregatesFilter<"writing_submissions"> | Date | string | null;
};
export type writing_submissionsCreateInput = {
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
    writing_exercises?: Prisma.writing_exercisesCreateNestedOneWithoutWriting_submissionsInput;
    users_writing_submissions_graded_byTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_graded_byTousersInput;
    users_writing_submissions_user_idTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_user_idTousersInput;
};
export type writing_submissionsUncheckedCreateInput = {
    submission_id?: number;
    exercise_id?: number | null;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_exercises?: Prisma.writing_exercisesUpdateOneWithoutWriting_submissionsNestedInput;
    users_writing_submissions_graded_byTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_graded_byTousersNestedInput;
    users_writing_submissions_user_idTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_user_idTousersNestedInput;
};
export type writing_submissionsUncheckedUpdateInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsCreateManyInput = {
    submission_id?: number;
    exercise_id?: number | null;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsUncheckedUpdateManyInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Writing_submissionsListRelationFilter = {
    every?: Prisma.writing_submissionsWhereInput;
    some?: Prisma.writing_submissionsWhereInput;
    none?: Prisma.writing_submissionsWhereInput;
};
export type writing_submissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type writing_submissionsCountOrderByAggregateInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    word_count?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
};
export type writing_submissionsAvgOrderByAggregateInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    word_count?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
};
export type writing_submissionsMaxOrderByAggregateInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    word_count?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
};
export type writing_submissionsMinOrderByAggregateInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    file_url?: Prisma.SortOrder;
    word_count?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
};
export type writing_submissionsSumOrderByAggregateInput = {
    submission_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    word_count?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
};
export type writing_submissionsCreateNestedManyWithoutUsers_writing_submissions_graded_byTousersInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsCreateNestedManyWithoutUsers_writing_submissions_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsUncheckedCreateNestedManyWithoutUsers_writing_submissions_graded_byTousersInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsUncheckedCreateNestedManyWithoutUsers_writing_submissions_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsUpdateManyWithoutUsers_writing_submissions_graded_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_graded_byTousersInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsUpdateManyWithoutUsers_writing_submissions_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_user_idTousersInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_graded_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_graded_byTousersInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput> | Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput[] | Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput[];
    createMany?: Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_user_idTousersInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsCreateNestedManyWithoutWriting_exercisesInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput> | Prisma.writing_submissionsCreateWithoutWriting_exercisesInput[] | Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput | Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput[];
    createMany?: Prisma.writing_submissionsCreateManyWriting_exercisesInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsUncheckedCreateNestedManyWithoutWriting_exercisesInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput> | Prisma.writing_submissionsCreateWithoutWriting_exercisesInput[] | Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput | Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput[];
    createMany?: Prisma.writing_submissionsCreateManyWriting_exercisesInputEnvelope;
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
};
export type writing_submissionsUpdateManyWithoutWriting_exercisesNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput> | Prisma.writing_submissionsCreateWithoutWriting_exercisesInput[] | Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput | Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutWriting_exercisesInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutWriting_exercisesInput[];
    createMany?: Prisma.writing_submissionsCreateManyWriting_exercisesInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutWriting_exercisesInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutWriting_exercisesInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutWriting_exercisesInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutWriting_exercisesInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsUncheckedUpdateManyWithoutWriting_exercisesNestedInput = {
    create?: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput> | Prisma.writing_submissionsCreateWithoutWriting_exercisesInput[] | Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput[];
    connectOrCreate?: Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput | Prisma.writing_submissionsCreateOrConnectWithoutWriting_exercisesInput[];
    upsert?: Prisma.writing_submissionsUpsertWithWhereUniqueWithoutWriting_exercisesInput | Prisma.writing_submissionsUpsertWithWhereUniqueWithoutWriting_exercisesInput[];
    createMany?: Prisma.writing_submissionsCreateManyWriting_exercisesInputEnvelope;
    set?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    disconnect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    delete?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    connect?: Prisma.writing_submissionsWhereUniqueInput | Prisma.writing_submissionsWhereUniqueInput[];
    update?: Prisma.writing_submissionsUpdateWithWhereUniqueWithoutWriting_exercisesInput | Prisma.writing_submissionsUpdateWithWhereUniqueWithoutWriting_exercisesInput[];
    updateMany?: Prisma.writing_submissionsUpdateManyWithWhereWithoutWriting_exercisesInput | Prisma.writing_submissionsUpdateManyWithWhereWithoutWriting_exercisesInput[];
    deleteMany?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
};
export type writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput = {
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
    writing_exercises?: Prisma.writing_exercisesCreateNestedOneWithoutWriting_submissionsInput;
    users_writing_submissions_user_idTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_user_idTousersInput;
};
export type writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput = {
    submission_id?: number;
    exercise_id?: number | null;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_graded_byTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput>;
};
export type writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInputEnvelope = {
    data: Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInput | Prisma.writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInput[];
    skipDuplicates?: boolean;
};
export type writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput = {
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
    writing_exercises?: Prisma.writing_exercisesCreateNestedOneWithoutWriting_submissionsInput;
    users_writing_submissions_graded_byTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_graded_byTousersInput;
};
export type writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput = {
    submission_id?: number;
    exercise_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsCreateOrConnectWithoutUsers_writing_submissions_user_idTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput>;
};
export type writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInputEnvelope = {
    data: Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInput | Prisma.writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInput[];
    skipDuplicates?: boolean;
};
export type writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_graded_byTousersInput>;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_graded_byTousersInput>;
};
export type writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_graded_byTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutUsers_writing_submissions_graded_byTousersInput, Prisma.writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_graded_byTousersInput>;
};
export type writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_graded_byTousersInput = {
    where: Prisma.writing_submissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateManyMutationInput, Prisma.writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_graded_byTousersInput>;
};
export type writing_submissionsScalarWhereInput = {
    AND?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
    OR?: Prisma.writing_submissionsScalarWhereInput[];
    NOT?: Prisma.writing_submissionsScalarWhereInput | Prisma.writing_submissionsScalarWhereInput[];
    submission_id?: Prisma.IntFilter<"writing_submissions"> | number;
    exercise_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    content?: Prisma.StringFilter<"writing_submissions"> | string;
    file_url?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    word_count?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    grade?: Prisma.DecimalNullableFilter<"writing_submissions"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"writing_submissions"> | number | null;
    status?: Prisma.StringNullableFilter<"writing_submissions"> | string | null;
    submitted_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
    graded_at?: Prisma.DateTimeNullableFilter<"writing_submissions"> | Date | string | null;
};
export type writing_submissionsUpsertWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_user_idTousersInput>;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedCreateWithoutUsers_writing_submissions_user_idTousersInput>;
};
export type writing_submissionsUpdateWithWhereUniqueWithoutUsers_writing_submissions_user_idTousersInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutUsers_writing_submissions_user_idTousersInput, Prisma.writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_user_idTousersInput>;
};
export type writing_submissionsUpdateManyWithWhereWithoutUsers_writing_submissions_user_idTousersInput = {
    where: Prisma.writing_submissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateManyMutationInput, Prisma.writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_user_idTousersInput>;
};
export type writing_submissionsCreateWithoutWriting_exercisesInput = {
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
    users_writing_submissions_graded_byTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_graded_byTousersInput;
    users_writing_submissions_user_idTousers?: Prisma.usersCreateNestedOneWithoutWriting_submissions_writing_submissions_user_idTousersInput;
};
export type writing_submissionsUncheckedCreateWithoutWriting_exercisesInput = {
    submission_id?: number;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsCreateOrConnectWithoutWriting_exercisesInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput>;
};
export type writing_submissionsCreateManyWriting_exercisesInputEnvelope = {
    data: Prisma.writing_submissionsCreateManyWriting_exercisesInput | Prisma.writing_submissionsCreateManyWriting_exercisesInput[];
    skipDuplicates?: boolean;
};
export type writing_submissionsUpsertWithWhereUniqueWithoutWriting_exercisesInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedUpdateWithoutWriting_exercisesInput>;
    create: Prisma.XOR<Prisma.writing_submissionsCreateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedCreateWithoutWriting_exercisesInput>;
};
export type writing_submissionsUpdateWithWhereUniqueWithoutWriting_exercisesInput = {
    where: Prisma.writing_submissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateWithoutWriting_exercisesInput, Prisma.writing_submissionsUncheckedUpdateWithoutWriting_exercisesInput>;
};
export type writing_submissionsUpdateManyWithWhereWithoutWriting_exercisesInput = {
    where: Prisma.writing_submissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateManyMutationInput, Prisma.writing_submissionsUncheckedUpdateManyWithoutWriting_exercisesInput>;
};
export type writing_submissionsCreateManyUsers_writing_submissions_graded_byTousersInput = {
    submission_id?: number;
    exercise_id?: number | null;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsCreateManyUsers_writing_submissions_user_idTousersInput = {
    submission_id?: number;
    exercise_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsUpdateWithoutUsers_writing_submissions_graded_byTousersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_exercises?: Prisma.writing_exercisesUpdateOneWithoutWriting_submissionsNestedInput;
    users_writing_submissions_user_idTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_user_idTousersNestedInput;
};
export type writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_graded_byTousersInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_graded_byTousersInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsUpdateWithoutUsers_writing_submissions_user_idTousersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    writing_exercises?: Prisma.writing_exercisesUpdateOneWithoutWriting_submissionsNestedInput;
    users_writing_submissions_graded_byTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_graded_byTousersNestedInput;
};
export type writing_submissionsUncheckedUpdateWithoutUsers_writing_submissions_user_idTousersInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsUncheckedUpdateManyWithoutUsers_writing_submissions_user_idTousersInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsCreateManyWriting_exercisesInput = {
    submission_id?: number;
    user_id?: number | null;
    content: string;
    file_url?: string | null;
    word_count?: number | null;
    grade?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    status?: string | null;
    submitted_at?: Date | string | null;
    graded_at?: Date | string | null;
};
export type writing_submissionsUpdateWithoutWriting_exercisesInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users_writing_submissions_graded_byTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_graded_byTousersNestedInput;
    users_writing_submissions_user_idTousers?: Prisma.usersUpdateOneWithoutWriting_submissions_writing_submissions_user_idTousersNestedInput;
};
export type writing_submissionsUncheckedUpdateWithoutWriting_exercisesInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsUncheckedUpdateManyWithoutWriting_exercisesInput = {
    submission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    file_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    word_count?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    grade?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    submitted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type writing_submissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    submission_id?: boolean;
    exercise_id?: boolean;
    user_id?: boolean;
    content?: boolean;
    file_url?: boolean;
    word_count?: boolean;
    grade?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    graded_at?: boolean;
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["writing_submissions"]>;
export type writing_submissionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    submission_id?: boolean;
    exercise_id?: boolean;
    user_id?: boolean;
    content?: boolean;
    file_url?: boolean;
    word_count?: boolean;
    grade?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    graded_at?: boolean;
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["writing_submissions"]>;
export type writing_submissionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    submission_id?: boolean;
    exercise_id?: boolean;
    user_id?: boolean;
    content?: boolean;
    file_url?: boolean;
    word_count?: boolean;
    grade?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    graded_at?: boolean;
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["writing_submissions"]>;
export type writing_submissionsSelectScalar = {
    submission_id?: boolean;
    exercise_id?: boolean;
    user_id?: boolean;
    content?: boolean;
    file_url?: boolean;
    word_count?: boolean;
    grade?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    status?: boolean;
    submitted_at?: boolean;
    graded_at?: boolean;
};
export type writing_submissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"submission_id" | "exercise_id" | "user_id" | "content" | "file_url" | "word_count" | "grade" | "feedback" | "graded_by" | "status" | "submitted_at" | "graded_at", ExtArgs["result"]["writing_submissions"]>;
export type writing_submissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
};
export type writing_submissionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
};
export type writing_submissionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    writing_exercises?: boolean | Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>;
    users_writing_submissions_graded_byTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>;
    users_writing_submissions_user_idTousers?: boolean | Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>;
};
export type $writing_submissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "writing_submissions";
    objects: {
        writing_exercises: Prisma.$writing_exercisesPayload<ExtArgs> | null;
        users_writing_submissions_graded_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        users_writing_submissions_user_idTousers: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        submission_id: number;
        exercise_id: number | null;
        user_id: number | null;
        content: string;
        file_url: string | null;
        word_count: number | null;
        grade: runtime.Decimal | null;
        feedback: string | null;
        graded_by: number | null;
        status: string | null;
        submitted_at: Date | null;
        graded_at: Date | null;
    }, ExtArgs["result"]["writing_submissions"]>;
    composites: {};
};
export type writing_submissionsGetPayload<S extends boolean | null | undefined | writing_submissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload, S>;
export type writing_submissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<writing_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Writing_submissionsCountAggregateInputType | true;
};
export interface writing_submissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['writing_submissions'];
        meta: {
            name: 'writing_submissions';
        };
    };
    findUnique<T extends writing_submissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, writing_submissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends writing_submissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, writing_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends writing_submissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, writing_submissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends writing_submissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, writing_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends writing_submissionsFindManyArgs>(args?: Prisma.SelectSubset<T, writing_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends writing_submissionsCreateArgs>(args: Prisma.SelectSubset<T, writing_submissionsCreateArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends writing_submissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, writing_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends writing_submissionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, writing_submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends writing_submissionsDeleteArgs>(args: Prisma.SelectSubset<T, writing_submissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends writing_submissionsUpdateArgs>(args: Prisma.SelectSubset<T, writing_submissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends writing_submissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, writing_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends writing_submissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, writing_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends writing_submissionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, writing_submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends writing_submissionsUpsertArgs>(args: Prisma.SelectSubset<T, writing_submissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__writing_submissionsClient<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends writing_submissionsCountArgs>(args?: Prisma.Subset<T, writing_submissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Writing_submissionsCountAggregateOutputType> : number>;
    aggregate<T extends Writing_submissionsAggregateArgs>(args: Prisma.Subset<T, Writing_submissionsAggregateArgs>): Prisma.PrismaPromise<GetWriting_submissionsAggregateType<T>>;
    groupBy<T extends writing_submissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: writing_submissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: writing_submissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, writing_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriting_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: writing_submissionsFieldRefs;
}
export interface Prisma__writing_submissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    writing_exercises<T extends Prisma.writing_submissions$writing_exercisesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.writing_submissions$writing_exercisesArgs<ExtArgs>>): Prisma.Prisma__writing_exercisesClient<runtime.Types.Result.GetResult<Prisma.$writing_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_writing_submissions_graded_byTousers<T extends Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_writing_submissions_user_idTousers<T extends Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface writing_submissionsFieldRefs {
    readonly submission_id: Prisma.FieldRef<"writing_submissions", 'Int'>;
    readonly exercise_id: Prisma.FieldRef<"writing_submissions", 'Int'>;
    readonly user_id: Prisma.FieldRef<"writing_submissions", 'Int'>;
    readonly content: Prisma.FieldRef<"writing_submissions", 'String'>;
    readonly file_url: Prisma.FieldRef<"writing_submissions", 'String'>;
    readonly word_count: Prisma.FieldRef<"writing_submissions", 'Int'>;
    readonly grade: Prisma.FieldRef<"writing_submissions", 'Decimal'>;
    readonly feedback: Prisma.FieldRef<"writing_submissions", 'String'>;
    readonly graded_by: Prisma.FieldRef<"writing_submissions", 'Int'>;
    readonly status: Prisma.FieldRef<"writing_submissions", 'String'>;
    readonly submitted_at: Prisma.FieldRef<"writing_submissions", 'DateTime'>;
    readonly graded_at: Prisma.FieldRef<"writing_submissions", 'DateTime'>;
}
export type writing_submissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where: Prisma.writing_submissionsWhereUniqueInput;
};
export type writing_submissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where: Prisma.writing_submissionsWhereUniqueInput;
};
export type writing_submissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_submissionsScalarFieldEnum | Prisma.Writing_submissionsScalarFieldEnum[];
};
export type writing_submissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_submissionsScalarFieldEnum | Prisma.Writing_submissionsScalarFieldEnum[];
};
export type writing_submissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_submissionsScalarFieldEnum | Prisma.Writing_submissionsScalarFieldEnum[];
};
export type writing_submissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_submissionsCreateInput, Prisma.writing_submissionsUncheckedCreateInput>;
};
export type writing_submissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.writing_submissionsCreateManyInput | Prisma.writing_submissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type writing_submissionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    data: Prisma.writing_submissionsCreateManyInput | Prisma.writing_submissionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.writing_submissionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type writing_submissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateInput, Prisma.writing_submissionsUncheckedUpdateInput>;
    where: Prisma.writing_submissionsWhereUniqueInput;
};
export type writing_submissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.writing_submissionsUpdateManyMutationInput, Prisma.writing_submissionsUncheckedUpdateManyInput>;
    where?: Prisma.writing_submissionsWhereInput;
    limit?: number;
};
export type writing_submissionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.writing_submissionsUpdateManyMutationInput, Prisma.writing_submissionsUncheckedUpdateManyInput>;
    where?: Prisma.writing_submissionsWhereInput;
    limit?: number;
    include?: Prisma.writing_submissionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type writing_submissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where: Prisma.writing_submissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.writing_submissionsCreateInput, Prisma.writing_submissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.writing_submissionsUpdateInput, Prisma.writing_submissionsUncheckedUpdateInput>;
};
export type writing_submissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where: Prisma.writing_submissionsWhereUniqueInput;
};
export type writing_submissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_submissionsWhereInput;
    limit?: number;
};
export type writing_submissions$writing_exercisesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.writing_exercisesOmit<ExtArgs> | null;
    include?: Prisma.writing_exercisesInclude<ExtArgs> | null;
    where?: Prisma.writing_exercisesWhereInput;
};
export type writing_submissions$users_writing_submissions_graded_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type writing_submissions$users_writing_submissions_user_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type writing_submissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
};
export {};
