import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API_KEY environment variable not set. Gemini features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateConversationStarter = async (caller: string): Promise<string> => {
  if (!API_KEY) {
    return `Hello? Is this ${caller}? My AI isn't working right now.`;
  }

  try {
    const prompt = `Generate a short, witty, and slightly humorous conversation starter for a phone call. The call is from "${caller}". Keep it under 15 words.`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.9,
        topK: 50,
        topP: 0.95,
        thinkingConfig: {
          thinkingBudget: 0 // Faster response for this use case
        }
      }
    });

    const text = response.text.trim().replace(/^"|"$/g, ''); // Remove surrounding quotes if any
    return text || `So... ${caller}... we meet again.`;

  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    // Provide a graceful fallback
    return "Well, this is an interesting start to a conversation.";
  }
};
