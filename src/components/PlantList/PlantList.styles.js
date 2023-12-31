import styled from 'styled-components';

export const StyledBackground = styled.div`
background-color: #002400; 
padding-bottom: 30px; 
`;

export const Styledh1 = styled.h1`
color: white; 
text-transform: uppercase;
text-align: center; 
margin-top: 0px; 
margin-bottom: 0px; 
padding-left: 3px;
padding-right: 3px; 
padding-top: 20px; 
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(25% - 40px);
  margin: 20px;
  background-color: white;
  border-radius: 25px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px white;}
  
    @media (max-width: 600px) {
      width: calc(100% - 40px);
    }
    @media (min-width: 601px) and (max-width: 1023px) {
      width: calc(50% - 40px);
    }
`;

export const StyledCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const StyledImage2 = styled.img`
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 274px;
  @media (max-width: 500px) {
    height: 282px;
  }
  @media (min-width: 501px) and (max-width: 600px) {
    height: 575px;
  }
  @media (min-width: 601px) and (max-width: 700px) {
    height: 275px;
  }
  @media (min-width: 701px) and (max-width: 800px) {
    height: 320px;
  }
  @media (min-width: 801px) and (max-width: 1024px) {
    height: 365px;
  }
`;

export const StyledButton = styled.button`
  background-color: white;
  color: darkgreen; 
  text-transform: uppercase;
  border: 1px solid #002400;
  border-radius: 15px; 
  padding: 10px; 
  margin-top: 10px;
  margin-bottom: 20px; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;

export const StyledCommonName = styled.p`
   color: darkgreen; 
   text-transform: uppercase; 
   padding-top: 10px; 
   text-align: center; 
   padding-left: 2px;
   padding-right: 2px; 
`;

export const LoadmoreButton = styled.button`
  background-color: white;
  color: darkgreen; 
  text-transform: uppercase;
  border: 1px solid #002400;
  border-radius: 15px; 
  padding: 10px; 
  margin-top: 20px;
  text-align: center; 
  display: block; 
  margin-left: auto;
  margin-right: auto; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;