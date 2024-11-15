import styled from "styled-components";
import Specialization from "../features/services/Specialization.jsx";
import Text from "../features/services/Text.jsx";
import Budget from "../features/services/Budget.jsx";
import Projector from "../features/services/Projector.jsx";
import Team from "../features/services/Team.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;

`


const Services = () => {
    return (
        <Container>
            <Specialization/>
            <Text/>
            <Budget/>
            <Projector/>
            <Team/>
        </Container>
    );
};

export default Services;