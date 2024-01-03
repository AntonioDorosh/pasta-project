import styled from "styled-components";
import {TButtonProps} from "./types.ts";
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
      },
      category: {
        backgroundColor: $isActive ? '#282828' : 'transparent',
        color: $isActive ? '#fff' : '#2C2C2C',
        borderRadius: '30px',
        padding: '10px 20px',
        transition: 'all 0.3s ease',
      },
      card: {
        backgroundColor: $isActive ? 'silver' : 'transparent',
        color: $isActive ? '#000' : '#2C2C2C',
        borderRadius: '5px',
        padding: '5px 30px',
      }
    }
  })}
`
export const AddButton = styled(StyledButton)`
  border-radius: ${px2vw(30)};
  border: 1px solid #EB5A1E;
  background-color: #fff;
  color: #EB5A1E;
  padding: ${px2vw(10)} ${px2vw(30)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #EB5A1E;
    color: #fff;
  }
`

