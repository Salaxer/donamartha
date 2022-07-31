import { createContext, Dispatch, SetStateAction } from "react";
import { NotificationType } from "./types" 

interface Context {
    notifications: NotificationType[],
    setNotifications: Dispatch<SetStateAction<NotificationType[]>>
}

const initialValue: Context = {
    notifications: [],
    setNotifications: () => {},
}
const NotificationContext = createContext(initialValue);

export default NotificationContext;