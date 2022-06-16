import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs';
import { css, styled } from '@mui/material';
import { useEffect, useId, useRef } from 'react';
import { i18nKorean } from './i18n';
import { EDITOR_JS_TOOLS } from './plugins';


const DEFAULT_INITIAL_DATA = () => {
    return {
        'time': new Date().getTime(),
        'blocks': [
            {
                id: '12iM3lqzcm',
                type: 'paragraph',
                data: {
                    text:
                        'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
                },
            },
        ],
    };
};

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

  .ce-toolbar__actions {
    padding-right: 16px;
  }

  .codex-editor {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    padding: 0 10px;
    ${props.mode === 'rw' && css`
      border: solid 1px ${props.theme.palette.grey.A400};

      :hover {
        border: solid 1px ${props.theme.palette.grey.A700};
      }
    `}

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
            placeholder: '글을 작성 해보세요!',
            i18n: i18nKorean,
            onChange: async (api) => {
                let content = await api.saver.save();
                onChange(content);
            },
            readOnly,
            autofocus: true,
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