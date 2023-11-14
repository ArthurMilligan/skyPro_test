import React, { useReducer } from "react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../components";
import Catalog from "./Catalog";
import Cart from "./Cart";

export type State = {
    id:string;
    name:string;
    description:string;
    count:number;
    price: number;
    img:string;
  }[];
  
export type Action = {
    type: 'addItem' | 'deleteItem' | 'clearCart';
    payload?: any;
  };

const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;
    switch (type) {
    case 'addItem':
        const newItemIndex = state.findIndex((item)=> item.id===payload.id);
        
        if(~newItemIndex){
            const newState=[...state];
            newState[newItemIndex].count+=1;
            return newState;
        }
        return [ ...state, {...payload, count:1} ];
    case 'deleteItem':
        const index = state.findIndex((item)=> item.id===payload.id);
        if(~index){
            const newState=[...state];
            newState[index].count-=1;
            if(newState[index].count!==0){
                return newState;
            }
        }
        return state.filter((item)=>item.id!==payload.id);
    case 'clearCart':
        return [];    
      default:
        return state;
    }
};

const Routing:FC = () => {
    const [store, dispatch]  = useReducer(reducer, []);
    return(
        <div>
            <Navigation/>
            <Routes>
                <Route
                    path='/'
                    element={<Catalog dispatch={dispatch}/>}
                />
                <Route
                    path='/cart'
                    element={<Cart store={store} dispatch={dispatch}/>}
                />
            </Routes>
        </div>
    )
}

export default Routing;