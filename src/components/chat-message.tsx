import type { Message } from '@/app/page';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

type ChatMessageProps = {
  message: Message;
  characterIcon: React.ElementType;
};

export default function ChatMessage({ message, characterIcon: CharacterIcon }: ChatMessageProps) {
  const isCharacter = message.sender === 'character';

  return (
    <div
      className={cn(
        'flex items-end gap-2 animate-message-in',
        isCharacter ? 'justify-start' : 'justify-end'
      )}
    >
      {isCharacter && (
        <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary">
                <CharacterIcon className="h-5 w-5" />
            </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 shadow-md',
          isCharacter
            ? 'bg-card text-card-foreground rounded-bl-none'
            : 'bg-primary text-primary-foreground rounded-br-none'
        )}
      >
        <p className="text-base">{message.text}</p>
      </div>
      {!isCharacter && (
        <Avatar className="h-8 w-8">
             <AvatarFallback className="bg-accent/80 text-accent-foreground">
                <User className="h-5 w-5" />
            </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
