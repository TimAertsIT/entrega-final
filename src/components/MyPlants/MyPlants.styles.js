import styled from 'styled-components';

export const StyledBackground = styled.div`
background-color: #002400; 
padding-bottom: 30px; 
margin-top: 20px; 
`;

export const Styledh1 = styled.h1`
color: white; 
text-transform: uppercase;
text-align: center; 
margin-top: 10px; 
margin-bottom: 20px; 
padding-top: 20px; 
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.333% - 40px);
  margin: 20px;
  background-color: white;
  border-radius: 25px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px white;
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

export const StyledButton = styled.button`
  background-color: white;
  color: darkgreen; 
  text-transform: uppercase;
  border: 1px solid #002400;
  border-radius: 15px; 
  padding: 10px; 
  margin-top: 20px;
  margin-bottom: 20px; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;

export const StyledButton2 = styled.button`
display: block;
margin-left: auto;
margin-right: auto; 
  background-color: white;
  color: #002400;
  border: 1px solid #002400;
  border-radius: 15px; 
  padding: 10px; 
  margin-top: 5px;
  margin-bottom: 5px; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;

export const StyledCommonName = styled.p`
   color: darkgreen; 
   text-transform: uppercase; 
   padding-top: 10px; 
`;

export const PruneContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledPrune = styled.div`
  display: inline-block; 
  align-items: center;
  color: #002400;
  margin-left: 20px; 
  margin-bottom: 20px; 
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px; 
  background-color: white;
  border-radius: 5px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px white;
    background-color: darkgreen;
    color: white; 
`;

export const StyledWater = styled.div`
  display: inline-block; 
  align-items: center;
  color: #002400;
  margin-left: 20px; 
  margin-bottom: 5px; 
  margin-top: 20px; 
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px; 
  background-color: white;
  border-radius: 5px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;

  &:hover {
    box-shadow: 0px 5px 15px white;
    background-color: darkgreen;
    color: white; 
    transform: scale(1.05);
`;

export const StyledWater2 = styled.div`
  display: inline-block; 
  align-items: center;
  color: #002400;
  margin-left: 20px; 
  margin-bottom: 5px; 
  margin-top: 20px; 
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px; 
  background-color: white;
  border-radius: 5px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px white;
    background-color: red;
    color: white; 
`;