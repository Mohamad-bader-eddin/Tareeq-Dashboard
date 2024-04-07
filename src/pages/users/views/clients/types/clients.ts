export type Address = {
    address: string;
    updated_at: Date;
    id: number;
    lat: number;
    long: number;
    name: string;
    type: string;
    user_id: number;
}

export type Client = {
    address: Address[];
    created_at: Date;
    id: number;
    image: string;
    name: string;
    last_name?: string;
    phone: string;
    phone_verified_at: Date;
    transactions: Transactions[]
}

export type ClientRows = {
    joinDate: string;
    id: number;
    name: string;
    phone: string;
}

export type AddressRows = {
    id: number;
    address: string;
    dateAdded: string;
    lat: number;
    long: number;
}

type Transactions = {
    id: string;
    status: string;
    amount: string;
    created_at: Date;
    order_id?: string;
    transaction_type?: {
        id: string;
        description: string;
    }
}