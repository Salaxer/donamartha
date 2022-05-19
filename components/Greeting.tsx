import type { NextPage } from 'next'

const Greeting: NextPage = () =>{
    return (
        <>
            <div id="greeting" className="Greeting" style={{backgroundImage: `url('ss')`,backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
            <div className="text">
                <h1>Bienvenidos</h1>
                <p>Soy do&ntilde;a martha y espero que disfruten de la buena comida que preparamos</p>
            </div>
        </>
    )
}
export default Greeting;
