import React, {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { appSlice } from "../../../store/reducers/AppSlice"
import style from "./../styles.module.scss"

export const PopularFilter = () => {


        const dispatch = useAppDispatch()
        const {isReset, filters} = useAppSelector(state=> state.appReducer)
        const savedFilter = filters.onlyPopular
    
        useEffect(()=>{
            isReset && setChecked(false)
        }, [isReset])

        useEffect(()=>{
            setChecked(savedFilter)
        }, [savedFilter])
    
        const [checked, setChecked] = useState(false)
     
        const onChangeHandler = () => {
            !checked? dispatch(appSlice.actions.setOnlyPopularFilter()) : dispatch(appSlice.actions.removeOnlyPopularFilter())
        }
    
        return <label className={style.checkboxBtn}>
                             <input  type="checkbox" onChange={onChangeHandler}
                             checked={checked}
                             />
                             <span> Showing only popular </span>
                          </label>
    
}