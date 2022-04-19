import { ThumbUp, ThumbUpOutlined } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import { useState } from 'react';

interface BoardFooterProps {
    like: number;
}

const Footer = styled('footer')`
  margin: ${({ theme }) => theme.spacing(2)};
`;

const BoardFooter = ({ like }: BoardFooterProps) => {
    const [hasLiked, setHasLiked] = useState<boolean>(false);
    const [nbLike, setNbLike] = useState<number>(like);

    const handleLike = () => {
        // TODO: create request to backend
        setHasLiked(!hasLiked);
        setNbLike(like + (hasLiked ? 0 : 1));
    };

    return (
        <Footer>
            <Button
                startIcon={hasLiked
                    ? <ThumbUp/>
                    : <ThumbUpOutlined/>}
                onClick={handleLike}>
                {nbLike}
            </Button>
        </Footer>
    );
};

export default BoardFooter;