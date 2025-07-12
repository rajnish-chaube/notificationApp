import React from 'react';

interface HomeScreenProps {
  onSimulateText: () => void;
  onSimulateCall: () => void;
  onClearNotifications: () => void;
  badgeCount: number;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  onSimulateText,
  onSimulateCall,
  onClearNotifications,
  badgeCount
}) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-900 p-6 text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Notifier</h1>
        <div className="relative">
          <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-xl font-bold">
            S
          </div>
          {badgeCount > 0 && (
             <span className="absolute -top-1 -right-1 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500 text-xs items-center justify-center">
                    {badgeCount}
                </span>
            </span>
          )}
        </div>
      </header>

      <div className="flex-1 flex flex-col justify-center items-center space-y-6">
        <p className="text-gray-400 text-center mb-4">
          Use the buttons below to simulate receiving notifications.
        </p>
        <button
          onClick={onSimulateText}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
        >
          Simulate Text Notification
        </button>
        <button
          onClick={onSimulateCall}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
        >
          Simulate Incoming Call
        </button>
         {badgeCount > 0 && (
            <button
            onClick={onClearNotifications}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-xl transition-transform transform hover:scale-105 shadow-lg mt-8"
            >
            Clear Notifications
            </button>
        )}
      </div>

      <footer className="text-center text-gray-500 text-xs mt-8">
        <p>This is a web-based simulation of native mobile notifications.</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
