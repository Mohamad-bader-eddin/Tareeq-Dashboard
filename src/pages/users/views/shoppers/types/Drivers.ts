import { Zone } from "../../../../../share/types";

export type Drivers = {
    id?: number;
    name: string;
    phone: string;
    email?: string;
    password: string;
    zone_id: string;
    zone?: Zone;
    vehicle?: {
        id: string;
        model_number: string;
        brand: string;
        plat_number: string;
        minifacture_year: string;
        color: string;
        image: string;
        description: string;
        vehicle_type_id: string;
        created_at: Date;
    };
    model_number: string;
    brand: string;
    plat_number: string;
    minifacture_year: string;
    color: string;
    description: string;
    vehicle_type_id: string;
    created_at?: Date;
    vehicle_image?: File | undefined | string;
    driver_image?: File | undefined | string;
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