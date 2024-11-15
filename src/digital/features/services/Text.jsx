import styled from "styled-components";
import {Trans} from "react-i18next";

const Container = styled.div`
  margin: 200px auto 0;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 450px;
    margin: 80px auto 0;
    gap: 50px;

  }

  @media (max-width: 500px) {
    width: 85vw;
  }
`

const Item = styled.div`
  width: 100%;
  display: flex;

  & > p {
    font-size: clamp(1rem, 0.726rem + 1.2179vw, 2.1875rem);
  }

  & span {
    font-family: "Fixel Bold", serif;
    color: #18194F;
    font-size: clamp(1.375rem, 1.0433rem + 1.4744vw, 2.8125rem);
  }
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 20px;
  margin-top: 10px;
`

const Text = () => {


    return (
        <Container>
            <Item>
                <Img src="/digital/services/list.svg" alt="icon"/>
                <p>
                    <Trans i18nKey="main.service.text.1" components={{1: <span/>}}/>
                </p>
            </Item>
            <Item>
                <Img src="/digital/services/list.svg" alt="icon"/>
                <p>
                    <Trans i18nKey="main.service.text.2" components={{1: <span/>}}/>
                </p>
            </Item>
            <Item>
                <Img src="/digital/services/list.svg" alt="icon"/>
                <p>
                    <Trans i18nKey="main.service.text.3" components={{1: <span/>}}/>
                </p>
            </Item>
        </Container>
    );
};

export default Text;