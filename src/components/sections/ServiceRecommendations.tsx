'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { RecommendationService } from '@/lib/ai/service';

export default function ServiceRecommendations() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
    recommendations?: Array<{
      serviceId: string;
      confidence: number;
      reasons: string[];
    }>;
  }>>([
    {
      role: 'assistant',
      content: 'Bonjour ! Je suis là pour vous aider à choisir le soin parfait pour votre bien-être. Que recherchez-vous aujourd\'hui ?'
    }
  ]);

  const quickSuggestions = RecommendationService.getQuickSuggestions();

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    
    // Add user message
    const newConversation = [
      ...conversation,
      { role: 'user' as const, content: userMessage }
    ];

    // Get response and recommendations
    const response = RecommendationService.generateResponse(userMessage);
    const recommendations = RecommendationService.getServiceRecommendations(userMessage);

    // Add assistant response
    newConversation.push({
      role: 'assistant',
      content: response,
      recommendations: recommendations.length > 0 ? recommendations : undefined
    });

    setConversation(newConversation);
    setMessage('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary-500 hover:bg-primary-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Aide au choix</span>
          <Sparkles size={16} className="text-primary-200" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw]">
      <Card className="shadow-2xl border-0 overflow-hidden">
        <CardHeader className="bg-primary-500 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles size={20} />
              <h3 className="font-semibold">Assistant Bien-être</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Conversation */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {conversation.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-neutral-100 text-neutral-800'
                }`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  
                  {/* Show service recommendations */}
                  {msg.recommendations && msg.recommendations.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-medium text-neutral-600">Services recommandés :</p>
                      {msg.recommendations.map((reco, recoIndex) => {
                        const service = RecommendationService.findServiceById(reco.serviceId);
                        return service ? (
                          <div key={recoIndex} className="bg-white p-2 rounded border text-neutral-800">
                            <div className="font-medium text-primary-600">{service.title}</div>
                            <div className="text-xs text-neutral-500">{service.price} • {service.duration}</div>
                            <div className="text-xs mt-1">
                              Confiance: {Math.round(reco.confidence * 100)}%
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          {conversation.length === 1 && (
            <div className="p-4 border-t bg-neutral-50">
              <p className="text-xs text-neutral-600 mb-2">Suggestions rapides :</p>
              <div className="space-y-1">
                {quickSuggestions.slice(0, 3).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left text-xs bg-white border rounded p-2 hover:bg-primary-50 hover:border-primary-200 transition-colors duration-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Décrivez vos besoins..."
                className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                size="sm"
                className="px-3 py-2"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}