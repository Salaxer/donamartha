import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence , Variants } from 'framer-motion';
import { Modal, Button } from '@Components';
import styles from './PreviewImage.module.css';
interface PreviewImageProp{
    children: ReactNode,
    className?: string;
    classToModal?: string;
    style?: CSSProperties;
    id?: string,
}

const childVariants:Variants = {
    initial:{
        opacity: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
    hidden: { 
        opacity: 0,
        scale: 1.2,
    },
}


const PreviewImage: React.FC<PreviewImageProp> = ({ children, className, classToModal, style }) =>{
    const refIMG = useRef<HTMLDivElement>(null);
    const [currentZoom, setCurrentZoom] = useState<number>(1);
    const [modal, setModal] = useState<boolean>(false)
    useEffect(()=>{
        if (refIMG.current) {
            refIMG.current.style.transform = `scale(${currentZoom})`;
        }
    },[currentZoom])
    const handleModal = () =>{
        setModal(!modal);
    }
    const zoomPlus = () =>{
        setCurrentZoom(currentZoom => decideZoom(currentZoom + 0.1));
    }
    const zoomMinus = () =>{
        setCurrentZoom(currentZoom => decideZoom(currentZoom - 0.1));
    }
    const decideZoom = (n:number):number => {
        if (n >= 2) {
            return 2;
        }else if(n <= 0.1){
            return 0.1;
        }
        return n;
    }
    return (
        <div className={`${styles.preview} ${className && className}`} style={style}>
            <div className={styles.background} onClick={handleModal}><i className='pi pi-eye text-4xl text-white'></i></div>
            <AnimatePresence exitBeforeEnter initial={false}>
                {modal ? 
                <Modal key='previeImage' id='previeImage' className={`${classToModal && classToModal}`}>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.containterModal}>
                        <div className={styles.buttons}>
                            <Button ripple value='' styleButton='success' size='lg' iconR='pi pi-plus' onClick={zoomPlus}></Button>
                            <Button ripple value='' styleButton='clasic' size='lg' iconR='pi pi-minus' onClick={zoomMinus}></Button>
                            <Button value='' styleButton='danger' size='lg' iconR='pi pi-times' onClick={handleModal}></Button>
                        </div>
                        <div ref={refIMG} className={styles.modalImg}>
                            <motion.span 
                                initial={{scale: 0.7, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{ opacity: 0, scale: 0.7,}}
                                drag
                                dragConstraints={refIMG}
                                className={styles.spanIMG}
                            >
                                {children}
                            </motion.span> 
                        </div>
                    </motion.div>
                </Modal>
                : 
                <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1}}
                exit={{  scale: 1.2, opacity: 0}}
                key={children?.toString()}
                style={{
                    height: "100%",
                    width: "100%",
                }}
                >
                        {children}
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default PreviewImage;