import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: inline-block;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  .button__text {
    color: var(--white-two);
    font-weight: bold;
    cursor: pointer;
    padding: 5px 30px;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: #3824ab;
  }
  .button__loading {
    height: 20px;
    vertical-align: middle;
  }
  .button__text.disabled {
    cursor: auto;
    background-image: none;
  }
`;
