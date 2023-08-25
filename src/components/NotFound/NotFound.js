import { StyledImg, StyledP } from './NotFound.styles';
import cactus from "../../assets/cactus.jpg";

const NotFound = () => {
    return (
      <div>
       <StyledImg src={cactus}/>
        <StyledP>It looks like you've stumbled into a barren wasteland. There's nothing here but this lonely cactus.</StyledP>
    </div>
    );
  }
  
  export default NotFound;