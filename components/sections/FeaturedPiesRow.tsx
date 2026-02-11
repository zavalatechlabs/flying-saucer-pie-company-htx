'use client'

import Image from 'next/image'

const pies = [
  { name: 'Apple Pie', image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=400&fit=crop' },
  { name: 'Pecan Pie', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop' },
  { name: 'Cherry Pie', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=400&fit=crop' },
  { name: 'Pumpkin Pie', image: 'https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=400&h=400&fit=crop' },
  { name: 'Blueberry Pie', image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=400&h=400&fit=crop' },
  { name: 'Peach Pie', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop' },
  { name: 'Lemon Pie', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop' },
  { name: 'Chocolate Pie', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' }
]

export function FeaturedPiesRow() {
  return (
    <section className="py-20 bg-dust-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-space-night mb-4">
            🌟 Cosmic Favorites
          </h2>
          <p className="text-xl text-dust-medium mb-8">
            Our most popular pies that keep Houstonians coming back
          </p>
        </div>
        
        <div className="pie-scroll-container">
          {pies.map((pie, i) => (
            <div key={pie.name} className="pie-item" style={{ '--i': i } as any}>
              <div className="pie-spin">
                <Image 
                  src={pie.image} 
                  alt={pie.name}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-center mt-3 font-medium text-deep-navy text-sm">
                {pie.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
