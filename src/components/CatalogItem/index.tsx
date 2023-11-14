import React, { FC, useState } from 'react';
import { Icon, Text } from '../../ui';
import s from './catalogItem.module.scss'


interface ICatalagItemProps{
    name: string;
    description: string;
    price: number;
    img:string;
    onAdd?:()=>void;
}
const CatalogItem:FC<ICatalagItemProps>=({name, description, price, onAdd, img})=>{
    const [isPointerOn, setPointerOn] = useState(false);
    const switchPointerOn=()=>{setPointerOn(!isPointerOn)}
    const handleAdd=()=>{
        onAdd?.();
    }

    return <div className={s.catalogItem} onClick={handleAdd}>
        <div 
            className={s.catalogItem__img}
            onPointerEnter={switchPointerOn}
            onPointerLeave={switchPointerOn}
        >
           <img src={require(`../../constants/MOCK_PICTURES/${img}`)}
                height={250} 
                width={380}/>
            {isPointerOn && <div className={s.catalogItem__icons}>
                <span onClick={handleAdd}>
                    <Icon name='cart' size={24}/>
                </span>
            </div>}
        </div >
        <div className={s.catalogItem__atr}>
            <Text fontSize='large'>{name}</Text>
            <Text className={s.catalogItem__description}>{description}</Text>
            <Text fontSize='large'>{`${price} руб.`}</Text>
        </div>
    </div>
}

export default CatalogItem;