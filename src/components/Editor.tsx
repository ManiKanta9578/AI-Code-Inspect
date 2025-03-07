"use client";
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


const Editor = ({ handleGenerateReview }) => {

    const [code, setCode] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setCode(val);
    }, []);

    return (
        <div className='h-full w-6/12 relative'>
            <button
                className=' w-max absolute cursor-pointer bottom-3 right-3 z-50 bg-green-500 p-2 rounded hover:bg-green-700 active:translate-y-1 disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed'
                onClick={() => handleGenerateReview(code)}
            >
                Generate Review
            </button>
            <CodeMirror
                minHeight='100vh'
                value={code}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
        </div>
    )
}

export default Editor