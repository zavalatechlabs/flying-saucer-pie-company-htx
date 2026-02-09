export interface Pie {
  id: string
  name: string
  category: 'fruit' | 'cream' | 'cheesecake' | 'seasonal'
  description: string
  price: {
    whole: number
    slice: number
  }
  image: string
  available: boolean
  isVegan?: boolean
  isSpecial?: boolean
  canFreeze?: boolean
  shelfLife?: string
  ingredients?: string[]
}

export const pies: Pie[] = [
  // FRUIT PIES
  {
    id: 'apple',
    name: 'Apple Pie',
    category: 'fruit',
    description: 'Classic apple pie with tender apples and warm cinnamon spice',
    price: { whole: 24.99, slice: 4.99 },
    image: '/images/pies/apple.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'dutch-apple',
    name: 'Dutch Apple Pie',
    category: 'fruit',
    description: 'Apple pie topped with a buttery crumb topping',
    price: { whole: 26.99, slice: 5.49 },
    image: '/images/pies/dutch-apple.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'peach',
    name: 'Peach Pie',
    category: 'fruit',
    description: 'Sweet Georgia peaches in a flaky golden crust',
    price: { whole: 26.99, slice: 5.49 },
    image: '/images/pies/peach.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'cherry',
    name: 'Cherry Pie',
    category: 'fruit',
    description: 'Tart cherries balanced with just the right amount of sweetness',
    price: { whole: 28.99, slice: 5.99 },
    image: '/images/pies/cherry.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'pineapple',
    name: 'Pineapple Pie',
    category: 'fruit',
    description: 'Tropical pineapple filling in our signature crust',
    price: { whole: 26.99, slice: 5.49 },
    image: '/images/pies/pineapple.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'pecan',
    name: 'Pecan Pie',
    category: 'fruit',
    description: 'Texas pecans in a rich, buttery filling',
    price: { whole: 32.99, slice: 6.49 },
    image: '/images/pies/pecan.jpg',
    available: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'blackberry',
    name: 'Blackberry Pie',
    category: 'fruit',
    description: 'Juicy blackberries bursting with summer flavor',
    price: { whole: 28.99, slice: 5.99 },
    image: '/images/pies/blackberry.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  {
    id: 'blueberry',
    name: 'Blueberry Pie',
    category: 'fruit',
    description: 'Plump blueberries in a perfectly sweet filling',
    price: { whole: 28.99, slice: 5.99 },
    image: '/images/pies/blueberry.jpg',
    available: true,
    isVegan: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
  
  // CREAM PIES
  {
    id: 'strawberry-cream',
    name: 'Fresh Strawberry Cream',
    category: 'cream',
    description: 'Fresh strawberries with homemade whipped cream',
    price: { whole: 29.99, slice: 5.99 },
    image: '/images/pies/strawberry-cream.jpg',
    available: true,
    isVegan: true,
    shelfLife: '2-3 days refrigerated'
  },
  {
    id: 'banana-cream',
    name: 'Fresh Banana Cream',
    category: 'cream',
    description: 'Fresh banana slices layered with vanilla custard and whipped cream',
    price: { whole: 24.99, slice: 4.99 },
    image: '/images/pies/banana-cream.jpg',
    available: true,
    shelfLife: '1-2 days refrigerated (uncut), will brown once cut'
  },
  {
    id: 'chocolate-cream',
    name: 'Chocolate Cream',
    category: 'cream',
    description: 'Rich chocolate pudding topped with whipped cream',
    price: { whole: 24.99, slice: 4.99 },
    image: '/images/pies/chocolate-cream.jpg',
    available: true,
    shelfLife: '2-3 days refrigerated'
  },
  {
    id: 'lemon-cream',
    name: 'Lemon Cream',
    category: 'cream',
    description: 'Tangy lemon filling with a cloud of whipped cream',
    price: { whole: 24.99, slice: 4.99 },
    image: '/images/pies/lemon-cream.jpg',
    available: true,
    shelfLife: '2-3 days refrigerated'
  },
  {
    id: 'coconut-cream',
    name: 'Coconut Cream',
    category: 'cream',
    description: 'Creamy coconut custard topped with toasted coconut flakes',
    price: { whole: 26.99, slice: 5.49 },
    image: '/images/pies/coconut-cream.jpg',
    available: true,
    shelfLife: '2-3 days refrigerated'
  },
  
  // CHEESECAKES
  {
    id: 'cheesecake',
    name: 'Classic Cheesecake',
    category: 'cheesecake',
    description: 'New York style cheesecake with graham cracker crust',
    price: { whole: 34.99, slice: 6.99 },
    image: '/images/pies/cheesecake.jpg',
    available: true,
    shelfLife: '3-4 days refrigerated'
  },
  {
    id: 'key-lime',
    name: 'Key Lime Pie',
    category: 'cheesecake',
    description: 'Tart and creamy key lime filling with graham crust',
    price: { whole: 29.99, slice: 5.99 },
    image: '/images/pies/key-lime.jpg',
    available: true,
    shelfLife: '3-4 days refrigerated'
  },
  
  // SEASONAL PIES
  {
    id: 'pumpkin',
    name: 'Pumpkin Pie',
    category: 'seasonal',
    description: 'Traditional spiced pumpkin filling - perfect for fall!',
    price: { whole: 24.99, slice: 4.99 },
    image: '/images/pies/pumpkin.jpg',
    available: true,
    isSpecial: true,
    shelfLife: '3 days room temp, 4-5 days refrigerated'
  },
]

// Helper functions
export function getPiesByCategory(category: Pie['category']): Pie[] {
  return pies.filter(pie => pie.category === category)
}

export function getVeganPies(): Pie[] {
  return pies.filter(pie => pie.isVegan)
}

export function getFreezablePies(): Pie[] {
  return pies.filter(pie => pie.canFreeze)
}

export function getPieById(id: string): Pie | undefined {
  return pies.find(pie => pie.id === id)
}