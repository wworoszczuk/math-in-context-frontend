export interface Topic {
  id: string;
  title: {
    pl: string;
    en: string;
  };
  description: { // Zmiana z opcjonalnego na wymagany
    pl: string;
    en: string;
  };
  level: 'foundation' | 'intermediate' | 'advanced';
  category: 'pure' | 'applied' | 'statistics' | 'discrete' | 
            'number-theory' | 'geometry' | 'algebra' | 'analysis' | 
            'probability' | 'foundational' | 'other'; // Rozszerzone kategorie
  era: 'ancient' | 'medieval' | 'renaissance' | 'enlightenment' | 
       'modern' | 'contemporary' | 'future'; // Historyczny kontekst
  prerequisites?: string[]; // IDs of prerequisite topics
  children?: string[]; // IDs of child topics
  position: { // Zmiana z opcjonalnego na wymagany
    x: number;
    y: number;
  };
  color: string; // Zmiana z opcjonalnego na wymagany
  simulationSlug?: string; // Link to simulation page
  // Nowe pola dla rozbudowanej funkcjonalności
  milestones?: {
    year: number;
    mathematician: string;
    discovery: string;
    context: string;
  }[];
  applications?: string[]; // Zastosowania praktyczne
  difficulty?: number; // 1-10 scale for user progression
  estimatedHours?: number; // Estimated learning time
  tags?: string[]; // For search and filtering
}

export interface TopicsMapProps {
  onTopicSelect?: (topicId: string) => void;
  selectedTopic?: string | null;
  filter?: {
    era?: string;
    category?: string;
    level?: string;
    application?: string;
  };
  viewMode?: 'graph' | 'timeline' | 'categories';
}

// Rozszerzone interfejsy dla nowych funkcjonalności
export interface LearningPath {
  id: string;
  title: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  };
  topics: string[]; // Topic IDs in order
  targetAudience: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number; // in hours
}

export interface UserProgress {
  completedTopics: string[];
  inProgressTopics: string[];
  favoriteTopics: string[];
  learningPaths: {
    pathId: string;
    progress: number; // 0-100
    currentTopic: string;
  }[];
}

// Typy dla filtrów i wyszukiwania
export interface TopicFilter {
  era?: string[];
  category?: string[];
  level?: string[];
  application?: string[];
  difficultyMin?: number;
  difficultyMax?: number;
  hasSimulation?: boolean;
}

// Typy dla widoków mapy
export type MapViewMode = 'graph' | 'timeline' | 'categories' | 'applications';

// Dane dla osi czasu
export interface TimelineEra {
  name: string;
  startYear: number;
  endYear: number;
  color: string;
  topics: string[]; // Topic IDs
}

// Helper types for the graph structure
export interface TopicConnection {
  source: string;
  target: string;
  strength: number; // How strong is the connection (1-5)
  type: 'prerequisite' | 'related' | 'application';
}

export interface TopicGraph {
  nodes: Topic[];
  connections: TopicConnection[];
}

// Props for topic navigation and discovery
export interface TopicNavigationProps {
  currentTopic?: string;
  onTopicComplete?: (topicId: string) => void;
  onAddToFavorites?: (topicId: string) => void;
  onStartLearningPath?: (pathId: string) => void;
}

// Types for topic recommendations
export interface TopicRecommendation {
  topicId: string;
  reason: {
    pl: string;
    en: string;
  };
  confidence: number; // 0-1
  basedOn: 'prerequisites' | 'similarity' | 'popularity' | 'userProgress';
}