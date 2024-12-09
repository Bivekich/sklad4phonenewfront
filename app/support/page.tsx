'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const mockTickets = [
  {
    id: 1,
    type: 'Техническая поддержка',
    message: 'У меня проблема с оплатой заказа.',
  },
  {
    id: 2,
    type: 'Вопрос по доставке',
    message: 'Когда будет доставлен мой заказ?',
  },
];

export default function SupportPage() {
  const [ticketType, setTicketType] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Новая заявка:', { type: ticketType, message: ticketMessage });
    setTicketType('');
    setTicketMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Техническая поддержка</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Мои заявки{' '}
              <span className="text-sm font-normal text-muted-foreground">
                ({mockTickets.length})
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mockTickets.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Последняя заявка:</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Тип: {mockTickets[0].type}
                </p>
                <p>{mockTickets[0].message}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Создать новую заявку</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="ticketType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Тип заявки
                </label>
                <Select value={ticketType} onValueChange={setTicketType}>
                  <SelectTrigger id="ticketType">
                    <SelectValue placeholder="Выберите тип заявки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">
                      Техническая поддержка
                    </SelectItem>
                    <SelectItem value="delivery">Вопрос по доставке</SelectItem>
                    <SelectItem value="payment">Проблема с оплатой</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="ticketMessage"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ваш вопрос
                </label>
                <Textarea
                  id="ticketMessage"
                  placeholder="Опишите вашу проблему или задайте вопрос"
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <Button type="submit">Отправить заявку</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
