declare const MEMBER_STATUSES: readonly ["enrolled", "dropped", "completed"];
export type ClassGroupMemberStatus = (typeof MEMBER_STATUSES)[number];
export declare class AddClassGroupMemberDto {
    user_id: number;
    status?: ClassGroupMemberStatus;
}
export {};
