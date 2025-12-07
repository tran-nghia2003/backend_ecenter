import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type rolesModel = runtime.Types.Result.DefaultSelection<Prisma.$rolesPayload>;
export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
export type RolesAvgAggregateOutputType = {
    role_id: number | null;
};
export type RolesSumAggregateOutputType = {
    role_id: number | null;
};
export type RolesMinAggregateOutputType = {
    role_id: number | null;
    role_name: string | null;
    display_name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type RolesMaxAggregateOutputType = {
    role_id: number | null;
    role_name: string | null;
    display_name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type RolesCountAggregateOutputType = {
    role_id: number;
    role_name: number;
    display_name: number;
    description: number;
    created_at: number;
    _all: number;
};
export type RolesAvgAggregateInputType = {
    role_id?: true;
};
export type RolesSumAggregateInputType = {
    role_id?: true;
};
export type RolesMinAggregateInputType = {
    role_id?: true;
    role_name?: true;
    display_name?: true;
    description?: true;
    created_at?: true;
};
export type RolesMaxAggregateInputType = {
    role_id?: true;
    role_name?: true;
    display_name?: true;
    description?: true;
    created_at?: true;
};
export type RolesCountAggregateInputType = {
    role_id?: true;
    role_name?: true;
    display_name?: true;
    description?: true;
    created_at?: true;
    _all?: true;
};
export type RolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolesCountAggregateInputType;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRoles[P]> : Prisma.GetScalarType<T[P], AggregateRoles[P]>;
};
export type rolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithAggregationInput | Prisma.rolesOrderByWithAggregationInput[];
    by: Prisma.RolesScalarFieldEnum[] | Prisma.RolesScalarFieldEnum;
    having?: Prisma.rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesCountAggregateInputType | true;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
};
export type RolesGroupByOutputType = {
    role_id: number;
    role_name: string;
    display_name: string | null;
    description: string | null;
    created_at: Date | null;
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
};
type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolesGroupByOutputType[P]>;
}>>;
export type rolesWhereInput = {
    AND?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    OR?: Prisma.rolesWhereInput[];
    NOT?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    role_id?: Prisma.IntFilter<"roles"> | number;
    role_name?: Prisma.StringFilter<"roles"> | string;
    display_name?: Prisma.StringNullableFilter<"roles"> | string | null;
    description?: Prisma.StringNullableFilter<"roles"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    role_permissions?: Prisma.Role_permissionsListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
};
export type rolesOrderByWithRelationInput = {
    role_id?: Prisma.SortOrder;
    role_name?: Prisma.SortOrder;
    display_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_permissions?: Prisma.role_permissionsOrderByRelationAggregateInput;
    user_roles?: Prisma.user_rolesOrderByRelationAggregateInput;
};
export type rolesWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number;
    role_name?: string;
    AND?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    OR?: Prisma.rolesWhereInput[];
    NOT?: Prisma.rolesWhereInput | Prisma.rolesWhereInput[];
    display_name?: Prisma.StringNullableFilter<"roles"> | string | null;
    description?: Prisma.StringNullableFilter<"roles"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"roles"> | Date | string | null;
    role_permissions?: Prisma.Role_permissionsListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
}, "role_id" | "role_name">;
export type rolesOrderByWithAggregationInput = {
    role_id?: Prisma.SortOrder;
    role_name?: Prisma.SortOrder;
    display_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rolesCountOrderByAggregateInput;
    _avg?: Prisma.rolesAvgOrderByAggregateInput;
    _max?: Prisma.rolesMaxOrderByAggregateInput;
    _min?: Prisma.rolesMinOrderByAggregateInput;
    _sum?: Prisma.rolesSumOrderByAggregateInput;
};
export type rolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.rolesScalarWhereWithAggregatesInput | Prisma.rolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.rolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rolesScalarWhereWithAggregatesInput | Prisma.rolesScalarWhereWithAggregatesInput[];
    role_id?: Prisma.IntWithAggregatesFilter<"roles"> | number;
    role_name?: Prisma.StringWithAggregatesFilter<"roles"> | string;
    display_name?: Prisma.StringNullableWithAggregatesFilter<"roles"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"roles"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"roles"> | Date | string | null;
};
export type rolesCreateInput = {
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    role_permissions?: Prisma.role_permissionsCreateNestedManyWithoutRolesInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateInput = {
    role_id?: number;
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    role_permissions?: Prisma.role_permissionsUncheckedCreateNestedManyWithoutRolesInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesUpdateInput = {
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_permissions?: Prisma.role_permissionsUpdateManyWithoutRolesNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_permissions?: Prisma.role_permissionsUncheckedUpdateManyWithoutRolesNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutRolesNestedInput;
};
export type rolesCreateManyInput = {
    role_id?: number;
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type rolesUpdateManyMutationInput = {
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rolesUncheckedUpdateManyInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type rolesCountOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    role_name?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type rolesAvgOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
};
export type rolesMaxOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    role_name?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type rolesMinOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    role_name?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type rolesSumOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
};
export type RolesScalarRelationFilter = {
    is?: Prisma.rolesWhereInput;
    isNot?: Prisma.rolesWhereInput;
};
export type rolesCreateNestedOneWithoutUser_rolesInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutUser_rolesInput, Prisma.rolesUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutUser_rolesInput;
    connect?: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutUser_rolesInput, Prisma.rolesUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutUser_rolesInput;
    upsert?: Prisma.rolesUpsertWithoutUser_rolesInput;
    connect?: Prisma.rolesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolesUpdateToOneWithWhereWithoutUser_rolesInput, Prisma.rolesUpdateWithoutUser_rolesInput>, Prisma.rolesUncheckedUpdateWithoutUser_rolesInput>;
};
export type rolesCreateNestedOneWithoutRole_permissionsInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutRole_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_permissionsInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutRole_permissionsInput;
    connect?: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateOneRequiredWithoutRole_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.rolesCreateWithoutRole_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_permissionsInput>;
    connectOrCreate?: Prisma.rolesCreateOrConnectWithoutRole_permissionsInput;
    upsert?: Prisma.rolesUpsertWithoutRole_permissionsInput;
    connect?: Prisma.rolesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolesUpdateToOneWithWhereWithoutRole_permissionsInput, Prisma.rolesUpdateWithoutRole_permissionsInput>, Prisma.rolesUncheckedUpdateWithoutRole_permissionsInput>;
};
export type rolesCreateWithoutUser_rolesInput = {
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    role_permissions?: Prisma.role_permissionsCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateWithoutUser_rolesInput = {
    role_id?: number;
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    role_permissions?: Prisma.role_permissionsUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesCreateOrConnectWithoutUser_rolesInput = {
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateWithoutUser_rolesInput, Prisma.rolesUncheckedCreateWithoutUser_rolesInput>;
};
export type rolesUpsertWithoutUser_rolesInput = {
    update: Prisma.XOR<Prisma.rolesUpdateWithoutUser_rolesInput, Prisma.rolesUncheckedUpdateWithoutUser_rolesInput>;
    create: Prisma.XOR<Prisma.rolesCreateWithoutUser_rolesInput, Prisma.rolesUncheckedCreateWithoutUser_rolesInput>;
    where?: Prisma.rolesWhereInput;
};
export type rolesUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: Prisma.rolesWhereInput;
    data: Prisma.XOR<Prisma.rolesUpdateWithoutUser_rolesInput, Prisma.rolesUncheckedUpdateWithoutUser_rolesInput>;
};
export type rolesUpdateWithoutUser_rolesInput = {
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_permissions?: Prisma.role_permissionsUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateWithoutUser_rolesInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    role_permissions?: Prisma.role_permissionsUncheckedUpdateManyWithoutRolesNestedInput;
};
export type rolesCreateWithoutRole_permissionsInput = {
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutRolesInput;
};
export type rolesUncheckedCreateWithoutRole_permissionsInput = {
    role_id?: number;
    role_name: string;
    display_name?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutRolesInput;
};
export type rolesCreateOrConnectWithoutRole_permissionsInput = {
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateWithoutRole_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_permissionsInput>;
};
export type rolesUpsertWithoutRole_permissionsInput = {
    update: Prisma.XOR<Prisma.rolesUpdateWithoutRole_permissionsInput, Prisma.rolesUncheckedUpdateWithoutRole_permissionsInput>;
    create: Prisma.XOR<Prisma.rolesCreateWithoutRole_permissionsInput, Prisma.rolesUncheckedCreateWithoutRole_permissionsInput>;
    where?: Prisma.rolesWhereInput;
};
export type rolesUpdateToOneWithWhereWithoutRole_permissionsInput = {
    where?: Prisma.rolesWhereInput;
    data: Prisma.XOR<Prisma.rolesUpdateWithoutRole_permissionsInput, Prisma.rolesUncheckedUpdateWithoutRole_permissionsInput>;
};
export type rolesUpdateWithoutRole_permissionsInput = {
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_roles?: Prisma.user_rolesUpdateManyWithoutRolesNestedInput;
};
export type rolesUncheckedUpdateWithoutRole_permissionsInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_name?: Prisma.StringFieldUpdateOperationsInput | string;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutRolesNestedInput;
};
export type RolesCountOutputType = {
    role_permissions: number;
    user_roles: number;
};
export type RolesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permissions?: boolean | RolesCountOutputTypeCountRole_permissionsArgs;
    user_roles?: boolean | RolesCountOutputTypeCountUser_rolesArgs;
};
export type RolesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolesCountOutputTypeSelect<ExtArgs> | null;
};
export type RolesCountOutputTypeCountRole_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionsWhereInput;
};
export type RolesCountOutputTypeCountUser_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
};
export type rolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    role_name?: boolean;
    display_name?: boolean;
    description?: boolean;
    created_at?: boolean;
    role_permissions?: boolean | Prisma.roles$role_permissionsArgs<ExtArgs>;
    user_roles?: boolean | Prisma.roles$user_rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["roles"]>;
