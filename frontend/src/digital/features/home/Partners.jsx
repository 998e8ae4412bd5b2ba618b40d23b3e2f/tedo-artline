import styled from "styled-components";
import Slogan from "./Slogan.jsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  margin: 350px auto 0;
  width: 90vw;
  height: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Heading = styled.h2`
  color: #1344F0;
  font-size: clamp(4.0625rem, 3.1971rem + 3.8462vw, 7.8125rem);
  font-family: "Fixel Bold", serif;

  & > span {
    color: #4DDEC4;
    font-size: 125px;
    font-family: "Fixel Bold", serif;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 45vw 45vw;

  & img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Big = styled.img`
  grid-row: span 2;

  @media (max-width: 768px) {
    order: 3;
  }
`;

const GroupContainer = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const GenerationContainer = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Layer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(19, 68, 240, 0.82);
  opacity: 0;
  z-index: 10;
  transition: opacity 0.6s;


  ${GroupContainer}:hover &,
  ${GenerationContainer}:hover & {
    opacity: 1;
  }

  & > button {
    border-radius: 50%;
    border: none;
    width: 200px;
    height: 200px;
    background: #18194F;
    font-family: "Fixel SemiBold", serif;
    font-size: 28px;
    color: #F2F6FF;
    cursor: pointer;


  }
`;

const Partners = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Heading>{t('main.home.partners.title')}</Heading>
                <Images>
                    <Big src="/digital/home/partners-big-image.svg" alt="poster" />
                    <GroupContainer>
                        <Layer>
                            <button onClick={() => navigate("/digital/partners")}>
                                {t('main.home.partners.button')}
                            </button>
                        </Layer>
                        <img src="/digital/home/tedo-group.svg" alt="tedo-group image" />
                    </GroupContainer>
                    <GenerationContainer>
                        <Layer>
                            <button onClick={() => navigate("/digital/partners")}>
                                {t('main.home.partners.button')}
                            </button>
                        </Layer>
                        <img src="/digital/home/tedo-generation.svg" alt="tedo-generation image" />
                    </GenerationContainer>
                </Images>
            </Container>
            <Slogan />
        </>
    );
};

export default Partners;
