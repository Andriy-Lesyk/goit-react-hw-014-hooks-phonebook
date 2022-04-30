import styled from '@emotion/styled';

export const ImageGaller = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`
export const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`