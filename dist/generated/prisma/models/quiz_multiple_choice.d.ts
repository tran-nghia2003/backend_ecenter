import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_multiple_choiceModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_multiple_choicePayload>;
export type AggregateQuiz_multiple_choice = {
    _count: Quiz_multiple_choiceCountAggregateOutputType | null;
    _avg: Quiz_multiple_choiceAvgAggregateOutputType | null;
    _sum: Quiz_multiple_choiceSumAggregateOutputType | null;
    _min: Quiz_multiple_choiceMinAggregateOutputType | null;
    _max: Quiz_multiple_choiceMaxAggregateOutputType | null;
};
export type Quiz_multiple_choiceAvgAggregateOutputType = {
    mcq_id: number | null;
    quiz_id: number | null;
};
export type Quiz_multiple_choiceSumAggregateOutputType = {
    mcq_id: number | null;
    quiz_id: number | null;
};
export type Quiz_multiple_choiceMinAggregateOutputType = {
    mcq_id: number | null;
    quiz_id: number | null;
    option_text: string | null;
    is_correct: boolean | null;
};
export type Quiz_multiple_choiceMaxAggregateOutputType = {
    mcq_id: number | null;
    quiz_id: number | null;
    option_text: string | null;
    is_correct: boolean | null;
};
export type Quiz_multiple_choiceCountAggregateOutputType = {
    mcq_id: number;
    quiz_id: number;
    option_text: number;
    is_correct: number;
    _all: number;
};
export type Quiz_multiple_choiceAvgAggregateInputType = {
    mcq_id?: true;
    quiz_id?: true;
};
export type Quiz_multiple_choiceSumAggregateInputType = {
    mcq_id?: true;
    quiz_id?: true;
};
export type Quiz_multiple_choiceMinAggregateInputType = {
    mcq_id?: true;
    quiz_id?: true;
    option_text?: true;
    is_correct?: true;
};
export type Quiz_multiple_choiceMaxAggregateInputType = {
    mcq_id?: true;
    quiz_id?: true;
    option_text?: true;
    is_correct?: true;
};
export type Quiz_multiple_choiceCountAggregateInputType = {
    mcq_id?: true;
    quiz_id?: true;
    option_text?: true;
    is_correct?: true;
    _all?: true;
};
export type Quiz_multiple_choiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithRelationInput | Prisma.quiz_multiple_choiceOrderByWithRelationInput[];
    cursor?: Prisma.quiz_multiple_choiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_multiple_choiceCountAggregateInputType;
    _avg?: Quiz_multiple_choiceAvgAggregateInputType;
    _sum?: Quiz_multiple_choiceSumAggregateInputType;
    _min?: Quiz_multiple_choiceMinAggregateInputType;
    _max?: Quiz_multiple_choiceMaxAggregateInputType;
};
export type GetQuiz_multiple_choiceAggregateType<T extends Quiz_multiple_choiceAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_multiple_choice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_multiple_choice[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_multiple_choice[P]>;
};
export type quiz_multiple_choiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithAggregationInput | Prisma.quiz_multiple_choiceOrderByWithAggregationInput[];
    by: Prisma.Quiz_multiple_choiceScalarFieldEnum[] | Prisma.Quiz_multiple_choiceScalarFieldEnum;
    having?: Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_multiple_choiceCountAggregateInputType | true;
    _avg?: Quiz_multiple_choiceAvgAggregateInputType;
    _sum?: Quiz_multiple_choiceSumAggregateInputType;
    _min?: Quiz_multiple_choiceMinAggregateInputType;
    _max?: Quiz_multiple_choiceMaxAggregateInputType;
};
export type Quiz_multiple_choiceGroupByOutputType = {
    mcq_id: number;
    quiz_id: number | null;
    option_text: string | null;
    is_correct: boolean | null;
    _count: Quiz_multiple_choiceCountAggregateOutputType | null;
    _avg: Quiz_multiple_choiceAvgAggregateOutputType | null;
    _sum: Quiz_multiple_choiceSumAggregateOutputType | null;
    _min: Quiz_multiple_choiceMinAggregateOutputType | null;
    _max: Quiz_multiple_choiceMaxAggregateOutputType | null;
};
type GetQuiz_multiple_choiceGroupByPayload<T extends quiz_multiple_choiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_multiple_choiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_multiple_choiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_multiple_choiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_multiple_choiceGroupByOutputType[P]>;
}>>;
export type quiz_multiple_choiceWhereInput = {
    AND?: Prisma.quiz_multiple_choiceWhereInput | Prisma.quiz_multiple_choiceWhereInput[];
    OR?: Prisma.quiz_multiple_choiceWhereInput[];
    NOT?: Prisma.quiz_multiple_choiceWhereInput | Prisma.quiz_multiple_choiceWhereInput[];
    mcq_id?: Prisma.IntFilter<"quiz_multiple_choice"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_multiple_choice"> | number | null;
    option_text?: Prisma.StringNullableFilter<"quiz_multiple_choice"> | string | null;
    is_correct?: Prisma.BoolNullableFilter<"quiz_multiple_choice"> | boolean | null;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
};
export type quiz_multiple_choiceOrderByWithRelationInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    option_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    quiz_base?: Prisma.quiz_baseOrderByWithRelationInput;
};
export type quiz_multiple_choiceWhereUniqueInput = Prisma.AtLeast<{
    mcq_id?: number;
    AND?: Prisma.quiz_multiple_choiceWhereInput | Prisma.quiz_multiple_choiceWhereInput[];
    OR?: Prisma.quiz_multiple_choiceWhereInput[];
    NOT?: Prisma.quiz_multiple_choiceWhereInput | Prisma.quiz_multiple_choiceWhereInput[];
    quiz_id?: Prisma.IntNullableFilter<"quiz_multiple_choice"> | number | null;
    option_text?: Prisma.StringNullableFilter<"quiz_multiple_choice"> | string | null;
    is_correct?: Prisma.BoolNullableFilter<"quiz_multiple_choice"> | boolean | null;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
}, "mcq_id">;
export type quiz_multiple_choiceOrderByWithAggregationInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    option_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_correct?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quiz_multiple_choiceCountOrderByAggregateInput;
    _avg?: Prisma.quiz_multiple_choiceAvgOrderByAggregateInput;
    _max?: Prisma.quiz_multiple_choiceMaxOrderByAggregateInput;
    _min?: Prisma.quiz_multiple_choiceMinOrderByAggregateInput;
    _sum?: Prisma.quiz_multiple_choiceSumOrderByAggregateInput;
};
export type quiz_multiple_choiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput | Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput | Prisma.quiz_multiple_choiceScalarWhereWithAggregatesInput[];
    mcq_id?: Prisma.IntWithAggregatesFilter<"quiz_multiple_choice"> | number;
    quiz_id?: Prisma.IntNullableWithAggregatesFilter<"quiz_multiple_choice"> | number | null;
    option_text?: Prisma.StringNullableWithAggregatesFilter<"quiz_multiple_choice"> | string | null;
    is_correct?: Prisma.BoolNullableWithAggregatesFilter<"quiz_multiple_choice"> | boolean | null;
};
export type quiz_multiple_choiceCreateInput = {
    option_text?: string | null;
    is_correct?: boolean | null;
    quiz_base?: Prisma.quiz_baseCreateNestedOneWithoutQuiz_multiple_choiceInput;
};
export type quiz_multiple_choiceUncheckedCreateInput = {
    mcq_id?: number;
    quiz_id?: number | null;
    option_text?: string | null;
    is_correct?: boolean | null;
};
export type quiz_multiple_choiceUpdateInput = {
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    quiz_base?: Prisma.quiz_baseUpdateOneWithoutQuiz_multiple_choiceNestedInput;
};
export type quiz_multiple_choiceUncheckedUpdateInput = {
    mcq_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type quiz_multiple_choiceCreateManyInput = {
    mcq_id?: number;
    quiz_id?: number | null;
    option_text?: string | null;
    is_correct?: boolean | null;
};
export type quiz_multiple_choiceUpdateManyMutationInput = {
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type quiz_multiple_choiceUncheckedUpdateManyInput = {
    mcq_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type Quiz_multiple_choiceListRelationFilter = {
    every?: Prisma.quiz_multiple_choiceWhereInput;
    some?: Prisma.quiz_multiple_choiceWhereInput;
    none?: Prisma.quiz_multiple_choiceWhereInput;
};
export type quiz_multiple_choiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_multiple_choiceCountOrderByAggregateInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    option_text?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
};
export type quiz_multiple_choiceAvgOrderByAggregateInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
};
export type quiz_multiple_choiceMaxOrderByAggregateInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    option_text?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
};
export type quiz_multiple_choiceMinOrderByAggregateInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    option_text?: Prisma.SortOrder;
    is_correct?: Prisma.SortOrder;
};
export type quiz_multiple_choiceSumOrderByAggregateInput = {
    mcq_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
};
export type quiz_multiple_choiceCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput[] | Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_multiple_choiceCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
};
export type quiz_multiple_choiceUncheckedCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput[] | Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_multiple_choiceCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
};
export type quiz_multiple_choiceUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput[] | Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_multiple_choiceUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_multiple_choiceCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    disconnect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    delete?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    connect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    update?: Prisma.quiz_multiple_choiceUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_multiple_choiceUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_multiple_choiceScalarWhereInput | Prisma.quiz_multiple_choiceScalarWhereInput[];
};
export type quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput[] | Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_multiple_choiceUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_multiple_choiceCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    disconnect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    delete?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    connect?: Prisma.quiz_multiple_choiceWhereUniqueInput | Prisma.quiz_multiple_choiceWhereUniqueInput[];
    update?: Prisma.quiz_multiple_choiceUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_multiple_choiceUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_multiple_choiceUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_multiple_choiceScalarWhereInput | Prisma.quiz_multiple_choiceScalarWhereInput[];
};
export type quiz_multiple_choiceCreateWithoutQuiz_baseInput = {
    option_text?: string | null;
    is_correct?: boolean | null;
};
export type quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput = {
    mcq_id?: number;
    option_text?: string | null;
    is_correct?: boolean | null;
};
export type quiz_multiple_choiceCreateOrConnectWithoutQuiz_baseInput = {
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_multiple_choiceCreateManyQuiz_baseInputEnvelope = {
    data: Prisma.quiz_multiple_choiceCreateManyQuiz_baseInput | Prisma.quiz_multiple_choiceCreateManyQuiz_baseInput[];
    skipDuplicates?: boolean;
};
export type quiz_multiple_choiceUpsertWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedUpdateWithoutQuiz_baseInput>;
    create: Prisma.XOR<Prisma.quiz_multiple_choiceCreateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_multiple_choiceUpdateWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateWithoutQuiz_baseInput, Prisma.quiz_multiple_choiceUncheckedUpdateWithoutQuiz_baseInput>;
};
export type quiz_multiple_choiceUpdateManyWithWhereWithoutQuiz_baseInput = {
    where: Prisma.quiz_multiple_choiceScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateManyMutationInput, Prisma.quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseInput>;
};
export type quiz_multiple_choiceScalarWhereInput = {
    AND?: Prisma.quiz_multiple_choiceScalarWhereInput | Prisma.quiz_multiple_choiceScalarWhereInput[];
    OR?: Prisma.quiz_multiple_choiceScalarWhereInput[];
    NOT?: Prisma.quiz_multiple_choiceScalarWhereInput | Prisma.quiz_multiple_choiceScalarWhereInput[];
    mcq_id?: Prisma.IntFilter<"quiz_multiple_choice"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_multiple_choice"> | number | null;
    option_text?: Prisma.StringNullableFilter<"quiz_multiple_choice"> | string | null;
    is_correct?: Prisma.BoolNullableFilter<"quiz_multiple_choice"> | boolean | null;
};
export type quiz_multiple_choiceCreateManyQuiz_baseInput = {
    mcq_id?: number;
    option_text?: string | null;
    is_correct?: boolean | null;
};
export type quiz_multiple_choiceUpdateWithoutQuiz_baseInput = {
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type quiz_multiple_choiceUncheckedUpdateWithoutQuiz_baseInput = {
    mcq_id?: Prisma.IntFieldUpdateOperationsInput | number;
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type quiz_multiple_choiceUncheckedUpdateManyWithoutQuiz_baseInput = {
    mcq_id?: Prisma.IntFieldUpdateOperationsInput | number;
    option_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_correct?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type quiz_multiple_choiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    mcq_id?: boolean;
    quiz_id?: boolean;
    option_text?: boolean;
    is_correct?: boolean;
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_multiple_choice"]>;
export type quiz_multiple_choiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    mcq_id?: boolean;
    quiz_id?: boolean;
    option_text?: boolean;
    is_correct?: boolean;
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_multiple_choice"]>;
export type quiz_multiple_choiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    mcq_id?: boolean;
    quiz_id?: boolean;
    option_text?: boolean;
    is_correct?: boolean;
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_multiple_choice"]>;
export type quiz_multiple_choiceSelectScalar = {
    mcq_id?: boolean;
    quiz_id?: boolean;
    option_text?: boolean;
    is_correct?: boolean;
};
export type quiz_multiple_choiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"mcq_id" | "quiz_id" | "option_text" | "is_correct", ExtArgs["result"]["quiz_multiple_choice"]>;
export type quiz_multiple_choiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
};
export type quiz_multiple_choiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
};
export type quiz_multiple_choiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>;
};
export type $quiz_multiple_choicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_multiple_choice";
    objects: {
        quiz_base: Prisma.$quiz_basePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        mcq_id: number;
        quiz_id: number | null;
        option_text: string | null;
        is_correct: boolean | null;
    }, ExtArgs["result"]["quiz_multiple_choice"]>;
    composites: {};
};
export type quiz_multiple_choiceGetPayload<S extends boolean | null | undefined | quiz_multiple_choiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload, S>;
export type quiz_multiple_choiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_multiple_choiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_multiple_choiceCountAggregateInputType | true;
};
export interface quiz_multiple_choiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_multiple_choice'];
        meta: {
            name: 'quiz_multiple_choice';
        };
    };
    findUnique<T extends quiz_multiple_choiceFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_multiple_choiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_multiple_choiceFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_multiple_choiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_multiple_choiceFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_multiple_choiceCreateArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_multiple_choiceCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_multiple_choiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_multiple_choiceDeleteArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_multiple_choiceUpdateArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_multiple_choiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_multiple_choiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_multiple_choiceUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_multiple_choiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_multiple_choiceUpsertArgs>(args: Prisma.SelectSubset<T, quiz_multiple_choiceUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_multiple_choiceClient<runtime.Types.Result.GetResult<Prisma.$quiz_multiple_choicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_multiple_choiceCountArgs>(args?: Prisma.Subset<T, quiz_multiple_choiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_multiple_choiceCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_multiple_choiceAggregateArgs>(args: Prisma.Subset<T, Quiz_multiple_choiceAggregateArgs>): Prisma.PrismaPromise<GetQuiz_multiple_choiceAggregateType<T>>;
    groupBy<T extends quiz_multiple_choiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_multiple_choiceGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_multiple_choiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_multiple_choiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_multiple_choiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_multiple_choiceFieldRefs;
}
export interface Prisma__quiz_multiple_choiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quiz_base<T extends Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_multiple_choice$quiz_baseArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_multiple_choiceFieldRefs {
    readonly mcq_id: Prisma.FieldRef<"quiz_multiple_choice", 'Int'>;
    readonly quiz_id: Prisma.FieldRef<"quiz_multiple_choice", 'Int'>;
    readonly option_text: Prisma.FieldRef<"quiz_multiple_choice", 'String'>;
    readonly is_correct: Prisma.FieldRef<"quiz_multiple_choice", 'Boolean'>;
}
export type quiz_multiple_choiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
};
export type quiz_multiple_choiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
};
export type quiz_multiple_choiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithRelationInput | Prisma.quiz_multiple_choiceOrderByWithRelationInput[];
    cursor?: Prisma.quiz_multiple_choiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_multiple_choiceScalarFieldEnum | Prisma.Quiz_multiple_choiceScalarFieldEnum[];
};
export type quiz_multiple_choiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithRelationInput | Prisma.quiz_multiple_choiceOrderByWithRelationInput[];
    cursor?: Prisma.quiz_multiple_choiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_multiple_choiceScalarFieldEnum | Prisma.Quiz_multiple_choiceScalarFieldEnum[];
};
export type quiz_multiple_choiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    orderBy?: Prisma.quiz_multiple_choiceOrderByWithRelationInput | Prisma.quiz_multiple_choiceOrderByWithRelationInput[];
    cursor?: Prisma.quiz_multiple_choiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_multiple_choiceScalarFieldEnum | Prisma.Quiz_multiple_choiceScalarFieldEnum[];
};
export type quiz_multiple_choiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.quiz_multiple_choiceCreateInput, Prisma.quiz_multiple_choiceUncheckedCreateInput>;
};
export type quiz_multiple_choiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_multiple_choiceCreateManyInput | Prisma.quiz_multiple_choiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_multiple_choiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    data: Prisma.quiz_multiple_choiceCreateManyInput | Prisma.quiz_multiple_choiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_multiple_choiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_multiple_choiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateInput, Prisma.quiz_multiple_choiceUncheckedUpdateInput>;
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
};
export type quiz_multiple_choiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateManyMutationInput, Prisma.quiz_multiple_choiceUncheckedUpdateManyInput>;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    limit?: number;
};
export type quiz_multiple_choiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateManyMutationInput, Prisma.quiz_multiple_choiceUncheckedUpdateManyInput>;
    where?: Prisma.quiz_multiple_choiceWhereInput;
    limit?: number;
    include?: Prisma.quiz_multiple_choiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_multiple_choiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_multiple_choiceCreateInput, Prisma.quiz_multiple_choiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_multiple_choiceUpdateInput, Prisma.quiz_multiple_choiceUncheckedUpdateInput>;
};
export type quiz_multiple_choiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
    where: Prisma.quiz_multiple_choiceWhereUniqueInput;
};
export type quiz_multiple_choiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_multiple_choiceWhereInput;
    limit?: number;
};
export type quiz_multiple_choice$quiz_baseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_multiple_choiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_multiple_choiceSelect<ExtArgs> | null;
    omit?: Prisma.quiz_multiple_choiceOmit<ExtArgs> | null;
    include?: Prisma.quiz_multiple_choiceInclude<ExtArgs> | null;
};
export {};
