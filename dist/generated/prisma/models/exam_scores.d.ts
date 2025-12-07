import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type exam_scoresModel = runtime.Types.Result.DefaultSelection<Prisma.$exam_scoresPayload>;
export type AggregateExam_scores = {
    _count: Exam_scoresCountAggregateOutputType | null;
    _avg: Exam_scoresAvgAggregateOutputType | null;
    _sum: Exam_scoresSumAggregateOutputType | null;
    _min: Exam_scoresMinAggregateOutputType | null;
    _max: Exam_scoresMaxAggregateOutputType | null;
};
export type Exam_scoresAvgAggregateOutputType = {
    score_id: number | null;
    class_id: number | null;
    user_id: number | null;
    listening_score: runtime.Decimal | null;
    speaking_score: runtime.Decimal | null;
    reading_score: runtime.Decimal | null;
    writing_score: runtime.Decimal | null;
    total_score: runtime.Decimal | null;
    graded_by: number | null;
};
export type Exam_scoresSumAggregateOutputType = {
    score_id: number | null;
    class_id: number | null;
    user_id: number | null;
    listening_score: runtime.Decimal | null;
    speaking_score: runtime.Decimal | null;
    reading_score: runtime.Decimal | null;
    writing_score: runtime.Decimal | null;
    total_score: runtime.Decimal | null;
    graded_by: number | null;
};
export type Exam_scoresMinAggregateOutputType = {
    score_id: number | null;
    class_id: number | null;
    user_id: number | null;
    listening_score: runtime.Decimal | null;
    speaking_score: runtime.Decimal | null;
    reading_score: runtime.Decimal | null;
    writing_score: runtime.Decimal | null;
    total_score: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    graded_at: Date | null;
    created_at: Date | null;
};
export type Exam_scoresMaxAggregateOutputType = {
    score_id: number | null;
    class_id: number | null;
    user_id: number | null;
    listening_score: runtime.Decimal | null;
    speaking_score: runtime.Decimal | null;
    reading_score: runtime.Decimal | null;
    writing_score: runtime.Decimal | null;
    total_score: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    graded_at: Date | null;
    created_at: Date | null;
};
export type Exam_scoresCountAggregateOutputType = {
    score_id: number;
    class_id: number;
    user_id: number;
    listening_score: number;
    speaking_score: number;
    reading_score: number;
    writing_score: number;
    total_score: number;
    feedback: number;
    graded_by: number;
    graded_at: number;
    created_at: number;
    _all: number;
};
export type Exam_scoresAvgAggregateInputType = {
    score_id?: true;
    class_id?: true;
    user_id?: true;
    listening_score?: true;
    speaking_score?: true;
    reading_score?: true;
    writing_score?: true;
    total_score?: true;
    graded_by?: true;
};
export type Exam_scoresSumAggregateInputType = {
    score_id?: true;
    class_id?: true;
    user_id?: true;
    listening_score?: true;
    speaking_score?: true;
    reading_score?: true;
    writing_score?: true;
    total_score?: true;
    graded_by?: true;
};
export type Exam_scoresMinAggregateInputType = {
    score_id?: true;
    class_id?: true;
    user_id?: true;
    listening_score?: true;
    speaking_score?: true;
    reading_score?: true;
    writing_score?: true;
    total_score?: true;
    feedback?: true;
    graded_by?: true;
    graded_at?: true;
    created_at?: true;
};
export type Exam_scoresMaxAggregateInputType = {
    score_id?: true;
    class_id?: true;
    user_id?: true;
    listening_score?: true;
    speaking_score?: true;
    reading_score?: true;
    writing_score?: true;
    total_score?: true;
    feedback?: true;
    graded_by?: true;
    graded_at?: true;
    created_at?: true;
};
export type Exam_scoresCountAggregateInputType = {
    score_id?: true;
    class_id?: true;
    user_id?: true;
    listening_score?: true;
    speaking_score?: true;
    reading_score?: true;
    writing_score?: true;
    total_score?: true;
    feedback?: true;
    graded_by?: true;
    graded_at?: true;
    created_at?: true;
    _all?: true;
};
export type Exam_scoresAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.exam_scoresWhereInput;
    orderBy?: Prisma.exam_scoresOrderByWithRelationInput | Prisma.exam_scoresOrderByWithRelationInput[];
    cursor?: Prisma.exam_scoresWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Exam_scoresCountAggregateInputType;
    _avg?: Exam_scoresAvgAggregateInputType;
    _sum?: Exam_scoresSumAggregateInputType;
    _min?: Exam_scoresMinAggregateInputType;
    _max?: Exam_scoresMaxAggregateInputType;
};
export type GetExam_scoresAggregateType<T extends Exam_scoresAggregateArgs> = {
    [P in keyof T & keyof AggregateExam_scores]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam_scores[P]> : Prisma.GetScalarType<T[P], AggregateExam_scores[P]>;
};
export type exam_scoresGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.exam_scoresWhereInput;
    orderBy?: Prisma.exam_scoresOrderByWithAggregationInput | Prisma.exam_scoresOrderByWithAggregationInput[];
    by: Prisma.Exam_scoresScalarFieldEnum[] | Prisma.Exam_scoresScalarFieldEnum;
    having?: Prisma.exam_scoresScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Exam_scoresCountAggregateInputType | true;
    _avg?: Exam_scoresAvgAggregateInputType;
    _sum?: Exam_scoresSumAggregateInputType;
    _min?: Exam_scoresMinAggregateInputType;
    _max?: Exam_scoresMaxAggregateInputType;
};
export type Exam_scoresGroupByOutputType = {
    score_id: number;
    class_id: number | null;
    user_id: number | null;
    listening_score: runtime.Decimal | null;
    speaking_score: runtime.Decimal | null;
    reading_score: runtime.Decimal | null;
    writing_score: runtime.Decimal | null;
    total_score: runtime.Decimal | null;
    feedback: string | null;
    graded_by: number | null;
    graded_at: Date | null;
    created_at: Date | null;
    _count: Exam_scoresCountAggregateOutputType | null;
    _avg: Exam_scoresAvgAggregateOutputType | null;
    _sum: Exam_scoresSumAggregateOutputType | null;
    _min: Exam_scoresMinAggregateOutputType | null;
    _max: Exam_scoresMaxAggregateOutputType | null;
};
type GetExam_scoresGroupByPayload<T extends exam_scoresGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Exam_scoresGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Exam_scoresGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Exam_scoresGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Exam_scoresGroupByOutputType[P]>;
}>>;
export type exam_scoresWhereInput = {
    AND?: Prisma.exam_scoresWhereInput | Prisma.exam_scoresWhereInput[];
    OR?: Prisma.exam_scoresWhereInput[];
    NOT?: Prisma.exam_scoresWhereInput | Prisma.exam_scoresWhereInput[];
    score_id?: Prisma.IntFilter<"exam_scores"> | number;
    class_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    user_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    listening_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"exam_scores"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    graded_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
    classes?: Prisma.XOR<Prisma.ClassesNullableScalarRelationFilter, Prisma.classesWhereInput> | null;
    users_exam_scores_graded_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_exam_scores_user_idTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type exam_scoresOrderByWithRelationInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    listening_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    speaking_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    reading_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    writing_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    classes?: Prisma.classesOrderByWithRelationInput;
    users_exam_scores_graded_byTousers?: Prisma.usersOrderByWithRelationInput;
    users_exam_scores_user_idTousers?: Prisma.usersOrderByWithRelationInput;
};
export type exam_scoresWhereUniqueInput = Prisma.AtLeast<{
    score_id?: number;
    class_id_user_id?: Prisma.exam_scoresClass_idUser_idCompoundUniqueInput;
    AND?: Prisma.exam_scoresWhereInput | Prisma.exam_scoresWhereInput[];
    OR?: Prisma.exam_scoresWhereInput[];
    NOT?: Prisma.exam_scoresWhereInput | Prisma.exam_scoresWhereInput[];
    class_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    user_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    listening_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"exam_scores"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    graded_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
    classes?: Prisma.XOR<Prisma.ClassesNullableScalarRelationFilter, Prisma.classesWhereInput> | null;
    users_exam_scores_graded_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_exam_scores_user_idTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "score_id" | "class_id_user_id">;
export type exam_scoresOrderByWithAggregationInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    listening_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    speaking_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    reading_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    writing_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    graded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.exam_scoresCountOrderByAggregateInput;
    _avg?: Prisma.exam_scoresAvgOrderByAggregateInput;
    _max?: Prisma.exam_scoresMaxOrderByAggregateInput;
    _min?: Prisma.exam_scoresMinOrderByAggregateInput;
    _sum?: Prisma.exam_scoresSumOrderByAggregateInput;
};
export type exam_scoresScalarWhereWithAggregatesInput = {
    AND?: Prisma.exam_scoresScalarWhereWithAggregatesInput | Prisma.exam_scoresScalarWhereWithAggregatesInput[];
    OR?: Prisma.exam_scoresScalarWhereWithAggregatesInput[];
    NOT?: Prisma.exam_scoresScalarWhereWithAggregatesInput | Prisma.exam_scoresScalarWhereWithAggregatesInput[];
    score_id?: Prisma.IntWithAggregatesFilter<"exam_scores"> | number;
    class_id?: Prisma.IntNullableWithAggregatesFilter<"exam_scores"> | number | null;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"exam_scores"> | number | null;
    listening_score?: Prisma.DecimalNullableWithAggregatesFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.DecimalNullableWithAggregatesFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.DecimalNullableWithAggregatesFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.DecimalNullableWithAggregatesFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.DecimalNullableWithAggregatesFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"exam_scores"> | string | null;
    graded_by?: Prisma.IntNullableWithAggregatesFilter<"exam_scores"> | number | null;
    graded_at?: Prisma.DateTimeNullableWithAggregatesFilter<"exam_scores"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"exam_scores"> | Date | string | null;
};
export type exam_scoresCreateInput = {
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
    classes?: Prisma.classesCreateNestedOneWithoutExam_scoresInput;
    users_exam_scores_graded_byTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_graded_byTousersInput;
    users_exam_scores_user_idTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_user_idTousersInput;
};
export type exam_scoresUncheckedCreateInput = {
    score_id?: number;
    class_id?: number | null;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresUpdateInput = {
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneWithoutExam_scoresNestedInput;
    users_exam_scores_graded_byTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_graded_byTousersNestedInput;
    users_exam_scores_user_idTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_user_idTousersNestedInput;
};
export type exam_scoresUncheckedUpdateInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresCreateManyInput = {
    score_id?: number;
    class_id?: number | null;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresUpdateManyMutationInput = {
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresUncheckedUpdateManyInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Exam_scoresListRelationFilter = {
    every?: Prisma.exam_scoresWhereInput;
    some?: Prisma.exam_scoresWhereInput;
    none?: Prisma.exam_scoresWhereInput;
};
export type exam_scoresOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type exam_scoresClass_idUser_idCompoundUniqueInput = {
    class_id: number;
    user_id: number;
};
export type exam_scoresCountOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    listening_score?: Prisma.SortOrder;
    speaking_score?: Prisma.SortOrder;
    reading_score?: Prisma.SortOrder;
    writing_score?: Prisma.SortOrder;
    total_score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type exam_scoresAvgOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    listening_score?: Prisma.SortOrder;
    speaking_score?: Prisma.SortOrder;
    reading_score?: Prisma.SortOrder;
    writing_score?: Prisma.SortOrder;
    total_score?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
};
export type exam_scoresMaxOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    listening_score?: Prisma.SortOrder;
    speaking_score?: Prisma.SortOrder;
    reading_score?: Prisma.SortOrder;
    writing_score?: Prisma.SortOrder;
    total_score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type exam_scoresMinOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    listening_score?: Prisma.SortOrder;
    speaking_score?: Prisma.SortOrder;
    reading_score?: Prisma.SortOrder;
    writing_score?: Prisma.SortOrder;
    total_score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
    graded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type exam_scoresSumOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    listening_score?: Prisma.SortOrder;
    speaking_score?: Prisma.SortOrder;
    reading_score?: Prisma.SortOrder;
    writing_score?: Prisma.SortOrder;
    total_score?: Prisma.SortOrder;
    graded_by?: Prisma.SortOrder;
};
export type exam_scoresCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput> | Prisma.exam_scoresCreateWithoutClassesInput[] | Prisma.exam_scoresUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutClassesInput | Prisma.exam_scoresCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.exam_scoresCreateManyClassesInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresUncheckedCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput> | Prisma.exam_scoresCreateWithoutClassesInput[] | Prisma.exam_scoresUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutClassesInput | Prisma.exam_scoresCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.exam_scoresCreateManyClassesInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput> | Prisma.exam_scoresCreateWithoutClassesInput[] | Prisma.exam_scoresUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutClassesInput | Prisma.exam_scoresCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutClassesInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.exam_scoresCreateManyClassesInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutClassesInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutClassesInput | Prisma.exam_scoresUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput> | Prisma.exam_scoresCreateWithoutClassesInput[] | Prisma.exam_scoresUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutClassesInput | Prisma.exam_scoresCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutClassesInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.exam_scoresCreateManyClassesInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutClassesInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutClassesInput | Prisma.exam_scoresUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresCreateNestedManyWithoutUsers_exam_scores_graded_byTousersInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresCreateNestedManyWithoutUsers_exam_scores_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresUncheckedCreateNestedManyWithoutUsers_exam_scores_graded_byTousersInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresUncheckedCreateNestedManyWithoutUsers_exam_scores_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInputEnvelope;
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
};
export type exam_scoresUpdateManyWithoutUsers_exam_scores_graded_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_graded_byTousersInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresUpdateManyWithoutUsers_exam_scores_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_user_idTousersInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_graded_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_graded_byTousersInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput> | Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput[] | Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput[];
    connectOrCreate?: Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput[];
    upsert?: Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput[];
    createMany?: Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInputEnvelope;
    set?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    disconnect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    delete?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    connect?: Prisma.exam_scoresWhereUniqueInput | Prisma.exam_scoresWhereUniqueInput[];
    update?: Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput[];
    updateMany?: Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_user_idTousersInput[];
    deleteMany?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
};
export type exam_scoresCreateWithoutClassesInput = {
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
    users_exam_scores_graded_byTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_graded_byTousersInput;
    users_exam_scores_user_idTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_user_idTousersInput;
};
export type exam_scoresUncheckedCreateWithoutClassesInput = {
    score_id?: number;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresCreateOrConnectWithoutClassesInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput>;
};
export type exam_scoresCreateManyClassesInputEnvelope = {
    data: Prisma.exam_scoresCreateManyClassesInput | Prisma.exam_scoresCreateManyClassesInput[];
    skipDuplicates?: boolean;
};
export type exam_scoresUpsertWithWhereUniqueWithoutClassesInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    update: Prisma.XOR<Prisma.exam_scoresUpdateWithoutClassesInput, Prisma.exam_scoresUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutClassesInput, Prisma.exam_scoresUncheckedCreateWithoutClassesInput>;
};
export type exam_scoresUpdateWithWhereUniqueWithoutClassesInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateWithoutClassesInput, Prisma.exam_scoresUncheckedUpdateWithoutClassesInput>;
};
export type exam_scoresUpdateManyWithWhereWithoutClassesInput = {
    where: Prisma.exam_scoresScalarWhereInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateManyMutationInput, Prisma.exam_scoresUncheckedUpdateManyWithoutClassesInput>;
};
export type exam_scoresScalarWhereInput = {
    AND?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
    OR?: Prisma.exam_scoresScalarWhereInput[];
    NOT?: Prisma.exam_scoresScalarWhereInput | Prisma.exam_scoresScalarWhereInput[];
    score_id?: Prisma.IntFilter<"exam_scores"> | number;
    class_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    user_id?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    listening_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.DecimalNullableFilter<"exam_scores"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.StringNullableFilter<"exam_scores"> | string | null;
    graded_by?: Prisma.IntNullableFilter<"exam_scores"> | number | null;
    graded_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"exam_scores"> | Date | string | null;
};
export type exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput = {
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
    classes?: Prisma.classesCreateNestedOneWithoutExam_scoresInput;
    users_exam_scores_user_idTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_user_idTousersInput;
};
export type exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput = {
    score_id?: number;
    class_id?: number | null;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresCreateOrConnectWithoutUsers_exam_scores_graded_byTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput>;
};
export type exam_scoresCreateManyUsers_exam_scores_graded_byTousersInputEnvelope = {
    data: Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInput | Prisma.exam_scoresCreateManyUsers_exam_scores_graded_byTousersInput[];
    skipDuplicates?: boolean;
};
export type exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput = {
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
    classes?: Prisma.classesCreateNestedOneWithoutExam_scoresInput;
    users_exam_scores_graded_byTousers?: Prisma.usersCreateNestedOneWithoutExam_scores_exam_scores_graded_byTousersInput;
};
export type exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput = {
    score_id?: number;
    class_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresCreateOrConnectWithoutUsers_exam_scores_user_idTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput>;
};
export type exam_scoresCreateManyUsers_exam_scores_user_idTousersInputEnvelope = {
    data: Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInput | Prisma.exam_scoresCreateManyUsers_exam_scores_user_idTousersInput[];
    skipDuplicates?: boolean;
};
export type exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    update: Prisma.XOR<Prisma.exam_scoresUpdateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedUpdateWithoutUsers_exam_scores_graded_byTousersInput>;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_graded_byTousersInput>;
};
export type exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_graded_byTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateWithoutUsers_exam_scores_graded_byTousersInput, Prisma.exam_scoresUncheckedUpdateWithoutUsers_exam_scores_graded_byTousersInput>;
};
export type exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_graded_byTousersInput = {
    where: Prisma.exam_scoresScalarWhereInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateManyMutationInput, Prisma.exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_graded_byTousersInput>;
};
export type exam_scoresUpsertWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    update: Prisma.XOR<Prisma.exam_scoresUpdateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedUpdateWithoutUsers_exam_scores_user_idTousersInput>;
    create: Prisma.XOR<Prisma.exam_scoresCreateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedCreateWithoutUsers_exam_scores_user_idTousersInput>;
};
export type exam_scoresUpdateWithWhereUniqueWithoutUsers_exam_scores_user_idTousersInput = {
    where: Prisma.exam_scoresWhereUniqueInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateWithoutUsers_exam_scores_user_idTousersInput, Prisma.exam_scoresUncheckedUpdateWithoutUsers_exam_scores_user_idTousersInput>;
};
export type exam_scoresUpdateManyWithWhereWithoutUsers_exam_scores_user_idTousersInput = {
    where: Prisma.exam_scoresScalarWhereInput;
    data: Prisma.XOR<Prisma.exam_scoresUpdateManyMutationInput, Prisma.exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_user_idTousersInput>;
};
export type exam_scoresCreateManyClassesInput = {
    score_id?: number;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresUpdateWithoutClassesInput = {
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users_exam_scores_graded_byTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_graded_byTousersNestedInput;
    users_exam_scores_user_idTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_user_idTousersNestedInput;
};
export type exam_scoresUncheckedUpdateWithoutClassesInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresUncheckedUpdateManyWithoutClassesInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresCreateManyUsers_exam_scores_graded_byTousersInput = {
    score_id?: number;
    class_id?: number | null;
    user_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresCreateManyUsers_exam_scores_user_idTousersInput = {
    score_id?: number;
    class_id?: number | null;
    listening_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: string | null;
    graded_by?: number | null;
    graded_at?: Date | string | null;
    created_at?: Date | string | null;
};
export type exam_scoresUpdateWithoutUsers_exam_scores_graded_byTousersInput = {
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneWithoutExam_scoresNestedInput;
    users_exam_scores_user_idTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_user_idTousersNestedInput;
};
export type exam_scoresUncheckedUpdateWithoutUsers_exam_scores_graded_byTousersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_graded_byTousersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresUpdateWithoutUsers_exam_scores_user_idTousersInput = {
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneWithoutExam_scoresNestedInput;
    users_exam_scores_graded_byTousers?: Prisma.usersUpdateOneWithoutExam_scores_exam_scores_graded_byTousersNestedInput;
};
export type exam_scoresUncheckedUpdateWithoutUsers_exam_scores_user_idTousersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresUncheckedUpdateManyWithoutUsers_exam_scores_user_idTousersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    listening_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    speaking_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    reading_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    writing_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_score?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    graded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type exam_scoresSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    listening_score?: boolean;
    speaking_score?: boolean;
    reading_score?: boolean;
    writing_score?: boolean;
    total_score?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    graded_at?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["exam_scores"]>;
export type exam_scoresSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    listening_score?: boolean;
    speaking_score?: boolean;
    reading_score?: boolean;
    writing_score?: boolean;
    total_score?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    graded_at?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["exam_scores"]>;
export type exam_scoresSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    listening_score?: boolean;
    speaking_score?: boolean;
    reading_score?: boolean;
    writing_score?: boolean;
    total_score?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    graded_at?: boolean;
    created_at?: boolean;
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
}, ExtArgs["result"]["exam_scores"]>;
export type exam_scoresSelectScalar = {
    score_id?: boolean;
    class_id?: boolean;
    user_id?: boolean;
    listening_score?: boolean;
    speaking_score?: boolean;
    reading_score?: boolean;
    writing_score?: boolean;
    total_score?: boolean;
    feedback?: boolean;
    graded_by?: boolean;
    graded_at?: boolean;
    created_at?: boolean;
};
export type exam_scoresOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"score_id" | "class_id" | "user_id" | "listening_score" | "speaking_score" | "reading_score" | "writing_score" | "total_score" | "feedback" | "graded_by" | "graded_at" | "created_at", ExtArgs["result"]["exam_scores"]>;
export type exam_scoresInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
};
export type exam_scoresIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
};
export type exam_scoresIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    classes?: boolean | Prisma.exam_scores$classesArgs<ExtArgs>;
    users_exam_scores_graded_byTousers?: boolean | Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>;
    users_exam_scores_user_idTousers?: boolean | Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>;
};
export type $exam_scoresPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "exam_scores";
    objects: {
        classes: Prisma.$classesPayload<ExtArgs> | null;
        users_exam_scores_graded_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        users_exam_scores_user_idTousers: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        score_id: number;
        class_id: number | null;
        user_id: number | null;
        listening_score: runtime.Decimal | null;
        speaking_score: runtime.Decimal | null;
        reading_score: runtime.Decimal | null;
        writing_score: runtime.Decimal | null;
        total_score: runtime.Decimal | null;
        feedback: string | null;
        graded_by: number | null;
        graded_at: Date | null;
        created_at: Date | null;
    }, ExtArgs["result"]["exam_scores"]>;
    composites: {};
};
export type exam_scoresGetPayload<S extends boolean | null | undefined | exam_scoresDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload, S>;
export type exam_scoresCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<exam_scoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Exam_scoresCountAggregateInputType | true;
};
export interface exam_scoresDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['exam_scores'];
        meta: {
            name: 'exam_scores';
        };
    };
    findUnique<T extends exam_scoresFindUniqueArgs>(args: Prisma.SelectSubset<T, exam_scoresFindUniqueArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends exam_scoresFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, exam_scoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends exam_scoresFindFirstArgs>(args?: Prisma.SelectSubset<T, exam_scoresFindFirstArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends exam_scoresFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, exam_scoresFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends exam_scoresFindManyArgs>(args?: Prisma.SelectSubset<T, exam_scoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends exam_scoresCreateArgs>(args: Prisma.SelectSubset<T, exam_scoresCreateArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends exam_scoresCreateManyArgs>(args?: Prisma.SelectSubset<T, exam_scoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends exam_scoresCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, exam_scoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends exam_scoresDeleteArgs>(args: Prisma.SelectSubset<T, exam_scoresDeleteArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends exam_scoresUpdateArgs>(args: Prisma.SelectSubset<T, exam_scoresUpdateArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends exam_scoresDeleteManyArgs>(args?: Prisma.SelectSubset<T, exam_scoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends exam_scoresUpdateManyArgs>(args: Prisma.SelectSubset<T, exam_scoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends exam_scoresUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, exam_scoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends exam_scoresUpsertArgs>(args: Prisma.SelectSubset<T, exam_scoresUpsertArgs<ExtArgs>>): Prisma.Prisma__exam_scoresClient<runtime.Types.Result.GetResult<Prisma.$exam_scoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends exam_scoresCountArgs>(args?: Prisma.Subset<T, exam_scoresCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Exam_scoresCountAggregateOutputType> : number>;
    aggregate<T extends Exam_scoresAggregateArgs>(args: Prisma.Subset<T, Exam_scoresAggregateArgs>): Prisma.PrismaPromise<GetExam_scoresAggregateType<T>>;
    groupBy<T extends exam_scoresGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: exam_scoresGroupByArgs['orderBy'];
    } : {
        orderBy?: exam_scoresGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, exam_scoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExam_scoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: exam_scoresFieldRefs;
}
export interface Prisma__exam_scoresClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    classes<T extends Prisma.exam_scores$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.exam_scores$classesArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_exam_scores_graded_byTousers<T extends Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_exam_scores_user_idTousers<T extends Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface exam_scoresFieldRefs {
    readonly score_id: Prisma.FieldRef<"exam_scores", 'Int'>;
    readonly class_id: Prisma.FieldRef<"exam_scores", 'Int'>;
    readonly user_id: Prisma.FieldRef<"exam_scores", 'Int'>;
    readonly listening_score: Prisma.FieldRef<"exam_scores", 'Decimal'>;
    readonly speaking_score: Prisma.FieldRef<"exam_scores", 'Decimal'>;
    readonly reading_score: Prisma.FieldRef<"exam_scores", 'Decimal'>;
    readonly writing_score: Prisma.FieldRef<"exam_scores", 'Decimal'>;
    readonly total_score: Prisma.FieldRef<"exam_scores", 'Decimal'>;
    readonly feedback: Prisma.FieldRef<"exam_scores", 'String'>;
    readonly graded_by: Prisma.FieldRef<"exam_scores", 'Int'>;
    readonly graded_at: Prisma.FieldRef<"exam_scores", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"exam_scores", 'DateTime'>;
}
export type exam_scoresFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where: Prisma.exam_scoresWhereUniqueInput;
};
export type exam_scoresFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where: Prisma.exam_scoresWhereUniqueInput;
};
export type exam_scoresFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where?: Prisma.exam_scoresWhereInput;
    orderBy?: Prisma.exam_scoresOrderByWithRelationInput | Prisma.exam_scoresOrderByWithRelationInput[];
    cursor?: Prisma.exam_scoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Exam_scoresScalarFieldEnum | Prisma.Exam_scoresScalarFieldEnum[];
};
export type exam_scoresFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where?: Prisma.exam_scoresWhereInput;
    orderBy?: Prisma.exam_scoresOrderByWithRelationInput | Prisma.exam_scoresOrderByWithRelationInput[];
    cursor?: Prisma.exam_scoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Exam_scoresScalarFieldEnum | Prisma.Exam_scoresScalarFieldEnum[];
};
export type exam_scoresFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where?: Prisma.exam_scoresWhereInput;
    orderBy?: Prisma.exam_scoresOrderByWithRelationInput | Prisma.exam_scoresOrderByWithRelationInput[];
    cursor?: Prisma.exam_scoresWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Exam_scoresScalarFieldEnum | Prisma.Exam_scoresScalarFieldEnum[];
};
export type exam_scoresCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.exam_scoresCreateInput, Prisma.exam_scoresUncheckedCreateInput>;
};
export type exam_scoresCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.exam_scoresCreateManyInput | Prisma.exam_scoresCreateManyInput[];
    skipDuplicates?: boolean;
};
export type exam_scoresCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    data: Prisma.exam_scoresCreateManyInput | Prisma.exam_scoresCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.exam_scoresIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type exam_scoresUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.exam_scoresUpdateInput, Prisma.exam_scoresUncheckedUpdateInput>;
    where: Prisma.exam_scoresWhereUniqueInput;
};
export type exam_scoresUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.exam_scoresUpdateManyMutationInput, Prisma.exam_scoresUncheckedUpdateManyInput>;
    where?: Prisma.exam_scoresWhereInput;
    limit?: number;
};
export type exam_scoresUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.exam_scoresUpdateManyMutationInput, Prisma.exam_scoresUncheckedUpdateManyInput>;
    where?: Prisma.exam_scoresWhereInput;
    limit?: number;
    include?: Prisma.exam_scoresIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type exam_scoresUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where: Prisma.exam_scoresWhereUniqueInput;
    create: Prisma.XOR<Prisma.exam_scoresCreateInput, Prisma.exam_scoresUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.exam_scoresUpdateInput, Prisma.exam_scoresUncheckedUpdateInput>;
};
export type exam_scoresDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
    where: Prisma.exam_scoresWhereUniqueInput;
};
export type exam_scoresDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.exam_scoresWhereInput;
    limit?: number;
};
export type exam_scores$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.classesSelect<ExtArgs> | null;
    omit?: Prisma.classesOmit<ExtArgs> | null;
    include?: Prisma.classesInclude<ExtArgs> | null;
    where?: Prisma.classesWhereInput;
};
export type exam_scores$users_exam_scores_graded_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type exam_scores$users_exam_scores_user_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type exam_scoresDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.exam_scoresSelect<ExtArgs> | null;
    omit?: Prisma.exam_scoresOmit<ExtArgs> | null;
    include?: Prisma.exam_scoresInclude<ExtArgs> | null;
};
export {};
