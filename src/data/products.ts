import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 1,
    name: 'Ваза «Creamy»',
    category: 'Вазы',
    price: 5500,
    image: '/images/catalog/vase-creamy.jpg',
    color: 'Бежевый'
  },
  {
    id: 2,
    name: 'Ваза «Ancient»',
    category: 'Вазы',
    price: 5700,
    image: '/images/catalog/vase-ancient.jpg',
    color: 'Бежевый'
  },
  {
    id: 3,
    name: 'Ваза «Antique»',
    category: 'Вазы',
    price: 6300,
    image: '/images/catalog/vase-antique.jpg',
    color: 'Серый'
  },
  {
    id: 4,
    name: 'Ваза «Line»',
    category: 'Вазы',
    price: 4000,
    image: '/images/catalog/vase-line.jpg',
    color: 'Белый'
  },
  {
    id: 5,
    name: 'Ваза «Creamy black»',
    category: 'Вазы',
    price: 5500,
    image: '/images/catalog/vase-creamy-black.jpg',
    color: 'Черный'
  },
  {
    id: 6,
    name: 'Ваза «Totem»',
    category: 'Вазы',
    price: 4000,
    image: '/images/catalog/vase-totem.jpg',
    color: 'Белый'
  },
  {
    id: 7,
    name: 'Ваза «Vase A»',
    category: 'Вазы',
    price: 6000,
    image: '/images/catalog/vase-a.jpg',
    color: 'Бежевый'
  },
  {
    id: 8,
    name: 'Ваза «Glaze vase»',
    category: 'Вазы',
    price: 4600,
    image: '/images/catalog/vase-glaze.jpg',
    color: 'Серый'
  }
]

export const categories = ['Вазы', 'Чашки', 'Тарелки', 'Кружки', 'Блюдца']
export const colors = ['Черный', 'Белый', 'Серый', 'Бежевый']
export const priceRanges = ['До 2000 руб.', 'До 4000 руб.', 'До 6000 руб.', 'От 6000 руб.'] 