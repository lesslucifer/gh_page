import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: 'Gạo St25 túi 5kg',
    sizes: '5kg / 10kg / 15kg',
    price: 120000,
    originalPrice: 145000,
    discount: 30,
    image: '/images/products/tui-gao.png'
  },
  {
    id: 2,
    name: 'Gạo St25 túi 5kg',
    sizes: '5kg / 10kg / 15kg',
    price: 120000,
    image: '/images/products/tui-gao.png'
  },
  {
    id: 3,
    name: 'Gạo St25 túi 5kg',
    sizes: '5kg / 10kg / 15kg',
    price: 120000,
    image: '/images/products/tui-gao.png'
  }
]

const Products = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-700 mb-12">Our Products</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="relative border-none shadow-md">
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute right-4 top-4 z-10 bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-sm font-medium">
                    -{product.discount}%
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Product Image */}
                  <div className="mb-4 relative h-[300px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="text-center">
                    <h3 className="text-xl mb-2">{product.name}</h3>
                    <p className="text-gray-500 mb-4">{product.sizes}</p>
                    <div className="flex justify-center items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through">
                          {product.originalPrice.toLocaleString()}đ
                        </span>
                      )}
                      <span className="text-xl font-semibold">
                        {product.price.toLocaleString()}đ
                      </span>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-green-600 hover:bg-green-700"
                    >
                      Mua ngay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 rounded-full h-10 w-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 rounded-full h-10 w-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products 