import React, { useState, useCallback, useEffect } from 'react';
import { AppView, ToastNotification } from './types';
import { generateConversationStarter } from './services/service';
import { MessageIcon, CallIcon } from './components/icons';
import HomeScreen from './components/HomeScreen';
import IncomingCallScreen from './components/IncomingCallScreen';
import InCallScreen from './components/InCallScreen';
import NotificationToast from './components/NotificationToast';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.Home);
  const [isCallIncoming, setIsCallIncoming] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [badgeCount, setBadgeCount] = useState<number>(0);
  const [conversationStarter, setConversationStarter] = useState<string>('');
  const [isLoadingStarter, setIsLoadingStarter] = useState<boolean>(false);
  const [caller, setCaller] = useState<string>('Jane Doe');

  const removeToast = (id: number) => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  const addToast = (message: string, from: string, icon: React.ReactNode) => {
    const newToast: ToastNotification = {
      id: Date.now(),
      message,
      from,
      icon
    };
    setToasts(currentToasts => [...currentToasts, newToast]);
    setBadgeCount(prev => prev + 1);
  };

  const handleSimulateText = useCallback(() => {
    addToast('Hey, are you free to chat later?', 'Alex', <MessageIcon />);
  }, []);

  const handleSimulateCall = useCallback(() => {
    const randomCallers = ['Mom', 'Work', 'Dr. Smith', 'Unknown Number'];
    const randomCaller = randomCallers[Math.floor(Math.random() * randomCallers.length)];
    setCaller(randomCaller);
    setIsCallIncoming(true);
  }, []);

  const handleAcceptCall = useCallback(async () => {
    setIsCallIncoming(false);
    setView(AppView.InCall);
    setIsLoadingStarter(true);
    setConversationStarter('');
    try {
      const starter = await generateConversationStarter(caller);
      setConversationStarter(starter);
    } catch (error) {
      console.error('Failed to generate conversation starter:', error);
      setConversationStarter('Sorry, I was saying... what was I saying? (AI failed)');
    } finally {
      setIsLoadingStarter(false);
    }
  }, [caller]);

  const handleDeclineCall = useCallback(() => {
    setIsCallIncoming(false);
    addToast('You missed a call.', caller, <CallIcon className="text-red-500" />);
  }, [caller]);

  const handleHangUp = useCallback(() => {
    setView(AppView.Home);
    setConversationStarter('');
  }, []);
  
  const clearNotifications = useCallback(() => {
    setToasts([]);
    setBadgeCount(0);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-screen font-sans text-white p-4">
      <div className="relative w-full max-w-sm h-[700px] max-h-[90vh] bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col">
        {view === AppView.Home && (
          <HomeScreen
            onSimulateText={handleSimulateText}
            onSimulateCall={handleSimulateCall}
            badgeCount={badgeCount}
            onClearNotifications={clearNotifications}
          />
        )}
        {view === AppView.InCall && (
          <InCallScreen
            caller={caller}
            onHangUp={handleHangUp}
            conversationStarter={conversationStarter}
            isLoadingStarter={isLoadingStarter}
          />
        )}
      </div>

      {/* Overlays */}
      <IncomingCallScreen
        isOpen={isCallIncoming}
        caller={caller}
        onAccept={handleAcceptCall}
        onDecline={handleDeclineCall}
      />
      
      {/* Toast Notifications Area */}
      <div className="absolute top-5 right-5 space-y-3 z-50">
        {toasts.map(toast => (
          <NotificationToast
            key={toast.id}
            notification={toast}
            onDismiss={removeToast}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
