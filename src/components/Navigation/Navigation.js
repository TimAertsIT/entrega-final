import logo from '../../assets/logo.png';
import { NavigationWrapper, StyledDiv } from './Navigation.styles';
import { Link } from 'react-router-dom';

const Navigation = ( {isAuthenticated, handleLogout} ) => {
    return (
        <NavigationWrapper>
          <StyledDiv>
            <img src={logo} width="60"/>
            <Link to="/"><p>Home</p></Link>
          </StyledDiv>
          <StyledDiv>
            <Link to="/myplants"><p>My Plants</p></Link>
            <Link to="/register"><p>Register</p></Link>
            {isAuthenticated ? (
           <a href="#" onClick={handleLogout}>
           Logout
         </a>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}
          </StyledDiv>
        </NavigationWrapper>
      );
    }
  
  export default Navigation;