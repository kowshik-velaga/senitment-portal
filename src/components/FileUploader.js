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
                "http://127.0.0.1:8000/analyze", // Update with your backend URL
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
