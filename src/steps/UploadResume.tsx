import React, { useState } from 'react';

const UploadResume: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const selectedFile = event.dataTransfer.files && event.dataTransfer.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-md p-4 mb-4"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {file ? (
                <p>File selected: {file.name}</p>
            ) : (
                <>
                    <p>Drag and drop your resume here</p>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}  />
                </>
            )}
        </div>
    );
};

export default UploadResume;