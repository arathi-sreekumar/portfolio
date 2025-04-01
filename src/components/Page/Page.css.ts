import styled from "styled-components";

export const PageUI = styled('div')`
  display:flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--max-width);
  background: var(--white-800);
  margin: 0 auto;
  padding: 40px;
  overflow-x: hidden;
  position: relative;
  transition: margin 700ms;

  .has-sidebar {
    padding-left: 40px;
    margin-left: 0;
    transition: margin 700ms;
  }

  @media (min-width: 800px) {
    .open ~ .has-sidebar {
      margin-left: var(--sidebar-width);
      transition: margin 700ms;
    }
  }
`