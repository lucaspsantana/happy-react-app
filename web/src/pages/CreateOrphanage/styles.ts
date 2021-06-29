import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;

  > form {
    width: 70rem;
    overflow: hidden;
    margin: 6.4rem auto;
    border-radius: 2rem;
    padding: 6.4rem 8rem;
    background-color: white;
    border: 1px solid var(--color-back-lines-in-white);

    > fieldset {
      border: 0;

      & + fieldset {
        margin-top: 8rem;
      }

      legend {
        width: 100%;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 3.4rem;
        color: #4D6F80;;

        margin-bottom: 4rem;
        padding-bottom: 2.4rem;
        border-bottom: 1px solid var(--color-back-lines-in-white);
      }
    }
  }
`;

export const InputBlock = styled.div`
  & + div {
    margin-top: 2.4rem;
  }

  > label {
    display: flex;
    color: #8FA7B3;
    margin-bottom: 0.8rem;
    line-height: 2.4rem;

    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-text-complement);
      margin-left: 2.4rem;
      line-height: 2.4rem;
    }
  }

  input,
  textarea {
    width: 100%;
    background-color:  #F5F8FA;
    border: 1px solid #A1E9C5;
    color: #5C8599;
    border-radius: 2rem;
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  textarea {
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
  }

  [type='file'] {
    visibility: hidden;
    display: none;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.6rem;

  > img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 2rem;
  }

  > label {
    width: 9.6rem;
    height: 9.6rem;
    cursor: pointer;
    border-radius: 2rem;
    background-color: #8FA7B3;
    border: 1px dashed var(--color-blue-dashed);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 6.4rem;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    color: var(--color-text-base);

    &.active {
      background-color: #39CC83;
      border: 1px solid var(--color-green);
      color: var(--color-green);
    }

    &:first-child {
      border-radius: 2rem 0 0 2rem;
    }

    &:last-child {
      border-radius: 0 2rem 2rem 0;
      /* border-left: 0; */
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 6.4rem;
  font-weight: 800;
  margin-top: 6.4rem;
  border-radius: 2rem;
  color: #FFFFFF;
  background:  #37C77F;
  opacity: 0.7;
  transition: opacity 250ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;
