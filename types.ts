export enum AppView {
  Home,
  InCall,
}

export interface ToastNotification {
  id: number;
  message: string;
  from: string;
  icon: React.ReactNode;
}
