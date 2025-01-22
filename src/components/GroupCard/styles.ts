import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { IconUsersGroup } from '@tabler/icons-react-native';
import theme from '@/theme';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background-color: ${theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(IconUsersGroup).attrs({
    size: 32,
    color: theme.COLORS.GREEN_700,
    fill: theme.COLORS.GREEN_700
})`
    margin-right: 20px;
`;