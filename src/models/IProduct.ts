export interface IProduct {
    icon_url: string,
    id : string,
    title : string,
    count: number,
    description: string,
    price: number,
    arabica: '60%' | '70%' | '80%' | '90%' | '100%',
    brand: 'Lavazza' | 'Barista' | 'Dallmayr' | 'Boggi',
    roasting: 'light' | 'medium' | 'medium-dark' | 'dark',
    isPopular: boolean
}