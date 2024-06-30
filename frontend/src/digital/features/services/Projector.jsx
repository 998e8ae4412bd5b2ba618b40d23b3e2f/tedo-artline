import styled from "styled-components";
import {useTranslation} from "react-i18next";


const StyledProjector = styled.div`
  margin-top: 150px;
  width: 100vw;
  overflow: hidden;
  position: relative;

  & > img {
    width: 120vw;
    margin-left: -40px;
  }

  & > h2 {
    position: absolute;
    top: 55%;
    right: 0;
    transform: translate(0, -50%);
    font-size: clamp(1.875rem, -0.2857rem + 3.5714vw, 4rem);
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
    width: 55vw;

  }

  @media (max-width: 1400px) {
    & > h2 {
      width: 65vw;
    }
  }

  @media (max-width: 768px) {
    margin: 100px auto 0;

    & > img {
      width: 120vw;
    }

    & > h2 {
      width: 85vw;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      line-height: 1.6;
      letter-spacing: 1px;
    }
  }
`
const Projector = () => {
    const {t}=useTranslation();

    return (
        <StyledProjector>
            <img src={window.innerWidth <= 768 ? "/digital/services/bg.svg" : "/digital/services/projector.svg"}
                 alt="projector-img"/>
            <h2>{t("main.service.projector")}</h2>
        </StyledProjector>
    );
};

export default Projector;