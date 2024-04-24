export type UserQueryType = {
    page: number;
    limit: number;
    id?: string;
    phone?: string;
    name?: string;
    last_name: string;
}

export type UserQueryFilterType = {
    id?: string;
    phone?: string;
    name?: string;
    last_name: string;
}