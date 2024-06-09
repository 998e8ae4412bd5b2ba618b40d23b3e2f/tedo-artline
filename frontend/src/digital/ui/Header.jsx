import styled, {css, keyframes} from "styled-components";
import NavBar from "./NavBar.jsx";
import HeaderOperations from "./HeaderOperations.jsx";
import {useBurger} from "../context/BurgerContext.jsx";
import MobileMenu from "./MobileMenu.jsx";


const MobileAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
`;

const MobileAnimationReverse = keyframes`
  0% {
    height: 100vw;
  }
  100% {
    height: 0;
  }
`;

const Wrapper = styled.header`
  width: 100vw;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed #1344F0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #F2F6FF;


  @media (max-width: 1120px) {
    height: 160px;
  }

  @media (max-width: 768px) {
    height: 73px;
  }

`

const Container = styled.header`
  width: 89.5%;
  height: 150px;
  display: flex;
  justify-content: space-between;


  @media (max-width: 1120px) {
    width: 95%;
    height: 120px;
  }

  @media (max-width: 768px) {
    height: 73px;
    width: 100%;
    padding: 16px 24px ;

  }
`

const MobileWrapper = styled.div`
  width: 100vw;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  background: #355abb;
  transition: top 4s;
  overflow: hidden;

  ${props => props.isopenburger === "false" && props.isinitialmount === "true" && css`
    animation: ${MobileAnimationReverse} 0.4s;
  `}

  ${props => props.isopenburger === "true" && css`
    animation: ${MobileAnimation} 0.4s;
    height: 100vh;
  `}
`


const Header = () => {
    const {isOpenBurger, isInitialMount} = useBurger();


    return (
        <>
            <MobileWrapper isinitialmount={isInitialMount} isopenburger={isOpenBurger ? "true" : "false"}>
                <MobileMenu/>
            </MobileWrapper>
            <Wrapper>
                <Container>
                    <NavBar/>
                    <HeaderOperations/>
                </Container>
            </Wrapper>
        </>
    );
};

export default Header;