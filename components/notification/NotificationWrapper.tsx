import { FC } from "react";
import { AnimatePresence } from "framer-motion";

import styles from './NotificationWrapper.module.css';
import useNotification from "./useNotification";
import NotificationItem from "./NotificationItem";
import { NotificationDestructured, NotificationType, AutomaticValues } from "./types";
import { ExclamationIcon,
    InformationCircleIcon,
    CheckIcon,
    XCircleIcon } from "@heroicons/react/outline";


enum VARIABLES {
    DEFAULT_TIME = 4000, 
};
const Type: AutomaticValues = {
    success: {
        beforeTitle: "Realizado",
        icon: <CheckIcon/>,
        customClassName: "success"
    },
    warning: {
        beforeTitle: "Advertencia",
        icon: <ExclamationIcon/>,
        customClassName: "warning"
    },
    info: {
        beforeTitle: "Info",
        icon: <InformationCircleIcon/>,
        customClassName: "info"
    },
    error: {
        beforeTitle: "Error",
        icon: <XCircleIcon/>,
        customClassName: "error"
    },
};
const getValues = (item: NotificationType): NotificationDestructured =>{
    const before = item.life ? (typeof item.life === "object" ? item.life.time : item.life) : VARIABLES.DEFAULT_TIME;
    const time: number | "infinite" = typeof before === "number" ? before/100 : before;
    const onHoverPause:boolean = (typeof item.life === "object") ? item.life.onHoverPause : true;
    const showClose:boolean = (typeof item.life === "object") ? item.life.showClose : true;
    const type = (typeof item.type === "string") ? Type[item.type] : item.type;
    return {
        life:{
            time,
            onHoverPause,
            showClose
        },
        message: item.message,
        title: item.title,
        type,
    }

}

const NotificationWrapper: FC<{position?: string}> = ({ position }) =>{
    
    const { notifications, deleteNotification } = useNotification();
    
    return(
        <ul className={styles.container}>
            <AnimatePresence>
                { notifications.map((item)=>{
                    const newItems = getValues(item);
                    return(
                        <NotificationItem deleteNotification={deleteNotification} destructuratedItem={newItems} item={item} key={item.id}/>
                    )
                })}
            </AnimatePresence>
        </ul>
    ) 
}
export default NotificationWrapper;