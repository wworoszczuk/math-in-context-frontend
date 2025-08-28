//mathTopics.ts
import type { Topic } from '../types/topic';


export const mathTopics: Topic[] = [
  // === FUNDAMENTY MATEMATYCZNEGO MYŚLENIA ===
  {
    id: 'mathematical-thinking',
    title: {
      pl: 'Myślenie Matematyczne',
      en: 'Mathematical Thinking'
    },
    description: {
      pl: 'Sztuka logicznego rozumowania, dowodzenia i abstrahowania. Fundament całej matematyki.',
      en: 'The art of logical reasoning, proof, and abstraction. The foundation of all mathematics.'
    },
    level: 'foundation',
    category: 'foundational',
    era: 'ancient',
    prerequisites: [],
    position: { x: 500, y: -100 },
    color: '#6366f1',
    simulationSlug: 'patterns-and-logic'
  },

  // === MATEMATYKA STAROŻYTNA ===
  {
    id: 'numbers',
    title: {
      pl: 'Świat Liczb',
      en: 'World of Numbers'
    },
    description: {
      pl: 'Od liczenia palców do systemów liczbowych. Jak cyfry zmieniły naszą rzeczywistość?',
      en: 'From counting fingers to number systems. How digits changed our reality?'
    },
    level: 'foundation',
    category: 'number-theory',
    era: 'ancient',
    prerequisites: ['mathematical-thinking'],
    position: { x: 250, y: 100 },
    color: '#ec4899',
    simulationSlug: 'number-systems-evolution'
  },

  {
    id: 'geometry-ancient',
    title: {
      pl: 'Geometria Ziemi',
      en: 'Geometry of Earth'
    },
    description: {
      pl: 'Jak starożytni mierzyli świat? Piramidy, okręgi i złoty podział.',
      en: 'How ancients measured the world? Pyramids, circles, and the golden ratio.'
    },
    level: 'foundation',
    category: 'geometry',
    era: 'ancient',
    prerequisites: ['mathematical-thinking'],
    position: { x: 100, y: 250 },
    color: '#10b981',
    simulationSlug: 'pyramid-construction'
  },

  // === REWOLUCJA ALGEBRY ===
  {
    id: 'algebra-foundations',
    title: {
      pl: 'Język Równań',
      en: 'Language of Equations'
    },
    description: {
      pl: 'Od al-Khwarizmiego do współczesności. Jak symbole zastąpiły słowa?',
      en: 'From al-Khwarizmi to modernity. How symbols replaced words?'
    },
    level: 'intermediate',
    category: 'pure',
    era: 'medieval',
    prerequisites: ['numbers'],
    position: { x: 400, y: 100 },
    color: '#f59e0b',
    simulationSlug: 'equation-evolution'
  },

  // === WIEK XVII: REWOLUCJA NAUKOWA ===
  {
    id: 'calculus',
    title: {
      pl: 'Rachunek Zmian',
      en: 'Calculus of Change'
    },
    description: {
      pl: 'Newton vs Leibniz. Jak matematyka opisała ruch planet i wzrost populacji?',
      en: 'Newton vs Leibniz. How mathematics described planetary motion and population growth?'
    },
    level: 'advanced',
    category: 'analysis',
    era: 'enlightenment',
    prerequisites: ['algebra-foundations', 'geometry-ancient'],
    position: { x: 550, y: 100 },
    color: '#ef4444',
    simulationSlug: 'planetary-motion'
  },

  {
    id: 'probability-birth',
    title: {
      pl: 'Narodziny Przypadku',
      en: 'Birth of Probability'
    },
    description: {
      pl: 'Od hazardu do teorii gier. Jak Pascal i Fermat oswoili niepewność?',
      en: 'From gambling to game theory. How Pascal and Fermat tamed uncertainty?'
    },
    level: 'intermediate',
    category: 'probability',
    era: 'enlightenment',
    prerequisites: ['numbers'],
    position: { x: 250, y: 400 },
    color: '#8b5cf6',
    simulationSlug: 'probability-simulation'
  },

  // === WIEK XIX: ABSTRAKCJA I RYGOR ===
  {
    id: 'complex-numbers',
    title: {
      pl: 'Liczby Wyimaginowane',
      en: 'Imaginary Numbers'
    },
    description: {
      pl: '√-1: Matematyczna fikcja, która zrewolucjonizowała inżynierię.',
      en: '√-1: Mathematical fiction that revolutionized engineering.'
    },
    level: 'intermediate',
    category: 'number-theory',
    era: 'modern',
    prerequisites: ['algebra-foundations'],
    position: { x: 400, y: 250 },
    color: '#06b6d4',
    simulationSlug: 'complex-plane'
  },

  {
    id: 'non-euclidean',
    title: {
      pl: 'Geometrie Równoległe',
      en: 'Parallel Geometries'
    },
    description: {
      pl: 'Gdy równoległe linie się spotykają. Geometrie, które zmieniły fizykę.',
      en: 'When parallel lines meet. Geometries that changed physics.'
    },
    level: 'advanced',
    category: 'geometry',
    era: 'modern',
    prerequisites: ['geometry-ancient'],
    position: { x: 100, y: 400 },
    color: '#84cc16',
    simulationSlug: 'hyperbolic-space'
  },

  // === MATEMATYKA WSPÓŁCZESNA ===
  {
    id: 'set-theory',
    title: {
      pl: 'Teoria Mnogości',
      en: 'Set Theory'
    },
    description: {
      pl: 'Język nieskończoności. Podstawy współczesnej matematyki.',
      en: 'The language of infinity. Foundations of modern mathematics.'
    },
    level: 'advanced',
    category: 'foundational',
    era: 'contemporary',
    prerequisites: ['mathematical-thinking'],
    position: { x: 700, y: 100 },
    color: '#f97316',
    simulationSlug: 'infinite-sets'
  },

  {
    id: 'chaos-theory',
    title: {
      pl: 'Teoria Chaosu',
      en: 'Chaos Theory'
    },
    description: {
      pl: 'Skrzydła motyla i pogoda. Jak małe zmiany prowadzą do wielkich skutków?',
      en: 'Butterfly wings and weather. How small changes lead to big effects?'
    },
    level: 'advanced',
    category: 'applied',
    era: 'contemporary',
    prerequisites: ['calculus', 'probability-birth'],
    position: { x: 550, y: 400 },
    color: '#d946ef',
    simulationSlug: 'lorenz-attractor'
  },

  // === MATEMATYKA STOSOWANA ===
  {
    id: 'cryptography',
    title: {
      pl: 'Sztuka Szyfrowania',
      en: 'Art of Encryption'
    },
    description: {
      pl: 'Od Cezara do blockchain. Jak teoria liczb chroni Twoje dane?',
      en: 'From Caesar to blockchain. How number theory protects your data?'
    },
    level: 'intermediate',
    category: 'applied',
    era: 'contemporary',
    prerequisites: ['numbers', 'algebra-foundations'],
    position: { x: 700, y: 250 },
    color: '#64748b',
    simulationSlug: 'rsa-encryption'
  },

  {
    id: 'machine-learning-math',
    title: {
      pl: 'Matematyka AI',
      en: 'Mathematics of AI'
    },
    description: {
      pl: 'Gradienty, tensory i sieci neuronowe. Jak matematyka tworzy inteligencję?',
      en: 'Gradients, tensors, and neural networks. How mathematics creates intelligence?'
    },
    level: 'advanced',
    category: 'applied',
    era: 'contemporary',
    prerequisites: ['calculus', 'probability-birth', 'linear-algebra'],
    position: { x: 850, y: 400 },
    color: '#3b82f6',
    simulationSlug: 'gradient-descent'
  },

  // === MOSTY I POŁĄCZENIA ===
  {
    id: 'linear-algebra',
    title: {
      pl: 'Algebra Liniowa',
      en: 'Linear Algebra'
    },
    description: {
      pl: 'Macierze, przestrzenie wektorowe. Język grafiki 3D i uczenia maszynowego.',
      en: 'Matrices, vector spaces. The language of 3D graphics and machine learning.'
    },
    level: 'intermediate',
    category: 'algebra',
    era: 'modern',
    prerequisites: ['algebra-foundations', 'geometry-ancient'],
    position: { x: 400, y: 400 },
    color: '#14b8a6',
    simulationSlug: '3d-transformations'
  },

  {
    id: 'topology',
    title: {
      pl: 'Topologia',
      en: 'Topology'
    },
    description: {
      pl: 'Geometria gumy i donutów. Kształty, które nie zmieniają się pod deformacjami.',
      en: 'Geometry of rubber and donuts. Shapes that don\'t change under deformation.'
    },
    level: 'advanced',
    category: 'geometry',
    era: 'modern',
    prerequisites: ['geometry-ancient', 'set-theory'],
    position: { x: 250, y: 550 },
    color: '#a855f7',
    simulationSlug: 'topological-surfaces'
  },

  // === WIELKIE PROBLEMY ===
  {
    id: 'prime-numbers',
    title: {
      pl: 'Tajemnice Liczb Pierwszych',
      en: 'Secrets of Prime Numbers'
    },
    description: {
      pl: 'Atomy matematyki. Nierozwiązane zagadki od czasów Euklidesa.',
      en: 'Atoms of mathematics. Unsolved puzzles since Euclid\'s time.'
    },
    level: 'intermediate',
    category: 'number-theory',
    era: 'ancient',
    prerequisites: ['numbers'],
    position: { x: 100, y: 550 },
    color: '#f43f5e',
    simulationSlug: 'prime-spiral'
  },

  {
    id: 'fermat-last-theorem',
    title: {
      pl: 'Wielkie Twierdzenie Fermata',
      en: 'Fermat\'s Last Theorem'
    },
    description: {
      pl: 'Zagadka, która czekała 358 lat na rozwiązanie. Historia matematycznego detektywu.',
      en: 'A puzzle that waited 358 years for solution. A story of mathematical detective work.'
    },
    level: 'advanced',
    category: 'number-theory',
    era: 'contemporary',
    prerequisites: ['algebra-foundations', 'number-theory'],
    position: { x: 700, y: 550 },
    color: '#eab308',
    simulationSlug: 'fermat-equation'
  }
];

