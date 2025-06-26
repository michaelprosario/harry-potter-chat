'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { characters, type Character } from '@/lib/characters';

type CharacterSelectionProps = {
  onSelectCharacter: (character: Character) => void;
};

export default function CharacterSelection({ onSelectCharacter }: CharacterSelectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">Wizarding Chatroom</h1>
      <p className="text-lg text-foreground/80 mb-10 max-w-md">
        Welcome, curious witch or wizard! Choose a character from the world of Harry Potter to begin your magical conversation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {characters.map((character) => (
          <Card
            key={character.name}
            onClick={() => onSelectCharacter(character)}
            className="cursor-pointer hover:shadow-lg hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
            role="button"
            aria-label={`Chat with ${character.name}`}
          >
            <CardHeader className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <character.icon className="w-10 h-10" />
              </div>
              <CardTitle className="font-headline text-2xl">{character.name}</CardTitle>
              <CardDescription className="text-base">{character.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
