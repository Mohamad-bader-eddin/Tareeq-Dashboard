export type Notifications = {
    id?: string;
    title: string;
    description: string;
    created_at?: Date;
}

export type NotificationsRows = {
    id: string;
    title: string;
    message: string;
    createdAt: string;
}