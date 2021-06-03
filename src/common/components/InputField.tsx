import React from "react";
import styled from "styled-components";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR } from "../../constants/CssConstants";

interface InputFieldProp {
    name:string;
    type: string;
    placeholder:string;
    onKeyUp: (event:any) => any;
    width?: string;
}

const StyledInputField = styled.input`
    margin: 0.5em;
    padding: 0.7em;
    border: none;
    outline:none;
    border-radius: 0.5em;
    width: ${props => props?.width ? props.width : '100%'};
    &:focus {
        box-shadow: 0 0 6px ${HIGHLIGHT_COLOR};
    }
`;

function InputField (props:InputFieldProp) {  
    return (
      <StyledInputField
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        width={props?.width || ""}
        onKeyUp={props.onKeyUp}
      ></StyledInputField>
    );
}
export default InputField;