import styled from "styled-components"

const HeaderContainer = styled.header`
  align-items: center;
  background: #18243A;
  display: flex;
  height: 4.5rem;
  justify-content: center;
  width: 100%;

  > div{
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .iconsMenu {
    display: flex;
    gap : 2rem;
  }

  .iconsMenu img:hover {
    cursor: pointer;
  }
`;

export default HeaderContainer