import { useState, useEffect, useRef } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';
import 'primeicons/primeicons.css'

import { Ripple } from '@Components';

const Header: NextPage = () =>{
    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [bar, setBar] = useState<boolean>(false);
    useOnClickOutside(ref, () => setBar(false));
    return (
        <>
        <header ref={ref} id="header" className={styles.header}>
            <Image className={styles.header__picture__img} src='/Blogo.png' alt="Logo del restaurante" height={50} width={155}/>
            <div className={styles.header__mobile} >
                {!bar ? <div onClick={()=>setBar(true)} className={styles.header__mobile__open}>
                    <i className='pi pi-align-justify'></i>
                </div>
                :
                <div onClick={()=>setBar(false)} className={styles.header__mobile__close}>
                    <i className='pi pi-times'></i>
                </div>}
            </div>
            <nav className={styles.header__nav} style={{left: (!bar?'-470px':'0px')}}>
                <ul onClick={()=>setBar(false)}> 
                    <li>
                        <Link href="/" aria-label="Inicio">
                            <a>
                                <i className="pi pi-home"></i>
                                <span className={styles.information}>Inicio</span>
                                <Ripple color='blue'></Ripple>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu" aria-label="Menu">
                            <a>
                                <i className="pi pi-table"></i>
                                <span className={styles.information}>Menu</span>
                                <Ripple color='blue'></Ripple>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/delivery" aria-label="Pedidos a domicilio">
                            <a>
                                <i className="pi pi-car"></i>
                                <span className={styles.information}>Pedidos</span>
                                <Ripple color='blue'></Ripple>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/reservation" aria-label="Reservaciones">
                            <a>
                                <i className="pi pi-bookmark-fill"></i>
                                <span className={styles.information}>Reservaciones</span>
                                <Ripple color='blue'></Ripple>
                            </a>
                        </Link>
                    </li>
                    {/* {user === null ?
                    <li><Link href="/signup" aria-label="Unete a nosotros"><i className="fas fa-sign-in-alt"></i><span className="information">Unete</span></Link></li>:
                    user.photoURL === undefined ? <li> <LoaderCircle color="#0096C1" background="transparent" position="static" size="30"/> </li>:
                    <li><Link href="/profile" aria-label="Perfil de usuario"><Image src={user.photoURL} alt={`foto de ${user.displayName}`} /><span className="information">Perfil</span></Link></li>
                    } */}
                </ul>
            </nav>
        </header>
        <div className={styles.falseHeader}>
            Aqui no hay nada
        </div>
    </>
    )
}
// Hook
function useOnClickOutside(ref: any, handler: any) {
    useEffect(
      () => {
        const listener = (event: any) => {
          // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

export default Header;