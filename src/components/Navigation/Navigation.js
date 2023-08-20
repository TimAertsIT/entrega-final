import logo from '../../assets/logo.png';
import { NavigationWrapper, StyledDiv } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <NavigationWrapper>
          <StyledDiv>
            <img src={logo} width="60"/>
            <Link to="/"><p>Home</p></Link>
          </StyledDiv>
          <StyledDiv>
            <p>My Plants</p>
            <Link to="/register"><p>Register</p></Link>
            <Link to="/login"><p>Login</p></Link>
          </StyledDiv>
        </NavigationWrapper>
      );
    }
  
  export default Navigation;