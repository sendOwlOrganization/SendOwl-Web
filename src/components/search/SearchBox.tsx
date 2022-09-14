import CloseIcon from '@components/icons/CloseIcon';
import SearchIcon from '@components/icons/SearchIcon';
import SearchAutocomplete from '@components/search/SearchAutocomplete';
import Toggle from '@components/toggle/Toggle';
import { css, Stack, styled, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import RecentlySearched from './RecentlySearched';
import SearchRecommendation from './SearchRecommendation';

interface SearchBoxProps {
    recentlySearched: string[];
    recommendations: string[];
    populars: string[];
}

const Container = styled('div')(({ theme }) => css`
  width: 700px;
  background-color: ${theme.palette.background.paper};
  border-radius: 16px;
`);

const SearchInput = styled('input')(({ theme }) => css`
  width: 100%;
  margin: 0 16px;
  border: none;
  font-size: ${theme.typography.subtitle3.fontSize};
  color: ${theme.palette.text.primary};
  background-color: ${theme.palette.background.paper};
  caret-color: ${theme.palette.text.primary};
  font-weight: normal;

  :active {
    outline: none;
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.palette.gray[600]};
  }
`);

const SearchArea = styled('div')(({ theme }) => css`
  border-radius: 16px 16px 0 0;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.palette.gray[500]};
`);

const BodyArea = styled(Stack)<{ padding: string }>(({ theme, padding }) => css`
  padding: ${padding};
`);

const FootArea = styled('div')(({ theme }) => css`
  border-radius: 0 0 16px 16px;
  border-top: 1px solid ${theme.palette.gray[500]};
  background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[100]};
  padding: 16px 32px;
  display: flex;
  justify-content: right;
  align-items: center;
`);

const SearchBox = ({ recentlySearched, recommendations, populars }: SearchBoxProps) => {
    const [saveHistory, setSaveHistory] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleSaveHistory = () => setSaveHistory(state => !state);

    const [search, setSearch] = useState<string>();
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onChangeSearch = (value: string) => {
        setSearch(value);
        inputRef.current?.focus();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <Container>
            <SearchArea>
                <SearchIcon color={'pink'} />
                <SearchInput ref={inputRef} value={search} onChange={handleSearch} autoFocus
                             placeholder={`'ENFP' 키워드를 검색해보세요`} />
                {search && <CloseIcon disableHoverBackground onClick={() => onChangeSearch('')} />}
            </SearchArea>
            <BodyArea padding={search ? '20px' : '32px'} spacing={5}>
                {
                    search
                        ? (<SearchAutocomplete words={recentlySearched}
                                               inputRef={inputRef}
                                               query={search} />)
                        : (
                            <>
                                {saveHistory && <RecentlySearched words={recentlySearched} setSearch={onChangeSearch} />}
                                <SearchRecommendation words={recommendations} setSearch={onChangeSearch} />
                            </>
                        )
                }
            </BodyArea>
            <FootArea>
                <Typography variant={'subtitle4'}
                            fontWeight={'normal'}
                            marginRight={'0.75rem'}>
                    검색어 기록
                </Typography>
                <Toggle on={saveHistory} onClick={toggleSaveHistory} />
            </FootArea>
        </Container>
    );
};

export default SearchBox;