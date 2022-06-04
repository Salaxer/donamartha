import { FunctionComponent } from "react";

interface SectionScrollProps extends React.HTMLAttributes<HTMLElement> {}

const SectionScroll:FunctionComponent<SectionScrollProps> = ({className ,children}) =>{
    return(
        <section  className={className}>
            {children}
        </section>
    )
}

export default SectionScroll;