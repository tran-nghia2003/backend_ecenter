import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type registrationsModel = runtime.Types.Result.DefaultSelection<Prisma.$registrationsPayload>;
export type AggregateRegistrations = {
    _count: RegistrationsCountAggregateOutputType | null;
    _avg: RegistrationsAvgAggregateOutputType | null;
    _sum: RegistrationsSumAggregateOutputType | null;
    _min: RegistrationsMinAggregateOutputType | null;
    _max: RegistrationsMaxAggregateOutputType | null;
};
export type RegistrationsAvgAggregateOutputType = {
    reg_id: number | null;
    user_id: number | null;
    course_id: number | null;
    payment_id: number | null;
    attempt_no: number | null;
};
export type RegistrationsSumAggregateOutputType = {
    reg_id: number | null;
    user_id: number | null;
    course_id: number | null;
    payment_id: number | null;
    attempt_no: number | null;
};
export type RegistrationsMinAggregateOutputType = {
    reg_id: number | null;
    user_id: number | null;
    course_id: number | null;
    payment_id: number | null;
    attempt_no: number | null;
    registration_status: string | null;
    registered_at: Date | null;
    activated_at: Date | null;
    completed_at: Date | null;
};
export type RegistrationsMaxAggregateOutputType = {
    reg_id: number | null;
    user_id: number | null;
    course_id: number | null;
    payment_id: number | null;
    attempt_no: number | null;
    registration_status: string | null;
    registered_at: Date | null;
    activated_at: Date | null;
    completed_at: Date | null;
};
export type RegistrationsCountAggregateOutputType = {
    reg_id: number;
    user_id: number;
    course_id: number;
    payment_id: number;
    attempt_no: number;
    registration_status: number;
    registered_at: number;
    activated_at: number;
    completed_at: number;
    _all: number;
};
export type RegistrationsAvgAggregateInputType = {
    reg_id?: true;
    user_id?: true;
    course_id?: true;
    payment_id?: true;
    attempt_no?: true;
};
export type RegistrationsSumAggregateInputType = {
    reg_id?: true;
    user_id?: true;
    course_id?: true;
    payment_id?: true;
    attempt_no?: true;
};
export type RegistrationsMinAggregateInputType = {
    reg_id?: true;
    user_id?: true;
    course_id?: true;
    payment_id?: true;
    attempt_no?: true;
    registration_status?: true;
    registered_at?: true;
    activated_at?: true;
    completed_at?: true;
};
export type RegistrationsMaxAggregateInputType = {
    reg_id?: true;
    user_id?: true;
    course_id?: true;
    payment_id?: true;
    attempt_no?: true;
    registration_status?: true;
    registered_at?: true;
    activated_at?: true;
    completed_at?: true;
};
export type RegistrationsCountAggregateInputType = {
    reg_id?: true;
    user_id?: true;
    course_id?: true;
    payment_id?: true;
    attempt_no?: true;
    registration_status?: true;
    registered_at?: true;
    activated_at?: true;
    completed_at?: true;
    _all?: true;
};
export type RegistrationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.registrationsWhereInput;
    orderBy?: Prisma.registrationsOrderByWithRelationInput | Prisma.registrationsOrderByWithRelationInput[];
    cursor?: Prisma.registrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegistrationsCountAggregateInputType;
    _avg?: RegistrationsAvgAggregateInputType;
    _sum?: RegistrationsSumAggregateInputType;
    _min?: RegistrationsMinAggregateInputType;
    _max?: RegistrationsMaxAggregateInputType;
};
export type GetRegistrationsAggregateType<T extends RegistrationsAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistrations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistrations[P]> : Prisma.GetScalarType<T[P], AggregateRegistrations[P]>;
};
export type registrationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.registrationsWhereInput;
    orderBy?: Prisma.registrationsOrderByWithAggregationInput | Prisma.registrationsOrderByWithAggregationInput[];
    by: Prisma.RegistrationsScalarFieldEnum[] | Prisma.RegistrationsScalarFieldEnum;
    having?: Prisma.registrationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistrationsCountAggregateInputType | true;
    _avg?: RegistrationsAvgAggregateInputType;
    _sum?: RegistrationsSumAggregateInputType;
    _min?: RegistrationsMinAggregateInputType;
    _max?: RegistrationsMaxAggregateInputType;
};
export type RegistrationsGroupByOutputType = {
    reg_id: number;
    user_id: number;
    course_id: number;
    payment_id: number | null;
    attempt_no: number;
    registration_status: string | null;
    registered_at: Date | null;
    activated_at: Date | null;
    completed_at: Date | null;
    _count: RegistrationsCountAggregateOutputType | null;
    _avg: RegistrationsAvgAggregateOutputType | null;
    _sum: RegistrationsSumAggregateOutputType | null;
    _min: RegistrationsMinAggregateOutputType | null;
    _max: RegistrationsMaxAggregateOutputType | null;
};
type GetRegistrationsGroupByPayload<T extends registrationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistrationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistrationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistrationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistrationsGroupByOutputType[P]>;
}>>;
export type registrationsWhereInput = {
    AND?: Prisma.registrationsWhereInput | Prisma.registrationsWhereInput[];
    OR?: Prisma.registrationsWhereInput[];
    NOT?: Prisma.registrationsWhereInput | Prisma.registrationsWhereInput[];
    reg_id?: Prisma.IntFilter<"registrations"> | number;
    user_id?: Prisma.IntFilter<"registrations"> | number;
    course_id?: Prisma.IntFilter<"registrations"> | number;
    payment_id?: Prisma.IntNullableFilter<"registrations"> | number | null;
    attempt_no?: Prisma.IntFilter<"registrations"> | number;
    registration_status?: Prisma.StringNullableFilter<"registrations"> | string | null;
    registered_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    activated_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    payments?: Prisma.XOR<Prisma.PaymentsNullableScalarRelationFilter, Prisma.paymentsWhereInput> | null;
    progress?: Prisma.ProgressListRelationFilter;
    lesson_progress_details?: Prisma.Lesson_progress_detailsListRelationFilter;
    class_group_members?: Prisma.Class_group_membersListRelationFilter;
    listening_attempt_sets?: Prisma.Listening_attempt_setsListRelationFilter;
    quiz_attempt_sets?: Prisma.Quiz_attempt_setsListRelationFilter;
    writing_submissions?: Prisma.Writing_submissionsListRelationFilter;
};
export type registrationsOrderByWithRelationInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
    registration_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    registered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    activated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    courses?: Prisma.coursesOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByWithRelationInput;
    progress?: Prisma.progressOrderByRelationAggregateInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsOrderByRelationAggregateInput;
    class_group_members?: Prisma.class_group_membersOrderByRelationAggregateInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsOrderByRelationAggregateInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsOrderByRelationAggregateInput;
    writing_submissions?: Prisma.writing_submissionsOrderByRelationAggregateInput;
};
export type registrationsWhereUniqueInput = Prisma.AtLeast<{
    reg_id?: number;
    user_id_course_id_attempt_no?: Prisma.registrationsUser_idCourse_idAttempt_noCompoundUniqueInput;
    AND?: Prisma.registrationsWhereInput | Prisma.registrationsWhereInput[];
    OR?: Prisma.registrationsWhereInput[];
    NOT?: Prisma.registrationsWhereInput | Prisma.registrationsWhereInput[];
    user_id?: Prisma.IntFilter<"registrations"> | number;
    course_id?: Prisma.IntFilter<"registrations"> | number;
    payment_id?: Prisma.IntNullableFilter<"registrations"> | number | null;
    attempt_no?: Prisma.IntFilter<"registrations"> | number;
    registration_status?: Prisma.StringNullableFilter<"registrations"> | string | null;
    registered_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    activated_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    courses?: Prisma.XOR<Prisma.CoursesNullableScalarRelationFilter, Prisma.coursesWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    payments?: Prisma.XOR<Prisma.PaymentsNullableScalarRelationFilter, Prisma.paymentsWhereInput> | null;
    progress?: Prisma.ProgressListRelationFilter;
    lesson_progress_details?: Prisma.Lesson_progress_detailsListRelationFilter;
    class_group_members?: Prisma.Class_group_membersListRelationFilter;
    listening_attempt_sets?: Prisma.Listening_attempt_setsListRelationFilter;
    quiz_attempt_sets?: Prisma.Quiz_attempt_setsListRelationFilter;
    writing_submissions?: Prisma.Writing_submissionsListRelationFilter;
}, "reg_id" | "user_id_course_id_attempt_no">;
export type registrationsOrderByWithAggregationInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
    registration_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    registered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    activated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.registrationsCountOrderByAggregateInput;
    _avg?: Prisma.registrationsAvgOrderByAggregateInput;
    _max?: Prisma.registrationsMaxOrderByAggregateInput;
    _min?: Prisma.registrationsMinOrderByAggregateInput;
    _sum?: Prisma.registrationsSumOrderByAggregateInput;
};
export type registrationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.registrationsScalarWhereWithAggregatesInput | Prisma.registrationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.registrationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.registrationsScalarWhereWithAggregatesInput | Prisma.registrationsScalarWhereWithAggregatesInput[];
    reg_id?: Prisma.IntWithAggregatesFilter<"registrations"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"registrations"> | number;
    course_id?: Prisma.IntWithAggregatesFilter<"registrations"> | number;
    payment_id?: Prisma.IntNullableWithAggregatesFilter<"registrations"> | number | null;
    attempt_no?: Prisma.IntWithAggregatesFilter<"registrations"> | number;
    registration_status?: Prisma.StringNullableWithAggregatesFilter<"registrations"> | string | null;
    registered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"registrations"> | Date | string | null;
    activated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"registrations"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"registrations"> | Date | string | null;
};
export type registrationsCreateInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUpdateInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateManyInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
};
export type registrationsUpdateManyMutationInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type registrationsUncheckedUpdateManyInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationsListRelationFilter = {
    every?: Prisma.registrationsWhereInput;
    some?: Prisma.registrationsWhereInput;
    none?: Prisma.registrationsWhereInput;
};
export type registrationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistrationsNullableScalarRelationFilter = {
    is?: Prisma.registrationsWhereInput | null;
    isNot?: Prisma.registrationsWhereInput | null;
};
export type RegistrationsScalarRelationFilter = {
    is?: Prisma.registrationsWhereInput;
    isNot?: Prisma.registrationsWhereInput;
};
export type registrationsUser_idCourse_idAttempt_noCompoundUniqueInput = {
    user_id: number;
    course_id: number;
    attempt_no: number;
};
export type registrationsCountOrderByAggregateInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
    registration_status?: Prisma.SortOrder;
    registered_at?: Prisma.SortOrder;
    activated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type registrationsAvgOrderByAggregateInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
};
export type registrationsMaxOrderByAggregateInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
    registration_status?: Prisma.SortOrder;
    registered_at?: Prisma.SortOrder;
    activated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type registrationsMinOrderByAggregateInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
    registration_status?: Prisma.SortOrder;
    registered_at?: Prisma.SortOrder;
    activated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
};
export type registrationsSumOrderByAggregateInput = {
    reg_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    course_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    attempt_no?: Prisma.SortOrder;
};
export type registrationsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput> | Prisma.registrationsCreateWithoutUsersInput[] | Prisma.registrationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutUsersInput | Prisma.registrationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.registrationsCreateManyUsersInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput> | Prisma.registrationsCreateWithoutUsersInput[] | Prisma.registrationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutUsersInput | Prisma.registrationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.registrationsCreateManyUsersInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput> | Prisma.registrationsCreateWithoutUsersInput[] | Prisma.registrationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutUsersInput | Prisma.registrationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.registrationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.registrationsCreateManyUsersInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.registrationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutUsersInput | Prisma.registrationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput> | Prisma.registrationsCreateWithoutUsersInput[] | Prisma.registrationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutUsersInput | Prisma.registrationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.registrationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.registrationsCreateManyUsersInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.registrationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutUsersInput | Prisma.registrationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput> | Prisma.registrationsCreateWithoutCoursesInput[] | Prisma.registrationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutCoursesInput | Prisma.registrationsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.registrationsCreateManyCoursesInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput> | Prisma.registrationsCreateWithoutCoursesInput[] | Prisma.registrationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutCoursesInput | Prisma.registrationsCreateOrConnectWithoutCoursesInput[];
    createMany?: Prisma.registrationsCreateManyCoursesInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput> | Prisma.registrationsCreateWithoutCoursesInput[] | Prisma.registrationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutCoursesInput | Prisma.registrationsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.registrationsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.registrationsCreateManyCoursesInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.registrationsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutCoursesInput | Prisma.registrationsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput> | Prisma.registrationsCreateWithoutCoursesInput[] | Prisma.registrationsUncheckedCreateWithoutCoursesInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutCoursesInput | Prisma.registrationsCreateOrConnectWithoutCoursesInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutCoursesInput | Prisma.registrationsUpsertWithWhereUniqueWithoutCoursesInput[];
    createMany?: Prisma.registrationsCreateManyCoursesInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutCoursesInput | Prisma.registrationsUpdateWithWhereUniqueWithoutCoursesInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutCoursesInput | Prisma.registrationsUpdateManyWithWhereWithoutCoursesInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsCreateNestedOneWithoutWriting_submissionsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedCreateWithoutWriting_submissionsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutWriting_submissionsInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneWithoutWriting_submissionsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedCreateWithoutWriting_submissionsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutWriting_submissionsInput;
    upsert?: Prisma.registrationsUpsertWithoutWriting_submissionsInput;
    disconnect?: Prisma.registrationsWhereInput | boolean;
    delete?: Prisma.registrationsWhereInput | boolean;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutWriting_submissionsInput, Prisma.registrationsUpdateWithoutWriting_submissionsInput>, Prisma.registrationsUncheckedUpdateWithoutWriting_submissionsInput>;
};
export type registrationsCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput> | Prisma.registrationsCreateWithoutPaymentsInput[] | Prisma.registrationsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutPaymentsInput | Prisma.registrationsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.registrationsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUncheckedCreateNestedManyWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput> | Prisma.registrationsCreateWithoutPaymentsInput[] | Prisma.registrationsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutPaymentsInput | Prisma.registrationsCreateOrConnectWithoutPaymentsInput[];
    createMany?: Prisma.registrationsCreateManyPaymentsInputEnvelope;
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
};
export type registrationsUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput> | Prisma.registrationsCreateWithoutPaymentsInput[] | Prisma.registrationsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutPaymentsInput | Prisma.registrationsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.registrationsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.registrationsCreateManyPaymentsInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.registrationsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutPaymentsInput | Prisma.registrationsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsUncheckedUpdateManyWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput> | Prisma.registrationsCreateWithoutPaymentsInput[] | Prisma.registrationsUncheckedCreateWithoutPaymentsInput[];
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutPaymentsInput | Prisma.registrationsCreateOrConnectWithoutPaymentsInput[];
    upsert?: Prisma.registrationsUpsertWithWhereUniqueWithoutPaymentsInput | Prisma.registrationsUpsertWithWhereUniqueWithoutPaymentsInput[];
    createMany?: Prisma.registrationsCreateManyPaymentsInputEnvelope;
    set?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    disconnect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    delete?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    connect?: Prisma.registrationsWhereUniqueInput | Prisma.registrationsWhereUniqueInput[];
    update?: Prisma.registrationsUpdateWithWhereUniqueWithoutPaymentsInput | Prisma.registrationsUpdateWithWhereUniqueWithoutPaymentsInput[];
    updateMany?: Prisma.registrationsUpdateManyWithWhereWithoutPaymentsInput | Prisma.registrationsUpdateManyWithWhereWithoutPaymentsInput[];
    deleteMany?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
};
export type registrationsCreateNestedOneWithoutProgressInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutProgressInput, Prisma.registrationsUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutProgressInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneWithoutProgressNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutProgressInput, Prisma.registrationsUncheckedCreateWithoutProgressInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutProgressInput;
    upsert?: Prisma.registrationsUpsertWithoutProgressInput;
    disconnect?: Prisma.registrationsWhereInput | boolean;
    delete?: Prisma.registrationsWhereInput | boolean;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutProgressInput, Prisma.registrationsUpdateWithoutProgressInput>, Prisma.registrationsUncheckedUpdateWithoutProgressInput>;
};
export type registrationsCreateNestedOneWithoutLesson_progress_detailsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedCreateWithoutLesson_progress_detailsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutLesson_progress_detailsInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneRequiredWithoutLesson_progress_detailsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedCreateWithoutLesson_progress_detailsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutLesson_progress_detailsInput;
    upsert?: Prisma.registrationsUpsertWithoutLesson_progress_detailsInput;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutLesson_progress_detailsInput, Prisma.registrationsUpdateWithoutLesson_progress_detailsInput>, Prisma.registrationsUncheckedUpdateWithoutLesson_progress_detailsInput>;
};
export type registrationsCreateNestedOneWithoutListening_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutListening_attempt_setsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutListening_attempt_setsInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneWithoutListening_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutListening_attempt_setsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutListening_attempt_setsInput;
    upsert?: Prisma.registrationsUpsertWithoutListening_attempt_setsInput;
    disconnect?: Prisma.registrationsWhereInput | boolean;
    delete?: Prisma.registrationsWhereInput | boolean;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutListening_attempt_setsInput, Prisma.registrationsUpdateWithoutListening_attempt_setsInput>, Prisma.registrationsUncheckedUpdateWithoutListening_attempt_setsInput>;
};
export type registrationsCreateNestedOneWithoutQuiz_attempt_setsInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutQuiz_attempt_setsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutQuiz_attempt_setsInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneWithoutQuiz_attempt_setsNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutQuiz_attempt_setsInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutQuiz_attempt_setsInput;
    upsert?: Prisma.registrationsUpsertWithoutQuiz_attempt_setsInput;
    disconnect?: Prisma.registrationsWhereInput | boolean;
    delete?: Prisma.registrationsWhereInput | boolean;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutQuiz_attempt_setsInput, Prisma.registrationsUpdateWithoutQuiz_attempt_setsInput>, Prisma.registrationsUncheckedUpdateWithoutQuiz_attempt_setsInput>;
};
export type registrationsCreateNestedOneWithoutClass_group_membersInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutClass_group_membersInput, Prisma.registrationsUncheckedCreateWithoutClass_group_membersInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutClass_group_membersInput;
    connect?: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateOneWithoutClass_group_membersNestedInput = {
    create?: Prisma.XOR<Prisma.registrationsCreateWithoutClass_group_membersInput, Prisma.registrationsUncheckedCreateWithoutClass_group_membersInput>;
    connectOrCreate?: Prisma.registrationsCreateOrConnectWithoutClass_group_membersInput;
    upsert?: Prisma.registrationsUpsertWithoutClass_group_membersInput;
    disconnect?: Prisma.registrationsWhereInput | boolean;
    delete?: Prisma.registrationsWhereInput | boolean;
    connect?: Prisma.registrationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.registrationsUpdateToOneWithWhereWithoutClass_group_membersInput, Prisma.registrationsUpdateWithoutClass_group_membersInput>, Prisma.registrationsUncheckedUpdateWithoutClass_group_membersInput>;
};
export type registrationsCreateWithoutUsersInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutUsersInput = {
    reg_id?: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutUsersInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput>;
};
export type registrationsCreateManyUsersInputEnvelope = {
    data: Prisma.registrationsCreateManyUsersInput | Prisma.registrationsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type registrationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.registrationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutUsersInput, Prisma.registrationsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutUsersInput, Prisma.registrationsUncheckedCreateWithoutUsersInput>;
};
export type registrationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.registrationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutUsersInput, Prisma.registrationsUncheckedUpdateWithoutUsersInput>;
};
export type registrationsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.registrationsScalarWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateManyMutationInput, Prisma.registrationsUncheckedUpdateManyWithoutUsersInput>;
};
export type registrationsScalarWhereInput = {
    AND?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
    OR?: Prisma.registrationsScalarWhereInput[];
    NOT?: Prisma.registrationsScalarWhereInput | Prisma.registrationsScalarWhereInput[];
    reg_id?: Prisma.IntFilter<"registrations"> | number;
    user_id?: Prisma.IntFilter<"registrations"> | number;
    course_id?: Prisma.IntFilter<"registrations"> | number;
    payment_id?: Prisma.IntNullableFilter<"registrations"> | number | null;
    attempt_no?: Prisma.IntFilter<"registrations"> | number;
    registration_status?: Prisma.StringNullableFilter<"registrations"> | string | null;
    registered_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    activated_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableFilter<"registrations"> | Date | string | null;
};
export type registrationsCreateWithoutCoursesInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutCoursesInput = {
    reg_id?: number;
    user_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutCoursesInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput>;
};
export type registrationsCreateManyCoursesInputEnvelope = {
    data: Prisma.registrationsCreateManyCoursesInput | Prisma.registrationsCreateManyCoursesInput[];
    skipDuplicates?: boolean;
};
export type registrationsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.registrationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutCoursesInput, Prisma.registrationsUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutCoursesInput, Prisma.registrationsUncheckedCreateWithoutCoursesInput>;
};
export type registrationsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: Prisma.registrationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutCoursesInput, Prisma.registrationsUncheckedUpdateWithoutCoursesInput>;
};
export type registrationsUpdateManyWithWhereWithoutCoursesInput = {
    where: Prisma.registrationsScalarWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateManyMutationInput, Prisma.registrationsUncheckedUpdateManyWithoutCoursesInput>;
};
export type registrationsCreateWithoutWriting_submissionsInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutWriting_submissionsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutWriting_submissionsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedCreateWithoutWriting_submissionsInput>;
};
export type registrationsUpsertWithoutWriting_submissionsInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedUpdateWithoutWriting_submissionsInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedCreateWithoutWriting_submissionsInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutWriting_submissionsInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutWriting_submissionsInput, Prisma.registrationsUncheckedUpdateWithoutWriting_submissionsInput>;
};
export type registrationsUpdateWithoutWriting_submissionsInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutWriting_submissionsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateWithoutPaymentsInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutPaymentsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput>;
};
export type registrationsCreateManyPaymentsInputEnvelope = {
    data: Prisma.registrationsCreateManyPaymentsInput | Prisma.registrationsCreateManyPaymentsInput[];
    skipDuplicates?: boolean;
};
export type registrationsUpsertWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutPaymentsInput, Prisma.registrationsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutPaymentsInput, Prisma.registrationsUncheckedCreateWithoutPaymentsInput>;
};
export type registrationsUpdateWithWhereUniqueWithoutPaymentsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutPaymentsInput, Prisma.registrationsUncheckedUpdateWithoutPaymentsInput>;
};
export type registrationsUpdateManyWithWhereWithoutPaymentsInput = {
    where: Prisma.registrationsScalarWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateManyMutationInput, Prisma.registrationsUncheckedUpdateManyWithoutPaymentsInput>;
};
export type registrationsCreateWithoutProgressInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutProgressInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutProgressInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutProgressInput, Prisma.registrationsUncheckedCreateWithoutProgressInput>;
};
export type registrationsUpsertWithoutProgressInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutProgressInput, Prisma.registrationsUncheckedUpdateWithoutProgressInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutProgressInput, Prisma.registrationsUncheckedCreateWithoutProgressInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutProgressInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutProgressInput, Prisma.registrationsUncheckedUpdateWithoutProgressInput>;
};
export type registrationsUpdateWithoutProgressInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutProgressInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateWithoutLesson_progress_detailsInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutLesson_progress_detailsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutLesson_progress_detailsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedCreateWithoutLesson_progress_detailsInput>;
};
export type registrationsUpsertWithoutLesson_progress_detailsInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedUpdateWithoutLesson_progress_detailsInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedCreateWithoutLesson_progress_detailsInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutLesson_progress_detailsInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutLesson_progress_detailsInput, Prisma.registrationsUncheckedUpdateWithoutLesson_progress_detailsInput>;
};
export type registrationsUpdateWithoutLesson_progress_detailsInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutLesson_progress_detailsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateWithoutListening_attempt_setsInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutListening_attempt_setsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutListening_attempt_setsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutListening_attempt_setsInput>;
};
export type registrationsUpsertWithoutListening_attempt_setsInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedUpdateWithoutListening_attempt_setsInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutListening_attempt_setsInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutListening_attempt_setsInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutListening_attempt_setsInput, Prisma.registrationsUncheckedUpdateWithoutListening_attempt_setsInput>;
};
export type registrationsUpdateWithoutListening_attempt_setsInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutListening_attempt_setsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateWithoutQuiz_attempt_setsInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutQuiz_attempt_setsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    class_group_members?: Prisma.class_group_membersUncheckedCreateNestedManyWithoutRegistrationInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutQuiz_attempt_setsInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutQuiz_attempt_setsInput>;
};
export type registrationsUpsertWithoutQuiz_attempt_setsInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedUpdateWithoutQuiz_attempt_setsInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedCreateWithoutQuiz_attempt_setsInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutQuiz_attempt_setsInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutQuiz_attempt_setsInput, Prisma.registrationsUncheckedUpdateWithoutQuiz_attempt_setsInput>;
};
export type registrationsUpdateWithoutQuiz_attempt_setsInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutQuiz_attempt_setsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateWithoutClass_group_membersInput = {
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    courses?: Prisma.coursesCreateNestedOneWithoutRegistrationsInput;
    users?: Prisma.usersCreateNestedOneWithoutRegistrationsInput;
    payments?: Prisma.paymentsCreateNestedOneWithoutRegistrationsInput;
    progress?: Prisma.progressCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsCreateNestedManyWithoutRegistrationsInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsUncheckedCreateWithoutClass_group_membersInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
    progress?: Prisma.progressUncheckedCreateNestedManyWithoutRegistrationsInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedCreateNestedManyWithoutRegistrationsInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedCreateNestedManyWithoutRegistrationsInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedCreateNestedManyWithoutRegistrationsInput;
};
export type registrationsCreateOrConnectWithoutClass_group_membersInput = {
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutClass_group_membersInput, Prisma.registrationsUncheckedCreateWithoutClass_group_membersInput>;
};
export type registrationsUpsertWithoutClass_group_membersInput = {
    update: Prisma.XOR<Prisma.registrationsUpdateWithoutClass_group_membersInput, Prisma.registrationsUncheckedUpdateWithoutClass_group_membersInput>;
    create: Prisma.XOR<Prisma.registrationsCreateWithoutClass_group_membersInput, Prisma.registrationsUncheckedCreateWithoutClass_group_membersInput>;
    where?: Prisma.registrationsWhereInput;
};
export type registrationsUpdateToOneWithWhereWithoutClass_group_membersInput = {
    where?: Prisma.registrationsWhereInput;
    data: Prisma.XOR<Prisma.registrationsUpdateWithoutClass_group_membersInput, Prisma.registrationsUncheckedUpdateWithoutClass_group_membersInput>;
};
export type registrationsUpdateWithoutClass_group_membersInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutClass_group_membersInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsCreateManyUsersInput = {
    reg_id?: number;
    course_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
};
export type registrationsUpdateWithoutUsersInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutUsersInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateManyWithoutUsersInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type registrationsCreateManyCoursesInput = {
    reg_id?: number;
    user_id: number;
    payment_id?: number | null;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
};
export type registrationsUpdateWithoutCoursesInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    payments?: Prisma.paymentsUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutCoursesInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateManyWithoutCoursesInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    payment_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type registrationsCreateManyPaymentsInput = {
    reg_id?: number;
    user_id: number;
    course_id: number;
    attempt_no?: number;
    registration_status?: string | null;
    registered_at?: Date | string | null;
    activated_at?: Date | string | null;
    completed_at?: Date | string | null;
};
export type registrationsUpdateWithoutPaymentsInput = {
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    courses?: Prisma.coursesUpdateOneWithoutRegistrationsNestedInput;
    users?: Prisma.usersUpdateOneWithoutRegistrationsNestedInput;
    progress?: Prisma.progressUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateWithoutPaymentsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    progress?: Prisma.progressUncheckedUpdateManyWithoutRegistrationsNestedInput;
    lesson_progress_details?: Prisma.lesson_progress_detailsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    class_group_members?: Prisma.class_group_membersUncheckedUpdateManyWithoutRegistrationNestedInput;
    listening_attempt_sets?: Prisma.listening_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    quiz_attempt_sets?: Prisma.quiz_attempt_setsUncheckedUpdateManyWithoutRegistrationsNestedInput;
    writing_submissions?: Prisma.writing_submissionsUncheckedUpdateManyWithoutRegistrationsNestedInput;
};
export type registrationsUncheckedUpdateManyWithoutPaymentsInput = {
    reg_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    course_id?: Prisma.IntFieldUpdateOperationsInput | number;
    attempt_no?: Prisma.IntFieldUpdateOperationsInput | number;
    registration_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    registered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RegistrationsCountOutputType = {
    progress: number;
    lesson_progress_details: number;
    class_group_members: number;
    listening_attempt_sets: number;
    quiz_attempt_sets: number;
    writing_submissions: number;
};
export type RegistrationsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progress?: boolean | RegistrationsCountOutputTypeCountProgressArgs;
    lesson_progress_details?: boolean | RegistrationsCountOutputTypeCountLesson_progress_detailsArgs;
    class_group_members?: boolean | RegistrationsCountOutputTypeCountClass_group_membersArgs;
    listening_attempt_sets?: boolean | RegistrationsCountOutputTypeCountListening_attempt_setsArgs;
    quiz_attempt_sets?: boolean | RegistrationsCountOutputTypeCountQuiz_attempt_setsArgs;
    writing_submissions?: boolean | RegistrationsCountOutputTypeCountWriting_submissionsArgs;
};
export type RegistrationsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationsCountOutputTypeSelect<ExtArgs> | null;
};
export type RegistrationsCountOutputTypeCountProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progressWhereInput;
};
export type RegistrationsCountOutputTypeCountLesson_progress_detailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lesson_progress_detailsWhereInput;
};
export type RegistrationsCountOutputTypeCountClass_group_membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.class_group_membersWhereInput;
};
export type RegistrationsCountOutputTypeCountListening_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listening_attempt_setsWhereInput;
};
export type RegistrationsCountOutputTypeCountQuiz_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_attempt_setsWhereInput;
};
export type RegistrationsCountOutputTypeCountWriting_submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.writing_submissionsWhereInput;
};
export type registrationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reg_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    payment_id?: boolean;
    attempt_no?: boolean;
    registration_status?: boolean;
    registered_at?: boolean;
    activated_at?: boolean;
    completed_at?: boolean;
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
    progress?: boolean | Prisma.registrations$progressArgs<ExtArgs>;
    lesson_progress_details?: boolean | Prisma.registrations$lesson_progress_detailsArgs<ExtArgs>;
    class_group_members?: boolean | Prisma.registrations$class_group_membersArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.registrations$listening_attempt_setsArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.registrations$quiz_attempt_setsArgs<ExtArgs>;
    writing_submissions?: boolean | Prisma.registrations$writing_submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegistrationsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registrations"]>;
