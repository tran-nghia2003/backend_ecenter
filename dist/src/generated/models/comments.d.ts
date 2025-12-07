import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type commentsModel = runtime.Types.Result.DefaultSelection<Prisma.$commentsPayload>;
export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
};
export type CommentsAvgAggregateOutputType = {
    comment_id: number | null;
    post_id: number | null;
    user_id: number | null;
    parent_id: number | null;
};
export type CommentsSumAggregateOutputType = {
    comment_id: number | null;
    post_id: number | null;
    user_id: number | null;
    parent_id: number | null;
};
export type CommentsMinAggregateOutputType = {
    comment_id: number | null;
    post_id: number | null;
    user_id: number | null;
    parent_id: number | null;
    content: string | null;
    media_url: string | null;
    media_type: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
};
export type CommentsMaxAggregateOutputType = {
    comment_id: number | null;
    post_id: number | null;
    user_id: number | null;
    parent_id: number | null;
    content: string | null;
    media_url: string | null;
    media_type: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
};
export type CommentsCountAggregateOutputType = {
    comment_id: number;
    post_id: number;
    user_id: number;
    parent_id: number;
    content: number;
    media_url: number;
    media_type: number;
    created_at: number;
    updated_at: number;
    status: number;
    _all: number;
};
export type CommentsAvgAggregateInputType = {
    comment_id?: true;
    post_id?: true;
    user_id?: true;
    parent_id?: true;
};
export type CommentsSumAggregateInputType = {
    comment_id?: true;
    post_id?: true;
    user_id?: true;
    parent_id?: true;
};
export type CommentsMinAggregateInputType = {
    comment_id?: true;
    post_id?: true;
    user_id?: true;
    parent_id?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
};
export type CommentsMaxAggregateInputType = {
    comment_id?: true;
    post_id?: true;
    user_id?: true;
    parent_id?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
};
export type CommentsCountAggregateInputType = {
    comment_id?: true;
    post_id?: true;
    user_id?: true;
    parent_id?: true;
    content?: true;
    media_url?: true;
    media_type?: true;
    created_at?: true;
    updated_at?: true;
    status?: true;
    _all?: true;
};
export type CommentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithRelationInput | Prisma.commentsOrderByWithRelationInput[];
    cursor?: Prisma.commentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CommentsCountAggregateInputType;
    _avg?: CommentsAvgAggregateInputType;
    _sum?: CommentsSumAggregateInputType;
    _min?: CommentsMinAggregateInputType;
    _max?: CommentsMaxAggregateInputType;
};
export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
    [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateComments[P]> : Prisma.GetScalarType<T[P], AggregateComments[P]>;
};
export type commentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    orderBy?: Prisma.commentsOrderByWithAggregationInput | Prisma.commentsOrderByWithAggregationInput[];
    by: Prisma.CommentsScalarFieldEnum[] | Prisma.CommentsScalarFieldEnum;
    having?: Prisma.commentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentsCountAggregateInputType | true;
    _avg?: CommentsAvgAggregateInputType;
    _sum?: CommentsSumAggregateInputType;
    _min?: CommentsMinAggregateInputType;
    _max?: CommentsMaxAggregateInputType;
};
export type CommentsGroupByOutputType = {
    comment_id: number;
    post_id: number | null;
    user_id: number | null;
    parent_id: number | null;
    content: string | null;
    media_url: string | null;
    media_type: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    status: string | null;
    _count: CommentsCountAggregateOutputType | null;
    _avg: CommentsAvgAggregateOutputType | null;
    _sum: CommentsSumAggregateOutputType | null;
    _min: CommentsMinAggregateOutputType | null;
    _max: CommentsMaxAggregateOutputType | null;
};
type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommentsGroupByOutputType[P]>;
}>>;
export type commentsWhereInput = {
    AND?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    OR?: Prisma.commentsWhereInput[];
    NOT?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    comment_id?: Prisma.IntFilter<"comments"> | number;
    post_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    parent_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    content?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_url?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_type?: Prisma.StringNullableFilter<"comments"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"comments"> | string | null;
    comment_reactions?: Prisma.Comment_reactionsListRelationFilter;
    posts?: Prisma.XOR<Prisma.PostsNullableScalarRelationFilter, Prisma.postsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type commentsOrderByWithRelationInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    comment_reactions?: Prisma.comment_reactionsOrderByRelationAggregateInput;
    posts?: Prisma.postsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type commentsWhereUniqueInput = Prisma.AtLeast<{
    comment_id?: number;
    AND?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    OR?: Prisma.commentsWhereInput[];
    NOT?: Prisma.commentsWhereInput | Prisma.commentsWhereInput[];
    post_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    parent_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    content?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_url?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_type?: Prisma.StringNullableFilter<"comments"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"comments"> | string | null;
    comment_reactions?: Prisma.Comment_reactionsListRelationFilter;
    posts?: Prisma.XOR<Prisma.PostsNullableScalarRelationFilter, Prisma.postsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "comment_id">;
export type commentsOrderByWithAggregationInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.commentsCountOrderByAggregateInput;
    _avg?: Prisma.commentsAvgOrderByAggregateInput;
    _max?: Prisma.commentsMaxOrderByAggregateInput;
    _min?: Prisma.commentsMinOrderByAggregateInput;
    _sum?: Prisma.commentsSumOrderByAggregateInput;
};
export type commentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.commentsScalarWhereWithAggregatesInput | Prisma.commentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.commentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.commentsScalarWhereWithAggregatesInput | Prisma.commentsScalarWhereWithAggregatesInput[];
    comment_id?: Prisma.IntWithAggregatesFilter<"comments"> | number;
    post_id?: Prisma.IntNullableWithAggregatesFilter<"comments"> | number | null;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"comments"> | number | null;
    parent_id?: Prisma.IntNullableWithAggregatesFilter<"comments"> | number | null;
    content?: Prisma.StringNullableWithAggregatesFilter<"comments"> | string | null;
    media_url?: Prisma.StringNullableWithAggregatesFilter<"comments"> | string | null;
    media_type?: Prisma.StringNullableWithAggregatesFilter<"comments"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null;
    status?: Prisma.StringNullableWithAggregatesFilter<"comments"> | string | null;
};
export type commentsCreateInput = {
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsCreateNestedManyWithoutCommentsInput;
    posts?: Prisma.postsCreateNestedOneWithoutCommentsInput;
    users?: Prisma.usersCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateInput = {
    comment_id?: number;
    post_id?: number | null;
    user_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedCreateNestedManyWithoutCommentsInput;
};
export type commentsUpdateInput = {
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUpdateManyWithoutCommentsNestedInput;
    posts?: Prisma.postsUpdateOneWithoutCommentsNestedInput;
    users?: Prisma.usersUpdateOneWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    post_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedUpdateManyWithoutCommentsNestedInput;
};
export type commentsCreateManyInput = {
    comment_id?: number;
    post_id?: number | null;
    user_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type commentsUpdateManyMutationInput = {
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type commentsUncheckedUpdateManyInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    post_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentsListRelationFilter = {
    every?: Prisma.commentsWhereInput;
    some?: Prisma.commentsWhereInput;
    none?: Prisma.commentsWhereInput;
};
export type commentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type commentsCountOrderByAggregateInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type commentsAvgOrderByAggregateInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
};
export type commentsMaxOrderByAggregateInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type commentsMinOrderByAggregateInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type commentsSumOrderByAggregateInput = {
    comment_id?: Prisma.SortOrder;
    post_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
};
export type CommentsNullableScalarRelationFilter = {
    is?: Prisma.commentsWhereInput | null;
    isNot?: Prisma.commentsWhereInput | null;
};
export type commentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutUsersInput | Prisma.commentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput> | Prisma.commentsCreateWithoutUsersInput[] | Prisma.commentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutUsersInput | Prisma.commentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.commentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.commentsCreateManyUsersInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.commentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutUsersInput | Prisma.commentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsCreateNestedOneWithoutComment_reactionsInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutComment_reactionsInput, Prisma.commentsUncheckedCreateWithoutComment_reactionsInput>;
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutComment_reactionsInput;
    connect?: Prisma.commentsWhereUniqueInput;
};
export type commentsUpdateOneWithoutComment_reactionsNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutComment_reactionsInput, Prisma.commentsUncheckedCreateWithoutComment_reactionsInput>;
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutComment_reactionsInput;
    upsert?: Prisma.commentsUpsertWithoutComment_reactionsInput;
    disconnect?: Prisma.commentsWhereInput | boolean;
    delete?: Prisma.commentsWhereInput | boolean;
    connect?: Prisma.commentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.commentsUpdateToOneWithWhereWithoutComment_reactionsInput, Prisma.commentsUpdateWithoutComment_reactionsInput>, Prisma.commentsUncheckedUpdateWithoutComment_reactionsInput>;
};
export type commentsCreateNestedManyWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
};
export type commentsUpdateManyWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput | Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput | Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutPostsInput | Prisma.commentsUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput> | Prisma.commentsCreateWithoutPostsInput[] | Prisma.commentsUncheckedCreateWithoutPostsInput[];
    connectOrCreate?: Prisma.commentsCreateOrConnectWithoutPostsInput | Prisma.commentsCreateOrConnectWithoutPostsInput[];
    upsert?: Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput | Prisma.commentsUpsertWithWhereUniqueWithoutPostsInput[];
    createMany?: Prisma.commentsCreateManyPostsInputEnvelope;
    set?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    disconnect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    delete?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    connect?: Prisma.commentsWhereUniqueInput | Prisma.commentsWhereUniqueInput[];
    update?: Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput | Prisma.commentsUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?: Prisma.commentsUpdateManyWithWhereWithoutPostsInput | Prisma.commentsUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
};
export type commentsCreateWithoutUsersInput = {
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsCreateNestedManyWithoutCommentsInput;
    posts?: Prisma.postsCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateWithoutUsersInput = {
    comment_id?: number;
    post_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedCreateNestedManyWithoutCommentsInput;
};
export type commentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput>;
};
export type commentsCreateManyUsersInputEnvelope = {
    data: Prisma.commentsCreateManyUsersInput | Prisma.commentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.commentsUpdateWithoutUsersInput, Prisma.commentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.commentsCreateWithoutUsersInput, Prisma.commentsUncheckedCreateWithoutUsersInput>;
};
export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.commentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.commentsUpdateWithoutUsersInput, Prisma.commentsUncheckedUpdateWithoutUsersInput>;
};
export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.commentsScalarWhereInput;
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyWithoutUsersInput>;
};
export type commentsScalarWhereInput = {
    AND?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
    OR?: Prisma.commentsScalarWhereInput[];
    NOT?: Prisma.commentsScalarWhereInput | Prisma.commentsScalarWhereInput[];
    comment_id?: Prisma.IntFilter<"comments"> | number;
    post_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    user_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    parent_id?: Prisma.IntNullableFilter<"comments"> | number | null;
    content?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_url?: Prisma.StringNullableFilter<"comments"> | string | null;
    media_type?: Prisma.StringNullableFilter<"comments"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"comments"> | Date | string | null;
    status?: Prisma.StringNullableFilter<"comments"> | string | null;
};
export type commentsCreateWithoutComment_reactionsInput = {
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    posts?: Prisma.postsCreateNestedOneWithoutCommentsInput;
    users?: Prisma.usersCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateWithoutComment_reactionsInput = {
    comment_id?: number;
    post_id?: number | null;
    user_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type commentsCreateOrConnectWithoutComment_reactionsInput = {
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateWithoutComment_reactionsInput, Prisma.commentsUncheckedCreateWithoutComment_reactionsInput>;
};
export type commentsUpsertWithoutComment_reactionsInput = {
    update: Prisma.XOR<Prisma.commentsUpdateWithoutComment_reactionsInput, Prisma.commentsUncheckedUpdateWithoutComment_reactionsInput>;
    create: Prisma.XOR<Prisma.commentsCreateWithoutComment_reactionsInput, Prisma.commentsUncheckedCreateWithoutComment_reactionsInput>;
    where?: Prisma.commentsWhereInput;
};
export type commentsUpdateToOneWithWhereWithoutComment_reactionsInput = {
    where?: Prisma.commentsWhereInput;
    data: Prisma.XOR<Prisma.commentsUpdateWithoutComment_reactionsInput, Prisma.commentsUncheckedUpdateWithoutComment_reactionsInput>;
};
export type commentsUpdateWithoutComment_reactionsInput = {
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    posts?: Prisma.postsUpdateOneWithoutCommentsNestedInput;
    users?: Prisma.usersUpdateOneWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateWithoutComment_reactionsInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    post_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type commentsCreateWithoutPostsInput = {
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsCreateNestedManyWithoutCommentsInput;
    users?: Prisma.usersCreateNestedOneWithoutCommentsInput;
};
export type commentsUncheckedCreateWithoutPostsInput = {
    comment_id?: number;
    user_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedCreateNestedManyWithoutCommentsInput;
};
export type commentsCreateOrConnectWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput>;
};
export type commentsCreateManyPostsInputEnvelope = {
    data: Prisma.commentsCreateManyPostsInput | Prisma.commentsCreateManyPostsInput[];
    skipDuplicates?: boolean;
};
export type commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.commentsUpdateWithoutPostsInput, Prisma.commentsUncheckedUpdateWithoutPostsInput>;
    create: Prisma.XOR<Prisma.commentsCreateWithoutPostsInput, Prisma.commentsUncheckedCreateWithoutPostsInput>;
};
export type commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: Prisma.commentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.commentsUpdateWithoutPostsInput, Prisma.commentsUncheckedUpdateWithoutPostsInput>;
};
export type commentsUpdateManyWithWhereWithoutPostsInput = {
    where: Prisma.commentsScalarWhereInput;
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyWithoutPostsInput>;
};
export type commentsCreateManyUsersInput = {
    comment_id?: number;
    post_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type commentsUpdateWithoutUsersInput = {
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUpdateManyWithoutCommentsNestedInput;
    posts?: Prisma.postsUpdateOneWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateWithoutUsersInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    post_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedUpdateManyWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateManyWithoutUsersInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    post_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type commentsCreateManyPostsInput = {
    comment_id?: number;
    user_id?: number | null;
    parent_id?: number | null;
    content?: string | null;
    media_url?: string | null;
    media_type?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    status?: string | null;
};
export type commentsUpdateWithoutPostsInput = {
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUpdateManyWithoutCommentsNestedInput;
    users?: Prisma.usersUpdateOneWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateWithoutPostsInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comment_reactions?: Prisma.comment_reactionsUncheckedUpdateManyWithoutCommentsNestedInput;
};
export type commentsUncheckedUpdateManyWithoutPostsInput = {
    comment_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CommentsCountOutputType = {
    comment_reactions: number;
};
export type CommentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment_reactions?: boolean | CommentsCountOutputTypeCountComment_reactionsArgs;
};
export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentsCountOutputTypeSelect<ExtArgs> | null;
};
export type CommentsCountOutputTypeCountComment_reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.comment_reactionsWhereInput;
};
export type commentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    comment_id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    parent_id?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    comment_reactions?: boolean | Prisma.comments$comment_reactionsArgs<ExtArgs>;
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.CommentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["comments"]>;
export type commentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    comment_id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    parent_id?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
}, ExtArgs["result"]["comments"]>;
export type commentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    comment_id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    parent_id?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
}, ExtArgs["result"]["comments"]>;
export type commentsSelectScalar = {
    comment_id?: boolean;
    post_id?: boolean;
    user_id?: boolean;
    parent_id?: boolean;
    content?: boolean;
    media_url?: boolean;
    media_type?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    status?: boolean;
};
export type commentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"comment_id" | "post_id" | "user_id" | "parent_id" | "content" | "media_url" | "media_type" | "created_at" | "updated_at" | "status", ExtArgs["result"]["comments"]>;
export type commentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comment_reactions?: boolean | Prisma.comments$comment_reactionsArgs<ExtArgs>;
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.CommentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type commentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
};
export type commentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | Prisma.comments$postsArgs<ExtArgs>;
    users?: boolean | Prisma.comments$usersArgs<ExtArgs>;
};
export type $commentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "comments";
    objects: {
        comment_reactions: Prisma.$comment_reactionsPayload<ExtArgs>[];
        posts: Prisma.$postsPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        comment_id: number;
        post_id: number | null;
        user_id: number | null;
        parent_id: number | null;
        content: string | null;
        media_url: string | null;
        media_type: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        status: string | null;
    }, ExtArgs["result"]["comments"]>;
    composites: {};
};
export type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$commentsPayload, S>;
export type commentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentsCountAggregateInputType | true;
};
export interface commentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['comments'];
        meta: {
            name: 'comments';
        };
    };
    findUnique<T extends commentsFindUniqueArgs>(args: Prisma.SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends commentsFindFirstArgs>(args?: Prisma.SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends commentsFindManyArgs>(args?: Prisma.SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends commentsCreateArgs>(args: Prisma.SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends commentsCreateManyArgs>(args?: Prisma.SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends commentsDeleteArgs>(args: Prisma.SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends commentsUpdateArgs>(args: Prisma.SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends commentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends commentsUpdateManyArgs>(args: Prisma.SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends commentsUpsertArgs>(args: Prisma.SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma.Prisma__commentsClient<runtime.Types.Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends commentsCountArgs>(args?: Prisma.Subset<T, commentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommentsCountAggregateOutputType> : number>;
    aggregate<T extends CommentsAggregateArgs>(args: Prisma.Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>;
    groupBy<T extends commentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: commentsGroupByArgs['orderBy'];
    } : {
        orderBy?: commentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: commentsFieldRefs;
}
export interface Prisma__commentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comment_reactions<T extends Prisma.comments$comment_reactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.comments$comment_reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$comment_reactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    posts<T extends Prisma.comments$postsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.comments$postsArgs<ExtArgs>>): Prisma.Prisma__postsClient<runtime.Types.Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.comments$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.comments$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface commentsFieldRefs {
    readonly comment_id: Prisma.FieldRef<"comments", 'Int'>;
    readonly post_id: Prisma.FieldRef<"comments", 'Int'>;
    readonly user_id: Prisma.FieldRef<"comments", 'Int'>;
    readonly parent_id: Prisma.FieldRef<"comments", 'Int'>;
    readonly content: Prisma.FieldRef<"comments", 'String'>;
    readonly media_url: Prisma.FieldRef<"comments", 'String'>;
    readonly media_type: Prisma.FieldRef<"comments", 'String'>;
    readonly created_at: Prisma.FieldRef<"comments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"comments", 'DateTime'>;
    readonly status: Prisma.FieldRef<"comments", 'String'>;
}
export type commentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type commentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.commentsCreateInput, Prisma.commentsUncheckedCreateInput>;
};
export type commentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.commentsCreateManyInput | Prisma.commentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type commentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    data: Prisma.commentsCreateManyInput | Prisma.commentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.commentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type commentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.commentsUpdateInput, Prisma.commentsUncheckedUpdateInput>;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyInput>;
    where?: Prisma.commentsWhereInput;
    limit?: number;
};
export type commentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.commentsUpdateManyMutationInput, Prisma.commentsUncheckedUpdateManyInput>;
    where?: Prisma.commentsWhereInput;
    limit?: number;
    include?: Prisma.commentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type commentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.commentsCreateInput, Prisma.commentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.commentsUpdateInput, Prisma.commentsUncheckedUpdateInput>;
};
export type commentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
    where: Prisma.commentsWhereUniqueInput;
};
export type commentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.commentsWhereInput;
    limit?: number;
};
export type comments$comment_reactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type comments$postsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.postsSelect<ExtArgs> | null;
    omit?: Prisma.postsOmit<ExtArgs> | null;
    include?: Prisma.postsInclude<ExtArgs> | null;
    where?: Prisma.postsWhereInput;
};
export type comments$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type commentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.commentsSelect<ExtArgs> | null;
    omit?: Prisma.commentsOmit<ExtArgs> | null;
    include?: Prisma.commentsInclude<ExtArgs> | null;
};
export {};
