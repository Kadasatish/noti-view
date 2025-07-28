import { useEffect, useState } from 'react';

export default function Home() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/addMessage');
      const data = await res.json();
      setMsgs(data);
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 2000); // auto-refresh every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>📩 Live Messages</h2>
      <ul>
        {msgs.map((item, index) => (
          <li key={index}>
            <strong>{item.time}:</strong> {item.msg}
          </li>
        ))}
      </ul>
    </div>
  );
                  }
