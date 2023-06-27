import React from "react";
import { ValueFilter } from "../index";
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppSelector } from "../../../hooks/redux";

const AMOUNT_OF_ARABICA = ['60%', '70%', '80%', '90%', '100%']

export const ArabicaFilter = () => {
    const {filters} = useAppSelector(state=> state.appReducer)
    const filteredValues = filters.arabica

    return <div>
        <ValueFilter title="Amount of Arabica"
            values={AMOUNT_OF_ARABICA}
            onFilterChange={appSlice.actions.addArabicaFilter} 
            onFilterRemove={appSlice.actions.removeArabicaFilter}
            filteredValues={filteredValues}
            />
    </div>
}