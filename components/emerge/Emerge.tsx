import styles from './Emerge.module.css';

type Move = 'right' | 'left' | 'top' | 'bottom';
type twoMove = 'hOut' | 'hIn' | 'vOut' | 'vIn';

interface globalProps{
    className: string,
    children: any,
}
interface INoMoveProps {
    animation: 'dispel',
    direction?: never
}
interface IOneMoveProps {
    animation: 'scroll' | 'swept',
    direction: Move
}
interface ITwoMovesProps {
    animation: 'split',
    direction: twoMove
}
type TAllInterfaces = INoMoveProps | IOneMoveProps | ITwoMovesProps;
type TEmergeProps = globalProps & TAllInterfaces;


 const Emerge = ({animation , direction ,children, className}: TEmergeProps) =>{
    return(
        <div className={`${styles.container} ${className}`}>
            <div className={styles[animation]}>
                {children}
            </div>  
        </div>
    )
}

export default Emerge;


