import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type activity_logsModel = runtime.Types.Result.DefaultSelection<Prisma.$activity_logsPayload>;
export type AggregateActivity_logs = {
    _count: Activity_logsCountAggregateOutputType | null;
    _avg: Activity_logsAvgAggregateOutputType | null;
    _sum: Activity_logsSumAggregateOutputType | null;
    _min: Activity_logsMinAggregateOutputType | null;
    _max: Activity_logsMaxAggregateOutputType | null;
};
export type Activity_logsAvgAggregateOutputType = {
    log_id: number | null;
    user_id: number | null;
};
export type Activity_logsSumAggregateOutputType = {
    log_id: number | null;
    user_id: number | null;
};
export type Activity_logsMinAggregateOutputType = {
    log_id: number | null;
    user_id: number | null;
    action: string | null;
    created_at: Date | null;
};
export type Activity_logsMaxAggregateOutputType = {
    log_id: number | null;
    user_id: number | null;
    action: string | null;
    created_at: Date | null;
};
export type Activity_logsCountAggregateOutputType = {
    log_id: number;
    user_id: number;
    action: number;
    details: number;
    created_at: number;
    _all: number;
};
export type Activity_logsAvgAggregateInputType = {
    log_id?: true;
    user_id?: true;
};
export type Activity_logsSumAggregateInputType = {
    log_id?: true;
    user_id?: true;
};
export type Activity_logsMinAggregateInputType = {
    log_id?: true;
    user_id?: true;
    action?: true;
    created_at?: true;
};
export type Activity_logsMaxAggregateInputType = {
    log_id?: true;
    user_id?: true;
    action?: true;
    created_at?: true;
};
export type Activity_logsCountAggregateInputType = {
    log_id?: true;
    user_id?: true;
    action?: true;
    details?: true;
    created_at?: true;
    _all?: true;
};
export type Activity_logsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Activity_logsCountAggregateInputType;
    _avg?: Activity_logsAvgAggregateInputType;
    _sum?: Activity_logsSumAggregateInputType;
    _min?: Activity_logsMinAggregateInputType;
    _max?: Activity_logsMaxAggregateInputType;
};
export type GetActivity_logsAggregateType<T extends Activity_logsAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity_logs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivity_logs[P]> : Prisma.GetScalarType<T[P], AggregateActivity_logs[P]>;
};
export type activity_logsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithAggregationInput | Prisma.activity_logsOrderByWithAggregationInput[];
    by: Prisma.Activity_logsScalarFieldEnum[] | Prisma.Activity_logsScalarFieldEnum;
    having?: Prisma.activity_logsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Activity_logsCountAggregateInputType | true;
    _avg?: Activity_logsAvgAggregateInputType;
    _sum?: Activity_logsSumAggregateInputType;
    _min?: Activity_logsMinAggregateInputType;
    _max?: Activity_logsMaxAggregateInputType;
};
export type Activity_logsGroupByOutputType = {
    log_id: number;
    user_id: number | null;
    action: string | null;
    details: runtime.JsonValue | null;
    created_at: Date | null;
    _count: Activity_logsCountAggregateOutputType | null;
    _avg: Activity_logsAvgAggregateOutputType | null;
    _sum: Activity_logsSumAggregateOutputType | null;
    _min: Activity_logsMinAggregateOutputType | null;
    _max: Activity_logsMaxAggregateOutputType | null;
};
type GetActivity_logsGroupByPayload<T extends activity_logsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Activity_logsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Activity_logsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Activity_logsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Activity_logsGroupByOutputType[P]>;
}>>;
export type activity_logsWhereInput = {
    AND?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    OR?: Prisma.activity_logsWhereInput[];
    NOT?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    log_id?: Prisma.IntFilter<"activity_logs"> | number;
    user_id?: Prisma.IntNullableFilter<"activity_logs"> | number | null;
    action?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    details?: Prisma.JsonNullableFilter<"activity_logs">;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type activity_logsOrderByWithRelationInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type activity_logsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number;
    AND?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    OR?: Prisma.activity_logsWhereInput[];
    NOT?: Prisma.activity_logsWhereInput | Prisma.activity_logsWhereInput[];
    user_id?: Prisma.IntNullableFilter<"activity_logs"> | number | null;
    action?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    details?: Prisma.JsonNullableFilter<"activity_logs">;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "log_id">;
export type activity_logsOrderByWithAggregationInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.activity_logsCountOrderByAggregateInput;
    _avg?: Prisma.activity_logsAvgOrderByAggregateInput;
    _max?: Prisma.activity_logsMaxOrderByAggregateInput;
    _min?: Prisma.activity_logsMinOrderByAggregateInput;
    _sum?: Prisma.activity_logsSumOrderByAggregateInput;
};
export type activity_logsScalarWhereWithAggregatesInput = {
    AND?: Prisma.activity_logsScalarWhereWithAggregatesInput | Prisma.activity_logsScalarWhereWithAggregatesInput[];
    OR?: Prisma.activity_logsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.activity_logsScalarWhereWithAggregatesInput | Prisma.activity_logsScalarWhereWithAggregatesInput[];
    log_id?: Prisma.IntWithAggregatesFilter<"activity_logs"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"activity_logs"> | number | null;
    action?: Prisma.StringNullableWithAggregatesFilter<"activity_logs"> | string | null;
    details?: Prisma.JsonNullableWithAggregatesFilter<"activity_logs">;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"activity_logs"> | Date | string | null;
};
export type activity_logsCreateInput = {
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutActivity_logsInput;
};
export type activity_logsUncheckedCreateInput = {
    log_id?: number;
    user_id?: number | null;
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
};
export type activity_logsUpdateInput = {
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutActivity_logsNestedInput;
};
export type activity_logsUncheckedUpdateInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsCreateManyInput = {
    log_id?: number;
    user_id?: number | null;
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
};
export type activity_logsUpdateManyMutationInput = {
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateManyInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsCountOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type activity_logsAvgOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type activity_logsMaxOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type activity_logsMinOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type activity_logsSumOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type Activity_logsListRelationFilter = {
    every?: Prisma.activity_logsWhereInput;
    some?: Prisma.activity_logsWhereInput;
    none?: Prisma.activity_logsWhereInput;
};
export type activity_logsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type activity_logsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
};
export type activity_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
};
export type activity_logsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    set?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    disconnect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    delete?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    update?: Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput | Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
};
export type activity_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput> | Prisma.activity_logsCreateWithoutUsersInput[] | Prisma.activity_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.activity_logsCreateOrConnectWithoutUsersInput | Prisma.activity_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.activity_logsCreateManyUsersInputEnvelope;
    set?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    disconnect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    delete?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    connect?: Prisma.activity_logsWhereUniqueInput | Prisma.activity_logsWhereUniqueInput[];
    update?: Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.activity_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput | Prisma.activity_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
};
export type activity_logsCreateWithoutUsersInput = {
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
};
export type activity_logsUncheckedCreateWithoutUsersInput = {
    log_id?: number;
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
};
export type activity_logsCreateOrConnectWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput>;
};
export type activity_logsCreateManyUsersInputEnvelope = {
    data: Prisma.activity_logsCreateManyUsersInput | Prisma.activity_logsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type activity_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    update: Prisma.XOR<Prisma.activity_logsUpdateWithoutUsersInput, Prisma.activity_logsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.activity_logsCreateWithoutUsersInput, Prisma.activity_logsUncheckedCreateWithoutUsersInput>;
};
export type activity_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.activity_logsWhereUniqueInput;
    data: Prisma.XOR<Prisma.activity_logsUpdateWithoutUsersInput, Prisma.activity_logsUncheckedUpdateWithoutUsersInput>;
};
export type activity_logsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.activity_logsScalarWhereInput;
    data: Prisma.XOR<Prisma.activity_logsUpdateManyMutationInput, Prisma.activity_logsUncheckedUpdateManyWithoutUsersInput>;
};
export type activity_logsScalarWhereInput = {
    AND?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
    OR?: Prisma.activity_logsScalarWhereInput[];
    NOT?: Prisma.activity_logsScalarWhereInput | Prisma.activity_logsScalarWhereInput[];
    log_id?: Prisma.IntFilter<"activity_logs"> | number;
    user_id?: Prisma.IntNullableFilter<"activity_logs"> | number | null;
    action?: Prisma.StringNullableFilter<"activity_logs"> | string | null;
    details?: Prisma.JsonNullableFilter<"activity_logs">;
    created_at?: Prisma.DateTimeNullableFilter<"activity_logs"> | Date | string | null;
};
export type activity_logsCreateManyUsersInput = {
    log_id?: number;
    action?: string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string | null;
};
export type activity_logsUpdateWithoutUsersInput = {
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateWithoutUsersInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsUncheckedUpdateManyWithoutUsersInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type activity_logsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    user_id?: boolean;
    action?: boolean;
    details?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
}, ExtArgs["result"]["activity_logs"]>;
export type activity_logsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    user_id?: boolean;
    action?: boolean;
    details?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
}, ExtArgs["result"]["activity_logs"]>;
export type activity_logsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    user_id?: boolean;
    action?: boolean;
    details?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
}, ExtArgs["result"]["activity_logs"]>;
export type activity_logsSelectScalar = {
    log_id?: boolean;
    user_id?: boolean;
    action?: boolean;
    details?: boolean;
    created_at?: boolean;
};
export type activity_logsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"log_id" | "user_id" | "action" | "details" | "created_at", ExtArgs["result"]["activity_logs"]>;
export type activity_logsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
};
export type activity_logsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
};
export type activity_logsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.activity_logs$usersArgs<ExtArgs>;
};
export type $activity_logsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "activity_logs";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        log_id: number;
        user_id: number | null;
        action: string | null;
        details: runtime.JsonValue | null;
        created_at: Date | null;
    }, ExtArgs["result"]["activity_logs"]>;
    composites: {};
};
export type activity_logsGetPayload<S extends boolean | null | undefined | activity_logsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$activity_logsPayload, S>;
export type activity_logsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<activity_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Activity_logsCountAggregateInputType | true;
};
export interface activity_logsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['activity_logs'];
        meta: {
            name: 'activity_logs';
        };
    };
    findUnique<T extends activity_logsFindUniqueArgs>(args: Prisma.SelectSubset<T, activity_logsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends activity_logsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, activity_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends activity_logsFindFirstArgs>(args?: Prisma.SelectSubset<T, activity_logsFindFirstArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends activity_logsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, activity_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends activity_logsFindManyArgs>(args?: Prisma.SelectSubset<T, activity_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends activity_logsCreateArgs>(args: Prisma.SelectSubset<T, activity_logsCreateArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends activity_logsCreateManyArgs>(args?: Prisma.SelectSubset<T, activity_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends activity_logsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, activity_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends activity_logsDeleteArgs>(args: Prisma.SelectSubset<T, activity_logsDeleteArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends activity_logsUpdateArgs>(args: Prisma.SelectSubset<T, activity_logsUpdateArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends activity_logsDeleteManyArgs>(args?: Prisma.SelectSubset<T, activity_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends activity_logsUpdateManyArgs>(args: Prisma.SelectSubset<T, activity_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends activity_logsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, activity_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends activity_logsUpsertArgs>(args: Prisma.SelectSubset<T, activity_logsUpsertArgs<ExtArgs>>): Prisma.Prisma__activity_logsClient<runtime.Types.Result.GetResult<Prisma.$activity_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends activity_logsCountArgs>(args?: Prisma.Subset<T, activity_logsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Activity_logsCountAggregateOutputType> : number>;
    aggregate<T extends Activity_logsAggregateArgs>(args: Prisma.Subset<T, Activity_logsAggregateArgs>): Prisma.PrismaPromise<GetActivity_logsAggregateType<T>>;
    groupBy<T extends activity_logsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: activity_logsGroupByArgs['orderBy'];
    } : {
        orderBy?: activity_logsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, activity_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: activity_logsFieldRefs;
}
export interface Prisma__activity_logsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.activity_logs$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.activity_logs$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface activity_logsFieldRefs {
    readonly log_id: Prisma.FieldRef<"activity_logs", 'Int'>;
    readonly user_id: Prisma.FieldRef<"activity_logs", 'Int'>;
    readonly action: Prisma.FieldRef<"activity_logs", 'String'>;
    readonly details: Prisma.FieldRef<"activity_logs", 'Json'>;
    readonly created_at: Prisma.FieldRef<"activity_logs", 'DateTime'>;
}
export type activity_logsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where?: Prisma.activity_logsWhereInput;
    orderBy?: Prisma.activity_logsOrderByWithRelationInput | Prisma.activity_logsOrderByWithRelationInput[];
    cursor?: Prisma.activity_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_logsScalarFieldEnum | Prisma.Activity_logsScalarFieldEnum[];
};
export type activity_logsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.activity_logsCreateInput, Prisma.activity_logsUncheckedCreateInput>;
};
export type activity_logsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.activity_logsCreateManyInput | Prisma.activity_logsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type activity_logsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    data: Prisma.activity_logsCreateManyInput | Prisma.activity_logsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.activity_logsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type activity_logsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_logsUpdateInput, Prisma.activity_logsUncheckedUpdateInput>;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.activity_logsUpdateManyMutationInput, Prisma.activity_logsUncheckedUpdateManyInput>;
    where?: Prisma.activity_logsWhereInput;
    limit?: number;
};
export type activity_logsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_logsUpdateManyMutationInput, Prisma.activity_logsUncheckedUpdateManyInput>;
    where?: Prisma.activity_logsWhereInput;
    limit?: number;
    include?: Prisma.activity_logsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type activity_logsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_logsCreateInput, Prisma.activity_logsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.activity_logsUpdateInput, Prisma.activity_logsUncheckedUpdateInput>;
};
export type activity_logsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
    where: Prisma.activity_logsWhereUniqueInput;
};
export type activity_logsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_logsWhereInput;
    limit?: number;
};
export type activity_logs$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type activity_logsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_logsSelect<ExtArgs> | null;
    omit?: Prisma.activity_logsOmit<ExtArgs> | null;
    include?: Prisma.activity_logsInclude<ExtArgs> | null;
};
export {};
