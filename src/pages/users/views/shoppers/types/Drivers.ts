export type Drivers = {
    id?: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    zone_id: string;
    model_number: string;
    brand: string;
    plat_number: string;
    minifacture_year: string;
    color: string;
    description: string;
    vehicle_type_id: string;
    created_at?: Date;

}

export type DriversRows = {
    id: number;
    name: string;
    phone: string;
    zone?: string;
    registerDate: string;
    lastOnline?: string;
    completedOrdersToday?: number;
    shopperEarning?: number;
    online?: boolean;
}