import { ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

interface ChildCommentButtonProps {
    id: number;
    childCommentCount: number;
}

/**
 * @deprecated TODO: 사용 ㄴㄴ 새로 만들어야함
 * @param childCommentCount
 * @constructor
 */
const ChildCommentButton = ({ childCommentCount }: ChildCommentButtonProps) => {
    return (
        <Button
            sx={{ display: 'flex', color: 'text.disabled', fontSize: '0.75rem' }}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            size={'small'}>
            <ChatBubbleOutlineOutlined sx={{ marginBottom: '1px', marginRight: '4px' }} fontSize={'inherit'} />
            {childCommentCount === 0 ? '대댓글' : childCommentCount}
        </Button>
    );
};

export default ChildCommentButton;
