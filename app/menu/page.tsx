import { Metadata } from 'next'
import { MenuContent } from './menu-content'

export const metadata: Metadata = {
  title: 'Menu - Fresh Pies Made Daily',
  description:
    'Browse our full menu of handmade pies. Fruit pies, cream pies, cheesecakes, and seasonal specials. All made fresh daily with no preservatives.',
}

export default function MenuPage() {
  return (
    <div className="pt-16">
      <MenuContent />
    </div>
  )
}
