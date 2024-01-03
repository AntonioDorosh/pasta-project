import {createGlobalStyle} from "styled-components";
import {reset} from "./reset.ts";
import {px2vw} from "../../utils";

export const Global = createGlobalStyle`
  ${reset}
  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(13)};
    }
  }
`;