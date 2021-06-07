import React from "react";
import styled from "styled-components";
import { FONT_COLOR_DEFAULT, HIGHLIGHT_COLOR } from "../../constants/CssConstants";

export interface InputFieldProp {
    name:string;
    type: string;
    placeholder:string;
    onBlur: (event:any) => any;
    onChange: (event:any) => any;
    label?:string;
    width?: string;
    onKeyUp?: (event:any) => any;
}

const StyledInputField = styled.input<InputFieldProp>`
    margin: 0.5em 0.5em 1.3em 0.5em;;
    padding: 0.7em;
    border: none;
    outline:none;
    border-radius: 0.5em;
    background-color: ${FONT_COLOR_DEFAULT};
    width: ${props => props?.width ? props.width : '100%'};
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    &:focus {
        box-shadow: 0 0 6px ${HIGHLIGHT_COLOR};
    }
`;

const InputField  = React.forwardRef((props: InputFieldProp, ref: any)  => {  
    return (
      <>
        <label htmlFor={props.name}>{props.label}</label>
        <StyledInputField
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          width={props.width || ""}
          ref={ref}
          onChange={props.onChange}
          onBlur={props.onBlur}
          autoComplete="off"
        ></StyledInputField>
      </>
    );
});

export default InputField;