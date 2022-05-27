import type { NextPage } from 'next'

import style from './ListProducts.module.css';
import Dropdown from '../../components/Dropdown'
import { useState } from 'react';
import Loader from '../../components/Loader';

const ListProducts: NextPage = () => {

    const [sortByCategory, setSortByCategory] = useState<String>('Ordenar la categoria');
    const [sortByType, setSortByType] = useState<String>('Ordenar por');
    
    return (
        <div>
            <div className={style.MenuFoodMain} id="MenuFoodMain">
                <div className={style.ContainerAllFood}>
                    <div className={style.searchFood}> 
                        <h1 className={style.titleFood}>Carta</h1>
                        <div className={style.formFood}>
                            <div className={style.sortFood}>
                                <Dropdown onChangeSelected={(e)=>{setSortByCategory(e)}} selected={sortByCategory} options={['Todo', 'Comida', 'Bebidas', 'Botanas']}></Dropdown>
                            </div>
                            <input type="search" name="inputfoodSearch" placeholder="Buscar" className={style.inputfoodSearch} id="" />
                            <div className={style.selectFood}>
                                <Dropdown onChangeSelected={(e)=>{setSortByType(e)}} selected={sortByType} options={['Recomendados', 'Mas Pedidos', 'Mejor Valorado', 'Menor a Mayor Precio', 'Mayor a Menor Precio']}></Dropdown>
                            </div>
                        </div>
                    </div>
                    <Loader color='#00984c' position='relative' background='#0096c1' size='100'></Loader>
                        {/* {data.loader ? <div className={style.notAvailable"> <LoaderCircle position="relative" ></LoaderCircle> </div>:
                        food === 'empty' ? null : <MainMenuFood food={food} ></MainMenuFood>
                        }
                        { data.newLoader ?  <div className={style.containSlide"><div className={style.slideFood"><LoaderCircle position="relative" ></LoaderCircle></div></div> : null}
                        {
                        data.withoutData ? <div className={style.containSlide"><div className={style.slideFood" style={{alignItems: 'center'}}><h1>no hay mas productos</h1></div></div> : null
                        } */}
                </div> 
            </div>
        </div>
    )
}

export default ListProducts

