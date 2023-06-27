import React from "react";
import { RangeFilter } from "../index";
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppSelector } from "../../../hooks/redux";


export const PriceFilter = () => {
    const {filters, products} = useAppSelector(state=>state.appReducer)

    const numbers = products.map(p => p.price)
    
    const filteredValues = filters.price
    return  <RangeFilter title={'Filter by price'} numbers={numbers} handleChange={appSlice.actions.setPriceFilter} filteredValue={filteredValues}/>
    
}