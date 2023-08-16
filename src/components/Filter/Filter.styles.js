import styled from 'styled-components';

export const FilterButton = styled.button`
  background: white; 
  color: darkgreen;
  text-transform: uppercase; 
  padding-top: 20px;
  padding-bottom: 20px; 
  padding-right: 20px;
  padding-left: 20px; 
  border: none; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
  `;

  export const SelectButton = styled.button`
  background: white; 
  color: darkgreen;
  text-transform: uppercase; 
  padding-top: 20px;
  padding-bottom: 20px; 
  padding-right: 20px;
  padding-left: 20px; 
  border: 1px solid darkgreen; 
  border-radius: 25px;
  margin-left: 5px;
  margin-right: 5px; 
  margin-top: 5px;
  margin-bottom: 5px; 
  transition: background-color .5s, color .5s;
  &:hover {
    background-color: darkgreen;
    color: white; 
`;

export const StyledP = styled.p`
 color: darkgreen;
 text-transform: uppercase;
 margin-bottom: 5px;
 padding-top: 10px;
 text-align: center; 
  `;

  export const AlignDiv = styled.div`
 text-align: center; 
  `;

  export const FilterArea = styled.div`
 padding-bottom: 20px;
  `;