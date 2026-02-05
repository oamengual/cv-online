
import { GoogleGenAI, Type } from "@google/genai";
import { CVContent } from "../types";

export class GeminiService {
  /**
   * Translates the CV content to a target language.
   */
  async translateCV(targetLang: string, sourceContent: CVContent): Promise<CVContent> {
    const prompt = `
      Translate the following CV JSON object into ${targetLang}. 
      Keep the EXACT same JSON structure and keys. 
      Translate all string values. 
      Be creative, professional, and maintain the editorial tone.
      JSON to translate: ${JSON.stringify(sourceContent)}
    `;

    try {
      // Create fresh instance before calling API
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      });

      // Directly access .text property
      const text = response.text || "{}";
      return JSON.parse(text) as CVContent;
    } catch (error) {
      console.error("Translation Error:", error);
      throw error;
    }
  }

  /**
   * Simple chat interaction about the CV.
   * Uses gemini-3-pro-preview for better reasoning capabilities.
   */
  async chat(message: string, lang: string, history: { role: string; content: string }[]): Promise<string> {
    try {
      // Create fresh instance right before call as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        history: history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        config: {
          systemInstruction: `You are Oscar Amengual's AI Assistant. Respond in the language: ${lang}. 
          You are an expert on his digital resume and professional background. 
          Oscar is a Digital Ecosystem Architect at RIU Hotels & Resorts with over 15 years of experience.
          His core expertise includes: Generative AI, 3D Synthesis (Maya), and Vibe Coding.
          Be professional, concise, slightly editorial, and visionary. 
          Always base your answers on his career history found in the resume.`,
        },
      });

      const response = await chat.sendMessage({ message });
      // Accessing text property directly
      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Chat API Error:", error);
      return "I encountered an error while processing your request. Please try again later.";
    }
  }
}