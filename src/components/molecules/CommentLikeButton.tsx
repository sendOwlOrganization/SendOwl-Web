import { ThumbUp, ThumbUpOutlined } from '@mui/icons-material';
import { Button, SxProps, Theme } from '@mui/material';
import { useState } from 'react';

interface LikeButtonProps {
    id: number;
    like: number;
}

const iconSx: SxProps<Theme> = { marginBottom: '1px', marginRight: '4px' };

const CommentLikeButton = ({ like }: LikeButtonProps) => {
    const [hasLiked, setHasLiked] = useState<boolean>(false);
    const [nbLike, setNbLike] = useState<number>(like);

    const handleLike = () => {
        setHasLiked(!hasLiked);
        setNbLike(like + (hasLiked ? 0 : 1));
    };

    return (
        <Button sx={{ display: 'flex', color: 'text.disabled', fontSize: '0.75rem' }}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                size={'small'}
                onClick={handleLike}>
            {
                hasLiked
                    ? <ThumbUp sx={iconSx} fontSize={'inherit'} />
                    : <ThumbUpOutlined sx={iconSx} fontSize={'inherit'} />
            }
            {
                nbLike === 0
                    ? '좋아요'
                    : nbLike.toString()
            }
        </Button>
    );
};

export default CommentLikeButton;