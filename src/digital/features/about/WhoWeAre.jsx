import styled from "styled-components";
import {Trans, useTranslation} from "react-i18next";

const Container = styled.div`
  width: 82vw;
  margin-top: 180px;

  & > p {
    width: 70vw;
    max-width: 830px;
    font-size: clamp(1rem, 0.726rem + 1.2179vw, 2.1875rem);
    font-family: "Fixel Regular Italic", serif;
    color: #1344F0;

  }

  & > img {
    margin-top: 20px;
    width: 66vw;
    max-width: 1280px;
  }

  & > h1 {
    margin-top: 20px;
    font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
    color: #1344F0;
    font-family: "Fixel Bold", serif;

    & > span {
      color: #4DDEC4;
      font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
      font-family: "Fixel Bold", serif;
    }
  }

  @media (max-width: 768px) {
    margin-top: -30px;
  }
`

const WhoWeAre = () => {
    const {t}=useTranslation()
    return (
        <Container>
            <p>{t("main.about.welcome.p")}</p>
            <h1>
                <Trans i18nKey="main.about.welcome.h1" components={{ 1: <span /> }} />
            </h1>
            <img src={window.innerWidth <= 768 ? "/digital/about/dots-mobile.svg" : "/digital/about/dots-desktop.svg"} alt="dots-image"/>
        </Container>
    );
};

export default WhoWeAre;