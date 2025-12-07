import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type study_shiftsModel = runtime.Types.Result.DefaultSelection<Prisma.$study_shiftsPayload>;
export type AggregateStudy_shifts = {
    _count: Study_shiftsCountAggregateOutputType | null;
    _avg: Study_shiftsAvgAggregateOutputType | null;
    _sum: Study_shiftsSumAggregateOutputType | null;
    _min: Study_shiftsMinAggregateOutputType | null;
    _max: Study_shiftsMaxAggregateOutputType | null;
};
export type Study_shiftsAvgAggregateOutputType = {
    shift_id: number | null;
};
export type Study_shiftsSumAggregateOutputType = {
    shift_id: number | null;
};
export type Study_shiftsMinAggregateOutputType = {
    shift_id: number | null;
    name: string | null;
    days_of_week: string | null;
    start_time: Date | null;
    end_time: Date | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Study_shiftsMaxAggregateOutputType = {
    shift_id: number | null;
    name: string | null;
    days_of_week: string | null;
    start_time: Date | null;
    end_time: Date | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Study_shiftsCountAggregateOutputType = {
    shift_id: number;
    name: number;
    days_of_week: number;
    start_time: number;
    end_time: number;
    description: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Study_shiftsAvgAggregateInputType = {
    shift_id?: true;
};
export type Study_shiftsSumAggregateInputType = {
    shift_id?: true;
};
export type Study_shiftsMinAggregateInputType = {
    shift_id?: true;
    name?: true;
    days_of_week?: true;
    start_time?: true;
    end_time?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Study_shiftsMaxAggregateInputType = {
    shift_id?: true;
    name?: true;
    days_of_week?: true;
    start_time?: true;
    end_time?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Study_shiftsCountAggregateInputType = {
    shift_id?: true;
    name?: true;
    days_of_week?: true;
    start_time?: true;
    end_time?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Study_shiftsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.study_shiftsWhereInput;
    orderBy?: Prisma.study_shiftsOrderByWithRelationInput | Prisma.study_shiftsOrderByWithRelationInput[];
    cursor?: Prisma.study_shiftsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Study_shiftsCountAggregateInputType;
    _avg?: Study_shiftsAvgAggregateInputType;
    _sum?: Study_shiftsSumAggregateInputType;
    _min?: Study_shiftsMinAggregateInputType;
    _max?: Study_shiftsMaxAggregateInputType;
};
export type GetStudy_shiftsAggregateType<T extends Study_shiftsAggregateArgs> = {
    [P in keyof T & keyof AggregateStudy_shifts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudy_shifts[P]> : Prisma.GetScalarType<T[P], AggregateStudy_shifts[P]>;
};
export type study_shiftsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.study_shiftsWhereInput;
    orderBy?: Prisma.study_shiftsOrderByWithAggregationInput | Prisma.study_shiftsOrderByWithAggregationInput[];
    by: Prisma.Study_shiftsScalarFieldEnum[] | Prisma.Study_shiftsScalarFieldEnum;
    having?: Prisma.study_shiftsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Study_shiftsCountAggregateInputType | true;
    _avg?: Study_shiftsAvgAggregateInputType;
    _sum?: Study_shiftsSumAggregateInputType;
    _min?: Study_shiftsMinAggregateInputType;
    _max?: Study_shiftsMaxAggregateInputType;
};
export type Study_shiftsGroupByOutputType = {
    shift_id: number;
    name: string;
    days_of_week: string;
    start_time: Date;
    end_time: Date;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Study_shiftsCountAggregateOutputType | null;
    _avg: Study_shiftsAvgAggregateOutputType | null;
    _sum: Study_shiftsSumAggregateOutputType | null;
    _min: Study_shiftsMinAggregateOutputType | null;
    _max: Study_shiftsMaxAggregateOutputType | null;
};
type GetStudy_shiftsGroupByPayload<T extends study_shiftsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Study_shiftsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Study_shiftsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Study_shiftsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Study_shiftsGroupByOutputType[P]>;
}>>;
export type study_shiftsWhereInput = {
    AND?: Prisma.study_shiftsWhereInput | Prisma.study_shiftsWhereInput[];
    OR?: Prisma.study_shiftsWhereInput[];
    NOT?: Prisma.study_shiftsWhereInput | Prisma.study_shiftsWhereInput[];
    shift_id?: Prisma.IntFilter<"study_shifts"> | number;
    name?: Prisma.StringFilter<"study_shifts"> | string;
    days_of_week?: Prisma.StringFilter<"study_shifts"> | string;
    start_time?: Prisma.DateTimeFilter<"study_shifts"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"study_shifts"> | Date | string;
    description?: Prisma.StringNullableFilter<"study_shifts"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"study_shifts"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"study_shifts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"study_shifts"> | Date | string | null;
    class_groups?: Prisma.Class_groupsListRelationFilter;
};
export type study_shiftsOrderByWithRelationInput = {
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    days_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    class_groups?: Prisma.class_groupsOrderByRelationAggregateInput;
};
export type study_shiftsWhereUniqueInput = Prisma.AtLeast<{
    shift_id?: number;
    AND?: Prisma.study_shiftsWhereInput | Prisma.study_shiftsWhereInput[];
    OR?: Prisma.study_shiftsWhereInput[];
    NOT?: Prisma.study_shiftsWhereInput | Prisma.study_shiftsWhereInput[];
    name?: Prisma.StringFilter<"study_shifts"> | string;
    days_of_week?: Prisma.StringFilter<"study_shifts"> | string;
    start_time?: Prisma.DateTimeFilter<"study_shifts"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"study_shifts"> | Date | string;
    description?: Prisma.StringNullableFilter<"study_shifts"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"study_shifts"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"study_shifts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"study_shifts"> | Date | string | null;
    class_groups?: Prisma.Class_groupsListRelationFilter;
}, "shift_id">;
export type study_shiftsOrderByWithAggregationInput = {
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    days_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.study_shiftsCountOrderByAggregateInput;
    _avg?: Prisma.study_shiftsAvgOrderByAggregateInput;
    _max?: Prisma.study_shiftsMaxOrderByAggregateInput;
    _min?: Prisma.study_shiftsMinOrderByAggregateInput;
    _sum?: Prisma.study_shiftsSumOrderByAggregateInput;
};
export type study_shiftsScalarWhereWithAggregatesInput = {
    AND?: Prisma.study_shiftsScalarWhereWithAggregatesInput | Prisma.study_shiftsScalarWhereWithAggregatesInput[];
    OR?: Prisma.study_shiftsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.study_shiftsScalarWhereWithAggregatesInput | Prisma.study_shiftsScalarWhereWithAggregatesInput[];
    shift_id?: Prisma.IntWithAggregatesFilter<"study_shifts"> | number;
    name?: Prisma.StringWithAggregatesFilter<"study_shifts"> | string;
    days_of_week?: Prisma.StringWithAggregatesFilter<"study_shifts"> | string;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"study_shifts"> | Date | string;
    end_time?: Prisma.DateTimeWithAggregatesFilter<"study_shifts"> | Date | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"study_shifts"> | string | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"study_shifts"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"study_shifts"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"study_shifts"> | Date | string | null;
};
export type study_shiftsCreateInput = {
    name: string;
    days_of_week: string;
    start_time: Date | string;
    end_time: Date | string;
    description?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    class_groups?: Prisma.class_groupsCreateNestedManyWithoutShiftInput;
};
export type study_shiftsUncheckedCreateInput = {
    shift_id?: number;
    name: string;
    days_of_week: string;
    start_time: Date | string;
    end_time: Date | string;
    description?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    class_groups?: Prisma.class_groupsUncheckedCreateNestedManyWithoutShiftInput;
};
export type study_shiftsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    class_groups?: Prisma.class_groupsUpdateManyWithoutShiftNestedInput;
};
export type study_shiftsUncheckedUpdateInput = {
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    class_groups?: Prisma.class_groupsUncheckedUpdateManyWithoutShiftNestedInput;
};
export type study_shiftsCreateManyInput = {
    shift_id?: number;
    name: string;
    days_of_week: string;
    start_time: Date | string;
    end_time: Date | string;
    description?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type study_shiftsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type study_shiftsUncheckedUpdateManyInput = {
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type study_shiftsCountOrderByAggregateInput = {
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    days_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type study_shiftsAvgOrderByAggregateInput = {
    shift_id?: Prisma.SortOrder;
};
export type study_shiftsMaxOrderByAggregateInput = {
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    days_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type study_shiftsMinOrderByAggregateInput = {
    shift_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    days_of_week?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type study_shiftsSumOrderByAggregateInput = {
    shift_id?: Prisma.SortOrder;
};
export type Study_shiftsScalarRelationFilter = {
    is?: Prisma.study_shiftsWhereInput;
    isNot?: Prisma.study_shiftsWhereInput;
};
export type study_shiftsCreateNestedOneWithoutClass_groupsInput = {
    create?: Prisma.XOR<Prisma.study_shiftsCreateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedCreateWithoutClass_groupsInput>;
    connectOrCreate?: Prisma.study_shiftsCreateOrConnectWithoutClass_groupsInput;
    connect?: Prisma.study_shiftsWhereUniqueInput;
};
export type study_shiftsUpdateOneRequiredWithoutClass_groupsNestedInput = {
    create?: Prisma.XOR<Prisma.study_shiftsCreateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedCreateWithoutClass_groupsInput>;
    connectOrCreate?: Prisma.study_shiftsCreateOrConnectWithoutClass_groupsInput;
    upsert?: Prisma.study_shiftsUpsertWithoutClass_groupsInput;
    connect?: Prisma.study_shiftsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.study_shiftsUpdateToOneWithWhereWithoutClass_groupsInput, Prisma.study_shiftsUpdateWithoutClass_groupsInput>, Prisma.study_shiftsUncheckedUpdateWithoutClass_groupsInput>;
};
export type study_shiftsCreateWithoutClass_groupsInput = {
    name: string;
    days_of_week: string;
    start_time: Date | string;
    end_time: Date | string;
    description?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type study_shiftsUncheckedCreateWithoutClass_groupsInput = {
    shift_id?: number;
    name: string;
    days_of_week: string;
    start_time: Date | string;
    end_time: Date | string;
    description?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type study_shiftsCreateOrConnectWithoutClass_groupsInput = {
    where: Prisma.study_shiftsWhereUniqueInput;
    create: Prisma.XOR<Prisma.study_shiftsCreateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedCreateWithoutClass_groupsInput>;
};
export type study_shiftsUpsertWithoutClass_groupsInput = {
    update: Prisma.XOR<Prisma.study_shiftsUpdateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedUpdateWithoutClass_groupsInput>;
    create: Prisma.XOR<Prisma.study_shiftsCreateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedCreateWithoutClass_groupsInput>;
    where?: Prisma.study_shiftsWhereInput;
};
export type study_shiftsUpdateToOneWithWhereWithoutClass_groupsInput = {
    where?: Prisma.study_shiftsWhereInput;
    data: Prisma.XOR<Prisma.study_shiftsUpdateWithoutClass_groupsInput, Prisma.study_shiftsUncheckedUpdateWithoutClass_groupsInput>;
};
export type study_shiftsUpdateWithoutClass_groupsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type study_shiftsUncheckedUpdateWithoutClass_groupsInput = {
    shift_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    days_of_week?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Study_shiftsCountOutputType = {
    class_groups: number;
};
export type Study_shiftsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class_groups?: boolean | Study_shiftsCountOutputTypeCountClass_groupsArgs;
};
export type Study_shiftsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Study_shiftsCountOutputTypeSelect<ExtArgs> | null;
};
export type Study_shiftsCountOutputTypeCountClass_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_groupsWhereInput;
};
export type study_shiftsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shift_id?: boolean;
    name?: boolean;
    days_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    class_groups?: boolean | Prisma.study_shifts$class_groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.Study_shiftsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["study_shifts"]>;
export type study_shiftsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shift_id?: boolean;
    name?: boolean;
    days_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["study_shifts"]>;
export type study_shiftsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    shift_id?: boolean;
    name?: boolean;
    days_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["study_shifts"]>;
export type study_shiftsSelectScalar = {
    shift_id?: boolean;
    name?: boolean;
    days_of_week?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type study_shiftsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"shift_id" | "name" | "days_of_week" | "start_time" | "end_time" | "description" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["study_shifts"]>;
export type study_shiftsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class_groups?: boolean | Prisma.study_shifts$class_groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.Study_shiftsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type study_shiftsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type study_shiftsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $study_shiftsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "study_shifts";
    objects: {
        class_groups: Prisma.$class_groupsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        shift_id: number;
        name: string;
        days_of_week: string;
        start_time: Date;
        end_time: Date;
        description: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["study_shifts"]>;
    composites: {};
};
export type study_shiftsGetPayload<S extends boolean | null | undefined | study_shiftsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload, S>;
export type study_shiftsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<study_shiftsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Study_shiftsCountAggregateInputType | true;
};
export interface study_shiftsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['study_shifts'];
        meta: {
            name: 'study_shifts';
        };
    };
    findUnique<T extends study_shiftsFindUniqueArgs>(args: Prisma.SelectSubset<T, study_shiftsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends study_shiftsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, study_shiftsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends study_shiftsFindFirstArgs>(args?: Prisma.SelectSubset<T, study_shiftsFindFirstArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends study_shiftsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, study_shiftsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends study_shiftsFindManyArgs>(args?: Prisma.SelectSubset<T, study_shiftsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends study_shiftsCreateArgs>(args: Prisma.SelectSubset<T, study_shiftsCreateArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends study_shiftsCreateManyArgs>(args?: Prisma.SelectSubset<T, study_shiftsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends study_shiftsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, study_shiftsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends study_shiftsDeleteArgs>(args: Prisma.SelectSubset<T, study_shiftsDeleteArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends study_shiftsUpdateArgs>(args: Prisma.SelectSubset<T, study_shiftsUpdateArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends study_shiftsDeleteManyArgs>(args?: Prisma.SelectSubset<T, study_shiftsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends study_shiftsUpdateManyArgs>(args: Prisma.SelectSubset<T, study_shiftsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends study_shiftsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, study_shiftsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends study_shiftsUpsertArgs>(args: Prisma.SelectSubset<T, study_shiftsUpsertArgs<ExtArgs>>): Prisma.Prisma__study_shiftsClient<runtime.Types.Result.GetResult<Prisma.$study_shiftsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends study_shiftsCountArgs>(args?: Prisma.Subset<T, study_shiftsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Study_shiftsCountAggregateOutputType> : number>;
    aggregate<T extends Study_shiftsAggregateArgs>(args: Prisma.Subset<T, Study_shiftsAggregateArgs>): Prisma.PrismaPromise<GetStudy_shiftsAggregateType<T>>;
    groupBy<T extends study_shiftsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: study_shiftsGroupByArgs['orderBy'];
    } : {
        orderBy?: study_shiftsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, study_shiftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudy_shiftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: study_shiftsFieldRefs;
}
export interface Prisma__study_shiftsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class_groups<T extends Prisma.study_shifts$class_groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.study_shifts$class_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface study_shiftsFieldRefs {
    readonly shift_id: Prisma.FieldRef<"study_shifts", 'Int'>;
    readonly name: Prisma.FieldRef<"study_shifts", 'String'>;
    readonly days_of_week: Prisma.FieldRef<"study_shifts", 'String'>;
    readonly start_time: Prisma.FieldRef<"study_shifts", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"study_shifts", 'DateTime'>;
    readonly description: Prisma.FieldRef<"study_shifts", 'String'>;
    readonly is_active: Prisma.FieldRef<"study_shifts", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"study_shifts", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"study_shifts", 'DateTime'>;
}
export type study_shiftsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where: Prisma.study_shiftsWhereUniqueInput;
};
export type study_shiftsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where: Prisma.study_shiftsWhereUniqueInput;
};
export type study_shiftsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where?: Prisma.study_shiftsWhereInput;
    orderBy?: Prisma.study_shiftsOrderByWithRelationInput | Prisma.study_shiftsOrderByWithRelationInput[];
    cursor?: Prisma.study_shiftsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Study_shiftsScalarFieldEnum | Prisma.Study_shiftsScalarFieldEnum[];
};
export type study_shiftsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where?: Prisma.study_shiftsWhereInput;
    orderBy?: Prisma.study_shiftsOrderByWithRelationInput | Prisma.study_shiftsOrderByWithRelationInput[];
    cursor?: Prisma.study_shiftsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Study_shiftsScalarFieldEnum | Prisma.Study_shiftsScalarFieldEnum[];
};
export type study_shiftsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where?: Prisma.study_shiftsWhereInput;
    orderBy?: Prisma.study_shiftsOrderByWithRelationInput | Prisma.study_shiftsOrderByWithRelationInput[];
    cursor?: Prisma.study_shiftsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Study_shiftsScalarFieldEnum | Prisma.Study_shiftsScalarFieldEnum[];
};
export type study_shiftsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.study_shiftsCreateInput, Prisma.study_shiftsUncheckedCreateInput>;
};
export type study_shiftsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.study_shiftsCreateManyInput | Prisma.study_shiftsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type study_shiftsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    data: Prisma.study_shiftsCreateManyInput | Prisma.study_shiftsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type study_shiftsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.study_shiftsUpdateInput, Prisma.study_shiftsUncheckedUpdateInput>;
    where: Prisma.study_shiftsWhereUniqueInput;
};
export type study_shiftsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.study_shiftsUpdateManyMutationInput, Prisma.study_shiftsUncheckedUpdateManyInput>;
    where?: Prisma.study_shiftsWhereInput;
    limit?: number;
};
export type study_shiftsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.study_shiftsUpdateManyMutationInput, Prisma.study_shiftsUncheckedUpdateManyInput>;
    where?: Prisma.study_shiftsWhereInput;
    limit?: number;
};
export type study_shiftsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where: Prisma.study_shiftsWhereUniqueInput;
    create: Prisma.XOR<Prisma.study_shiftsCreateInput, Prisma.study_shiftsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.study_shiftsUpdateInput, Prisma.study_shiftsUncheckedUpdateInput>;
};
export type study_shiftsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
    where: Prisma.study_shiftsWhereUniqueInput;
};
export type study_shiftsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.study_shiftsWhereInput;
    limit?: number;
};
export type study_shifts$class_groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_groupsSelect<ExtArgs> | null;
    omit?: Prisma.class_groupsOmit<ExtArgs> | null;
    include?: Prisma.class_groupsInclude<ExtArgs> | null;
    where?: Prisma.class_groupsWhereInput;
    orderBy?: Prisma.class_groupsOrderByWithRelationInput | Prisma.class_groupsOrderByWithRelationInput[];
    cursor?: Prisma.class_groupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_groupsScalarFieldEnum | Prisma.Class_groupsScalarFieldEnum[];
};
export type study_shiftsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.study_shiftsSelect<ExtArgs> | null;
    omit?: Prisma.study_shiftsOmit<ExtArgs> | null;
    include?: Prisma.study_shiftsInclude<ExtArgs> | null;
};
export {};
