import styled from "styled-components";

export const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "red" : "black")};
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    background-color: ${({ invalid }) =>
      invalid ? "rgb(250, 151, 140)" : "transparent"};
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
