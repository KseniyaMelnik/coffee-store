import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { IProduct } from '../../models/IProduct';
import style from "./styles.module.scss"
import { appSlice } from "../../store/reducers/AppSlice";
import commonStyles from "./../../common/styles/style.module.scss"



type BasketProps = {
    active: boolean,
    setActive: (active: boolean) => void
}


export const Basket = ({active, setActive}: BasketProps) => {
    const {basket} = useAppSelector(state => state.appReducer)

    const sum = basket.reduce((a,b) => a + b.price, 0).toFixed(2)

    return (
        <div className={style.container} style={active ? {display: 'flex'} : {display: 'none'}}
                        onClick={() => setActive(false)}>
            <div className={style.content} onClick={e => e.stopPropagation()}>
                {basket.map(el=> <Item key={el.id} product={el}/>)}
                {basket.length>0 
                && <div className={style.payment}>
                <div className={style.sum}>{sum}</div>
                <button disabled className={commonStyles.button}>proceed to pay</button>
                </div>
                }
                {basket.length === 0 && <p>You have not selected any items</p>}

            </div>
        </div>
    )

}

type ItemProps = {
    product: IProduct
}

const Item = ({product}:ItemProps) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(appSlice.actions.removeProductFromBasket(product))
    }
    
    return <div className={style.item}>
        <div className={style.image}>
            <img src={product.icon_url} alt={product.title} />
        </div>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <div className={style.delete} onClick={handleClick}> X </div>
    </div>
}