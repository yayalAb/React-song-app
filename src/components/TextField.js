import React from 'react'
import styled from "styled-components";

const Label = styled.h1`
  font-size: 1em;
  color: gray;
  margin-bottom:2px;

`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 0.25em;
  background: whay;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: gray;
  border: solid gray 1px;
  border-radius: 5px;
  min-width:60%;
  min-height:2.5em;
  font-size:18;
`;

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    // <Wrapper>
     <div>
      <Label>{label}</Label>
        <Input
          {...inputProps}
          onChange={onChange}
          value={value}
        />
     </div>

    // </Wrapper>
  )
}
export default TextField