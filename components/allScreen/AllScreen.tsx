
const allScreen = ({className ,children}:any) =>{
    return(
        <div className={`${className} w-full h-max flex justify-center items-center`} style={{height: 'calc(100vh - 65px)'}}>
            {children}
        </div>
    )
}

export default allScreen;