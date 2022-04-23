import { Board } from '../src/components/board';
import { BoardPost, postMocks } from '../src/mocks/boards';

interface PostPageProps {
    post: BoardPost;
}

const PostPage = ({ post }: PostPageProps) => {
    return <Board post={post}/>;
};

export const getStaticProps = () => {
    const post = postMocks[0];
    return {
        props: {
            post,
        },
    };
};

export default PostPage;