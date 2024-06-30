import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';
import {Trans} from "react-i18next";

const Wrapper = styled.div`
  overflow: hidden;
  width: 85vw;
  height: auto;


  @media (max-width: 768px) {
    display: none;
  }
`

const Container = styled.div`
  margin: 62px 0;
  padding-bottom: 130px;
  width: 2000px;
  height: auto;
  position: relative;

  @media(max-width: 1400px){
    width: 1600px;
  }
  

`;

const SliderItem = styled.div`
  position: relative;
  width: 620px;
  height: auto;
  margin-bottom: 1rem;

  @media (max-width: 1400px) {
    width: 500px;
  }

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
    font-size: clamp(0.875rem, 0.5669rem + 0.9859vw, 1.75rem);

    & > span {
      color: #1344F0;
    }
  }
`;

const Arrow = styled.img`
  position: absolute;
  bottom: 0;
  right: -25px;
  transition: 0.3s;

  &:hover{
    transform: scale(1.2);
  }
`;

const StyledNext = styled.div`
  position: absolute;
  bottom: 20px;
  left: 120px;
  cursor: pointer;
  width: 100px;
  height: 100px;
  transition: 0.3s;
  background: url("/digital/home/arrow-left-navigation-between-slides.svg") no-repeat;

  &:hover {
    background: url("/digital/home/arrow-left-navigation-between-slides-active.svg") no-repeat;
  }
`;

const StyledPrev = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
  transform: rotate(180deg);
  cursor: pointer;
  width: 100px;
  height: 100px;
  transition: 0.3s;
  background: url("/digital/home/arrow-left-navigation-between-slides.svg") no-repeat;

  &:hover {
    background: url("/digital/home/arrow-left-navigation-between-slides-active.svg") no-repeat;
  }
`;


const ServiceSliderHorizontal = () => {
  return (
    <Wrapper>
      <Container>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
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
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
        </Swiper>
        <StyledPrev onClick={() => console.log("dsadf")} className="swiper-button-prev" />
        <StyledNext className="swiper-button-next" />
      </Container>
    </Wrapper>
  );
};

export default ServiceSliderHorizontal;