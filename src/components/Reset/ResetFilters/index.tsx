import React from "react";
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppDispatch } from "../../../hooks/redux";
import commonStyles from './../../../common/styles/style.module.scss'

export const ResetFilters = () => {
    const dispatch = useAppDispatch()

    return  <button className={commonStyles.button}
                 onClick={()=>dispatch(appSlice.actions.removeAllFilters())}
    
    > Reset filters</button>
}