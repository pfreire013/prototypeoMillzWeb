import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    flex-direction: column;
    height: auto;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex: 0.6;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    flex: 1;
    padding-top: 70px;
  }
`;

export const Video = styled.video`
    position: absolute;
    height: 100vh;
    background-size: contain;
    overflow: hidden;
    z-index: -1;
    width: 100vw;
    object-fit: cover;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    position: static;
      height: 100%;
      width: 100%;
      object-fit: cover;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex: 0.4;
  background-color: ${theme.color.primary};
  padding: 120px 60px 0px 60px;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    padding: 0px;
    min-height: 100vh;
  }

  h2 {
    font-size: 32px;
    color: ${theme.color.black};
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: ${theme.color.black};
    font-weight: 400;
    text-align: center;
  }

  iframe {
    height: 100%;
    width: 100%;
    margin-top: 20px;
    border: none;

    @media (max-width: ${theme.mediaQuery.landscape}) {
      padding: 0px;
      min-height: 100vh;
  }
  }
`;
