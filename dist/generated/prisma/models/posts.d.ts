import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type postsModel = runtime.Types.Result.DefaultSelection<Prisma.$postsPayload>;
export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null;
    _avg: PostsAvgAggregateOutputType | null;
    _sum: PostsSumAggregateOutputType | null;
    _min: PostsMinAggregateOutputType | null;
    _max: PostsMaxAggregateOutputType | null;
};
export type PostsAvgAggregateOutputType = {
    post_id: number | null;
    user_id: number | null;
};
export type PostsSumAggregateOutputType = {
    post_id: number | null;
    user_id: number | null;
};
export type PostsMinAggregateOutputType = {
    post_id: number | null;
    user_id: number | null;
    title: string | null;
    content: string | null;
    media_url: string | null;
    media_type: string | null;
    category: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
};
export type PostsMaxAggregateOutputType = {
    post_id: number | null;
    user_id: number | null;
    title: string | null;
    content: string | null;
    media_url: string | null;
    media_type: string | null;
    category: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
};
export type PostsCountAggregateOutputType = {
    post_id: number;
    user_id: number;
    title: number;
    content: number;
    media_url: number;
    media_type: number;
    category: number;
    created_at: number;
    updated_at: number;
    status: number;
    _all: number;
};
export type PostsAvgAggregateInputType = {
    post_id?: true;
    user_id?: true;
};
export type PostsSumAggregateInputType = {
    post_id?: true;
    user_id?: true;
};
export type PostsMinAggregateInputType = {
    post_id?: true;
    user_id?: true;
    title?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    category?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
};
export type PostsMaxAggregateInputType = {
    post_id?: true;
    user_id?: true;
    title?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    category?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
};
export type PostsCountAggregateInputType = {
    post_id?: true;
    user_id?: true;
    title?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    category?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
    _all?: true;
};
export type PostsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PostsCountAggregateInputType;
    _avg?: PostsAvgAggregateInputType;
    _sum?: PostsSumAggregateInputType;
    _min?: PostsMinAggregateInputType;
    _max?: PostsMaxAggregateInputType;
};
export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
    [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePosts[P]> : Prisma.GetScalarType<T[P], AggregatePosts[P]>;
};
export type postsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithAggregationInput | Prisma.postsOrderByWithAggregationInput[];
    by: Prisma.PostsScalarFieldEnum[] | Prisma.PostsScalarFieldEnum;
    having?: Prisma.postsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostsCountAggregateInputType | true;
    _avg?: PostsAvgAggregateInputType;
    _sum?: PostsSumAggregateInputType;
    _min?: PostsMinAggregateInputType;
    _max?: PostsMaxAggregateInputType;
};
export type PostsGroupByOutputType = {
    post_id: number;
    user_id: number | null;
    title: string;
    content: string;
    media_url: string | null;
    media_type: string | null;
    category: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
    _count: PostsCountAggregateOutputType | null;
    _avg: PostsAvgAggregateOutputType | null;
    _sum: PostsSumAggregateOutputType | null;
    _min: PostsMinAggregateOutputType | null;
    _max: PostsMaxAggregateOutputType | null;
};
type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PostsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PostsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PostsGroupByOutputType[P]>;
}>>;
export type postsWhereInput = {
    AND?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    OR?: Prisma.postsWhereInput[];
    NOT?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    post_id?: Prisma.IntFilter<"posts"> | number;
    user_id?: Prisma.IntNullableFilter<"posts"> | number | null;
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    media_url?: Prisma.StringNullableFilter<"posts"> | string | null;
    media_type?: Prisma.StringNullableFilter<"posts"> | string | null;
    category?: Prisma.StringNullableFilter<"posts"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"posts"> | string | null;
    comments?: Prisma.CommentsListRelationFilter;
    post_reactions?: Prisma.Post_reactionsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type postsOrderByWithRelationInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    comments?: Prisma.commentsOrderByRelationAggregateInput;
    post_reactions?: Prisma.post_reactionsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type postsWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number;
    AND?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    OR?: Prisma.postsWhereInput[];
    NOT?: Prisma.postsWhereInput | Prisma.postsWhereInput[];
    user_id?: Prisma.IntNullableFilter<"posts"> | number | null;
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    media_url?: Prisma.StringNullableFilter<"posts"> | string | null;
    media_type?: Prisma.StringNullableFilter<"posts"> | string | null;
    category?: Prisma.StringNullableFilter<"posts"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"posts"> | string | null;
    comments?: Prisma.CommentsListRelationFilter;
    post_reactions?: Prisma.Post_reactionsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "post_id">;
export type postsOrderByWithAggregationInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.postsCountOrderByAggregateInput;
    _avg?: Prisma.postsAvgOrderByAggregateInput;
    _max?: Prisma.postsMaxOrderByAggregateInput;
    _min?: Prisma.postsMinOrderByAggregateInput;
    _sum?: Prisma.postsSumOrderByAggregateInput;
};
export type postsScalarWhereWithAggregatesInput = {
    AND?: Prisma.postsScalarWhereWithAggregatesInput | Prisma.postsScalarWhereWithAggregatesInput[];
    OR?: Prisma.postsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.postsScalarWhereWithAggregatesInput | Prisma.postsScalarWhereWithAggregatesInput[];
    post_id?: Prisma.IntWithAggregatesFilter<"posts"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"posts"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"posts"> | string;
    content?: Prisma.StringWithAggregatesFilter<"posts"> | string;
    media_url?: Prisma.StringNullableWithAggregatesFilter<"posts"> | string | null;
    media_type?: Prisma.StringNullableWithAggregatesFilter<"posts"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"posts"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"posts"> | string | null;
};
export type postsCreateInput = {
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    post_reactions?: Prisma.post_reactionsCreateNestedManyWithoutPostsInput;
    users?: Prisma.usersCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateInput = {
    post_id?: number;
    user_id?: number | null;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
    post_reactions?: Prisma.post_reactionsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    post_reactions?: Prisma.post_reactionsUpdateManyWithoutPostsNestedInput;
    users?: Prisma.usersUpdateOneWithoutPostsNestedInput;
};
export type postsUncheckedUpdateInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
    post_reactions?: Prisma.post_reactionsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsCreateManyInput = {
    post_id?: number;
    user_id?: number | null;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type postsUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type postsUncheckedUpdateManyInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PostsNullableScalarRelationFilter = {
    is?: Prisma.postsWhereInput | null;
    isNot?: Prisma.postsWhereInput | null;
};
export type postsCountOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type postsAvgOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type postsMaxOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type postsMinOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type postsSumOrderByAggregateInput = {
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type PostsListRelationFilter = {
    every?: Prisma.postsWhereInput;
    some?: Prisma.postsWhereInput;
    none?: Prisma.postsWhereInput;
};
export type postsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type postsCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.postsWhereUniqueInput;
};
export type postsUpdateOneWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.postsUpsertWithoutCommentsInput;
    disconnect?: Prisma.postsWhereInput | boolean;
    delete?: Prisma.postsWhereInput | boolean;
    connect?: Prisma.postsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.postsUpdateToOneWithWhereWithoutCommentsInput, Prisma.postsUpdateWithoutCommentsInput>, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
};
export type postsCreateNestedOneWithoutPost_reactionsInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutPost_reactionsInput, Prisma.postsUncheckedCreateWithoutPost_reactionsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutPost_reactionsInput;
    connect?: Prisma.postsWhereUniqueInput;
};
export type postsUpdateOneWithoutPost_reactionsNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutPost_reactionsInput, Prisma.postsUncheckedCreateWithoutPost_reactionsInput>;
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutPost_reactionsInput;
    upsert?: Prisma.postsUpsertWithoutPost_reactionsInput;
    disconnect?: Prisma.postsWhereInput | boolean;
    delete?: Prisma.postsWhereInput | boolean;
    connect?: Prisma.postsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.postsUpdateToOneWithWhereWithoutPost_reactionsInput, Prisma.postsUpdateWithoutPost_reactionsInput>, Prisma.postsUncheckedUpdateWithoutPost_reactionsInput>;
};
export type postsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
};
export type postsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutUsersInput | Prisma.postsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutUsersInput | Prisma.postsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutUsersInput | Prisma.postsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput> | Prisma.postsCreateWithoutUsersInput[] | Prisma.postsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.postsCreateOrConnectWithoutUsersInput | Prisma.postsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.postsUpsertWithWhereUniqueWithoutUsersInput | Prisma.postsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.postsCreateManyUsersInputEnvelope;
    set?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    disconnect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    delete?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    connect?: Prisma.postsWhereUniqueInput | Prisma.postsWhereUniqueInput[];
    update?: Prisma.postsUpdateWithWhereUniqueWithoutUsersInput | Prisma.postsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.postsUpdateManyWithWhereWithoutUsersInput | Prisma.postsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
};
export type postsCreateWithoutCommentsInput = {
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    post_reactions?: Prisma.post_reactionsCreateNestedManyWithoutPostsInput;
    users?: Prisma.usersCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateWithoutCommentsInput = {
    post_id?: number;
    user_id?: number | null;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    post_reactions?: Prisma.post_reactionsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsCreateOrConnectWithoutCommentsInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
};
export type postsUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.postsUpdateWithoutCommentsInput, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutCommentsInput, Prisma.postsUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.postsWhereInput;
};
export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.postsWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutCommentsInput, Prisma.postsUncheckedUpdateWithoutCommentsInput>;
};
export type postsUpdateWithoutCommentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    post_reactions?: Prisma.post_reactionsUpdateManyWithoutPostsNestedInput;
    users?: Prisma.usersUpdateOneWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutCommentsInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    post_reactions?: Prisma.post_reactionsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsCreateWithoutPost_reactionsInput = {
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    users?: Prisma.usersCreateNestedOneWithoutPostsInput;
};
export type postsUncheckedCreateWithoutPost_reactionsInput = {
    post_id?: number;
    user_id?: number | null;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsCreateOrConnectWithoutPost_reactionsInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutPost_reactionsInput, Prisma.postsUncheckedCreateWithoutPost_reactionsInput>;
};
export type postsUpsertWithoutPost_reactionsInput = {
    update: Prisma.XOR<Prisma.postsUpdateWithoutPost_reactionsInput, Prisma.postsUncheckedUpdateWithoutPost_reactionsInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutPost_reactionsInput, Prisma.postsUncheckedCreateWithoutPost_reactionsInput>;
    where?: Prisma.postsWhereInput;
};
export type postsUpdateToOneWithWhereWithoutPost_reactionsInput = {
    where?: Prisma.postsWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutPost_reactionsInput, Prisma.postsUncheckedUpdateWithoutPost_reactionsInput>;
};
export type postsUpdateWithoutPost_reactionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    users?: Prisma.usersUpdateOneWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutPost_reactionsInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsCreateWithoutUsersInput = {
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsCreateNestedManyWithoutPostsInput;
    post_reactions?: Prisma.post_reactionsCreateNestedManyWithoutPostsInput;
};
export type postsUncheckedCreateWithoutUsersInput = {
    post_id?: number;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comments?: Prisma.commentsUncheckedCreateNestedManyWithoutPostsInput;
    post_reactions?: Prisma.post_reactionsUncheckedCreateNestedManyWithoutPostsInput;
};
export type postsCreateOrConnectWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput>;
};
export type postsCreateManyUsersInputEnvelope = {
    data: Prisma.postsCreateManyUsersInput | Prisma.postsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    update: Prisma.XOR<Prisma.postsUpdateWithoutUsersInput, Prisma.postsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.postsCreateWithoutUsersInput, Prisma.postsUncheckedCreateWithoutUsersInput>;
};
export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.postsWhereUniqueInput;
    data: Prisma.XOR<Prisma.postsUpdateWithoutUsersInput, Prisma.postsUncheckedUpdateWithoutUsersInput>;
};
export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.postsScalarWhereInput;
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyWithoutUsersInput>;
};
export type postsScalarWhereInput = {
    AND?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
    OR?: Prisma.postsScalarWhereInput[];
    NOT?: Prisma.postsScalarWhereInput | Prisma.postsScalarWhereInput[];
    post_id?: Prisma.IntFilter<"posts"> | number;
    user_id?: Prisma.IntNullableFilter<"posts"> | number | null;
    title?: Prisma.StringFilter<"posts"> | string;
    content?: Prisma.StringFilter<"posts"> | string;
    media_url?: Prisma.StringNullableFilter<"posts"> | string | null;
    media_type?: Prisma.StringNullableFilter<"posts"> | string | null;
    category?: Prisma.StringNullableFilter<"posts"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"posts"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"posts"> | string | null;
};
export type postsCreateManyUsersInput = {
    post_id?: number;
    title: string;
    content: string;
    media_url?: string | null;
    media_type?: string | null;
    category?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type postsUpdateWithoutUsersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUpdateManyWithoutPostsNestedInput;
    post_reactions?: Prisma.post_reactionsUpdateManyWithoutPostsNestedInput;
};
export type postsUncheckedUpdateWithoutUsersInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comments?: Prisma.commentsUncheckedUpdateManyWithoutPostsNestedInput;
    post_reactions?: Prisma.post_reactionsUncheckedUpdateManyWithoutPostsNestedInput;
};
export type postsUncheckedUpdateManyWithoutUsersInput = {
    post_id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PostsCountOutputType = {
    comments: number;
    post_reactions: number;
};
export type PostsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs;
    post_reactions?: boolean | PostsCountOutputTypeCountPost_reactionsArgs;
};
export type PostsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PostsCountOutputTypeSelect<ExtArgs> | null;
};
export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
};
export type PostsCountOutputTypeCountPost_reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.post_reactionsWhereInput;
};
export type postsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    user_id?: boolean;
    title?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    category?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    comments?: boolean | Prisma.posts$commentsArgs<ExtArgs>;
    post_reactions?: boolean | Prisma.posts$post_reactionsArgs<ExtArgs>;
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.PostsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["posts"]>;
export type postsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    user_id?: boolean;
    title?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    category?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
}, ExtArgs["result"]["posts"]>;
export type postsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    post_id?: boolean;
    user_id?: boolean;
    title?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    category?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
}, ExtArgs["result"]["posts"]>;
export type postsSelectScalar = {
    post_id?: boolean;
    user_id?: boolean;
    title?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    category?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
};
export type postsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"post_id" | "user_id" | "title" | "content" | "media_url" | "media_type" | "category" | "created_at" | "updated_at" | "status", ExtArgs["result"]["posts"]>;
export type postsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.posts$commentsArgs<ExtArgs>;
    post_reactions?: boolean | Prisma.posts$post_reactionsArgs<ExtArgs>;
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.PostsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type postsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
};
export type postsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.posts$usersArgs<ExtArgs>;
};
export type $postsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "posts";
    objects: {
        comments: Prisma.$commentsPayload<ExtArgs>[];
        post_reactions: Prisma.$post_reactionsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        post_id: number;
        user_id: number | null;
        title: string;
        content: string;
        media_url: string | null;
        media_type: string | null;
        category: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
    }, ExtArgs["result"]["posts"]>;
    composites: {};
};
export type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$postsPayload, S>;
export type postsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostsCountAggregateInputType | true;
};
export interface postsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['posts'];
        meta: {
            name: 'posts';
        };
    };
    findUnique<T extends postsFindUniqueArgs>(args: Prisma.SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends postsFindFirstArgs>(args?: Prisma.SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends postsFindManyArgs>(args?: Prisma.SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends postsCreateArgs>(args: Prisma.SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends postsCreateManyArgs>(args?: Prisma.SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends postsDeleteArgs>(args: Prisma.SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends postsUpdateArgs>(args: Prisma.SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends postsDeleteManyArgs>(args?: Prisma.SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends postsUpdateManyArgs>(args: Prisma.SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends postsUpsertArgs>(args: Prisma.SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends postsCountArgs>(args?: Prisma.Subset<T, postsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PostsCountAggregateOutputType> : number>;
    aggregate<T extends PostsAggregateArgs>(args: Prisma.Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>;
    groupBy<T extends postsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: postsGroupByArgs['orderBy'];
    } : {
        orderBy?: postsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: postsFieldRefs;
}
export interface Prisma__postsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends Prisma.posts$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    post_reactions<T extends Prisma.posts$post_reactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.posts$post_reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$post_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.posts$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.posts$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface postsFieldRefs {
    readonly post_id: Prisma.FieldRef<"posts", 'Int'>;
    readonly user_id: Prisma.FieldRef<"posts", 'Int'>;
    readonly title: Prisma.FieldRef<"posts", 'String'>;
    readonly content: Prisma.FieldRef<"posts", 'String'>;
    readonly media_url: Prisma.FieldRef<"posts", 'String'>;
    readonly media_type: Prisma.FieldRef<"posts", 'String'>;
    readonly category: Prisma.FieldRef<"posts", 'String'>;
    readonly created_at: Prisma.FieldRef<"posts", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"posts", 'DateTime'>;
    readonly status: Prisma.FieldRef<"posts", 'String'>;
}
export type postsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostsScalarFieldEnum | Prisma.PostsScalarFieldEnum[];
};
export type postsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostsScalarFieldEnum | Prisma.PostsScalarFieldEnum[];
};
export type postsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where?: Prisma.postsWhereInput;
    orderBy?: Prisma.postsOrderByWithRelationInput | Prisma.postsOrderByWithRelationInput[];
    cursor?: Prisma.postsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PostsScalarFieldEnum | Prisma.PostsScalarFieldEnum[];
};
export type postsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.postsCreateInput, Prisma.postsUncheckedCreateInput>;
};
export type postsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.postsCreateManyInput | Prisma.postsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type postsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    data: Prisma.postsCreateManyInput | Prisma.postsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.postsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type postsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.postsUpdateInput, Prisma.postsUncheckedUpdateInput>;
    where: Prisma.postsWhereUniqueInput;
};
export type postsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyInput>;
    where?: Prisma.postsWhereInput;
    limit?: number;
};
export type postsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.postsUpdateManyMutationInput, Prisma.postsUncheckedUpdateManyInput>;
    where?: Prisma.postsWhereInput;
    limit?: number;
    include?: Prisma.postsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type postsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
    create: Prisma.XOR<Prisma.postsCreateInput, Prisma.postsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.postsUpdateInput, Prisma.postsUncheckedUpdateInput>;
};
export type postsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where: Prisma.postsWhereUniqueInput;
};
export type postsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.postsWhereInput;
    limit?: number;
};
export type posts$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithRelationInput | Prisma.commentsOrderByWithRelationInput[];
    cursor?: Prisma.commentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentsScalarFieldEnum | Prisma.CommentsScalarFieldEnum[];
};
export type posts$post_reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.post_reactionsSelect<ExtArgs> | null;
    omit?: Prisma.post_reactionsOmit<ExtArgs> | null;
    include?: Prisma.post_reactionsInclude<ExtArgs> | null;
    where?: Prisma.post_reactionsWhereInput;
    orderBy?: Prisma.post_reactionsOrderByWithRelationInput | Prisma.post_reactionsOrderByWithRelationInput[];
    cursor?: Prisma.post_reactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Post_reactionsScalarFieldEnum | Prisma.Post_reactionsScalarFieldEnum[];
};
export type posts$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type postsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
};
export {};
