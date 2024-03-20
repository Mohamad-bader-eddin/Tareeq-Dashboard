export type Vehicle = {
    id?: string;
    name: string;
    image?: File | undefined | string;
    price_by_time?: string;
    price_by_km?: string;
    need_note: boolean;
    created_at?: Date;
}

export type VehicleRows = {
    id: string;
    name: string;
    priceByTime?: number;
    priceByKm?: number;
    createdAt: string;
}