import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostsComponent from "./components/PostsComponent";
import PostDetailComponent from "./components/PostDetailComponent";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<PostsComponent />} />
          <Route path='/posts/:id' element={<PostDetailComponent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
