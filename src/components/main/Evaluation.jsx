import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export const Evaluation = () => {
    const [like, setLike] = useState(JSON.parse(localStorage.getItem('like')) || false);
    const [dislike, setDislike] = useState(JSON.parse(localStorage.getItem('dislike')) || false);

    useEffect(() => {
        localStorage.setItem('like', JSON.stringify(like));
        localStorage.setItem('dislike', JSON.stringify(dislike));
    }, [like, dislike]);

    const handleLike = () => {
        setLike(true);
        setDislike(false);
    };

    const handleDislike = () => {
        setLike(false);
        setDislike(true);
    };

    return (
        <div className='evaluation'>
            <p>¿Este artículo te sirvió de algo?</p>
            {/* like and dislike icon buttons */}
            <div className='evaluation-buttons'>
                <IconButton onClick={handleLike} color={like ? 'primary' : 'default'}>
                    <ThumbUpIcon />
                </IconButton>
                <IconButton onClick={handleDislike} color={dislike ? 'primary' : 'default'}>
                    <ThumbDownIcon />
                </IconButton>
            </div>
        </div>
    );
}
