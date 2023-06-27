import React from "react";
import { RangeFilter } from "../index";
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppSelector } from "../../../hooks/redux";

export const QuantityFilter = () => {
    const {filters, products} = useAppSelector(state=>state.appReducer)
    const filteredValues = filters.count
    
    const numbers = products.map(p => p.count) 
    return  <RangeFilter title ={'Stock quantity'} numbers={numbers} handleChange={appSlice.actions.setCountFilter} filteredValue={filteredValues}/>
    
}