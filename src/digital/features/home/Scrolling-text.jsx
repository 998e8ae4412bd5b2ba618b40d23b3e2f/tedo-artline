import styled, {keyframes} from 'styled-components';
import {useTranslation} from "react-i18next";

const scrollAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ScrollContainer = styled.div`
  width: 100vw;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ScrollText1 = styled.div`
  display: inline-block;
  animation: ${scrollAnimation} 20s linear infinite;
  font-size: clamp(1.375rem, 0.9789rem + 1.2676vw, 2.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;
`;

const ScrollText2 = styled.div`
  display: inline-block;
  animation: ${scrollAnimation} 20s linear infinite;
  animation-delay: 1s;
  font-size: clamp(1.375rem, 0.9789rem + 1.2676vw, 2.5rem);
  font-family: "Fixel Bold", serif;
  color: #1344F0;
`;

const ScrollingText = () => {
    const {t} = useTranslation();
    return (
        <ScrollContainer id="scroll-container">
            <ScrollText1>
                {t("main.home.scrollingText")}
            </ScrollText1>
            <ScrollText2>
                {t("main.home.scrollingText")}
            </ScrollText2>
        </ScrollContainer>
    );
};

export default ScrollingText;
