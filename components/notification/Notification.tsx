import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from './Notification.module.css';
import useNotification from "./useNotification";
import { Button } from "@Components";
import { NotificationType } from './types';
import { arrayAddItem, arrayDeleteItem } from "utils/arrays";

interface EventCountDown {
    timeout: NodeJS.Timeout,
    item: NotificationType,
}

const Notification: FC<{position?: string}> = ({ position }) =>{
    
    const { notifications, deleteNotification } = useNotification();
    const [ lastNotificationLength, setLastNotificationLength ] = useState<number>(0)
    const [ eventsCountDown, setEventsCountDown] = useState<EventCountDown[]>([])

    const initializeCountdown = (item: NotificationType, life:number): EventCountDown =>{
        const timeout = setTimeout(()=>{
            deleteNotification(item);
            setEventsCountDown(arrayDeleteItem({item, timeout}, eventsCountDown));
        }, life)
        return {item, timeout};
    }

    useEffect(()=>{
        // Only add item for timeout if the change is a new item for notifications
        console.log("notifications:", notifications);
        if (notifications.length === 0) return setLastNotificationLength(0);
        if (notifications.length === lastNotificationLength) return;
        if (notifications.length >= lastNotificationLength) {
            const life = notifications.at(-1)!.life!;
            if (life == "infinite") return;
            if (typeof life == "object") {
                setEventsCountDown(arrayAddItem(initializeCountdown(notifications.at(-1)!, life.time), eventsCountDown))
            }
            setEventsCountDown(arrayAddItem(initializeCountdown(notifications.at(-1)!, life), eventsCountDown))
        }
        setLastNotificationLength(notifications.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[notifications])

    useEffect(()=>{
        console.log("event timeout:", eventsCountDown);
    },[eventsCountDown])
    
    return(
        <ul className={styles.container}>
            <AnimatePresence>
                { notifications.map((item)=>{
                    return(
                        <motion.li className={styles.notification} key={item.id}
                        transition={{ duration: 0.2 }}
                        layout
                        initial={{ opacity: 0, y: 50, scale: 0.3}}
                        animate={{ opacity: 1, y: 0, scale: 1}}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        >
                            <Button value="delete" onClick={()=>{
                                deleteNotification(item)
                            }}/>
                            <h3>asda</h3><h4>{item.title}</h4>
                            <p></p>
                        </motion.li>
                    )
                })}
            </AnimatePresence>
        </ul>
    ) 
}

export default Notification;