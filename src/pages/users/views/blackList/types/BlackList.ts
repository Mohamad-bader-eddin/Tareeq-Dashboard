export type BlackList = {
    id: string;
    bannedable_type: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    bannedable: Bannedable;
}

type Bannedable = {
    id: number;
    name: string;
    phone: string;
    image: null;
    email: null;
    current_lat: null;
    current_long: null;
    availability: boolean;
    driver_profit: number;
    verify_code: null;
    created_at: Date;
}

export type BlackListRow = {
    id: string;
    phone: string;
    createdAt: string;
}