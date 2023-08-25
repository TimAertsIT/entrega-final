import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/NotFound/NotFound";

const NotFoundPage = ( {isAuthenticated, handleLogout} ) => {
    return (
      <div>
        <Navigation isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
        <NotFound />
        </div>
    );
  };
  export default NotFoundPage;