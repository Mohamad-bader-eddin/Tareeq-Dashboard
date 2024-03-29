export type Promo = {
    id?: string;
    code: string;
    amount: string;
    description: string;
    is_active: boolean;
    type: string;
    created_at?: Date;
    deadline_date?: string;
    used_promos?: UsedPromo[];
}

type UsedPromo = {
    id: string;
    used_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    user: User;
}

type User = {
    id: string;
    name: string;
    phone: string;
    platform: string;
    image: string;
    created_at: Date;
    last_name: string;
    latest_address: LatestAddress;
}

type LatestAddress = {
    id: number;
    name: string;
    address: string;
    lat: number;
    long: number;
    updated_at: Date;
    deleted_at: Date;
}

export type PromoRow = {
    id: string;
    code: string;
    amount: string;
    isActive: boolean;
    createdAt: string;
    type: string;
}

export type UsedPromoRows = {
    id: string;
    user: string;
    userId: string;
    amount: string;
    createdAt: string;
}