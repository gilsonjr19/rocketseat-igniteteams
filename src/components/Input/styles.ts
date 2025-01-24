import theme from '@/theme';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    border-radius: 6px;
    padding: 12px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
`;