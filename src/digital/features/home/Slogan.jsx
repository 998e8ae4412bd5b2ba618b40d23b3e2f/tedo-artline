import ScrollingText from "./Scrolling-text.jsx";
import styled from "styled-components";
import {Trans} from "react-i18next";

const Container = styled.div`
  margin-top: 450px;

  @media(max-width: 768px) {
    margin-top: 150px;
    margin-bottom: 180px;
  }
`

const StyledSlogan = styled.div`
  position: relative;
  text-align: center;

  & > p {
    font-family: "Fixel Bold", serif;
    font-size: 42px;
    color: #1344F0;
  }
  
`

const Heading = styled.h2`
  color: #1344F0;
  font-size: clamp(2.5rem, 0.0852rem + 6.4394vw, 7.8125rem);
  font-family: "Fixel Bold", serif;

  & > span {
    color: #4DDEC4;
    font-size: clamp(2.5rem, 0.0852rem + 6.4394vw, 7.8125rem);
    font-family: "Fixel Bold", serif;
  }
`


const Line = styled.img`
  position: absolute;
  left: 46%;
  top: -380px;
  width: 100px;
  
  @media(max-width: 768px){
    width: 75px;
    top: 180px;
    
  }
`

const Slogan = () => {
    return (
        <Container>
            <StyledSlogan>
                <Line src="/digital/home/line.svg" alt="line-icon"/>
                <Heading><Trans i18nKey="main.home.slogan" components={{ 1: <span /> }} /></Heading>
            </StyledSlogan>
            <ScrollingText/>
        </Container>
    );
};

export default Slogan;