import type { AllSystemCSSProperties } from "@styled-system/css";
import { Property } from "csstype";
import type { HTMLAttributes } from "react";
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
  TextAlignProps,
} from "styled-system";

export type BoxElement = HTMLDivElement;

export interface BoxProps
  extends Omit<HTMLAttributes<BoxElement>, "color">,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TextAlignProps,
    BorderProps,
    BackgroundProps {
  gap?: ResponsiveValue<string | number> | undefined;
  isolation?: ResponsiveValue<AllSystemCSSProperties["isolation"]> | undefined;
  transform?: ResponsiveValue<AllSystemCSSProperties["transform"]> | undefined;
  transition?:
    | ResponsiveValue<AllSystemCSSProperties["transition"]>
    | undefined;
  position?: ResponsiveValue<Property.Position> | undefined;
  cursor?: Property.Cursor | undefined;
}
