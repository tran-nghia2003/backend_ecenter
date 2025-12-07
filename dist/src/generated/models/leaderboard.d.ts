import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type leaderboardModel = runtime.Types.Result.DefaultSelection<Prisma.$leaderboardPayload>;
export type AggregateLeaderboard = {
    _count: LeaderboardCountAggregateOutputType | null;
    _avg: LeaderboardAvgAggregateOutputType | null;
    _sum: LeaderboardSumAggregateOutputType | null;
    _min: LeaderboardMinAggregateOutputType | null;
    _max: LeaderboardMaxAggregateOutputType | null;
};
export type LeaderboardAvgAggregateOutputType = {
    score_id: number | null;
    user_id: number | null;
    game_id: number | null;
    score: number | null;
};
export type LeaderboardSumAggregateOutputType = {
    score_id: number | null;
    user_id: number | null;
    game_id: number | null;
    score: number | null;
};
export type LeaderboardMinAggregateOutputType = {
    score_id: number | null;
    user_id: number | null;
    game_id: number | null;
    score: number | null;
    achieved_at: Date | null;
};
export type LeaderboardMaxAggregateOutputType = {
    score_id: number | null;
    user_id: number | null;
    game_id: number | null;
    score: number | null;
    achieved_at: Date | null;
};
export type LeaderboardCountAggregateOutputType = {
    score_id: number;
    user_id: number;
    game_id: number;
    score: number;
    achieved_at: number;
    _all: number;
};
export type LeaderboardAvgAggregateInputType = {
    score_id?: true;
    user_id?: true;
    game_id?: true;
    score?: true;
};
export type LeaderboardSumAggregateInputType = {
    score_id?: true;
    user_id?: true;
    game_id?: true;
    score?: true;
};
export type LeaderboardMinAggregateInputType = {
    score_id?: true;
    user_id?: true;
    game_id?: true;
    score?: true;
    achieved_at?: true;
};
export type LeaderboardMaxAggregateInputType = {
    score_id?: true;
    user_id?: true;
    game_id?: true;
    score?: true;
    achieved_at?: true;
};
export type LeaderboardCountAggregateInputType = {
    score_id?: true;
    user_id?: true;
    game_id?: true;
    score?: true;
    achieved_at?: true;
    _all?: true;
};
export type LeaderboardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.leaderboardWhereInput;
    orderBy?: Prisma.leaderboardOrderByWithRelationInput | Prisma.leaderboardOrderByWithRelationInput[];
    cursor?: Prisma.leaderboardWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaderboardCountAggregateInputType;
    _avg?: LeaderboardAvgAggregateInputType;
    _sum?: LeaderboardSumAggregateInputType;
    _min?: LeaderboardMinAggregateInputType;
    _max?: LeaderboardMaxAggregateInputType;
};
export type GetLeaderboardAggregateType<T extends LeaderboardAggregateArgs> = {
    [P in keyof T & keyof AggregateLeaderboard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeaderboard[P]> : Prisma.GetScalarType<T[P], AggregateLeaderboard[P]>;
};
export type leaderboardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.leaderboardWhereInput;
    orderBy?: Prisma.leaderboardOrderByWithAggregationInput | Prisma.leaderboardOrderByWithAggregationInput[];
    by: Prisma.LeaderboardScalarFieldEnum[] | Prisma.LeaderboardScalarFieldEnum;
    having?: Prisma.leaderboardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaderboardCountAggregateInputType | true;
    _avg?: LeaderboardAvgAggregateInputType;
    _sum?: LeaderboardSumAggregateInputType;
    _min?: LeaderboardMinAggregateInputType;
    _max?: LeaderboardMaxAggregateInputType;
};
export type LeaderboardGroupByOutputType = {
    score_id: number;
    user_id: number | null;
    game_id: number | null;
    score: number | null;
    achieved_at: Date | null;
    _count: LeaderboardCountAggregateOutputType | null;
    _avg: LeaderboardAvgAggregateOutputType | null;
    _sum: LeaderboardSumAggregateOutputType | null;
    _min: LeaderboardMinAggregateOutputType | null;
    _max: LeaderboardMaxAggregateOutputType | null;
};
type GetLeaderboardGroupByPayload<T extends leaderboardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaderboardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaderboardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaderboardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaderboardGroupByOutputType[P]>;
}>>;
export type leaderboardWhereInput = {
    AND?: Prisma.leaderboardWhereInput | Prisma.leaderboardWhereInput[];
    OR?: Prisma.leaderboardWhereInput[];
    NOT?: Prisma.leaderboardWhereInput | Prisma.leaderboardWhereInput[];
    score_id?: Prisma.IntFilter<"leaderboard"> | number;
    user_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    game_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    score?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    achieved_at?: Prisma.DateTimeNullableFilter<"leaderboard"> | Date | string | null;
    minigames?: Prisma.XOR<Prisma.MinigamesNullableScalarRelationFilter, Prisma.minigamesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type leaderboardOrderByWithRelationInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    achieved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    minigames?: Prisma.minigamesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type leaderboardWhereUniqueInput = Prisma.AtLeast<{
    score_id?: number;
    AND?: Prisma.leaderboardWhereInput | Prisma.leaderboardWhereInput[];
    OR?: Prisma.leaderboardWhereInput[];
    NOT?: Prisma.leaderboardWhereInput | Prisma.leaderboardWhereInput[];
    user_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    game_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    score?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    achieved_at?: Prisma.DateTimeNullableFilter<"leaderboard"> | Date | string | null;
    minigames?: Prisma.XOR<Prisma.MinigamesNullableScalarRelationFilter, Prisma.minigamesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "score_id">;
export type leaderboardOrderByWithAggregationInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    achieved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.leaderboardCountOrderByAggregateInput;
    _avg?: Prisma.leaderboardAvgOrderByAggregateInput;
    _max?: Prisma.leaderboardMaxOrderByAggregateInput;
    _min?: Prisma.leaderboardMinOrderByAggregateInput;
    _sum?: Prisma.leaderboardSumOrderByAggregateInput;
};
export type leaderboardScalarWhereWithAggregatesInput = {
    AND?: Prisma.leaderboardScalarWhereWithAggregatesInput | Prisma.leaderboardScalarWhereWithAggregatesInput[];
    OR?: Prisma.leaderboardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.leaderboardScalarWhereWithAggregatesInput | Prisma.leaderboardScalarWhereWithAggregatesInput[];
    score_id?: Prisma.IntWithAggregatesFilter<"leaderboard"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"leaderboard"> | number | null;
    game_id?: Prisma.IntNullableWithAggregatesFilter<"leaderboard"> | number | null;
    score?: Prisma.IntNullableWithAggregatesFilter<"leaderboard"> | number | null;
    achieved_at?: Prisma.DateTimeNullableWithAggregatesFilter<"leaderboard"> | Date | string | null;
};
export type leaderboardCreateInput = {
    score?: number | null;
    achieved_at?: Date | string | null;
    minigames?: Prisma.minigamesCreateNestedOneWithoutLeaderboardInput;
    users?: Prisma.usersCreateNestedOneWithoutLeaderboardInput;
};
export type leaderboardUncheckedCreateInput = {
    score_id?: number;
    user_id?: number | null;
    game_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardUpdateInput = {
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    minigames?: Prisma.minigamesUpdateOneWithoutLeaderboardNestedInput;
    users?: Prisma.usersUpdateOneWithoutLeaderboardNestedInput;
};
export type leaderboardUncheckedUpdateInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    game_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardCreateManyInput = {
    score_id?: number;
    user_id?: number | null;
    game_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardUpdateManyMutationInput = {
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardUncheckedUpdateManyInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    game_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type LeaderboardListRelationFilter = {
    every?: Prisma.leaderboardWhereInput;
    some?: Prisma.leaderboardWhereInput;
    none?: Prisma.leaderboardWhereInput;
};
export type leaderboardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type leaderboardCountOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    achieved_at?: Prisma.SortOrder;
};
export type leaderboardAvgOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type leaderboardMaxOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    achieved_at?: Prisma.SortOrder;
};
export type leaderboardMinOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    achieved_at?: Prisma.SortOrder;
};
export type leaderboardSumOrderByAggregateInput = {
    score_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
};
export type leaderboardCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput> | Prisma.leaderboardCreateWithoutUsersInput[] | Prisma.leaderboardUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutUsersInput | Prisma.leaderboardCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.leaderboardCreateManyUsersInputEnvelope;
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
};
export type leaderboardUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput> | Prisma.leaderboardCreateWithoutUsersInput[] | Prisma.leaderboardUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutUsersInput | Prisma.leaderboardCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.leaderboardCreateManyUsersInputEnvelope;
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
};
export type leaderboardUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput> | Prisma.leaderboardCreateWithoutUsersInput[] | Prisma.leaderboardUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutUsersInput | Prisma.leaderboardCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.leaderboardUpsertWithWhereUniqueWithoutUsersInput | Prisma.leaderboardUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.leaderboardCreateManyUsersInputEnvelope;
    set?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    disconnect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    delete?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    update?: Prisma.leaderboardUpdateWithWhereUniqueWithoutUsersInput | Prisma.leaderboardUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.leaderboardUpdateManyWithWhereWithoutUsersInput | Prisma.leaderboardUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
};
export type leaderboardUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput> | Prisma.leaderboardCreateWithoutUsersInput[] | Prisma.leaderboardUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutUsersInput | Prisma.leaderboardCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.leaderboardUpsertWithWhereUniqueWithoutUsersInput | Prisma.leaderboardUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.leaderboardCreateManyUsersInputEnvelope;
    set?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    disconnect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    delete?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    update?: Prisma.leaderboardUpdateWithWhereUniqueWithoutUsersInput | Prisma.leaderboardUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.leaderboardUpdateManyWithWhereWithoutUsersInput | Prisma.leaderboardUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
};
export type leaderboardCreateNestedManyWithoutMinigamesInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput> | Prisma.leaderboardCreateWithoutMinigamesInput[] | Prisma.leaderboardUncheckedCreateWithoutMinigamesInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutMinigamesInput | Prisma.leaderboardCreateOrConnectWithoutMinigamesInput[];
    createMany?: Prisma.leaderboardCreateManyMinigamesInputEnvelope;
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
};
export type leaderboardUncheckedCreateNestedManyWithoutMinigamesInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput> | Prisma.leaderboardCreateWithoutMinigamesInput[] | Prisma.leaderboardUncheckedCreateWithoutMinigamesInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutMinigamesInput | Prisma.leaderboardCreateOrConnectWithoutMinigamesInput[];
    createMany?: Prisma.leaderboardCreateManyMinigamesInputEnvelope;
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
};
export type leaderboardUpdateManyWithoutMinigamesNestedInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput> | Prisma.leaderboardCreateWithoutMinigamesInput[] | Prisma.leaderboardUncheckedCreateWithoutMinigamesInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutMinigamesInput | Prisma.leaderboardCreateOrConnectWithoutMinigamesInput[];
    upsert?: Prisma.leaderboardUpsertWithWhereUniqueWithoutMinigamesInput | Prisma.leaderboardUpsertWithWhereUniqueWithoutMinigamesInput[];
    createMany?: Prisma.leaderboardCreateManyMinigamesInputEnvelope;
    set?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    disconnect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    delete?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    update?: Prisma.leaderboardUpdateWithWhereUniqueWithoutMinigamesInput | Prisma.leaderboardUpdateWithWhereUniqueWithoutMinigamesInput[];
    updateMany?: Prisma.leaderboardUpdateManyWithWhereWithoutMinigamesInput | Prisma.leaderboardUpdateManyWithWhereWithoutMinigamesInput[];
    deleteMany?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
};
export type leaderboardUncheckedUpdateManyWithoutMinigamesNestedInput = {
    create?: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput> | Prisma.leaderboardCreateWithoutMinigamesInput[] | Prisma.leaderboardUncheckedCreateWithoutMinigamesInput[];
    connectOrCreate?: Prisma.leaderboardCreateOrConnectWithoutMinigamesInput | Prisma.leaderboardCreateOrConnectWithoutMinigamesInput[];
    upsert?: Prisma.leaderboardUpsertWithWhereUniqueWithoutMinigamesInput | Prisma.leaderboardUpsertWithWhereUniqueWithoutMinigamesInput[];
    createMany?: Prisma.leaderboardCreateManyMinigamesInputEnvelope;
    set?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    disconnect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    delete?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    connect?: Prisma.leaderboardWhereUniqueInput | Prisma.leaderboardWhereUniqueInput[];
    update?: Prisma.leaderboardUpdateWithWhereUniqueWithoutMinigamesInput | Prisma.leaderboardUpdateWithWhereUniqueWithoutMinigamesInput[];
    updateMany?: Prisma.leaderboardUpdateManyWithWhereWithoutMinigamesInput | Prisma.leaderboardUpdateManyWithWhereWithoutMinigamesInput[];
    deleteMany?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
};
export type leaderboardCreateWithoutUsersInput = {
    score?: number | null;
    achieved_at?: Date | string | null;
    minigames?: Prisma.minigamesCreateNestedOneWithoutLeaderboardInput;
};
export type leaderboardUncheckedCreateWithoutUsersInput = {
    score_id?: number;
    game_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardCreateOrConnectWithoutUsersInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput>;
};
export type leaderboardCreateManyUsersInputEnvelope = {
    data: Prisma.leaderboardCreateManyUsersInput | Prisma.leaderboardCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type leaderboardUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    update: Prisma.XOR<Prisma.leaderboardUpdateWithoutUsersInput, Prisma.leaderboardUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.leaderboardCreateWithoutUsersInput, Prisma.leaderboardUncheckedCreateWithoutUsersInput>;
};
export type leaderboardUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    data: Prisma.XOR<Prisma.leaderboardUpdateWithoutUsersInput, Prisma.leaderboardUncheckedUpdateWithoutUsersInput>;
};
export type leaderboardUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.leaderboardScalarWhereInput;
    data: Prisma.XOR<Prisma.leaderboardUpdateManyMutationInput, Prisma.leaderboardUncheckedUpdateManyWithoutUsersInput>;
};
export type leaderboardScalarWhereInput = {
    AND?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
    OR?: Prisma.leaderboardScalarWhereInput[];
    NOT?: Prisma.leaderboardScalarWhereInput | Prisma.leaderboardScalarWhereInput[];
    score_id?: Prisma.IntFilter<"leaderboard"> | number;
    user_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    game_id?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    score?: Prisma.IntNullableFilter<"leaderboard"> | number | null;
    achieved_at?: Prisma.DateTimeNullableFilter<"leaderboard"> | Date | string | null;
};
export type leaderboardCreateWithoutMinigamesInput = {
    score?: number | null;
    achieved_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutLeaderboardInput;
};
export type leaderboardUncheckedCreateWithoutMinigamesInput = {
    score_id?: number;
    user_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardCreateOrConnectWithoutMinigamesInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput>;
};
export type leaderboardCreateManyMinigamesInputEnvelope = {
    data: Prisma.leaderboardCreateManyMinigamesInput | Prisma.leaderboardCreateManyMinigamesInput[];
    skipDuplicates?: boolean;
};
export type leaderboardUpsertWithWhereUniqueWithoutMinigamesInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    update: Prisma.XOR<Prisma.leaderboardUpdateWithoutMinigamesInput, Prisma.leaderboardUncheckedUpdateWithoutMinigamesInput>;
    create: Prisma.XOR<Prisma.leaderboardCreateWithoutMinigamesInput, Prisma.leaderboardUncheckedCreateWithoutMinigamesInput>;
};
export type leaderboardUpdateWithWhereUniqueWithoutMinigamesInput = {
    where: Prisma.leaderboardWhereUniqueInput;
    data: Prisma.XOR<Prisma.leaderboardUpdateWithoutMinigamesInput, Prisma.leaderboardUncheckedUpdateWithoutMinigamesInput>;
};
export type leaderboardUpdateManyWithWhereWithoutMinigamesInput = {
    where: Prisma.leaderboardScalarWhereInput;
    data: Prisma.XOR<Prisma.leaderboardUpdateManyMutationInput, Prisma.leaderboardUncheckedUpdateManyWithoutMinigamesInput>;
};
export type leaderboardCreateManyUsersInput = {
    score_id?: number;
    game_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardUpdateWithoutUsersInput = {
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    minigames?: Prisma.minigamesUpdateOneWithoutLeaderboardNestedInput;
};
export type leaderboardUncheckedUpdateWithoutUsersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardUncheckedUpdateManyWithoutUsersInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    game_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardCreateManyMinigamesInput = {
    score_id?: number;
    user_id?: number | null;
    score?: number | null;
    achieved_at?: Date | string | null;
};
export type leaderboardUpdateWithoutMinigamesInput = {
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutLeaderboardNestedInput;
};
export type leaderboardUncheckedUpdateWithoutMinigamesInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardUncheckedUpdateManyWithoutMinigamesInput = {
    score_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    score?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    achieved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type leaderboardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    score?: boolean;
    achieved_at?: boolean;
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
}, ExtArgs["result"]["leaderboard"]>;
export type leaderboardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    score?: boolean;
    achieved_at?: boolean;
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
}, ExtArgs["result"]["leaderboard"]>;
export type leaderboardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    score_id?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    score?: boolean;
    achieved_at?: boolean;
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
}, ExtArgs["result"]["leaderboard"]>;
export type leaderboardSelectScalar = {
    score_id?: boolean;
    user_id?: boolean;
    game_id?: boolean;
    score?: boolean;
    achieved_at?: boolean;
};
export type leaderboardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"score_id" | "user_id" | "game_id" | "score" | "achieved_at", ExtArgs["result"]["leaderboard"]>;
export type leaderboardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
};
export type leaderboardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
};
export type leaderboardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    minigames?: boolean | Prisma.leaderboard$minigamesArgs<ExtArgs>;
    users?: boolean | Prisma.leaderboard$usersArgs<ExtArgs>;
};
export type $leaderboardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "leaderboard";
    objects: {
        minigames: Prisma.$minigamesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        score_id: number;
        user_id: number | null;
        game_id: number | null;
        score: number | null;
        achieved_at: Date | null;
    }, ExtArgs["result"]["leaderboard"]>;
    composites: {};
};
export type leaderboardGetPayload<S extends boolean | null | undefined | leaderboardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$leaderboardPayload, S>;
export type leaderboardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<leaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaderboardCountAggregateInputType | true;
};
export interface leaderboardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['leaderboard'];
        meta: {
            name: 'leaderboard';
        };
    };
    findUnique<T extends leaderboardFindUniqueArgs>(args: Prisma.SelectSubset<T, leaderboardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends leaderboardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, leaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends leaderboardFindFirstArgs>(args?: Prisma.SelectSubset<T, leaderboardFindFirstArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends leaderboardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, leaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends leaderboardFindManyArgs>(args?: Prisma.SelectSubset<T, leaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends leaderboardCreateArgs>(args: Prisma.SelectSubset<T, leaderboardCreateArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends leaderboardCreateManyArgs>(args?: Prisma.SelectSubset<T, leaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends leaderboardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, leaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends leaderboardDeleteArgs>(args: Prisma.SelectSubset<T, leaderboardDeleteArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends leaderboardUpdateArgs>(args: Prisma.SelectSubset<T, leaderboardUpdateArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends leaderboardDeleteManyArgs>(args?: Prisma.SelectSubset<T, leaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends leaderboardUpdateManyArgs>(args: Prisma.SelectSubset<T, leaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends leaderboardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, leaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends leaderboardUpsertArgs>(args: Prisma.SelectSubset<T, leaderboardUpsertArgs<ExtArgs>>): Prisma.Prisma__leaderboardClient<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends leaderboardCountArgs>(args?: Prisma.Subset<T, leaderboardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaderboardCountAggregateOutputType> : number>;
    aggregate<T extends LeaderboardAggregateArgs>(args: Prisma.Subset<T, LeaderboardAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardAggregateType<T>>;
    groupBy<T extends leaderboardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: leaderboardGroupByArgs['orderBy'];
    } : {
        orderBy?: leaderboardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, leaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: leaderboardFieldRefs;
}
export interface Prisma__leaderboardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    minigames<T extends Prisma.leaderboard$minigamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.leaderboard$minigamesArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.leaderboard$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.leaderboard$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface leaderboardFieldRefs {
    readonly score_id: Prisma.FieldRef<"leaderboard", 'Int'>;
    readonly user_id: Prisma.FieldRef<"leaderboard", 'Int'>;
    readonly game_id: Prisma.FieldRef<"leaderboard", 'Int'>;
    readonly score: Prisma.FieldRef<"leaderboard", 'Int'>;
    readonly achieved_at: Prisma.FieldRef<"leaderboard", 'DateTime'>;
}
export type leaderboardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where: Prisma.leaderboardWhereUniqueInput;
};
export type leaderboardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where: Prisma.leaderboardWhereUniqueInput;
};
export type leaderboardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where?: Prisma.leaderboardWhereInput;
    orderBy?: Prisma.leaderboardOrderByWithRelationInput | Prisma.leaderboardOrderByWithRelationInput[];
    cursor?: Prisma.leaderboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderboardScalarFieldEnum | Prisma.LeaderboardScalarFieldEnum[];
};
export type leaderboardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where?: Prisma.leaderboardWhereInput;
    orderBy?: Prisma.leaderboardOrderByWithRelationInput | Prisma.leaderboardOrderByWithRelationInput[];
    cursor?: Prisma.leaderboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderboardScalarFieldEnum | Prisma.LeaderboardScalarFieldEnum[];
};
export type leaderboardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where?: Prisma.leaderboardWhereInput;
    orderBy?: Prisma.leaderboardOrderByWithRelationInput | Prisma.leaderboardOrderByWithRelationInput[];
    cursor?: Prisma.leaderboardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderboardScalarFieldEnum | Prisma.LeaderboardScalarFieldEnum[];
};
export type leaderboardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.leaderboardCreateInput, Prisma.leaderboardUncheckedCreateInput>;
};
export type leaderboardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.leaderboardCreateManyInput | Prisma.leaderboardCreateManyInput[];
    skipDuplicates?: boolean;
};
export type leaderboardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    data: Prisma.leaderboardCreateManyInput | Prisma.leaderboardCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.leaderboardIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type leaderboardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.leaderboardUpdateInput, Prisma.leaderboardUncheckedUpdateInput>;
    where: Prisma.leaderboardWhereUniqueInput;
};
export type leaderboardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.leaderboardUpdateManyMutationInput, Prisma.leaderboardUncheckedUpdateManyInput>;
    where?: Prisma.leaderboardWhereInput;
    limit?: number;
};
export type leaderboardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.leaderboardUpdateManyMutationInput, Prisma.leaderboardUncheckedUpdateManyInput>;
    where?: Prisma.leaderboardWhereInput;
    limit?: number;
    include?: Prisma.leaderboardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type leaderboardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where: Prisma.leaderboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.leaderboardCreateInput, Prisma.leaderboardUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.leaderboardUpdateInput, Prisma.leaderboardUncheckedUpdateInput>;
};
export type leaderboardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
    where: Prisma.leaderboardWhereUniqueInput;
};
export type leaderboardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.leaderboardWhereInput;
    limit?: number;
};
export type leaderboard$minigamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where?: Prisma.minigamesWhereInput;
};
export type leaderboard$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type leaderboardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.leaderboardSelect<ExtArgs> | null;
    omit?: Prisma.leaderboardOmit<ExtArgs> | null;
    include?: Prisma.leaderboardInclude<ExtArgs> | null;
};
export {};
