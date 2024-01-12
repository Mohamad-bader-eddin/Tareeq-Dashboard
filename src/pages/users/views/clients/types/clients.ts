export type Address = {
    address: string;
    created_at: Date;
    id: number;
    is_save: boolean;
    lat: number;
    long: number;
    name: string;
    type: string;
    user_id: number;
}

export type Client = {
    address: Address[];
    created_at: Date;
    email: string;
    id: number;
    image: string;
    name: string;
    phone: string;
    phone_verified_at: Date;
    platform: string;
}

export type ClientRows = {
    joinDate: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    platform: string;
}

export type AddressRows = {
    id: number;
    address: string;
    isSavedAddress: boolean;
    dateAdded: string;
}