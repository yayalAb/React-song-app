import styled from "styled-components";
const ButtonStyl = styled.button`
        background: rgb(7, 7, 41);
        color:  white ;
        font-size: 1em;
        margin: 1em;
        border:none;
        padding: 0.25em 1em;
        radius: 3px;
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