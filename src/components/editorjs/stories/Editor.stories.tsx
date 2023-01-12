import Editor from '@components/editorjs/Editor';
import { useEditorData } from '@components/editorjs/useEditorData';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/editorjs/Editor',
    component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => {
    const { data, onChangeData } = useEditorData();
    return <Editor {...args} data={data} onChange={onChangeData} />
}

export const Example = Template.bind({})
Example.args = {}