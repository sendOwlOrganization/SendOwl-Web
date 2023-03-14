import { getCategories, postBoardDetails } from '@api/index';
import { Category } from '@api/types/category';
import { useEditorData } from '@components/editorjs/useEditorData';
import EmptyLayout from '@components/layout/EmptyLayout';
import BackNavigationBar from '@components/navigations/global-navigation-bar-small/BackNavigationBar';
import Select from '@components/select/Select';
import css from '@emotion/css';
import { styled, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sessionStore } from '../../src/store/sessionStore';

const Editor = dynamic(() => import('@components/editorjs/Editor'), { ssr: false });

interface BoardWritePageProps {
    categories: Category[];
}

const TitleInput = styled('input')(
    ({ theme }) => css`
        border: none;
        background-color: transparent;
        font-size: ${theme.typography.subtitle2.fontSize};
        font-weight: ${theme.typography.subtitle2.fontWeight};
        display: block;
        margin: 0 1rem;
        padding: 0;
        width: 100%;
        color: ${theme.palette.mode === 'light' ? theme.palette.gray[1000] : theme.palette.gray[100]};

        &:focus {
            outline: 0;
        }
    `
);

const SubmitButton = styled('button', {
    shouldForwardProp: (propName: PropertyKey) => propName !== 'disabled',
})<{ disabled: boolean }>(
    ({ theme, disabled }) => css`
        background-color: transparent;
        border: none;
        font-size: ${theme.typography.body2.fontSize};
        font-weight: bold;
        color: ${disabled ? theme.palette.gray[300] : theme.palette.pink[600]};
    `
);
SubmitButton.defaultProps = {
    type: 'submit',
};

const CategorySelectContainer = styled('div')(
    ({ theme }) => css`
        padding: 14px 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${theme.palette.mode === 'light' ? theme.palette.gray[100] : theme.palette.gray[900]};
        margin-bottom: 1rem;
    `
);

const BoardWritePage = ({ categories }: BoardWritePageProps) => {
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<Category>(categories[0]);
    const { data, onChangeData } = useEditorData();
    const session = useRecoilValue(sessionStore);
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            await postBoardDetails(
                {
                    title,
                    editorJsContent: data,
                    categoryId: category.id,
                },
                (session.isAuthenticated && session.token) || ''
            );
            // TODO post id로 리디렉션
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <BackNavigationBar title={'게시글 작성'}>
                    <SubmitButton disabled={!title || !data.blocks.length}>등록</SubmitButton>
                </BackNavigationBar>

                <CategorySelectContainer>
                    <Typography variant={'subtitle3'} marginRight={'0.5rem'}>
                        <Typography color={(theme) => theme.palette.pink[600]} component={'span'}>
                            *
                        </Typography>
                        카테고리/분야
                    </Typography>

                    <Select
                        items={categories}
                        getKey={(c) => c.id.toString()}
                        getLabel={(c) => c.name}
                        value={category}
                        onChange={setCategory}
                    />
                </CategorySelectContainer>
                <TitleInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={'제목을 입력해주세요'}
                />
                <Editor data={data} onChange={onChangeData} />
            </form>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<BoardWritePageProps> = async (context) => {
    const { data } = await getCategories();

    return {
        props: {
            categories: data!,
        },
    };
};

BoardWritePage.getLayout = EmptyLayout;

export default BoardWritePage;
