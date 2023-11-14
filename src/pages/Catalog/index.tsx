import React, {FC, useState} from 'react';
import { catalogList } from '../../constants';
import { CatalogItem } from '../../components';
import s from './catalog.module.scss'
import {Select} from '../../ui';
import { Action } from '..';

const selectList=[
    {
        id:'lowFirst',
        label:'Порядок: сперва дешевле'
    },
    {
        id:'bigFirst',
        label:'Порядок: сперва дороже'
    }
]
interface ICatalogProps{
    dispatch:({type, payload}:Action)=>void
}

const Catalog:FC<ICatalogProps>= ({dispatch}) =>{
    const [sort, setSort] = useState('lowFirst');
    return <div className={s.catalog__wrapper}>
        <Select 
            optionList={selectList} 
            className={s.catalog__select} 
            value={sort} 
            setValue={setSort}
        />
        <div className={s.catalog}>
            {catalogList
                .sort(function(a, b) {
                        return sort==='lowFirst'?a.price - b.price:b.price-a.price;
                    })
                .map((item)=>
                    <CatalogItem 
                        key={item.id}
                        name={item.name} 
                        description={item.description}
                        price={item.price}
                        img={item.img}
                        onAdd={()=>dispatch({
                                type:'addItem',
                                payload:{
                                    id:item.id,
                                    name:item.name,
                                    description:item.description,
                                    price:item.price,
                                    img:item.img
                                }
                            })}
                    />)}
        </div>
    </div>
}

export default Catalog;