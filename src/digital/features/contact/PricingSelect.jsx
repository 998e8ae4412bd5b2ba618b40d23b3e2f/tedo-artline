import styled, {css} from "styled-components";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";


const Container = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  width: 98%;
  height: auto;
  overflow-x: scroll;
  
  &::-webkit-scrollbar {
    height: 0;
  }
  

  @media(max-width: 1500px){
    &::-webkit-scrollbar {
      height: 9px;
    }

    &::-webkit-scrollbar-track {
      background: #cdcdcd;
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #1344F0;
      border-radius: 1rem;
    }
  }

  @media(max-width: 768px){
    &::-webkit-scrollbar {
      height: 0;
    }
  }

`

const Item = styled.div`
  position: relative;
  background: transparent;
  border: 2px solid #1344F0;
  border-radius: 20px;
  font-size: clamp(1rem, 0.7981rem + 0.8974vw, 1.875rem);
  cursor: pointer;
  color: #1344F0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  min-width: 250px;
  margin-bottom: 10px;
  transition: background 0.5s;

  @media (max-width: 768px) {
    min-width: 130px;
    height: 47px;
    border-radius: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: ${({ active }) => (active ? 1 : 0)}; /* Set opacity based on active prop */
    transition: opacity 0.7s;
    z-index: -1;

    ${props =>
            props.active === "basic" &&
            css`
              background: rgb(19, 68, 240);
              background: linear-gradient(
                      135deg,
                      rgba(19, 68, 240, 1) 0%,
                      rgba(151, 71, 255, 1) 100%
              );
              font-family: "Fixel SemiBold", serif;
            `}

    ${props =>
            props.active === "advanced" &&
            css`
              background: linear-gradient(
                      108deg,
                      rgba(117, 20, 104, 1) 0%,
                      rgba(237, 84, 138, 1) 100%
              );
              font-family: "Fixel SemiBold", serif;
            `}

    ${props =>
            props.active === "professional" &&
            css`
        background: rgb(191, 75, 50);
        background: linear-gradient(
          135deg,
          rgba(191, 75, 50, 1) 0%,
          rgba(252, 229, 152, 1) 100%
        );
        font-family: "Fixel SemiBold", serif;
      `}
  }

  /* Apply styles based on the active prop */
  ${props =>
          props.active === "basic" &&
          css`
      color: #f2f6ff;
      border: transparent;
    `}

  ${props =>
          props.active === "advanced" &&
          css`
      color: #f2f6ff;
      border: transparent;
    `}

  ${props =>
          props.active === "professional" &&
          css`
      color: #f2f6ff;
      border: transparent;
    `}
`;


const PricingSelect = ({option, setOption}) => {
    const {t}=useTranslation()

    return (
        <Container>
            <Item active={option === "basic" ? "basic" : null} onClick={() => setOption("basic")}>{t("main.contact.form.basic")}</Item>
            <Item active={option === "advanced" ? "advanced" : null}
                  onClick={() => setOption("advanced")}>{t("main.contact.form.advanced")}</Item>
            <Item active={option === "professional" ? "professional" : null}
                  onClick={() => setOption("professional")}>{t("main.contact.form.professional")}</Item>
        </Container>
    );
};

PricingSelect.propTypes = {
    option: PropTypes.string.isRequired,
    setOption: PropTypes.func.isRequired
};

export default PricingSelect;