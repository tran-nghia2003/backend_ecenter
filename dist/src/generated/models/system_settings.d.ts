import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type system_settingsModel = runtime.Types.Result.DefaultSelection<Prisma.$system_settingsPayload>;
export type AggregateSystem_settings = {
    _count: System_settingsCountAggregateOutputType | null;
    _avg: System_settingsAvgAggregateOutputType | null;
    _sum: System_settingsSumAggregateOutputType | null;
    _min: System_settingsMinAggregateOutputType | null;
    _max: System_settingsMaxAggregateOutputType | null;
};
export type System_settingsAvgAggregateOutputType = {
    setting_id: number | null;
    created_by: number | null;
};
export type System_settingsSumAggregateOutputType = {
    setting_id: number | null;
    created_by: number | null;
};
export type System_settingsMinAggregateOutputType = {
    setting_id: number | null;
    key: string | null;
    value: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type System_settingsMaxAggregateOutputType = {
    setting_id: number | null;
    key: string | null;
    value: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type System_settingsCountAggregateOutputType = {
    setting_id: number;
    key: number;
    value: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type System_settingsAvgAggregateInputType = {
    setting_id?: true;
    created_by?: true;
};
export type System_settingsSumAggregateInputType = {
    setting_id?: true;
    created_by?: true;
};
export type System_settingsMinAggregateInputType = {
    setting_id?: true;
    key?: true;
    value?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type System_settingsMaxAggregateInputType = {
    setting_id?: true;
    key?: true;
    value?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type System_settingsCountAggregateInputType = {
    setting_id?: true;
    key?: true;
    value?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type System_settingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | System_settingsCountAggregateInputType;
    _avg?: System_settingsAvgAggregateInputType;
    _sum?: System_settingsSumAggregateInputType;
    _min?: System_settingsMinAggregateInputType;
    _max?: System_settingsMaxAggregateInputType;
};
export type GetSystem_settingsAggregateType<T extends System_settingsAggregateArgs> = {
    [P in keyof T & keyof AggregateSystem_settings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystem_settings[P]> : Prisma.GetScalarType<T[P], AggregateSystem_settings[P]>;
};
export type system_settingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithAggregationInput | Prisma.system_settingsOrderByWithAggregationInput[];
    by: Prisma.System_settingsScalarFieldEnum[] | Prisma.System_settingsScalarFieldEnum;
    having?: Prisma.system_settingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: System_settingsCountAggregateInputType | true;
    _avg?: System_settingsAvgAggregateInputType;
    _sum?: System_settingsSumAggregateInputType;
    _min?: System_settingsMinAggregateInputType;
    _max?: System_settingsMaxAggregateInputType;
};
export type System_settingsGroupByOutputType = {
    setting_id: number;
    key: string;
    value: string | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: System_settingsCountAggregateOutputType | null;
    _avg: System_settingsAvgAggregateOutputType | null;
    _sum: System_settingsSumAggregateOutputType | null;
    _min: System_settingsMinAggregateOutputType | null;
    _max: System_settingsMaxAggregateOutputType | null;
};
type GetSystem_settingsGroupByPayload<T extends system_settingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<System_settingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof System_settingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], System_settingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], System_settingsGroupByOutputType[P]>;
}>>;
export type system_settingsWhereInput = {
    AND?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    OR?: Prisma.system_settingsWhereInput[];
    NOT?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    setting_id?: Prisma.IntFilter<"system_settings"> | number;
    key?: Prisma.StringFilter<"system_settings"> | string;
    value?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    created_by?: Prisma.IntNullableFilter<"system_settings"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    creator?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type system_settingsOrderByWithRelationInput = {
    setting_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    creator?: Prisma.usersOrderByWithRelationInput;
};
export type system_settingsWhereUniqueInput = Prisma.AtLeast<{
    setting_id?: number;
    key?: string;
    AND?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    OR?: Prisma.system_settingsWhereInput[];
    NOT?: Prisma.system_settingsWhereInput | Prisma.system_settingsWhereInput[];
    value?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    created_by?: Prisma.IntNullableFilter<"system_settings"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    creator?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "setting_id" | "key">;
export type system_settingsOrderByWithAggregationInput = {
    setting_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.system_settingsCountOrderByAggregateInput;
    _avg?: Prisma.system_settingsAvgOrderByAggregateInput;
    _max?: Prisma.system_settingsMaxOrderByAggregateInput;
    _min?: Prisma.system_settingsMinOrderByAggregateInput;
    _sum?: Prisma.system_settingsSumOrderByAggregateInput;
};
export type system_settingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.system_settingsScalarWhereWithAggregatesInput | Prisma.system_settingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.system_settingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.system_settingsScalarWhereWithAggregatesInput | Prisma.system_settingsScalarWhereWithAggregatesInput[];
    setting_id?: Prisma.IntWithAggregatesFilter<"system_settings"> | number;
    key?: Prisma.StringWithAggregatesFilter<"system_settings"> | string;
    value?: Prisma.StringNullableWithAggregatesFilter<"system_settings"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"system_settings"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"system_settings"> | Date | string | null;
};
export type system_settingsCreateInput = {
    key: string;
    value?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    creator?: Prisma.usersCreateNestedOneWithoutSystem_settings_createdInput;
};
export type system_settingsUncheckedCreateInput = {
    setting_id?: number;
    key: string;
    value?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    creator?: Prisma.usersUpdateOneWithoutSystem_settings_createdNestedInput;
};
export type system_settingsUncheckedUpdateInput = {
    setting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsCreateManyInput = {
    setting_id?: number;
    key: string;
    value?: string | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsUncheckedUpdateManyInput = {
    setting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type System_settingsListRelationFilter = {
    every?: Prisma.system_settingsWhereInput;
    some?: Prisma.system_settingsWhereInput;
    none?: Prisma.system_settingsWhereInput;
};
export type system_settingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type system_settingsCountOrderByAggregateInput = {
    setting_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsAvgOrderByAggregateInput = {
    setting_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type system_settingsMaxOrderByAggregateInput = {
    setting_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsMinOrderByAggregateInput = {
    setting_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type system_settingsSumOrderByAggregateInput = {
    setting_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type system_settingsCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput> | Prisma.system_settingsCreateWithoutCreatorInput[] | Prisma.system_settingsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.system_settingsCreateOrConnectWithoutCreatorInput | Prisma.system_settingsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.system_settingsCreateManyCreatorInputEnvelope;
    connect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
};
export type system_settingsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput> | Prisma.system_settingsCreateWithoutCreatorInput[] | Prisma.system_settingsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.system_settingsCreateOrConnectWithoutCreatorInput | Prisma.system_settingsCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.system_settingsCreateManyCreatorInputEnvelope;
    connect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
};
export type system_settingsUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput> | Prisma.system_settingsCreateWithoutCreatorInput[] | Prisma.system_settingsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.system_settingsCreateOrConnectWithoutCreatorInput | Prisma.system_settingsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.system_settingsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.system_settingsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.system_settingsCreateManyCreatorInputEnvelope;
    set?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    disconnect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    delete?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    connect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    update?: Prisma.system_settingsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.system_settingsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.system_settingsUpdateManyWithWhereWithoutCreatorInput | Prisma.system_settingsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.system_settingsScalarWhereInput | Prisma.system_settingsScalarWhereInput[];
};
export type system_settingsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput> | Prisma.system_settingsCreateWithoutCreatorInput[] | Prisma.system_settingsUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.system_settingsCreateOrConnectWithoutCreatorInput | Prisma.system_settingsCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.system_settingsUpsertWithWhereUniqueWithoutCreatorInput | Prisma.system_settingsUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.system_settingsCreateManyCreatorInputEnvelope;
    set?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    disconnect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    delete?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    connect?: Prisma.system_settingsWhereUniqueInput | Prisma.system_settingsWhereUniqueInput[];
    update?: Prisma.system_settingsUpdateWithWhereUniqueWithoutCreatorInput | Prisma.system_settingsUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.system_settingsUpdateManyWithWhereWithoutCreatorInput | Prisma.system_settingsUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.system_settingsScalarWhereInput | Prisma.system_settingsScalarWhereInput[];
};
export type system_settingsCreateWithoutCreatorInput = {
    key: string;
    value?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUncheckedCreateWithoutCreatorInput = {
    setting_id?: number;
    key: string;
    value?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsCreateOrConnectWithoutCreatorInput = {
    where: Prisma.system_settingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput>;
};
export type system_settingsCreateManyCreatorInputEnvelope = {
    data: Prisma.system_settingsCreateManyCreatorInput | Prisma.system_settingsCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type system_settingsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.system_settingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.system_settingsUpdateWithoutCreatorInput, Prisma.system_settingsUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.system_settingsCreateWithoutCreatorInput, Prisma.system_settingsUncheckedCreateWithoutCreatorInput>;
};
export type system_settingsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.system_settingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.system_settingsUpdateWithoutCreatorInput, Prisma.system_settingsUncheckedUpdateWithoutCreatorInput>;
};
export type system_settingsUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.system_settingsScalarWhereInput;
    data: Prisma.XOR<Prisma.system_settingsUpdateManyMutationInput, Prisma.system_settingsUncheckedUpdateManyWithoutCreatorInput>;
};
export type system_settingsScalarWhereInput = {
    AND?: Prisma.system_settingsScalarWhereInput | Prisma.system_settingsScalarWhereInput[];
    OR?: Prisma.system_settingsScalarWhereInput[];
    NOT?: Prisma.system_settingsScalarWhereInput | Prisma.system_settingsScalarWhereInput[];
    setting_id?: Prisma.IntFilter<"system_settings"> | number;
    key?: Prisma.StringFilter<"system_settings"> | string;
    value?: Prisma.StringNullableFilter<"system_settings"> | string | null;
    created_by?: Prisma.IntNullableFilter<"system_settings"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"system_settings"> | Date | string | null;
};
export type system_settingsCreateManyCreatorInput = {
    setting_id?: number;
    key: string;
    value?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type system_settingsUpdateWithoutCreatorInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsUncheckedUpdateWithoutCreatorInput = {
    setting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsUncheckedUpdateManyWithoutCreatorInput = {
    setting_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type system_settingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    setting_id?: boolean;
    key?: boolean;
    value?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["system_settings"]>;
export type system_settingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    setting_id?: boolean;
    key?: boolean;
    value?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["system_settings"]>;
export type system_settingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    setting_id?: boolean;
    key?: boolean;
    value?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
}, ExtArgs["result"]["system_settings"]>;
export type system_settingsSelectScalar = {
    setting_id?: boolean;
    key?: boolean;
    value?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type system_settingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"setting_id" | "key" | "value" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["system_settings"]>;
export type system_settingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
};
export type system_settingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
};
export type system_settingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.system_settings$creatorArgs<ExtArgs>;
};
export type $system_settingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "system_settings";
    objects: {
        creator: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        setting_id: number;
        key: string;
        value: string | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["system_settings"]>;
    composites: {};
};
export type system_settingsGetPayload<S extends boolean | null | undefined | system_settingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$system_settingsPayload, S>;
export type system_settingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<system_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: System_settingsCountAggregateInputType | true;
};
export interface system_settingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['system_settings'];
        meta: {
            name: 'system_settings';
        };
    };
    findUnique<T extends system_settingsFindUniqueArgs>(args: Prisma.SelectSubset<T, system_settingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends system_settingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, system_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends system_settingsFindFirstArgs>(args?: Prisma.SelectSubset<T, system_settingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends system_settingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, system_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends system_settingsFindManyArgs>(args?: Prisma.SelectSubset<T, system_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends system_settingsCreateArgs>(args: Prisma.SelectSubset<T, system_settingsCreateArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends system_settingsCreateManyArgs>(args?: Prisma.SelectSubset<T, system_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends system_settingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, system_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends system_settingsDeleteArgs>(args: Prisma.SelectSubset<T, system_settingsDeleteArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends system_settingsUpdateArgs>(args: Prisma.SelectSubset<T, system_settingsUpdateArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends system_settingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, system_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends system_settingsUpdateManyArgs>(args: Prisma.SelectSubset<T, system_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends system_settingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, system_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends system_settingsUpsertArgs>(args: Prisma.SelectSubset<T, system_settingsUpsertArgs<ExtArgs>>): Prisma.Prisma__system_settingsClient<runtime.Types.Result.GetResult<Prisma.$system_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends system_settingsCountArgs>(args?: Prisma.Subset<T, system_settingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], System_settingsCountAggregateOutputType> : number>;
    aggregate<T extends System_settingsAggregateArgs>(args: Prisma.Subset<T, System_settingsAggregateArgs>): Prisma.PrismaPromise<GetSystem_settingsAggregateType<T>>;
    groupBy<T extends system_settingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: system_settingsGroupByArgs['orderBy'];
    } : {
        orderBy?: system_settingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, system_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: system_settingsFieldRefs;
}
export interface Prisma__system_settingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.system_settings$creatorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.system_settings$creatorArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface system_settingsFieldRefs {
    readonly setting_id: Prisma.FieldRef<"system_settings", 'Int'>;
    readonly key: Prisma.FieldRef<"system_settings", 'String'>;
    readonly value: Prisma.FieldRef<"system_settings", 'String'>;
    readonly created_by: Prisma.FieldRef<"system_settings", 'Int'>;
    readonly created_at: Prisma.FieldRef<"system_settings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"system_settings", 'DateTime'>;
}
export type system_settingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where?: Prisma.system_settingsWhereInput;
    orderBy?: Prisma.system_settingsOrderByWithRelationInput | Prisma.system_settingsOrderByWithRelationInput[];
    cursor?: Prisma.system_settingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.System_settingsScalarFieldEnum | Prisma.System_settingsScalarFieldEnum[];
};
export type system_settingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.system_settingsCreateInput, Prisma.system_settingsUncheckedCreateInput>;
};
export type system_settingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.system_settingsCreateManyInput | Prisma.system_settingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type system_settingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    data: Prisma.system_settingsCreateManyInput | Prisma.system_settingsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.system_settingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type system_settingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.system_settingsUpdateInput, Prisma.system_settingsUncheckedUpdateInput>;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.system_settingsUpdateManyMutationInput, Prisma.system_settingsUncheckedUpdateManyInput>;
    where?: Prisma.system_settingsWhereInput;
    limit?: number;
};
export type system_settingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.system_settingsUpdateManyMutationInput, Prisma.system_settingsUncheckedUpdateManyInput>;
    where?: Prisma.system_settingsWhereInput;
    limit?: number;
    include?: Prisma.system_settingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type system_settingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.system_settingsCreateInput, Prisma.system_settingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.system_settingsUpdateInput, Prisma.system_settingsUncheckedUpdateInput>;
};
export type system_settingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
    where: Prisma.system_settingsWhereUniqueInput;
};
export type system_settingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.system_settingsWhereInput;
    limit?: number;
};
export type system_settings$creatorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type system_settingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.system_settingsSelect<ExtArgs> | null;
    omit?: Prisma.system_settingsOmit<ExtArgs> | null;
    include?: Prisma.system_settingsInclude<ExtArgs> | null;
};
export {};
