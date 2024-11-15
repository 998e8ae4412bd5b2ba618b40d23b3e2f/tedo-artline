import styled from "styled-components";
import Heading from "../features/home/Heading.jsx";
import Waves from "../features/home/Waves.jsx";
import Mission from "../features/home/Mission.jsx";
import Services from "../features/home/Services.jsx";
import Partners from "../features/home/Partners.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Home = () => {
    return (
        <Container>
            <Heading/>
            <Waves/>
            <Mission/>
            <Services/>
            <Partners/>
        </Container>
    );
};

export default Home;