import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Row, Column, Box } from './Flex';

import 'styled-components/macro';

const DropZone = ({ setFileParams }) => {
  let fileReader = null;

  const handleFile = e => {
    const content = fileReader.result;
    console.log('file content', content);
    // You can set content in state and show it in render.
    window.fileData = content;
  };

  const handleChangeFile = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFile;
    fileReader.readAsBinaryString(file);
  };

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    setFileParams(file);
    handleChangeFile(file);

    console.log(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Row centered>
        <Box
          css={`
            flex: 0 0 100px;
            background: #eee;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          `}
        >
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </Box>
      </Row>
    </div>
  );
};

export default DropZone;
