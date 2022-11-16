import DeleteIcon from '@components/icons/DeleteIcon';
import { Box, Fade, styled, Theme, Typography } from '@mui/material';
import useThemeMode from '@tools/useThemeMode';
import { FocusEventHandler, InputHTMLAttributes, useRef, useState } from 'react';

type TextFieldVariant = 'default' | 'error' | 'warning';

const LABEL_VARIANT_COLOR_MAPPING: Record<TextFieldVariant | 'disabled', (theme: Theme) => string> = {
    ['default']: theme => theme.palette.mode === 'dark'
        ? theme.palette.gray[500]!
        : theme.palette.gray[700]!,
    ['error']: theme => theme.palette.error.main,
    ['warning']: theme => theme.palette.warning.main,
    ['disabled']: theme => theme.palette.mode === 'dark'
        ? theme.palette.gray[700]!
        : theme.palette.gray[400]!,
};

const CONTAINER_VARIANT_COLOR_MAPPING: Record<TextFieldVariant | 'disabled', (theme: Theme) => string> = {
    ['default']: theme => theme.palette.pink[600]!,
    ['error']: theme => theme.palette.error.main,
    ['warning']: theme => theme.palette.warning.main,
    ['disabled']: theme => theme.palette.mode === 'dark'
        ? theme.palette.gray[300]!
        : theme.palette.gray[700]!,
};

const Container = styled('div')<{ variant: TextFieldVariant | 'disabled' }>(({ theme, variant }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
    paddingBottom: '0.5px',
    borderBottom: `1px solid ${theme.palette.mode === 'dark'
        ? theme.palette.gray[variant === 'disabled' ? 900 : 300]
        : theme.palette.gray[variant === 'disabled' ? 300 : 700]}`,
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
    color: theme.palette.mode === 'dark'
        ? theme.palette.gray[disabled ? 900 : 100]
        : theme.palette.gray[disabled ? 300 : 1000],
    outline: 'none',
    ...theme.typography.body2,
    fontWeight: 'bold',
    ['&::placeholder']: {
        color: theme.palette.mode === 'dark'
            ? theme.palette.gray[700]
            : theme.palette.gray[300],
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
    const { theme, isDark } = useThemeMode();
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
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={theme => ({
                color: LABEL_VARIANT_COLOR_MAPPING[variant](theme),
                fontWeight: 'bold',
                ['&:after']: {
                    content: required ? '"*"' : '""',
                    color: theme.palette.error.main,
                },
            })}
                        variant={'subtitle3'}>
                {label}
            </Typography>
            <Container variant={variant}>
                <StyledTextField ref={ref}
                                 {...inputProps}
                                 placeholder={placeholder}
                                 disabled={disabled}
                                 onFocus={onFocus}
                                 onBlur={onBlur} />
                <Fade in={isFocused} unmountOnExit>
                    <span>
                        <DeleteIcon onClick={onClear || onClearDefault}
                                    clickable
                                    disableHoverBackground
                                    colorKey={isDark ? 700 : 200}
                                    color={'gray'} />
                    </span>
                </Fade>
            </Container>
            <Typography variant={'caption1'}
                        component={'span'}
                        color={isDark ? theme.palette.gray[400] : theme.palette.gray[500]}>
                {helperText}
            </Typography>
        </Box>
    );
};

export default TextField;