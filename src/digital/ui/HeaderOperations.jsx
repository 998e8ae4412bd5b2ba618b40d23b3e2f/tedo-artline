import styled from "styled-components";
import {Link} from "react-router-dom";
import Language from "./Language.jsx";
import Burger from "./Burger.jsx";
import {useTranslation} from "react-i18next";


const Container = styled.div`
  width: auto;
  height: 115px;

  display: grid;
  grid-template-columns: 50px 50px 168px;
  grid-template-rows: auto 50px;
  align-items: center;
  gap: 12px;


  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    height: 42.5px;
  }
`


const SocialLinkedin = styled.div`
  width: 50px;
  height: 50px;
  background: url("/digital/ui/linkedin.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/linkedin-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 29px;
    height: 29px;
    border-radius: 6px;
  }
`


const SocialMail = styled.div`
  width: 50px;
  height: 50px;
  background: url("/digital/ui/mail.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/mail-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 29px;
    height: 29px;
    border-radius: 6px;
  }
`;


const Solutions = styled(Link)`
  text-decoration: none;
  border-radius: 11px;
  grid-column: span 3;
  background-image: linear-gradient(to right, rgba(185, 163, 121, 0.41), #b9a379),
  linear-gradient(to bottom, #E0E0DE, rgba(185, 163, 121, 0.59));
  background-position: left top, left top;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
  font-family: "Fixel SemiBold", serif;
  color: #F2F6FF;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const HeaderOperations = () => {
    const {t}=useTranslation();

    const redirect = (path) => {
        window.location.href = path;
    };

    return (
        <Container>
            <SocialLinkedin onClick={()=>redirect('https://www.linkedin.com')}/>
            <SocialMail onClick={()=>redirect('https://www.gmail.com')}/>
            <Language/>
            <Solutions to={"/architecture/home"}>{t("header.solutions")}</Solutions>
            {window.innerWidth <= 768 ? <Burger/> : null}
        </Container>
    );
};

export default HeaderOperations;