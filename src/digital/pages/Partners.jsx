import styled from "styled-components";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  margin-top: 140px;
  width: 90vw;

  @media (max-width: 768px) {
    margin-top: -30px;

  }
`

const Heading = styled.div`
  & > h1 {
    font-size: clamp(2.625rem, 2.0398rem + 2.6752vw, 5.25rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;
  }

  & > p {
    font-size: clamp(1.3125rem, 1.0199rem + 1.3376vw, 2.625rem);
    color: #4DDEC4;
    font-family: "Fixel Bold", serif;
  }
`

const TedoGroup = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  gap: 40px;

  & p {
    font-size: clamp(1rem, 0.7771rem + 1.0191vw, 2rem);
    color: #18194F;
    margin-bottom: 30px;

  }

  & > div {
    position: relative;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    flex-direction: column;
  }
`

const TedoGeneration = styled.div`
  width: 90%;
  margin: 150px auto 0;
  display: flex;
  align-items: center;
  gap: 40px;

  & p {
    font-size: clamp(1rem, 0.7771rem + 1.0191vw, 2rem);
    color: #18194F;
    margin-bottom: 30px;

  }

  & > div {
    position: relative;
  }

  @media (max-width: 768px) {
    margin-top: 120px;
    flex-direction: column;
    gap: 0;
  }
`

const TextBox = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`

const PartnerImg = styled.img`
  width: 300px;
  height: auto;

`

const SmallQuote = styled.img`
  width: 50px;
  padding-right: 10px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 10px;
    width: 20px;
  }
`

const BigQuote = styled.img`
  width: 20px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`

const Slogan = styled.h2`
  margin-top: 200px;
  font-size: clamp(2.625rem, 2.207rem + 1.9108vw, 4.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;

  @media (max-width: 768px) {
    margin-top: 150px;
    margin-bottom: -100px;
  }
`


const Partners = () => {
    const {t} = useTranslation()

    return (
        <Container>
            <Heading>
                <h1>{t("main.partners.heading.h1")}</h1>
                <p>{t("main.partners.heading.p")}</p>
            </Heading>
            <TedoGroup>
                <div>
                    <PartnerImg src="/digital/partners/tedo-group.svg" alt="tedo-group-image"/>
                </div>
                <TextBox>
                    <p><SmallQuote src="/digital/partners/blue-quote.svg" alt="quote-icon"/>
                        {t("main.partners.text1.p1")}
                    </p>
                    <p>{t("main.partners.text1.p2")}</p>
                    <BigQuote src="/digital/partners/blue-quote.svg" alt="quote-icon"/>
                </TextBox>
            </TedoGroup>
            <TedoGeneration>
                <TextBox>
                    <p>
                        <SmallQuote src="/digital/partners/green-quote.svg" alt="quote-icon"/>
                        {t("main.partners.text2.p1")}
                    </p>
                    <p>
                        {t("main.partners.text2.p2")}
                    </p>
                    <p>
                        {t("main.partners.text2.p3")}
                    </p>
                    <BigQuote src="/digital/partners/green-quote.svg" alt="quote-icon"/>
                </TextBox>
                <div>
                    <PartnerImg src="/digital/partners/tedo-generation.svg" alt="tedo-generation-image"/>
                </div>
            </TedoGeneration>
            <Slogan>{t("main.partners.slogan")}</Slogan>
        </Container>
    );
};

export default Partners;