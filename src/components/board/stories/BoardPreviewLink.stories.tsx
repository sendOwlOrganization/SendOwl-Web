import BoardPreviewLink from '@components/board/board-preview-link';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/board/BoardPreviewLink',
    component: BoardPreviewLink,
    argTypes: {
        date: {
            control: 'date',
        },
    },
} as ComponentMeta<typeof BoardPreviewLink>;

const Template: ComponentStory<typeof BoardPreviewLink> = (args) => (
    <BoardPreviewLink {...args} />
);

export const 일반_제목_긴_미리보기 = Template.bind({});
일반_제목_긴_미리보기.args = {
    id: 1,
    title: '게시글 제목',
    preview: '독자가 페이지의 레이아웃을 볼 때 읽을 수 있는 콘텐츠에 주의를 산만하게 한다는 것은 오래 전부터 확립된 사실입니다. Lorem Ipsum을 사용하는 요점은 \'여기에 내용, 여기에 내용\'을 사용하는 것과는 대조적으로 글자의 다소 정규 분포가 있어 읽을 수 있는 영어처럼 보이게 한다는 것입니다. 많은 데스크탑 출판 패키지와 웹 페이지 편집자는 이제 Lorem Ipsum을 기본 모델 텍스트로 사용하며 \'lorem ipsum\'을 검색하면 아직 초기 단계에 있는 많은 웹 사이트를 찾을 수 있습니다. 다양한 버전이 수년에 걸쳐, 때로는 우연히, 때로는 의도적으로(삽입된 유머 등) 진화했습니다.',
    imgSrc: '',
    user: {
        id: 1,
        nickName: '유저',
        mbti: 'MBTI',
    },
    hasVote: true,
    category: '분야',
    likeCount: 1200,
    commentCount: 21,
    date: '2022-08-18T17:45:22',
};

export const 긴_제목_긴_미리보기 = Template.bind({});
긴_제목_긴_미리보기.args = {
    id: 1,
    title: '이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다.',
    preview: '독자가 페이지의 레이아웃을 볼 때 읽을 수 있는 콘텐츠에 주의를 산만하게 한다는 것은 오래 전부터 확립된 사실입니다. Lorem Ipsum을 사용하는 요점은 \'여기에 내용, 여기에 내용\'을 사용하는 것과는 대조적으로 글자의 다소 정규 분포가 있어 읽을 수 있는 영어처럼 보이게 한다는 것입니다. 많은 데스크탑 출판 패키지와 웹 페이지 편집자는 이제 Lorem Ipsum을 기본 모델 텍스트로 사용하며 \'lorem ipsum\'을 검색하면 아직 초기 단계에 있는 많은 웹 사이트를 찾을 수 있습니다. 다양한 버전이 수년에 걸쳐, 때로는 우연히, 때로는 의도적으로(삽입된 유머 등) 진화했습니다.',
    imgSrc: '',
    user: {
        id: 1,
        nickName: '유저',
        mbti: 'MBTI',
    },
    hasVote: true,
    category: '분야',
    likeCount: 1200,
    commentCount: 21,
    date: '2022-08-18T17:45:22',
};

export const 긴_제목_긴_미리보기_이미지 = Template.bind({});
긴_제목_긴_미리보기_이미지.args = {
    id: 1,
    title: '이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다.',
    preview: '독자가 페이지의 레이아웃을 볼 때 읽을 수 있는 콘텐츠에 주의를 산만하게 한다는 것은 오래 전부터 확립된 사실입니다. Lorem Ipsum을 사용하는 요점은 \'여기에 내용, 여기에 내용\'을 사용하는 것과는 대조적으로 글자의 다소 정규 분포가 있어 읽을 수 있는 영어처럼 보이게 한다는 것입니다. 많은 데스크탑 출판 패키지와 웹 페이지 편집자는 이제 Lorem Ipsum을 기본 모델 텍스트로 사용하며 \'lorem ipsum\'을 검색하면 아직 초기 단계에 있는 많은 웹 사이트를 찾을 수 있습니다. 다양한 버전이 수년에 걸쳐, 때로는 우연히, 때로는 의도적으로(삽입된 유머 등) 진화했습니다.',
    imgSrc: '이미지',
    user: {
        id: 1,
        nickName: '유저',
        mbti: 'MBTI',
    },
    hasVote: true,
    category: '분야',
    likeCount: 1200,
    commentCount: 21,
    date: '2022-08-18T17:45:22',
};

export const 긴_제목_짧은_미리보기_이미지 = Template.bind({});
긴_제목_짧은_미리보기_이미지.args = {
    id: 1,
    title: '이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다. 이것은 엄청나게 긴 게시글 제목입니다.',
    preview: '영어처럼 보이게 한다는 것입니다.',
    imgSrc: '이미지',
    user: {
        id: 1,
        nickName: '유저',
        mbti: 'MBTI',
    },
    hasVote: true,
    category: '분야',
    likeCount: 1200,
    commentCount: 21,
    date: '2022-08-18T17:45:22',
};
