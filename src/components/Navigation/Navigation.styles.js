import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  position: sticky;
  top: 0;
  z-index: 9999;
  background: white; 
  
  p {
    text-transform: uppercase;
    margin: 0 10px;
    color: darkgreen; 
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;