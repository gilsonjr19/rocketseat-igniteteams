import { TextInputProps } from 'react-native';
import { Container } from './styles';
import theme from '@/theme';

export function Input({ ...rest }: TextInputProps) {
    const { COLORS } = theme;

    return (
        <Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    );
}