import React, {FC, useState} from 'react';
import { CartItem, CatalogItem, Order } from '../../components';
import s from './cart.module.scss'
import { Action, State } from '..';
import { Button, Text } from '../../ui';
import { useNavigate } from 'react-router-dom';


interface ICatalogProps{
    dispatch:({type, payload}:Action)=>void;
    store:State;
}

const Cart:FC<ICatalogProps>= ({dispatch, store}) =>{
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/catalog`; 
        navigate(path);
    }
    return <div className={s.cart}>
        <div className={s.cart__container}>
            {!store.length && <Text className={s.cart__headers}>Корзина пуста</Text>}
            {!!store.length && <div className={s.cart__headers}>
                <Text>Товар</Text>
                <Text>К-во</Text>
            </div>}
            {store.map((item)=><CartItem 
                key={item.id}
                name={item.name} 
                price={item.price}
                description={item.description}
                img={item.img}
                count={item.count}
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
                onDelete={()=>dispatch({type:'deleteItem', payload:{id:item.id}})}
                />
            )}
            <div className={s.cart__buttonsContainer}>
                <Button className={s.cart__button} onClick={routeChange}>Продолжить покупки</Button>  
                {!!store.length && <Button className={s.cart__button} onClick={()=>dispatch({type:'clearCart'})}>Очистить корзину</Button>}
            </div>
        </div>
        {!!store.length && <Order store={store} clearCart={()=>dispatch({type:'clearCart'})}/>}
    </div>
}

export default Cart;