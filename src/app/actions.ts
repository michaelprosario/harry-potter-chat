'use server';

import { characterResponse } from '@/ai/flows/character-response';

export async function getCharacterResponse(characterName: string, userMessage: string): Promise<string> {
  if (!characterName || !userMessage) {
    throw new Error('Character name and user message are required.');
  }

  try {
    const result = await characterResponse({
      characterName,
      userMessage,
    });
    return result.response;
  } catch (error) {
    console.error('Error getting character response:', error);
    // Return a generic error message to the user
    return "It seems there's some magical interference. I couldn't quite catch that.";
  }
}
