import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostsList from "./components/PostsList";
import PostDetail from "./components/PostDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<PostsList />} />
          <Route path='/posts/:postId' element={<PostDetail postId={1} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
