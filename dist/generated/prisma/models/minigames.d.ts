import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type minigamesModel = runtime.Types.Result.DefaultSelection<Prisma.$minigamesPayload>;
export type AggregateMinigames = {
    _count: MinigamesCountAggregateOutputType | null;
    _avg: MinigamesAvgAggregateOutputType | null;
    _sum: MinigamesSumAggregateOutputType | null;
    _min: MinigamesMinAggregateOutputType | null;
    _max: MinigamesMaxAggregateOutputType | null;
};
export type MinigamesAvgAggregateOutputType = {
    game_id: number | null;
    created_by: number | null;
};
export type MinigamesSumAggregateOutputType = {
    game_id: number | null;
    created_by: number | null;
};
export type MinigamesMinAggregateOutputType = {
    game_id: number | null;
    name: string | null;
    description: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MinigamesMaxAggregateOutputType = {
    game_id: number | null;
    name: string | null;
    description: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type MinigamesCountAggregateOutputType = {
    game_id: number;
    name: number;
    description: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type MinigamesAvgAggregateInputType = {
    game_id?: true;
    created_by?: true;
};
export type MinigamesSumAggregateInputType = {
    game_id?: true;
    created_by?: true;
};
export type MinigamesMinAggregateInputType = {
    game_id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type MinigamesMaxAggregateInputType = {
    game_id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type MinigamesCountAggregateInputType = {
    game_id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type MinigamesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.minigamesWhereInput;
    orderBy?: Prisma.minigamesOrderByWithRelationInput | Prisma.minigamesOrderByWithRelationInput[];
    cursor?: Prisma.minigamesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MinigamesCountAggregateInputType;
    _avg?: MinigamesAvgAggregateInputType;
    _sum?: MinigamesSumAggregateInputType;
    _min?: MinigamesMinAggregateInputType;
    _max?: MinigamesMaxAggregateInputType;
};
export type GetMinigamesAggregateType<T extends MinigamesAggregateArgs> = {
    [P in keyof T & keyof AggregateMinigames]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMinigames[P]> : Prisma.GetScalarType<T[P], AggregateMinigames[P]>;
};
export type minigamesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.minigamesWhereInput;
    orderBy?: Prisma.minigamesOrderByWithAggregationInput | Prisma.minigamesOrderByWithAggregationInput[];
    by: Prisma.MinigamesScalarFieldEnum[] | Prisma.MinigamesScalarFieldEnum;
    having?: Prisma.minigamesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MinigamesCountAggregateInputType | true;
    _avg?: MinigamesAvgAggregateInputType;
    _sum?: MinigamesSumAggregateInputType;
    _min?: MinigamesMinAggregateInputType;
    _max?: MinigamesMaxAggregateInputType;
};
export type MinigamesGroupByOutputType = {
    game_id: number;
    name: string;
    description: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: MinigamesCountAggregateOutputType | null;
    _avg: MinigamesAvgAggregateOutputType | null;
    _sum: MinigamesSumAggregateOutputType | null;
    _min: MinigamesMinAggregateOutputType | null;
    _max: MinigamesMaxAggregateOutputType | null;
};
type GetMinigamesGroupByPayload<T extends minigamesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MinigamesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MinigamesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MinigamesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MinigamesGroupByOutputType[P]>;
}>>;
export type minigamesWhereInput = {
    AND?: Prisma.minigamesWhereInput | Prisma.minigamesWhereInput[];
    OR?: Prisma.minigamesWhereInput[];
    NOT?: Prisma.minigamesWhereInput | Prisma.minigamesWhereInput[];
    game_id?: Prisma.IntFilter<"minigames"> | number;
    name?: Prisma.StringFilter<"minigames"> | string;
    description?: Prisma.StringNullableFilter<"minigames"> | string | null;
    created_by?: Prisma.IntNullableFilter<"minigames"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
    leaderboard?: Prisma.LeaderboardListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type minigamesOrderByWithRelationInput = {
    game_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaderboard?: Prisma.leaderboardOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type minigamesWhereUniqueInput = Prisma.AtLeast<{
    game_id?: number;
    AND?: Prisma.minigamesWhereInput | Prisma.minigamesWhereInput[];
    OR?: Prisma.minigamesWhereInput[];
    NOT?: Prisma.minigamesWhereInput | Prisma.minigamesWhereInput[];
    name?: Prisma.StringFilter<"minigames"> | string;
    description?: Prisma.StringNullableFilter<"minigames"> | string | null;
    created_by?: Prisma.IntNullableFilter<"minigames"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
    leaderboard?: Prisma.LeaderboardListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "game_id">;
export type minigamesOrderByWithAggregationInput = {
    game_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.minigamesCountOrderByAggregateInput;
    _avg?: Prisma.minigamesAvgOrderByAggregateInput;
    _max?: Prisma.minigamesMaxOrderByAggregateInput;
    _min?: Prisma.minigamesMinOrderByAggregateInput;
    _sum?: Prisma.minigamesSumOrderByAggregateInput;
};
export type minigamesScalarWhereWithAggregatesInput = {
    AND?: Prisma.minigamesScalarWhereWithAggregatesInput | Prisma.minigamesScalarWhereWithAggregatesInput[];
    OR?: Prisma.minigamesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.minigamesScalarWhereWithAggregatesInput | Prisma.minigamesScalarWhereWithAggregatesInput[];
    game_id?: Prisma.IntWithAggregatesFilter<"minigames"> | number;
    name?: Prisma.StringWithAggregatesFilter<"minigames"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"minigames"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"minigames"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"minigames"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"minigames"> | Date | string | null;
};
export type minigamesCreateInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    leaderboard?: Prisma.leaderboardCreateNestedManyWithoutMinigamesInput;
    users?: Prisma.usersCreateNestedOneWithoutMinigamesInput;
};
export type minigamesUncheckedCreateInput = {
    game_id?: number;
    name: string;
    description?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    leaderboard?: Prisma.leaderboardUncheckedCreateNestedManyWithoutMinigamesInput;
};
export type minigamesUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaderboard?: Prisma.leaderboardUpdateManyWithoutMinigamesNestedInput;
    users?: Prisma.usersUpdateOneWithoutMinigamesNestedInput;
};
export type minigamesUncheckedUpdateInput = {
    game_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaderboard?: Prisma.leaderboardUncheckedUpdateManyWithoutMinigamesNestedInput;
};
export type minigamesCreateManyInput = {
    game_id?: number;
    name: string;
    description?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type minigamesUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type minigamesUncheckedUpdateManyInput = {
    game_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MinigamesNullableScalarRelationFilter = {
    is?: Prisma.minigamesWhereInput | null;
    isNot?: Prisma.minigamesWhereInput | null;
};
export type minigamesCountOrderByAggregateInput = {
    game_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type minigamesAvgOrderByAggregateInput = {
    game_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type minigamesMaxOrderByAggregateInput = {
    game_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type minigamesMinOrderByAggregateInput = {
    game_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type minigamesSumOrderByAggregateInput = {
    game_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type MinigamesListRelationFilter = {
    every?: Prisma.minigamesWhereInput;
    some?: Prisma.minigamesWhereInput;
    none?: Prisma.minigamesWhereInput;
};
export type minigamesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type minigamesCreateNestedOneWithoutLeaderboardInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutLeaderboardInput, Prisma.minigamesUncheckedCreateWithoutLeaderboardInput>;
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutLeaderboardInput;
    connect?: Prisma.minigamesWhereUniqueInput;
};
export type minigamesUpdateOneWithoutLeaderboardNestedInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutLeaderboardInput, Prisma.minigamesUncheckedCreateWithoutLeaderboardInput>;
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutLeaderboardInput;
    upsert?: Prisma.minigamesUpsertWithoutLeaderboardInput;
    disconnect?: Prisma.minigamesWhereInput | boolean;
    delete?: Prisma.minigamesWhereInput | boolean;
    connect?: Prisma.minigamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.minigamesUpdateToOneWithWhereWithoutLeaderboardInput, Prisma.minigamesUpdateWithoutLeaderboardInput>, Prisma.minigamesUncheckedUpdateWithoutLeaderboardInput>;
};
export type minigamesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput> | Prisma.minigamesCreateWithoutUsersInput[] | Prisma.minigamesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutUsersInput | Prisma.minigamesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.minigamesCreateManyUsersInputEnvelope;
    connect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
};
export type minigamesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput> | Prisma.minigamesCreateWithoutUsersInput[] | Prisma.minigamesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutUsersInput | Prisma.minigamesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.minigamesCreateManyUsersInputEnvelope;
    connect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
};
export type minigamesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput> | Prisma.minigamesCreateWithoutUsersInput[] | Prisma.minigamesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutUsersInput | Prisma.minigamesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.minigamesUpsertWithWhereUniqueWithoutUsersInput | Prisma.minigamesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.minigamesCreateManyUsersInputEnvelope;
    set?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    disconnect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    delete?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    connect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    update?: Prisma.minigamesUpdateWithWhereUniqueWithoutUsersInput | Prisma.minigamesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.minigamesUpdateManyWithWhereWithoutUsersInput | Prisma.minigamesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.minigamesScalarWhereInput | Prisma.minigamesScalarWhereInput[];
};
export type minigamesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput> | Prisma.minigamesCreateWithoutUsersInput[] | Prisma.minigamesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.minigamesCreateOrConnectWithoutUsersInput | Prisma.minigamesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.minigamesUpsertWithWhereUniqueWithoutUsersInput | Prisma.minigamesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.minigamesCreateManyUsersInputEnvelope;
    set?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    disconnect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    delete?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    connect?: Prisma.minigamesWhereUniqueInput | Prisma.minigamesWhereUniqueInput[];
    update?: Prisma.minigamesUpdateWithWhereUniqueWithoutUsersInput | Prisma.minigamesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.minigamesUpdateManyWithWhereWithoutUsersInput | Prisma.minigamesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.minigamesScalarWhereInput | Prisma.minigamesScalarWhereInput[];
};
export type minigamesCreateWithoutLeaderboardInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutMinigamesInput;
};
export type minigamesUncheckedCreateWithoutLeaderboardInput = {
    game_id?: number;
    name: string;
    description?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type minigamesCreateOrConnectWithoutLeaderboardInput = {
    where: Prisma.minigamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.minigamesCreateWithoutLeaderboardInput, Prisma.minigamesUncheckedCreateWithoutLeaderboardInput>;
};
export type minigamesUpsertWithoutLeaderboardInput = {
    update: Prisma.XOR<Prisma.minigamesUpdateWithoutLeaderboardInput, Prisma.minigamesUncheckedUpdateWithoutLeaderboardInput>;
    create: Prisma.XOR<Prisma.minigamesCreateWithoutLeaderboardInput, Prisma.minigamesUncheckedCreateWithoutLeaderboardInput>;
    where?: Prisma.minigamesWhereInput;
};
export type minigamesUpdateToOneWithWhereWithoutLeaderboardInput = {
    where?: Prisma.minigamesWhereInput;
    data: Prisma.XOR<Prisma.minigamesUpdateWithoutLeaderboardInput, Prisma.minigamesUncheckedUpdateWithoutLeaderboardInput>;
};
export type minigamesUpdateWithoutLeaderboardInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutMinigamesNestedInput;
};
export type minigamesUncheckedUpdateWithoutLeaderboardInput = {
    game_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type minigamesCreateWithoutUsersInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    leaderboard?: Prisma.leaderboardCreateNestedManyWithoutMinigamesInput;
};
export type minigamesUncheckedCreateWithoutUsersInput = {
    game_id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    leaderboard?: Prisma.leaderboardUncheckedCreateNestedManyWithoutMinigamesInput;
};
export type minigamesCreateOrConnectWithoutUsersInput = {
    where: Prisma.minigamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput>;
};
export type minigamesCreateManyUsersInputEnvelope = {
    data: Prisma.minigamesCreateManyUsersInput | Prisma.minigamesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type minigamesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.minigamesWhereUniqueInput;
    update: Prisma.XOR<Prisma.minigamesUpdateWithoutUsersInput, Prisma.minigamesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.minigamesCreateWithoutUsersInput, Prisma.minigamesUncheckedCreateWithoutUsersInput>;
};
export type minigamesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.minigamesWhereUniqueInput;
    data: Prisma.XOR<Prisma.minigamesUpdateWithoutUsersInput, Prisma.minigamesUncheckedUpdateWithoutUsersInput>;
};
export type minigamesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.minigamesScalarWhereInput;
    data: Prisma.XOR<Prisma.minigamesUpdateManyMutationInput, Prisma.minigamesUncheckedUpdateManyWithoutUsersInput>;
};
export type minigamesScalarWhereInput = {
    AND?: Prisma.minigamesScalarWhereInput | Prisma.minigamesScalarWhereInput[];
    OR?: Prisma.minigamesScalarWhereInput[];
    NOT?: Prisma.minigamesScalarWhereInput | Prisma.minigamesScalarWhereInput[];
    game_id?: Prisma.IntFilter<"minigames"> | number;
    name?: Prisma.StringFilter<"minigames"> | string;
    description?: Prisma.StringNullableFilter<"minigames"> | string | null;
    created_by?: Prisma.IntNullableFilter<"minigames"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"minigames"> | Date | string | null;
};
export type minigamesCreateManyUsersInput = {
    game_id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type minigamesUpdateWithoutUsersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaderboard?: Prisma.leaderboardUpdateManyWithoutMinigamesNestedInput;
};
export type minigamesUncheckedUpdateWithoutUsersInput = {
    game_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leaderboard?: Prisma.leaderboardUncheckedUpdateManyWithoutMinigamesNestedInput;
};
export type minigamesUncheckedUpdateManyWithoutUsersInput = {
    game_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MinigamesCountOutputType = {
    leaderboard: number;
};
export type MinigamesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderboard?: boolean | MinigamesCountOutputTypeCountLeaderboardArgs;
};
export type MinigamesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MinigamesCountOutputTypeSelect<ExtArgs> | null;
};
export type MinigamesCountOutputTypeCountLeaderboardArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.leaderboardWhereInput;
};
export type minigamesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    game_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    leaderboard?: boolean | Prisma.minigames$leaderboardArgs<ExtArgs>;
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.MinigamesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["minigames"]>;
export type minigamesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    game_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
}, ExtArgs["result"]["minigames"]>;
export type minigamesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    game_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
}, ExtArgs["result"]["minigames"]>;
export type minigamesSelectScalar = {
    game_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type minigamesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"game_id" | "name" | "description" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["minigames"]>;
export type minigamesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leaderboard?: boolean | Prisma.minigames$leaderboardArgs<ExtArgs>;
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
    _count?: boolean | Prisma.MinigamesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type minigamesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
};
export type minigamesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.minigames$usersArgs<ExtArgs>;
};
export type $minigamesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "minigames";
    objects: {
        leaderboard: Prisma.$leaderboardPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        game_id: number;
        name: string;
        description: string | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["minigames"]>;
    composites: {};
};
export type minigamesGetPayload<S extends boolean | null | undefined | minigamesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$minigamesPayload, S>;
export type minigamesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<minigamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MinigamesCountAggregateInputType | true;
};
export interface minigamesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['minigames'];
        meta: {
            name: 'minigames';
        };
    };
    findUnique<T extends minigamesFindUniqueArgs>(args: Prisma.SelectSubset<T, minigamesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends minigamesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, minigamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends minigamesFindFirstArgs>(args?: Prisma.SelectSubset<T, minigamesFindFirstArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends minigamesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, minigamesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends minigamesFindManyArgs>(args?: Prisma.SelectSubset<T, minigamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends minigamesCreateArgs>(args: Prisma.SelectSubset<T, minigamesCreateArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends minigamesCreateManyArgs>(args?: Prisma.SelectSubset<T, minigamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends minigamesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, minigamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends minigamesDeleteArgs>(args: Prisma.SelectSubset<T, minigamesDeleteArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends minigamesUpdateArgs>(args: Prisma.SelectSubset<T, minigamesUpdateArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends minigamesDeleteManyArgs>(args?: Prisma.SelectSubset<T, minigamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends minigamesUpdateManyArgs>(args: Prisma.SelectSubset<T, minigamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends minigamesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, minigamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends minigamesUpsertArgs>(args: Prisma.SelectSubset<T, minigamesUpsertArgs<ExtArgs>>): Prisma.Prisma__minigamesClient<runtime.Types.Result.GetResult<Prisma.$minigamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends minigamesCountArgs>(args?: Prisma.Subset<T, minigamesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MinigamesCountAggregateOutputType> : number>;
    aggregate<T extends MinigamesAggregateArgs>(args: Prisma.Subset<T, MinigamesAggregateArgs>): Prisma.PrismaPromise<GetMinigamesAggregateType<T>>;
    groupBy<T extends minigamesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: minigamesGroupByArgs['orderBy'];
    } : {
        orderBy?: minigamesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, minigamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinigamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: minigamesFieldRefs;
}
export interface Prisma__minigamesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    leaderboard<T extends Prisma.minigames$leaderboardArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.minigames$leaderboardArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$leaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.minigames$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.minigames$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface minigamesFieldRefs {
    readonly game_id: Prisma.FieldRef<"minigames", 'Int'>;
    readonly name: Prisma.FieldRef<"minigames", 'String'>;
    readonly description: Prisma.FieldRef<"minigames", 'String'>;
    readonly created_by: Prisma.FieldRef<"minigames", 'Int'>;
    readonly created_at: Prisma.FieldRef<"minigames", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"minigames", 'DateTime'>;
}
export type minigamesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where: Prisma.minigamesWhereUniqueInput;
};
export type minigamesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where: Prisma.minigamesWhereUniqueInput;
};
export type minigamesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where?: Prisma.minigamesWhereInput;
    orderBy?: Prisma.minigamesOrderByWithRelationInput | Prisma.minigamesOrderByWithRelationInput[];
    cursor?: Prisma.minigamesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MinigamesScalarFieldEnum | Prisma.MinigamesScalarFieldEnum[];
};
export type minigamesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where?: Prisma.minigamesWhereInput;
    orderBy?: Prisma.minigamesOrderByWithRelationInput | Prisma.minigamesOrderByWithRelationInput[];
    cursor?: Prisma.minigamesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MinigamesScalarFieldEnum | Prisma.MinigamesScalarFieldEnum[];
};
export type minigamesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where?: Prisma.minigamesWhereInput;
    orderBy?: Prisma.minigamesOrderByWithRelationInput | Prisma.minigamesOrderByWithRelationInput[];
    cursor?: Prisma.minigamesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MinigamesScalarFieldEnum | Prisma.MinigamesScalarFieldEnum[];
};
export type minigamesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.minigamesCreateInput, Prisma.minigamesUncheckedCreateInput>;
};
export type minigamesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.minigamesCreateManyInput | Prisma.minigamesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type minigamesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    data: Prisma.minigamesCreateManyInput | Prisma.minigamesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.minigamesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type minigamesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.minigamesUpdateInput, Prisma.minigamesUncheckedUpdateInput>;
    where: Prisma.minigamesWhereUniqueInput;
};
export type minigamesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.minigamesUpdateManyMutationInput, Prisma.minigamesUncheckedUpdateManyInput>;
    where?: Prisma.minigamesWhereInput;
    limit?: number;
};
export type minigamesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.minigamesUpdateManyMutationInput, Prisma.minigamesUncheckedUpdateManyInput>;
    where?: Prisma.minigamesWhereInput;
    limit?: number;
    include?: Prisma.minigamesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type minigamesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where: Prisma.minigamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.minigamesCreateInput, Prisma.minigamesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.minigamesUpdateInput, Prisma.minigamesUncheckedUpdateInput>;
};
export type minigamesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
    where: Prisma.minigamesWhereUniqueInput;
};
export type minigamesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.minigamesWhereInput;
    limit?: number;
};
export type minigames$leaderboardArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type minigames$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type minigamesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.minigamesSelect<ExtArgs> | null;
    omit?: Prisma.minigamesOmit<ExtArgs> | null;
    include?: Prisma.minigamesInclude<ExtArgs> | null;
};
export {};
