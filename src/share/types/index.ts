export type Option = {
    id: string;
    name: string;
};

export type Zone = {
    id: string;
    name: string;
    created_at: Date;
}

export type PaginationModel = {
    page: number;
    pageSize: number;
}