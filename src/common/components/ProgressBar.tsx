import React from "react";
import styled from "styled-components";
import { SECONDARY_COLOR } from "../../configs/CssVariables";
import { IProgressBar } from "../../interfaces/ProgressBar";

const Progress = styled.div<IProgressBar>`
    position: relative;
    height: 5px;
    top: 24px;
    border-radius: 5px;
    background-color: ${SECONDARY_COLOR};
    width: ${props => props.width}%;
`;


function ProgressBar (props: IProgressBar) {   
    return (
      <Progress
        width={props.width}
        title={String(props.width) + "%"}
      />
    );
}
export default ProgressBar;