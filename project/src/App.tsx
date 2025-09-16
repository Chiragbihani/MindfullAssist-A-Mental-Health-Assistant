import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import TestPage from './pages/TestPage';
import ResourcesPage from './pages/ResourcesPage';
import MediaPage from './pages/MediaPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;