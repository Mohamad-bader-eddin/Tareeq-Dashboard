import { Zone } from "../../../../../share/types";
import { Vehicle } from "../../../../vehicles/types/Vehicles";

export type Drivers = {
    id?: string;
    name: string;
    last_name?: string;
    phone: string;
    email?: string;
    password: string;
    driver_profit?: string;
    zone_id: string;
    image?: string;
    current_lat?: number;
    current_long?: number;
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
        vehicle_type: Vehicle
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
    transactions?: transactions[];
    availability?: boolean;
}

export type DriversRows = {
    id: string;
    name: string;
    phone: string;
    zone?: string;
    registerDate: string;
    lastOnline?: string;
    completedOrdersToday?: number;
    shopperEarning?: string;
    online?: boolean;
}

type transactions = {
    id: string;
    status: string;
    amount: string;
    created_at: Date;
    transaction_type?: {
        id: string;
        description: string;
    }
}