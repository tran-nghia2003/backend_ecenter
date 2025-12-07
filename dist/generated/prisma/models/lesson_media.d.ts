import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type lesson_mediaModel = runtime.Types.Result.DefaultSelection<Prisma.$lesson_mediaPayload>;
export type AggregateLesson_media = {
    _count: Lesson_mediaCountAggregateOutputType | null;
    _avg: Lesson_mediaAvgAggregateOutputType | null;
    _sum: Lesson_mediaSumAggregateOutputType | null;
    _min: Lesson_mediaMinAggregateOutputType | null;
    _max: Lesson_mediaMaxAggregateOutputType | null;
};
export type Lesson_mediaAvgAggregateOutputType = {
    media_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Lesson_mediaSumAggregateOutputType = {
    media_id: number | null;
    lesson_id: number | null;
    created_by: number | null;
};
export type Lesson_mediaMinAggregateOutputType = {
    media_id: number | null;
    lesson_id: number | null;
    media_type: string | null;
    media_url: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Lesson_mediaMaxAggregateOutputType = {
    media_id: number | null;
    lesson_id: number | null;
    media_type: string | null;
    media_url: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type Lesson_mediaCountAggregateOutputType = {
    media_id: number;
    lesson_id: number;
    media_type: number;
    media_url: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type Lesson_mediaAvgAggregateInputType = {
    media_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Lesson_mediaSumAggregateInputType = {
    media_id?: true;
    lesson_id?: true;
    created_by?: true;
};
export type Lesson_mediaMinAggregateInputType = {
    media_id?: true;
    lesson_id?: true;
    media_type?: true;
    media_url?: true;
    created_by?: true;
    created_at?: true;
};
export type Lesson_mediaMaxAggregateInputType = {
    media_id?: true;
    lesson_id?: true;
    media_type?: true;
    media_url?: true;
    created_by?: true;
    created_at?: true;
};
export type Lesson_mediaCountAggregateInputType = {
    media_id?: true;
    lesson_id?: true;
    media_type?: true;
    media_url?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type Lesson_mediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_mediaWhereInput;
    orderBy?: Prisma.lesson_mediaOrderByWithRelationInput | Prisma.lesson_mediaOrderByWithRelationInput[];
    cursor?: Prisma.lesson_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lesson_mediaCountAggregateInputType;
    _avg?: Lesson_mediaAvgAggregateInputType;
    _sum?: Lesson_mediaSumAggregateInputType;
    _min?: Lesson_mediaMinAggregateInputType;
    _max?: Lesson_mediaMaxAggregateInputType;
};
export type GetLesson_mediaAggregateType<T extends Lesson_mediaAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson_media]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson_media[P]> : Prisma.GetScalarType<T[P], AggregateLesson_media[P]>;
};
export type lesson_mediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_mediaWhereInput;
    orderBy?: Prisma.lesson_mediaOrderByWithAggregationInput | Prisma.lesson_mediaOrderByWithAggregationInput[];
    by: Prisma.Lesson_mediaScalarFieldEnum[] | Prisma.Lesson_mediaScalarFieldEnum;
    having?: Prisma.lesson_mediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lesson_mediaCountAggregateInputType | true;
    _avg?: Lesson_mediaAvgAggregateInputType;
    _sum?: Lesson_mediaSumAggregateInputType;
    _min?: Lesson_mediaMinAggregateInputType;
    _max?: Lesson_mediaMaxAggregateInputType;
};
export type Lesson_mediaGroupByOutputType = {
    media_id: number;
    lesson_id: number | null;
    media_type: string | null;
    media_url: string;
    created_by: number | null;
    created_at: Date | null;
    _count: Lesson_mediaCountAggregateOutputType | null;
    _avg: Lesson_mediaAvgAggregateOutputType | null;
    _sum: Lesson_mediaSumAggregateOutputType | null;
    _min: Lesson_mediaMinAggregateOutputType | null;
    _max: Lesson_mediaMaxAggregateOutputType | null;
};
type GetLesson_mediaGroupByPayload<T extends lesson_mediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lesson_mediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lesson_mediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lesson_mediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lesson_mediaGroupByOutputType[P]>;
}>>;
export type lesson_mediaWhereInput = {
    AND?: Prisma.lesson_mediaWhereInput | Prisma.lesson_mediaWhereInput[];
    OR?: Prisma.lesson_mediaWhereInput[];
    NOT?: Prisma.lesson_mediaWhereInput | Prisma.lesson_mediaWhereInput[];
    media_id?: Prisma.IntFilter<"lesson_media"> | number;
    lesson_id?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    media_type?: Prisma.StringNullableFilter<"lesson_media"> | string | null;
    media_url?: Prisma.StringFilter<"lesson_media"> | string;
    created_by?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_media"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
};
export type lesson_mediaOrderByWithRelationInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    lessons?: Prisma.lessonsOrderByWithRelationInput;
};
export type lesson_mediaWhereUniqueInput = Prisma.AtLeast<{
    media_id?: number;
    AND?: Prisma.lesson_mediaWhereInput | Prisma.lesson_mediaWhereInput[];
    OR?: Prisma.lesson_mediaWhereInput[];
    NOT?: Prisma.lesson_mediaWhereInput | Prisma.lesson_mediaWhereInput[];
    lesson_id?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    media_type?: Prisma.StringNullableFilter<"lesson_media"> | string | null;
    media_url?: Prisma.StringFilter<"lesson_media"> | string;
    created_by?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_media"> | Date | string | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    lessons?: Prisma.XOR<Prisma.LessonsNullableScalarRelationFilter, Prisma.lessonsWhereInput> | null;
}, "media_id">;
export type lesson_mediaOrderByWithAggregationInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lesson_mediaCountOrderByAggregateInput;
    _avg?: Prisma.lesson_mediaAvgOrderByAggregateInput;
    _max?: Prisma.lesson_mediaMaxOrderByAggregateInput;
    _min?: Prisma.lesson_mediaMinOrderByAggregateInput;
    _sum?: Prisma.lesson_mediaSumOrderByAggregateInput;
};
export type lesson_mediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.lesson_mediaScalarWhereWithAggregatesInput | Prisma.lesson_mediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.lesson_mediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lesson_mediaScalarWhereWithAggregatesInput | Prisma.lesson_mediaScalarWhereWithAggregatesInput[];
    media_id?: Prisma.IntWithAggregatesFilter<"lesson_media"> | number;
    lesson_id?: Prisma.IntNullableWithAggregatesFilter<"lesson_media"> | number | null;
    media_type?: Prisma.StringNullableWithAggregatesFilter<"lesson_media"> | string | null;
    media_url?: Prisma.StringWithAggregatesFilter<"lesson_media"> | string;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"lesson_media"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"lesson_media"> | Date | string | null;
};
export type lesson_mediaCreateInput = {
    media_type?: string | null;
    media_url: string;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutLesson_mediaInput;
    lessons?: Prisma.lessonsCreateNestedOneWithoutLesson_mediaInput;
};
export type lesson_mediaUncheckedCreateInput = {
    media_id?: number;
    lesson_id?: number | null;
    media_type?: string | null;
    media_url: string;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type lesson_mediaUpdateInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutLesson_mediaNestedInput;
    lessons?: Prisma.lessonsUpdateOneWithoutLesson_mediaNestedInput;
};
export type lesson_mediaUncheckedUpdateInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaCreateManyInput = {
    media_id?: number;
    lesson_id?: number | null;
    media_type?: string | null;
    media_url: string;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type lesson_mediaUpdateManyMutationInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaUncheckedUpdateManyInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaCountOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type lesson_mediaAvgOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type lesson_mediaMaxOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type lesson_mediaMinOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    media_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type lesson_mediaSumOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    lesson_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type Lesson_mediaListRelationFilter = {
    every?: Prisma.lesson_mediaWhereInput;
    some?: Prisma.lesson_mediaWhereInput;
    none?: Prisma.lesson_mediaWhereInput;
};
export type lesson_mediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lesson_mediaCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput> | Prisma.lesson_mediaCreateWithoutLessonsInput[] | Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput | Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.lesson_mediaCreateManyLessonsInputEnvelope;
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
};
export type lesson_mediaUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput> | Prisma.lesson_mediaCreateWithoutLessonsInput[] | Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput | Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput[];
    createMany?: Prisma.lesson_mediaCreateManyLessonsInputEnvelope;
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
};
export type lesson_mediaUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput> | Prisma.lesson_mediaCreateWithoutLessonsInput[] | Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput | Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.lesson_mediaUpsertWithWhereUniqueWithoutLessonsInput | Prisma.lesson_mediaUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.lesson_mediaCreateManyLessonsInputEnvelope;
    set?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    disconnect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    delete?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    update?: Prisma.lesson_mediaUpdateWithWhereUniqueWithoutLessonsInput | Prisma.lesson_mediaUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.lesson_mediaUpdateManyWithWhereWithoutLessonsInput | Prisma.lesson_mediaUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
};
export type lesson_mediaUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput> | Prisma.lesson_mediaCreateWithoutLessonsInput[] | Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput | Prisma.lesson_mediaCreateOrConnectWithoutLessonsInput[];
    upsert?: Prisma.lesson_mediaUpsertWithWhereUniqueWithoutLessonsInput | Prisma.lesson_mediaUpsertWithWhereUniqueWithoutLessonsInput[];
    createMany?: Prisma.lesson_mediaCreateManyLessonsInputEnvelope;
    set?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    disconnect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    delete?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    update?: Prisma.lesson_mediaUpdateWithWhereUniqueWithoutLessonsInput | Prisma.lesson_mediaUpdateWithWhereUniqueWithoutLessonsInput[];
    updateMany?: Prisma.lesson_mediaUpdateManyWithWhereWithoutLessonsInput | Prisma.lesson_mediaUpdateManyWithWhereWithoutLessonsInput[];
    deleteMany?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
};
export type lesson_mediaCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput> | Prisma.lesson_mediaCreateWithoutUsersInput[] | Prisma.lesson_mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutUsersInput | Prisma.lesson_mediaCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_mediaCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
};
export type lesson_mediaUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput> | Prisma.lesson_mediaCreateWithoutUsersInput[] | Prisma.lesson_mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutUsersInput | Prisma.lesson_mediaCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.lesson_mediaCreateManyUsersInputEnvelope;
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
};
export type lesson_mediaUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput> | Prisma.lesson_mediaCreateWithoutUsersInput[] | Prisma.lesson_mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutUsersInput | Prisma.lesson_mediaCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_mediaUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_mediaUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_mediaCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    disconnect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    delete?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    update?: Prisma.lesson_mediaUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_mediaUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_mediaUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_mediaUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
};
export type lesson_mediaUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput> | Prisma.lesson_mediaCreateWithoutUsersInput[] | Prisma.lesson_mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.lesson_mediaCreateOrConnectWithoutUsersInput | Prisma.lesson_mediaCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.lesson_mediaUpsertWithWhereUniqueWithoutUsersInput | Prisma.lesson_mediaUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.lesson_mediaCreateManyUsersInputEnvelope;
    set?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    disconnect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    delete?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    connect?: Prisma.lesson_mediaWhereUniqueInput | Prisma.lesson_mediaWhereUniqueInput[];
    update?: Prisma.lesson_mediaUpdateWithWhereUniqueWithoutUsersInput | Prisma.lesson_mediaUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.lesson_mediaUpdateManyWithWhereWithoutUsersInput | Prisma.lesson_mediaUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
};
export type lesson_mediaCreateWithoutLessonsInput = {
    media_type?: string | null;
    media_url: string;
    created_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutLesson_mediaInput;
};
export type lesson_mediaUncheckedCreateWithoutLessonsInput = {
    media_id?: number;
    media_type?: string | null;
    media_url: string;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type lesson_mediaCreateOrConnectWithoutLessonsInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput>;
};
export type lesson_mediaCreateManyLessonsInputEnvelope = {
    data: Prisma.lesson_mediaCreateManyLessonsInput | Prisma.lesson_mediaCreateManyLessonsInput[];
    skipDuplicates?: boolean;
};
export type lesson_mediaUpsertWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_mediaUpdateWithoutLessonsInput, Prisma.lesson_mediaUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.lesson_mediaCreateWithoutLessonsInput, Prisma.lesson_mediaUncheckedCreateWithoutLessonsInput>;
};
export type lesson_mediaUpdateWithWhereUniqueWithoutLessonsInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateWithoutLessonsInput, Prisma.lesson_mediaUncheckedUpdateWithoutLessonsInput>;
};
export type lesson_mediaUpdateManyWithWhereWithoutLessonsInput = {
    where: Prisma.lesson_mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateManyMutationInput, Prisma.lesson_mediaUncheckedUpdateManyWithoutLessonsInput>;
};
export type lesson_mediaScalarWhereInput = {
    AND?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
    OR?: Prisma.lesson_mediaScalarWhereInput[];
    NOT?: Prisma.lesson_mediaScalarWhereInput | Prisma.lesson_mediaScalarWhereInput[];
    media_id?: Prisma.IntFilter<"lesson_media"> | number;
    lesson_id?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    media_type?: Prisma.StringNullableFilter<"lesson_media"> | string | null;
    media_url?: Prisma.StringFilter<"lesson_media"> | string;
    created_by?: Prisma.IntNullableFilter<"lesson_media"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"lesson_media"> | Date | string | null;
};
export type lesson_mediaCreateWithoutUsersInput = {
    media_type?: string | null;
    media_url: string;
    created_at?: Date | string | null;
    lessons?: Prisma.lessonsCreateNestedOneWithoutLesson_mediaInput;
};
export type lesson_mediaUncheckedCreateWithoutUsersInput = {
    media_id?: number;
    lesson_id?: number | null;
    media_type?: string | null;
    media_url: string;
    created_at?: Date | string | null;
};
export type lesson_mediaCreateOrConnectWithoutUsersInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput>;
};
export type lesson_mediaCreateManyUsersInputEnvelope = {
    data: Prisma.lesson_mediaCreateManyUsersInput | Prisma.lesson_mediaCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type lesson_mediaUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.lesson_mediaUpdateWithoutUsersInput, Prisma.lesson_mediaUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.lesson_mediaCreateWithoutUsersInput, Prisma.lesson_mediaUncheckedCreateWithoutUsersInput>;
};
export type lesson_mediaUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.lesson_mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateWithoutUsersInput, Prisma.lesson_mediaUncheckedUpdateWithoutUsersInput>;
};
export type lesson_mediaUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.lesson_mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateManyMutationInput, Prisma.lesson_mediaUncheckedUpdateManyWithoutUsersInput>;
};
export type lesson_mediaCreateManyLessonsInput = {
    media_id?: number;
    media_type?: string | null;
    media_url: string;
    created_by?: number | null;
    created_at?: Date | string | null;
};
export type lesson_mediaUpdateWithoutLessonsInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutLesson_mediaNestedInput;
};
export type lesson_mediaUncheckedUpdateWithoutLessonsInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaUncheckedUpdateManyWithoutLessonsInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaCreateManyUsersInput = {
    media_id?: number;
    lesson_id?: number | null;
    media_type?: string | null;
    media_url: string;
    created_at?: Date | string | null;
};
export type lesson_mediaUpdateWithoutUsersInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lessons?: Prisma.lessonsUpdateOneWithoutLesson_mediaNestedInput;
};
export type lesson_mediaUncheckedUpdateWithoutUsersInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaUncheckedUpdateManyWithoutUsersInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesson_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_url?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type lesson_mediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    lesson_id?: boolean;
    media_type?: boolean;
    media_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_media"]>;
