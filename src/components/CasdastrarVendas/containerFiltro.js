import  styled  from "styled-components";

const ContainerFiltro = styled.div`
  width: 201px;
  height: 813px;
  background: #C6C6C6;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 188px;
    height: 175px;
    background: #EEEEEE;
    border-radius: 20px 20px 0px 0px;
    margin-top: 18px;
    padding:15px;
  }

  .contentTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contentTitle h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #181C32;
  }

  .contentTitle img:hover {
    cursor: pointer;
  }

  .content {
    overflow: scroll;
    padding: 0.5rem 0 0.8rem  0;
  }

  .content input {
    margin-right: 6px;
  }

  .content label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #181C32;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #181C32;
    border-radius: 0px 0px 20px 20px;
    height: 35px;
    width: 188px;
    margin-top: -30px;
  }

  button p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
    
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 99999px;
      border-radius: 9999px;
      background: #797B86; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
`

export default ContainerFiltro