import React from "react";
import { ValueFilter } from "../index";
import { appSlice } from "../../../store/reducers/AppSlice"
import { useAppSelector} from "../../../hooks/redux";

const ROASTING_TYPES = ['light', 'medium', 'medium-dark', 'dark']

export const RoastingFilter = () => {

    const {filters} = useAppSelector(state=> state.appReducer)
    const filteredValues = filters.roasting
    return <div>
        <ValueFilter title="Choose your roasting"
                     values={ROASTING_TYPES}
                     onFilterChange={appSlice.actions.addRoastingFilter} 
                     onFilterRemove={appSlice.actions.removeRoastingFilter}
                     filteredValues={filteredValues}
        />
    </div>
}