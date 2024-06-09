import styled from "styled-components";

const Container = styled.div`
  margin-top: 140px;
  width: 45vw;
  text-align: center;
  position: relative;
  padding-bottom: 100px;

  & > h1 {
    font-family: "Fixel Bold", serif;
    font-size: clamp(3.125rem, 2.9231rem + 0.8974vw, 4rem);
    color: #1344F0;
    text-shadow: -5px 2px #4DDEC4;
  }

  & > p {
    margin-top: 36px;
    font-family: "Fixel Text", serif;
    font-size: clamp(1.25rem, 1.1346rem + 0.5128vw, 1.75rem);
  }
  
  

  @media(max-width: 768px){
    margin-top: 50px;
    width: 92vw;

    & > h1 {
      font-size: 25px;
      font-family: "Fixel SemiBold Italic",serif;
    }

    & > p {
      margin-top: 18px;
      font-size: 16px;
      font-family: "Fixel ExtraLight",serif;
    }
  }
`

const BigBubble = styled.img`
  position: absolute;
  bottom: 0;
  left: 12%;

  @media(max-width: 768px){
   display: none;

  }
`

const SmallBubble = styled.img`
  position: absolute;
  bottom: 13%;
  left: 6%;

  @media (max-width: 768px) {
    display: none;

  }
`

const Heading = () => {
    return (
        <Container>
            <h1>Where digital commerce Meets Expertise</h1>
            <p>Revolutionizing digital commerce with intuitive design and innovative solutions, we optimize user
                experience and drive growth to elevate your digital presence.</p>
                <SmallBubble src="/digital/home/small-bubble.svg" alt="bubble-icon"/>
                <BigBubble src="/digital/home/big-bubble.svg" alt="bubble-icon"/>
        </Container>
    );
};

export default Heading;