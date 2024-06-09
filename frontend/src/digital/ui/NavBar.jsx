import Logo from "./Logo.jsx";
import styled from "styled-components";
import StyledLink from "./StyledLink.jsx";
import {useTranslation} from "react-i18next";

const Container = styled.nav`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1120px) {
    justify-content: flex-start;
    width: 70%;
  }
`

const Links = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`


const NavBar = () => {

    return (
        <Container>
            <Logo/>
            <Links>
                <StyledLink to={"digital/home"}>Home</StyledLink>
                <StyledLink to={"digital/services/ui-ux"} path={"service"}>Services</StyledLink>
                <StyledLink to={"digital/about"}>About Us</StyledLink>
                <StyledLink to={"digital/partners"}>Our Partners</StyledLink>
                <StyledLink to={"digital/contact"}>Let’s talk <img src="/digital/ui/arrow-up-right.svg" alt="arrow"/></StyledLink>
            </Links>
        </Container>
    );
};

export default NavBar;


