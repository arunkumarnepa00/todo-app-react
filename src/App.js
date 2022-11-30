import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Home from './components/pages/Home';
import CreateTodo from './components/pages/CreateTodo';
import UpdateTodo from './components/pages/UpdateTodo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/createTodo' element={<CreateTodo/>}></Route>
        <Route path='/updateTodo/:id' element={<UpdateTodo/>}></Route>
      </Routes>
    </Router>
  )
}
