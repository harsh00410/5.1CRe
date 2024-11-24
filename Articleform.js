import React from 'react';

const ArticleForm = () => (
    <div className="article-form-container">
        <div className="article-body">
            <section className="article-abstract">
                <h4>Abstract</h4>
                <textarea 
                    placeholder="Abstract" 
                />
            </section>
            <section className="article-text">
                <h4>Article Text</h4>
                <textarea 
                    placeholder="Enter the article content here..." 
                />
            </section>
        </div>
    </div>
);

export default ArticleForm;
