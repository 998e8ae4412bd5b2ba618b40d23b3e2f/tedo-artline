import {useState} from "react";
import styled, {css, keyframes} from "styled-components";
import {useTranslation} from "react-i18next";

const bounce = keyframes`
  0% {
    height: 50px;
  }
  60% {
    height: 100px;
  }
  90% {
    height: 85px;
  }
  100% {
    height: 100px;
  }
`;

const bounceMobile = keyframes`

`



const LanguageContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: grid;
  transition: 0.8s;

  @media (max-width: 768px) {
    height: 29px;
    width: 90px;
  }

  ${props => props.issecondlanguage === "true" && css`
    height: 100px;
    animation: ${bounce} 0.5s ease-in;

    & > div:last-child {
      border-radius: 0 0 12px 12px;
      background: #1344F0;
    }

    & > div:first-child {
      border-radius: 12px 12px 0 0;
    }

    @media (max-width: 768px) {
      animation: ${bounceMobile} 0.5s ease-in;
      height: 58px;

    }
  `}
`

const English = styled.div`
  width: 100%;
  height: 50px;
  background: #4DDEC4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  cursor: pointer;

  & > p {
    font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
    font-family: "Fixel SemiBold", serif;
    color: #F2F6FF;
    margin-bottom: -5px;
  }

  @media(max-width: 768px){
    height: 29px;

    & > p {
      font-size: 10px;
    }
    
    & > img{
      width: 17px;
    }
  }
`

const Ukrainian = styled.div`
  width: 100%;
  height: 50px;
  background: #4DDEC4;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11px;
  cursor: pointer;

  & > p {
    font-size: clamp(0.8125rem, 0.7025rem + 0.3521vw, 1.125rem);
    font-family: "Fixel SemiBold", serif;
    color: #F2F6FF;
    margin-bottom: -5px;
  }

  @media(max-width: 768px){
    height: 29px;

    & > p {
      font-size: 10px;
    }

    & > img{
      width: 17px;
    }
  }
`

const Language = () => {
    const [language, setLanguage] = useState("en")
    const [isSecondLanguage, setIsSecondLanguage] = useState(false);
    const {i18n } = useTranslation();

    const setEnglish = () => {
        if (language === "en") return null
        setLanguage("en")
        i18n.changeLanguage("en");
    }

    const setUkrainian = () => {
        if (language === "ua") return null
        setLanguage("ua")
        i18n.changeLanguage("ua");
    }




    return (
        <LanguageContainer
            onMouseOver={() => setIsSecondLanguage(true)}
            onMouseOut={() => setIsSecondLanguage(false)}
            issecondlanguage={isSecondLanguage ? "true" : "false"}>
            {language === "en"
                ?
                <>
                    <English onClick={setEnglish}>
                        <img src="/digital/ui/language.svg" alt="icon"/>
                        <p>English</p>
                    </English>
                    <Ukrainian onClick={setUkrainian}>
                        <img src="/digital/ui/language.svg" alt="icon"/>
                        <p>Українська</p>
                    </Ukrainian>
                </>
                :
                <>
                    <Ukrainian onClick={setUkrainian}>
                        <img src="/digital/ui/language.svg" alt="icon"/>
                        <p>Українська</p>
                    </Ukrainian>
                    <English onClick={setEnglish}>
                        <img src="/digital/ui/language.svg" alt="icon"/>
                        <p>English</p>
                    </English>
                </>}
        </LanguageContainer>
    );
};

export default Language;