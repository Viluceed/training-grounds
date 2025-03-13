import { Route, Routes } from 'react-router-dom';
import NewPostForm from '../features/posts/NewPostForm';
import PostsList from "../features/posts/PostsList";
import PostShow from '../features/posts/PostShow';
import Home from '../features/home/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<PostsList />} />
      <Route path='/posts/:id' element={<PostShow />} />
      <Route path='posts/new' element={<NewPostForm />} />
    </Routes>
  )
}

export default AppRoutes;