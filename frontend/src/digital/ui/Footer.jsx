import styled from "styled-components";

const Container = styled.footer`
  margin-top: 280px;
  background: #18194F;
  z-index: 5;
`;

const Content = styled.div`
  background: url("/digital/ui/footer-bg.svg");
  height: 742px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Heading = styled.h2`
  position: absolute;
  top: 50%;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 75vw;
  text-align: end;
  font-family: "Fixel Bold", serif;
  font-size: clamp(1.875rem, 1.45rem + 2.125vw, 4rem);
  color: #F2F6FF;
  line-height: 100px;

  & > span {
    background: #4DDEC4;
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
    padding: 7px 7px 0;
  }

  @media(max-width: 768px){
    width: 90vw;
    text-align: start;
    line-height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > span {
      line-height: 120px;
    }
  }
`;

const Socials = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(max-width: 768px){
    flex-direction: row;
    top: 69%;
    left: 35vw;
    transform: translate(-50%, -50%);
  }
`;

const Mail = styled.div`
  width: 40px;
  height: 40px;
  background: url("/digital/ui/mail.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/mail-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

const Linkedin = styled.div`
  width: 40px;
  height: 40px;
  background: url("/digital/ui/linkedin.svg") no-repeat center center;
  background-size: cover;
  transition: background 0.5s;

  &:hover {
    background: url("/digital/ui/linkedin-active.svg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

const Copyright = styled.div`
  height: 115px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2F6FF;
  font-family: "Fixel ExtraLight", serif;
  font-size: clamp(0.875rem, 0.7083rem + 0.3472vw, 1.125rem);
`;

const Footer = () => {
    const redirect = (path) => {
        window.location.href = path;
    };

    return (
        <Container>
            <Content>
                <Heading>Got a Crazy Idea? Let&apos;s Make It Happen! <br/> <span>Get in Touch!</span></Heading>
                <Socials>
                    <Mail onClick={()=>redirect('https://www.gmail.com')}/>
                    <Linkedin onClick={()=>redirect('https://www.linkedin.com')}/>
                </Socials>
            </Content>
            <Copyright>Copyright 2024 Tedo Artline. All rights Reserved.</Copyright>
        </Container>
    );
};

export default Footer;
