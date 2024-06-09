import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
  width: auto;
  height: 53px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0.5rem;
  cursor: pointer;

  & > p {
    font-family: "Fixel SemiBold", serif;
    font-size: clamp(1.5rem, 0.6875rem + 1.6927vw, 2.71875rem);
  }

  & > img {
    width: 49px;
  }

  @media (max-width: 850px) {
    width:190px;

    & > img {
      width: 30px;
    }
  }
  
  @media(max-width: 768px){
    width: 50px;
    
    & > p {
      display: none;
    }
    
    & > img {
      width: 50px;
    }
    
  }
`
const Logo = () => {
    const navigate = useNavigate();

    return (
        <Container onClick={()=>navigate("/home")}>
            <img src="/digital/ui/logo.svg" alt="logo-icon"/>
            <p>Tedo Artline</p>
        </Container>
    );
};

export default Logo;