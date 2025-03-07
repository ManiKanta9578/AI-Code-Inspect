"use client"

import React from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import Loader from './Loader';

const Review = ({ review,isGenerating }) => {

    return (
        <div className='h-full w-6/12 relative'>
            {isGenerating ? <Loader /> :
                <MarkdownPreview source={review} style={{ padding: 16 }} />
            }
        </div>
    )
}

export default Review