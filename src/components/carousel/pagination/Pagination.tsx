import {styled} from "@mui/material";
import {MLAB_THEME} from "@styles/mlabTheme";

const HeroImagePagination = styled('div')`
  width: 2.25rem;
  height: 1.25rem;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  background: ${MLAB_THEME.opacity.black[500]};
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  color: ${MLAB_THEME.white};
`

const PaginationCaption = styled('div')`
  width: 1.675rem;
  height: 0.75rem;
  flex-grow: 0;
  line-height: 0.75rem;
  display: flex;
  text-align: left;
  color: ${MLAB_THEME.white};
  gap: 2px;
  font-size: 0.625rem;
  font-weight: 600;
  
  * {
    color: ${MLAB_THEME.gray[700]};
    gap: 2px;
  }
`

interface PaginationProps {
    page: number;
    size: number;
    margin: string;
}

const Pagination = ({page, size, margin}: PaginationProps) => {
    return (
        <HeroImagePagination sx={{margin: {margin}}}>
            <PaginationCaption>
                {page}
                <span>/</span>
                <span>{size}</span>
            </PaginationCaption>
        </HeroImagePagination>
    )
}

export default Pagination;