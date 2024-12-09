import { User } from 'lucide-react';

interface UserInfoProps {
  name: string;
  id: string;
}

export function UserInfo({ name, id }: UserInfoProps) {
  return (
    <div className="flex items-center space-x-4 mb-6 p-4 bg-secondary rounded-lg">
      <User className="h-10 w-10 text-primary" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">ID: {id}</p>
      </div>
    </div>
  );
}
