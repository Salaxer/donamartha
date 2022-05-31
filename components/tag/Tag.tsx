

interface TagProp{
    value: string,
    severity: 'success' | 'warning' |'danger',
    size: 'sm' | 'base' | 'lg',
}

type Severities = {
    [value in TagProp['severity']]: string;
};

const Tag = ({ value, severity, size}:TagProp) =>{
    const severities: Severities = {
        success: 'bg-green-400',
        danger: 'bg-red-400 text-stone-50',
        warning: 'bg-orange-400 ',
    }
    return (
        <div className={`${severities[severity]} rounded-lg p-1 text-${size}`}>
            {value}
        </div>
    )
}

export default Tag;