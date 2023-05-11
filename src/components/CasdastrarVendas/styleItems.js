import styled from 'styled-components'

const ListaItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 9px 13px 7px 16px;
  border-bottom: 1px solid rgba(135, 139, 141, 0.3);

  > .items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
  }

  .items div p {
    font-weight: 700;
    font-size: 12px;
    line-height: 17px;
    color: rgba(24, 28, 50, 0.5);
  }

  .itemsID {
    display: flex;
    gap: 50px;
  }

  .name {
    margin-left: 80px;
  }

  .itemsData {
    display: flex;
    gap: 30px;
  }

  button {
    border: none;
  }
`

export default ListaItems