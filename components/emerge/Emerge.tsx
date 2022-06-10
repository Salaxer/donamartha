import { useEffect, useRef } from 'react';
import styles from './Emerge.module.css';

type Move = 'right' | 'left' | 'top' | 'bottom';
type twoMove = 'hOut' | 'hIn' | 'vOut' | 'vIn';

interface globalProps{
    /**
     * duration in miliseconds
     */
    duration: number,
    /**
     * delay to start the animation
     */
    delay: number,
    /**
     * when status is true, the animation run the duration and stop, you have to put on false and then true
     */
    run: boolean,
    className: string,
    children: any,
}
interface INoMoveProps {
    type: 'dispel',
    direction: '';
}
interface IOneMoveProps {
    type: 'scroll' | 'swept',
    direction: Move
}
interface ITwoMovesProps {
    type: 'split',
    direction: twoMove
}
type TAllInterfaces = INoMoveProps | IOneMoveProps | ITwoMovesProps;
type TEmergeProps = globalProps & TAllInterfaces;


 const Emerge = ({type , direction, duration ,children, className, run, delay}: TEmergeProps) =>{
    const refContainer = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if (refContainer.current) {
            if (run) {
                refContainer.current.style.animationDuration = `${duration}ms`
                refContainer.current.style.animationDelay = `${delay}ms`
                refContainer.current.style.animationName = styles[`${type}${direction}`];
                setTimeout(() => {
                    refContainer.current!.classList.remove(styles.initialContainer);
                }, delay);
            }else{
                refContainer.current.removeAttribute('style');
                refContainer.current!.classList.add(styles.initialContainer);
            }
        }
    },[delay, direction, duration, run, type])
    return(
        <div ref={refContainer} className={`${styles.container} ${className} ${styles.initialContainer}`}>
            {children}
        </div>
    )
}

export default Emerge;


