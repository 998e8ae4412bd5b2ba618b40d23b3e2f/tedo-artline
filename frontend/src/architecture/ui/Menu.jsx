import styled, {css} from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useNavigateTo} from "../hooks/useNavigateTo.jsx";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    height: calc(100vh - 85px);
  }

  
  ${props => props.ismenu === "false" && css`
    display: none;
  `}
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 900px) {
    gap: 0;
    top: -10px;
    transform: translate(-50%, 0);
    
  }
  
`

const PContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 50vw;

  & > p {
    font-size: clamp(1.5rem, 1.1699rem + 1.0563vw, 2.4375rem);
    font-family: "Fixel Semi-Bold Italic", serif;
    color: var(--color-black);
  }

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 900px) {
    width: 80vw;
    margin-top: 2rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    width: 75vw;
  }

`

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.5vh;
  width: 50vw;
  

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 900px) {
    width: 40vw;
    gap: 2rem;
  }

  @media (max-width: 650px) {
    width: 75vw;
    gap: 1rem;
  }


`

const StyledLink = styled(Link)`
  font-size: clamp(3.375rem, 1.8125rem + 5vw, 7.8125rem);
  font-family: "Fixel Semi-Bold Italic", serif;
  color: rgba(45, 47, 47, 0.5) !important;
  text-decoration: none;
  position: relative;


  ${props => props.active === "active" && css`
    color: var(--color-black) !important;
    margin-left: 9rem;
    transition: 1s;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -9rem;
      width: 7rem;
      height: 7rem;
      background: url('/architecture/ui/link-arrow.svg') no-repeat center center;
      background-size: contain;
    }

    @media (max-width: 1300px) {
      margin-left: 8rem;

      &:before {
        width: 5rem;
        height: 5rem;
        left: -7rem;

      }
    }

    @media (max-width: 900px) {
      margin-top: 3rem;
    }

    @media (max-width: 768px) {
      margin-left: 0;

      &:before {
        width: 0;
        height: 0;
      }
    }
  `}
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  width: 400px;
  height: 95px;
  background: var(--color-black);
  color: var(--color-yellow);
  font-family: "Fixel Extra-Bold", serif;
  font-size: clamp(1.375rem, 0.9569rem + 1.338vw, 2.5625rem);
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 900px) {
    width: 100vw;
    right: 0;
    bottom: 0;
  }
`

const Menu = ({isMenu}) => {
    const location = useLocation();
    const navigateTo = useNavigateTo();
    const isActive = (path) => {
        return location.pathname.includes(path) ? "active" : null;
    };

    const scrollToSection = (sectionId) => {
        navigateTo(`/architecture/home?section=${sectionId}`);
    };

    return (
        <Container ismenu={isMenu}>
            <Content>
                <PContainer>
                    <p onClick={() => scrollToSection("building")}>Building</p>
                    <p onClick={() => scrollToSection("landscape-design")}>Landscape Design</p>
                    <p onClick={() => scrollToSection("interior-design")}>Interior Design</p>
                </PContainer>
                <Links>
                    <StyledLink active={isActive("architecture/home")} to={"architecture/home"}>Home</StyledLink>
                    <StyledLink active={isActive("architecture/about")} to={"architecture/about"}>About Us</StyledLink>
                    <StyledLink active={isActive("architecture/contacts")} to={"architecture/contacts"}>Contacts</StyledLink>
                </Links>
            </Content>
            <ButtonContainer>Digital Design</ButtonContainer>
        </Container>
    );
};

export default Menu;

