const VARIABLE__SPACE = {
  PIZZAS__TYPE: {
    ru: ['тонкое', 'традиционное', 'толстое'],
    ukr: ['тонке', 'традиційне', 'товсте'],
  },

  PIZZAS__SIZES: [26, 30, 40],

  CURRENT__CURRENCY: {
    ru: '₽',
    ukr: '₴',
  },

  LANGUAGE__SEARCH: {
    ru: 'поиск пицы...',
    ua: 'пошук пици...',
  },

  SORT__NAME_RU: [
    { name: 'популярности (A-Z)', sortProperty: 'rating' },
    { name: 'популярности (Z-A)', sortProperty: '-rating' },
    { name: 'цене (A-Z)', sortProperty: 'price' },
    { name: 'цене (Z-A)', sortProperty: '-price' },
    { name: 'алфавиту (A-Z)', sortProperty: 'category' },
    { name: 'алфавиту (Z-A)', sortProperty: '-category' },
  ],
  SORT__NAME_UA: [
    { name: 'популярності (A-Z)', sortProperty: 'rating' },
    { name: 'популярності (Z-A)', sortProperty: '-rating' },
    { name: 'ціні (A-Z)', sortProperty: 'price' },
    { name: 'ціні (Z-A)', sortProperty: '-price' },
    { name: 'алфавіту (A-Z)', sortProperty: 'category' },
    { name: 'алфавіту (Z-A)', sortProperty: '-category' },
  ],
  CART :{
      name:{
          ru:'Корзина',
          ua:'Кошик'
      },
      clear:{
        ru:'Очистити кошик',
        ua:'Очистить корзину'
    },
  }
};

export const {
  PIZZAS__TYPE,
  PIZZAS__SIZES,
  CURRENT__CURRENCY,
  LANGUAGE__SEARCH,
  SORT__NAME_RU,
  SORT__NAME_UA,
  CART,
} = VARIABLE__SPACE;
