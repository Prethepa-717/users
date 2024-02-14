
import styled from 'styled-components';

export const UserListContainer = styled.div`
  padding: 20px;
  .title{
    text-transform: uppercase;
    color: #C71585;
    text-align: center;
`;

export const UserTile = styled.div`
  display: inline-block;
  width: 15%; 
  margin-right: 30px;
  margin-bottom: 20px;
  vertical-align: top;

  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }

  @media (max-width: 480px) {
    width: calc(100% - 15px);
  }
  
`;

export const UserInfo = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  .link{
   text-decoration: none;
    color:  #3399e6;
  }
  
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  
`;

export const Name = styled.p`
  margin-top: 5px;
  font-size: 20px;
 
  
  `;

 


