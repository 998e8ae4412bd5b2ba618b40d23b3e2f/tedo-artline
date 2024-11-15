import styled from "styled-components";
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`

const Main = styled.main`
  //for header ps:header is fixed
  margin-top: 154px;
  
`

const AppLayout = () => {
    return (
        <Container>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </Container>
    );
};

export default AppLayout;