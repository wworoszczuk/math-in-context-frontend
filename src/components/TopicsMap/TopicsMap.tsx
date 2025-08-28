// TopicsMap.tsx
import { useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';


import { mathTopics, getPrerequisites } from './data/mathTopics';
import { useTranslation } from 'react-i18next';
import styles from './TopicsMap.module.css';

import dagre from 'dagre';

// ustawienia dla układu (pionowy lub poziomy)
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

function getLayoutedElements(nodes: Node[], edges: Edge[], direction: 'TB' | 'LR' = 'TB') {
  const isMobile = window.innerWidth <= 640; // Ustalamy próg dla urządzeń mobilnych
  const nodeWidth = isMobile ? 120 : 180; // Mniejsza szerokość na telefonach
  const nodeHeight = isMobile ? 40 : 50; // Mniejsza wysokość na telefonach

  dagreGraph.setGraph({ rankdir: isMobile ? 'LR' : direction }); // Poziomy układ na telefonach

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const pos = dagreGraph.node(node.id);
    node.position = {
      x: pos.x - nodeWidth / 2,
      y: pos.y - nodeHeight / 2,
    };
    // Dostosuj styl węzłów dla mniejszych ekranów
    node.style = {
      ...node.style,
      width: nodeWidth,
      fontSize: isMobile ? '12px' : '14px',
      padding: isMobile ? '6px' : '8px',
    };
  });

  return { nodes, edges };
}


const TopicsMap = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language as 'pl' | 'en';

  const { nodes, edges } = useMemo(() => {
  const n: Node[] = mathTopics.map(topic => ({
    id: topic.id,
    data: { label: topic.title[currentLanguage] },
    position: { x: 0, y: 0 },
    style: {
      border: `2px solid ${topic.color}`,
      background: topic.color + '22',
      borderRadius: 12,
      padding: '8px',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
    },
  }));

  const e: Edge[] = mathTopics.flatMap(topic =>
    (topic.prerequisites || []).map(pr => ({
      id: `${pr}-${topic.id}`,
      source: pr,
      target: topic.id,
      style: { stroke: '#999' },
      markerEnd: { type: MarkerType.ArrowClosed },
    }))
  );

  return getLayoutedElements(n, e, window.innerWidth <= 640 ? 'LR' : 'TB');
}, [currentLanguage]);

  const selectedTopicData = selectedTopic
    ? mathTopics.find(t => t.id === selectedTopic)
    : null;

  const prerequisites = selectedTopic
    ? getPrerequisites(selectedTopic)
    : [];

  return (
    <div className={styles.topicsMapContainer}>
      <div className={styles.mapArea}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          onNodeClick={(_, node) => setSelectedTopic(node.id)}
        >
          <Background gap={16} color="#aaa" />
          <MiniMap nodeColor={n => (n.style?.background as string) || '#ccc'} />
          <Controls />
        </ReactFlow>
      </div>

      {/* Sidebar */}
      {selectedTopicData && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h2 className={styles.sidebarTitle}>
              {selectedTopicData.title[currentLanguage]}
            </h2>
            <p className={styles.sidebarDescription}>
              {selectedTopicData.description?.[currentLanguage] || t('Brak opisu.')}
            </p>

            {prerequisites.length > 0 && (
              <div className={styles.prerequisites}>
                <h3>
                  {currentLanguage === 'pl' ? 'Wymagania wstępne:' : 'Prerequisites:'}
                </h3>
                <div className={styles.prereqList}>
                  {prerequisites.map(pr => (
                    <span key={pr.id} className={styles.prereqTag}>
                      {pr.title[currentLanguage]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.actions}>
              <button className={styles.exploreButton}>
                {currentLanguage === 'pl' ? 'Eksploruj temat' : 'Explore topic'}
              </button>
              <button className={styles.simulationsButton}>
                {currentLanguage === 'pl' ? 'Pokaż symulacje' : 'Show simulations'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicsMap;
