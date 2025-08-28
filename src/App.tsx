import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TopicsMap from './components/TopicsMap/TopicsMap';
import './i18n';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/topics" element={<TopicsMap />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;