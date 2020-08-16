import React from 'react';
import { UploadWrapper } from './style';
import { Upload } from 'antd';

function Index(props) {
  return (
    <UploadWrapper>
      <Upload {...props} accept=".png, .jpeg, .jpg">
        <div className={'component_upload_button'}>{props.text}</div>
      </Upload>
    </UploadWrapper>
  );
}

export default Index;
