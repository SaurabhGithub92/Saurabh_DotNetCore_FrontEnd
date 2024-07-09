import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostsComponent from "./components/PostsComponent";
import PostDetailComponent from "./components/PostDetailComponent";
import { IPostService } from './services/IPostService';
import PostService from './services/PostService';

const App: React.FC = () => {
  const postService: IPostService = new PostService();
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<PostsComponent postService={postService} />} />
          <Route path='/posts/:id' element={<PostDetailComponent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
