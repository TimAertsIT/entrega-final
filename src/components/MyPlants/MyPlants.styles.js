import styled from 'styled-components';
import pruning from '../../assets/pruning.jpg';
import watering from '../../assets/watering.jpg';

export const StyledBackground = styled.div`
background-color: #002400; 
padding-bottom: 30px; 
margin-top: 20px; 
`;

export const Styledh1 = styled.h1`
color: white; 
text-transform: uppercase;
text-align: center; 
margin-top: 20px; 
margin-bottom: 20px; 
padding-top: 20px; 
z-index: 1;
position: relative; 
`;

export const PictureDiv = styled.div`
background-image: url(${pruning});
background-size: cover;
display: flex;
  align-items: center;
justify-content: center;
position: relative;
height: 300px; 
border-top: 3px solid white;
border-bottom: 3px solid white; 
margin-top: 20px; 
margin-bottom: 20px; 
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}`

export const PictureDiv2 = styled.div`
background-image: url(${watering});
background-size: cover;
background-position: center;
display: flex;
  align-items: center;
justify-content: center;
position: relative;
height: 300px; 
border-top: 3px solid white;
border-bottom: 3px solid white; 
margin-top: 20px; 
margin-bottom: 20px; 
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
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
    box-shadow: 0px 5px 15px white;}
    @media (max-width: 600px) {
        width: calc(100% - 40px);
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
  border: none; 
  font-weight: bold; 
  border-radius: 15px; 
  padding-top: 10px; 
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px; 
  box-shadow: 0px 5px 10px white;
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
  margin-right: 20px; 
  margin-bottom: 20px; 
  margin-top: 20px; 
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px; 
  background-color: white;
  border-radius: 5px; 
  box-shadow: 0px 0px 5px white;
  transition: transform .2s;
  text-align: center; 

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
  margin-right: 20px; 
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
  text-align: center; 

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
  margin-right: 20px; 
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
  text-align: center; 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px white;
    background-color: red;
    color: white; 
`;

export const StyledInput = styled.input`
display: inline-block; 
align-items: center;
color: #002400;
margin-left: 20px; 
margin-right: 20px; 
margin-bottom: 20px; 
margin-top: 10px; 
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

export const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledSpan = styled.span`
 font-weight: bold; 
`;