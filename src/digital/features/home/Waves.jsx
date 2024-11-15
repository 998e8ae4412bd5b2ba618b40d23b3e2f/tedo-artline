import styled, {keyframes} from 'styled-components';

const blue = keyframes`
  0% {
    stroke-dashoffset: 10;
    stroke: #19d8ff;
  }

  50% {
    stroke: #19d8ff;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #19d8ff;
  }
`;

const darkBlue = keyframes`
  0% {
    stroke-dashoffset: 10;
    stroke: #1344F0;
  }

  50% {
    stroke: #1344F0;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #1344F0;
  }
`;

const green = keyframes`
  0% {
    stroke-dashoffset: 10;
    stroke: #4DDEC4;
  }

  50% {
    stroke: #4DDEC4;
  }

  100% {
    stroke-dashoffset: 9800;
    stroke: #4DDEC4;
  }
`;

const Container = styled.div`
  margin-top: 170px;
  position: relative;
  width: 100vw;
  height: 427px;
  overflow: hidden;
  
  @media(max-width: 1140px){
    margin-top: 100px;
  }

  @media(max-width: 768px){
    margin-top: 70px;
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const Dash1 = styled.path`
  stroke-dasharray: 300;
  animation: ${darkBlue} 25s linear infinite;
  animation-delay: 0s;
`;

const Dash2 = styled.path`
  stroke-dasharray: 400;
  animation: ${blue} 25s linear infinite;
  transform: translateY(60px);
  animation-delay: 0.2s;
`;

const Dash3 = styled.path`
  stroke-dasharray: 160;
  animation: ${darkBlue} 25s linear infinite;
  transform: translateY(120px);
  animation-delay: 0.1s;
`;

const Dash4 = styled.path`
  stroke-dasharray: 240;
  animation: ${green} 25s linear infinite;
  transform: translateY(200px);
  animation-delay: 0.15s;
`;

const Dash5 = styled.path`
  stroke-dasharray: 600;
  animation: ${blue} 25s linear infinite;
  transform: translateY(260px);
  animation-delay: 0.22s;
`;

const Dash6 = styled.path`
  stroke-dasharray: 400;
  animation: ${darkBlue} 25s linear infinite;
  transform: translateY(340px);
  animation-delay: 0.3s;
`;


const WaveSection = () => {
    let dashLength = 427

    if(window.innerWidth <= 968) dashLength = 827
    if(window.innerWidth <= 500) dashLength = 1227

    const size = {
        x:0,
        y: 0,
        width: 1420,
        height: dashLength,
    };

    return (
        <Container>
            <Section>
                <SVG preserveAspectRatio="none" viewBox={`${size.x} ${size.y} ${size.width} ${size.height}`}
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
                        <Dash1
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                        <Dash2
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                        <Dash3
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                        <Dash4
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                        <Dash5
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                        <Dash6
                            d="M16,16 C76.235,16 77.932,77 138.167,77 C198.402,77 198.402,16 260.333,16 C320.568,16 322.265,77 382.5,77 C442.735,77 442.735,16 504.667,16 C564.902,16 566.598,77 626.833,77 C687.068,77 687.068,16 749,16 C809.235,16 810.932,77 871.167,77 C931.402,77 931.402,16 993.333,16 C1053.568,16 1055.265,77 1115.5,77 C1175.735,77 1175.735,16 1237.667,16 C1297.902,16 1299.598,77 1359.833,77 C1420.068,77 1420.068,16 1482,16"
                            strokeWidth="15"
                        />
                    </g>
                </SVG>
            </Section>
        </Container>
    );
};

export default WaveSection;
