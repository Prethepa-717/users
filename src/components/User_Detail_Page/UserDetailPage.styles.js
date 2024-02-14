


// UserDetailPage.styles.js
import styled from 'styled-components';
import Card from '@mui/material/Card';


  const UserDetailsContainer = styled(Card)`
  padding: 90px;
  margin: 100px auto;
  max-width: 850px;
  background-image: url('/Background.jpg'); 
  background-size: cover;
  background-position: ;
  padding-top: 20px;
  
`;

 const UserDetailsTitle = styled.h2`
  margin-bottom: 20px;
  padding-top: 20px;
  text-transform: uppercase;
  font-size: 40px;
  color: #660d6e

`;

 const UserDetailsItem = styled.div`
  margin-bottom: 10px;
  padding-top: 15px;
  color:  #cc0d69;
  font-size: 20px;
  font-weight: bold
`;


export{UserDetailsContainer,UserDetailsTitle, UserDetailsItem} 