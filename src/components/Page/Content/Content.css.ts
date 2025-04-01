import styled from "styled-components";

export const ContentUI = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.two-column {
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &.home {
    @media (max-width: 900px) {
      display: block;

      img {
        float: right;
        display: block;
        width: auto;
        height: auto;
        max-width: 200px;
        margin-left: 30px;
        margin-bottom: 20px;
      } 
    }

    @media (max-width: 480px) {
      img {
        float: none;
        margin: 0 auto 20px;
      }
    }
  }

  &.home h1 {
    font-family: Montserrat;
  }

  li {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ::marker {
    color: var(--yellow-600);
    font-size: 18px;
  }
`

export const ColumnUI = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  &.home {
    padding: 50px;
    line-height: 1.8em;

    @media (max-width: 900px) {
      padding: 20px;
      display: block;
    }

    @media (max-width: 640px) {
      padding: 0;
    }

    h1 {
      margin-bottom: 50px;
    }
  }
`