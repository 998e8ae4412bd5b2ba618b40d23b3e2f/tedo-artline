import styled from "styled-components";
import Hand from "../features/contact/Hand.jsx";
import Form from "../features/contact/Form.jsx";

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 40vw 53vw;
  gap: 7vw;
  
  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
`

const Contact = () => {
    return (
        <Container>
            <Hand/>
            <Form/>
        </Container>
    );
};

export default Contact;