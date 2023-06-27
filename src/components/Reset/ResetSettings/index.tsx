import React from "react";
import commonStyles from './../../../common/styles/style.module.scss'
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppDispatch } from "../../../hooks/redux";


export const ResetSettings = () => {
    const dispatch = useAppDispatch()

    const handleClick = () => {
        localStorage.clear()
        dispatch(appSlice.actions.removeAllSettings())
    }

    return  <button className={commonStyles.button}
                 onClick={handleClick}
    
    > Reset settings</button>
}