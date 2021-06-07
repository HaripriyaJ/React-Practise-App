import React from "react";
import styled from "styled-components";
import { DANGER } from "../../constants/CssConstants";
import { InputErrorProp } from "../../interfaces/InputField";

const StyledInputErrorField = styled.span<InputErrorProp>`
    font-size: smaller;
    color: ${DANGER};
    padding-left: 0.5em;
    position: relative;
    top: -15px;
`;

const InputError  = React.forwardRef((props: {message: string}, ref: any)  => {  
    return (
      <StyledInputErrorField message={props.message}>{props.message}</StyledInputErrorField>
    );
});

export default InputError;