export declare enum ApprovalStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare class ApproveLessonDto {
    approval_status: ApprovalStatus;
    review_note?: string;
}
