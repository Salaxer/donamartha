/**
 * allScreen 
 * @param className: to use your custom styles
 * @returns a div with a height of all the view content, and width with all view content and the children will show in the middle of the element
 */
const allScreen = ({className ,children}:any) =>{
    return(
        <div className={`${className} w-full h-max flex justify-center items-center`} style={{ height: 'calc(100vh - 65px)'}}>
            {children}
        </div>
    )
}

export default allScreen;