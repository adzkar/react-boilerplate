import React, { useState } from 'react';
import { ContentWrapper } from '../../containers';
import { CenterLayout, Button, FreeSpace, ClickOut } from '../../components';
import IMAGE from '../../assets/img';
// import queryString from 'query-string';

function Index(props) {
  // const params = queryString.parse(props.location.search);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickOutSide, setIsClickOutSide] = useState(false);

  return (
    <ContentWrapper>
      <CenterLayout>
        <FreeSpace />
        <ClickOut onClickOutside={() => setIsClickOutSide(curr => !curr)}>
          <Button text="Hola" onClick={() => setIsClicked(curr => !curr)} />
          {isClicked && <h1>Clicked</h1>}
          <img src={IMAGE.avatar} alt="imgae" />
        </ClickOut>
      </CenterLayout>
      {isClickOutSide && <h1>Outside</h1>}
    </ContentWrapper>
  );
}

export default Index;
