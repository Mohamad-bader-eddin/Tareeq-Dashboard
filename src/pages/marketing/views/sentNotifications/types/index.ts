export type SentNotification = {
    id: string;
    created_at: Date;
    updated_at: Date;
    type: string;
    title: string;
    description: string;
    user: User;
}

export type SentNotificationRows = {
    id: string;
    user: string;
    userType: string;
    title: string;
    message: string;
    createdAt: string;
}

type User = {
    id: number;
    name: string;
    last_name: string;
    phone: string;
    platform: null;
    image: null;
    created_at: Date;
    latest_address: string;
}