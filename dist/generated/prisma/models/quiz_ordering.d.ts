import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_orderingModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_orderingPayload>;
export type AggregateQuiz_ordering = {
    _count: Quiz_orderingCountAggregateOutputType | null;
    _avg: Quiz_orderingAvgAggregateOutputType | null;
    _sum: Quiz_orderingSumAggregateOutputType | null;
    _min: Quiz_orderingMinAggregateOutputType | null;
    _max: Quiz_orderingMaxAggregateOutputType | null;
};
export type Quiz_orderingAvgAggregateOutputType = {
    ord_id: number | null;
    quiz_id: number | null;
    correct_position: number | null;
};
export type Quiz_orderingSumAggregateOutputType = {
    ord_id: number | null;
    quiz_id: number | null;
    correct_position: number | null;
};
export type Quiz_orderingMinAggregateOutputType = {
    ord_id: number | null;
    quiz_id: number | null;
    item_text: string | null;
    correct_position: number | null;
};
export type Quiz_orderingMaxAggregateOutputType = {
    ord_id: number | null;
    quiz_id: number | null;
    item_text: string | null;
    correct_position: number | null;
};
export type Quiz_orderingCountAggregateOutputType = {
    ord_id: number;
    quiz_id: number;
    item_text: number;
    correct_position: number;
    _all: number;
};
export type Quiz_orderingAvgAggregateInputType = {
    ord_id?: true;
    quiz_id?: true;
    correct_position?: true;
};
export type Quiz_orderingSumAggregateInputType = {
    ord_id?: true;
    quiz_id?: true;
    correct_position?: true;
};
export type Quiz_orderingMinAggregateInputType = {
    ord_id?: true;
    quiz_id?: true;
    item_text?: true;
    correct_position?: true;
};
export type Quiz_orderingMaxAggregateInputType = {
    ord_id?: true;
    quiz_id?: true;
    item_text?: true;
    correct_position?: true;
};
export type Quiz_orderingCountAggregateInputType = {
    ord_id?: true;
    quiz_id?: true;
    item_text?: true;
    correct_position?: true;
    _all?: true;
};
export type Quiz_orderingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithRelationInput | Prisma.quiz_orderingOrderByWithRelationInput[];
    cursor?: Prisma.quiz_orderingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_orderingCountAggregateInputType;
    _avg?: Quiz_orderingAvgAggregateInputType;
    _sum?: Quiz_orderingSumAggregateInputType;
    _min?: Quiz_orderingMinAggregateInputType;
    _max?: Quiz_orderingMaxAggregateInputType;
};
export type GetQuiz_orderingAggregateType<T extends Quiz_orderingAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_ordering]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_ordering[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_ordering[P]>;
};
export type quiz_orderingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithAggregationInput | Prisma.quiz_orderingOrderByWithAggregationInput[];
    by: Prisma.Quiz_orderingScalarFieldEnum[] | Prisma.Quiz_orderingScalarFieldEnum;
    having?: Prisma.quiz_orderingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_orderingCountAggregateInputType | true;
    _avg?: Quiz_orderingAvgAggregateInputType;
    _sum?: Quiz_orderingSumAggregateInputType;
    _min?: Quiz_orderingMinAggregateInputType;
    _max?: Quiz_orderingMaxAggregateInputType;
};
export type Quiz_orderingGroupByOutputType = {
    ord_id: number;
    quiz_id: number | null;
    item_text: string | null;
    correct_position: number | null;
    _count: Quiz_orderingCountAggregateOutputType | null;
    _avg: Quiz_orderingAvgAggregateOutputType | null;
    _sum: Quiz_orderingSumAggregateOutputType | null;
    _min: Quiz_orderingMinAggregateOutputType | null;
    _max: Quiz_orderingMaxAggregateOutputType | null;
};
type GetQuiz_orderingGroupByPayload<T extends quiz_orderingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_orderingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_orderingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_orderingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_orderingGroupByOutputType[P]>;
}>>;
export type quiz_orderingWhereInput = {
    AND?: Prisma.quiz_orderingWhereInput | Prisma.quiz_orderingWhereInput[];
    OR?: Prisma.quiz_orderingWhereInput[];
    NOT?: Prisma.quiz_orderingWhereInput | Prisma.quiz_orderingWhereInput[];
    ord_id?: Prisma.IntFilter<"quiz_ordering"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
    item_text?: Prisma.StringNullableFilter<"quiz_ordering"> | string | null;
    correct_position?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
};
export type quiz_orderingOrderByWithRelationInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    item_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_position?: Prisma.SortOrderInput | Prisma.SortOrder;
    quiz_base?: Prisma.quiz_baseOrderByWithRelationInput;
};
export type quiz_orderingWhereUniqueInput = Prisma.AtLeast<{
    ord_id?: number;
    AND?: Prisma.quiz_orderingWhereInput | Prisma.quiz_orderingWhereInput[];
    OR?: Prisma.quiz_orderingWhereInput[];
    NOT?: Prisma.quiz_orderingWhereInput | Prisma.quiz_orderingWhereInput[];
    quiz_id?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
    item_text?: Prisma.StringNullableFilter<"quiz_ordering"> | string | null;
    correct_position?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
}, "ord_id">;
export type quiz_orderingOrderByWithAggregationInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    item_text?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_position?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.quiz_orderingCountOrderByAggregateInput;
    _avg?: Prisma.quiz_orderingAvgOrderByAggregateInput;
    _max?: Prisma.quiz_orderingMaxOrderByAggregateInput;
    _min?: Prisma.quiz_orderingMinOrderByAggregateInput;
    _sum?: Prisma.quiz_orderingSumOrderByAggregateInput;
};
export type quiz_orderingScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_orderingScalarWhereWithAggregatesInput | Prisma.quiz_orderingScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_orderingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_orderingScalarWhereWithAggregatesInput | Prisma.quiz_orderingScalarWhereWithAggregatesInput[];
    ord_id?: Prisma.IntWithAggregatesFilter<"quiz_ordering"> | number;
    quiz_id?: Prisma.IntNullableWithAggregatesFilter<"quiz_ordering"> | number | null;
    item_text?: Prisma.StringNullableWithAggregatesFilter<"quiz_ordering"> | string | null;
    correct_position?: Prisma.IntNullableWithAggregatesFilter<"quiz_ordering"> | number | null;
};
export type quiz_orderingCreateInput = {
    item_text?: string | null;
    correct_position?: number | null;
    quiz_base?: Prisma.quiz_baseCreateNestedOneWithoutQuiz_orderingInput;
};
export type quiz_orderingUncheckedCreateInput = {
    ord_id?: number;
    quiz_id?: number | null;
    item_text?: string | null;
    correct_position?: number | null;
};
export type quiz_orderingUpdateInput = {
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quiz_base?: Prisma.quiz_baseUpdateOneWithoutQuiz_orderingNestedInput;
};
export type quiz_orderingUncheckedUpdateInput = {
    ord_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type quiz_orderingCreateManyInput = {
    ord_id?: number;
    quiz_id?: number | null;
    item_text?: string | null;
    correct_position?: number | null;
};
export type quiz_orderingUpdateManyMutationInput = {
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type quiz_orderingUncheckedUpdateManyInput = {
    ord_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Quiz_orderingListRelationFilter = {
    every?: Prisma.quiz_orderingWhereInput;
    some?: Prisma.quiz_orderingWhereInput;
    none?: Prisma.quiz_orderingWhereInput;
};
export type quiz_orderingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_orderingCountOrderByAggregateInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    item_text?: Prisma.SortOrder;
    correct_position?: Prisma.SortOrder;
};
export type quiz_orderingAvgOrderByAggregateInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    correct_position?: Prisma.SortOrder;
};
export type quiz_orderingMaxOrderByAggregateInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    item_text?: Prisma.SortOrder;
    correct_position?: Prisma.SortOrder;
};
export type quiz_orderingMinOrderByAggregateInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    item_text?: Prisma.SortOrder;
    correct_position?: Prisma.SortOrder;
};
export type quiz_orderingSumOrderByAggregateInput = {
    ord_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    correct_position?: Prisma.SortOrder;
};
export type quiz_orderingCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_orderingCreateWithoutQuiz_baseInput[] | Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_orderingCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
};
export type quiz_orderingUncheckedCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_orderingCreateWithoutQuiz_baseInput[] | Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_orderingCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
};
export type quiz_orderingUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_orderingCreateWithoutQuiz_baseInput[] | Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_orderingUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_orderingUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_orderingCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    disconnect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    delete?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    connect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    update?: Prisma.quiz_orderingUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_orderingUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_orderingUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_orderingUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_orderingScalarWhereInput | Prisma.quiz_orderingScalarWhereInput[];
};
export type quiz_orderingUncheckedUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_orderingCreateWithoutQuiz_baseInput[] | Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_orderingCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_orderingUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_orderingUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_orderingCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    disconnect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    delete?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    connect?: Prisma.quiz_orderingWhereUniqueInput | Prisma.quiz_orderingWhereUniqueInput[];
    update?: Prisma.quiz_orderingUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_orderingUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_orderingUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_orderingUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_orderingScalarWhereInput | Prisma.quiz_orderingScalarWhereInput[];
};
export type quiz_orderingCreateWithoutQuiz_baseInput = {
    item_text?: string | null;
    correct_position?: number | null;
};
export type quiz_orderingUncheckedCreateWithoutQuiz_baseInput = {
    ord_id?: number;
    item_text?: string | null;
    correct_position?: number | null;
};
export type quiz_orderingCreateOrConnectWithoutQuiz_baseInput = {
    where: Prisma.quiz_orderingWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_orderingCreateManyQuiz_baseInputEnvelope = {
    data: Prisma.quiz_orderingCreateManyQuiz_baseInput | Prisma.quiz_orderingCreateManyQuiz_baseInput[];
    skipDuplicates?: boolean;
};
export type quiz_orderingUpsertWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_orderingWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_orderingUpdateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedUpdateWithoutQuiz_baseInput>;
    create: Prisma.XOR<Prisma.quiz_orderingCreateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_orderingUpdateWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_orderingWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_orderingUpdateWithoutQuiz_baseInput, Prisma.quiz_orderingUncheckedUpdateWithoutQuiz_baseInput>;
};
export type quiz_orderingUpdateManyWithWhereWithoutQuiz_baseInput = {
    where: Prisma.quiz_orderingScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_orderingUpdateManyMutationInput, Prisma.quiz_orderingUncheckedUpdateManyWithoutQuiz_baseInput>;
};
export type quiz_orderingScalarWhereInput = {
    AND?: Prisma.quiz_orderingScalarWhereInput | Prisma.quiz_orderingScalarWhereInput[];
    OR?: Prisma.quiz_orderingScalarWhereInput[];
    NOT?: Prisma.quiz_orderingScalarWhereInput | Prisma.quiz_orderingScalarWhereInput[];
    ord_id?: Prisma.IntFilter<"quiz_ordering"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
    item_text?: Prisma.StringNullableFilter<"quiz_ordering"> | string | null;
    correct_position?: Prisma.IntNullableFilter<"quiz_ordering"> | number | null;
};
export type quiz_orderingCreateManyQuiz_baseInput = {
    ord_id?: number;
    item_text?: string | null;
    correct_position?: number | null;
};
export type quiz_orderingUpdateWithoutQuiz_baseInput = {
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type quiz_orderingUncheckedUpdateWithoutQuiz_baseInput = {
    ord_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type quiz_orderingUncheckedUpdateManyWithoutQuiz_baseInput = {
    ord_id?: Prisma.IntFieldUpdateOperationsInput | number;
    item_text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    correct_position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type quiz_orderingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ord_id?: boolean;
    quiz_id?: boolean;
    item_text?: boolean;
    correct_position?: boolean;
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_ordering"]>;
export type quiz_orderingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ord_id?: boolean;
    quiz_id?: boolean;
    item_text?: boolean;
    correct_position?: boolean;
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_ordering"]>;
export type quiz_orderingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ord_id?: boolean;
    quiz_id?: boolean;
    item_text?: boolean;
    correct_position?: boolean;
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_ordering"]>;
export type quiz_orderingSelectScalar = {
    ord_id?: boolean;
    quiz_id?: boolean;
    item_text?: boolean;
    correct_position?: boolean;
};
export type quiz_orderingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ord_id" | "quiz_id" | "item_text" | "correct_position", ExtArgs["result"]["quiz_ordering"]>;
export type quiz_orderingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
};
export type quiz_orderingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
};
export type quiz_orderingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>;
};
export type $quiz_orderingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_ordering";
    objects: {
        quiz_base: Prisma.$quiz_basePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ord_id: number;
        quiz_id: number | null;
        item_text: string | null;
        correct_position: number | null;
    }, ExtArgs["result"]["quiz_ordering"]>;
    composites: {};
};
export type quiz_orderingGetPayload<S extends boolean | null | undefined | quiz_orderingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload, S>;
export type quiz_orderingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_orderingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_orderingCountAggregateInputType | true;
};
export interface quiz_orderingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_ordering'];
        meta: {
            name: 'quiz_ordering';
        };
    };
    findUnique<T extends quiz_orderingFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_orderingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_orderingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_orderingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_orderingFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_orderingFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_orderingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_orderingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_orderingFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_orderingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_orderingCreateArgs>(args: Prisma.SelectSubset<T, quiz_orderingCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_orderingCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_orderingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_orderingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_orderingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_orderingDeleteArgs>(args: Prisma.SelectSubset<T, quiz_orderingDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_orderingUpdateArgs>(args: Prisma.SelectSubset<T, quiz_orderingUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_orderingDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_orderingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_orderingUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_orderingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_orderingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_orderingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_orderingUpsertArgs>(args: Prisma.SelectSubset<T, quiz_orderingUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_orderingClient<runtime.Types.Result.GetResult<Prisma.$quiz_orderingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_orderingCountArgs>(args?: Prisma.Subset<T, quiz_orderingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_orderingCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_orderingAggregateArgs>(args: Prisma.Subset<T, Quiz_orderingAggregateArgs>): Prisma.PrismaPromise<GetQuiz_orderingAggregateType<T>>;
    groupBy<T extends quiz_orderingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_orderingGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_orderingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_orderingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_orderingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_orderingFieldRefs;
}
export interface Prisma__quiz_orderingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quiz_base<T extends Prisma.quiz_ordering$quiz_baseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_ordering$quiz_baseArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_orderingFieldRefs {
    readonly ord_id: Prisma.FieldRef<"quiz_ordering", 'Int'>;
    readonly quiz_id: Prisma.FieldRef<"quiz_ordering", 'Int'>;
    readonly item_text: Prisma.FieldRef<"quiz_ordering", 'String'>;
    readonly correct_position: Prisma.FieldRef<"quiz_ordering", 'Int'>;
}
export type quiz_orderingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where: Prisma.quiz_orderingWhereUniqueInput;
};
export type quiz_orderingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where: Prisma.quiz_orderingWhereUniqueInput;
};
export type quiz_orderingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithRelationInput | Prisma.quiz_orderingOrderByWithRelationInput[];
    cursor?: Prisma.quiz_orderingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_orderingScalarFieldEnum | Prisma.Quiz_orderingScalarFieldEnum[];
};
export type quiz_orderingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithRelationInput | Prisma.quiz_orderingOrderByWithRelationInput[];
    cursor?: Prisma.quiz_orderingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_orderingScalarFieldEnum | Prisma.Quiz_orderingScalarFieldEnum[];
};
export type quiz_orderingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where?: Prisma.quiz_orderingWhereInput;
    orderBy?: Prisma.quiz_orderingOrderByWithRelationInput | Prisma.quiz_orderingOrderByWithRelationInput[];
    cursor?: Prisma.quiz_orderingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_orderingScalarFieldEnum | Prisma.Quiz_orderingScalarFieldEnum[];
};
export type quiz_orderingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.quiz_orderingCreateInput, Prisma.quiz_orderingUncheckedCreateInput>;
};
export type quiz_orderingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_orderingCreateManyInput | Prisma.quiz_orderingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_orderingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    data: Prisma.quiz_orderingCreateManyInput | Prisma.quiz_orderingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_orderingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_orderingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_orderingUpdateInput, Prisma.quiz_orderingUncheckedUpdateInput>;
    where: Prisma.quiz_orderingWhereUniqueInput;
};
export type quiz_orderingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_orderingUpdateManyMutationInput, Prisma.quiz_orderingUncheckedUpdateManyInput>;
    where?: Prisma.quiz_orderingWhereInput;
    limit?: number;
};
export type quiz_orderingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_orderingUpdateManyMutationInput, Prisma.quiz_orderingUncheckedUpdateManyInput>;
    where?: Prisma.quiz_orderingWhereInput;
    limit?: number;
    include?: Prisma.quiz_orderingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_orderingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where: Prisma.quiz_orderingWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_orderingCreateInput, Prisma.quiz_orderingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_orderingUpdateInput, Prisma.quiz_orderingUncheckedUpdateInput>;
};
export type quiz_orderingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
    where: Prisma.quiz_orderingWhereUniqueInput;
};
export type quiz_orderingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_orderingWhereInput;
    limit?: number;
};
export type quiz_ordering$quiz_baseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_orderingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_orderingSelect<ExtArgs> | null;
    omit?: Prisma.quiz_orderingOmit<ExtArgs> | null;
    include?: Prisma.quiz_orderingInclude<ExtArgs> | null;
};
export {};
