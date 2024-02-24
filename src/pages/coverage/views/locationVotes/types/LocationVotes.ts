export type LocationVotes = {
    id: string;
    source_lat: number;
    source_long: number;
    destination_lat: number;
    destination_long: number;
    user_id: string;
    created_at: Date;
    user: User;
}

export type User = {
    id: number;
    name: string;
    phone: string;
    platform: null;
    image: null;
    created_at: Date;
}

export type LocationVotesRows = {
    id: string;
    client: string;
    createdAt: string;
    clientId: string;
}