import styled, {css} from "styled-components";
import Burger from "./Burger.jsx";
import {Link} from "react-router-dom";
import {useBurger} from "../context/BurgerContext.jsx";
import {useTranslation} from "react-i18next";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #1344F0;
  z-index: 99999999;

  display: grid;
  grid-template-rows: auto 1fr auto;
`


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;

  & > h2 {
    font-family: "Fixel SemiBold Italic", serif;
    font-size: 28px;
    color: #F2F6FF;
  }
`

const Links = styled.nav`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`

const StyledLink = styled(Link)`
  width: 200px;
  text-align: center;
  text-decoration: none;
  font-size: 28px;
  color: #F2F6FF;
  border-radius: 12px;
  transition: 0.4s;
  padding: 10px 0;

  &:hover {
    color: #1344F0;
    background: #F2F6FF;
  }

  ${(props) =>
          props.active === "active" &&
          css`
            color: #1344F0;
            background: #F2F6FF;
          `};

`

const Talking = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  height: 65px;
  background: #4DDEC4;
  font-size: clamp(3.125rem, -0.625rem + 18.75vw, 4.0625rem);
  color: #F2F6FF;
  font-family: "Fixel SemiBold Italic", serif;
  border-radius: 0;
`

const MobileMenu = () => {
    const {toggleBurger} = useBurger();
    const {t} = useTranslation();
    const isActive = (path) => location.pathname.includes(path) ? "active" : "";

    return (
        <Container>
            <Header>
                <h2>Menu</h2>
                {window.innerWidth <= 768 ? <Burger/> : null}
            </Header>
            <Links>
                <StyledLink onClick={toggleBurger} active={isActive("/digital/home")} to={"digital/home"}>Home</StyledLink>
                <StyledLink onClick={toggleBurger} active={isActive("/digital/services")} to={"digital/services/ui-ux"}>Services</StyledLink>
                <StyledLink onClick={toggleBurger} active={isActive("/digital/about")} to={"digital/about"}>About Us</StyledLink>
                <StyledLink onClick={toggleBurger} active={isActive("/digital/partners")} to={"digital/partners"}>Our Partners</StyledLink>
            </Links>
            <Talking active={isActive("/digital/contact")} to={"digital/contact"}>
                Let’s talk <img src="/digital/ui/arrow-up-right.svg" alt="arrow"/>
            </Talking>
        </Container>
    );
};

export default MobileMenu;