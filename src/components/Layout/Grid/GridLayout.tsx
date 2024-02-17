import React, { PropsWithChildren } from "react";
import { GridLayoutStyled } from "./GridLayout.styled.tsx";

export type GridLayoutProps = PropsWithChildren & {
    $columnsAmount: number;
    $rowHeight?: number;
};

export const GridLayout = ({
    $columnsAmount,
    $rowHeight,
    children,
}: GridLayoutProps) => {
    return (
        <GridLayoutStyled
            $columnsAmount={$columnsAmount}
            $rowHeight={$rowHeight}
        >
            {children}
        </GridLayoutStyled>
    );
};
