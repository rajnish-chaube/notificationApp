# React Notification & Call Simulator

This project is a sophisticated web-based application designed to simulate a mobile phone's user interface, complete with real-time push notifications and a full-screen incoming call experience. It masterfully mimics the look and feel of a native application, like WhatsApp or the iOS Phone app, directly in the browser.

A standout feature is its integration with the **Google  API**, which dynamically generates witty and context-aware conversation starters for simulated phone calls, adding a layer of creative interaction.

---

## ✨ Features

- **Realistic UI/UX:** A sleek, mobile-first design enclosed within a phone frame, creating an immersive simulation.
- **Notification System:**
    - **Toast Notifications:** Non-intrusive, pop-up notifications for simulated text messages.
    - **Badge Count:** An icon badge on the "home screen" that tracks the number of unread notifications.
- **Incoming Call Simulation:**
    - A full-screen overlay for incoming calls with animated elements.
    - Options to **Accept** or **Decline** the call.
- **In-Call Screen:**
    - A dedicated view upon accepting a call, featuring the caller's name and a running call timer.
- **Dynamic Content with  AI:**
    - On accepting a call, the app queries the  API to generate a unique conversation starter based on the caller's identity (e.g., "Mom", "Work").
- **State Management:** Clean and efficient state handling with React Hooks to manage application views, notifications, and call states.
- **Component-Based Architecture:** Built with reusable, well-structured React components and styled with Tailwind CSS for a modern and responsive layout.

---

## 🚀 Technology Stack

- **Frontend:** [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Generative AI:** [Google  API](https://ai.google.dev/)
- **Module Loading:** Browser-native ES Modules via Import Maps.

---

## ⚙️ How It Works

The application operates in a few primary states managed within the main `App.tsx` component:

1.  **Home Screen:** The default view where the user can initiate simulations. It displays a notification badge count.
2.  **Simulate Text:** Clicking this button triggers a toast notification (e.g., from 'Alex') and increments the badge counter.
3.  **Simulate Call:** This action randomly selects a caller and launches the full-screen `IncomingCallScreen`.
4.  **Call Interaction:**
    - **Decline:** Dismisses the call screen and generates a "Missed Call" toast notification.
    - **Accept:** Transitions the view to the `InCallScreen`. It simultaneously sends a request to the `Service` to fetch a conversation starter.
5.  **In-Call View:** Displays the call timer and the AI-generated conversation starter once it arrives. The "Hang Up" button returns the user to the home screen.

---

## 🔧 Local Setup & Configuration

This application is designed to run in a development environment where environment variables are accessible.

1.  **Serve the Application:**
    Serve the `index.html` file using a simple local web server. The import maps in the HTML file handle the fetching of React and other dependencies from a CDN.

---

## 📂 Project Structure

```
.
├── index.html              # Main HTML entry point with import maps
├── index.tsx               # React application root
├── App.tsx                 # Main component, handles state and view logic
├── metadata.json           # Application metadata and permissions
├── types.ts                # Shared TypeScript types and enums
├── README.md               # You are here!
├── components/
│   ├── HomeScreen.tsx        # The main app screen
│   ├── InCallScreen.tsx      # The active call view
│   ├── IncomingCallScreen.tsx# Full-screen incoming call UI
│   ├── NotificationToast.tsx # Pop-up notification component
│   └── icons.tsx             # Reusable SVG icon components
└── services/
    └── Service.ts      # Logic for interacting with the  API
```

   `npm run dev`
