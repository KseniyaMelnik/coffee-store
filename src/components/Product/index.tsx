import React, { useEffect, useState, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProduct } from "../../models/IProduct";
import style from './styles.module.scss';
import { appSlice } from "../../store/reducers/AppSlice";
import commonStyle from "../../common/styles/style.module.scss"



export const Product = memo((product: IProduct) => {

    const dispatch = useAppDispatch()
    const {basket} = useAppSelector(state => state.appReducer)

    useEffect(()=>{
        const index = basket.findIndex(el => el.id === product.id);
        index > -1 ? setInBasket(true) : setInBasket(false)
        }, [basket])

    const [isInBasket, setInBasket] = useState(false)

    const handleClick = ()=>{
        isInBasket
        ? dispatch(appSlice.actions.removeProductFromBasket(product)) 
        : basket.length<20 
            ? dispatch(appSlice.actions.addProductToBasket(product))
            : alert('Sorry, all the slots are filled')
    }

    return  <div className={style.container}>
       <img className={style.image} src={product.icon_url} alt={product.title} />
       <h3 className={style.title}>{product.title}</h3>
       <p className={style.description}>{product.description}</p>
       <p className={style.price}>{`$${product.price}`}</p>
       <div className={commonStyle.button} 
       onClick={handleClick}>{isInBasket? 'Remove from basket': 'Add to basket'}</div>
    </div>
})