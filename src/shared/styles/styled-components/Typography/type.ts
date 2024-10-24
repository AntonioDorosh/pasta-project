import {
  ColorProps,
  MaxWidthProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export type TTextProps = TypographyProps &
  ColorProps &
  MaxWidthProps &
  SpaceProps & {
    textTransform?: "capitalize" | "uppercase" | "lowercase" | "none";
  };
