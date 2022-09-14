import { styled, Typography } from '@mui/material';

const BoardPreviewLinkContent = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.6;
  color: ${({ theme }) => theme.palette.text.secondary};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default BoardPreviewLinkContent;