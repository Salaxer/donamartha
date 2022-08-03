import { motion } from "framer-motion"
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

import { Button } from "@Components";
import { NotificationDestructured, NotificationType } from "./types";
import styles from './NotificationItem.module.css';

interface NotificationItemProps {
    item: NotificationType;
    destructuratedItem: NotificationDestructured;
    deleteNotification: (item: NotificationType) => void;
}

const NotificationItem:FC<NotificationItemProps> = ({ deleteNotification, item, destructuratedItem}) =>{

    const { life, message, title, type } = destructuratedItem;
    
    const refInteval = useRef<NodeJS.Timer | null>(null);
    const [width, setWidth] = useState<number>(100);

    const handleStartTimer = useCallback(() =>{
        if (life.time == "infinite") return;
        if (refInteval.current) return;
        const id = setInterval(()=>{
            if (width <= 0) return deleteNotification(item);
            setWidth(width - 1);
        }, Number(life.time))
        refInteval.current = id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[deleteNotification, item, width])

    const handlePauseTimer = () =>{
        if (life.time == "infinite") return;
        if (!refInteval.current) return;
        clearInterval(refInteval.current);
        refInteval.current = null;
    }

    useEffect(()=>{
        handleStartTimer();
        return ()=>{
            handlePauseTimer();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[handleStartTimer]);

    return (
        <motion.li className={styles.container} key={item.id} transition={{ duration: 0.2 }}
        layout initial={{ opacity: 0, y: 50, scale: 0.3}}
        animate={{ opacity: 1, y: 0, scale: 1}} exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        onMouseEnter={handlePauseTimer}
        onMouseLeave={handleStartTimer}
         >
            <Button value="" iconR={<XIcon/>} styleButton="danger" className={styles.buttonClose} onClick={()=>{ deleteNotification(item) }}/>
            <span className={styles.icon}>{type.icon}</span>
            <div className={`${styles.body} ${type.customClassName}`}>
                <h3 className={styles.title}>{`${type.beforeTitle}: ${title}`}</h3>
                <p className={styles.message}>{message}</p>
            </div>
            <span
            style={{width:`${life.time == "infinite" ? 0 : width}%` }} className={styles.timeBar}></span>
        </motion.li>
    )
}

export default NotificationItem