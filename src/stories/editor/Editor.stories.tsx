import { OutputData } from '@editorjs/editorjs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Editor from '../../components/editor/Editor';
import { blocksMock } from '../../mocks/editors';

export default {
    title: 'components/editor/Editor',
    component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => {
    return (
        <div style={{ margin: '0 128px' }}>
            <Editor {...args} />
        </div>
    );
};

export const 읽기_전용 = Template.bind({});
읽기_전용.args = {
    readOnly: true,
    data: {
        time: new Date(2022, 5, 15).getTime(),
        blocks: blocksMock,
    },
};

export const 편집 = Template.bind({});
편집.args = {
    data: {
        time: new Date(2022, 5, 15).getTime(),
        blocks: blocksMock,
    },
    onChange: (data: OutputData) => {
        console.log(data);
    },
};