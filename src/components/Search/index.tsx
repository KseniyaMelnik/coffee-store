import React, { useState, useEffect, ChangeEvent} from "react";
import style from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appSlice } from "../../store/reducers/AppSlice";


export const Search = () => {

    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const {isReset} = useAppSelector(state=> state.appReducer)

    useEffect (()=> {
      isReset && setValue('')
    }, [isReset])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
      dispatch(appSlice.actions.setSearchValue(e.currentTarget.value))
    }

    const onClick = () => {
      setValue('')
      dispatch(appSlice.actions.removeSearchValue())
    }

    return <div className={style.container}>
        <input type='text'
        placeholder="Search"
        autoFocus
        value={value}
        onChange={onChange}
        />
        {value ==='' 
        ? <FontAwesomeIcon icon={faSearch} color='#C0AA83'/>
        : <FontAwesomeIcon 
        className={style.xMark}
        icon={faCircleXmark} 
        color='#C0AA83'
        onClick={onClick}
        />
    }
  </div>
}