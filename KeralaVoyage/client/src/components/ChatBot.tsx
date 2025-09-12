import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ChatBot({ isOpen = true }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Kerala travel assistant. I can help you discover amazing places, plan routes, and provide local insights. What would you like to explore today?',
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ['Best beaches in Kerala', 'Traditional Kerala food', 'Monsoon travel tips', 'Backwater experiences']
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock bot responses for demo
  const botResponses = {
    'beaches': 'Kerala has stunning beaches! Varkala Beach offers cliff-top views, Kovalam is perfect for water sports, and Marari Beach provides a peaceful retreat. Which type of beach experience interests you most?',
    'food': 'Kerala cuisine is incredible! Try Kerala fish curry, appam with stew, puttu with kadala curry, and don\'t miss the traditional sadhya feast. Would you like restaurant recommendations in your current area?',
    'backwater': 'The backwaters are Kerala\'s crown jewel! Alleppey offers houseboat stays, Kumrakonam has bird sanctuaries, and Kuttanad provides authentic village experiences. I can help plan your backwater route!',
    'monsoon': 'Kerala during monsoon (June-September) is magical! Pack waterproof gear, enjoy Ayurvedic treatments, visit spice plantations, and experience the lush green landscapes. Current weather looks perfect for travel!'
  };

  const getAssistantReply = async (messageText: string): Promise<string> => {
    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: messageText })
      });

      if (!res.ok) {
        throw new Error(assistant endpoint returned ${res.status});
      }

      const data = await res.json();

      if (data && typeof data.reply === 'string') return data.reply;

      throw new Error('invalid assistant response shape');
    } catch (err) {
      // fallback to simple local bots (keeps UI working offline)
      const messageKey = Object.keys(botResponses).find(key => messageText.toLowerCase().includes(key));
      const fallback = messageKey ? botResponses[messageKey as keyof typeof botResponses] : 'That\'s interesting! Based on your current location in Kerala, I can suggest nearby attractions, local experiences, or help with travel planning. What specific aspect of Kerala travel interests you?';
      console.warn('Assistant fetch failed, using fallback:', err);
      return fallback;
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    // Add user message immediately
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setLoading(true);

    // Get assistant reply and append it to messages
    try {
      const assistantText = await getAssistantReply(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: assistantText,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: ['Show nearby attractions', 'Weather forecast', 'Transportation options', 'Local events today']
      };