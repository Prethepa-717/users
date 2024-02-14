import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../../Api/api';
import { UserListContainer, UserInfo, UserTile, Name, UserName, Avatar, } from './UserListPage.styles';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        const usersData = await Promise.all(response.data.map(async user => {
          const userData = await fetchUserData(user.login);
          return userData;
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    
    <UserListContainer>
    <h1 className='title'> GitHub User Directory </h1>
      <ul>
        {users.map(user => (
          <UserTile key={user.id}>
            <UserInfo>
                <Avatar src={user.avatar_url} alt={user.login} />
                <Link className= "link   " to={`/user/${user.login}`}>
                <UserName>{user.login}</UserName>
                <Name className='name'>{user.name}</Name>
                </Link>
                
                </UserInfo>
            </UserTile>
        ))}
      </ul>
      
    </UserListContainer>
    
  );
};

export default UserListPage;
