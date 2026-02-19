import type { Pie } from '@/lib/types'

// Re-export Pie type for backwards compatibility
export type { Pie } from '@/lib/types'

export const pies: Pie[] = [
  // ── FRUIT PIES ────────────────────────────────────────────────────────────
  {
    id: 'apple',
    name: 'Apple Pie',
    category: 'fruit',
    description:
      'Traditional double crust pie filled with tender sliced apples, cinnamon, & sugar.',
    price: { whole: 22, slice: 5 },
    image: '/images/pies/menu/apple-crumble-1.jpg',
    available: true,
    canFreeze: true,
    note: 'Add a ring of cream for $1.00',
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },
  {
    id: 'peach',
    name: 'Peach Pie',
    category: 'fruit',
    description:
      'Double crust pie filled with tender sliced peaches & mixed with a sweet peach filling.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/peach-pie.jpg',
    imagePosition: 'center 80%',
    available: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },
  {
    id: 'cherry',
    name: 'Cherry Pie',
    category: 'fruit',
    description:
      'Double crust pie filled with whole tart cherries & mixed with a sweet cherry filling.',
    price: { whole: 20, slice: 5 },
    image: '/images/pies/menu/cherry-lattice-pie.jpg',
    imagePosition: 'center 80%',
    available: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },
  {
    id: 'pecan',
    name: 'Pecan Pie',
    category: 'fruit',
    description: 'Traditional pecan pie filling with a top layer of caramelized pecan pieces.',
    price: { whole: 23, slice: 5 },
    image: '/images/pies/menu/pecan-pie.jpg',
    available: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },
  {
    id: 'pineapple',
    name: 'Pineapple Pie',
    category: 'fruit',
    description:
      'Double crust pie filled with pineapple chunks & mixed with sweet pineapple filling.',
    price: { whole: 20, slice: 5 },
    image: '/images/pies/menu/pineapple-pie.jpg',
    available: true,
    canFreeze: true,
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },
  {
    id: 'dutch-apple',
    name: 'Dutch Apple Pie',
    category: 'fruit',
    description:
      'Single crust apple pie topped with a crumbly cinnamon sugar strudel. Extra sweet with firmer apples.',
    price: { whole: 20, slice: 5 },
    image: '/images/pies/menu/apple-crumble-2.jpg',
    available: true,
    canFreeze: true,
    note: 'Unavailable Dec 24–25',
    shelfLife: '3 days room temp, 4–5 days refrigerated',
  },

  // ── CREAM PIES ────────────────────────────────────────────────────────────
  {
    id: 'strawberry-cream',
    name: 'Fresh Strawberry Cream Pie',
    category: 'cream',
    description:
      'Whole & halved fresh strawberries layered in a sweet strawberry glaze & topped with whipped cream.',
    price: { whole: 20, slice: 5 },
    image: '/images/pies/menu/strawberry-cream-pie.jpg',
    imagePosition: 'center 80%',
    available: true,
    shelfLife: '2–3 days refrigerated',
  },
  {
    id: 'banana-cream',
    name: 'Fresh Banana Cream Pie',
    category: 'cream',
    description: 'Fresh banana slices in a handmade vanilla pudding topped with whipped cream.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/banana-cream-pie.jpg',
    imagePosition: 'center 80%',
    available: true,
    shelfLife: '1–2 days refrigerated (best enjoyed same day once cut)',
  },
  {
    id: 'chocolate-cream',
    name: 'Chocolate Cream Pie',
    category: 'cream',
    description: 'Creamy handmade dark chocolate pudding filling topped with whipped cream.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/chocolate-swirl.jpg',
    available: true,
    shelfLife: '2–3 days refrigerated',
  },
  {
    id: 'coconut-cream',
    name: 'Coconut Cream Pie',
    category: 'cream',
    description:
      'Creamy handmade pudding filling mixed with flake coconut. Topped with whipped cream & sprinkled with golden toasted coconut flakes.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/coconut-cream-pie.jpg',
    imagePosition: 'center 80%',
    available: true,
    shelfLife: '2–3 days refrigerated',
  },
  {
    id: 'lemon-cream',
    name: 'Lemon Cream Pie',
    category: 'cream',
    description:
      'Sweet & refreshingly tart lemon filling made with fresh squeezed lemon juice & topped with whipped cream.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/lemon-cream-pie.jpg',
    available: true,
    shelfLife: '2–3 days refrigerated',
  },
  {
    id: 'key-lime',
    name: 'Key Lime Pie',
    category: 'cream',
    description:
      'Rich & creamy with a sweet & tart condensed milk base. Topped with a scalloped ring of whipped cream.',
    price: { whole: 21, slice: 5 },
    image: '/images/pies/menu/key-lime-pie.jpg',
    available: true,
    shelfLife: '2–3 days refrigerated',
  },

  // ── CHEESECAKES ───────────────────────────────────────────────────────────
  {
    id: 'cheesecake-strawberry',
    name: 'Cheesecake — Strawberry',
    category: 'cheesecake',
    description:
      'Creamy, rich & decadent cheesecake baked in our signature flaky crust, topped with sliced strawberries in a sweet glaze & a scalloped ring of whipped cream.',
    price: { whole: 23, slice: 5 },
    image: '/images/pies/menu/cheesecake-strawberry.jpg',
    available: true,
    shelfLife: '3–4 days refrigerated',
  },
  {
    id: 'cheesecake-cherry',
    name: 'Cheesecake — Cherry',
    category: 'cheesecake',
    description:
      'Creamy, rich & decadent cheesecake baked in our signature flaky crust, topped with whole cherries in a sweet glaze & a scalloped ring of whipped cream.',
    price: { whole: 23, slice: 5 },
    image: '/images/pies/menu/cheesecake-cherry.jpg',
    available: true,
    shelfLife: '3–4 days refrigerated',
  },
]

// Helper functions
export function getPiesByCategory(category: Pie['category']): Pie[] {
  return pies.filter((pie) => pie.category === category)
}

export function getFreezablePies(): Pie[] {
  return pies.filter((pie) => pie.canFreeze)
}

export function getPieById(id: string): Pie | undefined {
  return pies.find((pie) => pie.id === id)
}
