import { OutputData } from '@editorjs/editorjs';
import { useState } from 'react';

const DEFAULT_INITIAL_DATA = () => {
    return {
        'time': new Date().getTime(),
        'blocks': [],
    };
};

export const useEditorData = () => {
    const [data, setData] = useState<OutputData>(DEFAULT_INITIAL_DATA);

    return {
        data,
        onChangeData: setData,
    };
};
