import { GridColDef, GridRowsProp } from "@mui/x-data-grid"

export type OrdersTableType = {
    rows: GridRowsProp,
    columns: GridColDef[]
}

export type OrderRow = {
    id: string;
    customer: string;
    customerId: string;
    status: string;
    totalExpected: string;
    type: string;
    placedon?: string;
    shopper?: string;
    shopperId?: string;
    totalPaid?: string;
    arrivedAt?: string;
    creditsUsed?: string;
    rating?: number;
    reason?: string;
    scheduledAt?: string;
    canceledAt?: string;
}