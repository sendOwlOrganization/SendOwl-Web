import DeleteIcon from '@components/icons/DeleteIcon';
import { Typography } from '@components/mlab-ds';
import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMlabThemeMode } from '@styles/mlabTheme';
import { FocusEventHandler, InputHTMLAttributes, useRef, useState } from 'react';

type TextFieldVariant = 'default' | 'error' | 'warning';

const LABEL_VARIANT_COLOR_MAPPING: Record<TextFieldVariant | 'disabled', (theme: Theme) => string> = {
    ['default']: (theme) => (theme.mode === 'dark' ? theme.color.gray[500] : theme.color.gray[700]),
    ['error']: (theme) => theme.palette.semantic.negative,
    ['warning']: (theme) => theme.palette.semantic.notice,
    ['disabled']: (theme) => (theme.mode === 'dark' ? theme.color.gray[700] : theme.color.gray[400]),
};

const CONTAINER_VARIANT_COLOR_MAPPING: Record<TextFieldVariant | 'disabled', (theme: Theme) => string> = {
    ['default']: (theme) => theme.color.pink[600],
    ['error']: (theme) => theme.palette.semantic.negative,
    ['warning']: (theme) => theme.palette.semantic.notice,
    ['disabled']: (theme) => (theme.mode === 'dark' ? theme.color.gray[300] : theme.color.gray[700]),
};

const Container = styled('div')<{ variant: TextFieldVariant | 'disabled' }>(({ theme, variant }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
    paddingBottom: '0.5px',
    borderBottom: `1px solid ${
        theme.mode === 'dark'
            ? theme.color.gray[variant === 'disabled' ? 900 : 300]
            : theme.color.gray[variant === 'disabled' ? 300 : 700]
    }`,
    ['&:focus-within']: {
        paddingBottom: '0px',
        borderBottom: `1.5px solid ${CONTAINER_VARIANT_COLOR_MAPPING[variant](theme)}`,
    },
}));

const StyledTextField = styled('input')(({ theme, disabled }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0.625rem',
    width: '100%',
    color: theme.mode === 'dark' ? theme.color.gray[disabled ? 900 : 100] : theme.color.gray[disabled ? 300 : 1000],
    outline: 'none',
    ...theme.typography.body2,
    fontWeight: 'bold',
    ['&::placeholder']: {
        color: theme.mode === 'dark' ? theme.color.gray[700] : theme.color.gray[300],
        fontWeight: 'normal',
    },
}));

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    variant?: TextFieldVariant;
    label?: string;
    helperText?: string;
    placeholder?: string;
    onClear?: () => void;
}

const TextField = ({
    label,
    helperText,
    placeholder,
    required,
    onClear,
    disabled,
    variant: givenVariant = 'default',
    ...inputProps
}: TextFieldProps) => {
    const variant = disabled ? 'disabled' : givenVariant;
    const theme = useTheme();
    const { mode } = useMlabThemeMode();
    const isDark = mode === 'dark';
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    const onClearDefault = () => {
        if (!ref.current) {
            return;
        }

        ref.current.value = '';
    };

    const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(true);
        if (inputProps.onFocus) {
            inputProps.onFocus(e);
        }
    };

    const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(false);
        if (inputProps.onBlur) {
            inputProps.onBlur(e);
        }
    };

    return (
        <Wrapper>
            <Label $variant={variant} required={!!required} variant={'subtitle3'}>
                {label}
            </Label>
            <Container variant={variant}>
                <StyledTextField
                    ref={ref}
                    {...inputProps}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <span>
                    <DeleteIcon
                        onClick={onClear || onClearDefault}
                        clickable
                        disableHoverBackground
                        colorKey={isDark ? 700 : 200}
                        color={'gray'}
                    />
                </span>
            </Container>
            {helperText && (
                <Typography
                    variant={'caption'}
                    as={'span'}
                    color={isDark ? theme.color.gray[400] : theme.color.gray[500]}>
                    {helperText}
                </Typography>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled(Typography)<{ required: boolean; $variant: TextFieldVariant | 'disabled' }>(
    ({ $variant, theme, required }) => ({
        color: LABEL_VARIANT_COLOR_MAPPING[$variant](theme),
        fontWeight: 'bold',
        ['&:after']: {
            content: required ? '"*"' : '""',
            color: theme.palette.semantic.negative,
        },
    })
);

export default TextField;
