import { Typography } from '@mui/material';
import { memo, PropsWithChildren } from 'react';

const BalanceGameWidgetChoiceText = ({ children }: PropsWithChildren<{}>) =>
    <Typography height={'3.625rem'} width={'5.5rem'}
                display={'flex'}
                fontWeight={'bold'}
                variant={'body2'}
                whiteSpace={'pre'}
                alignItems={'center'}
                lineHeight={1.65}
                justifyContent={'center'}>
        {children}
    </Typography>;

export default memo(BalanceGameWidgetChoiceText);