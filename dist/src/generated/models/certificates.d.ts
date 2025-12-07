import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type certificatesModel = runtime.Types.Result.DefaultSelection<Prisma.$certificatesPayload>;
export type AggregateCertificates = {
    _count: CertificatesCountAggregateOutputType | null;
    _avg: CertificatesAvgAggregateOutputType | null;
    _sum: CertificatesSumAggregateOutputType | null;
    _min: CertificatesMinAggregateOutputType | null;
    _max: CertificatesMaxAggregateOutputType | null;
};
export type CertificatesAvgAggregateOutputType = {
    cert_id: number | null;
    user_id: number | null;
    course_id: number | null;
    created_by: number | null;
};
export type CertificatesSumAggregateOutputType = {
    cert_id: number | null;
    user_id: number | null;
    course_id: number | null;
    created_by: number | null;
};
export type CertificatesMinAggregateOutputType = {
    cert_id: number | null;
    user_id: number | null;
    course_id: number | null;
    issue_date: Date | null;
    cert_url: string | null;
    created_by: number | null;
};
export type CertificatesMaxAggregateOutputType = {
    cert_id: number | null;
    user_id: number | null;
    course_id: number | null;
    issue_date: Date | null;
    cert_url: string | null;
    created_by: number | null;
};
export type CertificatesCountAggregateOutputType = {
    cert_id: number;
    user_id: number;
    course_id: number;
    issue_date: number;
    cert_url: number;
    created_by: number;
    _all: number;
};
export type CertificatesAvgAggregateInputType = {
    cert_id?: true;
    user_id?: true;
    course_id?: true;
    created_by?: true;
};
export type CertificatesSumAggregateInputType = {
    cert_id?: true;
    user_id?: true;
    course_id?: true;
    created_by?: true;
};
export type CertificatesMinAggregateInputType = {
    cert_id?: true;
    user_id?: true;
    course_id?: true;
    issue_date?: true;
    cert_url?: true;
    created_by?: true;
};
export type CertificatesMaxAggregateInputType = {
    cert_id?: true;
    user_id?: true;
    course_id?: true;
    issue_date?: true;
    cert_url?: true;
    created_by?: true;
};
export type CertificatesCountAggregateInputType = {
    cert_id?: true;
    user_id?: true;
    course_id?: true;
    issue_date?: true;
    cert_url?: true;
    created_by?: true;
    _all?: true;
};
export type CertificatesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CertificatesCountAggregateInputType;
    _avg?: CertificatesAvgAggregateInputType;
    _sum?: CertificatesSumAggregateInputType;
    _min?: CertificatesMinAggregateInputType;
    _max?: CertificatesMaxAggregateInputType;
};
export type GetCertificatesAggregateType<T extends CertificatesAggregateArgs> = {
    [P in keyof T & keyof AggregateCertificates]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCertificates[P]> : Prisma.GetScalarType<T[P], AggregateCertificates[P]>;
};
export type certificatesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithAggregationInput | Prisma.certificatesOrderByWithAggregationInput[];
    by: Prisma.CertificatesScalarFieldEnum[] | Prisma.CertificatesScalarFieldEnum;
    having?: Prisma.certificatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificatesCountAggregateInputType | true;
    _avg?: CertificatesAvgAggregateInputType;
    _sum?: CertificatesSumAggregateInputType;
    _min?: CertificatesMinAggregateInputType;
    _max?: CertificatesMaxAggregateInputType;
};
export type CertificatesGroupByOutputType = {
    cert_id: number;
    user_id: number | null;
    course_id: number | null;
    issue_date: Date | null;
    cert_url: string | null;
    created_by: number | null;
    _count: CertificatesCountAggregateOutputType | null;
    _avg: CertificatesAvgAggregateOutputType | null;
    _sum: CertificatesSumAggregateOutputType | null;
    _min: CertificatesMinAggregateOutputType | null;
    _max: CertificatesMaxAggregateOutputType | null;
};
type GetCertificatesGroupByPayload<T extends certificatesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CertificatesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CertificatesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CertificatesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CertificatesGroupByOutputType[P]>;
}>>;
export type certificatesWhereInput = {
    AND?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    OR?: Prisma.certificatesWhereInput[];
    NOT?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    cert_id?: Prisma.IntFilter<"certificates"> | number;
    user_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    course_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    issue_date?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    cert_url?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_by?: Prisma.IntNullableFilter<"certificates"> | number | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
};
export type certificatesOrderByWithRelationInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    issue_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    cert_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type certificatesWhereUniqueInput = Prisma.AtLeast<{
    cert_id?: number;
    AND?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    OR?: Prisma.certificatesWhereInput[];
    NOT?: Prisma.certificatesWhereInput | Prisma.certificatesWhereInput[];
    user_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    course_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    issue_date?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    cert_url?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_by?: Prisma.IntNullableFilter<"certificates"> | number | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
}, "cert_id">;
export type certificatesOrderByWithAggregationInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    course_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    issue_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    cert_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.certificatesCountOrderByAggregateInput;
    _avg?: Prisma.certificatesAvgOrderByAggregateInput;
    _max?: Prisma.certificatesMaxOrderByAggregateInput;
    _min?: Prisma.certificatesMinOrderByAggregateInput;
    _sum?: Prisma.certificatesSumOrderByAggregateInput;
};
export type certificatesScalarWhereWithAggregatesInput = {
    AND?: Prisma.certificatesScalarWhereWithAggregatesInput | Prisma.certificatesScalarWhereWithAggregatesInput[];
    OR?: Prisma.certificatesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.certificatesScalarWhereWithAggregatesInput | Prisma.certificatesScalarWhereWithAggregatesInput[];
    cert_id?: Prisma.IntWithAggregatesFilter<"certificates"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"certificates"> | number | null;
    course_id?: Prisma.IntNullableWithAggregatesFilter<"certificates"> | number | null;
    issue_date?: Prisma.DateTimeNullableWithAggregatesFilter<"certificates"> | Date | string | null;
    cert_url?: Prisma.StringNullableWithAggregatesFilter<"certificates"> | string | null;
    created_by?: Prisma.IntNullableWithAggregatesFilter<"certificates"> | number | null;
};
export type certificatesCreateInput = {
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCertificatesInput;
    users?: Prisma.usersCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateInput = {
    cert_id?: number;
    user_id?: number | null;
    course_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesUpdateInput = {
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    courses?: Prisma.coursesUpdateOneWithoutCertificatesNestedInput;
    users?: Prisma.usersUpdateOneWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesCreateManyInput = {
    cert_id?: number;
    user_id?: number | null;
    course_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesUpdateManyMutationInput = {
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesUncheckedUpdateManyInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CertificatesListRelationFilter = {
    every?: Prisma.certificatesWhereInput;
    some?: Prisma.certificatesWhereInput;
    none?: Prisma.certificatesWhereInput;
};
export type certificatesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type certificatesCountOrderByAggregateInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    issue_date?: Prisma.SortOrder;
    cert_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type certificatesAvgOrderByAggregateInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type certificatesMaxOrderByAggregateInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    issue_date?: Prisma.SortOrder;
    cert_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type certificatesMinOrderByAggregateInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    issue_date?: Prisma.SortOrder;
    cert_url?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type certificatesSumOrderByAggregateInput = {
    cert_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type certificatesCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutUsersInput | Prisma.certificatesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput> | Prisma.certificatesCreateWithoutUsersInput[] | Prisma.certificatesUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutUsersInput | Prisma.certificatesCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.certificatesCreateManyUsersInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput | Prisma.certificatesUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutUsersInput | Prisma.certificatesUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
};
export type certificatesUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput | Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput> | Prisma.certificatesCreateWithoutCoursesInput[] | Prisma.certificatesUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.certificatesCreateOrConnectWithoutCoursesInput | Prisma.certificatesCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.certificatesCreateManyCoursesInputEnvelope;
    set?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    disconnect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    delete?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    connect?: Prisma.certificatesWhereUniqueInput | Prisma.certificatesWhereUniqueInput[];
    update?: Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput | Prisma.certificatesUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput | Prisma.certificatesUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
};
export type certificatesCreateWithoutUsersInput = {
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
    courses?: Prisma.coursesCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateWithoutUsersInput = {
    cert_id?: number;
    course_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesCreateOrConnectWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput>;
};
export type certificatesCreateManyUsersInputEnvelope = {
    data: Prisma.certificatesCreateManyUsersInput | Prisma.certificatesCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.certificatesUpdateWithoutUsersInput, Prisma.certificatesUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutUsersInput, Prisma.certificatesUncheckedCreateWithoutUsersInput>;
};
export type certificatesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.certificatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.certificatesUpdateWithoutUsersInput, Prisma.certificatesUncheckedUpdateWithoutUsersInput>;
};
export type certificatesUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.certificatesScalarWhereInput;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyWithoutUsersInput>;
};
export type certificatesScalarWhereInput = {
    AND?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
    OR?: Prisma.certificatesScalarWhereInput[];
    NOT?: Prisma.certificatesScalarWhereInput | Prisma.certificatesScalarWhereInput[];
    cert_id?: Prisma.IntFilter<"certificates"> | number;
    user_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    course_id?: Prisma.IntNullableFilter<"certificates"> | number | null;
    issue_date?: Prisma.DateTimeNullableFilter<"certificates"> | Date | string | null;
    cert_url?: Prisma.StringNullableFilter<"certificates"> | string | null;
    created_by?: Prisma.IntNullableFilter<"certificates"> | number | null;
};
export type certificatesCreateWithoutCoursesInput = {
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
    users?: Prisma.usersCreateNestedOneWithoutCertificatesInput;
};
export type certificatesUncheckedCreateWithoutCoursesInput = {
    cert_id?: number;
    user_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesCreateOrConnectWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput>;
};
export type certificatesCreateManyCoursesInputEnvelope = {
    data: Prisma.certificatesCreateManyCoursesInput | Prisma.certificatesCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type certificatesUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    update: Prisma.XOR<Prisma.certificatesUpdateWithoutCoursesInput, Prisma.certificatesUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.certificatesCreateWithoutCoursesInput, Prisma.certificatesUncheckedCreateWithoutCoursesInput>;
};
export type certificatesUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.certificatesWhereUniqueInput;
    data: Prisma.XOR<Prisma.certificatesUpdateWithoutCoursesInput, Prisma.certificatesUncheckedUpdateWithoutCoursesInput>;
};
export type certificatesUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.certificatesScalarWhereInput;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyWithoutCoursesInput>;
};
export type certificatesCreateManyUsersInput = {
    cert_id?: number;
    course_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesUpdateWithoutUsersInput = {
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    courses?: Prisma.coursesUpdateOneWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateWithoutUsersInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesUncheckedUpdateManyWithoutUsersInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesCreateManyCoursesInput = {
    cert_id?: number;
    user_id?: number | null;
    issue_date?: Date | string | null;
    cert_url?: string | null;
    created_by?: number | null;
};
export type certificatesUpdateWithoutCoursesInput = {
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    users?: Prisma.usersUpdateOneWithoutCertificatesNestedInput;
};
export type certificatesUncheckedUpdateWithoutCoursesInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesUncheckedUpdateManyWithoutCoursesInput = {
    cert_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issue_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cert_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type certificatesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cert_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    issue_date?: boolean;
    cert_url?: boolean;
    created_by?: boolean;
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
}, ExtArgs["result"]["certificates"]>;
export type certificatesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cert_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    issue_date?: boolean;
    cert_url?: boolean;
    created_by?: boolean;
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
}, ExtArgs["result"]["certificates"]>;
export type certificatesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cert_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    issue_date?: boolean;
    cert_url?: boolean;
    created_by?: boolean;
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
}, ExtArgs["result"]["certificates"]>;
export type certificatesSelectScalar = {
    cert_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    issue_date?: boolean;
    cert_url?: boolean;
    created_by?: boolean;
};
export type certificatesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cert_id" | "user_id" | "course_id" | "issue_date" | "cert_url" | "created_by", ExtArgs["result"]["certificates"]>;
export type certificatesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
};
export type certificatesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
};
export type certificatesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.certificates$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.certificates$usersArgs<ExtArgs>;
};
export type $certificatesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "certificates";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cert_id: number;
        user_id: number | null;
        course_id: number | null;
        issue_date: Date | null;
        cert_url: string | null;
        created_by: number | null;
    }, ExtArgs["result"]["certificates"]>;
    composites: {};
};
export type certificatesGetPayload<S extends boolean | null | undefined | certificatesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$certificatesPayload, S>;
export type certificatesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<certificatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CertificatesCountAggregateInputType | true;
};
export interface certificatesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['certificates'];
        meta: {
            name: 'certificates';
        };
    };
    findUnique<T extends certificatesFindUniqueArgs>(args: Prisma.SelectSubset<T, certificatesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends certificatesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, certificatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends certificatesFindFirstArgs>(args?: Prisma.SelectSubset<T, certificatesFindFirstArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends certificatesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, certificatesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends certificatesFindManyArgs>(args?: Prisma.SelectSubset<T, certificatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends certificatesCreateArgs>(args: Prisma.SelectSubset<T, certificatesCreateArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends certificatesCreateManyArgs>(args?: Prisma.SelectSubset<T, certificatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends certificatesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, certificatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends certificatesDeleteArgs>(args: Prisma.SelectSubset<T, certificatesDeleteArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends certificatesUpdateArgs>(args: Prisma.SelectSubset<T, certificatesUpdateArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends certificatesDeleteManyArgs>(args?: Prisma.SelectSubset<T, certificatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends certificatesUpdateManyArgs>(args: Prisma.SelectSubset<T, certificatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends certificatesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, certificatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends certificatesUpsertArgs>(args: Prisma.SelectSubset<T, certificatesUpsertArgs<ExtArgs>>): Prisma.Prisma__certificatesClient<runtime.Types.Result.GetResult<Prisma.$certificatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends certificatesCountArgs>(args?: Prisma.Subset<T, certificatesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CertificatesCountAggregateOutputType> : number>;
    aggregate<T extends CertificatesAggregateArgs>(args: Prisma.Subset<T, CertificatesAggregateArgs>): Prisma.PrismaPromise<GetCertificatesAggregateType<T>>;
    groupBy<T extends certificatesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: certificatesGroupByArgs['orderBy'];
    } : {
        orderBy?: certificatesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, certificatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: certificatesFieldRefs;
}
export interface Prisma__certificatesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.certificates$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.certificates$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.certificates$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.certificates$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface certificatesFieldRefs {
    readonly cert_id: Prisma.FieldRef<"certificates", 'Int'>;
    readonly user_id: Prisma.FieldRef<"certificates", 'Int'>;
    readonly course_id: Prisma.FieldRef<"certificates", 'Int'>;
    readonly issue_date: Prisma.FieldRef<"certificates", 'DateTime'>;
    readonly cert_url: Prisma.FieldRef<"certificates", 'String'>;
    readonly created_by: Prisma.FieldRef<"certificates", 'Int'>;
}
export type certificatesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificatesScalarFieldEnum | Prisma.CertificatesScalarFieldEnum[];
};
export type certificatesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificatesScalarFieldEnum | Prisma.CertificatesScalarFieldEnum[];
};
export type certificatesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where?: Prisma.certificatesWhereInput;
    orderBy?: Prisma.certificatesOrderByWithRelationInput | Prisma.certificatesOrderByWithRelationInput[];
    cursor?: Prisma.certificatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificatesScalarFieldEnum | Prisma.CertificatesScalarFieldEnum[];
};
export type certificatesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.certificatesCreateInput, Prisma.certificatesUncheckedCreateInput>;
};
export type certificatesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.certificatesCreateManyInput | Prisma.certificatesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type certificatesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    data: Prisma.certificatesCreateManyInput | Prisma.certificatesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.certificatesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type certificatesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.certificatesUpdateInput, Prisma.certificatesUncheckedUpdateInput>;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyInput>;
    where?: Prisma.certificatesWhereInput;
    limit?: number;
};
export type certificatesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.certificatesUpdateManyMutationInput, Prisma.certificatesUncheckedUpdateManyInput>;
    where?: Prisma.certificatesWhereInput;
    limit?: number;
    include?: Prisma.certificatesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type certificatesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
    create: Prisma.XOR<Prisma.certificatesCreateInput, Prisma.certificatesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.certificatesUpdateInput, Prisma.certificatesUncheckedUpdateInput>;
};
export type certificatesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
    where: Prisma.certificatesWhereUniqueInput;
};
export type certificatesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.certificatesWhereInput;
    limit?: number;
};
export type certificates$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type certificates$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type certificatesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.certificatesSelect<ExtArgs> | null;
    omit?: Prisma.certificatesOmit<ExtArgs> | null;
    include?: Prisma.certificatesInclude<ExtArgs> | null;
};
export {};
