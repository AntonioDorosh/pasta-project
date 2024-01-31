import React, { FC } from 'react';
import { TButtonProps } from './type.ts';
import { StyledButton } from './Button.styled.tsx';

export const Button: FC<TButtonProps> = ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};
