import React from "react";
import styled from "styled-components";
import { BUTTON_PRIMARY, FONT_COLOR_DEFAULT } from "../../constants/CssConstants";

interface ButtonProp {
    title?: string;
    width?: string;
    bgColor?: string;
    fontColor?: string;
    isRounded?: boolean;
    onClick?: () => any;
}

const StyledButton = styled.button<ButtonProp>`
    border: none;
    padding: 0.8em 2.5em;
    width: ${props => props?.width ? props.width : 'auto'};
    background-color: ${props => props?.bgColor ? props.bgColor : BUTTON_PRIMARY};
    color: ${props => props?.fontColor ? props.fontColor : FONT_COLOR_DEFAULT};
    border-radius: ${props => props?.isRounded ?  '0.5em' : '0px'};
    cursor: pointer;
`;

function Button (props: ButtonProp) {   
    return (
      <StyledButton
        title={props?.title || "Submit"}
        width={props?.width || ""}
        bgColor={props?.bgColor || ""}
        fontColor={props?.fontColor || ""}
        isRounded={props?.isRounded || false}
        onClick={() => props.onClick} /* Lifting state-up */
      >
        {props?.title || "Submit"}
      </StyledButton>
    );
}
export default Button;