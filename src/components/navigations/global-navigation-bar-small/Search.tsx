import SearchIcon from '@components/icons/SearchIcon';
import NextLink from 'next/link';


const Search = () => {
    return (
        <NextLink href={'/search'}>
            <a>
                <SearchIcon />
            </a>
        </NextLink>
    );
};

export default Search;