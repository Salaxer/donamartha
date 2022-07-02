import styles from './Tag.module.css';

interface TagProp{
    value: string,
    severity: 'success' | 'warning' |'danger',
    size: 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
    shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    className?: string,
}

type Severities = {
    [value in TagProp['severity']]: string;
};

const Tag = ({ value, severity, size, className, shadow}:TagProp) =>{
    const severities: Severities = {
        success: 'bg-green-400',
        danger: 'bg-red-400 text-stone-50',
        warning: 'bg-orange-400 ',
    }
    return (
        <div style={{
            padding: '0.5rem'
        }} className={`${severities[severity]} ${shadow && styles[`shadow-${shadow}`]} rounded-lg text-center text-${size} ${className ? className : ""}`}>
            {value}
        </div>
    )
}

export default Tag;