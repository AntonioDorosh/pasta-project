import { HTMLAttributes } from "react";
import {
  BorderProps,
  BordersProps,
  BoxShadowProps,
  ColorProps,
  HeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system";

type ButtonVariants =
  | "category"
  | "add"
  | "options"
  | "ingredients"
  | "quantity"
  | "cart"
  | "close";

type StyledSystemProps = SpaceProps &
  WidthProps &
  BorderProps &
  BordersProps &
  HeightProps &
  ColorProps &
  BoxShadowProps;

type ButtonOptions = {
  $isActive?: boolean;
  $variant?: ButtonVariants;
  $isDisabled?: boolean;
  $size?: "primary" | "secondary";
};

export type TButtonProps = StyledSystemProps &
  ButtonOptions &
  HTMLAttributes<HTMLButtonElement>;
