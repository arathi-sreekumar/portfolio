import styled from "styled-components";

export const LayoutUI = styled('div')`
  background: var(--white-800);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`

export const SideBarUI = styled('div')`
  width: var(--sidebar-width);
  min-height: 100vh;
  height: 100%;
  border-right: 3px solid var(--sidebar-color);
  transition: .7s;
  position: absolute;
  
  &.closed {
    transform: translateX(var(--sidebar-width-and-padding));
  }
`

export const SideBarToggleUI = styled('button')`
  position: absolute;
  z-index: 1;
  border: 4px solid $white;
  outline: none;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: var(--sidebar-color);
  cursor: pointer;
  transition: .5s;

  &.open {
    border-radius: 4px 0 0 4px;
    left: -40px;
    transition: .5s;
  }

  &.closed {
    border-radius: 4px;
    left: 100%;
    transition: .5s;
  }
  
  .icon {
    font-size: 1.5rem;
    color: $white;
  }
`