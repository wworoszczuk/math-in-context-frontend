//TopicNode.tsx

import React from 'react';
import styles from './TopicNode.module.css';
import type { Topic } from './types/topic';
import { useTranslation } from 'react-i18next';

interface TopicNodeProps {
  topic: Topic;
  isSelected: boolean;
  onClick: (topicId: string) => void;
}

const TopicNode: React.FC<TopicNodeProps> = ({ topic, isSelected, onClick }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as 'pl' | 'en';

  const handleClick = () => {
    onClick(topic.id);
  };

  return (
    <div
      className={`${styles.topicNode} ${isSelected ? styles.selected : ''} ${styles[topic.level]}`}
      style={{
        left: `${topic.position?.x}px`,
        top: `${topic.position?.y}px`,
        backgroundColor: topic.color,
        borderColor: topic.color
      }}
      onClick={handleClick}
    >
      <div className={styles.nodeContent}>
        <h3 className={styles.title}>{topic.title[currentLanguage]}</h3>
        <div className={styles.connectors}>
          <div className={styles.connectorDot} />
        </div>
      </div>
    </div>
  );
};

export default TopicNode;
