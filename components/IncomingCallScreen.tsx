import React from 'react';
import { AcceptCallIcon, EndCallIcon } from './icons';

interface IncomingCallScreenProps {
  isOpen: boolean;
  caller: string;
  onAccept: () => void;
  onDecline: () => void;
}

const IncomingCallScreen: React.FC<IncomingCallScreenProps> = ({ isOpen, caller, onAccept, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-between p-8 bg-gray-900 bg-opacity-80 backdrop-blur-xl text-white animate-fade-in">
      <div className="text-center pt-12">
        <h2 className="text-4xl font-bold animate-pulse">{caller}</h2>
        <p className="text-gray-300 mt-2">Incoming Call...</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-bold mb-16 shadow-lg animate-pulse-slow">
            {caller.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="flex justify-around items-center w-full">
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={onDecline}
            className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg"
            aria-label="Decline call"
          >
            <EndCallIcon className="text-white" />
          </button>
          <span className="text-gray-300">Decline</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={onAccept}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg"
            aria-label="Accept call"
          >
            <AcceptCallIcon className="text-white" />
          </button>
          <span className="text-gray-300">Accept</span>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
            50% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(139, 92, 246, 0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 2s infinite; }
      `}</style>
    </div>
  );
};

export default IncomingCallScreen;
