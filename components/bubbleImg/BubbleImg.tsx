import Image, { StaticImageData } from 'next/image';
import { CSSProperties, FC } from 'react';
import styles from './BubbleImg.module.css';

import { PreviewImage } from '@Components';

interface StaticRequire {
    default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;
interface BubbleProp{
    image: string | StaticImport;
    alt: string;
    priority?: boolean;
    preview?: boolean;
    style?: CSSProperties;
    className?: string,
}

const BubbleImg:FC<BubbleProp> = ({image, priority = false, alt, className, preview=false, style}) =>{
    return (
        <div style={style} className={`${styles.containerBubble} ${className ? className : ""}`}>
            {preview ? 
            <PreviewImage style={{borderRadius: '50%'}}>
                  <Image src={image} priority={priority} alt={alt} layout='fill' objectFit='cover'></Image>
            </PreviewImage>
            :
            <div className={styles.withoutPreview}>
                <Image src={image} priority={priority} alt={alt} layout='fill' objectFit='cover'></Image>
            </div>
            }
        </div>
    )
}

export default BubbleImg;