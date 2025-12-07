import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type quizzesModel = runtime.Types.Result.DefaultSelection<Prisma.$quizzesPayload>;
export type AggregateQuizzes = {
    _count: QuizzesCountAggregateOutputType | null;
    _avg: QuizzesAvgAggregateOutputType | null;
    _sum: QuizzesSumAggregateOutputType | null;
    _min: QuizzesMinAggregateOutputType | null;
    _max: QuizzesMaxAggregateOutputType | null;
};
export type QuizzesAvgAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type QuizzesSumAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    order_index: number | null;
    created_by: number | null;
};
export type QuizzesMinAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    question: string | null;
    question_type: string | null;
    explanation: string | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type QuizzesMaxAggregateOutputType = {
    quiz_id: number | null;
    lesson_id: number | null;
    question: string | null;
    question_type: string | null;
    explanation: string | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type QuizzesCountAggregateOutputType = {
    quiz_id: number;
    lesson_id: number;
    question: number;
    question_type: number;
    explanation: number;
    options: number;
    correct_answer: number;
    order_index: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type QuizzesAvgAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    order_index?: true;
    created_by?: true;
};
export type QuizzesSumAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    order_index?: true;
    created_by?: true;
};
export type QuizzesMinAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type QuizzesMaxAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type QuizzesCountAggregateInputType = {
    quiz_id?: true;
    lesson_id?: true;
    question?: true;
    question_type?: true;
    explanation?: true;
    options?: true;
    correct_answer?: true;
    order_index?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type QuizzesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quizzesWhereInput;
    orderBy?: Prisma.quizzesOrderByWithRelationInput | Prisma.quizzesOrderByWithRelationInput[];
    cursor?: Prisma.quizzesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | QuizzesCountAggregateInputType;
    _avg?: QuizzesAvgAggregateInputType;
    _sum?: QuizzesSumAggregateInputType;
    _min?: QuizzesMinAggregateInputType;
    _max?: QuizzesMaxAggregateInputType;
};
export type GetQuizzesAggregateType<T extends QuizzesAggregateArgs> = {
    [P in keyof T & keyof AggregateQuizzes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuizzes[P]> : Prisma.GetScalarType<T[P], AggregateQuizzes[P]>;
};
export type quizzesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quizzesWhereInput;
    orderBy?: Prisma.quizzesOrderByWithAggregationInput | Prisma.quizzesOrderByWithAggregationInput[];
    by: Prisma.QuizzesScalarFieldEnum[] | Prisma.QuizzesScalarFieldEnum;
    having?: Prisma.quizzesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuizzesCountAggregateInputType | true;
    _avg?: QuizzesAvgAggregateInputType;
    _sum?: QuizzesSumAggregateInputType;
    _min?: QuizzesMinAggregateInputType;
    _max?: QuizzesMaxAggregateInputType;
};
export type QuizzesGroupByOutputType = {
    quiz_id: number;
    lesson_id: number | null;
    question: string;
    question_type: string | null;
    explanation: string | null;
    options: runtime.JsonValue | null;
    correct_answer: runtime.JsonValue | null;
    order_index: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: QuizzesCountAggregateOutputType | null;
    _avg: QuizzesAvgAggregateOutputType | null;
    _sum: QuizzesSumAggregateOutputType | null;
    _min: QuizzesMinAggregateOutputType | null;
    _max: QuizzesMaxAggregateOutputType | null;
};
type GetQuizzesGroupByPayload<T extends quizzesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<QuizzesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof QuizzesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], QuizzesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], QuizzesGroupByOutputType[P]>;
}>>;
export type quizzesWhereInput = {
    AND?: Prisma.quizzesWhereInput | Prisma.quizzesWhereInput[];
    OR?: Prisma.quizzesWhereInput[];
    NOT?: Prisma.quizzesWhereInput | Prisma.quizzesWhereInput[];
    quiz_id?: Prisma.IntFilter<"quizzes"> | number;
    lesson_id?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    question?: Prisma.StringFilter<"quizzes"> | string;
    question_type?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    options?: Prisma.JsonNullableFilter<"quizzes">;
    correct_answer?: Prisma.JsonNullableFilter<"quizzes">;
    order_index?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    quiz_attempts?: Prisma.Quiz_attemptsListRelationFilter;
};
export type quizzesOrderByWithRelationInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    options?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
    quiz_attempts?: Prisma.quiz_attemptsOrderByRelationAggregateInput;
};
export type quizzesWhereUniqueInput = Prisma.AtLeast<{
    quiz_id?: number;
    AND?: Prisma.quizzesWhereInput | Prisma.quizzesWhereInput[];
    OR?: Prisma.quizzesWhereInput[];
    NOT?: Prisma.quizzesWhereInput | Prisma.quizzesWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    question?: Prisma.StringFilter<"quizzes"> | string;
    question_type?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    options?: Prisma.JsonNullableFilter<"quizzes">;
    correct_answer?: Prisma.JsonNullableFilter<"quizzes">;
    order_index?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
    quiz_attempts?: Prisma.Quiz_attemptsListRelationFilter;
}, "quiz_id">;
export type quizzesOrderByWithAggregationInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    options?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_answer?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quizzesCountOrderByAggregateInput;
    _avg?: Prisma.quizzesAvgOrderByAggregateInput;
    _max?: Prisma.quizzesMaxOrderByAggregateInput;
    _min?: Prisma.quizzesMinOrderByAggregateInput;
    _sum?: Prisma.quizzesSumOrderByAggregateInput;
};
export type quizzesScalarWhereWithAggregatesInput = {
    AND?: Prisma.quizzesScalarWhereWithAggregatesInput | Prisma.quizzesScalarWhereWithAggregatesInput[];
    OR?: Prisma.quizzesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quizzesScalarWhereWithAggregatesInput | Prisma.quizzesScalarWhereWithAggregatesInput[];
    quiz_id?: Prisma.IntWithAggregatesFilter<"quizzes"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"quizzes"> | number | null;
    question?: Prisma.StringWithAggregatesFilter<"quizzes"> | string;
    question_type?: Prisma.StringNullableWithAggregatesFilter<"quizzes"> | string | null;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"quizzes"> | string | null;
    options?: Prisma.JsonNullableWithAggregatesFilter<"quizzes">;
    correct_answer?: Prisma.JsonNullableWithAggregatesFilter<"quizzes">;
    order_index?: Prisma.IntNullableWithAggregatesFilter<"quizzes"> | number | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"quizzes"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quizzes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quizzes"> | Date | string | null;
};
export type quizzesCreateInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuizzesInput;
    quiz_attempts?: Prisma.quiz_attemptsCreateNestedManyWithoutQuizzesInput;
};
export type quizzesUncheckedCreateInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsUncheckedCreateNestedManyWithoutQuizzesInput;
};
export type quizzesUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutQuizzesNestedInput;
    quiz_attempts?: Prisma.quiz_attemptsUpdateManyWithoutQuizzesNestedInput;
};
export type quizzesUncheckedUpdateInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsUncheckedUpdateManyWithoutQuizzesNestedInput;
};
export type quizzesCreateManyInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quizzesUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quizzesUncheckedUpdateManyInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizzesListRelationFilter = {
    every?: Prisma.quizzesWhereInput;
    some?: Prisma.quizzesWhereInput;
    none?: Prisma.quizzesWhereInput;
};
export type quizzesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quizzesCountOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quizzesAvgOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type quizzesMaxOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quizzesMinOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    question_type?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quizzesSumOrderByAggregateInput = {
    quiz_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type QuizzesNullableScalarRelationFilter = {
    is?: Prisma.quizzesWhereInput | null;
    isNot?: Prisma.quizzesWhereInput | null;
};
export type quizzesCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput> | Prisma.quizzesCreateWithoutLessonsInput[] | Prisma.quizzesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutLessonsInput | Prisma.quizzesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.quizzesCreateManyLessonsInputEnvelope;
    connect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
};
export type quizzesUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput> | Prisma.quizzesCreateWithoutLessonsInput[] | Prisma.quizzesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutLessonsInput | Prisma.quizzesCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.quizzesCreateManyLessonsInputEnvelope;
    connect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
};
export type quizzesUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput> | Prisma.quizzesCreateWithoutLessonsInput[] | Prisma.quizzesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutLessonsInput | Prisma.quizzesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.quizzesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.quizzesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.quizzesCreateManyLessonsInputEnvelope;
    set?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    disconnect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    delete?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    connect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    update?: Prisma.quizzesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.quizzesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.quizzesUpdateManyWithWhereWithoutLessonsInput | Prisma.quizzesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.quizzesScalarWhereInput | Prisma.quizzesScalarWhereInput[];
};
export type quizzesUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput> | Prisma.quizzesCreateWithoutLessonsInput[] | Prisma.quizzesUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutLessonsInput | Prisma.quizzesCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.quizzesUpsertWithWhereUniqueWithoutLessonsInput | Prisma.quizzesUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.quizzesCreateManyLessonsInputEnvelope;
    set?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    disconnect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    delete?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    connect?: Prisma.quizzesWhereUniqueInput | Prisma.quizzesWhereUniqueInput[];
    update?: Prisma.quizzesUpdateWithWhereUniqueWithoutLessonsInput | Prisma.quizzesUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.quizzesUpdateManyWithWhereWithoutLessonsInput | Prisma.quizzesUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.quizzesScalarWhereInput | Prisma.quizzesScalarWhereInput[];
};
export type quizzesCreateNestedOneWithoutQuiz_attemptsInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedCreateWithoutQuiz_attemptsInput>;
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutQuiz_attemptsInput;
    connect?: Prisma.quizzesWhereUniqueInput;
};
export type quizzesUpdateOneWithoutQuiz_attemptsNestedInput = {
    create?: Prisma.XOR<Prisma.quizzesCreateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedCreateWithoutQuiz_attemptsInput>;
    connectOrCreate?: Prisma.quizzesCreateOrConnectWithoutQuiz_attemptsInput;
    upsert?: Prisma.quizzesUpsertWithoutQuiz_attemptsInput;
    disconnect?: Prisma.quizzesWhereInput | boolean;
    delete?: Prisma.quizzesWhereInput | boolean;
    connect?: Prisma.quizzesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.quizzesUpdateToOneWithWhereWithoutQuiz_attemptsInput, Prisma.quizzesUpdateWithoutQuiz_attemptsInput>, Prisma.quizzesUncheckedUpdateWithoutQuiz_attemptsInput>;
};
export type quizzesCreateWithoutLessonsInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsCreateNestedManyWithoutQuizzesInput;
};
export type quizzesUncheckedCreateWithoutLessonsInput = {
    quiz_id?: number;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsUncheckedCreateNestedManyWithoutQuizzesInput;
};
export type quizzesCreateOrConnectWithoutLessonsInput = {
    where: Prisma.quizzesWhereUniqueInput;
    create: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput>;
};
export type quizzesCreateManyLessonsInputEnvelope = {
    data: Prisma.quizzesCreateManyLessonsInput | Prisma.quizzesCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type quizzesUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.quizzesWhereUniqueInput;
    update: Prisma.XOR<Prisma.quizzesUpdateWithoutLessonsInput, Prisma.quizzesUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.quizzesCreateWithoutLessonsInput, Prisma.quizzesUncheckedCreateWithoutLessonsInput>;
};
export type quizzesUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.quizzesWhereUniqueInput;
    data: Prisma.XOR<Prisma.quizzesUpdateWithoutLessonsInput, Prisma.quizzesUncheckedUpdateWithoutLessonsInput>;
};
export type quizzesUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.quizzesScalarWhereInput;
    data: Prisma.XOR<Prisma.quizzesUpdateManyMutationInput, Prisma.quizzesUncheckedUpdateManyWithoutLessonsInput>;
};
export type quizzesScalarWhereInput = {
    AND?: Prisma.quizzesScalarWhereInput | Prisma.quizzesScalarWhereInput[];
    OR?: Prisma.quizzesScalarWhereInput[];
    NOT?: Prisma.quizzesScalarWhereInput | Prisma.quizzesScalarWhereInput[];
    quiz_id?: Prisma.IntFilter<"quizzes"> | number;
    lesson_id?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    question?: Prisma.StringFilter<"quizzes"> | string;
    question_type?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    explanation?: Prisma.StringNullableFilter<"quizzes"> | string | null;
    options?: Prisma.JsonNullableFilter<"quizzes">;
    correct_answer?: Prisma.JsonNullableFilter<"quizzes">;
    order_index?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_by?: Prisma.IntNullableFilter<"quizzes"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"quizzes"> | Date | string | null;
};
export type quizzesCreateWithoutQuiz_attemptsInput = {
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutQuizzesInput;
};
export type quizzesUncheckedCreateWithoutQuiz_attemptsInput = {
    quiz_id?: number;
    lesson_id?: number | null;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quizzesCreateOrConnectWithoutQuiz_attemptsInput = {
    where: Prisma.quizzesWhereUniqueInput;
    create: Prisma.XOR<Prisma.quizzesCreateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedCreateWithoutQuiz_attemptsInput>;
};
export type quizzesUpsertWithoutQuiz_attemptsInput = {
    update: Prisma.XOR<Prisma.quizzesUpdateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedUpdateWithoutQuiz_attemptsInput>;
    create: Prisma.XOR<Prisma.quizzesCreateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedCreateWithoutQuiz_attemptsInput>;
    where?: Prisma.quizzesWhereInput;
};
export type quizzesUpdateToOneWithWhereWithoutQuiz_attemptsInput = {
    where?: Prisma.quizzesWhereInput;
    data: Prisma.XOR<Prisma.quizzesUpdateWithoutQuiz_attemptsInput, Prisma.quizzesUncheckedUpdateWithoutQuiz_attemptsInput>;
};
export type quizzesUpdateWithoutQuiz_attemptsInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutQuizzesNestedInput;
};
export type quizzesUncheckedUpdateWithoutQuiz_attemptsInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type quizzesCreateManyLessonsInput = {
    quiz_id?: number;
    question: string;
    question_type?: string | null;
    explanation?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type quizzesUpdateWithoutLessonsInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsUpdateManyWithoutQuizzesNestedInput;
};
export type quizzesUncheckedUpdateWithoutLessonsInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    quiz_attempts?: Prisma.quiz_attemptsUncheckedUpdateManyWithoutQuizzesNestedInput;
};
export type quizzesUncheckedUpdateManyWithoutLessonsInput = {
    quiz_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    question_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type QuizzesCountOutputType = {
    quiz_attempts: number;
};
export type QuizzesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_attempts?: boolean | QuizzesCountOutputTypeCountQuiz_attemptsArgs;
};
export type QuizzesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.QuizzesCountOutputTypeSelect<ExtArgs> | null;
};
export type QuizzesCountOutputTypeCountQuiz_attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attemptsWhereInput;
};
export type quizzesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
    quiz_attempts?: boolean | Prisma.quizzes$quiz_attemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizzesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quizzes"]>;
