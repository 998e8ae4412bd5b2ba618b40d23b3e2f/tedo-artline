import styled from "styled-components";


const Container = styled.div`
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  text-align: center;

  & > h1 {
    font-size: clamp(2.625rem, 2.0769rem + 2.4359vw, 5rem);
    color: #1344F0;
    font-family: "Fixel Bold", serif;

  }

  & > h2 {
    color: #18194F;
    font-size: clamp(1.375rem, 0.9856rem + 1.7308vw, 3.0625rem);
  }

  & > p {
    margin-top: 25px;
    width: 62vw;
    font-size: clamp(1rem, 0.8269rem + 0.7692vw, 1.75rem);
    color: #18194F;
    
  }
  
  @media(max-width: 768px){
    margin-top: 150px;
    
  }
`

const Experience = () => {
    return (
        <Container>
            <h1>Tedo Artline</h1>
            <h2>Crafting Experiences Across Digital and Physical Realms</h2>
            <p>At Tedo Artline, we are at the forefront of creative innovation, offering a diverse range of design
                solutions spanning UI/UX, graphic design, interior design, landscape architecture, and 2D design. Our
                multidisciplinary team of experts is dedicated to elevating every aspect of your project, ensuring a
                seamless fusion of aesthetics and functionality.</p>
        </Container>
    );
};

export default Experience;