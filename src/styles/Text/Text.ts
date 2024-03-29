import {
    color,
    compose,
    maxWidth,
    space,
    system,
    typography,
} from 'styled-system';
import { TTextProps } from './type.ts';
import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';
import css from '@styled-system/css';

const textTransform = system({
    textTransform: true,
});

const textProps = compose(typography, color, maxWidth, space, textTransform);

const Text = styled.span.withConfig({
    shouldForwardProp: prop => shouldForwardProp(prop),
})<TTextProps>(
    textProps,
    css({
        display: 'inline-block',
    }),
);

export default Text;
