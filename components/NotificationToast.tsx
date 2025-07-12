import React, { useEffect, useState } from 'react';
import { ToastNotification } from '../types';

interface NotificationToastProps {
  notification: ToastNotification;
  onDismiss: (id: number) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ notification, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setIsVisible(true);

    const timer = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification.id]);

  const handleDismiss = () => {
    setIsVisible(false);
    // Allow time for fade-out animation before removing from DOM
    setTimeout(() => onDismiss(notification.id), 300);
  };

  return (
    <div
      className={`w-80 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl shadow-2xl p-4 flex items-start space-x-4 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <div className="flex-shrink-0 text-gray-300 mt-1">{notification.icon}</div>
      <div className="flex-1">
        <p className="font-bold text-white">{notification.from}</p>
        <p className="text-sm text-gray-300">{notification.message}</p>
      </div>
       <button onClick={handleDismiss} className="text-gray-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
  );
};

export default NotificationToast;
