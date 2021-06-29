import styled, { css } from 'styled-components';

interface IOpeningDetails {
  openOnWeekends: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;

  > div {
    width: 70rem;
    margin: 6.4rem auto;
    background: white;
    border: 1px solid var(--color-back-lines-in-white);
    border-radius: 2rem;
    overflow: hidden;

    > img {
      width: 100%;
      height: 30rem;
      object-fit: cover;
    }
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 1.6rem;
  margin: 1.6rem 4rem 0;

  button {
    height: 8.8rem;
    border-radius: 2rem;
    overflow: hidden;
    opacity: 0.6;

    &.active {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 8.8rem;
      object-fit: cover;
    }
  }
`;

export const OrphanageDetails = styled.div`
  padding: 8rem;

  h1 {
    font-size: 5.4rem;
    line-height: 5.4rem;
    color: #4D6F80;
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: #5C8599;
  }

  p {
    line-height: 2.8rem;
    color: #5C8599;
    margin-top: 2.4rem;

    &:first-of-type {
      margin-bottom: 6.4rem;
    }

    &:last-of-type {
      margin-bottom: 2.4rem;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    margin: 6.4rem 0;
    background: #5C8599;
  }
`;

export const OpeningDetails = styled.section<IOpeningDetails>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  margin-top: 2.4rem;

  > div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;

    &:first-child {
      background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);;
      border: 1px solid #B3DAE2;
      color: #5C8599;
      box-sizing: border-box;
      border-radius: 20px;
    }

    &:last-child {
      background: linear-gradient(154.16deg, #EDFFF6 7.85%, #ffffff 91.03%);
      border: 1px solid #A1E9C5;
      color: #37C77F;
    }

    ${props =>
      !props.openOnWeekends &&
      css`
        &:last-child {
          background: linear-gradient(154.16deg, #FDF0F5 8.13%, #ffffff 91.03%);
          border: 1px solid #FFBCD04;
          color: #FF669D;
        }
      `}

    > svg {
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  height: 6.4rem;
  font-weight: 800;
  margin-top: 6.4rem;
  border-radius: 20px;
  border: none; 
  color: #FFFFFF;
  background-color: #37C77F;
  transition: background-color 250ms;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    background-color: #3EE08F;
  }
`;
