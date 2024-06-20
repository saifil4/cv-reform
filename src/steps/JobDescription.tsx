import React, { useState } from 'react';

const JobDescription: React.FC = () => {
    const [jobDescription, setJobDescription] = useState('');

    const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJobDescription(event.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <textarea
                value={jobDescription}
                onChange={handleJobDescriptionChange}
                style={{ width: '50%', height: '300px' }}
                placeholder="Enter job description details..."
            />
        </div>
    );
};

export default JobDescription;