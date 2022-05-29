
import style from './ListProducts.module.css';
import Dropdown from '../../components/Dropdown'
import { useState } from 'react';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard'; 

import { Product } from '../../utils/interfaces/Product';

interface PropsList{
    products: Product[],
}

const ListProducts = ({products}:PropsList) => {

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
                                <Dropdown onChangeSelected={(e)=>{setSortByCategory(e)}} selected={sortByCategory} options={['Todo','Favoritos' , 'Comida', 'Bebidas', 'Botanas']}></Dropdown>
                            </div>
                            <input type="search" name="inputfoodSearch" placeholder="Buscar" className={style.inputfoodSearch} id="" />
                            <div className={style.selectFood}>
                                <Dropdown onChangeSelected={(e)=>{setSortByType(e)}} selected={sortByType} options={['Recomendados', 'Mejor Valorado', 'Menor a Mayor Precio', 'Mayor a Menor Precio']}></Dropdown>
                            </div>
                        </div>
                    </div>
                    {products.length === 0 ? <div className={style.loader} ><Loader color='' position='relative' background='' size=''></Loader></div> :
                    products.map((product, index) => <ProductCard index={index} products={product} key={index}></ProductCard>)}
                </div> 
            </div>
        </div>
    )
}



export default ListProducts

