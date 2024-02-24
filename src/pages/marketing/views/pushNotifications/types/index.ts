export type UserType = {
    id: string;
    type: string;
    created_at: string;
}

export type PushNotification = {
    type_id: string;
    title: string;
    description: string;
    id?: string;
}