export type registrationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reg_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    payment_id?: boolean;
    attempt_no?: boolean;
    registration_status?: boolean;
    registered_at?: boolean;
    activated_at?: boolean;
    completed_at?: boolean;
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
}, ExtArgs["result"]["registrations"]>;
export type registrationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    reg_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    payment_id?: boolean;
    attempt_no?: boolean;
    registration_status?: boolean;
    registered_at?: boolean;
    activated_at?: boolean;
    completed_at?: boolean;
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
}, ExtArgs["result"]["registrations"]>;
export type registrationsSelectScalar = {
    reg_id?: boolean;
    user_id?: boolean;
    course_id?: boolean;
    payment_id?: boolean;
    attempt_no?: boolean;
    registration_status?: boolean;
    registered_at?: boolean;
    activated_at?: boolean;
    completed_at?: boolean;
};
export type registrationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"reg_id" | "user_id" | "course_id" | "payment_id" | "attempt_no" | "registration_status" | "registered_at" | "activated_at" | "completed_at", ExtArgs["result"]["registrations"]>;
export type registrationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
    progress?: boolean | Prisma.registrations$progressArgs<ExtArgs>;
    lesson_progress_details?: boolean | Prisma.registrations$lesson_progress_detailsArgs<ExtArgs>;
    class_group_members?: boolean | Prisma.registrations$class_group_membersArgs<ExtArgs>;
    listening_attempt_sets?: boolean | Prisma.registrations$listening_attempt_setsArgs<ExtArgs>;
    quiz_attempt_sets?: boolean | Prisma.registrations$quiz_attempt_setsArgs<ExtArgs>;
    writing_submissions?: boolean | Prisma.registrations$writing_submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RegistrationsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type registrationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
};
export type registrationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.registrations$coursesArgs<ExtArgs>;
    users?: boolean | Prisma.registrations$usersArgs<ExtArgs>;
    payments?: boolean | Prisma.registrations$paymentsArgs<ExtArgs>;
};
export type $registrationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "registrations";
    objects: {
        courses: Prisma.$coursesPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs> | null;
        payments: Prisma.$paymentsPayload<ExtArgs> | null;
        progress: Prisma.$progressPayload<ExtArgs>[];
        lesson_progress_details: Prisma.$lesson_progress_detailsPayload<ExtArgs>[];
        class_group_members: Prisma.$class_group_membersPayload<ExtArgs>[];
        listening_attempt_sets: Prisma.$listening_attempt_setsPayload<ExtArgs>[];
        quiz_attempt_sets: Prisma.$quiz_attempt_setsPayload<ExtArgs>[];
        writing_submissions: Prisma.$writing_submissionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        reg_id: number;
        user_id: number;
        course_id: number;
        payment_id: number | null;
        attempt_no: number;
        registration_status: string | null;
        registered_at: Date | null;
        activated_at: Date | null;
        completed_at: Date | null;
    }, ExtArgs["result"]["registrations"]>;
    composites: {};
};
export type registrationsGetPayload<S extends boolean | null | undefined | registrationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$registrationsPayload, S>;
export type registrationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<registrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistrationsCountAggregateInputType | true;
};
export interface registrationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['registrations'];
        meta: {
            name: 'registrations';
        };
    };
    findUnique<T extends registrationsFindUniqueArgs>(args: Prisma.SelectSubset<T, registrationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends registrationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, registrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends registrationsFindFirstArgs>(args?: Prisma.SelectSubset<T, registrationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends registrationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, registrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends registrationsFindManyArgs>(args?: Prisma.SelectSubset<T, registrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends registrationsCreateArgs>(args: Prisma.SelectSubset<T, registrationsCreateArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends registrationsCreateManyArgs>(args?: Prisma.SelectSubset<T, registrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends registrationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, registrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends registrationsDeleteArgs>(args: Prisma.SelectSubset<T, registrationsDeleteArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends registrationsUpdateArgs>(args: Prisma.SelectSubset<T, registrationsUpdateArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends registrationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, registrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends registrationsUpdateManyArgs>(args: Prisma.SelectSubset<T, registrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends registrationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, registrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends registrationsUpsertArgs>(args: Prisma.SelectSubset<T, registrationsUpsertArgs<ExtArgs>>): Prisma.Prisma__registrationsClient<runtime.Types.Result.GetResult<Prisma.$registrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends registrationsCountArgs>(args?: Prisma.Subset<T, registrationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistrationsCountAggregateOutputType> : number>;
    aggregate<T extends RegistrationsAggregateArgs>(args: Prisma.Subset<T, RegistrationsAggregateArgs>): Prisma.PrismaPromise<GetRegistrationsAggregateType<T>>;
    groupBy<T extends registrationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: registrationsGroupByArgs['orderBy'];
    } : {
        orderBy?: registrationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: registrationsFieldRefs;
}
export interface Prisma__registrationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.registrations$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$coursesArgs<ExtArgs>>): Prisma.Prisma__coursesClient<runtime.Types.Result.GetResult<Prisma.$coursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.registrations$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.registrations$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$paymentsArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    progress<T extends Prisma.registrations$progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lesson_progress_details<T extends Prisma.registrations$lesson_progress_detailsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$lesson_progress_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lesson_progress_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    class_group_members<T extends Prisma.registrations$class_group_membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$class_group_membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$class_group_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listening_attempt_sets<T extends Prisma.registrations$listening_attempt_setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$listening_attempt_setsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listening_attempt_setsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    quiz_attempt_sets<T extends Prisma.registrations$quiz_attempt_setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$quiz_attempt_setsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_attempt_setsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    writing_submissions<T extends Prisma.registrations$writing_submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.registrations$writing_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$writing_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface registrationsFieldRefs {
    readonly reg_id: Prisma.FieldRef<"registrations", 'Int'>;
    readonly user_id: Prisma.FieldRef<"registrations", 'Int'>;
    readonly course_id: Prisma.FieldRef<"registrations", 'Int'>;
    readonly payment_id: Prisma.FieldRef<"registrations", 'Int'>;
    readonly attempt_no: Prisma.FieldRef<"registrations", 'Int'>;
    readonly registration_status: Prisma.FieldRef<"registrations", 'String'>;
    readonly registered_at: Prisma.FieldRef<"registrations", 'DateTime'>;
    readonly activated_at: Prisma.FieldRef<"registrations", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"registrations", 'DateTime'>;
}
export type registrationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where: Prisma.registrationsWhereUniqueInput;
};
export type registrationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where: Prisma.registrationsWhereUniqueInput;
};
export type registrationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where?: Prisma.registrationsWhereInput;
    orderBy?: Prisma.registrationsOrderByWithRelationInput | Prisma.registrationsOrderByWithRelationInput[];
    cursor?: Prisma.registrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationsScalarFieldEnum | Prisma.RegistrationsScalarFieldEnum[];
};
export type registrationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where?: Prisma.registrationsWhereInput;
    orderBy?: Prisma.registrationsOrderByWithRelationInput | Prisma.registrationsOrderByWithRelationInput[];
    cursor?: Prisma.registrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationsScalarFieldEnum | Prisma.RegistrationsScalarFieldEnum[];
};
export type registrationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where?: Prisma.registrationsWhereInput;
    orderBy?: Prisma.registrationsOrderByWithRelationInput | Prisma.registrationsOrderByWithRelationInput[];
    cursor?: Prisma.registrationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationsScalarFieldEnum | Prisma.RegistrationsScalarFieldEnum[];
};
export type registrationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.registrationsCreateInput, Prisma.registrationsUncheckedCreateInput>;
};
export type registrationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.registrationsCreateManyInput | Prisma.registrationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type registrationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    data: Prisma.registrationsCreateManyInput | Prisma.registrationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.registrationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type registrationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.registrationsUpdateInput, Prisma.registrationsUncheckedUpdateInput>;
    where: Prisma.registrationsWhereUniqueInput;
};
export type registrationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.registrationsUpdateManyMutationInput, Prisma.registrationsUncheckedUpdateManyInput>;
    where?: Prisma.registrationsWhereInput;
    limit?: number;
};
export type registrationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.registrationsUpdateManyMutationInput, Prisma.registrationsUncheckedUpdateManyInput>;
    where?: Prisma.registrationsWhereInput;
    limit?: number;
    include?: Prisma.registrationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type registrationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where: Prisma.registrationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.registrationsCreateInput, Prisma.registrationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.registrationsUpdateInput, Prisma.registrationsUncheckedUpdateInput>;
};
export type registrationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
    where: Prisma.registrationsWhereUniqueInput;
};
export type registrationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.registrationsWhereInput;
    limit?: number;
};
export type registrations$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.coursesSelect<ExtArgs> | null;
    omit?: Prisma.coursesOmit<ExtArgs> | null;
    include?: Prisma.coursesInclude<ExtArgs> | null;
    where?: Prisma.coursesWhereInput;
};
export type registrations$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type registrations$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
};
export type registrations$progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progressSelect<ExtArgs> | null;
    omit?: Prisma.progressOmit<ExtArgs> | null;
    include?: Prisma.progressInclude<ExtArgs> | null;
    where?: Prisma.progressWhereInput;
    orderBy?: Prisma.progressOrderByWithRelationInput | Prisma.progressOrderByWithRelationInput[];
    cursor?: Prisma.progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressScalarFieldEnum | Prisma.ProgressScalarFieldEnum[];
};
export type registrations$lesson_progress_detailsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lesson_progress_detailsSelect<ExtArgs> | null;
    omit?: Prisma.lesson_progress_detailsOmit<ExtArgs> | null;
    include?: Prisma.lesson_progress_detailsInclude<ExtArgs> | null;
    where?: Prisma.lesson_progress_detailsWhereInput;
    orderBy?: Prisma.lesson_progress_detailsOrderByWithRelationInput | Prisma.lesson_progress_detailsOrderByWithRelationInput[];
    cursor?: Prisma.lesson_progress_detailsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lesson_progress_detailsScalarFieldEnum | Prisma.Lesson_progress_detailsScalarFieldEnum[];
};
export type registrations$class_group_membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.class_group_membersSelect<ExtArgs> | null;
    omit?: Prisma.class_group_membersOmit<ExtArgs> | null;
    include?: Prisma.class_group_membersInclude<ExtArgs> | null;
    where?: Prisma.class_group_membersWhereInput;
    orderBy?: Prisma.class_group_membersOrderByWithRelationInput | Prisma.class_group_membersOrderByWithRelationInput[];
    cursor?: Prisma.class_group_membersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Class_group_membersScalarFieldEnum | Prisma.Class_group_membersScalarFieldEnum[];
};
export type registrations$listening_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.listening_attempt_setsSelect<ExtArgs> | null;
    omit?: Prisma.listening_attempt_setsOmit<ExtArgs> | null;
    include?: Prisma.listening_attempt_setsInclude<ExtArgs> | null;
    where?: Prisma.listening_attempt_setsWhereInput;
    orderBy?: Prisma.listening_attempt_setsOrderByWithRelationInput | Prisma.listening_attempt_setsOrderByWithRelationInput[];
    cursor?: Prisma.listening_attempt_setsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listening_attempt_setsScalarFieldEnum | Prisma.Listening_attempt_setsScalarFieldEnum[];
};
export type registrations$quiz_attempt_setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_attempt_setsSelect<ExtArgs> | null;
    omit?: Prisma.quiz_attempt_setsOmit<ExtArgs> | null;
    include?: Prisma.quiz_attempt_setsInclude<ExtArgs> | null;
    where?: Prisma.quiz_attempt_setsWhereInput;
    orderBy?: Prisma.quiz_attempt_setsOrderByWithRelationInput | Prisma.quiz_attempt_setsOrderByWithRelationInput[];
    cursor?: Prisma.quiz_attempt_setsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_attempt_setsScalarFieldEnum | Prisma.Quiz_attempt_setsScalarFieldEnum[];
};
export type registrations$writing_submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.writing_submissionsSelect<ExtArgs> | null;
    omit?: Prisma.writing_submissionsOmit<ExtArgs> | null;
    include?: Prisma.writing_submissionsInclude<ExtArgs> | null;
    where?: Prisma.writing_submissionsWhereInput;
    orderBy?: Prisma.writing_submissionsOrderByWithRelationInput | Prisma.writing_submissionsOrderByWithRelationInput[];
    cursor?: Prisma.writing_submissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Writing_submissionsScalarFieldEnum | Prisma.Writing_submissionsScalarFieldEnum[];
};
export type registrationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.registrationsSelect<ExtArgs> | null;
    omit?: Prisma.registrationsOmit<ExtArgs> | null;
    include?: Prisma.registrationsInclude<ExtArgs> | null;
};
export {};
