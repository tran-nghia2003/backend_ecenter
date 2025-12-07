export declare class CreatePaymentDto {
    user_id: number;
    course_id: number;
    amount: number;
    currency?: string;
    payment_method: string;
    transaction_id?: string;
    gateway_transaction_code?: string;
    order_code?: string;
    bank_code?: string;
    card_type?: string;
    payment_url?: string;
    payment_note?: string;
}
