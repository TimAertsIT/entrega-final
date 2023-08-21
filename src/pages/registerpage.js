import Register from "../components/Register/Register";
import Navigation from "../components/Navigation/Navigation";

const RegisterPage = ( {isAuthenticated} ) => {
  return (
    <div>
    <Navigation isAuthenticated={isAuthenticated}/>
    <Register />
    </div>
  );
};
export default RegisterPage;