import styled, {css} from "styled-components";
import {TButtonProps} from "./type.ts";

const defaultStyles = {
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
};

const headerStyles = css`
    background-color: #FE5F1E;
    color: #fff;
    border-radius: 30px;
    padding: 15px 50px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.1);
    }
`

const categoryStyles = css<TButtonProps>`
    background-color: ${({$isActive}) => $isActive ? '#282828' : 'transparent'};
    color: ${({$isActive}) => $isActive ? '#fff' : '#2C2C2C'};
    border-radius: 30px;
    padding: 10px 20px;
    transition: all 0.5s ease;
`;

const cardStyles = css<TButtonProps>`
    background-color: ${({$isActive}) => $isActive ? 'silver' : 'transparent'};
    color: ${({$isActive}) => $isActive ? '#000' : '#2C2C2C'};
    border-radius: 5px;
    padding: 5px 30px;
`;

const addButton = css`
    background-color: #fff;
    color: #EB5A1E;
    border: 1px solid #EB5A1E;
    padding: 10px 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background-color: #EB5A1E;
        color: #fff;
    }
`;

const dangerButton = css`
    background-color: #ee0909;
    color: #fff;
    padding: 10px 20px;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.5;
    }
`;


export const StyledButton = styled.button<TButtonProps>`
    ${defaultStyles}
    ${({$variant}) => {
        switch ($variant) {
            case 'header':
                return headerStyles;
            case 'category':
                return categoryStyles;
            case 'card':
                return cardStyles;
            case 'addButton':
                return addButton;
            case 'danger':
                return dangerButton;
            default:
                return '';
        }
    }}
`

