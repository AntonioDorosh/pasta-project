import styled, { css } from "styled-components";
import {
  borders,
  boxShadow,
  color,
  compose,
  height,
  space,
  width,
} from "styled-system";
import { TButtonProps } from "@/components/UI/Button/type";
import { remCalc } from "@/utils";

const BUTTON_PROPS = compose(width, height, borders, boxShadow, color, space);

const resetStyles = css`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  appearance: none;
`;

const BUTTON_STYLES = {
  options: css<TButtonProps>`
    width: 100%;
    background-color: ${({ $isActive }) =>
      $isActive ? "#FFFFFF" : "transparent"};
    font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
    border-radius: 30px;
    font-size: ${remCalc(14)};
    padding: 10px 25px;
    transition:
      width 0.5s ease,
      background-color 0.5s ease,
      color 0.5s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,
  category: css<TButtonProps>`
    color: ${({ $isActive }) => ($isActive ? "#FE5F00" : "#000")};
    height: 55px;
    background-color: ${({ $isActive }) =>
      $isActive ? "#FFFFFF" : "transparent"};
    padding: 11px 25px;
    border-radius: 15px;
    font-weight: 600;
    transition: all 0.3s ease-in;
  `,
  add: css<TButtonProps>`
    background-color: ${({ $size }) =>
      $size === "primary" ? "#FFFAF4" : "#fe5f00"};
    padding: ${({ $size }) =>
      $size === "primary" ? "10px 20px" : "15px 25px"};
    border-radius: 15px;
    color: ${({ $size }) => ($size === "primary" ? "#FE5F00" : "#ffffff")};
    font-weight: 800;
    font-size: ${remCalc(15)};
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ $size }) =>
        $size === "primary" ? "#fe5f00" : ""};
      color: ${({ $size }) => ($size === "primary" ? "#ffffff" : "")};
    }
  `,
  ingredients: css<TButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    background-color: #ffffff;
    border: ${({ $isActive }) => ($isActive ? "1px solid #fe5f00" : "none")};
  `,

  quantity: css`
    width: 30px;
    height: 30px;
    border: 1px solid #fe5f00;
    color: #fe5f00;
    border-radius: 10px;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #fe5f00;
      color: #ffffffff;
    }
  `,

  cart: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 50px;
    gap: 5px;
    border-radius: 15px;
    border: 1px solid #fe5f00;
    background-color: #fe5f00;
  `,

  close: css`
    position: absolute;
    right: 15px;
    top: 5px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &::before,
    &::after {
      position: absolute;
      left: 15px;
      content: " ";
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  `,
};

export const ButtonStyled = styled.button<TButtonProps>`
  ${resetStyles}
  ${BUTTON_PROPS}
    ${({ $variant }) => BUTTON_STYLES[$variant as keyof typeof BUTTON_STYLES]}
`;
