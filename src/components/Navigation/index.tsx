import React, { useRef } from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from './navigation.module.scss'
import { Icon, Text } from "../../ui";

const Navigation:FC = ()=>{
    const windowWidth = useRef(window.innerWidth);
    
    return(
        <div className={s.navigation}>
            <Text fontSize="extraLarge">
                Интерьер.
            </Text> 
            <ul className={s.navigation__list}>
                <li className={s.navigation__element}>
                    <NavLink
                        to='/catalog'
                        className={({ isActive }) =>
                            `${s.navigation__link} ${isActive?s.navigation__link_active:''}`
                        }
                    >
                        {
                            windowWidth.current>1000
                                ?<Text>Каталог</Text>
                                :<Icon name='catalog' size={24}/>
                        }
                    </NavLink>
                </li>
                <li className={s.navigation__element}>
                    <NavLink
                        to='/cart'
                        className={({ isActive }) =>
                            `${s.navigation__link} ${isActive?s.navigation__link_active:''}`
                        }
                    >
                        {
                            windowWidth.current>1000
                                ?<Text>Корзина</Text>
                                :<Icon name='menuCart' size={24}/>
                        }
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;