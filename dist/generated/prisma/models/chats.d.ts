import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type chatsModel = runtime.Types.Result.DefaultSelection<Prisma.$chatsPayload>;
export type AggregateChats = {
    _count: ChatsCountAggregateOutputType | null;
    _avg: ChatsAvgAggregateOutputType | null;
    _sum: ChatsSumAggregateOutputType | null;
    _min: ChatsMinAggregateOutputType | null;
    _max: ChatsMaxAggregateOutputType | null;
};
export type ChatsAvgAggregateOutputType = {
    chat_id: number | null;
    user_id: number | null;
};
export type ChatsSumAggregateOutputType = {
    chat_id: number | null;
    user_id: number | null;
};
export type ChatsMinAggregateOutputType = {
    chat_id: number | null;
    user_id: number | null;
    sender: string | null;
    message: string | null;
    created_at: Date | null;
};
export type ChatsMaxAggregateOutputType = {
    chat_id: number | null;
    user_id: number | null;
    sender: string | null;
    message: string | null;
    created_at: Date | null;
};
export type ChatsCountAggregateOutputType = {
    chat_id: number;
    user_id: number;
    sender: number;
    message: number;
    created_at: number;
    _all: number;
};
export type ChatsAvgAggregateInputType = {
    chat_id?: true;
    user_id?: true;
};
export type ChatsSumAggregateInputType = {
    chat_id?: true;
    user_id?: true;
};
export type ChatsMinAggregateInputType = {
    chat_id?: true;
    user_id?: true;
    sender?: true;
    message?: true;
    created_at?: true;
};
export type ChatsMaxAggregateInputType = {
    chat_id?: true;
    user_id?: true;
    sender?: true;
    message?: true;
    created_at?: true;
};
export type ChatsCountAggregateInputType = {
    chat_id?: true;
    user_id?: true;
    sender?: true;
    message?: true;
    created_at?: true;
    _all?: true;
};
export type ChatsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chatsWhereInput;
    orderBy?: Prisma.chatsOrderByWithRelationInput | Prisma.chatsOrderByWithRelationInput[];
    cursor?: Prisma.chatsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChatsCountAggregateInputType;
    _avg?: ChatsAvgAggregateInputType;
    _sum?: ChatsSumAggregateInputType;
    _min?: ChatsMinAggregateInputType;
    _max?: ChatsMaxAggregateInputType;
};
export type GetChatsAggregateType<T extends ChatsAggregateArgs> = {
    [P in keyof T & keyof AggregateChats]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChats[P]> : Prisma.GetScalarType<T[P], AggregateChats[P]>;
};
export type chatsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chatsWhereInput;
    orderBy?: Prisma.chatsOrderByWithAggregationInput | Prisma.chatsOrderByWithAggregationInput[];
    by: Prisma.ChatsScalarFieldEnum[] | Prisma.ChatsScalarFieldEnum;
    having?: Prisma.chatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatsCountAggregateInputType | true;
    _avg?: ChatsAvgAggregateInputType;
    _sum?: ChatsSumAggregateInputType;
    _min?: ChatsMinAggregateInputType;
    _max?: ChatsMaxAggregateInputType;
};
export type ChatsGroupByOutputType = {
    chat_id: number;
    user_id: number | null;
    sender: string | null;
    message: string;
    created_at: Date | null;
    _count: ChatsCountAggregateOutputType | null;
    _avg: ChatsAvgAggregateOutputType | null;
    _sum: ChatsSumAggregateOutputType | null;
    _min: ChatsMinAggregateOutputType | null;
    _max: ChatsMaxAggregateOutputType | null;
};
type GetChatsGroupByPayload<T extends chatsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatsGroupByOutputType[P]>;
}>>;
export type chatsWhereInput = {
    AND?: Prisma.chatsWhereInput | Prisma.chatsWhereInput[];
    OR?: Prisma.chatsWhereInput[];
    NOT?: Prisma.chatsWhereInput | Prisma.chatsWhereInput[];
    chat_id?: Prisma.IntFilter<"chats"> | number;
    user_id?: Prisma.IntNullableFilter<"chats"> | number | null;
    sender?: Prisma.StringNullableFilter<"chats"> | string | null;
    message?: Prisma.StringFilter<"chats"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"chats"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type chatsOrderByWithRelationInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sender?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type chatsWhereUniqueInput = Prisma.AtLeast<{
    chat_id?: number;
    AND?: Prisma.chatsWhereInput | Prisma.chatsWhereInput[];
    OR?: Prisma.chatsWhereInput[];
    NOT?: Prisma.chatsWhereInput | Prisma.chatsWhereInput[];
    user_id?: Prisma.IntNullableFilter<"chats"> | number | null;
    sender?: Prisma.StringNullableFilter<"chats"> | string | null;
    message?: Prisma.StringFilter<"chats"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"chats"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "chat_id">;
export type chatsOrderByWithAggregationInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sender?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.chatsCountOrderByAggregateInput;
    _avg?: Prisma.chatsAvgOrderByAggregateInput;
    _max?: Prisma.chatsMaxOrderByAggregateInput;
    _min?: Prisma.chatsMinOrderByAggregateInput;
    _sum?: Prisma.chatsSumOrderByAggregateInput;
};
export type chatsScalarWhereWithAggregatesInput = {
    AND?: Prisma.chatsScalarWhereWithAggregatesInput | Prisma.chatsScalarWhereWithAggregatesInput[];
    OR?: Prisma.chatsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.chatsScalarWhereWithAggregatesInput | Prisma.chatsScalarWhereWithAggregatesInput[];
    chat_id?: Prisma.IntWithAggregatesFilter<"chats"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"chats"> | number | null;
    sender?: Prisma.StringNullableWithAggregatesFilter<"chats"> | string | null;
    message?: Prisma.StringWithAggregatesFilter<"chats"> | string;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"chats"> | Date | string | null;
};
export type chatsCreateInput = {
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutChatsInput;
};
export type chatsUncheckedCreateInput = {
    chat_id?: number;
    user_id?: number | null;
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
};
export type chatsUpdateInput = {
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutChatsNestedInput;
};
export type chatsUncheckedUpdateInput = {
    chat_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsCreateManyInput = {
    chat_id?: number;
    user_id?: number | null;
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
};
export type chatsUpdateManyMutationInput = {
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsUncheckedUpdateManyInput = {
    chat_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsCountOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chatsAvgOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type chatsMaxOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chatsMinOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type chatsSumOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type ChatsListRelationFilter = {
    every?: Prisma.chatsWhereInput;
    some?: Prisma.chatsWhereInput;
    none?: Prisma.chatsWhereInput;
};
export type chatsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type chatsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput> | Prisma.chatsCreateWithoutUsersInput[] | Prisma.chatsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.chatsCreateOrConnectWithoutUsersInput | Prisma.chatsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.chatsCreateManyUsersInputEnvelope;
    connect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
};
export type chatsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput> | Prisma.chatsCreateWithoutUsersInput[] | Prisma.chatsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.chatsCreateOrConnectWithoutUsersInput | Prisma.chatsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.chatsCreateManyUsersInputEnvelope;
    connect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
};
export type chatsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput> | Prisma.chatsCreateWithoutUsersInput[] | Prisma.chatsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.chatsCreateOrConnectWithoutUsersInput | Prisma.chatsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.chatsUpsertWithWhereUniqueWithoutUsersInput | Prisma.chatsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.chatsCreateManyUsersInputEnvelope;
    set?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    disconnect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    delete?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    connect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    update?: Prisma.chatsUpdateWithWhereUniqueWithoutUsersInput | Prisma.chatsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.chatsUpdateManyWithWhereWithoutUsersInput | Prisma.chatsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.chatsScalarWhereInput | Prisma.chatsScalarWhereInput[];
};
export type chatsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput> | Prisma.chatsCreateWithoutUsersInput[] | Prisma.chatsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.chatsCreateOrConnectWithoutUsersInput | Prisma.chatsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.chatsUpsertWithWhereUniqueWithoutUsersInput | Prisma.chatsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.chatsCreateManyUsersInputEnvelope;
    set?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    disconnect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    delete?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    connect?: Prisma.chatsWhereUniqueInput | Prisma.chatsWhereUniqueInput[];
    update?: Prisma.chatsUpdateWithWhereUniqueWithoutUsersInput | Prisma.chatsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.chatsUpdateManyWithWhereWithoutUsersInput | Prisma.chatsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.chatsScalarWhereInput | Prisma.chatsScalarWhereInput[];
};
export type chatsCreateWithoutUsersInput = {
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
};
export type chatsUncheckedCreateWithoutUsersInput = {
    chat_id?: number;
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
};
export type chatsCreateOrConnectWithoutUsersInput = {
    where: Prisma.chatsWhereUniqueInput;
    create: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput>;
};
export type chatsCreateManyUsersInputEnvelope = {
    data: Prisma.chatsCreateManyUsersInput | Prisma.chatsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type chatsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.chatsWhereUniqueInput;
    update: Prisma.XOR<Prisma.chatsUpdateWithoutUsersInput, Prisma.chatsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.chatsCreateWithoutUsersInput, Prisma.chatsUncheckedCreateWithoutUsersInput>;
};
export type chatsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.chatsWhereUniqueInput;
    data: Prisma.XOR<Prisma.chatsUpdateWithoutUsersInput, Prisma.chatsUncheckedUpdateWithoutUsersInput>;
};
export type chatsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.chatsScalarWhereInput;
    data: Prisma.XOR<Prisma.chatsUpdateManyMutationInput, Prisma.chatsUncheckedUpdateManyWithoutUsersInput>;
};
export type chatsScalarWhereInput = {
    AND?: Prisma.chatsScalarWhereInput | Prisma.chatsScalarWhereInput[];
    OR?: Prisma.chatsScalarWhereInput[];
    NOT?: Prisma.chatsScalarWhereInput | Prisma.chatsScalarWhereInput[];
    chat_id?: Prisma.IntFilter<"chats"> | number;
    user_id?: Prisma.IntNullableFilter<"chats"> | number | null;
    sender?: Prisma.StringNullableFilter<"chats"> | string | null;
    message?: Prisma.StringFilter<"chats"> | string;
    created_at?: Prisma.DateTimeNullableFilter<"chats"> | Date | string | null;
};
export type chatsCreateManyUsersInput = {
    chat_id?: number;
    sender?: string | null;
    message: string;
    created_at?: Date | string | null;
};
export type chatsUpdateWithoutUsersInput = {
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsUncheckedUpdateWithoutUsersInput = {
    chat_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsUncheckedUpdateManyWithoutUsersInput = {
    chat_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type chatsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    user_id?: boolean;
    sender?: boolean;
    message?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
}, ExtArgs["result"]["chats"]>;
export type chatsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    user_id?: boolean;
    sender?: boolean;
    message?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
}, ExtArgs["result"]["chats"]>;
export type chatsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    user_id?: boolean;
    sender?: boolean;
    message?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
}, ExtArgs["result"]["chats"]>;
export type chatsSelectScalar = {
    chat_id?: boolean;
    user_id?: boolean;
    sender?: boolean;
    message?: boolean;
    created_at?: boolean;
};
export type chatsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"chat_id" | "user_id" | "sender" | "message" | "created_at", ExtArgs["result"]["chats"]>;
export type chatsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
};
export type chatsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
};
export type chatsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.chats$usersArgs<ExtArgs>;
};
export type $chatsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "chats";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        chat_id: number;
        user_id: number | null;
        sender: string | null;
        message: string;
        created_at: Date | null;
    }, ExtArgs["result"]["chats"]>;
    composites: {};
};
export type chatsGetPayload<S extends boolean | null | undefined | chatsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$chatsPayload, S>;
export type chatsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<chatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatsCountAggregateInputType | true;
};
export interface chatsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['chats'];
        meta: {
            name: 'chats';
        };
    };
    findUnique<T extends chatsFindUniqueArgs>(args: Prisma.SelectSubset<T, chatsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends chatsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, chatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends chatsFindFirstArgs>(args?: Prisma.SelectSubset<T, chatsFindFirstArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends chatsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, chatsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends chatsFindManyArgs>(args?: Prisma.SelectSubset<T, chatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends chatsCreateArgs>(args: Prisma.SelectSubset<T, chatsCreateArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends chatsCreateManyArgs>(args?: Prisma.SelectSubset<T, chatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends chatsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, chatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends chatsDeleteArgs>(args: Prisma.SelectSubset<T, chatsDeleteArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends chatsUpdateArgs>(args: Prisma.SelectSubset<T, chatsUpdateArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends chatsDeleteManyArgs>(args?: Prisma.SelectSubset<T, chatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends chatsUpdateManyArgs>(args: Prisma.SelectSubset<T, chatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends chatsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, chatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends chatsUpsertArgs>(args: Prisma.SelectSubset<T, chatsUpsertArgs<ExtArgs>>): Prisma.Prisma__chatsClient<runtime.Types.Result.GetResult<Prisma.$chatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends chatsCountArgs>(args?: Prisma.Subset<T, chatsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatsCountAggregateOutputType> : number>;
    aggregate<T extends ChatsAggregateArgs>(args: Prisma.Subset<T, ChatsAggregateArgs>): Prisma.PrismaPromise<GetChatsAggregateType<T>>;
    groupBy<T extends chatsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: chatsGroupByArgs['orderBy'];
    } : {
        orderBy?: chatsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, chatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: chatsFieldRefs;
}
export interface Prisma__chatsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.chats$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.chats$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface chatsFieldRefs {
    readonly chat_id: Prisma.FieldRef<"chats", 'Int'>;
    readonly user_id: Prisma.FieldRef<"chats", 'Int'>;
    readonly sender: Prisma.FieldRef<"chats", 'String'>;
    readonly message: Prisma.FieldRef<"chats", 'String'>;
    readonly created_at: Prisma.FieldRef<"chats", 'DateTime'>;
}
export type chatsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where: Prisma.chatsWhereUniqueInput;
};
export type chatsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where: Prisma.chatsWhereUniqueInput;
};
export type chatsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where?: Prisma.chatsWhereInput;
    orderBy?: Prisma.chatsOrderByWithRelationInput | Prisma.chatsOrderByWithRelationInput[];
    cursor?: Prisma.chatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatsScalarFieldEnum | Prisma.ChatsScalarFieldEnum[];
};
export type chatsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where?: Prisma.chatsWhereInput;
    orderBy?: Prisma.chatsOrderByWithRelationInput | Prisma.chatsOrderByWithRelationInput[];
    cursor?: Prisma.chatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatsScalarFieldEnum | Prisma.ChatsScalarFieldEnum[];
};
export type chatsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where?: Prisma.chatsWhereInput;
    orderBy?: Prisma.chatsOrderByWithRelationInput | Prisma.chatsOrderByWithRelationInput[];
    cursor?: Prisma.chatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatsScalarFieldEnum | Prisma.ChatsScalarFieldEnum[];
};
export type chatsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chatsCreateInput, Prisma.chatsUncheckedCreateInput>;
};
export type chatsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.chatsCreateManyInput | Prisma.chatsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type chatsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    data: Prisma.chatsCreateManyInput | Prisma.chatsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.chatsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type chatsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chatsUpdateInput, Prisma.chatsUncheckedUpdateInput>;
    where: Prisma.chatsWhereUniqueInput;
};
export type chatsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.chatsUpdateManyMutationInput, Prisma.chatsUncheckedUpdateManyInput>;
    where?: Prisma.chatsWhereInput;
    limit?: number;
};
export type chatsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.chatsUpdateManyMutationInput, Prisma.chatsUncheckedUpdateManyInput>;
    where?: Prisma.chatsWhereInput;
    limit?: number;
    include?: Prisma.chatsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type chatsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where: Prisma.chatsWhereUniqueInput;
    create: Prisma.XOR<Prisma.chatsCreateInput, Prisma.chatsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.chatsUpdateInput, Prisma.chatsUncheckedUpdateInput>;
};
export type chatsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
    where: Prisma.chatsWhereUniqueInput;
};
export type chatsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.chatsWhereInput;
    limit?: number;
};
export type chats$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type chatsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.chatsSelect<ExtArgs> | null;
    omit?: Prisma.chatsOmit<ExtArgs> | null;
    include?: Prisma.chatsInclude<ExtArgs> | null;
};
export {};
