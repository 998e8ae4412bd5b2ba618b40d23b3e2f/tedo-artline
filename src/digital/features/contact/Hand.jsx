import styled from "styled-components";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 1500px;


  @media (max-width: 768px) {
    height: 1000px;
    overflow: hidden;
    margin-top: -130px;
  }


`

const GreenImg = styled.img`
  position: absolute;
  z-index: 2;
  width: 60%;
  top: -5%;

  @media (max-width: 768px) {
    top: -25%;
    width: 80%;
  }

  @media (max-width: 768px) {
    top: -200px;
    left: -100px;
    width: 500px;
  }
`


const BigBlueImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 120%;
  top: 2%;

  @media (max-width: 768px) {
    top: -50px;
    width: 800px;
  }


`


const SmallBlueImg = styled.img`
  position: absolute;
  z-index: 1;
  top: 32vw;
  width: 80%;

  @media (max-width: 768px) {
    top: 20%;
    left: -100px;
  }


`


const Heading = styled.h2`
  font-size: clamp(5rem, 0.5rem + 9.375vw, 11.75rem);
  color: #F2F6FF;
  font-family: "Fixel Bold", serif;
  text-align: center;
  position: absolute;
  z-index: 15;
  top: 15vw;
  width: 70%;


  @media (max-width: 768px) {
    font-size: clamp(5.75rem, 4.2059rem + 6.8627vw, 7.5rem);
    width: 50%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

  }

  @media (max-width: 430px) {
    left: 50%;
    width: 80%;
  }
`


const HandImg = styled.img`
  position: absolute;
  top: 40vw;
  width: 100%;
  z-index: 4;


  @media (max-width: 768px) {
    display: none;
  }
`


const Hand = () => {
    const {t} = useTranslation()

    return (
        <Container>
            <GreenImg src="/digital/contact/green.svg" alt="green-img"/>
            <BigBlueImg src="/digital/contact/blue.svg" alt="blue-img"/>
            <SmallBlueImg src="/digital/contact/blue.svg" alt="blue-img"/>
            <Heading>{t("main.contact.hand")}</Heading>
            <HandImg src="/digital/contact/hand.svg" alt="hand-img"/>
        </Container>
    );
};

export default Hand;