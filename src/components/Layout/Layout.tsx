import React, {FC, PropsWithChildren} from 'react';
import {LayoutStyled} from "./Layout.styled.tsx";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return <LayoutStyled>{children}</LayoutStyled>

};

export default Layout;