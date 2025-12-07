import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type listening_questionsModel = runtime.Types.Result.DefaultSelection<Prisma.$listening_questionsPayload>;
export type AggregateListening_questions = {
    _count: Listening_questionsCountAggregateOutputType | null;
    _avg: Listening_questionsAvgAggregateOutputType | null;
    _sum: Listening_questionsSumAggregateOutputType | null;
    _min: Listening_questionsMinAggregateOutputType | null;
    _max: Listening_questionsMaxAggregateOutputType | null;
};
export type Listening_questionsAvgAggregateOutputType = {
    question_id: number | null;
    exercise_id: number | null;
    order_index: number | null;
};
export type Listening_questionsSumAggregateOutputType = {
    question_id: number | null;
    exercise_id: number | null;
    order_index: number | null;
};
export type Listening_questionsMinAggregateOutputType = {
    question_id: number | null;
    exercise_id: number | null;
    question: string | null;
    correct_answer: string | null;
    order_index: number | null;
    created_at: Date | null;
};
export type Listening_questionsMaxAggregateOutputType = {
    question_id: number | null;
    exercise_id: number | null;
    question: string | null;
    correct_answer: string | null;
    order_index: number | null;
    created_at: Date | null;
};
export type Listening_questionsCountAggregateOutputType = {
    question_id: number;
    exercise_id: number;
    question: number;
    options: number;
    correct_answer: number;
    order_index: number;
    created_at: number;
    _all: number;
};
export type Listening_questionsAvgAggregateInputType = {
    question_id?: true;
    exercise_id?: true;
    order_index?: true;
};
export type Listening_questionsSumAggregateInputType = {
    question_id?: true;
    exercise_id?: true;
    order_index?: true;
};
export type Listening_questionsMinAggregateInputType = {
    question_id?: true;
    exercise_id?: true;
    question?: true;
    correct_answer?: true;
    order_index?: true;
    created_at?: true;
};
export type Listening_questionsMaxAggregateInputType = {
    question_id?: true;
    exercise_id?: true;
    question?: true;
    correct_answer?: true;
    order_index?: true;
    created_at?: true;
};
export type Listening_questionsCountAggregateInputType = {
    question_id?: true;
    exercise_id?: true;
    question?: true;
    options?: true;
    correct_answer?: true;
    order_index?: true;
    created_at?: true;
    _all?: true;
};
export type Listening_questionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithRelationInput | Prisma.listening_questionsOrderByWithRelationInput[];
    cursor?: Prisma.listening_questionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Listening_questionsCountAggregateInputType;
    _avg?: Listening_questionsAvgAggregateInputType;
    _sum?: Listening_questionsSumAggregateInputType;
    _min?: Listening_questionsMinAggregateInputType;
    _max?: Listening_questionsMaxAggregateInputType;
};
export type GetListening_questionsAggregateType<T extends Listening_questionsAggregateArgs> = {
    [P in keyof T & keyof AggregateListening_questions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListening_questions[P]> : Prisma.GetScalarType<T[P], AggregateListening_questions[P]>;
};
export type listening_questionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithAggregationInput | Prisma.listening_questionsOrderByWithAggregationInput[];
    by: Prisma.Listening_questionsScalarFieldEnum[] | Prisma.Listening_questionsScalarFieldEnum;
    having?: Prisma.listening_questionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Listening_questionsCountAggregateInputType | true;
    _avg?: Listening_questionsAvgAggregateInputType;
    _sum?: Listening_questionsSumAggregateInputType;
    _min?: Listening_questionsMinAggregateInputType;
    _max?: Listening_questionsMaxAggregateInputType;
};
export type Listening_questionsGroupByOutputType = {
    question_id: number;
    exercise_id: number | null;
    question: string;
    options: runtime.JsonValue;
    correct_answer: string;
    order_index: number | null;
    created_at: Date | null;
    _count: Listening_questionsCountAggregateOutputType | null;
    _avg: Listening_questionsAvgAggregateOutputType | null;
    _sum: Listening_questionsSumAggregateOutputType | null;
    _min: Listening_questionsMinAggregateOutputType | null;
    _max: Listening_questionsMaxAggregateOutputType | null;
};
type GetListening_questionsGroupByPayload<T extends listening_questionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Listening_questionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Listening_questionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Listening_questionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Listening_questionsGroupByOutputType[P]>;
}>>;
export type listening_questionsWhereInput = {
    AND?: Prisma.listening_questionsWhereInput | Prisma.listening_questionsWhereInput[];
    OR?: Prisma.listening_questionsWhereInput[];
    NOT?: Prisma.listening_questionsWhereInput | Prisma.listening_questionsWhereInput[];
    question_id?: Prisma.IntFilter<"listening_questions"> | number;
    exercise_id?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    question?: Prisma.StringFilter<"listening_questions"> | string;
    options?: Prisma.JsonFilter<"listening_questions">;
    correct_answer?: Prisma.StringFilter<"listening_questions"> | string;
    order_index?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_questions"> | Date | string | null;
    listening_exercises?: Prisma.XOR<Prisma.Listening_exercisesNullableScalarRelationFilter, Prisma.listening_exercisesWhereInput> | null;
};
export type listening_questionsOrderByWithRelationInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    listening_exercises?: Prisma.listening_exercisesOrderByWithRelationInput;
};
export type listening_questionsWhereUniqueInput = Prisma.AtLeast<{
    question_id?: number;
    AND?: Prisma.listening_questionsWhereInput | Prisma.listening_questionsWhereInput[];
    OR?: Prisma.listening_questionsWhereInput[];
    NOT?: Prisma.listening_questionsWhereInput | Prisma.listening_questionsWhereInput[];
    exercise_id?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    question?: Prisma.StringFilter<"listening_questions"> | string;
    options?: Prisma.JsonFilter<"listening_questions">;
    correct_answer?: Prisma.StringFilter<"listening_questions"> | string;
    order_index?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_questions"> | Date | string | null;
    listening_exercises?: Prisma.XOR<Prisma.Listening_exercisesNullableScalarRelationFilter, Prisma.listening_exercisesWhereInput> | null;
}, "question_id">;
export type listening_questionsOrderByWithAggregationInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.listening_questionsCountOrderByAggregateInput;
    _avg?: Prisma.listening_questionsAvgOrderByAggregateInput;
    _max?: Prisma.listening_questionsMaxOrderByAggregateInput;
    _min?: Prisma.listening_questionsMinOrderByAggregateInput;
    _sum?: Prisma.listening_questionsSumOrderByAggregateInput;
};
export type listening_questionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.listening_questionsScalarWhereWithAggregatesInput | Prisma.listening_questionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.listening_questionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listening_questionsScalarWhereWithAggregatesInput | Prisma.listening_questionsScalarWhereWithAggregatesInput[];
    question_id?: Prisma.IntWithAggregatesFilter<"listening_questions"> | number;
    exercise_id?: Prisma.IntNullableWithAggregatesFilter<"listening_questions"> | number | null;
    question?: Prisma.StringWithAggregatesFilter<"listening_questions"> | string;
    options?: Prisma.JsonWithAggregatesFilter<"listening_questions">;
    correct_answer?: Prisma.StringWithAggregatesFilter<"listening_questions"> | string;
    order_index?: Prisma.IntNullableWithAggregatesFilter<"listening_questions"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"listening_questions"> | Date | string | null;
};
export type listening_questionsCreateInput = {
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
    listening_exercises?: Prisma.listening_exercisesCreateNestedOneWithoutListening_questionsInput;
};
export type listening_questionsUncheckedCreateInput = {
    question_id?: number;
    exercise_id?: number | null;
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
};
export type listening_questionsUpdateInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    listening_exercises?: Prisma.listening_exercisesUpdateOneWithoutListening_questionsNestedInput;
};
export type listening_questionsUncheckedUpdateInput = {
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_questionsCreateManyInput = {
    question_id?: number;
    exercise_id?: number | null;
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
};
export type listening_questionsUpdateManyMutationInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_questionsUncheckedUpdateManyInput = {
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    exercise_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Listening_questionsListRelationFilter = {
    every?: Prisma.listening_questionsWhereInput;
    some?: Prisma.listening_questionsWhereInput;
    none?: Prisma.listening_questionsWhereInput;
};
export type listening_questionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type listening_questionsCountOrderByAggregateInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_questionsAvgOrderByAggregateInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
};
export type listening_questionsMaxOrderByAggregateInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_questionsMinOrderByAggregateInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    question?: Prisma.SortOrder;
    correct_answer?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type listening_questionsSumOrderByAggregateInput = {
    question_id?: Prisma.SortOrder;
    exercise_id?: Prisma.SortOrder;
    order_index?: Prisma.SortOrder;
};
export type listening_questionsCreateNestedManyWithoutListening_exercisesInput = {
    create?: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput> | Prisma.listening_questionsCreateWithoutListening_exercisesInput[] | Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput[];
    connectOrCreate?: Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput | Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput[];
    createMany?: Prisma.listening_questionsCreateManyListening_exercisesInputEnvelope;
    connect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
};
export type listening_questionsUncheckedCreateNestedManyWithoutListening_exercisesInput = {
    create?: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput> | Prisma.listening_questionsCreateWithoutListening_exercisesInput[] | Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput[];
    connectOrCreate?: Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput | Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput[];
    createMany?: Prisma.listening_questionsCreateManyListening_exercisesInputEnvelope;
    connect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
};
export type listening_questionsUpdateManyWithoutListening_exercisesNestedInput = {
    create?: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput> | Prisma.listening_questionsCreateWithoutListening_exercisesInput[] | Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput[];
    connectOrCreate?: Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput | Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput[];
    upsert?: Prisma.listening_questionsUpsertWithWhereUniqueWithoutListening_exercisesInput | Prisma.listening_questionsUpsertWithWhereUniqueWithoutListening_exercisesInput[];
    createMany?: Prisma.listening_questionsCreateManyListening_exercisesInputEnvelope;
    set?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    disconnect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    delete?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    connect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    update?: Prisma.listening_questionsUpdateWithWhereUniqueWithoutListening_exercisesInput | Prisma.listening_questionsUpdateWithWhereUniqueWithoutListening_exercisesInput[];
    updateMany?: Prisma.listening_questionsUpdateManyWithWhereWithoutListening_exercisesInput | Prisma.listening_questionsUpdateManyWithWhereWithoutListening_exercisesInput[];
    deleteMany?: Prisma.listening_questionsScalarWhereInput | Prisma.listening_questionsScalarWhereInput[];
};
export type listening_questionsUncheckedUpdateManyWithoutListening_exercisesNestedInput = {
    create?: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput> | Prisma.listening_questionsCreateWithoutListening_exercisesInput[] | Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput[];
    connectOrCreate?: Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput | Prisma.listening_questionsCreateOrConnectWithoutListening_exercisesInput[];
    upsert?: Prisma.listening_questionsUpsertWithWhereUniqueWithoutListening_exercisesInput | Prisma.listening_questionsUpsertWithWhereUniqueWithoutListening_exercisesInput[];
    createMany?: Prisma.listening_questionsCreateManyListening_exercisesInputEnvelope;
    set?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    disconnect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    delete?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    connect?: Prisma.listening_questionsWhereUniqueInput | Prisma.listening_questionsWhereUniqueInput[];
    update?: Prisma.listening_questionsUpdateWithWhereUniqueWithoutListening_exercisesInput | Prisma.listening_questionsUpdateWithWhereUniqueWithoutListening_exercisesInput[];
    updateMany?: Prisma.listening_questionsUpdateManyWithWhereWithoutListening_exercisesInput | Prisma.listening_questionsUpdateManyWithWhereWithoutListening_exercisesInput[];
    deleteMany?: Prisma.listening_questionsScalarWhereInput | Prisma.listening_questionsScalarWhereInput[];
};
export type listening_questionsCreateWithoutListening_exercisesInput = {
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
};
export type listening_questionsUncheckedCreateWithoutListening_exercisesInput = {
    question_id?: number;
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
};
export type listening_questionsCreateOrConnectWithoutListening_exercisesInput = {
    where: Prisma.listening_questionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput>;
};
export type listening_questionsCreateManyListening_exercisesInputEnvelope = {
    data: Prisma.listening_questionsCreateManyListening_exercisesInput | Prisma.listening_questionsCreateManyListening_exercisesInput[];
    skipDuplicates?: boolean;
};
export type listening_questionsUpsertWithWhereUniqueWithoutListening_exercisesInput = {
    where: Prisma.listening_questionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.listening_questionsUpdateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedUpdateWithoutListening_exercisesInput>;
    create: Prisma.XOR<Prisma.listening_questionsCreateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedCreateWithoutListening_exercisesInput>;
};
export type listening_questionsUpdateWithWhereUniqueWithoutListening_exercisesInput = {
    where: Prisma.listening_questionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.listening_questionsUpdateWithoutListening_exercisesInput, Prisma.listening_questionsUncheckedUpdateWithoutListening_exercisesInput>;
};
export type listening_questionsUpdateManyWithWhereWithoutListening_exercisesInput = {
    where: Prisma.listening_questionsScalarWhereInput;
    data: Prisma.XOR<Prisma.listening_questionsUpdateManyMutationInput, Prisma.listening_questionsUncheckedUpdateManyWithoutListening_exercisesInput>;
};
export type listening_questionsScalarWhereInput = {
    AND?: Prisma.listening_questionsScalarWhereInput | Prisma.listening_questionsScalarWhereInput[];
    OR?: Prisma.listening_questionsScalarWhereInput[];
    NOT?: Prisma.listening_questionsScalarWhereInput | Prisma.listening_questionsScalarWhereInput[];
    question_id?: Prisma.IntFilter<"listening_questions"> | number;
    exercise_id?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    question?: Prisma.StringFilter<"listening_questions"> | string;
    options?: Prisma.JsonFilter<"listening_questions">;
    correct_answer?: Prisma.StringFilter<"listening_questions"> | string;
    order_index?: Prisma.IntNullableFilter<"listening_questions"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"listening_questions"> | Date | string | null;
};
export type listening_questionsCreateManyListening_exercisesInput = {
    question_id?: number;
    question: string;
    options: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer: string;
    order_index?: number | null;
    created_at?: Date | string | null;
};
export type listening_questionsUpdateWithoutListening_exercisesInput = {
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_questionsUncheckedUpdateWithoutListening_exercisesInput = {
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_questionsUncheckedUpdateManyWithoutListening_exercisesInput = {
    question_id?: Prisma.IntFieldUpdateOperationsInput | number;
    question?: Prisma.StringFieldUpdateOperationsInput | string;
    options?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    correct_answer?: Prisma.StringFieldUpdateOperationsInput | string;
    order_index?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type listening_questionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    question_id?: boolean;
    exercise_id?: boolean;
    question?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_at?: boolean;
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
}, ExtArgs["result"]["listening_questions"]>;
export type listening_questionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    question_id?: boolean;
    exercise_id?: boolean;
    question?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_at?: boolean;
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
}, ExtArgs["result"]["listening_questions"]>;
export type listening_questionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    question_id?: boolean;
    exercise_id?: boolean;
    question?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_at?: boolean;
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
}, ExtArgs["result"]["listening_questions"]>;
export type listening_questionsSelectScalar = {
    question_id?: boolean;
    exercise_id?: boolean;
    question?: boolean;
    options?: boolean;
    correct_answer?: boolean;
    order_index?: boolean;
    created_at?: boolean;
};
export type listening_questionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"question_id" | "exercise_id" | "question" | "options" | "correct_answer" | "order_index" | "created_at", ExtArgs["result"]["listening_questions"]>;
export type listening_questionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
};
export type listening_questionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
};
export type listening_questionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listening_exercises?: boolean | Prisma.listening_questions$listening_exercisesArgs<ExtArgs>;
};
export type $listening_questionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listening_questions";
    objects: {
        listening_exercises: Prisma.$listening_exercisesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        question_id: number;
        exercise_id: number | null;
        question: string;
        options: runtime.JsonValue;
        correct_answer: string;
        order_index: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["listening_questions"]>;
    composites: {};
};
export type listening_questionsGetPayload<S extends boolean | null | undefined | listening_questionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload, S>;
export type listening_questionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listening_questionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Listening_questionsCountAggregateInputType | true;
};
export interface listening_questionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listening_questions'];
        meta: {
            name: 'listening_questions';
        };
    };
    findUnique<T extends listening_questionsFindUniqueArgs>(args: Prisma.SelectSubset<T, listening_questionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends listening_questionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listening_questionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends listening_questionsFindFirstArgs>(args?: Prisma.SelectSubset<T, listening_questionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends listening_questionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listening_questionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends listening_questionsFindManyArgs>(args?: Prisma.SelectSubset<T, listening_questionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends listening_questionsCreateArgs>(args: Prisma.SelectSubset<T, listening_questionsCreateArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends listening_questionsCreateManyArgs>(args?: Prisma.SelectSubset<T, listening_questionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends listening_questionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listening_questionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends listening_questionsDeleteArgs>(args: Prisma.SelectSubset<T, listening_questionsDeleteArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends listening_questionsUpdateArgs>(args: Prisma.SelectSubset<T, listening_questionsUpdateArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends listening_questionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, listening_questionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends listening_questionsUpdateManyArgs>(args: Prisma.SelectSubset<T, listening_questionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends listening_questionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listening_questionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends listening_questionsUpsertArgs>(args: Prisma.SelectSubset<T, listening_questionsUpsertArgs<ExtArgs>>): Prisma.Prisma__listening_questionsClient<runtime.Types.Result.GetResult<Prisma.$listening_questionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends listening_questionsCountArgs>(args?: Prisma.Subset<T, listening_questionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Listening_questionsCountAggregateOutputType> : number>;
    aggregate<T extends Listening_questionsAggregateArgs>(args: Prisma.Subset<T, Listening_questionsAggregateArgs>): Prisma.PrismaPromise<GetListening_questionsAggregateType<T>>;
    groupBy<T extends listening_questionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listening_questionsGroupByArgs['orderBy'];
    } : {
        orderBy?: listening_questionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listening_questionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListening_questionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: listening_questionsFieldRefs;
}
export interface Prisma__listening_questionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listening_exercises<T extends Prisma.listening_questions$listening_exercisesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listening_questions$listening_exercisesArgs<ExtArgs>>): Prisma.Prisma__listening_exercisesClient<runtime.Types.Result.GetResult<Prisma.$listening_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface listening_questionsFieldRefs {
    readonly question_id: Prisma.FieldRef<"listening_questions", 'Int'>;
    readonly exercise_id: Prisma.FieldRef<"listening_questions", 'Int'>;
    readonly question: Prisma.FieldRef<"listening_questions", 'String'>;
    readonly options: Prisma.FieldRef<"listening_questions", 'Json'>;
    readonly correct_answer: Prisma.FieldRef<"listening_questions", 'String'>;
    readonly order_index: Prisma.FieldRef<"listening_questions", 'Int'>;
    readonly created_at: Prisma.FieldRef<"listening_questions", 'DateTime'>;
}
export type listening_questionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where: Prisma.listening_questionsWhereUniqueInput;
};
export type listening_questionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where: Prisma.listening_questionsWhereUniqueInput;
};
export type listening_questionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithRelationInput | Prisma.listening_questionsOrderByWithRelationInput[];
    cursor?: Prisma.listening_questionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_questionsScalarFieldEnum | Prisma.Listening_questionsScalarFieldEnum[];
};
export type listening_questionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithRelationInput | Prisma.listening_questionsOrderByWithRelationInput[];
    cursor?: Prisma.listening_questionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_questionsScalarFieldEnum | Prisma.Listening_questionsScalarFieldEnum[];
};
export type listening_questionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where?: Prisma.listening_questionsWhereInput;
    orderBy?: Prisma.listening_questionsOrderByWithRelationInput | Prisma.listening_questionsOrderByWithRelationInput[];
    cursor?: Prisma.listening_questionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_questionsScalarFieldEnum | Prisma.Listening_questionsScalarFieldEnum[];
};
export type listening_questionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_questionsCreateInput, Prisma.listening_questionsUncheckedCreateInput>;
};
export type listening_questionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.listening_questionsCreateManyInput | Prisma.listening_questionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type listening_questionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    data: Prisma.listening_questionsCreateManyInput | Prisma.listening_questionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.listening_questionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type listening_questionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_questionsUpdateInput, Prisma.listening_questionsUncheckedUpdateInput>;
    where: Prisma.listening_questionsWhereUniqueInput;
};
export type listening_questionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.listening_questionsUpdateManyMutationInput, Prisma.listening_questionsUncheckedUpdateManyInput>;
    where?: Prisma.listening_questionsWhereInput;
    limit?: number;
};
export type listening_questionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.listening_questionsUpdateManyMutationInput, Prisma.listening_questionsUncheckedUpdateManyInput>;
    where?: Prisma.listening_questionsWhereInput;
    limit?: number;
    include?: Prisma.listening_questionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type listening_questionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where: Prisma.listening_questionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listening_questionsCreateInput, Prisma.listening_questionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.listening_questionsUpdateInput, Prisma.listening_questionsUncheckedUpdateInput>;
};
export type listening_questionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
    where: Prisma.listening_questionsWhereUniqueInput;
};
export type listening_questionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_questionsWhereInput;
    limit?: number;
};
export type listening_questions$listening_exercisesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_exercisesSelect<ExtArgs> | null;
    omit?: Prisma.listening_exercisesOmit<ExtArgs> | null;
    include?: Prisma.listening_exercisesInclude<ExtArgs> | null;
    where?: Prisma.listening_exercisesWhereInput;
};
export type listening_questionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_questionsSelect<ExtArgs> | null;
    omit?: Prisma.listening_questionsOmit<ExtArgs> | null;
    include?: Prisma.listening_questionsInclude<ExtArgs> | null;
};
export {};