export type lesson_mediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    lesson_id?: boolean;
    media_type?: boolean;
    media_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_media"]>;
export type lesson_mediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    lesson_id?: boolean;
    media_type?: boolean;
    media_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
}, ExtArgs["result"]["lesson_media"]>;
export type lesson_mediaSelectScalar = {
    media_id?: boolean;
    lesson_id?: boolean;
    media_type?: boolean;
    media_url?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type lesson_mediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"media_id" | "lesson_id" | "media_type" | "media_url" | "created_by" | "created_at", ExtArgs["result"]["lesson_media"]>;
export type lesson_mediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
};
export type lesson_mediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
};
export type lesson_mediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.lesson_media$usersArgs<ExtArgs>;
    lessons?: boolean | Prisma.lesson_media$lessonsArgs<ExtArgs>;
};
export type $lesson_mediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lesson_media";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        lessons: Prisma.$lessonsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        media_id: number;
        lesson_id: number | null;
        media_type: string | null;
        media_url: string;
        created_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["lesson_media"]>;
    composites: {};
};
export type lesson_mediaGetPayload<S extends boolean | null | undefined | lesson_mediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload, S>;
export type lesson_mediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lesson_mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lesson_mediaCountAggregateInputType | true;
};
export interface lesson_mediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lesson_media'];
        meta: {
            name: 'lesson_media';
        };
    };
    findUnique<T extends lesson_mediaFindUniqueArgs>(args: Prisma.SelectSubset<T, lesson_mediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lesson_mediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lesson_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lesson_mediaFindFirstArgs>(args?: Prisma.SelectSubset<T, lesson_mediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lesson_mediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lesson_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lesson_mediaFindManyArgs>(args?: Prisma.SelectSubset<T, lesson_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lesson_mediaCreateArgs>(args: Prisma.SelectSubset<T, lesson_mediaCreateArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lesson_mediaCreateManyArgs>(args?: Prisma.SelectSubset<T, lesson_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends lesson_mediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, lesson_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends lesson_mediaDeleteArgs>(args: Prisma.SelectSubset<T, lesson_mediaDeleteArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lesson_mediaUpdateArgs>(args: Prisma.SelectSubset<T, lesson_mediaUpdateArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lesson_mediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, lesson_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lesson_mediaUpdateManyArgs>(args: Prisma.SelectSubset<T, lesson_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends lesson_mediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, lesson_mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends lesson_mediaUpsertArgs>(args: Prisma.SelectSubset<T, lesson_mediaUpsertArgs<ExtArgs>>): Prisma.Prisma__lesson_mediaClient<runtime.Types.Result.GetResult<Prisma.$lesson_mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lesson_mediaCountArgs>(args?: Prisma.Subset<T, lesson_mediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lesson_mediaCountAggregateOutputType> : number>;
    aggregate<T extends Lesson_mediaAggregateArgs>(args: Prisma.Subset<T, Lesson_mediaAggregateArgs>): Prisma.PrismaPromise<GetLesson_mediaAggregateType<T>>;
    groupBy<T extends lesson_mediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lesson_mediaGroupByArgs['orderBy'];
    } : {
        orderBy?: lesson_mediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lesson_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLesson_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lesson_mediaFieldRefs;
}
export interface Prisma__lesson_mediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.lesson_media$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lesson_media$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessons<T extends Prisma.lesson_media$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lesson_media$lessonsArgs<ExtArgs>>): Prisma.Prisma__lessonsClient<runtime.Types.Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lesson_mediaFieldRefs {
    readonly media_id: Prisma.FieldRef<"lesson_media", 'Int'>;
    readonly lesson_id: Prisma.FieldRef<"lesson_media", 'Int'>;
    readonly media_type: Prisma.FieldRef<"lesson_media", 'String'>;
    readonly media_url: Prisma.FieldRef<"lesson_media", 'String'>;
    readonly created_by: Prisma.FieldRef<"lesson_media", 'Int'>;
    readonly created_at: Prisma.FieldRef<"lesson_media", 'DateTime'>;
}
export type lesson_mediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where: Prisma.lesson_mediaWhereUniqueInput;
};
export type lesson_mediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where: Prisma.lesson_mediaWhereUniqueInput;
};
export type lesson_mediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where?: Prisma.lesson_mediaWhereInput;
    orderBy?: Prisma.lesson_mediaOrderByWithRelationInput | Prisma.lesson_mediaOrderByWithRelationInput[];
    cursor?: Prisma.lesson_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_mediaScalarFieldEnum | Prisma.Lesson_mediaScalarFieldEnum[];
};
export type lesson_mediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where?: Prisma.lesson_mediaWhereInput;
    orderBy?: Prisma.lesson_mediaOrderByWithRelationInput | Prisma.lesson_mediaOrderByWithRelationInput[];
    cursor?: Prisma.lesson_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_mediaScalarFieldEnum | Prisma.Lesson_mediaScalarFieldEnum[];
};
export type lesson_mediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where?: Prisma.lesson_mediaWhereInput;
    orderBy?: Prisma.lesson_mediaOrderByWithRelationInput | Prisma.lesson_mediaOrderByWithRelationInput[];
    cursor?: Prisma.lesson_mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_mediaScalarFieldEnum | Prisma.Lesson_mediaScalarFieldEnum[];
};
export type lesson_mediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_mediaCreateInput, Prisma.lesson_mediaUncheckedCreateInput>;
};
export type lesson_mediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lesson_mediaCreateManyInput | Prisma.lesson_mediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lesson_mediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    data: Prisma.lesson_mediaCreateManyInput | Prisma.lesson_mediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.lesson_mediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type lesson_mediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateInput, Prisma.lesson_mediaUncheckedUpdateInput>;
    where: Prisma.lesson_mediaWhereUniqueInput;
};
export type lesson_mediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lesson_mediaUpdateManyMutationInput, Prisma.lesson_mediaUncheckedUpdateManyInput>;
    where?: Prisma.lesson_mediaWhereInput;
    limit?: number;
};
export type lesson_mediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lesson_mediaUpdateManyMutationInput, Prisma.lesson_mediaUncheckedUpdateManyInput>;
    where?: Prisma.lesson_mediaWhereInput;
    limit?: number;
    include?: Prisma.lesson_mediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type lesson_mediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where: Prisma.lesson_mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.lesson_mediaCreateInput, Prisma.lesson_mediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lesson_mediaUpdateInput, Prisma.lesson_mediaUncheckedUpdateInput>;
};
export type lesson_mediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
    where: Prisma.lesson_mediaWhereUniqueInput;
};
export type lesson_mediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_mediaWhereInput;
    limit?: number;
};
export type lesson_media$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type lesson_media$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lessonsSelect<ExtArgs> | null;
    omit?: Prisma.lessonsOmit<ExtArgs> | null;
    include?: Prisma.lessonsInclude<ExtArgs> | null;
    where?: Prisma.lessonsWhereInput;
};
export type lesson_mediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_mediaSelect<ExtArgs> | null;
    omit?: Prisma.lesson_mediaOmit<ExtArgs> | null;
    include?: Prisma.lesson_mediaInclude<ExtArgs> | null;
};
export {};
