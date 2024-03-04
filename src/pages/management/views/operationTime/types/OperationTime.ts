export type OperationTime = {
    id?: string;
    from: string;
    to: string;
    created_at?: Date;
}

export type OperationTimeRows = {
    id: string;
    fromTime: string;
    toTime: string;
}