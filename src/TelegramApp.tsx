import React, { useEffect } from 'react';

// Add this type declaration at the top of your file
declare global {
  interface Window {
    Telegram: {
      WebApp: any;
    }
  }
}

const TelegramApp: React.FC = () => {
    useEffect(() => {
        // Initialize Telegram Web App
        const tg = window.Telegram.WebApp;
        tg.ready();

        // Set up event listeners or any other initialization logic here
        tg.onEvent('mainButtonClicked', () => {
            tg.sendData('Hello from React!');
        });

        return () => {
            // Clean up event listeners if necessary
            tg.offEvent('mainButtonClicked');
        };
    }, []);

    return (
        <div>
            <h1>Welcome to Telegram Web App</h1>
            <button onClick={() => window.Telegram.WebApp.MainButton.show()}>
                Show Main Button
            </button>
        </div>
    );
};

export default TelegramApp;
