import styled from "styled-components";
import {useTranslation} from "react-i18next";


const Container = styled.div`
  margin-top: 190px;
  width: 100vw;

  @media (max-width: 768px) {
    margin-bottom: -100px;
  }
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 550px 1fr;
  align-items: center;
  padding-left: 120px;

  min-height: 360px;
  color: #F2F6FF;
  background: #1344F0;
  border-bottom: 12px solid #4DDEC4;
  position: relative;

  & > img {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }


  @media (max-width: 1600px) {
    grid-template-columns: 500px 1fr;
    padding-left: 100px;
  }

  @media (max-width: 1300px) {
    grid-template-columns:  420px 1fr;
    padding-left: 60px;
  }

  @media (max-width: 968px) {
    grid-template-columns: 300px 1fr;
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    padding: 50px 0 100px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;

    color: #F2F6FF;
    background: #1344F0;
    border-bottom: 12px solid #4DDEC4;
    position: relative;

    & > img {
      top: 90%;
      right: 50%;
      transform: translate(50%, -50%);
      width: 100%;
    }
  }

`


const Name = styled.h2`
  font-family: "Fixel SemiBold Italic", serif;
  font-size: clamp(1.75rem, 1.3462rem + 1.7949vw, 3.5rem);
  z-index: 3;
  color: #F2F6FF;


  @media (max-width: 768px) {
    width: 70vw;
  }
`

const Description = styled.div`
  width: 50vw;
  z-index: 2;

  & > p {
    margin-bottom: 15px;
    font-family: "Fixel ExtraLight", serif;
    font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
    color: #F2F6FF;

  }

  @media (max-width: 1600px) {
    width: 45vw;
  }

  @media (max-width: 768px) {
    width: 70vw;
    margin-top: 20px;

    & > p {
      margin-bottom: 10px;
    }
  }
`

const Designers = () => {
    const {t} = useTranslation()

    let image = {
        1: "/digital/about/line-desktop-1.svg",
        2: "/digital/about/line-desktop-2.svg",
        3: "/digital/about/line-desktop-3.svg",
    }
    if (window.innerWidth <= 768) {
        image = {
            1: "/digital/about/line-mobile-1.svg",
            2: "/digital/about/line-mobile-2.svg",
            3: "/digital/about/line-mobile-3.svg",
        }
    }

    return (
        <Container>
            <Item>
                <Name>{t("main.about.designers.1.name")}</Name>
                <Description>
                    <p>{t("main.about.designers.1.p1")}</p>
                    <p>{t("main.about.designers.1.p2")}</p>
                    <p>{t("main.about.designers.1.p3")}</p>
                </Description>
                <img src={image[1]} alt="line-img"/>
            </Item>
            <Item>
                <Name>{t("main.about.designers.2.name")}</Name>
                <Description>
                    <p>{t("main.about.designers.2.p1")}</p>
                    <p>{t("main.about.designers.2.p2")}</p>
                    <p>{t("main.about.designers.2.p3")}</p>
                </Description>
                <img src={image[3]} alt="line-img"/>
            </Item>
            <Item>
                <Name>{t("main.about.designers.3.name")}</Name>
                <Description>
                    <p>{t("main.about.designers.3.p1")}</p>
                    <p>{t("main.about.designers.3.p2")}</p>
                    <p>{t("main.about.designers.3.p3")}</p>
                </Description>
                <img src={image[2]} alt="line-img"/>
            </Item>
        </Container>
    )
        ;
};

export default Designers;