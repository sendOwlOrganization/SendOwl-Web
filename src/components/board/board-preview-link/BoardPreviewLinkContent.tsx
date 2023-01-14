import { styled, Typography } from '@mui/material';

const BoardPreviewLinkContent = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.6;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0.5rem 0;
`;

export default BoardPreviewLinkContent;
