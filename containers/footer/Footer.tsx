import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './Footer.module.css'

const Footer: NextPage = () =>{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContactus}>
                <p>Contactanos al <a aria-label="Numero de celular para contactarnos" href="tel:+527775133642"> 7775133642 </a></p>
                <p>O bien envianos un mensaje por whatsapp: **Logo Whatsapp**</p>
                <p>
                    Siguenos en nuestras redes sociales:
                    <br />
                    <a aria-label="Facebook del restaurante" href="https://www.facebook.com/Micheladas-Do%C3%B1a-Martha-101296578313615/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a aria-label="Twiter del restaurante" href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a aria-label="Instagram del restaurante" href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </p>
            </div>
            <div className={styles.footerHours}>
                <h3>Dirección</h3>
                <p>
                Carretera Zapata - Zacatepec 17
                San Pedro de los Pinos
                62790 Atlacholoaya, Mor.
                Mexico
                </p>
                <table>
                    <caption><h3>Horarios de apertura</h3></caption>
                    <tbody>
                        <tr>
                        <td>Lunes:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                        <tr>
                        <td>Martes:</td>
                        <th>Cerrado</th>
                        <th>–</th>
                        <th>Cerrado</th>
                        </tr>
                        <tr>
                        <td>Miercoles:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                        <tr>
                        <td>Jueves:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                        <tr>
                        <td>Viernes:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                        <tr>
                        <td>Sabado:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                        <tr>
                        <td>Domingo:</td>
                        <th>10:05 AM</th>
                        <th>–</th>
                        <th>8:00 PM</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.footerFindus}>
                {/* <iframe title="Como llegar al Restaurante" className={styles.footerFindusMap} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15110.279083441268!2d-99.2102233!3d18.7727448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee1ce55e86f27d47!2sMicheladas%20Do%C3%B1a%20Martha!5e0!3m2!1ses-419!2smx!4v1605128421072!5m2!1ses-419!2smx" frameBorder="0" style={{border:0}} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>  */}
            </div>
            <section className={styles.footerPowered}>
                <p
                className={styles.footerPoweredLink}
                >
                    <span className={styles.footerPoweredLinkLogo}>
                        <Image src="/icon.png" alt="Vercel Logo" width={50} height={40} />
                    </span>
                    Copyright © 2022 Do&ntilde;a Martha. All rights reserved.
                </p>
                <a
                href="https://salaxer.com?source=donamarthaapp&template=footer"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerPoweredLink}
                >
                    <p>Made with ❤ by</p>
                    <h4> SALAXER</h4>
                    <span className={styles.footerPoweredLinkLogo}>
                        <Image src="/salaxer.svg" alt="Vercel Logo" width={40} height={40} />
                    </span>
                </a>
            </section>
        </footer>
    )
}
export default Footer;