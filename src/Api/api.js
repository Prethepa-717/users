import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`${BASE_URL}/${username}`);
      const userData = response.data;
      const { id, avatar_url, login, name, company, twitter_username,followers,following,blog,public_repos } = userData;
      return { id, avatar_url, login, name, company, twitter_username,followers,following,blog,public_repos};
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };
  



  




  
  
 
