import styled from "styled-components"

const SidebarContainer = styled.div`
  height: 92.5vh;
  width: 282px;
  background: #EDEDED;

  > h2 {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #878B8D;
    text-align: center;
    padding: 3.65rem 4rem 1rem 0;
  }

   .sidebarList {
    height: auto;
    width: 100%;
  }

  .sidebarList .row {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(135, 139, 141, 0.3);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sidebarList .row:hover {
    cursor: pointer;
    color: #0988A8;
  }

  .sidebarList #active {
    color: #0988A8;
  }

  .row #icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }

  .row #title {
    flex: 70%;
  }
  
`

export default SidebarContainer