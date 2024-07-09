import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostsComponent from "./components/PostsComponent";
import PostComponent from "./components/PostComponent";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<PostsComponent />} />
          <Route path='/posts/:postId' element={<PostComponent postId={1} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
