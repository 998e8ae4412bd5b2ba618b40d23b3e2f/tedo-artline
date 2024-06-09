import styled, {css} from "styled-components";
import {useNavigate, useParams} from "react-router-dom";


const Container = styled.div`
  margin: 130px auto 0;
  display: flex;
  gap: 1rem;
  width: 90vw;
  height: auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 0;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: -20px;
  }

 
`


const Item = styled.div`
  border: 2px solid #1344F0;
  border-radius: 28px;

  font-size: clamp(1.25rem, 0.9038rem + 1.5385vw, 2.75rem);
  font-family: "Fixel SemiBold", serif;
  color: #F2F6FF;
  background-color: #F2F6FF;
  text-shadow: -1px -1px 0 #1344F0, 1px -1px 0 #1344F0, -1px 1px 0 #1344F0, 1px 1px 0 #1344F0;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 62vw;
  height: 90px;
  
  transition: 0.3s;

  & span {
    font-family: "Fixel Bold", serif;
    padding-right: 20px;
    font-size: clamp(1.625rem, 1.2212rem + 1.7949vw, 3.375rem);
    text-shadow: -1px -1px 0 #1344F0, 1px -1px 0 #1344F0, -1px 1px 0 #1344F0, 1px 1px 0 #1344F0;
    color: #F2F6FF;
  }


  @media (max-width: 1300px) {
    & span {
      padding-right: 10px;
    }
  }

  @media (max-width: 768px) {
    height: 68px;
    min-width: 40vw;
    border-radius: 12px;
  }

  @media (max-width: 500px) {
    height: 68px;
    min-width: 58vw;
  }
  

  ${props => props.active === "true" && css`
    text-shadow: none;
    color: #F2F6FF;
    background: #1344F0;
  `}
`

const Specialization = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <Container>
            <Item onClick={() => navigate("/digital/services/ui-ux")}
                  active={id === "ui-ux" ? "true" : null}><span>UI/UX</span> Design</Item>
            <Item onClick={() => navigate("/digital/services/graphic")}
                  active={id === "graphic" ? "true" : null}><span>Graphic</span> Design</Item>
            <Item onClick={() => navigate("/digital/services/2d")}
                  active={id === "2d" ? "true" : null}><span>2D</span> Design</Item>
        </Container>
    );
};

export default Specialization;


