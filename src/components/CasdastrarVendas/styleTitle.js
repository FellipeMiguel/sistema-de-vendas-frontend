import styled from 'styled-components'

const ListaTitle = styled.div `
  width: 100%;
  height: 51px;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 62px 17px 36px;

  >div {
    display: flex;
    gap: 50px;
  }

   div p {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: rgba(24, 28, 50, 0.5);
  }

  .itemsID {
    display: flex;
    gap: 50px;
  }

  .itemsData {
    display: flex;
    gap: 50px;
  }
`

export default ListaTitle