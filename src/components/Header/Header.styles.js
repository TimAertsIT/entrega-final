import { styled } from 'styled-components';
import backgroundImage from '../../assets/header.jpg';

export const StyledBackground = styled.div`
height: 300px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px; 
    position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  h1, h3 {
    text-transform: uppercase;
    position: relative;
    color: white;
    text-align: center; 
  }
`;