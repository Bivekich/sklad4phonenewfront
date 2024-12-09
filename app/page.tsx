import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';

const products = [
  {
    id: '1',
    name: 'iPhone 13',
    image: '/placeholder.svg',
    price: 999,
    collectedQuantity: 2,
    totalQuantity: 5,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S21',
    image: '/placeholder.svg',
    price: 799,
    collectedQuantity: 3,
    totalQuantity: 5,
  },
  {
    id: '3',
    name: 'Google Pixel 6',
    image: '/placeholder.svg',
    price: 699,
    collectedQuantity: 1,
    totalQuantity: 4,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Input type="search" placeholder="Поиск товаров..." className="mb-6" />

      <h2 className="text-2xl font-bold mb-4">Сборы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
