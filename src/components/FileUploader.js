import React, { useState } from "react";
import axios from "axios";

const FileUploader = ({ setAnalysisResults }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                "https://fastapi-qynj.onrender.com", 
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            setAnalysisResults(response.data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Analyze</button>
        </div>
    );
};

export default FileUploader;
