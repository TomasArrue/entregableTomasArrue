import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20 xp;
`;

export const Label = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }

  &:focus ~ label, &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
  }

  &:focus ~ .bar:before, &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const Bar = styled.div`
  position: relative;
  display: block;
  width: 300px;

  &:before, &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:focus ~ &:before, &:focus ~ &:after {
    width: 50%;
  }
`;

export const Highlight = styled.div`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;

  &:focus ~ & {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 45px;

  &:focus-within ${Highlight} {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.
  }
`;
