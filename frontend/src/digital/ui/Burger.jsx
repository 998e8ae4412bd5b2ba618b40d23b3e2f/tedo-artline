import styled, {css, keyframes} from "styled-components";
import {useBurger} from "../context/BurgerContext.jsx";


const crossAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const StyledBurgerContainer = styled.div`
  width: 43px;
  height: 43px;
  padding: 0 11.5px;
  border-radius: 12px;
  background: #1344F0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({isactive}) => isactive === "true" && css`
    background: #F2F6FF;

  `}
`;

const StyledBurger = styled.div`
  width: 19px;
  height: 2.5px;;
  border-radius: 1rem;
  background: #F2F6FF;
  position: relative;
  transition: background-color 0.3s ease;

  &::before,
  &::after {
    content: "";
    width: 19px;
    height: 2.5px;
    border-radius: 1rem;
    background: #F2F6FF;
    position: absolute;
  }

  &::before {
    top: -8px;
    transition: top 0.3s ease, transform 0.3s ease;
  }

  &::after {
    bottom: -8px;
    transition: bottom 0.3s ease, transform 0.3s ease;
  }

  ${({isactive}) => isactive === "true" && css`
    
    &::before {
      top: 0;
      transform: rotate(90deg);
      background-color: #1344F0;

    }

    &::after {
      bottom: 0;
      transform: rotate(-180deg);
      background-color: #1344F0;

    }

    animation: ${crossAnimation} 0.3s forwards;
  `}
`;

function Burger() {
    const {toggleBurger, isOpenBurger} = useBurger()

    return (
        <StyledBurgerContainer isactive={isOpenBurger ? "true" : "false"} onClick={toggleBurger}>
            <StyledBurger isactive={isOpenBurger ? "true" : "false"}/>
        </StyledBurgerContainer>
    );
}

export default Burger;