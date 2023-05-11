import styled from 'styled-components'

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 9999;

  > .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: 60%;
    height: 65%;
    background-color: #18243A;
    border-radius: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 8px 0 8px;
  }

  .modal div h2 {
    padding: 24px 0 24px 32px;
  }

  .modalBody {
    background: #FFFFFF;
    height: 75%;
  }

  .modalFooter {
    background: #F3F3F3;
    border-radius: 0px 0px 5px 5px;
    height: 15%;
    margin-bottom: 8px;
    position: relative;
  }

  .modalBtns{
    display: flex;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 50%;
    right: 32px;
  }

  .btnCancel {
    padding: 6px 12px;
    width: 91px;
    height: 30px;
    background: #B6B6B6;
    border-radius: 3.75px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #18243A;
  }

  .btnAdd {
    padding: 6px 12px;
    width: 91px;
    height: 30px;
    background: #18243A;
    border-radius: 3.75px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E6E7E8;
  }

  .form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap:1rem;
    flex-wrap: wrap;
    padding: 32px;
    width: 100%;
    border: 1px solid red;
  }

  .form div {
    display: flex;
    flex-direction: column;
  }

  .form label {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #181C32;
  }

  .form input {
    background: #FFFFFF;
    border: 0.75px solid #C1C2C2;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    padding: 0.5rem;
  }
`

export default ModalStyle