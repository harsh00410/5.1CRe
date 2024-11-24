import React from 'react';

const TagPostButton = () => (
    <div className="tag-post-container">
        <div className="tag">
            <h4>Tags</h4>
            <input 
                type="text" 
                placeholder="Please add tags" 
                aria-label="Add tags" 
            />
        </div>
        <div className="post-button">
            <button type="button">Post</button>
        </div>
    </div>
);

export default TagPostButton;
