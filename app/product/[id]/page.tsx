'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const price = 1000;
  const deposit = price * 0.1;
  const balance = 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => window.history.back()}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Назад
      </Button>
      <Card className="w-full">
        <CardContent className="p-0">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Product image 1"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/placeholder.svg"
                  alt="Product image 2"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </CarouselItem>
              <CarouselItem>
                <video className="w-full h-64 object-cover" controls>
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold mb-2">Название товара</h1>
          <p className="text-sm text-gray-600 mb-4">
            Описание товара. Здесь может быть подробная информация о товаре, его
            характеристиках и особенностях.
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Количество:
            </label>
            <Slider
              value={[quantity]}
              onValueChange={(value) => setQuantity(value[0])}
              max={balance}
              step={1}
            />
            <span className="text-sm text-gray-600 mt-1 block">
              Выбрано: {quantity}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">В наличии: {balance} шт.</p>
          <p className="font-semibold mb-1">
            Полная стоимость: {price * quantity} ₽
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Предоплата: {deposit * quantity} ₽
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Забронировать</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
