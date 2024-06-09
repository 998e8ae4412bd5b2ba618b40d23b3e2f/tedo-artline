import styled, {css} from "styled-components";
import PropTypes from "prop-types";


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
  background: transparent;
  border: 2px solid #1344F0;
  border-radius: 38px;
  color: #1344F0;
  font-size: clamp(1rem, 0.7981rem + 0.8974vw, 1.875rem);
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 73px;
  min-width: 250px;
  margin-bottom: 10px;
  
  transition: 0.3s;
  padding-top: 5px;

  
  @media(max-width:768px){
    min-width: 200px;
    height: 43px;
    padding-top: 0;
  }
  
  ${props => props.active === "true" && css`
    color: #F2F6FF;
    background: #1344F0;
    font-family: "Fixel SemiBold",serif;
  `}
`

const DesignerSelect = ({option, setOption}) => {

    return (
            <Container>
                <Item active={option === "ui-ux" ? "true" : "false"} onClick={() => setOption("ui-ux")}>
                    UI/UX Design</Item>
                <Item active={option === "graphic" ? "true" : "false"} onClick={() => setOption("graphic")}>Graphic
                    Design</Item>
                <Item active={option === "2d" ? "true" : "false"} onClick={() => setOption("2d")}>
                    2D Design</Item>
            </Container>
    );
};

DesignerSelect.propTypes = {
    option: PropTypes.string.isRequired,
    setOption: PropTypes.func.isRequired
};

export default DesignerSelect;