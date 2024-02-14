import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../../Api/api';
import { UserDetailsContainer,UserDetailsItem,UserDetailsTitle } from './UserDetailPage.styles';

const UserDetailPage = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await fetchUserData(username); 
        setUserDetails(userData); 
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [username]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <UserDetailsContainer >
      <UserDetailsTitle variant="h2" >User Details for {userDetails.login}</UserDetailsTitle>
      <UserDetailsItem>Company: {userDetails.company}</UserDetailsItem>
      <UserDetailsItem>Twitter Username: {userDetails.twitter_username}</UserDetailsItem>
      <UserDetailsItem>Blog: {userDetails.blog}</UserDetailsItem>
      <UserDetailsItem>Followers: {userDetails.followers}</UserDetailsItem>
      <UserDetailsItem>Following: {userDetails.following}</UserDetailsItem>
      <UserDetailsItem>Public Repositories: {userDetails.public_repos}</UserDetailsItem>
    </UserDetailsContainer>
  );
};

export default UserDetailPage;
