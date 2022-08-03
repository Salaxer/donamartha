import { ReactElement } from "react";

interface OptionsLife{
    /**
     * in `ms` you can set the time of the notification
     */
    time: number;
    /**
     * when the user hover the notification the life time pause the life time
     */
     onHoverPause: boolean;
    /**
     * to show the button close
     */
    showClose: boolean;
}
interface CustomType{
    /**
     * `beforeTitle` string to set before title
     */
    beforeTitle: string;
    icon: ReactElement<any, any>,
    customClassName: ElementsNotifications | string;
}

interface ElementsNotifications {
    container?: string;
    buttonClose?: string;
    icon?: string;
    timeBar?: string;
    body?: string;
    title?: string;
    message?: string;
}

export interface NotificationType{
    /**
     * `id` automatic ID to set a unique id for animation in notifications
     */
    id?: string;
    /**
     * `type` four type to set default colors in the notification;
     * `CustomType` to set custom option type
     * 
     */
    type: "success" | "warning" | "info" | "error" | CustomType;
    title: string;
    message: string;
    /**
     * `life` in `ms` you can set the time of the notification, also you can set infite life if you want the notification dont deleted
     * not required and default 4000ms,
     * if you want custom life you can set with optionsLife
     */
    life?: number | "infinite" | OptionsLife;
}

interface OptionsDestLife{
    /**
     * in `ms` you can set the time of the notification
     */
    time: "infinite" | number;
    /**
     * when the user hover the notification the life time pause the life time
     */
     onHoverPause: boolean;
    /**
     * to show the button close
     */
    showClose: boolean;
}

export interface NotificationDestructured{
    /**
     * `type` four type to set default colors in the notification;
     * `CustomType` to set custom option type
     * 
     */
    type: CustomType;
    title: string;
    message: string;
    /**
     * `life` in `ms` you can set the time of the notification, also you can set infite life if you want the notification dont deleted
     * not required and default 4000ms,
     * if you want custom life you can set with OptionsDestLife
     */
    life: OptionsDestLife;
}

// UseNotifications

export interface UseNotificationReturn {
    /**
     * `notifications` array of updated values of notifications
     */
    notifications: NotificationType[];
    /**
     * `addNotification` funtion to add a new notification and ensure the notifications will update,
     */
    addNotification: (item: NotificationType) => void;
    /**
     * `updateNotification` funtion to update the value of a new notification and ensure the notifications will update,
     */
    updateNotification: (item: NotificationType) => void;
    deleteNotification: (item: NotificationType) => void;
    clearAll: () => void;
}

export interface AutomaticValues{
    [key: string]: CustomType;
}