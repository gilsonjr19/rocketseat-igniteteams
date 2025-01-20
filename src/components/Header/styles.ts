import styled from 'styled-components/native';
import { IconChevronLeft } from '@tabler/icons-react-native';

import theme from '@/theme';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(IconChevronLeft).attrs({
    size: 32,
    color: theme.COLORS.WHITE,
})`

`;