import { motion } from "framer-motion"
import { Button } from "@Components";
import styles from './NotificationItem.module.css';
import { NotificationDestructured, NotificationType } from "./types";
import { FC, useCallback, useEffect, useRef, useState } from "react";

interface NotificationItemProps {
    item: NotificationType;
    destructuratedItem: NotificationDestructured;
    deleteNotification: (item: NotificationType) => void;
}

const NotificationItem:FC<NotificationItemProps> = ({ deleteNotification, item}) =>{

    const refInteval = useRef<NodeJS.Timer | null>(null);
    const [width, setWidth] = useState<number>(100);

    const handleStartTimer = useCallback(() =>{
        if (refInteval.current) return;
        const id = setInterval(()=>{
            if (width <= 0) return deleteNotification(item);
            setWidth(width - 1);
        }, Number(item.life))
        refInteval.current = id;
    },[deleteNotification, item, width])

    const handlePauseTimer = () =>{
        if(!refInteval.current) return;
        clearInterval(refInteval.current);
        refInteval.current = null;
    }

    useEffect(()=>{
        if (item.life == "infinite") return;
        handleStartTimer();
        return ()=>{
            handlePauseTimer();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[handleStartTimer]);

    return (
        <motion.li className={styles.notification} key={item.id} transition={{ duration: 0.2 }}
        layout initial={{ opacity: 0, y: 50, scale: 0.3}}
        animate={{ opacity: 1, y: 0, scale: 1}} exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} >
            <Button value="delete" onClick={()=>{ deleteNotification(item) }}/>
            <h3>Error</h3><h4>{item.title}</h4>
            <p></p>
            <motion.span style={{width: `${width}%`}} className={styles.bar}></motion.span>
        </motion.li>
    )
}

export default NotificationItem