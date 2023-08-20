import styled from 'styled-components';

export const StyledBackground = styled.div`
background-color: #002400; 
margin-top: 0; 
padding-top: 0; 
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

export const Styledh1 = styled.h1`
margin-top: 0; 
padding-top: 15px; 
color: #002400; 
text-align: center; 
text-transform: uppercase; 
`;

export const StyledImg = styled.img`
width: 200px; 
border-radius: 10px; 
display: block; 
margin-left: auto;
margin-right: auto; 
box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
transition: transform 0.2s;

  &:hover {
    transform: scale(2.0);
  }
`;

export const StyledCard = styled.div`
width: 50%; 
background-color: white; 
border-radius: 10px; 
padding-bottom: 15px; 
box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.8);
`;

export const StyledP = styled.p`
margin-top: 10px; 
color: #002400; 
text-align: center; 
margin-bottom: 15px; 
padding-left: 15px;
padding-right: 15px; 
`;

export const StyledDetail = styled.p`
color: green; 
text-align: center; 
text-transform: uppercase; 
`;