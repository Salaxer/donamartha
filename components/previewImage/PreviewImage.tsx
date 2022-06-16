import styles from './PreviewImage.module.css';
import React, { CSSProperties, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Button } from '@Components';
interface PreviewImageProp{
    children: ReactNode,
    className?: string;
    classToModal?: string;
    style?: CSSProperties;
}


const PreviewImage: React.FC<PreviewImageProp> = ({ children, className, classToModal, style }) =>{
    const refIMG = useRef<HTMLDivElement>(null);
    const [currentZoom, setCurrentZoom] = useState<number>(1);
    const [modal, setModal] = useState<boolean>(false)
    const refPreview = useRef<HTMLDivElement>(null);
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
        <div ref={refPreview} className={`${styles.preview} ${className}`} style={style}>
            <div className={styles.background} onClick={handleModal}><i className='pi pi-eye text-4xl text-white'></i></div>
            {modal ? 
            <Modal id='previeImage' className={`${styles.containterModal} ${classToModal ? classToModal : ''}`}>
                <div className={styles.buttons}>
                    <Button value='' styleButton='success' size='lg' iconR='pi pi-plus' onClick={zoomPlus}></Button>
                    <Button value='' styleButton='clasic' size='lg' iconR='pi pi-minus' onClick={zoomMinus}></Button>
                    <Button value='' styleButton='danger' size='lg' iconR='pi pi-times' onClick={handleModal}></Button>
                </div>
                <div ref={refIMG} className={styles.modalImg}>
                    {children}
                </div>
            </Modal> : children}
        </div>
    )
}

export default PreviewImage;