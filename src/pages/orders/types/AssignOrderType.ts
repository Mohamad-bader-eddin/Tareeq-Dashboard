export type AssignOrder = {
    driver_id: string;
    order_id: string;
}

export type AssignDriver = {
    id: number,
    shopper: string;
    completedTripsToday?: number;
}