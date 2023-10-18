import React from 'react';
import {LayoutStyled} from "./Layout.styled.tsx";

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    );
};

export default Layout;