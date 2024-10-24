import {
  background,
  border,
  color,
  compose,
  flex,
  flexbox,
  grid,
  gridColumn,
  layout,
  opacity,
  position,
  shadow,
  space,
  system,
  textAlign,
} from "styled-system";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import css from "@styled-system/css";
import { BoxProps } from "@/shared/styles/styled-components/Box/type";

const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

const styleProps = compose(
  color,
  flexbox,
  gap,
  layout,
  position,
  space,
  shadow,
  opacity,
  textAlign,
  gridColumn,
  flex,
  grid,
  border,
  background,
);

const Box = styled.div.withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<BoxProps>(
  css({
    m: 0,
    p: 0,
    boxSizing: "border-box",
  }),
  styleProps,
  system({
    isolation: true,
    transform: true,
    transition: true,
  }),
);

export default Box;
