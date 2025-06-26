'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft, Send, Book, Wand2, Bot } from 'lucide-react';
import { getCharacterResponse } from '@/app/actions';
import type { Message } from '@/app/page';
import ChatMessage from './chat-message';
import type { Character } from '@/lib/characters';

type ChatInterfaceProps = {
  character: Character;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  onBack: () => void;
};

export default function ChatInterface({ character, messages, setMessages, onBack }: ChatInterfaceProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getCharacterResponse(character.name, input);
      const characterMessage: Message = {
        id: Date.now() + 1,
        sender: 'character',
        text: response,
      };
      setMessages((prev) => [...prev, characterMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'character',
        text: 'I seem to have lost my train of thought... a bit of magical interference, perhaps. Could you repeat that?',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-[85vh] md:h-[70vh] flex flex-col shadow-2xl">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack} aria-label="Back to character selection">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <character.icon className="w-7 h-7" />
          </div>
          <div className="text-left">
            <h2 className="font-headline text-xl text-primary">{character.name}</h2>
            <p className="text-sm text-foreground/70">{character.description}</p>
          </div>
        </div>
        <div className="w-10"></div>
      </CardHeader>

      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} characterIcon={character.icon} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 animate-pulse">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <character.icon className="w-5 h-5" />
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <span className="text-sm text-muted-foreground">typing...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${character.name}...`}
            className="flex-1 text-base"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()} aria-label="Send message">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
