import React, { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { ArabicaFilter } from "../ValueFilter/ArabicaFilter";
import { BrandFilter } from "../ValueFilter/BrandFilter";
import { PriceFilter } from "../RangeFilter/PriceFilter";
import { Product } from "../Product";
import { QuantityFilter } from "../RangeFilter/QuantityFilter";
import { RoastingFilter } from "../ValueFilter/RoastingFilter";
import commonContainer from './../../common/styles/style.module.scss'
import style from './styles.module.scss';
import { appSlice } from "../../store/reducers/AppSlice"
import { PopularFilter } from "../ValueFilter/PopularFilter";
import { Sort } from "../Sort";
import { ResetFilters } from "../Reset/ResetFilters";
import { ResetSettings } from "../Reset/ResetSettings";



export const Main = () => {

    const dispatch = useAppDispatch()
    const {filters, sort, basket, filteredProducts} = useAppSelector(state=> state.appReducer)

    useEffect(()=>{
        const savedFilters = localStorage.getItem('filters');
        const savedSort = localStorage.getItem('sort')
        const savedBasket = localStorage.getItem('basket')
        if (savedFilters) {
         dispatch(appSlice.actions.setFilters(JSON.parse(savedFilters)))
        }
        if (savedSort) {
            dispatch(appSlice.actions.setSort(JSON.parse(savedSort)))
           }
        if (savedBasket) {
            dispatch(appSlice.actions.setBasket(JSON.parse(savedBasket)))
        }
    }, [])

    useEffect(()=>{
      dispatch(appSlice.actions.getFilteredProducts())
      dispatch(appSlice.actions.getSortedProducts())
      localStorage.setItem('filters', JSON.stringify(filters))
      localStorage.setItem('sort', JSON.stringify(sort))
      localStorage.setItem('basket', JSON.stringify(basket))
    }, [filters, sort, basket])

    return <main id="main" className = {`${commonContainer.container} ${style.container}`}>
        <div className={style.filters}>
            <PriceFilter />
            <QuantityFilter />
            <BrandFilter />
            <RoastingFilter />
            <ArabicaFilter />
            <PopularFilter />
            <div className={style.reset}>
            <ResetFilters />
            <ResetSettings />
            </div>
        </div>

        <div className={style.productsContainer}>
        <Sort />
        <div className={style.products}>
        {filteredProducts.length !== 0 
        ? filteredProducts.map((el)=> <Product key={el.id} description={el.description} count={el.count}
            icon_url={el.icon_url} id={el.id}
            price={el.price} title={el.title} arabica={el.arabica} brand={el.brand} roasting={el.roasting} isPopular={el.isPopular}/>)
        : 
        <div className={style.message}> Sorry, no matches were found. Try changing your search parameters.</div>
        }        
        </div>
        </div>
    </main>
}