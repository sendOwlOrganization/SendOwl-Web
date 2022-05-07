import { AccessTimeOutlined } from '@mui/icons-material';
import { Box, Stack, styled } from '@mui/material';
import { formatDate } from '../../tools/date';
import ChildCommentButton from './ChildCommentButton';
import { ParentComment } from './CommentList';
import LikeButton from './LikeButton';

interface CommentListItemProps extends Omit<ParentComment, 'childComments'> {
    childComments?: ParentComment['childComments'];
}

interface ListItemProps {
    isParent: boolean;
}

const ListItem = styled('li', { shouldForwardProp: (propName: PropertyKey) => propName !== 'isParent' })<ListItemProps>`
  list-style: none;
  padding: ${({ theme, isParent }) => isParent ? theme.spacing(1) : `${theme.spacing(1)} ${theme.spacing(4)}`};
  ${({ theme, isParent }) => !isParent && `background-color: ${theme.palette.grey.A100}`};
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
    const isParent = !!childComments;
    return (
        <>
            <ListItem isParent={isParent}>
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
            {childComments && childComments.map(child => <CommentListItem key={child.id} {...child} />)}
        </>
    );
};

export default CommentListItem;