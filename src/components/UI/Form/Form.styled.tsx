import styled from 'styled-components';

export const ValidationForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ValidationInput = styled.input<{ $borderColor?: string }>`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: ${({ $borderColor }) => $borderColor || '1px solid #B6B6B6'};
    padding: 0 20px;
    font-size: 18px;
    line-height: 22px;
    color: #b6b6b6;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
        border-color: #0ef106;
    }
`;

export const ValidationButton = styled.button.attrs({
    type: 'submit',
})`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #fe5f1e;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #eb5a1e;
    }

    &:active {
        background-color: #fe5f1e;
    }

    &:disabled {
        background-color: #e0e0e0;
        color: #9e9e9e;
        cursor: not-allowed;
    }
`;
