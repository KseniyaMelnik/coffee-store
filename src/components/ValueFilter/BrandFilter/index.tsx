import React from "react";
import { ValueFilter } from "../index";
import { appSlice } from "../../../store/reducers/AppSlice"
import {useAppSelector } from "../../../hooks/redux";

 
const BRANDS = ['Lavazza', 'Barista', 'Dallmayr', 'Boggi']

export const BrandFilter = () => {
    const {filters} = useAppSelector(state=> state.appReducer)
    const filteredBrands = filters.brand

    return <div>

        <ValueFilter title="Brand" values={BRANDS} filteredValues={filteredBrands}
        onFilterChange={appSlice.actions.addBrandFilter} 
        onFilterRemove={appSlice.actions.removeBrandFilter}
        />
    </div>
}