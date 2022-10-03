import { i18nKorean } from '@components/editorjs/i18n';
import { EDITOR_JS_TOOLS } from '@components/editorjs/plugins';
import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs';
import { css, styled } from '@mui/material';
import { useEffect, useId, useRef } from 'react';

interface EditorProps {
    data: OutputData;
    onChange: (data: OutputData) => void;
    readOnly?: boolean;
}

interface EditorWrapperProps {
    mode: 'rw' | 'ro';
}

const EditorWrapper = styled('div')<EditorWrapperProps>(props => css`
  .ce-block__content,
  .ce-toolbar__content {
    max-width: none;
  }

  .ce-header {
    font-size: ${props.theme.typography.subtitle3.fontSize};
  }

  .ce-block__content {
    font-size: ${props.theme.typography.body2.fontSize};
    font-weight: ${props.theme.typography.body2.fontWeight};
  }

  .ce-toolbar__actions {
    padding-right: 16px;
  }

  .codex-editor {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    margin: 0 1rem;
  }

  .codex-editor__redactor {
    padding-bottom: 0 !important;
  }
`);


const Editor = ({ readOnly, data, onChange }: EditorProps) => {
    const holder = useId();
    const editor = useRef<EditorJS | null>(null);

    // This will run only once
    useEffect(() => {
        if (editor.current) {
            return;
        }

        editor.current = new EditorJS({
            holder: holder,
            data: data,
            logLevel: 'ERROR' as LogLevels,
            placeholder: '새로운 소식이나 나누고 싶은 이야기를 적어주세요',
            i18n: i18nKorean,
            onChange: async (api) => {
                let content = await api.saver.save();
                onChange(content);
            },
            readOnly,
            tools: EDITOR_JS_TOOLS,
        });

        return () => {
            if (editor.current?.destroy) {
                editor.current?.destroy();
            }
        };
    }, []);

    return <EditorWrapper id={holder} mode={readOnly ? 'ro' : 'rw'} />;
};

export default Editor;