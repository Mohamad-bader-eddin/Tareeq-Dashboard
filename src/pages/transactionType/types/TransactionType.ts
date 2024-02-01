export type TransactionType = {
    id?: string;
    type: string;
    description: string;
    created_at?: Date;
}

export type TransactionTypeRow = {
    id: string;
    type: string;
    createdAt: string;
}