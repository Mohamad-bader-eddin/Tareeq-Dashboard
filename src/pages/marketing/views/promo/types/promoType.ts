export type Promo = {
    id?: string;
    code: string;
    amount: string;
    description: string;
    is_active: boolean;
    type: string;
    created_at?: Date;
}

export type PromoRow = {
    id: string;
    code: string;
    amount: string;
    isActive: string;
    createdAt: string
}