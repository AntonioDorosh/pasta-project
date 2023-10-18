import React, {FC} from 'react';
import {TButtonProps} from "./types.ts";
import {StyledButton} from "./Button.styled.tsx";

const Button: FC<TButtonProps> = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};

export default Button;