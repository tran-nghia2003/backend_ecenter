import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_fill_blankModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_fill_blankPayload>;
export type AggregateQuiz_fill_blank = {
    _count: Quiz_fill_blankCountAggregateOutputType | null;
    _avg: Quiz_fill_blankAvgAggregateOutputType | null;
    _sum: Quiz_fill_blankSumAggregateOutputType | null;
    _min: Quiz_fill_blankMinAggregateOutputType | null;
    _max: Quiz_fill_blankMaxAggregateOutputType | null;
};
export type Quiz_fill_blankAvgAggregateOutputType = {
    fb_id: number | null;
    quiz_id: number | null;
};
export type Quiz_fill_blankSumAggregateOutputType = {
    fb_id: number | null;
    quiz_id: number | null;
};
export type Quiz_fill_blankMinAggregateOutputType = {
    fb_id: number | null;
    quiz_id: number | null;
    correct_text: string | null;
};
export type Quiz_fill_blankMaxAggregateOutputType = {
    fb_id: number | null;
    quiz_id: number | null;
    correct_text: string | null;
};
export type Quiz_fill_blankCountAggregateOutputType = {
    fb_id: number;
    quiz_id: number;
    correct_text: number;
    _all: number;
};
export type Quiz_fill_blankAvgAggregateInputType = {
    fb_id?: true;
    quiz_id?: true;
};
export type Quiz_fill_blankSumAggregateInputType = {
    fb_id?: true;
    quiz_id?: true;
};
export type Quiz_fill_blankMinAggregateInputType = {
    fb_id?: true;
    quiz_id?: true;
    correct_text?: true;
};
export type Quiz_fill_blankMaxAggregateInputType = {
    fb_id?: true;
    quiz_id?: true;
    correct_text?: true;
};
export type Quiz_fill_blankCountAggregateInputType = {
    fb_id?: true;
    quiz_id?: true;
    correct_text?: true;
    _all?: true;
};
export type Quiz_fill_blankAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithRelationInput | Prisma.quiz_fill_blankOrderByWithRelationInput[];
    cursor?: Prisma.quiz_fill_blankWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_fill_blankCountAggregateInputType;
    _avg?: Quiz_fill_blankAvgAggregateInputType;
    _sum?: Quiz_fill_blankSumAggregateInputType;
    _min?: Quiz_fill_blankMinAggregateInputType;
    _max?: Quiz_fill_blankMaxAggregateInputType;
};
export type GetQuiz_fill_blankAggregateType<T extends Quiz_fill_blankAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_fill_blank]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_fill_blank[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_fill_blank[P]>;
};
export type quiz_fill_blankGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithAggregationInput | Prisma.quiz_fill_blankOrderByWithAggregationInput[];
    by: Prisma.Quiz_fill_blankScalarFieldEnum[] | Prisma.Quiz_fill_blankScalarFieldEnum;
    having?: Prisma.quiz_fill_blankScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_fill_blankCountAggregateInputType | true;
    _avg?: Quiz_fill_blankAvgAggregateInputType;
    _sum?: Quiz_fill_blankSumAggregateInputType;
    _min?: Quiz_fill_blankMinAggregateInputType;
    _max?: Quiz_fill_blankMaxAggregateInputType;
};
export type Quiz_fill_blankGroupByOutputType = {
    fb_id: number;
    quiz_id: number | null;
    correct_text: string;
    _count: Quiz_fill_blankCountAggregateOutputType | null;
    _avg: Quiz_fill_blankAvgAggregateOutputType | null;
    _sum: Quiz_fill_blankSumAggregateOutputType | null;
    _min: Quiz_fill_blankMinAggregateOutputType | null;
    _max: Quiz_fill_blankMaxAggregateOutputType | null;
};
type GetQuiz_fill_blankGroupByPayload<T extends quiz_fill_blankGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_fill_blankGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_fill_blankGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_fill_blankGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_fill_blankGroupByOutputType[P]>;
}>>;
export type quiz_fill_blankWhereInput = {
    AND?: Prisma.quiz_fill_blankWhereInput | Prisma.quiz_fill_blankWhereInput[];
    OR?: Prisma.quiz_fill_blankWhereInput[];
    NOT?: Prisma.quiz_fill_blankWhereInput | Prisma.quiz_fill_blankWhereInput[];
    fb_id?: Prisma.IntFilter<"quiz_fill_blank"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_fill_blank"> | number | null;
    correct_text?: Prisma.StringFilter<"quiz_fill_blank"> | string;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
};
export type quiz_fill_blankOrderByWithRelationInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_text?: Prisma.SortOrder;
    quiz_base?: Prisma.quiz_baseOrderByWithRelationInput;
};
export type quiz_fill_blankWhereUniqueInput = Prisma.AtLeast<{
    fb_id?: number;
    AND?: Prisma.quiz_fill_blankWhereInput | Prisma.quiz_fill_blankWhereInput[];
    OR?: Prisma.quiz_fill_blankWhereInput[];
    NOT?: Prisma.quiz_fill_blankWhereInput | Prisma.quiz_fill_blankWhereInput[];
    quiz_id?: Prisma.IntNullableFilter<"quiz_fill_blank"> | number | null;
    correct_text?: Prisma.StringFilter<"quiz_fill_blank"> | string;
    quiz_base?: Prisma.XOR<Prisma.Quiz_baseNullableScalarRelationFilter, Prisma.quiz_baseWhereInput> | null;
}, "fb_id">;
export type quiz_fill_blankOrderByWithAggregationInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    correct_text?: Prisma.SortOrder;
    _count?: Prisma.quiz_fill_blankCountOrderByAggregateInput;
    _avg?: Prisma.quiz_fill_blankAvgOrderByAggregateInput;
    _max?: Prisma.quiz_fill_blankMaxOrderByAggregateInput;
    _min?: Prisma.quiz_fill_blankMinOrderByAggregateInput;
    _sum?: Prisma.quiz_fill_blankSumOrderByAggregateInput;
};
export type quiz_fill_blankScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_fill_blankScalarWhereWithAggregatesInput | Prisma.quiz_fill_blankScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_fill_blankScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_fill_blankScalarWhereWithAggregatesInput | Prisma.quiz_fill_blankScalarWhereWithAggregatesInput[];
    fb_id?: Prisma.IntWithAggregatesFilter<"quiz_fill_blank"> | number;
    quiz_id?: Prisma.IntNullableWithAggregatesFilter<"quiz_fill_blank"> | number | null;
    correct_text?: Prisma.StringWithAggregatesFilter<"quiz_fill_blank"> | string;
};
export type quiz_fill_blankCreateInput = {
    correct_text: string;
    quiz_base?: Prisma.quiz_baseCreateNestedOneWithoutQuiz_fill_blankInput;
};
export type quiz_fill_blankUncheckedCreateInput = {
    fb_id?: number;
    quiz_id?: number | null;
    correct_text: string;
};
export type quiz_fill_blankUpdateInput = {
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
    quiz_base?: Prisma.quiz_baseUpdateOneWithoutQuiz_fill_blankNestedInput;
};
export type quiz_fill_blankUncheckedUpdateInput = {
    fb_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type quiz_fill_blankCreateManyInput = {
    fb_id?: number;
    quiz_id?: number | null;
    correct_text: string;
};
export type quiz_fill_blankUpdateManyMutationInput = {
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type quiz_fill_blankUncheckedUpdateManyInput = {
    fb_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Quiz_fill_blankListRelationFilter = {
    every?: Prisma.quiz_fill_blankWhereInput;
    some?: Prisma.quiz_fill_blankWhereInput;
    none?: Prisma.quiz_fill_blankWhereInput;
};
export type quiz_fill_blankOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_fill_blankCountOrderByAggregateInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    correct_text?: Prisma.SortOrder;
};
export type quiz_fill_blankAvgOrderByAggregateInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
};
export type quiz_fill_blankMaxOrderByAggregateInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    correct_text?: Prisma.SortOrder;
};
export type quiz_fill_blankMinOrderByAggregateInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    correct_text?: Prisma.SortOrder;
};
export type quiz_fill_blankSumOrderByAggregateInput = {
    fb_id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
};
export type quiz_fill_blankCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput[] | Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_fill_blankCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
};
export type quiz_fill_blankUncheckedCreateNestedManyWithoutQuiz_baseInput = {
    create?: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput[] | Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_fill_blankCreateManyQuiz_baseInputEnvelope;
    connect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
};
export type quiz_fill_blankUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput[] | Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_fill_blankUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_fill_blankCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    disconnect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    delete?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    connect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    update?: Prisma.quiz_fill_blankUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_fill_blankUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_fill_blankScalarWhereInput | Prisma.quiz_fill_blankScalarWhereInput[];
};
export type quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput> | Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput[] | Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput[];
    connectOrCreate?: Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput | Prisma.quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput[];
    upsert?: Prisma.quiz_fill_blankUpsertWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpsertWithWhereUniqueWithoutQuiz_baseInput[];
    createMany?: Prisma.quiz_fill_blankCreateManyQuiz_baseInputEnvelope;
    set?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    disconnect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    delete?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    connect?: Prisma.quiz_fill_blankWhereUniqueInput | Prisma.quiz_fill_blankWhereUniqueInput[];
    update?: Prisma.quiz_fill_blankUpdateWithWhereUniqueWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpdateWithWhereUniqueWithoutQuiz_baseInput[];
    updateMany?: Prisma.quiz_fill_blankUpdateManyWithWhereWithoutQuiz_baseInput | Prisma.quiz_fill_blankUpdateManyWithWhereWithoutQuiz_baseInput[];
    deleteMany?: Prisma.quiz_fill_blankScalarWhereInput | Prisma.quiz_fill_blankScalarWhereInput[];
};
export type quiz_fill_blankCreateWithoutQuiz_baseInput = {
    correct_text: string;
};
export type quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput = {
    fb_id?: number;
    correct_text: string;
};
export type quiz_fill_blankCreateOrConnectWithoutQuiz_baseInput = {
    where: Prisma.quiz_fill_blankWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_fill_blankCreateManyQuiz_baseInputEnvelope = {
    data: Prisma.quiz_fill_blankCreateManyQuiz_baseInput | Prisma.quiz_fill_blankCreateManyQuiz_baseInput[];
    skipDuplicates?: boolean;
};
export type quiz_fill_blankUpsertWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_fill_blankWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_fill_blankUpdateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedUpdateWithoutQuiz_baseInput>;
    create: Prisma.XOR<Prisma.quiz_fill_blankCreateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedCreateWithoutQuiz_baseInput>;
};
export type quiz_fill_blankUpdateWithWhereUniqueWithoutQuiz_baseInput = {
    where: Prisma.quiz_fill_blankWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_fill_blankUpdateWithoutQuiz_baseInput, Prisma.quiz_fill_blankUncheckedUpdateWithoutQuiz_baseInput>;
};
export type quiz_fill_blankUpdateManyWithWhereWithoutQuiz_baseInput = {
    where: Prisma.quiz_fill_blankScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_fill_blankUpdateManyMutationInput, Prisma.quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseInput>;
};
export type quiz_fill_blankScalarWhereInput = {
    AND?: Prisma.quiz_fill_blankScalarWhereInput | Prisma.quiz_fill_blankScalarWhereInput[];
    OR?: Prisma.quiz_fill_blankScalarWhereInput[];
    NOT?: Prisma.quiz_fill_blankScalarWhereInput | Prisma.quiz_fill_blankScalarWhereInput[];
    fb_id?: Prisma.IntFilter<"quiz_fill_blank"> | number;
    quiz_id?: Prisma.IntNullableFilter<"quiz_fill_blank"> | number | null;
    correct_text?: Prisma.StringFilter<"quiz_fill_blank"> | string;
};
export type quiz_fill_blankCreateManyQuiz_baseInput = {
    fb_id?: number;
    correct_text: string;
};
export type quiz_fill_blankUpdateWithoutQuiz_baseInput = {
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type quiz_fill_blankUncheckedUpdateWithoutQuiz_baseInput = {
    fb_id?: Prisma.IntFieldUpdateOperationsInput | number;
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type quiz_fill_blankUncheckedUpdateManyWithoutQuiz_baseInput = {
    fb_id?: Prisma.IntFieldUpdateOperationsInput | number;
    correct_text?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type quiz_fill_blankSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fb_id?: boolean;
    quiz_id?: boolean;
    correct_text?: boolean;
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_fill_blank"]>;
export type quiz_fill_blankSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fb_id?: boolean;
    quiz_id?: boolean;
    correct_text?: boolean;
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_fill_blank"]>;
export type quiz_fill_blankSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    fb_id?: boolean;
    quiz_id?: boolean;
    correct_text?: boolean;
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_fill_blank"]>;
export type quiz_fill_blankSelectScalar = {
    fb_id?: boolean;
    quiz_id?: boolean;
    correct_text?: boolean;
};
export type quiz_fill_blankOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"fb_id" | "quiz_id" | "correct_text", ExtArgs["result"]["quiz_fill_blank"]>;
export type quiz_fill_blankInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
};
export type quiz_fill_blankIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
};
export type quiz_fill_blankIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_base?: boolean | Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>;
};
export type $quiz_fill_blankPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_fill_blank";
    objects: {
        quiz_base: Prisma.$quiz_basePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        fb_id: number;
        quiz_id: number | null;
        correct_text: string;
    }, ExtArgs["result"]["quiz_fill_blank"]>;
    composites: {};
};
export type quiz_fill_blankGetPayload<S extends boolean | null | undefined | quiz_fill_blankDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload, S>;
export type quiz_fill_blankCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_fill_blankFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_fill_blankCountAggregateInputType | true;
};
export interface quiz_fill_blankDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_fill_blank'];
        meta: {
            name: 'quiz_fill_blank';
        };
    };
    findUnique<T extends quiz_fill_blankFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_fill_blankFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_fill_blankFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_fill_blankFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_fill_blankFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_fill_blankCreateArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_fill_blankCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_fill_blankCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_fill_blankDeleteArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_fill_blankUpdateArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_fill_blankDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_fill_blankDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_fill_blankUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_fill_blankUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_fill_blankUpsertArgs>(args: Prisma.SelectSubset<T, quiz_fill_blankUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_fill_blankClient<runtime.Types.Result.GetResult<Prisma.$quiz_fill_blankPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_fill_blankCountArgs>(args?: Prisma.Subset<T, quiz_fill_blankCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_fill_blankCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_fill_blankAggregateArgs>(args: Prisma.Subset<T, Quiz_fill_blankAggregateArgs>): Prisma.PrismaPromise<GetQuiz_fill_blankAggregateType<T>>;
    groupBy<T extends quiz_fill_blankGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_fill_blankGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_fill_blankGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_fill_blankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_fill_blankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_fill_blankFieldRefs;
}
export interface Prisma__quiz_fill_blankClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quiz_base<T extends Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_fill_blank$quiz_baseArgs<ExtArgs>>): Prisma.Prisma__quiz_baseClient<runtime.Types.Result.GetResult<Prisma.$quiz_basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_fill_blankFieldRefs {
    readonly fb_id: Prisma.FieldRef<"quiz_fill_blank", 'Int'>;
    readonly quiz_id: Prisma.FieldRef<"quiz_fill_blank", 'Int'>;
    readonly correct_text: Prisma.FieldRef<"quiz_fill_blank", 'String'>;
}
export type quiz_fill_blankFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where: Prisma.quiz_fill_blankWhereUniqueInput;
};
export type quiz_fill_blankFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where: Prisma.quiz_fill_blankWhereUniqueInput;
};
export type quiz_fill_blankFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithRelationInput | Prisma.quiz_fill_blankOrderByWithRelationInput[];
    cursor?: Prisma.quiz_fill_blankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_fill_blankScalarFieldEnum | Prisma.Quiz_fill_blankScalarFieldEnum[];
};
export type quiz_fill_blankFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithRelationInput | Prisma.quiz_fill_blankOrderByWithRelationInput[];
    cursor?: Prisma.quiz_fill_blankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_fill_blankScalarFieldEnum | Prisma.Quiz_fill_blankScalarFieldEnum[];
};
export type quiz_fill_blankFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where?: Prisma.quiz_fill_blankWhereInput;
    orderBy?: Prisma.quiz_fill_blankOrderByWithRelationInput | Prisma.quiz_fill_blankOrderByWithRelationInput[];
    cursor?: Prisma.quiz_fill_blankWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_fill_blankScalarFieldEnum | Prisma.Quiz_fill_blankScalarFieldEnum[];
};
export type quiz_fill_blankCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_fill_blankCreateInput, Prisma.quiz_fill_blankUncheckedCreateInput>;
};
export type quiz_fill_blankCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_fill_blankCreateManyInput | Prisma.quiz_fill_blankCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_fill_blankCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    data: Prisma.quiz_fill_blankCreateManyInput | Prisma.quiz_fill_blankCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_fill_blankIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_fill_blankUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_fill_blankUpdateInput, Prisma.quiz_fill_blankUncheckedUpdateInput>;
    where: Prisma.quiz_fill_blankWhereUniqueInput;
};
export type quiz_fill_blankUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_fill_blankUpdateManyMutationInput, Prisma.quiz_fill_blankUncheckedUpdateManyInput>;
    where?: Prisma.quiz_fill_blankWhereInput;
    limit?: number;
};
export type quiz_fill_blankUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_fill_blankUpdateManyMutationInput, Prisma.quiz_fill_blankUncheckedUpdateManyInput>;
    where?: Prisma.quiz_fill_blankWhereInput;
    limit?: number;
    include?: Prisma.quiz_fill_blankIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_fill_blankUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where: Prisma.quiz_fill_blankWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_fill_blankCreateInput, Prisma.quiz_fill_blankUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_fill_blankUpdateInput, Prisma.quiz_fill_blankUncheckedUpdateInput>;
};
export type quiz_fill_blankDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
    where: Prisma.quiz_fill_blankWhereUniqueInput;
};
export type quiz_fill_blankDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_fill_blankWhereInput;
    limit?: number;
};
export type quiz_fill_blank$quiz_baseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_baseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_baseOmit<ExtArgs> | null;
    include?: Prisma.quiz_baseInclude<ExtArgs> | null;
    where?: Prisma.quiz_baseWhereInput;
};
export type quiz_fill_blankDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_fill_blankSelect<ExtArgs> | null;
    omit?: Prisma.quiz_fill_blankOmit<ExtArgs> | null;
    include?: Prisma.quiz_fill_blankInclude<ExtArgs> | null;
};
export {};
