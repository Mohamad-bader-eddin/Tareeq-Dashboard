export type Order = {
    id: string;
    user_id: number;
    driver_id: number;
    status: string;
    total_expected: number;
    distance_expected: number;
    order_date: Date;
    is_schedule: boolean;
    cancel_reason_id: null;
    arrive_to_customer_at?: Date;
    created_at: Date;
    driver: Driver;
    user: User;
    order_points: OrderPoint[];
    rate?: number;
}

export type Driver = {
    id: string;
    name: string;
    phone: string;
    image: null;
    email: null;
    current_lat: null;
    current_long: null;
    availability: boolean;
    verify_code: null;
    created_at: Date;
}

export type OrderPoint = {
    id: string;
    order_id: number;
    source_address_id: number;
    destination_address_id: number;
    order_no: number;
    created_at: Date;
    updated_at: Date;
}

export type User = {
    id: string;
    name: string;
    email: null;
    phone: string;
    phone_verified_at: Date;
    platform: null;
    image: null;
    created_at: Date;
}