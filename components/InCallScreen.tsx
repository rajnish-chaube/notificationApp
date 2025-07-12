import React, { useState, useEffect } from 'react';
import { EndCallIcon } from './icons';

interface InCallScreenProps {
  caller: string;
  onHangUp: () => void;
  conversationStarter: string;
  isLoadingStarter: boolean;
}

const InCallScreen: React.FC<InCallScreenProps> = ({ caller, onHangUp, conversationStarter, isLoadingStarter }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-gray-800 p-8 text-white">
      <div className="text-center pt-8">
        <h2 className="text-4xl font-bold">{caller}</h2>
        <p className="text-gray-400 text-lg mt-2">{formatDuration(duration)}</p>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl font-bold mb-8 shadow-lg">
          {caller.charAt(0).toUpperCase()}
        </div>
        <div className="bg-gray-700 p-4 rounded-lg text-center min-h-[80px] w-full max-w-xs flex items-center justify-center">
          {isLoadingStarter ? (
            <div className="animate-pulse text-gray-400">Thinking of something clever...</div>
          ) : (
            <p className="text-gray-200 italic">"{conversationStarter}"</p>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center pb-4">
        <button
          onClick={onHangUp}
          className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg"
          aria-label="End call"
        >
          <EndCallIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default InCallScreen;
