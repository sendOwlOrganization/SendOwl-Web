import { i18nKorean } from '@components/editorjs/i18n';
import { EDITOR_JS_TOOLS } from '@components/editorjs/plugins';
import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs';
import { alpha, css, styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import { useEffect, useId, useRef } from 'react';

interface EditorProps {
    data: OutputData;
    onChange?: (data: OutputData) => void;
    readOnly?: boolean;
}

interface EditorWrapperProps {
    mode: 'rw' | 'ro';
}

const EditorWrapper = styled('div')<EditorWrapperProps>(({ theme }) => css`
  .ce-header {
    font-size: ${theme.typography.subtitle3.fontSize};
  }

  .ce-block {
    &__content {
      font-size: ${theme.typography.body2.fontSize};
      font-weight: ${theme.typography.body2.fontWeight};
      max-width: none;
    }
  }

  .tc-wrap {
    --color-background: ${theme.palette.background.paper};
    --color-text-secondary: ${theme.palette.text.secondary};
    --color-border: ${theme.palette.gray[500]};
  }

  .ce-conversion-tool,
  .ce-popover__item {
    &--focused {
      background-color: ${alpha(theme.palette.primary.main, 0.15)} !important;
    }
  }

  .ce-conversion-tool__icon {
    background-color: transparent;
  }

  .ce-inline-tool-input {
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
  }

  .cdx-marker {
    background-color: ${alpha(theme.palette.primary.light, 0.3)};
    color: ${theme.palette.text.primary};
  }

  .ce-popover {
    background-color: ${theme.palette.background.paper};
    border: 1px solid ${theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black};

    &__overlay {
      backdrop-filter: blur(5px);
    }

    &__item {
      &-icon {
        background-color: ${theme.palette.background.paper};
        border: 1px solid ${theme.palette.mode === 'light'
                ? theme.palette.common.white
                : theme.palette.common.black};
      }

      &:hover {
        background-color: ${theme.palette.background.default};
      }
    }
  }

  .tc-toolbox {
    &__toggler {
      & > svg > rect {
        fill: ${theme.palette.background.paper};
      }
    }
  }

  .tc-popover {
    --color-border: ${theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black};
    --color-background: ${theme.palette.background.paper};
    --color-background-hover: ${theme.palette.background.default};

    &__item {
      &-icon {
        & > svg > path {
          fill: ${theme.palette.text.primary};
        }
      }
    }
  }

  .ce-toolbar {
    &__content {
      max-width: none;
    }

    &__settings-btn,
    &__plus {
      background-color: ${theme.palette.background.paper};
      color: ${theme.palette.text.primary};
      border: 1px solid ${theme.palette.mode === 'light'
              ? theme.palette.common.white
              : theme.palette.common.black};

      &:hover {
        background-color: ${theme.palette.background.default};
      }
    }

    &__actions {
      padding-right: 16px;
    }
  }

  .ce-settings {
    background-color: ${theme.palette.background.paper};
    color: ${theme.palette.text.primary};
    border: 1px solid ${theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black};

    &__button {
      color: ${theme.palette.text.primary};

      &:hover {
        background-color: ${theme.palette.background.default};
      }
    }
  }

  .cdx-settings-button {
    color: ${theme.palette.text.primary};
    border: 1px solid ${theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black};

    &--active {
      color: ${theme.palette.primary.main};
    }

    &:hover {
      background-color: ${theme.palette.background.default};
    }
  }

  .cdx-checklist {
    &__item {
      &-checkbox {
        background-color: transparent;
      }

      &--checked .cdx-checklist__item-checkbox {
        background-color: ${theme.palette.primary.main};
        border-color: ${theme.palette.primary.main};

        &:hover {
          background-color: ${theme.palette.primary.dark};
          border-color: ${theme.palette.primary.dark};
        }
      }
    }
  }

  .codex-editor {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    margin: 0 1rem;

    &__redactor {
      padding-bottom: 0 !important;
    }
  }


  .ce-conversion-toolbar,
  .ce-inline-toolbar {
    background-color: ${theme.palette.background.paper};
    border: 1px solid ${theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.common.black};
  }

  .ce-conversion-tool,
  .ce-inline-toolbar__dropdown,
  .ce-inline-tool {
    color: ${theme.palette.text.primary};

    &:hover {
      background-color: ${theme.palette.background.default};
    }
  }

  .ce-block--selected .ce-block__content {
    background-color: ${theme.palette.mode === 'light'
            ? MLAB_OPACITY_PALETTE.black[100]
            : MLAB_OPACITY_PALETTE.white[100]};
  }

  & *::selection {
    background-color: ${theme.palette.mode === 'light'
            ? MLAB_OPACITY_PALETTE.black[100]
            : MLAB_OPACITY_PALETTE.white[100]};
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
                if (!onChange) return;
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