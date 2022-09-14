import { styled, Typography } from '@mui/material';

const BoardPreviewLinkTitle = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: bold;
  line-height: 1.6;
`;

export default BoardPreviewLinkTitle;