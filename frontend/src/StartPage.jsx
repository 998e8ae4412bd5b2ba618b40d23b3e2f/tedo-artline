import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  &>div{
    border-radius: 28px;
    width: 48vw;
    height: 92vh;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(2rem, 1.3838rem + 1.9718vw, 3.75rem);
    color: var(--color-white);
    font-family: "Fixel Extra-Bold", serif;
    text-align: center;
  }
  
  
  
  @media(max-width: 768px){
    flex-direction: column;
    
    &>div{
      width: 90vw;
      height: 47vh;
    }
  }
`

const Digital = styled.div`
  background: rgb(151, 71, 255);
  background: linear-gradient(135deg, rgba(151, 71, 255, 1) 0%, rgba(19, 68, 240, 1) 100%);
`

const Architecture = styled.div`
  background-image: linear-gradient(to right, rgba(185, 163, 121, 0.41), #b9a379),
  linear-gradient(to bottom, #E0E0DE, rgba(185, 163, 121, 0.59));
`

const StartPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Digital onClick={()=>navigate("/digital/home")}>Digital Designs</Digital>
            <Architecture onClick={()=>navigate("/architecture/home")}>Architectural solutions</Architecture>
        </Container>
    );
};

export default StartPage;