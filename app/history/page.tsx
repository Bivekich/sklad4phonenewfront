import { Header } from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Collection {
  id: number;
  image: string;
  name: string;
  prepaidAmount: number;
  quantity: number;
  pricePerItem: number;
  totalPrice: number;
  orderDate: string;
  status: string;
}

const collections = [
  {
    id: 1,
    image: '/placeholder.svg',
    name: 'iPhone 13 Pro',
    prepaidAmount: 200,
    quantity: 2,
    pricePerItem: 999,
    totalPrice: 1998,
    orderDate: '2023-05-15',
    status: 'В процессе',
  },
  {
    id: 2,
    image: '/placeholder.svg',
    name: 'Samsung Galaxy S21',
    prepaidAmount: 150,
    quantity: 1,
    pricePerItem: 799,
    totalPrice: 799,
    orderDate: '2023-04-20',
    status: 'Завершен',
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold mb-4">История сборов</h1>
        <div className="space-y-4">
          {collections.map((collection) => (
            <Card key={collection.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{collection.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {new Date(collection.orderDate).toLocaleDateString()}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge
                        variant={
                          collection.status === 'Завершен'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {collection.status}
                      </Badge>
                      <p className="font-medium">${collection.totalPrice}</p>
                    </div>
                  </div>
                </div>
                <CollectionDetails collection={collection} />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function CollectionDetails({ collection }: { collection: Collection }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start p-2 text-sm">
          Подробнее
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{collection.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Предоплата:</p>
            <p>${collection.prepaidAmount}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Количество:</p>
            <p>{collection.quantity} шт.</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Цена за единицу:</p>
            <p>${collection.pricePerItem}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Полная цена:</p>
            <p>${collection.totalPrice}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Дата заказа:</p>
            <p>{new Date(collection.orderDate).toLocaleDateString()}</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <p className="text-sm font-medium">Статус:</p>
            <Badge
              variant={
                collection.status === 'Завершен' ? 'default' : 'secondary'
              }
            >
              {collection.status}
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
