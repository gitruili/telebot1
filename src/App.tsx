import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [telegram, setTelegram] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 检查 window.Telegram.WebApp 是否存在
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setTelegram(tg);

      // 设置主按钮文本并展示
      tg.MainButton.text = "Send Data to Bot";
      tg.MainButton.show();

      // 获取 Telegram 用户信息
      const user = tg.initDataUnsafe?.user;
      setUser(user);
    } else {
      console.log('Telegram WebApp is not available.');
    }
  }, []);

  const handleSendData = () => {
    if (telegram) {
      telegram.sendData("Hello from the Web App!"); // 向 Telegram Bot 发送数据
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Telegram Web App with React</h1>
      {user ? (
        <p>Welcome, {user.first_name} {user.last_name}!</p>
      ) : (
        <p>Not running inside Telegram WebApp</p>
      )}
      <button onClick={handleSendData} disabled={!telegram}>Send Data to Bot</button>
    </div>
  );
};

export default App;
