import Tilapia from 'public/images/tilapia.png'
import Image from 'next/image';

const SeaFood = () =>{
    return (
        <>
            <p className='text-5xl text-red-400'>Soy Pantalla 3</p>
            <Image src={Tilapia} alt='tilapia'></Image>
        </>
    )
}
export default SeaFood;