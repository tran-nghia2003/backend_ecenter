import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type filesModel = runtime.Types.Result.DefaultSelection<Prisma.$filesPayload>;
export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null;
    _avg: FilesAvgAggregateOutputType | null;
    _sum: FilesSumAggregateOutputType | null;
    _min: FilesMinAggregateOutputType | null;
    _max: FilesMaxAggregateOutputType | null;
};
export type FilesAvgAggregateOutputType = {
    file_id: number | null;
    file_size: number | null;
    uploaded_by: number | null;
};
export type FilesSumAggregateOutputType = {
    file_id: number | null;
    file_size: number | null;
    uploaded_by: number | null;
};
export type FilesMinAggregateOutputType = {
    file_id: number | null;
    filename: string | null;
    original_name: string | null;
    file_path: string | null;
    file_size: number | null;
    mime_type: string | null;
    uploaded_by: number | null;
    created_at: Date | null;
};
export type FilesMaxAggregateOutputType = {
    file_id: number | null;
    filename: string | null;
    original_name: string | null;
    file_path: string | null;
    file_size: number | null;
    mime_type: string | null;
    uploaded_by: number | null;
    created_at: Date | null;
};
export type FilesCountAggregateOutputType = {
    file_id: number;
    filename: number;
    original_name: number;
    file_path: number;
    file_size: number;
    mime_type: number;
    uploaded_by: number;
    created_at: number;
    _all: number;
};
export type FilesAvgAggregateInputType = {
    file_id?: true;
    file_size?: true;
    uploaded_by?: true;
};
export type FilesSumAggregateInputType = {
    file_id?: true;
    file_size?: true;
    uploaded_by?: true;
};
export type FilesMinAggregateInputType = {
    file_id?: true;
    filename?: true;
    original_name?: true;
    file_path?: true;
    file_size?: true;
    mime_type?: true;
    uploaded_by?: true;
    created_at?: true;
};
export type FilesMaxAggregateInputType = {
    file_id?: true;
    filename?: true;
    original_name?: true;
    file_path?: true;
    file_size?: true;
    mime_type?: true;
    uploaded_by?: true;
    created_at?: true;
};
export type FilesCountAggregateInputType = {
    file_id?: true;
    filename?: true;
    original_name?: true;
    file_path?: true;
    file_size?: true;
    mime_type?: true;
    uploaded_by?: true;
    created_at?: true;
    _all?: true;
};
export type FilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FilesCountAggregateInputType;
    _avg?: FilesAvgAggregateInputType;
    _sum?: FilesSumAggregateInputType;
    _min?: FilesMinAggregateInputType;
    _max?: FilesMaxAggregateInputType;
};
export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
    [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFiles[P]> : Prisma.GetScalarType<T[P], AggregateFiles[P]>;
};
export type filesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithAggregationInput | Prisma.filesOrderByWithAggregationInput[];
    by: Prisma.FilesScalarFieldEnum[] | Prisma.FilesScalarFieldEnum;
    having?: Prisma.filesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilesCountAggregateInputType | true;
    _avg?: FilesAvgAggregateInputType;
    _sum?: FilesSumAggregateInputType;
    _min?: FilesMinAggregateInputType;
    _max?: FilesMaxAggregateInputType;
};
export type FilesGroupByOutputType = {
    file_id: number;
    filename: string;
    original_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    uploaded_by: number | null;
    created_at: Date | null;
    _count: FilesCountAggregateOutputType | null;
    _avg: FilesAvgAggregateOutputType | null;
    _sum: FilesSumAggregateOutputType | null;
    _min: FilesMinAggregateOutputType | null;
    _max: FilesMaxAggregateOutputType | null;
};
type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilesGroupByOutputType[P]>;
}>>;
export type filesWhereInput = {
    AND?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    OR?: Prisma.filesWhereInput[];
    NOT?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    file_id?: Prisma.IntFilter<"files"> | number;
    filename?: Prisma.StringFilter<"files"> | string;
    original_name?: Prisma.StringFilter<"files"> | string;
    file_path?: Prisma.StringFilter<"files"> | string;
    file_size?: Prisma.IntFilter<"files"> | number;
    mime_type?: Prisma.StringFilter<"files"> | string;
    uploaded_by?: Prisma.IntNullableFilter<"files"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"files"> | Date | string | null;
};
export type filesOrderByWithRelationInput = {
    file_id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    original_name?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type filesWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number;
    AND?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    OR?: Prisma.filesWhereInput[];
    NOT?: Prisma.filesWhereInput | Prisma.filesWhereInput[];
    filename?: Prisma.StringFilter<"files"> | string;
    original_name?: Prisma.StringFilter<"files"> | string;
    file_path?: Prisma.StringFilter<"files"> | string;
    file_size?: Prisma.IntFilter<"files"> | number;
    mime_type?: Prisma.StringFilter<"files"> | string;
    uploaded_by?: Prisma.IntNullableFilter<"files"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"files"> | Date | string | null;
}, "file_id">;
export type filesOrderByWithAggregationInput = {
    file_id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    original_name?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.filesCountOrderByAggregateInput;
    _avg?: Prisma.filesAvgOrderByAggregateInput;
    _max?: Prisma.filesMaxOrderByAggregateInput;
    _min?: Prisma.filesMinOrderByAggregateInput;
    _sum?: Prisma.filesSumOrderByAggregateInput;
};
export type filesScalarWhereWithAggregatesInput = {
    AND?: Prisma.filesScalarWhereWithAggregatesInput | Prisma.filesScalarWhereWithAggregatesInput[];
    OR?: Prisma.filesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.filesScalarWhereWithAggregatesInput | Prisma.filesScalarWhereWithAggregatesInput[];
    file_id?: Prisma.IntWithAggregatesFilter<"files"> | number;
    filename?: Prisma.StringWithAggregatesFilter<"files"> | string;
    original_name?: Prisma.StringWithAggregatesFilter<"files"> | string;
    file_path?: Prisma.StringWithAggregatesFilter<"files"> | string;
    file_size?: Prisma.IntWithAggregatesFilter<"files"> | number;
    mime_type?: Prisma.StringWithAggregatesFilter<"files"> | string;
    uploaded_by?: Prisma.IntNullableWithAggregatesFilter<"files"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"files"> | Date | string | null;
};
export type filesCreateInput = {
    filename: string;
    original_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    uploaded_by?: number | null;
    created_at?: Date | string | null;
};
export type filesUncheckedCreateInput = {
    file_id?: number;
    filename: string;
    original_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    uploaded_by?: number | null;
    created_at?: Date | string | null;
};
export type filesUpdateInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    original_name?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.IntFieldUpdateOperationsInput | number;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type filesUncheckedUpdateInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    original_name?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.IntFieldUpdateOperationsInput | number;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type filesCreateManyInput = {
    file_id?: number;
    filename: string;
    original_name: string;
    file_path: string;
    file_size: number;
    mime_type: string;
    uploaded_by?: number | null;
    created_at?: Date | string | null;
};
export type filesUpdateManyMutationInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    original_name?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.IntFieldUpdateOperationsInput | number;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type filesUncheckedUpdateManyInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    original_name?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size?: Prisma.IntFieldUpdateOperationsInput | number;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type filesCountOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    original_name?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type filesAvgOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
};
export type filesMaxOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    original_name?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type filesMinOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    original_name?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type filesSumOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    file_size?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
};
export type filesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    filename?: boolean;
    original_name?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    mime_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["files"]>;
