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
    const {t}=useTranslation();

    return (
        <Container>
            <Logo/>
            <Links>
                <StyledLink to={"digital/home"}>{t("header.home")}</StyledLink>
                <StyledLink to={"digital/services/ui-ux"} path={"service"}>{t("header.services")}</StyledLink>
                <StyledLink to={"digital/about"}>{t("header.about")}</StyledLink>
                <StyledLink to={"digital/partners"}>{t("header.partners")}</StyledLink>
                <StyledLink to={"digital/contact"}>{t("header.talk")} <img src="/digital/ui/arrow-up-right.svg" alt="arrow"/></StyledLink>
            </Links>
        </Container>
    );
};

export default NavBar;


