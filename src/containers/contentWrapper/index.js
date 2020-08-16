import React from 'react';
import { ContenWrapperStyle } from './style';

function CenterLayout(props) {
  return (
    <ContenWrapperStyle className={'component_content_wrapper'}>
      {props.children}
    </ContenWrapperStyle>
  );
}

export default CenterLayout;
