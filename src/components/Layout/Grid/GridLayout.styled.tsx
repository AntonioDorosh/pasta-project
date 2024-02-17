import styled from "styled-components";

type GridProps = {
    $columnsAmount: number;
    $rowHeight?: number;
}

export const GridLayoutStyled = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(${({$columnsAmount}) => $columnsAmount}, 1fr);
    grid-gap: 30px;
    grid-auto-rows: ${({$rowHeight}) => $rowHeight ? `${$rowHeight}px` : 'auto'};
    justify-content: center;
    align-items: center;
`;