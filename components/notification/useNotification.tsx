import { useContext } from "react"
import { NotificationType } from "./types";
import NotificationContext from "./NotificationContext";
import { arrayAddItem, arrayUpdateItem, arrayDeleteItem } from "utils/arrays";

const useNotification = () =>{
    
    const { notifications , setNotifications } = useContext(NotificationContext);

    const addNotification = (item: NotificationType) => {
        item.id = `NotificationN°${Math.random()}`
        item.life = item.life ? item.life  : 4000;
        setNotifications(arrayAddItem(item, notifications));
    }

    const clearAll = () => setNotifications([]);

    const updateNotification = (item: NotificationType) => setNotifications(arrayUpdateItem(item, notifications));

    const deleteNotification = (item: NotificationType) => setNotifications(arrayDeleteItem(item, notifications));

    return {
        notifications,
        addNotification,
        updateNotification,
        deleteNotification,
        clearAll,
    }
}

export default useNotification;