export type quizzesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["quizzes"]>;
export type quizzesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["quizzes"]>;
export type quizzesSelectScalar = {
    quiz_id?: boolean;
    lesson_id?: boolean;
    question?: boolean;
    question_type?: boolean;
    explanation?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type quizzesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"quiz_id" | "lesson_id" | "question" | "question_type" | "explanation" | "options" | "correct_answer" | "order_index" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["quizzes"]>;
export type quizzesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
    quiz_attempts?: boolean | Prisma.quizzes$quiz_attemptsArgs<ExtArgs>;
    _count?: boolean | Prisma.QuizzesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type quizzesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
};
export type quizzesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessons?: boolean | Prisma.quizzes$lessonsArgs<ExtArgs>;
};
export type $quizzesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quizzes";
    objects: {
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
        quiz_attempts: Prisma.$quiz_attemptsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        quiz_id: number;
        lesson_id: number | null;
        question: string;
        question_type: string | null;
        explanation: string | null;
        options: runtime.JsonValue | null;
        correct_answer: runtime.JsonValue | null;
        order_index: number | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["quizzes"]>;
    composites: {};
};
export type quizzesGetPayload<S extends boolean | null | undefined | quizzesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quizzesPayload, S>;
export type quizzesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quizzesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: QuizzesCountAggregateInputType | true;
};
export interface quizzesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quizzes'];
        meta: {
            name: 'quizzes';
        };
    };
    findUnique<T extends quizzesFindUniqueArgs>(args: Prisma.SelectSubset<T, quizzesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quizzesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quizzesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quizzesFindFirstArgs>(args?: Prisma.SelectSubset<T, quizzesFindFirstArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quizzesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quizzesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quizzesFindManyArgs>(args?: Prisma.SelectSubset<T, quizzesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quizzesCreateArgs>(args: Prisma.SelectSubset<T, quizzesCreateArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quizzesCreateManyArgs>(args?: Prisma.SelectSubset<T, quizzesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quizzesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quizzesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quizzesDeleteArgs>(args: Prisma.SelectSubset<T, quizzesDeleteArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quizzesUpdateArgs>(args: Prisma.SelectSubset<T, quizzesUpdateArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quizzesDeleteManyArgs>(args?: Prisma.SelectSubset<T, quizzesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quizzesUpdateManyArgs>(args: Prisma.SelectSubset<T, quizzesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quizzesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quizzesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quizzesUpsertArgs>(args: Prisma.SelectSubset<T, quizzesUpsertArgs<ExtArgs>>): Prisma.Prisma__quizzesClient<runtime.Types.Result.GetResult<Prisma.$quizzesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quizzesCountArgs>(args?: Prisma.Subset<T, quizzesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], QuizzesCountAggregateOutputType> : number>;
    aggregate<T extends QuizzesAggregateArgs>(args: Prisma.Subset<T, QuizzesAggregateArgs>): Prisma.PrismaPromise<GetQuizzesAggregateType<T>>;
    groupBy<T extends quizzesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quizzesGroupByArgs['orderBy'];
    } : {
        orderBy?: quizzesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quizzesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizzesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quizzesFieldRefs;
}
export interface Prisma__quizzesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lessons<T extends Prisma.quizzes$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quizzes$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quiz_attempts<T extends Prisma.quizzes$quiz_attemptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quizzes$quiz_attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attemptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quizzesFieldRefs {
    readonly quiz_id: Prisma.FieldRef<"quizzes", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"quizzes", 'Int'>;
    readonly question: Prisma.FieldRef<"quizzes", 'String'>;
    readonly question_type: Prisma.FieldRef<"quizzes", 'String'>;
    readonly explanation: Prisma.FieldRef<"quizzes", 'String'>;
    readonly options: Prisma.FieldRef<"quizzes", 'Json'>;
    readonly correct_answer: Prisma.FieldRef<"quizzes", 'Json'>;
    readonly order_index: Prisma.FieldRef<"quizzes", 'Int'>;
    readonly created_by: Prisma.FieldRef<"quizzes", 'Int'>;
    readonly created_at: Prisma.FieldRef<"quizzes", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"quizzes", 'DateTime'>;
}
export type quizzesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where: Prisma.quizzesWhereUniqueInput;
};
export type quizzesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where: Prisma.quizzesWhereUniqueInput;
};
export type quizzesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where?: Prisma.quizzesWhereInput;
    orderBy?: Prisma.quizzesOrderByWithRelationInput | Prisma.quizzesOrderByWithRelationInput[];
    cursor?: Prisma.quizzesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizzesScalarFieldEnum | Prisma.QuizzesScalarFieldEnum[];
};
export type quizzesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where?: Prisma.quizzesWhereInput;
    orderBy?: Prisma.quizzesOrderByWithRelationInput | Prisma.quizzesOrderByWithRelationInput[];
    cursor?: Prisma.quizzesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizzesScalarFieldEnum | Prisma.QuizzesScalarFieldEnum[];
};
export type quizzesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where?: Prisma.quizzesWhereInput;
    orderBy?: Prisma.quizzesOrderByWithRelationInput | Prisma.quizzesOrderByWithRelationInput[];
    cursor?: Prisma.quizzesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.QuizzesScalarFieldEnum | Prisma.QuizzesScalarFieldEnum[];
};
export type quizzesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quizzesCreateInput, Prisma.quizzesUncheckedCreateInput>;
};
export type quizzesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quizzesCreateManyInput | Prisma.quizzesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quizzesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    data: Prisma.quizzesCreateManyInput | Prisma.quizzesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quizzesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quizzesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quizzesUpdateInput, Prisma.quizzesUncheckedUpdateInput>;
    where: Prisma.quizzesWhereUniqueInput;
};
export type quizzesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quizzesUpdateManyMutationInput, Prisma.quizzesUncheckedUpdateManyInput>;
    where?: Prisma.quizzesWhereInput;
    limit?: number;
};
export type quizzesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quizzesUpdateManyMutationInput, Prisma.quizzesUncheckedUpdateManyInput>;
    where?: Prisma.quizzesWhereInput;
    limit?: number;
    include?: Prisma.quizzesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quizzesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where: Prisma.quizzesWhereUniqueInput;
    create: Prisma.XOR<Prisma.quizzesCreateInput, Prisma.quizzesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quizzesUpdateInput, Prisma.quizzesUncheckedUpdateInput>;
};
export type quizzesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
    where: Prisma.quizzesWhereUniqueInput;
};
export type quizzesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quizzesWhereInput;
    limit?: number;
};
export type quizzes$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type quizzes$quiz_attemptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attemptsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attemptsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attemptsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attemptsWhereInput;
    orderBy?: Prisma.quiz_attemptsOrderByWithRelationInput | Prisma.quiz_attemptsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attemptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attemptsScalarFieldEnum | Prisma.Quiz_attemptsScalarFieldEnum[];
};
export type quizzesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quizzesSelect<ExtArgs> | null;
    omit?: Prisma.quizzesOmit<ExtArgs> | null;
    include?: Prisma.quizzesInclude<ExtArgs> | null;
};
export {};
