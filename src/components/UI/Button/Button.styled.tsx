import styled from "styled-components";
import {TButtonProps} from "./type.ts";
import {variant} from "styled-system";
import {px2vw} from "../../../utils";

const defaultStyles = {
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
};

export const StyledButton = styled.button<TButtonProps>`
  ${defaultStyles}
  ${({$isActive}) => variant({
    prop: '$variant',
    variants: {
      header: {
        backgroundColor: '#FE5F1E',
        color: '#fff',
        borderRadius: '30px',
        padding: '15px 50px',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'all 0.5s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        }
      },
      category: {
        backgroundColor: $isActive ? '#282828' : 'transparent',
        color: $isActive ? '#fff' : '#2C2C2C',
        borderRadius: '30px',
        padding: '10px 20px',
        transition: `all 0.5s ease`,
      },
      card: {
        backgroundColor: $isActive ? 'silver' : 'transparent',
        color: $isActive ? '#000' : '#2C2C2C',
        borderRadius: '5px',
        padding: '5px 30px',
      },
      addButton: {
        backgroundColor: '#fff',
        color: '#EB5A1E',
        border: '1px solid #EB5A1E',
        padding: `${px2vw(10)} ${px2vw(30)}`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        borderRadius: `${px2vw(30)}`,
        '&:hover': {
          backgroundColor: '#EB5A1E',
          color: '#fff',
        }
      },
    }
  })}
`

