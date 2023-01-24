import css from '@emotion/css';
import { Global } from '@emotion/react';

export const ResetStorybookBodyStyle = () => (
    <Global
        styles={css`
            body {
                padding: 0 !important;
            }
        `}
    />
);

export default ResetStorybookBodyStyle;
