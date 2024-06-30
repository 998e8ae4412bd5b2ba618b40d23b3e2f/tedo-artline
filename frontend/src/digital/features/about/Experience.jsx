import styled from "styled-components";
import {useTranslation} from "react-i18next";


const Container = styled.div`
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  text-align: center;

  & > h1 {
    font-size: clamp(2.625rem, 2.0769rem + 2.4359vw, 5rem);
    color: #1344F0;
    font-family: "Fixel Bold", serif;

  }

  & > h2 {
    color: #18194F;
    font-size: clamp(1.375rem, 0.9856rem + 1.7308vw, 3.0625rem);
  }

  & > p {
    margin-top: 25px;
    width: 62vw;
    font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
    color: #18194F;
    
  }
  
  @media(max-width: 768px){
    margin-top: 150px;
    
  }
`

const Experience = () => {
    const {t}=useTranslation()

    return (
        <Container>
            <h1>{t("main.about.experience.h1")}</h1>
            <h2>{t("main.about.experience.h2")}</h2>
            <p>{t("main.about.experience.p")}</p>
        </Container>
    );
};

export default Experience;