import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import style from './styles.module.scss';
import { useAppSelector } from "../../hooks/redux";

type BasketIconProps = {
    openModal: (active: boolean)=> void
}

export const BasketIcon = ({openModal}: BasketIconProps) => {

    return <div className={style.container} onClick={()=> {openModal(true)}}>
        <Counter />
        <FontAwesomeIcon icon={faShoppingCart } color='#C0AA83' size="2x"/>
    </div>
}

const Counter = () => {
    const {basket} = useAppSelector(state=> state.appReducer)
    return <div className = {style.counter}>
     <span>{basket.length}</span>
    </div>
}