export type filesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    filename?: boolean;
    original_name?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    mime_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["files"]>;
export type filesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    filename?: boolean;
    original_name?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    mime_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["files"]>;
export type filesSelectScalar = {
    file_id?: boolean;
    filename?: boolean;
    original_name?: boolean;
    file_path?: boolean;
    file_size?: boolean;
    mime_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
};
export type filesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"file_id" | "filename" | "original_name" | "file_path" | "file_size" | "mime_type" | "uploaded_by" | "created_at", ExtArgs["result"]["files"]>;
export type $filesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "files";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        file_id: number;
        filename: string;
        original_name: string;
        file_path: string;
        file_size: number;
        mime_type: string;
        uploaded_by: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["files"]>;
    composites: {};
};
export type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$filesPayload, S>;
export type filesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilesCountAggregateInputType | true;
};
export interface filesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['files'];
        meta: {
            name: 'files';
        };
    };
    findUnique<T extends filesFindUniqueArgs>(args: Prisma.SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends filesFindFirstArgs>(args?: Prisma.SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends filesFindManyArgs>(args?: Prisma.SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends filesCreateArgs>(args: Prisma.SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends filesCreateManyArgs>(args?: Prisma.SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends filesDeleteArgs>(args: Prisma.SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends filesUpdateArgs>(args: Prisma.SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends filesDeleteManyArgs>(args?: Prisma.SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends filesUpdateManyArgs>(args: Prisma.SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends filesUpsertArgs>(args: Prisma.SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma.Prisma__filesClient<runtime.Types.Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends filesCountArgs>(args?: Prisma.Subset<T, filesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilesCountAggregateOutputType> : number>;
    aggregate<T extends FilesAggregateArgs>(args: Prisma.Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>;
    groupBy<T extends filesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: filesGroupByArgs['orderBy'];
    } : {
        orderBy?: filesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: filesFieldRefs;
}
export interface Prisma__filesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface filesFieldRefs {
    readonly file_id: Prisma.FieldRef<"files", 'Int'>;
    readonly filename: Prisma.FieldRef<"files", 'String'>;
    readonly original_name: Prisma.FieldRef<"files", 'String'>;
    readonly file_path: Prisma.FieldRef<"files", 'String'>;
    readonly file_size: Prisma.FieldRef<"files", 'Int'>;
    readonly mime_type: Prisma.FieldRef<"files", 'String'>;
    readonly uploaded_by: Prisma.FieldRef<"files", 'Int'>;
    readonly created_at: Prisma.FieldRef<"files", 'DateTime'>;
}
export type filesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where?: Prisma.filesWhereInput;
    orderBy?: Prisma.filesOrderByWithRelationInput | Prisma.filesOrderByWithRelationInput[];
    cursor?: Prisma.filesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FilesScalarFieldEnum | Prisma.FilesScalarFieldEnum[];
};
export type filesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesCreateInput, Prisma.filesUncheckedCreateInput>;
};
export type filesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.filesCreateManyInput | Prisma.filesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type filesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.filesCreateManyInput | Prisma.filesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type filesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesUpdateInput, Prisma.filesUncheckedUpdateInput>;
    where: Prisma.filesWhereUniqueInput;
};
export type filesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyInput>;
    where?: Prisma.filesWhereInput;
    limit?: number;
};
export type filesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.filesUpdateManyMutationInput, Prisma.filesUncheckedUpdateManyInput>;
    where?: Prisma.filesWhereInput;
    limit?: number;
};
export type filesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
    create: Prisma.XOR<Prisma.filesCreateInput, Prisma.filesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.filesUpdateInput, Prisma.filesUncheckedUpdateInput>;
};
export type filesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
    where: Prisma.filesWhereUniqueInput;
};
export type filesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.filesWhereInput;
    limit?: number;
};
export type filesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.filesSelect<ExtArgs> | null;
    omit?: Prisma.filesOmit<ExtArgs> | null;
};
export {};
