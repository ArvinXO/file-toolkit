import React, { useState } from "react";
import FileUploader from "./FileUploader";

const FileConverter = () => {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [convertFromType, setConvertFromType] = useState("image");
  const [convertToType, setConvertToType] = useState("jpeg");

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleConvertFromChange = (event) => {
    setConvertFromType(event.target.value);
  };

  const handleConvertToChange = (event) => {
    setConvertToType(event.target.value);
  };

  const swapConversion = () => {
    const temp = convertFromType;
    setConvertFromType(convertToType);
    setConvertToType(temp);
  };

  const convertToJPEG = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertToPNG = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertToGIF = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertToPDF = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertToMP3 = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertToMP4 = () => {
    // Conversion logic...
    const convertedFileURL = URL.createObjectURL(convertedFile);
    setConvertedFile(convertedFileURL);
  };

  const convertFile = () => {
    if (convertFromType === "image" && convertToType === "jpeg") {
      convertToJPEG();
    } else if (convertFromType === "image" && convertToType === "png") {
      convertToPNG();
    } else if (convertFromType === "image" && convertToType === "gif") {
      convertToGIF();
    } else if (convertFromType === "document" && convertToType === "pdf") {
      convertToPDF();
    } else if (convertFromType === "audio" && convertToType === "mp3") {
      convertToMP3();
    } else if (convertFromType === "video" && convertToType === "mp4") {
      convertToMP4();
    }
    // Add more conditions for other conversions
  };

  return (
    <div>
      <h2>File Converter</h2>
      <FileUploader onFileChange={handleFileChange} />
      {file && (
        <div>
          <div>
            <label htmlFor="convertFrom">Convert from:</label>
            <select
              id="convertFrom"
              value={convertFromType}
              onChange={handleConvertFromChange}
            >
              <option value="image">Image</option>
              <option value="document">Document</option>
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>
          <div>
            <label htmlFor="convertTo">Convert to:</label>
            <select
              id="convertTo"
              value={convertToType}
              onChange={handleConvertToChange}
            >
              <option value="jpeg">JPEG</option>
              <option value="png">PNG</option>
              <option value="gif">GIF</option>
              <option value="pdf">PDF</option>
              <option value="mp3">MP3</option>
              <option value="mp4">MP4</option>
            </select>
          </div>
          <button onClick={swapConversion}>Swap Conversion</button>
          <button onClick={convertFile}>Convert</button>
          {convertedFile && (
            <div>
              <p>Converted file:</p>
              <a href={convertedFile} download="converted">
                Download
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileConverter;
