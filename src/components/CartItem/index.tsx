import React, { FC, useState } from "react";
import s from './cartItem.module.scss'
import { Counter, Icon, Input, Text } from "../../ui";
import { Action } from "../../pages";

interface ICartItemProps{
    img: string;
    name: string;
    description: string;
    price: number;
    count: number;
    onAdd: ()=>void;
    onDelete:()=>void;
}

const CartItem:FC<ICartItemProps> = ({img, name, description, price, count, onAdd, onDelete})=>{
    const [isPointerOn, setPointerOn] = useState(false);
    const switchPointerOn=()=>{setPointerOn(!isPointerOn)}

    return <div className={s.cartItem}
                onPointerEnter={switchPointerOn}
                onPointerLeave={switchPointerOn}
            >
        <div 
            className={s.cartItem__img}
        >
           <img src={require(`../../constants/MOCK_PICTURES/${img}`)}
                height={173} 
                className={s.cartItem__imgContent}
                />
            {isPointerOn && <div >
            </div>}
        </div >
        <div className={s.cartItem__atr}>
            <Text fontSize='large'>{name}</Text>
            <Text className={s.cartItem__description}>{description}</Text>
            <Text fontSize='large'>{`${price} руб.` }</Text>
        </div>
        <div>
            <Counter value={count} onDecrease={onDelete} onIncrease={onAdd} />
        </div>
    </div>
}

export default CartItem;