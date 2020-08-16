import styled from 'styled-components';

export const CenterLayoutStyle = styled.div`
  max-width: ${props => (props.width === undefined ? '90%' : props.width)};
  margin: auto;
  overflow: hidden;

  @media screen and (min-width: 1172px) {
    max-width: ${props => (props.width === undefined ? '1172px' : props.width)};
  }
`;
