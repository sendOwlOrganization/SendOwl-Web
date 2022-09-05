import SearchIcon from '@components/icons/SearchIcon';
import SearchBox from '@components/search/SearchBox';
import { Dialog } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const searchBoxMocks = {
    recentlySearched: ['최근', '검색어', '아래', '토글로', '끌 수 있음'],
    recommendations: ['유저와 같은', 'MBTI가', '많이 검색', '검색어(키워드)', '추천'],
    populars: [...Array(10).keys()].map(i => `인기 검색어 ${i + 1}`),
};

const Search = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleCloseDialog();
    }, [router.pathname, router.query])

    return (
        <>
            <SearchIcon color={open ? 'pink' : 'black'}
                        onClick={handleOpenDialog}
                        disableHoverBackground />
            <Dialog maxWidth={'xl'} open={open} onClose={handleCloseDialog}>
                <SearchBox {...searchBoxMocks} />
            </Dialog>
        </>
    );
};

export default Search;