import styled from "styled-components";

export const SideBarUI = styled('ul')`
  li {
    list-style-type: none;
    padding: 4px;

    &.selected {
      background-color: var(--sidebar-color);
      padding: 4px 6px;
    }
  }
`