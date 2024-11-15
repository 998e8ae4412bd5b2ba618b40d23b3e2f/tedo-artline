import styled from "styled-components";
import PropTypes from "prop-types";


const StyledTextArea = styled.textarea`
  font-family: "Fixel Light Italic", serif;
  font-size: clamp(0.875rem, 0.6442rem + 1.0256vw, 1.875rem);
  width: 80%;
  padding: 20px 25px;
  border-radius: 24px;
  border: 2.5px solid #4B54E8;
  color: #4B54E8;
  min-height: 330px;
  outline: none;
  transition: 0.2s;

  &::placeholder {
    color: #4B54E8;
  }
  
  &:focus {
    background: rgb(78,81,232);
    background: linear-gradient(112deg, rgba(78,81,232,1) 0%, rgba(41,116,227,1) 40%, rgba(19,68,240,1) 100%);
    color: #F2F6FF;
    border-radius: 0;

    &::placeholder {
      display: none;
    }
  }

  @media (max-width: 968px) {
    width: 90%;
  }
`

const TextArea = ({placeholder,value,onChange}) => {
    return (
        <StyledTextArea value={value} onChange={onChange} placeholder={placeholder}/>
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default TextArea;