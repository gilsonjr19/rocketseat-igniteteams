import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '@/theme';
import styled from 'styled-components/native';
import { IconUsersGroup } from '@tabler/icons-react-native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Icon = styled(IconUsersGroup).attrs({
    size: 56,
    color: theme.COLORS.GREEN_700,
})`
    align-self: center;
`;