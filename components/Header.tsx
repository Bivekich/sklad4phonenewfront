import Link from 'next/link';
import { Menu, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { UserInfo } from './UserInfo';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-background border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <UserInfo name="Иван Иванов" id="12345" />
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-lg">
              Главная
            </Link>
            <a href="/account" className="text-lg">
              Мой профиль
            </a>
            <a href="/history" className="text-lg">
              История сборов
            </a>
            <a href="/notifications" className="text-lg">
              Уведомления
            </a>
            <a href="/support" className="text-lg">
              Тех поддержка
            </a>
            <a href="/offer" className="text-lg">
              Договор оферты
            </a>
            <a href="/rules" className="text-lg">
              Правила сервиса
            </a>
            <a href="/guarantees" className="text-lg">
              Гарантии
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <h1 className="text-xl font-bold">Sklad4Phone</h1>

      <div className="flex items-center">
        <DollarSign className="h-5 w-5 mr-1" />
        <span className="font-semibold">1000.00</span>
      </div>
    </header>
  );
}
