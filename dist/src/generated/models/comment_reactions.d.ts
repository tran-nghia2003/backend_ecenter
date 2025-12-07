import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type comment_reactionsModel = runtime.Types.Result.DefaultSelection<Prisma.$comment_reactionsPayload>;
export type AggregateComment_reactions = {
    _count: Comment_reactionsCountAggregateOutputType | null;
    _avg: Comment_reactionsAvgAggregateOutputType | null;
    _sum: Comment_reactionsSumAggregateOutputType | null;
    _min: Comment_reactionsMinAggregateOutputType | null;
    _max: Comment_reactionsMaxAggregateOutputType | null;
};
export type Comment_reactionsAvgAggregateOutputType = {
    reaction_id: number | null;
    comment_id: number | null;
    user_id: number | null;
};
export type Comment_reactionsSumAggregateOutputType = {
    reaction_id: number | null;
    comment_id: number | null;
    user_id: number | null;
};
export type Comment_reactionsMinAggregateOutputType = {
    reaction_id: number | null;
    comment_id: number | null;
    user_id: number | null;
    reaction_type: string | null;
    created_at: Date | null;
};
export type Comment_reactionsMaxAggregateOutputType = {
    reaction_id: number | null;
    comment_id: number | null;
    user_id: number | null;
    reaction_type: string | null;
    created_at: Date | null;
};
export type Comment_reactionsCountAggregateOutputType = {
    reaction_id: number;
    comment_id: number;
    user_id: number;
    reaction_type: number;
    created_at: number;
    _all: number;
};
export type Comment_reactionsAvgAggregateInputType = {
    reaction_id?: true;
    comment_id?: true;
    user_id?: true;
};
export type Comment_reactionsSumAggregateInputType = {
    reaction_id?: true;
    comment_id?: true;
    user_id?: true;
};
export type Comment_reactionsMinAggregateInputType = {
    reaction_id?: true;
    comment_id?: true;
    user_id?: true;
    reaction_type?: true;
    created_at?: true;
};
export type Comment_reactionsMaxAggregateInputType = {
    reaction_id?: true;
    comment_id?: true;
    user_id?: true;
    reaction_type?: true;
    created_at?: true;
};
export type Comment_reactionsCountAggregateInputType = {
    reaction_id?: true;
    comment_id?: true;
    user_id?: true;
    reaction_type?: true;
    created_at?: true;
    _all?: true;
};
export type Comment_reactionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.comment_reactionsWhereInput;
    orderBy?: Prisma.comment_reactionsOrderByWithRelationInput | Prisma.comment_reactionsOrderByWithRelationInput[];
    cursor?: Prisma.comment_reactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Comment_reactionsCountAggregateInputType;
    _avg?: Comment_reactionsAvgAggregateInputType;
    _sum?: Comment_reactionsSumAggregateInputType;
    _min?: Comment_reactionsMinAggregateInputType;
    _max?: Comment_reactionsMaxAggregateInputType;
};
export type GetComment_reactionsAggregateType<T extends Comment_reactionsAggregateArgs> = {
    [P in keyof T & keyof AggregateComment_reactions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComment_reactions[P]> : Prisma.GetScalarType<T[P], AggregateComment_reactions[P]>;
};
export type comment_reactionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.comment_reactionsWhereInput;
    orderBy?: Prisma.comment_reactionsOrderByWithAggregationInput | Prisma.comment_reactionsOrderByWithAggregationInput[];
    by: Prisma.Comment_reactionsScalarFieldEnum[] | Prisma.Comment_reactionsScalarFieldEnum;
    having?: Prisma.comment_reactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Comment_reactionsCountAggregateInputType | true;
    _avg?: Comment_reactionsAvgAggregateInputType;
    _sum?: Comment_reactionsSumAggregateInputType;
    _min?: Comment_reactionsMinAggregateInputType;
    _max?: Comment_reactionsMaxAggregateInputType;
};
export type Comment_reactionsGroupByOutputType = {
    reaction_id: number;
    comment_id: number | null;
    user_id: number | null;
    reaction_type: string | null;
    created_at: Date | null;
    _count: Comment_reactionsCountAggregateOutputType | null;
    _avg: Comment_reactionsAvgAggregateOutputType | null;
    _sum: Comment_reactionsSumAggregateOutputType | null;
    _min: Comment_reactionsMinAggregateOutputType | null;
    _max: Comment_reactionsMaxAggregateOutputType | null;
};
type GetComment_reactionsGroupByPayload<T extends comment_reactionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Comment_reactionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Comment_reactionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Comment_reactionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Comment_reactionsGroupByOutputType[P]>;
}>>;
export type comment_reactionsWhereInput = {
    AND?: Prisma.comment_reactionsWhereInput | Prisma.comment_reactionsWhereInput[];
    OR?: Prisma.comment_reactionsWhereInput[];
    NOT?: Prisma.comment_reactionsWhereInput | Prisma.comment_reactionsWhereInput[];
    reaction_id?: Prisma.IntFilter<"comment_reactions"> | number;
    comment_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    reaction_type?: Prisma.StringNullableFilter<"comment_reactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comment_reactions"> | Date | string | null;
    comments?: Prisma.XOR<Prisma.CommentsNullableScalarRelationFilter, Prisma.commentsWhereInput> | null;
};
export type comment_reactionsOrderByWithRelationInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reaction_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    comments?: Prisma.commentsOrderByWithRelationInput;
};
export type comment_reactionsWhereUniqueInput = Prisma.AtLeast<{
    reaction_id?: number;
    comment_id_user_id?: Prisma.comment_reactionsComment_idUser_idCompoundUniqueInput;
    AND?: Prisma.comment_reactionsWhereInput | Prisma.comment_reactionsWhereInput[];
    OR?: Prisma.comment_reactionsWhereInput[];
    NOT?: Prisma.comment_reactionsWhereInput | Prisma.comment_reactionsWhereInput[];
    comment_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    reaction_type?: Prisma.StringNullableFilter<"comment_reactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comment_reactions"> | Date | string | null;
    comments?: Prisma.XOR<Prisma.CommentsNullableScalarRelationFilter, Prisma.commentsWhereInput> | null;
}, "reaction_id" | "comment_id_user_id">;
export type comment_reactionsOrderByWithAggregationInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reaction_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.comment_reactionsCountOrderByAggregateInput;
    _avg?: Prisma.comment_reactionsAvgOrderByAggregateInput;
    _max?: Prisma.comment_reactionsMaxOrderByAggregateInput;
    _min?: Prisma.comment_reactionsMinOrderByAggregateInput;
    _sum?: Prisma.comment_reactionsSumOrderByAggregateInput;
};
export type comment_reactionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.comment_reactionsScalarWhereWithAggregatesInput | Prisma.comment_reactionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.comment_reactionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.comment_reactionsScalarWhereWithAggregatesInput | Prisma.comment_reactionsScalarWhereWithAggregatesInput[];
    reaction_id?: Prisma.IntWithAggregatesFilter<"comment_reactions"> | number;
    comment_id?: Prisma.IntNullableWithAggregatesFilter<"comment_reactions"> | number | null;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"comment_reactions"> | number | null;
    reaction_type?: Prisma.StringNullableWithAggregatesFilter<"comment_reactions"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"comment_reactions"> | Date | string | null;
};
export type comment_reactionsCreateInput = {
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
    comments?: Prisma.commentsCreateNestedOneWithoutComment_reactionsInput;
};
export type comment_reactionsUncheckedCreateInput = {
    reaction_id?: number;
    comment_id?: number | null;
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
};
export type comment_reactionsUpdateInput = {
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    comments?: Prisma.commentsUpdateOneWithoutComment_reactionsNestedInput;
};
export type comment_reactionsUncheckedUpdateInput = {
    reaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    comment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type comment_reactionsCreateManyInput = {
    reaction_id?: number;
    comment_id?: number | null;
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
};
export type comment_reactionsUpdateManyMutationInput = {
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type comment_reactionsUncheckedUpdateManyInput = {
    reaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    comment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Comment_reactionsListRelationFilter = {
    every?: Prisma.comment_reactionsWhereInput;
    some?: Prisma.comment_reactionsWhereInput;
    none?: Prisma.comment_reactionsWhereInput;
};
export type comment_reactionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type comment_reactionsComment_idUser_idCompoundUniqueInput = {
    comment_id: number;
    user_id: number;
};
export type comment_reactionsCountOrderByAggregateInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reaction_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type comment_reactionsAvgOrderByAggregateInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type comment_reactionsMaxOrderByAggregateInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reaction_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type comment_reactionsMinOrderByAggregateInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    reaction_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type comment_reactionsSumOrderByAggregateInput = {
    reaction_id?: Prisma.SortOrder;
    comment_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type comment_reactionsCreateNestedManyWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput> | Prisma.comment_reactionsCreateWithoutCommentsInput[] | Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput[];
    connectOrCreate?: Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput | Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput[];
    createMany?: Prisma.comment_reactionsCreateManyCommentsInputEnvelope;
    connect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
};
export type comment_reactionsUncheckedCreateNestedManyWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput> | Prisma.comment_reactionsCreateWithoutCommentsInput[] | Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput[];
    connectOrCreate?: Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput | Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput[];
    createMany?: Prisma.comment_reactionsCreateManyCommentsInputEnvelope;
    connect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
};
export type comment_reactionsUpdateManyWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput> | Prisma.comment_reactionsCreateWithoutCommentsInput[] | Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput[];
    connectOrCreate?: Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput | Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput[];
    upsert?: Prisma.comment_reactionsUpsertWithWhereUniqueWithoutCommentsInput | Prisma.comment_reactionsUpsertWithWhereUniqueWithoutCommentsInput[];
    createMany?: Prisma.comment_reactionsCreateManyCommentsInputEnvelope;
    set?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    disconnect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    delete?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    connect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    update?: Prisma.comment_reactionsUpdateWithWhereUniqueWithoutCommentsInput | Prisma.comment_reactionsUpdateWithWhereUniqueWithoutCommentsInput[];
    updateMany?: Prisma.comment_reactionsUpdateManyWithWhereWithoutCommentsInput | Prisma.comment_reactionsUpdateManyWithWhereWithoutCommentsInput[];
    deleteMany?: Prisma.comment_reactionsScalarWhereInput | Prisma.comment_reactionsScalarWhereInput[];
};
export type comment_reactionsUncheckedUpdateManyWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput> | Prisma.comment_reactionsCreateWithoutCommentsInput[] | Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput[];
    connectOrCreate?: Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput | Prisma.comment_reactionsCreateOrConnectWithoutCommentsInput[];
    upsert?: Prisma.comment_reactionsUpsertWithWhereUniqueWithoutCommentsInput | Prisma.comment_reactionsUpsertWithWhereUniqueWithoutCommentsInput[];
    createMany?: Prisma.comment_reactionsCreateManyCommentsInputEnvelope;
    set?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    disconnect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    delete?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    connect?: Prisma.comment_reactionsWhereUniqueInput | Prisma.comment_reactionsWhereUniqueInput[];
    update?: Prisma.comment_reactionsUpdateWithWhereUniqueWithoutCommentsInput | Prisma.comment_reactionsUpdateWithWhereUniqueWithoutCommentsInput[];
    updateMany?: Prisma.comment_reactionsUpdateManyWithWhereWithoutCommentsInput | Prisma.comment_reactionsUpdateManyWithWhereWithoutCommentsInput[];
    deleteMany?: Prisma.comment_reactionsScalarWhereInput | Prisma.comment_reactionsScalarWhereInput[];
};
export type comment_reactionsCreateWithoutCommentsInput = {
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
};
export type comment_reactionsUncheckedCreateWithoutCommentsInput = {
    reaction_id?: number;
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
};
export type comment_reactionsCreateOrConnectWithoutCommentsInput = {
    where: Prisma.comment_reactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput>;
};
export type comment_reactionsCreateManyCommentsInputEnvelope = {
    data: Prisma.comment_reactionsCreateManyCommentsInput | Prisma.comment_reactionsCreateManyCommentsInput[];
    skipDuplicates?: boolean;
};
export type comment_reactionsUpsertWithWhereUniqueWithoutCommentsInput = {
    where: Prisma.comment_reactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.comment_reactionsUpdateWithoutCommentsInput, Prisma.comment_reactionsUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.comment_reactionsCreateWithoutCommentsInput, Prisma.comment_reactionsUncheckedCreateWithoutCommentsInput>;
};
export type comment_reactionsUpdateWithWhereUniqueWithoutCommentsInput = {
    where: Prisma.comment_reactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.comment_reactionsUpdateWithoutCommentsInput, Prisma.comment_reactionsUncheckedUpdateWithoutCommentsInput>;
};
export type comment_reactionsUpdateManyWithWhereWithoutCommentsInput = {
    where: Prisma.comment_reactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.comment_reactionsUpdateManyMutationInput, Prisma.comment_reactionsUncheckedUpdateManyWithoutCommentsInput>;
};
export type comment_reactionsScalarWhereInput = {
    AND?: Prisma.comment_reactionsScalarWhereInput | Prisma.comment_reactionsScalarWhereInput[];
    OR?: Prisma.comment_reactionsScalarWhereInput[];
    NOT?: Prisma.comment_reactionsScalarWhereInput | Prisma.comment_reactionsScalarWhereInput[];
    reaction_id?: Prisma.IntFilter<"comment_reactions"> | number;
    comment_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comment_reactions"> | number | null;
    reaction_type?: Prisma.StringNullableFilter<"comment_reactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comment_reactions"> | Date | string | null;
};
export type comment_reactionsCreateManyCommentsInput = {
    reaction_id?: number;
    user_id?: number | null;
    reaction_type?: string | null;
    created_at?: Date | string | null;
};
export type comment_reactionsUpdateWithoutCommentsInput = {
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type comment_reactionsUncheckedUpdateWithoutCommentsInput = {
    reaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type comment_reactionsUncheckedUpdateManyWithoutCommentsInput = {
    reaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    reaction_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type comment_reactionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reaction_id?: boolean;
    comment_id?: boolean;
    user_id?: boolean;
    reaction_type?: boolean;
    created_at?: boolean;
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
}, ExtArgs["result"]["comment_reactions"]>;
export type comment_reactionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reaction_id?: boolean;
    comment_id?: boolean;
    user_id?: boolean;
    reaction_type?: boolean;
    created_at?: boolean;
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
}, ExtArgs["result"]["comment_reactions"]>;
export type comment_reactionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reaction_id?: boolean;
    comment_id?: boolean;
    user_id?: boolean;
    reaction_type?: boolean;
    created_at?: boolean;
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
}, ExtArgs["result"]["comment_reactions"]>;
export type comment_reactionsSelectScalar = {
    reaction_id?: boolean;
    comment_id?: boolean;
    user_id?: boolean;
    reaction_type?: boolean;
    created_at?: boolean;
};
export type comment_reactionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"reaction_id" | "comment_id" | "user_id" | "reaction_type" | "created_at", ExtArgs["result"]["comment_reactions"]>;
export type comment_reactionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
};
export type comment_reactionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
};
export type comment_reactionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.comment_reactions$commentsArgs<ExtArgs>;
};
export type $comment_reactionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "comment_reactions";
    objects: {
        comments: Prisma.$commentsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        reaction_id: number;
        comment_id: number | null;
        user_id: number | null;
        reaction_type: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["comment_reactions"]>;
    composites: {};
};
export type comment_reactionsGetPayload<S extends boolean | null | undefined | comment_reactionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload, S>;
export type comment_reactionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<comment_reactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Comment_reactionsCountAggregateInputType | true;
};
export interface comment_reactionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['comment_reactions'];
        meta: {
            name: 'comment_reactions';
        };
    };
    findUnique<T extends comment_reactionsFindUniqueArgs>(args: Prisma.SelectSubset<T, comment_reactionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends comment_reactionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, comment_reactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends comment_reactionsFindFirstArgs>(args?: Prisma.SelectSubset<T, comment_reactionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends comment_reactionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, comment_reactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends comment_reactionsFindManyArgs>(args?: Prisma.SelectSubset<T, comment_reactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends comment_reactionsCreateArgs>(args: Prisma.SelectSubset<T, comment_reactionsCreateArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends comment_reactionsCreateManyArgs>(args?: Prisma.SelectSubset<T, comment_reactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends comment_reactionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, comment_reactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends comment_reactionsDeleteArgs>(args: Prisma.SelectSubset<T, comment_reactionsDeleteArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends comment_reactionsUpdateArgs>(args: Prisma.SelectSubset<T, comment_reactionsUpdateArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends comment_reactionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, comment_reactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends comment_reactionsUpdateManyArgs>(args: Prisma.SelectSubset<T, comment_reactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends comment_reactionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, comment_reactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends comment_reactionsUpsertArgs>(args: Prisma.SelectSubset<T, comment_reactionsUpsertArgs<ExtArgs>>): Prisma.Prisma__comment_reactionsClient<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends comment_reactionsCountArgs>(args?: Prisma.Subset<T, comment_reactionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Comment_reactionsCountAggregateOutputType> : number>;
    aggregate<T extends Comment_reactionsAggregateArgs>(args: Prisma.Subset<T, Comment_reactionsAggregateArgs>): Prisma.PrismaPromise<GetComment_reactionsAggregateType<T>>;
    groupBy<T extends comment_reactionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: comment_reactionsGroupByArgs['orderBy'];
    } : {
        orderBy?: comment_reactionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, comment_reactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComment_reactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: comment_reactionsFieldRefs;
}
export interface Prisma__comment_reactionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends Prisma.comment_reactions$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.comment_reactions$commentsArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface comment_reactionsFieldRefs {
    readonly reaction_id: Prisma.FieldRef<"comment_reactions", 'Int'>;
    readonly comment_id: Prisma.FieldRef<"comment_reactions", 'Int'>;
    readonly user_id: Prisma.FieldRef<"comment_reactions", 'Int'>;
    readonly reaction_type: Prisma.FieldRef<"comment_reactions", 'String'>;
    readonly created_at: Prisma.FieldRef<"comment_reactions", 'DateTime'>;
}
export type comment_reactionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where: Prisma.comment_reactionsWhereUniqueInput;
};
export type comment_reactionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where: Prisma.comment_reactionsWhereUniqueInput;
};
export type comment_reactionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where?: Prisma.comment_reactionsWhereInput;
    orderBy?: Prisma.comment_reactionsOrderByWithRelationInput | Prisma.comment_reactionsOrderByWithRelationInput[];
    cursor?: Prisma.comment_reactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Comment_reactionsScalarFieldEnum | Prisma.Comment_reactionsScalarFieldEnum[];
};
export type comment_reactionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where?: Prisma.comment_reactionsWhereInput;
    orderBy?: Prisma.comment_reactionsOrderByWithRelationInput | Prisma.comment_reactionsOrderByWithRelationInput[];
    cursor?: Prisma.comment_reactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Comment_reactionsScalarFieldEnum | Prisma.Comment_reactionsScalarFieldEnum[];
};
export type comment_reactionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where?: Prisma.comment_reactionsWhereInput;
    orderBy?: Prisma.comment_reactionsOrderByWithRelationInput | Prisma.comment_reactionsOrderByWithRelationInput[];
    cursor?: Prisma.comment_reactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Comment_reactionsScalarFieldEnum | Prisma.Comment_reactionsScalarFieldEnum[];
};
export type comment_reactionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.comment_reactionsCreateInput, Prisma.comment_reactionsUncheckedCreateInput>;
};
export type comment_reactionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.comment_reactionsCreateManyInput | Prisma.comment_reactionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type comment_reactionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    data: Prisma.comment_reactionsCreateManyInput | Prisma.comment_reactionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.comment_reactionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type comment_reactionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.comment_reactionsUpdateInput, Prisma.comment_reactionsUncheckedUpdateInput>;
    where: Prisma.comment_reactionsWhereUniqueInput;
};
export type comment_reactionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.comment_reactionsUpdateManyMutationInput, Prisma.comment_reactionsUncheckedUpdateManyInput>;
    where?: Prisma.comment_reactionsWhereInput;
    limit?: number;
};
export type comment_reactionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.comment_reactionsUpdateManyMutationInput, Prisma.comment_reactionsUncheckedUpdateManyInput>;
    where?: Prisma.comment_reactionsWhereInput;
    limit?: number;
    include?: Prisma.comment_reactionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type comment_reactionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where: Prisma.comment_reactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.comment_reactionsCreateInput, Prisma.comment_reactionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.comment_reactionsUpdateInput, Prisma.comment_reactionsUncheckedUpdateInput>;
};
export type comment_reactionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
    where: Prisma.comment_reactionsWhereUniqueInput;
};
export type comment_reactionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.comment_reactionsWhereInput;
    limit?: number;
};
export type comment_reactions$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where?: Prisma.commentsWhereInput;
};
export type comment_reactionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.comment_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.comment_reactionsOmit<ExtArgs> | null;
    include?: Prisma.comment_reactionsInclude<ExtArgs> | null;
};
export {};
