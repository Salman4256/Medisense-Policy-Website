import React from 'react';
import { AlertTriangle, ShieldCheck, Info, HeartHandshake } from 'lucide-react';
import './NoticeCard.css';

export interface NoticeCardProps {
  type: 'info' | 'warning' | 'security' | 'medical';
  title: string;
  message: string;
  id?: string;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({ type, title, message, id }) => {
  const getIcon = () => {
    switch (type) {
      case 'medical':
        return <HeartHandshake className="notice-icon" size={24} />;
      case 'security':
        return <ShieldCheck className="notice-icon" size={24} />;
      case 'warning':
        return <AlertTriangle className="notice-icon" size={24} />;
      case 'info':
      default:
        return <Info className="notice-icon" size={24} />;
    }
  };

  return (
    <aside className={`notice-card notice-${type}`} id={id} role="note" aria-label={title}>
      <div className="notice-header">
        <div className="notice-icon-wrapper">{getIcon()}</div>
        <h4 className="notice-title">{title}</h4>
      </div>
      <p className="notice-message">{message}</p>
    </aside>
  );
};

export default NoticeCard;
