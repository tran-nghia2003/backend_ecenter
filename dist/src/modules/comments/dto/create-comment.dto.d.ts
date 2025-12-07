export declare class CreateCommentDto {
    post_id: number;
    user_id: number;
    content: string;
    parent_id?: number;
    media_url?: string;
    media_type?: string;
}
