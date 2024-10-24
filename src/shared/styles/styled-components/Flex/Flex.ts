import styled from "styled-components";
import css from "@styled-system/css";
import Box from "@/shared/styles/styled-components/Box/Box";
import { TFlexProps } from "@/shared/styles/styled-components/Flex/type";

const Flex = styled(Box)<TFlexProps>(({ display, position }) =>
  css({
    display: !display ? "flex" : display,
    position: !position ? "relative" : position,
  }),
);

export default Flex;