// Rozszerzone funkcje pomocnicze
export const getTopicById = (id: string): Topic | undefined => {
  return mathTopics.find(topic => topic.id === id);
};

export const getPrerequisites = (topicId: string): Topic[] => {
  const topic = getTopicById(topicId);
  if (!topic?.prerequisites) return [];
  return topic.prerequisites.map(getTopicById).filter(Boolean) as Topic[];
};

export const getTopicsByEra = (era: string): Topic[] => {
  return mathTopics.filter(topic => topic.era === era);
};

export const getTopicsByCategory = (category: string): Topic[] => {
  return mathTopics.filter(topic => topic.category === category);
};

export const getFoundationalTopics = (): Topic[] => {
  return mathTopics.filter(topic => topic.prerequisites?.length === 0);
};

export const getAdvancedTopics = (): Topic[] => {
  return mathTopics.filter(topic => topic.level === 'advanced');
};

// Znajdź tematy związane z danym kontekstem (np. fizyka, ekonomia)
export const getTopicsByApplication = (application: string): Topic[] => {
  const applicationMap: { [key: string]: string[] } = {
    physics: ['calculus', 'non-euclidean', 'chaos-theory', 'linear-algebra'],
    economics: ['probability-birth', 'game-theory', 'statistics', 'calculus'],
    computer_science: ['cryptography', 'set-theory', 'logic', 'linear-algebra'],
    biology: ['probability-birth', 'statistics', 'chaos-theory', 'calculus']
  };
  
  const topicIds = applicationMap[application] || [];
  return mathTopics.filter(topic => topicIds.includes(topic.id));
};