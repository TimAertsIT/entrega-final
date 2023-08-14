import logo from '../../assets/logo.png';
import { NavigationWrapper, StyledDiv } from './Navigation.styles';

const Navigation = () => {
    return (
        <NavigationWrapper>
          <StyledDiv>
            <img src={logo} width="60"/>
            <p>Home</p>
          </StyledDiv>
          <StyledDiv>
            <p>My Plants</p>
            <p>Register</p>
            <p>Login</p>
          </StyledDiv>
        </NavigationWrapper>
      );
    }
  
  export default Navigation;