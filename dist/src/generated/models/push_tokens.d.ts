import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type push_tokensModel = runtime.Types.Result.DefaultSelection<Prisma.$push_tokensPayload>;
export type AggregatePush_tokens = {
    _count: Push_tokensCountAggregateOutputType | null;
    _avg: Push_tokensAvgAggregateOutputType | null;
    _sum: Push_tokensSumAggregateOutputType | null;
    _min: Push_tokensMinAggregateOutputType | null;
    _max: Push_tokensMaxAggregateOutputType | null;
};
export type Push_tokensAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type Push_tokensSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
};
export type Push_tokensMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    device_token: string | null;
    platform: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Push_tokensMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    device_token: string | null;
    platform: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Push_tokensCountAggregateOutputType = {
    id: number;
    user_id: number;
    device_token: number;
    platform: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Push_tokensAvgAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Push_tokensSumAggregateInputType = {
    id?: true;
    user_id?: true;
};
export type Push_tokensMinAggregateInputType = {
    id?: true;
    user_id?: true;
    device_token?: true;
    platform?: true;
    is_active?: true;
    created_at?: true;
};
export type Push_tokensMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    device_token?: true;
    platform?: true;
    is_active?: true;
    created_at?: true;
};
export type Push_tokensCountAggregateInputType = {
    id?: true;
    user_id?: true;
    device_token?: true;
    platform?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Push_tokensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.push_tokensWhereInput;
    orderBy?: Prisma.push_tokensOrderByWithRelationInput | Prisma.push_tokensOrderByWithRelationInput[];
    cursor?: Prisma.push_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Push_tokensCountAggregateInputType;
    _avg?: Push_tokensAvgAggregateInputType;
    _sum?: Push_tokensSumAggregateInputType;
    _min?: Push_tokensMinAggregateInputType;
    _max?: Push_tokensMaxAggregateInputType;
};
export type GetPush_tokensAggregateType<T extends Push_tokensAggregateArgs> = {
    [P in keyof T & keyof AggregatePush_tokens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePush_tokens[P]> : Prisma.GetScalarType<T[P], AggregatePush_tokens[P]>;
};
export type push_tokensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.push_tokensWhereInput;
    orderBy?: Prisma.push_tokensOrderByWithAggregationInput | Prisma.push_tokensOrderByWithAggregationInput[];
    by: Prisma.Push_tokensScalarFieldEnum[] | Prisma.Push_tokensScalarFieldEnum;
    having?: Prisma.push_tokensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Push_tokensCountAggregateInputType | true;
    _avg?: Push_tokensAvgAggregateInputType;
    _sum?: Push_tokensSumAggregateInputType;
    _min?: Push_tokensMinAggregateInputType;
    _max?: Push_tokensMaxAggregateInputType;
};
export type Push_tokensGroupByOutputType = {
    id: number;
    user_id: number;
    device_token: string;
    platform: string;
    is_active: boolean | null;
    created_at: Date | null;
    _count: Push_tokensCountAggregateOutputType | null;
    _avg: Push_tokensAvgAggregateOutputType | null;
    _sum: Push_tokensSumAggregateOutputType | null;
    _min: Push_tokensMinAggregateOutputType | null;
    _max: Push_tokensMaxAggregateOutputType | null;
};
type GetPush_tokensGroupByPayload<T extends push_tokensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Push_tokensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Push_tokensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Push_tokensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Push_tokensGroupByOutputType[P]>;
}>>;
export type push_tokensWhereInput = {
    AND?: Prisma.push_tokensWhereInput | Prisma.push_tokensWhereInput[];
    OR?: Prisma.push_tokensWhereInput[];
    NOT?: Prisma.push_tokensWhereInput | Prisma.push_tokensWhereInput[];
    id?: Prisma.IntFilter<"push_tokens"> | number;
    user_id?: Prisma.IntFilter<"push_tokens"> | number;
    device_token?: Prisma.StringFilter<"push_tokens"> | string;
    platform?: Prisma.StringFilter<"push_tokens"> | string;
    is_active?: Prisma.BoolNullableFilter<"push_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"push_tokens"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type push_tokensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.usersOrderByWithRelationInput;
};
export type push_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.push_tokensWhereInput | Prisma.push_tokensWhereInput[];
    OR?: Prisma.push_tokensWhereInput[];
    NOT?: Prisma.push_tokensWhereInput | Prisma.push_tokensWhereInput[];
    user_id?: Prisma.IntFilter<"push_tokens"> | number;
    device_token?: Prisma.StringFilter<"push_tokens"> | string;
    platform?: Prisma.StringFilter<"push_tokens"> | string;
    is_active?: Prisma.BoolNullableFilter<"push_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"push_tokens"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type push_tokensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.push_tokensCountOrderByAggregateInput;
    _avg?: Prisma.push_tokensAvgOrderByAggregateInput;
    _max?: Prisma.push_tokensMaxOrderByAggregateInput;
    _min?: Prisma.push_tokensMinOrderByAggregateInput;
    _sum?: Prisma.push_tokensSumOrderByAggregateInput;
};
export type push_tokensScalarWhereWithAggregatesInput = {
    AND?: Prisma.push_tokensScalarWhereWithAggregatesInput | Prisma.push_tokensScalarWhereWithAggregatesInput[];
    OR?: Prisma.push_tokensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.push_tokensScalarWhereWithAggregatesInput | Prisma.push_tokensScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"push_tokens"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"push_tokens"> | number;
    device_token?: Prisma.StringWithAggregatesFilter<"push_tokens"> | string;
    platform?: Prisma.StringWithAggregatesFilter<"push_tokens"> | string;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"push_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"push_tokens"> | Date | string | null;
};
export type push_tokensCreateInput = {
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    user: Prisma.usersCreateNestedOneWithoutPush_tokensInput;
};
export type push_tokensUncheckedCreateInput = {
    id?: number;
    user_id: number;
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type push_tokensUpdateInput = {
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.usersUpdateOneRequiredWithoutPush_tokensNestedInput;
};
export type push_tokensUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type push_tokensCreateManyInput = {
    id?: number;
    user_id: number;
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type push_tokensUpdateManyMutationInput = {
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type push_tokensUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Push_tokensListRelationFilter = {
    every?: Prisma.push_tokensWhereInput;
    some?: Prisma.push_tokensWhereInput;
    none?: Prisma.push_tokensWhereInput;
};
export type push_tokensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type push_tokensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type push_tokensAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type push_tokensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type push_tokensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    device_token?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type push_tokensSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type push_tokensCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput> | Prisma.push_tokensCreateWithoutUserInput[] | Prisma.push_tokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.push_tokensCreateOrConnectWithoutUserInput | Prisma.push_tokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.push_tokensCreateManyUserInputEnvelope;
    connect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
};
export type push_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput> | Prisma.push_tokensCreateWithoutUserInput[] | Prisma.push_tokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.push_tokensCreateOrConnectWithoutUserInput | Prisma.push_tokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.push_tokensCreateManyUserInputEnvelope;
    connect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
};
export type push_tokensUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput> | Prisma.push_tokensCreateWithoutUserInput[] | Prisma.push_tokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.push_tokensCreateOrConnectWithoutUserInput | Prisma.push_tokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.push_tokensUpsertWithWhereUniqueWithoutUserInput | Prisma.push_tokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.push_tokensCreateManyUserInputEnvelope;
    set?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    disconnect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    delete?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    connect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    update?: Prisma.push_tokensUpdateWithWhereUniqueWithoutUserInput | Prisma.push_tokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.push_tokensUpdateManyWithWhereWithoutUserInput | Prisma.push_tokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.push_tokensScalarWhereInput | Prisma.push_tokensScalarWhereInput[];
};
export type push_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput> | Prisma.push_tokensCreateWithoutUserInput[] | Prisma.push_tokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.push_tokensCreateOrConnectWithoutUserInput | Prisma.push_tokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.push_tokensUpsertWithWhereUniqueWithoutUserInput | Prisma.push_tokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.push_tokensCreateManyUserInputEnvelope;
    set?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    disconnect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    delete?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    connect?: Prisma.push_tokensWhereUniqueInput | Prisma.push_tokensWhereUniqueInput[];
    update?: Prisma.push_tokensUpdateWithWhereUniqueWithoutUserInput | Prisma.push_tokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.push_tokensUpdateManyWithWhereWithoutUserInput | Prisma.push_tokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.push_tokensScalarWhereInput | Prisma.push_tokensScalarWhereInput[];
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type push_tokensCreateWithoutUserInput = {
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type push_tokensUncheckedCreateWithoutUserInput = {
    id?: number;
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type push_tokensCreateOrConnectWithoutUserInput = {
    where: Prisma.push_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput>;
};
export type push_tokensCreateManyUserInputEnvelope = {
    data: Prisma.push_tokensCreateManyUserInput | Prisma.push_tokensCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type push_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.push_tokensWhereUniqueInput;
    update: Prisma.XOR<Prisma.push_tokensUpdateWithoutUserInput, Prisma.push_tokensUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.push_tokensCreateWithoutUserInput, Prisma.push_tokensUncheckedCreateWithoutUserInput>;
};
export type push_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.push_tokensWhereUniqueInput;
    data: Prisma.XOR<Prisma.push_tokensUpdateWithoutUserInput, Prisma.push_tokensUncheckedUpdateWithoutUserInput>;
};
export type push_tokensUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.push_tokensScalarWhereInput;
    data: Prisma.XOR<Prisma.push_tokensUpdateManyMutationInput, Prisma.push_tokensUncheckedUpdateManyWithoutUserInput>;
};
export type push_tokensScalarWhereInput = {
    AND?: Prisma.push_tokensScalarWhereInput | Prisma.push_tokensScalarWhereInput[];
    OR?: Prisma.push_tokensScalarWhereInput[];
    NOT?: Prisma.push_tokensScalarWhereInput | Prisma.push_tokensScalarWhereInput[];
    id?: Prisma.IntFilter<"push_tokens"> | number;
    user_id?: Prisma.IntFilter<"push_tokens"> | number;
    device_token?: Prisma.StringFilter<"push_tokens"> | string;
    platform?: Prisma.StringFilter<"push_tokens"> | string;
    is_active?: Prisma.BoolNullableFilter<"push_tokens"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"push_tokens"> | Date | string | null;
};
export type push_tokensCreateManyUserInput = {
    id?: number;
    device_token: string;
    platform: string;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type push_tokensUpdateWithoutUserInput = {
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type push_tokensUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type push_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    device_token?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type push_tokensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    device_token?: boolean;
    platform?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["push_tokens"]>;
export type push_tokensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    device_token?: boolean;
    platform?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["push_tokens"]>;
export type push_tokensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    device_token?: boolean;
    platform?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["push_tokens"]>;
export type push_tokensSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    device_token?: boolean;
    platform?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type push_tokensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "device_token" | "platform" | "is_active" | "created_at", ExtArgs["result"]["push_tokens"]>;
export type push_tokensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type push_tokensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type push_tokensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $push_tokensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "push_tokens";
    objects: {
        user: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number;
        device_token: string;
        platform: string;
        is_active: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["push_tokens"]>;
    composites: {};
};
export type push_tokensGetPayload<S extends boolean | null | undefined | push_tokensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$push_tokensPayload, S>;
export type push_tokensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<push_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Push_tokensCountAggregateInputType | true;
};
export interface push_tokensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['push_tokens'];
        meta: {
            name: 'push_tokens';
        };
    };
    findUnique<T extends push_tokensFindUniqueArgs>(args: Prisma.SelectSubset<T, push_tokensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends push_tokensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, push_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends push_tokensFindFirstArgs>(args?: Prisma.SelectSubset<T, push_tokensFindFirstArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends push_tokensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, push_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends push_tokensFindManyArgs>(args?: Prisma.SelectSubset<T, push_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends push_tokensCreateArgs>(args: Prisma.SelectSubset<T, push_tokensCreateArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends push_tokensCreateManyArgs>(args?: Prisma.SelectSubset<T, push_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends push_tokensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, push_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends push_tokensDeleteArgs>(args: Prisma.SelectSubset<T, push_tokensDeleteArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends push_tokensUpdateArgs>(args: Prisma.SelectSubset<T, push_tokensUpdateArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends push_tokensDeleteManyArgs>(args?: Prisma.SelectSubset<T, push_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends push_tokensUpdateManyArgs>(args: Prisma.SelectSubset<T, push_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends push_tokensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, push_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends push_tokensUpsertArgs>(args: Prisma.SelectSubset<T, push_tokensUpsertArgs<ExtArgs>>): Prisma.Prisma__push_tokensClient<runtime.Types.Result.GetResult<Prisma.$push_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends push_tokensCountArgs>(args?: Prisma.Subset<T, push_tokensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Push_tokensCountAggregateOutputType> : number>;
    aggregate<T extends Push_tokensAggregateArgs>(args: Prisma.Subset<T, Push_tokensAggregateArgs>): Prisma.PrismaPromise<GetPush_tokensAggregateType<T>>;
    groupBy<T extends push_tokensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: push_tokensGroupByArgs['orderBy'];
    } : {
        orderBy?: push_tokensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, push_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPush_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: push_tokensFieldRefs;
}
export interface Prisma__push_tokensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface push_tokensFieldRefs {
    readonly id: Prisma.FieldRef<"push_tokens", 'Int'>;
    readonly user_id: Prisma.FieldRef<"push_tokens", 'Int'>;
    readonly device_token: Prisma.FieldRef<"push_tokens", 'String'>;
    readonly platform: Prisma.FieldRef<"push_tokens", 'String'>;
    readonly is_active: Prisma.FieldRef<"push_tokens", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"push_tokens", 'DateTime'>;
}
export type push_tokensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where: Prisma.push_tokensWhereUniqueInput;
};
export type push_tokensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where: Prisma.push_tokensWhereUniqueInput;
};
export type push_tokensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where?: Prisma.push_tokensWhereInput;
    orderBy?: Prisma.push_tokensOrderByWithRelationInput | Prisma.push_tokensOrderByWithRelationInput[];
    cursor?: Prisma.push_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Push_tokensScalarFieldEnum | Prisma.Push_tokensScalarFieldEnum[];
};
export type push_tokensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where?: Prisma.push_tokensWhereInput;
    orderBy?: Prisma.push_tokensOrderByWithRelationInput | Prisma.push_tokensOrderByWithRelationInput[];
    cursor?: Prisma.push_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Push_tokensScalarFieldEnum | Prisma.Push_tokensScalarFieldEnum[];
};
export type push_tokensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where?: Prisma.push_tokensWhereInput;
    orderBy?: Prisma.push_tokensOrderByWithRelationInput | Prisma.push_tokensOrderByWithRelationInput[];
    cursor?: Prisma.push_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Push_tokensScalarFieldEnum | Prisma.Push_tokensScalarFieldEnum[];
};
export type push_tokensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.push_tokensCreateInput, Prisma.push_tokensUncheckedCreateInput>;
};
export type push_tokensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.push_tokensCreateManyInput | Prisma.push_tokensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type push_tokensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    data: Prisma.push_tokensCreateManyInput | Prisma.push_tokensCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.push_tokensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type push_tokensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.push_tokensUpdateInput, Prisma.push_tokensUncheckedUpdateInput>;
    where: Prisma.push_tokensWhereUniqueInput;
};
export type push_tokensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.push_tokensUpdateManyMutationInput, Prisma.push_tokensUncheckedUpdateManyInput>;
    where?: Prisma.push_tokensWhereInput;
    limit?: number;
};
export type push_tokensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.push_tokensUpdateManyMutationInput, Prisma.push_tokensUncheckedUpdateManyInput>;
    where?: Prisma.push_tokensWhereInput;
    limit?: number;
    include?: Prisma.push_tokensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type push_tokensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where: Prisma.push_tokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.push_tokensCreateInput, Prisma.push_tokensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.push_tokensUpdateInput, Prisma.push_tokensUncheckedUpdateInput>;
};
export type push_tokensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
    where: Prisma.push_tokensWhereUniqueInput;
};
export type push_tokensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.push_tokensWhereInput;
    limit?: number;
};
export type push_tokensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.push_tokensSelect<ExtArgs> | null;
    omit?: Prisma.push_tokensOmit<ExtArgs> | null;
    include?: Prisma.push_tokensInclude<ExtArgs> | null;
};
export {};
