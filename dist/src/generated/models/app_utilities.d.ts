import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type app_utilitiesModel = runtime.Types.Result.DefaultSelection<Prisma.$app_utilitiesPayload>;
export type AggregateApp_utilities = {
    _count: App_utilitiesCountAggregateOutputType | null;
    _avg: App_utilitiesAvgAggregateOutputType | null;
    _sum: App_utilitiesSumAggregateOutputType | null;
    _min: App_utilitiesMinAggregateOutputType | null;
    _max: App_utilitiesMaxAggregateOutputType | null;
};
export type App_utilitiesAvgAggregateOutputType = {
    utility_id: number | null;
    display_order: number | null;
    created_by: number | null;
};
export type App_utilitiesSumAggregateOutputType = {
    utility_id: number | null;
    display_order: number | null;
    created_by: number | null;
};
export type App_utilitiesMinAggregateOutputType = {
    utility_id: number | null;
    key: string | null;
    name: string | null;
    description: string | null;
    icon_url: string | null;
    route_path: string | null;
    is_active: boolean | null;
    category: string | null;
    display_order: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type App_utilitiesMaxAggregateOutputType = {
    utility_id: number | null;
    key: string | null;
    name: string | null;
    description: string | null;
    icon_url: string | null;
    route_path: string | null;
    is_active: boolean | null;
    category: string | null;
    display_order: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type App_utilitiesCountAggregateOutputType = {
    utility_id: number;
    key: number;
    name: number;
    description: number;
    icon_url: number;
    route_path: number;
    is_active: number;
    category: number;
    display_order: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type App_utilitiesAvgAggregateInputType = {
    utility_id?: true;
    display_order?: true;
    created_by?: true;
};
export type App_utilitiesSumAggregateInputType = {
    utility_id?: true;
    display_order?: true;
    created_by?: true;
};
export type App_utilitiesMinAggregateInputType = {
    utility_id?: true;
    key?: true;
    name?: true;
    description?: true;
    icon_url?: true;
    route_path?: true;
    is_active?: true;
    category?: true;
    display_order?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type App_utilitiesMaxAggregateInputType = {
    utility_id?: true;
    key?: true;
    name?: true;
    description?: true;
    icon_url?: true;
    route_path?: true;
    is_active?: true;
    category?: true;
    display_order?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type App_utilitiesCountAggregateInputType = {
    utility_id?: true;
    key?: true;
    name?: true;
    description?: true;
    icon_url?: true;
    route_path?: true;
    is_active?: true;
    category?: true;
    display_order?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type App_utilitiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_utilitiesWhereInput;
    orderBy?: Prisma.app_utilitiesOrderByWithRelationInput | Prisma.app_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.app_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | App_utilitiesCountAggregateInputType;
    _avg?: App_utilitiesAvgAggregateInputType;
    _sum?: App_utilitiesSumAggregateInputType;
    _min?: App_utilitiesMinAggregateInputType;
    _max?: App_utilitiesMaxAggregateInputType;
};
export type GetApp_utilitiesAggregateType<T extends App_utilitiesAggregateArgs> = {
    [P in keyof T & keyof AggregateApp_utilities]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApp_utilities[P]> : Prisma.GetScalarType<T[P], AggregateApp_utilities[P]>;
};
export type app_utilitiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_utilitiesWhereInput;
    orderBy?: Prisma.app_utilitiesOrderByWithAggregationInput | Prisma.app_utilitiesOrderByWithAggregationInput[];
    by: Prisma.App_utilitiesScalarFieldEnum[] | Prisma.App_utilitiesScalarFieldEnum;
    having?: Prisma.app_utilitiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: App_utilitiesCountAggregateInputType | true;
    _avg?: App_utilitiesAvgAggregateInputType;
    _sum?: App_utilitiesSumAggregateInputType;
    _min?: App_utilitiesMinAggregateInputType;
    _max?: App_utilitiesMaxAggregateInputType;
};
export type App_utilitiesGroupByOutputType = {
    utility_id: number;
    key: string;
    name: string;
    description: string | null;
    icon_url: string | null;
    route_path: string | null;
    is_active: boolean | null;
    category: string | null;
    display_order: number | null;
    created_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: App_utilitiesCountAggregateOutputType | null;
    _avg: App_utilitiesAvgAggregateOutputType | null;
    _sum: App_utilitiesSumAggregateOutputType | null;
    _min: App_utilitiesMinAggregateOutputType | null;
    _max: App_utilitiesMaxAggregateOutputType | null;
};
type GetApp_utilitiesGroupByPayload<T extends app_utilitiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<App_utilitiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof App_utilitiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], App_utilitiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], App_utilitiesGroupByOutputType[P]>;
}>>;
export type app_utilitiesWhereInput = {
    AND?: Prisma.app_utilitiesWhereInput | Prisma.app_utilitiesWhereInput[];
    OR?: Prisma.app_utilitiesWhereInput[];
    NOT?: Prisma.app_utilitiesWhereInput | Prisma.app_utilitiesWhereInput[];
    utility_id?: Prisma.IntFilter<"app_utilities"> | number;
    key?: Prisma.StringFilter<"app_utilities"> | string;
    name?: Prisma.StringFilter<"app_utilities"> | string;
    description?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    icon_url?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    route_path?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"app_utilities"> | boolean | null;
    category?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    display_order?: Prisma.IntNullableFilter<"app_utilities"> | number | null;
    created_by?: Prisma.IntNullableFilter<"app_utilities"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"app_utilities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"app_utilities"> | Date | string | null;
    user_utilities?: Prisma.User_utilitiesListRelationFilter;
};
export type app_utilitiesOrderByWithRelationInput = {
    utility_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    route_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_order?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_utilities?: Prisma.user_utilitiesOrderByRelationAggregateInput;
};
export type app_utilitiesWhereUniqueInput = Prisma.AtLeast<{
    utility_id?: number;
    key?: string;
    AND?: Prisma.app_utilitiesWhereInput | Prisma.app_utilitiesWhereInput[];
    OR?: Prisma.app_utilitiesWhereInput[];
    NOT?: Prisma.app_utilitiesWhereInput | Prisma.app_utilitiesWhereInput[];
    name?: Prisma.StringFilter<"app_utilities"> | string;
    description?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    icon_url?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    route_path?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"app_utilities"> | boolean | null;
    category?: Prisma.StringNullableFilter<"app_utilities"> | string | null;
    display_order?: Prisma.IntNullableFilter<"app_utilities"> | number | null;
    created_by?: Prisma.IntNullableFilter<"app_utilities"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"app_utilities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"app_utilities"> | Date | string | null;
    user_utilities?: Prisma.User_utilitiesListRelationFilter;
}, "utility_id" | "key">;
export type app_utilitiesOrderByWithAggregationInput = {
    utility_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    route_path?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_order?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.app_utilitiesCountOrderByAggregateInput;
    _avg?: Prisma.app_utilitiesAvgOrderByAggregateInput;
    _max?: Prisma.app_utilitiesMaxOrderByAggregateInput;
    _min?: Prisma.app_utilitiesMinOrderByAggregateInput;
    _sum?: Prisma.app_utilitiesSumOrderByAggregateInput;
};
export type app_utilitiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.app_utilitiesScalarWhereWithAggregatesInput | Prisma.app_utilitiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.app_utilitiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.app_utilitiesScalarWhereWithAggregatesInput | Prisma.app_utilitiesScalarWhereWithAggregatesInput[];
    utility_id?: Prisma.IntWithAggregatesFilter<"app_utilities"> | number;
    key?: Prisma.StringWithAggregatesFilter<"app_utilities"> | string;
    name?: Prisma.StringWithAggregatesFilter<"app_utilities"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"app_utilities"> | string | null;
    icon_url?: Prisma.StringNullableWithAggregatesFilter<"app_utilities"> | string | null;
    route_path?: Prisma.StringNullableWithAggregatesFilter<"app_utilities"> | string | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"app_utilities"> | boolean | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"app_utilities"> | string | null;
    display_order?: Prisma.IntNullableWithAggregatesFilter<"app_utilities"> | number | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"app_utilities"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"app_utilities"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"app_utilities"> | Date | string | null;
};
export type app_utilitiesCreateInput = {
    key: string;
    name: string;
    description?: string | null;
    icon_url?: string | null;
    route_path?: string | null;
    is_active?: boolean | null;
    category?: string | null;
    display_order?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    user_utilities?: Prisma.user_utilitiesCreateNestedManyWithoutApp_utilitiesInput;
};
export type app_utilitiesUncheckedCreateInput = {
    utility_id?: number;
    key: string;
    name: string;
    description?: string | null;
    icon_url?: string | null;
    route_path?: string | null;
    is_active?: boolean | null;
    category?: string | null;
    display_order?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    user_utilities?: Prisma.user_utilitiesUncheckedCreateNestedManyWithoutApp_utilitiesInput;
};
export type app_utilitiesUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_utilities?: Prisma.user_utilitiesUpdateManyWithoutApp_utilitiesNestedInput;
};
export type app_utilitiesUncheckedUpdateInput = {
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_utilities?: Prisma.user_utilitiesUncheckedUpdateManyWithoutApp_utilitiesNestedInput;
};
export type app_utilitiesCreateManyInput = {
    utility_id?: number;
    key: string;
    name: string;
    description?: string | null;
    icon_url?: string | null;
    route_path?: string | null;
    is_active?: boolean | null;
    category?: string | null;
    display_order?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type app_utilitiesUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type app_utilitiesUncheckedUpdateManyInput = {
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type app_utilitiesCountOrderByAggregateInput = {
    utility_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    route_path?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type app_utilitiesAvgOrderByAggregateInput = {
    utility_id?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type app_utilitiesMaxOrderByAggregateInput = {
    utility_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    route_path?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type app_utilitiesMinOrderByAggregateInput = {
    utility_id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    route_path?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type app_utilitiesSumOrderByAggregateInput = {
    utility_id?: Prisma.SortOrder;
    display_order?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type App_utilitiesScalarRelationFilter = {
    is?: Prisma.app_utilitiesWhereInput;
    isNot?: Prisma.app_utilitiesWhereInput;
};
export type app_utilitiesCreateNestedOneWithoutUser_utilitiesInput = {
    create?: Prisma.XOR<Prisma.app_utilitiesCreateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedCreateWithoutUser_utilitiesInput>;
    connectOrCreate?: Prisma.app_utilitiesCreateOrConnectWithoutUser_utilitiesInput;
    connect?: Prisma.app_utilitiesWhereUniqueInput;
};
export type app_utilitiesUpdateOneRequiredWithoutUser_utilitiesNestedInput = {
    create?: Prisma.XOR<Prisma.app_utilitiesCreateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedCreateWithoutUser_utilitiesInput>;
    connectOrCreate?: Prisma.app_utilitiesCreateOrConnectWithoutUser_utilitiesInput;
    upsert?: Prisma.app_utilitiesUpsertWithoutUser_utilitiesInput;
    connect?: Prisma.app_utilitiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.app_utilitiesUpdateToOneWithWhereWithoutUser_utilitiesInput, Prisma.app_utilitiesUpdateWithoutUser_utilitiesInput>, Prisma.app_utilitiesUncheckedUpdateWithoutUser_utilitiesInput>;
};
export type app_utilitiesCreateWithoutUser_utilitiesInput = {
    key: string;
    name: string;
    description?: string | null;
    icon_url?: string | null;
    route_path?: string | null;
    is_active?: boolean | null;
    category?: string | null;
    display_order?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type app_utilitiesUncheckedCreateWithoutUser_utilitiesInput = {
    utility_id?: number;
    key: string;
    name: string;
    description?: string | null;
    icon_url?: string | null;
    route_path?: string | null;
    is_active?: boolean | null;
    category?: string | null;
    display_order?: number | null;
    created_by?: number | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type app_utilitiesCreateOrConnectWithoutUser_utilitiesInput = {
    where: Prisma.app_utilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.app_utilitiesCreateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedCreateWithoutUser_utilitiesInput>;
};
export type app_utilitiesUpsertWithoutUser_utilitiesInput = {
    update: Prisma.XOR<Prisma.app_utilitiesUpdateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedUpdateWithoutUser_utilitiesInput>;
    create: Prisma.XOR<Prisma.app_utilitiesCreateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedCreateWithoutUser_utilitiesInput>;
    where?: Prisma.app_utilitiesWhereInput;
};
export type app_utilitiesUpdateToOneWithWhereWithoutUser_utilitiesInput = {
    where?: Prisma.app_utilitiesWhereInput;
    data: Prisma.XOR<Prisma.app_utilitiesUpdateWithoutUser_utilitiesInput, Prisma.app_utilitiesUncheckedUpdateWithoutUser_utilitiesInput>;
};
export type app_utilitiesUpdateWithoutUser_utilitiesInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type app_utilitiesUncheckedUpdateWithoutUser_utilitiesInput = {
    utility_id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    route_path?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_order?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type App_utilitiesCountOutputType = {
    user_utilities: number;
};
export type App_utilitiesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user_utilities?: boolean | App_utilitiesCountOutputTypeCountUser_utilitiesArgs;
};
export type App_utilitiesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.App_utilitiesCountOutputTypeSelect<ExtArgs> | null;
};
export type App_utilitiesCountOutputTypeCountUser_utilitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_utilitiesWhereInput;
};
export type app_utilitiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    utility_id?: boolean;
    key?: boolean;
    name?: boolean;
    description?: boolean;
    icon_url?: boolean;
    route_path?: boolean;
    is_active?: boolean;
    category?: boolean;
    display_order?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_utilities?: boolean | Prisma.app_utilities$user_utilitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.App_utilitiesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["app_utilities"]>;
export type app_utilitiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    utility_id?: boolean;
    key?: boolean;
    name?: boolean;
    description?: boolean;
    icon_url?: boolean;
    route_path?: boolean;
    is_active?: boolean;
    category?: boolean;
    display_order?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["app_utilities"]>;
export type app_utilitiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    utility_id?: boolean;
    key?: boolean;
    name?: boolean;
    description?: boolean;
    icon_url?: boolean;
    route_path?: boolean;
    is_active?: boolean;
    category?: boolean;
    display_order?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["app_utilities"]>;
export type app_utilitiesSelectScalar = {
    utility_id?: boolean;
    key?: boolean;
    name?: boolean;
    description?: boolean;
    icon_url?: boolean;
    route_path?: boolean;
    is_active?: boolean;
    category?: boolean;
    display_order?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type app_utilitiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"utility_id" | "key" | "name" | "description" | "icon_url" | "route_path" | "is_active" | "category" | "display_order" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["app_utilities"]>;
export type app_utilitiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user_utilities?: boolean | Prisma.app_utilities$user_utilitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.App_utilitiesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type app_utilitiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type app_utilitiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $app_utilitiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "app_utilities";
    objects: {
        user_utilities: Prisma.$user_utilitiesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        utility_id: number;
        key: string;
        name: string;
        description: string | null;
        icon_url: string | null;
        route_path: string | null;
        is_active: boolean | null;
        category: string | null;
        display_order: number | null;
        created_by: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["app_utilities"]>;
    composites: {};
};
export type app_utilitiesGetPayload<S extends boolean | null | undefined | app_utilitiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload, S>;
export type app_utilitiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<app_utilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: App_utilitiesCountAggregateInputType | true;
};
export interface app_utilitiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['app_utilities'];
        meta: {
            name: 'app_utilities';
        };
    };
    findUnique<T extends app_utilitiesFindUniqueArgs>(args: Prisma.SelectSubset<T, app_utilitiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends app_utilitiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, app_utilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends app_utilitiesFindFirstArgs>(args?: Prisma.SelectSubset<T, app_utilitiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends app_utilitiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, app_utilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends app_utilitiesFindManyArgs>(args?: Prisma.SelectSubset<T, app_utilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends app_utilitiesCreateArgs>(args: Prisma.SelectSubset<T, app_utilitiesCreateArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends app_utilitiesCreateManyArgs>(args?: Prisma.SelectSubset<T, app_utilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends app_utilitiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, app_utilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends app_utilitiesDeleteArgs>(args: Prisma.SelectSubset<T, app_utilitiesDeleteArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends app_utilitiesUpdateArgs>(args: Prisma.SelectSubset<T, app_utilitiesUpdateArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends app_utilitiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, app_utilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends app_utilitiesUpdateManyArgs>(args: Prisma.SelectSubset<T, app_utilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends app_utilitiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, app_utilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends app_utilitiesUpsertArgs>(args: Prisma.SelectSubset<T, app_utilitiesUpsertArgs<ExtArgs>>): Prisma.Prisma__app_utilitiesClient<runtime.Types.Result.GetResult<Prisma.$app_utilitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends app_utilitiesCountArgs>(args?: Prisma.Subset<T, app_utilitiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], App_utilitiesCountAggregateOutputType> : number>;
    aggregate<T extends App_utilitiesAggregateArgs>(args: Prisma.Subset<T, App_utilitiesAggregateArgs>): Prisma.PrismaPromise<GetApp_utilitiesAggregateType<T>>;
    groupBy<T extends app_utilitiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: app_utilitiesGroupByArgs['orderBy'];
    } : {
        orderBy?: app_utilitiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, app_utilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_utilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: app_utilitiesFieldRefs;
}
export interface Prisma__app_utilitiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user_utilities<T extends Prisma.app_utilities$user_utilitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.app_utilities$user_utilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_utilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface app_utilitiesFieldRefs {
    readonly utility_id: Prisma.FieldRef<"app_utilities", 'Int'>;
    readonly key: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly name: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly description: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly icon_url: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly route_path: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly is_active: Prisma.FieldRef<"app_utilities", 'Boolean'>;
    readonly category: Prisma.FieldRef<"app_utilities", 'String'>;
    readonly display_order: Prisma.FieldRef<"app_utilities", 'Int'>;
    readonly created_by: Prisma.FieldRef<"app_utilities", 'Int'>;
    readonly created_at: Prisma.FieldRef<"app_utilities", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"app_utilities", 'DateTime'>;
}
export type app_utilitiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where: Prisma.app_utilitiesWhereUniqueInput;
};
export type app_utilitiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where: Prisma.app_utilitiesWhereUniqueInput;
};
export type app_utilitiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.app_utilitiesWhereInput;
    orderBy?: Prisma.app_utilitiesOrderByWithRelationInput | Prisma.app_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.app_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_utilitiesScalarFieldEnum | Prisma.App_utilitiesScalarFieldEnum[];
};
export type app_utilitiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.app_utilitiesWhereInput;
    orderBy?: Prisma.app_utilitiesOrderByWithRelationInput | Prisma.app_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.app_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_utilitiesScalarFieldEnum | Prisma.App_utilitiesScalarFieldEnum[];
};
export type app_utilitiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.app_utilitiesWhereInput;
    orderBy?: Prisma.app_utilitiesOrderByWithRelationInput | Prisma.app_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.app_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.App_utilitiesScalarFieldEnum | Prisma.App_utilitiesScalarFieldEnum[];
};
export type app_utilitiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.app_utilitiesCreateInput, Prisma.app_utilitiesUncheckedCreateInput>;
};
export type app_utilitiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.app_utilitiesCreateManyInput | Prisma.app_utilitiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type app_utilitiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    data: Prisma.app_utilitiesCreateManyInput | Prisma.app_utilitiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type app_utilitiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.app_utilitiesUpdateInput, Prisma.app_utilitiesUncheckedUpdateInput>;
    where: Prisma.app_utilitiesWhereUniqueInput;
};
export type app_utilitiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.app_utilitiesUpdateManyMutationInput, Prisma.app_utilitiesUncheckedUpdateManyInput>;
    where?: Prisma.app_utilitiesWhereInput;
    limit?: number;
};
export type app_utilitiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.app_utilitiesUpdateManyMutationInput, Prisma.app_utilitiesUncheckedUpdateManyInput>;
    where?: Prisma.app_utilitiesWhereInput;
    limit?: number;
};
export type app_utilitiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where: Prisma.app_utilitiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.app_utilitiesCreateInput, Prisma.app_utilitiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.app_utilitiesUpdateInput, Prisma.app_utilitiesUncheckedUpdateInput>;
};
export type app_utilitiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
    where: Prisma.app_utilitiesWhereUniqueInput;
};
export type app_utilitiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.app_utilitiesWhereInput;
    limit?: number;
};
export type app_utilities$user_utilitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.user_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.user_utilitiesInclude<ExtArgs> | null;
    where?: Prisma.user_utilitiesWhereInput;
    orderBy?: Prisma.user_utilitiesOrderByWithRelationInput | Prisma.user_utilitiesOrderByWithRelationInput[];
    cursor?: Prisma.user_utilitiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_utilitiesScalarFieldEnum | Prisma.User_utilitiesScalarFieldEnum[];
};
export type app_utilitiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.app_utilitiesSelect<ExtArgs> | null;
    omit?: Prisma.app_utilitiesOmit<ExtArgs> | null;
    include?: Prisma.app_utilitiesInclude<ExtArgs> | null;
};
export {};
