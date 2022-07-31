import { ReactElement } from "react";

interface OptionsLife{
    time: number;
    /**
     * when the user hover the notification the life time stop and reset the value
     */
    onHoverReset: boolean;
    /**
     * to show the button close
     */
    showClose: boolean;
}
interface OptionsType{
    /**
     * `beforeTitle` string to set before title
     */
    beforeTitle: string;
    borderColor: string;
    backgroundColor: string;
    icon: ReactElement<any, any>,
}


export interface NotificationType{
    /**
     * `id` automatic ID to set a unique id for animation in notifications
     */
    id?: string;
    /**
     * `type` four type to set default colors in the notification;
     * `Option` to set custom option type
     * 
     */
    type: "success" | "warning" | "info" | "error" | OptionsType;
    title: string;
    message: string;
    /**
     * `life` in ms you can set the time of the notification, also you can set infite life if you want the notification dont deleted
     * not required and default 4000,
     * if you want custom life you can set with optionsLife
     */
    life?: number | "infinite" | OptionsLife;
}