import React from 'react';

const QuestionForm = ({ title = "Describe your problem", placeholder = "Enter your question here..." }) => (
    <div className="question-form-container">
        <div className="question-body">
            <h4>{title}</h4>
            <textarea 
                type="text" 
                name="describe"
                placeholder={placeholder}
            />
        </div>
    </div>
);

export default QuestionForm;
