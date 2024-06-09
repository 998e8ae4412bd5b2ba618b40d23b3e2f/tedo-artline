import styled from "styled-components";

const Container = styled.div`
  width: 60vw;
  margin: 305px auto 0;

  @media (max-width: 1400px) {
    width: 70vw;
  }
  @media (max-width: 1000px) {
    width: 80vw;
  }

  @media (max-width: 968px) {
    margin: 0 auto ;
  }

  @media (max-width: 500px) {
    margin: -100px auto 0;
  }

`

const P = styled.p`
  width: 46vw;
  font-family: "Fixel Text", serif;
  font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
  text-indent: 50px;
  color: #18194F;

  @media (max-width: 1400px) {
    width: 70vw;
  }

  @media (max-width: 968px) {
    text-indent: 20px;

  }
  

  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 80vw;

  }
`

const BigSpan = styled.span`
  font-family: "Fixel SemiBold", serif;
  font-size: clamp(1.5rem, 1.2115rem + 1.2821vw, 2.75rem);
`

const SmallSpan = styled.span`
  font-family: "Fixel SemiBold", serif;
  font-size: clamp(1.25rem, 1.1058rem + 0.641vw, 1.875rem);
`

const Heading = styled.h2`
  margin-top: 120px;
  font-size: clamp(2.1875rem, 1.6106rem + 2.5641vw, 4.6875rem);
  font-family: "Fixel SemiBold", serif;
  color: #18194F;

  & > span {
    font-size: clamp(2.5rem, 1.851rem + 2.8846vw, 5.3125rem);
    font-family: "Fixel Bold", serif;
    color: #1344F0;
  }

  @media (max-width: 768px) {
    margin-top: 0;

  }
`

const Mission = () => {
    return (
        <Container>
            <P>
                <BigSpan>We</BigSpan> are committed to innovation and excellence, working with you to bring your ideas to life
                - whether in a digital or physical environment.
            </P>
            <P>
                When you choose <SmallSpan>Tedo Artline</SmallSpan>, you get a guarantee of unrivaled craftsmanship, attention to
                detail, and a commitment to exceeding your expectations.
            </P>
            <Heading>Your success <span>is</span> our mission</Heading>
        </Container>
    );
};

export default Mission;