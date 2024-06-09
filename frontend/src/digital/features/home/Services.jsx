import styled from "styled-components";
import ServiceSliderHorizontal from "./ServiceSliderHorizontal.jsx"
import ServiceSliderVertical from "./ServiceSliderVertical.jsx";


const Container = styled.div`
  margin-top: 480px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 768px){
    margin-top: 200px;
  }
`

const Text = styled.div`
  width: 100vw;
  position: relative;
  height: 250px;
  margin: 0 auto 80px;

  & > h2 {
    text-align: center;
    font-size: clamp(2.625rem, 0.7984rem + 5.8451vw, 7.8125rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;

    & > span {
      color: #4DDEC4;
      font-size: clamp(2.625rem, 0.7984rem + 5.8451vw, 7.8125rem);
      font-family: "Fixel Bold", serif;
    }
  }
  
  @media(max-width: 768px){
    margin: 0 auto 40px;
    height: 220px;
    display: flex;
    justify-content: center;

    & > h2 {
      width: 50vw;
      
    }
  }

  @media(max-width: 500px) {
    & > h2 {
      width: 80vw;
    }
  }

`

const StartImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 10vw;

  @media(max-width: 768px) {
  width: 40px;
  }
`

const EndImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 10vw;

  @media (max-width: 768px) {
    width: 40px;
  }
`


const Services = () => {
    return (
        <Container>
            <Text>
                <StartImg src="/digital/home/arrow-down.svg" alt="arrow-icon"/>
                <h2>Experience <span>the</span> Exceptional</h2>
                <EndImg src="/digital/home/arrow-down.svg" alt="arrow-icon"/>
            </Text>
            {window.innerWidth <= 768 ? <ServiceSliderVertical/> : <ServiceSliderHorizontal/>}
        </Container>
    );
};

export default Services;