import { FC, useMemo, useState } from "react";

import NotificationContext from "./NotificationContext";
import { NotificationType } from "./types";
import NotificationWrapper from "./NotificationWrapper";

export const NotificationProvider:FC<{children: any}> = ({ children }) => {

    const [notifications, setNotifications] = useState<NotificationType[]>([]);

    const value = useMemo(
        () => ({ notifications, setNotifications }), 
        [notifications]
    );
    
    return (
        <>
            <NotificationContext.Provider value={value}>
                {children}
                <NotificationWrapper/>
            </NotificationContext.Provider>
        </>
    )
}