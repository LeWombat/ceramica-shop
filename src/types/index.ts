export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  color?: string
}

export type Category = 'Вазы' | 'Чашки' | 'Тарелки' | 'Кружки' | 'Блюдца'
export type Color = 'Черный' | 'Белый' | 'Серый' | 'Бежевый'
export type PriceRange = 'До 2000 руб.' | 'До 4000 руб.' | 'До 6000 руб.' | 'От 6000 руб.' 