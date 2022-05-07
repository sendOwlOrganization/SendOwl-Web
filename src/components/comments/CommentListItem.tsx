import { AccessTimeOutlined } from '@mui/icons-material';
import { Box, Stack, styled } from '@mui/material';
import { formatDate } from '../../tools/date';
import ChildCommentButton from './ChildCommentButton';
import { ParentComment } from './CommentList';
import LikeButton from './LikeButton';

interface CommentListItemProps extends Omit<ParentComment, 'childComments'> {
    childComments?: ParentComment['childComments'];
}

const ListItem = styled('li')`
  list-style: none;
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const User = styled('div')`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.subtitle2};
  margin: ${({ theme }) => theme.spacing(1)} 0;
`;

const Content = styled('p')`
  margin: 0;
`;

const DeletedContent = styled(Content)`
  color: ${({ theme }) => theme.palette.text.disabled}
`;

const DateTime = styled('time')`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.disabled};
  font-size: ${({ theme }) => theme.typography.caption};
`;

const CommentListItem = (props: CommentListItemProps) => {
    const { id, active, content, regDate, modDate, like, user, childComments } = props;
    return (
        <ListItem>
            <User>{user}</User>
            {
                active
                    ? <Content>{content}</Content>
                    : <DeletedContent>삭제된 댓글입니다</DeletedContent>
            }
            <Stack direction={'row'} spacing={1} marginTop={1} alignItems={'center'}>
                <Box component={'span'}
                     color={'text.disabled'}
                     fontSize={'0.75rem'}
                     alignItems={'center'}
                     display={'flex'}>
                    <AccessTimeOutlined sx={{ marginBottom: '1px', marginRight: '4px' }} fontSize={'inherit'} />
                    <DateTime dateTime={regDate}>
                        {formatDate(regDate)}
                    </DateTime>
                </Box>
                <LikeButton id={id} like={like} />
                {childComments && <ChildCommentButton id={id} childCommentCount={childComments.length} />}
            </Stack>
        </ListItem>
    );
};

export default CommentListItem;