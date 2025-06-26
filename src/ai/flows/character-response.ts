// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI agent that provides responses in the style of a given Harry Potter character.
 *
 * - characterResponse - A function that generates a character-specific response to a given user message.
 * - CharacterResponseInput - The input type for the characterResponse function.
 * - CharacterResponseOutput - The return type for the characterResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CharacterResponseInputSchema = z.object({
  characterName: z.string().describe('The name of the Harry Potter character to impersonate.'),
  userMessage: z.string().describe('The message from the user.'),
});
export type CharacterResponseInput = z.infer<typeof CharacterResponseInputSchema>;

const CharacterResponseOutputSchema = z.object({
  response: z.string().describe('The character-specific response to the user message.'),
});
export type CharacterResponseOutput = z.infer<typeof CharacterResponseOutputSchema>;

export async function characterResponse(input: CharacterResponseInput): Promise<CharacterResponseOutput> {
  return characterResponseFlow(input);
}

const characterResponsePrompt = ai.definePrompt({
  name: 'characterResponsePrompt',
  input: {schema: CharacterResponseInputSchema},
  output: {schema: CharacterResponseOutputSchema},
  prompt: `You are impersonating {{characterName}}, a character from the Harry Potter universe. Respond to the following message in a way that is consistent with their personality, tone, and knowledge. Do not reveal that you are an AI. Do not break character.

User message: {{{userMessage}}}`,
});

const characterResponseFlow = ai.defineFlow(
  {
    name: 'characterResponseFlow',
    inputSchema: CharacterResponseInputSchema,
    outputSchema: CharacterResponseOutputSchema,
  },
  async input => {
    const {output} = await characterResponsePrompt(input);
    return output!;
  }
);
