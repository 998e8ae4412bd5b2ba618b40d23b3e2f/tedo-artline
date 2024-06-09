import styled from "styled-components";
import WhoWeAre from "../features/about/WhoWeAre.jsx";
import Experience from "../features/about/Experience.jsx";
import Designers from "../features/about/Designers.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const About = () => {
    return (
        <Container>
            <WhoWeAre/>
            <Experience/>
            <Designers/>
        </Container>
    );
};

export default About;