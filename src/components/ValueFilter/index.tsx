import { ActionCreatorWithPayload} from '@reduxjs/toolkit';
import React, { ChangeEvent, useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import style from './styles.module.scss';


type ValueFilterProps = {
    title: string,
    values: string[],
    filteredValues: string[],
    onFilterChange: ActionCreatorWithPayload<string>,
    onFilterRemove: ActionCreatorWithPayload<string>
}

export const ValueFilter = ({ filteredValues, onFilterRemove, onFilterChange, values, title }: ValueFilterProps) => {

    return <div>
        <fieldset className={style.container}>
            <legend>{`${title}:`}</legend>
            {values &&
                values.map((el) => {
                    return <Filter key={el} el={el}
                        onFilterChange={onFilterChange}
                        onFilterRemove={onFilterRemove}
                        filteredValues={filteredValues} />
                })
            }

        </fieldset>
    </div>
}

type FilterProps = {
    onFilterRemove: ActionCreatorWithPayload<string>,
    onFilterChange: ActionCreatorWithPayload<string>,
    el: string,
    filteredValues: string[]
}

const Filter = ({ filteredValues, onFilterRemove, onFilterChange, el }: FilterProps) => {

    const dispatch = useAppDispatch()
    const { isReset } = useAppSelector(state => state.appReducer)

    useEffect(() => {
        isReset && setChecked(false)
    }, [isReset])

    useEffect(() => {
        setChecked(filteredValues?.includes(el))
    }, [filteredValues])

    const [checked, setChecked] = useState(filteredValues?.includes(el))

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            !checked ? dispatch(onFilterChange(e.currentTarget.value)) : dispatch(onFilterRemove(e.currentTarget.value))
    }

    return <label key={el}
        className={style.checkboxBtn}>
        <input value={el} type="checkbox" onChange={onChangeHandler}
            checked={checked}
        />
        <span>{el}</span>
    </label>

}

