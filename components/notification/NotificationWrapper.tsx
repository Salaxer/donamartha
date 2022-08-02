import { FC } from "react";
import { AnimatePresence } from "framer-motion";

import styles from './NotificationWrapper.module.css';
import useNotification from "./useNotification";
import NotificationItem from "./NotificationItem";
import { NotificationDestructured, NotificationType } from "./types";
import { EyeIcon } from "@heroicons/react/solid";


enum VARIABLES {
    DEFAULT_TIME = 4000, 
};
const Type = {
    success: {
        beforeTitle: "",
        icon: <EyeIcon/>,
    },
    warning: {
        beforeTitle: "",
        icon: <EyeIcon/>,
    },
    info: {
        beforeTitle: "",
        icon: <EyeIcon/>,
    },
    error: {
        beforeTitle: "",
        icon: <EyeIcon/>,
    },
};
const getValues = (item: NotificationType): NotificationDestructured =>{

    const time: number | "infinite" = item.life ? (typeof item.life === "object" ? item.life.time : item.life) : VARIABLES.DEFAULT_TIME;
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
                    console.log('Renders on Wrapper');
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