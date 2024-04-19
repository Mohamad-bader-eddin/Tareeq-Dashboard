export type AssignOrder = {
    driver_id: string;
    order_id: string;
}

export type AssignDriver = {
    id: string,
    shopper: string;
    completedTripsToday?: number;
    type: string;
}