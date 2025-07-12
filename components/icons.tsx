import React from 'react';

export const CallIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const EndCallIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.48 13.94L16.42 10L17.5 10.07C17.85 10.11 18.19 10.23 18.5 10.4L19.92 11.83C20.59 12.5 20.59 13.58 19.92 14.25L18.5 15.67C18.19 15.95 17.83 16.11 17.46 16.16L16.42 16.27L12.48 13.94M4.08 11.83C4.75 12.5 4.75 13.58 4.08 14.25L2.67 15.67C2.36 15.95 2 16.11 1.62 16.16L0.58 16.27L4.53 13.94L4.08 11.83M12.93 5.42C12.87 5.43 12.81 5.44 12.75 5.44C10.76 5.44 9.15 6.43 8.05 7.9L11.85 11.7L15.96 7.59C14.86 6.47 13.88 5.75 12.93 5.42M20.5 7.59L16.88 11.21L20.65 14.97C21.62 13.86 22.26 12.63 22.46 11.33C22.75 9.47 21.89 7.93 20.5 7.59M7.55 16.88L3.25 21.17C4.38 22.21 5.86 22.79 7.37 22.95C9.28 23.18 10.8 22.19 12.11 20.87L7.55 16.88Z" />
  </svg>
);

export const MessageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const AcceptCallIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
