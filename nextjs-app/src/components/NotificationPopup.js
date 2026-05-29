"use client";
import { useState, useEffect } from 'react';

export default function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay show" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src="/ảnh/thongbao.jpg" alt="Thông báo" className="popup-img" />
        </div>
    </div>
  );
}
