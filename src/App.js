import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './components/User_List_Page/UserListPage';
import UserDetailPage from './components/User_Detail_Page/UserDetailPage';

const App = () => {
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<UserListPage/>} />
        <Route path="/user/:username" element={<UserDetailPage/>} />
      </Routes>
    </Router>
    
  );
};

export default App;
