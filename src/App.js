// App.js

import React from "react";
import FileUploader from "./FileUploader";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="app bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold text-purple-600 mb-4">File Toolkit</h1>
      <div className="file-dropper border-2 border-dashed border-purple-600 p-8 rounded-lg text-center">
        <FileUploader />
        <p className="text-sm text-purple-600">
          Drag & Drop Files Here or Click to Upload
        </p>
      </div>
    </div>
  );
}

export default App;
