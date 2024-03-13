import React, { useState } from 'react';
import { emojis } from './emojis.js';

const EmojiSearch = () => {
    const [filteredEmoji, setFilteredEmoji] = useState(emojis);

const handleChange = (event) => {
    const newEmoji = emojis.filter((emojis) =>
    emojis.keywords.includes(event.target.value),
    );
    setFilteredEmoji(newEmoji)
};
    return (
        <div>
            <input onChange={handleChange}></input>
            {filteredEmoji.map((emojis) => (
                <div>{emojis.symbol} {emojis.title}</div>
            ))}
        </div>
    );
}

export default EmojiSearch;
