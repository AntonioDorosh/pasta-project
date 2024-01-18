import React, {FC, PropsWithChildren} from 'react';
import {LayoutStyled} from "./Layout.styled.tsx";

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return <LayoutStyled>{children}</LayoutStyled>

};
