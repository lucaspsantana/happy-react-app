import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  padding: 3.2rem 2.4rem;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 10%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 4.8rem;
  }

  > footer {
    a,
    button {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 1.6rem;
      background-color: #12AFCB;
      transition: background-color 250ms;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--color-blue-hover);
      }
    }
  }
`;
