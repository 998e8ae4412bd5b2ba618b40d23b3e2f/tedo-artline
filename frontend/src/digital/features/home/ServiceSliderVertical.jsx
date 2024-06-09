import styled from 'styled-components';

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
                        <h2><span>UI/UX</span> Design</h2>
                        <p>UI/UX design service focuses on creating intuitive and visually stunning
                            user <span>interfaces</span>. We prioritize user <span>experience</span>, ensuring
                            that every interaction is seamless and engaging.</p>
                        <p>From wireframing to <span>prototyping</span>, we leverage cutting-edge technologies
                            to craft interfaces that captivate and delight users.</p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
                <SliderItem>
                    <Img src="/digital/home/border-slider.svg" alt="bg-image"/>
                    <Content>
                        <h2><span>Graphic</span> Design</h2>
                        <p>Bring ideas to life through captivating visual <span>storytelling</span>. From logos
                            to marketing materials, we specialize in creating impactful brand identities that
                            resonate with your target audience.</p>
                        <p>Utilizing <span>cutting-edge technologies</span>, we create captivating
                            and <span>user-friendly</span> interfaces through wireframing and prototyping in our
                            Graphic Design services.</p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
                <SliderItem>
                    <Img src="/digital/home/border-slider.svg" alt="bg-image"/>
                    <Content>
                        <h2><span>2D</span> Design</h2>
                        <p>Transform your ideas into compelling visual narratives with our 2D Design service.
                            From logos to marketing materials, we specialize in crafting <span>impactful brand identities</span> that
                            connect with your target audience.</p>
                        <p>Utilizing state-of-the-art techniques from wireframing to prototyping, we create
                            interfaces that captivate and engage users, ensuring an unforgettable
                            experience.</p>
                    </Content>
                    <Arrow src="/digital/home/arrow-navigation-to-page.svg" alt="arrow-icon"/>
                </SliderItem>
            </Container>
        </Wrapper>
    );
};

export default ServiceSliderVertical;