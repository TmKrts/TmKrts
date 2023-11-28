'use client';

import { useState } from 'react'

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handeClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handeClick}>Like({likes})</button>
}