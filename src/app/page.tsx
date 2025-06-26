'use client';

import { useState } from 'react';
import CharacterSelection from '@/components/character-selection';
import ChatInterface from '@/components/chat-interface';
import type { Character } from '@/lib/characters';

export type Message = {
  id: number;
  sender: 'user' | 'character';
  text: string;
};

export default function Home() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSelectCharacter = (selectedCharacter: Character) => {
    setCharacter(selectedCharacter);
    setMessages([]);
  };

  const handleBackToSelection = () => {
    setCharacter(null);
    setMessages([]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-2xl mx-auto">
        {!character ? (
          <CharacterSelection onSelectCharacter={handleSelectCharacter} />
        ) : (
          <ChatInterface
            character={character}
            messages={messages}
            setMessages={setMessages}
            onBack={handleBackToSelection}
          />
        )}
      </div>
    </main>
  );
}
