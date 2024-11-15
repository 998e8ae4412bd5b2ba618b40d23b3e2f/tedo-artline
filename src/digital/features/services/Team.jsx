import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  margin: 200px auto 0;
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 95vw;
  }

`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    width: 200vw;
    height: 100%;
  }
`;


const Item = styled(SwiperSlide)`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity 0.6s;
  }

  &:before {
    background-image: url("/digital/services/designer.svg");
    opacity: 1;
  }

  &:after {
    background-image: url("/digital/services/designer-active.svg");
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 450px;
  }
`;

const CustomPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .swiper-pagination-bullet {
    background-color: #1344F0;
    width: 28px;
    height: 28px;
    margin: 0 10px;
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    background-color: #18194F;
  }
`;

const Team = () => {
    return (
        <Wrapper>
            <Container>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                    breakpoints={{
                        769: {
                            spaceBetween: 50,
                            pagination: false
                        }}}>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Swiper>
                <CustomPagination className="custom-pagination"/>
            </Container>
        </Wrapper>
    );
};

export default Team;
