import styled from 'styled-components';
import Box from '../Box/Box.ts';
import { TFlexProps } from './types.ts';
import css from '@styled-system/css';

const Flex = styled(Box)<TFlexProps>(({ display, position }) =>
    css({
        display: !display ? 'flex' : display,
        position: !position ? 'relative' : position,
    }),
);

export default Flex;
