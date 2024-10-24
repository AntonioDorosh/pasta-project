import {
  color,
  compose,
  maxWidth,
  space,
  system,
  typography,
} from "styled-system";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import css from "@styled-system/css";
import { TTextProps } from "@/shared/styles/styled-components/Typography/type";

const textTransform = system({
  textTransform: true,
});

const textProps = compose(typography, color, maxWidth, space, textTransform);

const Typography = styled.span.withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<TTextProps>(
  textProps,
  css({
    display: "inline-block",
  }),
);

export default Typography;
