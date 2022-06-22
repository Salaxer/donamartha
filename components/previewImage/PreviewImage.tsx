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

const variants:Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
        <div className={`${styles.preview} ${className}`} style={style}>
            <div className={styles.background} onClick={handleModal}><i className='pi pi-eye text-4xl text-white'></i></div>
            <AnimatePresence exitBeforeEnter>
                {modal ? 
                <Modal key='previeImage' id='previeImage' className={`${classToModal ? classToModal : ''}`}>
                    <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0, transition: { duration: 0.2 }}}
                        className={styles.containterModal}>
                        <div className={styles.buttons}>
                            <Button ripple value='' styleButton='success' size='lg' iconR='pi pi-plus' onClick={zoomPlus}></Button>
                            <Button ripple value='' styleButton='clasic' size='lg' iconR='pi pi-minus' onClick={zoomMinus}></Button>
                            <Button value='' styleButton='danger' size='lg' iconR='pi pi-times' onClick={handleModal}></Button>
                        </div>
                        <div ref={refIMG} className={styles.modalImg}>
                            <motion.span 
                                initial={{scale: 0.9, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                transition={{duration: 0.8, type: 'spring'}}
                                drag
                                dragConstraints={refIMG}
                                className={styles.spanIMG}
                            >
                                {children}
                            </motion.span> 
                        </div>
                    </motion.div>
                </Modal>
                : children }
            </AnimatePresence>
        </div>
    )
}

export default PreviewImage;