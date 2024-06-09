import styled from "styled-components";

const Container = styled.div`
  margin: 250px auto 0;
  width: 95vw;

`

const Heading = styled.div`
  font-family: "Fixel Bold", serif;
  font-size: clamp(2.625rem, 1.4279rem + 5.3205vw, 7.8125rem);
  text-align: center;
  color: #1344F0;

  @media(max-width: 768px) {
    margin-top: -150px;
  }
`

const Images = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 38vw;
  
  
  @media(max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 280vw;
  }
`

const Professional = styled.div`
  width: 40%;
  height: auto;
  background: url("/digital/services/professional.png") no-repeat;
  background-size: contain;
  transition: 0.6s;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

  }

  &:hover {
    background: url("/digital/services/professional-active.png") no-repeat;
    background-size: contain;
  }
`

const Advanced = styled.div`
  width: 25%;
  background: url("/digital/services/advanced.png") no-repeat;
  background-size: contain;
  transition: 0.6s;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;

  }

  &:hover {
    background: url("/digital/services/advanced-active.png") no-repeat;
    background-size: contain;
  }
`

const Basic = styled.div`
  width: 25%;
  background: url("/digital/services/basic.png") no-repeat;
  background-size: contain;
  transition: 0.6s;


  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  &:hover {
    background: url("/digital/services/basic-active.png") no-repeat;
    background-size: contain;
  }
`

const Budget = () => {
    return (
        <Container>
            <Heading>Your Budget, Your Choice</Heading>
            <Images>
                <Professional/>
                <Advanced/>
                <Basic/>
            </Images>
        </Container>
    );
};

export default Budget;