export type rolesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    role_name?: boolean;
    display_name?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["roles"]>;
export type rolesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    role_name?: boolean;
    display_name?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["roles"]>;
export type rolesSelectScalar = {
    role_id?: boolean;
    role_name?: boolean;
    display_name?: boolean;
    description?: boolean;
    created_at?: boolean;
};
export type rolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"role_id" | "role_name" | "display_name" | "description" | "created_at", ExtArgs["result"]["roles"]>;
export type rolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permissions?: boolean | Prisma.roles$role_permissionsArgs<ExtArgs>;
    user_roles?: boolean | Prisma.roles$user_rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.RolesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type rolesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type rolesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $rolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "roles";
    objects: {
        role_permissions: Prisma.$role_permissionsPayload<ExtArgs>[];
        user_roles: Prisma.$user_rolesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        role_id: number;
        role_name: string;
        display_name: string | null;
        description: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["roles"]>;
    composites: {};
};
export type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rolesPayload, S>;
export type rolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolesCountAggregateInputType | true;
};
export interface rolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['roles'];
        meta: {
            name: 'roles';
        };
    };
    findUnique<T extends rolesFindUniqueArgs>(args: Prisma.SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rolesFindFirstArgs>(args?: Prisma.SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rolesFindManyArgs>(args?: Prisma.SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rolesCreateArgs>(args: Prisma.SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rolesCreateManyArgs>(args?: Prisma.SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rolesDeleteArgs>(args: Prisma.SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rolesUpdateArgs>(args: Prisma.SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rolesUpdateManyArgs>(args: Prisma.SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rolesUpsertArgs>(args: Prisma.SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rolesCountArgs>(args?: Prisma.Subset<T, rolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolesCountAggregateOutputType> : number>;
    aggregate<T extends RolesAggregateArgs>(args: Prisma.Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>;
    groupBy<T extends rolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rolesGroupByArgs['orderBy'];
    } : {
        orderBy?: rolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rolesFieldRefs;
}
export interface Prisma__rolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role_permissions<T extends Prisma.roles$role_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roles$role_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_roles<T extends Prisma.roles$user_rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roles$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rolesFieldRefs {
    readonly role_id: Prisma.FieldRef<"roles", 'Int'>;
    readonly role_name: Prisma.FieldRef<"roles", 'String'>;
    readonly display_name: Prisma.FieldRef<"roles", 'String'>;
    readonly description: Prisma.FieldRef<"roles", 'String'>;
    readonly created_at: Prisma.FieldRef<"roles", 'DateTime'>;
}
export type rolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where?: Prisma.rolesWhereInput;
    orderBy?: Prisma.rolesOrderByWithRelationInput | Prisma.rolesOrderByWithRelationInput[];
    cursor?: Prisma.rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolesScalarFieldEnum | Prisma.RolesScalarFieldEnum[];
};
export type rolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolesCreateInput, Prisma.rolesUncheckedCreateInput>;
};
export type rolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rolesCreateManyInput | Prisma.rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rolesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    data: Prisma.rolesCreateManyInput | Prisma.rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolesUpdateInput, Prisma.rolesUncheckedUpdateInput>;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rolesUpdateManyMutationInput, Prisma.rolesUncheckedUpdateManyInput>;
    where?: Prisma.rolesWhereInput;
    limit?: number;
};
export type rolesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolesUpdateManyMutationInput, Prisma.rolesUncheckedUpdateManyInput>;
    where?: Prisma.rolesWhereInput;
    limit?: number;
};
export type rolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolesCreateInput, Prisma.rolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rolesUpdateInput, Prisma.rolesUncheckedUpdateInput>;
};
export type rolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
    where: Prisma.rolesWhereUniqueInput;
};
export type rolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolesWhereInput;
    limit?: number;
};
export type roles$role_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithRelationInput | Prisma.role_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionsScalarFieldEnum | Prisma.Role_permissionsScalarFieldEnum[];
};
export type roles$user_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type rolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolesSelect<ExtArgs> | null;
    omit?: Prisma.rolesOmit<ExtArgs> | null;
    include?: Prisma.rolesInclude<ExtArgs> | null;
};
export {};
