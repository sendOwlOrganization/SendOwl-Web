import SearchIcon from '@components/icons/SearchIcon';
import NextLink from 'next/link';

const Search = () => {
    return (
        <NextLink href={'/search'} legacyBehavior>
            <a>
                <SearchIcon />
            </a>
        </NextLink>
    );
};

export default Search;
