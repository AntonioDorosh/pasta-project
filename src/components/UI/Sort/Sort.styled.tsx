import styled from "styled-components";

export const SelectStyled = styled.select`
    border: 1px solid #2c2c2c;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    appearance: none;
    background-color: #fff;
    margin-right: 10px;
    width: 200px;
    height: 40px;
    color: #2c2c2c;
    font-weight: 500;
    line-height: 19px;
    &:hover {
        border-color: #2c2c2c;
    }
    &:focus {
        border-color: #2c2c2c;
    }
`;

export const OptionStyled = styled.option<{$isActive: boolean}>`
    color: ${({$isActive}) => ($isActive ? '#fff' : '#2c2c2c')};
    background-color: ${({$isActive}) => ($isActive ? '#2c2c2c' : '#fff')};
    font-weight: 600;
`;