import styled from 'styled-components'

const PerfilBodyStyle = styled.section`
  padding: 32px 30px;

  > div {
    display: flex;
    justify-content: space-between;
  } 

   div h1 {
    font-weight: 700;
    font-size: 34.7586px;
    line-height: 120%;
    letter-spacing: 1.10857px;
    color: #181C32;
  }

  form {
    display:flex;
    flex-wrap: wrap;
    gap: 30px 73px;
    position: relative;
  }

  form div {
    display: flex;
    flex-direction: column;
    gap: 6.65px;
  }

  label {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #181C32;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    width: 415px;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px solid #C1C2C2;
    border-radius: 8px;
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    width: 415px;
    height: 48px;
    background: #FFFFFF;
    border: 0.75px solid #C1C2C2;
    border-radius: 8px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  

  option {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 6px;
    width: 159px;
    height: 30px;
    background: #18243A;
    border-radius: 3.75px;
    border: none;
    position: absolute;
    bottom: -100px;
    left: 0;
  }

  button p{
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
    letter-spacing: 0.409423px;
    color: #E6E7E8;
  }
`

export default PerfilBodyStyle