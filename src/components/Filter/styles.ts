import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import theme from '@/theme';

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ isActive }: FilterStyleProps) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `};
    border-radius: 4px;
    margin-right: 12px;
    height: 38px;
    width: 70px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
    text-transform: uppercase;
`;