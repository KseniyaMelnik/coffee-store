import React, { useEffect, useState } from "react";
import style from "./styles.module.scss"
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type RangeFilterProps = {
  numbers: number[],
  filteredValue: number[],
  handleChange: ActionCreatorWithPayload<number[]>,
  title: string
}


export const RangeFilter = ({ numbers, title, filteredValue, handleChange }: RangeFilterProps) => {


  const dispatch = useAppDispatch()
  const {isReset} = useAppSelector(state => state.appReducer)

  const min = Math.floor(Math.min(...numbers))
  const max = Math.ceil(Math.max(...numbers))

  const [value, setValue] = useState<number[]>([min, max])

  useEffect(() => {
    isReset && setValue([min, max])
  }, [isReset])
  useEffect (()=>{
    if (filteredValue.length) {
      setValue(filteredValue)
    }
  }, [filteredValue])
  

  return <div>
    <h2 className={style.title}>{title}</h2>
    <div className={style.container}>
    <div className={style.count}>{value[0]}</div>
    <RangeSlider
      aria-label={['min', 'max']}
      min={min} max={max}
      defaultValue={[min, max]}
      onChangeEnd={(val) => dispatch(handleChange(val))}
      onChange={(val) => setValue(val)}
      value={value}
      width="250px"
      height="40px"
    >
      <RangeSliderTrack
        height="10px"
        borderRadius="5px"
        border="1px solid #C0AA83"
        bg="#FFFFFF"
      >
        <RangeSliderFilledTrack
          bg="#C0AA83"
          height="10px"
        />
      </RangeSliderTrack>
      <RangeSliderThumb index={0}
        w="20px"
        h="20px"
        borderColor="gray"
        border="1px solid"
        borderRadius="50%"
        bg="#C0AA83"
      />
      <RangeSliderThumb index={1}
        w="20px"
        h="20px"
        borderColor="gray"
        border="1px solid"
        borderRadius="50%"
        bg="#C0AA83"
      />
    </RangeSlider>
    <div className={style.count}>{value[1]}</div>
  </div>
  </div>
}