import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

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
                <h2><span>UI/UX</span> Design</h2>
                <p>UI/UX design service focuses on creating intuitive and visually stunning
                  user <span>interfaces</span>. We prioritize user <span>experience</span>, ensuring
                  that every interaction is seamless and engaging.</p>
                <p>From wireframing to <span>prototyping</span>, we leverage cutting-edge technologies
                  to craft interfaces that captivate and delight users.</p>
              </Content>
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
              <Content>
                <h2><span>Graphic</span> Design</h2>
                <p>Bring ideas to life through captivating visual <span>storytelling</span>. From logos
                  to marketing materials, we specialize in creating impactful brand identities that
                  resonate with your target audience.</p>
                <p>Utilizing <span>cutting-edge technologies</span>, we create captivating
                  and <span>user-friendly</span> interfaces through wireframing and prototyping in our
                  Graphic Design services.</p>
              </Content>
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
              <Content>
                <h2><span>2D</span> Design</h2>
                <p>Transform your ideas into compelling visual narratives with our 2D Design service.
                  From logos to marketing materials, we specialize in crafting <span>impactful brand identities</span> that
                  connect with your target audience.</p>
                <p>Utilizing state-of-the-art techniques from wireframing to prototyping, we create
                  interfaces that captivate and engage users, ensuring an unforgettable
                  experience.</p>
              </Content>
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
              <Content>
                <h2><span>UI/UX</span> Design</h2>
                <p>UI/UX design service focuses on creating intuitive and visually stunning
                  user <span>interfaces</span>. We prioritize user <span>experience</span>, ensuring
                  that every interaction is seamless and engaging.</p>
                <p>From wireframing to <span>prototyping</span>, we leverage cutting-edge technologies
                  to craft interfaces that captivate and delight users.</p>
              </Content>
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
              <Content>
                <h2><span>Graphic</span> Design</h2>
                <p>Bring ideas to life through captivating visual <span>storytelling</span>. From logos
                  to marketing materials, we specialize in creating impactful brand identities that
                  resonate with your target audience.</p>
                <p>Utilizing <span>cutting-edge technologies</span>, we create captivating
                  and <span>user-friendly</span> interfaces through wireframing and prototyping in our
                  Graphic Design services.</p>
              </Content>
              <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon" />
            </SliderItem>
          </SwiperSlide>
          <SwiperSlide>
            <SliderItem>
              <Img src="/digital/home/border-slider.svg" alt="bg-image" />
              <Content>
                <h2><span>2D</span> Design</h2>
                <p>Transform your ideas into compelling visual narratives with our 2D Design service.
                  From logos to marketing materials, we specialize in crafting <span>impactful brand identities</span> that
                  connect with your target audience.</p>
                <p>Utilizing state-of-the-art techniques from wireframing to prototyping, we create
                  interfaces that captivate and engage users, ensuring an unforgettable
                  experience.</p>
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