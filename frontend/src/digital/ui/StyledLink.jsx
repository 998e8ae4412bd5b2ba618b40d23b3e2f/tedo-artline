import {Link, useLocation} from 'react-router-dom';
import styled, {css} from "styled-components";
import PropTypes from 'prop-types';


const Styles = styled(Link)`
  text-decoration: none;
  font-size: clamp(0.875rem, 0.2917rem + 1.2153vw, 1.75rem);
  padding: 6px 10px 1px;
  color: #1344F0;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: 0.4s;


  &:last-child {
    width: 365px;
    height: auto;
    background: #4DDEC4;
    display: flex;
    font-size: clamp(1.5rem, 0rem + 3.125vw, 3.75rem);
    color: #F2F6FF;
    font-family: "Fixel SemiBold Italic", serif;
    border-radius: 0;

    & > img {
      width: clamp(1rem, 0.3654rem + 2.8205vw, 3.75rem);
      height: clamp(1rem, 0.3654rem + 2.8205vw, 3.75rem);
    }

    &:hover {
      border-radius: 12px;
    }

    @media (max-width: 1700px) {
      width: auto;
    }
  }

  &:hover {
    color: #f2f6ff;
    background: #1344F0;
  }

  ${(props) =>
          props.active === "active" &&
          css`
            color: #f2f6ff;
            background: #1344F0 !important;
          `};

`

function StyledLink({to, children, path}) {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname.includes(path) ? "active" : null;
    };

    return (
        <Styles active={isActive(path || to)} to={to}>
            {children}
        </Styles>
    );
}

StyledLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    path: PropTypes.string,
};

export default StyledLink;