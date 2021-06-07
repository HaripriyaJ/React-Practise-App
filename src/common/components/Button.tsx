import React from "react";
import styled from "styled-components";
import { BUTTON_PRIMARY, FONT_COLOR_DEFAULT, HIGHLIGHT_COLOR } from "../../constants/CssConstants";
import { ButtonProp } from "../../interfaces/Button";

const StyledButton = styled.button<ButtonProp>`
    margin: 0.5em;
    padding: 0.8em 2.5em;
    border: none;
    width: ${props => props?.width ? props.width : 'auto'};
    background-color: ${props => props?.bgColor ? props.bgColor : BUTTON_PRIMARY};
    color: ${props => props?.fontColor ? props.fontColor : FONT_COLOR_DEFAULT};
    border-radius: ${props => props?.isRounded ?  '0.5em' : '0px'};
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 6px ${HIGHLIGHT_COLOR};
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: box-shadow;
      transition-property: box-shadow;
    }
`;


function Button (props: ButtonProp) {   
    return (
      <StyledButton
        title={props.title}
        type={props.type}
        width={props?.width || ""}
        bgColor={props?.bgColor || ""}
        fontColor={props?.fontColor || ""}
        isRounded={props?.isRounded || false}
        onClick={props.onClick} /* Lifting state-up */
      >
        {props.title}
      </StyledButton>
    );
}
export default Button;