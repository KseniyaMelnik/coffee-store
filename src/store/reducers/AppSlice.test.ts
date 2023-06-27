import appSlice, { AppState } from "./AppSlice";
import {addProductToBasket, 
    addArabicaFilter, 
    addBrandFilter,
    getFilteredProducts,
    addRoastingFilter,
    setPriceFilter,
    setCountFilter,
    setOnlyPopularFilter,
    setSortByNameA,
    getSortedProducts,
    setSortByPriceLowest,
    setSearchValue
} from "./AppSlice"

let startState: AppState;

beforeEach(() => {
    startState = { 
        products: [
            {
                icon_url: "https://caravan.by/image/cache/catalog/nnnjnj/risunok1-1200x800.jpg", 
                count: 3, description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '1', 
                title: "Espresso Italiano", 
                price: 6.53, arabica: '100%', 
                brand: "Lavazza", 
                roasting: "medium-dark", 
                isPopular: false
            },
            {
                icon_url: "https://caravan.by/image/cache/catalog/products/lavazza/kofe-lavazza-qualita-oro-molotij-zh_b-250-g-1200x800.jpg", 
                count: 2,  
                description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '2', 
                title: "Qualita Oro", 
                price: 10.2, 
                arabica: '100%', 
                brand: "Lavazza", 
                roasting: "medium", 
                isPopular: true
            },
            {
                icon_url: "https://caravan.by/image/cache/catalog/lavazza/lavazza_cremaegusto250g-1200x800.png", 
                count: 5,  
                description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '3', 
                title: "Crema E Gusto", 
                price: 4.35, 
                arabica: '90%', 
                brand: "Dallmayr", 
                roasting: "dark", 
                isPopular: true
            }
        ],
        filteredProducts: [
            {
                icon_url: "https://caravan.by/image/cache/catalog/nnnjnj/risunok1-1200x800.jpg", 
                count: 3, description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '1', 
                title: "Espresso Italiano", 
                price: 6.53, arabica: '100%', 
                brand: "Lavazza", 
                roasting: "medium-dark", 
                isPopular: false
            },
            {
                icon_url: "https://caravan.by/image/cache/catalog/products/lavazza/kofe-lavazza-qualita-oro-molotij-zh_b-250-g-1200x800.jpg", 
                count: 2,  
                description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '2', 
                title: "Qualita Oro", 
                price: 10.2, 
                arabica: '100%', 
                brand: "Lavazza", 
                roasting: "medium", 
                isPopular: true
            },
            {
                icon_url: "https://caravan.by/image/cache/catalog/lavazza/lavazza_cremaegusto250g-1200x800.png", 
                count: 5,  
                description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
                id: '3', 
                title: "Crema E Gusto", 
                price: 4.35, 
                arabica: '90%', 
                brand: "Dallmayr", 
                roasting: "dark", 
                isPopular: true
            }
        ],
        basket: [],
    filters: {
        count: [],
        price: [],
        arabica: [],
        brand: [],
        roasting: [],
        onlyPopular: false,
        searchValue: '',
    },
    sort: {
        sortByNameA: true,
        sortByNameZ: false,
        sortByPriceLowest: false,
        sortByPriceHighest: false
    },
    isReset: false,
    isLoading: false,
    error: ''
    }
    
})

test('filter by brand should be added correctly', () => {
   let endState = appSlice(startState, addBrandFilter("Dallmayr"))
   endState = appSlice(endState, getFilteredProducts())
   expect(endState.filteredProducts.length).toBe(1)
  });

  test('filter for arabica should be added correctly', () => {
    let endState = appSlice(startState, addArabicaFilter("90%"))
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts).toEqual([
        {
            icon_url: "https://caravan.by/image/cache/catalog/lavazza/lavazza_cremaegusto250g-1200x800.png", 
            count: 5,  
            description: "Duis et aliquam orci. Vivamus augue quam, sollicitudin quis bibendum quis, eleifend vitae velit.", 
            id: '3', 
            title: "Crema E Gusto", 
            price: 4.35, 
            arabica: '90%', 
            brand: "Dallmayr", 
            roasting: "dark", 
            isPopular: true
        }
    ]);
   });

   test('filter by roasting should be added correctly', () => {
    let endState = appSlice(startState, addRoastingFilter("dark"))
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts.length).not.toBe(2)
   });

   test('the price filter should work correctly', () => {
    let endState = appSlice(startState, setPriceFilter([1,2]))
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts.length).toBe(0)
   });

   test('the count filter should work correctly', () => {
    let endState = appSlice(startState, setCountFilter([1,6]))
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts.length).toBe(3)
   });

   test('the filter for popular products should work correctly', () => {
    let endState = appSlice(startState, setOnlyPopularFilter())
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts.length).toBe(2)
   });
   
   test('adding items to cart should work correctly', () => {
    const endState = appSlice(startState, addProductToBasket(startState.products[0]))
    expect(endState.basket.length).toBe(1)
   });

   test('alphabetical sorting should work correctly', () => {
    let endState = appSlice(startState, setSortByNameA())
    endState = appSlice(endState, getSortedProducts())
    expect(endState.filteredProducts[0].id).toBe('3')
   });

   test('sorting by price should work correctly', () => {
    let endState = appSlice(startState, setSortByPriceLowest())
    endState = appSlice(endState, getSortedProducts())
    expect(endState.filteredProducts[0].id).toBe('3')
   });

   test('the search should work correctly', () => {
    let endState = appSlice(startState, setSearchValue("Espresso"))
    endState = appSlice(endState, getFilteredProducts())
    expect(endState.filteredProducts.length).toBe(1)
   });
