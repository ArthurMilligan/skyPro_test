import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { Button, Input, Text } from "../../ui";
import inputValidator from "./utils/inputValidator";
import s from "./order.module.scss"
import { State } from "../../pages";

export interface IValidateDataArgs{
    name:"name"|"phone"|"adress"
}

const Order:FC<{store: State, clearCart:()=>void}> = ({store, clearCart}) => {
    const [state, setState] = useState({
        values: {
            name: "",
            adress: "",
            phone: "",
        },
        errors: {
            name: "",
            adress: "",
            phone: "",
        }
    });
    const totalValue = store.reduce((accum, cur)=>accum + cur.count*cur.price,0)

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            values: {
                ...state.values,
                [name]: value
            }
        });
    }

    const validateData = ({ name }: IValidateDataArgs) => {
        setState({
            ...state,
            errors: {
                ...state.errors,
                [name]: inputValidator({ type: name, value: (state.values[name])
                })
            }
        });
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log({personalData:state.values, orderData: store});
        setState(
            {
                values: {
                    name: "",
                    adress: "",
                    phone: "",
                },
                errors: {
                    name: "",
                    adress: "",
                    phone: "",
                }
            }
        )
        clearCart();
    }
    const hasError = Object.values(state.errors).some(Boolean) || Object.values(state.values).some((val)=>val.length===0)

    return(
        <form className={s.form} onSubmit={handleSubmit}>
            <Text fontSize="large" className={s.form__header}>Оформление заказа</Text>
            <div className={s.form__element}>
                <Input 
                    className={s.form__input}
                    value={state.values.name} 
                    onChange={handleChange} 
                    error={state.errors.name}
                    name="name"
                    placeholder="Имя"
                    onBlur={() => validateData({ name: "name" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    className={s.form__input}
                    value={state.values.phone} 
                    onChange={handleChange} 
                    error={state.errors.phone}
                    name="phone"
                    type="tel"
                    placeholder="Телефон"
                    onBlur={() => validateData({ name: "phone" })}
                />
            </div>
            <div className={s.form__element}>
                <Input 
                    className={s.form__input}
                    value={state.values.adress} 
                    onChange={handleChange} 
                    error={state.errors.adress}
                    name="adress"
                    placeholder="Адрес доставки"
                    onBlur={() => validateData({ name: "adress" })}
                />
            </div>
            <Text fontSize="large">
                {`Итого: ${totalValue} руб.`}
            </Text> 
            <Button className={s.form__saveButton} type="submit" disabled={hasError}>
                    Оформить заказ
            </Button>

        </form>
    )
}

export default Order;