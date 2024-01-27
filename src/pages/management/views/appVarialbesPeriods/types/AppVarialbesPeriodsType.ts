import { Vehicle } from "../../../../vehicles/types/Vehicles";

export type VarialbesPeriods = {
    id?: string;
    from: string;
    to: string;
    price_by_minute: number;
    price_by_km: number;
    minimum_value: number;
    extra_value: number;
    initial_value: number;
    vehicle_type?: Vehicle;
    vehicle_type_id: string;
    created_at?: Date;
}

export type VarialbesPeriodsRow = {
    id: string;
    periodTimeFrom: string;
    periodTimeTo: string;
    vehicleType: string;
}