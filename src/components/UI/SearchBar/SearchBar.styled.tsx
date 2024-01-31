import styled from 'styled-components';

export const InputStyled = styled.input.attrs({
    type: 'text',
    placeholder: 'Searching for pizza...',
})`
    width: 260px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #e1e1e1;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 700;
    color: #4a4a4a;
    transition: all 0.3s ease;

    &:focus {
        width: 360px;
        height: 40px;
        border-radius: 6px;
        border: 1px solid #e1e1e1;
        padding: 0 15px;
        font-size: 14px;
        font-weight: 700;
        color: #4a4a4a;

        &::placeholder {
            color: transparent;
        }
    }
`;
