import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import NextLink from 'next/link';

const StyledAnchor = styled('a')`
    margin: ${({ theme }) => theme.spacing(1)} 0;
    display: block;
    text-align: center;
    font-size: 12px;
    text-decoration: underline;
    color: ${grey[500]};
`;

const FindIdPasswordLink = () => {
    return (
        <NextLink href={''} passHref legacyBehavior>
            <StyledAnchor>아이디/비밀번호 찾기</StyledAnchor>
        </NextLink>
    );
};

export default FindIdPasswordLink;
