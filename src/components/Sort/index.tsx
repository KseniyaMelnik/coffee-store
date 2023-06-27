import React, {ChangeEvent} from "react";
import style from './styles.module.scss';
import { appSlice } from "../../store/reducers/AppSlice"
import { useAppDispatch, useAppSelector } from "../../hooks/redux";


export const Sort = () => {
    const dispatch = useAppDispatch()
    const {sort} = useAppSelector(state => state.appReducer)
    

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
      e.currentTarget.value === "NameA" && dispatch(appSlice.actions.setSortByNameA())
      || e.currentTarget.value === "NameZ" && dispatch(appSlice.actions.setSortByNameZ())
      || e.currentTarget.value === "PriceLowest" && dispatch(appSlice.actions.setSortByPriceLowest())
      || e.currentTarget.value === "PriceHighest" && dispatch(appSlice.actions.setSortByPriceHighest())
      dispatch(appSlice.actions.getFilteredProducts())
    }

    const defaultValue = sort.sortByNameA
    ? "NameA"
    : sort.sortByNameZ 
    ? "NameZ"
    : sort.sortByPriceHighest 
    ? "PriceHighest"
    :  "PriceLowest"


    return  <div className={style.container}>
        <select className={style.select} name="sort" onChange={onChange} value={defaultValue}>
            <option className={style.option} value="NameA">Name (A - Z)</option>
            <option className={style.option} value="NameZ">Name (Z - A)</option>
            <option className={style.option} value="PriceLowest">Price (Lowest)</option>
            <option className={style.option} value="PriceHighest">Price (Highest)</option>
        </select>
    </div>
} 