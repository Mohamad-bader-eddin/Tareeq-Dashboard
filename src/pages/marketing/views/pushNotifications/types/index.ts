export type UserType = {
    id: string;
    type: string;
    created_at: string;
}

export type PushNotification = {
    type_id: string;
    notification_template_id: string;
    id?: string;
    title: string;
    description: string;
}

export type NotificationsOptions = {
    id: string;
    title: string;
    message: string;
}