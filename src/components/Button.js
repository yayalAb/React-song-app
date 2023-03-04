import styled from "styled-components";
const ButtonStyl = styled.button`
        background: indigo;
        color:  white ;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
      `;

const Button = ({ onClick, children }) => {
    return (
      <ButtonStyl
        onClick={onClick}
      >
        {children}
      </ButtonStyl>
    )
  }
  
  export default Button