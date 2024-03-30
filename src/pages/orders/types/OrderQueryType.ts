export type OrderQueryType = {
    page: number;
    limit: number;
    orderNumber?: string;
    fromDate?: string;
    toDate?: string;
    phone?: string;
    name?: string;
}