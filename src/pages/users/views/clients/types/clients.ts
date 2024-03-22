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
    isSavedAddress: boolean;
    dateAdded: string;
}

type Transactions = {
    id: string;
    status: string;
    amount: string;
    created_at: Date;
    transaction_type?: {
        id: string;
        description: string;
    }
}