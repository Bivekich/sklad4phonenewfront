import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  collectedQuantity: number;
  totalQuantity: number;
}

export function ProductCard({
  id,
  name,
  image,
  price,
  collectedQuantity,
  totalQuantity,
}: ProductCardProps) {
  const progress = (collectedQuantity / totalQuantity) * 100;

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Image
          src={image}
          alt={name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            ${price.toFixed(2)}
          </p>
          <Progress value={progress} className="mb-2" />
          <p className="text-sm text-muted-foreground">
            Собрано {collectedQuantity} из {totalQuantity} шт.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={`/product/${id}`}>Подробнее</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
