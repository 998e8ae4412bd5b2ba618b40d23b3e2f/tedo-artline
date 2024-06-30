import styled from 'styled-components';
import {Trans} from "react-i18next";

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100vw;
  height: 850px;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    height: 0;
  }
`

const Container = styled.div`
  width: 90%;
  height: auto;
  
`;

const SliderItem = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;

`;

const Img = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  text-align: center;

  & > h2 {
    font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);

    & > span {
      font-family: "Fixel Bold", serif;
      font-size: clamp(1.6875rem, 1.0273rem + 2.1127vw, 3.5625rem);
    }
  }

  & > p {
    margin-top: 30px;
    font-size: clamp(0.875rem, -0.7575rem + 5.2239vw, 1.75rem);

    & > span {
      color: #1344F0;
    }
  }
`;

const Arrow = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.3s;
  width: 50px;
    
  &:hover{
    transform: scale(1.2);
  }
`;


const ServiceSliderVertical = () => {
    return (
        <Wrapper>
            <Container>
                <SliderItem>
                    <Img src="/digital/home/border-slider.svg" alt="bg-image"/>
                    <Content>
                        <h2>
                            <Trans i18nKey="main.home.servicesSlider.1.h2" components={{ 1: <span /> }} />
                        </h2>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.1.p1" components={{ 1: <span /> }} />
                        </p>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.1.p2" components={{ 1: <span /> }} />
                        </p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
                <SliderItem>
                    <Img src="/digital/home/border-slider.svg" alt="bg-image"/>
                    <Content>
                        <h2>
                            <Trans i18nKey="main.home.servicesSlider.2.h2" components={{ 1: <span /> }} />
                        </h2>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.2.p1" components={{ 1: <span /> }} />
                        </p>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.2.p2" components={{ 1: <span /> }} />
                        </p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
                <SliderItem>
                    <Img src="/digital/home/border-slider.svg" alt="bg-image"/>
                    <Content>
                        <h2>
                            <Trans i18nKey="main.home.servicesSlider.3.h2" components={{ 1: <span /> }} />
                        </h2>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.3.p1" components={{ 1: <span /> }} />
                        </p>
                        <p>
                            <Trans i18nKey="main.home.servicesSlider.3.p2" components={{ 1: <span /> }} />
                        </p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
            </Container>
        </Wrapper>
    );
};

export default ServiceSliderVertical;