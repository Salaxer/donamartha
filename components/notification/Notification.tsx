import { FC } from "react";
import useNotification from "./useNotification";

import styles from './Notification.module.css';

const Notification: FC<{position?: string}> = ({ position }) =>{
    let { notifications } = useNotification();
    
    console.log(useNotification());

    return(
        <ul className={styles.container}>
            { notifications.map((item)=>{
                return(
                    <li className={styles.notification} key={item.id}>
                        <p>{item.title}</p>
                    </li>
                )
            })}
        </ul>
    ) 
}

export default Notification;