import type { BusinessInfo } from '@/lib/types'
import { config } from '@/lib/config'

export const businessInfo: BusinessInfo = {
  name: config.site.name,
  tagline: 'Our pies are out of this world!',
  established: 1967,
  address: {
    street: '436 W Crosstimbers St',
    city: 'Houston',
    state: 'TX',
    zip: '77018'
  },
  phone: config.contact.phone,
  email: config.contact.email,
  
  hours: {
    regular: {
      tuesday: { open: '8:00 AM', close: '7:00 PM' },
      wednesday: { open: '8:00 AM', close: '7:00 PM' },
      thursday: { open: '8:00 AM', close: '7:00 PM' },
      friday: { open: '8:00 AM', close: '7:00 PM' },
      saturday: { open: '8:00 AM', close: '7:00 PM' },
      sunday: 'Closed',
      monday: 'Closed'
    },
    novemberDecember: {
      tuesday: { open: '7:00 AM', close: '7:00 PM' },
      wednesday: { open: '7:00 AM', close: '7:00 PM' },
      thursday: { open: '7:00 AM', close: '7:00 PM' },
      friday: { open: '7:00 AM', close: '7:00 PM' },
      saturday: { open: '7:00 AM', close: '7:00 PM' },
      sunday: 'Closed',
      monday: 'Closed'
    },
    specialHours: {
      'Dec 24': '7:00 AM - 5:00 PM',
      'Dec 25': 'CLOSED',
      'Dec 26': '8:00 AM - 7:00 PM',
      'Dec 27': '8:00 AM - 7:00 PM',
      'Dec 28': 'CLOSED',
      'Dec 29': 'CLOSED',
      'Dec 30': '8:00 AM - 7:00 PM',
      'Dec 31': '8:00 AM - 4:00 PM',
      'Jan 1-8': 'CLOSED'
    },
    thanksgivingWeek: {
      'Saturday, Nov 22': '7:00 AM - 7:00 PM',
      'Sunday, Nov 23': 'CLOSED',
      'Monday, Nov 24': '7:00 AM - 7:00 PM',
      'Tuesday, Nov 25': '7:00 AM - 7:00 PM',
      'Wednesday, Nov 26': '7:00 AM - 5:00 PM',
      'Thursday, Nov 27': 'CLOSED (Thanksgiving)'
    }
  },
  
  social: {
    facebook: config.social.facebook,
    instagram: config.social.instagram,
  },
  
  about: {
    short: 'The oldest family owned and operated bakery in Houston. Since 1967.',
    full: `The Flying Saucer Pie Company has proudly served fresh pies to our customers since 1967. We are the oldest family owned and operated bakery in Houston. Pies are our specialty, and they're the only thing we sell! We use the highest quality ingredients, fresh produce, fresh eggs, and we NEVER add any preservatives. We make the cream pies fresh every morning and bake daily - we will never serve you a pie that has been frozen. Our goal is to make the tastiest handmade pies possible outside of your own kitchen!`,
    mission: 'At Flying Saucer Pie Company, our goal is to serve delicious pies that are handmade fresh every day. We use high quality ingredients, time-tested recipes, & never use preservatives.',
    owners: 'Heather Leeson, Owner | Tania Imhof, General Manager'
  },
  
  features: [
    'Handmade fresh daily',
    'No preservatives',
    'High quality ingredients',
    'Family owned since 1967',
    'Houston Strong',
    'Fresh produce & eggs',
    'Never frozen',
    'Made with love'
  ],
  
  policies: {
    ordering: {
      regular: 'No need to place an order. All pies are FIRST COME, FIRST SERVE.',
      largeOrders: 'Orders of 15 or more pies on a case-by-case basis. 50% deposit required.',
      thanksgiving: 'No orders during Thanksgiving week. First come, first served only.'
    },
    slices: {
      available: true,
      size: '1/6 of a whole pie',
      afterSixPm: 'Slices may be limited based on availability',
      thanksgivingWeek: 'No slices sold the week before & week of Thanksgiving'
    },
    payment: [
      'Cash',
      'Credit/Debit Cards',
      'Digital Wallet Payments',
      'Business Checks (with proper ID)',
      'No personal checks'
    ],
    delivery: 'We currently do not have any delivery options.',
    shipping: 'We do not ship pies in or out of state.',
    giftCertificates: 'Available in-store only.'
  },
  
  faqs: {
    freezing: {
      canFreeze: ['Apple', 'Pecan', 'Peach', 'Cherry', 'Pineapple', 'Blackberry', 'Blueberry'],
      instructions: 'Unbox the pie and wrap it tightly in foil. Put the foil wrapped pie back in the box - put box in freezer. Do NOT defrost - Frozen pie goes straight to the oven at 350°F for 30-45 mins.',
      duration: '3 months in freezer'
    },
    shelfLife: {
      creamPies: {
        strawberry: '2-3 days refrigerated',
        banana: '1-2 days refrigerated (uncut)',
        other: '2-3 days refrigerated'
      },
      fruitPies: '3 days room temp, 4-5 days refrigerated',
      cheesecakes: '3-4 days refrigerated'
    }
  }
}