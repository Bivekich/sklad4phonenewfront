import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, DollarSign, User, Phone } from 'lucide-react';

export default function AccountPage() {
  const userInfo = {
    name: 'Иван Иванов',
    rating: 4.5,
    balance: 5000,
    phone: '+7 (999) 123-45-67',
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Мой профиль</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="/placeholder-avatar.jpg"
                  alt={userInfo.name}
                />
                <AvatarFallback>
                  {userInfo.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{userInfo.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Личная информация
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{userInfo.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{userInfo.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Мой рейтинг
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {userInfo.rating.toFixed(1)}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Мой баланс
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold flex items-center">
                  {userInfo.balance.toLocaleString()}
                  <DollarSign className="h-6 w-6 ml-1 text-green-600" />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
